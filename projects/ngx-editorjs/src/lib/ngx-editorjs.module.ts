import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { ContenteditableValueAccessor } from './contenteditable-value-accessor/contenteditable-value-accessor.directive';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { HeaderModule } from './blocks/header/header.module';
// import { BaseBlockComponent } from './blocks/base-block/base-block.component';
import { ToolbarBlockModule } from './blocks/toolbar-block/toolbar-block.module';

@NgModule({
  declarations: [
    NgxEditorjsComponent,
    // ContenteditableValueAccessor,
    // BaseBlockComponent
  ],
  imports: [
    ReactiveFormsModule,
    HeaderModule,
    ToolbarBlockModule
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
