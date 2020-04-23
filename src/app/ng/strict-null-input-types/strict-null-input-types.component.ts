import { Component } from '@angular/core';
import { Square } from '../child/child.component';

const code = `
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() square: Square;
}

@Component({})
export class StrictNullInputTypesComponent {
  mySquare: Square | null = null;
}

`;

@Component({
  selector: 'app-strict-null-input-types',
  templateUrl: './strict-null-input-types.component.html',
  styleUrls: ['./strict-null-input-types.component.css'],
})
export class StrictNullInputTypesComponent {
  code = code;
  html = '<app-child [square]="mySquare"></app-child>';
  showResult = false;

  mySquare: Square | null = null;
}
