import React from 'react';
import PropTypes from 'prop-types';

const TheoryNewForm = (props) => (
    <div>
        <h1>Add new theory</h1>
        <form onSubmit={e => props.postTheoryHandler(e)}>
            <textarea 
                onChange={e => props.changeHandler(e)}
                placeholder="note to myself: maybe make this dialog? also, make it a class and add state" 
                autoFocus>
            </textarea>
            <button type="submit">add</button>
        </form>
    </div>
)

export default TheoryNewForm;

TheoryNewForm.propTypes = {
    postTheoryHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired
}