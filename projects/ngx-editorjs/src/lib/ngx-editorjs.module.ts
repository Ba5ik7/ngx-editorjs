import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { ContenteditableValueAccessor } from './contenteditable-value-accessor/contenteditable-value-accessor.directive';
import { NgxEditorjsComponent } from './ngx-editorjs.component';
import { HeaderModule } from './components/blocks/header/header.module';
// import { BaseBlockComponent } from './blocks/base-block/base-block.component';
import { ToolbarBlockModule } from './components/blocks/toolbar-block/toolbar-block.module';
// import { CVAMediatorComponent } from './components/cvamediator/cvamediator.component';
// import { AutofocusDirective } from './directives/autofocus/autofocus.directive';
import { AutofocusModule } from './directives/autofocus/autofocus.module';
import { CommonModule } from '@angular/common';
import { NgxEditorjsHeaderBlockMediator } from './components/blocks/header/header.mediator';

@NgModule({
  declarations: [
    NgxEditorjsComponent,
    // CVAMediatorComponent,
    // ContenteditableValueAccessor,
    // BaseBlockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // HeaderModule,
    NgxEditorjsHeaderBlockMediator,
    ToolbarBlockModule,
    AutofocusModule,
  ],
  exports: [
    NgxEditorjsComponent
  ]
})
export class NgxEditorjsModule { }
