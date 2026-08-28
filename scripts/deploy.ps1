param(
    [string] $Server = "56759440.ssh.w1.strato.hosting",
    [string] $User = "stu512072182",
    [int] $Port = 22,
    [string] $Webroot = "Seniorenclub",
    [string] $AppPath = "website",
    [switch] $SkipBuild,
    [switch] $SkipUpload,
    [switch] $NoClean,
    [switch] $UploadRootHtaccess,
    [switch] $CleanLegacyRoot,
    [string[]] $Keep = @("mitgliederverwaltung", "gratulationsdienst", "terminfinder", ".htaccess", ".well-known", "logs", "stats")
)

$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$buildDir = Join-Path $projectRoot "dist\client"
$deployDir = Join-Path $projectRoot ".deploy"
$htaccessTemplate = Join-Path $projectRoot "server\htaccess-webroot.txt"
$archiveName = "senioren-luebars-site.tar.gz"
$archive = Join-Path $deployDir $archiveName
$sshOpt = "-o UpdateHostKeys=no"
$remoteApp = "${Webroot}/${AppPath}"
# Projekte und Serverdateien, die beim Aufraeumen des Webroots bleiben muessen.
$rootKeep = @($AppPath) + ($Keep | ForEach-Object { $_ -split ',' } | Where-Object { $_ })

if (-not $SkipBuild) {
    Write-Host "Baue Website..." -ForegroundColor Cyan
    Push-Location $projectRoot
    try {
        npm.cmd run build
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Build fehlgeschlagen." -ForegroundColor Red
            exit 1
        }
    } finally {
        Pop-Location
    }
}

if (!(Test-Path $buildDir)) {
    throw "Build-Ausgabe fehlt: $buildDir - bitte zuerst 'npm run build' ausfuehren."
}

Write-Host "Packe Deploy-Paket..." -ForegroundColor Cyan
if (!(Test-Path $deployDir)) { New-Item -ItemType Directory -Path $deployDir | Out-Null }
if (Test-Path $archive) { Remove-Item -LiteralPath $archive -Force }
# Ein Archiv statt "scp -r": der Build enthaelt ueber hundert Dateien, einzeln
# uebertragen dauert das um ein Vielfaches laenger.
# Windows-eigenes bsdtar gezielt ansprechen: liegt ein MSYS-/Git-tar im PATH,
# deutet das den Laufwerksbuchstaben als Remote-Host ("Cannot connect to C:").
$tar = Join-Path (Join-Path $env:SystemRoot 'System32') 'tar.exe'
if (!(Test-Path $tar)) { $tar = "tar.exe" }
& $tar -czf $archive -C $buildDir .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Paket konnte nicht erstellt werden." -ForegroundColor Red
    exit 1
}
$sizeMb = [math]::Round((Get-Item $archive).Length / 1MB, 1)
Write-Host "Paket: $archive ($sizeMb MB)" -ForegroundColor DarkGray

if ($SkipUpload) {
    Write-Host "Upload uebersprungen. Paket liegt in $deployDir" -ForegroundColor Yellow
    exit 0
}

Write-Host "Ziel: ${User}@${Server}:${remoteApp}" -ForegroundColor DarkGray

if ($NoClean) {
    ssh -p $Port $sshOpt "${User}@${Server}" "mkdir -p '${remoteApp}'"
} else {
    Write-Host "Leere ${remoteApp}..." -ForegroundColor Cyan
    # Nur das Website-Verzeichnis wird geleert; die anderen Projekte im Webroot
    # sind davon nicht beruehrt.
    ssh -p $Port $sshOpt "${User}@${Server}" "mkdir -p '${remoteApp}' && find '${remoteApp}' -mindepth 1 -maxdepth 1 -exec rm -rf -- {} \;"
}
if ($LASTEXITCODE -ne 0) {
    Write-Host "Zielverzeichnis konnte nicht vorbereitet werden." -ForegroundColor Red
    exit 1
}

Write-Host "Lade Website hoch..." -ForegroundColor Cyan
scp -P $Port $sshOpt $archive "${User}@${Server}:${remoteApp}/${archiveName}"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Upload fehlgeschlagen." -ForegroundColor Red
    exit 1
}

Write-Host "Entpacke auf dem Server..." -ForegroundColor Cyan
ssh -p $Port $sshOpt "${User}@${Server}" "cd '${remoteApp}' && tar -xzf '${archiveName}' && rm -f '${archiveName}'"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Entpacken fehlgeschlagen. Archiv liegt noch in ${remoteApp}/${archiveName}." -ForegroundColor Red
    exit 1
}

if ($UploadRootHtaccess) {
    Write-Host "Aktualisiere Root-.htaccess..." -ForegroundColor Cyan
    scp -P $Port $sshOpt $htaccessTemplate "${User}@${Server}:${Webroot}/.htaccess"
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Root-.htaccess konnte nicht hochgeladen werden." -ForegroundColor Red
        exit 1
    }
}

if ($CleanLegacyRoot) {
    # Einmalig nach dem Umzug: Reste der frueheren Installation direkt im Webroot.
    #
    # Bewusst eine Positivliste statt "alles ausser ...": geloescht wird nur, was
    # dieser Build selbst erzeugt, also fruehere Kopien der eigenen Dateien.
    # Fremde Verzeichnisse wie mitgliederverwaltung koennen so nicht getroffen
    # werden - auch dann nicht, wenn eine Ausnahmeliste falsch uebergeben wurde.
    $legacyNames = Get-ChildItem -Force -Path $buildDir | Select-Object -ExpandProperty Name |
        Where-Object { $_ -ne $AppPath -and $rootKeep -notcontains $_ }

    if (-not $legacyNames) {
        Write-Host "Keine Altdateien zum Aufraeumen gefunden." -ForegroundColor Yellow
    } else {
        Write-Host "Raeume Webroot auf (loesche $($legacyNames.Count) Eintraege der frueheren Installation)..." -ForegroundColor Cyan
        $targets = ($legacyNames | ForEach-Object { "'${Webroot}/$_'" }) -join " "
        ssh -p $Port $sshOpt "${User}@${Server}" "for t in $targets; do if [ -e \"`$t\" ]; then echo \"geloescht: `$t\"; rm -rf -- \"`$t\"; fi; done"
        if ($LASTEXITCODE -ne 0) {
            Write-Host "Webroot konnte nicht aufgeraeumt werden." -ForegroundColor Red
            exit 1
        }
    }
}

Write-Host "Setze Dateirechte..." -ForegroundColor Cyan
ssh -p $Port $sshOpt "${User}@${Server}" "find '${remoteApp}' -type d -exec chmod 755 {} \; && find '${remoteApp}' -type f -exec chmod 644 {} \;"
if ($LASTEXITCODE -ne 0) {
    Write-Host "Dateirechte konnten nicht gesetzt werden." -ForegroundColor Red
    exit 1
}

Write-Host "Fertig! https://senioren-luebars.berlin/" -ForegroundColor Green
