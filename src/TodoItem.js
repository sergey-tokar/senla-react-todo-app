import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="todo-item">{this.props.todo}
                <button className="button  important-button mark-important-button">MARK IMPORTANT</button>
                <button className="button important-button not-important-button">NOT IMPORTANT</button>
                <button className="button delete-button"/>
            </li>
        );
    }
}
