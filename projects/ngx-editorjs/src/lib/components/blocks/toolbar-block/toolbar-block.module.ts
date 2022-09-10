import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBlockComponent } from './toolbar-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AutofocusModule } from '../../../directives/autofocus/autofocus.module';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { MatListModule } from '@angular/material/list';


import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
@NgModule({
  declarations: [
    ToolbarBlockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OverlayModule,
    AutofocusModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    CdkListboxModule
  ],
  exports: [
    ToolbarBlockComponent
  ]
})
export class ToolbarBlockModule { }
