"use strict";
(self["webpackChunkngx_editor_demo"] = self["webpackChunkngx_editor_demo"] || []).push([["common"],{

/***/ 33908:
/*!*****************************************************!*\
  !*** ./node_modules/khroma/dist/methods/is_dark.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _is_light_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_light.js */ 21063);
/* IMPORT */

/* MAIN */
const isDark = color => {
  return !(0,_is_light_js__WEBPACK_IMPORTED_MODULE_0__["default"])(color);
};
/* EXPORT */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDark);

/***/ }),

/***/ 21063:
/*!******************************************************!*\
  !*** ./node_modules/khroma/dist/methods/is_light.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _luminance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./luminance.js */ 51875);
/* IMPORT */

/* MAIN */
const isLight = color => {
  return (0,_luminance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(color) >= .5;
};
/* EXPORT */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLight);

/***/ }),

/***/ 51875:
/*!*******************************************************!*\
  !*** ./node_modules/khroma/dist/methods/luminance.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ 16905);
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color/index.js */ 37197);
/* IMPORT */


/* MAIN */
//SOURCE: https://planetcalc.com/7779
const luminance = color => {
  const {
    r,
    g,
    b
  } = _color_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].parse(color);
  const luminance = .2126 * _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].channel.toLinear(r) + .7152 * _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].channel.toLinear(g) + .0722 * _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].channel.toLinear(b);
  return _utils_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].lang.round(luminance);
};
/* EXPORT */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (luminance);

/***/ })

}]);
//# sourceMappingURL=common.js.map