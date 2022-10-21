import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-blockquotes-client-block',
  template: `
    <blockquote class="flex-spacer" [innerHTML]="value"></blockquote>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
    blockquote {
      margin: 20px 0;
      padding-left: 1.5rem;
    }
  `],
  imports: []
})
export class NgxEditorjsBlockquotesClientBlockComponent {
  @Input() value = '';
}
