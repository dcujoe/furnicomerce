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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home(products) {\n  console.log(products);\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    getProducts();\n  }, []);\n\n  async function getProducts() {\n    const url = \"http://localhost:3000/api/products\";\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);\n    console.log(response.data);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"home\");\n}\n\nHome.getInitialProps = async () => {\n  //fetch data on server\n  const url = \"http://localhost:3000/api/products\";\n  const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);\n  return {\n    products: response.data\n  }; // return response data as an object\n  // note: this object will be merged with existing props\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsInVzZUVmZmVjdCIsImdldFByb2R1Y3RzIiwidXJsIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImRhdGEiLCJnZXRJbml0aWFsUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBR0EsU0FBU0EsSUFBVCxDQUFjQyxRQUFkLEVBQXdCO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBRyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLE1BQU07QUFDdEJDLGVBQVc7QUFDWCxHQUZBLEVBRUUsRUFGRjs7QUFJRCxpQkFBZUEsV0FBZixHQUE2QjtBQUM1QixVQUFNQyxHQUFHLEdBQUcsb0NBQVo7QUFDQSxVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFVSCxHQUFWLENBQXZCO0FBQ0FMLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSyxRQUFRLENBQUNHLElBQXJCO0FBRUQ7O0FBR0MsU0FBTywwRUFBUDtBQUNEOztBQUdEWCxJQUFJLENBQUNZLGVBQUwsR0FBdUIsWUFBWTtBQUNqQztBQUNBLFFBQU1MLEdBQUcsR0FBRyxvQ0FBWjtBQUNFLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsQ0FBdkI7QUFDRixTQUFPO0FBQUVOLFlBQVEsRUFBRU8sUUFBUSxDQUFDRztBQUFyQixHQUFQLENBSmlDLENBTWpDO0FBQ0E7QUFDRCxDQVJEOztBQVdlWCxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmZ1bmN0aW9uIEhvbWUocHJvZHVjdHMpIHtcbiAgY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICBnZXRQcm9kdWN0cygpXG4gfSwgW10pO1xuXG4gYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHMoKSB7XG4gIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wcm9kdWN0c1wiO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcblxufVxuXG5cbiAgcmV0dXJuIDw+aG9tZTwvPjtcbn1cblxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgLy9mZXRjaCBkYXRhIG9uIHNlcnZlclxuICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvcHJvZHVjdHNcIjtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICByZXR1cm4geyBwcm9kdWN0czogcmVzcG9uc2UuZGF0YSB9XG5cbiAgLy8gcmV0dXJuIHJlc3BvbnNlIGRhdGEgYXMgYW4gb2JqZWN0XG4gIC8vIG5vdGU6IHRoaXMgb2JqZWN0IHdpbGwgYmUgbWVyZ2VkIHdpdGggZXhpc3RpbmcgcHJvcHNcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ })

/******/ });