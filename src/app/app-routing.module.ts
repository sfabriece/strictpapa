import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoImplicitAnyComponent } from './tsc/no-implicit-any/no-implicit-any.component';

const routes: Routes = [
  {
    path: 'noImplicitAny',
    component: NoImplicitAnyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
