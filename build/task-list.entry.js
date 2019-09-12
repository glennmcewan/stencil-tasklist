import { r as registerInstance, e as createEvent, h } from './core-d800627d.js';

const TaskList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.markDeletedEvent = createEvent(this, "markDeletedEvent", 7);
        this.markCompletedEvent = createEvent(this, "markCompletedEvent", 7);
        this.markUncompletedEvent = createEvent(this, "markUncompletedEvent", 7);
    }
    handleCompleteToggle(item) {
        if (true === item.completed) {
            this.markUncompletedEvent.emit(item);
        }
        else {
            this.markCompletedEvent.emit(item);
        }
    }
    deleteItem(item) {
        this.markDeletedEvent.emit(item);
    }
    render() {
        return (h("ul", { class: "todo-list" }, this.items.map((item) => {
            return (h("li", null, h("div", { class: "view" }, h("input", { class: "toggle", type: "checkbox", checked: item.completed, onChange: () => this.handleCompleteToggle(item) }), h("label", null, item.value), h("button", { class: "destroy", onClick: () => this.deleteItem(item) }))));
        })));
    }
};

export { TaskList as task_list };
