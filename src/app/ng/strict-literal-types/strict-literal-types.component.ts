import { Component } from '@angular/core';

@Component({
  selector: 'app-strict-literal-types',
  templateUrl: './strict-literal-types.component.html',
  styleUrls: ['./strict-literal-types.component.css'],
})
export class StrictLiteralTypesComponent {
  html = `
  <div>
    <p>{{ "" }}</p>
    <p *ngIf="{ x: 0, y: 0 } as location">{{ location }}</p>
    <p
      *ngFor="
        let location of [
          { x: 0, y: 0 },
          { x: 10, y: 13 }
        ]
      "
    >
      {{ location.z }}
    </p>
  </div>
  `;
  showResult = false;
}
