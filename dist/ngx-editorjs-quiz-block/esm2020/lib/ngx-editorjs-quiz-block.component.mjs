import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import { QuizConfigComponent } from './quiz-config/quiz-config.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/legacy-button";
import * as i3 from "@angular/material/icon";
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
function NgxEditorjsQuizBlockComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "p", 4, 5);
    i0.ɵɵlistener("focus", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_p_focus_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onMouseEnter($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.openEditQuizOverlay()); });
    i0.ɵɵelementStart(4, "mat-icon");
    i0.ɵɵtext(5, "edit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("autofocus", true)("innerHTML", ctx_r2.value, i0.ɵɵsanitizeHtml);
} }
export class NgxEditorjsQuizBlockComponent extends BaseBlockComponent {
    constructor() {
        super(...arguments);
        this.useInlineToolbar = false;
        this.useInputType = false;
        this._openEditQuizOverlay = false;
        this._value = { question: '', correctAnswer: '' };
    }
    ngOnInit() {
        !!this.value && (this._value = JSON.parse(this.value));
        console.log('this.value', this.value);
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
        console.log({
            updateImage: value
        });
    }
}
NgxEditorjsQuizBlockComponent.ɵfac = /*@__PURE__*/ function () { let ɵNgxEditorjsQuizBlockComponent_BaseFactory; return function NgxEditorjsQuizBlockComponent_Factory(t) { return (ɵNgxEditorjsQuizBlockComponent_BaseFactory || (ɵNgxEditorjsQuizBlockComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NgxEditorjsQuizBlockComponent)))(t || NgxEditorjsQuizBlockComponent); }; }();
NgxEditorjsQuizBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizBlockComponent, selectors: [["ngx-editorjs-quiz-block"]], viewQuery: function NgxEditorjsQuizBlockComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
    } }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "quizValue"], [1, "quiz-conatiner"], ["contenteditable", "", 1, "flex-spacer", 3, "autofocus", "innerHTML", "focus"], ["paragraph", ""], ["mat-mini-fab", "", 1, "image-block-button", "mat-elevation-z2", 3, "click"]], template: function NgxEditorjsQuizBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxEditorjsQuizBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, NgxEditorjsQuizBlockComponent_ng_template_1_Template, 6, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx._openEditQuizOverlay)("ngIfElse", _r1);
    } }, dependencies: [CommonModule, i1.NgIf, AutofocusDirective,
        MatButtonModule, i2.MatLegacyButton, MatIconModule, i3.MatIcon, QuizConfigComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}p[_ngcontent-%COMP%]{font-size:1.6rem;line-height:3.2rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-editorjs-quiz-block', template: `
    <ng-container *ngIf="_openEditQuizOverlay; else elseTemplate">
      <quiz-config [value]="_value" (quizValue)="updateQuiz($event)"></quiz-config>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="quiz-conatiner">
        <p class="flex-spacer" #paragraph contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></p>
        <button  
          mat-mini-fab 
          class="image-block-button mat-elevation-z2"
          (click)="openEditQuizOverlay()">
          <mat-icon>edit</mat-icon>
        </button>
      </div>
    </ng-template>
  `, imports: [
                    CommonModule,
                    AutofocusDirective,
                    MatButtonModule,
                    MatIconModule,
                    QuizConfigComponent
                ], styles: [":host{display:flex;flex-direction:column}p{font-size:1.6rem;line-height:3.2rem}\n"] }]
    }], null, { element: [{
            type: ViewChild,
            args: ['paragraph']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFzQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7SUFNdEUsNkJBQThEO0lBQzVELHNDQUErRDtJQUFqQyxzTUFBYSxlQUFBLHlCQUFrQixDQUFBLElBQUM7SUFBQyxpQkFBYztJQUMvRSwwQkFBZTs7O0lBREEsZUFBZ0I7SUFBaEIscUNBQWdCOzs7O0lBRzdCLDhCQUE0QixjQUFBO0lBQzJDLG1MQUFTLGVBQUEsMkJBQW9CLENBQUEsSUFBQztJQUFxQixpQkFBSTtJQUM1SCxpQ0FHa0M7SUFBaEMsa0xBQVMsZUFBQSw0QkFBcUIsQ0FBQSxJQUFDO0lBQy9CLGdDQUFVO0lBQUEsb0JBQUk7SUFBQSxpQkFBVyxFQUFBLEVBQUE7OztJQUx1QixlQUFrQjtJQUFsQixnQ0FBa0IsOENBQUE7O0FBbUI1RSxNQUFNLE9BQU8sNkJBQThCLFNBQVEsa0JBQWtCO0lBNUJyRTs7UUE4QlcscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSTlCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQWdELEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLENBQUM7S0F5QjNGO0lBdkJVLFFBQVE7UUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFUSxZQUFZLENBQUMsS0FBWTtRQUNoQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWtEO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDVixXQUFXLEVBQUUsS0FBSztTQUNuQixDQUFDLENBQUE7SUFDSixDQUFDOzt5U0FoQ1UsNkJBQTZCLFNBQTdCLDZCQUE2QjtnRkFBN0IsNkJBQTZCOzs7Ozs7UUF4QnRDLGdHQUVlO1FBQ2YsK0hBVWM7OztRQWJDLCtDQUE0QixpQkFBQTt3QkFpQjNDLFlBQVksV0FDWixrQkFBa0I7UUFDbEIsZUFBZSxzQkFDZixhQUFhLGNBQ2IsbUJBQW1CO3VGQUdWLDZCQUE2QjtjQTVCekMsU0FBUzs2QkFDSSxJQUFJLFlBQ04seUJBQXlCLFlBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCxXQUVRO29CQUNQLFlBQVk7b0JBQ1osa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLGFBQWE7b0JBQ2IsbUJBQW1CO2lCQUNwQjtnQkFPdUIsT0FBTztrQkFBOUIsU0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEJhc2VCbG9ja0NvbXBvbmVudCwgQXV0b2ZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnQHRtZGpyL25neC1lZGl0b3Jqcyc7XG5pbXBvcnQgeyBRdWl6Q29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtcXVpei1ibG9jaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9vcGVuRWRpdFF1aXpPdmVybGF5OyBlbHNlIGVsc2VUZW1wbGF0ZVwiPlxuICAgICAgPHF1aXotY29uZmlnIFt2YWx1ZV09XCJfdmFsdWVcIiAocXVpelZhbHVlKT1cInVwZGF0ZVF1aXooJGV2ZW50KVwiPjwvcXVpei1jb25maWc+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicXVpei1jb25hdGluZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJmbGV4LXNwYWNlclwiICNwYXJhZ3JhcGggY29udGVudGVkaXRhYmxlIFthdXRvZm9jdXNdPVwidHJ1ZVwiIChmb2N1cyk9XCJvbk1vdXNlRW50ZXIoJGV2ZW50KVwiIFtpbm5lckhUTUxdPVwidmFsdWVcIj48L3A+XG4gICAgICAgIDxidXR0b24gIFxuICAgICAgICAgIG1hdC1taW5pLWZhYiBcbiAgICAgICAgICBjbGFzcz1cImltYWdlLWJsb2NrLWJ1dHRvbiBtYXQtZWxldmF0aW9uLXoyXCJcbiAgICAgICAgICAoY2xpY2spPVwib3BlbkVkaXRRdWl6T3ZlcmxheSgpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlczogW2A6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gcCB7IGZvbnQtc2l6ZTogMS42cmVtOyBsaW5lLWhlaWdodDogMy4ycmVtOyB9YF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIFF1aXpDb25maWdDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFZGl0b3Jqc1F1aXpCbG9ja0NvbXBvbmVudCBleHRlbmRzIEJhc2VCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgb3ZlcnJpZGUgdXNlSW5saW5lVG9vbGJhciA9IGZhbHNlO1xuICBvdmVycmlkZSB1c2VJbnB1dFR5cGUgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdwYXJhZ3JhcGgnKSBlbGVtZW50ITogRWxlbWVudFJlZjtcblxuICBfb3BlbkVkaXRRdWl6T3ZlcmxheSA9IGZhbHNlO1xuICBfdmFsdWU6IHsgcXVlc3Rpb246IHN0cmluZywgY29ycmVjdEFuc3dlcjogc3RyaW5nIH0gPSB7IHF1ZXN0aW9uOiAnJywgY29ycmVjdEFuc3dlcjogJycgfTtcblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICAhIXRoaXMudmFsdWUgJiYgKHRoaXMuX3ZhbHVlID0gSlNPTi5wYXJzZSh0aGlzLnZhbHVlKSk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMudmFsdWUnLCB0aGlzLnZhbHVlKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLnZpZXdDaGlsZCA9IHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG92ZXJyaWRlIG9uTW91c2VFbnRlcihldmVudDogRXZlbnQpIHtcbiAgICBzdXBlci5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICB9XG5cbiAgb3BlbkVkaXRRdWl6T3ZlcmxheSgpIHtcbiAgICB0aGlzLl9vcGVuRWRpdFF1aXpPdmVybGF5ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZVF1aXoodmFsdWU6IHsgcXVlc3Rpb246IHN0cmluZywgY29ycmVjdEFuc3dlcjogc3RyaW5nIH0pIHtcbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICB1cGRhdGVJbWFnZTogdmFsdWVcbiAgICB9KVxuICB9XG59XG4iXX0=