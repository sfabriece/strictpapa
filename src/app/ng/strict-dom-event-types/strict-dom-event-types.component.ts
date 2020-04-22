import { Component } from '@angular/core';

const code = `
export class StrictDomEventTypesComponent {
  changeValue(value: string) {
    console.log(value);
  }
}
`;

@Component({
  selector: 'app-strict-dom-event-types',
  templateUrl: './strict-dom-event-types.component.html',
  styleUrls: ['./strict-dom-event-types.component.css'],
})
export class StrictDomEventTypesComponent {
  code = code;
  html = '<input type="text" #input (keyup)="changeValue($event)" />';
  showResult = false;

  changeValue(value: string) {
    console.log(value);
  }
}
