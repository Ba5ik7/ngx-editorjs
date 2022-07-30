import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessor } from './contenteditable-value-accessor/contenteditable-value-accessor.directive';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { HeaderModule } from './modules/header/header.module';



@NgModule({
  declarations: [
    NgxEditorjsComponent,
    ContenteditableValueAccessor
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
