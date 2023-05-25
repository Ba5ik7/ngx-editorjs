import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  standalone: true,
  imports: [
    CodemirrorModule,
    FormsModule
  ],
  selector: 'ngx-editorjs-code-client-block',
  template: `
    <ngx-codemirror
      [ngModel]="value"
      [options]="codeMirrorOptions">
    </ngx-codemirror>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      margin: 16px auto;
      position: relative;
      z-index: 1;
    }
  `]
})
export class NgxEditorjsCodeClientBlockComponent {
  
  @Input() value = '';

  codeMirrorOptions = { 
    lineNumbers: true,
    theme: 'material-palenight',
    mode: 'text/typescript',
    readOnly: 'nocursor'
  }

  @Input() 
  set savedAction(action: string) {
    this.codeMirrorOptions.mode = action;
  }
}
