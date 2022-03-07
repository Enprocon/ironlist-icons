"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_excluded=["title","titleId"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function SvgArrowhistorythick(a){var b=a.title,c=a.titleId,d=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/React.createElement("svg",_extends({width:"1em",height:"1em",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":c},d),b===void 0?/*#__PURE__*/React.createElement("title",{id:c},"arrow history thick"):b?/*#__PURE__*/React.createElement("title",{id:c},b):null,/*#__PURE__*/React.createElement("path",{d:"M2.934.005l1.003 1.004v2.345c.255-.247.533-.464.82-.673l-.002-.001.008-.006c.174-.128.357-.239.54-.35.019-.014.04-.026.06-.038.206-.125.407-.26.622-.368.005.008.008.017.012.026a9.02 9.02 0 014.004-.935c5.01 0 9.088 4.056 9.088 9.04 0 4.985-4.077 9.042-9.088 9.042-5.012 0-9.088-4.055-9.09-9.038v-.003H.91l1.02-1.004 1.002 1.003c0 3.878 3.172 7.032 7.07 7.032 3.895 0 7.068-3.154 7.068-7.031s-3.173-7.032-7.068-7.032c-1.397 0-2.695.41-3.793 1.11-.422.274-.82.584-1.161.962l2.356.024v-.002l.002.002h.015v.016l.992.997-1.01.997-5.485-.052V1.01h-.003L2.934.005zm7.13 5.45l.955.966h-.002v3.97l2.62 2.78-.007 1.374-1.357-.003-3.182-3.381v-4.74l.973-.966z",fillRule:"evenodd"}))}var _default=SvgArrowhistorythick;exports.default=_default;