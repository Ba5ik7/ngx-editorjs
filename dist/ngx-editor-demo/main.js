"use strict";
(self["webpackChunkngx_editor_demo"] = self["webpackChunkngx_editor_demo"] || []).push([["main"],{

/***/ 40058:
/*!****************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/app-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



const routes = [{
  path: '',
  pathMatch: 'full',
  loadChildren: () => __webpack_require__.e(/*! import() */ "projects_ngx-editor-demo_src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 89938)).then(m => m.HomeModule)
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 68429:
/*!***********************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/app.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 61109);



class AppComponent {
  constructor() {
    this.title = 'demo';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["demo-app"]],
  decls: 2,
  vars: 0,
  consts: [[1, "mat-elevation-z6"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar", 0)(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
  styles: ["demo-app[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n\nnavbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC1lZGl0b3ItZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJkZW1vLWFwcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbm5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 77968:
/*!********************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/app.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 40058);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 68429);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navbar.module */ 74350);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-client */ 99540);
/* harmony import */ var _tmdjr_ngx_editorjs_paragraph_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-paragraph-block */ 58968);
/* harmony import */ var _tmdjr_ngx_editorjs_blockquotes_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-blockquotes-block */ 48664);
/* harmony import */ var _tmdjr_ngx_editorjs_image_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-image-block */ 29230);
/* harmony import */ var _tmdjr_ngx_editorjs_code_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-code-block */ 79349);
/* harmony import */ var _tmdjr_ngx_editorjs_quiz_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-quiz-block */ 34744);
/* harmony import */ var _tmdjr_ngx_editorjs_mermaid_block__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tmdjr/ngx-editorjs-mermaid-block */ 37787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_4__.NGX_EDITORJS_OPTIONS,
    useValue: {
      blocks: [{
        name: 'Paragraph',
        component: _tmdjr_ngx_editorjs_paragraph_block__WEBPACK_IMPORTED_MODULE_5__.NgxEditorjsParagraphBlockMediator,
        componentInstanceName: 'NgxEditorjsParagraphBlockMediator'
      }, {
        name: 'Blockquotes',
        component: _tmdjr_ngx_editorjs_blockquotes_block__WEBPACK_IMPORTED_MODULE_6__.NgxEditorjsBlockquotesBlockMediator,
        componentInstanceName: 'NgxEditorjsBlockquotesBlockMediator'
      }, {
        name: 'Image',
        component: _tmdjr_ngx_editorjs_image_block__WEBPACK_IMPORTED_MODULE_7__.NgxEditorjsImageBlockMediator,
        componentInstanceName: 'NgxEditorjsImageBlockMediator'
      }, {
        name: 'Code',
        component: _tmdjr_ngx_editorjs_code_block__WEBPACK_IMPORTED_MODULE_8__.NgxEditorjsCodeBlockMediator,
        componentInstanceName: 'NgxEditorjsCodeBlockMediator'
      }, {
        name: 'Quiz',
        component: _tmdjr_ngx_editorjs_quiz_block__WEBPACK_IMPORTED_MODULE_9__.NgxEditorjsQuizBlockMediator,
        componentInstanceName: 'NgxEditorjsQuizBlockMediator'
      }, {
        name: 'Mermaid',
        component: _tmdjr_ngx_editorjs_mermaid_block__WEBPACK_IMPORTED_MODULE_10__.NgxEditorjsMermaidBlockMediator,
        componentInstanceName: 'NgxEditorjsMermaidBlockMediator'
      }]
    }
  }, {
    provide: _tmdjr_ngx_editorjs_client__WEBPACK_IMPORTED_MODULE_11__.NGX_EDITORJS_CLIENT_OPTIONS,
    useValue: {
      blocks: [{
        name: 'Paragraph',
        component: _tmdjr_ngx_editorjs_paragraph_block__WEBPACK_IMPORTED_MODULE_5__.NgxEditorjsParagraphClientBlockComponent,
        componentInstanceName: 'NgxEditorjsParagraphBlockMediator'
      }, {
        name: 'Blockquotes',
        component: _tmdjr_ngx_editorjs_blockquotes_block__WEBPACK_IMPORTED_MODULE_6__.NgxEditorjsBlockquotesClientBlockComponent,
        componentInstanceName: 'NgxEditorjsBlockquotesBlockMediator'
      }, {
        name: 'Image',
        component: _tmdjr_ngx_editorjs_image_block__WEBPACK_IMPORTED_MODULE_7__.NgxEditorjsImageClientBlockComponent,
        componentInstanceName: 'NgxEditorjsImageBlockMediator'
      }, {
        name: 'Code',
        component: _tmdjr_ngx_editorjs_code_block__WEBPACK_IMPORTED_MODULE_8__.NgxEditorjsCodeClientBlockComponent,
        componentInstanceName: 'NgxEditorjsCodeBlockMediator'
      }, {
        name: 'Quiz',
        component: _tmdjr_ngx_editorjs_quiz_block__WEBPACK_IMPORTED_MODULE_9__.NgxEditorjsQuizClientBlockComponent,
        componentInstanceName: 'NgxEditorjsQuizBlockMediator'
      }, {
        name: 'Quiz',
        component: _tmdjr_ngx_editorjs_mermaid_block__WEBPACK_IMPORTED_MODULE_10__.NgxEditorjsMermaidClientBlockComponent,
        componentInstanceName: 'NgxEditorjsMermaidBlockMediator'
      }]
    }
  }],
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__.MatLegacyButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_15__.MatLegacyButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_2__.NavbarModule]
  });
})();

/***/ }),

/***/ 61109:
/*!********************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/components/navbar/navbar.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../theme-picker/theme-picker.component */ 79162);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);




class NavbarComponent {
  constructor() {}
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["navbar"]],
  decls: 8,
  vars: 0,
  consts: [[1, "navbar-header"], ["mat-button", "", "routerLink", "/"], [1, "workshop-logo"], [1, "flex-spacer"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "a", 1)(2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "format_size");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ngx EditorJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 3)(7, "theme-picker");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_theme_picker_theme_picker_component__WEBPACK_IMPORTED_MODULE_0__.ThemePickerComponent, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.MatLegacyAnchor, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: [".navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  padding: 8px 16px;\n}\n\n.workshop-logo[_ngcontent-%COMP%] {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC1lZGl0b3ItZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cblxuLndvcmtzaG9wLWxvZ28ge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMCA0cHggM3B4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 74350:
/*!*****************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/components/navbar/navbar.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": () => (/* binding */ NavbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 61109);
/* harmony import */ var _theme_picker_theme_picker_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme-picker/theme-picker.module */ 17734);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);






class NavbarModule {}
NavbarModule.ɵfac = function NavbarModule_Factory(t) {
  return new (t || NavbarModule)();
};
NavbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NavbarModule
});
NavbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _theme_picker_theme_picker_module__WEBPACK_IMPORTED_MODULE_1__.ThemePickerModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NavbarModule, {
    declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _theme_picker_theme_picker_module__WEBPACK_IMPORTED_MODULE_1__.ThemePickerModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule],
    exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent]
  });
})();

/***/ }),

/***/ 79162:
/*!********************************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/components/theme-picker/theme-picker.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemePickerComponent": () => (/* binding */ ThemePickerComponent)
/* harmony export */ });
/* harmony import */ var _theme_picker_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-picker.service */ 25449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 63370);









const _c0 = function (a0) {
  return {
    "docs-theme-selected-icon": a0
  };
};
function ThemePickerComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThemePickerComponent_button_5_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const theme_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.selectTheme(theme_r2.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const theme_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r1.currentTheme === theme_r2.key))("color", ctx_r1.currentTheme === theme_r2.key ? "accent" : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.currentTheme === theme_r2.key ? "radio_button_checked" : "radio_button_unchecked", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](theme_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("theme-example-icon " + theme_r2.key);
  }
}
class ThemePickerComponent {
  constructor(themePickerService, iconRegistry, sanitizer) {
    this.themePickerService = themePickerService;
    this.themes = new Map([['deeppurple-amber', 'Deep Purple & Amber'], ['indigo-pink', 'Indigo & Pink'], ['pink-bluegrey', 'Pink & Blue-grey'], ['purple-green', 'Purple & Green']]);
    const themeExampleIconURL = sanitizer.bypassSecurityTrustResourceUrl(_theme_picker_service__WEBPACK_IMPORTED_MODULE_0__.ThemePickerService.THEME_EXAMPLE_ICON);
    iconRegistry.addSvgIcon('theme-example', themeExampleIconURL);
    const themeName = themePickerService.getStoredThemeName();
    this.selectTheme(themeName.value !== _theme_picker_service__WEBPACK_IMPORTED_MODULE_0__.ThemePickerService.NOT_FOUND ? themeName.value : _theme_picker_service__WEBPACK_IMPORTED_MODULE_0__.ThemePickerService.DEFAULT_THEME);
  }
  ngOnInit() {}
  selectTheme(theme) {
    this.themePickerService.setStyle('theme', `${theme}.css`);
    this.themePickerService.storeTheme(theme);
    this.currentTheme = theme;
  }
}
ThemePickerComponent.ɵfac = function ThemePickerComponent_Factory(t) {
  return new (t || ThemePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_theme_picker_service__WEBPACK_IMPORTED_MODULE_0__.ThemePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
};
ThemePickerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ThemePickerComponent,
  selectors: [["theme-picker"]],
  decls: 7,
  vars: 4,
  consts: [["mat-icon-button", "", "matTooltip", "Select a theme for the documentation", 3, "mat-menu-trigger-for"], ["xPosition", "before", 1, "theme-picker-menu"], ["themeMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], [3, "ngClass", "color"], ["svgIcon", "theme-example"]],
  template: function ThemePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "format_color_fill");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-menu", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ThemePickerComponent_button_5_Template, 6, 8, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-menu-trigger-for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, ctx.themes));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.MatLegacyButton, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_6__.MatLegacyMenu, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_6__.MatLegacyMenuItem, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_6__.MatLegacyMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatLegacyTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe],
  styles: [".theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon {\n  margin-right: 0;\n  margin-left: 8px;\n  float: right;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon svg {\n  vertical-align: middle;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.deeppurple-amber svg .theme-icon-background {\n  fill: #fafafa;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.deeppurple-amber svg .theme-icon-button {\n  fill: #FFC107;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.deeppurple-amber svg .theme-icon-toolbar {\n  fill: #673AB7;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.indigo-pink svg .theme-icon-background {\n  fill: #fafafa;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.indigo-pink svg .theme-icon-button {\n  fill: #E91E63;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.indigo-pink svg .theme-icon-toolbar {\n  fill: #3F51B5;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.pink-bluegrey svg .theme-icon-background {\n  fill: #303030;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.pink-bluegrey svg .theme-icon-button {\n  fill: #607D8B;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.pink-bluegrey svg .theme-icon-toolbar {\n  fill: #E91E63;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.purple-green svg .theme-icon-background {\n  fill: #303030;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.purple-green svg .theme-icon-button {\n  fill: #4CAF50;\n}\n.theme-picker-menu .mat-menu-item .mat-icon.theme-example-icon.purple-green svg .theme-icon-toolbar {\n  fill: #9C27B0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2plY3RzL25neC1lZGl0b3ItZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvdGhlbWUtcGlja2VyL3RoZW1lLXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFETjtBQUdNO0VBQ0Usc0JBQUE7QUFEUjtBQUtRO0VBQ0UsYUFBQTtBQUhWO0FBS1E7RUFDRSxhQUFBO0FBSFY7QUFLUTtFQUNFLGFBQUE7QUFIVjtBQVFRO0VBQ0UsYUFBQTtBQU5WO0FBUVE7RUFDRSxhQUFBO0FBTlY7QUFRUTtFQUNFLGFBQUE7QUFOVjtBQVdRO0VBQ0UsYUFBQTtBQVRWO0FBV1E7RUFDRSxhQUFBO0FBVFY7QUFXUTtFQUNFLGFBQUE7QUFUVjtBQWNRO0VBQ0UsYUFBQTtBQVpWO0FBY1E7RUFDRSxhQUFBO0FBWlY7QUFjUTtFQUNFLGFBQUE7QUFaViIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS1waWNrZXItbWVudSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICAubWF0LWljb24udGhlbWUtZXhhbXBsZS1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAgIHN2ZyB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG5cbiAgICAgICYuZGVlcHB1cnBsZS1hbWJlciBzdmcge1xuICAgICAgICAudGhlbWUtaWNvbi1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBmaWxsOiAjZmFmYWZhO1xuICAgICAgICB9XG4gICAgICAgIC50aGVtZS1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgZmlsbDogI0ZGQzEwNztcbiAgICAgICAgfVxuICAgICAgICAudGhlbWUtaWNvbi10b29sYmFyIHtcbiAgICAgICAgICBmaWxsOiAjNjczQUI3O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaW5kaWdvLXBpbmsgc3ZnIHtcbiAgICAgICAgLnRoZW1lLWljb24tYmFja2dyb3VuZCB7XG4gICAgICAgICAgZmlsbDogI2ZhZmFmYTtcbiAgICAgICAgfVxuICAgICAgICAudGhlbWUtaWNvbi1idXR0b24ge1xuICAgICAgICAgIGZpbGw6ICNFOTFFNjM7XG4gICAgICAgIH1cbiAgICAgICAgLnRoZW1lLWljb24tdG9vbGJhciB7XG4gICAgICAgICAgZmlsbDogIzNGNTFCNTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBpbmstYmx1ZWdyZXkgc3ZnIHtcbiAgICAgICAgLnRoZW1lLWljb24tYmFja2dyb3VuZCB7XG4gICAgICAgICAgZmlsbDogIzMwMzAzMDtcbiAgICAgICAgfVxuICAgICAgICAudGhlbWUtaWNvbi1idXR0b24ge1xuICAgICAgICAgIGZpbGw6ICM2MDdEOEI7XG4gICAgICAgIH1cbiAgICAgICAgLnRoZW1lLWljb24tdG9vbGJhciB7XG4gICAgICAgICAgZmlsbDogI0U5MUU2MztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnB1cnBsZS1ncmVlbiBzdmcge1xuICAgICAgICAudGhlbWUtaWNvbi1iYWNrZ3JvdW5kIHtcbiAgICAgICAgICBmaWxsOiAjMzAzMDMwO1xuICAgICAgICB9XG4gICAgICAgIC50aGVtZS1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgZmlsbDogIzRDQUY1MDtcbiAgICAgICAgfVxuICAgICAgICAudGhlbWUtaWNvbi10b29sYmFyIHtcbiAgICAgICAgICBmaWxsOiAjOUMyN0IwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 17734:
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/components/theme-picker/theme-picker.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemePickerModule": () => (/* binding */ ThemePickerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-menu */ 1051);
/* harmony import */ var _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-tooltip */ 63370);
/* harmony import */ var _theme_picker_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme-picker.component */ 79162);
/* harmony import */ var _theme_picker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme-picker.service */ 25449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);








class ThemePickerModule {}
ThemePickerModule.ɵfac = function ThemePickerModule_Factory(t) {
  return new (t || ThemePickerModule)();
};
ThemePickerModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ThemePickerModule
});
ThemePickerModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [_theme_picker_service__WEBPACK_IMPORTED_MODULE_1__.ThemePickerService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButtonModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_5__.MatLegacyMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatLegacyTooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ThemePickerModule, {
    declarations: [_theme_picker_component__WEBPACK_IMPORTED_MODULE_0__.ThemePickerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_4__.MatLegacyButtonModule, _angular_material_legacy_menu__WEBPACK_IMPORTED_MODULE_5__.MatLegacyMenuModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatLegacyTooltipModule],
    exports: [_theme_picker_component__WEBPACK_IMPORTED_MODULE_0__.ThemePickerComponent]
  });
})();

/***/ }),

/***/ 25449:
/*!******************************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/components/theme-picker/theme-picker.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemePickerService": () => (/* binding */ ThemePickerService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _services_webstorage_webstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/webstorage/webstorage.service */ 97750);



class ThemePickerService {
  constructor(document, webstorageService) {
    this.document = document;
    this.webstorageService = webstorageService;
  }
  storeTheme(theme) {
    this.webstorageService.setLocalstorageItem({
      key: ThemePickerService.STRORAGE_KEY,
      value: theme
    });
  }
  getStoredThemeName() {
    return this.webstorageService.getLocalstorageItem(ThemePickerService.STRORAGE_KEY);
  }
  setStyle(key, href) {
    this.getLinkElementForKey(key).setAttribute('href', href);
  }
  removeStyle(key) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      this.document.head.removeChild(existingLinkElement);
    }
  }
  getLinkElementForKey(key) {
    return this.getExistingLinkElementByKey(key) ?? this.createLinkElementWithKey(key);
  }
  getExistingLinkElementByKey(key) {
    return this.document.head.querySelector(`link[rel="stylesheet"].style-manager-${key}`);
  }
  createLinkElementWithKey(key) {
    const linkEl = this.document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(`style-manager-${key}`);
    this.document.head.appendChild(linkEl);
    return linkEl;
  }
}
ThemePickerService.THEME_EXAMPLE_ICON = 'assets/img/theme-demo-icon.svg';
ThemePickerService.DEFAULT_THEME = 'indigo-pink';
ThemePickerService.STRORAGE_KEY = 'theme-picker-current-name';
ThemePickerService.NOT_FOUND = 'NOT_FOUND';
ThemePickerService.ɵfac = function ThemePickerService_Factory(t) {
  return new (t || ThemePickerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_webstorage_webstorage_service__WEBPACK_IMPORTED_MODULE_0__.WebstorageService));
};
ThemePickerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ThemePickerService,
  factory: ThemePickerService.ɵfac
});

