import { Component, h, Prop } from "@stencil/core";
import { TaskItem } from "../../models/task-item";

@Component({
  tag: 'task-list'
})
export class TaskList {
  @Prop() items: TaskItem[];

  render() {
    return (
      <ul class="todo-list">
        {
          this.items.map((item) => {
            return (
              <li>
                <div class="view">
                  <input class="toggle" type="checkbox" />
                  <label>{item.value}</label>
                  <button class="destroy"></button>
                </div>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
