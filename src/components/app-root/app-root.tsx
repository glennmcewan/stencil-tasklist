import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div>
        <header class="page-header">
          <h1>TodoMVC StencilJS Example</h1>
        </header>

        <main>
          <task-app></task-app>
        </main>
      </div>
    );
  }
}
