import { CommonModule } from '@angular/common';
import { Component, Input, NgZone, inject } from '@angular/core';
import mermaid from 'mermaid';
import { SafeHtmlPipe } from './pipes/shared.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
mermaid.parseError = function (err, hash) {
    console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
export class NgxEditorjsMermaidClientBlockComponent {
    constructor() {
        this.ngZone = inject(NgZone);
        this._mermaidAPI = mermaid.mermaidAPI;
        this._mermaidDiagramSVG = '';
        this.activeMermaidClass = 'flex-start';
    }
    set value(mermaidDiagram) {
        const uniqueId = `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        this.ngZone.runOutsideAngular(() => {
            this._mermaidAPI.render(uniqueId, mermaidDiagram ?? '').then(data => this.ngZone.run(() => this._mermaidDiagramSVG = data.svg), error => console.warn(`Error: ${error}`));
        });
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            this._mermaidAPI.initialize({ startOnLoad: false });
        });
    }
    set savedAction(action) {
        console.log('action', action);
        this.activeMermaidClass = action ?? 'flex-start';
    }
}
NgxEditorjsMermaidClientBlockComponent.ɵfac = function NgxEditorjsMermaidClientBlockComponent_Factory(t) { return new (t || NgxEditorjsMermaidClientBlockComponent)(); };
NgxEditorjsMermaidClientBlockComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NgxEditorjsMermaidClientBlockComponent, selectors: [["ngx-editorjs-mermaid-client-block"]], inputs: { value: "value", savedAction: "savedAction" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 4, consts: [[1, "mermaid-container"], [1, "mermaid", 3, "ngClass", "innerHTML"], ["mermaidContainer", ""]], template: function NgxEditorjsMermaidClientBlockComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "div", 1, 2);
        i0.ɵɵpipe(3, "safeHtml");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.activeMermaidClass)("innerHTML", i0.ɵɵpipeBind1(3, 2, ctx._mermaidDiagramSVG), i0.ɵɵsanitizeHtml);
    } }, dependencies: [CommonModule, i1.NgClass, SafeHtmlPipe], styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid[_ngcontent-%COMP%]{width:100%;display:flex}.mermaid-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxEditorjsMermaidClientBlockComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'ngx-editorjs-mermaid-client-block', template: `
    <div class="mermaid-container">
      <div
        #mermaidContainer
        [ngClass]="activeMermaidClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
    </div>
  `, imports: [
                    CommonModule,
                    SafeHtmlPipe
                ], styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}\n"] }]
    }], null, { value: [{
            type: Input
        }], savedAction: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLW1lcm1haWQtY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRW5ELE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBUyxHQUFRLEVBQUUsSUFBUztJQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUEyQkYsTUFBTSxPQUFPLHNDQUFzQztJQXpCbkQ7UUEwQkUsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDakMsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFXLFlBQVksQ0FBQztLQXlCM0M7SUF2QkMsSUFDSSxLQUFLLENBQUMsY0FBc0I7UUFDOUIsTUFBTSxRQUFRLEdBQUcsV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNqRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUN6QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFDSSxXQUFXLENBQUMsTUFBYztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxJQUFJLFlBQVksQ0FBQztJQUNuRCxDQUFDOzs0SEE1QlUsc0NBQXNDO3lGQUF0QyxzQ0FBc0M7UUFyQi9DLDhCQUErQjtRQUM3Qiw0QkFJd0I7O1FBQzFCLGlCQUFNOztRQUhGLGVBQThCO1FBQTlCLGdEQUE4Qiw4RUFBQTt3QkFjbEMsWUFBWSxjQUNaLFlBQVk7dUZBR0gsc0NBQXNDO2NBekJsRCxTQUFTOzZCQUNJLElBQUksWUFDTixtQ0FBbUMsWUFDbkM7Ozs7Ozs7O0dBUVQsV0FTUTtvQkFDUCxZQUFZO29CQUNaLFlBQVk7aUJBQ2I7Z0JBU0csS0FBSztrQkFEUixLQUFLO1lBa0JGLFdBQVc7a0JBRGQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBOZ1pvbmUsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgbWVybWFpZCBmcm9tICdtZXJtYWlkJztcbmltcG9ydCB7IFNhZmVIdG1sUGlwZSB9IGZyb20gJy4vcGlwZXMvc2hhcmVkLnBpcGUnO1xuXG5tZXJtYWlkLnBhcnNlRXJyb3IgPSBmdW5jdGlvbihlcnI6IGFueSwgaGFzaDogYW55KSB7XG4gIGNvbnNvbGUud2FybihgRXJyb3IgcGFyc2luZyBtZXJtYWlkIGRpYWdyYW06ICR7ZXJyfSAke2hhc2h9YCk7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgc2VsZWN0b3I6ICduZ3gtZWRpdG9yanMtbWVybWFpZC1jbGllbnQtYmxvY2snLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJtZXJtYWlkLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdlxuICAgICAgICAjbWVybWFpZENvbnRhaW5lclxuICAgICAgICBbbmdDbGFzc109XCJhY3RpdmVNZXJtYWlkQ2xhc3NcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cIl9tZXJtYWlkRGlhZ3JhbVNWRyB8IHNhZmVIdG1sXCJcbiAgICAgICAgY2xhc3M9XCJtZXJtYWlkXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZy1ib3R0b206IDIycHg7IH1cbiAgICAubWVybWFpZCB7IHdpZHRoOiAxMDAlOyBkaXNwbGF5OiBmbGV4OyB9XG4gICAgLm1lcm1haWQtY29udGFpbmVyIHsgZGlzcGxheTogZmxleDsgfVxuICAgIDpob3N0IC5mbGV4LXN0YXJ0IHsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gICAgOmhvc3QgLmZsZXgtZW5kIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAgIDpob3N0IC5jZW50ZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICBgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTYWZlSHRtbFBpcGVcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RWRpdG9yanNNZXJtYWlkQ2xpZW50QmxvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBuZ1pvbmUgPSBpbmplY3QoTmdab25lKTtcbiAgX21lcm1haWRBUEkgPSBtZXJtYWlkLm1lcm1haWRBUEk7XG4gIF9tZXJtYWlkRGlhZ3JhbVNWRyA9ICcnO1xuICBhY3RpdmVNZXJtYWlkQ2xhc3M6IHN0cmluZyA9ICdmbGV4LXN0YXJ0JztcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWUobWVybWFpZERpYWdyYW06IHN0cmluZykge1xuICAgIGNvbnN0IHVuaXF1ZUlkID0gYG1lcm1haWQtJHtEYXRlLm5vdygpfS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApfWA7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbWVybWFpZEFQSS5yZW5kZXIodW5pcXVlSWQsIG1lcm1haWREaWFncmFtID8/ICcnKS50aGVuKFxuICAgICAgICBkYXRhID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLl9tZXJtYWlkRGlhZ3JhbVNWRyA9IGRhdGEuc3ZnKSxcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS53YXJuKGBFcnJvcjogJHtlcnJvcn1gKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMuX21lcm1haWRBUEkuaW5pdGlhbGl6ZSh7IHN0YXJ0T25Mb2FkOiBmYWxzZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpIFxuICBzZXQgc2F2ZWRBY3Rpb24oYWN0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygnYWN0aW9uJywgYWN0aW9uKTtcbiAgICBcbiAgICB0aGlzLmFjdGl2ZU1lcm1haWRDbGFzcyA9IGFjdGlvbiA/PyAnZmxleC1zdGFydCc7XG4gIH1cbn1cbiJdfQ==