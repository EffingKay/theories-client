import * as actionTypes from '../../config/actionTypes';

let loggedIn = !!JSON.parse(localStorage.getItem('user'));
const defaultState = { 
    loggedIn: loggedIn,
    error: undefined 
};

const authentication = (state = defaultState, action) => {
    switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
        return {
            loggedIn: false,
            error: undefined
        }
    case actionTypes.REGISTER_SUCCESS: 
        return {
            loggedIn: true,
            error: undefined
        } 
    case actionTypes.REGISTER_FAILURE:
        return {
            loggedIn: false,            
            error: action.error
        }
    case actionTypes.LOGIN_REQUEST: 
        return {
            loggedIn: false,
            error: undefined
        }
    case actionTypes.LOGIN_SUCCESS:
        return {
            loggedIn: true,
            error: undefined
        }
    case actionTypes.LOGIN_FAILURE:
        return {
            loggedIn: false,            
            error: action.error
        }
    case actionTypes.LOGOUT:
        return {
            loggedIn: false,
            error: undefined
        }
    case actionTypes.FAILURE_ERROR_RESET:
        return {
            error: undefined
        }
    default:
        return state;
    }
}

export default authentication;