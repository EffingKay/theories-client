import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import theories from './reducers/theories';
import user from './reducers/user';
import authentication from './reducers/authentication';

const middlewares = [ReduxThunk];

if (process.env.NODE_ENV !== `production`) {
    const { createLogger } = require('redux-logger');
    
    middlewares.push(createLogger({ collapsed: true }));
  }

export const store = createStore(
    combineReducers({ theories, user, authentication }),
    applyMiddleware(...middlewares)    
);