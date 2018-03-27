import { LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE } from '../constants/profile';

const initialState = {
  profile: null,
  error: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        profile: action.profile,
        error: null
      };
    case LOAD_PROFILE_FAILURE:
      return {
        profile: null,
        error: action.error
      }
    default:
      return state;
  }
}

export default profileReducer;