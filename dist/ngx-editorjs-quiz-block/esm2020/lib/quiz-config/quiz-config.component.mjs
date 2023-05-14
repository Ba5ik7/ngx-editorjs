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
function QuizConfigComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.quizConfigFormErrorMessages["question"]);
} }
function QuizConfigComponent_ng_container_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "mat-form-field", 3)(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "textarea", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 16);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_11_div_6_Template_a_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const i_r7 = restoredCtx.index; const ctx_r8 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r8.removeRatioOption(i_r7)); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r7 = ctx.index;
    i0.ɵɵproperty("formGroupName", i_r7);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Option ", i_r7 + 1, "");
} }
function QuizConfigComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "Create the possible answers ");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "(Create at least 2 options)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵtemplate(6, QuizConfigComponent_ng_container_11_div_6_Template, 9, 2, "div", 10);
    i0.ɵɵelementStart(7, "div", 11)(8, "button", 12);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_11_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.addRatioOption()); });
    i0.ɵɵtext(9, "Add Answer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r1.ratioOptions.controls);
} }
function QuizConfigComponent_ng_container_12_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵproperty("value", (tmp_0_0 = option_r14.get("value")) == null ? null : tmp_0_0.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = option_r14.get("value")) == null ? null : tmp_1_0.value, " ");
} }
function QuizConfigComponent_ng_container_12_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r13.quizConfigFormErrorMessages["correctAnswer"]);
} }
function QuizConfigComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "Select the correct answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 17);
    i0.ɵɵtemplate(7, QuizConfigComponent_ng_container_12_mat_option_7_Template, 2, 2, "mat-option", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, QuizConfigComponent_ng_container_12_mat_error_8_Template, 2, 1, "mat-error", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    let tmp_1_0;
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r2.ratioOptions.controls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r2.quizConfigForm.get("correctAnswer")) == null ? null : tmp_1_0.errors);
} }
function QuizConfigComponent_ng_container_13_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r16.quizConfigFormErrorMessages["correctAnswerResponse"]);
} }
function QuizConfigComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "Correct answer response.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Response");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "textarea", 20);
    i0.ɵɵtemplate(7, QuizConfigComponent_ng_container_13_mat_error_7_Template, 2, 1, "mat-error", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx_r3.quizConfigForm.get("correctAnswerResponse")) == null ? null : tmp_0_0.errors);
} }
function QuizConfigComponent_ng_container_14_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r17.quizConfigFormErrorMessages["incorrectAnswerResponse"]);
} }
function QuizConfigComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h3");
    i0.ɵɵtext(2, "Incorrect answer response.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Response");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "textarea", 21);
    i0.ɵɵtemplate(7, QuizConfigComponent_ng_container_14_mat_error_7_Template, 2, 1, "mat-error", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx_r4.quizConfigForm.get("incorrectAnswerResponse")) == null ? null : tmp_0_0.errors);
} }
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
QuizConfigComponent.ɵfac = function QuizConfigComponent_Factory(t) { return new (t || QuizConfigComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 20, vars: 7, consts: [[1, "quiz-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], [4, "ngIf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [3, "formGroupName"], [1, "radio-option-container"], ["matInput", "", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "correctAnswerResponse"], ["matInput", "", "formControlName", "incorrectAnswerResponse"]], template: function QuizConfigComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Quiz Configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h3");
        i0.ɵɵtext(5, "Create a Question.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 3)(7, "mat-label");
        i0.ɵɵtext(8, "Question");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "textarea", 4);
        i0.ɵɵtemplate(10, QuizConfigComponent_mat_error_10_Template, 2, 1, "mat-error", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, QuizConfigComponent_ng_container_11_Template, 10, 1, "ng-container", 5);
        i0.ɵɵtemplate(12, QuizConfigComponent_ng_container_12_Template, 9, 2, "ng-container", 5);
        i0.ɵɵtemplate(13, QuizConfigComponent_ng_container_13_Template, 8, 1, "ng-container", 5);
        i0.ɵɵtemplate(14, QuizConfigComponent_ng_container_14_Template, 8, 1, "ng-container", 5);
        i0.ɵɵelementStart(15, "div", 6)(16, "button", 7);
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_16_listener() { return ctx.updateQuiz(); });
        i0.ɵɵtext(17, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 8);
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_18_listener() { return ctx.closeConfig(); });
        i0.ɵɵtext(19, "Cancel");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.quizConfigForm);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_1_0.errors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_2_0.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_3_0.valid) && ((tmp_3_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_3_0.valid));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_4_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_4_0.valid) && ((tmp_4_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_4_0.valid) && ((tmp_4_0 = ctx.quizConfigForm.get("correctAnswer")) == null ? null : tmp_4_0.valid));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_5_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx.quizConfigForm.get("correctAnswer")) == null ? null : tmp_5_0.valid));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.quizConfigForm.invalid);
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, MatInputModule, i3.MatInput, i4.MatFormField, i4.MatLabel, i4.MatError, MatButtonModule, i5.MatButton, i5.MatIconAnchor, MatFormFieldModule,
        MatSelectModule, i6.MatSelect, i7.MatOption, MatIconModule, i8.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}.radio-option-container[_ngcontent-%COMP%]{display:flex;gap:10px}.radio-option-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuizConfigComponent, [{
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
    }], function () { return [{ type: i1.FormBuilder }]; }, { value: [{
            type: Input
        }], quizValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lBcUNoQyxpQ0FBMEQ7SUFBQSxZQUEyQztJQUFBLGlCQUFZOzs7SUFBdkQsZUFBMkM7SUFBM0Msb0VBQTJDOzs7O0lBTW5HLCtCQUFxRixjQUFBLHdCQUFBLGdCQUFBO0lBR3BFLFlBQWdCO0lBQUEsaUJBQVk7SUFDdkMsK0JBQXNEO0lBQ3hELGlCQUFpQjtJQUNqQiw2QkFBK0Q7SUFBL0IsZ09BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQzVELGdDQUFVO0lBQUEsc0JBQU07SUFBQSxpQkFBVyxFQUFBLEVBQUEsRUFBQTs7O0lBUGdD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IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxudHlwZSBSYXRpb09wdGlvbiA9IHsgdmFsdWU6IHN0cmluZyB9O1xuZXhwb3J0IHR5cGUgUXVpekNvbmZpZyA9IHtcbiAgcXVlc3Rpb246IHN0cmluZyxcbiAgY29ycmVjdEFuc3dlcjogc3RyaW5nLFxuICBjb3JyZWN0QW5zd2VyUmVzcG9uc2U6IHN0cmluZyxcbiAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6IHN0cmluZyxcbiAgcmF0aW9PcHRpb25zOiBSYXRpb09wdGlvbltdXG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVJhdGlvT3B0aW9ucygpOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnNBcnJheSA9IGNvbnRyb2wgYXMgRm9ybUFycmF5O1xuICAgIGlmIChvcHRpb25zQXJyYXkuY29udHJvbHMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIHsgJ25vdEVub3VnaE9wdGlvbnMnOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aXotY29uZmlnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInF1aXotYmxvY2stbW9kYWxcIiA+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInF1aXpDb25maWdGb3JtXCI+XG5cbiAgICAgICAgPGgyIG1hdC1kaWFsb2ctdGl0bGU+UXVpeiBDb25maWd1cmF0aW9uPC9oMj5cblxuICAgICAgICA8aDM+Q3JlYXRlIGEgUXVlc3Rpb24uPC9oMz5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICA8bWF0LWxhYmVsPlF1ZXN0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInF1ZXN0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1sncXVlc3Rpb24nXX19PC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDM+Q3JlYXRlIHRoZSBwb3NzaWJsZSBhbnN3ZXJzIDxzcGFuPihDcmVhdGUgYXQgbGVhc3QgMiBvcHRpb25zKTwvc3Bhbj48L2gzPlxuICAgICAgICAgIDxkaXYgZm9ybUFycmF5TmFtZT1cInJhdGlvT3B0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHJhdGlvT3B0aW9ucy5jb250cm9sczsgbGV0IGkgPSBpbmRleFwiIFtmb3JtR3JvdXBOYW1lXT1cImlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvLW9wdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5PcHRpb24ge3tpICsgMX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPGEgbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIChjbGljayk9XCJyZW1vdmVSYXRpb09wdGlvbihpKVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlcnMtYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZFJhdGlvT3B0aW9uKClcIj5BZGQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDM+U2VsZWN0IHRoZSBjb3JyZWN0IGFuc3dlcjwvaDM+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+QW5zd2VyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJjb3JyZWN0QW5zd2VyXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW3ZhbHVlXT1cIm9wdGlvbi5nZXQoJ3ZhbHVlJyk/LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWUgfX1cbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snY29ycmVjdEFuc3dlciddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiAgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgzPkNvcnJlY3QgYW5zd2VyIHJlc3BvbnNlLjwvaDM+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+UmVzcG9uc2U8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJjb3JyZWN0QW5zd2VyUmVzcG9uc2VcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlclJlc3BvbnNlJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydjb3JyZWN0QW5zd2VyUmVzcG9uc2UnXX19PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWQgJiYgIHF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJyk/LnZhbGlkICYmIHF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMz5JbmNvcnJlY3QgYW5zd2VyIHJlc3BvbnNlLjwvaDM+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+UmVzcG9uc2U8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZScpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2UnXX19PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGRhdGVRdWl6KClcIiBbZGlzYWJsZWRdPVwicXVpekNvbmZpZ0Zvcm0uaW52YWxpZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlQ29uZmlnKClcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgOmhvc3QgZm9ybSAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAuYW5zd2Vycy1hY3Rpb24tZ3JvdXAge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5yYWRpby1vcHRpb24tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5yYWRpby1vcHRpb24tY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aXpDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikgeyB9XG4gIGRlc3Rvcnk6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHJlcXVpcmVkOiAnUmVxdWlyZWQnIH07XG4gIHF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHsgcXVlc3Rpb246ICcnLCBjb3JyZWN0QW5zd2VyOiAnJyB9XG5cbiAgcXVpekNvbmZpZ0Zvcm0hOiBGb3JtR3JvdXA7XG5cbiAgZ2V0IHJhdGlvT3B0aW9ucygpOiBGb3JtQXJyYXkge1xuICAgIHJldHVybiB0aGlzLnF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJykgYXMgRm9ybUFycmF5O1xuICB9XG5cbiAgQElucHV0KCkgdmFsdWUhOiBRdWl6Q29uZmlnO1xuICBAT3V0cHV0KCkgcXVpelZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxRdWl6Q29uZmlnPigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHF1ZXN0aW9uOiBbdGhpcy52YWx1ZS5xdWVzdGlvbiA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGNvcnJlY3RBbnN3ZXI6IFt0aGlzLnZhbHVlLmNvcnJlY3RBbnN3ZXIgPz8gdW5kZWZpbmVkLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgY29ycmVjdEFuc3dlclJlc3BvbnNlOiBbdGhpcy52YWx1ZS5jb3JyZWN0QW5zd2VyUmVzcG9uc2UgPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTogW3RoaXMudmFsdWUuaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2UgPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICByYXRpb09wdGlvbnM6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoKHRoaXMudmFsdWUucmF0aW9PcHRpb25zID8/IFtdKVxuICAgICAgICAgICAgICAgICAgICAubWFwKG9wdGlvbiA9PiB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHsgdmFsdWU6IFtvcHRpb24udmFsdWUsIFZhbGlkYXRvcnMucmVxdWlyZWRdIH0pKSwgdmFsaWRhdGVSYXRpb09wdGlvbnMoKSlcblxuICAgIH0pO1xuXG4gICAgdGhpcy5xdWl6Q29uZmlnRm9ybS5zdGF0dXNDaGFuZ2VzXG4gICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdG9yeSkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldEVycm9yc01lc3NhZ2VzKHRoaXMucXVpekNvbmZpZ0Zvcm0sIHRoaXMucXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3RvcnkubmV4dCh0cnVlKTtcbiAgfVxuXG4gIHVwZGF0ZVF1aXooKSB7XG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnF1aXpDb25maWdGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIGNsb3NlQ29uZmlnKCkge1xuICAgIHRoaXMucXVpelZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBhZGRSYXRpb09wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHZhbHVlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcbiAgICB0aGlzLnJhdGlvT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gIH1cblxuICByZW1vdmVSYXRpb09wdGlvbihpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5xdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8uc2V0VmFsdWUodW5kZWZpbmVkKTtcbiAgICB0aGlzLnJhdGlvT3B0aW9ucy5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuICBzZXRFcnJvcnNNZXNzYWdlcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUNvbnRyb2xNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IGZvcm1Hcm91cC5nZXQoZWxlbWVudCk/LmVycm9ycztcbiAgICAgIGlmKGVycm9ycykgeyAgICAgICAgIFxuICAgICAgICBjb25zdCBlcnJvciA9IE9iamVjdC5rZXlzKGVycm9ycylbMF07XG4gICAgICAgIGZvcm1Db250cm9sTWVzc2FnZXNbZWxlbWVudF0gPSB0aGlzLmVycm9yTWVzc2FnZXNbZXJyb3JdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuIl19