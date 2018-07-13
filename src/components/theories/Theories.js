import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../utils/Aux';
import TheoryView from '../../containers/theories/TheoryView';
import Sansa from '../../assets/images/03.png';
import Brienne from '../../assets/images/04.png';
import Jamie from '../../assets/images/05.png';

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
    : (
        <div className="loader--heads">
            {/* <div><img className="loader--head" src={Sansa} /></div>
            <div><img className="loader--head" src={Jamie} /></div> */}
            <div><img className="loader--head" src={Brienne} /></div>
        </div>
    );
    
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