import { Injectable } from '@angular/core';

export interface IDynamicFormObject {
  type:
    | 'Label'
    | 'Textbox'
    | 'Dropdown'
    | 'Checkbox'
    | 'RadioButton'
    | 'Submit'
    | 'Cancel Button';
  label: string;
  values?: Array<{ label: string; value: string | number }>;
}

@Injectable()
export class DynamicFormService {
  constructor() {}

  get formData(): Promise<IDynamicFormObject[]> {
    return new Promise((resolve) => {
      resolve(FORM_JSON);
    }) as any;
  }
}

const FORM_JSON: IDynamicFormObject[] = [
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
    values: [
      {
        label: 'Radio 1',
        value: '1',
      },
      {
        label: 'Radio 2',
        value: '2',
      },
    ],
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
