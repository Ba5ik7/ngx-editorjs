import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { QuizConfig, QuizConfigComponent } from './quiz-config/quiz-config.component';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-quiz-block',
  template: `
    <ng-container *ngIf="_openEditQuizOverlay; else elseTemplate">
      <quiz-config [value]="_value" (quizValue)="updateQuiz($event)"></quiz-config>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="quiz-conatiner">
        <h1>Quiz</h1>
        <p #paragraph>{{ _value.question }}</p>
        <mat-radio-group class="answer-ratio-group" [value]="_value.correctAnswer">
          <mat-radio-button *ngFor="let option of _value.ratioOptions" [value]="option.value">{{ option.value }}</mat-radio-button>
        </mat-radio-group>
        <div class="action-group">
          <button mat-flat-button color="primary" type="button" (click)="openEditQuizOverlay()">Edit</button>
        </div>
      </div>
    </ng-template>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; padding-bottom: 22px; }
    .answer-ratio-group {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
    .quiz-conatiner {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 20px;
    }
    .action-group {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
  `],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    QuizConfigComponent
  ]
})
export class NgxEditorjsQuizBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {

  override useInlineToolbar = false;
  override useInputType = false;

  @ViewChild('paragraph') element!: ElementRef;

  _openEditQuizOverlay = false;
  _value: QuizConfig = {
    question: '',
    correctAnswer: '',
    ratioOptions: [],
    correctAnswerResponse: '',
    incorrectAnswerResponse: ''
  };

  override ngOnInit() {
    !!this.value && (this._value = JSON.parse(this.value));
    !this.value && this.openEditQuizOverlay();
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.viewChild = this.element;
  }

  override onMouseEnter(event: Event) {
    super.onMouseEnter(event);
  }

  openEditQuizOverlay() {
    this._openEditQuizOverlay = true;
  }

  updateQuiz(value: QuizConfig) {
    this._value = value;
    this.changeValue(JSON.stringify(value));
    this._openEditQuizOverlay = false;
  }
}
