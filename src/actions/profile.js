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
                      .get('http://localhost:9999/profile.json', {
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const profile = response.data.data.profile;
              dispatch(loadProfileSuccess(profile));
            });
  };
}