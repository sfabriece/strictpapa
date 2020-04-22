import { Component } from '@angular/core';

const code = `

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
  selector: 'app-strict-attribute-types',
  templateUrl: './strict-attribute-types.component.html',
  styleUrls: ['./strict-attribute-types.component.css'],
})
export class StrictAttributeTypesComponent {
  code = code;
  html = '<app-child square="{ x: 0 }"></app-child>';
  showResult = false;
}
