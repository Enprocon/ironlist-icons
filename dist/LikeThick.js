"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_excluded=["title","titleId"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function SvgLikethick(a){var b=a.title,c=a.titleId,d=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/React.createElement("svg",_extends({width:20,height:20,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":c},d),b===void 0?/*#__PURE__*/React.createElement("title",{id:c},"like thick"):b?/*#__PURE__*/React.createElement("title",{id:c},b):null,/*#__PURE__*/React.createElement("path",{d:"M17.472 8.515L10 17.655l-7.45-9.11a3.6 3.6 0 01-.732-2.181 3.64 3.64 0 013.637-3.637A3.64 3.64 0 018.97 5.455h2.058a3.64 3.64 0 013.516-2.728 3.64 3.64 0 013.637 3.637 3.58 3.58 0 01-.71 2.151M14.545.91C12.65.91 10.978 1.88 10 3.351A5.453 5.453 0 005.455.91 5.46 5.46 0 000 6.364C0 7.55.38 8.683 1.12 9.666l7.706 9.425h2.348l7.728-9.454A5.403 5.403 0 0020 6.364 5.46 5.46 0 0014.545.909",fillRule:"evenodd"}))}var _default=SvgLikethick;exports.default=_default;