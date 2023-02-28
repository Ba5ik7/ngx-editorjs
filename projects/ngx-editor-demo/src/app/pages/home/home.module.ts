import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatDividerModule } from '@angular/material/divider';
import { NgxEditorjsModule } from '@tmdjr/ngx-editorjs';
import { NgxEditorjsClientModule } from '@tmdjr/ngx-editorjs-client';


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
    NgxEditorjsClientModule,
  ]
})
export class HomeModule { }
