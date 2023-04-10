import { ElementRef, OnInit, PipeTransform } from '@angular/core';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitized;
    constructor(sanitized: DomSanitizer);
    transform(value: string): import("@angular/platform-browser").SafeHtml;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeHtmlPipe, "safeHtml", true>;
}
export declare class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent implements OnInit {
    useInlineToolbar: boolean;
    useInputType: boolean;
    useOnPasteHTMLRemoval: boolean;
    element: ElementRef;
    mermaidContainer: ElementRef;
    _mermaidAPI: Readonly<{
        render: (id: string, text: string, svgContainingElement?: Element | undefined) => Promise<import("mermaid").RenderResult>;
        parse: (text: string, parseOptions?: import("mermaid").ParseOptions | undefined) => Promise<boolean>;
        parseDirective: (p: any, statement: string, context: string, type: string) => void;
        getDiagramFromText: (text: string) => Promise<import("mermaid/dist/Diagram").Diagram>;
        initialize: (options?: import("mermaid").MermaidConfig | undefined) => void;
        getConfig: () => import("mermaid").MermaidConfig;
        setConfig: (conf: import("mermaid").MermaidConfig) => import("mermaid").MermaidConfig;
        getSiteConfig: () => import("mermaid").MermaidConfig;
        updateSiteConfig: (conf: import("mermaid").MermaidConfig) => import("mermaid").MermaidConfig;
        reset: () => void;
        globalReset: () => void;
        defaultConfig: import("mermaid").MermaidConfig;
    }>;
    _openEditMermaidOverlay: boolean;
    _value: string;
    _mermaidDiagramSVG: string;
    activeImageClass: string;
    blockOptionActions: {
        action: string;
        icon: string;
    }[];
    renderMermaidDiagram(mermaidDiagram: string): void;
    ngOnInit(): void;
    changeValue(value: string): void;
    handleBlockOptionAction(action: string): void;
    openEditUrlOverlay(): void;
    updateMermaid(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxEditorjsMermaidBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxEditorjsMermaidBlockComponent, "ngx-editorjs-mermaid-block", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=ngx-editorjs-mermaid-block.component.d.ts.map