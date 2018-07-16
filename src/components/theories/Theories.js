import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../utils/Aux';
import TheoryView from '../../containers/theories/TheoryView';
import Brienne from '../../assets/images/04.png';

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
            <div><img className="loader--head" src={Brienne} alt="loader" /></div>
        </div>
    );

    let popularTheoriesSorted = (props.theories) ? Object.keys(props.theories).sort(function(a,b){return props.theories[b].upvotes-props.theories[a].upvotes}) : [];
    
    let popularTheoriesArray = (popularTheoriesSorted.map(key => props.theories[key]));
    
    let popularTheories = popularTheoriesArray.map(key => {
        return <TheoryView 
                    key={key._id}
                    content={key.content}
                    upvotes={key.upvotes} 
                    theoryId={key._id} 
                    loggedIn={props.loggedIn} 
                    updateUsersLiked={props.updateUsersLiked} /> 
    });
        
    return (
        <Aux>
            <h1>GoT final season predictions?<br/>
            The less likely, the better.</h1>
            <button className="theories-buttons" onClick={() => props.showPopular(false)}>newest</button>
            <button className="theories-buttons" onClick={() => props.showPopular(true)}>most popular</button>
            {props.showNewest ? theories : popularTheories}
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