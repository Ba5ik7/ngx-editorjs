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
            // ratioOptions: this.formBuilder.array(this.value.ratioOptions ?? [], validateRatioOptions())
            ratioOptions: this.formBuilder.array((this.value.ratioOptions ?? []).map(option => this.formBuilder.group({ value: [option.value, Validators.required] })), validateRatioOptions())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFxQyxtQkFBbUIsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqSCxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxlQUFlLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7O0lBOEJoQyxpQ0FBMEQ7SUFBQSxZQUEyQztJQUFBLGlCQUFZOzs7SUFBdkQsZUFBMkM7SUFBM0Msb0VBQTJDOzs7O0lBTW5HLCtCQUFxRixjQUFBLHlCQUFBLGdCQUFBO0lBR3BFLFlBQWdCO0lBQUEsaUJBQVk7SUFDdkMsNEJBQXFEO0lBQ3ZELGlCQUFpQjtJQUNqQixrQ0FBa0Y7SUFBL0IscU9BQVMsZUFBQSw4QkFBb0IsQ0FBQSxJQUFDO0lBQy9FLGdDQUFVO0lBQUEsc0JB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Q2YsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCOzhEQWVRLEtBQUs7a0JBQWIsS0FBSztZQUNJLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IE1hdExlZ2FjeUZvcm1GaWVsZE1vZHVsZSBhcyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRMZWdhY3lJbnB1dE1vZHVsZSBhcyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1pbnB1dCc7XG5pbXBvcnQgeyBNYXRMZWdhY3lTZWxlY3RNb2R1bGUgYXMgTWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG50eXBlIFJhdGlvT3B0aW9uID0geyB2YWx1ZTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBRdWl6Q29uZmlnID0geyBxdWVzdGlvbjogc3RyaW5nLCBjb3JyZWN0QW5zd2VyOiBzdHJpbmcsIHJhdGlvT3B0aW9uczogUmF0aW9PcHRpb25bXSB9O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVJhdGlvT3B0aW9ucygpOiBWYWxpZGF0b3JGbiB7XG4gIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwgPT4ge1xuICAgIGNvbnN0IG9wdGlvbnNBcnJheSA9IGNvbnRyb2wgYXMgRm9ybUFycmF5O1xuICAgIGlmIChvcHRpb25zQXJyYXkuY29udHJvbHMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIHsgJ25vdEVub3VnaE9wdGlvbnMnOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aXotY29uZmlnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYmxvY2stbW9kYWxcIiA+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInF1aXpDb25maWdGb3JtXCI+XG5cbiAgICAgICAgPGgxIG1hdC1kaWFsb2ctdGl0bGU+UXVpeiBDb25maWd1cmF0aW9uPC9oMT5cblxuICAgICAgICA8aDI+MSkgQ3JlYXRlIGEgUXVlc3Rpb24uPC9oMj5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICA8bWF0LWxhYmVsPlF1ZXN0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhICN0aXRsZSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJxdWVzdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ3F1ZXN0aW9uJ119fTwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJxdWl6Q29uZmlnRm9ybS5nZXQoJ3F1ZXN0aW9uJyk/LnZhbGlkXCI+XG4gICAgICAgICAgPGgyPjIpIENyZWF0ZSB0aGUgcG9zc2libGUgYW5zd2VycyA8c3Bhbj4oQ3JlYXRlIGF0IGxlYXN0IDIgb3B0aW9ucyk8L3NwYW4+PC9oMj5cbiAgICAgICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJyYXRpb09wdGlvbnNcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbZm9ybUdyb3VwTmFtZV09XCJpXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYXRpby1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiIGNsYXNzPVwicmF0aW8tb3B0aW9uLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk9wdGlvbiB7e2kgKyAxfX08L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwidGV4dFwiIGZvcm1Db250cm9sTmFtZT1cInZhbHVlXCIvPlxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY29sb3I9XCJ3YXJuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZW1vdmVSYXRpb09wdGlvbihpKVwiPlxuICAgICAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2Vycy1hY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiYWRkUmF0aW9PcHRpb24oKVwiPkFkZCBBbnN3ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdxdWVzdGlvbicpPy52YWxpZCAmJiBxdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpPy52YWxpZFwiPlxuICAgICAgICAgIDxoMj4zKSBTZWxlY3QgdGhlIGNvcnJlY3QgYW5zd2VyPC9oMj5cbiAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5BbnN3ZXI8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImNvcnJlY3RBbnN3ZXJcIj5cbiAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwib3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWVcIj5cbiAgICAgICAgICAgICAgICB7eyBvcHRpb24uZ2V0KCd2YWx1ZScpPy52YWx1ZSB9fVxuICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICA8bWF0LWVycm9yICpuZ0lmPVwicXVpekNvbmZpZ0Zvcm0uZ2V0KCdjb3JyZWN0QW5zd2VyJyk/LmVycm9yc1wiPnt7cXVpekNvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWydjb3JyZWN0QW5zd2VyJ119fTwvbWF0LWVycm9yPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBkYXRlUXVpeigpXCIgW2Rpc2FibGVkXT1cInF1aXpDb25maWdGb3JtLmludmFsaWRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjbG9zZUNvbmZpZygpXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIDpob3N0IGZvcm0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIDpob3N0IGZvcm0gLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgLmFuc3dlcnMtYWN0aW9uLWdyb3VwIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICA6aG9zdCBoMiBzcGFue1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICNmMGFkNGU7XG4gICAgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aXpDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikgeyB9XG4gIGRlc3Rvcnk6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHJlcXVpcmVkOiAnUmVxdWlyZWQnIH07XG4gIHF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHsgcXVlc3Rpb246ICcnLCBjb3JyZWN0QW5zd2VyOiAnJyB9XG5cbiAgcXVpekNvbmZpZ0Zvcm0hOiBGb3JtR3JvdXA7XG5cbiAgZ2V0IHJhdGlvT3B0aW9ucygpOiBGb3JtQXJyYXkge1xuICAgIHJldHVybiB0aGlzLnF1aXpDb25maWdGb3JtLmdldCgncmF0aW9PcHRpb25zJykgYXMgRm9ybUFycmF5O1xuICB9XG5cbiAgQElucHV0KCkgdmFsdWUhOiBRdWl6Q29uZmlnO1xuICBAT3V0cHV0KCkgcXVpelZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxRdWl6Q29uZmlnPigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHF1ZXN0aW9uOiBbdGhpcy52YWx1ZS5xdWVzdGlvbiA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGNvcnJlY3RBbnN3ZXI6IFt0aGlzLnZhbHVlLmNvcnJlY3RBbnN3ZXIgPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICAvLyByYXRpb09wdGlvbnM6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkodGhpcy52YWx1ZS5yYXRpb09wdGlvbnMgPz8gW10sIHZhbGlkYXRlUmF0aW9PcHRpb25zKCkpXG4gICAgICByYXRpb09wdGlvbnM6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoKHRoaXMudmFsdWUucmF0aW9PcHRpb25zID8/IFtdKS5tYXAob3B0aW9uID0+IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoeyB2YWx1ZTogW29wdGlvbi52YWx1ZSwgVmFsaWRhdG9ycy5yZXF1aXJlZF0gfSkpLCB2YWxpZGF0ZVJhdGlvT3B0aW9ucygpKVxuXG4gICAgfSk7XG5cbiAgICB0aGlzLnF1aXpDb25maWdGb3JtLnN0YXR1c0NoYW5nZXNcbiAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0b3J5KSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0RXJyb3JzTWVzc2FnZXModGhpcy5xdWl6Q29uZmlnRm9ybSwgdGhpcy5xdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdG9yeS5uZXh0KHRydWUpO1xuICB9XG5cbiAgdXBkYXRlUXVpeigpIHtcbiAgICB0aGlzLnF1aXpWYWx1ZS5lbWl0KHRoaXMucXVpekNvbmZpZ0Zvcm0udmFsdWUpO1xuICB9XG5cbiAgY2xvc2VDb25maWcoKSB7XG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGFkZFJhdGlvT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmFsdWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXVxuICAgIH0pO1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnB1c2gob3B0aW9uKTtcbiAgfVxuXG4gIHJlbW92ZVJhdGlvT3B0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGlvT3B0aW9ucy5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuICBzZXRFcnJvcnNNZXNzYWdlcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCwgZm9ybUNvbnRyb2xNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IGZvcm1Hcm91cC5nZXQoZWxlbWVudCk/LmVycm9ycztcbiAgICAgIGlmKGVycm9ycykgeyAgICAgICAgIFxuICAgICAgICBjb25zdCBlcnJvciA9IE9iamVjdC5rZXlzKGVycm9ycylbMF07XG4gICAgICAgIGZvcm1Db250cm9sTWVzc2FnZXNbZWxlbWVudF0gPSB0aGlzLmVycm9yTWVzc2FnZXNbZXJyb3JdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cblxuIl19