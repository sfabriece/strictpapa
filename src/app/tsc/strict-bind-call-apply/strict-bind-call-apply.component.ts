import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class StrictBindCallApplyComponent implements OnInit {

  sum = 0;

  ngOnInit(): void {
    this.sum = this.add.apply(this, ['1', '2']);
  }

  add(left: number, right: number) {
    return left + right;
  }
}
`;

@Component({
  selector: 'app-strict-bind-call-apply',
  templateUrl: './strict-bind-call-apply.component.html',
  styleUrls: ['./strict-bind-call-apply.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StrictBindCallApplyComponent implements OnInit {
  code = code;
  html = '<h2>Sum: {{ sum }}</h2>';
  showResult = false;

  sum = 0;

  ngOnInit(): void {
    this.sum = this.add.apply(this, ['1', '2']);
  }

  add(left: number, right: number) {
    return left + right;
  }
}
