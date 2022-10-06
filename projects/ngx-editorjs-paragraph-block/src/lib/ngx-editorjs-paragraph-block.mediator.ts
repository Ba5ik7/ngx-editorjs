import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsParagraphBlockComponent } from './ngx-editorjs-paragraph-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-paragraph-block',
  template: `
    <div [formGroup]="form">
      <!-- <input [formControlName]="formControlName" /> -->
      <ngx-editorjs-paragraph-block [formControlName]="formControlName"></ngx-editorjs-paragraph-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsParagraphBlockComponent
  ],
})
export class NgxEditorjsParagraphBlockMediator {
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}

export interface FormComponent {
  form: FormGroup;
  formControlName: string;
}