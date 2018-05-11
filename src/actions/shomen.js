import axios from 'axios';
import { LOAD_PROFILE_DOCUMENT_SUCCESS } from '../constants/shomen';
import { getAuthHeader } from './auth';

export const loadProfileDocumentSuccess = (documents) => {
  return {
    type: LOAD_PROFILE_DOCUMENT_SUCCESS,
    documents
  }
}

export const loadProfileDocumentRequest = (params) => {
  return dispatch => {
    const request = axios
                      .get(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/profile`, {
                        headers: getAuthHeader()
                      });

    return request
            .then((response) => {
              const documents = response.data.data.documents;
              dispatch(loadProfileDocumentSuccess(documents));
            });
  };
}

export const lbxConfirmRequest = (codes) => {
  return dispatch => {
    const request = axios
                      .post(`${process.env.REACT_APP_USER_INFORMATION_API_HOST}/lbx/confirm`,
                        {
                          code: codes
                        },
                        {
                          headers: getAuthHeader()
                        });
    return request.then((response) => {
    });
  }
}
