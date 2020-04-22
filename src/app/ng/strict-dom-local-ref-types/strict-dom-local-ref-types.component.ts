import { Component } from '@angular/core';

const code = `
export class StrictDomLocalRefTypesComponent {
  changeValue(value: string) {
    console.log(value);
  }
}
`;

@Component({
  selector: 'app-strict-dom-local-ref-types',
  templateUrl: './strict-dom-local-ref-types.component.html',
  styleUrls: ['./strict-dom-local-ref-types.component.css'],
})
export class StrictDomLocalRefTypesComponent {
  code = code;
  html = '<input type="text" #input (keyup.enter)="changeValue(input)" />';
  showResult = false;

  changeValue(value: string) {
    console.log(value);
  }
}
