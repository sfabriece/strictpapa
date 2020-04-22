import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Square {
  x: number;
  y: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() square: Square;
  @Output() move = new EventEmitter<{ x: number; y: number }>();
}
