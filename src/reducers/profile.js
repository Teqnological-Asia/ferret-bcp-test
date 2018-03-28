import { LOAD_PROFILE_SUCCESS } from '../constants/profile';

const initialState = {
  profile: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE_SUCCESS:
      return {
        profile: action.profile
      };
    default:
      return state;
  }
}

export default profileReducer;