import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/radio";
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
NgxEditorjsQuizClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizClientBlockComponent, selectors: [["ngx-editorjs-image-client-block"]], inputs: { value: "value" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 6, consts: [[1, "quiz-conatiner"], [3, "ngClass", 4, "ngIf"], ["paragraph", ""], [3, "ngModel", "disabled", "ngModelChange"], ["type", "a", 1, "answer-ratio-group"], [4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], [3, "ngClass"], [3, "value"]], template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, MatButtonModule, i2.MatButton, MatRadioModule, i3.MatRadioGroup, i3.MatRadioButton, FormsModule, i4.NgControlStatus, i4.NgModel], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.answer-ratio-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\")\";margin-right:.5em}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizClientBlockComponent, [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUFjdkMsNEJBQTRGO0lBQUEsWUFBb0I7SUFBQSxpQkFBSTs7O0lBQTFGLHFGQUFnRTtJQUFFLGVBQW9CO0lBQXBCLDJDQUFvQjs7O0lBSTVHLDBCQUErQywwQkFBQTtJQUNOLFlBQWtCO0lBQUEsaUJBQW1CLEVBQUE7OztJQUE1RCxlQUFzQjtJQUF0Qix1Q0FBc0I7SUFBQyxlQUFrQjtJQUFsQixxQ0FBa0I7O0FBZ0NyRSxNQUFNLE9BQU8sbUNBQW1DO0lBakRoRDtRQW1ERSxvQkFBZSxHQUF3QixTQUFTLENBQUM7UUFDakQsbUJBQWMsR0FBdUIsU0FBUyxDQUFDO1FBQy9DLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBdUIsU0FBUyxDQUFDO1FBQzNDLFdBQU0sR0FBZTtZQUNuQixRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsdUJBQXVCLEVBQUUsRUFBRTtTQUM1QixDQUFDO0tBWUg7SUFWQyxJQUNJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3JFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUN2SCxDQUFDOztzSEF2QlUsbUNBQW1DO3NGQUFuQyxtQ0FBbUM7UUF2QzVDLDhCQUE0QixTQUFBO1FBQ3RCLG9CQUFJO1FBQUEsaUJBQUs7UUFDYixnRkFBb0g7UUFDcEgsa0NBQWM7UUFBQSxZQUFxQjtRQUFBLGlCQUFJO1FBQ3ZDLDBDQUFzRTtRQUFyRCwwS0FBd0I7UUFDdkMsNkJBQXdDO1FBQ3RDLGtGQUVLO1FBQ1AsaUJBQUssRUFBQTtRQUVQLCtCQUEwQixpQkFBQTtRQUM2QixpSEFBUyx1QkFBbUIsSUFBQztRQUE0Qyx1QkFBTTtRQUFBLGlCQUFTLEVBQUEsRUFBQTs7UUFWM0ksZUFBb0I7UUFBcEIseUNBQW9CO1FBQ1YsZUFBcUI7UUFBckIseUNBQXFCO1FBQ2xCLGVBQXdCO1FBQXhCLHdDQUF3QixnQ0FBQTtRQUVkLGVBQXNCO1FBQXRCLGlEQUFzQjtRQU1vQyxlQUEwQztRQUExQyxnRUFBMEM7d0JBbEJqSSxZQUFZLG1DQUNaLGVBQWUsZ0JBQ2YsY0FBYyx1Q0FDZCxXQUFXO3VGQTBDRixtQ0FBbUM7Y0FqRC9DLFNBQVM7NkJBQ0ksSUFBSSxZQUNOLGlDQUFpQyxXQUNsQztvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxXQUFXO2lCQUNaLFlBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7Z0JBdUNHLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQgeyBRdWl6Q29uZmlnIH0gZnJvbSAnLi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1pbWFnZS1jbGllbnQtYmxvY2snLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJxdWl6LWNvbmF0aW5lclwiPlxuICAgICAgPGgxPlF1aXo8L2gxPlxuICAgICAgPHAgKm5nSWY9XCJhbnN3ZXJSZXNwb25zZVwiIFtuZ0NsYXNzXT1cImlzQW5zd2VyQ29ycmVjdCA/ICdzdWNjZXNzZnVsLXRleHQnIDogJ2ZhaWx1cmUtdGV4dCdcIiA+e3sgYW5zd2VyUmVzcG9uc2UgfX08L3A+XG4gICAgICA8cCAjcGFyYWdyYXBoPnt7IF92YWx1ZS5xdWVzdGlvbiB9fTwvcD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJ1c2VyQW5zd2VyXCIgW2Rpc2FibGVkXT1cImFuc3dlclN1Ym1pdGVkXCI+XG4gICAgICAgIDxvbCB0eXBlPVwiYVwiIGNsYXNzPVwiYW5zd2VyLXJhdGlvLWdyb3VwXCI+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3ZhbHVlLnJhdGlvT3B0aW9uc1wiPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmFsdWUgfX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25RdWl6QW5zd2VyQ2xpY2soKVwiIFtkaXNhYmxlZF09XCIhdXNlckFuc3dlciB8fCBhbnN3ZXJTdWJtaXRlZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjFweDtcbiAgICB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCBsaTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiKVwiO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICB9XG4gICAgLnF1aXotY29uYXRpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNRdWl6Q2xpZW50QmxvY2tDb21wb25lbnQge1xuXG4gIGlzQW5zd2VyQ29ycmVjdDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgYW5zd2VyUmVzcG9uc2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgYW5zd2VyU3VibWl0ZWQgPSBmYWxzZTtcbiAgdXNlckFuc3dlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBfdmFsdWU6IFF1aXpDb25maWcgPSB7XG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGNvcnJlY3RBbnN3ZXI6ICcnLFxuICAgIHJhdGlvT3B0aW9uczogW10sXG4gICAgY29ycmVjdEFuc3dlclJlc3BvbnNlOiAnJyxcbiAgICBpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJydcbiAgfTtcblxuICBASW5wdXQoKSBcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAhIXZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgfVxuXG4gIG9uUXVpekFuc3dlckNsaWNrKCkge1xuICAgIHRoaXMuYW5zd2VyU3VibWl0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNBbnN3ZXJDb3JyZWN0ID0gdGhpcy51c2VyQW5zd2VyID09PSB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyO1xuICAgIHRoaXMuYW5zd2VyUmVzcG9uc2UgPSB0aGlzLmlzQW5zd2VyQ29ycmVjdCA/IHRoaXMuX3ZhbHVlLmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA6IHRoaXMuX3ZhbHVlLmluY29ycmVjdEFuc3dlclJlc3BvbnNlO1xuICB9XG59XG4iXX0=