import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContenteditableValueAccessor } from './contenteditable-value-accessor/contenteditable-value-accessor.directive';
import { NgxEditorjsComponent } from './ngx-editorjs.component';



@NgModule({
  declarations: [
    NgxEditorjsComponent,
    ContenteditableValueAccessor
  ],
  imports: [
    ReactiveFormsModule
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
