import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ngx-editor-meditator-paragraph-block',
  template: `
    <div [formGroup]="form">
      <ngx-editor-paragraph-block [formControlName]="formControlName"></ngx-editor-paragraph-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule
  ],
})
export class NgxEditorParagraphBlockMediator {
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}

export interface FormComponent {
  form: FormGroup;
  formControlName: string;
}
