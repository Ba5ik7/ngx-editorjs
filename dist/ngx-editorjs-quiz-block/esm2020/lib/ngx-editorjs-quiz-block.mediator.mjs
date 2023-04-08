import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsQuizBlockComponent } from './ngx-editorjs-quiz-block.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NgxEditorjsQuizBlockMediator {
}
NgxEditorjsQuizBlockMediator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizBlockMediator, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxEditorjsQuizBlockMediator.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: NgxEditorjsQuizBlockMediator, isStandalone: true, selector: "ngx-editorjs-quiz-paragraph-block", inputs: { blockId: "blockId", form: "form", formControlName: "formControlName" }, ngImport: i0, template: `
    <div [formGroup]="form">
      <ngx-editorjs-quiz-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-quiz-block>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: NgxEditorjsQuizBlockComponent, selector: "ngx-editorjs-quiz-block" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsQuizBlockMediator, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'ngx-editorjs-quiz-paragraph-block',
                    template: `
    <div [formGroup]="form">
      <ngx-editorjs-quiz-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-quiz-block>
    </div>
  `,
                    imports: [
                        ReactiveFormsModule,
                        NgxEditorjsQuizBlockComponent
                    ],
                }]
        }], propDecorators: { blockId: [{
                type: Input
            }], form: [{
                type: Input
            }], formControlName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2subWVkaWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay9zcmMvbGliL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrLm1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7QUFlcEYsTUFBTSxPQUFPLDRCQUE0Qjs7eUhBQTVCLDRCQUE0Qjs2R0FBNUIsNEJBQTRCLCtLQVY3Qjs7OztHQUlULDJEQUVDLG1CQUFtQixvbEJBQ25CLDZCQUE2QjsyRkFHcEIsNEJBQTRCO2tCQWJ4QyxTQUFTO21CQUFDO29CQUNULFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQiw2QkFBNkI7cUJBQzlCO2lCQUNGOzhCQUVVLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEVkaXRvcmpzUXVpekJsb2NrQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtcXVpei1wYXJhZ3JhcGgtYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICA8bmd4LWVkaXRvcmpzLXF1aXotYmxvY2sgW2Jsb2NrSWRdPVwiYmxvY2tJZFwiIFtmb3JtQ29udHJvbE5hbWVdPVwiZm9ybUNvbnRyb2xOYW1lXCI+PC9uZ3gtZWRpdG9yanMtcXVpei1ibG9jaz5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaW1wb3J0czogW1xuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTmd4RWRpdG9yanNRdWl6QmxvY2tDb21wb25lbnRcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNRdWl6QmxvY2tNZWRpYXRvciB7XG4gIEBJbnB1dCgpIGJsb2NrSWQhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvcm0hOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGZvcm1Db250cm9sTmFtZSE6IHN0cmluZztcbn1cbiJdfQ==