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
}
NgxEditorjsQuizBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizBlockComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NgxEditorjsQuizBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: NgxEditorjsQuizBlockComponent, isStandalone: true, selector: "ngx-editorjs-quiz-block", viewQueries: [{ propertyName: "element", first: true, predicate: ["paragraph"], descendants: true }], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: QuizConfigComponent, selector: "quiz-config", inputs: ["value"], outputs: ["quizValue"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizBlockComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFzQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFjLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBZ0R0RixNQUFNLE9BQU8sNkJBQThCLFNBQVEsa0JBQWtCO0lBOUNyRTs7UUFnRFcscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSTlCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQWU7WUFDbkIsUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHVCQUF1QixFQUFFLEVBQUU7U0FDNUIsQ0FBQztLQXlCSDtJQXZCVSxRQUFRO1FBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRVEsWUFBWSxDQUFDLEtBQVk7UUFDaEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFpQjtRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0lBQ3BDLENBQUM7OzBIQXRDVSw2QkFBNkI7OEdBQTdCLDZCQUE2QixnTkEzQzlCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULDBVQW9CQyxZQUFZLCtQQUNaLGVBQWUsMlFBQ2YsY0FBYywwUkFDZCxhQUFhLCtCQUNiLG1CQUFtQjsyRkFHViw2QkFBNkI7a0JBOUN6QyxTQUFTO2lDQUNJLElBQUksWUFDTix5QkFBeUIsWUFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQsV0FtQlE7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixtQkFBbUI7cUJBQ3BCOzhCQU91QixPQUFPO3NCQUE5QixTQUFTO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQmFzZUJsb2NrQ29tcG9uZW50IH0gZnJvbSAnQHRtZGpyL25neC1lZGl0b3Jqcyc7XG5pbXBvcnQgeyBRdWl6Q29uZmlnLCBRdWl6Q29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtcXVpei1ibG9jaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9vcGVuRWRpdFF1aXpPdmVybGF5OyBlbHNlIGVsc2VUZW1wbGF0ZVwiPlxuICAgICAgPHF1aXotY29uZmlnIFt2YWx1ZV09XCJfdmFsdWVcIiAocXVpelZhbHVlKT1cInVwZGF0ZVF1aXooJGV2ZW50KVwiPjwvcXVpei1jb25maWc+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicXVpei1jb25hdGluZXJcIj5cbiAgICAgICAgPGgxPlF1aXo8L2gxPlxuICAgICAgICA8cCAjcGFyYWdyYXBoPnt7IF92YWx1ZS5xdWVzdGlvbiB9fTwvcD5cbiAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImFuc3dlci1yYXRpby1ncm91cFwiIFt2YWx1ZV09XCJfdmFsdWUuY29ycmVjdEFuc3dlclwiPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3ZhbHVlLnJhdGlvT3B0aW9uc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmFsdWUgfX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJvcGVuRWRpdFF1aXpPdmVybGF5KClcIj5FZGl0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcGFkZGluZy1ib3R0b206IDIycHg7IH1cbiAgICAuYW5zd2VyLXJhdGlvLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAyMXB4O1xuICAgIH1cbiAgICAucXVpei1jb25hdGluZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBRdWl6Q29uZmlnQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNRdWl6QmxvY2tDb21wb25lbnQgZXh0ZW5kcyBCYXNlQmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG4gIG92ZXJyaWRlIHVzZUlubGluZVRvb2xiYXIgPSBmYWxzZTtcbiAgb3ZlcnJpZGUgdXNlSW5wdXRUeXBlID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncGFyYWdyYXBoJykgZWxlbWVudCE6IEVsZW1lbnRSZWY7XG5cbiAgX29wZW5FZGl0UXVpek92ZXJsYXkgPSBmYWxzZTtcbiAgX3ZhbHVlOiBRdWl6Q29uZmlnID0ge1xuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBjb3JyZWN0QW5zd2VyOiAnJyxcbiAgICByYXRpb09wdGlvbnM6IFtdLFxuICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJycsXG4gICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnXG4gIH07XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgISF0aGlzLnZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodGhpcy52YWx1ZSkpO1xuICAgICF0aGlzLnZhbHVlICYmIHRoaXMub3BlbkVkaXRRdWl6T3ZlcmxheSgpO1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc3VwZXIudmlld0NoaWxkID0gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgb3ZlcnJpZGUgb25Nb3VzZUVudGVyKGV2ZW50OiBFdmVudCkge1xuICAgIHN1cGVyLm9uTW91c2VFbnRlcihldmVudCk7XG4gIH1cblxuICBvcGVuRWRpdFF1aXpPdmVybGF5KCkge1xuICAgIHRoaXMuX29wZW5FZGl0UXVpek92ZXJsYXkgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlUXVpeih2YWx1ZTogUXVpekNvbmZpZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHRoaXMuX29wZW5FZGl0UXVpek92ZXJsYXkgPSBmYWxzZTtcbiAgfVxufVxuIl19