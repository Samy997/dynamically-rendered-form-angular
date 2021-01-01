import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeModule } from './@Theme/theme.module';
import { DynamicFormModule } from './modules/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    ThemeModule,
    DynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
