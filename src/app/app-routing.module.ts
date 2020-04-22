import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoImplicitAnyComponent } from './tsc/no-implicit-any/no-implicit-any.component';
import { NoImplicitThisComponent } from './tsc/no-implicit-this/no-implicit-this.component';
import { AlwaysStrictComponent } from './tsc/always-strict/always-strict.component';
import { StrictBindCallApplyComponent } from './tsc/strict-bind-call-apply/strict-bind-call-apply.component';
import { StrictNullChecksComponent } from './tsc/strict-null-checks/strict-null-checks.component';
import { StrictFunctionTypesComponent } from './tsc/strict-function-types/strict-function-types.component';
import { StrictPropertyInitializationComponent } from './tsc/strict-property-initialization/strict-property-initialization.component';
import { NoUnusedLocalsComponent } from './tsc/no-unused-locals/no-unused-locals.component';
import { NoUnusedParametersComponent } from './tsc/no-unused-parameters/no-unused-parameters.component';
import { NoFallthroughCasesInSwitchComponent } from './tsc/no-fallthrough-cases-in-switch/no-fallthrough-cases-in-switch.component';
import { StrictLiteralTypesComponent } from './ng/strict-literal-types/strict-literal-types.component';
import { StrictContextGenericsComponent } from './ng/strict-context-generics/strict-context-generics.component';
import { StrictDomEventTypesComponent } from './ng/strict-dom-event-types/strict-dom-event-types.component';
import { StrictOutputEventTypesComponent } from './ng/strict-output-event-types/strict-output-event-types.component';
import { StrictDomLocalRefTypesComponent } from './ng/strict-dom-local-ref-types/strict-dom-local-ref-types.component';
import { StrictSafeNavigationTypesComponent } from './ng/strict-safe-navigation-types/strict-safe-navigation-types.component';
import { StrictAttributeTypesComponent } from './ng/strict-attribute-types/strict-attribute-types.component';
import { StrictNullInputTypesComponent } from './ng/strict-null-input-types/strict-null-input-types.component';
import { StrictInputTypesComponent } from './ng/strict-input-types/strict-input-types.component';

const routes: Routes = [
  {
    path: 'noImplicitAny',
    component: NoImplicitAnyComponent,
  },
  {
    path: 'noImplicitThis',
    component: NoImplicitThisComponent,
  },
  {
    path: 'alwaysStrict',
    component: AlwaysStrictComponent,
  },
  {
    path: 'strictBindCallApply',
    component: StrictBindCallApplyComponent,
  },
  {
    path: 'strictNullChecks',
    component: StrictNullChecksComponent,
  },
  {
    path: 'strictFunctionTypes',
    component: StrictFunctionTypesComponent,
  },
  {
    path: 'strictPropertyInitialization',
    component: StrictPropertyInitializationComponent,
  },
  {
    path: 'noUnusedLocals',
    component: NoUnusedLocalsComponent,
  },
  {
    path: 'noUnusedParameters',
    component: NoUnusedParametersComponent,
  },
  {
    path: 'noFallthroughCasesInSwitch',
    component: NoFallthroughCasesInSwitchComponent,
  },
  {
    path: 'strictInputTypes',
    component: StrictInputTypesComponent,
  },
  {
    path: 'strictNullInputTypes',
    component: StrictNullInputTypesComponent,
  },
  {
    path: 'strictAttributeTypes',
    component: StrictAttributeTypesComponent,
  },
  {
    path: 'strictSafeNavigationTypes',
    component: StrictSafeNavigationTypesComponent,
  },
  {
    path: 'strictDomLocalRefTypes',
    component: StrictDomLocalRefTypesComponent,
  },
  {
    path: 'strictOutputEventTypes',
    component: StrictOutputEventTypesComponent,
  },
  {
    path: 'strictDomEventTypes',
    component: StrictDomEventTypesComponent,
  },
  {
    path: 'strictContextGenerics',
    component: StrictContextGenericsComponent,
  },
  {
    path: 'strictLiteralTypes',
    component: StrictLiteralTypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
