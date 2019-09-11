import { TaskItem } from "../models/task-item";

export class TaskService {
  private items: TaskItem[] = [];

  load() {
    return this.items;
  }

  save(): TaskItem[] {
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
