import { Component, Input, ViewRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsBlockquotesBlockComponent } from './ngx-editorjs-blockquotes-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-blockquotes-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-blockquotes-block [id]="id" [sortIndex]="sortIndex" [formControlName]="formControlName" [viewRef]="viewRef"></ngx-editorjs-blockquotes-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsBlockquotesBlockComponent
  ],
})
export class NgxEditorjsBlockquotesBlockMediator {
  @Input() id!: string;
  @Input() sortIndex!: number;
  @Input() viewRef!: ViewRef;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
