import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <h1>Simple Tasklist</h1>
        <task-app></task-app>
      </div>
    );
  }
}
