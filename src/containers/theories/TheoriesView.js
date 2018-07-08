import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theories from '../../components/theories/Theories';
import {connect} from 'react-redux';
import {fetchTheories} from '../../store/actions/theories';
import {fetchUser, updateUser} from '../../store/actions/user';
// import openSocket from 'socket.io-client';
// import { HOST_API } from '../../config/config';

class TheoriesView extends Component {
    state = {
        likedTheories: [],
        userId: undefined,
    }

    componentWillMount() {
        JSON.parse(localStorage.getItem('user'))
            ? this.props.fetchUser(JSON.parse(localStorage.getItem('user')).user._id)
                .then(() => this.props.fetchTheories()) 
            : this.props.fetchTheories();         
    }

    componentWillUnmount() {
        const userId = JSON.parse(localStorage.getItem('user')).user._id;
        const newLiked = [...this.props.user.liked].concat(this.state.likedTheories);
        if (userId) this.props.updateUser(userId, {liked: newLiked});
    }

    render() {
        // const socket = openSocket(HOST_API);                
        const { loggedIn, theories } = this.props;

        const updateUsersLiked = (theoryId) => {
            console.log(theoryId);
            this.setState(previousState => ({
                likedTheories: [...previousState.likedTheories, theoryId]
            }));
        }

        return <Theories 
                    theories={theories} 
                    loggedIn={loggedIn} 
                    updateUsersLiked={updateUsersLiked}
                />
    }
}

const mapStateToProps = state => ({
    theories: state.theories.data,
    user: state.user && state.user.data,
    loggedIn: state.authentication.loggedIn,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchTheories: () => dispatch(fetchTheories()),
        fetchUser: (id) => dispatch(fetchUser(id)),
        updateUser: (id, data) => dispatch(updateUser(id, data)),        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheoriesView);

TheoriesView.propTypes = {
    fetchTheories: PropTypes.func,
    theories: PropTypes.objectOf(PropTypes.object),
}