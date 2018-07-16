import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {postTheory, fetchTheories} from '../../store/actions/theories';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import TheoryNewForm from '../../components/theories/TheoryNew';

class TheoryNew extends Component {
    state = {
        content: undefined,
        user: undefined,
        upvotes: 0
    }

    componentDidMount() {
        this.setState({user: Cookies.get('userId')});
    }

    render() {
        const {postTheory, fetchTheories} = this.props;
        const postTheoryHandler = e => {
            e.preventDefault();               
            if (this.state.content) {
                postTheory(this.state)
                    .then(() => {
                        fetchTheories();
                        this.props.history.push('/theories');
                    })
                    .then(() => {
                        if (process.env.NODE_ENV !== 'development') {
                            const status = this.state.content.length < 280 ? this.state.content : `${this.state.content.slice(0, 275)}...`;
                            fetch(`https://lucky-wanderer.glitch.me/new-theory`, {
                                method: 'post',
                                headers: { 'Content-Type' : 'application/json' },
                                body: JSON.stringify({status})
                              }).catch((err) => {
                                console.error(err)
                              });
                        }
                    })
                    .catch(err => console.log(err))
            }   
        }
    
        const changeHandler = e => {
            const newContent = e.target.value;
            return this.setState({content: newContent});
        }

        return (
            <TheoryNewForm
                postTheoryHandler={postTheoryHandler}
                changeHandler={changeHandler}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postTheory: (data) => dispatch(postTheory(data)),
        fetchTheories: () => dispatch(fetchTheories()),
    }
}

const TheoryNewWithRouter = withRouter(TheoryNew);
export default connect(null, mapDispatchToProps)(TheoryNewWithRouter);

TheoryNewWithRouter.propTypes = {
    postTheory: PropTypes.func.isRequired,
    fetchTheories: PropTypes.func.isRequired
}