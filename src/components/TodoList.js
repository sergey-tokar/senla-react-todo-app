import React from 'react';
import TodoItem from "./TodoItem";
import TodoProvider from "../providers/todo-provider";

export default class TodoList extends React.Component {

    toggleImportance(todoItem) {
        todoItem.important = !todoItem.important;
        this.forceUpdate();
        TodoProvider.update(todoItem);
    }

    toggleDone(todoItem) {
        todoItem.done = !todoItem.done;
        this.forceUpdate();
        TodoProvider.update(todoItem);
    }

    deleteTodo(todoItem) {
        TodoProvider.delete(todoItem);
        this.props.todoList.splice(this.props.todoList.indexOf(todoItem), 1);
        this.forceUpdate();
    }


    render() {
        const todoItems = this.props.todoList;
        return (
            <ul className="todo-list">
                {todoItems && todoItems.map(todoItem => {
                    return (
                        <TodoItem onChangeImportance={() => this.props.onChangeImportance(todoItem)}
                                  onChangeDone={() => this.props.onChangeDone(todoItem)}
                                  onDelete={() => this.props.onDelete(todoItem)}
                                  key={todoItem.id}
                                  todo={todoItem}/>
                    );
                })}
            </ul>
        );
    }
}
