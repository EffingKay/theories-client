import React from 'react';
import PropTypes from 'prop-types';

const TheoryNewForm = (props) => (
    <div>
        <h1>Add new theory</h1>
        <form onSubmit={e => props.postTheoryHandler(e)}>
            <textarea 
                onChange={e => props.changeHandler(e)}
                placeholder="Remember! The less likely, the better. Keep the legit theories for yourselves, please." 
                autoFocus>
            </textarea>
            <button className="auth-button" type="submit">add</button>
        </form>
    </div>
)

export default TheoryNewForm;

TheoryNewForm.propTypes = {
    postTheoryHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired
}