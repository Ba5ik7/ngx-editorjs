import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { NgxEditorjsModule } from '@tmdjr/ngx-editorjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    NgxEditorjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
