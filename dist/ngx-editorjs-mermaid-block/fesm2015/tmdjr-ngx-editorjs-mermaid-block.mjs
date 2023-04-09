import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, ViewChild } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i5 from '@angular/material/legacy-button';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent, AutofocusDirective } from '@tmdjr/ngx-editorjs';
import * as i1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/material/legacy-form-field';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
import * as i4 from '@angular/material/legacy-input';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { Subject, takeUntil } from 'rxjs';

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

function MermaidConfigComponent_mat_error_9_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r1.mermaidConfigFormErrorMessages["title"]);
    }
}
function MermaidConfigComponent_mat_error_15_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r3.mermaidConfigFormErrorMessages["url"]);
    }
}
class MermaidConfigComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.destory = new Subject();
        this.errorMessages = {
            required: 'Required',
        };
        this.mermaidConfigFormErrorMessages = {
            url: '', title: ''
        };
        this.value = { url: '', title: '' };
        this.mermaidValue = new EventEmitter();
    }
    ngOnInit() {
        var _a, _b;
        this.mermaidConfigForm = this.formBuilder.group({
            url: [(_a = this.value.url) !== null && _a !== void 0 ? _a : '', [Validators.required]],
            title: [(_b = this.value.title) !== null && _b !== void 0 ? _b : '', [Validators.required]]
        });
        this.mermaidConfigForm.statusChanges
            .pipe(takeUntil(this.destory))
            .subscribe(() => this.setErrorsMessages(this.mermaidConfigForm, this.mermaidConfigFormErrorMessages));
    }
    ngOnDestroy() {
        this.destory.next(true);
    }
    updateMermaid() {
        this.mermaidValue.emit(this.mermaidConfigForm.value);
    }
    closeConfig() {
        this.mermaidValue.emit(this.value);
    }
    setErrorsMessages(formGroup, formControlMessages) {
        Object.keys(formGroup.controls).forEach(element => {
            var _a;
            const errors = (_a = formGroup.get(element)) === null || _a === void 0 ? void 0 : _a.errors;
            if (errors) {
                const error = Object.keys(errors)[0];
                formControlMessages[element] = this.errorMessages[error];
            }
        });
    }
}
MermaidConfigComponent.ɵfac = function MermaidConfigComponent_Factory(t) { return new (t || MermaidConfigComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
MermaidConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MermaidConfigComponent, selectors: [["mermaid-config"]], inputs: { value: "value" }, outputs: { mermaidValue: "mermaidValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 21, vars: 4, consts: [[1, "mermaid-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "formControlName", "title"], ["title", ""], [4, "ngIf"], ["matInput", "", "type", "text", "title", "URL", "formControlName", "url"], ["url", ""], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"]], template: function MermaidConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "h2", 2);
            i0.ɵɵtext(3, "Mermaid Configurations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-form-field", 3)(5, "mat-label");
            i0.ɵɵtext(6, "Title");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "input", 4, 5);
            i0.ɵɵtemplate(9, MermaidConfigComponent_mat_error_9_Template, 2, 1, "mat-error", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-form-field", 3)(11, "mat-label");
            i0.ɵɵtext(12, "Mark Down");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 7, 8);
            i0.ɵɵtemplate(15, MermaidConfigComponent_mat_error_15_Template, 2, 1, "mat-error", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "div", 9)(17, "button", 10);
            i0.ɵɵlistener("click", function MermaidConfigComponent_Template_button_click_17_listener() { return ctx.updateMermaid(); });
            i0.ɵɵtext(18, "Save");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "button", 11);
            i0.ɵɵlistener("click", function MermaidConfigComponent_Template_button_click_19_listener() { return ctx.closeConfig(); });
            i0.ɵɵtext(20, "Cancel");
            i0.ɵɵelementEnd()()()();
        }
        if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.mermaidConfigForm);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx.mermaidConfigForm.get("title")) == null ? null : tmp_1_0.errors);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx.mermaidConfigForm.get("url")) == null ? null : tmp_2_0.errors);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.mermaidConfigForm.invalid);
        }
    }, dependencies: [CommonModule, i2.NgIf, MatLegacyInputModule, i3.MatLegacyError, i3.MatLegacyFormField, i3.MatLegacyLabel, i4.MatLegacyInput, MatLegacyButtonModule, i5.MatLegacyButton, MatLegacyFormFieldModule,
        ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MermaidConfigComponent, [{
            type: Component,
            args: [{ selector: 'mermaid-config', standalone: true, imports: [
                        CommonModule,
                        MatLegacyInputModule,
                        MatLegacyButtonModule,
                        MatLegacyFormFieldModule,
                        ReactiveFormsModule,
                    ], template: `
    <div class="mermaid-block-modal" >
      <form [formGroup]="mermaidConfigForm">
        <h2 mat-dialog-title>Mermaid Configurations</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Title</mat-label>
          <input #title matInput type="text" formControlName="title" />
          <mat-error *ngIf="mermaidConfigForm.get('title')?.errors">{{mermaidConfigFormErrorMessages['title']}}</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Mark Down</mat-label>
          <input #url matInput type="text" title="URL" formControlName="url" />
          <mat-error *ngIf="mermaidConfigForm.get('url')?.errors">{{mermaidConfigFormErrorMessages['url']}}</mat-error>
        </mat-form-field>
        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateMermaid()" [disabled]="mermaidConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `, styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
        }], function () { return [{ type: i1.FormBuilder }]; }, { value: [{
                type: Input
            }], mermaidValue: [{
                type: Output
            }] });
})();

