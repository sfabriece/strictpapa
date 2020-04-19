import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class NoImplicitAnyComponent implements OnInit {

  sum; // Missing type is the same as any

  ngOnInit(): void {
    let right; // implicit any!!!

    right = 'value';
    this.sum = this.add(1, right);
  }

  add(left: number, right: number): number {
    return left + right;
  }
}
`;

@Component({
  selector: 'app-no-implicit-any',
  templateUrl: './no-implicit-any.component.html',
  styleUrls: ['./no-implicit-any.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoImplicitAnyComponent implements OnInit {
  code = code;
  html = '<h2>Sum: {{ sum }}</h2>';
  showResult = false;

  sum; // Missing type is the same as any

  ngOnInit(): void {
    let right; // implicit any!!!

    right = 'value';
    this.sum = this.add(1, right);
  }

  add(left: number, right: number): number {
    return left + right;
  }
}
