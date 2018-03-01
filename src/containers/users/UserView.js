import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserInfo from '../../components/users/UserInfo';
import { fetchUser } from '../../store/actions/user';

class UserView extends Component {
    componentWillMount() {
        console.log(JSON.parse(localStorage.getItem('user')).user._id)
        this.props.fetchUser(JSON.parse(localStorage.getItem('user')).user._id);
    }

    render(){
        const {user} = this.props;
        console.log(user)
        return <UserInfo user={user} />
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