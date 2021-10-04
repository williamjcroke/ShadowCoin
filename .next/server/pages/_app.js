(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./comps/Meta.js":
/*!***********************!*\
  !*** ./comps/Meta.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Help)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\comps\\Meta.js";
 //Meta data set


function Help() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
      children: "Shadow Coin"
    }, "title", false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
      name: "description",
      content: "Coming Soon..."
    }, "description", false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var _comps_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comps/css/bootstrap.min.css */ "./comps/css/bootstrap.min.css");
/* harmony import */ var _comps_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_comps_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/css/bootstrap-reboot.min.css */ "./comps/css/bootstrap-reboot.min.css");
/* harmony import */ var _comps_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_comps_css_bootstrap_reboot_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/css/bootstrap-grid.min.css */ "./comps/css/bootstrap-grid.min.css");
/* harmony import */ var _comps_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_comps_css_bootstrap_grid_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_css_my_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/css/my.css */ "./comps/css/my.css");
/* harmony import */ var _comps_css_my_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_comps_css_my_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_Meta_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Meta.js */ "./comps/Meta.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //Setup app for component body, importing required CSS and additional meta components


function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./comps/css/bootstrap-grid.min.css":
/*!******************************************!*\
  !*** ./comps/css/bootstrap-grid.min.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./comps/css/bootstrap-reboot.min.css":
/*!********************************************!*\
  !*** ./comps/css/bootstrap-reboot.min.css ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./comps/css/bootstrap.min.css":
/*!*************************************!*\
  !*** ./comps/css/bootstrap.min.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./comps/css/my.css":
/*!**************************!*\
  !*** ./comps/css/my.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7OztBQUVlLFNBQVNDLElBQVQsR0FBZ0I7QUFDM0Isc0JBQ0ksOERBQUMsa0RBQUQ7QUFBQSw0QkFDQTtBQUFBO0FBQUEsT0FBVyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUdBO0FBRUUsVUFBSSxFQUFDLGFBRlA7QUFHRSxhQUFPLEVBQUM7QUFIVixPQUNNLGFBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkg7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7O0FBRWUsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFmLEVBQXlDO0FBQ3BELHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBS1ZIOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhZG93X2NvaW4vLi9jb21wcy9NZXRhLmpzIiwid2VicGFjazovL3NoYWRvd19jb2luLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaGFkb3dfY29pbi8uL2NvbXBzL2Nzcy9ib290c3RyYXAtZ3JpZC5taW4uY3NzIiwid2VicGFjazovL3NoYWRvd19jb2luLy4vY29tcHMvY3NzL2Jvb3RzdHJhcC1yZWJvb3QubWluLmNzcyIsIndlYnBhY2s6Ly9zaGFkb3dfY29pbi8uL2NvbXBzL2Nzcy9ib290c3RyYXAubWluLmNzcyIsIndlYnBhY2s6Ly9zaGFkb3dfY29pbi8uL2NvbXBzL2Nzcy9teS5jc3MiLCJ3ZWJwYWNrOi8vc2hhZG93X2NvaW4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaGFkb3dfY29pbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG4vL01ldGEgZGF0YSBzZXRcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbHAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZSBrZXk9XCJ0aXRsZVwiPlNoYWRvdyBDb2luPC90aXRsZT5cclxuXHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGtleT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBjb250ZW50PVwiQ29taW5nIFNvb24uLi5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICk7XHJcbiAgfSIsImltcG9ydCAnLi4vY29tcHMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jb21wcy9jc3MvYm9vdHN0cmFwLXJlYm9vdC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9jb21wcy9jc3MvYm9vdHN0cmFwLWdyaWQubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcHMvY3NzL215LmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcHMvTWV0YS5qcyc7XHJcblxyXG4vL1NldHVwIGFwcCBmb3IgY29tcG9uZW50IGJvZHksIGltcG9ydGluZyByZXF1aXJlZCBDU1MgYW5kIGFkZGl0aW9uYWwgbWV0YSBjb21wb25lbnRzXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgfSIsIiIsIiIsIiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkhlYWQiLCJIZWxwIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9