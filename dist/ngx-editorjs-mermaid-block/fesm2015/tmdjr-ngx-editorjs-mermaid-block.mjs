import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, Pipe, ViewChild } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/material/legacy-button';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import * as i1$1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@ctrl/ngx-codemirror';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import mermaid from 'mermaid';
import * as i1$2 from '@angular/platform-browser';

class NgxEditorjsMermaidBlockService {
    constructor() { }
}
NgxEditorjsMermaidBlockService.ɵfac = function NgxEditorjsMermaidBlockService_Factory(t) { return new (t || NgxEditorjsMermaidBlockService)(); };
NgxEditorjsMermaidBlockService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NgxEditorjsMermaidBlockService, factory: NgxEditorjsMermaidBlockService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockService, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null);
})();

class MermaidConfigComponent {
    constructor() {
        this.codeMirrorOptions = {
            lineNumbers: true,
            theme: 'material-palenight',
            mode: 'text/typescript',
            extraKeys: { 'Ctrl-Space': 'autocomplete' },
        };
        this.value = '';
        this.mermaidValue = new EventEmitter();
    }
    changeValue(newValue) {
        this.value = newValue;
    }
    updateMermaid() {
        this.mermaidValue.emit(this.value);
    }
}
MermaidConfigComponent.ɵfac = function MermaidConfigComponent_Factory(t) { return new (t || MermaidConfigComponent)(); };
MermaidConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MermaidConfigComponent, selectors: [["mermaid-config"]], inputs: { value: "value" }, outputs: { mermaidValue: "mermaidValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [[1, "container"], [3, "ngModel", "options", "ngModelChange"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "click"]], template: function MermaidConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ngx-codemirror", 1);
            i0.ɵɵlistener("ngModelChange", function MermaidConfigComponent_Template_ngx_codemirror_ngModelChange_1_listener($event) { return ctx.changeValue($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(2, "div", 2)(3, "button", 3);
            i0.ɵɵlistener("click", function MermaidConfigComponent_Template_button_click_3_listener() { return ctx.updateMermaid(); });
            i0.ɵɵtext(4, "Update");
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngModel", ctx.value)("options", ctx.codeMirrorOptions);
        }
    }, dependencies: [CommonModule,
        CodemirrorModule, i1.CodemirrorComponent, FormsModule, i1$1.NgControlStatus, i1$1.NgModel, MatLegacyButtonModule, i3.MatLegacyButton], styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}[_nghost-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}[_nghost-%COMP%]   .answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}[_nghost-%COMP%]     .CodeMirror{height:250px}.container[_ngcontent-%COMP%]{padding-bottom:20px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MermaidConfigComponent, [{
            type: Component,
            args: [{ selector: 'mermaid-config', standalone: true, imports: [
                        CommonModule,
                        CodemirrorModule,
                        FormsModule,
                        MatLegacyButtonModule
                    ], template: `
    <div class="container">
    <ngx-codemirror
      (ngModelChange)="changeValue($event)"
      [ngModel]="value"
      [options]="codeMirrorOptions">
    </ngx-codemirror>
    </div>
    <div class="action-group">
      <button mat-flat-button color="accent" type="button" (click)="updateMermaid()">Update</button>
    </div>
  `, styles: [":host{width:100%;display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}:host .action-group{display:flex;justify-content:flex-end;gap:10px}:host .answers-action-group{padding-bottom:20px}:host ::ng-deep .CodeMirror{height:250px}.container{padding-bottom:20px}\n"] }]
        }], null, { value: [{
                type: Input
            }], mermaidValue: [{
                type: Output
            }] });
})();

