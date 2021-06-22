import React from 'react';
import Header from "./components/Header";
import TabsNavigation from "./components/TabsNavigation";
import NewTaskInput from "./components/NewTaskInput";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/todo-provider";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoList: TodoProvider.getTodo()};
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(value) {
        this.setState({todoList: [value, ...this.state.todoList]});
        TodoProvider.addTodo(value);
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
