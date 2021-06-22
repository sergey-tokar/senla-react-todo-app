import React from 'react';
import Todo from "../models/todo";

export default class NewTaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.onSubmit(new Todo({text: this.state.value}));
        this.setState({value: ''});
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="new-task-wrapper">
                <label className="new-task-label" htmlFor="new-task">New Task</label>
                <textarea value={this.state.value} onChange={this.handleChange} placeholder="Напишите что нужно сделать"
                          className="new-task-input"
                          id="new-task"/>
                <input type="submit" className="button add-new-task-button" value="ADD"/>
            </form>
        );
    }
}
