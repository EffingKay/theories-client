import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    const {loggedIn, logout} = props; 
    return (
        <span className="top-contact">
            <a href="#">twitter</a>
            <Link to="info-and-legal">about</Link>
        </span>
    );
}

export default Contact;