import { Component } from '@angular/core';

const code = `
interface Square {
  x: number;
  y: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() square: Square;
}
`;

@Component({
  selector: 'app-strict-input-types',
  templateUrl: './strict-input-types.component.html',
  styleUrls: ['./strict-input-types.component.css'],
})
export class StrictInputTypesComponent {
  code = code;
  html = '<app-child [square]="{ x: 0 }"></app-child>';
  showResult = false;
}
