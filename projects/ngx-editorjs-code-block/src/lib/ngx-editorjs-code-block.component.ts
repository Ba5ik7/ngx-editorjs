import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  imports: [
    AutofocusDirective
  ],
  selector: 'ngx-editorjs-code-block',
  template: `
    <code class="hljs" #code contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></code>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
  `]
})
export class NgxEditorjsCodeBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('code') element!: ElementRef;

  override ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }
}
