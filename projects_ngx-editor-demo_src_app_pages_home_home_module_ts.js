"use strict";
(self["webpackChunkngx_editor_demo"] = self["webpackChunkngx_editor_demo"] || []).push([["projects_ngx-editor-demo_src_app_pages_home_home_module_ts"],{

/***/ 6475:
/*!****************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/pages/home/home-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 21044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) {
  return new (t || HomeRoutingModule)();
};
HomeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: HomeRoutingModule
});
HomeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 21044:
/*!***********************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/pages/home/home.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent),
/* harmony export */   "InputData": () => (/* binding */ InputData),
/* harmony export */   "InputData2": () => (/* binding */ InputData2)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-card */ 77315);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);





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
}

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  decls: 13,
  vars: 2,
  consts: [["focusOnNavigation", "", "aria-label", "Get started", "id", "homepage-header", 1, "header-background"], [1, "header-section"], [1, "header-headline"], [1, "header-start"], ["mat-raised-button", "", 3, "click"], [1, "home-main"], [3, "inputData", "requestValue", "valueRequested"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "main", 5)(11, "mat-card")(12, "ngx-editorjs", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueRequested", function HomeComponent_Template_ngx_editorjs_valueRequested_12_listener($event) {
        return ctx.valueRequested($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputData", ctx.inputData)("requestValue", ctx.requestValue);
    }
  },
  dependencies: [_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyAnchor, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_3__.MatLegacyCard, _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_4__.NgxEditorjsComponent],
  styles: [".header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 420px;\n}\n\n.header-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: url('text_fields.svg');\n  background-size: 400px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-repeat: no-repeat;\n  background-position: 80% 20px;\n  opacity: 0.2;\n}\n\n.header-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  text-align: center;\n}\n\n.header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: bold;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n.header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0;\n}\n\n.header-start[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 15px 0 0 0;\n}\n.header-start[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.home-main[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: 75%;\n  max-width: 900px;\n  margin: auto;\n}\n.home-main[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC1lZGl0b3ItZGVtby9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFIRjtBQUtFO0VBQ0UsYUFBQTtBQUhKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1iYWNrZ3JvdW5kIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDQyMHB4O1xufVxuXG4uaGVhZGVyLWJhY2tncm91bmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy90ZXh0X2ZpZWxkcy5zdmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MDBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA4MCUgMjBweDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uaGVhZGVyLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZWFkZXItaGVhZGxpbmUge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMTVweCA1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMjVweCAwO1xuICB9XG59XG5cbi5oZWFkZXItc3RhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweCAwIDAgMDtcblxuICAubWF0LXJhaXNlZC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4uaG9tZS1tYWluIHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDc1JTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxuXG4gIC8vIG5neC1lZGl0b3JqcyB7XG4gIC8vICAgZGlzcGxheTogYmxvY2s7XG4gIC8vICAgbWFyZ2luLXRvcDogNDBweDtcbiAgLy8gfVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 89938:
/*!********************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/pages/home/home.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6475);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 21044);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-card */ 77315);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-client */ 99540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class HomeModule {}
HomeModule.ɵfac = function HomeModule_Factory(t) {
  return new (t || HomeModule)();
};
HomeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: HomeModule
});
HomeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButtonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_6__.NgxEditorjsModule, _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_7__.NgxEditorjsClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent],
    imports: [_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_3__.MatLegacyButtonModule, _angular_material_legacy_card__WEBPACK_IMPORTED_MODULE_4__.MatLegacyCardModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDividerModule, _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_6__.NgxEditorjsModule, _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_7__.NgxEditorjsClientModule]
  });
})();

/***/ }),

