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
NgxEditorjsMermaidClientBlockComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsMermaidClientBlockComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxEditorjsMermaidClientBlockComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: NgxEditorjsMermaidClientBlockComponent, isStandalone: true, selector: "ngx-editorjs-mermaid-client-block", inputs: { value: "value", savedAction: "savedAction" }, ngImport: i0, template: `
    <div class="mermaid-container">
      <div
        #mermaidContainer
        [ngClass]="activeMermaidClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
    </div>
  `, isInline: true, styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "pipe", type: SafeHtmlPipe, name: "safeHtml" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: NgxEditorjsMermaidClientBlockComponent, decorators: [{
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
        }], propDecorators: { value: [{
                type: Input
            }], savedAction: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVkaXRvcmpzLW1lcm1haWQtY2xpZW50LWJsb2NrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1lZGl0b3Jqcy1tZXJtYWlkLWJsb2NrL3NyYy9saWIvbmd4LWVkaXRvcmpzLW1lcm1haWQtY2xpZW50LWJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUErQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRW5ELE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBUyxHQUFRLEVBQUUsSUFBUztJQUMvQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNoRSxDQUFDLENBQUM7QUEyQkYsTUFBTSxPQUFPLHNDQUFzQztJQXpCbkQ7UUEwQkUsV0FBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixnQkFBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDakMsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLHVCQUFrQixHQUFXLFlBQVksQ0FBQztLQXlCM0M7SUF2QkMsSUFDSSxLQUFLLENBQUMsY0FBc0I7UUFDOUIsTUFBTSxRQUFRLEdBQUcsV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM3RSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDMUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNqRSxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLEVBQUUsQ0FBQyxDQUN6QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsSUFDSSxXQUFXLENBQUMsTUFBYztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxJQUFJLFlBQVksQ0FBQztJQUNuRCxDQUFDOzttSUE1QlUsc0NBQXNDO3VIQUF0QyxzQ0FBc0MscUpBdEJ2Qzs7Ozs7Ozs7R0FRVCxzVkFVQyxZQUFZLHdIQUNaLFlBQVk7MkZBR0gsc0NBQXNDO2tCQXpCbEQsU0FBUztpQ0FDSSxJQUFJLFlBQ04sbUNBQW1DLFlBQ25DOzs7Ozs7OztHQVFULFdBU1E7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3FCQUNiOzhCQVNHLEtBQUs7c0JBRFIsS0FBSztnQkFrQkYsV0FBVztzQkFEZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE5nWm9uZSwgT25Jbml0LCBQaXBlLCBQaXBlVHJhbnNmb3JtLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBtZXJtYWlkIGZyb20gJ21lcm1haWQnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlcy9zaGFyZWQucGlwZSc7XG5cbm1lcm1haWQucGFyc2VFcnJvciA9IGZ1bmN0aW9uKGVycjogYW55LCBoYXNoOiBhbnkpIHtcbiAgY29uc29sZS53YXJuKGBFcnJvciBwYXJzaW5nIG1lcm1haWQgZGlhZ3JhbTogJHtlcnJ9ICR7aGFzaH1gKTtcbn07XG5cbkBDb21wb25lbnQoe1xuICBzdGFuZGFsb25lOiB0cnVlLFxuICBzZWxlY3RvcjogJ25neC1lZGl0b3Jqcy1tZXJtYWlkLWNsaWVudC1ibG9jaycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cIm1lcm1haWQtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgICNtZXJtYWlkQ29udGFpbmVyXG4gICAgICAgIFtuZ0NsYXNzXT1cImFjdGl2ZU1lcm1haWRDbGFzc1wiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiX21lcm1haWREaWFncmFtU1ZHIHwgc2FmZUh0bWxcIlxuICAgICAgICBjbGFzcz1cIm1lcm1haWRcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nLWJvdHRvbTogMjJweDsgfVxuICAgIC5tZXJtYWlkIHsgd2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IH1cbiAgICAubWVybWFpZC1jb250YWluZXIgeyBkaXNwbGF5OiBmbGV4OyB9XG4gICAgOmhvc3QgLmZsZXgtc3RhcnQgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cbiAgICA6aG9zdCAuZmxleC1lbmQgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyB9XG4gICAgOmhvc3QgLmNlbnRlciB7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIGBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNhZmVIdG1sUGlwZVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFZGl0b3Jqc01lcm1haWRDbGllbnRCbG9ja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG5nWm9uZSA9IGluamVjdChOZ1pvbmUpO1xuICBfbWVybWFpZEFQSSA9IG1lcm1haWQubWVybWFpZEFQSTtcbiAgX21lcm1haWREaWFncmFtU1ZHID0gJyc7XG4gIGFjdGl2ZU1lcm1haWRDbGFzczogc3RyaW5nID0gJ2ZsZXgtc3RhcnQnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZShtZXJtYWlkRGlhZ3JhbTogc3RyaW5nKSB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSBgbWVybWFpZC0ke0RhdGUubm93KCl9LSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCl9YDtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLl9tZXJtYWlkQVBJLnJlbmRlcih1bmlxdWVJZCwgbWVybWFpZERpYWdyYW0gPz8gJycpLnRoZW4oXG4gICAgICAgIGRhdGEgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuX21lcm1haWREaWFncmFtU1ZHID0gZGF0YS5zdmcpLFxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLndhcm4oYEVycm9yOiAke2Vycm9yfWApXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgdGhpcy5fbWVybWFpZEFQSS5pbml0aWFsaXplKHsgc3RhcnRPbkxvYWQ6IGZhbHNlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgQElucHV0KCkgXG4gIHNldCBzYXZlZEFjdGlvbihhY3Rpb246IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKCdhY3Rpb24nLCBhY3Rpb24pO1xuICAgIFxuICAgIHRoaXMuYWN0aXZlTWVybWFpZENsYXNzID0gYWN0aW9uID8/ICdmbGV4LXN0YXJ0JztcbiAgfVxufVxuIl19