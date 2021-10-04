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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/danielagbenyega/Desktop/webprojects/furnicommerce/components/Index/ProductList.js\";\n\n\n\nfunction ProductList({\n  products\n}) {\n  function mapProductsToItems(products) {\n    return products.map(product => ({\n      header: product.name,\n      image: product.mediaUrl,\n      meta: `€${product.price}`,\n      color: 'teal',\n      fluid: true,\n      childKey: product._id,\n      href: `/product?_id=${product._id}`\n    }));\n  } // items to be represented per row (CSS) and items should be centered\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card.Group, {\n    stackable: true,\n    itemsPerRow: \"3\",\n    centered: true,\n    items: mapProductsToItems(products)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFJQSxTQUFTQyxXQUFULENBQXFCO0FBQUVDLEVBQUFBO0FBQUYsQ0FBckIsRUFBbUM7QUFDakMsV0FBU0Msa0JBQVQsQ0FBNEJELFFBQTVCLEVBQXNDO0FBQ3BDLFdBQU9BLFFBQVEsQ0FBQ0UsR0FBVCxDQUFjQyxPQUFELEtBQWM7QUFDaENDLE1BQUFBLE1BQU0sRUFBRUQsT0FBTyxDQUFDRSxJQURnQjtBQUVoQ0MsTUFBQUEsS0FBSyxFQUFFSCxPQUFPLENBQUNJLFFBRmlCO0FBR2hDQyxNQUFBQSxJQUFJLEVBQUcsSUFBR0wsT0FBTyxDQUFDTSxLQUFNLEVBSFE7QUFJaENDLE1BQUFBLEtBQUssRUFBRSxNQUp5QjtBQUtoQ0MsTUFBQUEsS0FBSyxFQUFFLElBTHlCO0FBTWhDQyxNQUFBQSxRQUFRLEVBQUVULE9BQU8sQ0FBQ1UsR0FOYztBQU9oQ0MsTUFBQUEsSUFBSSxFQUFHLGdCQUFlWCxPQUFPLENBQUNVLEdBQUk7QUFQRixLQUFkLENBQWIsQ0FBUDtBQVVELEdBWmdDLENBYWpDOzs7QUFDQSxzQkFBTyw4REFBQyx5REFBRDtBQUNBLGFBQVMsTUFEVDtBQUVBLGVBQVcsRUFBQyxHQUZaO0FBRWdCLFlBQVEsTUFGeEI7QUFFeUIsU0FBSyxFQUNwQ1osa0JBQWtCLENBQUNELFFBQUQ7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFLRDs7QUFFRCxpRUFBZUQsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXJlc2VydmUvLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzPzY1ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5cblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoeyBwcm9kdWN0cyB9KSB7XG4gIGZ1bmN0aW9uIG1hcFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cykge1xuICAgIHJldHVybiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XG4gICAgICBoZWFkZXI6IHByb2R1Y3QubmFtZSxcbiAgICAgIGltYWdlOiBwcm9kdWN0Lm1lZGlhVXJsLFxuICAgICAgbWV0YTogYOKCrCR7cHJvZHVjdC5wcmljZX1gLFxuICAgICAgY29sb3I6ICd0ZWFsJyxcbiAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgY2hpbGRLZXk6IHByb2R1Y3QuX2lkLFxuICAgICAgaHJlZjogYC9wcm9kdWN0P19pZD0ke3Byb2R1Y3QuX2lkfWBcbiAgICB9KSk7XG4gICAgXG4gIH1cbiAgLy8gaXRlbXMgdG8gYmUgcmVwcmVzZW50ZWQgcGVyIHJvdyAoQ1NTKSBhbmQgaXRlbXMgc2hvdWxkIGJlIGNlbnRlcmVkXG4gIHJldHVybiA8Q2FyZC5Hcm91cCBcbiAgICAgICAgIHN0YWNrYWJsZSBcbiAgICAgICAgIGl0ZW1zUGVyUm93PVwiM1wiIGNlbnRlcmVkIGl0ZW1zPVxuICB7bWFwUHJvZHVjdHNUb0l0ZW1zKHByb2R1Y3RzKX0gLz5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwibWFwUHJvZHVjdHNUb0l0ZW1zIiwibWFwIiwicHJvZHVjdCIsImhlYWRlciIsIm5hbWUiLCJpbWFnZSIsIm1lZGlhVXJsIiwibWV0YSIsInByaWNlIiwiY29sb3IiLCJmbHVpZCIsImNoaWxkS2V5IiwiX2lkIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Index/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/ProductList */ \"./components/Index/ProductList.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/danielagbenyega/Desktop/webprojects/furnicommerce/pages/index.js\";\n\n\n\n\n\nfunction Home({\n  products\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__.default, {\n    products: products\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 10\n  }, this);\n}\n\nHome.getInitialProps = async () => {\n  // fetch data from server\n  // return response data as an object\n  const url = \"http://localhost:3000/api/products\";\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(url);\n  return {\n    products: response.data\n  }; // note: this object would be merged with existing props\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUlBLFNBQVNHLElBQVQsQ0FBYztBQUFDQyxFQUFBQTtBQUFELENBQWQsRUFBMEI7QUFHeEIsc0JBQU8sOERBQUMsa0VBQUQ7QUFBYSxZQUFRLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVEOztBQUVERCxJQUFJLENBQUNFLGVBQUwsR0FBdUIsWUFBWTtBQUNqQztBQUNBO0FBQ0UsUUFBTUMsR0FBRyxHQUFHLG9DQUFaO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1OLGdEQUFBLENBQVVLLEdBQVYsQ0FBdkI7QUFDQSxTQUFPO0FBQUVGLElBQUFBLFFBQVEsRUFBRUcsUUFBUSxDQUFDRTtBQUFyQixHQUFQLENBTCtCLENBT2pDO0FBRUQsQ0FURDs7QUFZQSxpRUFBZU4sSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXJlc2VydmUvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvUHJvZHVjdExpc3QnXG5cblxuXG5mdW5jdGlvbiBIb21lKHtwcm9kdWN0c30pIHtcbiBcbiBcbiAgcmV0dXJuIDxQcm9kdWN0TGlzdCBwcm9kdWN0cz17cHJvZHVjdHN9IC8+XG5cbn1cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGZldGNoIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YSB9O1xuICBcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd291bGQgYmUgbWVyZ2VkIHdpdGggZXhpc3RpbmcgcHJvcHNcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJheGlvcyIsIlByb2R1Y3RMaXN0IiwiSG9tZSIsInByb2R1Y3RzIiwiZ2V0SW5pdGlhbFByb3BzIiwidXJsIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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