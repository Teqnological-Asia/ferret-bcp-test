import { CREATE_ERROR, DELETE_ERROR } from '../constants/error';
import { invalidToken } from './auth';
import { isTokenExpired } from '../utils';
import { setLoading } from '../actions/loading';

export const handleErrors = (error, lastAction) => (dispatch, getState) => {
  if (error.response) {
    let errorMessage = '';
    const errorCode = error.response.data.code;
    const errorMsg = error.response.data.message;

    dispatch(setLoading(false))
    if (isTokenExpired()) {
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
