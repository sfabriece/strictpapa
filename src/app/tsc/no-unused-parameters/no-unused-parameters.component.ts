import { Component, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class NoUnusedParametersComponent {

  add(left: number, right: number, other: number): number {
    return left + right;
  }
}
`;

@Component({
  selector: 'app-no-unused-parameters',
  templateUrl: './no-unused-parameters.component.html',
  styleUrls: ['./no-unused-parameters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoUnusedParametersComponent {
  code = code;
  showResult = false;

  add(left: number, right: number, other: number): number {
    return left + right;
  }
}
