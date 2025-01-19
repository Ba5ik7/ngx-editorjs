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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxEditorjsQuizClientBlockComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: NgxEditorjsQuizClientBlockComponent, isStandalone: true, selector: "ngx-editorjs-image-client-block", inputs: { value: "value" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.answer-ratio-group li:before{content:\")\";margin-right:.5em}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: NgxEditorjsQuizClientBlockComponent, decorators: [{
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
        }], propDecorators: { value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQW1EN0MsTUFBTSxPQUFPLG1DQUFtQztJQWpEaEQ7UUFtREUsb0JBQWUsR0FBd0IsU0FBUyxDQUFDO1FBQ2pELG1CQUFjLEdBQXVCLFNBQVMsQ0FBQztRQUMvQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQXVCLFNBQVMsQ0FBQztRQUMzQyxXQUFNLEdBQWU7WUFDbkIsUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHVCQUF1QixFQUFFLEVBQUU7U0FDNUIsQ0FBQztLQVlIO0lBVkMsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDdkgsQ0FBQzsrR0F2QlUsbUNBQW1DO21HQUFuQyxtQ0FBbUMsdUhBeENwQzs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVCx3WUFyQkMsWUFBWSw2VkFDWixlQUFlLDJOQUNmLGNBQWMsb2xCQUNkLFdBQVc7OzRGQTBDRixtQ0FBbUM7a0JBakQvQyxTQUFTO2lDQUNJLElBQUksWUFDTixpQ0FBaUMsV0FDbEM7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsV0FBVztxQkFDWixZQUNTOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JUOzhCQXVDRyxLQUFLO3NCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHsgUXVpekNvbmZpZyB9IGZyb20gJy4vcXVpei1jb25maWcvcXVpei1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtaW1hZ2UtY2xpZW50LWJsb2NrJyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpei1jb25hdGluZXJcIj5cbiAgICAgIDxoMT5RdWl6PC9oMT5cbiAgICAgIDxwICpuZ0lmPVwiYW5zd2VyUmVzcG9uc2VcIiBbbmdDbGFzc109XCJpc0Fuc3dlckNvcnJlY3QgPyAnc3VjY2Vzc2Z1bC10ZXh0JyA6ICdmYWlsdXJlLXRleHQnXCIgPnt7IGFuc3dlclJlc3BvbnNlIH19PC9wPlxuICAgICAgPHAgI3BhcmFncmFwaD57eyBfdmFsdWUucXVlc3Rpb24gfX08L3A+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFsobmdNb2RlbCldPVwidXNlckFuc3dlclwiIFtkaXNhYmxlZF09XCJhbnN3ZXJTdWJtaXRlZFwiPlxuICAgICAgICA8b2wgdHlwZT1cImFcIiBjbGFzcz1cImFuc3dlci1yYXRpby1ncm91cFwiPlxuICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF92YWx1ZS5yYXRpb09wdGlvbnNcIj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLnZhbHVlIH19PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvb2w+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uUXVpekFuc3dlckNsaWNrKClcIiBbZGlzYWJsZWRdPVwiIXVzZXJBbnN3ZXIgfHwgYW5zd2VyU3VibWl0ZWRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAgIC5hbnN3ZXItcmF0aW8tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDIxcHg7XG4gICAgfVxuICAgIC5hbnN3ZXItcmF0aW8tZ3JvdXAgbGk6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIilcIjtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgfVxuICAgIC5xdWl6LWNvbmF0aW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekNsaWVudEJsb2NrQ29tcG9uZW50IHtcblxuICBpc0Fuc3dlckNvcnJlY3Q6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGFuc3dlclJlc3BvbnNlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGFuc3dlclN1Ym1pdGVkID0gZmFsc2U7XG4gIHVzZXJBbnN3ZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgX3ZhbHVlOiBRdWl6Q29uZmlnID0ge1xuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBjb3JyZWN0QW5zd2VyOiAnJyxcbiAgICByYXRpb09wdGlvbnM6IFtdLFxuICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJycsXG4gICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnXG4gIH07XG5cbiAgQElucHV0KCkgXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgISF2YWx1ZSAmJiAodGhpcy5fdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKSk7XG4gIH1cblxuICBvblF1aXpBbnN3ZXJDbGljaygpIHtcbiAgICB0aGlzLmFuc3dlclN1Ym1pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzQW5zd2VyQ29ycmVjdCA9IHRoaXMudXNlckFuc3dlciA9PT0gdGhpcy5fdmFsdWUuY29ycmVjdEFuc3dlcjtcbiAgICB0aGlzLmFuc3dlclJlc3BvbnNlID0gdGhpcy5pc0Fuc3dlckNvcnJlY3QgPyB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyUmVzcG9uc2UgOiB0aGlzLl92YWx1ZS5pbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTtcbiAgfVxufVxuIl19