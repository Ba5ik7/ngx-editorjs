import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import * as i0 from "@angular/core";
export declare class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {
    useInlineToolbar: boolean;
    useInputType: boolean;
    element: ElementRef;
    _openEditMermaidOverlay: boolean;
    _value: {
        url: string;
        title: string;
    };
    blockOptionActions: {
        action: string;
        icon: string;
    }[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    changeValue(value: string): void;
    handleBlockOptionAction(action: string): void;
    openEditUrlOverlay(): void;
    updateMermaid(value: {
        url: string;
        title: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxEditorjsMermaidBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxEditorjsMermaidBlockComponent, "ngx-editorjs-mermaid-block", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=ngx-editorjs-mermaid-block.component.d.ts.map