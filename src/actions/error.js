import { CREATE_ERROR, DELETE_ERROR, INVALID_TOKEN_CODE } from '../constants/error';
import { invalidToken } from './auth';

export const handleErrors = (error, lastAction) => (dispatch, getState) => {
  if (error.response) {
    let errorMessage = '';
    const errorCode = error.response.data.code;

    if (errorCode === INVALID_TOKEN_CODE) {
      dispatch(invalidToken());
    } else {
      errorMessage = error.response.data.message || error.response.data.error;
      errorMessage = errorCode ? `${errorMessage} [${error.response.data.code}]` : errorMessage;
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