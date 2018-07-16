import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import Theories from '../../components/theories/Theories';
import {connect} from 'react-redux';
import {fetchTheories} from '../../store/actions/theories';
import {fetchUser, updateUser} from '../../store/actions/user';

class TheoriesView extends Component {
    state = {
        likedTheories: [],
        showPopular: false,
    }

    componentWillMount() {
        if (Cookies.get('userId')) {
            this.props.fetchUser(Cookies.get('userId'))
                .then(() => this.props.fetchTheories());
        } else {
            this.props.fetchTheories();    
        }   
    }

    componentWillUnmount() {
        if (Cookies.get('userId') && this.state.likedTheories.length) {
            const newLiked = [...this.props.user.liked].concat(this.state.likedTheories);
            this.props.updateUser(Cookies.get('userId'), {liked: newLiked});
        }
    }

    render() {
        const { loggedIn, theories } = this.props;
        const clickHandler = (showPopular) => this.setState({showPopular});        

        const updateUsersLiked = (theoryId) => {
            this.setState(previousState => ({
                likedTheories: [...previousState.likedTheories, theoryId]
            }));
        }

        return <Theories 
                    theories={theories} 
                    loggedIn={loggedIn} 
                    updateUsersLiked={updateUsersLiked}
                    showPopular={clickHandler}
                    showNewest={!this.state.showPopular}
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