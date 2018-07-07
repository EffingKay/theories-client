import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserInfo from '../../components/users/UserInfo';
import { fetchUser } from '../../store/actions/user';
import Aux from '../../utils/Aux';

class UserView extends Component {
    state = {
        showLiked: false,
    }

    componentWillMount() {
        this.props.fetchUser(JSON.parse(localStorage.getItem('user')).user._id);
    }

    render(){
        const {user} = this.props;
        const clickHandler = (which) => this.setState(prevState => ({ showLiked: which==='mine' ? false : true }));

        return (
            <Aux>
                <div className="profile-header">
                    <h1>{user.username}</h1>
                    <button 
                        onClick={() => clickHandler('mine')} 
                        className={this.state.showLiked ? 'profile-button' : 'profile-button profile-button--chosen'}>
                        my theories
                    </button>
                    <button 
                        onClick={() => clickHandler('like')} 
                        className={!this.state.showLiked ? 'profile-button' : 'profile-button profile-button--chosen'}>
                        liked
                    </button>
                </div>
                <UserInfo user={user} showLiked={this.state.showLiked} />
            </Aux>
        ) 
    }
}

const mapStateToProps = state => ({
    user: state.user && state.user.data ? state.user.data : {}
})

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);