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
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 18);
    i0.ɵɵlistener("click", function QuizConfigComponent_ng_container_12_div_6_Template_button_click_6_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.removeRatioOption(i_r6)); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "delete");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const i_r6 = ctx.index;
    i0.ɵɵproperty("formGroupName", i_r6);
    i0.ɵɵadvance(4);
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
    i0.ɵɵtemplate(6, QuizConfigComponent_ng_container_12_div_6_Template, 9, 2, "div", 11);
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
    i0.ɵɵelementStart(0, "mat-option", 21);
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
            correctAnswer: [this.value.correctAnswer ?? '', [Validators.required]],
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
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 5, consts: [[1, "image-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], ["title", ""], [4, "ngIf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [3, "formGroupName"], [1, "ratio-option"], ["appearance", "outline", "color", "accent", 1, "ratio-option-input"], ["matInput", "", "type", "text", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function QuizConfigComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵlistener("click", function QuizConfigComponent_Template_button_click_15_listener() { return ctx.updateQuiz(); });
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
        MatSelectModule, i6.MatLegacySelect, i7.MatLegacyOption, MatIconModule, i8.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#f0ad4e}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lBOEJoQyxpQ0FBMEQ7SUFBQSxZQUEyQztJQUFBLGlCQUFZOzs7SUFBdkQsZUFBMkM7SUFBM0Msb0VBQTJDOzs7O0lBTW5HLCtCQUFxRixjQUFBLHlCQUFBLGdCQUFBO0lBR3BFLFlBQWdCO0lBQUEsaUJBQVk7SUFDdkMsNEJBQXFEO0lBQ3ZELGlCQUFpQjtJQUNqQixrQ0FBa0Y7SUFBL0IscU9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQy9FLGdDQUFVO0lBQUEsc0JB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Q2IsbUJBQW1CO2lCQUNwQjs4REFlUSxLQUFLO2tCQUFiLEtBQUs7WUFDSSxTQUFTO2tCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1BcnJheSwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRMZWdhY3lGb3JtRmllbGRNb2R1bGUgYXMgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWZvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0TGVnYWN5SW5wdXRNb2R1bGUgYXMgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHsgTWF0TGVnYWN5U2VsZWN0TW9kdWxlIGFzIE1hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXNlbGVjdCc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxudHlwZSBSYXRpb09wdGlvbiA9IHsgdmFsdWU6IHN0cmluZyB9O1xuZXhwb3J0IHR5cGUgUXVpekNvbmZpZyA9IHsgcXVlc3Rpb246IHN0cmluZywgY29ycmVjdEFuc3dlcjogc3RyaW5nLCByYXRpb09wdGlvbnM6IFJhdGlvT3B0aW9uW10gfTtcblxuZnVuY3Rpb24gdmFsaWRhdGVSYXRpb09wdGlvbnMoKTogVmFsaWRhdG9yRm4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsID0+IHtcbiAgICBjb25zdCBvcHRpb25zQXJyYXkgPSBjb250cm9sIGFzIEZvcm1BcnJheTtcbiAgICBpZiAob3B0aW9uc0FycmF5LmNvbnRyb2xzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybiB7ICdub3RFbm91Z2hPcHRpb25zJzogdHJ1ZSB9O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWl6LWNvbmZpZycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImltYWdlLWJsb2NrLW1vZGFsXCIgPlxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJxdWl6Q29uZmlnRm9ybVwiPlxuXG4gICAgICAgIDxoMSBtYXQtZGlhbG9nLXRpdGxlPlF1aXogQ29uZmlndXJhdGlvbjwvaDE+XG5cbiAgICAgICAgPGgyPjEpIENyZWF0ZSBhIFF1ZXN0aW9uLjwvaDI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgPG1hdC1sYWJlbD5RdWVzdGlvbjwvbWF0LWxhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYSAjdGl0bGUgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwicXVlc3Rpb25cIj48L3RleHRhcmVhPlxuICAgICAgICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydxdWVzdGlvbiddfX08L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMj4yKSBDcmVhdGUgdGhlIHBvc3NpYmxlIGFuc3dlcnMgPHNwYW4+KENyZWF0ZSBhdCBsZWFzdCAyIG9wdGlvbnMpPC9zcGFuPjwvaDI+XG4gICAgICAgICAgPGRpdiBmb3JtQXJyYXlOYW1lPVwicmF0aW9PcHRpb25zXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW2Zvcm1Hcm91cE5hbWVdPVwiaVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW8tb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIiBjbGFzcz1cInJhdGlvLW9wdGlvbi1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5PcHRpb24ge3tpICsgMX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJ2YWx1ZVwiLz5cbiAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlUmF0aW9PcHRpb24oaSlcIj5cbiAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlcnMtYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZFJhdGlvT3B0aW9uKClcIj5BZGQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8udmFsaWQgJiYgcXVpekNvbmZpZ0Zvcm0uZ2V0KCdyYXRpb09wdGlvbnMnKT8udmFsaWRcIj5cbiAgICAgICAgICA8aDI+MykgU2VsZWN0IHRoZSBjb3JyZWN0IGFuc3dlcjwvaDI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+QW5zd2VyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJjb3JyZWN0QW5zd2VyXCI+XG4gICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW3ZhbHVlXT1cIm9wdGlvbi5nZXQoJ3ZhbHVlJyk/LnZhbHVlXCI+XG4gICAgICAgICAgICAgICAge3sgb3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWUgfX1cbiAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snY29ycmVjdEFuc3dlciddfX08L21hdC1lcnJvcj5cbiAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwZGF0ZVF1aXooKVwiIFtkaXNhYmxlZF09XCJxdWl6Q29uZmlnRm9ybS5pbnZhbGlkXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2xvc2VDb25maWcoKVwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICA6aG9zdCBmb3JtIC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIC5hbnN3ZXJzLWFjdGlvbi1ncm91cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgaDIgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjZjBhZDRlO1xuICAgIH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBRdWl6Q29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHsgfVxuICBkZXN0b3J5OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcblxuICBlcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0geyByZXF1aXJlZDogJ1JlcXVpcmVkJyB9O1xuICBxdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHF1ZXN0aW9uOiAnJywgY29ycmVjdEFuc3dlcjogJycgfVxuXG4gIHF1aXpDb25maWdGb3JtITogRm9ybUdyb3VwO1xuXG4gIGdldCByYXRpb09wdGlvbnMoKTogRm9ybUFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5xdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpIHZhbHVlITogUXVpekNvbmZpZztcbiAgQE91dHB1dCgpIHF1aXpWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8UXVpekNvbmZpZz4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnF1aXpDb25maWdGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBxdWVzdGlvbjogW3RoaXMudmFsdWUucXVlc3Rpb24gPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBjb3JyZWN0QW5zd2VyOiBbdGhpcy52YWx1ZS5jb3JyZWN0QW5zd2VyID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcmF0aW9PcHRpb25zOiB0aGlzLmZvcm1CdWlsZGVyLmFycmF5KCh0aGlzLnZhbHVlLnJhdGlvT3B0aW9ucyA/PyBbXSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChvcHRpb24gPT4gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7IHZhbHVlOiBbb3B0aW9uLnZhbHVlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSB9KSksIHZhbGlkYXRlUmF0aW9PcHRpb25zKCkpXG5cbiAgICB9KTtcblxuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0uc3RhdHVzQ2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRFcnJvcnNNZXNzYWdlcyh0aGlzLnF1aXpDb25maWdGb3JtLCB0aGlzLnF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5Lm5leHQodHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVRdWl6KCkge1xuICAgIHRoaXMucXVpelZhbHVlLmVtaXQodGhpcy5xdWl6Q29uZmlnRm9ybS52YWx1ZSk7XG4gIH1cblxuICBjbG9zZUNvbmZpZygpIHtcbiAgICB0aGlzLnF1aXpWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgYWRkUmF0aW9PcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICB2YWx1ZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gICAgdGhpcy5yYXRpb09wdGlvbnMucHVzaChvcHRpb24pO1xuICB9XG5cbiAgcmVtb3ZlUmF0aW9PcHRpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuXG4gIHNldEVycm9yc01lc3NhZ2VzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtQ29udHJvbE1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gZm9ybUdyb3VwLmdldChlbGVtZW50KT8uZXJyb3JzO1xuICAgICAgaWYoZXJyb3JzKSB7ICAgICAgICAgXG4gICAgICAgIGNvbnN0IGVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXTtcbiAgICAgICAgZm9ybUNvbnRyb2xNZXNzYWdlc1tlbGVtZW50XSA9IHRoaXMuZXJyb3JNZXNzYWdlc1tlcnJvcl07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG4iXX0=