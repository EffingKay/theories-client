import React from 'react';
import PropTypes from 'prop-types';

const Theory = (props) => (
    <div className="theory--container">
    <p>{props.content}</p>
    <p>{props.upvotes} likes</p>
    </div>
);

export default Theory;

Theory.propTypes = {
    content: PropTypes.string,
    upvotes: PropTypes.number,
}