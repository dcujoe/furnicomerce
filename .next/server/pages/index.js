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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nfunction Home(products) {\n  console.log(products); //React.useEffect(() => { \n  // getProducts()\n  //}, [])\n  //async function getProducts() {\n  // fetch data from server\n  //const url = \"http://localhost:3000/api/products\";\n  //const response = await axios.get(url);\n  //console.log(response.data)\n  //}\n  // return response data as an object\n  // note: this object will be merged with existing props\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: \"Home\"\n  }, void 0, false);\n}\n\nHome.getInitialProps = async () => {\n  // fetch datas on server\n  // return response data as an object\n  const url = \"http://localhost:3000/api/products\";\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);\n  return {\n    products: response.data\n  }; // note: this object would be merged with existing props\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUlBLFNBQVNFLElBQVQsQ0FBY0MsUUFBZCxFQUF3QjtBQUN0QkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVosRUFEc0IsQ0FFdkI7QUFDQztBQUNEO0FBRUM7QUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBR0E7QUFDQTs7QUFDQSxzQkFBTztBQUFBO0FBQUEsbUJBQVA7QUFFRDs7QUFFREQsSUFBSSxDQUFDSSxlQUFMLEdBQXVCLFlBQVk7QUFDakM7QUFDQTtBQUNFLFFBQU1DLEdBQUcsR0FBRyxvQ0FBWjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxNQUFNUCxnREFBQSxDQUFVTSxHQUFWLENBQXZCO0FBQ0EsU0FBTztBQUFFSixJQUFBQSxRQUFRLEVBQUVLLFFBQVEsQ0FBQ0U7QUFBckIsR0FBUCxDQUwrQixDQU9qQztBQUVELENBVEQ7O0FBWUEsaUVBQWVSLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1yZXNlcnZlLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcblxuXG5cbmZ1bmN0aW9uIEhvbWUocHJvZHVjdHMpIHtcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpXG4gLy9SZWFjdC51c2VFZmZlY3QoKCkgPT4geyBcbiAgLy8gZ2V0UHJvZHVjdHMoKVxuIC8vfSwgW10pXG5cbiAgLy9hc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcblxuICAgIC8vIGZldGNoIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgICAvL2NvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0c1wiO1xuICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gIC8vfVxuXG5cbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gIC8vIG5vdGU6IHRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3RpbmcgcHJvcHNcbiAgcmV0dXJuIDw+SG9tZTwvPlxuXG59XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvLyBmZXRjaCBkYXRhcyBvbiBzZXJ2ZXJcbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YSB9O1xuICBcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd291bGQgYmUgbWVyZ2VkIHdpdGggZXhpc3RpbmcgcHJvcHNcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIkhvbWUiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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