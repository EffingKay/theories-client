import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => (
    <form onSubmit={(e) => {props.submitHandler(e)} }>
        <label htmlFor="login--username">Username</label>
        <input 
            type="text" 
            name="username" 
            id="login--username" 
            onChange={(e) => {props.changeUsernameHandler(e)} }
        />

        <label htmlFor="login--password">Password</label>
        <input 
            type="password" 
            name="password" 
            id="login--password" 
            onChange={(e) => {props.changePasswordHandler(e)} }
        />

        <button type="submit" className="auth-button">LOGIN</button>
    </form>
)

export default LoginForm;

LoginForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    changeUsernameHandler: PropTypes.func.isRequired,
    changePasswordHandler: PropTypes.func.isRequired
}