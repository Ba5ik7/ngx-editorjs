import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-paragraph-client-block',
  template: `
    <p class="flex-spacer" [innerHTML]="value"></p>
  `,
  styles: [`:host { display: flex; flex-direction: column; }`],
  imports: []
})
export class NgxEditorjsParagraphClientBlockComponent {
  @Input() value = '';
}