/***/ }),

/***/ 97750:
/*!************************************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/app/services/webstorage/webstorage.service.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebstorageService": () => (/* binding */ WebstorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class WebstorageService {
  constructor() {
    this.LOCAL_STORAGE_ITEM_NOT_FOUND_ERROR = 'LOCAL_STORAGE_ITEM_NOT_FOUND_ERROR';
    this.LOCAL_STORAGE_MAX_SIZE_REACHED = 'LOCAL_STORAGE_MAX_SIZE_REACHED';
    this.localStorageValueChangeSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.localStorageValueChange$ = this.localStorageValueChangeSub.asObservable();
    this.SESSION_STORAGE_ITEM_NOT_FOUND_ERROR = 'SESSION_STORAGE_ITEM_NOT_FOUND_ERROR';
    this.SESSIONSTORAGE_MAX_SIZE_REACHED = 'SESSIONSTORAGE_MAX_SIZE_REACHED';
    this.sessionStorageValueChangeSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.sessionStorageValueChange$ = this.sessionStorageValueChangeSub.asObservable();
  }
  getLocalStorageSize() {
    return new Blob(Object.values(localStorage)).size;
  }
  getLocalstorageItem(key) {
    const item = {
      key,
      value: localStorage.getItem(key) ?? this.LOCAL_STORAGE_ITEM_NOT_FOUND_ERROR
    };
    this.localStorageValueChangeSub.next(item);
    return item;
  }
  setLocalstorageItem({
    key,
    value
  }) {
    localStorage.setItem(key, value);
    this.localStorageValueChangeSub.next({
      key,
      value
    });
  }
  removeLocalstorageItem(key) {
    const item = {
      key,
      value: localStorage.getItem(key) ?? this.LOCAL_STORAGE_ITEM_NOT_FOUND_ERROR
    };
    item.value !== this.LOCAL_STORAGE_ITEM_NOT_FOUND_ERROR && localStorage.removeItem(key);
    this.localStorageValueChangeSub.next(item);
  }
  clearLocalstorage() {
    localStorage.clear();
  }
  getSessionStorageSize() {
    return new Blob(Object.values(sessionStorage)).size;
  }
  getSessionStorageItem(key) {
    const item = {
      key,
      value: sessionStorage.getItem(key) ?? this.SESSION_STORAGE_ITEM_NOT_FOUND_ERROR
    };
    this.sessionStorageValueChangeSub.next(item);
    return item;
  }
  setSessionStorageItem({
    key,
    value
  }) {
    sessionStorage.setItem(key, value);
    this.sessionStorageValueChangeSub.next({
      key,
      value
    });
  }
  removeSessionStorageItem(key) {
    const item = {
      key,
      value: sessionStorage.getItem(key) ?? this.SESSION_STORAGE_ITEM_NOT_FOUND_ERROR
    };
    item.value !== this.SESSION_STORAGE_ITEM_NOT_FOUND_ERROR && sessionStorage.removeItem(key);
    this.sessionStorageValueChangeSub.next(item);
  }
  clearSessionStorage() {
    sessionStorage.clear();
  }
}
WebstorageService.ɵfac = function WebstorageService_Factory(t) {
  return new (t || WebstorageService)();
};
WebstorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: WebstorageService,
  factory: WebstorageService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 14272:
/*!******************************************************************!*\
  !*** ./projects/ngx-editor-demo/src/environments/environment.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 73849:
/*!**********************************************!*\
  !*** ./projects/ngx-editor-demo/src/main.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ 31484);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/mode/css/css */ 72815);
/* harmony import */ var codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/xml/xml */ 8412);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/hint/show-hint */ 85497);
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/addon/hint/javascript-hint */ 11176);
/* harmony import */ var codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_javascript_hint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app.module */ 77968);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./environments/environment */ 14272);









if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_5__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 48664:
/*!***********************************************************************************************!*\
  !*** ./dist/ngx-editorjs-blockquotes-block/fesm2020/tmdjr-ngx-editorjs-blockquotes-block.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxEditorBlockquotesBlockModule": () => (/* binding */ NgxEditorBlockquotesBlockModule),
/* harmony export */   "NgxEditorBlockquotesBlockService": () => (/* binding */ NgxEditorBlockquotesBlockService),
/* harmony export */   "NgxEditorjsBlockquotesBlockComponent": () => (/* binding */ NgxEditorjsBlockquotesBlockComponent),
/* harmony export */   "NgxEditorjsBlockquotesBlockMediator": () => (/* binding */ NgxEditorjsBlockquotesBlockMediator),
/* harmony export */   "NgxEditorjsBlockquotesClientBlockComponent": () => (/* binding */ NgxEditorjsBlockquotesClientBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





const _c0 = ["blockquotes"];
const _c1 = "[_nghost-%COMP%]{display:flex;flex-direction:column}blockquote[_ngcontent-%COMP%]{margin:20px 0;padding-left:1.5rem}";
class NgxEditorBlockquotesBlockService {
  constructor() {}
}
NgxEditorBlockquotesBlockService.ɵfac = function NgxEditorBlockquotesBlockService_Factory(t) {
  return new (t || NgxEditorBlockquotesBlockService)();
};
NgxEditorBlockquotesBlockService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorBlockquotesBlockService,
  factory: NgxEditorBlockquotesBlockService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorBlockquotesBlockService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class NgxEditorjsBlockquotesClientBlockComponent {
  constructor() {
    this.value = '';
  }
}
NgxEditorjsBlockquotesClientBlockComponent.ɵfac = function NgxEditorjsBlockquotesClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsBlockquotesClientBlockComponent)();
};
NgxEditorjsBlockquotesClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsBlockquotesClientBlockComponent,
  selectors: [["ngx-editorjs-blockquotes-client-block"]],
  inputs: {
    value: "value"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[1, "flex-spacer", 3, "innerHTML"]],
  template: function NgxEditorjsBlockquotesClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "blockquote", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
  },
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}blockquote[_ngcontent-%COMP%]{margin:20px 0;padding-left:1.5rem}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsBlockquotesClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-blockquotes-client-block',
      template: `
    <blockquote class="flex-spacer" [innerHTML]="value"></blockquote>
  `,
      imports: [],
      styles: [":host{display:flex;flex-direction:column}blockquote{margin:20px 0;padding-left:1.5rem}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsBlockquotesBlockComponent extends _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__.BaseBlockComponent {
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.viewChild = this.element;
  }
  onMouseEnter(event) {
    super.onMouseEnter(event);
  }
}
NgxEditorjsBlockquotesBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsBlockquotesBlockComponent_BaseFactory;
  return function NgxEditorjsBlockquotesBlockComponent_Factory(t) {
    return (ɵNgxEditorjsBlockquotesBlockComponent_BaseFactory || (ɵNgxEditorjsBlockquotesBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsBlockquotesBlockComponent)))(t || NgxEditorjsBlockquotesBlockComponent);
  };
}();
NgxEditorjsBlockquotesBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsBlockquotesBlockComponent,
  selectors: [["ngx-editorjs-blockquotes-block"]],
  viewQuery: function NgxEditorjsBlockquotesBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["contenteditable", "", 1, "flex-spacer", 3, "autofocus", "innerHTML", "focus"], ["blockquotes", ""]],
  template: function NgxEditorjsBlockquotesBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "blockquote", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsBlockquotesBlockComponent_Template_blockquote_focus_0_listener($event) {
        return ctx.onMouseEnter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx._autofocus)("innerHTML", ctx.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__.AutofocusDirective],
  styles: [_c1]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsBlockquotesBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      imports: [_tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__.AutofocusDirective],
      selector: 'ngx-editorjs-blockquotes-block',
      template: `
    <blockquote class="flex-spacer" #blockquotes contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></blockquote>
  `,
      styles: [":host{display:flex;flex-direction:column}blockquote{margin:20px 0;padding-left:1.5rem}\n"]
    }]
  }], null, {
    element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['blockquotes']
    }]
  });
})();
class NgxEditorjsBlockquotesBlockMediator {}
NgxEditorjsBlockquotesBlockMediator.ɵfac = function NgxEditorjsBlockquotesBlockMediator_Factory(t) {
  return new (t || NgxEditorjsBlockquotesBlockMediator)();
};
NgxEditorjsBlockquotesBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsBlockquotesBlockMediator,
  selectors: [["ngx-editorjs-meditator-blockquotes-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName"]],
  template: function NgxEditorjsBlockquotesBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-blockquotes-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, NgxEditorjsBlockquotesBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsBlockquotesBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-meditator-blockquotes-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-blockquotes-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-blockquotes-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsBlockquotesBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorBlockquotesBlockModule {}
NgxEditorBlockquotesBlockModule.ɵfac = function NgxEditorBlockquotesBlockModule_Factory(t) {
  return new (t || NgxEditorBlockquotesBlockModule)();
};
NgxEditorBlockquotesBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorBlockquotesBlockModule
});
NgxEditorBlockquotesBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorBlockquotesBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [],
      exports: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-editorjs-blockquotes-block
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 99540:
/*!*************************************************************************!*\
  !*** ./dist/ngx-editorjs-client/fesm2020/tmdjr-ngx-editorjs-client.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderSearchableBlock": () => (/* binding */ HeaderSearchableBlock),
/* harmony export */   "NGX_EDITORJS_CLIENT_OPTIONS": () => (/* binding */ NGX_EDITORJS_CLIENT_OPTIONS),
/* harmony export */   "NgxEditorjsClientComponent": () => (/* binding */ NgxEditorjsClientComponent),
/* harmony export */   "NgxEditorjsClientModule": () => (/* binding */ NgxEditorjsClientModule),
/* harmony export */   "NgxEditorjsClientService": () => (/* binding */ NgxEditorjsClientService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);




function NgxEditorjsHeaderClientBlockComponent_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderClientBlockComponent_h3_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h3", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderClientBlockComponent_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h4", 3);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderClientBlockComponent_h5_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h5", 3);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderClientBlockComponent_h6_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h6", 3);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderClientBlockComponent_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h1", 3);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r5.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = ["ngxEditorClient"];
const NGX_EDITORJS_CLIENT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_EDITORJS_CLIENT_OPTIONS');
class NgxEditorjsClientService {
  constructor(options) {
    this.blocks = options?.blocks || [];
  }
}
NgxEditorjsClientService.ɵfac = function NgxEditorjsClientService_Factory(t) {
  return new (t || NgxEditorjsClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NGX_EDITORJS_CLIENT_OPTIONS, 8));
};
NgxEditorjsClientService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorjsClientService,
  factory: NgxEditorjsClientService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsClientService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_EDITORJS_CLIENT_OPTIONS]
      }]
    }];
  }, null);
})();
class NgxEditorjsHeaderClientBlockComponent {
  constructor() {
    this.value = '';
  }
  set savedAction(action) {
    this.whichHeader = action;
  }
}
NgxEditorjsHeaderClientBlockComponent.ɵfac = function NgxEditorjsHeaderClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsHeaderClientBlockComponent)();
};
NgxEditorjsHeaderClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsHeaderClientBlockComponent,
  selectors: [["lib-ngx-editorjs-header-client-block"]],
  inputs: {
    value: "value",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 7,
  vars: 6,
  consts: [[3, "ngSwitch"], ["class", "flex-spacer", 3, "innerHTML", 4, "ngSwitchCase"], ["class", "flex-spacer", 3, "innerHTML", 4, "ngSwitchDefault"], [1, "flex-spacer", 3, "innerHTML"]],
  template: function NgxEditorjsHeaderClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxEditorjsHeaderClientBlockComponent_h2_1_Template, 1, 1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxEditorjsHeaderClientBlockComponent_h3_2_Template, 1, 1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxEditorjsHeaderClientBlockComponent_h4_3_Template, 1, 1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxEditorjsHeaderClientBlockComponent_h5_4_Template, 1, 1, "h5", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxEditorjsHeaderClientBlockComponent_h6_5_Template, 1, 1, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxEditorjsHeaderClientBlockComponent_h1_6_Template, 1, 1, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.whichHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h6");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgSwitchDefault],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsHeaderClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'lib-ngx-editorjs-header-client-block',
      template: `
    <ng-container [ngSwitch]="whichHeader">
        <h2 *ngSwitchCase="'h2'" class="flex-spacer" [innerHTML]="value"></h2>
        <h3 *ngSwitchCase="'h3'" class="flex-spacer" [innerHTML]="value"></h3>
        <h4 *ngSwitchCase="'h4'" class="flex-spacer" [innerHTML]="value"></h4>
        <h5 *ngSwitchCase="'h5'" class="flex-spacer" [innerHTML]="value"></h5>
        <h6 *ngSwitchCase="'h6'" class="flex-spacer" [innerHTML]="value"></h6>
        <h1 *ngSwitchDefault class="flex-spacer" [innerHTML]="value"></h1>
    </ng-container>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: [":host{display:flex;flex-direction:column}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
const HeaderSearchableBlock = {
  name: 'Header',
  component: NgxEditorjsHeaderClientBlockComponent,
  componentInstanceName: 'NgxEditorjsHeaderBlockMediator'
};
class NgxEditorjsClientComponent {
  constructor(ngxEditorjsClientService) {
    this.ngxEditorjsClientService = ngxEditorjsClientService;
  }
  set inputData(blocks) {
    requestAnimationFrame(() => this.clearSortCreateNgxEditorjsBlocks(blocks));
  }
  ngOnInit() {
    this.ngxEditorjsClientService.blocks.unshift(HeaderSearchableBlock);
  }
  clearSortCreateNgxEditorjsBlocks(blocks) {
    this.ngxEditorClient.clear();
    if (blocks) {
      blocks.sort((a, b) => a.sortIndex - b.sortIndex);
      blocks.forEach(block => {
        const componentInstanceObject = this.ngxEditorjsClientService.blocks.find(b => b.componentInstanceName === block.componentInstanceName) ?? this.ngxEditorjsClientService.blocks[0];
        const createBlockAction = {
          blockId: block.blockId,
          component: componentInstanceObject.component,
          componentInstanceName: block.componentInstanceName,
          value: block.dataClean,
          componentSortIndex: block.sortIndex,
          savedAction: block.savedAction
        };
        this.loadNgxEditorjsBlock(createBlockAction);
      });
    }
  }
  loadNgxEditorjsBlock({
    component,
    value,
    savedAction
  }) {
    const componentRef = this.ngxEditorClient.createComponent(component, {
      index: this.ngxEditorClient.length
    });
    const blockMediator = componentRef.instance;
    blockMediator.value = value;
    blockMediator.savedAction = savedAction;
  }
}
NgxEditorjsClientComponent.ɵfac = function NgxEditorjsClientComponent_Factory(t) {
  return new (t || NgxEditorjsClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxEditorjsClientService));
};
NgxEditorjsClientComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsClientComponent,
  selectors: [["ngx-editorjs-client"]],
  viewQuery: function NgxEditorjsClientComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngxEditorClient = _t.first);
    }
  },
  inputs: {
    inputData: "inputData"
  },
  decls: 2,
  vars: 0,
  consts: [["ngxEditorClient", ""]],
  template: function NgxEditorjsClientComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, null, 0);
    }
  },
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsClientComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-editorjs-client',
      template: `<ng-container #ngxEditorClient></ng-container>`
    }]
  }], function () {
    return [{
      type: NgxEditorjsClientService
    }];
  }, {
    ngxEditorClient: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ngxEditorClient', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }],
    inputData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsClientModule {}
NgxEditorjsClientModule.ɵfac = function NgxEditorjsClientModule_Factory(t) {
  return new (t || NgxEditorjsClientModule)();
};
NgxEditorjsClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorjsClientModule
});
NgxEditorjsClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [NgxEditorjsHeaderClientBlockComponent]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxEditorjsClientComponent],
      imports: [NgxEditorjsHeaderClientBlockComponent],
      exports: [NgxEditorjsClientComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-editorjs-client
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 79349:
/*!*********************************************************************************!*\
  !*** ./dist/ngx-editorjs-code-block/fesm2020/tmdjr-ngx-editorjs-code-block.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxEditorjsCodeBlockComponent": () => (/* binding */ NgxEditorjsCodeBlockComponent),
