import React, { Component } from 'react';
import Theory from '../../components/theories/Theory';
import { updateTheory, fetchTheories } from '../../store/actions/theories';
import { updateUser } from '../../store/actions/user';
import { connect } from 'react-redux';

class TheoryView extends Component {
    // better approach - when liked just change UI, do not send POST request 
    // update in bulk when componentWillUnmount - less requests and no jumping/refresh in UI
    render() {
        const likeHandler = () => {
            let updatedLikedTheories = [...this.props.likedTheories];
            let updatedVotes;
            if (!wasLiked()) {
                updatedLikedTheories.splice(0, 0, this.props.theoryId);
                updatedVotes = this.props.upvotes + 1;
            } else {
                updatedLikedTheories = this.props.likedTheories.filter(e => e._id !== this.props.theoryId);   
                updatedVotes = this.props.upvotes - 1;                
            }
            let userId = JSON.parse(localStorage.getItem('user')).user._id;            
            this.props.updateTheory(this.props.theoryId, {'upvotes': updatedVotes})
                .then(() => this.props.updateUser(userId, {'liked': updatedLikedTheories}) )
                .then(() => this.props.fetchTheories());
        }

        const wasLiked = () => {
            return this.props.likedTheories.filter(e => e._id === this.props.theoryId).length > 0;
        }

        return (
            <Theory
                content={this.props.content}
                upvotes={this.props.upvotes} 
                liked={wasLiked()}
                likeHandler={likeHandler}
                loggedIn={this.props.loggedIn}
            /> 
        )
    }
}

const mapStateToProps = state => ({
    likedTheories: state.user && state.user.data ? state.user.data.liked : [],
})

const mapDispatchToProps = dispatch => {
    return {
        updateTheory: (id, data) => dispatch(updateTheory(id, data)),
        fetchTheories: () => dispatch(fetchTheories()),
        updateUser: (id, data) => dispatch(updateUser(id, data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheoryView);
