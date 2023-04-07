import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsQuizBlockComponent } from './ngx-editorjs-quiz-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-quiz-paragraph-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-quiz-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-quiz-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsQuizBlockComponent
  ],
})
export class NgxEditorjsQuizBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
}
