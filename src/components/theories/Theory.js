import React from 'react';
import PropTypes from 'prop-types';

const Theory = (props) => {
    const clickHandler = () => {
        console.log('clicked');
    }

    return (
        <div className="theory--container">
        <p>{props.content}</p>
        <p className="theory--likes">
            {props.upvotes} likes 
            <button className="theory--likes-button" onClick={clickHandler}>
                like
            </button>
        </p>
        </div>
    );
}

export default Theory;

Theory.propTypes = {
    content: PropTypes.string,
    upvotes: PropTypes.number,
}