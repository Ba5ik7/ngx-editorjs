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
        <button mat-flat-button color="accent" type="button" (click)="onQuizAnswerClick()" [disabled]="!userAnswer || answerSubmited">Submit</button>
      </div>
    </div>
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.answer-ratio-group li:before{content:\")\";margin-right:.5em}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizClientBlockComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLXF1aXotY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztBQW1EN0MsTUFBTSxPQUFPLG1DQUFtQztJQWpEaEQ7UUFtREUsb0JBQWUsR0FBd0IsU0FBUyxDQUFDO1FBQ2pELG1CQUFjLEdBQXVCLFNBQVMsQ0FBQztRQUMvQyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQXVCLFNBQVMsQ0FBQztRQUMzQyxXQUFNLEdBQWU7WUFDbkIsUUFBUSxFQUFFLEVBQUU7WUFDWixhQUFhLEVBQUUsRUFBRTtZQUNqQixZQUFZLEVBQUUsRUFBRTtZQUNoQixxQkFBcUIsRUFBRSxFQUFFO1lBQ3pCLHVCQUF1QixFQUFFLEVBQUU7U0FDNUIsQ0FBQztLQVlIO0lBVkMsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUNyRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7SUFDdkgsQ0FBQzs7Z0lBdkJVLG1DQUFtQztvSEFBbkMsbUNBQW1DLHVIQXhDcEM7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQsd1lBckJDLFlBQVksNlZBQ1osZUFBZSwyUUFDZixjQUFjLDBSQUNkLFdBQVc7MkZBMENGLG1DQUFtQztrQkFqRC9DLFNBQVM7aUNBQ0ksSUFBSSxZQUNOLGlDQUFpQyxXQUNsQzt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxXQUFXO3FCQUNaLFlBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7OEJBdUNHLEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UmFkaW9Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQgeyBRdWl6Q29uZmlnIH0gZnJvbSAnLi9xdWl6LWNvbmZpZy9xdWl6LWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1pbWFnZS1jbGllbnQtYmxvY2snLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJxdWl6LWNvbmF0aW5lclwiPlxuICAgICAgPGgxPlF1aXo8L2gxPlxuICAgICAgPHAgKm5nSWY9XCJhbnN3ZXJSZXNwb25zZVwiIFtuZ0NsYXNzXT1cImlzQW5zd2VyQ29ycmVjdCA/ICdzdWNjZXNzZnVsLXRleHQnIDogJ2ZhaWx1cmUtdGV4dCdcIiA+e3sgYW5zd2VyUmVzcG9uc2UgfX08L3A+XG4gICAgICA8cCAjcGFyYWdyYXBoPnt7IF92YWx1ZS5xdWVzdGlvbiB9fTwvcD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgWyhuZ01vZGVsKV09XCJ1c2VyQW5zd2VyXCIgW2Rpc2FibGVkXT1cImFuc3dlclN1Ym1pdGVkXCI+XG4gICAgICAgIDxvbCB0eXBlPVwiYVwiIGNsYXNzPVwiYW5zd2VyLXJhdGlvLWdyb3VwXCI+XG4gICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgX3ZhbHVlLnJhdGlvT3B0aW9uc1wiPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmFsdWUgfX08L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC9vbD5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwib25RdWl6QW5zd2VyQ2xpY2soKVwiIFtkaXNhYmxlZF09XCIhdXNlckFuc3dlciB8fCBhbnN3ZXJTdWJtaXRlZFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMjFweDtcbiAgICB9XG4gICAgLmFuc3dlci1yYXRpby1ncm91cCBsaTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiKVwiO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICB9XG4gICAgLnF1aXotY29uYXRpbmVyIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZ2FwOiAxMHB4O1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNRdWl6Q2xpZW50QmxvY2tDb21wb25lbnQge1xuXG4gIGlzQW5zd2VyQ29ycmVjdDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgYW5zd2VyUmVzcG9uc2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgYW5zd2VyU3VibWl0ZWQgPSBmYWxzZTtcbiAgdXNlckFuc3dlcjogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBfdmFsdWU6IFF1aXpDb25maWcgPSB7XG4gICAgcXVlc3Rpb246ICcnLFxuICAgIGNvcnJlY3RBbnN3ZXI6ICcnLFxuICAgIHJhdGlvT3B0aW9uczogW10sXG4gICAgY29ycmVjdEFuc3dlclJlc3BvbnNlOiAnJyxcbiAgICBpbmNvcnJlY3RBbnN3ZXJSZXNwb25zZTogJydcbiAgfTtcblxuICBASW5wdXQoKSBcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAhIXZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpKTtcbiAgfVxuXG4gIG9uUXVpekFuc3dlckNsaWNrKCkge1xuICAgIHRoaXMuYW5zd2VyU3VibWl0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNBbnN3ZXJDb3JyZWN0ID0gdGhpcy51c2VyQW5zd2VyID09PSB0aGlzLl92YWx1ZS5jb3JyZWN0QW5zd2VyO1xuICAgIHRoaXMuYW5zd2VyUmVzcG9uc2UgPSB0aGlzLmlzQW5zd2VyQ29ycmVjdCA/IHRoaXMuX3ZhbHVlLmNvcnJlY3RBbnN3ZXJSZXNwb25zZSA6IHRoaXMuX3ZhbHVlLmluY29ycmVjdEFuc3dlclJlc3BvbnNlO1xuICB9XG59XG4iXX0=