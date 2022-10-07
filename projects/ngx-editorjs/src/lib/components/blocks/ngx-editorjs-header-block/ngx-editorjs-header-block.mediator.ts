import { Component, Input, ViewRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'ngx-editorjs-meditator-header-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-header-block [id]="id" [sortIndex]="sortIndex" [formControlName]="formControlName" [viewRef]="viewRef"></ngx-editorjs-header-block>
    </div>
  `,
})
export class NgxEditorjsHeaderBlockMediator {
  @Input() id!: string;
  @Input() sortIndex!: number;
  @Input() viewRef!: ViewRef;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
