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
function NgxEditorjsQuizClientBlockComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.isAnswerCorrect ? "successful-text" : "failure-text");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.answerResponse);
} }
function NgxEditorjsQuizClientBlockComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "mat-radio-button", 9);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.value);
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
NgxEditorjsQuizClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizClientBlockComponent, selectors: [["ngx-editorjs-image-client-block"]], inputs: { value: "value" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 6, consts: [[1, "quiz-conatiner"], [3, "ngClass", 4, "ngIf"], ["paragraph", ""], [3, "ngModel", "disabled", "ngModelChange"], ["type", "a", 1, "answer-ratio-group"], [4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "ngClass"], [3, "value"]], template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, MatButtonModule, i2.MatLegacyButton, MatRatioModule, i3.MatLegacyRadioGroup, i3.MatLegacyRadioButton, FormsModule, i4.NgControlStatus, i4.NgModel], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.answer-ratio-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\")\";margin-right:.5em}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
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
        <button mat-flat-button color="primary" type="button" (click)="onQuizAnswerClick()" [disabled]="!userAnswer || answerSubmited">Submit</button>
      </div>
    </div>
  `, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.answer-ratio-group li:before{content:\")\";margin-right:.5em}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
    }], null, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUFjdkMsNEJBQTRGO0lBQUEsWUFBb0I7SUFBQSxpQkFBSTs7O0lBQTFGLHFGQUFnRTtJQUFFLGVBQW9CO0lBQXBCLDJDQUFvQjs7O0lBSTVHLDBCQUErQywwQkFBQTtJQUNOLFlBQWtCO0lBQUEsaUJBQW1CLEVBQUE7OztJQUE1RCxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFBQyxlQUFrQjtJQUFsQixxQ0FBa0I7O0FBaUNyRSxNQUFNLE9BQU8sbUNBQW1DO0lBbERoRDtRQW9ERSxvQkFBZSxHQUF3QixTQUFTLENBQUM7UUFDakQsbUJBQWMsR0FBdUIsU0FBUyxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBdUIsU0FBUyxDQUFDO1FBQzNDLFdBQU0sR0FBZTtZQUNuQixRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsdUJBQXVCLEVBQUUsRUFBRTtTQUM1QixDQUFDO0tBWUg7SUFWQyxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUN2SCxDQUFDOztzSEF2QlUsbUNBQW1DO3NGQUFuQyxtQ0FBbUM7UUF4QzVDLDhCQUE0QixTQUFBO1FBQ3RCLG9CQUFJO1FBQUEsaUJBQUs7UUFDYixnRkFBb0g7UUFDcEgsa0NBQWM7UUFBQSxZQUFxQjtRQUFBLGlCQUFJO1FBQ3ZDLDBDQUFzRTtRQUFyRCwwS0FBd0I7UUFDdkMsNkJBQXdDO1FBQ3RDLGtGQUVLO1FBQ1AsaUJBQUssRUFBQTtRQUdQLCtCQUEwQixpQkFBQTtRQUM4QixpSEFBUyx1QkFBbUIsSUFBQztRQUE0Qyx1QkFBTTtRQUFBLGlCQUFTLEVBQUEsRUFBQTs7UUFYNUksZUFBb0I7UUFBcEIseUNBQW9CO1FBQ1YsZUFBcUI7UUFBckIseUNBQXFCO1FBQ2xCLGVBQXdCO1FBQXhCLHdDQUF3QixnQ0FBQTtRQUVkLGVBQXNCO1FBQXRCLGlEQUFzQjtRQU9xQyxlQUEwQztRQUExQyxnRUFBMEM7d0JBbkJsSSxZQUFZLG1DQUNaLGVBQWUsc0JBQ2YsY0FBYyxtREFDZCxXQUFXO3VGQTJDRixtQ0FBbUM7Y0FsRC9DLFNBQVM7NkJBQ0ksSUFBSSxZQUNOLGlDQUFpQyxXQUNsQztvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxXQUFXO2lCQUNaLFlBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2dCQXVDRyxLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHsgTWF0TGVnYWN5UmFkaW9Nb2R1bGUgYXMgTWF0UmF0aW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHsgUXVpekNvbmZpZyB9IGZyb20gJy4vcXVpei1jb25maWcvcXVpei1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtaW1hZ2UtY2xpZW50LWJsb2NrJyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UmF0aW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpei1jb25hdGluZXJcIj5cbiAgICAgIDxoMT5RdWl6PC9oMT5cbiAgICAgIDxwICpuZ0lmPVwiYW5zd2VyUmVzcG9uc2VcIiBbbmdDbGFzc109XCJpc0Fuc3dlckNvcnJlY3QgPyAnc3VjY2Vzc2Z1bC10ZXh0JyA6ICdmYWlsdXJlLXRleHQnXCIgPnt7IGFuc3dlclJlc3BvbnNlIH19PC9wPlxuICAgICAgPHAgI3BhcmFncmFwaD57eyBfdmFsdWUucXVlc3Rpb24gfX08L3A+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwidXNlckFuc3dlclwiIFtkaXNhYmxlZF09XCJhbnN3ZXJTdWJtaXRlZFwiPlxuICAgICAgICA8b2wgdHlwZT1cImFcIiBjbGFzcz1cImFuc3dlci1yYXRpby1ncm91cFwiPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF92YWx1ZS5yYXRpb09wdGlvbnNcIj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLnZhbHVlIH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICAgIFxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25RdWl6QW5zd2VyQ2xpY2soKVwiIFtkaXNhYmxlZF09XCIhdXNlckFuc3dlciB8fCBhbnN3ZXJTdWJtaXRlZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjFweDtcbiAgICB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCBsaTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiKVwiO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICB9XG4gICAgLnF1aXotY29uYXRpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNRdWl6Q2xpZW50QmxvY2tDb21wb25lbnQge1xuXG4gIGlzQW5zd2VyQ29ycmVjdDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgYW5zd2VyUmVzcG9uc2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgYW5zd2VyU3VibWl0ZWQgPSBmYWxzZTtcbiAgdXNlckFuc3dlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBfdmFsdWU6IFF1aXpDb25maWcgPSB7XG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGNvcnJlY3RBbnN3ZXI6ICcnLFxuICAgIHJhdGlvT3B0aW9uczogW10sXG4gICAgY29ycmVjdEFuc3dlclJlc3BvbnNlOiAnJyxcbiAgICBpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJydcbiAgfTtcblxuICBASW5wdXQoKSBcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAhIXZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgfVxuXG4gIG9uUXVpekFuc3dlckNsaWNrKCkge1xuICAgIHRoaXMuYW5zd2VyU3VibWl0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNBbnN3ZXJDb3JyZWN0ID0gdGhpcy51c2VyQW5zd2VyID09PSB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyO1xuICAgIHRoaXMuYW5zd2VyUmVzcG9uc2UgPSB0aGlzLmlzQW5zd2VyQ29ycmVjdCA/IHRoaXMuX3ZhbHVlLmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA6IHRoaXMuX3ZhbHVlLmluY29ycmVjdEFuc3dlclJlc3BvbnNlO1xuICB9XG59XG4iXX0=