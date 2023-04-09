import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEditorjsMermaidBlockComponent } from './ngx-editorjs-mermaid-block.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class NgxEditorjsMermaidBlockMediator {
}
NgxEditorjsMermaidBlockMediator.ɵfac = function NgxEditorjsMermaidBlockMediator_Factory(t) { return new (t || NgxEditorjsMermaidBlockMediator)(); };
NgxEditorjsMermaidBlockMediator.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidBlockMediator, selectors: [["ngx-editorjs-mermaid-blockquotes-block"]], inputs: { blockId: "blockId", form: "form", formControlName: "formControlName", savedAction: "savedAction" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 4, consts: [[3, "formGroup"], [3, "blockId", "formControlName", "savedAction"]], template: function NgxEditorjsMermaidBlockMediator_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "ngx-editorjs-mermaid-block", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("blockId", ctx.blockId)("formControlName", ctx.formControlName)("savedAction", ctx.savedAction);
    } }, dependencies: [ReactiveFormsModule, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, NgxEditorjsMermaidBlockComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockMediator, [{
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
    }], null, { blockId: [{
            type: Input
        }], form: [{
            type: Input
        }], formControlName: [{
            type: Input
        }], savedAction: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2subWVkaWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay9zcmMvbGliL25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrLm1lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBYSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFlMUYsTUFBTSxPQUFPLCtCQUErQjs7OEdBQS9CLCtCQUErQjtrRkFBL0IsK0JBQStCO1FBVHhDLDhCQUF3QjtRQUN0QixnREFBNkk7UUFDL0ksaUJBQU07O1FBRkQsb0NBQWtCO1FBQ08sZUFBbUI7UUFBbkIscUNBQW1CLHdDQUFBLGdDQUFBO3dCQUlqRCxtQkFBbUIsMEZBQ25CLGdDQUFnQzt1RkFHdkIsK0JBQStCO2NBYjNDLFNBQVM7ZUFBQztnQkFDVCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsZ0NBQWdDO2lCQUNqQzthQUNGO2dCQUVVLE9BQU87a0JBQWYsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4RWRpdG9yanNNZXJtYWlkQmxvY2tDb21wb25lbnQgfSBmcm9tICcuL25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrcXVvdGVzLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgPG5neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrIFtibG9ja0lkXT1cImJsb2NrSWRcIiBbZm9ybUNvbnRyb2xOYW1lXT1cImZvcm1Db250cm9sTmFtZVwiIFtzYXZlZEFjdGlvbl09XCJzYXZlZEFjdGlvblwiPjwvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2s+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrTWVkaWF0b3Ige1xuICBASW5wdXQoKSBibG9ja0lkITogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtITogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBmb3JtQ29udHJvbE5hbWUhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNhdmVkQWN0aW9uITogc3RyaW5nO1xufVxuIl19