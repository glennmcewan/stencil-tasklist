import { newE2EPage } from '@stencil/core/testing';

describe('task-app', () => {
  it('contains a "Your Tasklist" message', async () => {
    const page = await newE2EPage();
    await page.setContent('<task-app></task-app>');

    const element = await page.find('task-app header.header');
    expect(element.textContent).toEqual('Your Tasklist');
  });

  it('shows there are 0 tasks', async () => {
    const page = await newE2EPage();
    await page.setContent('<task-app></task-app>');

    const element = await page.find('task-app footer .todo-count');
    expect(element.textContent).toEqual('0 items left');
  });

  it('can create a new task and display it', async () => {
    const page = await newE2EPage();
    await page.setContent('<task-app></task-app>');

    const input = await page.find('task-app input.new-todo');

    await input.type('My new task');

    expect(await input.getProperty('value')).toEqual('My new task');

    await input.press('Enter');

    expect(await input.getProperty('value')).toEqual('');

    const itemElement = await page.find('task-app task-list li:nth-child(1) label');
    const countElement = await page.find('task-app footer .todo-count');

    expect(itemElement.textContent).toEqual('My new task');
    expect(countElement.textContent).toEqual('1 item left');
  });
});
