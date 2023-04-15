import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import * as i0 from "@angular/core";
import * as i1 from "@ctrl/ngx-codemirror";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/legacy-button";
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
}
MermaidConfigComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: MermaidConfigComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MermaidConfigComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0", type: MermaidConfigComponent, isStandalone: true, selector: "mermaid-config", inputs: { value: "value" }, outputs: { mermaidValue: "mermaidValue" }, ngImport: i0, template: `
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
  `, isInline: true, styles: [":host{width:100%;display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}:host .action-group{display:flex;justify-content:flex-end;gap:10px}:host .answers-action-group{padding-bottom:20px}:host ::ng-deep .CodeMirror{height:250px}.container{padding-bottom:20px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: CodemirrorModule }, { kind: "component", type: i1.CodemirrorComponent, selector: "ngx-codemirror", inputs: ["className", "name", "autoFocus", "options", "preserveScrollPosition"], outputs: ["cursorActivity", "focusChange", "scroll", "drop"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatLegacyButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0", ngImport: i0, type: MermaidConfigComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVybWFpZC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9pbWFnZS1jb25maWcvbWVybWFpZC1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUscUJBQXFCLElBQUksZUFBZSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBa0R4RCxNQUFNLE9BQU8sc0JBQXNCO0lBL0NuQztRQWdERSxzQkFBaUIsR0FBRTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsU0FBUyxFQUFFLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRTtTQUM1QyxDQUFBO1FBRVEsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7S0FTckQ7SUFQQyxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7bUhBakJVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGlKQXRDdkI7Ozs7Ozs7Ozs7O0dBV1QseVhBaEJDLFlBQVksOEJBQ1osZ0JBQWdCLDhQQUNoQixXQUFXLDhWQUNYLGVBQWU7MkZBd0NOLHNCQUFzQjtrQkEvQ2xDLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBQ2QsSUFBSSxXQUNQO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLGVBQWU7cUJBQ2hCLFlBQ1M7Ozs7Ozs7Ozs7O0dBV1Q7OEJBbUNRLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IENvZGVtaXJyb3JNb2R1bGUgfSBmcm9tICdAY3RybC9uZ3gtY29kZW1pcnJvcic7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVybWFpZC1jb25maWcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIENvZGVtaXJyb3JNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxuZ3gtY29kZW1pcnJvclxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlVmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICBbb3B0aW9uc109XCJjb2RlTWlycm9yT3B0aW9uc1wiPlxuICAgIDwvbmd4LWNvZGVtaXJyb3I+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFjdGlvbi1ncm91cFwiPlxuICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVwZGF0ZU1lcm1haWQoKVwiPlVwZGF0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgOmhvc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgOmhvc3QgLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gICAgOmhvc3QgLmFuc3dlcnMtYWN0aW9uLWdyb3VwIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICA6aG9zdCA6Om5nLWRlZXAgLkNvZGVNaXJyb3J7XG4gICAgICBoZWlnaHQ6MjUwcHhcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE1lcm1haWRDb25maWdDb21wb25lbnQgeyAgXG4gIGNvZGVNaXJyb3JPcHRpb25zID17IFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgIHRoZW1lOiAnbWF0ZXJpYWwtcGFsZW5pZ2h0JyxcbiAgICBtb2RlOiAndGV4dC90eXBlc2NyaXB0JyxcbiAgICBleHRyYUtleXM6IHsgJ0N0cmwtU3BhY2UnOiAnYXV0b2NvbXBsZXRlJyB9LFxuICB9XG5cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KCkgbWVybWFpZFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgY2hhbmdlVmFsdWUobmV3VmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZU1lcm1haWQoKSB7XG4gICAgdGhpcy5tZXJtYWlkVmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19