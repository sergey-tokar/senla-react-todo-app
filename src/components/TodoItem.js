import React from 'react';
import TodoProvider from "../providers/todo-provider";

export default class TodoItem extends React.Component {

    onChangeImportance(event) {
        event.stopPropagation();
        this.props.onChangeImportance();
    }

    onDelete(event) {
        event.stopPropagation();
        this.props.onDelete();
    }

    render() {
        return (
            <li onClick={() => this.props.onChangeDone()}
                className={`todo-item ${this.props.todo.important ? 'important' : ''} ${this.props.todo.done ? 'done' : ''}`}>{this.props.todo.text}
                <button
                    onClick={(event) => this.onChangeImportance(event)}
                    className={`button important-button ${this.props.todo.important ? 'not-important-button' : 'mark-important-button'}`}
                >{this.props.todo.important ? 'MARK NOT IMPORTANT' : 'MARK IMPORTANT'}</button>
                <button onClick={(event) => this.onDelete(event)} className="button delete-button"/>
            </li>
        );
    }
}
