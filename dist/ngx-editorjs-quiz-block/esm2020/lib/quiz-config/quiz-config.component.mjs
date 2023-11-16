import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/icon";
function validateRatioOptions() {
    return (control) => {
        const optionsArray = control;
        if (optionsArray.controls.length < 2) {
            return { 'notEnoughOptions': true };
        }
        return null;
    };
}
export class QuizConfigComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.destory = new Subject();
        this.errorMessages = { required: 'Required' };
        this.quizConfigFormErrorMessages = { question: '', correctAnswer: '' };
        this.quizValue = new EventEmitter();
    }
    get ratioOptions() {
        return this.quizConfigForm.get('ratioOptions');
    }
    ngOnInit() {
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
    ngOnDestroy() {
        this.destory.next(true);
    }
    updateQuiz() {
        this.quizValue.emit(this.quizConfigForm.value);
    }
    closeConfig() {
        this.quizValue.emit(this.value);
    }
    addRatioOption() {
        const option = this.formBuilder.group({
            value: ['', [Validators.required]]
        });
        this.ratioOptions.push(option);
    }
    removeRatioOption(index) {
        this.quizConfigForm.get('correctAnswer')?.setValue(undefined);
        this.ratioOptions.removeAt(index);
    }
    setErrorsMessages(formGroup, formControlMessages) {
        Object.keys(formGroup.controls).forEach(element => {
            const errors = formGroup.get(element)?.errors;
            if (errors) {
                const error = Object.keys(errors)[0];
                formControlMessages[element] = this.errorMessages[error];
            }
        });
    }
}
QuizConfigComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: QuizConfigComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
QuizConfigComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: QuizConfigComponent, isStandalone: true, selector: "quiz-config", inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, ngImport: i0, template: `
    <div class="quiz-block-modal" >
      <form [formGroup]="quizConfigForm">

        <h2 mat-dialog-title>Quiz Configuration</h2>

        <h3>Create a Question.</h3>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Question</mat-label>
          <textarea matInput formControlName="question"></textarea>
          <mat-error *ngIf="quizConfigForm.get('question')?.errors">{{quizConfigFormErrorMessages['question']}}</mat-error>
        </mat-form-field>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid">
          <h3>Create the possible answers <span>(Create at least 2 options)</span></h3>
          <div formArrayName="ratioOptions">
            <div *ngFor="let option of ratioOptions.controls; let i = index" [formGroupName]="i">
              <div class="radio-option-container">
                <mat-form-field appearance="outline" color="accent">
                  <mat-label>Option {{i + 1}}</mat-label>
                  <textarea matInput formControlName="value"></textarea>
                </mat-form-field>
                <a mat-icon-button color="warn" (click)="removeRatioOption(i)">
                  <mat-icon>delete</mat-icon>
                </a>
              </div>
            </div>
            <div class="answers-action-group">
              <button mat-raised-button color="accent" type="button" (click)="addRatioOption()">Add Answer</button>
            </div>
          </div>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid && quizConfigForm.get('ratioOptions')?.valid">
          <h3>Select the correct answer</h3>
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
          <h3>Correct answer response.</h3>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea matInput formControlName="correctAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('correctAnswerResponse')?.errors">{{quizConfigFormErrorMessages['correctAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid &&  quizConfigForm.get('ratioOptions')?.valid && quizConfigForm.get('correctAnswer')?.valid">
          <h3>Incorrect answer response.</h3>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea matInput formControlName="incorrectAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('incorrectAnswerResponse')?.errors">{{quizConfigFormErrorMessages['incorrectAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateQuiz()" [disabled]="quizConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `, isInline: true, styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}.radio-option-container{display:flex;gap:10px}.radio-option-container mat-form-field{flex:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i5.MatIconAnchor, selector: "a[mat-icon-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: QuizConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quiz-config', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="quiz-block-modal" >
      <form [formGroup]="quizConfigForm">

        <h2 mat-dialog-title>Quiz Configuration</h2>

        <h3>Create a Question.</h3>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Question</mat-label>
          <textarea matInput formControlName="question"></textarea>
          <mat-error *ngIf="quizConfigForm.get('question')?.errors">{{quizConfigFormErrorMessages['question']}}</mat-error>
        </mat-form-field>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid">
          <h3>Create the possible answers <span>(Create at least 2 options)</span></h3>
          <div formArrayName="ratioOptions">
            <div *ngFor="let option of ratioOptions.controls; let i = index" [formGroupName]="i">
              <div class="radio-option-container">
                <mat-form-field appearance="outline" color="accent">
                  <mat-label>Option {{i + 1}}</mat-label>
                  <textarea matInput formControlName="value"></textarea>
                </mat-form-field>
                <a mat-icon-button color="warn" (click)="removeRatioOption(i)">
                  <mat-icon>delete</mat-icon>
                </a>
              </div>
            </div>
            <div class="answers-action-group">
              <button mat-raised-button color="accent" type="button" (click)="addRatioOption()">Add Answer</button>
            </div>
          </div>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid && quizConfigForm.get('ratioOptions')?.valid">
          <h3>Select the correct answer</h3>
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
          <h3>Correct answer response.</h3>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea matInput formControlName="correctAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('correctAnswerResponse')?.errors">{{quizConfigFormErrorMessages['correctAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid &&  quizConfigForm.get('ratioOptions')?.valid && quizConfigForm.get('correctAnswer')?.valid">
          <h3>Incorrect answer response.</h3>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea matInput formControlName="incorrectAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('incorrectAnswerResponse')?.errors">{{quizConfigFormErrorMessages['incorrectAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateQuiz()" [disabled]="quizConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `, imports: [
                        CommonModule,
                        MatInputModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatIconModule,
                        ReactiveFormsModule,
                    ], styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}.radio-option-container{display:flex;gap:10px}.radio-option-container mat-form-field{flex:1}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { value: [{
                type: Input
            }], quizValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7QUFZMUMsU0FBUyxvQkFBb0I7SUFDM0IsT0FBTyxDQUFDLE9BQXdCLEVBQWlDLEVBQUU7UUFDakUsTUFBTSxZQUFZLEdBQUcsT0FBb0IsQ0FBQztRQUMxQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFrSEQsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUM1QyxZQUFPLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFMUMsa0JBQWEsR0FBOEIsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDcEUsZ0NBQTJCLEdBQThCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLENBQUE7UUFTbEYsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFiTCxDQUFDO0lBUWpELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFjLENBQUM7SUFDOUQsQ0FBQztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQzNDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1RCxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0UscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0Rix1QkFBdUIsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLElBQUksRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFGLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztpQkFDckQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO1NBRTlILENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYTthQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYztRQUNaLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3BDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQW9CLEVBQUUsbUJBQThDO1FBQ3BGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNoRCxNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUM5QyxJQUFHLE1BQU0sRUFBRTtnQkFDVCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnSEFoRVUsbUJBQW1CO29HQUFuQixtQkFBbUIsd0lBM0dwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNFVCxrWUE0QkMsWUFBWSwrUEFDWixjQUFjLG10QkFDZCxlQUFlLDRiQUNmLGtCQUFrQiw4QkFDbEIsZUFBZSx5U0FDZixhQUFhLG1MQUNiLG1CQUFtQjsyRkFHVixtQkFBbUI7a0JBL0cvQixTQUFTOytCQUNFLGFBQWEsY0FDWCxJQUFJLG1CQUNDLHVCQUF1QixDQUFDLE1BQU0sWUFDckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzRVQsV0EyQlE7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNwQjtrR0FlUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbnR5cGUgUmF0aW9PcHRpb24gPSB7IHZhbHVlOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIFF1aXpDb25maWcgPSB7XG4gIHF1ZXN0aW9uOiBzdHJpbmcsXG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyxcbiAgY29ycmVjdEFuc3dlclJlc3BvbnNlOiBzdHJpbmcsXG4gIGluY29ycmVjdEFuc3dlclJlc3BvbnNlOiBzdHJpbmcsXG4gIHJhdGlvT3B0aW9uczogUmF0aW9PcHRpb25bXVxufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVSYXRpb09wdGlvbnMoKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBjb250cm9sIGFzIEZvcm1BcnJheTtcbiAgICBpZiAob3B0aW9uc0FycmF5LmNvbnRyb2xzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiB7ICdub3RFbm91Z2hPcHRpb25zJzogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWl6LWNvbmZpZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJxdWl6LWJsb2NrLW1vZGFsXCIgPlxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJxdWl6Q29uZmlnRm9ybVwiPlxuXG4gICAgICAgIDxoMiBtYXQtZGlhbG9nLXRpdGxlPlF1aXogQ29uZmlndXJhdGlvbjwvaDI+XG5cbiAgICAgICAgPGgzPkNyZWF0ZSBhIFF1ZXN0aW9uLjwvaDM+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgPG1hdC1sYWJlbD5RdWVzdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJxdWVzdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ3F1ZXN0aW9uJ119fTwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgzPkNyZWF0ZSB0aGUgcG9zc2libGUgYW5zd2VycyA8c3Bhbj4oQ3JlYXRlIGF0IGxlYXN0IDIgb3B0aW9ucyk8L3NwYW4+PC9oMz5cbiAgICAgICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJyYXRpb09wdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbZm9ybUdyb3VwTmFtZV09XCJpXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpby1vcHRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+T3B0aW9uIHt7aSArIDF9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxhIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cIndhcm5cIiAoY2xpY2spPVwicmVtb3ZlUmF0aW9PcHRpb24oaSlcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJzLWFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRSYXRpb09wdGlvbigpXCI+QWRkIEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkICYmIHF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgzPlNlbGVjdCB0aGUgY29ycmVjdCBhbnN3ZXI8L2gzPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPkFuc3dlcjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiY29ycmVjdEFuc3dlclwiPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHJhdGlvT3B0aW9ucy5jb250cm9sczsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJvcHRpb24uZ2V0KCd2YWx1ZScpPy52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5nZXQoJ3ZhbHVlJyk/LnZhbHVlIH19XG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ2NvcnJlY3RBbnN3ZXInXX19PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWQgJiYgIHF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJyk/LnZhbGlkICYmIHF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMz5Db3JyZWN0IGFuc3dlciByZXNwb25zZS48L2gzPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlJlc3BvbnNlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiY29ycmVjdEFuc3dlclJlc3BvbnNlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXJSZXNwb25zZScpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snY29ycmVjdEFuc3dlclJlc3BvbnNlJ119fTwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkICYmICBxdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpPy52YWxpZCAmJiBxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDM+SW5jb3JyZWN0IGFuc3dlciByZXNwb25zZS48L2gzPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlJlc3BvbnNlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2VcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgnaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2UnKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ2luY29ycmVjdEFuc3dlclJlc3BvbnNlJ119fTwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBkYXRlUXVpeigpXCIgW2Rpc2FibGVkXT1cInF1aXpDb25maWdGb3JtLmludmFsaWRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjbG9zZUNvbmZpZygpXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIDpob3N0IGZvcm0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIDpob3N0IGZvcm0gLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgLmFuc3dlcnMtYWN0aW9uLWdyb3VwIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAucmFkaW8tb3B0aW9uLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAucmFkaW8tb3B0aW9uLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWl6Q29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgfVxuICBkZXN0b3J5OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyByZXF1aXJlZDogJ1JlcXVpcmVkJyB9O1xuICBxdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHF1ZXN0aW9uOiAnJywgY29ycmVjdEFuc3dlcjogJycgfVxuXG4gIHF1aXpDb25maWdGb3JtITogRm9ybUdyb3VwO1xuXG4gIGdldCByYXRpb09wdGlvbnMoKTogRm9ybUFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5xdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpIHZhbHVlITogUXVpekNvbmZpZztcbiAgQE91dHB1dCgpIHF1aXpWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8UXVpekNvbmZpZz4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnF1aXpDb25maWdGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBxdWVzdGlvbjogW3RoaXMudmFsdWUucXVlc3Rpb24gPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjb3JyZWN0QW5zd2VyOiBbdGhpcy52YWx1ZS5jb3JyZWN0QW5zd2VyID8/IHVuZGVmaW5lZCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogW3RoaXMudmFsdWUuY29ycmVjdEFuc3dlclJlc3BvbnNlID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6IFt0aGlzLnZhbHVlLmluY29ycmVjdEFuc3dlclJlc3BvbnNlID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmF0aW9PcHRpb25zOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KCh0aGlzLnZhbHVlLnJhdGlvT3B0aW9ucyA/PyBbXSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChvcHRpb24gPT4gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7IHZhbHVlOiBbb3B0aW9uLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSksIHZhbGlkYXRlUmF0aW9PcHRpb25zKCkpXG5cbiAgICB9KTtcblxuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0uc3RhdHVzQ2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRFcnJvcnNNZXNzYWdlcyh0aGlzLnF1aXpDb25maWdGb3JtLCB0aGlzLnF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5Lm5leHQodHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVRdWl6KCkge1xuICAgIHRoaXMucXVpelZhbHVlLmVtaXQodGhpcy5xdWl6Q29uZmlnRm9ybS52YWx1ZSk7XG4gIH1cblxuICBjbG9zZUNvbmZpZygpIHtcbiAgICB0aGlzLnF1aXpWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgYWRkUmF0aW9PcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB2YWx1ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gICAgdGhpcy5yYXRpb09wdGlvbnMucHVzaChvcHRpb24pO1xuICB9XG5cbiAgcmVtb3ZlUmF0aW9PcHRpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LnNldFZhbHVlKHVuZGVmaW5lZCk7XG4gICAgdGhpcy5yYXRpb09wdGlvbnMucmVtb3ZlQXQoaW5kZXgpO1xuICB9XG5cbiAgc2V0RXJyb3JzTWVzc2FnZXMoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1Db250cm9sTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSBmb3JtR3JvdXAuZ2V0KGVsZW1lbnQpPy5lcnJvcnM7XG4gICAgICBpZihlcnJvcnMpIHsgICAgICAgICBcbiAgICAgICAgY29uc3QgZXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcnMpWzBdO1xuICAgICAgICBmb3JtQ29udHJvbE1lc3NhZ2VzW2VsZW1lbnRdID0gdGhpcy5lcnJvck1lc3NhZ2VzW2Vycm9yXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbiJdfQ==