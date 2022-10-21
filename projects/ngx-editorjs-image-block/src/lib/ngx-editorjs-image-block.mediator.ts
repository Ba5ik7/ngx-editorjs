import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsImageBlockComponent } from './ngx-editorjs-image-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-blockquotes-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-image-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-image-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsImageBlockComponent
  ],
})
export class NgxEditorjsBlockquotesBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
