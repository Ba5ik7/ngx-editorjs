import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRatioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/legacy-form-field";
import * as i4 from "@angular/material/legacy-input";
import * as i5 from "@angular/material/legacy-button";
import * as i6 from "@angular/material/legacy-radio";
import * as i7 from "@angular/material/legacy-select";
import * as i8 from "@angular/material/legacy-core";
import * as i9 from "@angular/material/icon";
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
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "mat-radio-group", 16);
    i0.ɵɵelement(3, "mat-radio-button", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-form-field", 18)(5, "mat-label");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 20);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_12_div_6_Template_button_click_8_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.removeRatioOption(i_r6)); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r6 = ctx.index;
    i0.ɵɵproperty("formGroupName", i_r6);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("value", i_r6);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Option ", i_r6 + 1, "");
} }
function QuizConfigComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "2) Create the possible answers ");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "(Create at least 2 options)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 10);
    i0.ɵɵtemplate(6, QuizConfigComponent_ng_container_12_div_6_Template, 11, 3, "div", 11);
    i0.ɵɵelementStart(7, "div", 12)(8, "button", 13);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_12_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.addRatioOption()); });
    i0.ɵɵtext(9, "Add Answer");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r2.ratioOptions.controls);
} }
function QuizConfigComponent_ng_container_13_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵproperty("value", (tmp_0_0 = option_r13.get("value")) == null ? null : tmp_0_0.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = option_r13.get("value")) == null ? null : tmp_1_0.value, " ");
} }
function QuizConfigComponent_ng_container_13_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r12.quizConfigFormErrorMessages["correctAnswer"]);
} }
function QuizConfigComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "3) Select the correct answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-form-field", 3)(4, "mat-label");
    i0.ɵɵtext(5, "Answer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-select", 21);
    i0.ɵɵtemplate(7, QuizConfigComponent_ng_container_13_mat_option_7_Template, 2, 2, "mat-option", 22);
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
    ngOnInit() {
        this.quizConfigForm = this.formBuilder.group({
            question: [this.value.question ?? '', [Validators.required]],
            correctAnswer: [this.value.correctAnswer ?? '', [Validators.required]],
            ratioOptions: this.formBuilder.array([], validateRatioOptions())
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
            const errors = formGroup.get(element)?.errors;
            if (errors) {
                const error = Object.keys(errors)[0];
                formControlMessages[element] = this.errorMessages[error];
            }
        });
    }
}
QuizConfigComponent.ɵfac = function QuizConfigComponent_Factory(t) { return new (t || QuizConfigComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 5, consts: [[1, "image-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], ["title", ""], [4, "ngIf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [3, "formGroupName"], [1, "ratio-option"], ["formControlName", "isCorrect"], [3, "value"], ["appearance", "outline", "color", "accent", 1, "ratio-option-input"], ["matInput", "", "type", "text", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"]], template: function QuizConfigComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(14, "div", 7)(15, "button", 8);
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_15_listener() { return ctx.updateImage(); });
        i0.ɵɵtext(16, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "button", 9);
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_17_listener() { return ctx.closeConfig(); });
        i0.ɵɵtext(18, "Cancel");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.quizConfigForm);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_1_0.errors);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_2_0.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ((tmp_3_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_3_0.valid) && ((tmp_3_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_3_0.valid));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.quizConfigForm.invalid);
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, MatInputModule, i3.MatLegacyError, i3.MatLegacyFormField, i3.MatLegacyLabel, i4.MatLegacyInput, MatButtonModule, i5.MatLegacyButton, MatFormFieldModule,
        MatRatioModule, i6.MatLegacyRadioGroup, i6.MatLegacyRadioButton, MatSelectModule, i7.MatLegacySelect, i8.MatLegacyOption, MatIconModule, i9.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#f0ad4e}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuizConfigComponent, [{
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

        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateImage()" [disabled]="quizConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `, imports: [
                    CommonModule,
                    MatInputModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatRatioModule,
                    MatSelectModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ], styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}:host h2 span{font-size:12px;color:#f0ad4e}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { value: [{
            type: Input
        }], quizValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7SUE0QmhDLGlDQUEwRDtJQUFBLFlBQTJDO0lBQUEsaUJBQVk7OztJQUF2RCxlQUEyQztJQUEzQyxvRUFBMkM7Ozs7SUFNbkcsK0JBQXFGLGNBQUEsMEJBQUE7SUFHL0UsdUNBQW1EO0lBQ3JELGlCQUFrQjtJQUNsQiwwQ0FBK0UsZ0JBQUE7SUFDbEUsWUFBZ0I7SUFBQSxpQkFB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QkFDZCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjs4REFXUSxLQUFLO2tCQUFiLEtBQUs7WUFDSSxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRMZWdhY3lGb3JtRmllbGRNb2R1bGUgYXMgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWZvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0TGVnYWN5SW5wdXRNb2R1bGUgYXMgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHsgTWF0TGVnYWN5UmFkaW9Nb2R1bGUgYXMgTWF0UmF0aW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHsgTWF0TGVnYWN5U2VsZWN0TW9kdWxlIGFzIE1hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXNlbGVjdCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJhdGlvT3B0aW9ucygpOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnNBcnJheSA9IGNvbnRyb2wgYXMgRm9ybUFycmF5O1xuICAgIGlmIChvcHRpb25zQXJyYXkuY29udHJvbHMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIHsgJ25vdEVub3VnaE9wdGlvbnMnOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aXotY29uZmlnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYmxvY2stbW9kYWxcIiA+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInF1aXpDb25maWdGb3JtXCI+XG5cbiAgICAgICAgPGgxIG1hdC1kaWFsb2ctdGl0bGU+UXVpeiBDb25maWd1cmF0aW9uPC9oMT5cblxuICAgICAgICA8aDI+MSkgQ3JlYXRlIGEgUXVlc3Rpb24uPC9oMj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICA8bWF0LWxhYmVsPlF1ZXN0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhICN0aXRsZSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJxdWVzdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ3F1ZXN0aW9uJ119fTwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgyPjIpIENyZWF0ZSB0aGUgcG9zc2libGUgYW5zd2VycyA8c3Bhbj4oQ3JlYXRlIGF0IGxlYXN0IDIgb3B0aW9ucyk8L3NwYW4+PC9oMj5cbiAgICAgICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJyYXRpb09wdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbZm9ybUdyb3VwTmFtZV09XCJpXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpby1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cImlzQ29ycmVjdFwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJ7e2l9fVwiPjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiIGNsYXNzPVwicmF0aW8tb3B0aW9uLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk9wdGlvbiB7e2kgKyAxfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIvPlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmVSYXRpb09wdGlvbihpKVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2Vycy1hY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYWRkUmF0aW9PcHRpb24oKVwiPkFkZCBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiBxdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMj4zKSBTZWxlY3QgdGhlIGNvcnJlY3QgYW5zd2VyPC9oMj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5BbnN3ZXI8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImNvcnJlY3RBbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwib3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWVcIj5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24uZ2V0KCd2YWx1ZScpPy52YWx1ZSB9fVxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydjb3JyZWN0QW5zd2VyJ119fTwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBkYXRlSW1hZ2UoKVwiIFtkaXNhYmxlZF09XCJxdWl6Q29uZmlnRm9ybS5pbnZhbGlkXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2VDb25maWcoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5hbnN3ZXJzLWFjdGlvbi1ncm91cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgaDIgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjZjBhZDRlO1xuICAgIH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRSYXRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWl6Q29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgfVxuICBkZXN0b3J5OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyByZXF1aXJlZDogJ1JlcXVpcmVkJyB9O1xuICBxdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHF1ZXN0aW9uOiAnJywgY29ycmVjdEFuc3dlcjogJycgfVxuXG4gIHF1aXpDb25maWdGb3JtITogRm9ybUdyb3VwO1xuXG4gIEBJbnB1dCgpIHZhbHVlITogeyBxdWVzdGlvbjogc3RyaW5nLCBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgfTtcbiAgQE91dHB1dCgpIHF1aXpWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyBxdWVzdGlvbjogc3RyaW5nLCBjb3JyZWN0QW5zd2VyOiBzdHJpbmcgfT4oKTtcblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHF1ZXN0aW9uOiBbdGhpcy52YWx1ZS5xdWVzdGlvbiA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGNvcnJlY3RBbnN3ZXI6IFt0aGlzLnZhbHVlLmNvcnJlY3RBbnN3ZXIgPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICByYXRpb09wdGlvbnM6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW10sIHZhbGlkYXRlUmF0aW9PcHRpb25zKCkpXG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aXpDb25maWdGb3JtLnN0YXR1c0NoYW5nZXNcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5KSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0RXJyb3JzTWVzc2FnZXModGhpcy5xdWl6Q29uZmlnRm9ybSwgdGhpcy5xdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdG9yeS5uZXh0KHRydWUpO1xuICB9XG5cbiAgdXBkYXRlSW1hZ2UoKSB7XG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnF1aXpDb25maWdGb3JtLnZhbHVlKTtcbiAgfVxuXG4gIGNsb3NlQ29uZmlnKCkge1xuICAgIHRoaXMucXVpelZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBnZXQgcmF0aW9PcHRpb25zKCk6IEZvcm1BcnJheSB7XG4gICAgcmV0dXJuIHRoaXMucXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKSBhcyBGb3JtQXJyYXk7XG4gIH1cblxuICBhZGRSYXRpb09wdGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHZhbHVlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBpc0NvcnJlY3Q6IFtmYWxzZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZVJhdGlvT3B0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGlvT3B0aW9ucy5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuICBzZXRFcnJvcnNNZXNzYWdlcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUNvbnRyb2xNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IGZvcm1Hcm91cC5nZXQoZWxlbWVudCk/LmVycm9ycztcbiAgICAgIGlmKGVycm9ycykgeyAgICAgICAgIFxuICAgICAgICBjb25zdCBlcnJvciA9IE9iamVjdC5rZXlzKGVycm9ycylbMF07XG4gICAgICAgIGZvcm1Db250cm9sTWVzc2FnZXNbZWxlbWVudF0gPSB0aGlzLmVycm9yTWVzc2FnZXNbZXJyb3JdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuIl19