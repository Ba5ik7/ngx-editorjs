import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { QuizConfigComponent } from './quiz-config/quiz-config.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/radio";
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
    } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, MatButtonModule, i2.MatButton, MatRadioModule, i3.MatRadioGroup, i3.MatRadioButton, MatIconModule,
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
                    MatButtonModule,
                    MatRadioModule,
                    MatIconModule,
                    QuizConfigComponent
                ], styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
    }], null, { element: [{
            type: ViewChild,
            args: ['paragraph']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFzQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFjLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7O0lBTWxGLDZCQUE4RDtJQUM1RCxzQ0FBK0Q7SUFBakMsc01BQWEsZUFBQSx5QkFBa0IsQ0FBQSxJQUFDO0lBQUMsaUJBQWM7SUFDL0UsMEJBQWU7OztJQURBLGVBQWdCO0lBQWhCLHFDQUFnQjs7O0lBT3pCLDJDQUFvRjtJQUFBLFlBQWtCO0lBQUEsaUJBQW1COzs7SUFBNUQsdUNBQXNCO0lBQUMsZUFBa0I7SUFBbEIscUNBQWtCOzs7O0lBSjFHLDhCQUE0QixTQUFBO0lBQ3RCLG9CQUFJO0lBQUEsaUJBQUs7SUFDYixrQ0FBYztJQUFBLFlBQXFCO0lBQUEsaUJBQUk7SUFDdkMsMENBQTJFO0lBQ3pFLHNIQUF5SDtJQUMzSCxpQkFBa0I7SUFDbEIsOEJBQTBCLGdCQUFBO0lBQzhCLGtMQUFTLGVBQUEsNEJBQXFCLENBQUEsSUFBQztJQUFDLHFCQUFJO0lBQUEsaUJBQVMsRUFBQSxFQUFBOzs7SUFMdkYsZUFBcUI7SUFBckIsNENBQXFCO0lBQ1MsZUFBOEI7SUFBOUIsbURBQThCO0lBQ25DLGVBQXNCO0lBQXRCLG9EQUFzQjs7QUFrQ3JFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0I7SUE5Q3JFOztRQWdEVyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFJOUIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLFdBQU0sR0FBZTtZQUNuQixRQUFRLEVBQUUsRUFBRTtZQUNaLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLHFCQUFxQixFQUFFLEVBQUU7WUFDekIsdUJBQXVCLEVBQUUsRUFBRTtTQUM1QixDQUFDO0tBeUJIO0lBdkJVLFFBQVE7UUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDMUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFUSxZQUFZLENBQUMsS0FBWTtRQUNoQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWlCO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7eVNBdENVLDZCQUE2QixTQUE3Qiw2QkFBNkI7Z0ZBQTdCLDZCQUE2Qjs7Ozs7O1FBMUN0QyxnR0FFZTtRQUNmLGdJQVdjOzs7UUFkQywrQ0FBNEIsaUJBQUE7d0JBbUMzQyxZQUFZLHVCQUNaLGVBQWUsZ0JBQ2YsY0FBYyx1Q0FDZCxhQUFhO1FBQ2IsbUJBQW1CO3VGQUdWLDZCQUE2QjtjQTlDekMsU0FBUzs2QkFDSSxJQUFJLFlBQ04seUJBQXlCLFlBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULFdBbUJRO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFPdUIsT0FBTztrQkFBOUIsU0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEJhc2VCbG9ja0NvbXBvbmVudCB9IGZyb20gJ0B0bWRqci9uZ3gtZWRpdG9yanMnO1xuaW1wb3J0IHsgUXVpekNvbmZpZywgUXVpekNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vcXVpei1jb25maWcvcXVpei1jb25maWcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLXF1aXotYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfb3BlbkVkaXRRdWl6T3ZlcmxheTsgZWxzZSBlbHNlVGVtcGxhdGVcIj5cbiAgICAgIDxxdWl6LWNvbmZpZyBbdmFsdWVdPVwiX3ZhbHVlXCIgKHF1aXpWYWx1ZSk9XCJ1cGRhdGVRdWl6KCRldmVudClcIj48L3F1aXotY29uZmlnPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cInF1aXotY29uYXRpbmVyXCI+XG4gICAgICAgIDxoMT5RdWl6PC9oMT5cbiAgICAgICAgPHAgI3BhcmFncmFwaD57eyBfdmFsdWUucXVlc3Rpb24gfX08L3A+XG4gICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJhbnN3ZXItcmF0aW8tZ3JvdXBcIiBbdmFsdWVdPVwiX3ZhbHVlLmNvcnJlY3RBbnN3ZXJcIj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF92YWx1ZS5yYXRpb09wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLnZhbHVlIH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib3BlbkVkaXRRdWl6T3ZlcmxheSgpXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjFweDtcbiAgICB9XG4gICAgLnF1aXotY29uYXRpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUXVpekNvbmZpZ0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBvdmVycmlkZSB1c2VJbmxpbmVUb29sYmFyID0gZmFsc2U7XG4gIG92ZXJyaWRlIHVzZUlucHV0VHlwZSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhcmFncmFwaCcpIGVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIF9vcGVuRWRpdFF1aXpPdmVybGF5ID0gZmFsc2U7XG4gIF92YWx1ZTogUXVpekNvbmZpZyA9IHtcbiAgICBxdWVzdGlvbjogJycsXG4gICAgY29ycmVjdEFuc3dlcjogJycsXG4gICAgcmF0aW9PcHRpb25zOiBbXSxcbiAgICBjb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnLFxuICAgIGluY29ycmVjdEFuc3dlclJlc3BvbnNlOiAnJ1xuICB9O1xuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgICEhdGhpcy52YWx1ZSAmJiAodGhpcy5fdmFsdWUgPSBKU09OLnBhcnNlKHRoaXMudmFsdWUpKTtcbiAgICAhdGhpcy52YWx1ZSAmJiB0aGlzLm9wZW5FZGl0UXVpek92ZXJsYXkoKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLnZpZXdDaGlsZCA9IHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG92ZXJyaWRlIG9uTW91c2VFbnRlcihldmVudDogRXZlbnQpIHtcbiAgICBzdXBlci5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICB9XG5cbiAgb3BlbkVkaXRRdWl6T3ZlcmxheSgpIHtcbiAgICB0aGlzLl9vcGVuRWRpdFF1aXpPdmVybGF5ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZVF1aXoodmFsdWU6IFF1aXpDb25maWcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB0aGlzLl9vcGVuRWRpdFF1aXpPdmVybGF5ID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==