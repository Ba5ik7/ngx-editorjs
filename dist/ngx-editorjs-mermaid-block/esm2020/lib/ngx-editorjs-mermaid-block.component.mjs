import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';
import mermaid from 'mermaid';
import { SafeHtmlPipe } from './pipes/shared.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/legacy-button";
import * as i3 from "@angular/material/icon";
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
    i0.ɵɵproperty("ngClass", ctx_r2.activeMermaidClass)("innerHTML", i0.ɵɵpipeBind1(3, 2, ctx_r2._mermaidDiagramSVG), i0.ɵɵsanitizeHtml);
} }
mermaid.parseError = function (err, hash) {
    console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
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
        this.activeMermaidClass = 'flex-start';
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
        this.activeMermaidClass = action ?? 'flex-start';
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
    } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, MatButtonModule, i2.MatLegacyButton, MatIconModule, i3.MatIcon, MermaidConfigComponent,
        SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid[_ngcontent-%COMP%]{width:100%;display:flex}.mermaid[_ngcontent-%COMP%]:hover ~ .mermaid-block-button[_ngcontent-%COMP%], .mermaid-block-button[_ngcontent-%COMP%]:hover{display:block}.mermaid-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}  .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}"] });
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
        [ngClass]="activeMermaidClass"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQTJDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7OztJQVVqRCw2QkFBaUU7SUFDL0QseUNBQXdFO0lBQXZDLGtOQUFnQixlQUFBLDRCQUFxQixDQUFBLElBQUM7SUFBQyxpQkFBaUI7SUFDM0YsMEJBQWU7OztJQURHLGVBQWdCO0lBQWhCLHFDQUFnQjs7OztJQUdoQyw4QkFBK0I7SUFDN0IsNEJBSXdCOztJQUN4QixpQ0FHaUM7SUFBL0IscUxBQVMsZUFBQSwyQkFBb0IsQ0FBQSxJQUFDO0lBQzVCLGdDQUFVO0lBQUEsb0JBQUk7SUFBQSxpQkFBVyxFQUFBLEVBQUE7OztJQVAzQixlQUE4QjtJQUE5QixtREFBOEIsaUZBQUE7O0FBZnRDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBUyxHQUFRLEVBQUUsSUFBUztJQUMvQyxPQUFPLENB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QUFLLENBQUM7SUFDdkMsQ0FBQzs7d1RBN0RVLGdDQUFnQyxTQUFoQyxnQ0FBZ0M7bUZBQWhDLGdDQUFnQzs7Ozs7Ozs7UUF0RDNDLG1HQUVlO1FBQ2Ysa0lBY2M7OztRQWpCQyxrREFBK0IsaUJBQUE7d0JBK0M1QyxZQUFZLHVCQUNaLGVBQWUsc0JBQ2YsYUFBYSxjQUNiLHNCQUFzQjtRQUN0QixZQUFZO3VGQUdILGdDQUFnQztjQTFENUMsU0FBUzs2QkFDSSxJQUFJLFlBQ04sNEJBQTRCLFlBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJULFdBNEJRO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO29CQUNiLHNCQUFzQjtvQkFDdEIsWUFBWTtpQkFDYjtnQkFPdUIsT0FBTztrQkFBOUIsU0FBUzttQkFBQyxXQUFXO1lBQ1MsZ0JBQWdCO2tCQUE5QyxTQUFTO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBCYXNlQmxvY2tDb21wb25lbnQgfSBmcm9tICdAdG1kanIvbmd4LWVkaXRvcmpzJztcbmltcG9ydCB7IE1lcm1haWRDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLWNvbmZpZy9tZXJtYWlkLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IG1lcm1haWQgZnJvbSAnbWVybWFpZCc7XG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3BpcGVzL3NoYXJlZC5waXBlJztcblxubWVybWFpZC5wYXJzZUVycm9yID0gZnVuY3Rpb24oZXJyOiBhbnksIGhhc2g6IGFueSkge1xuICBjb25zb2xlLndhcm4oYEVycm9yIHBhcnNpbmcgbWVybWFpZCBkaWFncmFtOiAke2Vycn0gJHtoYXNofWApO1xufTtcblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiX29wZW5FZGl0TWVybWFpZE92ZXJsYXk7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XG4gICAgPG1lcm1haWQtY29uZmlnIFt2YWx1ZV09XCJfdmFsdWVcIiAobWVybWFpZFZhbHVlKT1cInVwZGF0ZU1lcm1haWQoJGV2ZW50KVwiPjwvbWVybWFpZC1jb25maWc+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI2Vsc2VUZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWVybWFpZC1jb250YWluZXJcIj4gXG4gICAgICA8ZGl2XG4gICAgICAgICNtZXJtYWlkQ29udGFpbmVyXG4gICAgICAgIFtuZ0NsYXNzXT1cImFjdGl2ZU1lcm1haWRDbGFzc1wiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiX21lcm1haWREaWFncmFtU1ZHIHwgc2FmZUh0bWxcIlxuICAgICAgICBjbGFzcz1cIm1lcm1haWRcIj48L2Rpdj5cbiAgICAgIDxidXR0b24gIFxuICAgICAgICBtYXQtbWluaS1mYWIgXG4gICAgICAgIGNsYXNzPVwibWVybWFpZC1ibG9jay1idXR0b24gbWF0LWVsZXZhdGlvbi16MlwiXG4gICAgICAgIChjbGljayk9XCJvcGVuRWRpdFVybE92ZXJsYXkoKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAubWVybWFpZCB7IHdpZHRoOiAxMDAlOyBkaXNwbGF5OiBmbGV4OyB9XG4gIC5tZXJtYWlkOmhvdmVyIH4gLm1lcm1haWQtYmxvY2stYnV0dG9uLCAubWVybWFpZC1ibG9jay1idXR0b246aG92ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAubWVybWFpZC1ibG9jay1idXR0b24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2cHg7XG4gICAgICBsZWZ0OiA2cHg7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4OyBcbiAgICB9XG4gICAgLm1lcm1haWQtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIDpob3N0IC5mbGV4LXN0YXJ0IHsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gICAgOmhvc3QgLmZsZXgtZW5kIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgIDpob3N0IC5jZW50ZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAgIDpob3N0IC5zdHJldGNoIGltZyB7IHdpZHRoOiAxMDAlOyB9XG4gICAgOjpuZy1kZWVwIC5tZXJtYWlkLWJsb2NrLWJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB9XG4gIGBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1lcm1haWRDb25maWdDb21wb25lbnQsXG4gICAgU2FmZUh0bWxQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNNZXJtYWlkQmxvY2tDb21wb25lbnQgZXh0ZW5kcyBCYXNlQmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBvdmVycmlkZSB1c2VJbmxpbmVUb29sYmFyID0gZmFsc2U7XG4gIG92ZXJyaWRlIHVzZUlucHV0VHlwZSA9IGZhbHNlO1xuICBvdmVycmlkZSB1c2VPblBhc3RlSFRNTFJlbW92YWwgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdwYXJhZ3JhcGgnKSBlbGVtZW50ITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbWVybWFpZENvbnRhaW5lcicpIG1lcm1haWRDb250YWluZXIhOiBFbGVtZW50UmVmO1xuXG4gIF9tZXJtYWlkQVBJID0gbWVybWFpZC5tZXJtYWlkQVBJO1xuICBfb3BlbkVkaXRNZXJtYWlkT3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlO1xuICBfdmFsdWUgPSAnJztcbiAgX21lcm1haWREaWFncmFtU1ZHID0gJyc7XG4gIGFjdGl2ZU1lcm1haWRDbGFzczogc3RyaW5nID0gJ2ZsZXgtc3RhcnQnO1xuXG4gIG92ZXJyaWRlIGJsb2NrT3B0aW9uQWN0aW9uczogeyBhY3Rpb246IHN0cmluZywgaWNvbjogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGFjdGlvbjogJ2ZsZXgtc3RhcnQnLCBpY29uOiAnZm9ybWF0X2FsaWduX2xlZnQnIH0sXG4gICAgeyBhY3Rpb246ICdjZW50ZXInLCBpY29uOiAnZm9ybWF0X2FsaWduX2NlbnRlcicgfSxcbiAgICB7IGFjdGlvbjogJ2ZsZXgtZW5kJywgaWNvbjogJ2Zvcm1hdF9hbGlnbl9yaWdodCcgfVxuICBdO1xuXG4gIHJlbmRlck1lcm1haWREaWFncmFtKG1lcm1haWREaWFncmFtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB1bmlxdWVJZCA9IGBtZXJtYWlkLSR7RGF0ZS5ub3coKX0tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1gO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21lcm1haWRBUEkucmVuZGVyKHVuaXF1ZUlkLCBtZXJtYWlkRGlhZ3JhbSkudGhlbihcbiAgICAgICAgZGF0YSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5fbWVybWFpZERpYWdyYW1TVkcgPSBkYXRhLnN2ZyksXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUud2FybihgRXJyb3I6ICR7ZXJyb3J9YClcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9tZXJtYWlkQVBJLmluaXRpYWxpemUoeyBzdGFydE9uTG9hZDogZmFsc2UgfSk7XG4gICAgfSk7XG4gICAgaWYodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXJNZXJtYWlkRGlhZ3JhbSh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRWRpdFVybE92ZXJsYXkoKTtcbiAgICB9XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGNoYW5nZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBzdXBlci5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBvdmVycmlkZSBoYW5kbGVCbG9ja09wdGlvbkFjdGlvbihhY3Rpb246IHN0cmluZykge1xuICAgIHRoaXMuYWN0aXZlTWVybWFpZENsYXNzID0gYWN0aW9uID8/ICdmbGV4LXN0YXJ0JztcbiAgICBzdXBlci5oYW5kbGVCbG9ja09wdGlvbkFjdGlvbihhY3Rpb24pO1xuICB9XG5cbiAgb3BlbkVkaXRVcmxPdmVybGF5KCkge1xuICAgIHRoaXMuX29wZW5FZGl0TWVybWFpZE92ZXJsYXkgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlTWVybWFpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlck1lcm1haWREaWFncmFtKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLl9vcGVuRWRpdE1lcm1haWRPdmVybGF5ID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==