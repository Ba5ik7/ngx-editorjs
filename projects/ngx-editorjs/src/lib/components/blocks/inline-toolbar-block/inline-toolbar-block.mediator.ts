import { Component, Input } from '@angular/core';
@Component({
  selector: 'meditator-inline-toolbar-block',
  template: `<inline-toolbar-block></inline-toolbar-block>`,
})
export class InlineToolbarBlockMediator {
  @Input() attachPosition!: string;
}
