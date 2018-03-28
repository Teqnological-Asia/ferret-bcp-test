import { CREATE_ERROR, DELETE_ERROR } from '../constants/error';

export const handleErrors = (error, lastAction) => (dispatch, getState) => {
  let errorMessage = '';
  if (error.response) {
    errorMessage = error.response.data.message || error.response.data.error;
  }
  dispatch(createError(errorMessage));
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