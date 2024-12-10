"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkssps_client"] = self["webpackChunkssps_client"] || []).push([["login"],{

/***/ "./src/scripts/login.js":
/*!******************************!*\
  !*** ./src/scripts/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable require-jsdoc, no-unused-vars */\r\n\r\nconst url = 'http://127.0.0.1:3000';\r\n\r\nconst isEmpty = (str) => !str.trim().length;\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {\r\n  if (localStorage.getItem('userInfo')) {\r\n    window.location.href = './home.html';\r\n    return;\r\n  }\r\n});\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()('[name=submitButton]').on('click', function (e) {\r\n  e.preventDefault();\r\n  // console.log('hehe');\r\n  // const user = new User(\r\n  //   'Lê Nguyên Chương',\r\n  //   '../../assets/avatar.png',\r\n  //   '25',\r\n  //   '01-01-2024',\r\n  //   'User',\r\n  // );\r\n  const username = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#username').val();\r\n  const password = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#password').val();\r\n  if (isEmpty(username) || isEmpty(password)) {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[id=msg]').remove();\r\n    const errorDiv = `\r\n    <div\r\n    id='msg'\r\n    class='errors'\r\n    style=\"background-color: rgb(255, 238, 221);\"\r\n    >\r\n    Please fill in all of the required fields!\r\n    </div>\r\n    `;\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fm1').prepend(errorDiv);\r\n    // throw new Error('');\r\n    return;\r\n  }\r\n  const body = {\r\n    email: username,\r\n    password: password,\r\n  };\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().post(url + '/account/login', body)\r\n    .done(function (data) {\r\n      localStorage.setItem('userToken', data.token);\r\n      localStorage.setItem('url', url);\r\n      window.location.href = './home.html';\r\n    })\r\n    .fail(() => {\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[id=msg]').remove();\r\n      const errorDiv = `\r\n    <div\r\n    id='msg'\r\n    class='errors'\r\n    style=\"background-color: rgb(255, 238, 221);\"\r\n    >\r\n    The credentials you provided cannot be determined to be authentic.\r\n    </div>\r\n    `;\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#fm1').prepend(errorDiv);\r\n      // throw new Error(\r\n      //   'Failed to authorize login information. Wrong username or password?',\r\n      // );\r\n      return;\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://ssps-client/./src/scripts/login.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/login.js"));
/******/ }
]);