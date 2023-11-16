import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import * as i0 from "@angular/core";
import * as i1 from "@ctrl/ngx-codemirror";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
export class MermaidConfigComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: MermaidConfigComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.3", type: MermaidConfigComponent, isStandalone: true, selector: "mermaid-config", inputs: { value: "value" }, outputs: { mermaidValue: "mermaidValue" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{width:100%;display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}:host .action-group{display:flex;justify-content:flex-end;gap:10px}:host .answers-action-group{padding-bottom:20px}:host ::ng-deep .CodeMirror{height:250px}.container{padding-bottom:20px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: CodemirrorModule }, { kind: "component", type: i1.CodemirrorComponent, selector: "ngx-codemirror", inputs: ["className", "name", "autoFocus", "options", "preserveScrollPosition"], outputs: ["cursorActivity", "focusChange", "scroll", "drop", "codeMirrorLoaded"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: MermaidConfigComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mermaid-config', standalone: true, imports: [
                        CommonModule,
                        CodemirrorModule,
                        FormsModule,
                        MatButtonModule
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
        }], propDecorators: { value: [{
                type: Input
            }], mermaidValue: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVybWFpZC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9pbWFnZS1jb25maWcvbWVybWFpZC1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBa0R4RCxNQUFNLE9BQU8sc0JBQXNCO0lBL0NuQztRQWdERSxzQkFBaUIsR0FBRTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRTtTQUM1QyxDQUFBO1FBRVEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FTckQ7SUFQQyxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs4R0FqQlUsc0JBQXNCO2tHQUF0QixzQkFBc0IsaUpBdEN2Qjs7Ozs7Ozs7Ozs7R0FXVCx5WEFoQkMsWUFBWSw4QkFDWixnQkFBZ0Isa1JBQ2hCLFdBQVcsOFZBQ1gsZUFBZTs7MkZBd0NOLHNCQUFzQjtrQkEvQ2xDLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBQ2QsSUFBSSxXQUNQO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLGVBQWU7cUJBQ2hCLFlBQ1M7Ozs7Ozs7Ozs7O0dBV1Q7OEJBbUNRLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBDb2RlbWlycm9yTW9kdWxlIH0gZnJvbSAnQGN0cmwvbmd4LWNvZGVtaXJyb3InO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lcm1haWQtY29uZmlnJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBDb2RlbWlycm9yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZVxuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8bmd4LWNvZGVtaXJyb3JcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZVZhbHVlKCRldmVudClcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgW29wdGlvbnNdPVwiY29kZU1pcnJvck9wdGlvbnNcIj5cbiAgICA8L25neC1jb2RlbWlycm9yPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ1cGRhdGVNZXJtYWlkKClcIj5VcGRhdGU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW46IDE2cHggYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIDpob3N0IC5hY3Rpb24tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBnYXA6IDEwcHg7XG4gICAgfVxuICAgIDpob3N0IC5hbnN3ZXJzLWFjdGlvbi1ncm91cCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgOmhvc3QgOjpuZy1kZWVwIC5Db2RlTWlycm9ye1xuICAgICAgaGVpZ2h0OjI1MHB4XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZXJtYWlkQ29uZmlnQ29tcG9uZW50IHsgIFxuICBjb2RlTWlycm9yT3B0aW9ucyA9eyBcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcbiAgICB0aGVtZTogJ21hdGVyaWFsLXBhbGVuaWdodCcsXG4gICAgbW9kZTogJ3RleHQvdHlwZXNjcmlwdCcsXG4gICAgZXh0cmFLZXlzOiB7ICdDdHJsLVNwYWNlJzogJ2F1dG9jb21wbGV0ZScgfSxcbiAgfVxuXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpIG1lcm1haWRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGNoYW5nZVZhbHVlKG5ld1ZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICB1cGRhdGVNZXJtYWlkKCkge1xuICAgIHRoaXMubWVybWFpZFZhbHVlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==