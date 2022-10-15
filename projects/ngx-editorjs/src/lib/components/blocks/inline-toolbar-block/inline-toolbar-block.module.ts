import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineToolbarBlockComponent } from './inline-toolbar-block.component';
import { InlineToolbarBlockMediator } from './inline-toolbar-block.mediator';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    InlineToolbarBlockMediator,
    InlineToolbarBlockComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
  ]
})
export class InlineToolbarBlockModule { }
