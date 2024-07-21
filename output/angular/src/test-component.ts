import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

import "./index.css";

@Component({
  selector: "my-component, MyComponent",
  template: `
    <div class="bg-white flex flex-col">
      <input [attr.value]="name" (input)="name = $event.target.value" />

      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
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
