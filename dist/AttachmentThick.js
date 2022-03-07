"use strict";function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var React=_interopRequireWildcard(require("react")),_excluded=["title","titleId"];function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function SvgAttachmentthick(a){var b=a.title,c=a.titleId,d=_objectWithoutProperties(a,_excluded);return/*#__PURE__*/React.createElement("svg",_extends({width:"1em",height:"1em",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-labelledby":c},d),b===void 0?/*#__PURE__*/React.createElement("title",{id:c},"attachment thick"):b?/*#__PURE__*/React.createElement("title",{id:c},b):null,/*#__PURE__*/React.createElement("defs",null,/*#__PURE__*/React.createElement("path",{id:"attachment_thick_svg__a",d:"M12.498 3.667l-8.831 9.12v6.315l1.07 1.231h6.535l9.061-9.359V9.311l-3.98-4.113H14.74L6.916 13.28v3.592h4.023l5.11-5.278-1.171-1.21-4.626 4.778h-1.68v-1.174l6.975-7.204 3.25 3.358-8.21 8.481H5.322v-5.127l8.346-8.62z"})),/*#__PURE__*/React.createElement("use",{xlinkHref:"#attachment_thick_svg__a",transform:"translate(-3 -3)",fillRule:"evenodd"}))}var _default=SvgAttachmentthick;exports.default=_default;