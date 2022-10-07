import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'ngx-editorjs-meditator-header-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-header-block [formControlName]="formControlName"></ngx-editorjs-header-block>
    </div>
  `,
})
export class NgxEditorjsHeaderBlockMediator {
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