/* harmony export */   "NgxEditorjsCodeBlockMediator": () => (/* binding */ NgxEditorjsCodeBlockMediator),
/* harmony export */   "NgxEditorjsCodeBlockModule": () => (/* binding */ NgxEditorjsCodeBlockModule),
/* harmony export */   "NgxEditorjsCodeBlockService": () => (/* binding */ NgxEditorjsCodeBlockService),
/* harmony export */   "NgxEditorjsCodeClientBlockComponent": () => (/* binding */ NgxEditorjsCodeClientBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 5489);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);







const _c0 = "[_nghost-%COMP%]{display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}";
class NgxEditorjsCodeBlockService {
  constructor() {}
}
NgxEditorjsCodeBlockService.ɵfac = function NgxEditorjsCodeBlockService_Factory(t) {
  return new (t || NgxEditorjsCodeBlockService)();
};
NgxEditorjsCodeBlockService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorjsCodeBlockService,
  factory: NgxEditorjsCodeBlockService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsCodeBlockService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class NgxEditorjsCodeClientBlockComponent {
  constructor() {
    this.value = '';
    this.codeMirrorOptions = {
      lineNumbers: true,
      theme: 'material-palenight',
      mode: 'text/typescript',
      readOnly: true
    };
  }
  set savedAction(action) {
    this.codeMirrorOptions.mode = action;
  }
}
NgxEditorjsCodeClientBlockComponent.ɵfac = function NgxEditorjsCodeClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsCodeClientBlockComponent)();
};
NgxEditorjsCodeClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsCodeClientBlockComponent,
  selectors: [["ngx-editorjs-code-client-block"]],
  inputs: {
    value: "value",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 2,
  consts: [[3, "ngModel", "options"]],
  template: function NgxEditorjsCodeClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-codemirror", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("options", ctx.codeMirrorOptions);
    }
  },
  dependencies: [_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__.CodemirrorModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__.CodemirrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsCodeClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      imports: [_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__.CodemirrorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule],
      selector: 'ngx-editorjs-code-client-block',
      template: `
    <ngx-codemirror
      [ngModel]="value"
      [options]="codeMirrorOptions">
    </ngx-codemirror>
  `,
      styles: [":host{display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsCodeBlockComponent extends _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_3__.BaseBlockComponent {
  constructor() {
    super(...arguments);
    this.useInlineToolbar = false;
    this.useInputType = false;
    this.useOnPasteHTMLRemoval = false;
    this.blockOptionActions = [{
      action: 'text/typescript',
      icon: 'javascript'
    }, {
      action: 'css',
      icon: 'css'
    }, {
      action: 'xml',
      icon: 'html'
    }];
    this.codeMirrorOptions = {
      lineNumbers: true,
      theme: 'material-palenight',
      mode: 'text/typescript',
      extraKeys: {
        'Ctrl-Space': 'autocomplete'
      }
    };
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // setTimeout(() => {
    //   this.codeMirrorOptions.theme = 'material';
    // }, 5000);
    super.ngOnInit();
  }
  handleBlockOptionAction(action) {
    this.codeMirrorOptions.mode = action;
    super.handleBlockOptionAction(action);
  }
}
NgxEditorjsCodeBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsCodeBlockComponent_BaseFactory;
  return function NgxEditorjsCodeBlockComponent_Factory(t) {
    return (ɵNgxEditorjsCodeBlockComponent_BaseFactory || (ɵNgxEditorjsCodeBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsCodeBlockComponent)))(t || NgxEditorjsCodeBlockComponent);
  };
}();
NgxEditorjsCodeBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsCodeBlockComponent,
  selectors: [["ngx-editorjs-code-block"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 2,
  consts: [[3, "ngModel", "options", "ngModelChange"]],
  template: function NgxEditorjsCodeBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-codemirror", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxEditorjsCodeBlockComponent_Template_ngx_codemirror_ngModelChange_0_listener($event) {
        return ctx.changeValue($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("options", ctx.codeMirrorOptions);
    }
  },
  dependencies: [_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__.CodemirrorModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__.CodemirrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [_c0]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsCodeBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      imports: [_ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_1__.CodemirrorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule],
      selector: 'ngx-editorjs-code-block',
      template: `
    <ngx-codemirror
      (ngModelChange)="changeValue($event)"
      [ngModel]="value"
      [options]="codeMirrorOptions">
    </ngx-codemirror>
  `,
      styles: [":host{display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}\n"]
    }]
  }], null, null);
})();
class NgxEditorjsCodeBlockMediator {}
NgxEditorjsCodeBlockMediator.ɵfac = function NgxEditorjsCodeBlockMediator_Factory(t) {
  return new (t || NgxEditorjsCodeBlockMediator)();
};
NgxEditorjsCodeBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsCodeBlockMediator,
  selectors: [["ngx-editorjs-meditator-code-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 4,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName", "savedAction"]],
  template: function NgxEditorjsCodeBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-code-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName)("savedAction", ctx.savedAction);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, NgxEditorjsCodeBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsCodeBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-meditator-code-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-code-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-code-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsCodeBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsCodeBlockModule {}
NgxEditorjsCodeBlockModule.ɵfac = function NgxEditorjsCodeBlockModule_Factory(t) {
  return new (t || NgxEditorjsCodeBlockModule)();
};
NgxEditorjsCodeBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorjsCodeBlockModule
});
NgxEditorjsCodeBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsCodeBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [],
      exports: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-editorjs-code-block
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 29230:
/*!***********************************************************************************!*\
  !*** ./dist/ngx-editorjs-image-block/fesm2020/tmdjr-ngx-editorjs-image-block.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxEditorjsImageBlockComponent": () => (/* binding */ NgxEditorjsImageBlockComponent),
/* harmony export */   "NgxEditorjsImageBlockMediator": () => (/* binding */ NgxEditorjsImageBlockMediator),
/* harmony export */   "NgxEditorjsImageBlockModule": () => (/* binding */ NgxEditorjsImageBlockModule),
/* harmony export */   "NgxEditorjsImageBlockService": () => (/* binding */ NgxEditorjsImageBlockService),
/* harmony export */   "NgxEditorjsImageClientBlockComponent": () => (/* binding */ NgxEditorjsImageClientBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
















function ImageConfigComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.imageConfigFormErrorMessages["title"]);
  }
}
function ImageConfigComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.imageConfigFormErrorMessages["url"]);
  }
}
const _c0 = ["image"];
function NgxEditorjsImageBlockComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxEditorjsImageBlockComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.openEditUrlOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.activeImageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0._value.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx_r0._value.title);
  }
}
function NgxEditorjsImageBlockComponent_image_config_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "image-config", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageValue", function NgxEditorjsImageBlockComponent_image_config_1_Template_image_config_imageValue_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.updateImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1._value);
  }
}
class NgxEditorjsImageBlockService {
  constructor() {}
}
NgxEditorjsImageBlockService.ɵfac = function NgxEditorjsImageBlockService_Factory(t) {
  return new (t || NgxEditorjsImageBlockService)();
};
NgxEditorjsImageBlockService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorjsImageBlockService,
  factory: NgxEditorjsImageBlockService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsImageBlockService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class NgxEditorjsImageClientBlockComponent {
  constructor() {
    this._value = {
      url: '',
      title: ''
    };
    this.activeImageClass = 'flex-start';
  }
  set value(value) {
    !!value && (this._value = JSON.parse(value));
  }
  set savedAction(action) {
    this.activeImageClass = action ?? 'flex-start';
  }
  onImageClick() {
    console.log('Image clicked');
  }
}
NgxEditorjsImageClientBlockComponent.ɵfac = function NgxEditorjsImageClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsImageClientBlockComponent)();
};
NgxEditorjsImageClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsImageClientBlockComponent,
  selectors: [["ngx-editorjs-image-client-block"]],
  inputs: {
    value: "value",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[1, "image-conatiner", 3, "ngClass"], ["onerror", "this.onerror=null;this.src='https://dummyimage.com/640x360/000/AAF'", 1, "image-block", 3, "src", "title", "click"]],
  template: function NgxEditorjsImageClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxEditorjsImageClientBlockComponent_Template_img_click_1_listener() {
        return ctx.onImageClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeImageClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx._value.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", ctx._value.title);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;margin-bottom:22px}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;cursor:pointer}.image-conatiner[_ngcontent-%COMP%]{display:flex}.image-block[_ngcontent-%COMP%]{min-width:0}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsImageClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-image-client-block',
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      template: `
    <div class="image-conatiner" [ngClass]="activeImageClass">
      <img
        class="image-block"
        [src]="_value.url"
        [title]="_value.title"
        (click)="onImageClick()"
        onerror="this.onerror=null;this.src='https://dummyimage.com/640x360/000/AAF'"/>
    </div>
  `,
      styles: [":host{display:flex;flex-direction:column;position:relative;margin-bottom:22px}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%;cursor:pointer}.image-conatiner{display:flex}.image-block{min-width:0}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class ImageConfigComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.destory = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.errorMessages = {
      required: 'Required'
    };
    this.imageConfigFormErrorMessages = {
      url: '',
      title: ''
    };
    this.imageValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.imageConfigForm = this.formBuilder.group({
      url: [this.value.url ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      title: [this.value.title ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
    });
    this.imageConfigForm.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destory)).subscribe(() => this.setErrorsMessages(this.imageConfigForm, this.imageConfigFormErrorMessages));
  }
  ngOnDestroy() {
    this.destory.next(true);
  }
  updateImage() {
    this.imageValue.emit(this.imageConfigForm.value);
  }
  closeConfig() {
    this.imageValue.emit(this.value);
  }
  setErrorsMessages(formGroup, formControlMessages) {
    Object.keys(formGroup.controls).forEach(element => {
      const errors = formGroup.get(element)?.errors;
      if (errors) {
        const error = Object.keys(errors)[0];
        formControlMessages[element] = this.errorMessages[error];
      }
    });
  }
}
ImageConfigComponent.ɵfac = function ImageConfigComponent_Factory(t) {
  return new (t || ImageConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
};
ImageConfigComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ImageConfigComponent,
  selectors: [["image-config"]],
  inputs: {
    value: "value"
  },
  outputs: {
    imageValue: "imageValue"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 21,
  vars: 4,
  consts: [[1, "image-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "formControlName", "title"], ["title", ""], [4, "ngIf"], ["matInput", "", "type", "text", "title", "URL", "formControlName", "url"], ["url", ""], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"]],
  template: function ImageConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Image Configurations");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 3)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ImageConfigComponent_mat_error_9_Template, 2, 1, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "URL");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ImageConfigComponent_mat_error_15_Template, 2, 1, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9)(17, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageConfigComponent_Template_button_click_17_listener() {
        return ctx.updateImage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageConfigComponent_Template_button_click_19_listener() {
        return ctx.closeConfig();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.imageConfigForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.imageConfigForm.get("title")) == null ? null : tmp_1_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.imageConfigForm.get("url")) == null ? null : tmp_2_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.imageConfigForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInputModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInput, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageConfigComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'image-config',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInputModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
      template: `
    <div class="image-block-modal" >
      <form [formGroup]="imageConfigForm">
        <h2 mat-dialog-title>Image Configurations</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Title</mat-label>
          <input #title matInput type="text" formControlName="title" />
          <mat-error *ngIf="imageConfigForm.get('title')?.errors">{{imageConfigFormErrorMessages['title']}}</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>URL</mat-label>
          <input #url matInput type="text" title="URL" formControlName="url" />
          <mat-error *ngIf="imageConfigForm.get('url')?.errors">{{imageConfigFormErrorMessages['url']}}</mat-error>
        </mat-form-field>
        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateImage()" [disabled]="imageConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `,
      styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgxEditorjsImageBlockComponent extends _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_8__.BaseBlockComponent {
  constructor() {
    super(...arguments);
    this.useInlineToolbar = false;
    this.useInputType = false;
    this._openEditUrlOverlay = false;
    this._value = {
      url: '',
      title: ''
    };
    this.activeImageClass = 'flex-start';
    //   flex-start | flex-end | center
    this.blockOptionActions = [{
      action: 'flex-start',
      icon: 'format_align_left'
    }, {
      action: 'center',
      icon: 'format_align_center'
    }, {
      action: 'flex-end',
      icon: 'format_align_right'
    }, {
      action: 'stretch',
      icon: 'format_align_justify'
    }];
  }
  ngOnInit() {
    !!this.value && (this._value = JSON.parse(this.value));
    !this.value && this.openEditUrlOverlay();
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.viewChild = this.element;
  }
  changeValue(value) {
    super.changeValue(value);
  }
  handleBlockOptionAction(action) {
    this.activeImageClass = action ?? 'flex-start';
    super.handleBlockOptionAction(action);
  }
  openEditUrlOverlay() {
    this._openEditUrlOverlay = true;
  }
  updateImage(value) {
    this._value = value;
    this.changeValue(JSON.stringify(value));
    this._openEditUrlOverlay = false;
  }
}
NgxEditorjsImageBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsImageBlockComponent_BaseFactory;
  return function NgxEditorjsImageBlockComponent_Factory(t) {
    return (ɵNgxEditorjsImageBlockComponent_BaseFactory || (ɵNgxEditorjsImageBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsImageBlockComponent)))(t || NgxEditorjsImageBlockComponent);
  };
}();
NgxEditorjsImageBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsImageBlockComponent,
  selectors: [["ngx-editorjs-image-block"]],
  viewQuery: function NgxEditorjsImageBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["class", "image-container", 3, "ngClass", 4, "ngIf"], [3, "value", "imageValue", 4, "ngIf"], [1, "image-container", 3, "ngClass"], ["onerror", "this.onerror=null;this.src='https://dummyimage.com/640x360/000/AAF'", 1, "image-block", 3, "src", "title"], ["image", ""], ["mat-mini-fab", "", 1, "image-block-button", "mat-elevation-z2", 3, "click"], [3, "value", "imageValue"]],
  template: function NgxEditorjsImageBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxEditorjsImageBlockComponent_div_0_Template, 6, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxEditorjsImageBlockComponent_image_config_1_Template, 1, 1, "image-config", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._openEditUrlOverlay);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._openEditUrlOverlay);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, ImageConfigComponent],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;margin-bottom:22px}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.image-block[_ngcontent-%COMP%]:hover ~ .image-block-button[_ngcontent-%COMP%], .image-block-button[_ngcontent-%COMP%]:hover{display:block}.image-block[_ngcontent-%COMP%]{min-width:0}.image-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.image-container[_ngcontent-%COMP%]{display:flex}  .image-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsImageBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-editorjs-image-block',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, ImageConfigComponent],
      template: `
    <div *ngIf="!_openEditUrlOverlay" class="image-container" [ngClass]="activeImageClass">
      <img
        #image
        class="image-block"
        [src]="_value.url"
        [title]="_value.title"
        onerror="this.onerror=null;this.src='https://dummyimage.com/640x360/000/AAF'"/>
      <button  
        mat-mini-fab 
        class="image-block-button mat-elevation-z2"
        (click)="openEditUrlOverlay()">
          <mat-icon>edit</mat-icon>
      </button>
    </div>
    <image-config *ngIf="_openEditUrlOverlay" [value]="_value" (imageValue)="updateImage($event)"></image-config>
  `,
      styles: [":host{display:flex;flex-direction:column;position:relative;margin-bottom:22px}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}.image-block:hover~.image-block-button,.image-block-button:hover{display:block}.image-block{min-width:0}.image-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.image-container{display:flex}::ng-deep .image-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}\n"]
    }]
  }], null, {
    element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['image']
    }]
  });
})();
class NgxEditorjsImageBlockMediator {}
NgxEditorjsImageBlockMediator.ɵfac = function NgxEditorjsImageBlockMediator_Factory(t) {
  return new (t || NgxEditorjsImageBlockMediator)();
};
NgxEditorjsImageBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsImageBlockMediator,
  selectors: [["ngx-editorjs-image-blockquotes-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 4,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName", "savedAction"]],
  template: function NgxEditorjsImageBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-image-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName)("savedAction", ctx.savedAction);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, NgxEditorjsImageBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsImageBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-image-blockquotes-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-image-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-image-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, NgxEditorjsImageBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsImageBlockModule {}
NgxEditorjsImageBlockModule.ɵfac = function NgxEditorjsImageBlockModule_Factory(t) {
  return new (t || NgxEditorjsImageBlockModule)();
};
NgxEditorjsImageBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorjsImageBlockModule
});
NgxEditorjsImageBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsImageBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [],
      exports: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-editorjs-image-block
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 37787:
/*!***************************************************************************************!*\
  !*** ./dist/ngx-editorjs-mermaid-block/fesm2020/tmdjr-ngx-editorjs-mermaid-block.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxEditorjsMermaidBlockComponent": () => (/* binding */ NgxEditorjsMermaidBlockComponent),
