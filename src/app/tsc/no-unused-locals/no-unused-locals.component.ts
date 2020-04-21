import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

const someValue = 'why';
const anotherValue = 'are';
const ThisIsGettingOutOfHand = 'you';
const seriously = 'here';
const question = '?';

const code = `
import {
  Component,
  EventEmitter,
  OnInit,
  OnDestroy,
  OnChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

const someValue = 'why';
const anotherValue = 'are';
const ThisIsGettingOutOfHand = 'you';
const seriously = 'here';
const question = '?';

@Component({
  selector: 'app-no-unused-locals',
  templateUrl: './no-unused-locals.component.html',
  styleUrls: ['./no-unused-locals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoUnusedLocalsComponent {
  code = code;
  sum;

  title;
  add(left: number, right: number): number {
    let someComputedRightValue;
    return left;
  }
}
`;

@Component({
  selector: 'app-no-unused-locals',
  templateUrl: './no-unused-locals.component.html',
  styleUrls: ['./no-unused-locals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoUnusedLocalsComponent {
  code = code;
  showResult = false;

  sum;

  title;
  add(left: number, right: number): number {
    let someComputedRightValue;
    return left;
  }
}
