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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: QuizConfigComponent, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: QuizConfigComponent, isStandalone: true, selector: "quiz-config", inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}.radio-option-container{display:flex;gap:10px}.radio-option-container mat-form-field{flex:1}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i5.MatIconAnchor, selector: "a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "directive", type: i1.FormGroupName, selector: "[formGroupName]", inputs: ["formGroupName"] }, { kind: "directive", type: i1.FormArrayName, selector: "[formArrayName]", inputs: ["formArrayName"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: QuizConfigComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i1.FormBuilder }], propDecorators: { value: [{
                type: Input
            }], quizValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7QUFZMUMsU0FBUyxvQkFBb0I7SUFDM0IsT0FBTyxDQUFDLE9BQXdCLEVBQWlDLEVBQUU7UUFDakUsTUFBTSxZQUFZLEdBQUcsT0FBb0IsQ0FBQztRQUMxQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUM7QUFrSEQsTUFBTSxPQUFPLG1CQUFt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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG50eXBlIFJhdGlvT3B0aW9uID0geyB2YWx1ZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBRdWl6Q29uZmlnID0ge1xuICBxdWVzdGlvbjogc3RyaW5nLFxuICBjb3JyZWN0QW5zd2VyOiBzdHJpbmcsXG4gIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogc3RyaW5nLFxuICBpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTogc3RyaW5nLFxuICByYXRpb09wdGlvbnM6IFJhdGlvT3B0aW9uW11cbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmF0aW9PcHRpb25zKCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgY29uc3Qgb3B0aW9uc0FycmF5ID0gY29udHJvbCBhcyBGb3JtQXJyYXk7XG4gICAgaWYgKG9wdGlvbnNBcnJheS5jb250cm9scy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyAnbm90RW5vdWdoT3B0aW9ucyc6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVpei1jb25maWcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpei1ibG9jay1tb2RhbFwiID5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwicXVpekNvbmZpZ0Zvcm1cIj5cblxuICAgICAgICA8aDIgbWF0LWRpYWxvZy10aXRsZT5RdWl6IENvbmZpZ3VyYXRpb248L2gyPlxuXG4gICAgICAgIDxoMz5DcmVhdGUgYSBRdWVzdGlvbi48L2gzPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgIDxtYXQtbGFiZWw+UXVlc3Rpb248L21hdC1sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicXVlc3Rpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydxdWVzdGlvbiddfX08L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMz5DcmVhdGUgdGhlIHBvc3NpYmxlIGFuc3dlcnMgPHNwYW4+KENyZWF0ZSBhdCBsZWFzdCAyIG9wdGlvbnMpPC9zcGFuPjwvaDM+XG4gICAgICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVwicmF0aW9PcHRpb25zXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW2Zvcm1Hcm91cE5hbWVdPVwiaVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW8tb3B0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk9wdGlvbiB7e2kgKyAxfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8YSBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgKGNsaWNrKT1cInJlbW92ZVJhdGlvT3B0aW9uKGkpXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2Vycy1hY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYWRkUmF0aW9PcHRpb24oKVwiPkFkZCBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiBxdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMz5TZWxlY3QgdGhlIGNvcnJlY3QgYW5zd2VyPC9oMz5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5BbnN3ZXI8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImNvcnJlY3RBbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwib3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWVcIj5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24uZ2V0KCd2YWx1ZScpPy52YWx1ZSB9fVxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydjb3JyZWN0QW5zd2VyJ119fTwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkICYmICBxdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpPy52YWxpZCAmJiBxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDM+Q29ycmVjdCBhbnN3ZXIgcmVzcG9uc2UuPC9oMz5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5SZXNwb25zZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImNvcnJlY3RBbnN3ZXJSZXNwb25zZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyUmVzcG9uc2UnKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ2NvcnJlY3RBbnN3ZXJSZXNwb25zZSddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiAgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgzPkluY29ycmVjdCBhbnN3ZXIgcmVzcG9uc2UuPC9oMz5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5SZXNwb25zZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImluY29ycmVjdEFuc3dlclJlc3BvbnNlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ2luY29ycmVjdEFuc3dlclJlc3BvbnNlJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZSddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwZGF0ZVF1aXooKVwiIFtkaXNhYmxlZF09XCJxdWl6Q29uZmlnRm9ybS5pbnZhbGlkXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2VDb25maWcoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5hbnN3ZXJzLWFjdGlvbi1ncm91cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLnJhZGlvLW9wdGlvbi1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgLnJhZGlvLW9wdGlvbi1jb250YWluZXIgbWF0LWZvcm0tZmllbGQge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIGBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpekNvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IH1cbiAgZGVzdG9yeTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHsgcmVxdWlyZWQ6ICdSZXF1aXJlZCcgfTtcbiAgcXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyBxdWVzdGlvbjogJycsIGNvcnJlY3RBbnN3ZXI6ICcnIH1cblxuICBxdWl6Q29uZmlnRm9ybSE6IEZvcm1Hcm91cDtcblxuICBnZXQgcmF0aW9PcHRpb25zKCk6IEZvcm1BcnJheSB7XG4gICAgcmV0dXJuIHRoaXMucXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICBASW5wdXQoKSB2YWx1ZSE6IFF1aXpDb25maWc7XG4gIEBPdXRwdXQoKSBxdWl6VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPFF1aXpDb25maWc+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5xdWl6Q29uZmlnRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgcXVlc3Rpb246IFt0aGlzLnZhbHVlLnF1ZXN0aW9uID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgY29ycmVjdEFuc3dlcjogW3RoaXMudmFsdWUuY29ycmVjdEFuc3dlciA/PyB1bmRlZmluZWQsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjb3JyZWN0QW5zd2VyUmVzcG9uc2U6IFt0aGlzLnZhbHVlLmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGluY29ycmVjdEFuc3dlclJlc3BvbnNlOiBbdGhpcy52YWx1ZS5pbmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHJhdGlvT3B0aW9uczogdGhpcy5mb3JtQnVpbGRlci5hcnJheSgodGhpcy52YWx1ZS5yYXRpb09wdGlvbnMgPz8gW10pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uID0+IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoeyB2YWx1ZTogW29wdGlvbi52YWx1ZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpLCB2YWxpZGF0ZVJhdGlvT3B0aW9ucygpKVxuXG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aXpDb25maWdGb3JtLnN0YXR1c0NoYW5nZXNcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5KSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0RXJyb3JzTWVzc2FnZXModGhpcy5xdWl6Q29uZmlnRm9ybSwgdGhpcy5xdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdG9yeS5uZXh0KHRydWUpO1xuICB9XG5cbiAgdXBkYXRlUXVpeigpIHtcbiAgICB0aGlzLnF1aXpWYWx1ZS5lbWl0KHRoaXMucXVpekNvbmZpZ0Zvcm0udmFsdWUpO1xuICB9XG5cbiAgY2xvc2VDb25maWcoKSB7XG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGFkZFJhdGlvT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmFsdWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZVJhdGlvT3B0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy5zZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuXG4gIHNldEVycm9yc01lc3NhZ2VzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtQ29udHJvbE1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gZm9ybUdyb3VwLmdldChlbGVtZW50KT8uZXJyb3JzO1xuICAgICAgaWYoZXJyb3JzKSB7ICAgICAgICAgXG4gICAgICAgIGNvbnN0IGVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXTtcbiAgICAgICAgZm9ybUNvbnRyb2xNZXNzYWdlc1tlbGVtZW50XSA9IHRoaXMuZXJyb3JNZXNzYWdlc1tlcnJvcl07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG4iXX0=