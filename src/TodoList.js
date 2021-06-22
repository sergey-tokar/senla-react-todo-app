import React from 'react';
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
    render() {
        return (
            <ul className="todo-list">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </ul>
        );
    }
}