const _c0 = ["paragraph"];
function NgxEditorjsMermaidBlockComponent_ng_container_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "mermaid-config", 2);
        i0.ɵɵlistener("mermaidValue", function NgxEditorjsMermaidBlockComponent_ng_container_0_Template_mermaid_config_mermaidValue_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateMermaid($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
}
function NgxEditorjsMermaidBlockComponent_ng_template_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "h1");
        i0.ɵɵtext(1, "Mermaid!");
        i0.ɵɵelementEnd();
    }
}
class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent {
    constructor() {
        super(...arguments);
        this.useInlineToolbar = false;
        this.useInputType = false;
        this._openEditMermaidOverlay = false;
        this._value = { url: '', title: '' };
        this.blockOptionActions = [
            { action: 'flex-start', icon: 'format_align_left' },
            { action: 'center', icon: 'format_align_center' },
            { action: 'flex-end', icon: 'format_align_right' },
            { action: 'stretch', icon: 'format_align_justify' }
        ];
    }
    ngOnInit() {
        !!this.value && (this._value = JSON.parse(this.value));
        !this.value && this.openEditUrlOverlay();
        super.ngOnInit();
    }
    ngAfterViewInit() {
        super.viewChild = this.element;
    }
    changeValue(value) {
        super.changeValue(value);
    }
    handleBlockOptionAction(action) {
        console.log('action:', action);
        super.handleBlockOptionAction(action);
    }
    openEditUrlOverlay() {
        this._openEditMermaidOverlay = true;
    }
    updateMermaid(value) {
        this._value = value;
        this.changeValue(JSON.stringify(value));
        this._openEditMermaidOverlay = false;
    }
}
NgxEditorjsMermaidBlockComponent.ɵfac = /*@__PURE__*/ function () { let ɵNgxEditorjsMermaidBlockComponent_BaseFactory; return function NgxEditorjsMermaidBlockComponent_Factory(t) { return (ɵNgxEditorjsMermaidBlockComponent_BaseFactory || (ɵNgxEditorjsMermaidBlockComponent_BaseFactory = i0.ɵɵgetInheritedFactory(NgxEditorjsMermaidBlockComponent)))(t || NgxEditorjsMermaidBlockComponent); }; }();
NgxEditorjsMermaidBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidBlockComponent, selectors: [["ngx-editorjs-mermaid-block"]], viewQuery: function NgxEditorjsMermaidBlockComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
        }
    }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "mermaidValue"]], template: function NgxEditorjsMermaidBlockComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, NgxEditorjsMermaidBlockComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
            i0.ɵɵtemplate(1, NgxEditorjsMermaidBlockComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            const _r1 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx._openEditMermaidOverlay)("ngIfElse", _r1);
        }
    }, dependencies: [CommonModule, i2.NgIf, MatLegacyButtonModule,
        MatIconModule,
        MermaidConfigComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockComponent, [{
            type: Component,
            args: [{ standalone: true, selector: 'ngx-editorjs-mermaid-block', template: `
    <ng-container *ngIf="_openEditMermaidOverlay; else elseTemplate">
      <mermaid-config (mermaidValue)="updateMermaid($event)"></mermaid-config>
    </ng-container>
    <ng-template #elseTemplate>
      <h1>Mermaid!</h1>
    </ng-template>
  `, imports: [
                        CommonModule,
                        AutofocusDirective,
                        MatLegacyButtonModule,
                        MatIconModule,
                        MermaidConfigComponent
                    ], styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}\n"] }]
        }], null, { element: [{
                type: ViewChild,
                args: ['paragraph']
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
    }, dependencies: [ReactiveFormsModule, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, NgxEditorjsMermaidBlockComponent], encapsulation: 2 });
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

export { NgxEditorjsMermaidBlockComponent, NgxEditorjsMermaidBlockMediator, NgxEditorjsMermaidBlockService };
//# sourceMappingURL=tmdjr-ngx-editorjs-mermaid-block.mjs.map
