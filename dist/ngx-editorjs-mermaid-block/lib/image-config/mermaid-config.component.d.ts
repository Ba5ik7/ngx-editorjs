import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MermaidConfigComponent {
    codeMirrorOptions: {
        lineNumbers: boolean;
        theme: string;
        mode: string;
        extraKeys: {
            'Ctrl-Space': string;
        };
    };
    value: string;
    mermaidValue: EventEmitter<string>;
    changeValue(newValue: string): void;
    updateMermaid(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MermaidConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MermaidConfigComponent, "mermaid-config", never, { "value": { "alias": "value"; "required": false; }; }, { "mermaidValue": "mermaidValue"; }, never, never, true, never>;
}
