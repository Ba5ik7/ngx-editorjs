import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { QuizConfig } from './quiz-config/quiz-config.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'ngx-editorjs-image-client-block',
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ],
  template: `
    <div class="quiz-conatiner">
      <h1>Quiz</h1>
      <p *ngIf="answerResponse" [ngClass]="isAnswerCorrect ? 'successful-text' : 'failure-text'" >{{ answerResponse }}</p>
      <p #paragraph>{{ _value.question }}</p>
      <mat-radio-group [(ngModel)]="userAnswer" [disabled]="answerSubmited">
        <ol type="a" class="answer-ratio-group">
          <li *ngFor="let option of _value.ratioOptions">
          <mat-radio-button [value]="option.value">{{ option.value }}</mat-radio-button>
          </li>
        </ol>
      </mat-radio-group>
      <div class="action-group">
        <button mat-flat-button color="accent" type="button" (click)="onQuizAnswerClick()" [disabled]="!userAnswer || answerSubmited">Submit</button>
      </div>
    </div>
  `,
  styles: [`
    :host { display: flex; flex-direction: column; padding-bottom: 22px; }
    .answer-ratio-group {
      display: flex;
      flex-direction: column;
      gap: 21px;
    }
    .answer-ratio-group li::before {
      content: ")";
      margin-right: 0.5em;
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
