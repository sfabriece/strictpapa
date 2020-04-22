import { Component } from '@angular/core';

const code = `
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() square: Square;
  @Output() move = new EventEmitter<{ x: number; y: number }>();
}


export class StrictOutputEventTypesComponent {
  moveSquare(location: { x: number }) {
    console.log(location);
  }
}
`;

@Component({
  selector: 'app-strict-output-event-types',
  templateUrl: './strict-output-event-types.component.html',
  styleUrls: ['./strict-output-event-types.component.css'],
})
export class StrictOutputEventTypesComponent {
  code = code;
  html = `
  <app-child
    square="{ x: 0, y: 0 }"
    (move)="moveSquare($event)"
  ></app-child>
  `;
  showResult = false;

  moveSquare(location: { x: number }) {
    console.log(location);
  }
}
