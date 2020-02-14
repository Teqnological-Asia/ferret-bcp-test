import moment from 'moment';
import pathToRegexp from 'path-to-regexp';

export function validateEmail(email) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
}

export function validatePassword(password) {
  return /^[a-z0-9@#$%&?!_-]+$/i.test(password);
}

export function validateIntegerNumber(number) {
  return /^\d+$/.test(number);
}

export function validateNumber(number) {
  return !isNaN(number) && number >= 0;
}

export function formatCurrency(number, maxFraction = 4) {
  if (number != null) {
    const roundNumber = parseInt(parseFloat(number) * (10 ** maxFraction), 10) / (10 ** maxFraction)
    return roundNumber.toLocaleString('ja-JP', {
      maximumFractionDigits: maxFraction
    })
  }

  return '-';
}

export function formatDate(date) {
  if (date) return moment(date).format('YYYY/MM/D');
}

export function formatTime(date) {
  if (date) return moment(date).format('HH:mm');
}

export function formatDateTime(date) {
  if (date) return moment(date).format('YYYY/MM/D HH:mm');
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

export function getToken() {
  return sessionStorage.getItem('token');
}

export function isTokenExpired() {
  const token = sessionStorage.getItem('token').split(".");
  const jsonStr = atob(token[1]);
  const jsonObj = JSON.parse(jsonStr);
  const expTime = jsonObj.exp;
  const curTime = new Date().getTime() / 1000;
  
  return curTime > expTime;
}

export function removeElementFromArray(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
}

export function handleMinMaxCondition(value, min, max) {
  if (isNaN(value)) {
    return 0
  } else if (value < min) {
    return min
  } else if (value > max) {
    return max
  } else {
    return value
  }
}

export const sumMarginReducer = (accumulator, currentPosition) => accumulator + currentPosition.trade_quantity;

//remove array square brackets
export const removeArrSB = arr => {
  return {...arr[0]}
}

