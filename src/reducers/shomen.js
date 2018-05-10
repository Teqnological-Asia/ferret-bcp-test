import { LOAD_PROFILE_DOCUMENT_SUCCESS } from '../constants/shomen';

const initialState = {
  documents: null
};

export const shomenReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_DOCUMENT_SUCCESS:
      return {
        documents: action.documents
      };
    default:
      return state;
  }
}

export default shomenReducer;
