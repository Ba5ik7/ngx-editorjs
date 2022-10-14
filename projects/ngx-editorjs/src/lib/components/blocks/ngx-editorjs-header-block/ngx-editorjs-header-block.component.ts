import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { BlockOptionAction } from '../../../ngx-editorjs.service';
import { BaseBlockComponent } from '../base-block/base-block.component';

@Component({
  selector: 'ngx-editorjs-header-block',
  template: `
    <ng-container [ngSwitch]="whichHeader">
        <h2 *ngSwitchCase="'h2'" class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h2>
        <h3 *ngSwitchCase="'h3'" class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h3>
        <h4 *ngSwitchCase="'h4'" class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h4>
        <h5 *ngSwitchCase="'h5'" class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h5>
        <h6 *ngSwitchCase="'h6'" class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h6>
        <h1 *ngSwitchDefault class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h1>
    </ng-container>
  `,
  styles: [`:host { display: flex; flex-direction: column; }`]
})
export class NgxEditorjsHeaderBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('header') element!: ElementRef;

  whichHeader!: string

  override blockOptionActions: BlockOptionAction[] = [
    { action: 'h1', text: 'H1' },
    { action: 'h2', text: 'H2' },
    { action: 'h3', text: 'H3' },
    { action: 'h4', text: 'H4' },
    { action: 'h5', text: 'H5' },
    { action: 'h6', text: 'H6' }
  ];

  override ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }

  override handleBlockOptionAction(action: string) {
    this.whichHeader = action;
    super.handleBlockOptionAction(action);
  }
}
