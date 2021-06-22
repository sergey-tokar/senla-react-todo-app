import React from 'react';
import Header from "./components/Header";
import TabsNavigation from "./components/TabsNavigation";
import NewTaskInput from "./components/NewTaskInput";
import TodoList from "./components/TodoList";
import TodoProvider from "./providers/todo-provider";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: TodoProvider.getTodo(),
            filterDone: null,
        };
    }

    addNewTodo(value) {
        this.setState({todoList: [value, ...this.state.todoList]});
        TodoProvider.addTodo(value);
    }

    changeFilter(filter) {
        this.setState({filterDone: filter});
    }

    getFilteredTodo() {
        if (this.state.filterDone === null) {
            return this.state.todoList;
        }
        return this.state.todoList.filter(todo => this.state.filterDone === todo.done);
    }

    render() {
        return (
            <div className="todo-app-content content-wrapper">
                <Header/>
                <TabsNavigation onChange={(filter) => this.changeFilter(filter)} filter={this.state.filterDone}/>
                <NewTaskInput onSubmit={(value) => this.addNewTodo(value)}/>
                <TodoList todoList={this.getFilteredTodo()}/>
            </div>
        )
    }
}
