import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, ViewChild } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/material/legacy-button';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import * as i9 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import * as i1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/material/legacy-form-field';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import * as i4 from '@angular/material/legacy-input';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import * as i6 from '@angular/material/legacy-radio';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import * as i7 from '@angular/material/legacy-select';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { Subject, takeUntil } from 'rxjs';
import * as i8 from '@angular/material/legacy-core';

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

function QuizConfigComponent_mat_error_11_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r1.quizConfigFormErrorMessages["question"]);
    }
}
function QuizConfigComponent_div_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "mat-radio-group", 18);
        i0.ɵɵelement(3, "mat-radio-button", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 20)(5, "mat-label");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "input", 21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 22);
        i0.ɵɵlistener("click", function QuizConfigComponent_div_15_Template_button_click_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.removeRatioOption(i_r6)); });
        i0.ɵɵelementStart(9, "mat-icon");
        i0.ɵɵtext(10, "delete");
        i0.ɵɵelementEnd()()()();
    }
    if (rf & 2) {
        const i_r6 = ctx.index;
        i0.ɵɵproperty("formGroupName", i_r6);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate("value", i_r6);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("Option ", i_r6 + 1, "");
    }
}
function QuizConfigComponent_mat_option_25_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-option", 19);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r9 = ctx.$implicit;
        let tmp_0_0;
        let tmp_1_0;
        i0.ɵɵproperty("value", (tmp_0_0 = option_r9.get("value")) == null ? null : tmp_0_0.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = option_r9.get("value")) == null ? null : tmp_1_0.value, " ");
    }
}
function QuizConfigComponent_mat_error_26_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r4.quizConfigFormErrorMessages["correctAnswer"]);
    }
}
class QuizConfigComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.destory = new Subject();
        this.errorMessages = { required: 'Required' };
        this.quizConfigFormErrorMessages = { question: '', correctAnswer: '' };
        this.quizValue = new EventEmitter();
    }
    ngOnInit() {
        var _a, _b;
        this.quizConfigForm = this.formBuilder.group({
            question: [(_a = this.value.question) !== null && _a !== void 0 ? _a : '', [Validators.required]],
            correctAnswer: [(_b = this.value.correctAnswer) !== null && _b !== void 0 ? _b : '', [Validators.required]],
            ratioOptions: this.formBuilder.array([])
        });
        this.quizConfigForm.statusChanges
            .pipe(takeUntil(this.destory))
            .subscribe(() => this.setErrorsMessages(this.quizConfigForm, this.quizConfigFormErrorMessages));
    }
    ngOnDestroy() {
        this.destory.next(true);
    }
    updateImage() {
        this.quizValue.emit(this.quizConfigForm.value);
    }
    closeConfig() {
        this.quizValue.emit(this.value);
    }
    get ratioOptions() {
        return this.quizConfigForm.get('ratioOptions');
    }
    addRatioOption() {
        const option = this.formBuilder.group({
            value: ['', [Validators.required]],
            isCorrect: [false, [Validators.required]]
        });
        this.ratioOptions.push(option);
    }
    removeRatioOption(index) {
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
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 32, vars: 6, consts: [[1, "image-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], ["title", ""], [4, "ngIf"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], [3, "formGroupName"], [1, "ratio-option"], ["formControlName", "isCorrect"], [3, "value"], ["appearance", "outline", "color", "accent", 1, "ratio-option-input"], ["matInput", "", "type", "text", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"]], template: function QuizConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "h2", 2);
            i0.ɵɵtext(3, "Quiz Configuration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h3");
            i0.ɵɵtext(5, "1) Create a Question.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field", 3)(7, "mat-label");
            i0.ɵɵtext(8, "Question");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "textarea", 4, 5);
            i0.ɵɵtemplate(11, QuizConfigComponent_mat_error_11_Template, 2, 1, "mat-error", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h3");
            i0.ɵɵtext(13, "2) Create the possible answers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 7);
            i0.ɵɵtemplate(15, QuizConfigComponent_div_15_Template, 11, 3, "div", 8);
            i0.ɵɵelementStart(16, "div", 9)(17, "button", 10);
            i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_17_listener() { return ctx.addRatioOption(); });
            i0.ɵɵtext(18, "Add Answer");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "h3");
            i0.ɵɵtext(20, "3) Select correct answer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "mat-form-field", 3)(22, "mat-label");
            i0.ɵɵtext(23, "Answer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-select", 11);
            i0.ɵɵtemplate(25, QuizConfigComponent_mat_option_25_Template, 2, 2, "mat-option", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(26, QuizConfigComponent_mat_error_26_Template, 2, 1, "mat-error", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 13)(28, "button", 14);
            i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_28_listener() { return ctx.updateImage(); });
            i0.ɵɵtext(29, "Save");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "button", 15);
            i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_30_listener() { return ctx.closeConfig(); });
            i0.ɵɵtext(31, "Cancel");
            i0.ɵɵelementEnd()()()();
        }
        if (rf & 2) {
            let tmp_1_0;
            let tmp_4_0;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.quizConfigForm);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_1_0.errors);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.ratioOptions.controls);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngForOf", ctx.ratioOptions.controls);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (tmp_4_0 = ctx.quizConfigForm.get("correctAnswer")) == null ? null : tmp_4_0.errors);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.quizConfigForm.invalid);
        }
    }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, MatLegacyInputModule, i3.MatLegacyError, i3.MatLegacyFormField, i3.MatLegacyLabel, i4.MatLegacyInput, MatLegacyButtonModule, i5.MatLegacyButton, MatLegacyFormFieldModule,
        MatLegacyRadioModule, i6.MatLegacyRadioGroup, i6.MatLegacyRadioButton, MatLegacySelectModule, i7.MatLegacySelect, i8.MatLegacyOption, MatIconModule, i9.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuizConfigComponent, [{
            type: Component,
            args: [{ selector: 'quiz-config', standalone: true, template: `
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
  `, imports: [
                        CommonModule,
                        MatLegacyInputModule,
                        MatLegacyButtonModule,
                        MatLegacyFormFieldModule,
                        MatLegacyRadioModule,
                        MatLegacySelectModule,
                        MatIconModule,
                        ReactiveFormsModule,
                    ], styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}\n"] }]
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
function NgxEditorjsQuizBlockComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3)(1, "p", 4, 5);
        i0.ɵɵlistener("focus", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_p_focus_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onMouseEnter($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 6);
        i0.ɵɵlistener("click", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.openEditQuizOverlay()); });
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5, "edit");
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("autofocus", true)("innerHTML", ctx_r2.value, i0.ɵɵsanitizeHtml);
    }
}
class NgxEditorjsQuizBlockComponent extends BaseBlockComponent {
    constructor() {
        super(...arguments);
        this.useInlineToolbar = false;
        this.useInputType = false;
        this._openEditQuizOverlay = false;
        this._value = { question: '', correctAnswer: '' };
    }
    ngOnInit() {
        !!this.value && (this._value = JSON.parse(this.value));
        console.log('this.value', this.value);
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
        console.log({
            updateImage: value
        });
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
    }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "quizValue"], [1, "quiz-conatiner"], ["contenteditable", "", 1, "flex-spacer", 3, "autofocus", "innerHTML", "focus"], ["paragraph", ""], ["mat-mini-fab", "", 1, "image-block-button", "mat-elevation-z2", 3, "click"]], template: function NgxEditorjsQuizBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, NgxEditorjsQuizBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, NgxEditorjsQuizBlockComponent_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx._openEditQuizOverlay)("ngIfElse", _r1);
        }
    }, dependencies: [CommonModule, i2.NgIf, AutofocusDirective,
        MatLegacyButtonModule, i5.MatLegacyButton, MatIconModule, i9.MatIcon, QuizConfigComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}p[_ngcontent-%COMP%]{font-size:1.6rem;line-height:3.2rem}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockComponent, [{
            type: Component,
            args: [{ standalone: true, selector: 'ngx-editorjs-quiz-block', template: `
    <ng-container *ngIf="_openEditQuizOverlay; else elseTemplate">
      <quiz-config [value]="_value" (quizValue)="updateQuiz($event)"></quiz-config>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="quiz-conatiner">
        <p class="flex-spacer" #paragraph contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></p>
        <button  
          mat-mini-fab 
          class="image-block-button mat-elevation-z2"
          (click)="openEditQuizOverlay()">
          <mat-icon>edit</mat-icon>
        </button>
      </div>
    </ng-template>
  `, imports: [
                        CommonModule,
                        AutofocusDirective,
                        MatLegacyButtonModule,
                        MatIconModule,
                        QuizConfigComponent
                    ], styles: [":host{display:flex;flex-direction:column}p{font-size:1.6rem;line-height:3.2rem}\n"] }]
        }], null, { element: [{
                type: ViewChild,
                args: ['paragraph']
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

export { NgxEditorjsQuizBlockComponent, NgxEditorjsQuizBlockMediator, NgxEditorjsQuizBlockService };
//# sourceMappingURL=tmdjr-ngx-editorjs-quiz-block.mjs.map
