import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoImplicitAnyComponent } from './tsc/no-implicit-any/no-implicit-any.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { CodeWrapperComponent } from './code-wrapper/code-wrapper.component';
import { NoImplicitThisComponent } from './tsc/no-implicit-this/no-implicit-this.component';
import { AlwaysStrictComponent } from './tsc/always-strict/always-strict.component';
import { StrictBindCallApplyComponent } from './tsc/strict-bind-call-apply/strict-bind-call-apply.component';
import { StrictNullChecksComponent } from './tsc/strict-null-checks/strict-null-checks.component';
import { StrictFunctionTypesComponent } from './tsc/strict-function-types/strict-function-types.component';
import { StrictPropertyInitializationComponent } from './tsc/strict-property-initialization/strict-property-initialization.component';
import { NoUnusedLocalsComponent } from './tsc/no-unused-locals/no-unused-locals.component';
import { NoUnusedParametersComponent } from './tsc/no-unused-parameters/no-unused-parameters.component';
import { NoFallthroughCasesInSwitchComponent } from './tsc/no-fallthrough-cases-in-switch/no-fallthrough-cases-in-switch.component';

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~9.6KB) + the selected languages bundle (each lang. ~1kb)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NoImplicitAnyComponent,
    CodeWrapperComponent,
    NoImplicitThisComponent,
    AlwaysStrictComponent,
    StrictBindCallApplyComponent,
    StrictNullChecksComponent,
    StrictFunctionTypesComponent,
    StrictPropertyInitializationComponent,
    NoUnusedLocalsComponent,
    NoUnusedParametersComponent,
    NoFallthroughCasesInSwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HighlightModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages(),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
