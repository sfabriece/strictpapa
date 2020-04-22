import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class StrictPropertyInitializationComponent implements OnInit {

  defaultValue: number; // 0
  initializedSomewhereElse!: number;

  sum = 0;

  ngOnInit(): void {
    this.sum = this.add(1, this.defaultValue);
  }

  add(left: number, right: number): number {
    return left + right;
  }
}
`;

// There are certain scenarios where properties can be initialized indirectly(perhaps by a helper method or dependency injection library),
// in which case you can use the new definite assignment assertion modifiers for your properties.

@Component({
  selector: 'app-strict-property-initialization',
  templateUrl: './strict-property-initialization.component.html',
  styleUrls: ['./strict-property-initialization.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrictPropertyInitializationComponent implements OnInit {
  code = code;
  html = '<h2>Sum: {{ sum }}</h2>';
  showResult = false;

  defaultValue: number; // 0
  initializedSomewhereElse!: number;

  sum = 0;

  ngOnInit(): void {
    this.sum = this.add(1, this.defaultValue);
  }

  add(left: number, right: number): number {
    return left + right;
  }
}
