import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';

const App = (props) => (
  <div className="App">
    <Header 
      logout={props.logout}
      loggedIn={props.loggedIn}  
    />
  </div>
)

export default App;

App.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
}