import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ChangeDetectionStrategy, Input, Output, ViewChild } from '@angular/core';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i8 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import * as i1 from '@angular/forms';
import { Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i4 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import * as i7 from '@angular/material/core';

class NgxEditorjsQuizBlockService {
    constructor() { }
}
NgxEditorjsQuizBlockService.ɵfac = function NgxEditorjsQuizBlockService_Factory(t) { return new (t || NgxEditorjsQuizBlockService)(); };
NgxEditorjsQuizBlockService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxEditorjsQuizBlockService, factory: NgxEditorjsQuizBlockService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

function QuizConfigComponent_mat_error_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.quizConfigFormErrorMessages["question"]);
    }
}
function QuizConfigComponent_ng_container_11_div_6_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const i_r7 = ctx.index;
        i0.ɵɵproperty("formGroupName", i_r7);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("Option ", i_r7 + 1, "");
    }
}
function QuizConfigComponent_ng_container_11_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx_r1.ratioOptions.controls);
    }
}
function QuizConfigComponent_ng_container_12_mat_option_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r14 = ctx.$implicit;
        let tmp_0_0;
        let tmp_1_0;
        i0.ɵɵproperty("value", (tmp_0_0 = option_r14.get("value")) == null ? null : tmp_0_0.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = option_r14.get("value")) == null ? null : tmp_1_0.value, " ");
    }
}
function QuizConfigComponent_ng_container_12_mat_error_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r13 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r13.quizConfigFormErrorMessages["correctAnswer"]);
    }
}
function QuizConfigComponent_ng_container_12_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        let tmp_1_0;
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx_r2.ratioOptions.controls);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx_r2.quizConfigForm.get("correctAnswer")) == null ? null : tmp_1_0.errors);
    }
}
function QuizConfigComponent_ng_container_13_mat_error_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r16 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r16.quizConfigFormErrorMessages["correctAnswerResponse"]);
    }
}
function QuizConfigComponent_ng_container_13_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        let tmp_0_0;
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx_r3.quizConfigForm.get("correctAnswerResponse")) == null ? null : tmp_0_0.errors);
    }
}
function QuizConfigComponent_ng_container_14_mat_error_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r17 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r17.quizConfigFormErrorMessages["incorrectAnswerResponse"]);
    }
}
function QuizConfigComponent_ng_container_14_Template(rf, ctx) {
    if (rf & 1) {
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
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        let tmp_0_0;
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", (tmp_0_0 = ctx_r4.quizConfigForm.get("incorrectAnswerResponse")) == null ? null : tmp_0_0.errors);
    }
}
function validateRatioOptions() {
    return (control) => {
        const optionsArray = control;
        if (optionsArray.controls.length < 2) {
            return { 'notEnoughOptions': true };
        }
        return null;
    };
}
class QuizConfigComponent {
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
        var _a, _b, _c, _d, _e;
        this.quizConfigForm = this.formBuilder.group({
            question: [(_a = this.value.question) !== null && _a !== void 0 ? _a : '', [Validators.required]],
            correctAnswer: [(_b = this.value.correctAnswer) !== null && _b !== void 0 ? _b : undefined, [Validators.required]],
            correctAnswerResponse: [(_c = this.value.correctAnswerResponse) !== null && _c !== void 0 ? _c : '', [Validators.required]],
            incorrectAnswerResponse: [(_d = this.value.incorrectAnswerResponse) !== null && _d !== void 0 ? _d : '', [Validators.required]],
            ratioOptions: this.formBuilder.array(((_e = this.value.ratioOptions) !== null && _e !== void 0 ? _e : [])
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
        var _a;
        (_a = this.quizConfigForm.get('correctAnswer')) === null || _a === void 0 ? void 0 : _a.setValue(undefined);
        this.ratioOptions.removeAt(index);
    }
    setErrorsMessages(formGroup, formControlMessages) {
        Object.keys(formGroup.controls).forEach(element => {
            var _a;
            const errors = (_a = formGroup.get(element)) === null || _a === void 0 ? void 0 : _a.errors;
            if (errors) {
                const error = Object.keys(errors)[0];
                formControlMessages[element] = this.errorMessages[error];
            }
        });
    }
}
QuizConfigComponent.ɵfac = function QuizConfigComponent_Factory(t) { return new (t || QuizConfigComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 20, vars: 7, consts: [[1, "quiz-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], [4, "ngIf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [3, "formGroupName"], [1, "radio-option-container"], ["matInput", "", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "correctAnswerResponse"], ["matInput", "", "formControlName", "incorrectAnswerResponse"]], template: function QuizConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }
        if (rf & 2) {
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
        }
    }, dependencies: [CommonModule, i1$1.NgForOf, i1$1.NgIf, MatInputModule, i3.MatInput, i4.MatFormField, i4.MatLabel, i4.MatError, MatButtonModule, i5.MatButton, i5.MatIconAnchor, MatFormFieldModule,
        MatSelectModule, i6.MatSelect, i7.MatOption, MatIconModule, i8.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}.radio-option-container[_ngcontent-%COMP%]{display:flex;gap:10px}.radio-option-container[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}"], changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuizConfigComponent, [{
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
            }] });
})();

