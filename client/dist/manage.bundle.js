"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkssps_client"] = self["webpackChunkssps_client"] || []).push([["manage"],{

/***/ "./src/scripts/manage.js":
/*!*******************************!*\
  !*** ./src/scripts/manage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ \"./node_modules/print-js/dist/print.js\");\n/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable require-jsdoc */\r\n\r\n\r\n\r\nconst url = localStorage.getItem('url');\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default().each(['put', 'delete', 'patch'], function (i, method) {\r\n  (jquery__WEBPACK_IMPORTED_MODULE_0___default())[method] = function (url, data, callback, type) {\r\n    if (jquery__WEBPACK_IMPORTED_MODULE_0___default().isFunction(data)) {\r\n      type = type || callback;\r\n      callback = data;\r\n      data = undefined;\r\n    }\r\n\r\n    return jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({\r\n      url: url,\r\n      type: method,\r\n      dataType: type,\r\n      data: data,\r\n      success: callback,\r\n    });\r\n  };\r\n});\r\nvar printers = [];\r\nfunction Printer(name) {\r\n  this.name = name;\r\n  this.status = 'Active';\r\n  this.mode = 'Automatic';\r\n  this.uptimeSince = 'date';\r\n}\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {\r\n  if (JSON.parse(localStorage.getItem('userInfo')).userType !== 'spso') {\r\n    // $('a[href^=\"manage\"]').addClass('hidden');\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#manage-printer').remove();\r\n  }\r\n  loadPrinterSelectQueue();\r\n  // loadData();\r\n  // loadDataOfPrinter('656ef3598216dbff305d0006');\r\n  loadPrinter();\r\n  addPrinter();\r\n  changeStatusPrinter();\r\n  // editPrinter();\r\n  deletePrinter();\r\n});\r\n\r\nconst printer1 = new Printer('H3-404');\r\n\r\n// $('#add-printer').on('click', function () {\r\n//   $('#printer-name').text('Máy in: ' + printer1.name);\r\n//   $('#manage-printer-body').html(\r\n//     '<p class=\"text-sm font-bold text-gray-600 dark:text-gray-300\">Chi tiết</p><hr class=\"border w-full\" /><div class=\"flex flex-row justify-between\"><p>Trạng thái</p><p>' +\r\n//     printer1.status +\r\n//     '</p></div><div class=\"flex flex-row justify-between\"><p>Chế độ</p><p>' +\r\n//     printer1.mode +\r\n//     '</p></div><div class=\"flex flex-row justify-between\"><p>Thời gian hoạt động</p><p>' +\r\n//     printer1.uptimeSince +\r\n//     '</p></div>',\r\n//   );\r\n//   $('#manage-printer-actions').html(\r\n//     `\r\n//     <button\r\n//       id=\"report-printer\"\r\n//       type=\"button\"\r\n//       class=\"items inline-flex gap-x-3 rounded-full px-6 py-2.5 text-center text-black shadow-1 transition ease-out hover:bg-button-hover hover:shadow-3 active:bg-button-active dark:bg-button-dark dark:text-dark-surface dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark\"\r\n//     >\r\n//       Báo lỗi\r\n//     </button>\r\n//     <button\r\n//       id=\"printer-log\"\r\n//       type=\"button\"\r\n//       class=\"items inline-flex gap-x-3 rounded-full px-6 py-2.5 text-center text-black shadow-1 transition ease-out hover:bg-button-hover hover:shadow-3 active:bg-button-active dark:bg-button-dark dark:text-dark-surface dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark\"\r\n//     >\r\n//       Xem nhật kí hoạt động\r\n//     </button>\r\n//     <button\r\n//       id=\"disable-printer\"\r\n//       type=\"button\"\r\n//       class=\"items inline-flex gap-x-3 rounded-full bg-red-700 px-6 py-2.5 text-center text-white shadow-1 transition ease-out hover:bg-red-600 hover:shadow-3 active:bg-red-800 dark:bg-red-800 dark:hover:bg-red-700 dark:active:bg-red-600\"\r\n//     >\r\n//       Vô hiệu hóa\r\n//     </button>\r\n//     `,\r\n//   );\r\n// });\r\n\r\nfunction addPrinter() {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#add-printer').on('click', function () {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#manage-printer').html(`\r\n    <p id=\"printer-name\" class=\"text-xl font-bold\">Máy in</p>\r\n    <div id=\"manage-printer-body\" class=\"flex flex-col space-y-2 transition-all\">\r\n    <!-- <p>Chưa có máy in được thêm vào.</p> -->\r\n  </div>\r\n  \r\n  <div id=\"manage-printer-actions\" class=\"flex w-full flex-wrap items-center justify-end gap-y-3 space-x-3\">\r\n    <button id=\"add-printer\" type=\"button\"\r\n      class=\"items inline-flex gap-x-3 rounded-full bg-button-primary px-6 py-2.5 text-center text-white shadow-1 transition ease-out hover:bg-button-primary-hover hover:shadow-3 active:bg-button-primary-active dark:bg-button-primary-dark dark:hover:bg-button-primary-hover-dark dark:active:bg-button-primary-active-dark\">\r\n      Thêm máy in\r\n    </button>\r\n  </div>`);\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-name').text('Thêm máy in');\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#manage-printer-body').html(\r\n      `<p class=\"text-sm font-bold text-gray-600 dark:text-gray-300\">Chi tiết</p>\r\n      <hr class=\"border w-full\" />\r\n      <div class=\"flex flex-row justify-between\">\r\n        <p>Hãng</p> \r\n        <input type=\"text\" id=\"brand\">\r\n      </div>\r\n      <div class=\"flex flex-row justify-between\">\r\n        <p>Loại</p>\r\n        <input type=\"text\"  id=\"model\">\r\n      </div>\r\n      <div class=\"flex flex-row justify-between\">\r\n        <p>Mô tả</p>\r\n        <input type=\"text\" id=\"des\">\r\n      </div>\r\n      <div class=\"flex flex-row justify-between\">\r\n        <p>Địa chỉ</p>\r\n        <input type=\"text\" id=\"address\">\r\n      </div>\r\n      <div class=\"flex flex-row justify-between\">\r\n        <p>Trạng thái</p>\r\n        <input type=\"checkbox\" id=\"status\">\r\n      </div>`,\r\n    );\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#manage-printer-actions').html(\r\n      `\r\n      <button\r\n        id=\"report-printer\"\r\n        type=\"button\"\r\n        class=\"items inline-flex gap-x-3 rounded-full px-6 py-2.5 text-center text-black shadow-1 transition ease-out hover:bg-button-hover hover:shadow-3 active:bg-button-active dark:bg-button-dark dark:text-dark-surface dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark\"\r\n      >\r\n        Xác nhận\r\n      </button>\r\n      \r\n      `,\r\n    );\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#report-printer').on('click', function () {\r\n      var brandValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#brand').val();\r\n      var modelValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#model').val();\r\n      var desValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#des').val();\r\n      var addressValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#address').val();\r\n      var statusValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#status').prop('checked');\r\n      let data = {\r\n        brand: brandValue,\r\n        model: modelValue,\r\n        shortDescription: desValue,\r\n        location: addressValue,\r\n        printerStatus: statusValue,\r\n      };\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().post('http://localhost:3000/spso/printer', JSON.stringify(data))\r\n        .done(function (data) {\r\n          console.log(data.data);\r\n          window.location.reload();\r\n        })\r\n        .fail(function (xhr, status, error) {\r\n          console.log(xhr.status);\r\n          console.log(xhr.responseJSON);\r\n        });\r\n    });\r\n  });\r\n}\r\n\r\nlet printing = true;\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()('#pause-print').on('click', function () {\r\n  if (printing) {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#pause-print').text('Tạm dừng in');\r\n    printing = false;\r\n  } else {\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#pause-print').text('Tiếp tục in');\r\n    printing = true;\r\n  }\r\n});\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()('#stop-print').on('click', function () {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#stop-print')\r\n    .text('Bắt đầu in')\r\n    .attr(\r\n      'class',\r\n      'items inline-flex gap-x-1 rounded-full bg-button-primary px-5 py-2.5 text-center text-white shadow-1 transition ease-out hover:bg-button-primary-hover hover:shadow-3 active:bg-button-primary-active dark:bg-button-primary-dark dark:hover:bg-button-primary-hover-dark dark:active:bg-button-primary-active-dark',\r\n    );\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#pause-print').addClass('invisible');\r\n});\r\n\r\nfunction loadPrinter() {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().get(url + '/spso/printer')\r\n    .done(function (data) {\r\n      printers = data.data;\r\n      var str = ``;\r\n      printers.forEach((el, index) => {\r\n        str +=\r\n          `<div class=\"flex flex-row space-x-2 items-center\">\r\n            <span class=\"w-8\">\r\n          ` +\r\n          index +\r\n          `\r\n          </span>\r\n          <span class=\"w-28 text-left xl:w-32 2xl:w-36\">\r\n          ` +\r\n          el.brand +\r\n          `\r\n          </span>\r\n          <span class=\"w-40 text-left xl:w-44 2xl:w-48\">\r\n          ` +\r\n          el.model +\r\n          `\r\n          </span>\r\n          <span class=\"w-40 text-left xl:w-44 2xl:w-48\">\r\n          ` +\r\n          el.location +\r\n          `\r\n          </span>\r\n          <span class=\"w-40 text-left xl:w-44 2xl:w-48\">\r\n        ` +\r\n          el.shortDescription +\r\n          `\r\n          </span>\r\n          <div class=\" flex flex-row space-x-5 w-40 text-left xl:w-44 2xl:w-48\">\r\n            <div class=\"flex flex-row space-x-3 items-center py-1\">\r\n              `;\r\n        if (el.printerStatus === true) {\r\n          str +=\r\n            `<input data-id=\"` +\r\n            el._id +\r\n            `\" checked class=\"printer-status\" type=\"checkbox\" value=\"\" class=\"w-4 h-4 text-blue-primary bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600\" >`;\r\n        } else {\r\n          str +=\r\n            `<input class=\"printer-status\" data-id=\"` +\r\n            el._id +\r\n            `\" type=\"checkbox\" value=\"\" class=\"w-4 h-4 text-blue-primary bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600\" >`;\r\n        }\r\n        str +=\r\n          `\r\n          </div>\r\n          <!-- <button class=\"edit\" data-printer=\"` +\r\n          el._id +\r\n          `\" data-id=\"` +\r\n          index +\r\n          `\" class=\"w-40 text-left xl:w-44 2xl:w-48\">\r\n            Sửa\r\n          </button> -->\r\n          <button class=\"delete\" data-printer=\"` +\r\n          el._id +\r\n          `\" data-id=\"` +\r\n          index +\r\n          `\" class=\"w-40 text-left xl:w-44 2xl:w-48\">\r\n            Xóa\r\n          </button>\r\n        </div>\r\n      </div>`;\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#manage-printer-body').html(str);\r\n      });\r\n    })\r\n    .fail(function (xhr, status, error) {\r\n      console.log(xhr.status);\r\n      console.log(xhr.responseJSON.error.message);\r\n    });\r\n}\r\n\r\nfunction loadData() {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().ajax({\r\n    type: 'get',\r\n    url: 'http://localhost:3000/spso/all-orders',\r\n    headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },\r\n    dataType: 'JSON',\r\n    success: function (res) {\r\n      if (!res.error) {\r\n        var matchedArray = [];\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:3000/spso/student/')\r\n          .done((res1) => {\r\n            for (let i = 0; i < res1.data.length; i++) {\r\n              for (let j = 0; j < res.length; j++) {\r\n                if (res[j].user === res1.data[i].account) {\r\n                  const temp = {\r\n                    printOrder: res[j],\r\n                    user: res1.data[i].student_ID,\r\n                  };\r\n                  matchedArray.push(temp);\r\n                }\r\n              }\r\n            }\r\n          })\r\n          .then(() => {\r\n            localStorage.setItem('queue', JSON.stringify(matchedArray));\r\n          })\r\n          .fail((xhr, text, error) => {});\r\n      } else {\r\n        console.log(res.error.msg);\r\n      }\r\n    },\r\n  });\r\n}\r\n\r\nfunction loadDataOfPrinter(printer) {\r\n  var matchedArray = [];\r\n  // console.log('http://localhost:3000/queue/all?printer_id=' + printer);\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-queue-content').html('');\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().get(url + '/queue/all?printer_id=' + printer)\r\n    .done(function (data) {\r\n      const printerQueue = data.data.queue;\r\n      // console.log(printerQueue);\r\n\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:3000/spso/student/')\r\n        .done((res1) => {\r\n          for (let i = 0; i < res1.data.length; i++) {\r\n            for (let j = 0; j < printerQueue.length; j++) {\r\n              if (printerQueue[j].user === res1.data[i].account) {\r\n                const temp = {\r\n                  printOrder: printerQueue[j],\r\n                  user: res1.data[i].student_ID,\r\n                };\r\n                matchedArray.push(temp);\r\n              }\r\n            }\r\n          }\r\n          console.log(matchedArray);\r\n        })\r\n        .then(() => {\r\n          matchedArray.forEach((element) => {\r\n            const queueDiv =\r\n              `<div class=\"flex flex-col space-y-2\" >\r\n                <div\r\n                  class=\"flex py-1 max-md:flex-wrap max-md:justify-between md:flex-row md:space-x-2\"\r\n                >\r\n                  <p class=\"w-20 shrink-0 max-md:order-2 max-md:text-right xl:w-28\">\r\n                    ` +\r\n              element.user +\r\n              `\r\n                  </p>\r\n                  <p class=\"w-8/12 truncate max-md:order-1 md:w-full\">\r\n                    ` +\r\n              element.printOrder.fileName +\r\n              `\r\n                  </p>\r\n                  <div class=\"div flex flex-row space-x-2 max-md:order-3\">\r\n                    <p class=\"w-fit shrink-0 md:w-28 xl:w-32\">` +\r\n              element.printOrder.printProperties.numberOfPages +\r\n              ` trang</p>\r\n                  <p class=\"w-fit shrink-0 md:hidden md:w-20 xl:w-28\">•</p>\r\n                  <p class=\"w-fit shrink-0 md:w-28 xl:w-32\">\r\n                  </p>\r\n                </div>\r\n              <div class=\"w-9 shrink-0 max-md:hidden\"><a class=\"underline\" href=\"http://localhost:3000` +\r\n              element.printOrder.fileLocation +\r\n              `\" target=\"_blank\">Xem</a></div>\r\n              </div>`;\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-queue-content').append(queueDiv);\r\n          });\r\n          jquery__WEBPACK_IMPORTED_MODULE_0___default()('#print-next').on('click', () => {\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default().get('http://localhost:3001/download', {\r\n              printer_id: printer,\r\n              model: localStorage.getItem('model'),\r\n            }).always(() => {\r\n              jquery__WEBPACK_IMPORTED_MODULE_0___default().post(\r\n                'http://localhost:3000/queue/next',\r\n                JSON.stringify({\r\n                  printer_id: printer,\r\n                }),\r\n              )\r\n                .done(function (data) {\r\n                  // console.log(data);\r\n                  const fileURL = url + data.message.order.fileLocation;\r\n                  // console.log(fileURL);\r\n                  window.open(fileURL, '_blank').focus();\r\n                  // console.log(data.message.order);\r\n                  loadDataOfPrinter(printer);\r\n                  // printJS('http://localhost:3000' + data.message.order.fileLocation);\r\n                })\r\n                .fail();\r\n            });\r\n          });\r\n        });\r\n    })\r\n    .fail(() => {\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-queue-content').html(\r\n        'Không có mục nào trong hàng đợi máy in.',\r\n      );\r\n    });\r\n}\r\n// status: -1:Chưa in, 0:Đang in  1: Chưa lấy 2: Đã lấy\r\n// const PrinterQueue = [\r\n//   {\r\n//     id: '2110501',\r\n//     title: 'Chapter_6_V7.01_Accessible.pdf',\r\n//     page: 85,\r\n//     status: 0,\r\n//   },\r\n//   {\r\n//     id: '2110501',\r\n//     title: 'Chapter_6_V7.01_Accessible.pdf',\r\n//     page: 85,\r\n//     status: 1,\r\n//   },\r\n//   {\r\n//     id: '2110501',\r\n//     title: 'Chapter_6_V7.01_Accessible.pdf',\r\n//     page: 84,\r\n//     status: -1,\r\n//   },\r\n// ];\r\n\r\n// setTimeout(function () {\r\n//   var PrinterQueue = [];\r\n//   if (localStorage.getItem('queue')) {\r\n//     PrinterQueue = JSON.parse(localStorage.getItem('queue'));\r\n//   }\r\n\r\n//   let str = '';\r\n//   str += `\r\n//           <div class=\"flex w-full flex-row items-center justify-between pb-2\" >\r\n//   <p class=\"text-xl font-bold\">Hàng đợi máy in</p>\r\n//   <button\r\n//     type=\"button\"\r\n//     class=\"items inline-flex gap-x-3 rounded-full px-6 py-2.5 text-center text-black shadow-1 transition ease-out hover:bg-button-hover hover:shadow-3 active:bg-button-active dark:bg-button-dark dark:text-dark-surface dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark\"\r\n//   >\r\n//     Xem tất cả\r\n//   </button>\r\n// </div >\r\n// <div class=\"flex flex-row space-x-2 max-md:hidden\">\r\n//   <p\r\n//     class=\"w-20 shrink-0 text-sm font-bold text-gray-600 dark:text-gray-300 xl:w-28\"\r\n//   >\r\n//     MSSV\r\n//   </p>\r\n//   <p class=\"grow text-sm font-bold text-gray-600 dark:text-gray-300\">\r\n//     Tiêu đề\r\n//   </p>\r\n//   <p\r\n//     class=\"w-28 shrink-0 text-sm font-bold text-gray-600 dark:text-gray-300 xl:w-32\"\r\n//   >\r\n//     Số trang\r\n//   </p>\r\n//   <p\r\n//     class=\"w-28 shrink-0 text-sm font-bold text-gray-600 dark:text-gray-300 xl:w-32\"\r\n//   >\r\n//     Tình trạng\r\n//   </p>\r\n//   <div class=\"w-9 shrink-0\"></div>\r\n// </div>\r\n// <hr class=\"w-full border\" />\r\n//         `;\r\n//   if (PrinterQueue.length == 0) {\r\n//     str += '<p>Bạn không có mục nào trong hàng đợi</p>';\r\n//   } else {\r\n//     PrinterQueue.forEach((el, index) => {\r\n//       if (el.printOrder['status'] == false) {\r\n//         str +=\r\n//           `<div class=\"flex flex-col space-y-2\" >\r\n//           <div\r\n//             class=\"flex py-1 max-md:flex-wrap max-md:justify-between md:flex-row md:space-x-2\"\r\n//           >\r\n//             <p class=\"w-20 shrink-0 max-md:order-2 max-md:text-right xl:w-28\">\r\n//               ` +\r\n//           el.user +\r\n//           `\r\n//             </p>\r\n//             <p class=\"w-8/12 truncate max-md:order-1 md:w-full\">\r\n//               ` +\r\n//           el.printOrder['fileName'] +\r\n//           `\r\n//             </p>\r\n//             <div class=\"div flex flex-row space-x-2 max-md:order-3\">\r\n//               <p class=\"w-fit shrink-0 md:w-28 xl:w-32\">` +\r\n//           el.printOrder['printProperties']['numberOfPages'] +\r\n//           ` trang</p>\r\n//               <p class=\"w-fit shrink-0 md:hidden md:w-20 xl:w-28\">•</p>\r\n//               <p class=\"w-fit shrink-0 md:w-28 xl:w-32\">\r\n//                 `;\r\n//         if (el.printOrder['status'] == false) {\r\n//           str += 'Chưa in';\r\n//         }\r\n//         if (el.printOrder['status'] == true) {\r\n//           str += 'Đang in';\r\n//         }\r\n//         if (el.printOrder['status'] == 1) {\r\n//           str += 'Chưa lấy';\r\n//         }\r\n//         if (el.printOrder['status'] == 2) {\r\n//           str += 'Đã lấy';\r\n//         }\r\n//         str +=\r\n//           `</p>\r\n//             </div>\r\n\r\n//             <div class=\"w-9 shrink-0 max-md:hidden\"><a class=\"underline\" href=\"http://localhost:3000/uploads/` +\r\n//           el.printOrder['_id'] +\r\n//           `.pdf\" target=\"_blank\">Xem</a></div>\r\n//           </div>`;\r\n//       }\r\n//     });\r\n//   }\r\n\r\n//   str += `\r\n//   </div >\r\n//           <div class=\"flex w-full flex-row items-center justify-end space-x-3\">\r\n//           <button\r\n//           id=\"print-next\"\r\n//           type=\"button\"\r\n//           class=\"items inline-flex gap-x-3 rounded-full bg-button-primary px-6 py-2.5 text-center text-white shadow-1 transition ease-out hover:bg-button-primary-hover hover:shadow-3 active:bg-button-primary-active dark:bg-button-primary-dark dark:hover:bg-button-primary-hover-dark dark:active:bg-button-primary-active-dark\"\r\n//         >\r\n//         In đơn kế tiếp\r\n//         </button>\r\n//           </div>`;\r\n//   $('#printer-queue').html(str);\r\n//   $('#print-next').on('click', () => {\r\n//     $.post(\r\n//       'http://localhost:3000/queue/next',\r\n//       JSON.stringify({\r\n//         printer_id: '656df1df0811a88360b55582',\r\n//       }),\r\n//     )\r\n//       .done(function (data) {\r\n//         console.log(data);\r\n//         const URL = 'http://localhost:3000' + data.message.order.fileLocation;\r\n//         console.log(URL);\r\n//         console.log(data.message.order);\r\n//         // printJS('http://localhost:3000' + data.message.order.fileLocation);\r\n//       })\r\n//       .fail();\r\n//     // printJS('http://127.0.0.1:3000/uploads/656df5190811a88360b555fe.pdf');\r\n//   });\r\n// }, 2000);\r\n\r\nfunction changeStatusPrinter() {\r\n  // Use document or a static parent container that exists when the page loads\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('change', '.printer-status', function () {\r\n    const id = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id');\r\n\r\n    const data = { status: String(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).prop('checked')) };\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default().patch('http://localhost:3000/spso/printer/' + id, JSON.stringify(data))\r\n      .done(() => {\r\n        window.location.reload();\r\n      })\r\n      .fail(() => {\r\n        console.log(xhr.status);\r\n        console.log(xhr.responseJSON.error.message);\r\n      });\r\n  });\r\n}\r\n\r\n// function editPrinter() {\r\n//   $(document).on('click', '.edit', function () {\r\n//     let idPrinter = $(this).attr('data-printer');\r\n//     let index = $(this).attr('data-id');\r\n//     $('#manage-printer').html(`\r\n//       <p id=\"printer-name\" class=\"text-xl font-bold\">Máy in</p>\r\n//       <div id=\"manage-printer-body\" class=\"flex flex-col space-y-2 transition-all\">\r\n//       <!-- <p>Chưa có máy in được thêm vào.</p> -->\r\n//     </div>\r\n\r\n//     <div id=\"manage-printer-actions\" class=\"flex w-full flex-wrap items-center justify-end gap-y-3 space-x-3\">\r\n//       <button id=\"add-printer\" type=\"button\"\r\n//         class=\"items inline-flex gap-x-3 rounded-full bg-button-primary px-6 py-2.5 text-center text-white shadow-1 transition ease-out hover:bg-button-primary-hover hover:shadow-3 active:bg-button-primary-active dark:bg-button-primary-dark dark:hover:bg-button-primary-hover-dark dark:active:bg-button-primary-active-dark\">\r\n//         Thêm máy in\r\n//       </button>\r\n//     </div>`)\r\n//     $('#printer-name').text('Chỉnh máy in');\r\n//     $('#manage-printer-body').html(\r\n//       `<p class=\"text-sm font-bold text-gray-600 dark:text-gray-300\">Chi tiết</p>\r\n//         <hr class=\"border w-full\" />\r\n//         <div class=\"flex flex-row justify-between\">\r\n//           <p>Hãng</p>\r\n//           <input type=\"text\" value=`+ printers[index].brand + ` id=\"brand\">\r\n//         </div>\r\n//         <div class=\"flex flex-row justify-between\">\r\n//           <p>Loại</p>\r\n//           <input type=\"text\" value=`+ printers[index].model + `  id=\"model\">\r\n//         </div>\r\n//         <div class=\"flex flex-row justify-between\">\r\n//           <p>Mô tả</p>\r\n//           <input type=\"text\" value=`+ printers[index].location + ` id=\"des\">\r\n//         </div>\r\n//         <div class=\"flex flex-row justify-between\">\r\n//           <p>Địa chỉ</p>\r\n//           <input type=\"text\" value=`+ printers[index].shortDescription + ` id=\"address\">\r\n//         </div>\r\n//         <div class=\"flex flex-row justify-between\">\r\n//           <p>Trạng thái</p>\r\n//           <input type=\"checkbox\" `+ (printers[index].printerStatus === true ? \"checked\" : \"\") + ` id=\"status\">\r\n//         </div>`,\r\n//     );\r\n//     $('#manage-printer-actions').html(\r\n//       `\r\n//         <button\r\n//           id=\"report-printer\"\r\n//           type=\"button\"\r\n//           class=\"items inline-flex gap-x-3 rounded-full px-6 py-2.5 text-center text-black shadow-1 transition ease-out hover:bg-button-hover hover:shadow-3 active:bg-button-active dark:bg-button-dark dark:text-dark-surface dark:hover:bg-button-hover-dark dark:active:bg-button-active-dark\"\r\n//         >\r\n//           Xác nhận\r\n//         </button>\r\n\r\n//         `,\r\n//     );\r\n//     $('#report-printer').on('click', function () {\r\n//       var brandValue = $('#brand').val();\r\n//       var modelValue = $('#model').val();\r\n//       var desValue = $('#des').val();\r\n//       var addressValue = $('#address').val();\r\n//       var statusValue = $('#status').prop('checked');\r\n//       let data = {\r\n//         brand: brandValue,\r\n//         model: modelValue,\r\n//         shortDescription: desValue,\r\n//         location: addressValue,\r\n//         printerStatus: statusValue,\r\n//       }\r\n//       $.post('http://localhost:3000/spso/printer', JSON.stringify(data))\r\n//         .done(function (data) {\r\n//           console.log(data.data);\r\n//           window.location.reload()\r\n//         })\r\n//         .fail(function (xhr, status, error) {\r\n//           console.log(xhr.status);\r\n//           console.log(xhr.responseJSON);\r\n//         });\r\n//     })\r\n\r\n//   });\r\n// }\r\nfunction deletePrinter() {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', '.delete', function () {\r\n    let idPrinter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-printer');\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()[\"delete\"]('http://localhost:3000/spso/printer/' + idPrinter)\r\n      .done((data) => {\r\n        console.log(data);\r\n        window.location.reload();\r\n      })\r\n      .fail(() => {});\r\n  });\r\n}\r\n\r\nfunction loadPrinterSelectQueue() {\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default().get(url + '/spso/printer/')\r\n    .done(function (data) {\r\n      // console.log(data);\r\n      if (data.data.length == 0) {\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#print').attr(\r\n          'class',\r\n          'items inline-flex gap-x-1 rounded-full bg-[#4d69b2] px-5 py-2.5 text-center text-white shadow-1 transition ease-out dark:bg-button-primary-dark cursor-not-allowed',\r\n        );\r\n        const errorDiv = `\r\n      <div class=\"px-3 py-2 bg-red-200 dark:bg-red-900 mix-blend-multiply dark:mix-blend-lighten rounded-full flex flex-row space-x-5 items-center\">\r\n        <svg class=\"self-center\" xmlns=\"http://www.w3.org/2000/svg\" height=\"32\" viewBox=\"0 -960 960 960\" width=\"32\">\r\n          <path fill=\"#B3261E\" d=\"M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z\"></path>\r\n        </svg>\r\n        <p>Không tìm thấy máy in nào</p>\r\n      </div>\r\n      `;\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#drop-zone').append(errorDiv);\r\n      } else {\r\n        const printerList = data.data;\r\n        printerList.forEach((element) => {\r\n          if (element.printerStatus) {\r\n            const printerDiv =\r\n              `\r\n            <div class=\"flex flex-row items-center space-x-2\">\r\n              <input\r\n                id=\"` +\r\n              element.location +\r\n              `\"\r\n              data-id=\"` +\r\n              element.model +\r\n              `\"\r\n                type=\"radio\"\r\n                value=\"` +\r\n              element._id +\r\n              `\"\r\n                name=\"printer-select\"\r\n                class=\"h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600\"\r\n              />\r\n              <label for=\"` +\r\n              element.location +\r\n              `\">` +\r\n              element.location +\r\n              `</label>\r\n            </div>\r\n          `;\r\n            // $('#printer-queue-content').html('');\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-queue-content').append(printerDiv);\r\n          }\r\n        });\r\n      }\r\n    })\r\n    .fail(function (xhr, status, error) {\r\n      // console.log(xhr);\r\n      const errorCode = xhr.status;\r\n      const errorMessage = xhr.responseJSON.error.message;\r\n      window.location.href =\r\n        './error.html?num=' + errorCode + '&msg=' + errorMessage;\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#error-code').html(errorCode);\r\n      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#error-description').html(errorMessage);\r\n    });\r\n}\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()('#select-printer').on('click', () => {\r\n  const printer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=\"printer-select\"]:checked').val();\r\n  localStorage.setItem(\r\n    'model',\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name=\"printer-select\"]:checked').attr('data-id'),\r\n  ),\r\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-list-legend').removeClass('hidden');\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#select-printer').addClass('hidden');\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#print-next').removeClass('hidden');\r\n  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#printer-queue-content').html('');\r\n  loadDataOfPrinter(printer);\r\n});\r\n\r\n// $('#print-next').on('click', () => {\r\n//       $.post(\r\n//         'http://localhost:3000/queue/next',\r\n//         JSON.stringify({\r\n//           printer_id: '656df1df0811a88360b55582',\r\n//         }),\r\n//       )\r\n//         .done(function (data) {\r\n//           console.log(data);\r\n//           const URL = 'http://localhost:3000' + data.message.order.fileLocation;\r\n//           console.log(URL);\r\n//           console.log(data.message.order);\r\n//           // printJS('http://localhost:3000' + data.message.order.fileLocation);\r\n\r\n//         })\r\n//         .fail();\r\n//       // printJS('http://127.0.0.1:3000/uploads/656df5190811a88360b555fe.pdf');\r\n//     });\r\n\n\n//# sourceURL=webpack://ssps-client/./src/scripts/manage.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_print-js_dist_print_js"], () => (__webpack_exec__("./src/scripts/manage.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);