import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsQuizBlockComponent } from './ngx-editorjs-quiz-block.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NgxEditorjsQuizBlockMediator {
}
NgxEditorjsQuizBlockMediator.ɵfac = function NgxEditorjsQuizBlockMediator_Factory(t) { return new (t || NgxEditorjsQuizBlockMediator)(); };
NgxEditorjsQuizBlockMediator.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizBlockMediator, selectors: [["ngx-editorjs-quiz-paragraph-block"]], inputs: { blockId: "blockId", form: "form", formControlName: "formControlName" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 3, consts: [[3, "formGroup"], [3, "blockId", "formControlName"]], template: function NgxEditorjsQuizBlockMediator_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "ngx-editorjs-quiz-block", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("blockId", ctx.blockId)("formControlName", ctx.formControlName);
    } }, dependencies: [ReactiveFormsModule, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, NgxEditorjsQuizBlockComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockMediator, [{
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
    }], null, { blockId: [{
            type: Input
        }], form: [{
            type: Input
        }], formControlName: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2subWVkaWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay9zcmMvbGliL25neC1lZGl0b3Jqcy1xdWl6LWJsb2NrLm1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7QUFlcEYsTUFBTSxPQUFPLDRCQUE0Qjs7d0dBQTVCLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FBVHJDLDhCQUF3QjtRQUN0Qiw2Q0FBMkc7UUFDN0csaUJBQU07O1FBRkQsb0NBQWtCO1FBQ0ksZUFBbUI7UUFBbkIscUNBQW1CLHdDQUFBO3dCQUk5QyxtQkFBbUIsMEZBQ25CLDZCQUE2Qjt1RkFHcEIsNEJBQTRCO2NBYnhDLFNBQVM7ZUFBQztnQkFDVCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsNkJBQTZCO2lCQUM5QjthQUNGO2dCQUVVLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hFZGl0b3Jqc1F1aXpCbG9ja0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLXF1aXotcGFyYWdyYXBoLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPG5neC1lZGl0b3Jqcy1xdWl6LWJsb2NrIFtibG9ja0lkXT1cImJsb2NrSWRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZvcm1Db250cm9sTmFtZVwiPjwvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2s+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5neEVkaXRvcmpzUXVpekJsb2NrQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzUXVpekJsb2NrTWVkaWF0b3Ige1xuICBASW5wdXQoKSBibG9ja0lkITogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtITogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtQ29udHJvbE5hbWUhOiBzdHJpbmc7XG59XG4iXX0=