const _c0 = ["paragraph"];
function NgxEditorjsQuizBlockComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "quiz-config", 2);
        i0.ɵɵlistener("quizValue", function NgxEditorjsQuizBlockComponent_ng_container_0_Template_quiz_config_quizValue_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateQuiz($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx_r0._value);
    }
}
function NgxEditorjsQuizBlockComponent_ng_template_1_mat_radio_button_7_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-button", 9);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r7 = ctx.$implicit;
        i0.ɵɵproperty("value", option_r7.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(option_r7.value);
    }
}
function NgxEditorjsQuizBlockComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3)(1, "h1");
        i0.ɵɵtext(2, "Quiz");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", null, 4);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-radio-group", 5);
        i0.ɵɵtemplate(7, NgxEditorjsQuizBlockComponent_ng_template_1_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
        i0.ɵɵlistener("click", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.openEditQuizOverlay()); });
        i0.ɵɵtext(10, "Edit");
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx_r2._value.question);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx_r2._value.correctAnswer);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r2._value.ratioOptions);
    }
}
class NgxEditorjsQuizBlockComponent extends BaseBlockComponent {
    constructor() {
        super(...arguments);
        this.useInlineToolbar = false;
        this.useInputType = false;
        this._openEditQuizOverlay = false;
        this._value = {
            question: '',
            correctAnswer: '',
            ratioOptions: [],
            correctAnswerResponse: '',
            incorrectAnswerResponse: ''
        };
    }
    ngOnInit() {
        !!this.value && (this._value = JSON.parse(this.value));
        !this.value && this.openEditQuizOverlay();
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.viewChild = this.element;
    }
    onMouseEnter(event) {
        super.onMouseEnter(event);
    }
    openEditQuizOverlay() {
        this._openEditQuizOverlay = true;
    }
    updateQuiz(value) {
        this._value = value;
        this.changeValue(JSON.stringify(value));
        this._openEditQuizOverlay = false;
    }
}
NgxEditorjsQuizBlockComponent.ɵfac = /*@__PURE__*/ function () { let ɵNgxEditorjsQuizBlockComponent_BaseFactory; return function NgxEditorjsQuizBlockComponent_Factory(t) { return (ɵNgxEditorjsQuizBlockComponent_BaseFactory || (ɵNgxEditorjsQuizBlockComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NgxEditorjsQuizBlockComponent)))(t || NgxEditorjsQuizBlockComponent); }; }();
NgxEditorjsQuizBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizBlockComponent, selectors: [["ngx-editorjs-quiz-block"]], viewQuery: function NgxEditorjsQuizBlockComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
        }
    }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "quizValue"], [1, "quiz-conatiner"], ["paragraph", ""], [1, "answer-ratio-group", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"]], template: function NgxEditorjsQuizBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, NgxEditorjsQuizBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, NgxEditorjsQuizBlockComponent_ng_template_1_Template, 11, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx._openEditQuizOverlay)("ngIfElse", _r1);
        }
    }, dependencies: [CommonModule, i1$1.NgForOf, i1$1.NgIf, MatButtonModule, i5.MatButton, MatRadioModule, i3$1.MatRadioGroup, i3$1.MatRadioButton, MatIconModule,
        QuizConfigComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockComponent, [{
            type: Component,
            args: [{ standalone: true, selector: 'ngx-editorjs-quiz-block', template: `
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
  `, imports: [
                        CommonModule,
                        MatButtonModule,
                        MatRadioModule,
                        MatIconModule,
                        QuizConfigComponent
                    ], styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
        }], null, { element: [{
                type: ViewChild,
                args: ['paragraph']
            }] });
})();

