import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CodemirrorModule,
    FormsModule
  ],
  selector: 'ngx-editorjs-code-client-block',
  template: `
    <ng-container *ngIf="show">
      <ngx-codemirror
        class="code-editor"
        [ngModel]="value"
        [options]="codeMirrorOptions">
      </ngx-codemirror>
    </ng-container>
    
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
    @keyframes fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .code-editor {
      animation: fade 1s;
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

  show = false;
  ngOnInit() {
    // Parent component transfrom animations causes the code editor
    // to be longer. Because the height is skewed. This is a
    // workaround to fix that.
    setTimeout(() => this.show = true, 1000);
  }
}
