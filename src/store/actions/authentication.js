import * as actionTypes from '../../config/actionTypes';
import { authentication } from '../../utils/authentication';
import { fetchUser } from './user';

export const registerRequest = (user) => ({
    type: actionTypes.REGISTER_REQUEST,
    user
});

export const registerSuccess = (user) => ({
    type: actionTypes.REGISTER_SUCCESS,
    user
});

export const registerFailure = (error) => ({
    type: actionTypes.REGISTER_FAILURE,
    error: error.message
});

export const loginRequest = (user) => ({
    type: actionTypes.LOGIN_REQUEST,
    user
});

export const loginSuccess = (user) => ({
    type: actionTypes.LOGIN_SUCCESS,
    user
});

export const loginFailure = (error) => ({
    type: actionTypes.LOGIN_FAILURE,
    error : error.message
});


export const register = (username, password, passwordConfirmation) => {
    return dispatch => {
        dispatch(registerRequest({username}));
        authentication.register(username, password, passwordConfirmation)
            .then(user => {
                dispatch(fetchUser(user.user._id))                                
                dispatch(registerSuccess(user));
            })
            .catch(err => {
                dispatch(registerFailure(err));
            })
    }
}

export const login = (username, password) => {
    return dispatch => {
        dispatch(loginRequest({ username }));
        authentication.login(username, password)
            .then(user => {
                dispatch(fetchUser(user.user._id))                
                dispatch(loginSuccess(user));                
            })
            .catch(err => {
                dispatch(loginFailure(err));
            })
    }
}

export const logout = () => {
    authentication.logout();
    return { type: actionTypes.LOGOUT };
}

export const authFailureReset = () => ({
    type: actionTypes.FAILURE_ERROR_RESET
})