function NgxEditorjsQuizClientBlockComponent_p_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "p", 8);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r0.isAnswerCorrect ? "successful-text" : "failure-text");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.answerResponse);
    }
}
function NgxEditorjsQuizClientBlockComponent_li_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li")(1, "mat-radio-button", 9);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const option_r3 = ctx.$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", option_r3.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(option_r3.value);
    }
}
class NgxEditorjsQuizClientBlockComponent {
    constructor() {
        this.isAnswerCorrect = undefined;
        this.answerResponse = undefined;
        this.answerSubmited = false;
        this.userAnswer = undefined;
        this._value = {
            question: '',
            correctAnswer: '',
            ratioOptions: [],
            correctAnswerResponse: '',
            incorrectAnswerResponse: ''
        };
    }
    set value(value) {
        !!value && (this._value = JSON.parse(value));
    }
    onQuizAnswerClick() {
        this.answerSubmited = true;
        this.isAnswerCorrect = this.userAnswer === this._value.correctAnswer;
        this.answerResponse = this.isAnswerCorrect ? this._value.correctAnswerResponse : this._value.incorrectAnswerResponse;
    }
}
NgxEditorjsQuizClientBlockComponent.ɵfac = function NgxEditorjsQuizClientBlockComponent_Factory(t) { return new (t || NgxEditorjsQuizClientBlockComponent)(); };
NgxEditorjsQuizClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizClientBlockComponent, selectors: [["ngx-editorjs-image-client-block"]], inputs: { value: "value" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 6, consts: [[1, "quiz-conatiner"], [3, "ngClass", 4, "ngIf"], ["paragraph", ""], [3, "ngModel", "disabled", "ngModelChange"], ["type", "a", 1, "answer-ratio-group"], [4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], [3, "ngClass"], [3, "value"]], template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1");
            i0.ɵɵtext(2, "Quiz");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, NgxEditorjsQuizClientBlockComponent_p_3_Template, 2, 2, "p", 1);
            i0.ɵɵelementStart(4, "p", null, 2);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-radio-group", 3);
            i0.ɵɵlistener("ngModelChange", function NgxEditorjsQuizClientBlockComponent_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.userAnswer = $event; });
            i0.ɵɵelementStart(8, "ol", 4);
            i0.ɵɵtemplate(9, NgxEditorjsQuizClientBlockComponent_li_9_Template, 3, 2, "li", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 6)(11, "button", 7);
            i0.ɵɵlistener("click", function NgxEditorjsQuizClientBlockComponent_Template_button_click_11_listener() { return ctx.onQuizAnswerClick(); });
            i0.ɵɵtext(12, "Submit");
            i0.ɵɵelementEnd()()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.answerResponse);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx._value.question);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.userAnswer)("disabled", ctx.answerSubmited);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx._value.ratioOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.userAnswer || ctx.answerSubmited);
        }
    }, dependencies: [CommonModule, i1$1.NgClass, i1$1.NgForOf, i1$1.NgIf, MatButtonModule, i5.MatButton, MatRadioModule, i3$1.MatRadioGroup, i3$1.MatRadioButton, FormsModule, i1.NgControlStatus, i1.NgModel], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.answer-ratio-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\")\";margin-right:.5em}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizClientBlockComponent, [{
            type: Component,
            args: [{ standalone: true, selector: 'ngx-editorjs-image-client-block', imports: [
                        CommonModule,
                        MatButtonModule,
                        MatRadioModule,
                        FormsModule
                    ], template: `
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
  `, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.answer-ratio-group li:before{content:\")\";margin-right:.5em}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
        }], null, { value: [{
                type: Input
            }] });
})();

class NgxEditorjsQuizBlockMediator {
}
NgxEditorjsQuizBlockMediator.ɵfac = function NgxEditorjsQuizBlockMediator_Factory(t) { return new (t || NgxEditorjsQuizBlockMediator)(); };
NgxEditorjsQuizBlockMediator.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizBlockMediator, selectors: [["ngx-editorjs-quiz-paragraph-block"]], inputs: { blockId: "blockId", form: "form", formControlName: "formControlName" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 3, consts: [[3, "formGroup"], [3, "blockId", "formControlName"]], template: function NgxEditorjsQuizBlockMediator_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "ngx-editorjs-quiz-block", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("blockId", ctx.blockId)("formControlName", ctx.formControlName);
        }
    }, dependencies: [ReactiveFormsModule, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, NgxEditorjsQuizBlockComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockMediator, [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'ngx-editorjs-quiz-paragraph-block',
                    template: `
    <div [formGroup]="form">
      <ngx-editorjs-quiz-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-quiz-block>
    </div>
  `,
                    imports: [
                        ReactiveFormsModule,
                        NgxEditorjsQuizBlockComponent
                    ],
                }]
        }], null, { blockId: [{
                type: Input
            }], form: [{
                type: Input
            }], formControlName: [{
                type: Input
            }] });
})();

/*
 * Public API Surface of ngx-editorjs-quiz-block
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxEditorjsQuizBlockComponent, NgxEditorjsQuizBlockMediator, NgxEditorjsQuizBlockService, NgxEditorjsQuizClientBlockComponent };
//# sourceMappingURL=tmdjr-ngx-editorjs-quiz-block.mjs.map
