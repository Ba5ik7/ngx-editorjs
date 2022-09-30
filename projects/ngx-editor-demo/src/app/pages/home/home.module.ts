import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxEditorjsModule } from '@tmdjr/ngx-editorjs';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    NgxEditorjsModule,
  ]
})
export class HomeModule { }
