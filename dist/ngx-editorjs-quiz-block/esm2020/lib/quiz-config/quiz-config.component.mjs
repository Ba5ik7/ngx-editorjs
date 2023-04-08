import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/legacy-form-field";
import * as i4 from "@angular/material/legacy-input";
import * as i5 from "@angular/material/legacy-button";
import * as i6 from "@angular/material/legacy-select";
import * as i7 from "@angular/material/legacy-core";
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
        console.log('updateQuiz');
        console.log(this.quizConfigForm.value);
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
    <div class="image-block-modal" >
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
  `, isInline: true, styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}:host h2 span{font-size:12px;color:#f0ad4e}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatLegacyError, selector: "mat-error", inputs: ["id"] }, { kind: "component", type: i3.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLegacyLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatLegacyInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i6.MatLegacySelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatLegacyOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: QuizConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'quiz-config', standalone: true, template: `
    <div class="image-block-modal" >
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
  `, imports: [
                        CommonModule,
                        MatInputModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        MatIconModule,
                        ReactiveFormsModule,
                    ], styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}:host h2 span{font-size:12px;color:#f0ad4e}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; }, propDecorators: { value: [{
                type: Input
            }], quizValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7QUFZMUMsU0FBUyxvQkFBb0I7SUFDM0IsT0FBTyxDQUFDLE9BQXdCLEVBQWlDLEVBQUU7UUFDakUsTUFBTSxZQUFZLEdBQUcsT0FBb0IsQ0FBQztRQUMxQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMs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QUNkLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNwQjtrR0FlUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHsgTWF0TGVnYWN5Rm9ybUZpZWxkTW9kdWxlIGFzIE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdExlZ2FjeUlucHV0TW9kdWxlIGFzIE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7IE1hdExlZ2FjeVNlbGVjdE1vZHVsZSBhcyBNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbnR5cGUgUmF0aW9PcHRpb24gPSB7IHZhbHVlOiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIFF1aXpDb25maWcgPSB7XG4gIHF1ZXN0aW9uOiBzdHJpbmcsXG4gIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyxcbiAgY29ycmVjdEFuc3dlclJlc3BvbnNlOiBzdHJpbmcsXG4gIGluY29ycmVjdEFuc3dlclJlc3BvbnNlOiBzdHJpbmcsXG4gIHJhdGlvT3B0aW9uczogUmF0aW9PcHRpb25bXVxufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVSYXRpb09wdGlvbnMoKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBjb250cm9sIGFzIEZvcm1BcnJheTtcbiAgICBpZiAob3B0aW9uc0FycmF5LmNvbnRyb2xzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiB7ICdub3RFbm91Z2hPcHRpb25zJzogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWl6LWNvbmZpZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImltYWdlLWJsb2NrLW1vZGFsXCIgPlxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJxdWl6Q29uZmlnRm9ybVwiPlxuXG4gICAgICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPlF1aXogQ29uZmlndXJhdGlvbjwvaDE+XG5cbiAgICAgICAgPGgyPjEpIENyZWF0ZSBhIFF1ZXN0aW9uLjwvaDI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgPG1hdC1sYWJlbD5RdWVzdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSAjdGl0bGUgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicXVlc3Rpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydxdWVzdGlvbiddfX08L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMj4yKSBDcmVhdGUgdGhlIHBvc3NpYmxlIGFuc3dlcnMgPHNwYW4+KENyZWF0ZSBhdCBsZWFzdCAyIG9wdGlvbnMpPC9zcGFuPjwvaDI+XG4gICAgICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVwicmF0aW9PcHRpb25zXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW2Zvcm1Hcm91cE5hbWVdPVwiaVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW8tb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIiBjbGFzcz1cInJhdGlvLW9wdGlvbi1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5PcHRpb24ge3tpICsgMX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiLz5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlUmF0aW9PcHRpb24oaSlcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlcnMtYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZFJhdGlvT3B0aW9uKClcIj5BZGQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDI+MykgU2VsZWN0IHRoZSBjb3JyZWN0IGFuc3dlcjwvaDI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+QW5zd2VyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJjb3JyZWN0QW5zd2VyXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW3ZhbHVlXT1cIm9wdGlvbi5nZXQoJ3ZhbHVlJyk/LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWUgfX1cbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snY29ycmVjdEFuc3dlciddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiAgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgyPjQpIENvcnJlY3QgYW5zd2VyIHJlc3BvbnNlLjwvaDI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+UmVzcG9uc2U8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSAjdGl0bGUgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiY29ycmVjdEFuc3dlclJlc3BvbnNlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXJSZXNwb25zZScpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snY29ycmVjdEFuc3dlclJlc3BvbnNlJ119fTwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkICYmICBxdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpPy52YWxpZCAmJiBxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDI+NSkgSW5jb3JyZWN0IGFuc3dlciByZXNwb25zZS48L2gyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlJlc3BvbnNlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgI3RpdGxlIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImluY29ycmVjdEFuc3dlclJlc3BvbnNlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ2luY29ycmVjdEFuc3dlclJlc3BvbnNlJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZSddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwZGF0ZVF1aXooKVwiIFtkaXNhYmxlZF09XCJxdWl6Q29uZmlnRm9ybS5pbnZhbGlkXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2VDb25maWcoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5hbnN3ZXJzLWFjdGlvbi1ncm91cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgaDIgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjZjBhZDRlO1xuICAgIH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWl6Q29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgfVxuICBkZXN0b3J5OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyByZXF1aXJlZDogJ1JlcXVpcmVkJyB9O1xuICBxdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHF1ZXN0aW9uOiAnJywgY29ycmVjdEFuc3dlcjogJycgfVxuXG4gIHF1aXpDb25maWdGb3JtITogRm9ybUdyb3VwO1xuXG4gIGdldCByYXRpb09wdGlvbnMoKTogRm9ybUFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5xdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpIHZhbHVlITogUXVpekNvbmZpZztcbiAgQE91dHB1dCgpIHF1aXpWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8UXVpekNvbmZpZz4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnF1aXpDb25maWdGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBxdWVzdGlvbjogW3RoaXMudmFsdWUucXVlc3Rpb24gPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjb3JyZWN0QW5zd2VyOiBbdGhpcy52YWx1ZS5jb3JyZWN0QW5zd2VyID8/IHVuZGVmaW5lZCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogW3RoaXMudmFsdWUuY29ycmVjdEFuc3dlclJlc3BvbnNlID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6IFt0aGlzLnZhbHVlLmluY29ycmVjdEFuc3dlclJlc3BvbnNlID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmF0aW9PcHRpb25zOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KCh0aGlzLnZhbHVlLnJhdGlvT3B0aW9ucyA/PyBbXSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChvcHRpb24gPT4gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7IHZhbHVlOiBbb3B0aW9uLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSksIHZhbGlkYXRlUmF0aW9PcHRpb25zKCkpXG5cbiAgICB9KTtcblxuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0uc3RhdHVzQ2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRFcnJvcnNNZXNzYWdlcyh0aGlzLnF1aXpDb25maWdGb3JtLCB0aGlzLnF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5Lm5leHQodHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVRdWl6KCkge1xuICAgIGNvbnNvbGUubG9nKCd1cGRhdGVRdWl6Jyk7XG4gICAgY29uc29sZS5sb2codGhpcy5xdWl6Q29uZmlnRm9ybS52YWx1ZSk7XG4gICAgXG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnF1aXpDb25maWdGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIGNsb3NlQ29uZmlnKCkge1xuICAgIHRoaXMucXVpelZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBhZGRSYXRpb09wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHZhbHVlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgICB0aGlzLnJhdGlvT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gIH1cblxuICByZW1vdmVSYXRpb09wdGlvbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5xdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8uc2V0VmFsdWUodW5kZWZpbmVkKTtcbiAgICB0aGlzLnJhdGlvT3B0aW9ucy5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuICBzZXRFcnJvcnNNZXNzYWdlcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUNvbnRyb2xNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IGZvcm1Hcm91cC5nZXQoZWxlbWVudCk/LmVycm9ycztcbiAgICAgIGlmKGVycm9ycykgeyAgICAgICAgIFxuICAgICAgICBjb25zdCBlcnJvciA9IE9iamVjdC5rZXlzKGVycm9ycylbMF07XG4gICAgICAgIGZvcm1Db250cm9sTWVzc2FnZXNbZWxlbWVudF0gPSB0aGlzLmVycm9yTWVzc2FnZXNbZXJyb3JdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuIl19