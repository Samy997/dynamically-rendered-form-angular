import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IDynamicFormObject } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-render-html',
  templateUrl: './render-html.component.html',
  styleUrls: ['./render-html.component.scss'],
})
export class RenderHtmlComponent implements OnInit, OnChanges {
  @Input() dynamicFormData: IDynamicFormObject[];

  dynamicForm: FormGroup;

  items = [
    {
      value: '1',
      viewValue: 'Something',
    },
    {
      value: '2',
      viewValue: 'Another Something',
    },
    {
      value: '3',
      viewValue: 'Something Else',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.

    if (
      changes.dynamicFormData &&
      changes.dynamicFormData.currentValue !==
        changes.dynamicFormData.previousValue
    ) {
      this.setFormArrayData();
    }
  }

  private initForm(): void {
    this.dynamicForm = this.fb.group({
      dynamicFormList: this.fb.array([]),
    });
  }

  private setFormArrayData(): void {
    if (this.dynamicForm === undefined || this.dynamicForm === null) {
      return;
    }

    const formArrayControls = [];

    this.dynamicFormData.forEach((input) => {
      formArrayControls.push(this.fb.control(''));
    });

    // ANCHOR Set the control of the dynamic form list
    this.dynamicForm.setControl(
      'dynamicFormList',
      this.fb.array(formArrayControls)
    );
  }

  onSubmit() {
    // NOTE Submit only the fields that have values and null ones are neglected
    const dyanmicFormValue = this.dynamicForm.value.dynamicFormList.filter(
      (value) => value !== null && value !== undefined && value !== ''
    );
    console.log(dyanmicFormValue);
  }

  resetForm() {
    this.dynamicForm.reset();
  }
}
