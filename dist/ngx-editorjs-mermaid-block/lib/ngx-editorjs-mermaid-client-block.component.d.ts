import { NgZone, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxEditorjsMermaidClientBlockComponent implements OnInit {
    ngZone: NgZone;
    _mermaidAPI: Readonly<{
        render: (id: string, text: string, svgContainingElement?: Element | undefined) => Promise<import("mermaid").RenderResult>;
        parse: (text: string, parseOptions?: import("mermaid").ParseOptions | undefined) => Promise<boolean>;
        getDiagramFromText: (text: string, metadata?: Pick<import("mermaid/dist/diagram-api/types").DiagramMetadata, "title"> | undefined) => Promise<import("mermaid/dist/Diagram").Diagram>;
        initialize: (options?: import("mermaid").MermaidConfig | undefined) => void;
        getConfig: () => import("mermaid").MermaidConfig;
        setConfig: (conf: import("mermaid").MermaidConfig) => import("mermaid").MermaidConfig;
        getSiteConfig: () => import("mermaid").MermaidConfig;
        updateSiteConfig: (conf: import("mermaid").MermaidConfig) => import("mermaid").MermaidConfig;
        reset: () => void;
        globalReset: () => void;
        defaultConfig: import("mermaid").MermaidConfig;
    }>;
    _mermaidDiagramSVG: string;
    activeMermaidClass: string;
    set value(mermaidDiagram: string);
    ngOnInit(): void;
    set savedAction(action: string);
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxEditorjsMermaidClientBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxEditorjsMermaidClientBlockComponent, "ngx-editorjs-mermaid-client-block", never, { "value": { "alias": "value"; "required": false; }; "savedAction": { "alias": "savedAction"; "required": false; }; }, {}, never, never, true, never>;
}
