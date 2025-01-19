"use strict";
(self["webpackChunkngx_editor_demo"] = self["webpackChunkngx_editor_demo"] || []).push([["projects_ngx-editor-demo_src_app_pages_home_home_module_ts"],{

/***/ 10057:
/*!****************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/pages/home/home-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 26320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 26320:
/*!***********************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/pages/home/home.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent),
/* harmony export */   InputData: () => (/* binding */ InputData),
/* harmony export */   InputData2: () => (/* binding */ InputData2)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 18497);
/* harmony import */ var _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-client */ 66826);





const InputData2 = [{
  "blockId": "iovlbzgosf",
  "sortIndex": 4,
  "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
  "dataClean": "Prerequisites",
  "savedAction": "h1"
}, {
  "blockId": "bu23hwyltwl",
  "sortIndex": 5,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators."
}];
const InputData = [{
  "blockId": "eftkta822ke",
  "sortIndex": 0,
  "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
  "dataClean": "Property binding best practices",
  "savedAction": "h1"
}, {
  "blockId": "3apa0n490qe",
  "sortIndex": 1,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "By following a few guidelines, you can use property binding in a way that helps you minimize bugs and keep your code readable."
}, {
  "blockId": "9mpb872e7cc",
  "sortIndex": 2,
  "componentInstanceName": "NgxEditorjsBlockquotesBlockMediator",
  "dataClean": "See the live example / download example for a working example containing the code snippets in this guide."
}, {
  "blockId": "mn11fvg3yup",
  "sortIndex": 3,
  "componentInstanceName": "NgxEditorjsImageBlockMediator",
  "dataClean": "{\"url\":\"https://dummyimage.com/640x360/111/FFF\",\"title\":\"Dummy Image\"}",
  "savedAction": "stretch"
}, {
  "blockId": "iovlbzgosf",
  "sortIndex": 4,
  "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
  "dataClean": "Prerequisites",
  "savedAction": "h1"
}, {
  "blockId": "bu23hwyltwl",
  "sortIndex": 5,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "<div style=\"text-align: left;\"><span style=\"font-size: 1.6rem;\">Evaluation of a template expression should have no visible side effects. Use the syntax for template expressions to help avoid side effects. In general, the correct syntax prevents you from assigning a value to anything in a property binding expression. The syntax also prevents you from using increment and decrement operators.</span></div>"
}, {
  "blockId": "8u3uiij5vyj",
  "sortIndex": 6,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "<ul><li><a href=\"https://www.typescriptlang.org/\">TypeScript</a> and HTML5 programming</li><li>Angular app-design fundamentals, as described in <a href=\"https://angular.io/guide/architecture\">Angular Concepts</a><br></li><li>The basics of <a href=\"https://angular.io/guide/architecture-components#template-syntax\">Angular template syntax</a><br></li></ul>"
}, {
  "blockId": "878hfvhbre5",
  "sortIndex": 7,
  "componentInstanceName": "NgxEditorjsBlockquotesBlockMediator",
  "dataClean": "Use the options object to configure various other aspects of an outgoing request. In Adding headers, for example, the service set the default headers using the headers option property.<div><br></div><div>Use the params property to configure a request with HTTP URL parameters, and the reportProgress option to listen for progress events when transferring large amounts of data.</div>"
}, {
  "blockId": "m34mev3wz4",
  "sortIndex": 8,
  "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
  "dataClean": "Angular's cross-site scripting security model",
  "savedAction": "h2"
}, {
  "blockId": "93v1smwlcor",
  "sortIndex": 9,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "If forms are a central part of your application, scalability is very important. Being able to reuse form models across components is critical."
}, {
  "blockId": "g4pxsjf1hpl",
  "sortIndex": 11,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "Reactive forms are more scalable than template-driven forms. They provide direct access to the underlying form API, and use <a href=\"https://angular.io/guide/forms-overview#data-flow-in-reactive-forms\">synchronous data flow</a> between the view and the data model, which makes creating large-scale forms easier. Reactive forms require less setup for testing, and testing does not require deep understanding of change detection to properly test form updates and validation."
}, {
  "blockId": "b3yosua186n",
  "sortIndex": 12,
  "componentInstanceName": "NgxEditorjsMermaidBlockMediator",
  "dataClean": "sequenceDiagram\n    autonumber\n    Alice->>John: Hello John, how are you?\n    loop Healthcheck\n        John->>John: Fight against hypochondria\n    end\n    Note right of John: Rational thoughts!\n    John-->>Alice: Great!\n    John->>Bob: How about you?\n    Bob-->>John: Jolly good!",
  "savedAction": "center"
}, {
  "blockId": "iskoif6yybq",
  "sortIndex": 13,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "Template-driven forms focus on simple scenarios and are not as reusable. They abstract away the underlying form API, and use <a href=\"https://angular.io/guide/forms-overview#data-flow-in-template-driven-forms\">asynchronous data flow</a> between the view and the data model. The abstraction of template-driven forms also affects testing. Tests are deeply reliant on manual change detection execution to run properly, and require more setup."
}, {
  "blockId": "i8pbm4oe69",
  "sortIndex": 14,
  "componentInstanceName": "NgxEditorjsHeaderBlockMediator",
  "dataClean": "Setup in reactive forms&nbsp;",
  "savedAction": "h2"
}, {
  "blockId": "27grke2t0xn",
  "sortIndex": 15,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "With reactive forms, you define the form model directly in the component class. The [formControl] directive links the explicitly created <code _ngcontent-jwe-c114=\"\" class=\"inline-code-example\"><a href=\"https://angular.io/api/forms/FormControl\">FormControl</a></code> instance to a specific form element in the view, using an internal value accessor."
}, {
  "blockId": "o4zw2xfgze",
  "sortIndex": 16,
  "componentInstanceName": "NgxEditorjsQuizBlockMediator",
  "dataClean": "{\"question\":\"Which of the following statements is true about Angular's default RouteReuseStrategy?\",\"correctAnswer\":\"It reuses components when the route configuration remains the same.\",\"correctAnswerResponse\":\"That's correct! Angular's default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.\",\"incorrectAnswerResponse\":\"That's incorrect. The correct answer is C. Angular's default RouteReuseStrategy reuses components when the route configuration remains the same. This prevents components from being destroyed and recreated when only the fragment or query parameters change.\",\"ratioOptions\":[{\"value\":\"It only reuses components when the route configuration changes.\"},{\"value\":\"It only reuses components when the route parameters change.\"},{\"value\":\"It reuses components when the route configuration remains the same.\"},{\"value\":\"It never reuses components.\"}]}",
  "savedAction": "quiz-hard_o_O!"
}, {
  "blockId": "5syss70ry1t",
  "sortIndex": 17,
  "componentInstanceName": "NgxEditorjsParagraphBlockMediator",
  "dataClean": "The following component implements an input field for a single control, using reactive forms. In this example, the form model is the <code _ngcontent-jwe-c114=\"\" class=\"inline-code-example\"><a href=\"https://angular.io/api/forms/FormControl\">FormControl</a></code> instance."
}, {
  "blockId": "607f6g41ysf",
  "sortIndex": 10,
  "componentInstanceName": "NgxEditorjsCodeBlockMediator",
  "dataClean": "const safeParse = (json: string) => {\n  try {\n    return JSON.parse(json);\n  } catch (error) {\n    throw new Error('Error parsing JSON');\n  }\n}",
  "savedAction": "text/typescript"
}];
class HomeComponent {
  constructor() {
    this.requestValue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  // ngxOnInitForm(ngxEditorjsFormGroup: any): void {
  // ngxEditorjsFormGroup.valueChanges
  // .subscribe((value: FormGroup) => console.log({ value }));
  // }
  ngOnInit() {
    this.inputData = InputData;
    // setTimeout(() => {
    //   this.inputData = InputData2;
    // }, 1000);
  }

  getValue() {
    this.requestValue.next(true);
  }
  valueRequested(value) {
    console.log({
      value
    });
    // setTimeout(() => {
    //     console.log({ value });
    //     this.inputData = value;
    // }, 3000);
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 13,
    vars: 1,
    consts: [["focusOnNavigation", "", "aria-label", "Get started", "id", "homepage-header", 1, "header-background"], [1, "header-section"], [1, "header-headline"], [1, "header-start"], ["mat-raised-button", "", 3, "click"], [1, "home-main"], ["appearance", "outlined"], [3, "inputData"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ngx EditorJs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "A Custom Themeable Angular Material Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3)(8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() {
          return ctx.getValue();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Save Blocks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "main", 5)(11, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngx-editorjs-client", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputData", ctx.inputData);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_4__.NgxEditorjsClientComponent],
    styles: [".header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 420px;\n}\n\n.header-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: url('text_fields.svg');\n  background-size: 400px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-repeat: no-repeat;\n  background-position: 80% 20px;\n  opacity: 0.2;\n}\n\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  text-align: center;\n}\n\n.header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: bold;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n.header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0;\n}\n\n.header-start[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 15px 0 0 0;\n}\n.header-start[_ngcontent-%COMP%]   .mat-mdc-raised-button[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotateY(45deg);\n  }\n  to {\n    transform: rotateY(0deg);\n  }\n}\n.home-main[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: 75%;\n  max-width: 900px;\n  margin: auto;\n  perspective: 2500px;\n  position: relative;\n}\n.home-main[_ngcontent-%COMP%]   .mat-mdc-card[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC1lZGl0b3ItZGVtby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtBQUZKOztBQU1BO0VBQ0U7SUFBTyx5QkFBQTtFQUZQO0VBR0E7SUFBSyx3QkFBQTtFQUFMO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQURGO0FBT0U7RUFDRSxhQUFBO0FBTEoiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJhY2tncm91bmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDIwcHg7XG59XG5cbi5oZWFkZXItYmFja2dyb3VuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL3RleHRfZmllbGRzLnN2ZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDgwJSAyMHB4O1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5oZWFkZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhlYWRlci1oZWFkbGluZSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDU2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiAxNXB4IDVweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDE1cHggMCAyNXB4IDA7XG4gIH1cbn1cblxuLmhlYWRlci1zdGFydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuXG4gIC5tYXQtbWRjLXJhaXNlZC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZVkoNDVkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpOyB9XG59XG5cbi5ob21lLW1haW4ge1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogNzUlO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBlcnNwZWN0aXZlOiAyNTAwcHg7XG4gIFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vISBtYXQtY2FyZCB7XG4gIC8vISAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8hICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xuICAvLyEgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAvLyEgfVxuICAubWF0LW1kYy1jYXJkIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG5cbiAgLy8gbmd4LWVkaXRvcmpzIHtcbiAgLy8gICBkaXNwbGF5OiBibG9jaztcbiAgLy8gICBtYXJnaW4tdG9wOiA0MHB4O1xuICAvLyB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 29781:
/*!********************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/pages/home/home.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 10057);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 26320);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 18497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 34690);
/* harmony import */ var _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-client */ 66826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);








class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_6__.NgxEditorjsModule, _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_7__.NgxEditorjsClientModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_6__.NgxEditorjsModule, _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_7__.NgxEditorjsClientModule]
  });
})();

