import { r as registerInstance, h } from './core-d800627d.js';

class TaskItem {
    constructor(value, completed, id = Date.now()) {
        this.value = value;
        this.completed = completed;
        this.id = id;
    }
}

class TaskService {
    constructor() {
        this.storage_key = 'stencil_tasklist';
        this.items = [];
    }
    load() {
        if (window.localStorage) {
            this.items = JSON.parse(window.localStorage.getItem(this.storage_key) || '[]');
        }
        return this.items;
    }
    save() {
        if (window.localStorage) {
            window.localStorage.setItem(this.storage_key, JSON.stringify(this.items));
        }
        return this.items;
    }
    add(task) {
        this.items = [...this.items, task];
        return this.save();
    }
    delete(task) {
        this.items = this.items.filter(item => item.id !== task.id);
        return this.save();
    }
    markCompleted(task) {
        task.completed = true;
        this.items = [...this.items];
        return this.save();
    }
    markUncompleted(task) {
        task.completed = false;
        this.items = [...this.items];
        return this.save();
    }
}

const TaskApp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.service = new TaskService();
    }
    componentWillLoad() {
        this.taskList = this.service.load();
    }
    createItemFromInput(event) {
        if (event.keyCode !== 13) {
            return;
        }
        const input = event.target;
        if (!input.value) {
            return;
        }
        let task = new TaskItem(input.value);
        this.taskList = this.service.add(task);
        input.value = '';
    }
    markItemDeleted(event) {
        this.taskList = this.service.delete(event.detail);
    }
    markItemCompleted(event) {
        this.taskList = this.service.markCompleted(event.detail);
    }
    markItemUncompleted(event) {
        this.taskList = this.service.markUncompleted(event.detail);
    }
    render() {
        const taskCount = this.taskList.length;
        return (h("section", { class: "todoapp" }, h("header", { class: "header" }, h("h1", null, "Your Tasklist"), h("input", { class: "new-todo", placeholder: "What's next on the list?", onKeyUp: (event) => this.createItemFromInput(event) })), taskCount > 0 ?
            h("section", { class: "main" }, h("task-list", { items: this.taskList }))
            : '', h("footer", { class: "footer" }, h("span", { class: "todo-count" }, h("strong", null, taskCount), " ", taskCount === 1 ? 'item' : 'items', " left"))));
    }
    static get style() { return "task-app {\n  display: block;\n  padding: 10px;\n  max-width: 550px;\n  margin: 0 auto;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: 0.04em;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
};

export { TaskApp as task_app };
