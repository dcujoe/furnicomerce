"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nfunction Home({\n  products\n}) {\n  console.log(products); //React.useEffect(() => { \n  //getProducts()\n  //}, [])\n  //async function getProducts() {\n  //fetch data from server\n  //const url = \"http://localhost:3000/api/products\";\n  //const response = await axios.get(url);\n  //console.log(response.data)\n  //}\n  // return response data as an object\n  // note: this object will be merged with existing props\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: \"home\"\n  }, void 0, false);\n}\n\nHome.getInitialProps = async () => {\n  // fetch data from server\n  // return response data as an object\n  const url = \"http://localhost:3000/api/products\";\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);\n  return {\n    products: response.data\n  }; // note: this object would be merged with existing props\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUlBLFNBQVNFLElBQVQsQ0FBYztBQUFDQyxFQUFBQTtBQUFELENBQWQsRUFBMEI7QUFDeEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaLEVBRHdCLENBRXpCO0FBQ0M7QUFDRDtBQUVDO0FBRUU7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUdBO0FBQ0E7O0FBQ0Esc0JBQU87QUFBQTtBQUFBLG1CQUFQO0FBRUQ7O0FBRURELElBQUksQ0FBQ0ksZUFBTCxHQUF1QixZQUFZO0FBQ2pDO0FBQ0E7QUFDRSxRQUFNQyxHQUFHLEdBQUcsb0NBQVo7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTVAsZ0RBQUEsQ0FBVU0sR0FBVixDQUF2QjtBQUNBLFNBQU87QUFBRUosSUFBQUEsUUFBUSxFQUFFSyxRQUFRLENBQUNFO0FBQXJCLEdBQVAsQ0FMK0IsQ0FPakM7QUFFRCxDQVREOztBQVlBLGlFQUFlUixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtcmVzZXJ2ZS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cblxuXG5mdW5jdGlvbiBIb21lKHtwcm9kdWN0c30pIHtcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuIC8vUmVhY3QudXNlRWZmZWN0KCgpID0+IHsgXG4gIC8vZ2V0UHJvZHVjdHMoKVxuIC8vfSwgW10pXG5cbiAgLy9hc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcblxuICAgIC8vZmV0Y2ggZGF0YSBmcm9tIHNlcnZlclxuICAgIC8vY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gICAgLy9jb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgLy99XG5cblxuICAvLyByZXR1cm4gcmVzcG9uc2UgZGF0YSBhcyBhbiBvYmplY3RcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCBleGlzdGluZyBwcm9wc1xuICByZXR1cm4gPD5ob21lPC8+XG5cbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGZldGNoIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YSB9O1xuICBcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd291bGQgYmUgbWVyZ2VkIHdpdGggZXhpc3RpbmcgcHJvcHNcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkhvbWUiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();