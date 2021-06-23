import { v4 as uuidv4 } from 'uuid';

export default class Todo {
    constructor({id, text, important, done} = {}) {
        this.id = id ?? uuidv4();
        this.text = text;
        this.important = important ?? false;
        this.done = done ?? false;
    }
}
