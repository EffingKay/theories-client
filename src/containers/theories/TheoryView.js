import React, { Component } from 'react';
import Theory from '../../components/theories/Theory';
import { connect } from 'react-redux';
import { updateTheory, fetchTheories } from '../../store/actions/theories';

class TheoryView extends Component {
    state = {
        upvotes: this.props.upvotes,
        liked: undefined,
        didUpvote: false,
    }

    componentWillMount() {
        this.setState({liked: this.props.likedTheories.filter(e => e._id === this.props.theoryId).length > 0});
    }

    componentWillUnmount() {
        if (this.state.didUpvote) {
            this.props.updateTheory(this.props.theoryId, {upvotes: this.props.upvotes + 1});    
        }
    }
 
    render() {
        const likeHandler = () => {
            this.props.updateUsersLiked(this.props.theoryId);
            if (!this.state.liked) {
                this.setState(prevState => ({upvotes: prevState.upvotes + 1, liked: !prevState.liked, didUpvote: true}));
            }
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
    user: state.user && state.user.data,
})

const mapDispatchToProps = dispatch => {
    return {
        updateTheory: (id, data) => dispatch(updateTheory(id, data)),
        fetchTheories: () => dispatch(fetchTheories()),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheoryView);
