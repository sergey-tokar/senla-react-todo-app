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
            todoList: TodoProvider.get(),
            filterDone: null,
            filterText: '',
        };
    }

    addNewTodo(value) {
        this.setState({todoList: [value, ...this.state.todoList]});
        TodoProvider.add(value);
    }

    changeFilterDone(filter) {
        this.setState({filterDone: filter});
    }

    changeFilterText(text) {
        this.setState({filterText: text});
    }

    getFilteredTodo() {
        const filteredTodo = this.state.todoList.filter(todo => todo.text.includes(this.state.filterText));

        if (this.state.filterDone === null) {
            return filteredTodo;
        }
        return filteredTodo.filter(todo => this.state.filterDone === todo.done);
    }

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
        this.setState({todoList: this.state.todoList.filter(todo => todo !== todoItem)})
    }

    render() {
        return (
            <div className="todo-app-content content-wrapper">
                <Header onChange={(text) => this.changeFilterText(text)}/>
                <TabsNavigation onChange={(filter) => this.changeFilterDone(filter)} filter={this.state.filterDone}/>
                <NewTaskInput onSubmit={(value) => this.addNewTodo(value)}/>
                <TodoList todoList={this.getFilteredTodo()}
                          onChangeImportance={(todoItem) => this.toggleImportance(todoItem)}
                          onChangeDone={(todoItem) => this.toggleDone(todoItem)}
                          onDelete={(todoItem) => this.deleteTodo(todoItem)}/>
            </div>
        )
    }
}
