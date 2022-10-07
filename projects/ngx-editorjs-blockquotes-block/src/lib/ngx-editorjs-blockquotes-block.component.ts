import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-blockquotes-block',
  template: `
    <blockquote class="flex-spacer" #blockquotes contenteditable [autofocus]="true" (focus)="onMouseEnter($event)"></blockquote>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
    blockquote {
      margin: 20px 0;
      padding-left: 1.5rem;
    }
  `],
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
