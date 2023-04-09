import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MermaidConfigComponent implements OnInit {
    private formBuilder;
    constructor(formBuilder: FormBuilder);
    destory: Subject<boolean>;
    mermaidObject: any;
    errorMessages: {
        [key: string]: string;
    };
    mermaidConfigFormErrorMessages: {
        [key: string]: string;
    };
    mermaidConfigForm: FormGroup;
    value: {
        url: string;
        title: string;
    };
    mermaidValue: EventEmitter<{
        url: string;
        title: string;
    }>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateMermaid(): void;
    closeConfig(): void;
    setErrorsMessages(formGroup: FormGroup, formControlMessages: {
        [key: string]: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MermaidConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MermaidConfigComponent, "mermaid-config", never, { "value": "value"; }, { "mermaidValue": "mermaidValue"; }, never, never, true, never>;
}
//# sourceMappingURL=mermaid-config.component.d.ts.map