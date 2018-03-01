import React from 'react';
import Theory from '../theories/Theory';
import Aux from '../../utils/Aux';
import {Link} from 'react-router-dom';

const userInfo = (props) => {
    const {username, theories, liked} = props && props.user;

    const theoriesList = theories && theories.length ?
        theories.slice(0).reverse().map((theory, i) => {
            return <Theory 
                        content={theory.content} 
                        upvotes={theory.upvotes} 
                        key={i} />
        }) :
        <p>You haven't added any theories yet, <Link to="/add-theory">why don't you start here?</Link></p>

    const likedList = liked && liked.length ?
        liked.slice(0).reverse().map((like, i) => {            
            return <Theory 
                        content={like.content} 
                        upvotes={like.upvotes} 
                        theoryId={like._id} 
                        key={i} />
        }) :
        <p>No liked theories so far, <Link to="/theories">go ahead and show some love</Link></p>

    return (
        <Aux>
            <h1>{username}</h1>
            <h3>My theories:</h3>
            {theoriesList}
            <h3>Liked theories:</h3>
            {likedList}
            <p style={{'color': '#1f00ef'}}>TODO: Make liked and mine a filter, don't show both</p>
        </Aux>
    );
}

export default userInfo;