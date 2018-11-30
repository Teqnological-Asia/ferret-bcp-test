import axios from 'axios';
import { LOAD_PROFILE_SUCCESS } from '../constants/profile';
import { getAuthHeader } from './auth';
import { loadPublicNotificationsRequest } from '../actions/publicNotification';
import { loadPrivateNotificationsRequest } from '../actions/privateNotification';
import { setLoading } from '../actions/loading';

export const loadProfileSuccess = (profile, documents) => {
  return {
    type: LOAD_PROFILE_SUCCESS,
    profile,
    documents
  }
}

export const loadProfileRequest = (params) => {
  return dispatch => {
    dispatch(setLoading(true))
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const profile = response.data.data.profile;
              const documents = response.data.data.documents;
              dispatch(loadProfileSuccess(profile, documents));
              dispatch(loadPublicNotificationsRequest());
              dispatch(loadPrivateNotificationsRequest());
              dispatch(setLoading(false))
            });
  };
}
