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
    },
    {
        "blockId": "bu23hwyltwl",
        "sortIndex": 6,
        "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
        "dataClean": "Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators."
    }
];

export const InputData: NgxEditorjsOutputBlock[] = [
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
      "dataClean": "<div style=\"text-align: left;\"><span style=\"font-size: 1.6rem;\">Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators.</span></div>"
  },
  {
      "blockId": "8u3uiij5vyj",
      "sortIndex": 6,
      "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "<ul><li><a href=\"https://www.typescriptlang.org/\">TypeScript</a> and HTML5 programming</li><li>Angular app-design fundamentals, as described in <a href=\"https://angular.io/guide/architecture\">Angular Concepts</a><br></li><li>The basics of <a href=\"https://angular.io/guide/architecture-components#template-syntax\">Angular template syntax</a><br></li></ul>"
  },
  {
      "blockId": "878hfvhbre5",
      "sortIndex": 7,
      "componentInstanceName": "NgxEditorjsBlockquotesBlockMediator",
      "dataClean": "Use the options object to configure various other aspects of an outgoing request. In Adding headers, for example, the service set the default headers using the headers option property.<div><br></div><div>Use the params property to configure a request with HTTP URL parameters, and the reportProgress option to listen for progress events when transferring large amounts of data.</div>"
  },
  {
      "blockId": "m34mev3wz4",
      "sortIndex": 8,
      "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
      "dataClean": "Angular's cross-site scripting security model",
      "savedAction": "h2"
  },
  {
      "blockId": "93v1smwlcor",
      "sortIndex": 9,
      "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "If forms are a central part of your application, scalability is very important. Being able to reuse form models across components is critical."
  },
  {
      "blockId": "g4pxsjf1hpl",
      "sortIndex": 11,
      "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "Reactive forms are more scalable than template-driven forms. They provide direct access to the underlying form API, and use <a href=\"https://angular.io/guide/forms-overview#data-flow-in-reactive-forms\">synchronous data flow</a> between the view and the data model, which makes creating large-scale forms easier. Reactive forms require less setup for testing, and testing does not require deep understanding of change detection to properly test form updates and validation."
  },
  {
      "blockId": "b3yosua186n",
      "sortIndex": 12,
      "componentInstanceName": "NgxEditorjsMermaidBlockMediator",
      "dataClean": "sequenceDiagram\n    autonumber\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!",
      "savedAction": "center"
  },
  {
      "blockId": "iskoif6yybq",
      "sortIndex": 13,
      "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "Template-driven forms focus on simple scenarios and are not as reusable. They abstract away the underlying form API, and use <a href=\"https://angular.io/guide/forms-overview#data-flow-in-template-driven-forms\">asynchronous data flow</a> between the view and the data model. The abstraction of template-driven forms also affects testing. Tests are deeply reliant on manual change detection execution to run properly, and require more setup."
  },
  {
      "blockId": "i8pbm4oe69",
      "sortIndex": 14,
      "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
      "dataClean": "Setup in reactive forms&nbsp;",
      "savedAction": "h2"
  },
  {
      "blockId": "27grke2t0xn",
      "sortIndex": 15,
      "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "With reactive forms, you define the form model directly in the component class. The [formControl] directive links the explicitly created <code _ngcontent-jwe-c114=\"\" class=\"inline-code-example\"><a href=\"https://angular.io/api/forms/FormControl\">FormControl</a></code> instance to a specific form element in the view, using an internal value accessor."
  },
  {
      "blockId": "o4zw2xfgze",
      "sortIndex": 16,
      "componentInstanceName": "NgxEditorjsQuizBlockMediator",
      "dataClean": "{\"question\":\"Which of the following statements is true about Angular's default RouteReuseStrategy?\",\"correctAnswer\":\"It reuses components when the route configuration remains the same.\",\"correctAnswerResponse\":\"That's correct! Angular's default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.\",\"incorrectAnswerResponse\":\"That's incorrect. The correct answer is C. Angular's default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.\",\"ratioOptions\":[{\"value\":\"It only reuses components when the route configuration changes.\"},{\"value\":\"It only reuses components when the route parameters change.\"},{\"value\":\"It reuses components when the route configuration remains the same.\"},{\"value\":\"It never reuses components.\"}]}",
      "savedAction": "quiz-hard_o_O!"
  },
  {
      "blockId": "5syss70ry1t",
      "sortIndex": 17,
      "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
      "dataClean": "The following component implements an input field for a single control, using reactive forms. In this example, the form model is the <code _ngcontent-jwe-c114=\"\" class=\"inline-code-example\"><a href=\"https://angular.io/api/forms/FormControl\">FormControl</a></code> instance."
  },
  {
      "blockId": "607f6g41ysf",
      "sortIndex": 10,
      "componentInstanceName": "NgxEditorjsCodeBlockMediator",
      "dataClean": "const safeParse = (json: string) => {\n  try {\n    return JSON.parse(json);\n  } catch (error) {\n    throw new Error('Error parsing JSON');\n  }\n}",
      "savedAction": "text/typescript"
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
    this.inputData = InputData2;
    // setTimeout(() => {
    //   this.inputData = InputData2;
    // }, 1000);
  }

  getValue(): void {
    this.requestValue.next(true);
  }

  valueRequested(value: any): void {
    console.log({ value });
    // setTimeout(() => {
    //     console.log({ value });
    //     this.inputData = value;
    // }, 3000);
  }
}

