import Cookies from 'js-cookie';

export function authHeader() {
    // return authorization header with jwt token
    let token = Cookies.get('token');
 
    if (token) {
        return { 
            'Authorization': 'Bearer ' + token,
            'Content-Type' : 'application/json',       
        };
    } else {
        return { 'Content-Type' : 'application/json' };
    }
}