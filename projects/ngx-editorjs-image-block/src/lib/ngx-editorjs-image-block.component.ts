import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AutofocusDirective, BaseBlockComponent } from '@tmdjr/ngx-editorjs';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-image-block',
  template: `
    <h1 class="flex-spacer" [autofocus]="true" [innerHTML]="value"></h1>
    <img #image [src]="value" [autofocus]="true" />
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
}
