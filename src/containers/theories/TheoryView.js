import React, { Component } from 'react';
import Theory from '../../components/theories/Theory';
import { updateTheory, fetchTheories } from '../../store/actions/theories';
import { updateUser } from '../../store/actions/user';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import { HOST_API } from '../../config/config';

class TheoryView extends Component {
    state = {
        upvotes: this.props.upvotes,
        liked: undefined
    }

    componentDidMount() {
        this.setState({liked: this.props.likedTheories.filter(e => e._id === this.props.theoryId).length > 0});
    }

    render() {
        const socket = openSocket(HOST_API);
        const likeHandler = () => {
            let updatedVotes, 
                updatedLikedTheories = [...this.props.likedTheories],
                userId = JSON.parse(localStorage.getItem('user')).user._id;

            if (!this.state.liked) {
                updatedLikedTheories.splice(0, 0, this.props.theoryId);
                updatedVotes = this.state.upvotes + 1;
            } else {
                updatedLikedTheories = this.props.likedTheories.filter(e => e._id !== this.props.theoryId);   
                updatedVotes = this.state.upvotes - 1;                
            }

            const theory = {
                id: this.props.theoryId,
                body: {'upvotes': updatedVotes}
            };
            const user = {
                id: userId,
                body: {'liked': updatedLikedTheories}
            }
            socket.emit('liked', theory, user);
            this.setState({upvotes: updatedVotes, liked: !this.state.liked});
        }

        return (
            <Theory
                content={this.props.content}
                upvotes={this.state.upvotes} 
                liked={this.state.liked}
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
