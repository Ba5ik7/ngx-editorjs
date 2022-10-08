import { Component, Input, ViewRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsBlockquotesBlockComponent } from './ngx-editorjs-blockquotes-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-blockquotes-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-blockquotes-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-blockquotes-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsBlockquotesBlockComponent
  ],
})
export class NgxEditorjsBlockquotesBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
