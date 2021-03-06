import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../../components/authentications/LoginForm';
import Aux from '../../utils/Aux';
import {connect} from 'react-redux';
import {login, authFailureReset} from '../../store/actions/authentication';
import {Link, withRouter} from 'react-router-dom';

class LoginFormView extends Component {
    state = {
        username: undefined,
        password: undefined,
        authError: undefined
    }

    componentWillReceiveProps(nextProps) {
        this.setState({authError: nextProps.authError})
    }

    componentDidMount() {
        if (this.props.authError) this.props.errorReset();
    }

    render () {  
        const {login, authError} = this.props;  
        const redirect = () => this.props.history.push('/theories');        
        const submitHandler = e => {
            e.preventDefault();
            login(this.state.username, this.state.password);
            setTimeout(() => {
                if (!this.state.authError) redirect();
            }, 150);
        }

        const changeUsernameHandler = (e) => {
            const newValue = e.target.value;
            return this.setState({...this.state, username: newValue});
        }

        const changePasswordHandler = (e) => {
            const newValue = e.target.value;
            return this.setState({...this.state, password: newValue});
        } 

        return (
            <Aux>
                {authError ? <h2 className="auth-error">{authError}</h2> : null}
                <h1>Sign in </h1>
                <LoginForm 
                    submitHandler={submitHandler}
                    changeUsernameHandler={changeUsernameHandler}
                    changePasswordHandler={changePasswordHandler}
                />
                <p>Not yet registered? <Link to="/register">Sign up here.</Link></p>
            </Aux>
        );
    }
}

const mapStateToProps = state => ({
    authError: state.authentication.error,
});

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password)),
        errorReset: () => dispatch(authFailureReset())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginFormView));

LoginFormView.propTypes = {
    authError: PropTypes.string,
    login: PropTypes.func.isRequired,
    errorReset: PropTypes.func
}