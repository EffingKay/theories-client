import {postApiData} from './api';
import Cookies from 'js-cookie';

function register(username, password, passwordConfirmation) {
    const registerDetails = { username, password, passwordConfirmation }
    return postApiData('/register', registerDetails).then(user => {
        if (user && user.token) {
            Cookies.set('token', user.token);
            Cookies.set('userId', user.user._id);
        }
        return user;
    });
}

function login(username, password) {
    const loginDetails = { username, password }
    return postApiData('/login', loginDetails).then(user => {
        if (user && user.token) {
            Cookies.set('token', user.token);
            Cookies.set('userId', user.user._id);            
        } 
        return user;
    });
}

function logout() {
    Cookies.remove('token');
    Cookies.remove('userId');
}

export  const authentication = {
    register,
    login,
    logout
}