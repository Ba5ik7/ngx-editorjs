import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { AutofocusDirective, BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["paragraph"];
function NgxEditorjsMermaidBlockComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mermaid-config", 2);
    i0.ɵɵlistener("mermaidValue", function NgxEditorjsMermaidBlockComponent_ng_container_0_Template_mermaid_config_mermaidValue_1_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updateMermaid($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function NgxEditorjsMermaidBlockComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h1");
    i0.ɵɵtext(1, "Mermaid!");
    i0.ɵɵelementEnd();
} }
export class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent {
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
NgxEditorjsMermaidBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidBlockComponent, selectors: [["ngx-editorjs-mermaid-block"]], viewQuery: function NgxEditorjsMermaidBlockComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.element = _t.first);
    } }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "mermaidValue"]], template: function NgxEditorjsMermaidBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxEditorjsMermaidBlockComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, NgxEditorjsMermaidBlockComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx._openEditMermaidOverlay)("ngIfElse", _r1);
    } }, dependencies: [CommonModule, i1.NgIf, MatButtonModule,
        MatIconModule,
        MermaidConfigComponent], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidBlockComponent, [{
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
                    MatButtonModule,
                    MatIconModule,
                    MermaidConfigComponent
                ], styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}\n"] }]
    }], null, { element: [{
            type: ViewChild,
            args: ['paragraph']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBaUIsU0FBUyxFQUFzQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7O0lBTzdFLDZCQUFpRTtJQUMvRCx5Q0FBdUQ7SUFBdkMsa05BQWdCLGVBQUEsNEJBQXFCLENBQUEsSUFBQztJQUFDLGlCQUFpQjtJQUMxRSwwQkFBZTs7O0lBRWIsMEJBQUk7SUFBQSx3QkFBUTtJQUFBLGlCQUFLOztBQWN2QixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsa0JBQWtCO0lBdEJ4RTs7UUF1QlcscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBSTlCLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUV6QyxXQUFNLEdBQW1DLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFdkQsdUJBQWtCLEdBQXVDO1lBQ2hFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUNqRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ2xELEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUU7U0FDcEQsQ0FBQztLQThCSDtJQTVCVSxRQUFRO1FBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3pDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsZUFBZTtRQUNiLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRVEsV0FBVyxDQUFDLEtBQWE7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRVEsdUJBQXVCLENBQUMsTUFBYztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQixLQUFLLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBcUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDOzt3VEE1Q1UsZ0NBQWdDLFNBQWhDLGdDQUFnQzttRkFBaEMsZ0NBQWdDOzs7Ozs7UUFsQnpDLG1HQUVlO1FBQ2Ysa0lBRWM7OztRQUxDLGtEQUErQixpQkFBQTt3QkFXOUMsWUFBWSxXQUVaLGVBQWU7UUFDZixhQUFhO1FBQ2Isc0JBQXNCO3VGQUdiLGdDQUFnQztjQXRCNUMsU0FBUzs2QkFDSSxJQUFJLFlBQ04sNEJBQTRCLFlBQzVCOzs7Ozs7O0dBT1QsV0FJUTtvQkFDUCxZQUFZO29CQUNaLGtCQUFrQjtvQkFDbEIsZUFBZTtvQkFDZixhQUFhO29CQUNiLHNCQUFzQjtpQkFDdkI7Z0JBTXVCLE9BQU87a0JBQTlCLFNBQVM7bUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUsIEJhc2VCbG9ja0NvbXBvbmVudCB9IGZyb20gJ0B0bWRqci9uZ3gtZWRpdG9yanMnO1xuaW1wb3J0IHsgTWVybWFpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtY29uZmlnL21lcm1haWQtY29uZmlnLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfb3BlbkVkaXRNZXJtYWlkT3ZlcmxheTsgZWxzZSBlbHNlVGVtcGxhdGVcIj5cbiAgICAgIDxtZXJtYWlkLWNvbmZpZyAobWVybWFpZFZhbHVlKT1cInVwZGF0ZU1lcm1haWQoJGV2ZW50KVwiPjwvbWVybWFpZC1jb25maWc+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XG4gICAgICA8aDE+TWVybWFpZCE8L2gxPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWVybWFpZENvbmZpZ0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgb3ZlcnJpZGUgdXNlSW5saW5lVG9vbGJhciA9IGZhbHNlO1xuICBvdmVycmlkZSB1c2VJbnB1dFR5cGUgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdwYXJhZ3JhcGgnKSBlbGVtZW50ITogRWxlbWVudFJlZjtcblxuICBfb3BlbkVkaXRNZXJtYWlkT3ZlcmxheTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIF92YWx1ZTogeyB1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZyB9ID0geyB1cmw6ICcnLCB0aXRsZTogJycgfTtcblxuICBvdmVycmlkZSBibG9ja09wdGlvbkFjdGlvbnM6IHsgYWN0aW9uOiBzdHJpbmcsIGljb246IHN0cmluZyB9W10gPSBbXG4gICAgeyBhY3Rpb246ICdmbGV4LXN0YXJ0JywgaWNvbjogJ2Zvcm1hdF9hbGlnbl9sZWZ0JyB9LFxuICAgIHsgYWN0aW9uOiAnY2VudGVyJywgaWNvbjogJ2Zvcm1hdF9hbGlnbl9jZW50ZXInIH0sXG4gICAgeyBhY3Rpb246ICdmbGV4LWVuZCcsIGljb246ICdmb3JtYXRfYWxpZ25fcmlnaHQnIH0sXG4gICAgeyBhY3Rpb246ICdzdHJldGNoJywgaWNvbjogJ2Zvcm1hdF9hbGlnbl9qdXN0aWZ5JyB9XG4gIF07XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgISF0aGlzLnZhbHVlICYmICh0aGlzLl92YWx1ZSA9IEpTT04ucGFyc2UodGhpcy52YWx1ZSkpO1xuICAgICF0aGlzLnZhbHVlICYmIHRoaXMub3BlbkVkaXRVcmxPdmVybGF5KCk7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci52aWV3Q2hpbGQgPSB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICBvdmVycmlkZSBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIuY2hhbmdlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgb3ZlcnJpZGUgaGFuZGxlQmxvY2tPcHRpb25BY3Rpb24oYWN0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aW9uOicsIGFjdGlvbik7XG4gICAgc3VwZXIuaGFuZGxlQmxvY2tPcHRpb25BY3Rpb24oYWN0aW9uKTtcbiAgfVxuXG4gIG9wZW5FZGl0VXJsT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9vcGVuRWRpdE1lcm1haWRPdmVybGF5ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZU1lcm1haWQodmFsdWU6IHsgdXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgfSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgIHRoaXMuX29wZW5FZGl0TWVybWFpZE92ZXJsYXkgPSBmYWxzZTtcbiAgfVxufVxuIl19