import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyRadioModule as MatRatioModule } from '@angular/material/legacy-radio';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import { QuizConfigComponent } from './quiz-config/quiz-config.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/legacy-button";
import * as i3 from "@angular/material/legacy-radio";
const _c0 = ["paragraph"];
function NgxEditorjsQuizBlockComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "quiz-config", 2);
    i0.ɵɵlistener("quizValue", function NgxEditorjsQuizBlockComponent_ng_container_0_Template_quiz_config_quizValue_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateQuiz($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0._value);
} }
function NgxEditorjsQuizBlockComponent_ng_template_1_mat_radio_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r7.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r7.value);
} }
function NgxEditorjsQuizBlockComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "h1");
    i0.ɵɵtext(2, "Quiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", null, 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-radio-group", 5);
    i0.ɵɵtemplate(7, NgxEditorjsQuizBlockComponent_ng_template_1_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7)(9, "button", 8);
    i0.ɵɵlistener("click", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.openEditQuizOverlay()); });
    i0.ɵɵtext(10, "Edit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2._value.question);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r2._value.correctAnswer);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2._value.ratioOptions);
} }
export class NgxEditorjsQuizBlockComponent extends BaseBlockComponent {
    constructor() {
        super(...arguments);
        this.useInlineToolbar = false;
        this.useInputType = false;
        this._openEditQuizOverlay = false;
        this._value = {
            question: '',
            correctAnswer: '',
            ratioOptions: [],
            correctAnswerResponse: '',
            incorrectAnswerResponse: ''
        };
    }
    ngOnInit() {
        !!this.value && (this._value = JSON.parse(this.value));
        !this.value && this.openEditQuizOverlay();
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
        this._value = value;
        this.changeValue(JSON.stringify(value));
        this._openEditQuizOverlay = false;
    }
}
NgxEditorjsQuizBlockComponent.ɵfac = /*@__PURE__*/ function () { let ɵNgxEditorjsQuizBlockComponent_BaseFactory; return function NgxEditorjsQuizBlockComponent_Factory(t) { return (ɵNgxEditorjsQuizBlockComponent_BaseFactory || (ɵNgxEditorjsQuizBlockComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NgxEditorjsQuizBlockComponent)))(t || NgxEditorjsQuizBlockComponent); }; }();
NgxEditorjsQuizBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizBlockComponent, selectors: [["ngx-editorjs-quiz-block"]], viewQuery: function NgxEditorjsQuizBlockComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
    } }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "quizValue"], [1, "quiz-conatiner"], ["paragraph", ""], [1, "answer-ratio-group", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"]], template: function NgxEditorjsQuizBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxEditorjsQuizBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, NgxEditorjsQuizBlockComponent_ng_template_1_Template, 11, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx._openEditQuizOverlay)("ngIfElse", _r1);
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, MatButtonModule, i2.MatLegacyButton, MatRatioModule, i3.MatLegacyRadioGroup, i3.MatLegacyRadioButton, MatIconModule,
        QuizConfigComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-editorjs-quiz-block', template: `
    <ng-container *ngIf="_openEditQuizOverlay; else elseTemplate">
      <quiz-config [value]="_value" (quizValue)="updateQuiz($event)"></quiz-config>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="quiz-conatiner">
        <h1>Quiz</h1>
        <p #paragraph>{{ _value.question }}</p>
        <mat-radio-group class="answer-ratio-group" [value]="_value.correctAnswer">
          <mat-radio-button *ngFor="let option of _value.ratioOptions" [value]="option.value">{{ option.value }}</mat-radio-button>
        </mat-radio-group>
        <div class="action-group">
          <button mat-flat-button color="primary" type="button" (click)="openEditQuizOverlay()">Edit</button>
        </div>
      </div>
    </ng-template>
  `, imports: [
                    CommonModule,
                    AutofocusDirective,
                    MatButtonModule,
                    MatRatioModule,
                    MatIconModule,
                    QuizConfigComponent
                ], styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
    }], null, { element: [{
            type: ViewChild,
            args: ['paragraph']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFzQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUFjLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7O0lBTWxGLDZCQUE4RDtJQUM1RCxzQ0FBK0Q7SUFBakMsc01BQWEsZUFBQSx5QkFBa0IsQ0FBQSxJQUFDO0lBQUMsaUJBQWM7SUFDL0UsMEJBQWU7OztJQURBLGVBQWdCO0lBQWhCLHFDQUFnQjs7O0lBT3pCLDJDQUFvRjtJQUFBLFlBQWtCO0lBQUEsaUJBQW1COzs7SUFBNUQsdUNBQXNCO0lBQUMsZUFBa0I7SUFBbEIscUNBQWtCOzs7O0lBSjFHLDhCQUE0QixTQUFBO0lBQ3RCLG9CQUFJO0lBQUEsaUJBQUs7SUFDYixrQ0FBYztJQUFBLFlBQXFCO0lBQUEsaUJBQUk7SUFDdkMsMENBQTJFO0lBQ3pFLHNIQUF5SDtJQUMzSCxpQkFBa0I7SUFDbEIsOEJBQTBCLGdCQUFBO0lBQzhCLGtMQUFTLGVBQUEsNEJBQXFCLENBQUEsSUFBQztJQUFDLHFCQUFJO0lBQUEsaUJBQVMsRUFBQSxFQUFBOzs7SUFMdkYsZUFBcUI7SUFBckIsNENBQXFCO0lBQ1MsZUFBOEI7SUFBOUIsbURBQThCO0lBQ25DLGVBQXNCO0lBQXRCLG9EQUFzQjs7QUFtQ3JFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0I7SUEvQ3JFOztRQWlEVyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJOUIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBZTtZQUNuQixRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsdUJBQXVCLEVBQUUsRUFBRTtTQUM1QixDQUFDO0tBeUJIO0lBdkJVLFFBQVE7UUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDMUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFUSxZQUFZLENBQUMsS0FBWTtRQUNoQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWlCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7eVNBdENVLDZCQUE2QixTQUE3Qiw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjs7Ozs7O1FBM0N0QyxnR0FFZTtRQUNmLGdJQVdjOzs7UUFkQywrQ0FBNEIsaUJBQUE7d0JBbUMzQyxZQUFZLHVCQUVaLGVBQWUsc0JBQ2YsY0FBYyxtREFDZCxhQUFhO1FBQ2IsbUJBQW1CO3VGQUdWLDZCQUE2QjtjQS9DekMsU0FBUzs2QkFDSSxJQUFJLFlBQ04seUJBQXlCLFlBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULFdBbUJRO29CQUNQLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixtQkFBbUI7aUJBQ3BCO2dCQU91QixPQUFPO2tCQUE5QixTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHsgTWF0TGVnYWN5UmFkaW9Nb2R1bGUgYXMgTWF0UmF0aW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQmFzZUJsb2NrQ29tcG9uZW50LCBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICdAdG1kanIvbmd4LWVkaXRvcmpzJztcbmltcG9ydCB7IFF1aXpDb25maWcsIFF1aXpDb25maWdDb21wb25lbnQgfSBmcm9tICcuL3F1aXotY29uZmlnL3F1aXotY29uZmlnLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX29wZW5FZGl0UXVpek92ZXJsYXk7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XG4gICAgICA8cXVpei1jb25maWcgW3ZhbHVlXT1cIl92YWx1ZVwiIChxdWl6VmFsdWUpPVwidXBkYXRlUXVpeigkZXZlbnQpXCI+PC9xdWl6LWNvbmZpZz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2Vsc2VUZW1wbGF0ZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJxdWl6LWNvbmF0aW5lclwiPlxuICAgICAgICA8aDE+UXVpejwvaDE+XG4gICAgICAgIDxwICNwYXJhZ3JhcGg+e3sgX3ZhbHVlLnF1ZXN0aW9uIH19PC9wPlxuICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiYW5zd2VyLXJhdGlvLWdyb3VwXCIgW3ZhbHVlXT1cIl92YWx1ZS5jb3JyZWN0QW5zd2VyXCI+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfdmFsdWUucmF0aW9PcHRpb25zXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi52YWx1ZSB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9wZW5FZGl0UXVpek92ZXJsYXkoKVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAgIC5hbnN3ZXItcmF0aW8tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDIxcHg7XG4gICAgfVxuICAgIC5xdWl6LWNvbmF0aW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gIGBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UmF0aW9Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBRdWl6Q29uZmlnQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNRdWl6QmxvY2tDb21wb25lbnQgZXh0ZW5kcyBCYXNlQmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIG92ZXJyaWRlIHVzZUlubGluZVRvb2xiYXIgPSBmYWxzZTtcbiAgb3ZlcnJpZGUgdXNlSW5wdXRUeXBlID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncGFyYWdyYXBoJykgZWxlbWVudCE6IEVsZW1lbnRSZWY7XG5cbiAgX29wZW5FZGl0UXVpek92ZXJsYXkgPSBmYWxzZTtcbiAgX3ZhbHVlOiBRdWl6Q29uZmlnID0ge1xuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBjb3JyZWN0QW5zd2VyOiAnJyxcbiAgICByYXRpb09wdGlvbnM6IFtdLFxuICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJycsXG4gICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnXG4gIH07XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgISF0aGlzLnZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodGhpcy52YWx1ZSkpO1xuICAgICF0aGlzLnZhbHVlICYmIHRoaXMub3BlbkVkaXRRdWl6T3ZlcmxheSgpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc3VwZXIudmlld0NoaWxkID0gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgb3ZlcnJpZGUgb25Nb3VzZUVudGVyKGV2ZW50OiBFdmVudCkge1xuICAgIHN1cGVyLm9uTW91c2VFbnRlcihldmVudCk7XG4gIH1cblxuICBvcGVuRWRpdFF1aXpPdmVybGF5KCkge1xuICAgIHRoaXMuX29wZW5FZGl0UXVpek92ZXJsYXkgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlUXVpeih2YWx1ZTogUXVpekNvbmZpZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHRoaXMuX29wZW5FZGl0UXVpek92ZXJsYXkgPSBmYWxzZTtcbiAgfVxufVxuIl19