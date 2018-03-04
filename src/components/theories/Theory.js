import React from 'react';
import PropTypes from 'prop-types';

const Theory = (props) => {
    const clickHandler = () => {
        props.likeHandler();
    }

    return (
        <div className="theory--container">
        <p>{props.content}</p>
        <p className="theory--likes">
            {props.upvotes} likes 
            { props.loggedIn ? 
            <button className="theory--likes-button" onClick={clickHandler}>
                {props.liked ? 'betray' : 'like'}
            </button> :
            null }
        </p>
        </div>
    );
}

export default Theory;

Theory.propTypes = {
    content: PropTypes.string,
    upvotes: PropTypes.number,
    liked: PropTypes.bool,
}