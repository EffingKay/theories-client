import * as actionTypes from '../../config/actionTypes';

const defaultState = {
    data: undefined,
    error: undefined,
    isLoading: false
}

const user = (state = defaultState, action) => {
    switch(action.type) {
    case actionTypes.USER_REQUEST:
        return {
            ...state,
            error: undefined,
            isLoading: true
        }
    case actionTypes.USER_SUCCESS:
        const data = { ...action.data};
        return {
            ...state,
            data,
            error: undefined,
            isLoading: false,
        };
    case actionTypes.USER_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    default:
        return state;
    }
}

export default user;