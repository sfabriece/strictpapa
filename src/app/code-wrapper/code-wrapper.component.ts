import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'code-wrapper',
  templateUrl: './code-wrapper.component.html',
  styleUrls: ['./code-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeWrapperComponent {
  @Input() code: string;
  @Input() html: string;

  showCorrect = false;
}
