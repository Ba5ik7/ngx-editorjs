import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyRadioModule as MatRatioModule } from '@angular/material/legacy-radio';
import { QuizConfig } from './quiz-config/quiz-config.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-image-client-block',
  imports: [
    CommonModule,
    MatButtonModule,
    MatRatioModule,
    FormsModule
  ],
  template: `
    <div class="quiz-conatiner">
      <h1>Quiz</h1>
      <p #paragraph>{{ _value.question }}</p>
      <mat-radio-group class="answer-ratio-group" [(ngModel)]="userAnswer" [disabled]="answerSubmited">
        <mat-radio-button *ngFor="let option of _value.ratioOptions" [value]="option.value">{{ option.value }}</mat-radio-button>
      </mat-radio-group>
      <div class="action-group">
        <button mat-flat-button color="primary" type="button" (click)="onQuizAnswerClick()" [disabled]="!userAnswer || answerSubmited">Submit</button>
      </div>
      <p *ngIf="answerResponse" [ngClass]="isAnswerCorrect ? 'correctAnswer' : 'incorrectAnswer'" >{{ answerResponse }}</p>
    </div>
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
    .correctAnswer {
      color: green;
    }
    .incorrectAnswer {
      color: red;
    }
  `]
})
export class NgxEditorjsQuizClientBlockComponent {

  isAnswerCorrect: boolean | undefined = undefined;
  answerResponse: string | undefined = undefined;
  answerSubmited = false;
  userAnswer: string | undefined = undefined;
  _value: QuizConfig = {
    question: '',
    correctAnswer: '',
    ratioOptions: [],
    correctAnswerResponse: '',
    incorrectAnswerResponse: ''
  };

  @Input() 
  set value(value: string) {
    !!value && (this._value = JSON.parse(value));
  }

  onQuizAnswerClick() {
    this.answerSubmited = true;
    this.isAnswerCorrect = this.userAnswer === this._value.correctAnswer;
    this.answerResponse = this.isAnswerCorrect ? this._value.correctAnswerResponse : this._value.incorrectAnswerResponse;
  }
}
