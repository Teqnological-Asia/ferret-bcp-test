import moment from 'moment';
import pathToRegexp from 'path-to-regexp';

export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validatePassword(password) {
  return /^[a-z0-9@#$%&?!_-]+$/i.test(password);
}

export function formatCurrency(number) {
  if (number != null) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(date) {
  if (date) return moment(date).format('YYYY/M/D');
}

export function formatTime(date) {
  if (date) return moment(date).format('HH:mm');
}

export function formatDateTime(date) {
  if (date) return moment(date).format('YYYY/M/D HH:mm');
}

export function matchPath(patterns, path) {
  let result = false;

  for (let pattern of patterns) {
    if (pathToRegexp(pattern).exec(path)) {
      result = true;
      break;
    }
  }

  return result;
}