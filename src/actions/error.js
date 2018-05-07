import { CREATE_ERROR, DELETE_ERROR, INVALID_TOKEN_CODE } from '../constants/error';
import { invalidToken } from './auth';
import { isTokenExpired } from '../utils';

export const handleErrors = (error, lastAction) => (dispatch, getState) => {
  if (error.response) {
    let errorMessage = '';
    const errorCode = error.response.data.code;
    const errorMsg = error.response.data.message;

    if (errorCode === INVALID_TOKEN_CODE && isTokenExpired()) {
      dispatch(invalidToken());
    } else {
      errorMessage = errorCode ? `${errorMsg} [${error.response.data.code}]` : errorMsg;
      dispatch(createError(errorMessage));
    }
  }
}

export const createError = (error) => {
  return {
    type: CREATE_ERROR,
    error
  }
}

export const deleteError = () => {
  return {
    type: DELETE_ERROR
  }
}
