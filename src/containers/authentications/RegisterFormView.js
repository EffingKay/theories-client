import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../../components/authentications/RegisterForm';
import Aux from '../../utils/Aux';
import {connect} from 'react-redux';
import {register, authFailureReset} from '../../store/actions/authentication';
import {Link, withRouter} from 'react-router-dom';

class RegisterFormView extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        authError: undefined
    }

    componentWillReceiveProps(nextProps) {
        this.setState({authError: nextProps.authError})
    }

    componentDidMount() {
        if (this.props.authError) this.props.errorReset();
    }

    render () {  
        const {register, authError} = this.props;  
        const redirect = () => this.props.history.push('/theories');    
        const submitHandler = (e) => {
            e.preventDefault();
            if (!this.state.username) this.setState({...this.state, authError: 'Username required'});
            this.props.register(this.state.username, this.state.password, this.state.passwordConfirmation);   
            setTimeout(() => {
                if (!this.state.authError) redirect();
            }, 200);             
        }

        const changeUsernameHandler = (e) => {
            const newValue = e.target.value;
            return this.setState({...this.state, username: newValue});
        }

        const changePasswordHandler = (e) => {
            const newValue = e.target.value;
            return this.setState({...this.state, password: newValue});
        }

        const changePasswordConfirmationHandler = (e) => {
            const newValue = e.target.value;
            return this.setState({...this.state, passwordConfirmation: newValue});
        }

        return (
            <Aux>
                {authError ? <h2 className="auth-error">{authError}</h2> : null}
                <h1>Register</h1>
                <RegisterForm 
                    register={register}
                    submitHandler={submitHandler}
                    changeUsernameHandler={changeUsernameHandler}
                    changePasswordHandler={changePasswordHandler}
                    changePasswordConfirmationHandler={changePasswordConfirmationHandler}
                />
                <p>Already a memeber? <Link to="/login">Sign in here.</Link></p>
            </Aux>
        );
    }
}

const mapStateToProps = state => ({
    authError: state.authentication.error,
});

const mapDispatchToProps = dispatch => {
    return {
        register: (username, password, passwordConfirmation) => dispatch(register(username, password, passwordConfirmation)),
        errorReset: () => dispatch(authFailureReset())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterFormView));

RegisterFormView.propTypes = {
    authError: PropTypes.string,
    register: PropTypes.func.isRequired,
    errorReset: PropTypes.func
}