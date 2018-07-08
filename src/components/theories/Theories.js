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
            updateUsersLiked={props.updateUsersLiked} /> )
    : <img className="loader--head" src="https://media.vanityfair.com/photos/595673b12ee85d681bad48ef/master/w_300,c_limit/08.png" />;
    return (
        <Aux>
            <h1>Share your theories with us.<br/>
            The less likely, the better.</h1>
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