import React from 'react';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    return (
        <span className="top-contact">
            <a href="https://twitter.com/got__theory" target="_blank" rel="noopener noreferrer">Follow @got__theory</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            <Link to="info-and-legal">about</Link>
        </span>
    );
}

export default Contact;