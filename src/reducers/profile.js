import { LOAD_PROFILE_SUCCESS } from '../constants/profile';

const initialState = {
  profile: null,
  documents: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        profile: action.profile,
        documents: action.documents
      };
    default:
      return state;
  }
}

export default profileReducer;