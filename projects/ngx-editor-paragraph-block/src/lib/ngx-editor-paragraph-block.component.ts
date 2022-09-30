import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editor-paragraph-block',
  template: `
    <p class="flex-spacer" #paragraph contenteditable [autofocus]="true" (focus)="onMouseEnter($event)">
      ngx-editor-paragraph-block works!
    </p>
  `,
  styles: [`:host { display: flex; }`],
  providers: [
  ],
  imports: [
    AutofocusDirective
  ]
})
export class NgxEditorParagraphBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

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