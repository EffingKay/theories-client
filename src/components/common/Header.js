import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
    const {loggedIn, logout} = props; 
    return (
        <header className='App-header'>
            <h1 className='App-title navigation--link'><Link to='/'>GOTHEORY</Link></h1>
            <nav>
                <ul className='navigation--link-list'>
                    <li className='navigation--link'>
                        <Link to='/theories'>theories</Link>
                    </li>
                    {loggedIn ?
                    <li className='navigation--link'>
                        <Link to='/add-theory'>add theory</Link>
                    </li> :
                    null}
                    <li className='navigation--link'>
                        {!loggedIn ? 
                        <Link to='/login'>join</Link> : 
                        <button onClick={logout}>Logout</button> }
                    </li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;

Header.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}