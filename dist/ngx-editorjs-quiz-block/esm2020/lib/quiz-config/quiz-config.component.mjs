import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
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
function QuizConfigComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.quizConfigFormErrorMessages["question"]);
} }
function QuizConfigComponent_ng_container_12_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 18);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_12_div_6_Template_button_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const i_r8 = restoredCtx.index; const ctx_r9 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r9.removeRatioOption(i_r8)); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r8 = ctx.index;
    i0.ɵɵproperty("formGroupName", i_r8);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Option ", i_r8 + 1, "");
} }
function QuizConfigComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "2) Create the possible answers ");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "(Create at least 2 options)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 10);
    i0.ɵɵtemplate(6, QuizConfigComponent_ng_container_12_div_6_Template, 9, 2, "div", 11);
    i0.ɵɵelementStart(7, "div", 12)(8, "button", 13);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_12_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.addRatioOption()); });
    i0.ɵɵtext(9, "Add Answer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.ratioOptions.controls);
} }
function QuizConfigComponent_ng_container_13_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r15 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵproperty("value", (tmp_0_0 = option_r15.get("value")) == null ? null : tmp_0_0.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = option_r15.get("value")) == null ? null : tmp_1_0.value, " ");
} }
function QuizConfigComponent_ng_container_13_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r14.quizConfigFormErrorMessages["correctAnswer"]);
} }
function QuizConfigComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "3) Select the correct answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 19);
    i0.ɵɵtemplate(7, QuizConfigComponent_ng_container_13_mat_option_7_Template, 2, 2, "mat-option", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, QuizConfigComponent_ng_container_13_mat_error_8_Template, 2, 1, "mat-error", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    let tmp_1_0;
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", ctx_r3.ratioOptions.controls);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r3.quizConfigForm.get("correctAnswer")) == null ? null : tmp_1_0.errors);
} }
function QuizConfigComponent_ng_container_14_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r18.quizConfigFormErrorMessages["correctAnswerResponse"]);
} }
function QuizConfigComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "4) Correct answer response.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Response");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "textarea", 22, 5);
    i0.ɵɵtemplate(8, QuizConfigComponent_ng_container_14_mat_error_8_Template, 2, 1, "mat-error", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx_r4.quizConfigForm.get("correctAnswerResponse")) == null ? null : tmp_0_0.errors);
} }
function QuizConfigComponent_ng_container_15_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r20.quizConfigFormErrorMessages["incorrectAnswerResponse"]);
} }
function QuizConfigComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "5) Incorrect answer response.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Response");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "textarea", 23, 5);
    i0.ɵɵtemplate(8, QuizConfigComponent_ng_container_15_mat_error_8_Template, 2, 1, "mat-error", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    let tmp_0_0;
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx_r5.quizConfigForm.get("incorrectAnswerResponse")) == null ? null : tmp_0_0.errors);
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
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 21, vars: 7, consts: [[1, "quiz-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], ["title", ""], [4, "ngIf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [3, "formGroupName"], [1, "ratio-option"], ["appearance", "outline", "color", "accent", 1, "ratio-option-input"], ["matInput", "", "type", "text", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "correctAnswerResponse"], ["matInput", "", "formControlName", "incorrectAnswerResponse"]], template: function QuizConfigComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "h1", 2);
        i0.ɵɵtext(3, "Quiz Configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "h2");
        i0.ɵɵtext(5, "1) Create a Question.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 3)(7, "mat-label");
        i0.ɵɵtext(8, "Question");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "textarea", 4, 5);
        i0.ɵɵtemplate(11, QuizConfigComponent_mat_error_11_Template, 2, 1, "mat-error", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, QuizConfigComponent_ng_container_12_Template, 10, 1, "ng-container", 6);
        i0.ɵɵtemplate(13, QuizConfigComponent_ng_container_13_Template, 9, 2, "ng-container", 6);
        i0.ɵɵtemplate(14, QuizConfigComponent_ng_container_14_Template, 9, 1, "ng-container", 6);
        i0.ɵɵtemplate(15, QuizConfigComponent_ng_container_15_Template, 9, 1, "ng-container", 6);
        i0.ɵɵelementStart(16, "div", 7)(17, "button", 8);
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_17_listener() { return ctx.updateQuiz(); });
        i0.ɵɵtext(18, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "button", 9);
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_19_listener() { return ctx.closeConfig(); });
        i0.ɵɵtext(20, "Cancel");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        let tmp_5_0;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.quizConfigForm);
        i0.ɵɵadvance(10);
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
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, MatInputModule, i3.MatLegacyError, i3.MatLegacyFormField, i3.MatLegacyLabel, i4.MatLegacyInput, MatButtonModule, i5.MatLegacyButton, MatFormFieldModule,
        MatSelectModule, i6.MatLegacySelect, i7.MatLegacyOption, MatIconModule, i8.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#f0ad4e}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuizConfigComponent, [{
        type: Component,
        args: [{ selector: 'quiz-config', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
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
  `, imports: [
                    CommonModule,
                    MatInputModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ], styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}:host h2 span{font-size:12px;color:#f0ad4e}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { value: [{
            type: Input
        }], quizValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEcsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lBcUNoQyxpQ0FBMEQ7SUFBQSxZQUEyQztJQUFBLGlCQUFZOzs7SUFBdkQsZUFBMkM7SUFBM0Msb0VBQTJDOzs7O0lBTW5HLCtCQUFxRixjQUFBLHlCQUFBLGdCQUFBO0lBR3BFLFlBQWdCO0lBQUEsaUJBQVk7SUFDdkMsNEJBQXFEO0lBQ3ZELGlCQUFpQjtJQUNqQixrQ0FBa0Y7SUFBL0Isc09BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQy9FLGdD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O1lBQ0ksU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IE1hdExlZ2FjeUZvcm1GaWVsZE1vZHVsZSBhcyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRMZWdhY3lJbnB1dE1vZHVsZSBhcyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1pbnB1dCc7XG5pbXBvcnQgeyBNYXRMZWdhY3lTZWxlY3RNb2R1bGUgYXMgTWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG50eXBlIFJhdGlvT3B0aW9uID0geyB2YWx1ZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBRdWl6Q29uZmlnID0ge1xuICBxdWVzdGlvbjogc3RyaW5nLFxuICBjb3JyZWN0QW5zd2VyOiBzdHJpbmcsXG4gIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogc3RyaW5nLFxuICBpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTogc3RyaW5nLFxuICByYXRpb09wdGlvbnM6IFJhdGlvT3B0aW9uW11cbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmF0aW9PcHRpb25zKCk6IFZhbGlkYXRvckZuIHtcbiAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgbnVsbCA9PiB7XG4gICAgY29uc3Qgb3B0aW9uc0FycmF5ID0gY29udHJvbCBhcyBGb3JtQXJyYXk7XG4gICAgaWYgKG9wdGlvbnNBcnJheS5jb250cm9scy5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm4geyAnbm90RW5vdWdoT3B0aW9ucyc6IHRydWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXVpei1jb25maWcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpei1ibG9jay1tb2RhbFwiID5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwicXVpekNvbmZpZ0Zvcm1cIj5cblxuICAgICAgICA8aDEgbWF0LWRpYWxvZy10aXRsZT5RdWl6IENvbmZpZ3VyYXRpb248L2gxPlxuXG4gICAgICAgIDxoMj4xKSBDcmVhdGUgYSBRdWVzdGlvbi48L2gyPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgIDxtYXQtbGFiZWw+UXVlc3Rpb248L21hdC1sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgI3RpdGxlIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInF1ZXN0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1sncXVlc3Rpb24nXX19PC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDI+MikgQ3JlYXRlIHRoZSBwb3NzaWJsZSBhbnN3ZXJzIDxzcGFuPihDcmVhdGUgYXQgbGVhc3QgMiBvcHRpb25zKTwvc3Bhbj48L2gyPlxuICAgICAgICAgIDxkaXYgZm9ybUFycmF5TmFtZT1cInJhdGlvT3B0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHJhdGlvT3B0aW9ucy5jb250cm9sczsgbGV0IGkgPSBpbmRleFwiIFtmb3JtR3JvdXBOYW1lXT1cImlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGlvLW9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCIgY2xhc3M9XCJyYXRpby1vcHRpb24taW5wdXRcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+T3B0aW9uIHt7aSArIDF9fTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIi8+XG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cIndhcm5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZVJhdGlvT3B0aW9uKGkpXCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJzLWFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJhZGRSYXRpb09wdGlvbigpXCI+QWRkIEFuc3dlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkICYmIHF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgyPjMpIFNlbGVjdCB0aGUgY29ycmVjdCBhbnN3ZXI8L2gyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPkFuc3dlcjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiY29ycmVjdEFuc3dlclwiPlxuICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHJhdGlvT3B0aW9ucy5jb250cm9sczsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJvcHRpb24uZ2V0KCd2YWx1ZScpPy52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbi5nZXQoJ3ZhbHVlJyk/LnZhbHVlIH19XG4gICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ2NvcnJlY3RBbnN3ZXInKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ2NvcnJlY3RBbnN3ZXInXX19PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWQgJiYgIHF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJyk/LnZhbGlkICYmIHF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMj40KSBDb3JyZWN0IGFuc3dlciByZXNwb25zZS48L2gyPlxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICA8bWF0LWxhYmVsPlJlc3BvbnNlPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgI3RpdGxlIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cImNvcnJlY3RBbnN3ZXJSZXNwb25zZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyUmVzcG9uc2UnKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ2NvcnJlY3RBbnN3ZXJSZXNwb25zZSddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiAgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgyPjUpIEluY29ycmVjdCBhbnN3ZXIgcmVzcG9uc2UuPC9oMj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5SZXNwb25zZTwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhICN0aXRsZSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZScpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2UnXX19PC9tYXQtZXJyb3I+XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGRhdGVRdWl6KClcIiBbZGlzYWJsZWRdPVwicXVpekNvbmZpZ0Zvcm0uaW52YWxpZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlQ29uZmlnKClcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgOmhvc3QgZm9ybSAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAuYW5zd2Vycy1hY3Rpb24tZ3JvdXAge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIDpob3N0IGgyIHNwYW57XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogI2YwYWQ0ZTtcbiAgICB9XG4gIGBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUXVpekNvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IH1cbiAgZGVzdG9yeTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHsgcmVxdWlyZWQ6ICdSZXF1aXJlZCcgfTtcbiAgcXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyBxdWVzdGlvbjogJycsIGNvcnJlY3RBbnN3ZXI6ICcnIH1cblxuICBxdWl6Q29uZmlnRm9ybSE6IEZvcm1Hcm91cDtcblxuICBnZXQgcmF0aW9PcHRpb25zKCk6IEZvcm1BcnJheSB7XG4gICAgcmV0dXJuIHRoaXMucXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICBASW5wdXQoKSB2YWx1ZSE6IFF1aXpDb25maWc7XG4gIEBPdXRwdXQoKSBxdWl6VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPFF1aXpDb25maWc+KCk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5xdWl6Q29uZmlnRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgcXVlc3Rpb246IFt0aGlzLnZhbHVlLnF1ZXN0aW9uID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgY29ycmVjdEFuc3dlcjogW3RoaXMudmFsdWUuY29ycmVjdEFuc3dlciA/PyB1bmRlZmluZWQsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjb3JyZWN0QW5zd2VyUmVzcG9uc2U6IFt0aGlzLnZhbHVlLmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGluY29ycmVjdEFuc3dlclJlc3BvbnNlOiBbdGhpcy52YWx1ZS5pbmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHJhdGlvT3B0aW9uczogdGhpcy5mb3JtQnVpbGRlci5hcnJheSgodGhpcy52YWx1ZS5yYXRpb09wdGlvbnMgPz8gW10pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAob3B0aW9uID0+IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoeyB2YWx1ZTogW29wdGlvbi52YWx1ZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpLCB2YWxpZGF0ZVJhdGlvT3B0aW9ucygpKVxuXG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aXpDb25maWdGb3JtLnN0YXR1c0NoYW5nZXNcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5KSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0RXJyb3JzTWVzc2FnZXModGhpcy5xdWl6Q29uZmlnRm9ybSwgdGhpcy5xdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdG9yeS5uZXh0KHRydWUpO1xuICB9XG5cbiAgdXBkYXRlUXVpeigpIHtcbiAgICB0aGlzLnF1aXpWYWx1ZS5lbWl0KHRoaXMucXVpekNvbmZpZ0Zvcm0udmFsdWUpO1xuICB9XG5cbiAgY2xvc2VDb25maWcoKSB7XG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGFkZFJhdGlvT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmFsdWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZVJhdGlvT3B0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy5zZXRWYWx1ZSh1bmRlZmluZWQpO1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuXG4gIHNldEVycm9yc01lc3NhZ2VzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtQ29udHJvbE1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gZm9ybUdyb3VwLmdldChlbGVtZW50KT8uZXJyb3JzO1xuICAgICAgaWYoZXJyb3JzKSB7ICAgICAgICAgXG4gICAgICAgIGNvbnN0IGVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXTtcbiAgICAgICAgZm9ybUNvbnRyb2xNZXNzYWdlc1tlbGVtZW50XSA9IHRoaXMuZXJyb3JNZXNzYWdlc1tlcnJvcl07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG4iXX0=