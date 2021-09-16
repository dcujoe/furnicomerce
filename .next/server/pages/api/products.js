module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/products.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/products.js":
/*!*******************************!*\
  !*** ./pages/api/products.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_products_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/products.json */ \"./static/products.json\");\nvar _static_products_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/products.json */ \"./static/products.json\", 1);\n/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/connectDb */ \"./utils/connectDb.js\");\n\n\nObject(_utils_connectDb__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ __webpack_exports__[\"default\"] = (products = (req, res) => {\n  res.status(200).json(_static_products_json__WEBPACK_IMPORTED_MODULE_0__);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdHMuanM/ZjYzZiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJwcm9kdWN0cyIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxnRUFBUztBQUVNQyx1RUFBUSxHQUFHLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3BDQSxLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkosa0RBQXJCO0FBRUgsQ0FIRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wcm9kdWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWN0cyBmcm9tICcuLi8uLi9zdGF0aWMvcHJvZHVjdHMuanNvbidcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vdXRpbHMvY29ubmVjdERiJ1xuXG5jb25uZWN0REIoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0cyA9IChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3RzKTtcblxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/products.js\n");

/***/ }),

/***/ "./static/products.json":
/*!******************************!*\
  !*** ./static/products.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"Bernie Gledhill\\\",\\\"price\\\":1399.02,\\\"description\\\":\\\"Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.\\\",\\\"sku\\\":\\\"594-54-9502\\\",\\\"mediaUrl\\\":\\\"https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/f/d/fd1_lngchr_bh_frontlow-field-lounge-chair-tait-blush.jpg\\\"},{\\\"name\\\":\\\"Gwendolen Bickerstaffe\\\",\\\"price\\\":1599.93,\\\"description\\\":\\\"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.\\\",\\\"sku\\\":\\\"868-50-9482\\\",\\\"mediaUrl\\\":\\\"https://res-3.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/d/s/ds1_lngchr_ca-deep-thoughts-lounge-chair-camel-leather.jpg\\\"},{\\\"name\\\":\\\"Desi Avramovitz\\\",\\\"price\\\":699.57,\\\"description\\\":\\\"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.\\\",\\\"sku\\\":\\\"534-20-2675\\\",\\\"mediaUrl\\\":\\\"https://res-1.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/r/u/ru1_rton69_m1_overhead-right-on-6-9-rug-color-mix-1.jpg\\\"},{\\\"name\\\":\\\"Addy Alldre\\\",\\\"price\\\":1999.23,\\\"description\\\":\\\"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.\\\",\\\"sku\\\":\\\"797-94-5844\\\",\\\"mediaUrl\\\":\\\"https://res-3.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/c/l/cl1_secktc_cl_view1-cleon-small-sectional-tait-charcoal.jpg\\\"},{\\\"name\\\":\\\"Cristian Gilbanks\\\",\\\"price\\\":1999.38,\\\"description\\\":\\\"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\\\",\\\"sku\\\":\\\"803-74-3669\\\",\\\"mediaUrl\\\":\\\"https://res-4.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/o/n/on1_sleepr_rd_one-night-stand-craig-red.2x.jpg\\\"},{\\\"name\\\":\\\"Kalila Gooms\\\",\\\"price\\\":1299.18,\\\"description\\\":\\\"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.\\\",\\\"sku\\\":\\\"234-56-6575\\\",\\\"mediaUrl\\\":\\\"https://res-2.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/c/d/cd1-2dcrdz-wl_clad-2-door-credenza.2x.jpg\\\"},{\\\"name\\\":\\\"Bartolemo Peckitt\\\",\\\"price\\\":449.39,\\\"description\\\":\\\"Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.\\\",\\\"sku\\\":\\\"204-74-3402\\\",\\\"mediaUrl\\\":\\\"https://res-4.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/s/r/sr1_sidtbl_sk_front_strut-side-table-smoke_3.jpg\\\"},{\\\"name\\\":\\\"Kathye Haith\\\",\\\"price\\\":199.93,\\\"description\\\":\\\"In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.\\\",\\\"sku\\\":\\\"150-37-2137\\\",\\\"mediaUrl\\\":\\\"https://res-3.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/r/o/rook_modern_table_lamp.jpg\\\"},{\\\"name\\\":\\\"Armin Basilio\\\",\\\"price\\\":2299.01,\\\"description\\\":\\\"Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.\\\",\\\"sku\\\":\\\"306-80-4996\\\",\\\"mediaUrl\\\":\\\"https://res-3.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/n/y/ny1_narmsf_ln_frontlow-9-yard-armless-sofa-sunbrella-linen.jpg\\\"},{\\\"name\\\":\\\"Cal Sterman\\\",\\\"price\\\":299.23,\\\"description\\\":\\\"In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.\\\",\\\"sku\\\":\\\"726-81-7094\\\",\\\"mediaUrl\\\":\\\"https://res-4.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/b/p/bp1_smlpen_ox-bobber-small-pendant-oxblood.jpg\\\"},{\\\"name\\\":\\\"Ardine Imlaw\\\",\\\"price\\\":1299.53,\\\"description\\\":\\\"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\\\",\\\"sku\\\":\\\"737-21-7041\\\",\\\"mediaUrl\\\":\\\"https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/w/r/wr1_twwood_wl_front-woodrow-twin-walnut_1.jpg\\\"},{\\\"name\\\":\\\"Noella Ruddom\\\",\\\"price\\\":999.21,\\\"description\\\":\\\"Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\\\",\\\"sku\\\":\\\"195-11-7465\\\",\\\"mediaUrl\\\":\\\"https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/m/o/modu-licious_4_-_modern_dresser_storage_4.jpg\\\"},{\\\"name\\\":\\\"Kirstyn Espadate\\\",\\\"price\\\":99.57,\\\"description\\\":\\\"Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.\\\",\\\"sku\\\":\\\"892-41-1075\\\",\\\"mediaUrl\\\":\\\"https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/d/k/dk1_lmbrpl_og_front.jpg\\\"},{\\\"name\\\":\\\"Rourke Greet\\\",\\\"price\\\":749.29,\\\"description\\\":\\\"Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\\",\\\"sku\\\":\\\"318-91-5587\\\",\\\"mediaUrl\\\":\\\"https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/n/s/ns1_lnchbk_dk_new-standard-lounge-chair-nixon-dusk-black.jpg\\\"},{\\\"name\\\":\\\"Scarlet Rosemallow\\\",\\\"price\\\":399.57,\\\"description\\\":\\\"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.\\\",\\\"sku\\\":\\\"350-64-1431\\\",\\\"mediaUrl\\\":\\\"https://res-4.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/h/o/hotel-modern-rug-navy-black_1.jpg\\\"},{\\\"name\\\":\\\"Arden Stockbridge\\\",\\\"price\\\":349.08,\\\"description\\\":\\\"Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\\",\\\"sku\\\":\\\"241-19-8416\\\",\\\"mediaUrl\\\":\\\"https://res-2.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/s/n/sn1_smotto_bl_frontlow-sunday-small-ottoman-agnew-blue.jpg\\\"},{\\\"name\\\":\\\"Sheffy Gunter\\\",\\\"price\\\":499.06,\\\"description\\\":\\\"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.\\\",\\\"sku\\\":\\\"593-58-7029\\\",\\\"mediaUrl\\\":\\\"https://res-2.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/b/t/bt1_dinchr_in-beween-us-dining-chair-ink-leather.jpg\\\"},{\\\"name\\\":\\\"Alexine Mulligan\\\",\\\"price\\\":299.27,\\\"description\\\":\\\"Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\\",\\\"sku\\\":\\\"135-28-0671\\\",\\\"mediaUrl\\\":\\\"https://res-5.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/j/v/jv1_coatrk_tm_frontlow-splash-coat-rack-tomato-white-oak.jpg\\\"},{\\\"name\\\":\\\"Micheline Charlson\\\",\\\"price\\\":119.18,\\\"description\\\":\\\"Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.\\\",\\\"sku\\\":\\\"738-62-1356\\\",\\\"mediaUrl\\\":\\\"https://res-1.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/d/k/dk1_sqrplw_mg_front.jpg\\\"},{\\\"name\\\":\\\"Hughie Jeffryes\\\",\\\"price\\\":1199.57,\\\"description\\\":\\\"Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\\\",\\\"sku\\\":\\\"263-43-7868\\\",\\\"mediaUrl\\\":\\\"https://res-3.cloudinary.com/dwpujv6in/image/upload/c_pad,dpr_2.0,f_auto,h_930,q_auto,w_930/v1/media/catalog/product/c/i/ci1_lgcoff_gg_frontlow_v2-circula-large-coffee-table-grey-green.jpg\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0YXRpYy9wcm9kdWN0cy5qc29uLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./static/products.json\n");

/***/ }),

/***/ "./utils/connectDb.js":
/*!****************************!*\
  !*** ./utils/connectDb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\n\nasync function connectDB() {\n  if (connection.isConnected) {\n    //checking if the database is connected \n    console.log(\"Using existing connection\");\n    return;\n  } // use a new database connection object\n\n\n  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(\"mongodb+srv://dcujoe:1234@reactfurnicommerce.bz5ct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority\", {\n    //these commands help prevent deprecated warnings when using mongoose. learn from mongoose website\n    useCreateIndex: true,\n    useFindAndModify: false,\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  console.log(\"DB connected\");\n  connection.isConnected = db.connections[0].readyState;\n} // this whole process is used when connecting mongo DB application with a serverless application like AWS lambda\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (connectDB);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9jb25uZWN0RGIuanM/YWU3ZCJdLCJuYW1lcyI6WyJjb25uZWN0aW9uIiwiY29ubmVjdERCIiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiZGIiLCJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxlQUFlQyxTQUFmLEdBQTJCO0FBQ3ZCLE1BQUlELFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUN4QjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBO0FBQ0gsR0FMc0IsQ0FRdkI7OztBQUNBLFFBQU1DLEVBQUUsR0FBRyxNQUFNQywrQ0FBUSxDQUFDQyxPQUFULENBQWlCQyw0R0FBakIsRUFBd0M7QUFDckQ7QUFDQUMsa0JBQWMsRUFBRSxJQUZxQztBQUdyREMsb0JBQWdCLEVBQUUsS0FIbUM7QUFJckRDLG1CQUFlLEVBQUUsSUFKb0M7QUFLckRDLHNCQUFrQixFQUFFO0FBTGlDLEdBQXhDLENBQWpCO0FBT0FULFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQUosWUFBVSxDQUFDRSxXQUFYLEdBQXlCRyxFQUFFLENBQUNRLFdBQUgsQ0FBZSxDQUFmLEVBQWtCQyxVQUEzQztBQUNILEMsQ0FFRDs7O0FBRWViLHdFQUFmIiwiZmlsZSI6Ii4vdXRpbHMvY29ubmVjdERiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBjb25uZWN0aW9uID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAvL2NoZWNraW5nIGlmIHRoZSBkYXRhYmFzZSBpcyBjb25uZWN0ZWQgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgZXhpc3RpbmcgY29ubmVjdGlvblwiKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvLyB1c2UgYSBuZXcgZGF0YWJhc2UgY29ubmVjdGlvbiBvYmplY3RcbiAgICBjb25zdCBkYiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fU1JWLCB7XG4gICAgICAgIC8vdGhlc2UgY29tbWFuZHMgaGVscCBwcmV2ZW50IGRlcHJlY2F0ZWQgd2FybmluZ3Mgd2hlbiB1c2luZyBtb25nb29zZS4gbGVhcm4gZnJvbSBtb25nb29zZSB3ZWJzaXRlXG4gICAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCBcbiAgICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcIkRCIGNvbm5lY3RlZFwiKVxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xufVxuXG4vLyB0aGlzIHdob2xlIHByb2Nlc3MgaXMgdXNlZCB3aGVuIGNvbm5lY3RpbmcgbW9uZ28gREIgYXBwbGljYXRpb24gd2l0aCBhIHNlcnZlcmxlc3MgYXBwbGljYXRpb24gbGlrZSBBV1MgbGFtYmRhXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/connectDb.js\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiP2ZmZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibW9uZ29vc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongoose\n");

/***/ })

/******/ });