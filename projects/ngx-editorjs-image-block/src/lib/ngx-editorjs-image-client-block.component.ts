import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-image-client-block',
  imports: [CommonModule],
  template: `
    <div class="image-conatiner" [ngClass]="activeImageClass">
      <img
        class="image-block"
        [src]="_value.url"
        [title]="_value.title"
        onerror="this.onerror=null;this.src='https://dummyimage.com/640x360/000/AAF'"/>
    </div>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; position: relative; margin-bottom: 22px; }
    :host .flex-start { justify-content: flex-start; }
    :host .flex-end { justify-content: flex-end; }
    :host .center { justify-content: center; }
    :host .stretch img { width: 100%; }
    .image-conatiner {
      display: flex;
    }
    .image-block {
      min-width: 0;
    }
  `]
})
export class NgxEditorjsImageClientBlockComponent {

  _value: { url: string, title: string } = { url: '', title: '' };
  @Input() 
  set value(value: string) {
    !!value && (this._value = JSON.parse(value));
  }

  activeImageClass: string = 'flex-start';
  @Input()
  set savedAction(action: string) {
    this.activeImageClass = action ?? 'flex-start';
  }
}
