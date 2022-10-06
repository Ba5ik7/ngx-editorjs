import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { AutofocusDirective } from '../../../directives/autofocus/autofocus.directive';
import { BaseBlockComponent } from '../base-block/base-block.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-header-block',
  template: `<h1 class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)"></h1>`,
  styles: [`:host { display: flex; }`],
  providers: [
  ],
  imports: [
    AutofocusDirective
  ]
})
export class HeaderComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('header') element!: ElementRef;

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
