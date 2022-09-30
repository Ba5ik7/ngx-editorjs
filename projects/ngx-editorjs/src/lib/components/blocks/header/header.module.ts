import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AutofocusModule } from '../../../directives/autofocus/autofocus.module';
import { AutofocusDirective } from '@tmdjr/ngx-editorjs';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AutofocusModule,
    AutofocusDirective
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
