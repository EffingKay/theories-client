import React from 'react';
import PropTypes from 'prop-types';

const Theory = (props) => {
    let likesText;
    if (props.upvotes === 0) {
        likesText = ':('
    } else if (props.upvotes === 1) {
        likesText = 'like'
    } else {
        likesText = 'likes'
    }
    const twitterUrl = props.content.length < 200 ?
        `https://twitter.com/intent/tweet?&text=${props.content}&via=effingkay` :
        `https://twitter.com/intent/tweet?&text=${props.content.slice(0, 200)}...&via=effingkay`;
    const twitterButton = <a 
        className="twitter" 
        href={twitterUrl}
        target="_blank" 
        title="Tweet" 
        onClick={() => {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${props.content.slice(0, 200)}... via @EffingKay`));
            return false;
        }}>
            <img alt="Tweet" src="https://cdn2.iconfinder.com/data/icons/social-media-outline-1/32/twitter_social_media_online-512.png" />
        </a>
    

    return (
        <div className="theory--container">
            <p>{props.content}</p>
            <p className="theory--likes">
                {props.upvotes ? props.upvotes : null} {likesText} 

            </p>
            { props.loggedIn && !props.liked ? 
                <button className="theory--likes-button" onClick={props.likeHandler}>
                    like
                </button> :
                null }
            {twitterButton}
        </div>
    );
}

export default Theory;

Theory.propTypes = {
    content: PropTypes.string,
    upvotes: PropTypes.number,
    liked: PropTypes.bool,
}