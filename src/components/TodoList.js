import React from 'react';
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';

export default class TodoList extends React.Component {
    render() {
        const todoItems = this.props.todoList;
        return (
            <ul className="todo-list">
                {todoItems && todoItems.map(todoItem => {
                    return (
                        <TodoItem key={uuidv4()} todo = {todoItem}/>
                    );
                })}
            </ul>
        );
    }
}
