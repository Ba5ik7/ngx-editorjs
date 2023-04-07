import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, Input } from '@angular/core';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import * as i1 from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

class NgxEditorjsQuizBlockService {
    constructor() { }
}
NgxEditorjsQuizBlockService.ɵfac = function NgxEditorjsQuizBlockService_Factory(t) { return new (t || NgxEditorjsQuizBlockService)(); };
NgxEditorjsQuizBlockService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxEditorjsQuizBlockService, factory: NgxEditorjsQuizBlockService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsQuizBlockService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0 = ["paragraph"];
class NgxEditorjsQuizBlockComponent extends BaseBlockComponent {
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

class NgxEditorjsQuizBlockMediator {
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

/*
 * Public API Surface of ngx-editorjs-quiz-block
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxEditorjsQuizBlockComponent, NgxEditorjsQuizBlockMediator, NgxEditorjsQuizBlockService };
//# sourceMappingURL=tmdjr-ngx-editorjs-quiz-block.mjs.map
