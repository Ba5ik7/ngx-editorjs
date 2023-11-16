import { QuizConfig } from './quiz-config/quiz-config.component';
import * as i0 from "@angular/core";
export declare class NgxEditorjsQuizClientBlockComponent {
    isAnswerCorrect: boolean | undefined;
    answerResponse: string | undefined;
    answerSubmited: boolean;
    userAnswer: string | undefined;
    _value: QuizConfig;
    set value(value: string);
    onQuizAnswerClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxEditorjsQuizClientBlockComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxEditorjsQuizClientBlockComponent, "ngx-editorjs-image-client-block", never, { "value": { "alias": "value"; "required": false; }; }, {}, never, never, true, never>;
}
