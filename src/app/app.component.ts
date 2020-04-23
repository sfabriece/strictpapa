import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'StrictPapa';

  strictFlags = [
    'noImplicitAny',
    'noImplicitThis',
    'alwaysStrict',
    'strictBindCallApply',
    'strictNullChecks',
    'strictFunctionTypes',
    'strictPropertyInitialization',
  ];

  moreFlags = [
    'noUnusedLocals',
    'noUnusedParameters',
    'noFallthroughCasesInSwitch',
  ];

  angularFlags = [
    'strictInputTypes',
    'strictNullInputTypes',
    'strictAttributeTypes',
    'strictSafeNavigationTypes',
    'strictDomLocalRefTypes',
    'strictOutputEventTypes',
    'strictDomEventTypes',
    // 'strictContextGenerics',
    'strictLiteralTypes',
  ];

  intro = `
  {
    "compilerOptions": {
      ...,
      "strict": true,
      ...
    },
    "angularCompilerOptions": {
      "fullTemplateTypeCheck": true,
      "strictInjectionParameters": true,
      "strictTemplates": true
    }
  }
  `;
}
