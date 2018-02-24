import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theories from '../../components/theories/Theories';
import {connect} from 'react-redux';
import {fetchTheories} from '../../store/actions/theories';

class TheoriesView extends Component {
    componentDidMount() {
        this.props.fetchTheories();
    }

    render() {
        const { theories } = this.props;
        return <Theories theories={theories} />
    }
}

const mapStateToProps = state => ({
    theories: state.theories.data,
})

const mapDispatchToProps = dispatch => {
    return {
        fetchTheories: () => dispatch(fetchTheories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TheoriesView);

TheoriesView.propTypes = {
    fetchTheories: PropTypes.func,
    theories: PropTypes.objectOf(PropTypes.object),
}