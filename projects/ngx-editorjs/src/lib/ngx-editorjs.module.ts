import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { ContenteditableComponent } from './contenteditable/contenteditable.component';



@NgModule({
  declarations: [
    NgxEditorjsComponent,
    ContenteditableComponent
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
