import { Component } from '@angular/core';

@Component(<Component>{
  selector: 'app-warning-alert',
  template: `
    <p>Warning! Something went wrong</p>
  `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
  `]
})
export class WarningAlertComponent {

  constructor() { }

}
