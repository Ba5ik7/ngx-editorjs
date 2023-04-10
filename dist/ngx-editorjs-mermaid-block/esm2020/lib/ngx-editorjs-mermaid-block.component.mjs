import { CommonModule } from '@angular/common';
import { Component, Pipe, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { AutofocusDirective, BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';
import mermaid from 'mermaid';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/legacy-button";
import * as i4 from "@angular/material/icon";
const _c0 = ["paragraph"];
const _c1 = ["mermaidContainer"];
function NgxEditorjsMermaidBlockComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mermaid-config", 2);
    i0.ɵɵlistener("mermaidValue", function NgxEditorjsMermaidBlockComponent_ng_container_0_Template_mermaid_config_mermaidValue_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateMermaid($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0._value);
} }
function NgxEditorjsMermaidBlockComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "div", 4, 5);
    i0.ɵɵpipe(3, "safeHtml");
    i0.ɵɵelementStart(4, "button", 6);
    i0.ɵɵlistener("click", function NgxEditorjsMermaidBlockComponent_ng_template_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.openEditUrlOverlay()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "edit");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r2.activeImageClass)("innerHTML", i0.ɵɵpipeBind1(3, 2, ctx_r2._mermaidDiagramSVG), i0.ɵɵsanitizeHtml);
} }
mermaid.parseError = function (err, hash) {
    console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
export class SafeHtmlPipe {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(i0.ɵɵdirectiveInject(i1.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true, standalone: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{ name: 'safeHtml', standalone: true }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, null); })();
export class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent {
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
        this.activeImageClass = action ?? 'flex-start';
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
NgxEditorjsMermaidBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidBlockComponent, selectors: [["ngx-editorjs-mermaid-block"]], viewQuery: function NgxEditorjsMermaidBlockComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mermaidContainer = _t.first);
    } }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "mermaidValue"], [1, "mermaid-container"], [1, "mermaid", 3, "ngClass", "innerHTML"], ["mermaidContainer", ""], ["mat-mini-fab", "", 1, "mermaid-block-button", "mat-elevation-z2", 3, "click"]], template: function NgxEditorjsMermaidBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxEditorjsMermaidBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, NgxEditorjsMermaidBlockComponent_ng_template_1_Template, 7, 4, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx._openEditMermaidOverlay)("ngIfElse", _r1);
    } }, dependencies: [CommonModule, i2.NgClass, i2.NgIf, MatButtonModule, i3.MatLegacyButton, MatIconModule, i4.MatIcon, MermaidConfigComponent, SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid[_ngcontent-%COMP%]{width:100%;display:flex}.mermaid[_ngcontent-%COMP%]:hover ~ .mermaid-block-button[_ngcontent-%COMP%], .mermaid-block-button[_ngcontent-%COMP%]:hover{display:block}.mermaid-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}  .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockComponent, [{
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
                    MatButtonModule,
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBVSxTQUFTLEVBQXNCLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakYsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDOzs7Ozs7Ozs7O0lBa0I1Qiw2QkFBaUU7SUFDL0QseUNBQXdFO0lBQXZDLGtOQUFnQixlQUFBLDRCQUFxQixDQUFBLElBQUM7SUFBQyxpQkFBaUI7SUFDM0YsMEJBQWU7OztJQURHLGVBQWdCO0lBQWhCLHFDQUFnQjs7OztJQUdoQyw4QkFBK0I7SUFDN0IsNEJBSXdCOztJQUN4QixpQ0FHaUM7SUFBL0IscUxBQVMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDO0lBQzVCLGdDQUFVO0lBQUEsb0JBQUk7SUFBQSxpQkFBVyxFQUFBLEVBQUE7OztJQVAzQixlQUE0QjtJQUE1QixpREFBNEIsaUZBQUE7O0FBdkJwQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVMsR0FBUSxFQUFFLElBQVM7SUFDL0MsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FB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QUM7SUFDeEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7O3dUQTdEVSxnQ0FBZ0MsU0FBaEMsZ0NBQWdDO21GQUFoQyxnQ0FBZ0M7Ozs7Ozs7O1FBdkQzQyxtR0FFZTtRQUNmLGtJQWNjOzs7UUFqQkMsa0RBQStCLGlCQUFBO3dCQStDNUMsWUFBWSx1QkFFWixlQUFlLHNCQUNmLGFBQWEsY0FDYixzQkFBc0IsRUE5RGIsWUFBWTt1RkFrRVosZ0NBQWdDO2NBM0Q1QyxTQUFTOzZCQUNJLElBQUksWUFDTiw0QkFBNEIsWUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQsV0E0QlE7b0JBQ1AsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixzQkFBc0I7b0JBQ3RCLFlBQVk7aUJBQ2I7Z0JBT3VCLE9BQU87a0JBQTlCLFNBQVM7bUJBQUMsV0FBVztZQUNTLGdCQUFnQjtrQkFBOUMsU0FBUzttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab25lLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUsIEJhc2VCbG9ja0NvbXBvbmVudCB9IGZyb20gJ0B0bWRqci9uZ3gtZWRpdG9yanMnO1xuaW1wb3J0IHsgTWVybWFpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtY29uZmlnL21lcm1haWQtY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCBtZXJtYWlkIGZyb20gJ21lcm1haWQnO1xuXG5tZXJtYWlkLnBhcnNlRXJyb3IgPSBmdW5jdGlvbihlcnI6IGFueSwgaGFzaDogYW55KSB7XG4gIGNvbnNvbGUud2FybihgRXJyb3IgcGFyc2luZyBtZXJtYWlkIGRpYWdyYW06ICR7ZXJyfSAke2hhc2h9YCk7XG59O1xuXG5AUGlwZSh7IG5hbWU6ICdzYWZlSHRtbCcsIHN0YW5kYWxvbmU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtICB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVkOiBEb21TYW5pdGl6ZXIpIHt9XG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVkLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jaycsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJfb3BlbkVkaXRNZXJtYWlkT3ZlcmxheTsgZWxzZSBlbHNlVGVtcGxhdGVcIj5cbiAgICA8bWVybWFpZC1jb25maWcgW3ZhbHVlXT1cIl92YWx1ZVwiIChtZXJtYWlkVmFsdWUpPVwidXBkYXRlTWVybWFpZCgkZXZlbnQpXCI+PC9tZXJtYWlkLWNvbmZpZz5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZXJtYWlkLWNvbnRhaW5lclwiPiBcbiAgICAgIDxkaXZcbiAgICAgICAgI21lcm1haWRDb250YWluZXJcbiAgICAgICAgW25nQ2xhc3NdPVwiYWN0aXZlSW1hZ2VDbGFzc1wiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiX21lcm1haWREaWFncmFtU1ZHIHwgc2FmZUh0bWxcIlxuICAgICAgICBjbGFzcz1cIm1lcm1haWRcIj48L2Rpdj5cbiAgICAgIDxidXR0b24gIFxuICAgICAgICBtYXQtbWluaS1mYWIgXG4gICAgICAgIGNsYXNzPVwibWVybWFpZC1ibG9jay1idXR0b24gbWF0LWVsZXZhdGlvbi16MlwiXG4gICAgICAgIChjbGljayk9XCJvcGVuRWRpdFVybE92ZXJsYXkoKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAubWVybWFpZCB7IHdpZHRoOiAxMDAlOyBkaXNwbGF5OiBmbGV4OyB9XG4gIC5tZXJtYWlkOmhvdmVyIH4gLm1lcm1haWQtYmxvY2stYnV0dG9uLCAubWVybWFpZC1ibG9jay1idXR0b246aG92ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAubWVybWFpZC1ibG9jay1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2cHg7XG4gICAgICBsZWZ0OiA2cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4OyBcbiAgICB9XG4gICAgLm1lcm1haWQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIDpob3N0IC5mbGV4LXN0YXJ0IHsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gICAgOmhvc3QgLmZsZXgtZW5kIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgIDpob3N0IC5jZW50ZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIDpob3N0IC5zdHJldGNoIGltZyB7IHdpZHRoOiAxMDAlOyB9XG4gICAgOjpuZy1kZWVwIC5tZXJtYWlkLWJsb2NrLWJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB9XG4gIGBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNZXJtYWlkQ29uZmlnQ29tcG9uZW50LFxuICAgIFNhZmVIdG1sUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3ZlcnJpZGUgdXNlSW5saW5lVG9vbGJhciA9IGZhbHNlO1xuICBvdmVycmlkZSB1c2VJbnB1dFR5cGUgPSBmYWxzZTtcbiAgb3ZlcnJpZGUgdXNlT25QYXN0ZUhUTUxSZW1vdmFsID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncGFyYWdyYXBoJykgZWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21lcm1haWRDb250YWluZXInKSBtZXJtYWlkQ29udGFpbmVyITogRWxlbWVudFJlZjtcblxuICBfbWVybWFpZEFQSSA9IG1lcm1haWQubWVybWFpZEFQSTtcbiAgX29wZW5FZGl0TWVybWFpZE92ZXJsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3ZhbHVlID0gJyc7XG4gIF9tZXJtYWlkRGlhZ3JhbVNWRyA9ICcnO1xuICBhY3RpdmVJbWFnZUNsYXNzOiBzdHJpbmcgPSAnZmxleC1zdGFydCc7XG5cbiAgb3ZlcnJpZGUgYmxvY2tPcHRpb25BY3Rpb25zOiB7IGFjdGlvbjogc3RyaW5nLCBpY29uOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgYWN0aW9uOiAnZmxleC1zdGFydCcsIGljb246ICdmb3JtYXRfYWxpZ25fbGVmdCcgfSxcbiAgICB7IGFjdGlvbjogJ2NlbnRlcicsIGljb246ICdmb3JtYXRfYWxpZ25fY2VudGVyJyB9LFxuICAgIHsgYWN0aW9uOiAnZmxleC1lbmQnLCBpY29uOiAnZm9ybWF0X2FsaWduX3JpZ2h0JyB9XG4gIF07XG5cbiAgcmVuZGVyTWVybWFpZERpYWdyYW0obWVybWFpZERpYWdyYW06IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gYG1lcm1haWQtJHtEYXRlLm5vdygpfS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbWVybWFpZEFQSS5yZW5kZXIodW5pcXVlSWQsIG1lcm1haWREaWFncmFtKS50aGVuKFxuICAgICAgICBkYXRhID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9tZXJtYWlkRGlhZ3JhbVNWRyA9IGRhdGEuc3ZnKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS53YXJuKGBFcnJvcjogJHtlcnJvcn1gKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21lcm1haWRBUEkuaW5pdGlhbGl6ZSh7IHN0YXJ0T25Mb2FkOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgICBpZih0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlck1lcm1haWREaWFncmFtKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5FZGl0VXJsT3ZlcmxheSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGhhbmRsZUJsb2NrT3B0aW9uQWN0aW9uKGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVJbWFnZUNsYXNzID0gYWN0aW9uID8/ICdmbGV4LXN0YXJ0JztcbiAgICBzdXBlci5oYW5kbGVCbG9ja09wdGlvbkFjdGlvbihhY3Rpb24pO1xuICB9XG5cbiAgb3BlbkVkaXRVcmxPdmVybGF5KCkge1xuICAgIHRoaXMuX29wZW5FZGl0TWVybWFpZE92ZXJsYXkgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlTWVybWFpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlck1lcm1haWREaWFncmFtKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLl9vcGVuRWRpdE1lcm1haWRPdmVybGF5ID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==