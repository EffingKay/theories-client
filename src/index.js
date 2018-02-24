import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppView from './containers/AppView';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store/index';

ReactDOM.render(<Provider store={store}><AppView /></Provider>, document.getElementById('root'));
registerServiceWorker();
