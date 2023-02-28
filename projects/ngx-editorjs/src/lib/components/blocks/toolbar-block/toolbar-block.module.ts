import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBlockComponent } from './toolbar-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { AutofocusModule } from '../../../directives/autofocus/autofocus.module';

import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
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
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    AutofocusModule
  ],
  exports: [
    ToolbarBlockComponent
  ]
})
export class ToolbarBlockModule { }
