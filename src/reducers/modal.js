import { CREATE_MODAL, DELETE_MODAL } from '../constants/modal';

const initialState = {
  modal: null
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MODAL:
      return {
        modal: action.modal
      };
    case DELETE_MODAL:
      return {
        modal: null
      }
    default:
      return state;
  }
}

export default modalReducer;