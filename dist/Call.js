"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_excluded=["title","titleId"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function SvgCall(a){var b=a.title,c=a.titleId,d=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/React.createElement("svg",_extends({width:"1em",height:"1em",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":c},d),b===void 0?/*#__PURE__*/React.createElement("title",{id:c},"call"):b?/*#__PURE__*/React.createElement("title",{id:c},b):null,/*#__PURE__*/React.createElement("defs",null,/*#__PURE__*/React.createElement("path",{d:"M6.094 2L3.573 3.513a2.945 2.945 0 00-1.284 1.619C1.58 7.323 1.831 11.03 7.05 16.25 10.4 19.6 13.501 21.3 16.266 21.3c.661 0 1.3-.099 1.9-.292a2.938 2.938 0 001.618-1.282l1.503-2.506-.334-1.49-5.623-3.75-2.642 1.723c-.408-.299-.924-.736-1.642-1.454a14.144 14.144 0 01-1.493-1.773l1.014-1.37.794-1.071-.739-1.107-1.22-1.83-1.84-2.764L6.093 2zm.314 2.02L7.826 6.15l1.22 1.83-1.794 2.422s.877 1.61 2.456 3.189c1.578 1.578 2.372 2.01 3.009 2.358l2.602-1.696v-.001l3.958 2.64-1.117 1.86c-.13.219-.336.377-.577.456-.37.118-.808.2-1.316.2-1.748 0-4.33-.949-7.879-4.497C3.81 10.33 3.56 7.358 4.093 5.716c.078-.242.236-.448.454-.579L6.408 4.02z",id:"call_svg__a"})),/*#__PURE__*/React.createElement("use",{xlinkHref:"#call_svg__a",transform:"translate(-2 -2)",fillRule:"evenodd"}))}var _default=SvgCall;exports.default=_default;