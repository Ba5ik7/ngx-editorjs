import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { MermaidConfigComponent } from './image-config/mermaid-config.component';
import mermaid from 'mermaid';
import { SafeHtmlPipe } from './pipes/shared.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxEditorjsMermaidBlockComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NgxEditorjsMermaidBlockComponent, isStandalone: true, selector: "ngx-editorjs-mermaid-block", viewQueries: [{ propertyName: "element", first: true, predicate: ["paragraph"], descendants: true }, { propertyName: "mermaidContainer", first: true, predicate: ["mermaidContainer"], descendants: true }], usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: MermaidConfigComponent, selector: "mermaid-config", inputs: ["value"], outputs: ["mermaidValue"] }, { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxEditorjsMermaidBlockComponent, decorators: [{
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
                    ], styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}\n"] }]
        }], propDecorators: { element: [{
                type: ViewChild,
                args: ['paragraph']
            }], mermaidContainer: [{
                type: ViewChild,
                args: ['mermaidContainer']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9uZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQTJDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUM5QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRW5ELE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBUyxHQUFRLEVBQUUsSUFBUztJQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUF3REYsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLGtCQUFrQjtJQXREeEU7O1FBdURXLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFLdkMsZ0JBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ2pDLDRCQUF1QixHQUFZLEtBQUssQ0FBQztRQUN6QyxXQUFNLEdBQUcsRUFBRSxDQUFD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WTtxQkFDYjs4QkFPdUIsT0FBTztzQkFBOUIsU0FBUzt1QkFBQyxXQUFXO2dCQUNTLGdCQUFnQjtzQkFBOUMsU0FBUzt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0sIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IEJhc2VCbG9ja0NvbXBvbmVudCB9IGZyb20gJ0B0bWRqci9uZ3gtZWRpdG9yanMnO1xuaW1wb3J0IHsgTWVybWFpZENvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2UtY29uZmlnL21lcm1haWQtY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgbWVybWFpZCBmcm9tICdtZXJtYWlkJztcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMvc2hhcmVkLnBpcGUnO1xuXG5tZXJtYWlkLnBhcnNlRXJyb3IgPSBmdW5jdGlvbihlcnI6IGFueSwgaGFzaDogYW55KSB7XG4gIGNvbnNvbGUud2FybihgRXJyb3IgcGFyc2luZyBtZXJtYWlkIGRpYWdyYW06ICR7ZXJyfSAke2hhc2h9YCk7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtbWVybWFpZC1ibG9jaycsXG4gIHRlbXBsYXRlOiBgXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJfb3BlbkVkaXRNZXJtYWlkT3ZlcmxheTsgZWxzZSBlbHNlVGVtcGxhdGVcIj5cbiAgICA8bWVybWFpZC1jb25maWcgW3ZhbHVlXT1cIl92YWx1ZVwiIChtZXJtYWlkVmFsdWUpPVwidXBkYXRlTWVybWFpZCgkZXZlbnQpXCI+PC9tZXJtYWlkLWNvbmZpZz5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjZWxzZVRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtZXJtYWlkLWNvbnRhaW5lclwiPiBcbiAgICAgIDxkaXZcbiAgICAgICAgI21lcm1haWRDb250YWluZXJcbiAgICAgICAgW25nQ2xhc3NdPVwiYWN0aXZlTWVybWFpZENsYXNzXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJfbWVybWFpZERpYWdyYW1TVkcgfCBzYWZlSHRtbFwiXG4gICAgICAgIGNsYXNzPVwibWVybWFpZFwiPjwvZGl2PlxuICAgICAgPGJ1dHRvbiAgXG4gICAgICAgIG1hdC1taW5pLWZhYiBcbiAgICAgICAgY2xhc3M9XCJtZXJtYWlkLWJsb2NrLWJ1dHRvbiBtYXQtZWxldmF0aW9uLXoyXCJcbiAgICAgICAgKGNsaWNrKT1cIm9wZW5FZGl0VXJsT3ZlcmxheSgpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctYm90dG9tOiAyMnB4OyB9XG4gIC5tZXJtYWlkIHsgd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IH1cbiAgLm1lcm1haWQ6aG92ZXIgfiAubWVybWFpZC1ibG9jay1idXR0b24sIC5tZXJtYWlkLWJsb2NrLWJ1dHRvbjpob3ZlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIC5tZXJtYWlkLWJsb2NrLWJ1dHRvbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDZweDtcbiAgICAgIGxlZnQ6IDZweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7IFxuICAgIH1cbiAgICAubWVybWFpZC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgOmhvc3QgLmZsZXgtc3RhcnQgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICA6aG9zdCAuZmxleC1lbmQgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgOmhvc3QgLmNlbnRlciB7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gICAgOmhvc3QgLnN0cmV0Y2ggaW1nIHsgd2lkdGg6IDEwMCU7IH1cbiAgYF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWVybWFpZENvbmZpZ0NvbXBvbmVudCxcbiAgICBTYWZlSHRtbFBpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFZGl0b3Jqc01lcm1haWRCbG9ja0NvbXBvbmVudCBleHRlbmRzIEJhc2VCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG92ZXJyaWRlIHVzZUlubGluZVRvb2xiYXIgPSBmYWxzZTtcbiAgb3ZlcnJpZGUgdXNlSW5wdXRUeXBlID0gZmFsc2U7XG4gIG92ZXJyaWRlIHVzZU9uUGFzdGVIVE1MUmVtb3ZhbCA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoJ3BhcmFncmFwaCcpIGVsZW1lbnQhOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtZXJtYWlkQ29udGFpbmVyJykgbWVybWFpZENvbnRhaW5lciE6IEVsZW1lbnRSZWY7XG5cbiAgX21lcm1haWRBUEkgPSBtZXJtYWlkLm1lcm1haWRBUEk7XG4gIF9vcGVuRWRpdE1lcm1haWRPdmVybGF5OiBib29sZWFuID0gZmFsc2U7XG4gIF92YWx1ZSA9ICcnO1xuICBfbWVybWFpZERpYWdyYW1TVkcgPSAnJztcbiAgYWN0aXZlTWVybWFpZENsYXNzOiBzdHJpbmcgPSAnZmxleC1zdGFydCc7XG5cbiAgb3ZlcnJpZGUgYmxvY2tPcHRpb25BY3Rpb25zOiB7IGFjdGlvbjogc3RyaW5nLCBpY29uOiBzdHJpbmcgfVtdID0gW1xuICAgIHsgYWN0aW9uOiAnZmxleC1zdGFydCcsIGljb246ICdmb3JtYXRfYWxpZ25fbGVmdCcgfSxcbiAgICB7IGFjdGlvbjogJ2NlbnRlcicsIGljb246ICdmb3JtYXRfYWxpZ25fY2VudGVyJyB9LFxuICAgIHsgYWN0aW9uOiAnZmxleC1lbmQnLCBpY29uOiAnZm9ybWF0X2FsaWduX3JpZ2h0JyB9XG4gIF07XG5cbiAgcmVuZGVyTWVybWFpZERpYWdyYW0obWVybWFpZERpYWdyYW06IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gYG1lcm1haWQtJHtEYXRlLm5vdygpfS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbWVybWFpZEFQSS5yZW5kZXIodW5pcXVlSWQsIG1lcm1haWREaWFncmFtKS50aGVuKFxuICAgICAgICBkYXRhID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9tZXJtYWlkRGlhZ3JhbVNWRyA9IGRhdGEuc3ZnKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS53YXJuKGBFcnJvcjogJHtlcnJvcn1gKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21lcm1haWRBUEkuaW5pdGlhbGl6ZSh7IHN0YXJ0T25Mb2FkOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgICBpZih0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlck1lcm1haWREaWFncmFtKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW5FZGl0VXJsT3ZlcmxheSgpO1xuICAgIH1cbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgY2hhbmdlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHN1cGVyLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIG92ZXJyaWRlIGhhbmRsZUJsb2NrT3B0aW9uQWN0aW9uKGFjdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVNZXJtYWlkQ2xhc3MgPSBhY3Rpb24gPz8gJ2ZsZXgtc3RhcnQnO1xuICAgIHN1cGVyLmhhbmRsZUJsb2NrT3B0aW9uQWN0aW9uKGFjdGlvbik7XG4gIH1cblxuICBvcGVuRWRpdFVybE92ZXJsYXkoKSB7XG4gICAgdGhpcy5fb3BlbkVkaXRNZXJtYWlkT3ZlcmxheSA9IHRydWU7XG4gIH1cblxuICB1cGRhdGVNZXJtYWlkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMucmVuZGVyTWVybWFpZERpYWdyYW0odmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlVmFsdWUodmFsdWUpO1xuICAgIHRoaXMuX29wZW5FZGl0TWVybWFpZE92ZXJsYXkgPSBmYWxzZTtcbiAgfVxufVxuIl19