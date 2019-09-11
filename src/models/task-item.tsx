export class TaskItem {
  constructor(public value: string, public completed?: boolean, public id = Date.now()) {
  }
}
