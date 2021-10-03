"use strict";
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./comps/functions/search.js":
/*!***********************************!*\
  !*** ./comps/functions/search.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\comps\\functions\\search.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var SearchData = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(SearchData, _React$Component);

  var _super = _createSuper(SearchData);

  function SearchData(props) {
    var _this;

    (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SearchData);

    _this = _super.call(this, props);
    _this.state = {
      activePage: 1,
      display: null,
      coinList: null,
      coinData: null
    };
    return _this;
  }

  (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SearchData, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        return C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.GetData();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var dataLoaded = this.state.display != null;
      return dataLoaded ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        children: this.state.display
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this);
    }
  }, {
    key: "GetData",
    value: function () {
      var _GetData = (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee2() {
        var tmpDta;
        return C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                tmpDta = null;
                _context2.next = 3;
                return jquery__WEBPACK_IMPORTED_MODULE_8___default().post('/search', function (data) {
                  tmpDta = data;
                });

              case 3:
                if (typeof tmpDta === 'string' || tmpDta instanceof String) {
                  this.setState({
                    coinData: tmpDta
                  });
                  this.GetErrorScreen();
                } else {
                  this.setState({
                    coinData: tmpDta
                  });
                  tmpDta = tmpDta.data[Object.keys(tmpDta.data)[0]];
                  this.setState({
                    coinData: tmpDta
                  });
                  this.GetScreen();
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function GetData() {
        return _GetData.apply(this, arguments);
      }

      return GetData;
    }()
  }, {
    key: "GetScreen",
    value: function GetScreen() {
      this.state.display = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("table", {
          className: "text-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("thead", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Ticker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Circulating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tbody", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tr", {
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                className: "text-center",
                children: this.state.coinData.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                className: "text-center",
                children: this.state.coinData.symbol
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                className: "text-center",
                children: this.state.coinData.circulating_supply
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                className: "text-center",
                children: ["\u20AC", this.state.coinData.quote.EUR.price.toFixed(2)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this);
      this.setState({
        display: this.state.display
      });
    }
  }, {
    key: "GetErrorScreen",
    value: function GetErrorScreen() {
      this.state.display = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
          children: this.state.coinData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this);
      this.setState({
        display: this.state.display
      });
    }
  }]);

  return SearchData;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (SearchData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmY4YWU2OGU1MDM5Mjg4MTUyNzAyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7SUFFTUU7Ozs7O0FBQ0Ysc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxVQUFVLEVBQUUsQ0FERDtBQUVYQyxNQUFBQSxPQUFPLEVBQUUsSUFGRTtBQUdYQyxNQUFBQSxRQUFRLEVBQUUsSUFIQztBQUlYQyxNQUFBQSxRQUFRLEVBQUU7QUFKQyxLQUFiO0FBRmU7QUFRaEI7Ozs7OytWQUVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQkFBS0MsT0FBTDs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztXQUlBLGtCQUFTO0FBQ1AsVUFBSUMsVUFBVSxHQUFHLEtBQUtOLEtBQUwsQ0FBV0UsT0FBWCxJQUFzQixJQUF2QztBQUNBLGFBQ0lJLFVBQVUsZ0JBQ1Y7QUFBQSxrQkFDQyxLQUFLTixLQUFMLENBQVdFO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURVLGdCQUtWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFRRDs7OztxVkFFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTUssZ0JBQUFBLE1BRk4sR0FFZSxJQUZmO0FBQUE7QUFBQSx1QkFHT1Ysa0RBQUEsQ0FBTyxTQUFQLEVBQWtCLFVBQVNZLElBQVQsRUFBZTtBQUNwQ0Ysa0JBQUFBLE1BQU0sR0FBR0UsSUFBVDtBQUNELGlCQUZJLENBSFA7O0FBQUE7QUFPRSxvQkFBRyxPQUFPRixNQUFQLEtBQWtCLFFBQWxCLElBQThCQSxNQUFNLFlBQVlHLE1BQW5ELEVBQTBEO0FBQ3RELHVCQUFLQyxRQUFMLENBQWM7QUFBRVAsb0JBQUFBLFFBQVEsRUFBRUc7QUFBWixtQkFBZDtBQUNBLHVCQUFLSyxjQUFMO0FBQ0gsaUJBSEQsTUFHSztBQUNELHVCQUFLRCxRQUFMLENBQWM7QUFBRVAsb0JBQUFBLFFBQVEsRUFBRUc7QUFBWixtQkFBZDtBQUNBQSxrQkFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNFLElBQVAsQ0FBWUksTUFBTSxDQUFDQyxJQUFQLENBQVlQLE1BQU0sQ0FBQ0UsSUFBbkIsRUFBeUIsQ0FBekIsQ0FBWixDQUFUO0FBQ0EsdUJBQUtFLFFBQUwsQ0FBYztBQUFFUCxvQkFBQUEsUUFBUSxFQUFFRztBQUFaLG1CQUFkO0FBQ0EsdUJBQUtRLFNBQUw7QUFDSDs7QUFmSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztXQW1CQSxxQkFBWTtBQUVWLFdBQUtmLEtBQUwsQ0FBV0UsT0FBWCxnQkFDSTtBQUFBLCtCQUNJO0FBQU8sbUJBQVMsRUFBQyxhQUFqQjtBQUFBLGtDQUNBO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBU0E7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsYUFBZDtBQUFBLHNDQUNFO0FBQUkseUJBQVMsRUFBQyxhQUFkO0FBQUEsMEJBQTZCLEtBQUtGLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQlk7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUkseUJBQVMsRUFBQyxhQUFkO0FBQUEsMEJBQTZCLEtBQUtoQixLQUFMLENBQVdJLFFBQVgsQ0FBb0JhO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkYsZUFHRTtBQUFJLHlCQUFTLEVBQUMsYUFBZDtBQUFBLDBCQUE2QixLQUFLakIsS0FBTCxDQUFXSSxRQUFYLENBQW9CYztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLGVBSUU7QUFBSSx5QkFBUyxFQUFDLGFBQWQ7QUFBQSxxQ0FBbUMsS0FBS2xCLEtBQUwsQ0FBV0ksUUFBWCxDQUFvQmUsS0FBcEIsQ0FBMEJDLEdBQTFCLENBQThCQyxLQUE5QixDQUFvQ0MsT0FBcEMsQ0FBNEMsQ0FBNUMsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBd0JBLFdBQUtYLFFBQUwsQ0FBYztBQUFDVCxRQUFBQSxPQUFPLEVBQUUsS0FBS0YsS0FBTCxDQUFXRTtBQUFyQixPQUFkO0FBRUQ7OztXQUVELDBCQUFpQjtBQUVmLFdBQUtGLEtBQUwsQ0FBV0UsT0FBWCxnQkFDSTtBQUFBLCtCQUNJO0FBQUEsb0JBQUssS0FBS0YsS0FBTCxDQUFXSTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBT0EsV0FBS08sUUFBTCxDQUFjO0FBQUNULFFBQUFBLE9BQU8sRUFBRSxLQUFLRixLQUFMLENBQVdFO0FBQXJCLE9BQWQ7QUFFRDs7OztFQXZGc0JOOztBQTJGekIsK0RBQWVFLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvZnVuY3Rpb25zL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5jbGFzcyBTZWFyY2hEYXRhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBhY3RpdmVQYWdlOiAxLFxyXG4gICAgICAgICAgZGlzcGxheTogbnVsbCxcclxuICAgICAgICAgIGNvaW5MaXN0OiBudWxsLFxyXG4gICAgICAgICAgY29pbkRhdGE6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLkdldERhdGEoKTsgXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgZGF0YUxvYWRlZCA9IHRoaXMuc3RhdGUuZGlzcGxheSAhPSBudWxsO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIGRhdGFMb2FkZWQgP1xyXG4gICAgICAgIDxkaXYgPlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgOlxyXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIEdldERhdGEoKSB7XHJcblxyXG4gICAgbGV0IHRtcER0YSA9IG51bGw7XHJcbiAgIGF3YWl0ICQucG9zdCgnL3NlYXJjaCcsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgdG1wRHRhID0gZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKHR5cGVvZiB0bXBEdGEgPT09ICdzdHJpbmcnIHx8IHRtcER0YSBpbnN0YW5jZW9mIFN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvaW5EYXRhOiB0bXBEdGEgfSk7XHJcbiAgICAgICAgdGhpcy5HZXRFcnJvclNjcmVlbigpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29pbkRhdGE6IHRtcER0YSB9KTtcclxuICAgICAgICB0bXBEdGEgPSB0bXBEdGEuZGF0YVtPYmplY3Qua2V5cyh0bXBEdGEuZGF0YSlbMF1dXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvaW5EYXRhOiB0bXBEdGEgfSk7XHJcbiAgICAgICAgdGhpcy5HZXRTY3JlZW4oKTtcclxuICAgIH0gXHJcblxyXG4gIH1cclxuXHJcbiAgR2V0U2NyZWVuKCkge1xyXG5cclxuICAgIHRoaXMuc3RhdGUuZGlzcGxheSA9IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5UaWNrZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNpcmN1bGF0aW5nPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5QcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3RoaXMuc3RhdGUuY29pbkRhdGEubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3RoaXMuc3RhdGUuY29pbkRhdGEuc3ltYm9sfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57dGhpcy5zdGF0ZS5jb2luRGF0YS5jaXJjdWxhdGluZ19zdXBwbHl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiZldXJvO3t0aGlzLnN0YXRlLmNvaW5EYXRhLnF1b3RlLkVVUi5wcmljZS50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5fSk7XHJcblxyXG4gIH1cclxuXHJcbiAgR2V0RXJyb3JTY3JlZW4oKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS5kaXNwbGF5ID0gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz57dGhpcy5zdGF0ZS5jb2luRGF0YX08L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICApO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXk6IHRoaXMuc3RhdGUuZGlzcGxheX0pO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hEYXRhOyJdLCJuYW1lcyI6WyJSZWFjdCIsIiQiLCJTZWFyY2hEYXRhIiwicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZVBhZ2UiLCJkaXNwbGF5IiwiY29pbkxpc3QiLCJjb2luRGF0YSIsIkdldERhdGEiLCJkYXRhTG9hZGVkIiwidG1wRHRhIiwicG9zdCIsImRhdGEiLCJTdHJpbmciLCJzZXRTdGF0ZSIsIkdldEVycm9yU2NyZWVuIiwiT2JqZWN0Iiwia2V5cyIsIkdldFNjcmVlbiIsIm5hbWUiLCJzeW1ib2wiLCJjaXJjdWxhdGluZ19zdXBwbHkiLCJxdW90ZSIsIkVVUiIsInByaWNlIiwidG9GaXhlZCIsIkNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=