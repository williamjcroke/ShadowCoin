"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comps/functions/home-table.js":
/*!***************************************!*\
  !*** ./comps/functions/home-table.js ***!
  \***************************************/
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






var _jsxFileName = "C:\\Users\\willi\\OneDrive\\Desktop\\Coin_Task\\ShadowCoin\\ShadowCoin\\comps\\functions\\home-table.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


 //Home page init



var HomeTableData = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(HomeTableData, _React$Component);

  var _super = _createSuper(HomeTableData);

  function HomeTableData(props) {
    var _this;

    (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, HomeTableData);

    _this = _super.call(this, props);
    _this.state = {
      activePage: 1,
      display: null,
      coinList: null,
      coinData: null
    };
    return _this;
  } //Async to await data


  (0,C_Users_willi_OneDrive_Desktop_Coin_Task_ShadowCoin_ShadowCoin_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(HomeTableData, [{
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
        lineNumber: 25,
        columnNumber: 9
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this);
    } //Post request to server.js and await data response

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
                return jquery__WEBPACK_IMPORTED_MODULE_8___default().post('/', function (data) {
                  tmpDta = data;
                });

              case 3:
                this.setState({
                  coinData: tmpDta
                });
                this.GetScreen();

              case 5:
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
    }() //Set the screen data after response call

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
                lineNumber: 52,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Ticker"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Circulating"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("th", {
                children: "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tbody", {
            children: this.state.coinData.data.map(function (coin, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("tr", {
                className: "text-center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                  className: "text-center",
                  children: coin.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                  className: "text-center",
                  children: coin.symbol
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                  className: "text-center",
                  children: coin.circulating_supply
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 17
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("td", {
                  className: "text-center",
                  children: ["\u20AC", coin.quote.EUR.price.toFixed(2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 17
                }, this)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this); //Set screen state

      this.setState({
        display: this.state.display
      });
    }
  }]);

  return HomeTableData;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (HomeTableData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjk2OTM5ZGU3ODNiOTJmNDllNzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7Ozs7SUFDTUU7Ozs7O0FBQ0YseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxVQUFVLEVBQUUsQ0FERDtBQUVYQyxNQUFBQSxPQUFPLEVBQUUsSUFGRTtBQUdYQyxNQUFBQSxRQUFRLEVBQUUsSUFIQztBQUlYQyxNQUFBQSxRQUFRLEVBQUU7QUFKQyxLQUFiO0FBRmU7QUFRaEIsSUFFTDs7Ozs7OytWQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQkFBS0MsT0FBTDs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztXQUlBLGtCQUFTO0FBQ1AsVUFBSUMsVUFBVSxHQUFHLEtBQUtOLEtBQUwsQ0FBV0UsT0FBWCxJQUFzQixJQUF2QztBQUNBLGFBQ0lJLFVBQVUsZ0JBQ1Y7QUFBQSxrQkFDQyxLQUFLTixLQUFMLENBQVdFO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURVLGdCQUtWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFRRCxNQUVEOzs7OztxVkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTUssZ0JBQUFBLE1BRE4sR0FDZSxJQURmO0FBQUE7QUFBQSx1QkFFT1Ysa0RBQUEsQ0FBTyxHQUFQLEVBQVksVUFBU1ksSUFBVCxFQUFlO0FBQzlCRixrQkFBQUEsTUFBTSxHQUFHRSxJQUFUO0FBQ0QsaUJBRkksQ0FGUDs7QUFBQTtBQU1FLHFCQUFLQyxRQUFMLENBQWM7QUFBRU4sa0JBQUFBLFFBQVEsRUFBRUc7QUFBWixpQkFBZDtBQUNBLHFCQUFLSSxTQUFMOztBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O1FBVUE7Ozs7V0FDQSxxQkFBWTtBQUVWLFdBQUtYLEtBQUwsQ0FBV0UsT0FBWCxnQkFDRTtBQUFBLCtCQUNJO0FBQU8sbUJBQVMsRUFBQyxhQUFqQjtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBQSxzQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFBQSxzQkFDSCxLQUFLRixLQUFMLENBQVdJLFFBQVgsQ0FBb0JLLElBQXBCLENBQXlCRyxHQUF6QixDQUE2QixVQUFTQyxJQUFULEVBQWVDLENBQWYsRUFBaUI7QUFDN0Msa0NBQ0k7QUFBWSx5QkFBUyxFQUFDLGFBQXRCO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLGFBQWQ7QUFBQSw0QkFBNkJELElBQUksQ0FBQ0U7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFO0FBQUksMkJBQVMsRUFBQyxhQUFkO0FBQUEsNEJBQTZCRixJQUFJLENBQUNHO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkYsZUFHRTtBQUFJLDJCQUFTLEVBQUMsYUFBZDtBQUFBLDRCQUE2QkgsSUFBSSxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhGLGVBSUU7QUFBSSwyQkFBUyxFQUFDLGFBQWQ7QUFBQSx1Q0FBbUNKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxHQUFYLENBQWVDLEtBQWYsQ0FBcUJDLE9BQXJCLENBQTZCLENBQTdCLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKRjtBQUFBLGlCQUFTUCxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFTRCxhQVZBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FGVSxDQStCUjs7QUFDRixXQUFLSixRQUFMLENBQWM7QUFBQ1IsUUFBQUEsT0FBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV0U7QUFBckIsT0FBZDtBQUVEOzs7O0VBMUV5Qk47O0FBOEU1QiwrREFBZUUsYUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wcy9mdW5jdGlvbnMvaG9tZS10YWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4vL0hvbWUgcGFnZSBpbml0XHJcbmNsYXNzIEhvbWVUYWJsZURhdGEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgIGFjdGl2ZVBhZ2U6IDEsXHJcbiAgICAgICAgICBkaXNwbGF5OiBudWxsLFxyXG4gICAgICAgICAgY29pbkxpc3Q6IG51bGwsXHJcbiAgICAgICAgICBjb2luRGF0YTogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAvL0FzeW5jIHRvIGF3YWl0IGRhdGFcclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuR2V0RGF0YSgpOyBcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBkYXRhTG9hZGVkID0gdGhpcy5zdGF0ZS5kaXNwbGF5ICE9IG51bGw7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgZGF0YUxvYWRlZCA/XHJcbiAgICAgICAgPGRpdiA+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA6XHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9Qb3N0IHJlcXVlc3QgdG8gc2VydmVyLmpzIGFuZCBhd2FpdCBkYXRhIHJlc3BvbnNlXHJcbiAgYXN5bmMgR2V0RGF0YSgpIHtcclxuICAgIGxldCB0bXBEdGEgPSBudWxsO1xyXG4gICBhd2FpdCAkLnBvc3QoJy8nLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIHRtcER0YSA9IGRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY29pbkRhdGE6IHRtcER0YSB9KTtcclxuICAgIHRoaXMuR2V0U2NyZWVuKCk7IFxyXG4gIH1cclxuXHJcbiAgLy9TZXQgdGhlIHNjcmVlbiBkYXRhIGFmdGVyIHJlc3BvbnNlIGNhbGxcclxuICBHZXRTY3JlZW4oKSB7XHJcblxyXG4gICAgdGhpcy5zdGF0ZS5kaXNwbGF5ID0gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VGlja2VyPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5DaXJjdWxhdGluZzwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+UHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jb2luRGF0YS5kYXRhLm1hcChmdW5jdGlvbihjb2luLCBpKXtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntjb2luLm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPntjb2luLnN5bWJvbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e2NvaW4uY2lyY3VsYXRpbmdfc3VwcGx5fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4mZXVybzt7Y29pbi5xdW90ZS5FVVIucHJpY2UudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcblxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcbiAgICAgIC8vU2V0IHNjcmVlbiBzdGF0ZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheTogdGhpcy5zdGF0ZS5kaXNwbGF5fSk7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVUYWJsZURhdGE7Il0sIm5hbWVzIjpbIlJlYWN0IiwiJCIsIkhvbWVUYWJsZURhdGEiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlUGFnZSIsImRpc3BsYXkiLCJjb2luTGlzdCIsImNvaW5EYXRhIiwiR2V0RGF0YSIsImRhdGFMb2FkZWQiLCJ0bXBEdGEiLCJwb3N0IiwiZGF0YSIsInNldFN0YXRlIiwiR2V0U2NyZWVuIiwibWFwIiwiY29pbiIsImkiLCJuYW1lIiwic3ltYm9sIiwiY2lyY3VsYXRpbmdfc3VwcGx5IiwicXVvdGUiLCJFVVIiLCJwcmljZSIsInRvRml4ZWQiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9