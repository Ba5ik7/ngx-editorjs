import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-image-client-block',
  template: `
    <img #image [src]="value" />
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
  `],
  imports: []
})
export class NgxEditorjsImageClientBlockComponent {
  @Input() value = '';
}
