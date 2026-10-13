const recurringScheduleItems = document.querySelectorAll('[data-weekday][data-weeks-of-month]');

const startOfCurrentWeek = new Date();
startOfCurrentWeek.setHours(12, 0, 0, 0);
const mondayOffset = (startOfCurrentWeek.getDay() + 6) % 7;
startOfCurrentWeek.setDate(startOfCurrentWeek.getDate() - mondayOffset);

for (const item of recurringScheduleItems) {
  const weekday = Number(item.dataset.weekday);
  const occurrenceDate = new Date(startOfCurrentWeek);
  occurrenceDate.setDate(startOfCurrentWeek.getDate() + weekday - 1);

  const occurrenceInMonth = Math.ceil(occurrenceDate.getDate() / 7);
  const scheduledOccurrences = item.dataset.weeksOfMonth.split(/\s+/).map(Number);

  if (!scheduledOccurrences.includes(occurrenceInMonth)) continue;

  item.classList.add('is-this-week');
  const badge = document.createElement('small');
  badge.className = 'schedule-current-badge';
  badge.textContent = 'Diese Woche';
  item.querySelector('span')?.append(badge);
}
