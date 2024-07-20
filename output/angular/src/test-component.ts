import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "my-component, MyComponent",
  template: `
    <div class="bg-white flex">
      <input
        class="input"
        [attr.value]="name"
        (input)="name = $event.target.value"
      />

      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
      .input {
        color: red;
      }
    `,
  ],
})
export default class MyComponent {
  name = "Alex";
}

@NgModule({
  declarations: [MyComponent],
  imports: [CommonModule],
  exports: [MyComponent],
})
export class MyComponentModule {}
