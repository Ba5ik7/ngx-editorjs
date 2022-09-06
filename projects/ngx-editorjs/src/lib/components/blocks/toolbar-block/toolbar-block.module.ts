import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBlockComponent } from './toolbar-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AutofocusModule } from '../../../directives/autofocus/autofocus.module';

@NgModule({
  declarations: [
    ToolbarBlockComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    OverlayModule,
    AutofocusModule
  ],
  exports: [
    ToolbarBlockComponent
  ]
})
export class ToolbarBlockModule { }
