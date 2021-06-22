import React from 'react';
import Header from "./Header";
import TabsNavigation from "./TabsNavigation";
import NewTaskInput from "./NewTaskInput";
import TodoList from "./TodoList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoList: JSON.parse(localStorage.getItem('todoList') || null) || []};
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(value) {
        const newTodoList = [value, ...this.state.todoList];
        this.setState({todoList: newTodoList});
        localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }

    render() {
        return (
            <div className="todo-app-content content-wrapper">
                <Header/>
                <TabsNavigation/>
                <NewTaskInput onSubmit={(value) => this.addNewTodo(value)}/>
                <TodoList todoList={this.state.todoList}/>
            </div>
        )
    }
}