/***/ 77315:
/*!*****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/legacy-card.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatLegacyCard": () => (/* binding */ MatLegacyCard),
/* harmony export */   "MatLegacyCardActions": () => (/* binding */ MatLegacyCardActions),
/* harmony export */   "MatLegacyCardAvatar": () => (/* binding */ MatLegacyCardAvatar),
/* harmony export */   "MatLegacyCardContent": () => (/* binding */ MatLegacyCardContent),
/* harmony export */   "MatLegacyCardFooter": () => (/* binding */ MatLegacyCardFooter),
/* harmony export */   "MatLegacyCardHeader": () => (/* binding */ MatLegacyCardHeader),
/* harmony export */   "MatLegacyCardImage": () => (/* binding */ MatLegacyCardImage),
/* harmony export */   "MatLegacyCardLgImage": () => (/* binding */ MatLegacyCardLgImage),
/* harmony export */   "MatLegacyCardMdImage": () => (/* binding */ MatLegacyCardMdImage),
/* harmony export */   "MatLegacyCardModule": () => (/* binding */ MatLegacyCardModule),
/* harmony export */   "MatLegacyCardSmImage": () => (/* binding */ MatLegacyCardSmImage),
/* harmony export */   "MatLegacyCardSubtitle": () => (/* binding */ MatLegacyCardSubtitle),
/* harmony export */   "MatLegacyCardTitle": () => (/* binding */ MatLegacyCardTitle),
/* harmony export */   "MatLegacyCardTitleGroup": () => (/* binding */ MatLegacyCardTitleGroup),
/* harmony export */   "MatLegacyCardXlImage": () => (/* binding */ MatLegacyCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 22560);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 59121);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 * @deprecated Use `MatCardContent` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];
class MatLegacyCardContent {}
MatLegacyCardContent.ɵfac = function MatLegacyCardContent_Factory(t) {
  return new (t || MatLegacyCardContent)();
};
MatLegacyCardContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardContent,
  selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
  hostAttrs: [1, "mat-card-content"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content, [mat-card-content], [matCardContent]',
      host: {
        'class': 'mat-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 * @deprecated Use `MatCardTitle` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardTitle {}
MatLegacyCardTitle.ɵfac = function MatLegacyCardTitle_Factory(t) {
  return new (t || MatLegacyCardTitle)();
};
MatLegacyCardTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-card-title"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 * @deprecated Use `MatCardSubtitle` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardSubtitle {}
MatLegacyCardSubtitle.ɵfac = function MatLegacyCardSubtitle_Factory(t) {
  return new (t || MatLegacyCardSubtitle)();
};
MatLegacyCardSubtitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-card-subtitle"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 * @deprecated Use `MatCardActions` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardActions {
  constructor() {
    /** Position of the actions inside the card. */
    this.align = 'start';
  }
}
MatLegacyCardActions.ɵfac = function MatLegacyCardActions_Factory(t) {
  return new (t || MatLegacyCardActions)();
};
MatLegacyCardActions.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-card-actions"],
  hostVars: 2,
  hostBindings: function MatLegacyCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-card-actions',
        '[class.mat-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 * @deprecated Use `MatCardFooter` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardFooter {}
MatLegacyCardFooter.ɵfac = function MatLegacyCardFooter_Factory(t) {
  return new (t || MatLegacyCardFooter)();
};
MatLegacyCardFooter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-card-footer"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-card-footer'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 * @deprecated Use `MatCardImage` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardImage {}
MatLegacyCardImage.ɵfac = function MatLegacyCardImage_Factory(t) {
  return new (t || MatLegacyCardImage)();
};
MatLegacyCardImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-card-image"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-card-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 * @deprecated Use `MatCardSmImage` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardSmImage {}
MatLegacyCardSmImage.ɵfac = function MatLegacyCardSmImage_Factory(t) {
  return new (t || MatLegacyCardSmImage)();
};
MatLegacyCardSmImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-card-sm-image"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-card-sm-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 * @deprecated Use `MatCardMdImage` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardMdImage {}
MatLegacyCardMdImage.ɵfac = function MatLegacyCardMdImage_Factory(t) {
  return new (t || MatLegacyCardMdImage)();
};
MatLegacyCardMdImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-card-md-image"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-card-md-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 * @deprecated Use `MatCardLgImage` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardLgImage {}
MatLegacyCardLgImage.ɵfac = function MatLegacyCardLgImage_Factory(t) {
  return new (t || MatLegacyCardLgImage)();
};
MatLegacyCardLgImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-card-lg-image"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-card-lg-image'
      }
    }]
  }], null, null);
})();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 * @deprecated Use `MatCardXlImage` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardXlImage {}
MatLegacyCardXlImage.ɵfac = function MatLegacyCardXlImage_Factory(t) {
  return new (t || MatLegacyCardXlImage)();
};
MatLegacyCardXlImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-card-xl-image"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-card-xl-image'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 * @deprecated Use `MatCardAvatar` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardAvatar {}
MatLegacyCardAvatar.ɵfac = function MatLegacyCardAvatar_Factory(t) {
  return new (t || MatLegacyCardAvatar)();
};
MatLegacyCardAvatar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLegacyCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-card-avatar"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-card-avatar'
      }
    }]
  }], null, null);
})();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 *
 * @deprecated Use `MatCard` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCard {
  // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  constructor(_animationMode) {
    this._animationMode = _animationMode;
  }
}
MatLegacyCard.ɵfac = function MatLegacyCard_Factory(t) {
  return new (t || MatLegacyCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};
MatLegacyCard.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatLegacyCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-card", "mat-focus-indicator"],
  hostVars: 2,
  hostBindings: function MatLegacyCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatLegacyCard_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    }
  },
  styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card mat-focus-indicator',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
      styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 * @deprecated Use `MatCardHeader` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardHeader {}
MatLegacyCardHeader.ɵfac = function MatLegacyCardHeader_Factory(t) {
  return new (t || MatLegacyCardHeader)();
};
MatLegacyCardHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatLegacyCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-card-header"],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-card-header-text"]],
  template: function MatLegacyCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
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
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 * @deprecated Use `MatCardTitleGroup` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardTitleGroup {}
MatLegacyCardTitleGroup.ɵfac = function MatLegacyCardTitleGroup_Factory(t) {
  return new (t || MatLegacyCardTitleGroup)();
};
MatLegacyCardTitleGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatLegacyCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-card-title-group"],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 0,
  template: function MatLegacyCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
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
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated Use `MatCardModule` from `@angular/material/card` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
class MatLegacyCardModule {}
MatLegacyCardModule.ɵfac = function MatLegacyCardModule_Factory(t) {
  return new (t || MatLegacyCardModule)();
};
MatLegacyCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatLegacyCardModule
});
MatLegacyCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLegacyCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      exports: [MatLegacyCard, MatLegacyCardHeader, MatLegacyCardTitleGroup, MatLegacyCardContent, MatLegacyCardTitle, MatLegacyCardSubtitle, MatLegacyCardActions, MatLegacyCardFooter, MatLegacyCardSmImage, MatLegacyCardMdImage, MatLegacyCardLgImage, MatLegacyCardImage, MatLegacyCardXlImage, MatLegacyCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      declarations: [MatLegacyCard, MatLegacyCardHeader, MatLegacyCardTitleGroup, MatLegacyCardContent, MatLegacyCardTitle, MatLegacyCardSubtitle, MatLegacyCardActions, MatLegacyCardFooter, MatLegacyCardSmImage, MatLegacyCardMdImage, MatLegacyCardLgImage, MatLegacyCardImage, MatLegacyCardXlImage, MatLegacyCardAvatar]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=projects_ngx-editor-demo_src_app_pages_home_home_module_ts.js.map