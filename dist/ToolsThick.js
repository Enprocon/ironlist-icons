"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_excluded=["title","titleId"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function SvgToolsthick(a){var b=a.title,c=a.titleId,d=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/React.createElement("svg",_extends({width:10,height:17,viewBox:"0 0 10 17",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":c},d),b===void 0?/*#__PURE__*/React.createElement("title",{id:c},"tools thick"):b?/*#__PURE__*/React.createElement("title",{id:c},b):null,/*#__PURE__*/React.createElement("defs",null,/*#__PURE__*/React.createElement("path",{d:"M13.3 11.817l-.443.207v5.983l-.48.48h-.743l-.48-.48v-5.936l-.471-.198a3.226 3.226 0 01-.846-5.433v2.77l2.067 1.306 2.169-1.292V6.478a3.236 3.236 0 011.092 2.415 3.243 3.243 0 01-1.865 2.924m.267-7.4l-1.032-.378v4.31l-.607.362-.552-.348V4.037l-1.025.361a4.775 4.775 0 00-3.186 4.495c0 1.749.946 3.334 2.45 4.169v5.582l1.382 1.381h2.018l1.38-1.38v-5.672a4.789 4.789 0 002.308-4.08 4.783 4.783 0 00-3.136-4.476",id:"tools_thick_svg__a"})),/*#__PURE__*/React.createElement("use",{xlinkHref:"#tools_thick_svg__a",transform:"translate(-7 -4)",fillRule:"evenodd"}))}var _default=SvgToolsthick;exports.default=_default;