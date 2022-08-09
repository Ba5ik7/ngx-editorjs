import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarBlockComponent } from './toolbar-block.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ToolbarBlockComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ToolbarBlockComponent
  ]
})
export class ToolbarBlockModule { }
