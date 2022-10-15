import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { NgxEditorjsHeaderBlockModule } from './components/blocks/ngx-editorjs-header-block/ngx-editorjs-header-block.module';
import { ToolbarBlockModule } from './components/blocks/toolbar-block/toolbar-block.module';
import { AutofocusModule } from './directives/autofocus/autofocus.module';
import { CommonModule } from '@angular/common';
import { InlineToolbarBlockModule } from './components/blocks/inline-toolbar-block/inline-toolbar-block.module';
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
    InlineToolbarBlockModule,
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
