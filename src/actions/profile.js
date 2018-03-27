import axios from 'axios';
import { LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE } from '../constants/profile';

export const loadProfileSuccess = (profile) => {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile
  }
}

export const loadProfileFailure = (error) => {
  return {
    type: LOAD_PROFILE_FAILURE,
    error
  }
}

export const loadProfileRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get('http://localhost:9999/profile.json', {
                      });

    return request
            .then((response) => {
              const profile = response.data.data.profile;
              dispatch(loadProfileSuccess(profile));
            })
            .catch(error => {
              let errorMessage = '';
              if (error.response) {
                errorMessage = error.response.data.message;
              }
              dispatch(loadProfileFailure(errorMessage));
            });
  };
}