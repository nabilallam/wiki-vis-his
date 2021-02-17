/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ (() => {

eval("incrementVisists(window.location.href);\ninitializeDate();\n\nasync function incrementVisists(url) {\n  let storage_value = browser.storage.local.get(url);\n\n  await storage_value.then(function(item){\n    let visits = item[url] || 0;\n    let jsonVariable = {};\n\n    visits += 1;\n    jsonVariable[url] =  visits;\n    browser.storage.local.set(jsonVariable);\n  });\n}\n\nfunction initializeDate() {\n  let storage_value = browser.storage.local.get(\"started_at\");\n\n  storage_value.then(function(item){\n    if(item[\"started_at\"] === undefined){\n      browser.storage.local.set({\"started_at\": new Date()});\n    }\n  });\n}\n\n\n//# sourceURL=webpack://wikipedia-vis-his/./src/content.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/content.js"]();
/******/ 	
/******/ })()
;