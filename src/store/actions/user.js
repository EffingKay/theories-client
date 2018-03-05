import {fetchApiData, putApiData} from '../../utils/api';
import * as actionTypes from '../../config/actionTypes';

export const userRequest = () => ({
    type: actionTypes.USER_REQUEST
});

export const userSuccess = (data) => ({
    type: actionTypes.USER_SUCCESS,
    data
});

export const userFailure = (error) => ({
    type: actionTypes.USER_FAILURE,
    error
});

export const fetchUser = (id) => (dispatch, getState) => {
    dispatch(userRequest());

    return fetchApiData(`/users/${id}`)
        .then(response => {
            dispatch(userSuccess(response));
        })
        .catch(error => {
            dispatch(userFailure(error));
        });
}

export const updateUser = (id, data) => (dispatch, getState) => {
    dispatch(userRequest());

    return putApiData(`/users/${id}`, data)
        .then( response => {
            dispatch(userSuccess(response));            
        })
        .catch(error => {
            dispatch(userFailure(error));
        })
}