"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkssps_client"] = self["webpackChunkssps_client"] || []).push([["queue"],{

/***/ "./src/scripts/queue.js":
/*!******************************!*\
  !*** ./src/scripts/queue.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\n// status: -1:Chưa in, 0:Đang in  1: Đã in\r\nsetTimeout(function () {\r\n  const Queue = [{\r\n    'title': \"Lab4_RelationalAlgebra.pdf\",\r\n    'location': \"H1-203\",\r\n    'time': 0,\r\n    'status': 1\r\n  }, {\r\n    'title': \"06_Ch6 System Modeling_2023.pdf\",\r\n    'location': \"H1-203\",\r\n    'time': 2,\r\n    'status': 0\r\n  }, {\r\n    'title': \"Lab4_RelationalAlgebra.pdf\",\r\n    'location': \"H1-203\",\r\n    'time': 6,\r\n    'status': 0\r\n  }]\r\n  let str = ''\r\n  Queue.forEach((el, index) => {\r\n    str += `\r\n    <div\r\n                class=\"flex w-full items-center py-1 max-md:flex-wrap max-md:justify-between md:flex-row md:space-x-2\"\r\n              >\r\n                <p class=\"w-3/4 min-w-0 truncate rounded-full md:w-full\">\r\n                  `+ el['title'] + `\r\n                </p>\r\n                <a\r\n                  href=\"\"\r\n                  class=\"my-auto w-14 shrink-0 justify-end rounded-full text-right md:order-5 xl:w-16 2xl:w-20\"\r\n                  >Hủy</a\r\n                >\r\n                <div\r\n                  class=\"flex w-full flex-row space-x-2 max-md:text-sm md:max-w-max\"\r\n                >\r\n                  <p class=\"shrink-0 rounded-full md:w-24 xl:w-28 2xl:w-32\">\r\n                  `+ el['location'] + `\r\n                  </p>\r\n                  <div class=\"md:hidden\">•</div>\r\n\r\n                  <p class=\"w-28 shrink-0 rounded-full xl:w-32 2xl:w-36\">\r\n                  `\r\n    if (el['status'] == -1) {\r\n      str += 'Chưa in';\r\n    }\r\n    if (el['status'] == 0) {\r\n      str += 'Đang in';\r\n    }\r\n    if (el['status'] == 1) {\r\n      str += 'Đã in';\r\n    }\r\n    str += `\r\n                  </p>\r\n                  <p\r\n                    class=\"w-24 shrink-0 rounded-full max-md:hidden xl:w-28 2xl:w-32\"\r\n                  >\r\n                  `+ el['time'] + ` phút\r\n                  </p>\r\n                </div>\r\n              </div>`});\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#queue-content').html(str);\r\n}, 2000)\r\n\r\n\n\n//# sourceURL=webpack://ssps-client/./src/scripts/queue.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/queue.js"));
/******/ }
]);