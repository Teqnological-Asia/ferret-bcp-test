import moment from 'moment';

export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validatePassword(password) {
  return /^[a-z0-9@#$%&?!_-]+$/i.test(password);
}

export function formatNumber(number) {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(date) {
  if (date) return moment(date).format('YYYY/M/D');
}
