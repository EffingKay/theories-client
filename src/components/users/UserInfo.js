import React from 'react';
import TheoryView from '../../containers/theories/TheoryView';
import Aux from '../../utils/Aux';
import {Link} from 'react-router-dom';

const userInfo = (props) => {
    const {theories, liked} = props && props.user;

    const theoriesList = theories && theories.length ?
        theories.slice(0).reverse().map((theory, i) => {
            return <TheoryView 
                        content={theory.content} 
                        upvotes={theory.upvotes} 
                        theoryId={theory._id}
                        // loggedIn={true}                        
                        key={i} 
                    />
        }) :
        <p>You haven't added any theories yet, <Link to="/add-theory">why don't you start here?</Link></p>

    const likedList = liked && liked.length ?
        liked.slice(0).map((like, i) => {            
            return <TheoryView
                        content={like.content} 
                        upvotes={like.upvotes} 
                        theoryId={like._id} 
                        // loggedIn={true}
                        key={i} />
        }) :
        <p>No liked theories so far, <Link to="/theories">go ahead and show some love</Link></p>

    return (
        <Aux>
            <h3>My theories:</h3>
            {theoriesList}
            <h3>Liked theories:</h3>
            {likedList}
        </Aux>
    );
}

export default userInfo;