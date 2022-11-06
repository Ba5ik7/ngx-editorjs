import { Component } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
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
export class NgxEditorjsCodeBlockComponent extends BaseBlockComponent {

  override useInlineToolbar = false;
  override useInputType = false;
  override useOnPasteHTMLRemoval = false;

  override blockOptionActions: { action: string, icon: string }[] = [
    { action: 'javascript', icon: 'javascript' },
    { action: 'css', icon: 'css' },
    { action: 'xml', icon: 'html' }
  ];

  _value!: string;
  codeMirrorOptions: { lineNumbers: boolean, theme: string, mode: string } =
    { 
      lineNumbers: true,
      theme: 'material-palenight',
      mode: 'javascript',
    }

  override ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   this.codeMirrorOptions.theme = 'material';
    // }, 5000);
    super.ngOnInit();
  }

  override handleBlockOptionAction(action: string) {
    this.codeMirrorOptions.mode = action;
    super.handleBlockOptionAction(action);
  }
}
