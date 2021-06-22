import React from 'react';

export default class NewTaskInput extends React.Component {
    render() {
        return (
            <form className="new-task-wrapper">
                <label className="new-task-label" htmlFor="new-task">New Task</label>
                <textarea className="new-task-input" id="new-task"/>
                <input type="submit" className="button add-new-task-button" value="ADD"/>
            </form>
        );
    }
}
