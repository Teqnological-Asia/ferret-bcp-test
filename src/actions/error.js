import { CREATE_ERROR, DELETE_ERROR } from '../constants/error';

export const handleErrors = (e, lastAction) => (dispatch, getState) => {
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