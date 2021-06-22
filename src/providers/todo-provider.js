import Todo from "../models/todo";

export default class TodoProvider {
    static getTodo() {
        const json = JSON.parse(localStorage.getItem('todoList') || null) || [];
        return json.map(todo => new Todo(todo));
    }

    static addTodo(todo) {
       const currentTodoList = this.getTodo();
       const newTodoList = [todo, ...currentTodoList];
       localStorage.setItem('todoList', JSON.stringify(newTodoList));
    }
}
