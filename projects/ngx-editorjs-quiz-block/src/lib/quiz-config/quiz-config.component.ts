import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRatioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'quiz-config',
  standalone: true,
  template: `
    <div class="image-block-modal" >
      <form [formGroup]="quizConfigForm">

        <h2 mat-dialog-title>Quiz Configuration</h2>

        <h3>1) Create a Question.</h3>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Question</mat-label>
          <textarea #title matInput formControlName="question"></textarea>
          <mat-error *ngIf="quizConfigForm.get('question')?.errors">{{quizConfigFormErrorMessages['question']}}</mat-error>
        </mat-form-field>

        <h3>2) Create the possible answers</h3>
        <div formArrayName="ratioOptions">
          <div *ngFor="let option of ratioOptions.controls; let i = index" [formGroupName]="i">
            <div class="ratio-option">
              <mat-radio-group formControlName="isCorrect">
                <mat-radio-button value="{{i}}"></mat-radio-button>
              </mat-radio-group>
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

        <h3>3) Select correct answer</h3>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Answer</mat-label>
          <mat-select formControlName="correctAnswer">
            <mat-option *ngFor="let option of ratioOptions.controls; let i = index" [value]="option.get('value')?.value">
              {{ option.get('value')?.value }}
            </mat-option>
          </mat-select>
          <mat-error *ngIf="quizConfigForm.get('correctAnswer')?.errors">{{quizConfigFormErrorMessages['correctAnswer']}}</mat-error>
        </mat-form-field>

        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateImage()" [disabled]="quizConfigForm.invalid">Save</button>
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
  `],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRatioModule,
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

  @Input() value!: { question: string, correctAnswer: string };
  @Output() quizValue = new EventEmitter<{ question: string, correctAnswer: string }>();


  ngOnInit(): void {
    this.quizConfigForm = this.formBuilder.group({
      question: [this.value.question ?? '', [Validators.required]],
      correctAnswer: [this.value.correctAnswer ?? '', [Validators.required]],
      ratioOptions: this.formBuilder.array([])
    });

    this.quizConfigForm.statusChanges
    .pipe(takeUntil(this.destory))
    .subscribe(() => this.setErrorsMessages(this.quizConfigForm, this.quizConfigFormErrorMessages));
  }

  ngOnDestroy(): void {
    this.destory.next(true);
  }

  updateImage() {
    this.quizValue.emit(this.quizConfigForm.value);
  }

  closeConfig() {
    this.quizValue.emit(this.value);
  }

  get ratioOptions(): FormArray {
    return this.quizConfigForm.get('ratioOptions') as FormArray;
  }

  addRatioOption(): void {
    const option = this.formBuilder.group({
      value: ['', [Validators.required]],
      isCorrect: [false, [Validators.required]]
    });
    this.ratioOptions.push(option);
  }

  removeRatioOption(index: number): void {
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
