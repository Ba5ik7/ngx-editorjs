import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ngx-editorjs-meditator-header-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-header-block [formControlName]="formControlName"></ngx-editorjs-header-block>
    </div>
  `
})
export class NgxEditorjsHeaderBlockMediator {
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}

export interface FormComponent {
  form: FormGroup;
  formControlName: string;
}
