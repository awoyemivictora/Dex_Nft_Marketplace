"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ConnectWallet",{

/***/ "./pages/ConnectWallet.jsx":
/*!*********************************!*\
  !*** ./pages/ConnectWallet.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/ConnectWallet */ \"./containers/ConnectWallet/index.jsx\");\n/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Footer */ \"./layouts/Footer/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar Header = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"layouts_Header_index_jsx-_481f1\").then(__webpack_require__.bind(__webpack_require__, /*! ../layouts/Header */ \"./layouts/Header/index.jsx\"));\n}, {\n    loadableGenerated: {\n        webpack: function() {\n            return [\n                /*require.resolve*/(/*! ../layouts/Header */ \"./layouts/Header/index.jsx\")\n            ];\n        },\n        modules: [\n            \"ConnectWallet.jsx -> \" + \"../layouts/Header\"\n        ]\n    },\n    ssr: false\n});\n_c = Header;\nvar ConnectWallet = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Header, {\n                Title: \"Wallet Connect\",\n                __source: {\n                    fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/pages/ConnectWallet.jsx\",\n                    lineNumber: 15\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_containers_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/pages/ConnectWallet.jsx\",\n                    lineNumber: 16\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/user/Movies/Dex_Nft_Marketplace/pages/ConnectWallet.jsx\",\n                    lineNumber: 17\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c1 = ConnectWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConnectWallet);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"ConnectWallet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db25uZWN0V2FsbGV0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0M7QUFPOEI7QUFDMUI7O0FBUHRDLEdBQUssQ0FBQ0csTUFBTSxHQUFHSCxtREFBTyxDQUNwQixRQUNGLEdBRFEsQ0FBQztJQUNMLE1BQU0sQ0FBQ0ksbUxBQTBCO0FBQ25DLENBQUM7Ozs7Ozs7Ozs7O0lBQ0NDLEdBQUcsRUFBRSxLQUFLOztLQUpSRixNQUFNO0FBU1osR0FBSyxDQUFDRyxhQUFhLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztJQUUzQixNQUFNOztpRkFFQUgsTUFBTTtnQkFBQ0ksS0FBSyxFQUFDLENBQWdCOzs7Ozs7O2lGQUM3Qk4saUVBQXNCOzs7Ozs7O2lGQUN4QkMsdURBQU07Ozs7Ozs7OztBQUdaLENBQUM7TUFUS0ksYUFBYTtBQVduQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0Nvbm5lY3RXYWxsZXQuanN4Pzk3ZWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuY29uc3QgSGVhZGVyID0gZHluYW1pYyhcbiAgKCkgPT4ge1xuICAgIHJldHVybiBpbXBvcnQoJy4uL2xheW91dHMvSGVhZGVyJyk7XG4gIH0sXG4gIHsgc3NyOiBmYWxzZSB9XG4pO1xuaW1wb3J0IENvbm5lY3RXYWxsZXRDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9Db25uZWN0V2FsbGV0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vbGF5b3V0cy9Gb290ZXInO1xuXG5jb25zdCBDb25uZWN0V2FsbGV0ID0gKCkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIFx0PEhlYWRlciBUaXRsZT0nV2FsbGV0IENvbm5lY3QnIC8+XG4gICAgICBcdDxDb25uZWN0V2FsbGV0Q29udGFpbmVyIC8+XG4gICAgXHQ8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbm5lY3RXYWxsZXQ7XG5cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiQ29ubmVjdFdhbGxldENvbnRhaW5lciIsIkZvb3RlciIsIkhlYWRlciIsImltcG9ydCIsInNzciIsIkNvbm5lY3RXYWxsZXQiLCJUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/ConnectWallet.jsx\n");

/***/ })

});