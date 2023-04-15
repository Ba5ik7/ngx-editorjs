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
NgxEditorjsMermaidBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsMermaidBlockComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
NgxEditorjsMermaidBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: NgxEditorjsMermaidBlockComponent, isStandalone: true, selector: "ngx-editorjs-mermaid-block", viewQueries: [{ propertyName: "element", first: true, predicate: ["paragraph"], descendants: true }, { propertyName: "mermaidContainer", first: true, predicate: ["mermaidContainer"], descendants: true }], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}::ng-deep .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: MermaidConfigComponent, selector: "mermaid-config", inputs: ["value"], outputs: ["mermaidValue"] }, { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }] });
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
        }], propDecorators: { element: [{
                type: ViewChild,
                args: ['paragraph']
            }], mermaidContainer: [{
                type: ViewChild,
                args: ['mermaidContainer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQTJDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRW5ELE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBUyxHQUFRLEVBQUUsSUFBUztJQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUE0REYsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLGtCQUFrQjtJQTFEeEU7O1FBMkRXLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFLdkMsZ0JBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2pDLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6QyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFXLFlBQVksQ0FBQztRQUVqQyx1QkFBa0IsR0FBdUM7WUFDaEUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRCxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQ2pELEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7U0FDbkQsQ0FBQztLQTRDSDtJQTFDQyxvQkFBb0IsQ0FBQyxjQUFzQjtRQUN6QyxNQUFNLFFBQVEsR0FBRyxXQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzdFLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3BELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDakUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLENBQUMsQ0FDekMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVRLFFBQVE7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFUSxXQUFXLENBQUMsS0FBYTtRQUNoQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFUSx1QkFBdUIsQ0FBQyxNQUFjO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLElBQUksWUFBWSxDQUFDO1FBQ2pELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQzs7NkhBN0RVLGdDQUFnQztpSEFBaEMsZ0NBQWdDLDBUQXZEakM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQsaXBCQTZCQyxZQUFZLGdPQUNaLGVBQWUsZ1dBQ2YsYUFBYSxvTEFDYixzQkFBc0Isb0dBQ3RCLFlBQVk7MkZBR0gsZ0NBQWdDO2tCQTFENUMsU0FBUztpQ0FDSSxJQUFJLFlBQ04sNEJBQTRCLFlBQzVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJULFdBNEJRO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixhQUFhO3dCQUNiLHNCQUFzQjt3QkFDdEIsWUFBWTtxQkFDYjs4QkFPdUIsT0FBTztzQkFBOUIsU0FBUzt1QkFBQyxXQUFXO2dCQUNTLGdCQUFnQjtzQkFBOUMsU0FBUzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0TGVnYWN5QnV0dG9uTW9kdWxlIGFzIE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgQmFzZUJsb2NrQ29tcG9uZW50IH0gZnJvbSAnQHRtZGpyL25neC1lZGl0b3Jqcyc7XG5pbXBvcnQgeyBNZXJtYWlkQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1jb25maWcvbWVybWFpZC1jb25maWcuY29tcG9uZW50JztcbmltcG9ydCBtZXJtYWlkIGZyb20gJ21lcm1haWQnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9zaGFyZWQucGlwZSc7XG5cbm1lcm1haWQucGFyc2VFcnJvciA9IGZ1bmN0aW9uKGVycjogYW55LCBoYXNoOiBhbnkpIHtcbiAgY29uc29sZS53YXJuKGBFcnJvciBwYXJzaW5nIG1lcm1haWQgZGlhZ3JhbTogJHtlcnJ9ICR7aGFzaH1gKTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrJyxcbiAgdGVtcGxhdGU6IGBcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9vcGVuRWRpdE1lcm1haWRPdmVybGF5OyBlbHNlIGVsc2VUZW1wbGF0ZVwiPlxuICAgIDxtZXJtYWlkLWNvbmZpZyBbdmFsdWVdPVwiX3ZhbHVlXCIgKG1lcm1haWRWYWx1ZSk9XCJ1cGRhdGVNZXJtYWlkKCRldmVudClcIj48L21lcm1haWQtY29uZmlnPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLXRlbXBsYXRlICNlbHNlVGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1lcm1haWQtY29udGFpbmVyXCI+IFxuICAgICAgPGRpdlxuICAgICAgICAjbWVybWFpZENvbnRhaW5lclxuICAgICAgICBbbmdDbGFzc109XCJhY3RpdmVNZXJtYWlkQ2xhc3NcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cIl9tZXJtYWlkRGlhZ3JhbVNWRyB8IHNhZmVIdG1sXCJcbiAgICAgICAgY2xhc3M9XCJtZXJtYWlkXCI+PC9kaXY+XG4gICAgICA8YnV0dG9uICBcbiAgICAgICAgbWF0LW1pbmktZmFiIFxuICAgICAgICBjbGFzcz1cIm1lcm1haWQtYmxvY2stYnV0dG9uIG1hdC1lbGV2YXRpb24tejJcIlxuICAgICAgICAoY2xpY2spPVwib3BlbkVkaXRVcmxPdmVybGF5KClcIj5cbiAgICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDIycHg7IH1cbiAgLm1lcm1haWQgeyB3aWR0aDogMTAwJTsgZGlzcGxheTogZmxleDsgfVxuICAubWVybWFpZDpob3ZlciB+IC5tZXJtYWlkLWJsb2NrLWJ1dHRvbiwgLm1lcm1haWQtYmxvY2stYnV0dG9uOmhvdmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgLm1lcm1haWQtYmxvY2stYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNnB4O1xuICAgICAgbGVmdDogNnB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDsgXG4gICAgfVxuICAgIC5tZXJtYWlkLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICA6aG9zdCAuZmxleC1zdGFydCB7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIDpob3N0IC5mbGV4LWVuZCB7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cbiAgICA6aG9zdCAuY2VudGVyIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgICA6aG9zdCAuc3RyZXRjaCBpbWcgeyB3aWR0aDogMTAwJTsgfVxuICAgIDo6bmctZGVlcCAubWVybWFpZC1ibG9jay1idXR0b24gLm1hdC1idXR0b24td3JhcHBlciAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNZXJtYWlkQ29uZmlnQ29tcG9uZW50LFxuICAgIFNhZmVIdG1sUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVkaXRvcmpzTWVybWFpZEJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQmFzZUJsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgb3ZlcnJpZGUgdXNlSW5saW5lVG9vbGJhciA9IGZhbHNlO1xuICBvdmVycmlkZSB1c2VJbnB1dFR5cGUgPSBmYWxzZTtcbiAgb3ZlcnJpZGUgdXNlT25QYXN0ZUhUTUxSZW1vdmFsID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgncGFyYWdyYXBoJykgZWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21lcm1haWRDb250YWluZXInKSBtZXJtYWlkQ29udGFpbmVyITogRWxlbWVudFJlZjtcblxuICBfbWVybWFpZEFQSSA9IG1lcm1haWQubWVybWFpZEFQSTtcbiAgX29wZW5FZGl0TWVybWFpZE92ZXJsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3ZhbHVlID0gJyc7XG4gIF9tZXJtYWlkRGlhZ3JhbVNWRyA9ICcnO1xuICBhY3RpdmVNZXJtYWlkQ2xhc3M6IHN0cmluZyA9ICdmbGV4LXN0YXJ0JztcblxuICBvdmVycmlkZSBibG9ja09wdGlvbkFjdGlvbnM6IHsgYWN0aW9uOiBzdHJpbmcsIGljb246IHN0cmluZyB9W10gPSBbXG4gICAgeyBhY3Rpb246ICdmbGV4LXN0YXJ0JywgaWNvbjogJ2Zvcm1hdF9hbGlnbl9sZWZ0JyB9LFxuICAgIHsgYWN0aW9uOiAnY2VudGVyJywgaWNvbjogJ2Zvcm1hdF9hbGlnbl9jZW50ZXInIH0sXG4gICAgeyBhY3Rpb246ICdmbGV4LWVuZCcsIGljb246ICdmb3JtYXRfYWxpZ25fcmlnaHQnIH1cbiAgXTtcblxuICByZW5kZXJNZXJtYWlkRGlhZ3JhbShtZXJtYWlkRGlhZ3JhbTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSBgbWVybWFpZC0ke0RhdGUubm93KCl9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9tZXJtYWlkQVBJLnJlbmRlcih1bmlxdWVJZCwgbWVybWFpZERpYWdyYW0pLnRoZW4oXG4gICAgICAgIGRhdGEgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX21lcm1haWREaWFncmFtU1ZHID0gZGF0YS5zdmcpLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLndhcm4oYEVycm9yOiAke2Vycm9yfWApXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbWVybWFpZEFQSS5pbml0aWFsaXplKHsgc3RhcnRPbkxvYWQ6IGZhbHNlIH0pO1xuICAgIH0pO1xuICAgIGlmKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyTWVybWFpZERpYWdyYW0odGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbkVkaXRVcmxPdmVybGF5KCk7XG4gICAgfVxuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gIH1cblxuICBvdmVycmlkZSBjaGFuZ2VWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgc3VwZXIuY2hhbmdlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgb3ZlcnJpZGUgaGFuZGxlQmxvY2tPcHRpb25BY3Rpb24oYWN0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFjdGl2ZU1lcm1haWRDbGFzcyA9IGFjdGlvbiA/PyAnZmxleC1zdGFydCc7XG4gICAgc3VwZXIuaGFuZGxlQmxvY2tPcHRpb25BY3Rpb24oYWN0aW9uKTtcbiAgfVxuXG4gIG9wZW5FZGl0VXJsT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9vcGVuRWRpdE1lcm1haWRPdmVybGF5ID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZU1lcm1haWQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5yZW5kZXJNZXJtYWlkRGlhZ3JhbSh2YWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XG4gICAgdGhpcy5fb3BlbkVkaXRNZXJtYWlkT3ZlcmxheSA9IGZhbHNlO1xuICB9XG59XG4iXX0=