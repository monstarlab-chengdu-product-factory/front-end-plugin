/**
 * format utils
 */

export function formatDate(date) {
  const now = new Date(date);
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now
    .toISOString()
    .split('.')[0]
    .replace('T', ' ');
}
