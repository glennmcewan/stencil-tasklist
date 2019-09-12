import { TaskApp } from "./task-app";

describe('task-app', () => {
  it('builds', () => {
    expect(new TaskApp()).toBeTruthy();
  });
});

describe('behaviour', () => {
  it('does not create item if value is empty', () => {
    const component = new TaskApp();
    const event = { keyCode: 13, target: { value: '' } };
    component.componentWillLoad();
    component.createItemFromInput(event);

    expect(component.createItemFromInput(event)).toBeUndefined();
    expect(component.taskList.length).toEqual(0);
  });

  it('creates new item if value is not empty', () => {
    const component = new TaskApp();
    const event = { keyCode: 13, target: { value: 'waffle' } };
    component.componentWillLoad();
    component.createItemFromInput(event);

    expect(component.taskList.length).toEqual(1);
  });
});
