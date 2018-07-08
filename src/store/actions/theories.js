import {fetchApiData, postApiData, putApiData} from '../../utils/api';
import * as actionTypes from '../../config/actionTypes';

export const theoriesRequest = () => ({
    type: actionTypes.THEORIES_REQUEST
});

export const theoriesSuccess = (data) => ({
    type: actionTypes.THEORIES_SUCCESS,
    data
});

export const theoriesFailure = (error) => ({
    type: actionTypes.THEORIES_FAILURE,
    error
});

export const theoryPostSucces = (data) => ({
    type: actionTypes.THEORIES_POST_SUCCESS,
    data
});

export const theorypostFailure = (error) => ({
    type: actionTypes.THEORIES_POST_FAILURE,
    error
});

export const fetchTheories = () => (dispatch, getState) => {
    dispatch(theoriesRequest());

    return fetchApiData('/theories')
        .then(response => {
            dispatch(theoriesSuccess(response));
        })
        .catch(error => {
            dispatch(theoriesFailure(error));
        });
}

export const postTheory = (data) => (dispatch, getState) => {
    dispatch(theoriesRequest());

    return postApiData('/theories', data)
    .then(response => {
        dispatch(theoryPostSucces(response));
    })
    .catch(error => {
        dispatch(theorypostFailure(error));
    })
}

export const updateTheory = (id, data) => (dispatch, getState) => {
    dispatch(theoriesRequest());

    return putApiData(`/theories/${id}`, data)
        .then(response => {
            dispatch(theoryPostSucces(response));
        })
        .catch(error => {
            dispatch(theorypostFailure(error));
        })
}