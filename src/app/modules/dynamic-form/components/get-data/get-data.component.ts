import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDynamicFormObject } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  @Input() displayData: string;
  @Output() displayDataChanged: EventEmitter<
    IDynamicFormObject[]
  > = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  dataChanged(event) {
    if (
      this.displayData !== '' &&
      this.displayData !== undefined &&
      this.displayData !== null
    ) {
      const sanitizedData = this.sanitizeDataForParsing(this.displayData);
      const newData = JSON.parse(sanitizedData);

      this.displayDataChanged.emit(newData);
      // this.setFormArrayData(newData);

      // this.dynamicFormData = newData;
    } else {
      this.displayDataChanged.emit([]);
    }
  }

  // !SECTION TextArea Input And changes methods -------------------------------------------------------------

  private sanitizeDataForParsing(data: string): string {
    const removeTrailingCommas = /\,(?!\s*?[\{\[\"\'\w])/g;
    const replaceSingleQuotes = /'/g;

    data = data.replace(removeTrailingCommas, '');
    data = data.replace(replaceSingleQuotes, '"');

    return data;
  }
}
