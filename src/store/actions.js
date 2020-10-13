import actionTypes from './actionTypes';

export function login(user) {
    return { type: actionTypes.UPDATE_AUTH, user: user };
}

export function logout() {
    return dispatch => {
        dispatch({ type: actionTypes.CLEAN_AUTH });
        dispatch({ type: actionTypes.CLEAN_MAIN });
    };
}