/* harmony export */   "NgxEditorjsMermaidBlockMediator": () => (/* binding */ NgxEditorjsMermaidBlockMediator),
/* harmony export */   "NgxEditorjsMermaidBlockService": () => (/* binding */ NgxEditorjsMermaidBlockService),
/* harmony export */   "NgxEditorjsMermaidClientBlockComponent": () => (/* binding */ NgxEditorjsMermaidClientBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var mermaid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mermaid */ 75132);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ 5489);















const _c0 = ["paragraph"];
const _c1 = ["mermaidContainer"];
function NgxEditorjsMermaidBlockComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mermaid-config", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mermaidValue", function NgxEditorjsMermaidBlockComponent_ng_container_0_Template_mermaid_config_mermaidValue_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.updateMermaid($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0._value);
  }
}
function NgxEditorjsMermaidBlockComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxEditorjsMermaidBlockComponent_ng_template_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.openEditUrlOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.activeMermaidClass)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r2._mermaidDiagramSVG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
class SafeHtmlPipe {
  constructor(sanitized) {
    this.sanitized = sanitized;
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) {
  return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafeHtmlPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safeHtml",
  type: SafeHtmlPipe,
  pure: true,
  standalone: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
    args: [{
      name: 'safeHtml',
      standalone: true
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer
    }];
  }, null);
})();
mermaid__WEBPACK_IMPORTED_MODULE_2__["default"].parseError = function (err, hash) {
  console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
class NgxEditorjsMermaidClientBlockComponent {
  constructor() {
    this.ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone);
    this._mermaidAPI = mermaid__WEBPACK_IMPORTED_MODULE_2__["default"].mermaidAPI;
    this._mermaidDiagramSVG = '';
    this.activeMermaidClass = 'flex-start';
  }
  set value(mermaidDiagram) {
    const uniqueId = `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.render(uniqueId, mermaidDiagram ?? '').then(data => this.ngZone.run(() => this._mermaidDiagramSVG = data.svg), error => console.warn(`Error: ${error}`));
    });
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.initialize({
        startOnLoad: false
      });
    });
  }
  set savedAction(action) {
    console.log('action', action);
    this.activeMermaidClass = action ?? 'flex-start';
  }
}
NgxEditorjsMermaidClientBlockComponent.ɵfac = function NgxEditorjsMermaidClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsMermaidClientBlockComponent)();
};
NgxEditorjsMermaidClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsMermaidClientBlockComponent,
  selectors: [["ngx-editorjs-mermaid-client-block"]],
  inputs: {
    value: "value",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 4,
  vars: 4,
  consts: [[1, "mermaid-container"], [1, "mermaid", 3, "ngClass", "innerHTML"], ["mermaidContainer", ""]],
  template: function NgxEditorjsMermaidClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safeHtml");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.activeMermaidClass)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx._mermaidDiagramSVG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid[_ngcontent-%COMP%]{width:100%;display:flex}.mermaid-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsMermaidClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-mermaid-client-block',
      template: `
    <div class="mermaid-container">
      <div
        #mermaidContainer
        [ngClass]="activeMermaidClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
    </div>
  `,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, SafeHtmlPipe],
      styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsMermaidBlockService {
  constructor() {}
}
NgxEditorjsMermaidBlockService.ɵfac = function NgxEditorjsMermaidBlockService_Factory(t) {
  return new (t || NgxEditorjsMermaidBlockService)();
};
NgxEditorjsMermaidBlockService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorjsMermaidBlockService,
  factory: NgxEditorjsMermaidBlockService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsMermaidBlockService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class MermaidConfigComponent {
  constructor() {
    this.codeMirrorOptions = {
      lineNumbers: true,
      theme: 'material-palenight',
      mode: 'text/typescript',
      extraKeys: {
        'Ctrl-Space': 'autocomplete'
      }
    };
    this.value = '';
    this.mermaidValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  changeValue(newValue) {
    this.value = newValue;
  }
  updateMermaid() {
    this.mermaidValue.emit(this.value);
  }
}
MermaidConfigComponent.ɵfac = function MermaidConfigComponent_Factory(t) {
  return new (t || MermaidConfigComponent)();
};
MermaidConfigComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MermaidConfigComponent,
  selectors: [["mermaid-config"]],
  inputs: {
    value: "value"
  },
  outputs: {
    mermaidValue: "mermaidValue"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 2,
  consts: [[1, "container"], [3, "ngModel", "options", "ngModelChange"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "click"]],
  template: function MermaidConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ngx-codemirror", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MermaidConfigComponent_Template_ngx_codemirror_ngModelChange_1_listener($event) {
        return ctx.changeValue($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MermaidConfigComponent_Template_button_click_3_listener() {
        return ctx.updateMermaid();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("options", ctx.codeMirrorOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_4__.CodemirrorModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_4__.CodemirrorComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton],
  styles: ["[_nghost-%COMP%]{width:100%;display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}[_nghost-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}[_nghost-%COMP%]   .answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}[_nghost-%COMP%]     .CodeMirror{height:250px}.container[_ngcontent-%COMP%]{padding-bottom:20px}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MermaidConfigComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mermaid-config',
      standalone: true,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_4__.CodemirrorModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule],
      template: `
    <div class="container">
    <ngx-codemirror
      (ngModelChange)="changeValue($event)"
      [ngModel]="value"
      [options]="codeMirrorOptions">
    </ngx-codemirror>
    </div>
    <div class="action-group">
      <button mat-flat-button color="accent" type="button" (click)="updateMermaid()">Update</button>
    </div>
  `,
      styles: [":host{width:100%;display:flex;flex-direction:column;border-radius:5px;margin:16px auto;position:relative;z-index:1}:host .action-group{display:flex;justify-content:flex-end;gap:10px}:host .answers-action-group{padding-bottom:20px}:host ::ng-deep .CodeMirror{height:250px}.container{padding-bottom:20px}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mermaidValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
mermaid__WEBPACK_IMPORTED_MODULE_2__["default"].parseError = function (err, hash) {
  console.warn(`Error parsing mermaid diagram: ${err} ${hash}`);
};
class NgxEditorjsMermaidBlockComponent extends _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_7__.BaseBlockComponent {
  constructor() {
    super(...arguments);
    this.useInlineToolbar = false;
    this.useInputType = false;
    this.useOnPasteHTMLRemoval = false;
    this._mermaidAPI = mermaid__WEBPACK_IMPORTED_MODULE_2__["default"].mermaidAPI;
    this._openEditMermaidOverlay = false;
    this._value = '';
    this._mermaidDiagramSVG = '';
    this.activeMermaidClass = 'flex-start';
    this.blockOptionActions = [{
      action: 'flex-start',
      icon: 'format_align_left'
    }, {
      action: 'center',
      icon: 'format_align_center'
    }, {
      action: 'flex-end',
      icon: 'format_align_right'
    }];
  }
  renderMermaidDiagram(mermaidDiagram) {
    const uniqueId = `mermaid-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.render(uniqueId, mermaidDiagram).then(data => this.ngZone.run(() => this._mermaidDiagramSVG = data.svg), error => console.warn(`Error: ${error}`));
    });
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this._mermaidAPI.initialize({
        startOnLoad: false
      });
    });
    if (this.value) {
      this.renderMermaidDiagram(this.value);
      this._value = this.value;
    } else {
      this.openEditUrlOverlay();
    }
    super.ngOnInit();
  }
  changeValue(value) {
    super.changeValue(value);
  }
  handleBlockOptionAction(action) {
    this.activeMermaidClass = action ?? 'flex-start';
    super.handleBlockOptionAction(action);
  }
  openEditUrlOverlay() {
    this._openEditMermaidOverlay = true;
  }
  updateMermaid(value) {
    this._value = value;
    this.renderMermaidDiagram(value);
    this.changeValue(value);
    this._openEditMermaidOverlay = false;
  }
}
NgxEditorjsMermaidBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsMermaidBlockComponent_BaseFactory;
  return function NgxEditorjsMermaidBlockComponent_Factory(t) {
    return (ɵNgxEditorjsMermaidBlockComponent_BaseFactory || (ɵNgxEditorjsMermaidBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsMermaidBlockComponent)))(t || NgxEditorjsMermaidBlockComponent);
  };
}();
NgxEditorjsMermaidBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsMermaidBlockComponent,
  selectors: [["ngx-editorjs-mermaid-block"]],
  viewQuery: function NgxEditorjsMermaidBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mermaidContainer = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "mermaidValue"], [1, "mermaid-container"], [1, "mermaid", 3, "ngClass", "innerHTML"], ["mermaidContainer", ""], ["mat-mini-fab", "", 1, "mermaid-block-button", "mat-elevation-z2", 3, "click"]],
  template: function NgxEditorjsMermaidBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxEditorjsMermaidBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxEditorjsMermaidBlockComponent_ng_template_1_Template, 7, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._openEditMermaidOverlay)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, MermaidConfigComponent, SafeHtmlPipe],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid[_ngcontent-%COMP%]{width:100%;display:flex}.mermaid[_ngcontent-%COMP%]:hover ~ .mermaid-block-button[_ngcontent-%COMP%], .mermaid-block-button[_ngcontent-%COMP%]:hover{display:block}.mermaid-block-button[_ngcontent-%COMP%]{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container[_ngcontent-%COMP%]{display:flex}[_nghost-%COMP%]   .flex-start[_ngcontent-%COMP%]{justify-content:flex-start}[_nghost-%COMP%]   .flex-end[_ngcontent-%COMP%]{justify-content:flex-end}[_nghost-%COMP%]   .center[_ngcontent-%COMP%]{justify-content:center}[_nghost-%COMP%]   .stretch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}  .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsMermaidBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-mermaid-block',
      template: `
  <ng-container *ngIf="_openEditMermaidOverlay; else elseTemplate">
    <mermaid-config [value]="_value" (mermaidValue)="updateMermaid($event)"></mermaid-config>
  </ng-container>
  <ng-template #elseTemplate>
    <div class="mermaid-container"> 
      <div
        #mermaidContainer
        [ngClass]="activeMermaidClass"
        [innerHTML]="_mermaidDiagramSVG | safeHtml"
        class="mermaid"></div>
      <button  
        mat-mini-fab 
        class="mermaid-block-button mat-elevation-z2"
        (click)="openEditUrlOverlay()">
          <mat-icon>edit</mat-icon>
      </button>
    </div>
  </ng-template>
  `,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_6__.MatLegacyButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, MermaidConfigComponent, SafeHtmlPipe],
      styles: [":host{display:flex;flex-direction:column;position:relative;padding-bottom:22px}.mermaid{width:100%;display:flex}.mermaid:hover~.mermaid-block-button,.mermaid-block-button:hover{display:block}.mermaid-block-button{position:absolute;top:6px;left:6px;z-index:1;display:none;width:32px;height:32px}.mermaid-container{display:flex}:host .flex-start{justify-content:flex-start}:host .flex-end{justify-content:flex-end}:host .center{justify-content:center}:host .stretch img{width:100%}::ng-deep .mermaid-block-button .mat-button-wrapper .mat-icon{font-size:1.6rem;vertical-align:baseline}\n"]
    }]
  }], null, {
    element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['paragraph']
    }],
    mermaidContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['mermaidContainer']
    }]
  });
})();
class NgxEditorjsMermaidBlockMediator {}
NgxEditorjsMermaidBlockMediator.ɵfac = function NgxEditorjsMermaidBlockMediator_Factory(t) {
  return new (t || NgxEditorjsMermaidBlockMediator)();
};
NgxEditorjsMermaidBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsMermaidBlockMediator,
  selectors: [["ngx-editorjs-mermaid-blockquotes-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 4,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName", "savedAction"]],
  template: function NgxEditorjsMermaidBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-mermaid-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName)("savedAction", ctx.savedAction);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, NgxEditorjsMermaidBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsMermaidBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-mermaid-blockquotes-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-mermaid-block [blockId]="blockId" [formControlName]="formControlName" [savedAction]="savedAction"></ngx-editorjs-mermaid-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, NgxEditorjsMermaidBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 * Public API Surface of ngx-editorjs-mermaid-block
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 58968:
/*!*******************************************************************************************!*\
  !*** ./dist/ngx-editorjs-paragraph-block/fesm2020/tmdjr-ngx-editorjs-paragraph-block.mjs ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxEditorParagraphBlockModule": () => (/* binding */ NgxEditorParagraphBlockModule),
/* harmony export */   "NgxEditorParagraphBlockService": () => (/* binding */ NgxEditorParagraphBlockService),
/* harmony export */   "NgxEditorjsParagraphBlockComponent": () => (/* binding */ NgxEditorjsParagraphBlockComponent),
/* harmony export */   "NgxEditorjsParagraphBlockMediator": () => (/* binding */ NgxEditorjsParagraphBlockMediator),
/* harmony export */   "NgxEditorjsParagraphClientBlockComponent": () => (/* binding */ NgxEditorjsParagraphClientBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);





const _c0 = ["paragraph"];
const _c1 = "[_nghost-%COMP%]{display:flex;flex-direction:column}p[_ngcontent-%COMP%]{font-size:1.6rem;line-height:3.2rem}";
class NgxEditorParagraphBlockService {
  constructor() {}
}
NgxEditorParagraphBlockService.ɵfac = function NgxEditorParagraphBlockService_Factory(t) {
  return new (t || NgxEditorParagraphBlockService)();
};
NgxEditorParagraphBlockService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorParagraphBlockService,
  factory: NgxEditorParagraphBlockService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorParagraphBlockService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
class NgxEditorjsParagraphBlockComponent extends _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__.BaseBlockComponent {
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.viewChild = this.element;
  }
  onMouseEnter(event) {
    super.onMouseEnter(event);
  }
}
NgxEditorjsParagraphBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsParagraphBlockComponent_BaseFactory;
  return function NgxEditorjsParagraphBlockComponent_Factory(t) {
    return (ɵNgxEditorjsParagraphBlockComponent_BaseFactory || (ɵNgxEditorjsParagraphBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsParagraphBlockComponent)))(t || NgxEditorjsParagraphBlockComponent);
  };
}();
NgxEditorjsParagraphBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsParagraphBlockComponent,
  selectors: [["ngx-editorjs-paragraph-block"]],
  viewQuery: function NgxEditorjsParagraphBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["contenteditable", "", 1, "flex-spacer", 3, "autofocus", "innerHTML", "focus"], ["paragraph", ""]],
  template: function NgxEditorjsParagraphBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsParagraphBlockComponent_Template_p_focus_0_listener($event) {
        return ctx.onMouseEnter($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx._autofocus)("innerHTML", ctx.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
  },
  dependencies: [_tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__.AutofocusDirective],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}p[_ngcontent-%COMP%]{font-size:1.6rem;line-height:3.2rem}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsParagraphBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-paragraph-block',
      template: `
    <p class="flex-spacer" #paragraph contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></p>
  `,
      imports: [_tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_1__.AutofocusDirective],
      styles: [":host{display:flex;flex-direction:column}p{font-size:1.6rem;line-height:3.2rem}\n"]
    }]
  }], null, {
    element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['paragraph']
    }]
  });
})();
class NgxEditorjsParagraphClientBlockComponent {
  constructor() {
    this.value = '';
  }
}
NgxEditorjsParagraphClientBlockComponent.ɵfac = function NgxEditorjsParagraphClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsParagraphClientBlockComponent)();
};
NgxEditorjsParagraphClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsParagraphClientBlockComponent,
  selectors: [["ngx-editorjs-paragraph-client-block"]],
  inputs: {
    value: "value"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[1, "flex-spacer", 3, "innerHTML"]],
  template: function NgxEditorjsParagraphClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
  },
  styles: [_c1]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsParagraphClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-paragraph-client-block',
      template: `
    <p class="flex-spacer" [innerHTML]="value"></p>
  `,
      imports: [],
      styles: [":host{display:flex;flex-direction:column}p{font-size:1.6rem;line-height:3.2rem}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsParagraphBlockMediator {}
NgxEditorjsParagraphBlockMediator.ɵfac = function NgxEditorjsParagraphBlockMediator_Factory(t) {
  return new (t || NgxEditorjsParagraphBlockMediator)();
};
NgxEditorjsParagraphBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsParagraphBlockMediator,
  selectors: [["ngx-editorjs-meditator-paragraph-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName"]],
  template: function NgxEditorjsParagraphBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-paragraph-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, NgxEditorjsParagraphBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsParagraphBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-meditator-paragraph-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-paragraph-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-paragraph-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsParagraphBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorParagraphBlockModule {}
NgxEditorParagraphBlockModule.ɵfac = function NgxEditorParagraphBlockModule_Factory(t) {
  return new (t || NgxEditorParagraphBlockModule)();
};
NgxEditorParagraphBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorParagraphBlockModule
});
NgxEditorParagraphBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorParagraphBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [],
      exports: []
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-editorjs-paragraph-block
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 34744:
/*!*********************************************************************************!*\
  !*** ./dist/ngx-editorjs-quiz-block/fesm2020/tmdjr-ngx-editorjs-quiz-block.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxEditorjsQuizBlockComponent": () => (/* binding */ NgxEditorjsQuizBlockComponent),
