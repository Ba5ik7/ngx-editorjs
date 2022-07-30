import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { ContenteditableComponent } from './contenteditable/contenteditable.component';
import { HeaderModule } from './modules/header/header.module';



@NgModule({
  declarations: [
    NgxEditorjsComponent,
    ContenteditableComponent
  ],
  imports: [
    ReactiveFormsModule,
    HeaderModule
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
