import { CREATE_ERROR, DELETE_ERROR, EXPIRED_TOKEN_CODE } from '../constants/error';
import { expiredToken } from './auth';

export const handleErrors = (error, lastAction) => (dispatch, getState) => {
  if (error.response) {
    let errorMessage = '';
    const errorCode = error.response.data.code;

    if (errorCode === EXPIRED_TOKEN_CODE) {
      dispatch(expiredToken());
    } else {
      errorMessage = error.response.data.message || error.response.data.error;
      errorMessage = `${errorMessage} [${error.response.data.code}]`;
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