/***/ }),

/***/ 18497:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CARD_CONFIG: () => (/* binding */ MAT_CARD_CONFIG),
/* harmony export */   MatCard: () => (/* binding */ MatCard),
/* harmony export */   MatCardActions: () => (/* binding */ MatCardActions),
/* harmony export */   MatCardAvatar: () => (/* binding */ MatCardAvatar),
/* harmony export */   MatCardContent: () => (/* binding */ MatCardContent),
/* harmony export */   MatCardFooter: () => (/* binding */ MatCardFooter),
/* harmony export */   MatCardHeader: () => (/* binding */ MatCardHeader),
/* harmony export */   MatCardImage: () => (/* binding */ MatCardImage),
/* harmony export */   MatCardLgImage: () => (/* binding */ MatCardLgImage),
/* harmony export */   MatCardMdImage: () => (/* binding */ MatCardMdImage),
/* harmony export */   MatCardModule: () => (/* binding */ MatCardModule),
/* harmony export */   MatCardSmImage: () => (/* binding */ MatCardSmImage),
/* harmony export */   MatCardSubtitle: () => (/* binding */ MatCardSubtitle),
/* harmony export */   MatCardTitle: () => (/* binding */ MatCardTitle),
/* harmony export */   MatCardTitleGroup: () => (/* binding */ MatCardTitleGroup),
/* harmony export */   MatCardXlImage: () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 55309);





