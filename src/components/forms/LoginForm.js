import React from 'react';

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

        <input type="submit" value="Login" />
    </form>
)

export default LoginForm;