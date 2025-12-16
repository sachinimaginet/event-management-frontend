// CommonJS copy of date utilities for tests
function cleanDateString(dateString) {
  if (!dateString) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return dateString;
  if (dateString.includes('T')) return dateString.split('T')[0];
  try {
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  } catch (e) {
    // ignore
  }
  return '';
}

function formatTimeForInput(dateTimeString) {
  if (!dateTimeString) return '';
  const timePart = dateTimeString.split('T')[1];
  if (!timePart) return '';
  return timePart.substring(0, 5);
}

function combineDateAndTime(dateString, timeString = '00:00') {
  if (!dateString) return '';
  const cleanDate = cleanDateString(dateString);
  const timeWithSeconds = timeString.includes(':')
    ? (timeString.length === 5 ? `${timeString}:00` : timeString)
    : '00:00:00';
  return `${cleanDate}T${timeWithSeconds}`;
}

module.exports = {
  cleanDateString,
  formatTimeForInput,
  combineDateAndTime
}
