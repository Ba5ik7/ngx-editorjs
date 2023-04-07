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
function QuizConfigComponent_div_15_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const i_r6 = ctx.index;
    i0.ɵɵproperty("formGroupName", i_r6);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("value", i_r6);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Option ", i_r6 + 1, "");
} }
function QuizConfigComponent_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    i0.ɵɵproperty("value", (tmp_0_0 = option_r9.get("value")) == null ? null : tmp_0_0.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (tmp_1_0 = option_r9.get("value")) == null ? null : tmp_1_0.value, " ");
} }
function QuizConfigComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.quizConfigFormErrorMessages["correctAnswer"]);
} }
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
            const errors = formGroup.get(element)?.errors;
            if (errors) {
                const error = Object.keys(errors)[0];
                formControlMessages[element] = this.errorMessages[error];
            }
        });
    }
}
QuizConfigComponent.ɵfac = function QuizConfigComponent_Factory(t) { return new (t || QuizConfigComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
QuizConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: QuizConfigComponent, selectors: [["quiz-config"]], inputs: { value: "value" }, outputs: { quizValue: "quizValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 32, vars: 6, consts: [[1, "image-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], ["title", ""], [4, "ngIf"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], [3, "formGroupName"], [1, "ratio-option"], ["formControlName", "isCorrect"], [3, "value"], ["appearance", "outline", "color", "accent", 1, "ratio-option-input"], ["matInput", "", "type", "text", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"]], template: function QuizConfigComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, dependencies: [CommonModule, i2.NgForOf, i2.NgIf, MatInputModule, i3.MatLegacyError, i3.MatLegacyFormField, i3.MatLegacyLabel, i4.MatLegacyInput, MatButtonModule, i5.MatLegacyButton, MatFormFieldModule,
        MatRatioModule, i6.MatLegacyRadioGroup, i6.MatLegacyRadioButton, MatSelectModule, i7.MatLegacySelect, i8.MatLegacyOption, MatIconModule, i9.MatIcon, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i1.FormArrayName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(QuizConfigComponent, [{
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
                    MatInputModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    MatRatioModule,
                    MatSelectModule,
                    MatIconModule,
                    ReactiveFormsModule,
                ], styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { value: [{
            type: Input
        }], quizValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFxQyxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixJQUFJLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixJQUFJLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RixPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7SUFlaEMsaUNBQTBEO0lBQUEsWUFBMkM7SUFBQSxpQkFBWTs7O0lBQXZELGVBQTJDO0lBQTNDLG9FQUEyQzs7OztJQUtyRywrQkFBcUYsY0FBQSwwQkFBQTtJQUcvRSx1Q0FBbUQ7SUFDckQsaUJBQWtCO0lBQ2xCLDBDQUErRSxnQkFBQTtJQUNsRSxZQUFnQjtJQUFBLGlCQUFZ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eEIsaUdBQVMsaUJBQWEsSUFBQztRQUFDLHVCQUFNO1FBQUEsaUJBQVMsRUFBQSxFQUFBLEVBQUE7Ozs7UUE3Q3hGLGVBQTRCO1FBQTVCLDhDQUE0QjtRQVFsQixnQkFBNEM7UUFBNUMscUdBQTRDO1FBS2hDLGVBQTBCO1FBQTFCLG1EQUEwQjtRQXVCakIsZ0JBQTBCO1FBQTFCLG1EQUEwQjtRQUkvQyxlQUFpRDtRQUFqRCwwR0FBaUQ7UUFJZ0IsZUFBbUM7UUFBbkMscURBQW1DO3dCQTBCdEgsWUFBWSx1QkFDWixjQUFjLGtGQUNkLGVBQWUsc0JBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWMsbURBQ2QsZUFBZSwwQ0FDZixhQUFhLGNBQ2IsbUJBQW1CO3VGQUdWLG1CQUFtQjtjQXJGL0IsU0FBUzsyQkFDRSxhQUFhLGNBQ1gsSUFBSSxZQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQsV0FvQlE7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGVBQWU7b0JBQ2Ysa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCOzhEQVdRLEtBQUs7a0JBQWIsS0FBSztZQUNJLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHsgTWF0TGVnYWN5Rm9ybUZpZWxkTW9kdWxlIGFzIE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdExlZ2FjeUlucHV0TW9kdWxlIGFzIE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7IE1hdExlZ2FjeVJhZGlvTW9kdWxlIGFzIE1hdFJhdGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXJhZGlvJztcbmltcG9ydCB7IE1hdExlZ2FjeVNlbGVjdE1vZHVsZSBhcyBNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zZWxlY3QnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aXotY29uZmlnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtYmxvY2stbW9kYWxcIiA+XG4gICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInF1aXpDb25maWdGb3JtXCI+XG5cbiAgICAgICAgPGgyIG1hdC1kaWFsb2ctdGl0bGU+UXVpeiBDb25maWd1cmF0aW9uPC9oMj5cblxuICAgICAgICA8aDM+MSkgQ3JlYXRlIGEgUXVlc3Rpb24uPC9oMz5cbiAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJvdXRsaW5lXCIgY29sb3I9XCJhY2NlbnRcIj5cbiAgICAgICAgICA8bWF0LWxhYmVsPlF1ZXN0aW9uPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhICN0aXRsZSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJxdWVzdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgncXVlc3Rpb24nKT8uZXJyb3JzXCI+e3txdWl6Q29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ3F1ZXN0aW9uJ119fTwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICAgIDxoMz4yKSBDcmVhdGUgdGhlIHBvc3NpYmxlIGFuc3dlcnM8L2gzPlxuICAgICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJyYXRpb09wdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgcmF0aW9PcHRpb25zLmNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCIgW2Zvcm1Hcm91cE5hbWVdPVwiaVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGlvLW9wdGlvblwiPlxuICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cImlzQ29ycmVjdFwiPlxuICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwie3tpfX1cIj48L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiIGNsYXNzPVwicmF0aW8tb3B0aW9uLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5PcHRpb24ge3tpICsgMX19PC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgZm9ybUNvbnRyb2xOYW1lPVwidmFsdWVcIi8+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlUmF0aW9PcHRpb24oaSlcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2Vycy1hY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkZFJhdGlvT3B0aW9uKClcIj5BZGQgQW5zd2VyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMz4zKSBTZWxlY3QgY29ycmVjdCBhbnN3ZXI8L2gzPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgIDxtYXQtbGFiZWw+QW5zd2VyPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiY29ycmVjdEFuc3dlclwiPlxuICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiByYXRpb09wdGlvbnMuY29udHJvbHM7IGxldCBpID0gaW5kZXhcIiBbdmFsdWVdPVwib3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWVcIj5cbiAgICAgICAgICAgICAge3sgb3B0aW9uLmdldCgndmFsdWUnKT8udmFsdWUgfX1cbiAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cInF1aXpDb25maWdGb3JtLmdldCgnY29ycmVjdEFuc3dlcicpPy5lcnJvcnNcIj57e3F1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlc1snY29ycmVjdEFuc3dlciddfX08L21hdC1lcnJvcj5cbiAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwZGF0ZUltYWdlKClcIiBbZGlzYWJsZWRdPVwicXVpekNvbmZpZ0Zvcm0uaW52YWxpZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlQ29uZmlnKClcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgOmhvc3QgZm9ybSAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAuYW5zd2Vycy1hY3Rpb24tZ3JvdXAge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdFJhdGlvTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFF1aXpDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikgeyB9XG4gIGRlc3Rvcnk6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7IHJlcXVpcmVkOiAnUmVxdWlyZWQnIH07XG4gIHF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHsgcXVlc3Rpb246ICcnLCBjb3JyZWN0QW5zd2VyOiAnJyB9XG5cbiAgcXVpekNvbmZpZ0Zvcm0hOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCkgdmFsdWUhOiB7IHF1ZXN0aW9uOiBzdHJpbmcsIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyB9O1xuICBAT3V0cHV0KCkgcXVpelZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHF1ZXN0aW9uOiBzdHJpbmcsIGNvcnJlY3RBbnN3ZXI6IHN0cmluZyB9PigpO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5xdWl6Q29uZmlnRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgcXVlc3Rpb246IFt0aGlzLnZhbHVlLnF1ZXN0aW9uID8/ICcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgY29ycmVjdEFuc3dlcjogW3RoaXMudmFsdWUuY29ycmVjdEFuc3dlciA/PyAnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHJhdGlvT3B0aW9uczogdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXSlcbiAgICB9KTtcblxuICAgIHRoaXMucXVpekNvbmZpZ0Zvcm0uc3RhdHVzQ2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRFcnJvcnNNZXNzYWdlcyh0aGlzLnF1aXpDb25maWdGb3JtLCB0aGlzLnF1aXpDb25maWdGb3JtRXJyb3JNZXNzYWdlcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5Lm5leHQodHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVJbWFnZSgpIHtcbiAgICB0aGlzLnF1aXpWYWx1ZS5lbWl0KHRoaXMucXVpekNvbmZpZ0Zvcm0udmFsdWUpO1xuICB9XG5cbiAgY2xvc2VDb25maWcoKSB7XG4gICAgdGhpcy5xdWl6VmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGdldCByYXRpb09wdGlvbnMoKTogRm9ybUFycmF5IHtcbiAgICByZXR1cm4gdGhpcy5xdWl6Q29uZmlnRm9ybS5nZXQoJ3JhdGlvT3B0aW9ucycpIGFzIEZvcm1BcnJheTtcbiAgfVxuXG4gIGFkZFJhdGlvT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdmFsdWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGlzQ29ycmVjdDogW2ZhbHNlLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dXG4gICAgfSk7XG4gICAgdGhpcy5yYXRpb09wdGlvbnMucHVzaChvcHRpb24pO1xuICB9XG5cbiAgcmVtb3ZlUmF0aW9PcHRpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucmF0aW9PcHRpb25zLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuXG4gIHNldEVycm9yc01lc3NhZ2VzKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBmb3JtQ29udHJvbE1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXMoZm9ybUdyb3VwLmNvbnRyb2xzKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgY29uc3QgZXJyb3JzID0gZm9ybUdyb3VwLmdldChlbGVtZW50KT8uZXJyb3JzO1xuICAgICAgaWYoZXJyb3JzKSB7ICAgICAgICAgXG4gICAgICAgIGNvbnN0IGVycm9yID0gT2JqZWN0LmtleXMoZXJyb3JzKVswXTtcbiAgICAgICAgZm9ybUNvbnRyb2xNZXNzYWdlc1tlbGVtZW50XSA9IHRoaXMuZXJyb3JNZXNzYWdlc1tlcnJvcl07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==