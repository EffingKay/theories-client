import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../utils/Aux';
import Theory from './Theory';

const Theories = (props) => {
    const theories = props.theories
    ? Object.keys(props.theories).map(key => 
        <Theory 
            key={key}
            content={props.theories[key].content}
            upvotes={props.theories[key].upvotes} 
            theoryId={props.theories[key]._id} /> )
    : <h4>Fetching, fetching, fetching, always fetching... </h4>;
    return (
        <Aux>
            <h1>All theories, YAY</h1>
            {theories}
        </Aux>
    )
}

export default Theories;

Theories.propTypes = {
    theories: PropTypes.objectOf(PropTypes.object)
}