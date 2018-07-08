import * as actionTypes from '../../config/actionTypes';

const defaultState = {
    data: undefined,
    error: undefined,
    isLoading: false
}

const theories = (state = defaultState, action) => {
    switch(action.type) {
    case actionTypes.THEORIES_REQUEST:
        return {
            ...state,
            error: undefined,
            isLoading: true
        }
    case actionTypes.THEORIES_SUCCESS:
        const data = { ...action.data};
        return {
            ...state,
            data,
            error: undefined,
            isLoading: false,
        };
    case actionTypes.THEORIES_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    case actionTypes.THEORIES_POST_SUCCESS:
        return {
            ...state,
            data,
            error: undefined,
            isLoading: false,
        };
    case actionTypes.THEORIES_POST_FAILURE:
        return {
            ...state,
            isLoading: false,
            error: action.error
        }
    default:
        return state;
    }
}

export default theories;