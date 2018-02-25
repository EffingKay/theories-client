import React from 'react';
import PropTypes from 'prop-types';

const RegisterForm = (props) => (
    <form onSubmit={(e) => { props.submitHandler(e) }}>
        <label>Username</label>
        <input type="text" onChange={ (e) => {props.changeUsernameHandler(e)} }/>
        <label>Password</label>
        <input type="password" onChange={ (e) => {props.changePasswordHandler(e)} }/>
        <label>Password Confirmation</label>
        <input type="password" onChange={ (e) => {props.changePasswordConfirmationHandler(e)} }/>
        <input type="submit" value="Submit" />
    </form>
)

export default RegisterForm;

RegisterForm.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    changeUsernameHandler: PropTypes.func.isRequired,
    changePasswordHandler: PropTypes.func.isRequired,
    changePasswordConfirmationHandler: PropTypes.func.isRequired
}