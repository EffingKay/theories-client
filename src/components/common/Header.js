import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const randomHeadNumber = Math.floor(Math.random() * Math.floor(6)) + 1;
const randomHead = require(`../../assets/images/0${randomHeadNumber}.png`);

const Header = (props) => {
    const {loggedIn, logout} = props; 
    return (
        <header className='App-header'>
            <h1 className='App-title navigation--link'>
            
            <Link to='/'>GOTHEORY</Link>
            <img 
                className='App-title navigation--image' 
                alt='title--danny'
                src={randomHead} />
            </h1>
            <nav>
                <ul className='navigation--link-list'>
                    {loggedIn ?
                    <li className='navigation--link'>
                        <Link to='/add-theory'>add theory</Link>
                    </li> :
                    null}
                    {loggedIn ?
                    <li className='navigation--link'>
                        <Link to='/profile'>profile</Link>
                    </li> :
                    null}
                    <li className='navigation--link'>
                        {!loggedIn ? 
                        <Link to='/login'>join / sign in</Link> : 
                        <a href="#" onClick={logout}>Logout</a> }
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