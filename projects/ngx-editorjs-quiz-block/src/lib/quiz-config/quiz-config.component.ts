import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { AbstractControl } from '@angular/forms';

type RatioOption = { value: string };
export type QuizConfig = {
  question: string,
  correctAnswer: string,
  correctAnswerResponse: string,
  incorrectAnswerResponse: string,
  ratioOptions: RatioOption[]
};

function validateRatioOptions(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const optionsArray = control as FormArray;
    if (optionsArray.controls.length < 2) {
      return { 'notEnoughOptions': true };
    }
    return null;
  };
}


@Component({
  selector: 'quiz-config',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="quiz-block-modal" >
      <form [formGroup]="quizConfigForm">

        <h1 mat-dialog-title>Quiz Configuration</h1>

        <h2>1) Create a Question.</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Question</mat-label>
          <textarea #title matInput formControlName="question"></textarea>
          <mat-error *ngIf="quizConfigForm.get('question')?.errors">{{quizConfigFormErrorMessages['question']}}</mat-error>
        </mat-form-field>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid">
          <h2>2) Create the possible answers <span>(Create at least 2 options)</span></h2>
          <div formArrayName="ratioOptions">
            <div *ngFor="let option of ratioOptions.controls; let i = index" [formGroupName]="i">
              <div class="ratio-option">
                <mat-form-field appearance="outline" color="accent" class="ratio-option-input">
                  <mat-label>Option {{i + 1}}</mat-label>
                  <input matInput type="text" formControlName="value"/>
                </mat-form-field>
                <button mat-icon-button color="warn" type="button" (click)="removeRatioOption(i)">
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
            </div>
            <div class="answers-action-group">
              <button mat-raised-button color="accent" type="button" (click)="addRatioOption()">Add Answer</button>
            </div>
          </div>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid && quizConfigForm.get('ratioOptions')?.valid">
          <h2>3) Select the correct answer</h2>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Answer</mat-label>
            <mat-select formControlName="correctAnswer">
              <mat-option *ngFor="let option of ratioOptions.controls; let i = index" [value]="option.get('value')?.value">
                {{ option.get('value')?.value }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="quizConfigForm.get('correctAnswer')?.errors">{{quizConfigFormErrorMessages['correctAnswer']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid &&  quizConfigForm.get('ratioOptions')?.valid && quizConfigForm.get('correctAnswer')?.valid">
          <h2>4) Correct answer response.</h2>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea #title matInput formControlName="correctAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('correctAnswerResponse')?.errors">{{quizConfigFormErrorMessages['correctAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid &&  quizConfigForm.get('ratioOptions')?.valid && quizConfigForm.get('correctAnswer')?.valid">
          <h2>5) Incorrect answer response.</h2>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea #title matInput formControlName="incorrectAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('incorrectAnswerResponse')?.errors">{{quizConfigFormErrorMessages['incorrectAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateQuiz()" [disabled]="quizConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `,
  styles: [`
    :host {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 20px;
    }
    :host form {
      display: flex;
      flex-direction: column;
    }
    :host form .action-group {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .answers-action-group {
      padding-bottom: 20px;
    }
    :host h2 span{
      font-size: 12px;
      color: #f0ad4e;
    }
  `],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class QuizConfigComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  destory: Subject<boolean> = new Subject();

  errorMessages: { [key: string]: string } = { required: 'Required' };
  quizConfigFormErrorMessages: { [key: string]: string } = { question: '', correctAnswer: '' }

  quizConfigForm!: FormGroup;

  get ratioOptions(): FormArray {
    return this.quizConfigForm.get('ratioOptions') as FormArray;
  }

  @Input() value!: QuizConfig;
  @Output() quizValue = new EventEmitter<QuizConfig>();

  ngOnInit(): void {
    this.quizConfigForm = this.formBuilder.group({
      question: [this.value.question ?? '', [Validators.required]],
      correctAnswer: [this.value.correctAnswer ?? undefined, [Validators.required]],
      correctAnswerResponse: [this.value.correctAnswerResponse ?? '', [Validators.required]],
      incorrectAnswerResponse: [this.value.incorrectAnswerResponse ?? '', [Validators.required]],
      ratioOptions: this.formBuilder.array((this.value.ratioOptions ?? [])
                    .map(option => this.formBuilder.group({ value: [option.value, Validators.required] })), validateRatioOptions())

    });

    this.quizConfigForm.statusChanges
    .pipe(takeUntil(this.destory))
    .subscribe(() => this.setErrorsMessages(this.quizConfigForm, this.quizConfigFormErrorMessages));
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  updateQuiz() {
    this.quizValue.emit(this.quizConfigForm.value);
  }

  closeConfig() {
    this.quizValue.emit(this.value);
  }

  addRatioOption(): void {
    const option = this.formBuilder.group({
      value: ['', [Validators.required]]
    });
    this.ratioOptions.push(option);
  }

  removeRatioOption(index: number): void {
    this.quizConfigForm.get('correctAnswer')?.setValue(undefined);
    this.ratioOptions.removeAt(index);
  }

  setErrorsMessages(formGroup: FormGroup, formControlMessages: { [key: string]: string }): void {
    Object.keys(formGroup.controls).forEach(element => {
      const errors = formGroup.get(element)?.errors;
      if(errors) {         
        const error = Object.keys(errors)[0];
        formControlMessages[element] = this.errorMessages[error];
      }
    });
  }
}


