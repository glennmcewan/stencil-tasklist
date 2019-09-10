import { Component, h, State } from '@stencil/core';
import { TaskItem } from '../task-item/task-item';

@Component({
  tag: 'task-app'
})
export class TaskApp {
  @State() taskList: TaskItem[];

  render() {
    return (
      <task-list></task-list>
    );
  }
}
