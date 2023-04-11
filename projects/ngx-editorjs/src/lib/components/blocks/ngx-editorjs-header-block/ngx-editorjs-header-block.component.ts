import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseBlockComponent } from '../base-block/base-block.component';
import { AutofocusDirective } from '../../../directives/autofocus/autofocus.directive';
import { BlockOptionAction } from '../../../ngx-editorjs.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-header-block',
  template: `
    <span #header [ngSwitch]="whichHeader">
        <h2 *ngSwitchCase="'h2'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h2>
        <h3 *ngSwitchCase="'h3'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h3>
        <h4 *ngSwitchCase="'h4'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h4>
        <h5 *ngSwitchCase="'h5'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h5>
        <h6 *ngSwitchCase="'h6'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h6>
        <h1 *ngSwitchDefault class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h1>
    </span>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; }
  `],
  imports: [
    CommonModule,
    AutofocusDirective
  ]
})
export class NgxEditorjsHeaderBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('header', { read: ElementRef }) element!: ElementRef<HTMLHeadingElement>;

  whichHeader!: string

  override blockOptionActions: BlockOptionAction[] = [
    { action: 'h1', text: 'H1' },
    { action: 'h2', text: 'H2' },
    { action: 'h3', text: 'H3' },
    { action: 'h4', text: 'H4' },
    { action: 'h5', text: 'H5' },
    { action: 'h6', text: 'H6' }
  ];

  ngAfterViewInit(): void {
    super.viewChild = new ElementRef(this.element.nativeElement.firstElementChild);
  }

  override handleBlockOptionAction(action: string) {
    this.whichHeader = action;
    // Have to wait for the next frame to get the new element
    if (this.element) {
      requestAnimationFrame(() => {
        super.viewChild = new ElementRef(this.element.nativeElement.firstElementChild);
        this.value = this.controlDir.control?.value ?? '';
      });
    }
  }
}
