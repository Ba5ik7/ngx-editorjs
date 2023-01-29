import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { NgxEditorjsOutputBlock } from 'projects/ngx-editorjs/src/public-api';
import { Subject } from 'rxjs';

export const InputData2: NgxEditorjsOutputBlock[] = [
    {
        "blockId": "iovlbzgosf",
        "sortIndex": 4,
        "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
        "dataClean": "Prerequisites",
        "savedAction": "h1"
    },
    {
        "blockId": "bu23hwyltwl",
        "sortIndex": 5,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators."
    }
];

export const InputData: NgxEditorjsOutputBlock[] = [
    {
      "blockId": "o4zw2xfgze",
      "sortIndex": 0,
      "componentInstanceName": "NgxEditorjsCodeBlockMediator",
      "dataClean": "export class NgxEditorjsCodeBlockComponent extends BaseBlockComponent implements OnInit {\n\n  override useInlineToolbar = false;\n  override useInputType = false;\n\n  _value!: string;\n  theme = 'material';\n\n  override ngOnInit() {\n    this._value = this.value ?? '';\n    super.ngOnInit();\n  }\n\n  onModelChange(value: string): void {\n    this.value = value;\n    this.changeValue(value);\n  }\n}",
      "savedAction": "javascript"
    },
    {
        "blockId": "eftkta822ke",
        "sortIndex": 0,
        "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
        "dataClean": "Property binding best practices",
        "savedAction": "h1"
    },
    {
        "blockId": "3apa0n490qe",
        "sortIndex": 1,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "By following a few guidelines, you can use property binding in a way that helps you minimize bugs and keep your code readable."
    },
    {
        "blockId": "9mpb872e7cc",
        "sortIndex": 2,
        "componentInstanceName": "NgxEditorjsBlockquotesBlockMediator",
        "dataClean": "See the live example / download example for a working example containing the code snippets in this guide."
    },
    {
        "blockId": "mn11fvg3yup",
        "sortIndex": 3,
        "componentInstanceName": "NgxEditorjsImageBlockMediator",
        "dataClean": "{\"url\":\"https://dummyimage.com/640x360/111/FFF\",\"title\":\"Dummy Image\"}",
        "savedAction": "stretch"
    },
    {
        "blockId": "iovlbzgosf",
        "sortIndex": 4,
        "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
        "dataClean": "Prerequisites",
        "savedAction": "h1"
    },
    {
        "blockId": "bu23hwyltwl",
        "sortIndex": 5,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators."
    },
    {
        "blockId": "8u3uiij5vyj",
        "sortIndex": 6,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "<ul><li><a href=\"https://www.typescriptlang.org/\">TypeScript</a> and HTML5 programming</li><li>Angular app-design fundamentals, as described in <a href=\"https://angular.io/guide/architecture\">Angular Concepts</a><br></li><li>The basics of <a href=\"https://angular.io/guide/architecture-components#template-syntax\">Angular template syntax</a><br></li></ul>"
    },
    {
        "blockId": "m34mev3wz4",
        "sortIndex": 7,
        "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
        "dataClean": "Angular's cross-site scripting security model",
        "savedAction": "h2"
    },
    {
        "blockId": "93v1smwlcor",
        "sortIndex": 8,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "If forms are a central part of your application, scalability is very important. Being able to reuse form models across components is critical."
    },
    {
        "blockId": "g4pxsjf1hpl",
        "sortIndex": 9,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "Reactive forms are more scalable than template-driven forms. They provide direct access to the underlying form API, and use <a href=\"https://angular.io/guide/forms-overview#data-flow-in-reactive-forms\">synchronous data flow</a> between the view and the data model, which makes creating large-scale forms easier. Reactive forms require less setup for testing, and testing does not require deep understanding of change detection to properly test form updates and validation."
    },
    {
        "blockId": "iskoif6yybq",
        "sortIndex": 10,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "Template-driven forms focus on simple scenarios and are not as reusable. They abstract away the underlying form API, and use <a href=\"https://angular.io/guide/forms-overview#data-flow-in-template-driven-forms\">asynchronous data flow</a> between the view and the data model. The abstraction of template-driven forms also affects testing. Tests are deeply reliant on manual change detection execution to run properly, and require more setup."
    },
    {
        "blockId": "i8pbm4oe69",
        "sortIndex": 11,
        "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
        "dataClean": "Setup in reactive forms&nbsp;",
        "savedAction": "h2"
    },
    {
        "blockId": "27grke2t0xn",
        "sortIndex": 12,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "With reactive forms, you define the form model directly in the component class. The [formControl] directive links the explicitly created <code _ngcontent-jwe-c114=\"\" class=\"inline-code-example\"><a href=\"https://angular.io/api/forms/FormControl\">FormControl</a></code> instance to a specific form element in the view, using an internal value accessor."
    },
    {
        "blockId": "5syss70ry1t",
        "sortIndex": 13,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "The following component implements an input field for a single control, using reactive forms. In this example, the form model is the <code _ngcontent-jwe-c114=\"\" class=\"inline-code-example\"><a href=\"https://angular.io/api/forms/FormControl\">FormControl</a></code> instance."
    },
    {
        "blockId": "7lj3xcgtnnw",
        "sortIndex": 14,
        "componentInstanceName": "NgxEditorjsImageBlockMediator",
        "dataClean": "{\"url\":\"https://picsum.photos/id/640/360/300\",\"title\":\"test\"}",
        "savedAction": "flex-end"
    }
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  requestValue = new Subject<boolean>();
  inputData!: NgxEditorjsOutputBlock[]

  // ngxOnInitForm(ngxEditorjsFormGroup: any): void {
    // ngxEditorjsFormGroup.valueChanges
    // .subscribe((value: FormGroup) => console.log({ value }));
  // }

  ngOnInit(): void {
    this.inputData = InputData;
    // setTimeout(() => {
    //   this.inputData = InputData2;
    // }, 1000);
  }

  getValue(): void {
    this.requestValue.next(true);
  }

  valueRequested(value: any): void {
    setTimeout(() => {
        console.log({ value });
        this.inputData = value;
    }, 3000);
  }
}

