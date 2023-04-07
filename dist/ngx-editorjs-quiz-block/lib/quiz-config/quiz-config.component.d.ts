import { EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
type RatioOption = {
    value: string;
};
export type QuizConfig = {
    question: string;
    correctAnswer: string;
    ratioOptions: RatioOption[];
};
export declare class QuizConfigComponent implements OnInit {
    private formBuilder;
    constructor(formBuilder: FormBuilder);
    destory: Subject<boolean>;
    errorMessages: {
        [key: string]: string;
    };
    quizConfigFormErrorMessages: {
        [key: string]: string;
    };
    quizConfigForm: FormGroup;
    get ratioOptions(): FormArray;
    value: QuizConfig;
    quizValue: EventEmitter<QuizConfig>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateQuiz(): void;
    closeConfig(): void;
    addRatioOption(): void;
    removeRatioOption(index: number): void;
    setErrorsMessages(formGroup: FormGroup, formControlMessages: {
        [key: string]: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuizConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuizConfigComponent, "quiz-config", never, { "value": "value"; }, { "quizValue": "quizValue"; }, never, never, true, never>;
}
export {};
//# sourceMappingURL=quiz-config.component.d.ts.map