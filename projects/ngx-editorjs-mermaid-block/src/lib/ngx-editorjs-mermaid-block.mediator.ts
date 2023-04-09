import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsMermaidBlockComponent } from './ngx-editorjs-mermaid-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-mermaid-blockquotes-block',
  template: `
    <div [formGroup]="form">
      <ngx-editorjs-mermaid-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-mermaid-block>
    </div>
  `,
  imports: [
    ReactiveFormsModule,
    NgxEditorjsMermaidBlockComponent
  ],
})
export class NgxEditorjsMermaidBlockMediator {
  @Input() blockId!: string;
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
  @Input() savedAction!: string;
}
