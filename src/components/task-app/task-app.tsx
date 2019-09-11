import { Component, h, State } from '@stencil/core';
import { TaskItem } from '../../models/task-item';

@Component({
  tag: 'task-app'
})
export class TaskApp {
  @State() taskList: TaskItem[];

  componentWillLoad() {
    this.taskList = [];
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      const input = event.target as HTMLInputElement;
      let task = new TaskItem(input.value);

      this.taskList = [...this.taskList, task];

      input.value = '';
    }
  }

  render() {
    return (
      <section class="todoapp">
        <header class="header">
          <h1>Todos</h1>
          <input class="new-todo" placeholder="What's next on the list?" onKeyUp={(event: KeyboardEvent) => this.onKeyUp(event)} />
        </header>
        {
          this.taskList.length > 0 ?
            <section class="main">
              <task-list items={this.taskList}></task-list>
            </section>
            : ''
        }
        <footer class="footer">
          <span class="todo-count"><strong>{this.taskList.length}</strong> {this.taskList.length == 1 ? 'item' : 'items'} left</span>
        </footer >
      </section>
    );
  }
}
