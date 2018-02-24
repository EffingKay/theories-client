import {postApiData} from './api';

function register(username, password, passwordConfirmation) {
    const registerDetails = { username, password, passwordConfirmation }
    return postApiData('/register', registerDetails).then(user => {
        if (user && user.token) localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}

function login(username, password) {
    const loginDetails = { username, password }
    return postApiData('/login', loginDetails).then(user => {
        if (user && user.token) localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}

function logout() {
    localStorage.removeItem('user');
}

export  const authentication = {
    register,
    login,
    logout
}