/* harmony export */   "NgxEditorjsQuizBlockMediator": () => (/* binding */ NgxEditorjsQuizBlockMediator),
/* harmony export */   "NgxEditorjsQuizBlockService": () => (/* binding */ NgxEditorjsQuizBlockService),
/* harmony export */   "NgxEditorjsQuizClientBlockComponent": () => (/* binding */ NgxEditorjsQuizClientBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/legacy-button */ 69159);
/* harmony import */ var _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/legacy-radio */ 3493);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tmdjr/ngx-editorjs */ 51753);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/legacy-select */ 36002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-core */ 57090);





















function QuizConfigComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.quizConfigFormErrorMessages["question"]);
  }
}
function QuizConfigComponent_ng_container_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizConfigComponent_ng_container_12_div_6_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.removeRatioOption(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Option ", i_r8 + 1, "");
  }
}
function QuizConfigComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2) Create the possible answers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(Create at least 2 options)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuizConfigComponent_ng_container_12_div_6_Template, 9, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12)(8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizConfigComponent_ng_container_12_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.addRatioOption());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ratioOptions.controls);
  }
}
function QuizConfigComponent_ng_container_13_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", (tmp_0_0 = option_r15.get("value")) == null ? null : tmp_0_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (tmp_1_0 = option_r15.get("value")) == null ? null : tmp_1_0.value, " ");
  }
}
function QuizConfigComponent_ng_container_13_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.quizConfigFormErrorMessages["correctAnswer"]);
  }
}
function QuizConfigComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "3) Select the correct answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuizConfigComponent_ng_container_13_mat_option_7_Template, 2, 2, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuizConfigComponent_ng_container_13_mat_error_8_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.ratioOptions.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.quizConfigForm.get("correctAnswer")) == null ? null : tmp_1_0.errors);
  }
}
function QuizConfigComponent_ng_container_14_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.quizConfigFormErrorMessages["correctAnswerResponse"]);
  }
}
function QuizConfigComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "4) Correct answer response.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 22, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuizConfigComponent_ng_container_14_mat_error_8_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.quizConfigForm.get("correctAnswerResponse")) == null ? null : tmp_0_0.errors);
  }
}
function QuizConfigComponent_ng_container_15_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.quizConfigFormErrorMessages["incorrectAnswerResponse"]);
  }
}
function QuizConfigComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "5) Incorrect answer response.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Response");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 23, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuizConfigComponent_ng_container_15_mat_error_8_Template, 2, 1, "mat-error", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.quizConfigForm.get("incorrectAnswerResponse")) == null ? null : tmp_0_0.errors);
  }
}
const _c0 = ["paragraph"];
function NgxEditorjsQuizBlockComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "quiz-config", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("quizValue", function NgxEditorjsQuizBlockComponent_ng_container_0_Template_quiz_config_quizValue_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.updateQuiz($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0._value);
  }
}
function NgxEditorjsQuizBlockComponent_ng_template_1_mat_radio_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r7.value);
  }
}
function NgxEditorjsQuizBlockComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", null, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxEditorjsQuizBlockComponent_ng_template_1_mat_radio_button_7_Template, 2, 2, "mat-radio-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxEditorjsQuizBlockComponent_ng_template_1_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.openEditQuizOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2._value.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2._value.correctAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2._value.ratioOptions);
  }
}
function NgxEditorjsQuizClientBlockComponent_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isAnswerCorrect ? "successful-text" : "failure-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.answerResponse);
  }
}
function NgxEditorjsQuizClientBlockComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "mat-radio-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r3.value);
  }
}
class NgxEditorjsQuizBlockService {
  constructor() {}
}
NgxEditorjsQuizBlockService.ɵfac = function NgxEditorjsQuizBlockService_Factory(t) {
  return new (t || NgxEditorjsQuizBlockService)();
};
NgxEditorjsQuizBlockService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorjsQuizBlockService,
  factory: NgxEditorjsQuizBlockService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsQuizBlockService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [];
  }, null);
})();
function validateRatioOptions() {
  return control => {
    const optionsArray = control;
    if (optionsArray.controls.length < 2) {
      return {
        'notEnoughOptions': true
      };
    }
    return null;
  };
}
class QuizConfigComponent {
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
    this.destory = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.errorMessages = {
      required: 'Required'
    };
    this.quizConfigFormErrorMessages = {
      question: '',
      correctAnswer: ''
    };
    this.quizValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get ratioOptions() {
    return this.quizConfigForm.get('ratioOptions');
  }
  ngOnInit() {
    this.quizConfigForm = this.formBuilder.group({
      question: [this.value.question ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      correctAnswer: [this.value.correctAnswer ?? undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      correctAnswerResponse: [this.value.correctAnswerResponse ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      incorrectAnswerResponse: [this.value.incorrectAnswerResponse ?? '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      ratioOptions: this.formBuilder.array((this.value.ratioOptions ?? []).map(option => this.formBuilder.group({
        value: [option.value, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
      })), validateRatioOptions())
    });
    this.quizConfigForm.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destory)).subscribe(() => this.setErrorsMessages(this.quizConfigForm, this.quizConfigFormErrorMessages));
  }
  ngOnDestroy() {
    this.destory.next(true);
  }
  updateQuiz() {
    this.quizValue.emit(this.quizConfigForm.value);
  }
  closeConfig() {
    this.quizValue.emit(this.value);
  }
  addRatioOption() {
    const option = this.formBuilder.group({
      value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.ratioOptions.push(option);
  }
  removeRatioOption(index) {
    this.quizConfigForm.get('correctAnswer')?.setValue(undefined);
    this.ratioOptions.removeAt(index);
  }
  setErrorsMessages(formGroup, formControlMessages) {
    Object.keys(formGroup.controls).forEach(element => {
      const errors = formGroup.get(element)?.errors;
      if (errors) {
        const error = Object.keys(errors)[0];
        formControlMessages[element] = this.errorMessages[error];
      }
    });
  }
}
QuizConfigComponent.ɵfac = function QuizConfigComponent_Factory(t) {
  return new (t || QuizConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
QuizConfigComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: QuizConfigComponent,
  selectors: [["quiz-config"]],
  inputs: {
    value: "value"
  },
  outputs: {
    quizValue: "quizValue"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 21,
  vars: 7,
  consts: [[1, "quiz-block-modal"], [3, "formGroup"], ["mat-dialog-title", ""], ["appearance", "outline", "color", "accent"], ["matInput", "", "formControlName", "question"], ["title", ""], [4, "ngIf"], [1, "action-group"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], ["formArrayName", "ratioOptions"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "answers-action-group"], ["mat-raised-button", "", "color", "accent", "type", "button", 3, "click"], [3, "formGroupName"], [1, "ratio-option"], ["appearance", "outline", "color", "accent", 1, "ratio-option-input"], ["matInput", "", "type", "text", "formControlName", "value"], ["mat-icon-button", "", "color", "warn", "type", "button", 3, "click"], ["formControlName", "correctAnswer"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "correctAnswerResponse"], ["matInput", "", "formControlName", "incorrectAnswerResponse"]],
  template: function QuizConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quiz Configuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "1) Create a Question.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3)(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Question");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuizConfigComponent_mat_error_11_Template, 2, 1, "mat-error", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuizConfigComponent_ng_container_12_Template, 10, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuizConfigComponent_ng_container_13_Template, 9, 2, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuizConfigComponent_ng_container_14_Template, 9, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuizConfigComponent_ng_container_15_Template, 9, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7)(17, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizConfigComponent_Template_button_click_17_listener() {
        return ctx.updateQuiz();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuizConfigComponent_Template_button_click_19_listener() {
        return ctx.closeConfig();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.quizConfigForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_1_0.errors);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_2_0.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_3_0.valid) && ((tmp_3_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_3_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_4_0.valid) && ((tmp_4_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_4_0.valid) && ((tmp_4_0 = ctx.quizConfigForm.get("correctAnswer")) == null ? null : tmp_4_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.quizConfigForm.get("question")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx.quizConfigForm.get("ratioOptions")) == null ? null : tmp_5_0.valid) && ((tmp_5_0 = ctx.quizConfigForm.get("correctAnswer")) == null ? null : tmp_5_0.valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quizConfigForm.invalid);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInputModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyError, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInput, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormFieldModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelectModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelect, _angular_material_legacy_core__WEBPACK_IMPORTED_MODULE_9__.MatLegacyOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName],
  styles: ["[_nghost-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}[_nghost-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   form[_ngcontent-%COMP%]   .action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}.answers-action-group[_ngcontent-%COMP%]{padding-bottom:20px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#f0ad4e}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuizConfigComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'quiz-config',
      standalone: true,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div class="quiz-block-modal" >
      <form [formGroup]="quizConfigForm">

        <h1 mat-dialog-title>Quiz Configuration</h1>

        <h2>1) Create a Question.</h2>
        <mat-form-field appearance="outline" color="accent">
          <mat-label>Question</mat-label>
          <textarea #title matInput formControlName="question"></textarea>
          <mat-error *ngIf="quizConfigForm.get('question')?.errors">{{quizConfigFormErrorMessages['question']}}</mat-error>
        </mat-form-field>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid">
          <h2>2) Create the possible answers <span>(Create at least 2 options)</span></h2>
          <div formArrayName="ratioOptions">
            <div *ngFor="let option of ratioOptions.controls; let i = index" [formGroupName]="i">
              <div class="ratio-option">
                <mat-form-field appearance="outline" color="accent" class="ratio-option-input">
                  <mat-label>Option {{i + 1}}</mat-label>
                  <input matInput type="text" formControlName="value"/>
                </mat-form-field>
                <button mat-icon-button color="warn" type="button" (click)="removeRatioOption(i)">
                  <mat-icon>delete</mat-icon>
                </button>
              </div>
            </div>
            <div class="answers-action-group">
              <button mat-raised-button color="accent" type="button" (click)="addRatioOption()">Add Answer</button>
            </div>
          </div>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid && quizConfigForm.get('ratioOptions')?.valid">
          <h2>3) Select the correct answer</h2>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Answer</mat-label>
            <mat-select formControlName="correctAnswer">
              <mat-option *ngFor="let option of ratioOptions.controls; let i = index" [value]="option.get('value')?.value">
                {{ option.get('value')?.value }}
              </mat-option>
            </mat-select>
            <mat-error *ngIf="quizConfigForm.get('correctAnswer')?.errors">{{quizConfigFormErrorMessages['correctAnswer']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid &&  quizConfigForm.get('ratioOptions')?.valid && quizConfigForm.get('correctAnswer')?.valid">
          <h2>4) Correct answer response.</h2>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea #title matInput formControlName="correctAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('correctAnswerResponse')?.errors">{{quizConfigFormErrorMessages['correctAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <ng-container *ngIf="quizConfigForm.get('question')?.valid &&  quizConfigForm.get('ratioOptions')?.valid && quizConfigForm.get('correctAnswer')?.valid">
          <h2>5) Incorrect answer response.</h2>
          <mat-form-field appearance="outline" color="accent">
            <mat-label>Response</mat-label>
            <textarea #title matInput formControlName="incorrectAnswerResponse"></textarea>
            <mat-error *ngIf="quizConfigForm.get('incorrectAnswerResponse')?.errors">{{quizConfigFormErrorMessages['incorrectAnswerResponse']}}</mat-error>
          </mat-form-field>
        </ng-container>

        <div class="action-group">
          <button mat-flat-button color="accent" type="button" (click)="updateQuiz()" [disabled]="quizConfigForm.invalid">Save</button>
          <button mat-flat-button color="warn" type="button" (click)="closeConfig()">Cancel</button>
        </div>
      </form>
    </div>
  `,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_5__.MatLegacyInputModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLegacyFormFieldModule, _angular_material_legacy_select__WEBPACK_IMPORTED_MODULE_8__.MatLegacySelectModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule],
      styles: [":host{border:1px solid #ccc;border-radius:4px;padding:20px}:host form{display:flex;flex-direction:column}:host form .action-group{display:flex;justify-content:flex-end;gap:10px}.answers-action-group{padding-bottom:20px}:host h2 span{font-size:12px;color:#f0ad4e}\n"]
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    quizValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class NgxEditorjsQuizBlockComponent extends _tmdjr_ngx_editorjs__WEBPACK_IMPORTED_MODULE_11__.BaseBlockComponent {
  constructor() {
    super(...arguments);
    this.useInlineToolbar = false;
    this.useInputType = false;
    this._openEditQuizOverlay = false;
    this._value = {
      question: '',
      correctAnswer: '',
      ratioOptions: [],
      correctAnswerResponse: '',
      incorrectAnswerResponse: ''
    };
  }
  ngOnInit() {
    !!this.value && (this._value = JSON.parse(this.value));
    !this.value && this.openEditQuizOverlay();
    super.ngOnInit();
  }
  ngAfterViewInit() {
    super.viewChild = this.element;
  }
  onMouseEnter(event) {
    super.onMouseEnter(event);
  }
  openEditQuizOverlay() {
    this._openEditQuizOverlay = true;
  }
  updateQuiz(value) {
    this._value = value;
    this.changeValue(JSON.stringify(value));
    this._openEditQuizOverlay = false;
  }
}
NgxEditorjsQuizBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsQuizBlockComponent_BaseFactory;
  return function NgxEditorjsQuizBlockComponent_Factory(t) {
    return (ɵNgxEditorjsQuizBlockComponent_BaseFactory || (ɵNgxEditorjsQuizBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsQuizBlockComponent)))(t || NgxEditorjsQuizBlockComponent);
  };
}();
NgxEditorjsQuizBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsQuizBlockComponent,
  selectors: [["ngx-editorjs-quiz-block"]],
  viewQuery: function NgxEditorjsQuizBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [3, "value", "quizValue"], [1, "quiz-conatiner"], ["paragraph", ""], [1, "answer-ratio-group", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [3, "value"]],
  template: function NgxEditorjsQuizBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgxEditorjsQuizBlockComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgxEditorjsQuizBlockComponent_ng_template_1_Template, 11, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._openEditQuizOverlay)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioGroup, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, QuizConfigComponent],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsQuizBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-quiz-block',
      template: `
    <ng-container *ngIf="_openEditQuizOverlay; else elseTemplate">
      <quiz-config [value]="_value" (quizValue)="updateQuiz($event)"></quiz-config>
    </ng-container>
    <ng-template #elseTemplate>
      <div class="quiz-conatiner">
        <h1>Quiz</h1>
        <p #paragraph>{{ _value.question }}</p>
        <mat-radio-group class="answer-ratio-group" [value]="_value.correctAnswer">
          <mat-radio-button *ngFor="let option of _value.ratioOptions" [value]="option.value">{{ option.value }}</mat-radio-button>
        </mat-radio-group>
        <div class="action-group">
          <button mat-flat-button color="primary" type="button" (click)="openEditQuizOverlay()">Edit</button>
        </div>
      </div>
    </ng-template>
  `,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, QuizConfigComponent],
      styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"]
    }]
  }], null, {
    element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['paragraph']
    }]
  });
})();
class NgxEditorjsQuizClientBlockComponent {
  constructor() {
    this.isAnswerCorrect = undefined;
    this.answerResponse = undefined;
    this.answerSubmited = false;
    this.userAnswer = undefined;
    this._value = {
      question: '',
      correctAnswer: '',
      ratioOptions: [],
      correctAnswerResponse: '',
      incorrectAnswerResponse: ''
    };
  }
  set value(value) {
    !!value && (this._value = JSON.parse(value));
  }
  onQuizAnswerClick() {
    this.answerSubmited = true;
    this.isAnswerCorrect = this.userAnswer === this._value.correctAnswer;
    this.answerResponse = this.isAnswerCorrect ? this._value.correctAnswerResponse : this._value.incorrectAnswerResponse;
  }
}
NgxEditorjsQuizClientBlockComponent.ɵfac = function NgxEditorjsQuizClientBlockComponent_Factory(t) {
  return new (t || NgxEditorjsQuizClientBlockComponent)();
};
NgxEditorjsQuizClientBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsQuizClientBlockComponent,
  selectors: [["ngx-editorjs-image-client-block"]],
  inputs: {
    value: "value"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 13,
  vars: 6,
  consts: [[1, "quiz-conatiner"], [3, "ngClass", 4, "ngIf"], ["paragraph", ""], [3, "ngModel", "disabled", "ngModelChange"], ["type", "a", 1, "answer-ratio-group"], [4, "ngFor", "ngForOf"], [1, "action-group"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "disabled", "click"], [3, "ngClass"], [3, "value"]],
  template: function NgxEditorjsQuizClientBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quiz");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxEditorjsQuizClientBlockComponent_p_3_Template, 2, 2, "p", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-group", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NgxEditorjsQuizClientBlockComponent_Template_mat_radio_group_ngModelChange_7_listener($event) {
        return ctx.userAnswer = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgxEditorjsQuizClientBlockComponent_li_9_Template, 3, 2, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxEditorjsQuizClientBlockComponent_Template_button_click_11_listener() {
        return ctx.onQuizAnswerClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answerResponse);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._value.question);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userAnswer)("disabled", ctx.answerSubmited);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._value.ratioOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userAnswer || ctx.answerSubmited);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButton, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioGroup, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:21px}.answer-ratio-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:\")\";margin-right:.5em}.quiz-conatiner[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:10px}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsQuizClientBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-image-client-block',
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_7__.MatLegacyButtonModule, _angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_12__.MatLegacyRadioModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule],
      template: `
    <div class="quiz-conatiner">
      <h1>Quiz</h1>
      <p *ngIf="answerResponse" [ngClass]="isAnswerCorrect ? 'successful-text' : 'failure-text'" >{{ answerResponse }}</p>
      <p #paragraph>{{ _value.question }}</p>
      <mat-radio-group [(ngModel)]="userAnswer" [disabled]="answerSubmited">
        <ol type="a" class="answer-ratio-group">
          <li *ngFor="let option of _value.ratioOptions">
          <mat-radio-button [value]="option.value">{{ option.value }}</mat-radio-button>
          </li>
        </ol>
        
      </mat-radio-group>
      <div class="action-group">
        <button mat-flat-button color="primary" type="button" (click)="onQuizAnswerClick()" [disabled]="!userAnswer || answerSubmited">Submit</button>
      </div>
    </div>
  `,
      styles: [":host{display:flex;flex-direction:column;padding-bottom:22px}.answer-ratio-group{display:flex;flex-direction:column;gap:21px}.answer-ratio-group li:before{content:\")\";margin-right:.5em}.quiz-conatiner{border:1px solid #ccc;border-radius:4px;padding:20px}.action-group{display:flex;justify-content:flex-end;gap:10px}\n"]
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsQuizBlockMediator {}
NgxEditorjsQuizBlockMediator.ɵfac = function NgxEditorjsQuizBlockMediator_Factory(t) {
  return new (t || NgxEditorjsQuizBlockMediator)();
};
NgxEditorjsQuizBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsQuizBlockMediator,
  selectors: [["ngx-editorjs-quiz-paragraph-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 3,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName"]],
  template: function NgxEditorjsQuizBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-quiz-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, NgxEditorjsQuizBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsQuizBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-quiz-paragraph-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-quiz-block [blockId]="blockId" [formControlName]="formControlName"></ngx-editorjs-quiz-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsQuizBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/*
 * Public API Surface of ngx-editorjs-quiz-block
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 51753:
/*!***********************************************************!*\
  !*** ./dist/ngx-editorjs/fesm2020/tmdjr-ngx-editorjs.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdjustBlockPositionActions": () => (/* binding */ AdjustBlockPositionActions),
/* harmony export */   "AutofocusDirective": () => (/* binding */ AutofocusDirective),
/* harmony export */   "BaseBlockComponent": () => (/* binding */ BaseBlockComponent),
/* harmony export */   "HeaderSearchableBlock": () => (/* binding */ HeaderSearchableBlock),
/* harmony export */   "NGX_EDITORJS_OPTIONS": () => (/* binding */ NGX_EDITORJS_OPTIONS),
/* harmony export */   "NgxEditorjsComponent": () => (/* binding */ NgxEditorjsComponent),
/* harmony export */   "NgxEditorjsModule": () => (/* binding */ NgxEditorjsModule),
/* harmony export */   "NgxEditorjsService": () => (/* binding */ NgxEditorjsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/portal */ 17520);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/legacy-form-field */ 41204);
/* harmony import */ var _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/legacy-input */ 52044);
/* harmony import */ var _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/legacy-list */ 60744);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 57822);




















function SearchableBlockListComponent_mat_list_5_mat_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SearchableBlockListComponent_mat_list_5_mat_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchableBlockListComponent_mat_list_5_mat_list_item_2_Template_mat_list_item_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const block_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.addBlock(block_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const block_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r4.name, " ");
  }
}
function SearchableBlockListComponent_mat_list_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchableBlockListComponent_mat_list_5_mat_list_item_1_Template, 2, 0, "mat-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchableBlockListComponent_mat_list_5_mat_list_item_2_Template, 2, 1, "mat-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const filteredBlocks_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filteredBlocks_r1.length <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", filteredBlocks_r1);
  }
}
function BlockOptionsListComponent_div_11_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blockOptionAction_r1.icon);
  }
}
function BlockOptionsListComponent_div_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blockOptionAction_r1.text);
  }
}
function BlockOptionsListComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockOptionsListComponent_div_11_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const blockOptionAction_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.handleBlockOptionAction(blockOptionAction_r1.action));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockOptionsListComponent_div_11_mat_icon_1_Template, 2, 1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockOptionsListComponent_div_11_span_2_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const blockOptionAction_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blockOptionAction_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", blockOptionAction_r1.text);
  }
}
function ToolbarBlockComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "searchable-block-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addBlock", function ToolbarBlockComponent_ng_template_10_Template_searchable_block_list_addBlock_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.addBlock($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ToolbarBlockComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "block-options-list", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("handleBlockOptionAction", function ToolbarBlockComponent_ng_template_11_Template_block_options_list_handleBlockOptionAction_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.handleBlockOptionAction($event));
    })("adjustBlockPosition", function ToolbarBlockComponent_ng_template_11_Template_block_options_list_adjustBlockPosition_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.adjustBlockPosition($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockOptionActions", ctx_r3.blockOptionActions);
  }
}
function InlineToolbarBlockComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InlineToolbarBlockComponent_div_44_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.url = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_div_44_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.createLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.url);
  }
}
const _c0 = ["header"];
function NgxEditorjsHeaderBlockComponent_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsHeaderBlockComponent_h2_2_Template_h2_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r1._autofocus)("innerHTML", ctx_r1.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderBlockComponent_h3_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsHeaderBlockComponent_h3_3_Template_h3_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r2._autofocus)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderBlockComponent_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsHeaderBlockComponent_h4_4_Template_h4_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r3._autofocus)("innerHTML", ctx_r3.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderBlockComponent_h5_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsHeaderBlockComponent_h5_5_Template_h5_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.onMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r4._autofocus)("innerHTML", ctx_r4.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderBlockComponent_h6_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsHeaderBlockComponent_h6_6_Template_h6_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r5._autofocus)("innerHTML", ctx_r5.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function NgxEditorjsHeaderBlockComponent_h1_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function NgxEditorjsHeaderBlockComponent_h1_7_Template_h1_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.onMouseEnter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autofocus", ctx_r6._autofocus)("innerHTML", ctx_r6.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
const _c1 = ["ngxEditor"];
const NGX_EDITORJS_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_EDITORJS_OPTIONS');
class NgxEditorjsService {
  constructor(options) {
    this.toolbarComponentDetachSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.toolbarComponentDetach$ = this.toolbarComponentDetachSubject.asObservable();
    this.adjustBlockPositionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.adjustBlockPosition$ = this.adjustBlockPositionSubject.asObservable();
    this.addNewBlockSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.addNewBlock$ = this.addNewBlockSubject.asObservable();
    this.updateBlockOptionActionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.updateBlockOptionAction$ = this.updateBlockOptionActionSubject.asObservable();
    this.blocks = options?.blocks || [];
  }
}
NgxEditorjsService.ɵfac = function NgxEditorjsService_Factory(t) {
  return new (t || NgxEditorjsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NGX_EDITORJS_OPTIONS, 8));
};
NgxEditorjsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NgxEditorjsService,
  factory: NgxEditorjsService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [NGX_EDITORJS_OPTIONS]
      }]
    }];
  }, null);
})();
var AdjustBlockPositionActions;
(function (AdjustBlockPositionActions) {
  AdjustBlockPositionActions["UP"] = "UP";
  AdjustBlockPositionActions["DOWN"] = "DOWN";
  AdjustBlockPositionActions["DELETE"] = "DELETE";
})(AdjustBlockPositionActions || (AdjustBlockPositionActions = {}));
class SearchableBlockListComponent {
  constructor(ngxEdotorjsService) {
    this.ngxEdotorjsService = ngxEdotorjsService;
    this.addBlockEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.blockCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl([]);
    // blocksDefaults: SearchableBlock[] = [
    //   { type: 'HeaderBlockMediator', name: 'Header', component: null },
    // ];
    this.filter$ = this.blockCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.startWith)(''));
    this.destory = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  ngOnInit() {
    // this.blocks = this.blocksDefaults.concat(this.ngxEdotorjsService.blocks);
    this.blocks = this.ngxEdotorjsService.blocks;
    this.filteredBlocks$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.blocks), this.filter$]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destory), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(([blocks, filterString]) => {
      if (typeof filterString !== 'string') filterString = '';
      filterString = filterString.replace(/\\/g, '');
      const pattern = filterString?.split('').map(v => `(?=.*${v})`).join('');
      const regex = new RegExp(`${pattern}`, 'gi');
      // return blocks.filter(block => regex.exec(block));
      return blocks.filter(block => block.name.match(regex));
    }));
  }
  ngOnDestroy() {
    this.destory.next(true);
  }
  addBlock(block) {
    this.addBlockEmitter.emit(block);
  }
}
SearchableBlockListComponent.ɵfac = function SearchableBlockListComponent_Factory(t) {
  return new (t || SearchableBlockListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxEditorjsService));
};
SearchableBlockListComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SearchableBlockListComponent,
  selectors: [["searchable-block-list"]],
  outputs: {
    addBlockEmitter: "addBlock"
  },
  decls: 7,
  vars: 5,
  consts: [[1, "block-list-container", "mat-elevation-z8"], ["appearance", "fill", "color", "accent"], ["matInput", "", 1, "filter-text", 3, "formControl", "autofocus"], ["class", "block-list-panel", 4, "ngIf"], [1, "block-list-panel"], ["class", "block-list-item", "matRipple", "", "mat-list-item", "", 4, "ngIf"], ["class", "block-list-item", "matRipple", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", "mat-list-item", "", 1, "block-list-item"], ["matRipple", "", "mat-list-item", "", 1, "block-list-item", 3, "click"]],
  template: function SearchableBlockListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filter");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchableBlockListComponent_mat_list_5_Template, 3, 2, "mat-list", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.blockCtrl)("autofocus", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.filteredBlocks$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormField, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyLabel, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInput, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyList, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: [".mat-list-base[_ngcontent-%COMP%]{padding-top:0;margin-top:-14px}.block-list-container[_ngcontent-%COMP%]{border-radius:4px}.block-list-panel[_ngcontent-%COMP%]{cursor:pointer;max-width:280px;max-height:240px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:auto}.block-list-item[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchableBlockListComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'searchable-block-list',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"block-list-container mat-elevation-z8\">\n  <mat-form-field appearance=\"fill\" color=\"accent\">\n    <mat-label>Filter</mat-label>\n    <input class=\"filter-text\"\n      matInput\n      [formControl]=\"blockCtrl\"\n      [autofocus]=\"true\">\n  </mat-form-field>\n  <mat-list class=\"block-list-panel\"\n    *ngIf=\"filteredBlocks$ | async; let filteredBlocks\">\n    <mat-list-item class=\"block-list-item\"\n      *ngIf=\"filteredBlocks.length <= 0\"\n      matRipple\n      mat-list-item>\n      No Results\n    </mat-list-item>\n    <mat-list-item class=\"block-list-item\"\n      *ngFor=\"let block of filteredBlocks\"\n      matRipple\n      mat-list-item\n      (click)=\"addBlock(block)\">\n      {{block.name}}\n    </mat-list-item>\n  </mat-list>\n</div>",
      styles: [".mat-list-base{padding-top:0;margin-top:-14px}.block-list-container{border-radius:4px}.block-list-panel{cursor:pointer;max-width:280px;max-height:240px;border-bottom-left-radius:4px;border-bottom-right-radius:4px;overflow:auto}.block-list-item{-webkit-user-select:none;user-select:none}\n"]
    }]
  }], function () {
    return [{
      type: NgxEditorjsService
    }];
  }, {
    addBlockEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['addBlock']
    }]
  });
})();
class BlockOptionsListComponent {
  constructor() {
    this.handleBlockOptionActionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.AdjustBlockPositionActions = AdjustBlockPositionActions;
    this.adjustBlockPositionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  adjustBlockPosition(action) {
    this.adjustBlockPositionEmitter.emit(action);
  }
  handleBlockOptionAction(action) {
    this.handleBlockOptionActionEmitter.emit(action);
  }
}
BlockOptionsListComponent.ɵfac = function BlockOptionsListComponent_Factory(t) {
  return new (t || BlockOptionsListComponent)();
};
BlockOptionsListComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlockOptionsListComponent,
  selectors: [["block-options-list"]],
  inputs: {
    blockOptionActions: "blockOptionActions"
  },
  outputs: {
    handleBlockOptionActionEmitter: "handleBlockOptionAction",
    adjustBlockPositionEmitter: "adjustBlockPosition"
  },
  decls: 12,
  vars: 1,
  consts: [[1, "block-list-container", "mat-elevation-z8"], [1, "block-option-list-panel"], ["matRipple", "", 1, "block-option-list-item", 3, "click"], ["class", "block-option-list-item", "matRipple", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "block-option-list-item-text", 4, "ngIf"], [1, "block-option-list-item-text"]],
  template: function BlockOptionsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockOptionsListComponent_Template_div_click_2_listener() {
        return ctx.adjustBlockPosition(ctx.AdjustBlockPositionActions.UP);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_upward");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockOptionsListComponent_Template_div_click_5_listener() {
        return ctx.adjustBlockPosition(ctx.AdjustBlockPositionActions.DELETE);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockOptionsListComponent_Template_div_click_8_listener() {
        return ctx.adjustBlockPosition(ctx.AdjustBlockPositionActions.DOWN);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "arrow_downward");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BlockOptionsListComponent_div_11_Template, 3, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blockOptionActions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple],
  styles: [".block-list-container[_ngcontent-%COMP%]{border-radius:4px}.block-option-list-panel[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:1px;width:128px;max-height:128px;border-radius:4px;overflow:auto}.block-option-list-item[_ngcontent-%COMP%]{cursor:pointer;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:4px}.block-option-list-item-text[_ngcontent-%COMP%]{font-size:16px}.block-option-list-item-text[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockOptionsListComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'block-options-list',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"block-list-container mat-elevation-z8\">\n  <div class=\"block-option-list-panel\">\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"adjustBlockPosition(AdjustBlockPositionActions.UP)\">\n      <mat-icon>arrow_upward</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"adjustBlockPosition(AdjustBlockPositionActions.DELETE)\">\n      <mat-icon>delete</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"adjustBlockPosition(AdjustBlockPositionActions.DOWN)\">\n      <mat-icon>arrow_downward</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      *ngFor=\"let blockOptionAction of blockOptionActions\"\n      (click)=\"handleBlockOptionAction(blockOptionAction.action)\"\n      matRipple>\n      <mat-icon *ngIf=\"blockOptionAction.icon\">{{blockOptionAction.icon}}</mat-icon>\n      <span *ngIf=\"blockOptionAction.text\" class=\"block-option-list-item-text\">{{blockOptionAction.text}}</span>\n    </div>\n  </div>\n</div>",
      styles: [".block-list-container{border-radius:4px}.block-option-list-panel{display:flex;flex-direction:row;flex-wrap:wrap;gap:1px;width:128px;max-height:128px;border-radius:4px;overflow:auto}.block-option-list-item{cursor:pointer;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:4px}.block-option-list-item-text{font-size:16px}.block-option-list-item-text{-webkit-user-select:none;user-select:none}\n"]
    }]
  }], function () {
    return [];
  }, {
    blockOptionActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    handleBlockOptionActionEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['handleBlockOptionAction']
    }],
    adjustBlockPositionEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['adjustBlockPosition']
    }]
  });
})();
class ToolbarBlockComponent {
  constructor(ngxEdotorjsService) {
    this.ngxEdotorjsService = ngxEdotorjsService;
    this.handleBlockOptionActionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.openBlocks = false;
    this.openBlocksOption = false;
  }
  openBlocksList() {
    this.openBlocks = !this.openBlocks;
  }
  openBlocksOptionList() {
    this.openBlocksOption = !this.openBlocksOption;
  }
  adjustBlockPosition(action) {
    this.ngxEdotorjsService.adjustBlockPositionSubject.next({
      blockId: this.blockId,
      action
    });
    this.closeLists();
  }
  addBlock({
    componentInstanceName,
    component
  }) {
    this.ngxEdotorjsService.addNewBlockSubject.next({
      blockId: this.blockId,
      component,
      componentInstanceName: componentInstanceName ?? ''
    });
    this.closeLists();
  }
  closeLists() {
    this.openBlocks = false;
    this.openBlocksOption = false;
  }
  handleBlockOptionAction(action) {
    this.handleBlockOptionActionEmitter.emit(action);
  }
}
ToolbarBlockComponent.ɵfac = function ToolbarBlockComponent_Factory(t) {
  return new (t || ToolbarBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxEditorjsService));
};
ToolbarBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ToolbarBlockComponent,
  selectors: [["toolbar-block"]],
  inputs: {
    blockId: "blockId",
    blockOptionActions: "blockOptionActions"
  },
  outputs: {
    handleBlockOptionActionEmitter: "handleBlockOptionAction"
  },
  decls: 12,
  vars: 11,
  consts: [[1, "toolbar-container"], [1, "toolbar-buttons-container"], ["cdkOverlayOrigin", "", "matRipple", "", 1, "toolbar-buttons", "mat-elevation-z4", 3, "click"], ["blockListTigger", "cdkOverlayOrigin"], [1, "material-icons"], ["blockOptionListTigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass", "overlayOutsideClick"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayBackdropClass", "overlayOutsideClick"], [3, "addBlock"], [3, "blockOptionActions", "handleBlockOptionAction", "adjustBlockPosition"]],
  template: function ToolbarBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockComponent_Template_div_click_2_listener() {
        return ctx.openBlocksList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarBlockComponent_Template_div_click_6_listener() {
        return ctx.openBlocksOptionList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "drag_indicator");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarBlockComponent_ng_template_10_Template, 1, 0, "ng-template", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function ToolbarBlockComponent_Template_ng_template_overlayOutsideClick_10_listener() {
        return ctx.openBlocks = false;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ToolbarBlockComponent_ng_template_11_Template, 1, 1, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("overlayOutsideClick", function ToolbarBlockComponent_Template_ng_template_overlayOutsideClick_11_listener() {
        return ctx.openBlocksOption = false;
      });
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.openBlocks)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOffsetY", 15)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r1)("cdkConnectedOverlayOpen", ctx.openBlocksOption)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayOffsetX", -49)("cdkConnectedOverlayOffsetY", 15)("cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop");
    }
  },
  dependencies: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.CdkConnectedOverlay, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.CdkOverlayOrigin, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, SearchableBlockListComponent, BlockOptionsListComponent],
  styles: ["[_nghost-%COMP%]{position:absolute;margin-left:-95px}.toolbar-buttons-container[_ngcontent-%COMP%]{display:flex;gap:10px}.toolbar-buttons[_ngcontent-%COMP%]{cursor:pointer;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:4px;margin-bottom:14px}.toolbar-buttons[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'toolbar-block',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"toolbar-container\">\n  <div class=\"toolbar-buttons-container\">\n    <div class=\"toolbar-buttons mat-elevation-z4\"\n      #blockListTigger=\"cdkOverlayOrigin\"\n      cdkOverlayOrigin\n      matRipple \n      (click)=\"openBlocksList()\">\n      <span class=\"material-icons\">add</span>\n    </div>\n    <div class=\"toolbar-buttons mat-elevation-z4\"\n      cdkOverlayOrigin\n      #blockOptionListTigger=\"cdkOverlayOrigin\"\n      matRipple\n      (click)=\"openBlocksOptionList()\">\n      <span class=\"material-icons\">drag_indicator</span>\n    </div>\n  </div>\n</div>\n\n<!-- Block type search list -->\n<ng-template cdkConnectedOverlay\n  (overlayOutsideClick)=\"openBlocks = false\"\n  [cdkConnectedOverlayOrigin]=\"blockListTigger\"\n  [cdkConnectedOverlayOpen]=\"openBlocks\"\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOffsetY]=\"15\"\n  [cdkConnectedOverlayBackdropClass]=\"'cdk-overlay-transparent-backdrop'\">\n  <searchable-block-list (addBlock)=\"addBlock($event)\"></searchable-block-list>\n</ng-template>\n\n\n<!-- Options List-->\n<ng-template\n  cdkConnectedOverlay\n  (overlayOutsideClick)=\"openBlocksOption = false\"\n  [cdkConnectedOverlayOrigin]=\"blockOptionListTigger\"\n  [cdkConnectedOverlayOpen]=\"openBlocksOption\"\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOffsetX]=\"-49\"\n  [cdkConnectedOverlayOffsetY]=\"15\"\n  [cdkConnectedOverlayBackdropClass]=\"'cdk-overlay-transparent-backdrop'\">\n  <block-options-list\n    [blockOptionActions]=\"blockOptionActions\"\n    (handleBlockOptionAction)=\"handleBlockOptionAction($event)\"\n    (adjustBlockPosition)=\"adjustBlockPosition($event)\"></block-options-list>\n</ng-template>\n\n\n\n",
      styles: [":host{position:absolute;margin-left:-95px}.toolbar-buttons-container{display:flex;gap:10px}.toolbar-buttons{cursor:pointer;width:30px;height:30px;display:flex;justify-content:center;align-items:center;border-radius:4px;margin-bottom:14px}.toolbar-buttons{-webkit-user-select:none;user-select:none}\n"]
    }]
  }], function () {
    return [{
      type: NgxEditorjsService
    }];
  }, {
    handleBlockOptionActionEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['handleBlockOptionAction']
    }],
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blockOptionActions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class InlineToolbarBlockComponent {
  constructor(renderer) {
    this.renderer = renderer;
    this.closeInlineToobarOverlayEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.url = '';
    this.showURLInputField = false;
    this.savedRanges = [];
  }
  ngOnInit() {}
  closeInlineToobarOverlay() {
    this.closeInlineToobarOverlayEmitter.emit();
  }
  addInlineTag(tag, optionValue) {
    // https://stackoverflow.com/questions/60581285/execcommand-is-now-obsolete-whats-the-alternative
    document.execCommand(tag, true, optionValue);
    this.closeInlineToobarOverlay();
  }
  addCustomInlineTag(tag, className) {
    const range = this.selection.getRangeAt(0);
    const element = this.renderer.createElement(tag);
    element.className = className ?? '';
    element.innerHTML = range.toString();
    range.deleteContents();
    range.insertNode(element);
    this.closeInlineToobarOverlay();
  }
  clearTags() {
    document.execCommand('removeFormat');
    document.execCommand('unlink');
    this.closeInlineToobarOverlay();
  }
  openUrlInput() {
    this.savedRanges.push(this.selection.getRangeAt(0));
    this.showURLInputField = true;
  }
  createLink() {
    this.selection.removeAllRanges();
    this.selection.addRange(this.savedRanges.pop());
    document.execCommand('createLink', false, this.url);
    this.closeInlineToobarOverlay();
  }
}
InlineToolbarBlockComponent.ɵfac = function InlineToolbarBlockComponent_Factory(t) {
  return new (t || InlineToolbarBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
InlineToolbarBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InlineToolbarBlockComponent,
  selectors: [["inline-toolbar-block"]],
  inputs: {
    selection: "selection"
  },
  outputs: {
    closeInlineToobarOverlayEmitter: "closeInlineToobarOverlay"
  },
  decls: 45,
  vars: 1,
  consts: [[1, "block-list-container", "mat-elevation-z8"], [1, "block-option-list-panel"], ["matRipple", "", 1, "block-option-list-item", 3, "click"], ["class", "block-option-list-panel", 4, "ngIf"], ["type", "text", "placeholder", "Enter URL", 1, "block-option-input", 3, "ngModel", "ngModelChange"]],
  template: function InlineToolbarBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_2_listener() {
        return ctx.addInlineTag("bold");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "format_bold");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_5_listener() {
        return ctx.addInlineTag("italic");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "format_italic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_8_listener() {
        return ctx.addInlineTag("underlined");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "format_underlined");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_11_listener() {
        return ctx.addInlineTag("strikethrough");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "strikethrough_s");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_14_listener() {
        return ctx.addCustomInlineTag("code", "inline-code-example");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_17_listener() {
        return ctx.openUrlInput();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "insert_link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_20_listener() {
        return ctx.clearTags();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "format_clear");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_23_listener() {
        return ctx.addInlineTag("justifyLeft");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "format_align_left");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_26_listener() {
        return ctx.addInlineTag("justifyCenter");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "format_align_center");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_29_listener() {
        return ctx.addInlineTag("justifyRight");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "format_align_right");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_32_listener() {
        return ctx.addInlineTag("justifyFull");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "format_align_justify");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_35_listener() {
        return ctx.addInlineTag("insertUnorderedList");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "format_list_bulleted");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_38_listener() {
        return ctx.addInlineTag("insertOrderedList");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "format_list_numbered");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InlineToolbarBlockComponent_Template_div_click_41_listener() {
        return ctx.addInlineTag("hiliteColor", "yellow");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "highlight");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, InlineToolbarBlockComponent_div_44_Template, 5, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showURLInputField);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRipple, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
  styles: [".block-list-container[_ngcontent-%COMP%]{border-radius:4px}.block-option-list-panel[_ngcontent-%COMP%]{display:flex;width:230px;flex-direction:row;flex-wrap:wrap;gap:1px;border-radius:4px;overflow:auto}.block-option-list-item[_ngcontent-%COMP%]{cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px}.block-option-input[_ngcontent-%COMP%]{width:197px;height:32px;border:none;outline:none;background-color:transparent;color:#000;font-size:14px;font-weight:400;padding:0 0 0 5px;margin:0;display:flex;align-items:center;justify-content:center;border-radius:4px;box-sizing:border-box}.block-option-list-item-text[_ngcontent-%COMP%]{font-size:16px}.block-option-list-item-text[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}"],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineToolbarBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'inline-toolbar-block',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"block-list-container mat-elevation-z8\">\n  <div class=\"block-option-list-panel\">\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('bold')\">\n      <mat-icon>format_bold</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('italic')\">\n      <mat-icon>format_italic</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('underlined')\">\n      <mat-icon>format_underlined</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('strikethrough')\">\n      <mat-icon>strikethrough_s</mat-icon>\n    </div>\n    <!-- <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('hiliteColor', 'red')\">\n      <mat-icon>highlight</mat-icon>\n    </div> -->\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addCustomInlineTag('code', 'inline-code-example')\">\n      <mat-icon>code</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"openUrlInput()\">\n      <mat-icon>insert_link</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"clearTags()\">\n      <mat-icon>format_clear</mat-icon>\n    </div>\n\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('justifyLeft')\">\n      <mat-icon>format_align_left</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('justifyCenter')\">\n      <mat-icon>format_align_center</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('justifyRight')\">\n      <mat-icon>format_align_right</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('justifyFull')\">\n      <mat-icon>format_align_justify</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('insertUnorderedList')\">\n      <mat-icon>format_list_bulleted</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('insertOrderedList')\">\n      <mat-icon>format_list_numbered</mat-icon>\n    </div>\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"addInlineTag('hiliteColor', 'yellow')\">\n      <mat-icon>highlight</mat-icon>\n    </div>\n  </div>\n  <div *ngIf=\"showURLInputField\" class=\"block-option-list-panel\">\n    <input type=\"text\" placeholder=\"Enter URL\" class=\"block-option-input\" [(ngModel)]=\"url\" />\n    <div class=\"block-option-list-item\"\n      matRipple\n      (click)=\"createLink()\">\n      <mat-icon>add</mat-icon>\n    </div>\n  </div>\n</div>\n",
      styles: [".block-list-container{border-radius:4px}.block-option-list-panel{display:flex;width:230px;flex-direction:row;flex-wrap:wrap;gap:1px;border-radius:4px;overflow:auto}.block-option-list-item{cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px}.block-option-input{width:197px;height:32px;border:none;outline:none;background-color:transparent;color:#000;font-size:14px;font-weight:400;padding:0 0 0 5px;margin:0;display:flex;align-items:center;justify-content:center;border-radius:4px;box-sizing:border-box}.block-option-list-item-text{font-size:16px}.block-option-list-item-text{-webkit-user-select:none;user-select:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    selection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    closeInlineToobarOverlayEmitter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closeInlineToobarOverlay']
    }]
  });
})();
class BaseBlockComponent {
  constructor(controlDir, appRef, injector, viewContainerRef, componentFactoryResolver, ngxEdotorjsService, overlay, ngZone) {
    this.controlDir = controlDir;
    this.appRef = appRef;
    this.injector = injector;
    this.viewContainerRef = viewContainerRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.ngxEdotorjsService = ngxEdotorjsService;
    this.overlay = overlay;
    this.ngZone = ngZone;
    this.destory = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._autofocus = true;
    this.isActive = false;
    this.error = '';
    this.escalateMsg = true;
    this.value = '';
    this.disabled = false;
    this.valid = true;
    this.basePortalOutlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__.DomPortalOutlet(this.viewContainerRef.element.nativeElement, this.componentFactoryResolver, this.appRef, this.injector);
    this.useInlineToolbar = true;
    this.useInputType = true;
    this.useOnPasteHTMLRemoval = true;
    this.onTouched = () => {};
    this.onChange = () => {};
    this.controlDir.valueAccessor = this;
  }
  set autofocus(value) {
    this._autofocus = value;
  }
  set savedAction(action) {
    this.handleBlockOptionAction(action);
  }
  ngOnInit() {
    this.controlDir.valueChanges?.subscribe(val => this.valueChange(val));
  }
  ngOnDestroy() {
    this.destory.next(true);
  }
  valueChange(value) {
    this.valid = this.controlDir.control?.status !== 'INVALID';
  }
  writeValue(value) {
    this.value = value ?? '';
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  onBlur(event) {
    this.isActive = event?.data !== '';
    this.escalateMsg = this.valid === false;
    this.onTouched();
  }
  onFocus() {
    this.isActive = true;
    this.escalateMsg = false;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  changeValue(value) {
    this.value = value;
    this.onChange(value);
  }
  onInput() {
    this.useInputType && this.onChange(this.viewChild.nativeElement.innerHTML);
  }
  onMouseUp(event) {
    requestAnimationFrame(() => this.checkToDisplayInlineToolbarBlock());
  }
  onMouseEnter(event) {
    this.removeAndAddToolbarBlock();
  }
  onPaste(event) {
    if (this.useOnPasteHTMLRemoval) {
      event.preventDefault();
      const text = event.clipboardData?.getData('text/plain');
      document.execCommand('insertText', false, text);
    }
  }
  removeAndAddToolbarBlock() {
    if (!this.basePortalOutlet.hasAttached()) {
      this.ngxEdotorjsService.toolbarComponentDetachSubject.next(true);
      this.toolbarBlockPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__.ComponentPortal(ToolbarBlockComponent);
      const toolbarComponent = this.basePortalOutlet.attach(this.toolbarBlockPortal);
      toolbarComponent.instance.blockId = this.blockId;
      toolbarComponent.instance.blockOptionActions = this.blockOptionActions;
      toolbarComponent.instance.handleBlockOptionActionEmitter.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destory)).subscribe(action => {
        this.ngxEdotorjsService.updateBlockOptionActionSubject.next({
          blockId: this.blockId,
          action
        });
        this.handleBlockOptionAction(action);
      });
      this.ngxEdotorjsService.toolbarComponentDetach$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => this.detachToolbarComponent());
    }
  }
  // Override this method in child component
  handleBlockOptionAction(action) {}
  detachToolbarComponent() {
    this.basePortalOutlet.detach();
    // this.viewContainerRef.remove(0);
  }

  checkToDisplayInlineToolbarBlock() {
    const selection = window.getSelection();
    if (this.useInlineToolbar && selection && selection.toString() !== '') {
      const range = selection.getRangeAt(0);
      const selectionRect = range.getBoundingClientRect();
      // console.log({
      //   event,
      //   selection,
      //   selectionText: selection?.toString(),
      //   range,
      //   selectionRect
      // });
      this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy: this.overlay.position().flexibleConnectedTo(selectionRect).withPositions([{
          offsetY: 8,
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }])
      });
      const inlineToolbar = this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_15__.ComponentPortal(InlineToolbarBlockComponent));
      inlineToolbar.instance.selection = selection;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.overlayRef.backdropClick(), inlineToolbar.instance.closeInlineToobarOverlayEmitter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => this.overlayRef.dispose());
    }
  }
}
BaseBlockComponent.ɵfac = function BaseBlockComponent_Factory(t) {
  return new (t || BaseBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxEditorjsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
BaseBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BaseBlockComponent,
  selectors: [["ng-component"]],
  hostBindings: function BaseBlockComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BaseBlockComponent_input_HostBindingHandler() {
        return ctx.onInput();
      })("mouseup", function BaseBlockComponent_mouseup_HostBindingHandler($event) {
        return ctx.onMouseUp($event.target);
      })("mouseenter", function BaseBlockComponent_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseEnter($event.target);
      })("paste", function BaseBlockComponent_paste_HostBindingHandler($event) {
        return ctx.onPaste($event);
      });
    }
  },
  inputs: {
    _autofocus: "_autofocus",
    blockId: "blockId",
    savedAction: "savedAction"
  },
  decls: 0,
  vars: 0,
  template: function BaseBlockComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: NgxEditorjsService
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    _autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['input']
    }],
    onMouseUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseup', ['$event.target']]
    }],
    onMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter', ['$event.target']]
    }],
    onPaste: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['paste', ['$event']]
    }]
  });
})();
class AutofocusDirective {
  set autofocus(condition) {
    this._autofocus = condition !== false;
  }
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
  ngAfterContentInit() {
    if (this._autofocus || typeof this._autofocus === 'undefined') {
      const nativeElement = this.elementRef.nativeElement;
      setTimeout(() => nativeElement.focus?.());
    }
  }
}
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) {
  return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
AutofocusDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: AutofocusDirective,
  selectors: [["", "autofocus", ""]],
  inputs: {
    autofocus: "autofocus"
  },
  standalone: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutofocusDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      standalone: true,
      selector: '[autofocus]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    autofocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgxEditorjsHeaderBlockComponent extends BaseBlockComponent {
  constructor() {
    super(...arguments);
    this.blockOptionActions = [{
      action: 'h1',
      text: 'H1'
    }, {
      action: 'h2',
      text: 'H2'
    }, {
      action: 'h3',
      text: 'H3'
    }, {
      action: 'h4',
      text: 'H4'
    }, {
      action: 'h5',
      text: 'H5'
    }, {
      action: 'h6',
      text: 'H6'
    }];
  }
  ngAfterViewInit() {
    super.viewChild = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(this.element.nativeElement.firstElementChild);
  }
  handleBlockOptionAction(action) {
    this.whichHeader = action;
    // Have to wait for the next frame to get the new element
    if (this.element) {
      requestAnimationFrame(() => {
        super.viewChild = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(this.element.nativeElement.firstElementChild);
        this.value = this.controlDir.control?.value ?? '';
      });
    }
  }
}
NgxEditorjsHeaderBlockComponent.ɵfac = /* @__PURE__ */function () {
  let ɵNgxEditorjsHeaderBlockComponent_BaseFactory;
  return function NgxEditorjsHeaderBlockComponent_Factory(t) {
    return (ɵNgxEditorjsHeaderBlockComponent_BaseFactory || (ɵNgxEditorjsHeaderBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](NgxEditorjsHeaderBlockComponent)))(t || NgxEditorjsHeaderBlockComponent);
  };
}();
NgxEditorjsHeaderBlockComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsHeaderBlockComponent,
  selectors: [["ngx-editorjs-header-block"]],
  viewQuery: function NgxEditorjsHeaderBlockComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.element = _t.first);
    }
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 6,
  consts: [[3, "ngSwitch"], ["header", ""], ["class", "flex-spacer", "contenteditable", "", 3, "autofocus", "innerHTML", "focus", 4, "ngSwitchCase"], ["class", "flex-spacer", "contenteditable", "", 3, "autofocus", "innerHTML", "focus", 4, "ngSwitchDefault"], ["contenteditable", "", 1, "flex-spacer", 3, "autofocus", "innerHTML", "focus"]],
  template: function NgxEditorjsHeaderBlockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgxEditorjsHeaderBlockComponent_h2_2_Template, 1, 2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgxEditorjsHeaderBlockComponent_h3_3_Template, 1, 2, "h3", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgxEditorjsHeaderBlockComponent_h4_4_Template, 1, 2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgxEditorjsHeaderBlockComponent_h5_5_Template, 1, 2, "h5", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgxEditorjsHeaderBlockComponent_h6_6_Template, 1, 2, "h6", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NgxEditorjsHeaderBlockComponent_h1_7_Template, 1, 2, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.whichHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "h6");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchDefault, AutofocusDirective],
  styles: ["[_nghost-%COMP%]{display:flex;flex-direction:column}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsHeaderBlockComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-header-block',
      template: `
    <span #header [ngSwitch]="whichHeader">
        <h2 *ngSwitchCase="'h2'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h2>
        <h3 *ngSwitchCase="'h3'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h3>
        <h4 *ngSwitchCase="'h4'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h4>
        <h5 *ngSwitchCase="'h5'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h5>
        <h6 *ngSwitchCase="'h6'" class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h6>
        <h1 *ngSwitchDefault class="flex-spacer" contenteditable [autofocus]="_autofocus" (focus)="onMouseEnter($event)" [innerHTML]="value"></h1>
    </span>
  `,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, AutofocusDirective],
      styles: [":host{display:flex;flex-direction:column}\n"]
    }]
  }], null, {
    element: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['header', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();
class NgxEditorjsHeaderBlockMediator {}
NgxEditorjsHeaderBlockMediator.ɵfac = function NgxEditorjsHeaderBlockMediator_Factory(t) {
  return new (t || NgxEditorjsHeaderBlockMediator)();
};
NgxEditorjsHeaderBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsHeaderBlockMediator,
  selectors: [["ngx-editorjs-meditator-header-block"]],
  inputs: {
    blockId: "blockId",
    form: "form",
    formControlName: "formControlName",
    savedAction: "savedAction"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 4,
  consts: [[3, "formGroup"], [3, "blockId", "formControlName", "savedAction"]],
  template: function NgxEditorjsHeaderBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-editorjs-header-block", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockId", ctx.blockId)("formControlName", ctx.formControlName)("savedAction", ctx.savedAction);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, NgxEditorjsHeaderBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsHeaderBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      standalone: true,
      selector: 'ngx-editorjs-meditator-header-block',
      template: `
    <div [formGroup]="form">
      <ngx-editorjs-header-block
        [blockId]="blockId"
        [formControlName]="formControlName"
        [savedAction]="savedAction"></ngx-editorjs-header-block>
    </div>
  `,
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsHeaderBlockComponent]
    }]
  }], null, {
    blockId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    savedAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

// ['header',{ type: 'header', dataClean: '' }],
// ['paragraph', { type: 'paragraph', dataClean: '' }],
// ['list', { type: 'list', dataClean: '' }],
// ['image', { type: 'image', dataClean: '' }],
// ['quote', { type: 'quote', dataClean: '' }],
// ['code', { type: 'code', dataClean: '' }],
// ['delimiter', { type: 'delimiter', dataClean: '' }],
// ['raw', { type: 'raw', dataClean: '' }],
// ['table', { type: 'table', dataClean: '' }],
// ['linkTool', { type: 'linkTool', dataClean: '' }],
// ['embed', { type: 'embed', dataClean: '' }],
// ['marker', { type: 'marker', dataClean: '' }],
// ['warning', { type: 'warning', dataClean: '' }],
// ['checklist', { type: 'checklist', dataClean: '' }],
// ['inlineCode', { type: 'inlineCode', dataClean: '' }],
// ['delimiter', { type: 'delimiter', dataClean: '' }],
const HeaderSearchableBlock = {
  name: 'Header',
  component: NgxEditorjsHeaderBlockMediator,
  componentInstanceName: 'NgxEditorjsHeaderBlockMediator'
};
class NgxEditorjsComponent {
  constructor(formBuilder, ngxEditorjsService) {
    this.formBuilder = formBuilder;
    this.ngxEditorjsService = ngxEditorjsService;
    this.valueRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.formGroup = this.formBuilder.group({});
    this.blockControlMap = new Map();
    this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  set inputData(blocks) {
    requestAnimationFrame(() => this.clearSortCreateNgxEditorjsBlocks(blocks));
  }
  ngOnInit() {
    // @TODO: add a way only add on first load
    this.ngxEditorjsService.blocks.unshift(HeaderSearchableBlock);
    // this.ngxOnInitForm.emit(this.formGroup);
    this.requestValue.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy)).subscribe(() => this.parentRequestCurrentValue());
    this.ngxEditorjsService.adjustBlockPosition$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy)).subscribe(adjustBlockPosition => {
      adjustBlockPosition.action === AdjustBlockPositionActions.DELETE ? this.deleteNgxEditorjsBlock(adjustBlockPosition) : this.moveNgxEditorjsBlock(adjustBlockPosition);
    });
    this.ngxEditorjsService.addNewBlock$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy)).subscribe(block => this.createNgxEditorjsBlock(block));
    this.ngxEditorjsService.updateBlockOptionAction$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy)).subscribe(block => this.updateNgxEditorjsBlock(block));
    // this.clearSortCreateNgxEditorjsBlocks([]);
  }

  ngOnDestroy() {
    // @todo: add a way only add on first load
    this.ngxEditorjsService.blocks.shift();
    this.destroy.next();
  }
  loadNgxEditorjsBlock({
    blockId,
    component,
    value,
    savedAction,
    componentInstanceName
  }) {
    this.formGroup.addControl(blockId, this.formBuilder.control(value, []));
    const componentRef = this.ngxEditor.createComponent(component, {
      index: this.ngxEditor.length
    });
    const blockMediator = componentRef.instance;
    blockMediator.blockId = blockId;
    blockMediator.form = this.formGroup;
    blockMediator.formControlName = blockId;
    blockMediator.savedAction = savedAction;
    this.blockControlMap.set(blockId, {
      sortIndex: this.ngxEditor.length - 1,
      componentRef: componentRef,
      componentInstanceName: componentInstanceName,
      dataClean: value,
      savedAction
    });
  }
  createNgxEditorjsBlock({
    blockId,
    component,
    componentInstanceName
  }) {
    if (!component || !blockId) return;
    const block = component ?? NgxEditorjsHeaderBlockMediator;
    const controlName = Math.random().toString(36).slice(2);
    let viewRef;
    if (blockId) viewRef = this.blockControlMap.get(blockId).componentRef.hostView;
    this.formGroup.addControl(controlName, this.formBuilder.control('', []));
    const sortIndex = viewRef ? this.ngxEditor.indexOf(viewRef) + 1 : 0;
    const componentRef = this.ngxEditor.createComponent(block, {
      index: sortIndex
    });
    const blockMediator = componentRef.instance;
    blockMediator.blockId = controlName;
    blockMediator.form = this.formGroup;
    blockMediator.formControlName = controlName;
    this.blockControlMap.forEach(block => {
      if (block.sortIndex >= sortIndex) block.sortIndex++;
    });
    this.blockControlMap.set(controlName, {
      sortIndex,
      dataClean: '',
      componentRef,
      componentInstanceName
    });
  }
  moveNgxEditorjsBlock({
    blockId,
    action
  }) {
    const viewRef = this.blockControlMap.get(blockId).componentRef.hostView;
    const sortIndex = this.ngxEditor.indexOf(viewRef);
    const newSortIndex = action === AdjustBlockPositionActions.UP ? sortIndex - 1 : sortIndex + 1;
    const inRange = newSortIndex >= 0 && newSortIndex <= this.ngxEditor.length - 1;
    this.ngxEditor.move(viewRef, inRange ? newSortIndex : sortIndex);
    this.blockControlMap.forEach(block => {
      if (block.sortIndex === sortIndex) block.sortIndex = newSortIndex;else if (block.sortIndex === newSortIndex) block.sortIndex = sortIndex;
    });
  }
  updateNgxEditorjsBlock({
    blockId,
    action
  }) {
    this.blockControlMap.forEach((block, blockIdKey) => {
      if (blockIdKey === blockId) block.savedAction = action;
    });
  }
  deleteNgxEditorjsBlock({
    blockId
  }) {
    const viewRef = this.blockControlMap.get(blockId).componentRef.hostView;
    const index = this.ngxEditor.indexOf(viewRef);
    if (this.ngxEditor.length - 1 !== 0) {
      this.blockControlMap.delete(blockId);
      this.ngxEditor.remove(index);
      this.blockControlMap.forEach(block => {
        if (block.sortIndex > index) block.sortIndex--;
      });
    }
  }
  parentRequestCurrentValue() {
    const blocks = [];
    this.blockControlMap.forEach((block, key) => {
      blocks.push({
        blockId: key,
        sortIndex: block.sortIndex,
        componentInstanceName: block.componentInstanceName,
        dataClean: this.formGroup.get(key)?.value,
        savedAction: block.savedAction
      });
    });
    this.valueRequested.emit(blocks);
  }
  clearSortCreateNgxEditorjsBlocks(blocks) {
    if (blocks === undefined || blocks.length === 0) {
      this.createNgxEditorjsBlock({
        blockId: null,
        component: null,
        componentInstanceName: ''
      });
      return;
    }
    // Clear
    this.ngxEditor.clear();
    this.blockControlMap.clear();
    // Sort
    blocks.sort((a, b) => a.sortIndex - b.sortIndex);
    // Create
    blocks.forEach(block => {
      const componentInstanceObject = this.ngxEditorjsService.blocks.find(b => b.componentInstanceName === block.componentInstanceName) ?? this.ngxEditorjsService.blocks[0];
      const createBlockAction = {
        blockId: block.blockId,
        component: componentInstanceObject?.component,
        componentInstanceName: block.componentInstanceName,
        value: block.dataClean,
        componentSortIndex: block.sortIndex,
        savedAction: block.savedAction
      };
      this.loadNgxEditorjsBlock(createBlockAction);
    });
  }
}
NgxEditorjsComponent.ɵfac = function NgxEditorjsComponent_Factory(t) {
  return new (t || NgxEditorjsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgxEditorjsService));
};
NgxEditorjsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NgxEditorjsComponent,
  selectors: [["ngx-editorjs"]],
  viewQuery: function NgxEditorjsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngxEditor = _t.first);
    }
  },
  inputs: {
    inputData: "inputData",
    requestValue: "requestValue"
  },
  outputs: {
    valueRequested: "valueRequested"
  },
  decls: 3,
  vars: 1,
  consts: [[3, "formGroup"], ["ngxEditor", ""]],
  template: function NgxEditorjsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-editorjs',
      template: `
    <form [formGroup]="formGroup">
      <ng-container #ngxEditor></ng-container>
    </form>
  `
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
    }, {
      type: NgxEditorjsService
    }];
  }, {
    inputData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    requestValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueRequested: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    ngxEditor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ngxEditor', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }]
  });
})();
class NgxEditorjsHeaderBlockModule {}
NgxEditorjsHeaderBlockModule.ɵfac = function NgxEditorjsHeaderBlockModule_Factory(t) {
  return new (t || NgxEditorjsHeaderBlockModule)();
};
NgxEditorjsHeaderBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorjsHeaderBlockModule
});
NgxEditorjsHeaderBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsHeaderBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [],
      imports: [],
      exports: []
    }]
  }], null, null);
})();

// import { AutofocusDirective } from './autofocus.directive';
class AutofocusModule {}
AutofocusModule.ɵfac = function AutofocusModule_Factory(t) {
  return new (t || AutofocusModule)();
};
AutofocusModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AutofocusModule
});
AutofocusModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutofocusModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [
        // AutofocusDirective
      ],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
      exports: [
        // AutofocusDirective
      ]
    }]
  }], null, null);
})();
class ToolbarBlockModule {}
ToolbarBlockModule.ɵfac = function ToolbarBlockModule_Factory(t) {
  return new (t || ToolbarBlockModule)();
};
ToolbarBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ToolbarBlockModule
});
ToolbarBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInputModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule, AutofocusModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [ToolbarBlockComponent, SearchableBlockListComponent, BlockOptionsListComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__.OverlayModule, _angular_material_legacy_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLegacyFormFieldModule, _angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_10__.MatLegacyInputModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule, AutofocusModule],
      exports: [ToolbarBlockComponent]
    }]
  }], null, null);
})();
class InlineToolbarBlockMediator {}
InlineToolbarBlockMediator.ɵfac = function InlineToolbarBlockMediator_Factory(t) {
  return new (t || InlineToolbarBlockMediator)();
};
InlineToolbarBlockMediator.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: InlineToolbarBlockMediator,
  selectors: [["meditator-inline-toolbar-block"]],
  inputs: {
    attachPosition: "attachPosition"
  },
  decls: 1,
  vars: 0,
  template: function InlineToolbarBlockMediator_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "inline-toolbar-block");
    }
  },
  dependencies: [InlineToolbarBlockComponent],
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineToolbarBlockMediator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'meditator-inline-toolbar-block',
      template: `<inline-toolbar-block></inline-toolbar-block>`
    }]
  }], null, {
    attachPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class InlineToolbarBlockModule {}
InlineToolbarBlockModule.ɵfac = function InlineToolbarBlockModule_Factory(t) {
  return new (t || InlineToolbarBlockModule)();
};
InlineToolbarBlockModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: InlineToolbarBlockModule
});
InlineToolbarBlockModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InlineToolbarBlockModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [InlineToolbarBlockMediator, InlineToolbarBlockComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_legacy_list__WEBPACK_IMPORTED_MODULE_11__.MatLegacyListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatRippleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule]
    }]
  }], null, null);
})();
class NgxEditorjsModule {}
NgxEditorjsModule.ɵfac = function NgxEditorjsModule_Factory(t) {
  return new (t || NgxEditorjsModule)();
};
NgxEditorjsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxEditorjsModule
});
NgxEditorjsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsHeaderBlockModule, ToolbarBlockModule, AutofocusModule, InlineToolbarBlockModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxEditorjsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxEditorjsComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, NgxEditorjsHeaderBlockModule, ToolbarBlockModule, AutofocusModule, InlineToolbarBlockModule],
      exports: [NgxEditorjsComponent]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-editorjs
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(73849)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map