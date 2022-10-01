import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-blockquotes-block',
  template: `
    <p class="flex-spacer" #blockquotes contenteditable [autofocus]="true" (focus)="onMouseEnter($event)"></p>
  `,
  styles: [`:host { display: flex; }`],
  providers: [
  ],
  imports: [
    AutofocusDirective
  ]
})
export class NgxEditorjsBlockquotesBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('blockquotes') element!: ElementRef;

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