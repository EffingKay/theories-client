import React, { Component } from 'react';
import Theory from '../../components/theories/Theory';
// import { updateTheory, fetchTheories } from '../../store/actions/theories';
// import { updateUser } from '../../store/actions/user';
import { connect } from 'react-redux';
// import io from 'socket.io-client';
// import { HOST_API } from '../../config/config';

class TheoryView extends Component {
    state = {
        upvotes: this.props.upvotes,
        liked: undefined,
    }

    componentWillMount() {
        this.setState({liked: this.props.likedTheories.filter(e => e._id === this.props.theoryId).length > 0});
    }
    
    render() {
        const likeHandler = () => {
            this.props.likeHandler(this.props.theoryId, this.state.liked, this.state.upvotes);
            if (!this.state.liked) {
                this.setState(prevState => ({upvotes: prevState.upvotes + 1, liked: !prevState.liked}));
            } else {
                this.setState(prevState => ({upvotes: prevState.upvotes - 1, liked: !prevState.liked}));                
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
})

// const mapDispatchToProps = dispatch => {
//     return {
//         updateTheory: (id, data) => dispatch(updateTheory(id, data)),
//         fetchTheories: () => dispatch(fetchTheories()),
//         updateUser: (id, data) => dispatch(updateUser(id, data))
//     }
// }

export default connect(mapStateToProps)(TheoryView);
