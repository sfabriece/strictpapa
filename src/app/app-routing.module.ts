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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
