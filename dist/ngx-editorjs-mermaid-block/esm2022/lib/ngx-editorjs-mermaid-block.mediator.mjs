import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsMermaidBlockComponent } from './ngx-editorjs-mermaid-block.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NgxEditorjsMermaidBlockMediator {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxEditorjsMermaidBlockMediator, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxEditorjsMermaidBlockMediator, isStandalone: true, selector: "ngx-editorjs-mermaid-blockquotes-block", inputs: { blockId: "blockId", form: "form", formControlName: "formControlName", savedAction: "savedAction" }, ngImport: i0, template: `
    <div [formGroup]="form">
      <ngx-editorjs-mermaid-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-mermaid-block>
    </div>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: NgxEditorjsMermaidBlockComponent, selector: "ngx-editorjs-mermaid-block" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxEditorjsMermaidBlockMediator, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'ngx-editorjs-mermaid-blockquotes-block',
                    template: `
    <div [formGroup]="form">
      <ngx-editorjs-mermaid-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-mermaid-block>
    </div>
  `,
                    imports: [
                        ReactiveFormsModule,
                        NgxEditorjsMermaidBlockComponent
                    ],
                }]
        }], propDecorators: { blockId: [{
                type: Input
            }], form: [{
                type: Input
            }], formControlName: [{
                type: Input
            }], savedAction: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2subWVkaWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay9zcmMvbGliL25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrLm1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFlMUYsTUFBTSxPQUFPLCtCQUErQjsrR0FBL0IsK0JBQStCO21HQUEvQiwrQkFBK0IsZ05BVmhDOzs7O0dBSVQsMkRBRUMsbUJBQW1CLG9sQkFDbkIsZ0NBQWdDOzs0RkFHdkIsK0JBQStCO2tCQWIzQyxTQUFTO21CQUFDO29CQUNULFVBQVUsRUFBRSxJQUFJO29CQUNoQixRQUFRLEVBQUUsd0NBQXdDO29CQUNsRCxRQUFRLEVBQUU7Ozs7R0FJVDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CO3dCQUNuQixnQ0FBZ0M7cUJBQ2pDO2lCQUNGOzhCQUVVLE9BQU87c0JBQWYsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4RWRpdG9yanNNZXJtYWlkQmxvY2tDb21wb25lbnQgfSBmcm9tICcuL25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrcXVvdGVzLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPG5neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrIFtibG9ja0lkXT1cImJsb2NrSWRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZvcm1Db250cm9sTmFtZVwiIFtzYXZlZEFjdGlvbl09XCJzYXZlZEFjdGlvblwiPjwvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2s+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrTWVkaWF0b3Ige1xuICBASW5wdXQoKSBibG9ja0lkITogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtITogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtQ29udHJvbE5hbWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNhdmVkQWN0aW9uITogc3RyaW5nO1xufVxuIl19