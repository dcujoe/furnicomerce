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

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/danielagbenyega/Desktop/web projects/furnicommerce/components/Index/ProductList.js\";\n\n\n\nfunction ProductList({\n  products\n}) {\n  function mapProductsToItems(products) {\n    return products.map(product => ({\n      header: product.name,\n      image: product.Url,\n      meta: `$${product.price}`,\n      color: 'teal',\n      fluid: true,\n      childKey: product._id,\n      href: `/product?_id=${product._id}`\n    }));\n  } // items to be represented per row (CSS) and items should be centered\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card.Group, {\n    itemsPerRow: \"3\",\n    centered: true,\n    items: mapProductsToItems(products)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFFQSxTQUFTQyxXQUFULENBQXFCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBckIsRUFBbUM7QUFDakMsV0FBU0Msa0JBQVQsQ0FBNEJELFFBQTVCLEVBQXNDO0FBQ3BDLFdBQU9BLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhQyxPQUFPLEtBQUs7QUFDOUJDLE1BQUFBLE1BQU0sRUFBRUQsT0FBTyxDQUFDRSxJQURjO0FBRTlCQyxNQUFBQSxLQUFLLEVBQUVILE9BQU8sQ0FBQ0ksR0FGZTtBQUc5QkMsTUFBQUEsSUFBSSxFQUFHLElBQUdMLE9BQU8sQ0FBQ00sS0FBTSxFQUhNO0FBSTlCQyxNQUFBQSxLQUFLLEVBQUUsTUFKdUI7QUFLOUJDLE1BQUFBLEtBQUssRUFBRSxJQUx1QjtBQU05QkMsTUFBQUEsUUFBUSxFQUFFVCxPQUFPLENBQUNVLEdBTlk7QUFPOUJDLE1BQUFBLElBQUksRUFBRyxnQkFBZVgsT0FBTyxDQUFDVSxHQUFJO0FBUEosS0FBTCxDQUFwQixDQUFQO0FBVUQsR0FaZ0MsQ0FhakM7OztBQUNBLHNCQUFPLDhEQUFDLHlEQUFEO0FBQVksZUFBVyxFQUFDLEdBQXhCO0FBQTRCLFlBQVEsTUFBcEM7QUFBcUMsU0FBSyxFQUNoRFosa0JBQWtCLENBQUNELFFBQUQ7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFHRDs7QUFFRCxpRUFBZUQsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXJlc2VydmUvLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzPzY1ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5mdW5jdGlvbiBQcm9kdWN0TGlzdCh7IHByb2R1Y3RzIH0pIHtcbiAgZnVuY3Rpb24gbWFwUHJvZHVjdHNUb0l0ZW1zKHByb2R1Y3RzKSB7XG4gICAgcmV0dXJuIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+ICh7XG4gICAgICBoZWFkZXI6IHByb2R1Y3QubmFtZSxcbiAgICAgIGltYWdlOiBwcm9kdWN0LlVybCxcbiAgICAgIG1ldGE6IGAkJHtwcm9kdWN0LnByaWNlfWAsXG4gICAgICBjb2xvcjogJ3RlYWwnLFxuICAgICAgZmx1aWQ6IHRydWUsXG4gICAgICBjaGlsZEtleTogcHJvZHVjdC5faWQsXG4gICAgICBocmVmOiBgL3Byb2R1Y3Q/X2lkPSR7cHJvZHVjdC5faWR9YFxuICAgIH0pKVxuICAgIFxuICB9XG4gIC8vIGl0ZW1zIHRvIGJlIHJlcHJlc2VudGVkIHBlciByb3cgKENTUykgYW5kIGl0ZW1zIHNob3VsZCBiZSBjZW50ZXJlZFxuICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXNQZXJSb3c9XCIzXCIgY2VudGVyZWQgaXRlbXM9XG4gIHttYXBQcm9kdWN0c1RvSXRlbXMocHJvZHVjdHMpfSAvPlxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XG4iXSwibmFtZXMiOlsiQ2FyZCIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJtYXBQcm9kdWN0c1RvSXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwiaGVhZGVyIiwibmFtZSIsImltYWdlIiwiVXJsIiwibWV0YSIsInByaWNlIiwiY29sb3IiLCJmbHVpZCIsImNoaWxkS2V5IiwiX2lkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Index/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/ProductList */ \"./components/Index/ProductList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/danielagbenyega/Desktop/web projects/furnicommerce/pages/index.js\";\n\n\n\n\n\nfunction Home({\n  products\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__.default, {\n    products: products\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 10\n  }, this);\n}\n\nHome.getInitialProps = async () => {\n  //fetch data on server \n  const url = \"http://localhost:3000/api/products\";\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);\n  return {\n    products: response.data\n  }; // return response data as an object\n  // note: this object will be merged with existing props\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNHLElBQVQsQ0FBYztBQUFFQyxFQUFBQTtBQUFGLENBQWQsRUFBNEI7QUFDMUIsc0JBQU8sOERBQUMsa0VBQUQ7QUFBYSxZQUFRLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVEOztBQUtERCxJQUFJLENBQUNFLGVBQUwsR0FBdUIsWUFBWTtBQUNqQztBQUVBLFFBQU1DLEdBQUcsR0FBRyxvQ0FBWjtBQUNFLFFBQU1DLFFBQVEsR0FBRyxNQUFNTixnREFBQSxDQUFVSyxHQUFWLENBQXZCO0FBQ0YsU0FBTztBQUFFRixJQUFBQSxRQUFRLEVBQUVHLFFBQVEsQ0FBQ0U7QUFBckIsR0FBUCxDQUxpQyxDQVNqQztBQUNBO0FBQ0QsQ0FYRDs7QUFjQSxpRUFBZU4sSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXJlc2VydmUvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvUHJvZHVjdExpc3QnXG5cblxuZnVuY3Rpb24gSG9tZSh7IHByb2R1Y3RzIH0pIHtcbiAgcmV0dXJuIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG5cbn1cblxuXG5cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vZmV0Y2ggZGF0YSBvbiBzZXJ2ZXIgXG4gIFxuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHNcIjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YSB9O1xuICBcblxuXG4gIC8vIHJldHVybiByZXNwb25zZSBkYXRhIGFzIGFuIG9iamVjdFxuICAvLyBub3RlOiB0aGlzIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIGV4aXN0aW5nIHByb3BzXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiUHJvZHVjdExpc3QiLCJIb21lIiwicHJvZHVjdHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ1cmwiLCJyZXNwb25zZSIsImdldCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

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