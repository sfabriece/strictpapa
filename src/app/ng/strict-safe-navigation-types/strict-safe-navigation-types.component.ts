import { Component } from '@angular/core';

const code = `
export class StrictSafeNavigationTypesComponent {
  mySquare = { x: 0 };

  print(value: string) {
    return value;
  }
}
`;

@Component({
  selector: 'app-strict-safe-navigation-types',
  templateUrl: './strict-safe-navigation-types.component.html',
  styleUrls: ['./strict-safe-navigation-types.component.css'],
})
export class StrictSafeNavigationTypesComponent {
  code = code;
  html = '<div>{{print(mySquare?.x)}}</div>';
  showResult = false;

  mySquare = { x: 0 };

  print(value: string) {
    return value;
  }
}
