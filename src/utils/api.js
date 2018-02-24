import { HOST_API } from '../config/config';
import { authHeader } from './auth-header';

export const fetchApiData = (endpoint) => {
    if (endpoint) {
        return fetch(`${HOST_API}${endpoint}`, {
            headers: authHeader(),     
        })
            .then(response => {
                if (response.ok) return response.json();

                // parse api error
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                // request failed, but there may be a payload
                return response.json().then(data => {
                    const errorMsg = data.message || response.statusText;

                    return Promise.reject({
                        status: response.status,
                        statusText: errorMsg,
                    });
                });
                } else {
                // request failed, and there is no json payload
                // reject with default values from response
                return Promise.reject({
                    status: response.status,
                    statusText: response.messageError,
                });
                }
            })
            .catch(error => {
                return Promise.reject(new Error(error.statusText || error.message));                
            });
    }
    return Promise.reject(new Error('No endpoint was provided.'));    
}


export const postApiData = (endpoint, data) => {
    if (endpoint) {
        return fetch(`${HOST_API}${endpoint}`, {
            method: 'post',
            headers: authHeader(),            
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                // parse api error
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                // request failed, but there may be a payload
                return response.json().then(data => {
                    const errorMsg = data.errorMessage || data.message || response.statusText;

                    return Promise.reject({
                        status: response.status,
                        statusText: errorMsg,
                    });
                });
                } else {
                // request failed, and there is no json payload
                // reject with default values from response
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                });
                }
            })
            .catch(error => {
                return Promise.reject(new Error(error.errorMessage || error.statusText || error.message));                
            });
    }
    return Promise.reject(new Error('No endpoint was provided.'));    
}

export const putApiData = (endpoint, data) => {
    if (endpoint) {
        return fetch(`${HOST_API}${endpoint}`, {
            method: 'put',
            headers: authHeader(),            
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                // parse api error
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) {
                // request failed, but there may be a payload
                return response.json().then(data => {
                    const errorMsg = data.errorMessage || data.message || response.statusText;

                    return Promise.reject({
                        status: response.status,
                        statusText: errorMsg,
                    });
                });
                } else {
                // request failed, and there is no json payload
                // reject with default values from response
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                });
                }
            })
            .catch(error => {
                return Promise.reject(new Error(error.errorMessage || error.statusText || error.message));                
            });
    }
    return Promise.reject(new Error('No endpoint was provided.'));    
}

