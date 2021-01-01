import { Injectable } from '@angular/core';

export interface DynamicFormObject {
  type:
    | 'Label'
    | 'Textbox'
    | 'Dropdown'
    | 'Checkbox'
    | 'RadioButton'
    | 'Submit'
    | 'Cancel Button';
  label: string;
}

@Injectable()
export class DynamicFormService {
  constructor() {}

  get formData(): Promise<DynamicFormObject[]> {
    return new Promise((resolve) => {
      resolve(FORM_JSON);
    }) as any;
  }
}

const FORM_JSON: DynamicFormObject[] = [
  {
    type: 'Textbox',
    label: 'Text Box',
  },
  {
    type: 'Dropdown',
    label: 'Drop Down',
  },
  {
    type: 'RadioButton',
    label: 'Radio',
  },
  {
    type: 'Checkbox',
    label: 'Check',
  },
  {
    type: 'Cancel Button',
    label: 'Cancel',
  },
  {
    type: 'Submit',
    label: 'Submit',
  },
];
