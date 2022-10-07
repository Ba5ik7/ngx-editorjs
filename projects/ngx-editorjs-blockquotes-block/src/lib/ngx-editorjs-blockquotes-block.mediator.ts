import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsBlockquotesBlockComponent } from './ngx-editorjs-blockquotes-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-blockquotes-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-blockquotes-block [formControlName]="formControlName"></ngx-editorjs-blockquotes-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsBlockquotesBlockComponent
  ],
})
export class NgxEditorjsBlockquotesBlockMediator {
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
