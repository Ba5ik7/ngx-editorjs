import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsHeaderBlockComponent } from './ngx-editorjs-header-block.component';
@Component({
  standalone: true,
  selector: 'ngx-editorjs-meditator-header-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-header-block
        [blockId]="blockId"
        [formControlName]="formControlName"
        [savedAction]="savedAction"></ngx-editorjs-header-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsHeaderBlockComponent
  ],
})
export class NgxEditorjsHeaderBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
  @Input() savedAction!: string;
}
