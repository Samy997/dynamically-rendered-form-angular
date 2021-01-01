import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  DynamicFormObject,
  DynamicFormService,
} from './services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  displayData: string;
  dynamicFormData: DynamicFormObject[] = [];

  constructor(
    private fb: FormBuilder,
    private dynamicFormService: DynamicFormService
  ) {}

  ngOnInit() {
    this.initForm();

    this.getDynamicFormData();
  }

  private initForm(): void {
    this.dynamicForm = this.fb.group({
      dynamicFormList: this.fb.array([]),
    });
  }

  private getDynamicFormData(): void {
    this.dynamicFormService.formData.then((res) => {
      this.dynamicFormData = res;

      this.displayData = JSON.stringify(res, undefined, 4);

      // ANCHOR Set Form Array Data
      this.setFormArrayData(res);
    });
  }

  private setFormArrayData(data: DynamicFormObject[]): void {
    const formArrayControls = [];

    data.forEach((input) => {
      formArrayControls.push(this.fb.control(''));
    });

    // ANCHOR Set the control of the dynamic form list
    this.dynamicForm.setControl(
      'dynamicFormList',
      this.fb.array(formArrayControls)
    );
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }

  // SECTION Form Methods ----------------------------------------------

  get dynamicFormList(): FormArray {
    return this.dynamicForm.get('dynamicFormList') as FormArray;
  }

  resetForm() {
    this.dynamicForm.reset();
  }

  // !SECTION Form Methods ----------------------------------------------

  // SECTION TextArea Input And changes methods -------------------------------------------------------------

  dataChanged(event) {
    console.log(this.displayData);
    if (
      this.displayData !== '' &&
      this.displayData !== undefined &&
      this.displayData !== null
    ) {
      const newData = JSON.parse(this.displayData);

      this.setFormArrayData(newData);

      this.dynamicFormData = newData;
    } else {
      this.dynamicFormData = [];
    }
  }

  // !SECTION TextArea Input And changes methods -------------------------------------------------------------
}
