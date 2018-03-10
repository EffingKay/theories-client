import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../utils/Aux';
import TheoryView from '../../containers/theories/TheoryView';

const Theories = (props) => {
    const theories = props.theories
    ? Object.keys(props.theories).map(key => 
        <TheoryView 
            key={key}
            content={props.theories[key].content}
            upvotes={props.theories[key].upvotes} 
            theoryId={props.theories[key]._id} 
            loggedIn={props.loggedIn} 
            likeHandler={props.likeHandler} /> )
    : <h4>Fetching, fetching, fetching, always fetching... </h4>;
    return (
        <Aux>
            <h1>What others are saying</h1>
            {theories}
        </Aux>
    )
}

export default Theories;

Theories.propTypes = {
    theories: PropTypes.objectOf(PropTypes.shape({
        key: PropTypes.number,
        content: PropTypes.string,
        upvotes: PropTypes.number,
        theoryId: PropTypes.string
    }))
}