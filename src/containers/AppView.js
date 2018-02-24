import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from '../utils/PrivateRoute';
import Aux from '../utils/Aux';
import App from '../components/App';
import Homepage from '../components/pages/Homepage';
import TheoriesView from './theories/TheoriesView';
import LoginFormView from './forms/LoginFormView';

class AppView extends Component {
    render() {
        return (
            <BrowserRouter basename='/'>
                <Aux>
                    <App />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/' component={Homepage} />
                            <Route path='/theories' component={TheoriesView} />
                            <Route path='/login' component={LoginFormView} />
                            <PrivateRoute path='/new-theory' component={Homepage} />
                            <Redirect from='*' to="/" />
                        </Switch>
                    </div>
                </Aux>
            </BrowserRouter>
        )
    }
}

export default AppView;