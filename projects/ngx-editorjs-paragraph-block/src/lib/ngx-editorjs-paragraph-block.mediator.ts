import { Component, Input, ViewRef } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsParagraphBlockComponent } from './ngx-editorjs-paragraph-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-paragraph-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-paragraph-block [id]="id" [sortIndex]="sortIndex" [formControlName]="formControlName" [viewRef]="viewRef"></ngx-editorjs-paragraph-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsParagraphBlockComponent
  ],
})
export class NgxEditorjsParagraphBlockMediator {
  @Input() id!: string;
  @Input() sortIndex!: number;
  @Input() viewRef!: ViewRef;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
