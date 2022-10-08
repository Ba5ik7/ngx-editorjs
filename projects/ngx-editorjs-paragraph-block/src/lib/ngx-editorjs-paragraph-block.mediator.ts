import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsParagraphBlockComponent } from './ngx-editorjs-paragraph-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-paragraph-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-paragraph-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-paragraph-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsParagraphBlockComponent
  ],
})
export class NgxEditorjsParagraphBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
