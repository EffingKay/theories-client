import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theories from '../../components/theories/Theories';
import {connect} from 'react-redux';
import {fetchTheories} from '../../store/actions/theories';
import {fetchUser} from '../../store/actions/user';
import openSocket from 'socket.io-client';
import { HOST_API } from '../../config/config';

class TheoriesView extends Component {
    state = {
        likedTheories: this.props.likedTheories,
        theories: this.props.theories,
    }

    componentWillMount() {
        JSON.parse(localStorage.getItem('user'))
            ? this.props.fetchUser(JSON.parse(localStorage.getItem('user')).user._id)
                .then(() => this.props.fetchTheories()) 
            : this.props.fetchTheories();         
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        this.setState({...this.state, theories: nextProps.theories})
    }

    render() {
        const socket = openSocket(HOST_API);                
        const { theories, loggedIn } = this.props;

        const likeHandler = (theoryId, liked, upvotes) => {
            let updatedLikedTheories = [...this.state.likedTheories],
                userId = JSON.parse(localStorage.getItem('user')).user._id,
                updatedVotes;

            if (!liked) {
                updatedLikedTheories.splice(0, 0, theoryId);
                updatedVotes = upvotes + 1;
            } else {
                updatedLikedTheories = this.state.likedTheories.filter(e => e._id !== theoryId);   
                updatedVotes = upvotes - 1;                
            }

            const theoryUpdated = {
                id: theoryId,
                body: {'upvotes': updatedVotes}
            };
            const user = {
                id: userId,
                body: {'liked': updatedLikedTheories}
            }
            socket.emit('liked', theoryUpdated, user);
            this.setState({likedTheories: updatedLikedTheories});
        }

        return <Theories 
                    theories={this.state.theories} 
                    loggedIn={loggedIn} 
                    likedTheories={this.state.likedTheories} 
                    likeHandler={likeHandler}
                />
    }
}

const mapStateToProps = state => ({
    theories: state.theories.data,
    user: state.user && state.user.data,
    loggedIn: state.authentication.loggedIn,
    likedTheories: state.user && state.user.data ? state.user.data.liked : [],    
})

const mapDispatchToProps = dispatch => {
    return {
        fetchTheories: () => dispatch(fetchTheories()),
        fetchUser: (id) => dispatch(fetchUser(id))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheoriesView);

TheoriesView.propTypes = {
    fetchTheories: PropTypes.func,
    theories: PropTypes.objectOf(PropTypes.object),
}