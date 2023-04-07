import { EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
    value: {
        question: string;
        correctAnswer: string;
    };
    quizValue: EventEmitter<{
        question: string;
        correctAnswer: string;
    }>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    updateImage(): void;
    closeConfig(): void;
    get ratioOptions(): FormArray;
    addRatioOption(): void;
    removeRatioOption(index: number): void;
    setErrorsMessages(formGroup: FormGroup, formControlMessages: {
        [key: string]: string;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuizConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuizConfigComponent, "quiz-config", never, { "value": "value"; }, { "quizValue": "quizValue"; }, never, never, true, never>;
}
//# sourceMappingURL=quiz-config.component.d.ts.map