import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorParagraphBlockComponent } from './ngx-editor-paragraph-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editor-meditator-paragraph-block',
  template: `
    <div [formGroup]="form">
      <!-- <input [formControlName]="formControlName" /> -->
      <ngx-editor-paragraph-block [formControlName]="formControlName"></ngx-editor-paragraph-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorParagraphBlockComponent
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
