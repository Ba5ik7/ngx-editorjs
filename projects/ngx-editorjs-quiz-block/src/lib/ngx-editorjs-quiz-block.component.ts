import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import { QuizConfigComponent } from './quiz-config/quiz-config.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-quiz-block',
  template: `
    <ng-container *ngIf="_openEditQuizOverlay; else elseTemplate">
      <quiz-config [value]="_value" (quizValue)="updateQuiz($event)"></quiz-config>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="quiz-conatiner">
        <p class="flex-spacer" #paragraph contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></p>
        <button  
          mat-mini-fab 
          class="image-block-button mat-elevation-z2"
          (click)="openEditQuizOverlay()">
          <mat-icon>edit</mat-icon>
        </button>
      </div>
    </ng-template>
  `,
  styles: [`:host { display: flex; flex-direction: column; } p { font-size: 1.6rem; line-height: 3.2rem; }`],
  imports: [
    CommonModule,
    AutofocusDirective,
    MatButtonModule,
    MatIconModule,
    QuizConfigComponent
  ]
})
export class NgxEditorjsQuizBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  override useInlineToolbar = false;
  override useInputType = false;

  @ViewChild('paragraph') element!: ElementRef;

  _openEditQuizOverlay = false;
  _value: { question: string, correctAnswer: string } = { question: '', correctAnswer: '' };

  override ngOnInit() {
    !!this.value && (this._value = JSON.parse(this.value));
    console.log('this.value', this.value);
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    super.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }

  openEditQuizOverlay() {
    this._openEditQuizOverlay = true;
  }

  updateQuiz(value: { question: string, correctAnswer: string }) {
    console.log({
      updateImage: value
    })
  }
}
