import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AutofocusModule } from '../../../directives/autofocus/autofocus.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AutofocusModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
