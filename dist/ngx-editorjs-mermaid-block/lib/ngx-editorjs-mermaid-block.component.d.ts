import { ElementRef, OnInit } from '@angular/core';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import * as i0 from "@angular/core";
export declare class NgxEditorjsMermaidBlockComponent extends BaseBlockComponent implements OnInit {
    useInlineToolbar: boolean;
    useInputType: boolean;
    useOnPasteHTMLRemoval: boolean;
    element: ElementRef;
    mermaidContainer: ElementRef;
    _mermaidAPI: Readonly<{
        render: (id: string, text: string, svgContainingElement?: Element) => Promise<import("mermaid").RenderResult>;
        parse: (text: string, parseOptions?: import("mermaid").ParseOptions) => Promise<boolean>;
        getDiagramFromText: (text: string, metadata?: Pick<import("mermaid/dist/diagram-api/types").DiagramMetadata, "title">) => Promise<import("mermaid/dist/Diagram").Diagram>;
        initialize: (options?: import("mermaid").MermaidConfig) => void;
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
    activeMermaidClass: string;
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
