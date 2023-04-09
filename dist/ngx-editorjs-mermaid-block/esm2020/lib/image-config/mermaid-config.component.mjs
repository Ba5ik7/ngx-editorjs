import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/legacy-form-field";
import * as i4 from "@angular/material/legacy-input";
import * as i5 from "@angular/material/legacy-button";
function MermaidConfigComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.mermaidConfigFormErrorMessages["title"]);
} }
function MermaidConfigComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r3.mermaidConfigFormErrorMessages["url"]);
} }
export class MermaidConfigComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.destory = new Subject();
        this.errorMessages = {
            required: 'Required',
        };
        this.mermaidConfigFormErrorMessages = {
            url: '', title: ''
        };
        this.value = { url: '', title: '' };
        this.mermaidValue = new EventEmitter();
    }
    ngOnInit() {
        this.mermaidConfigForm = this.formBuilder.group({
            url: [this.value.url ?? '', [Validators.required]],
            title: [this.value.title ?? '', [Validators.required]]
        });
        this.mermaidConfigForm.statusChanges
            .pipe(takeUntil(this.destory))
            .subscribe(() => this.setErrorsMessages(this.mermaidConfigForm, this.mermaidConfigFormErrorMessages));
    }
    ngOnDestroy() {
        this.destory.next(true);
    }
    updateMermaid() {
        this.mermaidValue.emit(this.mermaidConfigForm.value);
    }
    closeConfig() {
        this.mermaidValue.emit(this.value);
    }
    setErrorsMessages(formGroup, formControlMessages) {
        Object.keys(formGroup.controls).forEach(element => {
            const errors = formGroup.get(element)?.errors;
            if (errors) {
                const error = Object.keys(errors)[0];
                formControlMessages[element] = this.errorMessages[error];
            }
        });
    }
}
MermaidConfigComponent.ɵfac = function MermaidConfigComponent_Factory(t) { return new (t || MermaidConfigComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
MermaidConfigComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MermaidConfigComponent, selectors: [["mermaid-config"]], inputs: { value: "value" }, outputs: { mermaidValue: "mermaidValue" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 21, vars: 4, consts: [[1, "mermaid-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "formControlName", "title"], ["title", ""], [4, "ngIf"], ["matInput", "", "type", "text", "title", "URL", "formControlName", "url"], ["url", ""], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"]], template: function MermaidConfigComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "form", 1)(2, "h2", 2);
        i0.ɵɵtext(3, "Mermaid Configurations");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-form-field", 3)(5, "mat-label");
        i0.ɵɵtext(6, "Title");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "input", 4, 5);
        i0.ɵɵtemplate(9, MermaidConfigComponent_mat_error_9_Template, 2, 1, "mat-error", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-form-field", 3)(11, "mat-label");
        i0.ɵɵtext(12, "Mark Down");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(13, "input", 7, 8);
        i0.ɵɵtemplate(15, MermaidConfigComponent_mat_error_15_Template, 2, 1, "mat-error", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 9)(17, "button", 10);
        i0.ɵɵlistener("click", function MermaidConfigComponent_Template_button_click_17_listener() { return ctx.updateMermaid(); });
        i0.ɵɵtext(18, "Save");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "button", 11);
        i0.ɵɵlistener("click", function MermaidConfigComponent_Template_button_click_19_listener() { return ctx.closeConfig(); });
        i0.ɵɵtext(20, "Cancel");
        i0.ɵɵelementEnd()()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.mermaidConfigForm);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", (tmp_1_0 = ctx.mermaidConfigForm.get("title")) == null ? null : tmp_1_0.errors);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", (tmp_2_0 = ctx.mermaidConfigForm.get("url")) == null ? null : tmp_2_0.errors);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.mermaidConfigForm.invalid);
    } }, dependencies: [CommonModule, i2.NgIf, MatInputModule, i3.MatLegacyError, i3.MatLegacyFormField, i3.MatLegacyLabel, i4.MatLegacyInput, MatButtonModule, i5.MatLegacyButton, MatFormFieldModule,
        ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MermaidConfigComponent, [{
        type: Component,
        args: [{ selector: 'mermaid-config', standalone: true, imports: [
                    CommonModule,
                    MatInputModule,
                    MatButtonModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                ], template: `
    <div class="mermaid-block-modal" >
      <form [formGroup]="mermaidConfigForm">
        <h2 mat-dialog-title>Mermaid Configurations</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Title</mat-label>
          <input #title matInput type="text" formControlName="title" />
          <mat-error *ngIf="mermaidConfigForm.get('title')?.errors">{{mermaidConfigFormErrorMessages['title']}}</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Mark Down</mat-label>
          <input #url matInput type="text" title="URL" formControlName="url" />
          <mat-error *ngIf="mermaidConfigForm.get('url')?.errors">{{mermaidConfigFormErrorMessages['url']}}</mat-error>
        </mat-form-field>
        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateMermaid()" [disabled]="mermaidConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `, styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { value: [{
            type: Input
        }], mermaidValue: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVybWFpZC1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWVkaXRvcmpzLW1lcm1haWQtYmxvY2svc3JjL2xpYi9pbWFnZS1jb25maWcvbWVybWFpZC1jb25maWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBMEIsbUJBQW1CLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixJQUFJLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsSUFBSSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7SUFtQmhDLGlDQUEwRDtJQUFBLFlBQTJDO0lBQUEsaUJBQVk7OztJQUF2RCxlQUEyQztJQUEzQyxvRUFBMkM7OztJQUtyRyxpQ0FBd0Q7SUFBQSxZQUF5QztJQUFBLGlCQUFZOzs7SUFBckQsZUFBeUM7SUFBekMsa0VBQXlDOztBQTRCM0csTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUU1QyxZQUFPLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFJMUMsa0JBQWEsR0FBOEI7WUFDekMsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQztRQUVGLG1DQUE4QixHQUE4QjtZ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c0JBQXNCO2NBbERsQyxTQUFTOzJCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUDtvQkFDUCxZQUFZO29CQUNaLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtpQkFDcEIsWUFDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7OERBc0NRLEtBQUs7a0JBQWIsS0FBSztZQUVJLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSBhcyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7IE1hdExlZ2FjeUZvcm1GaWVsZE1vZHVsZSBhcyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktZm9ybS1maWVsZCc7XG5pbXBvcnQgeyBNYXRMZWdhY3lJbnB1dE1vZHVsZSBhcyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1pbnB1dCc7XG5pbXBvcnQgeyBTdWJqZWN0LCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVybWFpZC1jb25maWcnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibWVybWFpZC1ibG9jay1tb2RhbFwiID5cbiAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibWVybWFpZENvbmZpZ0Zvcm1cIj5cbiAgICAgICAgPGgyIG1hdC1kaWFsb2ctdGl0bGU+TWVybWFpZCBDb25maWd1cmF0aW9uczwvaDI+XG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiIGNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgPG1hdC1sYWJlbD5UaXRsZTwvbWF0LWxhYmVsPlxuICAgICAgICAgIDxpbnB1dCAjdGl0bGUgbWF0SW5wdXQgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIm1lcm1haWRDb25maWdGb3JtLmdldCgndGl0bGUnKT8uZXJyb3JzXCI+e3ttZXJtYWlkQ29uZmlnRm9ybUVycm9yTWVzc2FnZXNbJ3RpdGxlJ119fTwvbWF0LWVycm9yPlxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cIm91dGxpbmVcIiBjb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgIDxtYXQtbGFiZWw+TWFyayBEb3duPC9tYXQtbGFiZWw+XG4gICAgICAgICAgPGlucHV0ICN1cmwgbWF0SW5wdXQgdHlwZT1cInRleHRcIiB0aXRsZT1cIlVSTFwiIGZvcm1Db250cm9sTmFtZT1cInVybFwiIC8+XG4gICAgICAgICAgPG1hdC1lcnJvciAqbmdJZj1cIm1lcm1haWRDb25maWdGb3JtLmdldCgndXJsJyk/LmVycm9yc1wiPnt7bWVybWFpZENvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzWyd1cmwnXX19PC9tYXQtZXJyb3I+XG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24tZ3JvdXBcIj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwidXBkYXRlTWVybWFpZCgpXCIgW2Rpc2FibGVkXT1cIm1lcm1haWRDb25maWdGb3JtLmludmFsaWRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjbG9zZUNvbmZpZygpXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gIDpob3N0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgfVxuXG4gICA6aG9zdCBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIDpob3N0IGZvcm0gLmFjdGlvbi1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIGdhcDogMTBweDtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE1lcm1haWRDb25maWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7IH1cbiAgXG4gIGRlc3Rvcnk6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBcbiAgbWVybWFpZE9iamVjdDogYW55O1xuXG4gIGVycm9yTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgcmVxdWlyZWQ6ICdSZXF1aXJlZCcsXG4gIH07XG5cbiAgbWVybWFpZENvbmZpZ0Zvcm1FcnJvck1lc3NhZ2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgIHVybDogJycsIHRpdGxlOiAnJ1xuICB9XG5cbiAgbWVybWFpZENvbmZpZ0Zvcm0hOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCkgdmFsdWU6IHsgdXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgfSA9IHsgdXJsOiAnJywgdGl0bGU6ICcnIH07XG5cbiAgQE91dHB1dCgpIG1lcm1haWRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyB1cmw6IHN0cmluZywgdGl0bGU6IHN0cmluZyB9PigpO1xuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tZXJtYWlkQ29uZmlnRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgdXJsOiBbdGhpcy52YWx1ZS51cmwgPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB0aXRsZTogW3RoaXMudmFsdWUudGl0bGUgPz8gJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV1cbiAgICB9KTtcblxuICAgIHRoaXMubWVybWFpZENvbmZpZ0Zvcm0uc3RhdHVzQ2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRFcnJvcnNNZXNzYWdlcyh0aGlzLm1lcm1haWRDb25maWdGb3JtLCB0aGlzLm1lcm1haWRDb25maWdGb3JtRXJyb3JNZXNzYWdlcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0b3J5Lm5leHQodHJ1ZSk7XG4gIH1cblxuICB1cGRhdGVNZXJtYWlkKCkge1xuICAgIHRoaXMubWVybWFpZFZhbHVlLmVtaXQodGhpcy5tZXJtYWlkQ29uZmlnRm9ybS52YWx1ZSk7XG4gIH1cblxuICBjbG9zZUNvbmZpZygpIHtcbiAgICB0aGlzLm1lcm1haWRWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgc2V0RXJyb3JzTWVzc2FnZXMoZm9ybUdyb3VwOiBGb3JtR3JvdXAsIGZvcm1Db250cm9sTWVzc2FnZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyhmb3JtR3JvdXAuY29udHJvbHMpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBjb25zdCBlcnJvcnMgPSBmb3JtR3JvdXAuZ2V0KGVsZW1lbnQpPy5lcnJvcnM7XG4gICAgICBpZihlcnJvcnMpIHsgICAgICAgICBcbiAgICAgICAgY29uc3QgZXJyb3IgPSBPYmplY3Qua2V5cyhlcnJvcnMpWzBdO1xuICAgICAgICBmb3JtQ29udHJvbE1lc3NhZ2VzW2VsZW1lbnRdID0gdGhpcy5lcnJvck1lc3NhZ2VzW2Vycm9yXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19