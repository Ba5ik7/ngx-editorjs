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
NgxEditorjsQuizClientBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizClientBlockComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxEditorjsQuizClientBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: NgxEditorjsQuizClientBlockComponent, isStandalone: true, selector: "ngx-editorjs-image-client-block", inputs: { value: "value" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.answer-ratio-group li:before{content:\")\";margin-right:.5em}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRatioModule }, { kind: "directive", type: i3.MatLegacyRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatLegacyRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizClientBlockComponent, decorators: [{
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
        }], propDecorators: { value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQW9EN0MsTUFBTSxPQUFPLG1DQUFtQztJQWxEaEQ7UUFvREUsb0JBQWUsR0FBd0IsU0FBUyxDQUFDO1FBQ2pELG1CQUFjLEdBQXVCLFNBQVMsQ0FBQztRQUMvQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQXVCLFNBQVMsQ0FBQztRQUMzQyxXQUFNLEdBQWU7WUFDbkIsUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHVCQUF1QixFQUFFLEVBQUU7U0FDNUIsQ0FBQztLQVlIO0lBVkMsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDdkgsQ0FBQzs7Z0lBdkJVLG1DQUFtQztvSEFBbkMsbUNBQW1DLHVIQXpDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJULHdZQXRCQyxZQUFZLDZWQUNaLGVBQWUsZ1dBQ2YsY0FBYyxzU0FDZCxXQUFXOzJGQTJDRixtQ0FBbUM7a0JBbEQvQyxTQUFTO2lDQUNJLElBQUksWUFDTixpQ0FBaUMsV0FDbEM7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsV0FBVztxQkFDWixZQUNTOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDs4QkF1Q0csS0FBSztzQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IE1hdExlZ2FjeVJhZGlvTW9kdWxlIGFzIE1hdFJhdGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXJhZGlvJztcbmltcG9ydCB7IFF1aXpDb25maWcgfSBmcm9tICcuL3F1aXotY29uZmlnL3F1aXotY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLWltYWdlLWNsaWVudC1ibG9jaycsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFJhdGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cInF1aXotY29uYXRpbmVyXCI+XG4gICAgICA8aDE+UXVpejwvaDE+XG4gICAgICA8cCAqbmdJZj1cImFuc3dlclJlc3BvbnNlXCIgW25nQ2xhc3NdPVwiaXNBbnN3ZXJDb3JyZWN0ID8gJ3N1Y2Nlc3NmdWwtdGV4dCcgOiAnZmFpbHVyZS10ZXh0J1wiID57eyBhbnN3ZXJSZXNwb25zZSB9fTwvcD5cbiAgICAgIDxwICNwYXJhZ3JhcGg+e3sgX3ZhbHVlLnF1ZXN0aW9uIH19PC9wPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbKG5nTW9kZWwpXT1cInVzZXJBbnN3ZXJcIiBbZGlzYWJsZWRdPVwiYW5zd2VyU3VibWl0ZWRcIj5cbiAgICAgICAgPG9sIHR5cGU9XCJhXCIgY2xhc3M9XCJhbnN3ZXItcmF0aW8tZ3JvdXBcIj5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfdmFsdWUucmF0aW9PcHRpb25zXCI+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi52YWx1ZSB9fTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L29sPlxuICAgICAgICBcbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uUXVpekFuc3dlckNsaWNrKClcIiBbZGlzYWJsZWRdPVwiIXVzZXJBbnN3ZXIgfHwgYW5zd2VyU3VibWl0ZWRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAgIC5hbnN3ZXItcmF0aW8tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDIxcHg7XG4gICAgfVxuICAgIC5hbnN3ZXItcmF0aW8tZ3JvdXAgbGk6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIilcIjtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgfVxuICAgIC5xdWl6LWNvbmF0aW5lciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekNsaWVudEJsb2NrQ29tcG9uZW50IHtcblxuICBpc0Fuc3dlckNvcnJlY3Q6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGFuc3dlclJlc3BvbnNlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIGFuc3dlclN1Ym1pdGVkID0gZmFsc2U7XG4gIHVzZXJBbnN3ZXI6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgX3ZhbHVlOiBRdWl6Q29uZmlnID0ge1xuICAgIHF1ZXN0aW9uOiAnJyxcbiAgICBjb3JyZWN0QW5zd2VyOiAnJyxcbiAgICByYXRpb09wdGlvbnM6IFtdLFxuICAgIGNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJycsXG4gICAgaW5jb3JyZWN0QW5zd2VyUmVzcG9uc2U6ICcnXG4gIH07XG5cbiAgQElucHV0KCkgXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgISF2YWx1ZSAmJiAodGhpcy5fdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKSk7XG4gIH1cblxuICBvblF1aXpBbnN3ZXJDbGljaygpIHtcbiAgICB0aGlzLmFuc3dlclN1Ym1pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzQW5zd2VyQ29ycmVjdCA9IHRoaXMudXNlckFuc3dlciA9PT0gdGhpcy5fdmFsdWUuY29ycmVjdEFuc3dlcjtcbiAgICB0aGlzLmFuc3dlclJlc3BvbnNlID0gdGhpcy5pc0Fuc3dlckNvcnJlY3QgPyB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyUmVzcG9uc2UgOiB0aGlzLl92YWx1ZS5pbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTtcbiAgfVxufVxuIl19