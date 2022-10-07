import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutofocusDirective } from '../../../directives/autofocus/autofocus.directive';

import { NgxEditorjsHeaderBlockComponent } from './ngx-editorjs-header-block.component';
import { NgxEditorjsHeaderBlockMediator } from './ngx-editorjs-header-block.mediator';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgxEditorjsHeaderBlockComponent,
    NgxEditorjsHeaderBlockMediator
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AutofocusDirective
  ],
  exports: [
    NgxEditorjsHeaderBlockMediator
  ]
})
export class NgxEditorjsHeaderBlockModule { }
