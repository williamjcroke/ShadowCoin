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
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        className: "col-md-10 offset-md-1",
        children: feed.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "",
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
              lineNumber: 19,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.isoDate), "PPP")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy4xZDExY2UxZGZiZmEwODA1N2MwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBRWUsU0FBU0UsSUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUM1QyxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsdUJBQWQ7QUFBQSxrQkFBdUNELElBQUksQ0FBQ0U7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLEVBQWY7QUFBQSxrQkFDR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLDhCQUNUO0FBRUUscUJBQVMsRUFBQyxFQUZaO0FBR0UsZ0JBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUhiO0FBSUUsa0JBQU0sRUFBQyxRQUpUO0FBS0UsZUFBRyxFQUFDLHFCQUxOO0FBQUEsb0NBT0U7QUFBSyx1QkFBUyxFQUFDLEVBQWY7QUFBQSx3QkFBbUJELElBQUksQ0FBQ0Y7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQUEsd0JBQU1MLGdEQUFNLENBQUMsSUFBSVMsSUFBSixDQUFTRixJQUFJLENBQUNHLE9BQWQsQ0FBRCxFQUF5QixLQUF6QjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQSxhQUNPSCxJQUFJLENBQUNDLElBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEUztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJELEVBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0F2RHdCTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZFRURTLCBnZXRGZWVkIH0gZnJvbSBcIi4uL2NvbXBzL2xpYi9yc3MuanNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcHMvTXlMYXlvdXQuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cyh7IGZlZWQsIGl0ZW1zIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2wtbWQtMTAgb2Zmc2V0LW1kLTFcIj57ZmVlZC50aXRsZX08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGtleT17aXRlbS5saW5rfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntmb3JtYXQobmV3IERhdGUoaXRlbS5pc29EYXRlKSwgXCJQUFBcIil9PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHBhdGhzOiBGRUVEUy5tYXAoKGZlZWQpID0+ICh7IHBhcmFtczogeyBzbHVnOiBmZWVkLnNsdWcgfSB9KSksXHJcbi8vICAgICBmYWxsYmFjazogZmFsc2UsXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBmZWVkID0gRkVFRFMuZmluZCgoZmVlZCkgPT4gZmVlZC5zbHVnID09PSAnY3J5cHRvLW5ld3MnKTtcclxuICBjb25zdCBkZXRhaWxlZEZlZWQgPSBhd2FpdCBnZXRGZWVkKGZlZWQudXJsKTtcclxuICBjb25zb2xlLmxvZyhmZWVkKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZmVlZCxcclxuICAgICAgaXRlbXM6IGRldGFpbGVkRmVlZC5pdGVtcyxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL015TGF5b3V0LmpzJztcclxuLy8gaW1wb3J0IE5ld3NEYXRhIGZyb20gJy4uL2NvbXBzL2Z1bmN0aW9ucy9uZXdzLmpzJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoKSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgIDxOZXdzRGF0YSBzY3JlZW49XCJuZXdzLXJlc3VsdHNcIiB0eXBlPVwibmV3cy1zZWFyY2hcIi8+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gICApO1xyXG4vLyB9Il0sIm5hbWVzIjpbImZvcm1hdCIsIkxheW91dCIsIk5ld3MiLCJmZWVkIiwiaXRlbXMiLCJ0aXRsZSIsIm1hcCIsIml0ZW0iLCJsaW5rIiwiRGF0ZSIsImlzb0RhdGUiXSwic291cmNlUm9vdCI6IiJ9