import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    AutofocusDirective,
    CodemirrorModule,
    FormsModule
  ],
  selector: 'ngx-editorjs-code-block',
  template: `
  <!-- <pre class="prettyprint">
    <code #code contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></code>
  </pre> -->
  <ngx-codemirror
    (ngModelChange)="changeValue(value)"
    [(ngModel)]="value"
    [autoFocus]="true"
    [options]="codeMirrorOptions">
  </ngx-codemirror>
  `,
  styles: [`
  :host { display: flex; flex-direction: column; border-radius: 5px; }
  `]
})
export class NgxEditorjsCodeBlockComponent extends BaseBlockComponent {

  override useInlineToolbar = false;
  override useInputType = false;
  override useOnPasteHTMLRemoval = false;

  _value!: string;
  codeMirrorOptions: { lineNumbers: boolean, theme: string, mode: string } =
    { 
      lineNumbers: true,
      theme: 'material-palenight',
      mode: 'javascript'
    }
}
