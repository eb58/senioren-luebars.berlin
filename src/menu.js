const header = document.querySelector('.site-header');
const button = header?.querySelector('.menu-toggle');
const navigation = header?.querySelector('.main-navigation');

const setOpen = open => {
  button?.classList.toggle('is-open', open);
  navigation?.classList.toggle('is-open', open);
  button?.setAttribute('aria-expanded', String(open));
  button?.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
};

button?.addEventListener('click', () => setOpen(!button.classList.contains('is-open')));
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) setOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setOpen(false);
});
document.addEventListener('pointerdown', event => {
  if (!header?.contains(event.target)) setOpen(false);
});
