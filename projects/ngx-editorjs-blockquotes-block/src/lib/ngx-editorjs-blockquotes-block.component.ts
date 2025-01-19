import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  imports: [
    AutofocusDirective
  ],
  selector: 'ngx-editorjs-blockquotes-block',
  template: `
    <blockquote class="flex-spacer" #blockquotes contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></blockquote>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
    blockquote {
      margin: 20px 0;
      padding-left: 1.5rem;
    }
  `]
})
export class NgxEditorjsBlockquotesBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('blockquotes') element!: ElementRef;

  override ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }
}
