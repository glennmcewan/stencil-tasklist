import { Component, h } from "@stencil/core";

@Component({
  tag: 'task-list'
})
export class TaskList {
  items = [
    'Task 1',
    'Task 2',
  ];

  render() {
    return (
      <ul>
        {
          this.items.map((item) => {
            return <li>{item}</li>
          })
        }
      </ul>
    );
  }
}
