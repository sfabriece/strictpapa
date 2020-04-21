import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-always-strict',
  templateUrl: './always-strict.component.html',
  styleUrls: ['./always-strict.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlwaysStrictComponent {}
