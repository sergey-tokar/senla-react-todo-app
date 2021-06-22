import React from 'react';

export default class TodoItem extends React.Component {
    render() {
        return (
            <li className="todo-item">Lorem ipsum dolor sit amet.
                <button className="button  important-button mark-important-button">MARK IMPORTANT</button>
                <button className="button important-button not-important-button">NOT IMPORTANT</button>
                <button className="button delete-button">
                </button>
            </li>
        );
    }
}
