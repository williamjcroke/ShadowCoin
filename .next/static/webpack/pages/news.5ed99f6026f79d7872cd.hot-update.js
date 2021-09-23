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
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "col-md-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
          className: "",
          children: feed.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "col-md-10",
          children: items.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "",
              href: item.link,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "",
                children: item.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 13
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.isoDate), "PPP")
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 13
              }, _this)]
            }, item.link, true, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 11
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy41ZWQ5OWY2MDI2Zjc5ZDc4NzJjZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0UsSUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM1QyxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxFQUFkO0FBQUEsb0JBQWtCRCxJQUFJLENBQUNFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLCtCQUNBO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsb0JBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxnQ0FDVDtBQUVFLHVCQUFTLEVBQUMsRUFGWjtBQUdFLGtCQUFJLEVBQUVBLElBQUksQ0FBQ0MsSUFIYjtBQUlFLG9CQUFNLEVBQUMsUUFKVDtBQUtFLGlCQUFHLEVBQUMscUJBTE47QUFBQSxzQ0FPRTtBQUFLLHlCQUFTLEVBQUMsRUFBZjtBQUFBLDBCQUFtQkQsSUFBSSxDQUFDRjtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGLGVBUUU7QUFBQSwwQkFBTUwsZ0RBQU0sQ0FBQyxJQUFJUyxJQUFKLENBQVNGLElBQUksQ0FBQ0csT0FBZCxDQUFELEVBQXlCLEtBQXpCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRjtBQUFBLGVBQ09ILElBQUksQ0FBQ0MsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURTO0FBQUEsV0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJELEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0EzRHdCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZFRURTLCBnZXRGZWVkIH0gZnJvbSBcIi4uL2NvbXBzL2xpYi9yc3MuanNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTXlMYXlvdXQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyh7IGZlZWQsIGl0ZW1zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIlwiPntmZWVkLnRpdGxlfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMFwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntmb3JtYXQobmV3IERhdGUoaXRlbS5pc29EYXRlKSwgXCJQUFBcIil9PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwYXRoczogRkVFRFMubWFwKChmZWVkKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZzogZmVlZC5zbHVnIH0gfSkpLFxyXG4vLyAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZmVlZCA9IEZFRURTLmZpbmQoKGZlZWQpID0+IGZlZWQuc2x1ZyA9PT0gJ2NyeXB0by1uZXdzJyk7XHJcbiAgY29uc3QgZGV0YWlsZWRGZWVkID0gYXdhaXQgZ2V0RmVlZChmZWVkLnVybCk7XHJcbiAgY29uc29sZS5sb2coZmVlZClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGZlZWQsXHJcbiAgICAgIGl0ZW1zOiBkZXRhaWxlZEZlZWQuaXRlbXMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5cclxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wcy9NeUxheW91dC5qcyc7XHJcbi8vIGltcG9ydCBOZXdzRGF0YSBmcm9tICcuLi9jb21wcy9mdW5jdGlvbnMvbmV3cy5qcyc7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKCkge1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICA8TmV3c0RhdGEgc2NyZWVuPVwibmV3cy1yZXN1bHRzXCIgdHlwZT1cIm5ld3Mtc2VhcmNoXCIvPlxyXG4vLyAgICAgPC9MYXlvdXQ+XHJcbi8vICAgKTtcclxuLy8gfSJdLCJuYW1lcyI6WyJmb3JtYXQiLCJMYXlvdXQiLCJOZXdzIiwiZmVlZCIsIml0ZW1zIiwidGl0bGUiLCJtYXAiLCJpdGVtIiwibGluayIsIkRhdGUiLCJpc29EYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==