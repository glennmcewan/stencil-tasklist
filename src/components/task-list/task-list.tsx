import { Component, h, Prop, Event } from "@stencil/core";
import { TaskItem } from "../../models/task-item";
import { EventEmitter } from "@stencil/router/dist/types/stencil.core";

@Component({
  tag: 'task-list'
})
export class TaskList {
  @Prop() items: TaskItem[];

  @Event() markDeletedEvent: EventEmitter;
  @Event() markCompletedEvent: EventEmitter;
  @Event() markUncompletedEvent: EventEmitter;

  private handleCompleteToggle(item: TaskItem) {
    if (true === item.completed) {
      this.markUncompletedEvent.emit(item);
    } else {
      this.markCompletedEvent.emit(item);
    }
  }

  private deleteItem(item: TaskItem) {
    this.markDeletedEvent.emit(item);
  }

  render() {
    return (
      <ul class="todo-list">
        {
          this.items.map((item) => {
            return (
              <li>
                <div class="view">
                  <input class="toggle" type="checkbox" id={item.id} checked={item.completed} onChange={() => this.handleCompleteToggle(item)} />
                  <label>{item.value}</label>
                  <button class="destroy" onClick={() => this.deleteItem(item)}></button>
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
