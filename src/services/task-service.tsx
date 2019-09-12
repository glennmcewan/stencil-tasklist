import { TaskItem } from "../models/task-item";

export class TaskService {
  private storage_key = 'stencil_tasklist';
  private items: TaskItem[] = [];

  load() {
    if (window.localStorage) {
      this.items = JSON.parse(window.localStorage.getItem(this.storage_key) || '[]');
    }

    return this.items;
  }

  save(): TaskItem[] {
    if (window.localStorage) {
      window.localStorage.setItem(this.storage_key, JSON.stringify(this.items));
    }

    return this.items;
  }

  add(task: TaskItem): TaskItem[] {
    this.items = [...this.items, task];

    return this.save();
  }

  delete(task: TaskItem): TaskItem[] {
    this.items = this.items.filter(item => item.id !== task.id);

    return this.save();
  }

  markCompleted(task: TaskItem): TaskItem[] {
    task.completed = true;
    this.items = [...this.items];

    return this.save();
  }

  markUncompleted(task: TaskItem): TaskItem[] {
    task.completed = false;
    this.items = [...this.items];

    return this.save();
  }
}
