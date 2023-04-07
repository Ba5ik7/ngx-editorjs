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
    i0.ɵɵelementStart(0, "mat-radio-button", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.value);
} }
export class NgxEditorjsQuizClientBlockComponent {
    constructor() {
        this.answerSubmited = false;
        this.userAnswer = undefined;
        this._value = {
            question: '',
            correctAnswer: '',
            ratioOptions: []
        };
    }
    set value(value) {
        !!value && (this._value = JSON.parse(value));
    }
    onQuizAnswerClick() {
        this.answerSubmited = true;
        const isAnswerCorrect = this.userAnswer === this._value.correctAnswer;
        isAnswerCorrect ? alert('Correct') : alert('Wrong');
        console.log({
            userAnswer: this.userAnswer,
            correctAnswer: this._value.correctAnswer,
            isAnswerCorrect
        });
    }
}
NgxEditorjsQuizClientBlockComponent.ɵfac = function NgxEditorjsQuizClientBlockComponent_Factory(t) { return new (t || NgxEditorjsQuizClientBlockComponent)(); };
NgxEditorjsQuizClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizClientBlockComponent, selectors: [["ngx-editorjs-image-client-block"]], inputs: { value: "value" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 5, consts: [[1, "quiz-conatiner"], ["paragraph", ""], [1, "answer-ratio-group", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "value"]], template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx._value.question);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.userAnswer)("disabled", ctx.answerSubmited);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx._value.ratioOptions);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.userAnswer || ctx.answerSubmited);
    } }, dependencies: [CommonModule, i1.NgForOf, MatButtonModule, i2.MatLegacyButton, MatRatioModule, i3.MatLegacyRadioGroup, i3.MatLegacyRadioButton, FormsModule, i4.NgControlStatus, i4.NgModel], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
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
    </div>
  `, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
    }], null, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUFnQnJDLDJDQUFvRjtJQUFBLFlBQWtCO0lBQUEsaUJBQW1COzs7SUFBNUQsdUNBQXNCO0lBQUMsZUFBa0I7SUFBbEIscUNBQWtCOztBQTBCOUcsTUFBTSxPQUFPLG1DQUFtQztJQXhDaEQ7UUEwQ0UsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUF1QixTQUFTLENBQUM7UUFDM0MsV0FBTSxHQUFlO1lBQ25CLFFBQVEsRUFBRSxFQUFFO1lBQ1osYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQztLQWlCSDtJQWZDLElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3RFLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNWLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhO1lBQ3hDLGVBQWU7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7c0hBeEJVLG1DQUFtQztzRkFBbkMsbUNBQW1DO1FBOUI1Qyw4QkFBNEIsU0FBQTtRQUN0QixvQkFBSTtRQUFBLGlCQUFLO1FBQ2Isa0NBQWM7UUFBQSxZQUFxQjtRQUFBLGlCQUFJO1FBQ3ZDLDBDQUFpRztRQUFyRCwwS0FBd0I7UUFDbEUsOEdBQXlIO1FBQzNILGlCQUFrQjtRQUNsQiw4QkFBMEIsZ0JBQUE7UUFDOEIsZ0hBQVMsdUJBQW1CLElBQUM7UUFBNEMsdUJBQU07UUFBQSxpQkFBUyxFQUFBLEVBQUE7O1FBTGxJLGVBQXFCO1FBQXJCLHlDQUFxQjtRQUNTLGVBQXdCO1FBQXhCLHdDQUF3QixnQ0FBQTtRQUM3QixlQUFzQjtRQUF0QixpREFBc0I7UUFHeUIsZUFBMEM7UUFBMUMsZ0VBQTBDO3dCQWJsSSxZQUFZLGNBQ1osZUFBZSxzQkFDZixjQUFjLG1EQUNkLFdBQVc7dUZBaUNGLG1DQUFtQztjQXhDL0MsU0FBUzs2QkFDSSxJQUFJLFlBQ04saUNBQWlDLFdBQ2xDO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixjQUFjO29CQUNkLFdBQVc7aUJBQ1osWUFDUzs7Ozs7Ozs7Ozs7R0FXVDtnQkErQkcsS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IE1hdExlZ2FjeVJhZGlvTW9kdWxlIGFzIE1hdFJhdGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXJhZGlvJztcbmltcG9ydCB7IFF1aXpDb25maWcgfSBmcm9tICcuL3F1aXotY29uZmlnL3F1aXotY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLWltYWdlLWNsaWVudC1ibG9jaycsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFJhdGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInF1aXotY29uYXRpbmVyXCI+XG4gICAgICA8aDE+UXVpejwvaDE+XG4gICAgICA8cCAjcGFyYWdyYXBoPnt7IF92YWx1ZS5xdWVzdGlvbiB9fTwvcD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJhbnN3ZXItcmF0aW8tZ3JvdXBcIiBbKG5nTW9kZWwpXT1cInVzZXJBbnN3ZXJcIiBbZGlzYWJsZWRdPVwiYW5zd2VyU3VibWl0ZWRcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfdmFsdWUucmF0aW9PcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi52YWx1ZSB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uUXVpekFuc3dlckNsaWNrKClcIiBbZGlzYWJsZWRdPVwiIXVzZXJBbnN3ZXIgfHwgYW5zd2VyU3VibWl0ZWRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAgIC5hbnN3ZXItcmF0aW8tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDIxcHg7XG4gICAgfVxuICAgIC5xdWl6LWNvbmF0aW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekNsaWVudEJsb2NrQ29tcG9uZW50IHtcblxuICBhbnN3ZXJTdWJtaXRlZCA9IGZhbHNlO1xuICB1c2VyQW5zd2VyOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIF92YWx1ZTogUXVpekNvbmZpZyA9IHtcbiAgICBxdWVzdGlvbjogJycsXG4gICAgY29ycmVjdEFuc3dlcjogJycsXG4gICAgcmF0aW9PcHRpb25zOiBbXVxuICB9O1xuXG4gIEBJbnB1dCgpIFxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICEhdmFsdWUgJiYgKHRoaXMuX3ZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICB9XG5cbiAgb25RdWl6QW5zd2VyQ2xpY2soKSB7XG4gICAgdGhpcy5hbnN3ZXJTdWJtaXRlZCA9IHRydWU7XG4gICAgY29uc3QgaXNBbnN3ZXJDb3JyZWN0ID0gdGhpcy51c2VyQW5zd2VyID09PSB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyO1xuICAgIGlzQW5zd2VyQ29ycmVjdCA/IGFsZXJ0KCdDb3JyZWN0JykgOiBhbGVydCgnV3JvbmcnKTtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICB1c2VyQW5zd2VyOiB0aGlzLnVzZXJBbnN3ZXIsXG4gICAgICBjb3JyZWN0QW5zd2VyOiB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyLFxuICAgICAgaXNBbnN3ZXJDb3JyZWN0XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==