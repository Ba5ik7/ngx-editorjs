import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-paragraph-block',
  template: `
  <h1>ngx-editorjs-paragraph-block</h1>
    <p
      class="flex-spacer"
      #paragraph
      contenteditable
      [autofocus]="_autofocus"
      (focus)="onMouseEnter($event)"
      [innerHTML]="value"
    ></p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  imports: [AutofocusDirective],
})
export class NgxEditorjsParagraphBlockComponent
  extends BaseBlockComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('paragraph') element!: ElementRef;

  override ngOnInit() {
    console.log('NgxEditorjsParagraphBlockComponent ngOnInit');
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }
}