/** Injection token that can be used to provide the default options the card module. */
const _c0 = ["*"];
const _c1 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["", "mat-card-image", ""], ["", "matCardImage", ""], ["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""], ["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""], ["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""], ["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]], "*"];
const _c2 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]", "*"];
const _c3 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c4 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const MAT_CARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_CARD_CONFIG');
/**
 * Material Design card component. Cards contain content and actions about a single subject.
 * See https://material.io/design/components/cards.html
 *
 * MatCard provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCard {
  constructor(config) {
    this.appearance = config?.appearance || 'raised';
  }
  static #_ = this.ɵfac = function MatCard_Factory(t) {
    return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CARD_CONFIG, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCard,
    selectors: [["mat-card"]],
    hostAttrs: [1, "mat-mdc-card", "mdc-card"],
    hostVars: 4,
    hostBindings: function MatCard_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-outlined", ctx.appearance === "outlined")("mdc-card--outlined", ctx.appearance === "outlined");
      }
    },
    inputs: {
      appearance: "appearance"
    },
    exportAs: ["matCard"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatCard_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      host: {
        'class': 'mat-mdc-card mdc-card',
        '[class.mat-mdc-card-outlined]': 'appearance === "outlined"',
        '[class.mdc-card--outlined]': 'appearance === "outlined"'
      },
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>\n",
      styles: [".mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:\"\"}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [MAT_CARD_CONFIG]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
// TODO(jelbourn): add `MatActionCard`, which is a card that acts like a button (and has a ripple).
// Supported in MDC with `.mdc-card__primary-action`. Will require additional a11y docs for users.
/**
 * Title of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for one variety of card title; any custom title element may be used in its place.
 *
 * MatCardTitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardTitle {
  static #_ = this.ɵfac = function MatCardTitle_Factory(t) {
    return new (t || MatCardTitle)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardTitle,
    selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
    hostAttrs: [1, "mat-mdc-card-title"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-mdc-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Container intended to be used within the `<mat-card>` component. Can contain exactly one
 * `<mat-card-title>`, one `<mat-card-subtitle>` and one content image of any size
 * (e.g. `<img matCardLgImage>`).
 */
