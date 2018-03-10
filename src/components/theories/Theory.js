import React from 'react';
import PropTypes from 'prop-types';

const Theory = (props) => {
    let likesText;
    if (props.upvotes === 0) {
        likesText = ':('
    } else if (props.upvotes === 1) {
        likesText = 'like'
    } else {
        likesText = 'likes'
    }

    return (
        <div className="theory--container">
        <p>{props.content}</p>
        <p className="theory--likes">
            {props.upvotes ? props.upvotes : null} {likesText} 
            { props.loggedIn ? 
            <button className="theory--likes-button" onClick={props.likeHandler}>
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