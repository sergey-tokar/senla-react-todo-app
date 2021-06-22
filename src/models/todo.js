export default class Todo {
    constructor({text, important, done} = {}) {
        this.text = text;
        this.important = important ?? false;
        this.done = done ?? false;
    }
}
