import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class StrictNullChecksComponent implements OnInit {

  sum = 0;

  ngOnInit(): void {
    this.sum = this.add(1);
  }

  add(left: number, right?: number): number {
    return left + right;
  }
}
`;

@Component({
  selector: 'app-strict-null-checks',
  templateUrl: './strict-null-checks.component.html',
  styleUrls: ['./strict-null-checks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrictNullChecksComponent implements OnInit {
  code = code;
  html = '<h2>Sum: {{ sum }}</h2>';
  showResult = false;

  sum = 0;

  ngOnInit(): void {
    this.sum = this.add(1);
  }

  add(left: number, right?: number): number {
    return left + right;
  }
}
