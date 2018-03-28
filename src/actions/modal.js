import { CREATE_MODAL, DELETE_MODAL } from '../constants/modal';

export const createModal = (modal) => {
  return {
    type: CREATE_MODAL,
    modal
  }
}

export const deleteModal = () => {
  return {
    type: DELETE_MODAL
  }
}