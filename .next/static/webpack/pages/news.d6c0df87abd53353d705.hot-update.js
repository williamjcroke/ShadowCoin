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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\pages\\news.js";


var __N_SSG = true;
function News(_ref) {
  var _this = this;

  var feed = _ref.feed,
      items = _ref.items;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "px-6 py-12 max-w-xl mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "font-bold text-5xl mb-12",
      children: feed.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "space-y-4",
      children: items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "block p-4 border border-gray-200 hover:border-gray-500 rounded-lg",
          href: item.link,
          target: "_blank",
          rel: "noopener noreferrer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "font-bold",
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(item.isoDate), "PPP")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, item.link, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy5kNmMwZGY4N2FiZDUzMzUzZDcwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBRWUsU0FBU0MsSUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM1QyxzQkFDRTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLDBCQUFkO0FBQUEsZ0JBQTBDRCxJQUFJLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSxnQkFDR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDRCQUNUO0FBRUUsbUJBQVMsRUFBQyxtRUFGWjtBQUdFLGNBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUhiO0FBSUUsZ0JBQU0sRUFBQyxRQUpUO0FBS0UsYUFBRyxFQUFDLHFCQUxOO0FBQUEsa0NBT0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxzQkFBNEJELElBQUksQ0FBQ0Y7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVFFO0FBQUEsc0JBQU1KLGdEQUFNLENBQUMsSUFBSVEsSUFBSixDQUFTRixJQUFJLENBQUNHLE9BQWQsQ0FBRCxFQUF5QixLQUF6QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQSxXQUNPSCxJQUFJLENBQUNDLElBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQsRUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQXBEd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkVFRFMsIGdldEZlZWQgfSBmcm9tIFwiLi4vY29tcHMvbGliL3Jzcy5qc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoeyBmZWVkLCBpdGVtcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS0xMiBtYXgtdy14bCBteC1hdXRvXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC01eGwgbWItMTJcIj57ZmVlZC50aXRsZX08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBwLTQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBob3Zlcjpib3JkZXItZ3JheS01MDAgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgIGhyZWY9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e2l0ZW0udGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2Zvcm1hdChuZXcgRGF0ZShpdGVtLmlzb0RhdGUpLCBcIlBQUFwiKX08L2Rpdj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHBhdGhzOiBGRUVEUy5tYXAoKGZlZWQpID0+ICh7IHBhcmFtczogeyBzbHVnOiBmZWVkLnNsdWcgfSB9KSksXHJcbi8vICAgICBmYWxsYmFjazogZmFsc2UsXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBmZWVkID0gRkVFRFMuZmluZCgoZmVlZCkgPT4gZmVlZC5zbHVnID09PSAnY3J5cHRvLW5ld3MnKTtcclxuICBjb25zdCBkZXRhaWxlZEZlZWQgPSBhd2FpdCBnZXRGZWVkKCdodHRwczovL2NvaW50ZWxlZ3JhcGguY29tL2VkaXRvcnNfcGlja19yc3MnKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZlZWQsXHJcbiAgICAgIGl0ZW1zOiBkZXRhaWxlZEZlZWQuaXRlbXMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBOZXdzRGF0YSBmcm9tICcuLi9jb21wcy9mdW5jdGlvbnMvbmV3cy5qcyc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKCkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8TmV3c0RhdGEgc2NyZWVuPVwibmV3cy1yZXN1bHRzXCIgdHlwZT1cIm5ld3Mtc2VhcmNoXCIvPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vICAgKTtcclxuLy8gfSJdLCJuYW1lcyI6WyJmb3JtYXQiLCJOZXdzIiwiZmVlZCIsIml0ZW1zIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwibGluayIsIkRhdGUiLCJpc29EYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==