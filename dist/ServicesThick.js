"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_excluded=["title","titleId"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function SvgServicesthick(a){var b=a.title,c=a.titleId,d=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/React.createElement("svg",_extends({width:"1em",height:"1em",viewBox:"0 0 18 17",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":c},d),b===void 0?/*#__PURE__*/React.createElement("title",{id:c},"services thick"):b?/*#__PURE__*/React.createElement("title",{id:c},b):null,/*#__PURE__*/React.createElement("defs",null,/*#__PURE__*/React.createElement("path",{d:"M18.567 17.593l-.356.356H5.538l-.356-.356v-.747l.356-.355H18.21l.356.355v.747zm-12.733-4.6l.853-1.242V8.73c0-.916.745-1.661 1.661-1.661h7.03c.916 0 1.661.745 1.661 1.661v3.062l.911 1.075v.307H5.834v-.182zm13.005 1.983h-6.315v-.286h6.941v-2.377l-.91-1.075V8.73a3.18 3.18 0 00-3.178-3.177h-2.853v-.372h1.4V3.667H9.661v1.515h1.348v.372h-2.66a3.18 3.18 0 00-3.177 3.177v2.55l-.853 1.24v2.17h6.69v.285H4.91l-1.244 1.243v2.002l1.244 1.243h13.928l1.244-1.243v-2.002l-1.244-1.243z",id:"services_thick_svg__a"})),/*#__PURE__*/React.createElement("use",{xlinkHref:"#services_thick_svg__a",transform:"translate(-3 -3)",fillRule:"evenodd"}))}var _default=SvgServicesthick;exports.default=_default;