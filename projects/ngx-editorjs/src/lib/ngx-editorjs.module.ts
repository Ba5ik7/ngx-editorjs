import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { NgxEditorjsHeaderBlockModule } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.module';
import { ToolbarBlockModule } from './components/blocks/toolbar-block/toolbar-block.module';
import { AutofocusModule } from './directives/autofocus/autofocus.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    NgxEditorjsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxEditorjsHeaderBlockModule,
    ToolbarBlockModule,
    AutofocusModule,
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
