import Todo from "../models/todo";

export default class TodoProvider {
    static get() {
        const json = JSON.parse(localStorage.getItem('todoList') || null) || [];
        return json.map(todo => new Todo(todo));
    }

    static add(todo) {
       const currentTodoList = this.get();
       const newTodoList = [todo, ...currentTodoList];
       localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }

    static update(todo) {
        const todoList = this.get();
        const index = todoList.findIndex((todoItem) => todoItem.id === todo.id);
        todoList.splice(index, 1, todo);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    static delete (todo) {
        let todoList = this.get();
        todoList = todoList.filter((todoItem) => todoItem.id !== todo.id);
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }
}
