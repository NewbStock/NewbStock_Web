"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/global.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/global.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"utf-8\\\";\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n    margin: 0;\\n    padding: 0;\\n    border: 0;\\n    font-size: 100%;\\n    font: inherit;\\n    vertical-align: baseline;\\n}\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n    display: block;\\n}\\n\\nhtml {\\n    min-height: 100%;\\n}\\nbody {\\n    height: 100vh;\\n    line-height: 1;\\n    color: #d0d0d0;\\n}\\n#__next {\\n    height: 100%;\\n}\\na {\\n    color: #d0d0d0;\\n    text-decoration: none;\\n}\\n\\nol,\\nul {\\n    list-style: none;\\n}\\n\\nblockquote,\\nq {\\n    quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n    content: '';\\n    content: none;\\n}\\n\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\\nimg,\\niframe {\\n    vertical-align: bottom;\\n    max-width: 100%;\\n}\\n\\ninput,\\ntextarea,\\nselect {\\n    font: inherit;\\n}\\n\\n* {\\n    box-sizing: border-box;\\n    -webkit-box-sizing: border-box;\\n    -moz-box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n    text-rendering: optimizeLegibility;\\n}\\n.blind {\\n    position: absolute;\\n    width: 1px;\\n    height: 1px;\\n    padding: 0;\\n    margin: -1px;\\n    overflow: hidden;\\n    clip: rect(0, 0, 0, 0);\\n    white-space: nowrap;\\n    border: 0;\\n}\\n\\n/* 프로젝트 설명 및 비디오를 위한 스타일 */\\n.project-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 100%;\\n    padding: 50px;\\n    padding-top:150px;\\n}\\n\\n.project-description {\\n    text-align: center;\\n    margin-bottom: 20px;\\n    max-width: 70%;\\n}\\n\\n.project-description h2 {\\n    font-size: 24px;\\n    font-weight: bold;\\n    margin-bottom: 10px;\\n    color: #ffffff;\\n}\\n\\n.project-description p {\\n    font-size: 16px;\\n    line-height: 1.5;\\n    color: #d0d0d0;\\n}\\n\\n.project-video {\\n    width: 70%;\\n    height: auto;\\n}\\n\\n/* 반응형 디자인을 위한 미디어 쿼리 */\\n@media (max-width: 768px) {\\n    .project-description,\\n    .project-video {\\n        max-width: 90%;\\n    }\\n\\n    .project-description h2 {\\n        font-size: 20px;\\n    }\\n\\n    .project-description p {\\n        font-size: 14px;\\n    }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;;AAEhB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,cAAc;IACd,cAAc;AAClB;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;;IAEI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;;;IAGI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,8BAA8B;IAC9B,2BAA2B;IAC3B,mCAAmC;IACnC,kCAAkC;AACtC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;AAEA,0BAA0B;AAC1B;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,UAAU;IACV,YAAY;AAChB;;AAEA,uBAAuB;AACvB;IACI;;QAEI,cAAc;IAClB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;AACJ\",\"sourcesContent\":[\"@charset \\\"utf-8\\\";\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n    margin: 0;\\n    padding: 0;\\n    border: 0;\\n    font-size: 100%;\\n    font: inherit;\\n    vertical-align: baseline;\\n}\\n\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n    display: block;\\n}\\n\\nhtml {\\n    min-height: 100%;\\n}\\nbody {\\n    height: 100vh;\\n    line-height: 1;\\n    color: #d0d0d0;\\n}\\n#__next {\\n    height: 100%;\\n}\\na {\\n    color: #d0d0d0;\\n    text-decoration: none;\\n}\\n\\nol,\\nul {\\n    list-style: none;\\n}\\n\\nblockquote,\\nq {\\n    quotes: none;\\n}\\n\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n    content: '';\\n    content: none;\\n}\\n\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\\nimg,\\niframe {\\n    vertical-align: bottom;\\n    max-width: 100%;\\n}\\n\\ninput,\\ntextarea,\\nselect {\\n    font: inherit;\\n}\\n\\n* {\\n    box-sizing: border-box;\\n    -webkit-box-sizing: border-box;\\n    -moz-box-sizing: border-box;\\n    -webkit-font-smoothing: antialiased;\\n    text-rendering: optimizeLegibility;\\n}\\n.blind {\\n    position: absolute;\\n    width: 1px;\\n    height: 1px;\\n    padding: 0;\\n    margin: -1px;\\n    overflow: hidden;\\n    clip: rect(0, 0, 0, 0);\\n    white-space: nowrap;\\n    border: 0;\\n}\\n\\n/* 프로젝트 설명 및 비디오를 위한 스타일 */\\n.project-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 100%;\\n    padding: 50px;\\n    padding-top:150px;\\n}\\n\\n.project-description {\\n    text-align: center;\\n    margin-bottom: 20px;\\n    max-width: 70%;\\n}\\n\\n.project-description h2 {\\n    font-size: 24px;\\n    font-weight: bold;\\n    margin-bottom: 10px;\\n    color: #ffffff;\\n}\\n\\n.project-description p {\\n    font-size: 16px;\\n    line-height: 1.5;\\n    color: #d0d0d0;\\n}\\n\\n.project-video {\\n    width: 70%;\\n    height: auto;\\n}\\n\\n/* 반응형 디자인을 위한 미디어 쿼리 */\\n@media (max-width: 768px) {\\n    .project-description,\\n    .project-video {\\n        max-width: 90%;\\n    }\\n\\n    .project-description h2 {\\n        font-size: 20px;\\n    }\\n\\n    .project-description p {\\n        font-size: 14px;\\n    }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxNF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzE0XS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkRBQTZELGdrQkFBZ2tCLGdCQUFnQixpQkFBaUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsdUdBQXVHLHFCQUFxQixHQUFHLFVBQVUsdUJBQXVCLEdBQUcsUUFBUSxvQkFBb0IscUJBQXFCLHFCQUFxQixHQUFHLFdBQVcsbUJBQW1CLEdBQUcsS0FBSyxxQkFBcUIsNEJBQTRCLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxvQkFBb0IsbUJBQW1CLEdBQUcsK0RBQStELGtCQUFrQixvQkFBb0IsR0FBRyxXQUFXLGdDQUFnQyx3QkFBd0IsR0FBRyxrQkFBa0IsNkJBQTZCLHNCQUFzQixHQUFHLCtCQUErQixvQkFBb0IsR0FBRyxPQUFPLDZCQUE2QixxQ0FBcUMsa0NBQWtDLDBDQUEwQyx5Q0FBeUMsR0FBRyxVQUFVLHlCQUF5QixpQkFBaUIsa0JBQWtCLGlCQUFpQixtQkFBbUIsdUJBQXVCLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEdBQUcscURBQXFELG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixtQkFBbUIsb0JBQW9CLHdCQUF3QixHQUFHLDBCQUEwQix5QkFBeUIsMEJBQTBCLHFCQUFxQixHQUFHLDZCQUE2QixzQkFBc0Isd0JBQXdCLDBCQUEwQixxQkFBcUIsR0FBRyw0QkFBNEIsc0JBQXNCLHVCQUF1QixxQkFBcUIsR0FBRyxvQkFBb0IsaUJBQWlCLG1CQUFtQixHQUFHLHlEQUF5RCxpREFBaUQseUJBQXlCLE9BQU8saUNBQWlDLDBCQUEwQixPQUFPLGdDQUFnQywwQkFBMEIsT0FBTyxHQUFHLE9BQU8sMEZBQTBGLHNGQUFzRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLGVBQWUsVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxPQUFPLFFBQVEsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSw0Q0FBNEMsZ2tCQUFna0IsZ0JBQWdCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLG9CQUFvQiwrQkFBK0IsR0FBRyx1R0FBdUcscUJBQXFCLEdBQUcsVUFBVSx1QkFBdUIsR0FBRyxRQUFRLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyxLQUFLLHFCQUFxQiw0QkFBNEIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLG9CQUFvQixtQkFBbUIsR0FBRywrREFBK0Qsa0JBQWtCLG9CQUFvQixHQUFHLFdBQVcsZ0NBQWdDLHdCQUF3QixHQUFHLGtCQUFrQiw2QkFBNkIsc0JBQXNCLEdBQUcsK0JBQStCLG9CQUFvQixHQUFHLE9BQU8sNkJBQTZCLHFDQUFxQyxrQ0FBa0MsMENBQTBDLHlDQUF5QyxHQUFHLFVBQVUseUJBQXlCLGlCQUFpQixrQkFBa0IsaUJBQWlCLG1CQUFtQix1QkFBdUIsNkJBQTZCLDBCQUEwQixnQkFBZ0IsR0FBRyxxREFBcUQsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLG1CQUFtQixvQkFBb0Isd0JBQXdCLEdBQUcsMEJBQTBCLHlCQUF5QiwwQkFBMEIscUJBQXFCLEdBQUcsNkJBQTZCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHFCQUFxQixHQUFHLDRCQUE0QixzQkFBc0IsdUJBQXVCLHFCQUFxQixHQUFHLG9CQUFvQixpQkFBaUIsbUJBQW1CLEdBQUcseURBQXlELGlEQUFpRCx5QkFBeUIsT0FBTyxpQ0FBaUMsMEJBQTBCLE9BQU8sZ0NBQWdDLDBCQUEwQixPQUFPLEdBQUcsbUJBQW1CO0FBQ3orTTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzPzFlMzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJ1dGYtOFxcXCI7XFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmh0bWwge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxuICAgIGNvbG9yOiAjZDBkMGQwO1xcbn1cXG4jX19uZXh0IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5hIHtcXG4gICAgY29sb3I6ICNkMGQwZDA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG50YWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbWcsXFxuaWZyYW1lIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbn1cXG4uYmxpbmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IC0xcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLyog7ZSE66Gc7KCd7Yq4IOyEpOuqhSDrsI8g67mE65SU7Jik66W8IOychO2VnCDsiqTtg4DsnbwgKi9cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDoxNTBweDtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1heC13aWR0aDogNzAlO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBjb2xvcjogI2QwZDBkMDtcXG59XFxuXFxuLnByb2plY3QtdmlkZW8ge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIOuwmOydke2YlSDrlJTsnpDsnbjsnYQg7JyE7ZWcIOuvuOuUlOyWtCDsv7zrpqwgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24sXFxuICAgIC5wcm9qZWN0LXZpZGVvIHtcXG4gICAgICAgIG1heC13aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kZXNjcmlwdGlvbiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCOztBQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBOzs7Ozs7Ozs7OztJQVdJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7OztJQUlJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQSx1QkFBdUI7QUFDdkI7SUFDSTs7UUFFSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwidXRmLThcXFwiO1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBjb2xvcjogI2QwZDBkMDtcXG59XFxuI19fbmV4dCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuYSB7XFxuICAgIGNvbG9yOiAjZDBkMGQwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuaW1nLFxcbmlmcmFtZSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gICAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG59XFxuLmJsaW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAtMXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi8qIO2UhOuhnOygne2KuCDshKTrqoUg67CPIOu5hOuUlOyYpOulvCDsnITtlZwg7Iqk7YOA7J28ICovXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgcGFkZGluZy10b3A6MTUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXgtd2lkdGg6IDcwJTtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24gaDIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLnByb2plY3QtZGVzY3JpcHRpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgY29sb3I6ICNkMGQwZDA7XFxufVxcblxcbi5wcm9qZWN0LXZpZGVvIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKiDrsJjsnZHtmJUg65SU7J6Q7J247J2EIOychO2VnCDrr7jrlJTslrQg7L+866asICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uLFxcbiAgICAucHJvamVjdC12aWRlbyB7XFxuICAgICAgICBtYXgtd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1kZXNjcmlwdGlvbiBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24gcCB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[14].use[2]!./styles/global.css\n"));

/***/ })

});