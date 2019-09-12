import { newE2EPage } from '@stencil/core/testing';

describe('task-app', () => {
  it('contains a "Your Tasklist" message', async () => {
    const page = await newE2EPage();
    await page.setContent('<task-app></task-app>');

    const element = await page.find('task-app header.header');
    expect(element.textContent).toEqual('Your Tasklist');
  });
});
