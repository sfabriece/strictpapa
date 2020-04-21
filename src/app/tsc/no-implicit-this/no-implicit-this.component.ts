import { Component, ChangeDetectionStrategy } from '@angular/core';

const code = `
export class NoImplicitThisComponent {
  title = 'TYPESCRIPT';

  getTitleFunc() {
    return function () { // \`this\` below does not refer to the class!!!
      return \`The title is '\${this.title}'!\`;
    };
  }
}
`;

// https://www.logicbig.com/tutorials/misc/typescript/no-implicit-this.html

@Component({
  selector: 'app-no-implicit-this',
  templateUrl: './no-implicit-this.component.html',
  styleUrls: ['./no-implicit-this.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoImplicitThisComponent {
  code = code;
  html = '<h2>{{ getTitleFunc()() }}</h2>';
  showResult = false;

  title = 'TYPESCRIPT';

  getTitleFunc() {
    return function () {
      // `this` below does not refer to the class!!!
      return `The title is '${this.title}'!`;
    };
  }
}
