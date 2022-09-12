import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBlockComponent } from './toolbar-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AutofocusModule } from '../../../directives/autofocus/autofocus.module';

import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core';
import { SearchableBlockListComponent } from './searchable-block-list/searchable-block-list.component';
import { BlockOptionsListComponent } from './block-options-list/block-options-list.component'


@NgModule({
  declarations: [
    ToolbarBlockComponent,
    SearchableBlockListComponent,
    BlockOptionsListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OverlayModule,
    AutofocusModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    ToolbarBlockComponent
  ]
})
export class ToolbarBlockModule { }
