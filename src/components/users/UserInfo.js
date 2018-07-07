import React from 'react';
import TheoryView from '../../containers/theories/TheoryView';
import Aux from '../../utils/Aux';
import {Link} from 'react-router-dom';

const userInfo = (props) => {
    const {user: {theories, liked}, showLiked}  = props;

    const theoriesList = theories && theories.length ?
        theories.slice(0).reverse().map((theory, i) => {
            return <TheoryView 
                        content={theory.content} 
                        upvotes={theory.upvotes} 
                        theoryId={theory._id}
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
                        key={i} />
        }) :
        <p>No liked theories so far, <Link to="/theories">go ahead and show some love</Link></p>

    const content = !showLiked ? theoriesList : likedList;
    return (
        <Aux>
            {/* <h3>{showLiked ? 'Liked' : 'My'} theories:</h3> */}
            { content }
        </Aux>
    );
}

export default userInfo;