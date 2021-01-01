import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  IDynamicFormObject,
  DynamicFormService,
} from './services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  displayData: string;
  dynamicFormData: IDynamicFormObject[] = [];

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit() {
    this.getDynamicFormData();
  }

  private getDynamicFormData(): void {
    this.dynamicFormService.formData.then((res) => {
      this.dynamicFormData = res;

      this.displayData = JSON.stringify(res, undefined, 4);
    });
  }

  dynamicDataChanged(data: IDynamicFormObject[]) {
    this.dynamicFormData = data;
  }
}
