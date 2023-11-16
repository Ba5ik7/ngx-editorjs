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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: NgxEditorjsQuizBlockComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: NgxEditorjsQuizBlockComponent, isStandalone: true, selector: "ngx-editorjs-quiz-block", viewQueries: [{ propertyName: "element", first: true, predicate: ["paragraph"], descendants: true }], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex", "id", "name", "aria-label", "aria-labelledby", "aria-describedby", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: QuizConfigComponent, selector: "quiz-config", inputs: ["value"], outputs: ["quizValue"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: NgxEditorjsQuizBlockComponent, decorators: [{
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
        }], propDecorators: { element: [{
                type: ViewChild,
                args: ['paragraph']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFzQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFjLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBZ0R0RixNQUFNLE9BQU8sNkJBQThCLFNBQVEsa0JBQWtCO0lBOUNyRTs7UUFnRFcscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSTlCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQWU7WUFDbkIsUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHVCQUF1QixFQUFFLEVBQUU7U0FDNUIsQ0FBQztLQXlCSDtJQXZCVSxRQUFRO1FBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRVEsWUFBWSxDQUFDLEtBQVk7UUFDaEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFpQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7OEdBdENVLDZCQUE2QjtrR0FBN0IsNkJBQTZCLGdOQTNDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQsMFVBb0JDLFlBQVksK1BBQ1osZUFBZSwyTkFDZixjQUFjLHNpQkFDZCxhQUFhLCtCQUNiLG1CQUFtQjs7MkZBR1YsNkJBQTZCO2tCQTlDekMsU0FBUztpQ0FDSSxJQUFJLFlBQ04seUJBQXlCLFlBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULFdBbUJRO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2IsbUJBQW1CO3FCQUNwQjs4QkFPdUIsT0FBTztzQkFBOUIsU0FBUzt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEJhc2VCbG9ja0NvbXBvbmVudCB9IGZyb20gJ0B0bWRqci9uZ3gtZWRpdG9yanMnO1xuaW1wb3J0IHsgUXVpekNvbmZpZywgUXVpekNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vcXVpei1jb25maWcvcXVpei1jb25maWcuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLXF1aXotYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfb3BlbkVkaXRRdWl6T3ZlcmxheTsgZWxzZSBlbHNlVGVtcGxhdGVcIj5cbiAgICAgIDxxdWl6LWNvbmZpZyBbdmFsdWVdPVwiX3ZhbHVlXCIgKHF1aXpWYWx1ZSk9XCJ1cGRhdGVRdWl6KCRldmVudClcIj48L3F1aXotY29uZmlnPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlPlxuICAgICAgPGRpdiBjbGFzcz1cInF1aXotY29uYXRpbmVyXCI+XG4gICAgICAgIDxoMT5RdWl6PC9oMT5cbiAgICAgICAgPHAgI3BhcmFncmFwaD57eyBfdmFsdWUucXVlc3Rpb24gfX08L3A+XG4gICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJhbnN3ZXItcmF0aW8tZ3JvdXBcIiBbdmFsdWVdPVwiX3ZhbHVlLmNvcnJlY3RBbnN3ZXJcIj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF92YWx1ZS5yYXRpb09wdGlvbnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLnZhbHVlIH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib3BlbkVkaXRRdWl6T3ZlcmxheSgpXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjFweDtcbiAgICB9XG4gICAgLnF1aXotY29uYXRpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUXVpekNvbmZpZ0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBvdmVycmlkZSB1c2VJbmxpbmVUb29sYmFyID0gZmFsc2U7XG4gIG92ZXJyaWRlIHVzZUlucHV0VHlwZSA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhcmFncmFwaCcpIGVsZW1lbnQhOiBFbGVtZW50UmVmO1xuXG4gIF9vcGVuRWRpdFF1aXpPdmVybGF5ID0gZmFsc2U7XG4gIF92YWx1ZTogUXVpekNvbmZpZyA9IHtcbiAgICBxdWVzdGlvbjogJycsXG4gICAgY29ycmVjdEFuc3dlcjogJycsXG4gICAgcmF0aW9PcHRpb25zOiBbXSxcbiAgICBjb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnLFxuICAgIGluY29ycmVjdEFuc3dlclJlc3BvbnNlOiAnJ1xuICB9O1xuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgICEhdGhpcy52YWx1ZSAmJiAodGhpcy5fdmFsdWUgPSBKU09OLnBhcnNlKHRoaXMudmFsdWUpKTtcbiAgICAhdGhpcy52YWx1ZSAmJiB0aGlzLm9wZW5FZGl0UXVpek92ZXJsYXkoKTtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLnZpZXdDaGlsZCA9IHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIG92ZXJyaWRlIG9uTW91c2VFbnRlcihldmVudDogRXZlbnQpIHtcbiAgICBzdXBlci5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICB9XG5cbiAgb3BlbkVkaXRRdWl6T3ZlcmxheSgpIHtcbiAgICB0aGlzLl9vcGVuRWRpdFF1aXpPdmVybGF5ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZVF1aXoodmFsdWU6IFF1aXpDb25maWcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICB0aGlzLl9vcGVuRWRpdFF1aXpPdmVybGF5ID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==