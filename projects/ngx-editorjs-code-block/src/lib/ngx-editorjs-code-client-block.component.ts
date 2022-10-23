import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-code-client-block',
  template: `
    <code class="flex-spacer" [innerHTML]="value"></code>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
  `],
  imports: []
})
export class NgxEditorjsCodeClientBlockComponent {
  @Input() value = '';
}
