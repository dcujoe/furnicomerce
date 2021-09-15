webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nfunction Home(_ref) {\n  _s();\n\n  var products = _ref.products;\n  console.log(products);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    getProducts();\n  }, []);\n\n  function getProducts() {\n    return _getProducts.apply(this, arguments);\n  }\n\n  function _getProducts() {\n    _getProducts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var url, response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              url = \"http://localhost:3000/api/products\";\n              _context.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);\n\n            case 3:\n              response = _context.sent;\n              console.log(response.data);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _getProducts.apply(this, arguments);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, \"home\");\n}\n\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {\n  var url, response;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          //fetch data on server \n          url = \"http://localhost:3000/api/products\";\n          _context2.next = 3;\n          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);\n\n        case 3:\n          response = _context2.sent;\n          return _context2.abrupt(\"return\", {\n            products: response.data\n          });\n\n        case 5:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _callee2);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvZHVjdHMiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsInVybCIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsSUFBVCxPQUE0QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQUcsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3RCQyxlQUFXO0FBQ1gsR0FGQSxFQUVFLEVBRkY7O0FBRjBCLFdBTVpBLFdBTlk7QUFBQTtBQUFBOztBQUFBO0FBQUEsb01BTTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxpQkFEUCxHQUNhLG9DQURiO0FBQUE7QUFBQSxxQkFFd0JDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixDQUZ4Qjs7QUFBQTtBQUVPRyxzQkFGUDtBQUdDUixxQkFBTyxDQUFDQyxHQUFSLENBQVlPLFFBQVEsQ0FBQ0MsSUFBckI7O0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FOMkI7QUFBQTtBQUFBOztBQWMxQixTQUFPLDBFQUFQO0FBQ0Q7O0dBZlFYLEk7O0tBQUFBLEk7QUFrQlRBLElBQUksQ0FBQ1ksZUFBTCxpTUFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCO0FBRU1MLGFBSGUsR0FHVCxvQ0FIUztBQUFBO0FBQUEsaUJBSUlDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixDQUpKOztBQUFBO0FBSWJHLGtCQUphO0FBQUEsNENBS2Q7QUFBRVQsb0JBQVEsRUFBRVMsUUFBUSxDQUFDQztBQUFyQixXQUxjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBY2VYLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5mdW5jdGlvbiBIb21lKHsgcHJvZHVjdHMgfSkge1xuICBjb25zb2xlLmxvZyhwcm9kdWN0cyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gIGdldFByb2R1Y3RzKClcbiB9LCBbXSk7XG5cbiBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xuXG59XG5cblxuICByZXR1cm4gPD5ob21lPC8+O1xufVxuXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvL2ZldGNoIGRhdGEgb24gc2VydmVyIFxuICBcbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgcmV0dXJuIHsgcHJvZHVjdHM6IHJlc3BvbnNlLmRhdGEgfTtcbiAgXG5cblxuICAvLyByZXR1cm4gcmVzcG9uc2UgZGF0YSBhcyBhbiBvYmplY3RcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCBleGlzdGluZyBwcm9wc1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})