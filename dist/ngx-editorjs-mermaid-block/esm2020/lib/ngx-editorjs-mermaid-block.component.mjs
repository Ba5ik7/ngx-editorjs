import { CommonModule } from '@angular/common';
import { Component, Pipe, ViewChild } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';
import mermaid from 'mermaid';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/legacy-button";
import * as i4 from "@angular/material/icon";
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
SafeHtmlPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: SafeHtmlPipe, deps: [{ token: i1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafeHtmlPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.0", ngImport: i0, type: SafeHtmlPipe, isStandalone: true, name: "safeHtml" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: SafeHtmlPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'safeHtml', standalone: true }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }]; } });
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
NgxEditorjsMermaidBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsMermaidBlockComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NgxEditorjsMermaidBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: NgxEditorjsMermaidBlockComponent, isStandalone: true, selector: "ngx-editorjs-mermaid-block", viewQueries: [{ propertyName: "element", first: true, predicate: ["paragraph"], descendants: true }, { propertyName: "mermaidContainer", first: true, predicate: ["mermaidContainer"], descendants: true }], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}::ng-deep .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: MermaidConfigComponent, selector: "mermaid-config", inputs: ["value"], outputs: ["mermaidValue"] }, { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsMermaidBlockComponent, decorators: [{
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
                        MatButtonModule,
                        MatIconModule,
                        MermaidConfigComponent,
                        SafeHtmlPipe
                    ], styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}::ng-deep .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}\n"] }]
        }], propDecorators: { element: [{
                type: ViewChild,
                args: ['paragraph']
            }], mermaidContainer: [{
                type: ViewChild,
                args: ['mermaidContainer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQXNCLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxxQkFBcUIsSUFBSSxlQUFlLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDekQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFakYsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFFOUIsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFTLEdBQVEsRUFBRSxJQUFTO0lBQy9DLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQztBQUdGLE1BQU0sT0FBTyxZQUFZO0lBQ3ZCLFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDO0lBQy9DLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzt5R0FKVSxZQUFZO3VHQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFEeEIsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRTs7QUFrRTVDLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxrQkFBa0I7SUExRHhFOztRQTJEVyxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsMEJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBS3ZDLGdCQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNqQyw0QkFBdUIsR0FBWSxLQUFLLENBQUM7UUFDekMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBVyxZQUFZLENBQUM7UUFFL0IsdUJBQWtCLEdBQXVDO1lBQ2hFLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7WUFDbkQsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTtZQUNqRCxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1NBQ25ELENBQUM7S0E0Q0g7SUExQ0Msb0JBQW9CLENBQUMsY0FBc0I7UUFDekMsTUFBTSxRQUFRLEdBQUcsV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUNwRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQ2pFLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssRUFBRSxDQUFDLENBQ3pDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUSxRQUFRO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzFCO2FBQU07WUFDTCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtRQUNELEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRVEsV0FBVyxDQUFDLEtBQWE7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRVEsdUJBQXVCLENBQUMsTUFBYztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLFlBQVksQ0FBQztRQUMvQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7OzZIQTdEVSxnQ0FBZ0M7aUhBQWhDLGdDQUFnQywwVEF2RGpDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJULGlwQkE2QkMsWUFBWSxnT0FDWixlQUFlLGdXQUNmLGFBQWEsb0xBQ2Isc0JBQXNCLG9HQTdEYixZQUFZOzJGQWlFWixnQ0FBZ0M7a0JBMUQ1QyxTQUFTO2lDQUNJLElBQUksWUFDTiw0QkFBNEIsWUFDNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQsV0E0QlE7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2Isc0JBQXNCO3dCQUN0QixZQUFZO3FCQUNiOzhCQU91QixPQUFPO3NCQUE5QixTQUFTO3VCQUFDLFdBQVc7Z0JBQ1MsZ0JBQWdCO3NCQUE5QyxTQUFTO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRMZWdhY3lCdXR0b25Nb2R1bGUgYXMgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBCYXNlQmxvY2tDb21wb25lbnQgfSBmcm9tICdAdG1kanIvbmd4LWVkaXRvcmpzJztcbmltcG9ydCB7IE1lcm1haWRDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2ltYWdlLWNvbmZpZy9tZXJtYWlkLWNvbmZpZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgbWVybWFpZCBmcm9tICdtZXJtYWlkJztcblxubWVybWFpZC5wYXJzZUVycm9yID0gZnVuY3Rpb24oZXJyOiBhbnksIGhhc2g6IGFueSkge1xuICBjb25zb2xlLndhcm4oYEVycm9yIHBhcnNpbmcgbWVybWFpZCBkaWFncmFtOiAke2Vycn0gJHtoYXNofWApO1xufTtcblxuQFBpcGUoeyBuYW1lOiAnc2FmZUh0bWwnLCBzdGFuZGFsb25lOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgU2FmZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSAge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyKSB7fVxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHNlbGVjdG9yOiAnbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiX29wZW5FZGl0TWVybWFpZE92ZXJsYXk7IGVsc2UgZWxzZVRlbXBsYXRlXCI+XG4gICAgPG1lcm1haWQtY29uZmlnIFt2YWx1ZV09XCJfdmFsdWVcIiAobWVybWFpZFZhbHVlKT1cInVwZGF0ZU1lcm1haWQoJGV2ZW50KVwiPjwvbWVybWFpZC1jb25maWc+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI2Vsc2VUZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibWVybWFpZC1jb250YWluZXJcIj4gXG4gICAgICA8ZGl2XG4gICAgICAgICNtZXJtYWlkQ29udGFpbmVyXG4gICAgICAgIFtuZ0NsYXNzXT1cImFjdGl2ZUltYWdlQ2xhc3NcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cIl9tZXJtYWlkRGlhZ3JhbVNWRyB8IHNhZmVIdG1sXCJcbiAgICAgICAgY2xhc3M9XCJtZXJtYWlkXCI+PC9kaXY+XG4gICAgICA8YnV0dG9uICBcbiAgICAgICAgbWF0LW1pbmktZmFiIFxuICAgICAgICBjbGFzcz1cIm1lcm1haWQtYmxvY2stYnV0dG9uIG1hdC1lbGV2YXRpb24tejJcIlxuICAgICAgICAoY2xpY2spPVwib3BlbkVkaXRVcmxPdmVybGF5KClcIj5cbiAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDIycHg7IH1cbiAgLm1lcm1haWQgeyB3aWR0aDogMTAwJTsgZGlzcGxheTogZmxleDsgfVxuICAubWVybWFpZDpob3ZlciB+IC5tZXJtYWlkLWJsb2NrLWJ1dHRvbiwgLm1lcm1haWQtYmxvY2stYnV0dG9uOmhvdmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgLm1lcm1haWQtYmxvY2stYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgbGVmdDogNnB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDsgXG4gICAgfVxuICAgIC5tZXJtYWlkLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICA6aG9zdCAuZmxleC1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIDpob3N0IC5mbGV4LWVuZCB7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgICA6aG9zdCAuY2VudGVyIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICA6aG9zdCAuc3RyZXRjaCBpbWcgeyB3aWR0aDogMTAwJTsgfVxuICAgIDo6bmctZGVlcCAubWVybWFpZC1ibG9jay1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNZXJtYWlkQ29uZmlnQ29tcG9uZW50LFxuICAgIFNhZmVIdG1sUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3ZlcnJpZGUgdXNlSW5saW5lVG9vbGJhciA9IGZhbHNlO1xuICBvdmVycmlkZSB1c2VJbnB1dFR5cGUgPSBmYWxzZTtcbiAgb3ZlcnJpZGUgdXNlT25QYXN0ZUhUTUxSZW1vdmFsID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncGFyYWdyYXBoJykgZWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21lcm1haWRDb250YWluZXInKSBtZXJtYWlkQ29udGFpbmVyITogRWxlbWVudFJlZjtcblxuICBfbWVybWFpZEFQSSA9IG1lcm1haWQubWVybWFpZEFQSTtcbiAgX29wZW5FZGl0TWVybWFpZE92ZXJsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3ZhbHVlID0gJyc7XG4gIF9tZXJtYWlkRGlhZ3JhbVNWRyA9ICcnO1xuICBhY3RpdmVJbWFnZUNsYXNzOiBzdHJpbmcgPSAnZmxleC1zdGFydCc7XG5cbiAgb3ZlcnJpZGUgYmxvY2tPcHRpb25BY3Rpb25zOiB7IGFjdGlvbjogc3RyaW5nLCBpY29uOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgYWN0aW9uOiAnZmxleC1zdGFydCcsIGljb246ICdmb3JtYXRfYWxpZ25fbGVmdCcgfSxcbiAgICB7IGFjdGlvbjogJ2NlbnRlcicsIGljb246ICdmb3JtYXRfYWxpZ25fY2VudGVyJyB9LFxuICAgIHsgYWN0aW9uOiAnZmxleC1lbmQnLCBpY29uOiAnZm9ybWF0X2FsaWduX3JpZ2h0JyB9XG4gIF07XG5cbiAgcmVuZGVyTWVybWFpZERpYWdyYW0obWVybWFpZERpYWdyYW06IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gYG1lcm1haWQtJHtEYXRlLm5vdygpfS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbWVybWFpZEFQSS5yZW5kZXIodW5pcXVlSWQsIG1lcm1haWREaWFncmFtKS50aGVuKFxuICAgICAgICBkYXRhID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9tZXJtYWlkRGlhZ3JhbVNWRyA9IGRhdGEuc3ZnKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS53YXJuKGBFcnJvcjogJHtlcnJvcn1gKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21lcm1haWRBUEkuaW5pdGlhbGl6ZSh7IHN0YXJ0T25Mb2FkOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgICBpZih0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlck1lcm1haWREaWFncmFtKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5FZGl0VXJsT3ZlcmxheSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGhhbmRsZUJsb2NrT3B0aW9uQWN0aW9uKGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVJbWFnZUNsYXNzID0gYWN0aW9uID8/ICdmbGV4LXN0YXJ0JztcbiAgICBzdXBlci5oYW5kbGVCbG9ja09wdGlvbkFjdGlvbihhY3Rpb24pO1xuICB9XG5cbiAgb3BlbkVkaXRVcmxPdmVybGF5KCkge1xuICAgIHRoaXMuX29wZW5FZGl0TWVybWFpZE92ZXJsYXkgPSB0cnVlO1xuICB9XG5cbiAgdXBkYXRlTWVybWFpZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlck1lcm1haWREaWFncmFtKHZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgICB0aGlzLl9vcGVuRWRpdE1lcm1haWRPdmVybGF5ID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==