import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { DynamicFormService } from './services/dynamic-form.service';
import { GetDataComponent } from './components/get-data/get-data.component';
import { RenderHtmlComponent } from './components/render-html/render-html.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [DynamicFormService],
  declarations: [DynamicFormComponent, GetDataComponent, RenderHtmlComponent],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
