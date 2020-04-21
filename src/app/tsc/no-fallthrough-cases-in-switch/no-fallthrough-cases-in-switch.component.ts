import { Component, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class NoFallthroughCasesInSwitchComponent {

  parity(value: number) {
    let result = '';

    switch (value % 2) {
      case 0:
        result = 'even';
      case 1:
        result = 'odd';
        break;
    }

    return result;
  }
}
`;

@Component({
  selector: 'app-no-fallthrough-cases-in-switch',
  templateUrl: './no-fallthrough-cases-in-switch.component.html',
  styleUrls: ['./no-fallthrough-cases-in-switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoFallthroughCasesInSwitchComponent {
  code = code;
  html = '<h2>Parity: {{ parity(24) }}</h2>';
  showResult = false;

  parity(value: number) {
    let result = '';

    switch (value % 2) {
      case 0:
        result = 'even';
      case 1:
        result = 'odd';
        break;
    }

    return result;
  }
}
