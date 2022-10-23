import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsCodeBlockComponent } from './ngx-editorjs-code-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-code-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-code-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-code-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsCodeBlockComponent
  ],
})
export class NgxEditorjsBlockquotesBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