class MatCardTitleGroup {
  static #_ = this.ɵfac = function MatCardTitleGroup_Factory(t) {
    return new (t || MatCardTitleGroup)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardTitleGroup,
    selectors: [["mat-card-title-group"]],
    hostAttrs: [1, "mat-mdc-card-title-group"],
    ngContentSelectors: _c2,
    decls: 4,
    vars: 0,
    template: function MatCardTitleGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"[mat-card-image], [matCardImage],\n                    [mat-card-sm-image], [matCardImageSmall],\n                    [mat-card-md-image], [matCardImageMedium],\n                    [mat-card-lg-image], [matCardImageLarge],\n                    [mat-card-xl-image], [matCardImageXLarge]\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Content of a card, intended for use within `<mat-card>`. This component is an optional
 * convenience for use with other convenience elements, such as `<mat-card-title>`; any custom
 * content block element may be used in its place.
 *
 * MatCardContent provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardContent {
  static #_ = this.ɵfac = function MatCardContent_Factory(t) {
    return new (t || MatCardContent)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardContent,
    selectors: [["mat-card-content"]],
    hostAttrs: [1, "mat-mdc-card-content"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content',
      host: {
        'class': 'mat-mdc-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, intended for use within `<mat-card>` beneath a `<mat-card-title>`. This
 * component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`.
 *
 * MatCardSubtitle provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardSubtitle {
  static #_ = this.ɵfac = function MatCardSubtitle_Factory(t) {
    return new (t || MatCardSubtitle)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSubtitle,
    selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
    hostAttrs: [1, "mat-mdc-card-subtitle"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-mdc-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Bottom area of a card that contains action buttons, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom action block element may be used in its place.
 *
 * MatCardActions provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardActions {
  constructor() {
    // TODO(jelbourn): deprecate `align` in favor of `actionPosition` or `actionAlignment`
    // as to not conflict with the native `align` attribute.
    /** Position of the actions inside the card. */
    this.align = 'start';
  }
  static #_ = this.ɵfac = function MatCardActions_Factory(t) {
    return new (t || MatCardActions)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardActions,
    selectors: [["mat-card-actions"]],
    hostAttrs: [1, "mat-mdc-card-actions", "mdc-card__actions"],
    hostVars: 2,
    hostBindings: function MatCardActions_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-card-actions-align-end", ctx.align === "end");
      }
    },
    inputs: {
      align: "align"
    },
    exportAs: ["matCardActions"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-mdc-card-actions mdc-card__actions',
        '[class.mat-mdc-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Header region of a card, intended for use within `<mat-card>`. This header captures
 * a card title, subtitle, and avatar.  This component is an optional convenience for use with
 * other convenience elements, such as `<mat-card-footer>`; any custom header block element may be
 * used in its place.
 *
 * MatCardHeader provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardHeader {
  static #_ = this.ɵfac = function MatCardHeader_Factory(t) {
    return new (t || MatCardHeader)();
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MatCardHeader,
    selectors: [["mat-card-header"]],
    hostAttrs: [1, "mat-mdc-card-header"],
    ngContentSelectors: _c4,
    decls: 4,
    vars: 0,
    consts: [[1, "mat-mdc-card-header-text"]],
    template: function MatCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-mdc-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-mdc-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Footer area a card, intended for use within `<mat-card>`.
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom footer block element may be used in its place.
 *
 * MatCardFooter provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardFooter {
  static #_ = this.ɵfac = function MatCardFooter_Factory(t) {
    return new (t || MatCardFooter)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardFooter,
    selectors: [["mat-card-footer"]],
    hostAttrs: [1, "mat-mdc-card-footer"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-mdc-card-footer'
      }
    }]
  }], null, null);
})();
// TODO(jelbourn): deprecate the "image" selectors to replace with "media".
// TODO(jelbourn): support `.mdc-card__media-content`.
/**
 * Primary image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-content>`; any custom media element may be used in its place.
 *
 * MatCardImage provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardImage {
  static #_ = this.ɵfac = function MatCardImage_Factory(t) {
    return new (t || MatCardImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardImage,
    selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
    hostAttrs: [1, "mat-mdc-card-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-mdc-card-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but small. */
class MatCardSmImage {
  static #_ = this.ɵfac = function MatCardSmImage_Factory(t) {
    return new (t || MatCardSmImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardSmImage,
    selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
    hostAttrs: [1, "mat-mdc-card-sm-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-mdc-card-sm-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but medium. */
class MatCardMdImage {
  static #_ = this.ɵfac = function MatCardMdImage_Factory(t) {
    return new (t || MatCardMdImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardMdImage,
    selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
    hostAttrs: [1, "mat-mdc-card-md-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-mdc-card-md-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but large. */
class MatCardLgImage {
  static #_ = this.ɵfac = function MatCardLgImage_Factory(t) {
    return new (t || MatCardLgImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardLgImage,
    selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-lg-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-mdc-card-lg-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/** Same as `MatCardImage`, but extra-large. */
class MatCardXlImage {
  static #_ = this.ɵfac = function MatCardXlImage_Factory(t) {
    return new (t || MatCardXlImage)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardXlImage,
    selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
    hostAttrs: [1, "mat-mdc-card-xl-image", "mdc-card__media"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-mdc-card-xl-image mdc-card__media'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image content for a card, intended for use within `<mat-card>`. Can be applied to
 * any media element, such as `<img>` or `<picture>`.
 *
 * This component is an optional convenience for use with other convenience elements, such as
 * `<mat-card-title>`; any custom media element may be used in its place.
 *
 * MatCardAvatar provides no behaviors, instead serving as a purely visual treatment.
 */
class MatCardAvatar {
  static #_ = this.ɵfac = function MatCardAvatar_Factory(t) {
    return new (t || MatCardAvatar)();
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: MatCardAvatar,
    selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
    hostAttrs: [1, "mat-mdc-card-avatar"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-mdc-card-avatar'
      }
    }]
  }], null, null);
})();
const CARD_DIRECTIVES = [MatCard, MatCardActions, MatCardAvatar, MatCardContent, MatCardFooter, MatCardHeader, MatCardImage, MatCardLgImage, MatCardMdImage, MatCardSmImage, MatCardSubtitle, MatCardTitle, MatCardTitleGroup, MatCardXlImage];
class MatCardModule {
  static #_ = this.ɵfac = function MatCardModule_Factory(t) {
    return new (t || MatCardModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: MatCardModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      exports: [CARD_DIRECTIVES, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: CARD_DIRECTIVES
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=projects_ngx-editor-demo_src_app_pages_home_home_module_ts.js.map