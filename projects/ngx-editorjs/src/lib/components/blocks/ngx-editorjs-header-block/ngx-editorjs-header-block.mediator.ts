import { Component, Input, ViewRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'ngx-editorjs-meditator-header-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-header-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-header-block>
    </div>
  `,
})
export class NgxEditorjsHeaderBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
  @Input() savedAction!: string;
}
