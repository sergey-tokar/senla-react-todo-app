import React from 'react';
import Header from "./Header";
import TabsNavigation from "./TabsNavigation";
import NewTaskInput from "./NewTaskInput";
import TodoList from "./TodoList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todoList: [1, 2, 3]};
        this.addNewTodo = this.addNewTodo.bind(this);
    }

    addNewTodo(value) {
        this.setState({todoList: [value, ...this.state.todoList]});
        setTimeout(() => console.log('App state: ', this.state), 0);
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
