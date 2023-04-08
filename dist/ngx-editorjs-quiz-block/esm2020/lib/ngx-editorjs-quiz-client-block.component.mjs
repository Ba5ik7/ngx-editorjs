import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyRadioModule as MatRatioModule } from '@angular/material/legacy-radio';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/legacy-button";
import * as i3 from "@angular/material/legacy-radio";
import * as i4 from "@angular/forms";
function NgxEditorjsQuizClientBlockComponent_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.value);
} }
function NgxEditorjsQuizClientBlockComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r2.isAnswerCorrect ? "correctAnswer" : "incorrectAnswer");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r2.answerResponse);
} }
export class NgxEditorjsQuizClientBlockComponent {
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
NgxEditorjsQuizClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizClientBlockComponent, selectors: [["ngx-editorjs-image-client-block"]], inputs: { value: "value" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 12, vars: 6, consts: [[1, "quiz-conatiner"], ["paragraph", ""], [1, "answer-ratio-group", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "ngClass", 4, "ngIf"], [3, "value"], [3, "ngClass"]], template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h1");
        i0.ɵɵtext(2, "Quiz");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", null, 1);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-radio-group", 2);
        i0.ɵɵlistener("ngModelChange", function NgxEditorjsQuizClientBlockComponent_Template_mat_radio_group_ngModelChange_6_listener($event) { return ctx.userAnswer = $event; });
        i0.ɵɵtemplate(7, NgxEditorjsQuizClientBlockComponent_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 4)(9, "button", 5);
        i0.ɵɵlistener("click", function NgxEditorjsQuizClientBlockComponent_Template_button_click_9_listener() { return ctx.onQuizAnswerClick(); });
        i0.ɵɵtext(10, "Submit");
        i0.ɵɵelementEnd()();
        i0.ɵɵtemplate(11, NgxEditorjsQuizClientBlockComponent_p_11_Template, 2, 2, "p", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx._value.question);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.userAnswer)("disabled", ctx.answerSubmited);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx._value.ratioOptions);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.userAnswer || ctx.answerSubmited);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.answerResponse);
    } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, MatButtonModule, i2.MatLegacyButton, MatRatioModule, i3.MatLegacyRadioGroup, i3.MatLegacyRadioButton, FormsModule, i4.NgControlStatus, i4.NgModel], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.correctAnswer[_ngcontent-%COMP%]{color:green}.incorrectAnswer[_ngcontent-%COMP%]{color:red}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizClientBlockComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-editorjs-image-client-block', imports: [
                    CommonModule,
                    MatButtonModule,
                    MatRatioModule,
                    FormsModule
                ], template: `
    <div class="quiz-conatiner">
      <h1>Quiz</h1>
      <p #paragraph>{{ _value.question }}</p>
      <mat-radio-group class="answer-ratio-group" [(ngModel)]="userAnswer" [disabled]="answerSubmited">
        <mat-radio-button *ngFor="let option of _value.ratioOptions" [value]="option.value">{{ option.value }}</mat-radio-button>
      </mat-radio-group>
      <div class="action-group">
        <button mat-flat-button color="primary" type="button" (click)="onQuizAnswerClick()" [disabled]="!userAnswer || answerSubmited">Submit</button>
      </div>
      <p *ngIf="answerResponse" [ngClass]="isAnswerCorrect ? 'correctAnswer' : 'incorrectAnswer'" >{{ answerResponse }}</p>
    </div>
  `, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}.correctAnswer{color:green}.incorrectAnswer{color:red}\n"] }]
    }], null, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUFnQnJDLDJDQUFvRjtJQUFBLFlBQWtCO0lBQUEsaUJBQW1COzs7SUFBNUQsdUNBQXNCO0lBQUMsZUFBa0I7SUFBbEIscUNBQWtCOzs7SUFLeEcsNEJBQTZGO0lBQUEsWUFBb0I7SUFBQSxpQkFBSTs7O0lBQTNGLHNGQUFpRTtJQUFFLGVBQW9CO0lBQXBCLDJDQUFvQjs7QUE0QnZILE1BQU0sT0FBTyxtQ0FBbUM7SUEvQ2hEO1FBaURFLG9CQUFlLEdBQXdCLFNBQVMsQ0FBQztRQUNqRCxtQkFBYyxHQUF1QixTQUFTLENBQUM7UUFDL0MsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUF1QixTQUFTLENBQUM7UUFDM0MsV0FBTSxHQUFlO1lBQ25CLFFBQVEsRUFBRSxFQUFFO1lBQ1osYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7WUFDaEIscUJBQXFCLEVBQUUsRUFBRTtZQUN6Qix1QkFBdUIsRUFBRSxFQUFFO1NBQzVCLENBQUM7S0FZSDtJQVZDLElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDckUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0lBQ3ZILENBQUM7O3NIQXZCVSxtQ0FBbUM7c0ZBQW5DLG1DQUFtQztRQXJDNUMsOEJBQTRCLFNBQUE7UUFDdEIsb0JBQUk7UUFBQSxpQkFBSztRQUNiLGtDQUFjO1FBQUEsWUFBcUI7UUFBQSxpQkFBSTtRQUN2QywwQ0FBaUc7UUFBckQsMEtBQXdCO1FBQ2xFLDhHQUF5SDtRQUMzSCxpQkFBa0I7UUFDbEIsOEJBQTBCLGdCQUFBO1FBQzhCLGdIQUFTLHVCQUFtQixJQUFDO1FBQTRDLHVCQUFNO1FBQUEsaUJBQVMsRUFBQTtRQUVoSixrRkFBcUg7UUFDdkgsaUJBQU07O1FBUlUsZUFBcUI7UUFBckIseUNBQXFCO1FBQ1MsZUFBd0I7UUFBeEIsd0NBQXdCLGdDQUFBO1FBQzdCLGVBQXNCO1FBQXRCLGlEQUFzQjtRQUd5QixlQUEwQztRQUExQyxnRUFBMEM7UUFFNUgsZUFBb0I7UUFBcEIseUNBQW9CO3dCQWYxQixZQUFZLG1DQUNaLGVBQWUsc0JBQ2YsY0FBYyxtREFDZCxXQUFXO3VGQXdDRixtQ0FBbUM7Y0EvQy9DLFNBQVM7NkJBQ0ksSUFBSSxZQUNOLGlDQUFpQyxXQUNsQztvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxXQUFXO2lCQUNaLFlBQ1M7Ozs7Ozs7Ozs7OztHQVlUO2dCQXlDRyxLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHsgTWF0TGVnYWN5UmFkaW9Nb2R1bGUgYXMgTWF0UmF0aW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHsgUXVpekNvbmZpZyB9IGZyb20gJy4vcXVpei1jb25maWcvcXVpei1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtaW1hZ2UtY2xpZW50LWJsb2NrJyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UmF0aW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpei1jb25hdGluZXJcIj5cbiAgICAgIDxoMT5RdWl6PC9oMT5cbiAgICAgIDxwICNwYXJhZ3JhcGg+e3sgX3ZhbHVlLnF1ZXN0aW9uIH19PC9wPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImFuc3dlci1yYXRpby1ncm91cFwiIFsobmdNb2RlbCldPVwidXNlckFuc3dlclwiIFtkaXNhYmxlZF09XCJhbnN3ZXJTdWJtaXRlZFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF92YWx1ZS5yYXRpb09wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLnZhbHVlIH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25RdWl6QW5zd2VyQ2xpY2soKVwiIFtkaXNhYmxlZF09XCIhdXNlckFuc3dlciB8fCBhbnN3ZXJTdWJtaXRlZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCAqbmdJZj1cImFuc3dlclJlc3BvbnNlXCIgW25nQ2xhc3NdPVwiaXNBbnN3ZXJDb3JyZWN0ID8gJ2NvcnJlY3RBbnN3ZXInIDogJ2luY29ycmVjdEFuc3dlcidcIiA+e3sgYW5zd2VyUmVzcG9uc2UgfX08L3A+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjFweDtcbiAgICB9XG4gICAgLnF1aXotY29uYXRpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgICAuY29ycmVjdEFuc3dlciB7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICAgIC5pbmNvcnJlY3RBbnN3ZXIge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekNsaWVudEJsb2NrQ29tcG9uZW50IHtcblxuICBpc0Fuc3dlckNvcnJlY3Q6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGFuc3dlclJlc3BvbnNlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGFuc3dlclN1Ym1pdGVkID0gZmFsc2U7XG4gIHVzZXJBbnN3ZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgX3ZhbHVlOiBRdWl6Q29uZmlnID0ge1xuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBjb3JyZWN0QW5zd2VyOiAnJyxcbiAgICByYXRpb09wdGlvbnM6IFtdLFxuICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJycsXG4gICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnXG4gIH07XG5cbiAgQElucHV0KCkgXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgISF2YWx1ZSAmJiAodGhpcy5fdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKSk7XG4gIH1cblxuICBvblF1aXpBbnN3ZXJDbGljaygpIHtcbiAgICB0aGlzLmFuc3dlclN1Ym1pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzQW5zd2VyQ29ycmVjdCA9IHRoaXMudXNlckFuc3dlciA9PT0gdGhpcy5fdmFsdWUuY29ycmVjdEFuc3dlcjtcbiAgICB0aGlzLmFuc3dlclJlc3BvbnNlID0gdGhpcy5pc0Fuc3dlckNvcnJlY3QgPyB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyUmVzcG9uc2UgOiB0aGlzLl92YWx1ZS5pbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTtcbiAgfVxufVxuIl19