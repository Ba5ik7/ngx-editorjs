import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavbarModule } from './components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';

import { NGX_EDITORJS_OPTIONS } from '@tmdjr/ngx-editorjs';
import { NGX_EDITORJS_CLIENT_OPTIONS } from '@tmdjr/ngx-editorjs-client';

import { NgxEditorjsParagraphBlockMediator, NgxEditorjsParagraphClientBlockComponent } from '@tmdjr/ngx-editorjs-paragraph-block';
import { NgxEditorjsBlockquotesBlockMediator, NgxEditorjsBlockquotesClientBlockComponent } from '@tmdjr/ngx-editorjs-blockquotes-block';
import { NgxEditorjsImageBlockMediator, NgxEditorjsImageClientBlockComponent } from '@tmdjr/ngx-editorjs-image-block';
import { NgxEditorjsCodeBlockMediator, NgxEditorjsCodeClientBlockComponent } from '@tmdjr/ngx-editorjs-code-block';
import { NgxEditorjsQuizBlockMediator, NgxEditorjsQuizClientBlockComponent } from '@tmdjr/ngx-editorjs-quiz-block';
import { NgxEditorjsMermaidBlockMediator, NgxEditorjsMermaidClientBlockComponent } from '@tmdjr/ngx-editorjs-mermaid-block';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    NavbarModule
  ],
  providers: [
    {
      provide: NGX_EDITORJS_OPTIONS,
      useValue: {
        blocks: [
          {
            name: 'Paragraph',
            component: NgxEditorjsParagraphBlockMediator,
            componentInstanceName: 'NgxEditorjsParagraphBlockMediator'
          },
          {
            name: 'Blockquotes',
            component: NgxEditorjsBlockquotesBlockMediator,
            componentInstanceName: 'NgxEditorjsBlockquotesBlockMediator'
          },
          {
            name: 'Image',
            component: NgxEditorjsImageBlockMediator,
            componentInstanceName: 'NgxEditorjsImageBlockMediator'
          },
          {
            name: 'Code',
            component: NgxEditorjsCodeBlockMediator,
            componentInstanceName: 'NgxEditorjsCodeBlockMediator'
          },
          {
            name: 'Quiz',
            component: NgxEditorjsQuizBlockMediator,
            componentInstanceName: 'NgxEditorjsQuizBlockMediator'
          },
          {
            name: 'Mermaid',
            component: NgxEditorjsMermaidBlockMediator,
            componentInstanceName: 'NgxEditorjsMermaidBlockMediator'
          }
        ]
      }
    },
    {
      provide: NGX_EDITORJS_CLIENT_OPTIONS,
      useValue: {
        blocks: [
          {
            name: 'Paragraph',
            component: NgxEditorjsParagraphClientBlockComponent,
            componentInstanceName: 'NgxEditorjsParagraphBlockMediator'
          },
          {
            name: 'Blockquotes',
            component: NgxEditorjsBlockquotesClientBlockComponent,
            componentInstanceName: 'NgxEditorjsBlockquotesBlockMediator'
          },
          {
            name: 'Image',
            component: NgxEditorjsImageClientBlockComponent,
            componentInstanceName: 'NgxEditorjsImageBlockMediator'
          },
          {
            name: 'Code',
            component: NgxEditorjsCodeClientBlockComponent,
            componentInstanceName: 'NgxEditorjsCodeBlockMediator'
          },
          {
            name: 'Quiz',
            component: NgxEditorjsQuizClientBlockComponent,
            componentInstanceName: 'NgxEditorjsQuizBlockMediator'
          },
          {
            name: 'Quiz',
            component: NgxEditorjsMermaidClientBlockComponent,
            componentInstanceName: 'NgxEditorjsMermaidBlockMediator'
          }
        ]
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

