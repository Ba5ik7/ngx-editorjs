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
    onQuizClick() {
        console.log('Test the quiz answer', this.userAnswer);
    }
}
NgxEditorjsQuizClientBlockComponent.ɵfac = function NgxEditorjsQuizClientBlockComponent_Factory(t) { return new (t || NgxEditorjsQuizClientBlockComponent)(); };
NgxEditorjsQuizClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizClientBlockComponent, selectors: [["ngx-editorjs-image-client-block"]], inputs: { value: "value" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 4, consts: [[1, "quiz-conatiner"], ["paragraph", ""], [1, "answer-ratio-group", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "value"]], template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵlistener("click", function NgxEditorjsQuizClientBlockComponent_Template_button_click_9_listener() { return ctx.onQuizClick(); });
        i0.ɵɵtext(10, "Submit");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx._value.question);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.userAnswer);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx._value.ratioOptions);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !ctx.userAnswer);
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
      <mat-radio-group class="answer-ratio-group" [(ngModel)]="userAnswer">
        <mat-radio-button *ngFor="let option of _value.ratioOptions" [value]="option.value">{{ option.value }}</mat-radio-button>
      </mat-radio-group>
      <div class="action-group">
        <button mat-flat-button color="primary" type="button" (click)="onQuizClick()" [disabled]="!userAnswer">Submit</button>
      </div>
    </div>
  `, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
    }], null, { value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUFnQnJDLDJDQUFvRjtJQUFBLFlBQWtCO0lBQUEsaUJBQW1COzs7SUFBNUQsdUNBQXNCO0lBQUMsZUFBa0I7SUFBbEIscUNBQWtCOztBQTBCOUcsTUFBTSxPQUFPLG1DQUFtQztJQXhDaEQ7UUEwQ0UsZUFBVSxHQUF1QixTQUFTLENBQUM7UUFDM0MsV0FBTSxHQUFlO1lBQ25CLFFBQVEsRUFBRSxFQUFFO1lBQ1osYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7U0FDakIsQ0FBQztLQVVIO0lBUkMsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2RCxDQUFDOztzSEFoQlUsbUNBQW1DO3NGQUFuQyxtQ0FBbUM7UUE5QjVDLDhCQUE0QixTQUFBO1FBQ3RCLG9CQUFJO1FBQUEsaUJBQUs7UUFDYixrQ0FBYztRQUFBLFlBQXFCO1FBQUEsaUJBQUk7UUFDdkMsMENBQXFFO1FBQXpCLDBLQUF3QjtRQUNsRSw4R0FBeUg7UUFDM0gsaUJBQWtCO1FBQ2xCLDhCQUEwQixnQkFBQTtRQUM4QixnSEFBUyxpQkFBYSxJQUFDO1FBQTBCLHVCQUFNO1FBQUEsaUJBQVMsRUFBQSxFQUFBOztRQUwxRyxlQUFxQjtRQUFyQix5Q0FBcUI7UUFDUyxlQUF3QjtRQUF4Qix3Q0FBd0I7UUFDN0IsZUFBc0I7UUFBdEIsaURBQXNCO1FBR21CLGVBQXdCO1FBQXhCLDBDQUF3Qjt3QkFiMUcsWUFBWSxjQUNaLGVBQWUsc0JBQ2YsY0FBYyxtREFDZCxXQUFXO3VGQWlDRixtQ0FBbUM7Y0F4Qy9DLFNBQVM7NkJBQ0ksSUFBSSxZQUNOLGlDQUFpQyxXQUNsQztvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxXQUFXO2lCQUNaLFlBQ1M7Ozs7Ozs7Ozs7O0dBV1Q7Z0JBOEJHLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRMZWdhY3lSYWRpb01vZHVsZSBhcyBNYXRSYXRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1yYWRpbyc7XG5pbXBvcnQgeyBRdWl6Q29uZmlnIH0gZnJvbSAnLi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1pbWFnZS1jbGllbnQtYmxvY2snLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRSYXRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJxdWl6LWNvbmF0aW5lclwiPlxuICAgICAgPGgxPlF1aXo8L2gxPlxuICAgICAgPHAgI3BhcmFncmFwaD57eyBfdmFsdWUucXVlc3Rpb24gfX08L3A+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiYW5zd2VyLXJhdGlvLWdyb3VwXCIgWyhuZ01vZGVsKV09XCJ1c2VyQW5zd2VyXCI+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3ZhbHVlLnJhdGlvT3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmFsdWUgfX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvblF1aXpDbGljaygpXCIgW2Rpc2FibGVkXT1cIiF1c2VyQW5zd2VyXCI+U3VibWl0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcGFkZGluZy1ib3R0b206IDIycHg7IH1cbiAgICAuYW5zd2VyLXJhdGlvLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAyMXB4O1xuICAgIH1cbiAgICAucXVpei1jb25hdGluZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFZGl0b3Jqc1F1aXpDbGllbnRCbG9ja0NvbXBvbmVudCB7XG5cbiAgdXNlckFuc3dlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBfdmFsdWU6IFF1aXpDb25maWcgPSB7XG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGNvcnJlY3RBbnN3ZXI6ICcnLFxuICAgIHJhdGlvT3B0aW9uczogW11cbiAgfTtcblxuICBASW5wdXQoKSBcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAhIXZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgfVxuXG4gIG9uUXVpekNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKCdUZXN0IHRoZSBxdWl6IGFuc3dlcicsIHRoaXMudXNlckFuc3dlcik7XG4gIH1cbn1cbiJdfQ==