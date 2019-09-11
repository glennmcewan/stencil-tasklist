import { Component, h, State, Prop, Listen } from '@stencil/core';
import { TaskItem } from '../../models/task-item';
import { TaskService } from '../../services/task-service';

@Component({
  tag: 'task-app'
})
export class TaskApp {
  @Prop() service: TaskService = new TaskService();
  @State() taskList: TaskItem[];

  componentWillLoad() {
    this.taskList = this.service.load();
  }

  createItemFromInput(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      const input = event.target as HTMLInputElement;
      let task = new TaskItem(input.value);

      this.taskList = this.service.add(task);

      input.value = '';
    }
  }

  @Listen('markDeletedEvent')
  markItemDeleted(event: any) {
    this.taskList = this.service.delete(event.detail);
  }

  @Listen('markCompletedEvent')
  markItemCompleted(event: any) {
    this.taskList = this.service.markCompleted(event.detail);
  }

  @Listen('markUncompletedEvent')
  markItemUncompleted(event: any) {
    this.taskList = this.service.markUncompleted(event.detail);
  }

  render() {
    const taskCount = this.taskList.length;
    return (
      <section class="todoapp">
        <header class="header">
          <h1>Your Tasklist</h1>
          <input class="new-todo" placeholder="What's next on the list?" onKeyUp={(event: KeyboardEvent) => this.createItemFromInput(event)} />
        </header>
        {
          taskCount > 0 ?
            <section class="main">
              <task-list items={this.taskList}></task-list>
            </section>
            : ''
        }
        <footer class="footer">
          <span class="todo-count"><strong>{taskCount}</strong> {taskCount === 1 ? 'item' : 'items'} left</span>
        </footer >
      </section>
    );
  }
}
