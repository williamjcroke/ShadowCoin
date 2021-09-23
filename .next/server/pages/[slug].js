"use strict";
(() => {
var exports = {};
exports.id = "pages/[slug]";
exports.ids = ["pages/[slug]"];
exports.modules = {

/***/ "./comps/lib/rss.js":
/*!**************************!*\
  !*** ./comps/lib/rss.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FEEDS": () => (/* binding */ FEEDS),
/* harmony export */   "getFeed": () => (/* binding */ getFeed)
/* harmony export */ });
/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rss-parser */ "rss-parser");
/* harmony import */ var rss_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rss_parser__WEBPACK_IMPORTED_MODULE_0__);

const FEEDS = [{
  slug: "crypto-news",
  title: "Crypto News",
  url: "https://cointelegraph.com/editors_pick_rss"
}];
async function getFeed(feedUrl) {
  let parser = new (rss_parser__WEBPACK_IMPORTED_MODULE_0___default())();
  let feed = await parser.parseURL(feedUrl);
  return feed;
}

/***/ }),

/***/ "./pages/[slug].js":
/*!*************************!*\
  !*** ./pages/[slug].js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ News),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _comps_lib_rss_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comps/lib/rss.js */ "./comps/lib/rss.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\pages\\[slug].js";



function News({
  feed,
  items
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "px-6 py-12 max-w-xl mx-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
      className: "font-bold text-5xl mb-12",
      children: feed.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "space-y-4",
      children: items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
        className: "block p-4 border border-gray-200 hover:border-gray-500 rounded-lg",
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "font-bold",
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(item.isoDate), "PPP")
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)]
      }, item.link, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, this))
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
}
async function getStaticPaths() {
  return {
    paths: _comps_lib_rss_js__WEBPACK_IMPORTED_MODULE_0__.FEEDS.map(feed => ({
      params: {
        slug: feed.slug
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const feed = _comps_lib_rss_js__WEBPACK_IMPORTED_MODULE_0__.FEEDS.find(feed => feed.slug === params.slug);
  const detailedFeed = await (0,_comps_lib_rss_js__WEBPACK_IMPORTED_MODULE_0__.getFeed)(feed.url);
  return {
    props: {
      feed,
      items: detailedFeed.items
    },
    revalidate: 1
  };
} // import Layout from '../comps/MyLayout.js';
// import NewsData from '../comps/functions/news.js';
// export default function News() {
//   return (
//     <Layout>
//       <NewsData screen="news-results" type="news-search"/>
//     </Layout>
//   );
// }

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "rss-parser":
/*!*****************************!*\
  !*** external "rss-parser" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("rss-parser");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[slug].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvW3NsdWddLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxLQUFLLEdBQUcsQ0FDakI7QUFDRUMsRUFBQUEsSUFBSSxFQUFFLGFBRFI7QUFFRUMsRUFBQUEsS0FBSyxFQUFFLGFBRlQ7QUFHRUMsRUFBQUEsR0FBRyxFQUFFO0FBSFAsQ0FEaUIsQ0FBZDtBQVFBLGVBQWVDLE9BQWYsQ0FBdUJDLE9BQXZCLEVBQWdDO0FBQ3BDLE1BQUlDLE1BQU0sR0FBRyxJQUFJUCxtREFBSixFQUFiO0FBRUEsTUFBSVEsSUFBSSxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkgsT0FBaEIsQ0FBakI7QUFFQSxTQUFPRSxJQUFQO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTs7QUFFZSxTQUFTRyxJQUFULENBQWM7QUFBRUgsRUFBQUEsSUFBRjtBQUFRSSxFQUFBQTtBQUFSLENBQWQsRUFBK0I7QUFDNUMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQywwQkFBZDtBQUFBLGdCQUEwQ0osSUFBSSxDQUFDTDtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsZ0JBQ0dTLEtBQUssQ0FBQ0MsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBRUUsaUJBQVMsRUFBQyxtRUFGWjtBQUdFLFlBQUksRUFBRUEsSUFBSSxDQUFDQyxJQUhiO0FBSUUsY0FBTSxFQUFDLFFBSlQ7QUFLRSxXQUFHLEVBQUMscUJBTE47QUFBQSxnQ0FPRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUE0QkQsSUFBSSxDQUFDWDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBUUU7QUFBQSxvQkFBTU8sZ0RBQU0sQ0FBQyxJQUFJTSxJQUFKLENBQVNGLElBQUksQ0FBQ0csT0FBZCxDQUFELEVBQXlCLEtBQXpCO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBLFNBQ09ILElBQUksQ0FBQ0MsSUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7QUFFTSxlQUFlRyxjQUFmLEdBQWdDO0FBQ3JDLFNBQU87QUFDTEMsSUFBQUEsS0FBSyxFQUFFbEIsd0RBQUEsQ0FBV08sSUFBRCxLQUFXO0FBQUVZLE1BQUFBLE1BQU0sRUFBRTtBQUFFbEIsUUFBQUEsSUFBSSxFQUFFTSxJQUFJLENBQUNOO0FBQWI7QUFBVixLQUFYLENBQVYsQ0FERjtBQUVMbUIsSUFBQUEsUUFBUSxFQUFFO0FBRkwsR0FBUDtBQUlEO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFFRixFQUFBQTtBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1aLElBQUksR0FBR1AseURBQUEsQ0FBWU8sSUFBRCxJQUFVQSxJQUFJLENBQUNOLElBQUwsS0FBY2tCLE1BQU0sQ0FBQ2xCLElBQTFDLENBQWI7QUFDQSxRQUFNc0IsWUFBWSxHQUFHLE1BQU1uQiwwREFBTyxDQUFDRyxJQUFJLENBQUNKLEdBQU4sQ0FBbEM7QUFFQSxTQUFPO0FBQ0xxQixJQUFBQSxLQUFLLEVBQUU7QUFDTGpCLE1BQUFBLElBREs7QUFFTEksTUFBQUEsS0FBSyxFQUFFWSxZQUFZLENBQUNaO0FBRmYsS0FERjtBQUtMYyxJQUFBQSxVQUFVLEVBQUU7QUFMUCxHQUFQO0FBT0QsRUFHRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2REE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hhZG93X2NvaW4vLi9jb21wcy9saWIvcnNzLmpzIiwid2VicGFjazovL3NoYWRvd19jb2luLy4vcGFnZXMvW3NsdWddLmpzIiwid2VicGFjazovL3NoYWRvd19jb2luL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly9zaGFkb3dfY29pbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NoYWRvd19jb2luL2V4dGVybmFsIFwicnNzLXBhcnNlclwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJzZXIgZnJvbSBcInJzcy1wYXJzZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGRUVEUyA9IFtcclxuICAgIHtcclxuICAgICAgc2x1ZzogXCJjcnlwdG8tbmV3c1wiLFxyXG4gICAgICB0aXRsZTogXCJDcnlwdG8gTmV3c1wiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9jb2ludGVsZWdyYXBoLmNvbS9lZGl0b3JzX3BpY2tfcnNzXCIsXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGZWVkKGZlZWRVcmwpIHtcclxuICAgbGV0IHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuIFxyXG4gICBsZXQgZmVlZCA9IGF3YWl0IHBhcnNlci5wYXJzZVVSTChmZWVkVXJsKTtcclxuIFxyXG4gICByZXR1cm4gZmVlZDtcclxufSIsImltcG9ydCB7IEZFRURTLCBnZXRGZWVkIH0gZnJvbSBcIi4uL2NvbXBzL2xpYi9yc3MuanNcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdzKHsgZmVlZCwgaXRlbXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHktMTIgbWF4LXcteGwgbXgtYXV0b1wiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNXhsIG1iLTEyXCI+e2ZlZWQudGl0bGV9PC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0ubGlua31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcC00IGJvcmRlciBib3JkZXItZ3JheS0yMDAgaG92ZXI6Ym9yZGVyLWdyYXktNTAwIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2Pntmb3JtYXQobmV3IERhdGUoaXRlbS5pc29EYXRlKSwgXCJQUFBcIil9PC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogRkVFRFMubWFwKChmZWVkKSA9PiAoeyBwYXJhbXM6IHsgc2x1ZzogZmVlZC5zbHVnIH0gfSkpLFxyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgZmVlZCA9IEZFRURTLmZpbmQoKGZlZWQpID0+IGZlZWQuc2x1ZyA9PT0gcGFyYW1zLnNsdWcpO1xyXG4gIGNvbnN0IGRldGFpbGVkRmVlZCA9IGF3YWl0IGdldEZlZWQoZmVlZC51cmwpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZmVlZCxcclxuICAgICAgaXRlbXM6IGRldGFpbGVkRmVlZC5pdGVtcyxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxLFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBzL015TGF5b3V0LmpzJztcclxuLy8gaW1wb3J0IE5ld3NEYXRhIGZyb20gJy4uL2NvbXBzL2Z1bmN0aW9ucy9uZXdzLmpzJztcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoKSB7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgIDxOZXdzRGF0YSBzY3JlZW49XCJuZXdzLXJlc3VsdHNcIiB0eXBlPVwibmV3cy1zZWFyY2hcIi8+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gICApO1xyXG4vLyB9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJzcy1wYXJzZXJcIik7Il0sIm5hbWVzIjpbIlBhcnNlciIsIkZFRURTIiwic2x1ZyIsInRpdGxlIiwidXJsIiwiZ2V0RmVlZCIsImZlZWRVcmwiLCJwYXJzZXIiLCJmZWVkIiwicGFyc2VVUkwiLCJmb3JtYXQiLCJOZXdzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwibGluayIsIkRhdGUiLCJpc29EYXRlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJmaW5kIiwiZGV0YWlsZWRGZWVkIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==