const _c0 = ["paragraph"];
const _c1 = ["mermaidContainer"];
function NgxEditorjsMermaidBlockComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mermaid-config", 2);
        i0.ɵɵlistener("mermaidValue", function NgxEditorjsMermaidBlockComponent_ng_container_0_Template_mermaid_config_mermaidValue_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateMermaid($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx_r0._value);
    }
}
function NgxEditorjsMermaidBlockComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 3);
        i0.ɵɵelement(1, "div", 4, 5);
        i0.ɵɵpipe(3, "safeHtml");
        i0.ɵɵelementStart(4, "button", 6);
        i0.ɵɵlistener("click", function NgxEditorjsMermaidBlockComponent_ng_template_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.openEditUrlOverlay()); });
        i0.ɵɵelementStart(5, "mat-icon");
        i0.ɵɵtext(6, "edit");
        i0.ɵɵelementEnd()()();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx_r2.activeImageClass)("innerHTML", i0.ɵɵpipeBind1(3, 2, ctx_r2._mermaidDiagramSVG), i0.ɵɵsanitizeHtml);
    }
}
mermaid.parseError = function (err, hash) {
    console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1$2.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true, standalone: true });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeHtmlPipe, [{
            type: Pipe,
            args: [{ name: 'safeHtml', standalone: true }]
        }], function () { return [{ type: i1$2.DomSanitizer }]; }, null);
})();
class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent {
    constructor() {
        super(...arguments);
        this.useInlineToolbar = false;
        this.useInputType = false;
        this.useOnPasteHTMLRemoval = false;
        this._mermaidAPI = mermaid.mermaidAPI;
        this._openEditMermaidOverlay = false;
        this._value = '';
        this._mermaidDiagramSVG = '';
        this.activeImageClass = 'flex-start';
        this.blockOptionActions = [
            { action: 'flex-start', icon: 'format_align_left' },
            { action: 'center', icon: 'format_align_center' },
            { action: 'flex-end', icon: 'format_align_right' }
        ];
    }
    renderMermaidDiagram(mermaidDiagram) {
        const uniqueId = `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        this.ngZone.runOutsideAngular(() => {
            this._mermaidAPI.render(uniqueId, mermaidDiagram).then(data => this.ngZone.run(() => this._mermaidDiagramSVG = data.svg), error => console.warn(`Error: ${error}`));
        });
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this._mermaidAPI.initialize({ startOnLoad: false });
        });
        if (this.value) {
            this.renderMermaidDiagram(this.value);
            this._value = this.value;
        }
        else {
            this.openEditUrlOverlay();
        }
        super.ngOnInit();
    }
    changeValue(value) {
        super.changeValue(value);
    }
    handleBlockOptionAction(action) {
        this.activeImageClass = action !== null && action !== void 0 ? action : 'flex-start';
        super.handleBlockOptionAction(action);
    }
    openEditUrlOverlay() {
        this._openEditMermaidOverlay = true;
    }
    updateMermaid(value) {
        this._value = value;
        this.renderMermaidDiagram(value);
        this.changeValue(value);
        this._openEditMermaidOverlay = false;
    }
}
NgxEditorjsMermaidBlockComponent.ɵfac = /*@__PURE__*/ function () { let ɵNgxEditorjsMermaidBlockComponent_BaseFactory; return function NgxEditorjsMermaidBlockComponent_Factory(t) { return (ɵNgxEditorjsMermaidBlockComponent_BaseFactory || (ɵNgxEditorjsMermaidBlockComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NgxEditorjsMermaidBlockComponent)))(t || NgxEditorjsMermaidBlockComponent); }; }();
NgxEditorjsMermaidBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidBlockComponent, selectors: [["ngx-editorjs-mermaid-block"]], viewQuery: function NgxEditorjsMermaidBlockComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mermaidContainer = _t.first);
        }
    }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "mermaidValue"], [1, "mermaid-container"], [1, "mermaid", 3, "ngClass", "innerHTML"], ["mermaidContainer", ""], ["mat-mini-fab", "", 1, "mermaid-block-button", "mat-elevation-z2", 3, "click"]], template: function NgxEditorjsMermaidBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, NgxEditorjsMermaidBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, NgxEditorjsMermaidBlockComponent_ng_template_1_Template, 7, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx._openEditMermaidOverlay)("ngIfElse", _r1);
        }
    }, dependencies: [CommonModule, i2.NgClass, i2.NgIf, MatLegacyButtonModule, i3.MatLegacyButton, MatIconModule, i4.MatIcon, MermaidConfigComponent, SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid[_ngcontent-%COMP%]{width:100%;display:flex}.mermaid[_ngcontent-%COMP%]:hover ~ .mermaid-block-button[_ngcontent-%COMP%], .mermaid-block-button[_ngcontent-%COMP%]:hover{display:block}.mermaid-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}  .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockComponent, [{
            type: Component,
            args: [{ standalone: true, selector: 'ngx-editorjs-mermaid-block', template: `
  <ng-container *ngIf="_openEditMermaidOverlay; else elseTemplate">
    <mermaid-config [value]="_value" (mermaidValue)="updateMermaid($event)"></mermaid-config>
  </ng-container>
  <ng-template #elseTemplate>
    <div class="mermaid-container"> 
      <div
        #mermaidContainer
        [ngClass]="activeImageClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
      <button  
        mat-mini-fab 
        class="mermaid-block-button mat-elevation-z2"
        (click)="openEditUrlOverlay()">
          <mat-icon>edit</mat-icon>
      </button>
    </div>
  </ng-template>
  `, imports: [
                        CommonModule,
                        AutofocusDirective,
                        MatLegacyButtonModule,
                        MatIconModule,
                        MermaidConfigComponent,
                        SafeHtmlPipe
                    ], styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}::ng-deep .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}\n"] }]
        }], null, { element: [{
                type: ViewChild,
                args: ['paragraph']
            }], mermaidContainer: [{
                type: ViewChild,
                args: ['mermaidContainer']
            }] });
})();

class NgxEditorjsMermaidBlockMediator {
}
NgxEditorjsMermaidBlockMediator.ɵfac = function NgxEditorjsMermaidBlockMediator_Factory(t) { return new (t || NgxEditorjsMermaidBlockMediator)(); };
NgxEditorjsMermaidBlockMediator.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidBlockMediator, selectors: [["ngx-editorjs-mermaid-blockquotes-block"]], inputs: { blockId: "blockId", form: "form", formControlName: "formControlName", savedAction: "savedAction" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 4, consts: [[3, "formGroup"], [3, "blockId", "formControlName", "savedAction"]], template: function NgxEditorjsMermaidBlockMediator_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "ngx-editorjs-mermaid-block", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("blockId", ctx.blockId)("formControlName", ctx.formControlName)("savedAction", ctx.savedAction);
        }
    }, dependencies: [ReactiveFormsModule, i1$1.NgControlStatus, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.FormControlName, NgxEditorjsMermaidBlockComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockMediator, [{
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
            }] });
})();

/*
 * Public API Surface of ngx-editorjs-mermaid-block
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxEditorjsMermaidBlockComponent, NgxEditorjsMermaidBlockMediator, NgxEditorjsMermaidBlockService, SafeHtmlPipe };
//# sourceMappingURL=tmdjr-ngx-editorjs-mermaid-block.mjs.map
