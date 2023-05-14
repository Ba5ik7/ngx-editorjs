import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-paragraph-block',
  template: `
    <p class="flex-spacer" #paragraph contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></p>
  `,
  styles: [`:host { display: flex; flex-direction: column; }`],
  imports: [
    AutofocusDirective
  ]
})
export class NgxEditorjsParagraphBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('paragraph') element!: ElementRef;

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
