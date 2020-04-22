import { Component } from '@angular/core';

const code = `
export class StrictSafeNavigationTypesComponent {
  mySquare = { x: 0 };
}
`;

@Component({
  selector: 'app-strict-safe-navigation-types',
  templateUrl: './strict-safe-navigation-types.component.html',
  styleUrls: ['./strict-safe-navigation-types.component.css'],
})
export class StrictSafeNavigationTypesComponent {
  code = code;
  html = '<div>{{mySquare?.x}}</div>';
  showResult = false;

  mySquare = { x: 0 };
}
