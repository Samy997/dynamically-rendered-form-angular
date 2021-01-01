import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <section body>
        <app-dynamic-form></app-dynamic-form>
      </section>
    </app-layout>
  `,
})
export class AppComponent {
  title = 'trufla-task';
}
