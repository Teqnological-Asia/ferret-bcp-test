import axios from 'axios';
import { LOAD_PROFILE_SUCCESS } from '../constants/profile';
import { getAuthHeader } from './auth';

export const loadProfileSuccess = (profile) => {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile
  }
}

export const loadProfileRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const profile = response.data.data.profile;
              dispatch(loadProfileSuccess(profile));
            });
  };
}