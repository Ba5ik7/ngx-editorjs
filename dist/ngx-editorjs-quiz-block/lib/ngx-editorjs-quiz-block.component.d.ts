import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { BaseBlockComponent } from '@tmdjr/ngx-editorjs';
import * as i0 from "@angular/core";
export declare class NgxEditorjsQuizBlockComponent extends BaseBlockComponent implements OnInit, AfterViewInit {
    useInlineToolbar: boolean;
    useInputType: boolean;
    element: ElementRef;
    _openEditQuizOverlay: boolean;
    _value: {
        question: string;
        correctAnswer: string;
    };
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onMouseEnter(event: Event): void;
    openEditQuizOverlay(): void;
    updateQuiz(value: {
        question: string;
        correctAnswer: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxEditorjsQuizBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxEditorjsQuizBlockComponent, "ngx-editorjs-quiz-block", never, {}, {}, never, never, true, never>;
}
//# sourceMappingURL=ngx-editorjs-quiz-block.component.d.ts.map