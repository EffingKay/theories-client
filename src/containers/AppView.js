import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import PrivateRoute from '../utils/PrivateRoute';
import Aux from '../utils/Aux';
import App from '../components/App';
import TheoriesView from './theories/TheoriesView';
import LoginFormView from './authentications/LoginFormView';
import RegisterFormView from './authentications/RegisterFormView';
import TheoryNewView from './theories/TheoryNewView';
import UserView from './users/UserView';
import { fetchUser } from '../store/actions/user';
import { logout } from '../store/actions/authentication';
import { connect } from 'react-redux';

class AppView extends Component {
    componentDidMount() {
        let userId = Cookies.get('userId');
        if (userId) this.props.fetchUser(userId);
    }

    render() {
        const {logout, loggedIn} = this.props;
        return (
            <BrowserRouter basename='/'>
                <Aux>
                    <App logout={logout} loggedIn={loggedIn} />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={TheoriesView} />
                            <Route path='/login' component={LoginFormView} />
                            <Route path='/register' component={RegisterFormView} />
                            <PrivateRoute path='/add-theory' component={TheoryNewView} />
                            <PrivateRoute path='/profile' component={UserView} />
                            <Redirect from='*' to="/" />
                        </Switch>
                    </div>
                </Aux>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentication.loggedIn,    
});

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        logout: () => dispatch(logout()),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);

AppView.propTypes = {
    loggedIn: PropTypes.bool,
    fetchUser: PropTypes.func,
    logout: PropTypes.func
}