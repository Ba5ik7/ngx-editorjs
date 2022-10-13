import { Component, OnInit, ViewChild, AfterViewInit, ElementRef, Input } from '@angular/core';
import { BlockOptionAction } from '../../../ngx-editorjs.service';
import { BaseBlockComponent } from '../base-block/base-block.component';

@Component({
  selector: 'ngx-editorjs-header-block',
  template: `<h1 class="flex-spacer" #header contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></h1>`,
  styles: [`:host { display: flex; flex-direction: column; }`]
})
export class NgxEditorjsHeaderBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('header') element!: ElementRef;

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
    console.log('NgxEditorjsHeaderBlockComponent handleBlockOptionAction', action);
    switch (action) {
      case 'h1':
        console.log('h1 clicked');
        break;
    
      default:
        break;
    }
  }
}
