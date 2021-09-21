module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/danielagbenyega/Desktop/web projects/furnicommerce/components/Index/ProductList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ProductList({\n  products\n}) {\n  function mapProductsToItems(products) {\n    return products.map(product => ({\n      header: product.name,\n      image: product.Url,\n      meta: `$${product.price}`,\n      color: 'teal',\n      fluid: true,\n      childKey: product._id,\n      href: `/product?_id=${product._id}`\n    }));\n  } // items to be represented per row (CSS) and items should be centered\n\n\n  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Group, {\n    itemsPerRow: \"3\",\n    centered: true,\n    items: mapProductsToItems(products),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 10\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzPzY1ZDciXSwibmFtZXMiOlsiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsIm1hcFByb2R1Y3RzVG9JdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJoZWFkZXIiLCJuYW1lIiwiaW1hZ2UiLCJVcmwiLCJtZXRhIiwicHJpY2UiLCJjb2xvciIsImZsdWlkIiwiY2hpbGRLZXkiLCJfaWQiLCJocmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUI7QUFBRUM7QUFBRixDQUFyQixFQUFtQztBQUNqQyxXQUFTQyxrQkFBVCxDQUE0QkQsUUFBNUIsRUFBc0M7QUFDcEMsV0FBT0EsUUFBUSxDQUFDRSxHQUFULENBQWFDLE9BQU8sS0FBSztBQUM5QkMsWUFBTSxFQUFFRCxPQUFPLENBQUNFLElBRGM7QUFFOUJDLFdBQUssRUFBRUgsT0FBTyxDQUFDSSxHQUZlO0FBRzlCQyxVQUFJLEVBQUcsSUFBR0wsT0FBTyxDQUFDTSxLQUFNLEVBSE07QUFJOUJDLFdBQUssRUFBRSxNQUp1QjtBQUs5QkMsV0FBSyxFQUFFLElBTHVCO0FBTTlCQyxjQUFRLEVBQUVULE9BQU8sQ0FBQ1UsR0FOWTtBQU85QkMsVUFBSSxFQUFHLGdCQUFlWCxPQUFPLENBQUNVLEdBQUk7QUFQSixLQUFMLENBQXBCLENBQVA7QUFVRCxHQVpnQyxDQWFqQzs7O0FBQ0EsU0FBTyxNQUFDLHNEQUFELENBQU0sS0FBTjtBQUFZLGVBQVcsRUFBQyxHQUF4QjtBQUE0QixZQUFRLE1BQXBDO0FBQXFDLFNBQUssRUFDaERaLGtCQUFrQixDQUFDRCxRQUFELENBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBR0Q7O0FBRWNELDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbmRleC9Qcm9kdWN0TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuZnVuY3Rpb24gUHJvZHVjdExpc3QoeyBwcm9kdWN0cyB9KSB7XG4gIGZ1bmN0aW9uIG1hcFByb2R1Y3RzVG9JdGVtcyhwcm9kdWN0cykge1xuICAgIHJldHVybiBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoe1xuICAgICAgaGVhZGVyOiBwcm9kdWN0Lm5hbWUsXG4gICAgICBpbWFnZTogcHJvZHVjdC5VcmwsXG4gICAgICBtZXRhOiBgJCR7cHJvZHVjdC5wcmljZX1gLFxuICAgICAgY29sb3I6ICd0ZWFsJyxcbiAgICAgIGZsdWlkOiB0cnVlLFxuICAgICAgY2hpbGRLZXk6IHByb2R1Y3QuX2lkLFxuICAgICAgaHJlZjogYC9wcm9kdWN0P19pZD0ke3Byb2R1Y3QuX2lkfWBcbiAgICB9KSlcbiAgICBcbiAgfVxuICAvLyBpdGVtcyB0byBiZSByZXByZXNlbnRlZCBwZXIgcm93IChDU1MpIGFuZCBpdGVtcyBzaG91bGQgYmUgY2VudGVyZWRcbiAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zUGVyUm93PVwiM1wiIGNlbnRlcmVkIGl0ZW1zPVxuICB7bWFwUHJvZHVjdHNUb0l0ZW1zKHByb2R1Y3RzKX0gLz5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Index/ProductList.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/ProductList */ \"./components/Index/ProductList.js\");\nvar _jsxFileName = \"/Users/danielagbenyega/Desktop/web projects/furnicommerce/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Home({\n  products\n}) {\n  return __jsx(_components_Index_ProductList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    products: products,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 10\n    }\n  });\n}\n\nHome.getInitialProps = async () => {\n  //fetch data on server \n  const url = \"http://localhost:3000/api/products\";\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);\n  return {\n    products: response.data\n  }; // return response data as an object\n  // note: this object will be merged with existing props\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9kdWN0cyIsImdldEluaXRpYWxQcm9wcyIsInVybCIsInJlc3BvbnNlIiwiYXhpb3MiLCJnZXQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxJQUFULENBQWM7QUFBRUM7QUFBRixDQUFkLEVBQTRCO0FBQzFCLFNBQU8sTUFBQyxxRUFBRDtBQUFhLFlBQVEsRUFBRUEsUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBRUQ7O0FBS0RELElBQUksQ0FBQ0UsZUFBTCxHQUF1QixZQUFZO0FBQ2pDO0FBRUEsUUFBTUMsR0FBRyxHQUFHLG9DQUFaO0FBQ0UsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixDQUF2QjtBQUNGLFNBQU87QUFBRUYsWUFBUSxFQUFFRyxRQUFRLENBQUNHO0FBQXJCLEdBQVAsQ0FMaUMsQ0FTakM7QUFDQTtBQUNELENBWEQ7O0FBY2VQLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0J1xuXG5cbmZ1bmN0aW9uIEhvbWUoeyBwcm9kdWN0cyB9KSB7XG4gIHJldHVybiA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuXG59XG5cblxuXG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICAvL2ZldGNoIGRhdGEgb24gc2VydmVyIFxuICBcbiAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3Byb2R1Y3RzXCI7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcbiAgcmV0dXJuIHsgcHJvZHVjdHM6IHJlc3BvbnNlLmRhdGEgfTtcbiAgXG5cblxuICAvLyByZXR1cm4gcmVzcG9uc2UgZGF0YSBhcyBhbiBvYmplY3RcbiAgLy8gbm90ZTogdGhpcyBvYmplY3Qgd2lsbCBiZSBtZXJnZWQgd2l0aCBleGlzdGluZyBwcm9wc1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"semantic-ui-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiPzVjODIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VtYW50aWMtdWktcmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///semantic-ui-react\n");

/***/ })

/******/ });