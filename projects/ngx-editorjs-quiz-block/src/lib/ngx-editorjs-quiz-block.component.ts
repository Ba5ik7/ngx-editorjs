import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-quiz-block',
  template: `
    <!-- <p class="flex-spacer" #paragraph contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></p> -->
    <h1>Hello Quiz!</h1>
  `,
  styles: [`:host { display: flex; flex-direction: column; } p { font-size: 1.6rem; line-height: 3.2rem; }`],
  imports: [
    AutofocusDirective
  ]
})
export class NgxEditorjsQuizBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

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
