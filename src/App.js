import React from 'react';
import Header from "./Header";
import TabsNavigation from "./TabsNavigation";
import NewTaskInput from "./NewTaskInput";
import TodoList from "./TodoList";

export default class App extends React.Component {
    render() {
        return (
            <div className="todo-app-content content-wrapper">
                <Header/>
                <TabsNavigation/>
                <NewTaskInput/>
                <TodoList/>
            </div>
        )
    }
}
