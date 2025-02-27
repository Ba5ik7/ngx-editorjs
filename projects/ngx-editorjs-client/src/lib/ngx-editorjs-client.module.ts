import { NgModule } from '@angular/core';
import { NgxEditorjsClientComponent } from './ngx-editorjs-client.component';
import { NgxEditorjsHeaderClientBlockComponent } from './components/ngx-editorjs-header-client-block/ngx-editorjs-header-client-block.component';

@NgModule({
  declarations: [
    NgxEditorjsClientComponent
  ],
  imports: [
    NgxEditorjsHeaderClientBlockComponent
  ],
  exports: [
    NgxEditorjsClientComponent
  ]
})
export class NgxEditorjsClientModule { }
