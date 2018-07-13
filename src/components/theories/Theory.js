import React from 'react';
import PropTypes from 'prop-types';
import twitterIcon from '../../assets/icons/twitter-icon.png'

const Theory = (props) => {
    let likesText;
    if (props.upvotes === 0) {
        likesText = ':('
    } else if (props.upvotes === 1) {
        likesText = 'like'
    } else {
        likesText = 'likes'
    }
    const twitterContent = props.content.length < 200 ? props.content : `${props.content.slice(0, 200)}...`;
    const twitterUrl = `https://twitter.com/intent/tweet?&text=${twitterContent}&via=effingkay`;
    const twitterButton = <a 
        className="twitter" 
        href={twitterUrl}
        target="_blank" 
        title="Tweet" 
        onClick={() => {
            window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(`${twitterContent} via @EffingKay`));
            return false;
        }}>
            <img alt="Tweet" src={twitterIcon} />
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