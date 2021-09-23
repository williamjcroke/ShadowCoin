"use strict";
self["webpackHotUpdate_N_E"]("pages/news",{

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ News; }
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comps/MyLayout.js */ "./comps/MyLayout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\pages\\news.js";



var __N_SSG = true;
function News(_ref) {
  var _this = this;

  var feed = _ref.feed,
      items = _ref.items;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_comps_MyLayout_js__WEBPACK_IMPORTED_MODULE_0__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: feed.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: items.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: item.link,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.isoDate), "PPP")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 13
            }, _this)]
          }, item.link, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 11
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
} // export async function getStaticPaths() {
//   return {
//     paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
//     fallback: false,
//   };
// }
// import Layout from '../comps/MyLayout.js';
// import NewsData from '../comps/functions/news.js';
// export default function News() {
//   return (
//     <Layout>
//       <NewsData screen="news-results" type="news-search"/>
//     </Layout>
//   );
// }

_c = News;

var _c;

$RefreshReg$(_c, "News");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy42ZDYzMmIzMDI2MmE2NzkzZWIwNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0UsSUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM1QyxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNBO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSw4QkFDVDtBQUVFLGdCQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFGYjtBQUdFLGtCQUFNLEVBQUMsUUFIVDtBQUlFLGVBQUcsRUFBQyxxQkFKTjtBQUFBLG9DQU1FO0FBQUEsd0JBQU1ELElBQUksQ0FBQ0Y7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0U7QUFBQSx3QkFBTUwsZ0RBQU0sQ0FBQyxJQUFJUyxJQUFKLENBQVNGLElBQUksQ0FBQ0csT0FBZCxDQUFELEVBQXlCLEtBQXpCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBLGFBQ09ILElBQUksQ0FBQ0MsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURTO0FBQUEsU0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXREd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkVFRFMsIGdldEZlZWQgfSBmcm9tIFwiLi4vY29tcHMvbGliL3Jzcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9NeUxheW91dC5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKHsgZmVlZCwgaXRlbXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPntmZWVkLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAga2V5PXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1hdChuZXcgRGF0ZShpdGVtLmlzb0RhdGUpLCBcIlBQUFwiKX08L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcGF0aHM6IEZFRURTLm1hcCgoZmVlZCkgPT4gKHsgcGFyYW1zOiB7IHNsdWc6IGZlZWQuc2x1ZyB9IH0pKSxcclxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IGZlZWQgPSBGRUVEUy5maW5kKChmZWVkKSA9PiBmZWVkLnNsdWcgPT09ICdjcnlwdG8tbmV3cycpO1xyXG4gIGNvbnN0IGRldGFpbGVkRmVlZCA9IGF3YWl0IGdldEZlZWQoZmVlZC51cmwpO1xyXG4gIGNvbnNvbGUubG9nKGZlZWQpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBmZWVkLFxyXG4gICAgICBpdGVtczogZGV0YWlsZWRGZWVkLml0ZW1zLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufVxyXG5cclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTXlMYXlvdXQuanMnO1xyXG4vLyBpbXBvcnQgTmV3c0RhdGEgZnJvbSAnLi4vY29tcHMvZnVuY3Rpb25zL25ld3MuanMnO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpIHtcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPExheW91dD5cclxuLy8gICAgICAgPE5ld3NEYXRhIHNjcmVlbj1cIm5ld3MtcmVzdWx0c1wiIHR5cGU9XCJuZXdzLXNlYXJjaFwiLz5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyAgICk7XHJcbi8vIH0iXSwibmFtZXMiOlsiZm9ybWF0IiwiTGF5b3V0IiwiTmV3cyIsImZlZWQiLCJpdGVtcyIsInRpdGxlIiwibWFwIiwiaXRlbSIsImxpbmsiLCJEYXRlIiwiaXNvRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=