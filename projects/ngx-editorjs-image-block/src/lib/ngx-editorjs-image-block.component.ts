import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AutofocusDirective, BaseBlockComponent } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-image-block',
  template: `
    <h1 #image class="flex-spacer" contenteditable [autofocus]="true" [innerHTML]="value"></h1>
    <img [src]="_value" />
  `,
  styles: [`
  :host { display: flex; flex-direction: column; }
`],
imports: [
  CommonModule,
  AutofocusDirective,
]
})
export class NgxEditorjsImageBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('image') element!: ElementRef;

  override ngOnInit() {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }

  _value!: string;
  override valueChange(value: string) {
    this._value = value;   
    super.valueChange(value);
  }
}
