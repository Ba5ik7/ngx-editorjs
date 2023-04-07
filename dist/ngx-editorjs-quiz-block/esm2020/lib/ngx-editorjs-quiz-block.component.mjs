import { Component, ViewChild } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import * as i0 from "@angular/core";
const _c0 = ["paragraph"];
export class NgxEditorjsQuizBlockComponent extends BaseBlockComponent {
    ngOnInit() {
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.viewChild = this.element;
    }
    onMouseEnter(event) {
        super.onMouseEnter(event);
    }
}
NgxEditorjsQuizBlockComponent.ɵfac = /*@__PURE__*/ function () { let ɵNgxEditorjsQuizBlockComponent_BaseFactory; return function NgxEditorjsQuizBlockComponent_Factory(t) { return (ɵNgxEditorjsQuizBlockComponent_BaseFactory || (ɵNgxEditorjsQuizBlockComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NgxEditorjsQuizBlockComponent)))(t || NgxEditorjsQuizBlockComponent); }; }();
NgxEditorjsQuizBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsQuizBlockComponent, selectors: [["ngx-editorjs-quiz-block"]], viewQuery: function NgxEditorjsQuizBlockComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
    } }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 2, vars: 0, template: function NgxEditorjsQuizBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1");
        i0.ɵɵtext(1, "Hello Quiz!");
        i0.ɵɵelementEnd();
    } }, styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}p[_ngcontent-%COMP%]{font-size:1.6rem;line-height:3.2rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-editorjs-quiz-block', template: `
    <!-- <p class="flex-spacer" #paragraph contenteditable [autofocus]="true" (focus)="onMouseEnter($event)" [innerHTML]="value"></p> -->
    <h1>Hello Quiz!</h1>
  `, imports: [
                    AutofocusDirective
                ], styles: [":host{display:flex;flex-direction:column}p{font-size:1.6rem;line-height:3.2rem}\n"] }]
    }], null, { element: [{
            type: ViewChild,
            args: ['paragraph']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLXF1aXotYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLXF1aXotYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtcXVpei1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQXNCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBYzdFLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxrQkFBa0I7SUFJMUQsUUFBUTtRQUNmLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRVEsWUFBWSxDQUFDLEtBQVk7UUFDaEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzt5U0FkVSw2QkFBNkIsU0FBN0IsNkJBQTZCO2dGQUE3Qiw2QkFBNkI7Ozs7OztRQVB0QywwQkFBSTtRQUFBLDJCQUFXO1FBQUEsaUJBQUs7O3VGQU9YLDZCQUE2QjtjQVp6QyxTQUFTOzZCQUNJLElBQUksWUFDTix5QkFBeUIsWUFDekI7OztHQUdULFdBRVE7b0JBQ1Asa0JBQWtCO2lCQUNuQjtnQkFJdUIsT0FBTztrQkFBOUIsU0FBUzttQkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUJsb2NrQ29tcG9uZW50LCBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICdAdG1kanIvbmd4LWVkaXRvcmpzJztcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLXF1aXotYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDwhLS0gPHAgY2xhc3M9XCJmbGV4LXNwYWNlclwiICNwYXJhZ3JhcGggY29udGVudGVkaXRhYmxlIFthdXRvZm9jdXNdPVwidHJ1ZVwiIChmb2N1cyk9XCJvbk1vdXNlRW50ZXIoJGV2ZW50KVwiIFtpbm5lckhUTUxdPVwidmFsdWVcIj48L3A+IC0tPlxuICAgIDxoMT5IZWxsbyBRdWl6ITwvaDE+XG4gIGAsXG4gIHN0eWxlczogW2A6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH0gcCB7IGZvbnQtc2l6ZTogMS42cmVtOyBsaW5lLWhlaWdodDogMy4ycmVtOyB9YF0sXG4gIGltcG9ydHM6IFtcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFZGl0b3Jqc1F1aXpCbG9ja0NvbXBvbmVudCBleHRlbmRzIEJhc2VCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQFZpZXdDaGlsZCgncGFyYWdyYXBoJykgZWxlbWVudCE6IEVsZW1lbnRSZWY7XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci52aWV3Q2hpbGQgPSB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBvdmVycmlkZSBvbk1vdXNlRW50ZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgc3VwZXIub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgfVxufVxuIl19