(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8880],{

/***/ 68115:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(7446);
  } else {}
  

/***/ }),

/***/ 7446:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(67294),__webpack_require__(78384),__webpack_require__(66526)):0}(this,(function(n,e,t){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=111)}({0:function(n,e,t){n.exports=t(16)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(22),o=t(23),i=t(19),a=t(24);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},111:function(n,e,t){"use strict";t.r(e),t.d(e,"Crumb",(function(){return w})),t.d(e,"Breadcrumbs",(function(){return S}));var r,o=t(6),i=t.n(o),a=t(3),s=t.n(a),u=t(1),c=t.n(u),f=t(0),l=t.n(f),d=t(2),p=t.n(d),h=t(50),g=t.n(h),m=t(8),v=t(4),b=t(9),y=t(20),x=["children","label"],O=p()(b.Flex)(r||(r=s()(["\n  svg {\n    height: 10px;\n    width: 10px;\n  }\n  svg path {\n    fill: ",";\n  }\n  :last-of-type "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.colors.neutral300}),v.Box),w=function(n){var e=n.children;return c.a.createElement(O,{inline:!0,as:"li"},c.a.createElement(m.Typography,{fontWeight:"bold",color:"neutral800"},e),c.a.createElement(v.Box,{paddingLeft:3,paddingRight:3},c.a.createElement(g.a,null)))};w.displayName="Crumb",w.propTypes={children:l.a.string.isRequired};var T=l.a.shape({type:l.a.oneOf([w])}),S=function(n){var e=n.children,t=n.label,r=i()(n,x);return c.a.createElement(b.Flex,r,c.a.createElement(y.VisuallyHidden,null,t),c.a.createElement("ol",{"aria-hidden":!0},e))};S.displayName="Breadcrumbs",S.propTypes={children:l.a.oneOfType([l.a.arrayOf(T),T]).isRequired,label:l.a.string.isRequired}},16:function(n,e,t){"use strict";var r=t(17);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},17:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},18:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,e,t){var r=t(18);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";t.r(e),t.d(e,"VisuallyHidden",(function(){return s}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a).a.div(r||(r=i()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},21:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},23:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){s=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return d}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=t.n(u),f=t(7),l={color:!0},d=c.a.div.withConfig({shouldForwardProp:function(n,e){return!l[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(f.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(f.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(f.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(f.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(f.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(f.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(f.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(f.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(f.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.sizes[e]||e}),(function(n){var e=n.maxWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.minWidth;return n.theme.sizes[e]||e}),(function(n){var e=n.height;return n.theme.sizes[e]||e}),(function(n){var e=n.maxHeight;return n.theme.sizes[e]||e}),(function(n){var e=n.minHeight;return n.theme.sizes[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));d.displayName="Box",d.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},d.propTypes={_hover:s.a.func,background:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.string]),borderColor:s.a.string,children:s.a.oneOfType([s.a.node,s.a.string]),color:s.a.string,flex:s.a.oneOfType([s.a.string,s.a.string]),grow:s.a.oneOfType([s.a.string,s.a.string]),hasRadius:s.a.bool,hiddenS:s.a.bool,hiddenXS:s.a.bool,padding:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingBottom:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingLeft:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingRight:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),paddingTop:s.a.oneOfType([s.a.number,s.a.arrayOf(s.a.number)]),shadow:s.a.string,shrink:s.a.oneOfType([s.a.string,s.a.string])}},50:function(n,e){n.exports=t},6:function(n,e,t){var r=t(21);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r);e.a=function(n,e,t){if(void 0!==e){if(Array.isArray(e)){var r=o()(e,3),i=r[0],a=r[1],s=r[2],u="".concat(n,": ").concat(t.spaces[i],";");return void 0!==a&&(u+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[a],";\n        }")),void 0!==s&&(u+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[s],";\n        }")),u}var c=t.spaces[e]||e;return"".concat(n,": ").concat(c,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return l}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=["alpha","beta","delta","epsilon","omega","pi","sigma"],f={fontSize:!0,fontWeight:!0},l=t.n(u).a.span.withConfig({shouldForwardProp:function(n,e){return!f[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));l.defaultProps={fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},l.propTypes={fontSize:s.a.oneOfType([s.a.number,s.a.string]),fontWeight:s.a.string,lineHeight:s.a.oneOfType([s.a.number,s.a.string]),textColor:s.a.string,textTransform:s.a.string,variant:s.a.oneOf(c)}},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return d}));var r,o=t(3),i=t.n(o),a=t(0),s=t.n(a),u=t(2),c=t.n(u),f=t(4),l={direction:!0},d=c()(f.Box).withConfig({shouldForwardProp:function(n,e){return!l[n]&&e(n)}})(r||(r=i()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.justifyContent}),(function(n){return n.alignItems}),(function(n){return n.wrap}));d.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},d.propTypes={alignItems:s.a.string,basis:s.a.oneOfType([s.a.string,s.a.number]),direction:s.a.string,inline:s.a.bool,justifyContent:s.a.string,reverse:s.a.bool,wrap:s.a.string}}})}));

/***/ }),

/***/ 93362:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}({0:function(t,r){t.exports=e},24:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#4945FF",stroke:"#4945FF"}),n.createElement("path",{d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082zM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782z",fill:"#fff"}))}}})}));

/***/ }),

/***/ 95832:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=74)}({0:function(t,r){t.exports=e},74:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM3.6 14.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 22.8a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}),n.createElement("path",{d:"M6.24 11.28H18v1.44H6.24v-1.44z",fill:"#212134"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 22.8a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM3.6 6a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",fill:"#212134"}),n.createElement("path",{d:"M18.327 13.863L6.49 19.765l-.652-1.307 11.838-5.902.651 1.307zM18.358 10.078L6.398 4.115l-.646 1.294 11.961 5.963.645-1.294z",fill:"#212134"}),n.createElement("path",{d:"M18.323 18.83L6.252 12.812l-.643 1.29 12.07 6.018.644-1.29zM18.136 5.228L6.207 11.176l-.654-1.311 11.93-5.948.653 1.311z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 37685:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=75)}({0:function(t,r){t.exports=e},75:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M17.76 11.28H6v1.44h11.76v-1.44z",fill:"#212134"}),n.createElement("path",{d:"M18.129 10.7L9.782 4.522l-.86 1.162 8.346 6.177.86-1.163zM18.101 13.354l-8.347 6.177-.863-1.168 8.347-6.176.863 1.167z",fill:"#212134"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4 14.399a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM3.6 14.399a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM7.2 22.801a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2zM7.2 6a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zm0 1.2a3.6 3.6 0 110-7.2 3.6 3.6 0 010 7.2z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 23379:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=76)}({0:function(t,r){t.exports=e},76:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 14.132a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}),n.createElement("path",{d:"M6.24 11.011h13.44v1.44H6.24v-1.44z",fill:"#212134"}),n.createElement("path",{d:"M5.872 10.43l8.347-6.176.86 1.163-8.347 6.176-.86-1.162zM5.9 13.087l8.346 6.177.864-1.168-8.347-6.176-.864 1.167zM18.72 8.613l5.28 3.12-5.28 3.12v-6.24z",fill:"#212134"}),n.createElement("path",{d:"M12.72 2.633L18.82 2 16.43 7.649 12.72 2.633zM12.72 21.307l6.1.633-2.389-5.649-3.711 5.016z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 92197:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=85)}({0:function(t,r){t.exports=e},85:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M6.24 11.28H18v1.44H6.24v-1.44z",fill:"#212134"}),n.createElement("path",{d:"M5.87 10.7l8.348-6.177.86 1.162-8.347 6.177-.86-1.163zM5.898 13.354l8.347 6.177.864-1.168-8.347-6.176-.864 1.167z",fill:"#212134"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 14.399a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 14.399a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM16.8 22.801a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM16.8 6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 97314:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=86)}({0:function(t,r){t.exports=e},86:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 14a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM20.4 14a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm0 1.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2z",fill:"#212134"}),n.createElement("path",{d:"M6.24 10.881H18v1.44H6.24v-1.44z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 53666:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=87)}({0:function(t,r){t.exports=e},87:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.128 12.321a3.601 3.601 0 110-1.44H18.72v-2.4L24 11.6l-5.28 3.12v-2.4H7.128zM6 11.6a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 31447:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=88)}({0:function(t,r){t.exports=e},88:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{d:"M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z",fill:"#FDF4DC",stroke:"#FAE7B9"}),n.createElement("path",{d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 012.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 00.433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 00-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887z",fill:"#D9822F"}))}}})}));

/***/ }),

/***/ 17734:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=101)}({0:function(t,r){t.exports=e},101:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#EAF5FF",stroke:"#B8E1FF"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 00-.138-.302A.465.465 0 0018.82 8h-8.357a.465.465 0 00-.326.127.397.397 0 00-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 00.327-.127.397.397 0 00.138-.301zm2.785 2.713v.857a.397.397 0 01-.137.301.465.465 0 01-.327.128H10.464a.465.465 0 01-.326-.128.397.397 0 01-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 01.326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 01.137.302zm-1.857 3.574v.857a.397.397 0 01-.137.302.465.465 0 01-.327.127h-9.286a.465.465 0 01-.326-.127.397.397 0 01-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 01.326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 01.138.301z",fill:"#0C75AF"}))}}})}));

/***/ }),

/***/ 67772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(67294)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=105)}({0:function(t,r){t.exports=e},105:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 32 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("rect",{x:.5,y:.5,width:31,height:23,rx:2.5,fill:"#0C75AF",stroke:"#0C75AF"}),n.createElement("path",{d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71zM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781z",fill:"#fff"}))}}})}));

/***/ }),

/***/ 28595:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","baby","baby-carriage","backspace","backward","bacon","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","biking","binoculars","biohazard","birthday-cake","blender","blender-phone","blind","blog","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","border-all","border-none","border-style","bowling-ball","box","box-open","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-arrows-alt","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","crutch","cube","cubes","cut","database","deaf","democrat","desktop","dharmachakra","diagnoses","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","dragon","draw-polygon","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","edit","egg","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","ethernet","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fan","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","first-aid","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","ghost","gift","gifts","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","globe","globe-africa","globe-americas","globe-asia","globe-europe","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","guitar","h-square","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","history","hockey-puck","holly-berry","home","horse","horse-head","hospital","hospital-alt","hospital-symbol","hot-tub","hotdog","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","hryvnia","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","igloo","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laptop-medical","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","meteor","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mitten","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","network-wired","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","otter","outdent","pager","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","pepper-hot","percent","percentage","person-booth","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","radiation","radiation-alt","rainbow","random","receipt","record-vinyl","recycle","redo","redo-alt","registered","remove-format","reply","reply-all","republican","restroom","retweet","ribbon","ring","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","sad-cry","sad-tear","satellite","satellite-dish","save","school","screwdriver","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","sitemap","skating","skiing","skiing-nordic","skull","skull-crossbones","slash","sleigh","sliders-h","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snowboarding","snowflake","snowman","snowplow","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","spa","space-shuttle","spell-check","spider","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","temperature-high","temperature-low","tenge","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toolbox","tools","tooth","torah","torii-gate","tractor","trademark","traffic-light","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","walking","wallet","warehouse","water","wave-square","weight","weight-hanging","wheelchair","wifi","wind","window-close","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"]');

/***/ }),

/***/ 72711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Select=__webpack_require__(43808);var _upperFirst=_interopRequireDefault(__webpack_require__(11700));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var options=[{label:'All',children:[{label:'images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)',value:'images'},{label:'videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)',value:'videos'},{label:'files (CSV, ZIP, MP3, PDF, Excel, JSON, ...)',value:'files'}]}];var AllowedTypesSelect=function AllowedTypesSelect(_ref){var intlLabel=_ref.intlLabel,name=_ref.name,_onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;/* eslint-disable indent */var displayedValue=value===null||value.length===0?formatMessage({id:(0,_getTrad["default"])('form.attribute.media.allowed-types.none')}):(0,_toConsumableArray2["default"])(value).sort().map(function(v){return(0,_upperFirst["default"])(v);}).join(', ');/* eslint-enable indent */var label=intlLabel.id?formatMessage({id:intlLabel.id,defaultMessage:intlLabel.defaultMessage}):name;return/*#__PURE__*/_react["default"].createElement(_Select.MultiSelectNested,{id:"select1",label:label,customizeContent:function customizeContent(){return displayedValue;},onChange:function onChange(values){if(values.length>0){_onChange({target:{name:name,value:values,type:'allowed-types-select'}});}else{_onChange({target:{name:name,value:null,type:'allowed-types-select'}});}},options:options,value:value||[]});};AllowedTypesSelect.defaultProps={value:null};AllowedTypesSelect.propTypes={intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].oneOfType([_propTypes["default"].object,_propTypes["default"].array])};var _default=AllowedTypesSelect;exports.default=_default;

/***/ }),

/***/ 1368:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(67154));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(6479));var _react=_interopRequireDefault(__webpack_require__(67294));var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Box=__webpack_require__(5493);var _Component=_interopRequireDefault(__webpack_require__(29685));var _CollectionType=_interopRequireDefault(__webpack_require__(93362));var _Date=_interopRequireDefault(__webpack_require__(99544));var _Boolean=_interopRequireDefault(__webpack_require__(18561));var _DynamicZone=_interopRequireDefault(__webpack_require__(71066));var _Email=_interopRequireDefault(__webpack_require__(74642));var _Enumeration=_interopRequireDefault(__webpack_require__(60178));var _Json=_interopRequireDefault(__webpack_require__(60493));var _RichText=_interopRequireDefault(__webpack_require__(17734));var _Media=_interopRequireDefault(__webpack_require__(46966));var _Password=_interopRequireDefault(__webpack_require__(31447));var _Relation=_interopRequireDefault(__webpack_require__(81641));var _SingleType=_interopRequireDefault(__webpack_require__(67772));var _Text=_interopRequireDefault(__webpack_require__(18772));var _Uid=_interopRequireDefault(__webpack_require__(10301));var _Number=_interopRequireDefault(__webpack_require__(35020));var _helperPlugin=__webpack_require__(68547);var _excluded=["type"];var iconByTypes={biginteger:_Number["default"],"boolean":_Boolean["default"],collectionType:_CollectionType["default"],component:_Component["default"],contentType:_CollectionType["default"],date:_Date["default"],datetime:_Date["default"],decimal:_Number["default"],dynamiczone:_DynamicZone["default"],email:_Email["default"],"enum":_Enumeration["default"],enumeration:_Enumeration["default"],file:_Media["default"],files:_Media["default"],"float":_Number["default"],integer:_Number["default"],json:_Json["default"],JSON:_Json["default"],media:_Media["default"],number:_Number["default"],password:_Password["default"],relation:_Relation["default"],richtext:_RichText["default"],singleType:_SingleType["default"],string:_Text["default"],text:_Text["default"],time:_Date["default"],timestamp:_Date["default"],uid:_Uid["default"]};var IconBox=/*#__PURE__*/(0,_styledComponents["default"])(_Box.Box).withConfig({displayName:"AttributeIcon__IconBox",componentId:"sc-1wj718m-0"})(["width:",";height:",";box-sizing:content-box;"],(0,_helperPlugin.pxToRem)(32),(0,_helperPlugin.pxToRem)(24));var AttributeIcon=function AttributeIcon(_ref){var type=_ref.type,rest=(0,_objectWithoutProperties2["default"])(_ref,_excluded);var Compo=iconByTypes[type];if(!iconByTypes[type]){return null;}return/*#__PURE__*/_react["default"].createElement(IconBox,(0,_extends2["default"])({as:Compo},rest));};AttributeIcon.propTypes={type:_propTypes["default"].string.isRequired};var _default=AttributeIcon;exports.default=_default;

/***/ }),

/***/ 55356:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _Box=__webpack_require__(5493);var BoxWrapper=/*#__PURE__*/(0,_styledComponents["default"])(_Box.Box).withConfig({displayName:"BoxWrapper",componentId:"sc-5lyz99-0"})(["width:100%;height:100%;border:1px solid ",";&:hover{background:",";border:1px solid ",";}"],function(_ref){var theme=_ref.theme;return theme.colors.neutral200;},function(_ref2){var theme=_ref2.theme;return theme.colors.primary100;},function(_ref3){var theme=_ref3.theme;return theme.colors.primary200;});var _default=BoxWrapper;exports.default=_default;

/***/ }),

/***/ 93055:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var _Typography=__webpack_require__(49425);var _useFormModalNavigation=_interopRequireDefault(__webpack_require__(51528));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _AttributeIcon=_interopRequireDefault(__webpack_require__(1368));var _BoxWrapper=_interopRequireDefault(__webpack_require__(55356));/**
 *
 * AttributeOption
 *
 */var AttributeOption=function AttributeOption(_ref){var type=_ref.type;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useFormModalNavigati=(0,_useFormModalNavigation["default"])(),onClickSelectField=_useFormModalNavigati.onClickSelectField;var handleClick=function handleClick(){var step=type==='component'?'1':null;onClickSelectField({attributeType:type,step:step});};return/*#__PURE__*/_react["default"].createElement(_BoxWrapper["default"],{padding:4,as:"button",hasRadius:true,type:"button",onClick:handleClick},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_AttributeIcon["default"],{type:type}),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:4},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{fontWeight:"bold"},formatMessage({id:(0,_getTrad["default"])("attribute.".concat(type)),defaultMessage:type}))),/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",textColor:"neutral600"},formatMessage({id:(0,_getTrad["default"])("attribute.".concat(type,".description"))}))))));};AttributeOption.defaultProps={type:'text'};AttributeOption.propTypes={type:_propTypes["default"].string};var _default=AttributeOption;exports.default=_default;

/***/ }),

/***/ 49663:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Box=__webpack_require__(5493);var _Divider=__webpack_require__(14276);var _Grid=__webpack_require__(34626);var _KeyboardNavigable=__webpack_require__(65967);var _ModalLayout=__webpack_require__(75146);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _Typography=__webpack_require__(49425);var _utils=__webpack_require__(48008);var _AttributeOption=_interopRequireDefault(__webpack_require__(93055));/**
 *
 * AttributeOptions
 *
 */var AttributeOptions=function AttributeOptions(_ref){var attributes=_ref.attributes,forTarget=_ref.forTarget,kind=_ref.kind;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var titleIdSuffix=forTarget.includes('component')?'component':kind;var titleId=(0,_utils.getTrad)("modalForm.sub-header.chooseAttribute.".concat(titleIdSuffix));return/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{paddingBottom:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"beta",as:"h2"},formatMessage({id:titleId,defaultMessage:'Select a field'}))),/*#__PURE__*/_react["default"].createElement(_Divider.Divider,null),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingTop:6,paddingBottom:4},/*#__PURE__*/_react["default"].createElement(_KeyboardNavigable.KeyboardNavigable,{tagName:"button"},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:8},attributes.map(function(attributeRow,index){var key=index;return/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{key:key,gap:0},attributeRow.map(function(attribute,index){var isOdd=index%2===1;var paddingLeft=isOdd?2:0;var paddingRight=isOdd?0:2;return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{key:attribute,col:6,style:{height:'100%'}},/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:paddingLeft,paddingRight:paddingRight,paddingBottom:1,style:{height:'100%'}},/*#__PURE__*/_react["default"].createElement(_AttributeOption["default"],{type:attribute})));}));})))));};AttributeOptions.propTypes={attributes:_propTypes["default"].array.isRequired,forTarget:_propTypes["default"].string.isRequired,kind:_propTypes["default"].string.isRequired};var _default=AttributeOptions;exports.default=_default;

/***/ }),

/***/ 77691:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Select=__webpack_require__(43808);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var BooleanDefaultValueSelect=function BooleanDefaultValueSelect(_ref){var intlLabel=_ref.intlLabel,name=_ref.name,options=_ref.options,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var label=intlLabel.id?formatMessage({id:intlLabel.id,defaultMessage:intlLabel.defaultMessage},_objectSpread({},intlLabel.values)):name;var handleChange=function handleChange(value){var nextValue='';if(value==='true'){nextValue=true;}if(value==='false'){nextValue=false;}onChange({target:{name:name,value:nextValue,type:'select-default-boolean'}});};return/*#__PURE__*/_react["default"].createElement(_Select.Select,{label:label,id:name,name:name,onChange:handleChange,value:(value===null?'':value).toString()},options.map(function(_ref2){var _ref2$metadatas=_ref2.metadatas,intlLabel=_ref2$metadatas.intlLabel,disabled=_ref2$metadatas.disabled,hidden=_ref2$metadatas.hidden,key=_ref2.key,value=_ref2.value;return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:key,value:value,disabled:disabled,hidden:hidden},intlLabel.defaultMessage);}));};BooleanDefaultValueSelect.defaultProps={value:null};BooleanDefaultValueSelect.propTypes={intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,options:_propTypes["default"].arrayOf(_propTypes["default"].shape({metadatas:_propTypes["default"].shape({intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired}).isRequired,disabled:_propTypes["default"].bool,hidden:_propTypes["default"].bool}).isRequired,key:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired,value:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired}).isRequired).isRequired,value:_propTypes["default"].any};var _default=BooleanDefaultValueSelect;exports.default=_default;

/***/ }),

/***/ 21047:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(67154));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(6479));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _CustomRadioGroup=_interopRequireDefault(__webpack_require__(36178));var _excluded=["onChange","name"];var BooleanRadioGroup=function BooleanRadioGroup(_ref){var onChange=_ref.onChange,name=_ref.name,rest=(0,_objectWithoutProperties2["default"])(_ref,_excluded);var handleChange=function handleChange(e){var checked=e.target.value!=='false';onChange({target:{name:name,value:checked,type:'boolean-radio-group'}});};return/*#__PURE__*/_react["default"].createElement(_CustomRadioGroup["default"],(0,_extends2["default"])({},rest,{name:name,onChange:handleChange}));};BooleanRadioGroup.propTypes={name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired};var _default=BooleanRadioGroup;exports.default=_default;

/***/ }),

/***/ 71149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Box=__webpack_require__(5493);var _Checkbox=__webpack_require__(81325);var _Stack=__webpack_require__(9008);var _NumberInput=__webpack_require__(97377);var _TextInput=__webpack_require__(55967);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var CheckboxWithNumberField=function CheckboxWithNumberField(_ref){var error=_ref.error,intlLabel=_ref.intlLabel,modifiedData=_ref.modifiedData,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useState=(0,_react.useState)(!!value||value===0),_useState2=(0,_slicedToArray2["default"])(_useState,2),showInput=_useState2[0],setShowInput=_useState2[1];var label=intlLabel.id?formatMessage({id:intlLabel.id,defaultMessage:intlLabel.defaultMessage},_objectSpread({},intlLabel.values)):name;var type=modifiedData.type==='biginteger'?'text':'number';var disabled=!modifiedData.type;var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';return/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:2},/*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox,{id:name,name:name,onValueChange:function onValueChange(value){var initValue=type==='text'?'0':0;var nextValue=value?initValue:null;onChange({target:{name:name,value:nextValue}});setShowInput(function(prev){return!prev;});},value:showInput},label),showInput&&/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:6,style:{maxWidth:'200px'}},type==='text'?/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{"aria-label":label,disabled:disabled,error:errorMessage,id:name,name:name,onChange:onChange,value:value===null?'':value}):/*#__PURE__*/_react["default"].createElement(_NumberInput.NumberInput,{"aria-label":label,disabled:disabled,error:errorMessage,id:name,name:name,onValueChange:function onValueChange(value){onChange({target:{name:name,value:value,type:type}});},value:value||0})));};CheckboxWithNumberField.defaultProps={error:null,value:null};CheckboxWithNumberField.propTypes={error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,modifiedData:_propTypes["default"].object.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].object,_propTypes["default"].bool,_propTypes["default"].number])};var _default=CheckboxWithNumberField;exports.default=_default;

/***/ }),

/***/ 14883:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _Flex=__webpack_require__(67826);var Cell=/*#__PURE__*/(0,_styledComponents["default"])(_Flex.Flex).withConfig({displayName:"Cell",componentId:"j8gqr3-0"})(["svg{z-index:2;color:",";}",""],function(_ref){var isSelected=_ref.isSelected,theme=_ref.theme;return isSelected?theme.colors.primary600:theme.colors.neutral300;},function(_ref2){var isSelected=_ref2.isSelected,theme=_ref2.theme;if(isSelected){return"\n      &::after {\n        content: '';\n        position: absolute;\n        top: 8px;\n        left: 8px;\n        border-radius: 50%;\n        width: 28px;\n        height: 28px;\n        background-color: ".concat(theme.colors.primary200,";\n        z-index: 1;\n      }\n    ");}return'';});var _default=Cell;exports.default=_default;

/***/ }),

/***/ 5213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _reactVirtualized=__webpack_require__(99272);var _Searchbar=__webpack_require__(21263);var _IconButton=__webpack_require__(30741);var _Search=_interopRequireDefault(__webpack_require__(57465));var _reactFontawesome=__webpack_require__(67814);var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _Typography=__webpack_require__(49425);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _Cell=_interopRequireDefault(__webpack_require__(14883));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var CELL_WIDTH=44;var ComponentIconPicker=function ComponentIconPicker(_ref){var error=_ref.error,isCreating=_ref.isCreating,intlLabel=_ref.intlLabel,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useDataManager=(0,_useDataManager2["default"])(),allIcons=_useDataManager.allIcons,allComponentsIconAlreadyTaken=_useDataManager.allComponentsIconAlreadyTaken;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useState=(0,_react.useState)(value),_useState2=(0,_slicedToArray2["default"])(_useState,1),originalIcon=_useState2[0];var initialIcons=allIcons.filter(function(ico){if(isCreating){return!allComponentsIconAlreadyTaken.includes(ico);}// Edition
return!allComponentsIconAlreadyTaken.filter(function(icon){return icon!==originalIcon;}).includes(ico);});var searchWrapperRef=(0,_react.useRef)();var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2["default"])(_useState3,2),showSearch=_useState4[0],setShowSearch=_useState4[1];var _useState5=(0,_react.useState)(''),_useState6=(0,_slicedToArray2["default"])(_useState5,2),search=_useState6[0],setSearch=_useState6[1];var _useState7=(0,_react.useState)(initialIcons),_useState8=(0,_slicedToArray2["default"])(_useState7,2),icons=_useState8[0],setIcons=_useState8[1];var toggleSearch=function toggleSearch(){return setShowSearch(function(prev){return!prev;});};(0,_react.useEffect)(function(){if(showSearch){searchWrapperRef.current.querySelector('input').focus();}},[showSearch]);var handleChangeSearch=function handleChangeSearch(_ref2){var value=_ref2.target.value;setSearch(value);setIcons(function(){return initialIcons.filter(function(icon){return icon.includes(value);});});};var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var cellSizeAndPositionGetter=function cellSizeAndPositionGetter(_ref3){var index=_ref3.index;var columnCount=16;var columnPosition=index%(columnCount||1);var height=CELL_WIDTH;var width=CELL_WIDTH;var x=columnPosition*(width+1);var y=parseInt(index/16,10)*CELL_WIDTH;return{height:height,width:width,x:x,y:y};};var cellCount=icons.length;return/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:1},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{justifyContent:"space-between"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:name,as:"label"},formatMessage(intlLabel)),showSearch?/*#__PURE__*/_react["default"].createElement("div",{ref:searchWrapperRef,style:{width:206}},/*#__PURE__*/_react["default"].createElement(_Searchbar.Searchbar,{name:"searchbar",onBlur:function onBlur(){if(!search){toggleSearch();}},onClear:function onClear(){setSearch('');setIcons(initialIcons);toggleSearch();},value:search,onChange:handleChangeSearch,clearLabel:"Clearing the icon search",placeholder:formatMessage({id:(0,_getTrad["default"])('ComponentIconPicker.search.placeholder'),defaultMessage:'Search for an icon'}),size:"S"},formatMessage({id:(0,_getTrad["default"])('ComponentIconPicker.search.placeholder'),defaultMessage:'Search for an icon'}))):/*#__PURE__*/_react["default"].createElement(_IconButton.IconButton,{onClick:toggleSearch,"aria-label":"Edit",icon:/*#__PURE__*/_react["default"].createElement(_Search["default"],null),noBorder:true})),/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:1},/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral100",borderColor:error?'danger600':'',hasRadius:true},/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer,{disableHeight:true},function(_ref4){var width=_ref4.width;return/*#__PURE__*/_react["default"].createElement(_reactVirtualized.Collection,{cellCount:cellCount,cellRenderer:function cellRenderer(_ref5){var index=_ref5.index,key=_ref5.key,style=_ref5.style;var icon=icons[index];var isSelected=icon===value;var handleClick=function handleClick(){onChange({target:{name:name,value:icon}});};return/*#__PURE__*/_react["default"].createElement("div",{style:_objectSpread(_objectSpread({},style),{},{width:CELL_WIDTH}),key:key},/*#__PURE__*/_react["default"].createElement(_Cell["default"],{style:{width:'100%',height:CELL_WIDTH},alignItems:"center",justifyContent:"center",onClick:handleClick,isSelected:isSelected,as:"button",type:"button"},/*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon,{icon:icon})));},cellSizeAndPositionGetter:cellSizeAndPositionGetter,height:132,width:width});}))),error&&/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",id:"".concat(name,"-error"),textColor:"danger600","data-strapi-field-error":true},errorMessage))));};ComponentIconPicker.defaultProps={error:null};ComponentIconPicker.propTypes={error:_propTypes["default"].string,isCreating:_propTypes["default"].bool.isRequired,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].string.isRequired};var _default=ComponentIconPicker;exports.default=_default;

/***/ }),

/***/ 71914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _Plus=_interopRequireDefault(__webpack_require__(80768));var _Box=__webpack_require__(5493);var _SubNav=__webpack_require__(4021);var _TextButton=__webpack_require__(83662);var _upperFirst=_interopRequireDefault(__webpack_require__(11700));var _reactIntl=__webpack_require__(97132);var _useContentTypeBuilderMenu=_interopRequireDefault(__webpack_require__(5594));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var ContentTypeBuilderNav=function ContentTypeBuilderNav(){var _useContentTypeBuilde=(0,_useContentTypeBuilderMenu["default"])(),menu=_useContentTypeBuilde.menu,searchValue=_useContentTypeBuilde.searchValue,onSearchChange=_useContentTypeBuilde.onSearchChange;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_SubNav.SubNav,{ariaLabel:formatMessage({id:"".concat((0,_getTrad["default"])('plugin.name')),defaultMessage:'Content-Types Builder'})},/*#__PURE__*/_react["default"].createElement(_SubNav.SubNavHeader,{searchable:true,value:searchValue,onClear:function onClear(){return onSearchChange('');},onChange:function onChange(e){return onSearchChange(e.target.value);},label:formatMessage({id:"".concat((0,_getTrad["default"])('plugin.name')),defaultMessage:'Content-Types Builder'}),searchLabel:"Search..."}),/*#__PURE__*/_react["default"].createElement(_SubNav.SubNavSections,null,menu.map(function(section){var title="".concat(section.title.id).concat(section.links.length>1?'plural':'singular');return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,{key:section.name},/*#__PURE__*/_react["default"].createElement(_SubNav.SubNavSection,{label:formatMessage({id:title,defaultMessage:title}),collapsable:true,badgeLabel:section.links.length.toString()},section.links.map(function(link){if(link.links){return/*#__PURE__*/_react["default"].createElement(_SubNav.SubNavLinkSection,{key:link.name,label:(0,_upperFirst["default"])(link.title)},link.links.map(function(subLink){return/*#__PURE__*/_react["default"].createElement(_SubNav.SubNavLink,{to:subLink.to,active:subLink.active,key:subLink.name},(0,_upperFirst["default"])(formatMessage({id:subLink.name,defaultMessage:subLink.title})));}));}return/*#__PURE__*/_react["default"].createElement(_SubNav.SubNavLink,{to:link.to,active:link.active,key:link.name},(0,_upperFirst["default"])(formatMessage({id:link.name,defaultMessage:link.title})));})),section.customLink&&/*#__PURE__*/_react["default"].createElement(_Box.Box,{as:"li",paddingLeft:7},/*#__PURE__*/_react["default"].createElement(_TextButton.TextButton,{onClick:section.customLink.onClick,startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:section.customLink.id,defaultMessage:section.customLink.defaultMessage}))));})));};var _default=ContentTypeBuilderNav;exports.default=_default;

/***/ }),

/***/ 5594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=__webpack_require__(67294);var _helperPlugin=__webpack_require__(68547);var _isEmpty=_interopRequireDefault(__webpack_require__(41609));var _sortBy=_interopRequireDefault(__webpack_require__(89734));var _toLower=_interopRequireDefault(__webpack_require__(7334));var _isEqual=_interopRequireDefault(__webpack_require__(18446));var _matchSorter=_interopRequireDefault(__webpack_require__(63852));var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _useFormModalNavigation=_interopRequireDefault(__webpack_require__(51528));var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _getTrad=_interopRequireDefault(__webpack_require__(97731));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var useContentTypeBuilderMenu=function useContentTypeBuilderMenu(){var _useDataManager=(0,_useDataManager2["default"])(),components=_useDataManager.components,componentsGroupedByCategory=_useDataManager.componentsGroupedByCategory,contentTypes=_useDataManager.contentTypes,isInDevelopmentMode=_useDataManager.isInDevelopmentMode,sortedContentTypesList=_useDataManager.sortedContentTypesList,modifiedData=_useDataManager.modifiedData,initialData=_useDataManager.initialData;var toggleNotification=(0,_helperPlugin.useNotification)();var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var _useState=(0,_react.useState)(''),_useState2=(0,_slicedToArray2["default"])(_useState,2),search=_useState2[0],setSearch=_useState2[1];var _useFormModalNavigati=(0,_useFormModalNavigation["default"])(),onOpenModalCreateSchema=_useFormModalNavigati.onOpenModalCreateSchema,onOpenModalEditCategory=_useFormModalNavigati.onOpenModalEditCategory;var componentsData=(0,_sortBy["default"])(Object.keys(componentsGroupedByCategory).map(function(category){return{name:category,title:category,isEditable:isInDevelopmentMode,onClickEdit:function onClickEdit(e,data){e.stopPropagation();if(canOpenModalCreateCTorComponent){onOpenModalEditCategory(data.name);}else{toggleNotificationCannotCreateSchema();}},links:(0,_sortBy["default"])(componentsGroupedByCategory[category].map(function(compo){return{name:compo.uid,to:"/plugins/".concat(_pluginId["default"],"/component-categories/").concat(category,"/").concat(compo.uid),title:compo.schema.displayName};}),function(obj){return obj.title;})};}),function(obj){return obj.title;});var canOpenModalCreateCTorComponent=!Object.keys(contentTypes).some(function(ct){return contentTypes[ct].isTemporary===true;})&&!Object.keys(components).some(function(component){return components[component].isTemporary===true;})&&(0,_isEqual["default"])(modifiedData,initialData);var handleClickOpenModalCreateCollectionType=function handleClickOpenModalCreateCollectionType(){if(canOpenModalCreateCTorComponent){trackUsage("willCreateContentType");var nextState={modalType:'contentType',kind:'collectionType',actionType:'create',forTarget:'contentType'};onOpenModalCreateSchema(nextState);}else{toggleNotificationCannotCreateSchema();}};var handleClickOpenModalCreateSingleType=function handleClickOpenModalCreateSingleType(){if(canOpenModalCreateCTorComponent){trackUsage("willCreateSingleType");var nextState={modalType:'contentType',kind:'singleType',actionType:'create',forTarget:'contentType'};onOpenModalCreateSchema(nextState);}else{toggleNotificationCannotCreateSchema();}};var handleClickOpenModalCreateComponent=function handleClickOpenModalCreateComponent(){if(canOpenModalCreateCTorComponent){trackUsage('willCreateComponent');var nextState={modalType:'component',kind:null,actionType:'create',forTarget:'component'};onOpenModalCreateSchema(nextState);}else{toggleNotificationCannotCreateSchema();}};var toggleNotificationCannotCreateSchema=function toggleNotificationCannotCreateSchema(){toggleNotification({type:'info',message:{id:"".concat((0,_getTrad["default"])('notification.info.creating.notSaved')),defaultMessage:'Please save your work before creating a new collection type or component'}});};var displayedContentTypes=sortedContentTypesList.filter(function(obj){return obj.visible;});var data=[{name:'models',title:{id:"".concat((0,_getTrad["default"])('menu.section.models.name.')),defaultMessage:'Collection Types'},customLink:isInDevelopmentMode&&{id:"".concat((0,_getTrad["default"])('button.model.create')),defaultMessage:'Create new collection type',onClick:handleClickOpenModalCreateCollectionType},links:displayedContentTypes.filter(function(contentType){return contentType.kind==='collectionType';})},{name:'singleTypes',title:{id:"".concat((0,_getTrad["default"])('menu.section.single-types.name.')),defaultMessage:'Single Types'},customLink:isInDevelopmentMode&&{id:"".concat((0,_getTrad["default"])('button.single-types.create')),defaultMessage:'Create new single type',onClick:handleClickOpenModalCreateSingleType},links:displayedContentTypes.filter(function(singleType){return singleType.kind==='singleType';})},{name:'components',title:{id:"".concat((0,_getTrad["default"])('menu.section.components.name.')),defaultMessage:'Components'},customLink:{id:"".concat((0,_getTrad["default"])('button.component.create')),defaultMessage:'Create a new component',onClick:handleClickOpenModalCreateComponent},links:componentsData}];var matchByTitle=function matchByTitle(links){return(0,_matchSorter["default"])(links,(0,_toLower["default"])(search),{keys:[function(item){return(0,_toLower["default"])(item.title);}]});};var getMenu=function getMenu(){// Maybe we can do it simpler with matchsorter wildcards ?
return data.map(function(section){var hasChild=section.links.some(function(l){return!(0,_isEmpty["default"])(l.links);});if(hasChild){return _objectSpread(_objectSpread({},section),{},{links:section.links.map(function(l){return _objectSpread(_objectSpread({},l),{},{links:matchByTitle(l.links)});})});}return _objectSpread(_objectSpread({},section),{},{links:matchByTitle(section.links)});});};return{menu:getMenu(),searchValue:search,onSearchChange:setSearch};};var _default=useContentTypeBuilderMenu;exports.default=_default;

/***/ }),

/***/ 25081:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(67154));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(6479));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _helperPlugin=__webpack_require__(68547);var _utils=__webpack_require__(48008);var _CustomRadioGroup=_interopRequireDefault(__webpack_require__(36178));var _excluded=["onChange"];var ContentTypeRadioGroup=function ContentTypeRadioGroup(_ref){var onChange=_ref.onChange,rest=(0,_objectWithoutProperties2["default"])(_ref,_excluded);var toggleNotification=(0,_helperPlugin.useNotification)();var handleChange=function handleChange(e){toggleNotification({type:'info',message:{id:(0,_utils.getTrad)('contentType.kind.change.warning'),defaultMessage:'You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten).'}});onChange(e);};return/*#__PURE__*/_react["default"].createElement(_CustomRadioGroup["default"],(0,_extends2["default"])({},rest,{onChange:handleChange}));};ContentTypeRadioGroup.propTypes={onChange:_propTypes["default"].func.isRequired};var _default=ContentTypeRadioGroup;exports.default=_default;

/***/ }),

/***/ 87387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.Wrapper=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _Stack=__webpack_require__(9008);var _Typography=__webpack_require__(49425);var _themes=__webpack_require__(12871);var Wrapper=/*#__PURE__*/(0,_styledComponents["default"])(_Stack.Stack).withConfig({displayName:"components__Wrapper",componentId:"sc-1pvrsb-0"})(["position:relative;align-items:stretch;label{border-radius:4px;max-width:50%;cursor:pointer;user-select:none;flex:1;","}input{position:absolute;opacity:0;}.option{height:100%;border-radius:4px;border:1px solid ",";will-change:transform,opacity;background:",";.checkmark{position:relative;display:block;will-change:transform;background:",";width:",";height:",";border:solid 1px ",";border-radius:50%;&:before,&:after{content:'';display:block;border-radius:50%;width:",";height:",";position:absolute;top:3px;left:3px;}&:after{transform:scale(0);transition:inherit;will-change:transform;}}}.container input:checked ~ div{background:",";","{color:",";}border:1px solid ",";.checkmark{border:solid 1px ",";&::after{background:",";transform:scale(1);}}}"],(0,_themes.inputFocusStyle)(),function(_ref){var theme=_ref.theme;return theme.colors.neutral200;},function(_ref2){var theme=_ref2.theme;return theme.colors.neutral0;},function(_ref3){var theme=_ref3.theme;return theme.colors.neutral0;},function(_ref4){var theme=_ref4.theme;return theme.spaces[5];},function(_ref5){var theme=_ref5.theme;return theme.spaces[5];},function(_ref6){var theme=_ref6.theme;return theme.colors.neutral300;},function(_ref7){var theme=_ref7.theme;return theme.spaces[3];},function(_ref8){var theme=_ref8.theme;return theme.spaces[3];},function(_ref9){var theme=_ref9.theme;return theme.colors.primary100;},_Typography.Typography,function(_ref10){var theme=_ref10.theme;return theme.colors.primary600;},function(_ref11){var theme=_ref11.theme;return theme.colors.primary200;},function(_ref12){var theme=_ref12.theme;return theme.colors.primary600;},function(_ref13){var theme=_ref13.theme;return theme.colors.primary600;});exports.Wrapper=Wrapper;

/***/ }),

/***/ 36178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Typography=__webpack_require__(49425);var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _components=__webpack_require__(87387);var CustomRadioGroup=function CustomRadioGroup(_ref){var intlLabel=_ref.intlLabel,name=_ref.name,onChange=_ref.onChange,radios=_ref.radios,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:2},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:name,as:"label"},formatMessage(intlLabel)),/*#__PURE__*/_react["default"].createElement(_components.Wrapper,{horizontal:true,size:4,style:{alignItems:'stretch'}},radios.map(function(radio){return/*#__PURE__*/_react["default"].createElement("label",{htmlFor:radio.value.toString(),key:radio.value,className:"container"},/*#__PURE__*/_react["default"].createElement("input",{id:radio.value.toString(),name:name,className:"option-input",checked:radio.value===value,value:radio.value,key:radio.value,onChange:onChange,type:"radio"}),/*#__PURE__*/_react["default"].createElement(_Box.Box,{className:"option",padding:4},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingRight:4},/*#__PURE__*/_react["default"].createElement("span",{className:"checkmark"})),/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:2},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{fontWeight:"bold"},formatMessage(radio.title)),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",textColor:"neutral600"},formatMessage(radio.description))))));})));};CustomRadioGroup.defaultProps={radios:[]};CustomRadioGroup.propTypes={intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,radios:_propTypes["default"].arrayOf(_propTypes["default"].shape({title:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired}),description:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired}),value:_propTypes["default"].any.isRequired})),value:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].bool]).isRequired};var _default=CustomRadioGroup;exports.default=_default;

/***/ }),

/***/ 67187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _reactIntl=__webpack_require__(97132);var _reactRouterDom=__webpack_require__(39711);var _reactRedux=__webpack_require__(37424);var _redux=__webpack_require__(35281);var _DataManagerContext=_interopRequireDefault(__webpack_require__(662));var _useFormModalNavigation=_interopRequireDefault(__webpack_require__(51528));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _makeUnique=_interopRequireDefault(__webpack_require__(86846));var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _FormModal=_interopRequireDefault(__webpack_require__(24238));var _createDataObject=_interopRequireDefault(__webpack_require__(126));var _createModifiedDataSchema=_interopRequireDefault(__webpack_require__(72143));var _retrieveSpecificInfoFromComponents=_interopRequireDefault(__webpack_require__(35017));var _retrieveComponentsFromSchema=_interopRequireDefault(__webpack_require__(64630));var _retrieveNestedComponents=_interopRequireDefault(__webpack_require__(59214));var _retrieveComponentsThatHaveComponents=__webpack_require__(21562);var _cleanData=__webpack_require__(79486);var _constants=__webpack_require__(41126);var _selectors=_interopRequireDefault(__webpack_require__(62102));var _formatSchemas=_interopRequireDefault(__webpack_require__(84943));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var DataManagerProvider=function DataManagerProvider(_ref){var allIcons=_ref.allIcons,children=_ref.children,components=_ref.components,contentTypes=_ref.contentTypes,isLoading=_ref.isLoading,isLoadingForDataToBeSet=_ref.isLoadingForDataToBeSet,initialData=_ref.initialData,modifiedData=_ref.modifiedData,reservedNames=_ref.reservedNames;var dispatch=(0,_reactRedux.useDispatch)();var toggleNotification=(0,_helperPlugin.useNotification)();var _useAutoReloadOverlay=(0,_helperPlugin.useAutoReloadOverlayBlocker)(),lockAppWithAutoreload=_useAutoReloadOverlay.lockAppWithAutoreload,unlockAppWithAutoreload=_useAutoReloadOverlay.unlockAppWithAutoreload;var _useStrapiApp=(0,_helperPlugin.useStrapiApp)(),getPlugin=_useStrapiApp.getPlugin;var _getPlugin=getPlugin(_pluginId["default"]),apis=_getPlugin.apis;var _useAppInfos=(0,_helperPlugin.useAppInfos)(),autoReload=_useAppInfos.autoReload;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var _useRBACProvider=(0,_helperPlugin.useRBACProvider)(),refetchPermissions=_useRBACProvider.refetchPermissions;var _useLocation=(0,_reactRouterDom.useLocation)(),pathname=_useLocation.pathname;var _useFormModalNavigati=(0,_useFormModalNavigation["default"])(),onCloseModal=_useFormModalNavigati.onCloseModal;var contentTypeMatch=(0,_reactRouterDom.useRouteMatch)("/plugins/".concat(_pluginId["default"],"/content-types/:uid"));var componentMatch=(0,_reactRouterDom.useRouteMatch)("/plugins/".concat(_pluginId["default"],"/component-categories/:categoryUid/:componentUid"));var formatMessageRef=(0,_react.useRef)();formatMessageRef.current=formatMessage;var isInDevelopmentMode=autoReload;var isInContentTypeView=contentTypeMatch!==null;var firstKeyToMainSchema=isInContentTypeView?'contentType':'component';var currentUid=isInContentTypeView?(0,_lodash.get)(contentTypeMatch,'params.uid',null):(0,_lodash.get)(componentMatch,'params.componentUid',null);var abortController=new AbortController();var signal=abortController.signal;var getDataRef=(0,_react.useRef)();var endPoint=isInContentTypeView?'content-types':'components';getDataRef.current=/*#__PURE__*/(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var _yield$Promise$all,_yield$Promise$all2,componentsArray,contentTypesArray,_reservedNames,_components,formattedComponents,_contentTypes,formattedContentTypes;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return Promise.all(['components','content-types','reserved-names'].map(function(endPoint){return(0,_helperPlugin.request)("/".concat(_pluginId["default"],"/").concat(endPoint),{method:'GET',signal:signal});}));case 3:_yield$Promise$all=_context.sent;_yield$Promise$all2=(0,_slicedToArray2["default"])(_yield$Promise$all,3);componentsArray=_yield$Promise$all2[0].data;contentTypesArray=_yield$Promise$all2[1].data;_reservedNames=_yield$Promise$all2[2];_components=(0,_createDataObject["default"])(componentsArray);formattedComponents=(0,_formatSchemas["default"])(_components);_contentTypes=(0,_createDataObject["default"])(contentTypesArray);formattedContentTypes=(0,_formatSchemas["default"])(_contentTypes);dispatch({type:_constants.GET_DATA_SUCCEEDED,components:formattedComponents,contentTypes:formattedContentTypes,reservedNames:_reservedNames});_context.next=19;break;case 15:_context.prev=15;_context.t0=_context["catch"](0);console.error({err:_context.t0});toggleNotification({type:'warning',message:{id:'notification.error'}});case 19:case"end":return _context.stop();}}},_callee,null,[[0,15]]);}));(0,_react.useEffect)(function(){getDataRef.current();},[]);(0,_react.useEffect)(function(){// We need to set the modifiedData after the data has been retrieved
// and also on pathname change
if(!isLoading&&currentUid){setModifiedData();}// eslint-disable-next-line react-hooks/exhaustive-deps
},[isLoading,pathname,currentUid]);(0,_react.useEffect)(function(){if(!autoReload){toggleNotification({type:'info',message:{id:(0,_getTrad["default"])('notification.info.autoreaload-disable')}});}},[autoReload,toggleNotification]);var addAttribute=function addAttribute(attributeToSet,forTarget,targetUid){var isEditing=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var initialAttribute=arguments.length>4?arguments[4]:undefined;var shouldAddComponentToData=arguments.length>5&&arguments[5]!==undefined?arguments[5]:false;var actionType=isEditing?_constants.EDIT_ATTRIBUTE:_constants.ADD_ATTRIBUTE;dispatch({type:actionType,attributeToSet:attributeToSet,forTarget:forTarget,targetUid:targetUid,initialAttribute:initialAttribute,shouldAddComponentToData:shouldAddComponentToData});};var addCreatedComponentToDynamicZone=function addCreatedComponentToDynamicZone(dynamicZoneTarget,componentsToAdd){dispatch({type:_constants.ADD_CREATED_COMPONENT_TO_DYNAMIC_ZONE,dynamicZoneTarget:dynamicZoneTarget,componentsToAdd:componentsToAdd});};var createSchema=function createSchema(data,schemaType,uid,componentCategory){var shouldAddComponentToData=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var type=schemaType==='contentType'?_constants.CREATE_SCHEMA:_constants.CREATE_COMPONENT_SCHEMA;dispatch({type:type,data:data,componentCategory:componentCategory,schemaType:schemaType,uid:uid,shouldAddComponentToData:shouldAddComponentToData});};var changeDynamicZoneComponents=function changeDynamicZoneComponents(dynamicZoneTarget,newComponents){dispatch({type:_constants.CHANGE_DYNAMIC_ZONE_COMPONENTS,dynamicZoneTarget:dynamicZoneTarget,newComponents:newComponents});};var removeAttribute=function removeAttribute(mainDataKey,attributeToRemoveName){var componentUid=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'';var type=mainDataKey==='components'?_constants.REMOVE_FIELD_FROM_DISPLAYED_COMPONENT:_constants.REMOVE_FIELD;if(mainDataKey==='contentType'){trackUsage('willDeleteFieldOfContentType');}dispatch({type:type,mainDataKey:mainDataKey,attributeToRemoveName:attributeToRemoveName,componentUid:componentUid});};var deleteCategory=/*#__PURE__*/function(){var _ref3=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(categoryUid){var requestURL,userConfirm;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;requestURL="/".concat(_pluginId["default"],"/component-categories/").concat(categoryUid);// eslint-disable-next-line no-alert
userConfirm=window.confirm(formatMessage({id:(0,_getTrad["default"])('popUpWarning.bodyMessage.category.delete')}));// Close the modal
onCloseModal();if(!userConfirm){_context2.next=12;break;}lockAppWithAutoreload();_context2.next=8;return(0,_helperPlugin.request)(requestURL,{method:'DELETE'},true);case 8:_context2.next=10;return updatePermissions();case 10:// Reload the plugin so the cycle is new again
dispatch({type:_constants.RELOAD_PLUGIN});// Refetch all the data
getDataRef.current();case 12:_context2.next=18;break;case 14:_context2.prev=14;_context2.t0=_context2["catch"](0);console.error({err:_context2.t0});toggleNotification({type:'warning',message:{id:'notification.error'}});case 18:_context2.prev=18;unlockAppWithAutoreload();return _context2.finish(18);case 21:case"end":return _context2.stop();}}},_callee2,null,[[0,14,18,21]]);}));return function deleteCategory(_x){return _ref3.apply(this,arguments);};}();var deleteData=/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(){var requestURL,isTemporary,userConfirm;return _regenerator["default"].wrap(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:_context3.prev=0;requestURL="/".concat(_pluginId["default"],"/").concat(endPoint,"/").concat(currentUid);isTemporary=(0,_lodash.get)(modifiedData,[firstKeyToMainSchema,'isTemporary'],false);// eslint-disable-next-line no-alert
userConfirm=window.confirm(formatMessage({id:(0,_getTrad["default"])("popUpWarning.bodyMessage.".concat(isInContentTypeView?'contentType':'component',".delete"))}));// Close the modal
onCloseModal();if(!userConfirm){_context3.next=16;break;}if(!isTemporary){_context3.next=9;break;}// Delete the not saved type
// Here we just need to reset the components to the initial ones and also the content types
// Doing so will trigging a url change since the type doesn't exist in either the contentTypes or the components
// so the modified and the initial data will also be reset in the useEffect...
dispatch({type:_constants.DELETE_NOT_SAVED_TYPE});return _context3.abrupt("return");case 9:lockAppWithAutoreload();_context3.next=12;return(0,_helperPlugin.request)(requestURL,{method:'DELETE'},true);case 12:// Reload the plugin so the cycle is new again
dispatch({type:_constants.RELOAD_PLUGIN});// Refetch the permissions
_context3.next=15;return updatePermissions();case 15:// Refetch all the data
getDataRef.current();case 16:_context3.next=22;break;case 18:_context3.prev=18;_context3.t0=_context3["catch"](0);console.error({err:_context3.t0});toggleNotification({type:'warning',message:{id:'notification.error'}});case 22:_context3.prev=22;unlockAppWithAutoreload();return _context3.finish(22);case 25:case"end":return _context3.stop();}}},_callee3,null,[[0,18,22,25]]);}));return function deleteData(){return _ref4.apply(this,arguments);};}();var editCategory=/*#__PURE__*/function(){var _ref5=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(categoryUid,body){var requestURL;return _regenerator["default"].wrap(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.prev=0;requestURL="/".concat(_pluginId["default"],"/component-categories/").concat(categoryUid);// Close the modal
onCloseModal();// Lock the app
lockAppWithAutoreload();// Update the category
_context4.next=6;return(0,_helperPlugin.request)(requestURL,{method:'PUT',body:body},true);case 6:_context4.next=8;return updatePermissions();case 8:// Reload the plugin so the cycle is new again
dispatch({type:_constants.RELOAD_PLUGIN});// Refetch all the data
getDataRef.current();_context4.next=16;break;case 12:_context4.prev=12;_context4.t0=_context4["catch"](0);console.error({err:_context4.t0});toggleNotification({type:'warning',message:{id:'notification.error'}});case 16:_context4.prev=16;unlockAppWithAutoreload();return _context4.finish(16);case 19:case"end":return _context4.stop();}}},_callee4,null,[[0,12,16,19]]);}));return function editCategory(_x2,_x3){return _ref5.apply(this,arguments);};}();var getAllComponentsThatHaveAComponentInTheirAttributes=function getAllComponentsThatHaveAComponentInTheirAttributes(){// We need to create an object with all the non modified compos
// plus the ones that are created on the fly
var allCompos=Object.assign({},components,modifiedData.components);// Since we apply the modification of a specific component only in the modified data
// we need to update all compos with the modifications
if(!isInContentTypeView){var currentEditedCompo=(0,_lodash.get)(modifiedData,'component',{});(0,_lodash.set)(allCompos,(0,_lodash.get)(currentEditedCompo,['uid'],''),currentEditedCompo);}var composWithCompos=(0,_retrieveComponentsThatHaveComponents.retrieveComponentsThatHaveComponents)(allCompos);return(0,_makeUnique["default"])(composWithCompos);};var getAllNestedComponents=function getAllNestedComponents(){var appNestedCompo=(0,_retrieveNestedComponents["default"])(components);var editingDataNestedCompos=(0,_retrieveNestedComponents["default"])(modifiedData.components||{});return(0,_makeUnique["default"])([].concat((0,_toConsumableArray2["default"])(editingDataNestedCompos),(0,_toConsumableArray2["default"])(appNestedCompo)));};var removeComponentFromDynamicZone=function removeComponentFromDynamicZone(dzName,componentToRemoveIndex){dispatch({type:_constants.REMOVE_COMPONENT_FROM_DYNAMIC_ZONE,dzName:dzName,componentToRemoveIndex:componentToRemoveIndex});};var setModifiedData=function setModifiedData(){var currentSchemas=isInContentTypeView?contentTypes:components;var schemaToSet=(0,_lodash.get)(currentSchemas,currentUid,{schema:{attributes:[]}});var retrievedComponents=(0,_retrieveComponentsFromSchema["default"])(schemaToSet.schema.attributes,components);var newSchemaToSet=(0,_createModifiedDataSchema["default"])(schemaToSet,retrievedComponents,components,isInContentTypeView);var hasJustCreatedSchema=(0,_lodash.get)(schemaToSet,'isTemporary',false)&&(0,_lodash.size)((0,_lodash.get)(schemaToSet,'schema.attributes',[]))===0;dispatch({type:_constants.SET_MODIFIED_DATA,schemaToSet:newSchemaToSet,hasJustCreatedSchema:hasJustCreatedSchema});};var shouldRedirect=(0,_react.useMemo)(function(){var dataSet=isInContentTypeView?contentTypes:components;if(currentUid==='create-content-type'){return false;}return!Object.keys(dataSet).includes(currentUid)&&!isLoading;},[components,contentTypes,currentUid,isInContentTypeView,isLoading]);var redirectEndpoint=(0,_react.useMemo)(function(){var allowedEndpoints=Object.keys(contentTypes).filter(function(uid){return(0,_lodash.get)(contentTypes,[uid,'schema','visible'],true);}).sort();return(0,_lodash.get)(allowedEndpoints,'0','create-content-type');},[contentTypes]);if(shouldRedirect){return/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Redirect,{to:"/plugins/".concat(_pluginId["default"],"/content-types/").concat(redirectEndpoint)});}var submitData=/*#__PURE__*/function(){var _ref6=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(additionalContentTypeData){var isCreating,body,contentType,method,baseURL,requestURL,oldName,newName;return _regenerator["default"].wrap(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:_context5.prev=0;isCreating=(0,_lodash.get)(modifiedData,[firstKeyToMainSchema,'isTemporary'],false);body={components:(0,_cleanData.getComponentsToPost)(modifiedData.components,components,currentUid,isCreating)};if(isInContentTypeView){contentType=apis.forms.mutateContentTypeSchema(_objectSpread(_objectSpread({},(0,_cleanData.formatMainDataType)(modifiedData.contentType)),additionalContentTypeData),initialData.contentType);body.contentType=contentType;trackUsage('willSaveContentType');}else{body.component=(0,_cleanData.formatMainDataType)(modifiedData.component,true);trackUsage('willSaveComponent');}method=isCreating?'POST':'PUT';baseURL="/".concat(_pluginId["default"],"/").concat(endPoint);requestURL=isCreating?baseURL:"".concat(baseURL,"/").concat(currentUid);// Lock the app
lockAppWithAutoreload();_context5.next=10;return(0,_helperPlugin.request)(requestURL,{method:method,body:body},true);case 10:unlockAppWithAutoreload();_context5.next=13;return updatePermissions();case 13:// Submit ct tracking success
if(isInContentTypeView){trackUsage('didSaveContentType');oldName=(0,_lodash.get)(body,['contentType','schema','name'],'');newName=(0,_lodash.get)(initialData,['contentType','schema','name'],'');if(!isCreating&&oldName!==newName){trackUsage('didEditNameOfContentType');}}else{trackUsage('didSaveComponent');}// Reload the plugin so the cycle is new again
dispatch({type:_constants.RELOAD_PLUGIN});// Refetch all the data
getDataRef.current();_context5.next=23;break;case 18:_context5.prev=18;_context5.t0=_context5["catch"](0);if(!isInContentTypeView){trackUsage('didNotSaveComponent');}console.error({err:_context5.t0.response});toggleNotification({type:'warning',message:{id:'notification.error'}});case 23:_context5.prev=23;unlockAppWithAutoreload();return _context5.finish(23);case 26:case"end":return _context5.stop();}}},_callee5,null,[[0,18,23,26]]);}));return function submitData(_x4){return _ref6.apply(this,arguments);};}();var updatePermissions=/*#__PURE__*/function(){var _ref7=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(){return _regenerator["default"].wrap(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:_context6.next=2;return refetchPermissions();case 2:case"end":return _context6.stop();}}},_callee6);}));return function updatePermissions(){return _ref7.apply(this,arguments);};}();var updateSchema=function updateSchema(data,schemaType,componentUID){dispatch({type:_constants.UPDATE_SCHEMA,data:data,schemaType:schemaType,uid:componentUID});};return/*#__PURE__*/_react["default"].createElement(_DataManagerContext["default"].Provider,{value:{addAttribute:addAttribute,addCreatedComponentToDynamicZone:addCreatedComponentToDynamicZone,allComponentsCategories:(0,_retrieveSpecificInfoFromComponents["default"])(components,['category']),allComponentsIconAlreadyTaken:(0,_retrieveSpecificInfoFromComponents["default"])(components,['schema','icon']),allIcons:allIcons,changeDynamicZoneComponents:changeDynamicZoneComponents,components:components,componentsGroupedByCategory:(0,_lodash.groupBy)(components,'category'),componentsThatHaveOtherComponentInTheirAttributes:getAllComponentsThatHaveAComponentInTheirAttributes(),contentTypes:contentTypes,createSchema:createSchema,deleteCategory:deleteCategory,deleteData:deleteData,editCategory:editCategory,isInDevelopmentMode:isInDevelopmentMode,initialData:initialData,isInContentTypeView:isInContentTypeView,modifiedData:modifiedData,nestedComponents:getAllNestedComponents(),removeAttribute:removeAttribute,removeComponentFromDynamicZone:removeComponentFromDynamicZone,reservedNames:reservedNames,setModifiedData:setModifiedData,sortedContentTypesList:(0,_cleanData.sortContentType)(contentTypes),submitData:submitData,updateSchema:updateSchema}},/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,isLoadingForDataToBeSet?/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null):/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,children,isInDevelopmentMode&&/*#__PURE__*/_react["default"].createElement(_FormModal["default"],null))));};DataManagerProvider.defaultProps={components:{}};DataManagerProvider.propTypes={allIcons:_propTypes["default"].array.isRequired,children:_propTypes["default"].node.isRequired,components:_propTypes["default"].object,contentTypes:_propTypes["default"].object.isRequired,isLoading:_propTypes["default"].bool.isRequired,isLoadingForDataToBeSet:_propTypes["default"].bool.isRequired,initialData:_propTypes["default"].object.isRequired,modifiedData:_propTypes["default"].object.isRequired,reservedNames:_propTypes["default"].object.isRequired};var mapStateToProps=(0,_selectors["default"])();var withConnect=(0,_reactRedux.connect)(mapStateToProps,null);var _default=(0,_redux.compose)(withConnect)(/*#__PURE__*/(0,_react.memo)(DataManagerProvider));exports.default=_default;

/***/ }),

/***/ 62102:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=exports.dataManagerProviderDomain=void 0;var _reselect=__webpack_require__(42279);var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _reducer=__webpack_require__(40377);/**
 * Direct selector to the dataManagerProvider state domain
 */var dataManagerProviderDomain=function dataManagerProviderDomain(){return function(state){return state["".concat(_pluginId["default"],"_dataManagerProvider")]||_reducer.initialState;};};/**
 * Other specific selectors
 */ /**
 * Default selector used by dataManagerProvider
 */exports.dataManagerProviderDomain=dataManagerProviderDomain;var makeSelectDataManagerProvider=function makeSelectDataManagerProvider(){return(0,_reselect.createSelector)(dataManagerProviderDomain(),function(substate){return substate;});};var _default=makeSelectDataManagerProvider;exports.default=_default;

/***/ }),

/***/ 79486:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.sortContentType=exports.getCreatedAndModifiedComponents=exports.getComponentsToPost=exports.formatMainDataType=exports.formatComponent=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(6479));var _lodash=__webpack_require__(96486);var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _makeUnique=_interopRequireDefault(__webpack_require__(86846));var _excluded=["name"];var getCreatedAndModifiedComponents=function getCreatedAndModifiedComponents(allComponents,initialComponents){var componentUIDsToReturn=Object.keys(allComponents).filter(function(compoUid){var currentCompo=(0,_lodash.get)(allComponents,compoUid,{});var initialCompo=(0,_lodash.get)(initialComponents,compoUid,{});var hasComponentBeenCreated=(0,_lodash.get)(currentCompo,['isTemporary'],false);var hasComponentBeenModified=!(0,_lodash.isEqual)(currentCompo,initialCompo);return hasComponentBeenCreated||hasComponentBeenModified;});return(0,_makeUnique["default"])(componentUIDsToReturn);};exports.getCreatedAndModifiedComponents=getCreatedAndModifiedComponents;var formatComponent=function formatComponent(component,mainDataUID){var formattedAttributes=formatAttributes((0,_lodash.get)(component,'schema.attributes',[]),mainDataUID);// Set tmpUID if the component has just been created
// Keep the uid if the component already exists
var compoUID=(0,_lodash.get)(component,'isTemporary',false)?{tmpUID:component.uid}:{uid:component.uid};var formattedComponent=Object.assign({},compoUID,{category:component.category},// Omit the attributes since we want to format them
(0,_lodash.omit)(component.schema,'attributes'),// Add the formatted attributes
{attributes:formattedAttributes});return formattedComponent;};exports.formatComponent=formatComponent;var formatMainDataType=function formatMainDataType(data){var isComponent=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var mainDataUID=(0,_lodash.get)(data,'uid',null);var formattedAttributes=formatAttributes((0,_lodash.get)(data,'schema.attributes',[]),mainDataUID);var initObj=isComponent?{category:(0,_lodash.get)(data,'category','')}:{};var formattedContentType=Object.assign(initObj,(0,_lodash.omit)(data.schema,'attributes'),{attributes:formattedAttributes});delete formattedContentType.uid;delete formattedContentType.isTemporary;delete formattedContentType.visible;delete formattedContentType.restrictRelationsTo;return formattedContentType;};/**
 *
 * @param {Object} attributes
 * @param {String} mainDataUID uid of the main data type
 */exports.formatMainDataType=formatMainDataType;var formatAttributes=function formatAttributes(attributes,mainDataUID){return attributes.reduce(function(acc,_ref){var name=_ref.name,rest=(0,_objectWithoutProperties2["default"])(_ref,_excluded);var currentAttribute=rest;var hasARelationWithMainDataUID=currentAttribute.target===mainDataUID;var isRelationType=currentAttribute.type==='relation';var currentTargetAttribute=(0,_lodash.get)(currentAttribute,'targetAttribute',null);if(!hasARelationWithMainDataUID){if(isRelationType){var relationAttr=Object.assign({},currentAttribute,{targetAttribute:formatRelationTargetAttribute(currentTargetAttribute)});acc[name]=removeNullKeys(relationAttr);}else{acc[name]=removeNullKeys(currentAttribute);}}if(hasARelationWithMainDataUID){var target=currentAttribute.target;var formattedRelationAttribute=Object.assign({},currentAttribute,{target:target,targetAttribute:formatRelationTargetAttribute(currentTargetAttribute)});acc[name]=removeNullKeys(formattedRelationAttribute);}return acc;},{});};var formatRelationTargetAttribute=function formatRelationTargetAttribute(targetAttribute){return targetAttribute==='-'?null:targetAttribute;};var removeNullKeys=function removeNullKeys(obj){return Object.keys(obj).reduce(function(acc,current){if(obj[current]!==null&&current!=='plugin'){acc[current]=obj[current];}return acc;},{});};var getComponentsToPost=function getComponentsToPost(allComponents,initialComponents,mainDataUID){var isCreatingData=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var componentsToFormat=getCreatedAndModifiedComponents(allComponents,initialComponents);var formattedComponents=componentsToFormat.map(function(compoUID){var currentCompo=(0,_lodash.get)(allComponents,compoUID,{});var formattedComponent=formatComponent(currentCompo,mainDataUID,isCreatingData);return formattedComponent;});return formattedComponents;};exports.getComponentsToPost=getComponentsToPost;var sortContentType=function sortContentType(types){return(0,_lodash.sortBy)(Object.keys(types).map(function(uid){return{visible:types[uid].schema.visible,name:uid,title:types[uid].schema.displayName,plugin:types[uid].plugin||null,uid:uid,to:"/plugins/".concat(_pluginId["default"],"/content-types/").concat(uid),kind:types[uid].schema.kind,restrictRelationsTo:types[uid].schema.restrictRelationsTo};}).filter(function(obj){return obj!==null;}),function(obj){return(0,_lodash.camelCase)(obj.title);});};exports.sortContentType=sortContentType;

/***/ }),

/***/ 126:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;/**
 * Creates an object of content types from an array
 * @params {Object[]} arr array of content types
 * @returns {Object} an object of content types
 */var createDataObject=function createDataObject(arr){return arr.reduce(function(acc,current){acc[current.uid]=current;return acc;},{});};var _default=createDataObject;exports.default=_default;

/***/ }),

/***/ 72143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _get=_interopRequireDefault(__webpack_require__(27361));/**
 *
 * @params {Object} contentTypeSchema
 * @params {Object[]} retrievedComponents array of components that are used in the content type
 * @params {Object} allComponentsSchema All app's components
 * @params {Boolean} isInContentTypeView
 * @returns {Object} The modifiedData to set in the reducer
 */var createModifiedDataSchema=function createModifiedDataSchema(contentTypeSchema,retrievedComponents,allComponentsSchema,isInContentTypeView){var _schema;var componentsAssociatedToContentType=retrievedComponents.reduce(function(acc,current){var componentSchema=(0,_get["default"])(allComponentsSchema,current,{});acc[current]=componentSchema;return acc;},{});var keyName=isInContentTypeView?'contentType':'component';var schema=(_schema={},(0,_defineProperty2["default"])(_schema,keyName,contentTypeSchema),(0,_defineProperty2["default"])(_schema,"components",componentsAssociatedToContentType),_schema);return schema;};var _default=createModifiedDataSchema;exports.default=_default;

/***/ }),

/***/ 84943:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.toAttributesArray=exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/**
 * Format the attributes to array instead of an object
 * @params {Object} schemas The content types schema
 * @returns {Object} The formatted content types
 */var formatSchemas=function formatSchemas(schemas){return Object.keys(schemas).reduce(function(acc,current){var schema=schemas[current].schema;acc[current]=_objectSpread(_objectSpread({},schemas[current]),{},{schema:_objectSpread(_objectSpread({},schema),{},{attributes:toAttributesArray(schema.attributes)})});return acc;},{});};/**
 *
 * @params {Object} Object of attributes
 * @returns {Object[]} An array of attributes
 */var toAttributesArray=function toAttributesArray(attributes){return Object.keys(attributes).reduce(function(acc,current){acc.push(_objectSpread(_objectSpread({},attributes[current]),{},{name:current}));return acc;},[]);};exports.toAttributesArray=toAttributesArray;var _default=formatSchemas;exports.default=_default;

/***/ }),

/***/ 21562:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.retrieveComponentsThatHaveComponents=exports.doesComponentHaveAComponentField=void 0;var _get=_interopRequireDefault(__webpack_require__(27361));var _makeUnique=_interopRequireDefault(__webpack_require__(86846));var retrieveComponentsThatHaveComponents=function retrieveComponentsThatHaveComponents(allComponents){var componentsThatHaveNestedComponents=Object.keys(allComponents).reduce(function(acc,current){var currentComponent=(0,_get["default"])(allComponents,[current],{});var uid=currentComponent.uid;if(doesComponentHaveAComponentField(currentComponent)){acc.push(uid);}return acc;},[]);return(0,_makeUnique["default"])(componentsThatHaveNestedComponents);};exports.retrieveComponentsThatHaveComponents=retrieveComponentsThatHaveComponents;var doesComponentHaveAComponentField=function doesComponentHaveAComponentField(component){var attributes=(0,_get["default"])(component,['schema','attributes'],[]);return attributes.some(function(attribute){var type=attribute.type;return type==='component';});};exports.doesComponentHaveAComponentField=doesComponentHaveAComponentField;

/***/ }),

/***/ 59214:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _lodash=__webpack_require__(96486);var _makeUnique=_interopRequireDefault(__webpack_require__(86846));var retrieveNestedComponents=function retrieveNestedComponents(appComponents){var nestedComponents=Object.keys(appComponents).reduce(function(acc,current){var componentAttributes=(0,_lodash.get)(appComponents,[current,'schema','attributes'],[]);var currentComponentNestedCompos=getComponentsFromComponent(componentAttributes);return[].concat((0,_toConsumableArray2["default"])(acc),(0,_toConsumableArray2["default"])(currentComponentNestedCompos));},[]);return(0,_makeUnique["default"])(nestedComponents);};var getComponentsFromComponent=function getComponentsFromComponent(componentAttributes){return componentAttributes.reduce(function(acc,current){var type=current.type,component=current.component;if(type==='component'){acc.push(component);}return acc;},[]);};var _default=retrieveNestedComponents;exports.default=_default;

/***/ }),

/***/ 35017:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _lodash=__webpack_require__(96486);var _makeUnique=_interopRequireDefault(__webpack_require__(86846));var retrieveSpecificInfoFromComponents=function retrieveSpecificInfoFromComponents(allComponents,keysToRetrieve){var allData=Object.keys(allComponents).map(function(compo){return(0,_lodash.get)(allComponents,[compo].concat((0,_toConsumableArray2["default"])(keysToRetrieve)),'');});return(0,_makeUnique["default"])(allData);};var _default=retrieveSpecificInfoFromComponents;exports.default=_default;

/***/ }),

/***/ 62498:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _reactIntl=__webpack_require__(97132);var _Dialog=__webpack_require__(16758);var _ToggleInput=__webpack_require__(47857);var _Typography=__webpack_require__(49425);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _Button=__webpack_require__(19408);var _ExclamationMarkCircle=_interopRequireDefault(__webpack_require__(51359));var _utils=__webpack_require__(48008);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var TypographyTextAlign=/*#__PURE__*/(0,_styledComponents["default"])(_Typography.Typography).withConfig({displayName:"DraftAndPublishToggle__TypographyTextAlign",componentId:"sc-1kw52sn-0"})(["text-align:center;"]);var DraftAndPublishToggle=function DraftAndPublishToggle(_ref){var description=_ref.description,disabled=_ref.disabled,intlLabel=_ref.intlLabel,isCreating=_ref.isCreating,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2["default"])(_useState,2),showWarning=_useState2[0],setShowWarning=_useState2[1];var label=intlLabel.id?formatMessage({id:intlLabel.id,defaultMessage:intlLabel.defaultMessage},_objectSpread({},intlLabel.values)):name;var hint=description?formatMessage({id:description.id,defaultMessage:description.defaultMessage},_objectSpread({},description.values)):'';var handleToggle=function handleToggle(){return setShowWarning(function(prev){return!prev;});};var handleConfirm=function handleConfirm(){onChange({target:{name:name,value:false}});handleToggle();};var handleChange=function handleChange(_ref2){var checked=_ref2.target.checked;if(!checked&&!isCreating){handleToggle();return;}onChange({target:{name:name,value:checked}});};return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_ToggleInput.ToggleInput,{checked:value||false,disabled:disabled,hint:hint,label:label,name:name,offLabel:formatMessage({id:'app.components.ToggleCheckbox.off-label',defaultMessage:'Off'}),onLabel:formatMessage({id:'app.components.ToggleCheckbox.on-label',defaultMessage:'On'}),onChange:handleChange}),showWarning&&/*#__PURE__*/_react["default"].createElement(_Dialog.Dialog,{onClose:handleToggle,title:"Confirmation",isOpen:showWarning},/*#__PURE__*/_react["default"].createElement(_Dialog.DialogBody,{icon:/*#__PURE__*/_react["default"].createElement(_ExclamationMarkCircle["default"],null)},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:2},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{justifyContent:"center"},/*#__PURE__*/_react["default"].createElement(TypographyTextAlign,{id:"confirm-description"},formatMessage({id:(0,_utils.getTrad)('popUpWarning.draft-publish.message'),defaultMessage:'If you disable the Draft/Publish system, your drafts will be deleted.'}))),/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{justifyContent:"center"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{id:"confirm-description"},formatMessage({id:(0,_utils.getTrad)('popUpWarning.draft-publish.second-message'),defaultMessage:'Are you sure you want to disable it?'}))))),/*#__PURE__*/_react["default"].createElement(_Dialog.DialogFooter,{startAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{onClick:handleToggle,variant:"tertiary"},formatMessage({id:'components.popUpWarning.button.cancel',defaultMessage:'No, cancel'})),endAction:/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"danger-light",onClick:handleConfirm},formatMessage({id:(0,_utils.getTrad)('popUpWarning.draft-publish.button.confirm'),defaultMessage:'Yes, disable'}))})));};DraftAndPublishToggle.defaultProps={description:null,disabled:false,value:false};DraftAndPublishToggle.propTypes={description:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}),disabled:_propTypes["default"].bool,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,isCreating:_propTypes["default"].bool.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].bool};var _default=DraftAndPublishToggle;exports.default=_default;

/***/ }),

/***/ 26496:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _component=__webpack_require__(17191);var _attributeOptions=_interopRequireDefault(__webpack_require__(40100));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var advancedForm={"boolean":function boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:true,type:'select-default-boolean',intlLabel:{id:(0,_getTrad["default"])('form.attribute.settings.default'),defaultMessage:'Default value'},name:'default',options:[{value:'true',key:'true',metadatas:{intlLabel:{id:'true',defaultMessage:'true'}}},{value:'',key:'null',metadatas:{intlLabel:{id:'null',defaultMessage:'null'}}},{value:'false',key:'false',metadatas:{intlLabel:{id:'false',defaultMessage:'false'}}}]// validations: {},
}]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"]["private"]]}]};},component:function component(_ref,step){var repeatable=_ref.repeatable;if(step==='1'){return{sections:_component.componentForm.advanced('componentToCreate')};}if(repeatable){return{sections:[{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"]["private"],_attributeOptions["default"].max,_attributeOptions["default"].min]}]};}return{sections:[{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"]["private"]]}]};},date:function date(_ref2){var type=_ref2.type;return{sections:[{sectionTitle:null,items:[_objectSpread(_objectSpread({},_attributeOptions["default"]["default"]),{},{type:type||'date',value:null,withDefaultValue:false,disabled:!type,autoFocus:false})]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].unique,_attributeOptions["default"]["private"]]}]};},dynamiczone:function dynamiczone(){return{sections:[{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].max,_attributeOptions["default"].min]}]};},email:function email(){return{sections:[{sectionTitle:null,items:[_objectSpread(_objectSpread({},_attributeOptions["default"]["default"]),{},{type:'email'})]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].unique,_attributeOptions["default"].maxLength,_attributeOptions["default"].minLength,_attributeOptions["default"]["private"]]}]};},enumeration:function enumeration(data){return{sections:[{sectionTitle:null,items:[{name:'default',type:'select',intlLabel:{id:(0,_getTrad["default"])('form.attribute.settings.default'),defaultMessage:'Default value'},validations:{},options:[{key:'__null_reset_value__',value:'',metadatas:{intlLabel:{id:'components.InputSelect.option.placeholder',defaultMessage:'Choose here'}}}].concat((0,_toConsumableArray2["default"])((data["enum"]||[]).filter(function(value,index){return data["enum"].indexOf(value)===index&&value;}).map(function(value){return{key:value,value:value,metadatas:{intlLabel:{id:"".concat(value,".no-override"),defaultMessage:value}}};})))},{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.enumeration.graphql'),defaultMessage:'Name override for GraphQL'},name:'enumName',type:'text',validations:{},description:{id:(0,_getTrad["default"])('form.attribute.item.enumeration.graphql.description'),defaultMessage:'Allows you to override the default generated name for GraphQL'}}]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"]["private"]]}]};},json:function json(){return{sections:[{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"]["private"]]}]};},media:function media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:(0,_getTrad["default"])('form.attribute.media.allowed-types'),defaultMessage:'Select allowed types of media'},name:'allowedTypes',type:'allowed-types-select',size:7,value:'',validations:{}}]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"]["private"],_attributeOptions["default"].required]}]};},number:function number(data){var inputStep=data.type==='decimal'||data.type==='float'?'any':1;return{sections:[{sectionTitle:null,items:[{autoFocus:true,name:'default',type:data.type==='biginteger'?'text':'number',step:inputStep,intlLabel:{id:(0,_getTrad["default"])('form.attribute.settings.default'),defaultMessage:'Default value'},validations:{}}]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].unique,_attributeOptions["default"].max,_attributeOptions["default"].min,_attributeOptions["default"]["private"]]}]};},password:function password(){return{sections:[{sectionTitle:null,items:[_attributeOptions["default"]["default"]]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].maxLength,_attributeOptions["default"].minLength,_attributeOptions["default"]["private"]]}]};},relation:function relation(){return{sections:[{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"]["private"]]}]};},richtext:function richtext(){return{sections:[{sectionTitle:null,items:[_attributeOptions["default"]["default"]]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].maxLength,_attributeOptions["default"].minLength,_attributeOptions["default"]["private"]]}]};},text:function text(){return{sections:[{sectionTitle:null,items:[_attributeOptions["default"]["default"],_attributeOptions["default"].regex]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].unique,_attributeOptions["default"].maxLength,_attributeOptions["default"].minLength,_attributeOptions["default"]["private"]]}]};},uid:function uid(data){return{sections:[{sectionTitle:null,items:[_objectSpread(_objectSpread({},_attributeOptions["default"]["default"]),{},{disabled:Boolean(data.targetField),type:'text'})]},{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:[_attributeOptions["default"].required,_attributeOptions["default"].maxLength,_attributeOptions["default"].minLength,_attributeOptions["default"]["private"]]}]};}};var _default=advancedForm;exports.default=_default;

/***/ }),

/***/ 40100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var attributeOptions={"default":{name:'default',type:'text',intlLabel:{id:(0,_getTrad["default"])('form.attribute.settings.default'),defaultMessage:'Default value'}},max:{name:'max',type:'checkbox-with-number-field',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.maximum'),defaultMessage:'Maximum value'}},maxLength:{name:'maxLength',type:'checkbox-with-number-field',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.maximumLength'),defaultMessage:'Maximum length'}},min:{name:'min',type:'checkbox-with-number-field',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.minimum'),defaultMessage:'Minimum value'}},minLength:{name:'minLength',type:'checkbox-with-number-field',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.minimumLength'),defaultMessage:'Minimum length'}},"private":{name:'private',type:'checkbox',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.privateField'),defaultMessage:'Private field'},description:{id:(0,_getTrad["default"])('form.attribute.item.privateField.description'),defaultMessage:'This field will not show up in the API response'}},regex:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.text.regex'),defaultMessage:'RegExp pattern'},name:'regex',type:'text',description:{id:(0,_getTrad["default"])('form.attribute.item.text.regex.description'),defaultMessage:'The text of the regular expression'}},required:{name:'required',type:'checkbox',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.requiredField'),defaultMessage:'Required field'},description:{id:(0,_getTrad["default"])('form.attribute.item.requiredField.description'),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:'unique',type:'checkbox',intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.uniqueField'),defaultMessage:'Unique field'},description:{id:(0,_getTrad["default"])('form.attribute.item.uniqueField.description'),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}};var _default=attributeOptions;exports.default=_default;

/***/ }),

/***/ 50852:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _component=__webpack_require__(17191);var _nameField=__webpack_require__(16105);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var baseForm={component:function component(data,step){if(step==='1'){var itemsToConcat=data.createComponent===true?_component.componentForm.base('componentToCreate.'):[];return{sections:[{sectionTitle:null,items:[_component.componentField]}].concat((0,_toConsumableArray2["default"])(itemsToConcat))};}return{sections:[{sectionTitle:null,items:[_nameField.nameField,{name:'component',type:'select-component',intlLabel:{id:(0,_getTrad["default"])('modalForm.attributes.select-component'),defaultMessage:'Select a component'},isMultiple:false}]},{sectionTitle:null,items:[{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'repeatable',type:'boolean-radio-group',size:12,radios:[{title:{id:(0,_getTrad["default"])('form.attribute.component.option.repeatable'),defaultMessage:'Repeatable component'},description:{id:(0,_getTrad["default"])('form.attribute.component.option.repeatable.description'),defaultMessage:'Best for multiple instances (array) of ingredients, meta tags, etc..'},value:true},{title:{id:(0,_getTrad["default"])('form.attribute.component.option.single'),defaultMessage:'Single component'},description:{id:(0,_getTrad["default"])('form.attribute.component.option.single.description'),defaultMessage:'Best for grouping fields like full address, main information, etc...'},value:false}]}]}]};},date:function date(){return{sections:[{sectionTitle:null,items:[_nameField.nameField,{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'type',type:'select-date',options:[{key:'__null_reset_value__',value:'',metadatas:{intlLabel:{id:'components.InputSelect.option.placeholder',defaultMessage:'Choose here'},hidden:true}},{key:'date',value:'date',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.date.type.date'),defaultMessage:'date'}}},{key:'datetime',value:'datetime',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.date.type.datetime'),defaultMessage:'datetime'}}},{key:'time',value:'time',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.date.type.time'),defaultMessage:'time'}}}]}]}]};},enumeration:function enumeration(){return{sections:[{sectionTitle:null,items:[_nameField.nameField]},{sectionTitle:null,items:[{name:'enum',type:'textarea-enum',size:6,intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.enumeration.rules'),defaultMessage:'Values (one line per value)'},placeholder:{id:(0,_getTrad["default"])('form.attribute.item.enumeration.placeholder'),defaultMessage:'Ex:\nmorning\nnoon\nevening'},validations:{required:true}}]}]};},media:function media(){return{sections:[{sectionTitle:null,items:[_nameField.nameField]},{sectionTitle:null,items:[{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'multiple',size:12,type:'boolean-radio-group',radios:[{title:{id:(0,_getTrad["default"])('form.attribute.media.option.multiple'),defaultMessage:'Multiple media'},description:{id:(0,_getTrad["default"])('form.attribute.media.option.multiple.description'),defaultMessage:'Best for sliders, carousels or multiple files download'},value:true},{title:{id:(0,_getTrad["default"])('form.attribute.media.option.single'),defaultMessage:'Single media'},description:{id:(0,_getTrad["default"])('form.attribute.media.option.single.description'),defaultMessage:'Best for avatar, profile picture or cover'},value:false}]}]}]};},number:function number(){return{sections:[{sectionTitle:null,items:[_nameField.nameField,{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.number.type'),defaultMessage:'Number format'},name:'type',type:'select-number',options:[{key:'__null_reset_value__',value:'',metadatas:{intlLabel:{id:'components.InputSelect.option.placeholder',defaultMessage:'Choose here'},hidden:true}},{key:'integer',value:'integer',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.number.type.integer'),defaultMessage:'integer (ex: 10)'}}},{key:'biginteger',value:'biginteger',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.number.type.biginteger'),defaultMessage:'biginteger (ex: 123456789)'}}},{key:'decimal',value:'decimal',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.number.type.decimal'),defaultMessage:'decimal (ex: 2.22)'}}},{key:'float',value:'float',metadatas:{intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.number.type.float'),defaultMessage:'decimal (ex: 3.3333333)'}}}]}]}]};},relation:function relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:'FIXME',defaultMessage:'FIXME'},name:'relation',size:12,type:'relation'}]}]};},string:function string(){return{sections:[{sectionTitle:null,items:[_nameField.nameField]},{sectionTitle:null,items:[{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'type',size:12,type:'radio-group',radios:[{title:{id:(0,_getTrad["default"])('form.attribute.text.option.short-text'),defaultMessage:'Sort text'},description:{id:(0,_getTrad["default"])('form.attribute.text.option.short-text.description'),defaultMessage:'Best for titles, names, links (URL). It also enables exact search on the field.'},value:'string'},{title:{id:(0,_getTrad["default"])('form.attribute.text.option.long-text'),defaultMessage:'Long text'},description:{id:(0,_getTrad["default"])('form.attribute.text.option.long-text.description'),defaultMessage:'Best for descriptions, biography. Exact search is disabled.'},value:'text'}]}]}]};},text:function text(){return{sections:[{sectionTitle:null,items:[_nameField.nameField]},{sectionTitle:null,items:[{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'type',size:12,type:'radio-group',radios:[{title:{id:(0,_getTrad["default"])('form.attribute.text.option.short-text'),defaultMessage:'Sort text'},description:{id:(0,_getTrad["default"])('form.attribute.text.option.short-text.description'),defaultMessage:'Best for titles, names, links (URL). It also enables exact search on the field.'},value:'string'},{title:{id:(0,_getTrad["default"])('form.attribute.text.option.long-text'),defaultMessage:'Long text'},description:{id:(0,_getTrad["default"])('form.attribute.text.option.long-text.description'),defaultMessage:'Best for descriptions, biography. Exact search is disabled.'},value:'text'}]}]}]};},uid:function uid(data,step,attributes){var options=attributes.filter(function(_ref){var type=_ref.type;return['string','text'].includes(type);}).map(function(_ref2){var name=_ref2.name;return{key:name,value:name,metadatas:{intlLabel:{id:"".concat(name,".no-override"),defaultMessage:name}}};});return{sections:[{sectionTitle:null,items:[_objectSpread(_objectSpread({},_nameField.nameField),{},{placeholder:{id:(0,_getTrad["default"])('modalForm.attribute.form.base.name.placeholder'),defaultMessage:'e.g. Slug, SEO URL, Canonical URL'}}),{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.target-field'),defaultMessage:'Attached field'},name:'targetField',type:'select',options:[{key:'__null_reset_value__',value:'',metadatas:{intlLabel:{id:(0,_getTrad["default"])('none'),defaultMessage:'None'}}}].concat((0,_toConsumableArray2["default"])(options))}]}]};}};var _default=baseForm;exports.default=_default;

/***/ }),

/***/ 80963:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _nameField=__webpack_require__(16105);var commonBaseForm={sections:[{sectionTitle:null,items:[_nameField.nameField]}]};var _default=commonBaseForm;exports.default=_default;

/***/ }),

/***/ 33444:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _advancedForm=_interopRequireDefault(__webpack_require__(26496));var _baseForm=_interopRequireDefault(__webpack_require__(50852));var form={advanced:_advancedForm["default"],base:_baseForm["default"]};var _default=form;exports.default=_default;

/***/ }),

/***/ 78842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "attributeTypes", ({enumerable:true,get:function get(){return _types["default"];}}));Object.defineProperty(exports, "attributesForm", ({enumerable:true,get:function get(){return _form["default"];}}));Object.defineProperty(exports, "commonBaseForm", ({enumerable:true,get:function get(){return _commonBaseForm["default"];}}));var _form=_interopRequireDefault(__webpack_require__(33444));var _commonBaseForm=_interopRequireDefault(__webpack_require__(80963));var _types=_interopRequireDefault(__webpack_require__(9188));

/***/ }),

/***/ 16105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.nameField=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var nameField={name:'name',type:'text',intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.form.base.name'),defaultMessage:'Name'},description:{id:(0,_getTrad["default"])('modalForm.attribute.form.base.name.description'),defaultMessage:'No space is allowed for the name of the attribute'}// validations: {
//   required: true,
// },
};exports.nameField=nameField;

/***/ }),

/***/ 9188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var yup=_interopRequireWildcard(__webpack_require__(53209));var _helperPlugin=__webpack_require__(68547);var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _getRelationType=_interopRequireDefault(__webpack_require__(53518));var _common=__webpack_require__(80993);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var types={date:function date(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type()};return yup.object(shape);},datetime:function datetime(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type()};return yup.object(shape);},time:function time(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type()};return yup.object(shape);},"default":function _default(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type()};return yup.object(shape);},biginteger:function biginteger(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),"default":yup.string().nullable().matches(/^-?\d*$/),unique:_common.validators.unique(),required:_common.validators.required(),max:yup.string().nullable().matches(/^-?\d*$/,_helperPlugin.translatedErrors.regex),min:yup.string().nullable().test(_common.isMinSuperiorThanMax).matches(/^-?\d*$/,_helperPlugin.translatedErrors.regex)};return yup.object(shape);},"boolean":function boolean(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),"default":yup["boolean"]().nullable(),required:_common.validators.required(),unique:_common.validators.unique()};return yup.object(shape);},component:function component(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),required:_common.validators.required(),max:_common.validators.max(),min:_common.validators.min(),component:yup.string().required(_helperPlugin.translatedErrors.required)};return yup.object(shape);},decimal:function decimal(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),"default":yup.number(),required:_common.validators.required(),max:yup.number(),min:yup.number().test(_common.isMinSuperiorThanMax)};return yup.object(shape);},dynamiczone:function dynamiczone(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),required:_common.validators.required(),max:_common.validators.max(),min:_common.validators.min()};return yup.object(shape);},email:function email(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),"default":yup.string().email().nullable(),unique:_common.validators.unique(),required:_common.validators.required(),maxLength:_common.validators.maxLength(),minLength:_common.validators.minLength()};return yup.object(shape);},enumeration:function enumeration(usedAttributeNames,reservedNames){var ENUM_REGEX=new RegExp('^[_A-Za-z][_0-9A-Za-z]*$');var shape={name:yup.string().test((0,_common.alreadyUsedAttributeNames)(usedAttributeNames)).test((0,_common.isNameAllowed)(reservedNames)).matches(ENUM_REGEX,_helperPlugin.translatedErrors.regex).required(_helperPlugin.translatedErrors.required),type:_common.validators.type(),"default":_common.validators["default"](),unique:_common.validators.unique(),required:_common.validators.required(),"enum":yup.array().of(yup.string()).min(1,_helperPlugin.translatedErrors.min).test({name:'areEnumValuesUnique',message:(0,_getTrad["default"])('error.validation.enum-duplicate'),test:function test(values){var filtered=(0,_toConsumableArray2["default"])(new Set(values));return filtered.length===values.length;}}).test({name:'valuesMatchesRegex',message:_helperPlugin.translatedErrors.regex,test:function test(values){return values.every(function(val){return val===''||ENUM_REGEX.test(val);});}}).test({name:'doesNotHaveEmptyValues',message:(0,_getTrad["default"])('error.validation.enum-empty-string'),test:function test(values){return!values.some(function(val){return val==='';});}}),enumName:yup.string().nullable()};return yup.object(shape);},"float":function float(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),required:_common.validators.required(),"default":yup.number(),max:yup.number(),min:yup.number().test(_common.isMinSuperiorThanMax)};return yup.object(shape);},integer:function integer(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),"default":yup.number().integer(),unique:_common.validators.unique(),required:_common.validators.required(),max:_common.validators.max(),min:_common.validators.min()};return yup.object(shape);},json:function json(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),required:_common.validators.required(),unique:_common.validators.unique()};return yup.object(shape);},media:function media(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),multiple:yup["boolean"](),required:_common.validators.required(),allowedTypes:yup.array().of(yup.string().oneOf(['images','videos','files'])).min(1).nullable()};return yup.object(shape);},password:function password(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),"default":_common.validators["default"](),unique:_common.validators.unique(),required:_common.validators.required(),maxLength:_common.validators.maxLength(),minLength:_common.validators.minLength()};return yup.object(shape);},relation:function relation(usedAttributeNames,reservedNames,alreadyTakenTargetAttributes,_ref){var initialData=_ref.initialData,modifiedData=_ref.modifiedData;var shape={name:_common.validators.name(usedAttributeNames,reservedNames),target:yup.string().required(_helperPlugin.translatedErrors.required),relation:yup.string().required(),type:yup.string().required(),targetAttribute:yup.lazy(function(){var relationType=(0,_getRelationType["default"])(modifiedData.relation,modifiedData.targetAttribute);if(relationType==='oneWay'||relationType==='manyWay'){return yup.string().nullable();}var schema=yup.string().test((0,_common.isNameAllowed)(reservedNames));var initialForbiddenName=[].concat((0,_toConsumableArray2["default"])(alreadyTakenTargetAttributes.map(function(_ref2){var name=_ref2.name;return name;})),[modifiedData.name]);var forbiddenTargetAttributeName=initialForbiddenName.filter(function(val){return val!==initialData.targetAttribute;});return schema.matches(_common.NAME_REGEX,_helperPlugin.translatedErrors.regex).test({name:'forbiddenTargetAttributeName',message:(0,_getTrad["default"])('error.validation.relation.targetAttribute-taken'),test:function test(value){if(!value){return false;}return!forbiddenTargetAttributeName.includes(value);}}).required(_helperPlugin.translatedErrors.required);})};return yup.object(shape);},richtext:function richtext(usedAttributeNames,reservedNames){var shape={name:_common.validators.name(usedAttributeNames,reservedNames),type:_common.validators.type(),"default":_common.validators["default"](),unique:_common.validators.unique(),required:_common.validators.required(),maxLength:_common.validators.maxLength(),minLength:_common.validators.minLength()};return yup.object(shape);},string:function string(usedAttributeNames,reservedNames){var shape=(0,_common.createTextShape)(usedAttributeNames,reservedNames);return yup.object(shape);},text:function text(usedAttributeNames,reservedNames){var shape=(0,_common.createTextShape)(usedAttributeNames,reservedNames);return yup.object(shape);},uid:function uid(usedAttributeNames,reservedNames){var shape=(0,_common.createTextShape)(usedAttributeNames,reservedNames);return yup.object(shape);}};var _default2=types;exports.default=_default2;

/***/ }),

/***/ 80993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.validators=exports.isNameAllowed=exports.isMinSuperiorThanMax=exports.getUsedContentTypeAttributeNames=exports.createTextShape=exports.alreadyUsedAttributeNames=exports.NAME_REGEX=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _getTrad=_interopRequireDefault(__webpack_require__(97731));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var NAME_REGEX=new RegExp('^[A-Za-z][_0-9A-Za-z]*$');exports.NAME_REGEX=NAME_REGEX;var alreadyUsedAttributeNames=function alreadyUsedAttributeNames(usedNames){return{name:'attributeNameAlreadyUsed',message:_helperPlugin.translatedErrors.unique,test:function test(value){if(!value){return false;}return!usedNames.includes(value);}};};exports.alreadyUsedAttributeNames=alreadyUsedAttributeNames;var getUsedContentTypeAttributeNames=function getUsedContentTypeAttributeNames(ctShema,isEdition,attributeNameToEdit){var attributes=(0,_lodash.get)(ctShema,['schema','attributes'],{});return Object.keys(attributes).filter(function(attr){if(isEdition){return attr!==attributeNameToEdit;}return true;});};exports.getUsedContentTypeAttributeNames=getUsedContentTypeAttributeNames;var isNameAllowed=function isNameAllowed(reservedNames){return{name:'forbiddenAttributeName',message:(0,_getTrad["default"])('error.attributeName.reserved-name'),test:function test(value){if(!value){return false;}return!reservedNames.includes(value);}};};exports.isNameAllowed=isNameAllowed;var validators={"default":function _default(){return yup.string().nullable();},max:function max(){return yup.number().integer().nullable();},min:function min(){return yup.number().integer().when('max',function(max,schema){if(max){return schema.max(max,(0,_getTrad["default"])('error.validation.minSupMax'));}return schema;}).nullable();},maxLength:function maxLength(){return yup.number().integer().positive((0,_getTrad["default"])('error.validation.positive')).nullable();},minLength:function minLength(){return yup.number().integer().min(0).when('maxLength',function(maxLength,schema){if(maxLength){return schema.max(maxLength,(0,_getTrad["default"])('error.validation.minSupMax'));}return schema;}).nullable();},name:function name(usedNames,reservedNames){return yup.string().test(alreadyUsedAttributeNames(usedNames)).test(isNameAllowed(reservedNames)).matches(NAME_REGEX,_helperPlugin.translatedErrors.regex).required(_helperPlugin.translatedErrors.required);},required:function required(){return yup["boolean"]();},type:function type(){return yup.string().required(_helperPlugin.translatedErrors.required);},unique:function unique(){return yup["boolean"]().nullable();}};exports.validators=validators;var createTextShape=function createTextShape(usedAttributeNames,reservedNames){var shape={name:validators.name(usedAttributeNames,reservedNames),type:validators.type(),"default":validators["default"](),unique:validators.unique(),required:validators.required(),maxLength:validators.maxLength(),minLength:validators.minLength(),regex:yup.string().test({name:'isValidRegExpPattern',message:(0,_getTrad["default"])('error.validation.regex'),test:function test(value){return new RegExp(value)!==null;}}).nullable()};return shape;};exports.createTextShape=createTextShape;var isMinSuperiorThanMax={name:'isMinSuperiorThanMax',message:(0,_getTrad["default"])('error.validation.minSupMax'),test:function test(min){if(!min){return true;}var max=this.parent.max;if(!max){return true;}if(Number.isNaN((0,_lodash.toNumber)(min))){return true;}return(0,_lodash.toNumber)(max)>=(0,_lodash.toNumber)(min);}};exports.isMinSuperiorThanMax=isMinSuperiorThanMax;

/***/ }),

/***/ 6715:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _regex=_interopRequireDefault(__webpack_require__(84069));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var createCategorySchema=function createCategorySchema(usedCategoryNames){var shape={name:yup.string().matches(_regex["default"],_helperPlugin.translatedErrors.regex).test({name:'nameNotAllowed',message:_helperPlugin.translatedErrors.unique,test:function test(value){if(!value){return false;}return!usedCategoryNames.includes((0,_lodash.toLower)(value));}}).required(_helperPlugin.translatedErrors.required)};return yup.object(shape);};var _default=createCategorySchema;exports.default=_default;

/***/ }),

/***/ 68701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var form={base:{sections:[{sectionTitle:null,items:[{autoFocus:true,name:'name',type:'text',intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.form.base.name'),defaultMessage:'Name'},// validations: {
//   required: true,
// },
description:{id:(0,_getTrad["default"])('modalForm.editCategory.base.name.description'),defaultMessage:'No space is allowed for the name of the category'}}]}]}};var _default=form;exports.default=_default;

/***/ }),

/***/ 25659:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "CATEGORY_NAME_REGEX", ({enumerable:true,get:function get(){return _regex["default"];}}));Object.defineProperty(exports, "categoryForm", ({enumerable:true,get:function get(){return _form["default"];}}));Object.defineProperty(exports, "createCategorySchema", ({enumerable:true,get:function get(){return _createCategorySchema["default"];}}));var _form=_interopRequireDefault(__webpack_require__(68701));var _createCategorySchema=_interopRequireDefault(__webpack_require__(6715));var _regex=_interopRequireDefault(__webpack_require__(84069));

/***/ }),

/***/ 84069:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var CATEGORY_NAME_REGEX=new RegExp('^[A-Za-z][-_0-9A-Za-z]*$');var _default=CATEGORY_NAME_REGEX;exports.default=_default;

/***/ }),

/***/ 90247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var componentField={intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'createComponent',type:'boolean-radio-group',size:12,radios:[{title:{id:(0,_getTrad["default"])('form.attribute.component.option.create'),defaultMessage:'Create a new component'},description:{id:(0,_getTrad["default"])('form.attribute.component.option.create.description'),defaultMessage:'A component is shared across types and components, it will be available and accessible everywhere.'},value:true},{title:{id:(0,_getTrad["default"])('form.attribute.component.option.reuse-existing'),defaultMessage:'Use an existing component'},description:{id:(0,_getTrad["default"])('form.attribute.component.option.reuse-existing.description'),defaultMessage:'Reuse a component already created to keep your data consistent across content-types.'},value:false}]};var _default=componentField;exports.default=_default;

/***/ }),

/***/ 80286:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _createUid=__webpack_require__(28390);var _category=__webpack_require__(25659);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var createComponentSchema=function createComponentSchema(usedComponentNames,reservedNames,category){var shape={displayName:yup.string().test({name:'nameAlreadyUsed',message:_helperPlugin.translatedErrors.unique,test:function test(value){if(!value){return false;}var name=(0,_createUid.createComponentUid)(value,category);return!usedComponentNames.includes(name);}}).test({name:'nameNotAllowed',message:(0,_getTrad["default"])('error.contentTypeName.reserved-name'),test:function test(value){if(!value){return false;}return!reservedNames.includes((0,_lodash.toLower)((0,_lodash.trim)(value)));}}).required(_helperPlugin.translatedErrors.required),category:yup.string().matches(_category.CATEGORY_NAME_REGEX,_helperPlugin.translatedErrors.regex).required(_helperPlugin.translatedErrors.required),icon:yup.string().required(_helperPlugin.translatedErrors.required)};return yup.object(shape);};var _default=createComponentSchema;exports.default=_default;

/***/ }),

/***/ 60552:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var componentForm={base:function base(){var prefix=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var sections=[{sectionTitle:null,items:[{name:"".concat(prefix,"displayName"),type:'text',intlLabel:{id:(0,_getTrad["default"])('contentType.displayName.label'),defaultMessage:'Display Name'}},{name:"".concat(prefix,"category"),type:'select-category',intlLabel:{id:(0,_getTrad["default"])('modalForm.components.create-component.category.label'),defaultMessage:'Select a category or enter a name to create a new one'}}]},{sectionTitle:null,items:[{name:"".concat(prefix,"icon"),type:'component-icon-picker',size:12,intlLabel:{id:(0,_getTrad["default"])('modalForm.components.icon.label'),defaultMessage:'Icon'}}]}];return sections;},advanced:function advanced(){var sections=[];return sections;}};var _default=componentForm;exports.default=_default;

/***/ }),

/***/ 17191:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "componentField", ({enumerable:true,get:function get(){return _componentField["default"];}}));Object.defineProperty(exports, "componentForm", ({enumerable:true,get:function get(){return _form["default"];}}));Object.defineProperty(exports, "createComponentSchema", ({enumerable:true,get:function get(){return _createComponentSchema["default"];}}));var _createComponentSchema=_interopRequireDefault(__webpack_require__(80286));var _componentField=_interopRequireDefault(__webpack_require__(90247));var _form=_interopRequireDefault(__webpack_require__(60552));

/***/ }),

/***/ 53628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var yup=_interopRequireWildcard(__webpack_require__(53209));var _lodash=__webpack_require__(96486);var _helperPlugin=__webpack_require__(68547);var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _createUid=__webpack_require__(28390);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var createContentTypeSchema=function createContentTypeSchema(usedContentTypeNames,reservedNames,singularNames,pluralNames){var shape={displayName:yup.string().test({name:'nameAlreadyUsed',message:_helperPlugin.translatedErrors.unique,test:function test(value){if(!value){return false;}var name=(0,_createUid.createUid)(value);return!usedContentTypeNames.includes(name);}}).test({name:'nameNotAllowed',message:(0,_getTrad["default"])('error.contentTypeName.reserved-name'),test:function test(value){if(!value){return false;}return!reservedNames.includes((0,_lodash.toLower)((0,_lodash.trim)(value)));}}).required(_helperPlugin.translatedErrors.required),pluralName:yup.string().test({name:'pluralNameAlreadyUsed',message:_helperPlugin.translatedErrors.unique,test:function test(value){if(!value){return false;}return!pluralNames.includes(value);}}).test({name:'pluralAndSingularAreUnique',message:(0,_getTrad["default"])('error.contentType.pluralName-used'),test:function test(value,context){if(!value){return false;}return context.parent.singularName!==value;}}).required(_helperPlugin.translatedErrors.required),singularName:yup.string().test({name:'singularNameAlreadyUsed',message:_helperPlugin.translatedErrors.unique,test:function test(value){if(!value){return false;}return!singularNames.includes(value);}}).test({name:'pluralAndSingularAreUnique',message:(0,_getTrad["default"])('error.contentType.singularName-used'),test:function test(value,context){if(!value){return false;}return context.parent.pluralName!==value;}}).required(_helperPlugin.translatedErrors.required),draftAndPublish:yup["boolean"](),kind:yup.string().oneOf(['singleType','collectionType'])};return yup.object(shape);};var _default=createContentTypeSchema;exports.default=_default;

/***/ }),

/***/ 23798:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var nameField={name:'displayName',type:'text',intlLabel:{id:(0,_getTrad["default"])('contentType.displayName.label'),defaultMessage:'Display name'}};var forms={advanced:{"default":function _default(){return{sections:[{sectionTitle:{id:(0,_getTrad["default"])('form.contentType.divider.draft-publish'),defaultMessage:'Draft/Publish'},items:[{intlLabel:{id:(0,_getTrad["default"])('contentType.draftAndPublish.label'),defaultMessage:'Draft/publish system'},description:{id:(0,_getTrad["default"])('contentType.draftAndPublish.description'),defaultMessage:'Write a draft version of each entry before publishing it'},name:'draftAndPublish',type:'toggle-draft-publish',validations:{}}]}]};}},base:{create:function create(){return{sections:[{sectionTitle:null,items:[nameField,{description:{id:(0,_getTrad["default"])('contentType.apiId-singular.description'),defaultMessage:'Used to generate the API routes and databases tables/collections'},intlLabel:{id:(0,_getTrad["default"])('contentType.apiId-singular.label'),defaultMessage:'API ID (Singular)'},name:'singularName',type:'text-singular'},{type:'pushRight',size:6,intlLabel:{id:'',defaultMessage:''},name:'pushRight'},{description:{id:(0,_getTrad["default"])('contentType.apiId-plural.description'),defaultMessage:'Pluralized API ID'},intlLabel:{id:(0,_getTrad["default"])('contentType.apiId-plural.label'),defaultMessage:'API ID (Plural)'},name:'pluralName',type:'text-plural'}]}]};},edit:function edit(){return{sections:[{sectionTitle:null,items:[nameField,{disabled:true,description:{id:(0,_getTrad["default"])('contentType.apiId-singular.description'),defaultMessage:'Used to generate the API routes and databases tables/collections'},intlLabel:{id:(0,_getTrad["default"])('contentType.apiId-singular.label'),defaultMessage:'API ID (Singular)'},name:'singularName',type:'text'},{type:'pushRight',size:6,intlLabel:{id:'',defaultMessage:''},name:'pushRight'},{disabled:true,description:{id:(0,_getTrad["default"])('contentType.apiId-plural.description'),defaultMessage:'Pluralized API ID'},intlLabel:{id:(0,_getTrad["default"])('contentType.apiId-plural.label'),defaultMessage:'API ID (Plural)'},name:'pluralName',type:'text'},{intlLabel:{id:(0,_getTrad["default"])('modalForm.attribute.text.type-selection'),defaultMessage:'Type'},name:'kind',type:'content-type-radio-group',size:12,radios:[{title:{id:(0,_getTrad["default"])('menu.section.models.name.singular'),defaultMessage:'Collection Type'},description:{id:(0,_getTrad["default"])('form.button.collection-type.description'),defaultMessage:'Best for multiple instances like articles, products, comments, etc.'},value:'collectionType'},{title:{id:(0,_getTrad["default"])('menu.section.single-types.name.singular'),defaultMessage:'Single Type'},description:{id:(0,_getTrad["default"])('form.button.single-type.description'),defaultMessage:'Best for single instance like about us, homepage, etc.'},value:'singleType'}]}]}]};}}};var _default2=forms;exports.default=_default2;

/***/ }),

/***/ 59138:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "contentTypeForm", ({enumerable:true,get:function get(){return _form["default"];}}));Object.defineProperty(exports, "createContentTypeSchema", ({enumerable:true,get:function get(){return _createContentTypeSchema["default"];}}));var _form=_interopRequireDefault(__webpack_require__(23798));var _createContentTypeSchema=_interopRequireDefault(__webpack_require__(53628));

/***/ }),

/***/ 74068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _component=__webpack_require__(17191);var form={advanced:{"default":function _default(){return{sections:_component.componentForm.advanced('componentToCreate.')};}},base:{createComponent:function createComponent(){return{sections:[{sectionTitle:null,items:[_component.componentField]}].concat((0,_toConsumableArray2["default"])(_component.componentForm.base('componentToCreate.')))};},"default":function _default(){return{sections:[{sectionTitle:null,items:[_component.componentField]},{sectionTitle:null,items:[{type:'pushRight',size:6,intlLabel:{id:'',defaultMessage:''},name:'pushRight'},{name:'components',type:'select-components',intlLabel:{id:(0,_getTrad["default"])('modalForm.attributes.select-components'),defaultMessage:'Select the components'},isMultiple:true}]}]};}}};var _default2=form;exports.default=_default2;

/***/ }),

/***/ 9029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "dynamiczoneForm", ({enumerable:true,get:function get(){return _form["default"];}}));var _form=_interopRequireDefault(__webpack_require__(74068));

/***/ }),

/***/ 33571:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(6479));var _get=_interopRequireDefault(__webpack_require__(27361));var _toLower=_interopRequireDefault(__webpack_require__(7334));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _attributes=__webpack_require__(78842);var _category=__webpack_require__(25659);var _contentType=__webpack_require__(59138);var _component=__webpack_require__(17191);var _dynamicZone=__webpack_require__(9029);var _excluded=["data","type","step","extensions"],_excluded2=["extensions"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var forms={attribute:{schema:function schema(currentSchema,attributeType,reservedNames,alreadyTakenTargetContentTypeAttributes,options,extensions){var attributes=(0,_get["default"])(currentSchema,['schema','attributes'],[]);var usedAttributeNames=attributes.filter(function(_ref){var name=_ref.name;return name!==options.initialData.name;}).map(function(_ref2){var name=_ref2.name;return name;});try{var attributeShape=_attributes.attributeTypes[attributeType](usedAttributeNames,reservedNames.attributes,alreadyTakenTargetContentTypeAttributes,options);return extensions.makeValidator(['attribute',attributeType],attributeShape,usedAttributeNames,reservedNames.attributes,alreadyTakenTargetContentTypeAttributes,options);}catch(err){console.error('Error yup build schema',err);return _attributes.attributeTypes["default"](usedAttributeNames,reservedNames.attributes);}},form:{advanced:function advanced(_ref3){var data=_ref3.data,type=_ref3.type,step=_ref3.step,extensions=_ref3.extensions,rest=(0,_objectWithoutProperties2["default"])(_ref3,_excluded);try{var baseForm=_attributes.attributesForm.advanced[type](data,step).sections;var itemsToAdd=extensions.getAdvancedForm(['attribute',type],_objectSpread({data:data,type:type,step:step},rest));var sections=baseForm.reduce(function(acc,current){if(current.sectionTitle===null){acc.push(current);}else{acc.push(_objectSpread(_objectSpread({},current),{},{items:[].concat((0,_toConsumableArray2["default"])(current.items),(0,_toConsumableArray2["default"])(itemsToAdd))}));}return acc;},[]);// IF we want a dedicated section for the plugins
// const sections = [
//   ...baseForm,
//   {
//     sectionTitle: { id: 'Zone pour plugins', defaultMessage: 'Zone pour plugins' },
//     items: itemsToAdd,
//   },
// ];
return{sections:sections};}catch(err){console.error(err);return{sections:[]};}},base:function base(_ref4){var data=_ref4.data,type=_ref4.type,step=_ref4.step,attributes=_ref4.attributes;try{return _attributes.attributesForm.base[type](data,step,attributes);}catch(err){return _attributes.commonBaseForm;}}}},contentType:{schema:function schema(alreadyTakenNames,isEditing,ctUid,reservedNames,extensions,contentTypes){var singularNames=Object.values(contentTypes).map(function(contentType){return contentType.schema.singularName;});var pluralNames=Object.values(contentTypes).map(function(contentType){return contentType.schema.pluralNames;});var takenNames=isEditing?alreadyTakenNames.filter(function(uid){return uid!==ctUid;}):alreadyTakenNames;var takenSingularNames=isEditing?singularNames.filter(function(singName){var currentSingularName=(0,_get["default"])(contentTypes,[ctUid,'schema','singularName'],'');return currentSingularName!==singName;}):singularNames;var takenPluralNames=isEditing?pluralNames.filter(function(pluralName){var currentPluralName=(0,_get["default"])(contentTypes,[ctUid,'schema','pluralName'],'');return currentPluralName!==pluralName;}):pluralNames;var contentTypeShape=(0,_contentType.createContentTypeSchema)(takenNames,reservedNames.models,takenSingularNames,takenPluralNames);// FIXME
return extensions.makeValidator(['contentType'],contentTypeShape,takenNames,reservedNames.models,takenSingularNames,takenPluralNames);},form:{base:function base(_ref5){var actionType=_ref5.actionType;if(actionType==='create'){return _contentType.contentTypeForm.base.create();}return _contentType.contentTypeForm.base.edit();},advanced:function advanced(_ref6){var extensions=_ref6.extensions,rest=(0,_objectWithoutProperties2["default"])(_ref6,_excluded2);var baseForm=_contentType.contentTypeForm.advanced["default"](rest).sections;var itemsToAdd=extensions.getAdvancedForm(['contentType']);return{sections:[].concat((0,_toConsumableArray2["default"])(baseForm),[{sectionTitle:{id:(0,_getTrad["default"])('form.attribute.item.settings.name'),defaultMessage:'Settings'},items:itemsToAdd}])};}}},component:{schema:function schema(alreadyTakenAttributes,componentCategory,reservedNames){var isEditing=arguments.length>3&&arguments[3]!==undefined?arguments[3]:false;var compoUid=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var takenNames=isEditing?alreadyTakenAttributes.filter(function(uid){return uid!==compoUid;}):alreadyTakenAttributes;return(0,_component.createComponentSchema)(takenNames,reservedNames.models,componentCategory);},form:{advanced:function advanced(){return{sections:_component.componentForm.advanced()};},base:function base(){return{sections:_component.componentForm.base()};}}},addComponentToDynamicZone:{form:{advanced:function advanced(){return _dynamicZone.dynamiczoneForm.advanced["default"]();},base:function base(_ref7){var data=_ref7.data;var isCreatingComponent=(0,_get["default"])(data,'createComponent',false);if(isCreatingComponent){return _dynamicZone.dynamiczoneForm.base.createComponent();}return _dynamicZone.dynamiczoneForm.base["default"]();}}},editCategory:{schema:function schema(allCategories,initialData){var allowedCategories=allCategories.filter(function(cat){return cat!==initialData.name;}).map(function(cat){return(0,_toLower["default"])(cat);});return(0,_category.createCategorySchema)(allowedCategories);},form:{advanced:function advanced(){return{sections:[]};},base:function base(){return _category.categoryForm.base;}}}};var _default=forms;exports.default=_default;

/***/ }),

/***/ 24238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(6479));var _regenerator=_interopRequireDefault(__webpack_require__(87757));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__(48926));var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _react=_interopRequireWildcard(__webpack_require__(67294));var _helperPlugin=__webpack_require__(68547);var _reactIntl=__webpack_require__(97132);var _reactRouterDom=__webpack_require__(39711);var _get2=_interopRequireDefault(__webpack_require__(27361));var _has=_interopRequireDefault(__webpack_require__(18721));var _set=_interopRequireDefault(__webpack_require__(36968));var _toLower=_interopRequireDefault(__webpack_require__(7334));var _upperFirst=_interopRequireDefault(__webpack_require__(11700));var _reactRedux=__webpack_require__(37424);var _Box=__webpack_require__(5493);var _Button=__webpack_require__(19408);var _Divider=__webpack_require__(14276);var _ModalLayout=__webpack_require__(75146);var _Typography=__webpack_require__(49425);var _Tabs=__webpack_require__(11402);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _useFormModalNavigation=_interopRequireDefault(__webpack_require__(51528));var _AllowedTypesSelect=_interopRequireDefault(__webpack_require__(72711));var _AttributeOptions=_interopRequireDefault(__webpack_require__(49663));var _DraftAndPublishToggle=_interopRequireDefault(__webpack_require__(62498));var _FormModalHeader=_interopRequireDefault(__webpack_require__(65431));var _FormModalEndActions=_interopRequireDefault(__webpack_require__(52147));var _BooleanDefaultValueSelect=_interopRequireDefault(__webpack_require__(77691));var _BooleanRadioGroup=_interopRequireDefault(__webpack_require__(21047));var _CheckboxWithNumberField=_interopRequireDefault(__webpack_require__(71149));var _CustomRadioGroup=_interopRequireDefault(__webpack_require__(36178));var _ContentTypeRadioGroup=_interopRequireDefault(__webpack_require__(25081));var _ComponentIconPicker=_interopRequireDefault(__webpack_require__(5213));var _Relation=_interopRequireDefault(__webpack_require__(92824));var _PluralName=_interopRequireDefault(__webpack_require__(61669));var _SelectCategory=_interopRequireDefault(__webpack_require__(59892));var _SelectComponent=_interopRequireDefault(__webpack_require__(86718));var _SelectComponents=_interopRequireDefault(__webpack_require__(75845));var _SelectDateType=_interopRequireDefault(__webpack_require__(22992));var _SelectNumber=_interopRequireDefault(__webpack_require__(81825));var _SingularName=_interopRequireDefault(__webpack_require__(86017));var _TabForm=_interopRequireDefault(__webpack_require__(90756));var _TextareaEnum=_interopRequireDefault(__webpack_require__(92557));var _findAttribute=_interopRequireDefault(__webpack_require__(96876));var _utils=__webpack_require__(48008);var _utils2=__webpack_require__(98200);var _forms=_interopRequireDefault(__webpack_require__(33571));var _createUid=__webpack_require__(28390);var _selectors=_interopRequireDefault(__webpack_require__(65752));var _constants=__webpack_require__(97537);var _excluded=["name","value","type"],_excluded2=["category"],_excluded3=["category","type"],_excluded4=["category","type"];function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}/* eslint-disable indent */ /* eslint-disable react/no-array-index-key */var FormModal=function FormModal(){var _useFormModalNavigati=(0,_useFormModalNavigation["default"])(),onCloseModal=_useFormModalNavigati.onCloseModal,onNavigateToChooseAttributeModal=_useFormModalNavigati.onNavigateToChooseAttributeModal,onNavigateToAddCompoToDZModal=_useFormModalNavigati.onNavigateToAddCompoToDZModal,onNavigateToCreateComponentStep2=_useFormModalNavigati.onNavigateToCreateComponentStep2,actionType=_useFormModalNavigati.actionType,attributeName=_useFormModalNavigati.attributeName,attributeType=_useFormModalNavigati.attributeType,categoryName=_useFormModalNavigati.categoryName,dynamicZoneTarget=_useFormModalNavigati.dynamicZoneTarget,forTarget=_useFormModalNavigati.forTarget,modalType=_useFormModalNavigati.modalType,isOpen=_useFormModalNavigati.isOpen,kind=_useFormModalNavigati.kind,step=_useFormModalNavigati.step,targetUid=_useFormModalNavigati.targetUid;var tabGroupRef=(0,_react.useRef)();var formModalSelector=(0,_react.useMemo)(_selectors["default"],[]);var dispatch=(0,_reactRedux.useDispatch)();var toggleNotification=(0,_helperPlugin.useNotification)();var reducerState=(0,_reactRedux.useSelector)(function(state){return formModalSelector(state);},_reactRedux.shallowEqual);var _useHistory=(0,_reactRouterDom.useHistory)(),push=_useHistory.push;var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useStrapiApp=(0,_helperPlugin.useStrapiApp)(),getPlugin=_useStrapiApp.getPlugin;var ctbPlugin=getPlugin(_pluginId["default"]);var ctbFormsAPI=ctbPlugin.apis.forms;var inputsFromPlugins=ctbFormsAPI.components.inputs;var _useDataManager=(0,_useDataManager2["default"])(),addAttribute=_useDataManager.addAttribute,addCreatedComponentToDynamicZone=_useDataManager.addCreatedComponentToDynamicZone,allComponentsCategories=_useDataManager.allComponentsCategories,changeDynamicZoneComponents=_useDataManager.changeDynamicZoneComponents,contentTypes=_useDataManager.contentTypes,components=_useDataManager.components,createSchema=_useDataManager.createSchema,deleteCategory=_useDataManager.deleteCategory,deleteData=_useDataManager.deleteData,editCategory=_useDataManager.editCategory,submitData=_useDataManager.submitData,allDataSchema=_useDataManager.modifiedData,nestedComponents=_useDataManager.nestedComponents,setModifiedData=_useDataManager.setModifiedData,sortedContentTypesList=_useDataManager.sortedContentTypesList,updateSchema=_useDataManager.updateSchema,reservedNames=_useDataManager.reservedNames;var componentToCreate=reducerState.componentToCreate,formErrors=reducerState.formErrors,initialData=reducerState.initialData,isCreatingComponentWhileAddingAField=reducerState.isCreatingComponentWhileAddingAField,modifiedData=reducerState.modifiedData;var pathToSchema=forTarget==='contentType'||forTarget==='component'?[forTarget]:[forTarget,targetUid];(0,_react.useEffect)(function(){if(isOpen){var collectionTypesForRelation=sortedContentTypesList.filter(_utils.isAllowedContentTypesForRelations);// Reset all the modification when opening the edit category modal
if(modalType==='editCategory'){setModifiedData();}if(actionType==='edit'&&modalType==='attribute'&&forTarget==='contentType'){trackUsage('willEditFieldOfContentType');}var pathToAttributes=[].concat(pathToSchema,['schema','attributes']);// Case:
// the user opens the modal chooseAttributes
// selects dynamic zone => set the field name
// then goes to step 1 (the modal is addComponentToDynamicZone) and finally reloads the app.
// In this particular if the user tries to add components to the zone it will pop an error since the dz is unknown
var foundDynamicZoneTarget=(0,_findAttribute["default"])((0,_get2["default"])(allDataSchema,pathToAttributes,[]),dynamicZoneTarget)||null;// Edit category
if(modalType==='editCategory'&&actionType==='edit'){dispatch({type:_constants.SET_DATA_TO_EDIT,modalType:modalType,actionType:actionType,data:{name:categoryName}});}// Create content type we need to add the default option draftAndPublish
if(modalType==='contentType'&&actionType==='create'){dispatch({type:_constants.SET_DATA_TO_EDIT,modalType:modalType,actionType:actionType,data:{draftAndPublish:true},pluginOptions:{}});}// Edit content type
if(modalType==='contentType'&&actionType==='edit'){var _get=(0,_get2["default"])(allDataSchema,[].concat(pathToSchema,['schema']),{displayName:null,pluginOptions:{},singularName:null,pluralName:null}),displayName=_get.displayName,draftAndPublish=_get.draftAndPublish,_kind=_get.kind,pluginOptions=_get.pluginOptions,pluralName=_get.pluralName,singularName=_get.singularName;dispatch({type:_constants.SET_DATA_TO_EDIT,actionType:actionType,modalType:modalType,data:{displayName:displayName,draftAndPublish:draftAndPublish,kind:_kind,pluginOptions:pluginOptions,pluralName:pluralName,singularName:singularName}});}// Edit component
if(modalType==='component'&&actionType==='edit'){var data=(0,_get2["default"])(allDataSchema,pathToSchema,{});dispatch({type:_constants.SET_DATA_TO_EDIT,actionType:actionType,modalType:modalType,data:{displayName:data.schema.displayName,category:data.category,icon:data.schema.icon}});}// Special case for the dynamic zone
if(modalType==='addComponentToDynamicZone'&&actionType==='edit'){var attributeToEdit=_objectSpread(_objectSpread({},foundDynamicZoneTarget),{},{// We filter the available components
// Because this modal is only used for adding components
components:[],name:dynamicZoneTarget,createComponent:false,componentToCreate:{type:'component'}});dispatch({type:_constants.SET_DYNAMIC_ZONE_DATA_SCHEMA,attributeToEdit:attributeToEdit});}// Set the predefined data structure to create an attribute
if(attributeType){var attributeToEditNotFormatted=(0,_findAttribute["default"])((0,_get2["default"])(allDataSchema,pathToAttributes,[]),attributeName);var _attributeToEdit=_objectSpread(_objectSpread({},attributeToEditNotFormatted),{},{name:attributeName});// We need to set the repeatable key to false when editing a component
// The API doesn't send this info
if(attributeType==='component'&&actionType==='edit'){if(!_attributeToEdit.repeatable){(0,_set["default"])(_attributeToEdit,'repeatable',false);}}dispatch({type:_constants.SET_ATTRIBUTE_DATA_SCHEMA,attributeType:attributeType,nameToSetForRelation:(0,_get2["default"])(collectionTypesForRelation,['0','title'],'error'),targetUid:(0,_get2["default"])(collectionTypesForRelation,['0','uid'],'error'),isEditing:actionType==='edit',modifiedDataToSetForEditing:_attributeToEdit,step:step,forTarget:forTarget});}}else{dispatch({type:_constants.RESET_PROPS});}// eslint-disable-next-line react-hooks/exhaustive-deps
},[actionType,attributeName,attributeType,categoryName,dynamicZoneTarget,forTarget,isOpen,modalType]);// FIXME rename this constant
var isCreatingContentType=modalType==='contentType';var isCreatingComponent=modalType==='component';var isCreatingAttribute=modalType==='attribute';var isComponentAttribute=attributeType==='component'&&isCreatingAttribute;var isCreating=actionType==='create';var isCreatingComponentFromAView=(0,_get2["default"])(modifiedData,'createComponent',false)||isCreatingComponentWhileAddingAField;var isInFirstComponentStep=step==='1';var isEditingCategory=modalType==='editCategory';var isPickingAttribute=modalType==='chooseAttribute';var uid=(0,_createUid.createUid)(modifiedData.displayName||'');var attributes=(0,_get2["default"])(allDataSchema,[].concat(pathToSchema,['schema','attributes']),null);var checkFormValidity=/*#__PURE__*/function(){var _ref=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(){var schema,dataToValidate,type,alreadyTakenTargetContentTypeAttributes,targetContentTypeUID,targetContentTypeAttributes;return _regenerator["default"].wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:dataToValidate=isCreatingComponentFromAView&&step==='1'?(0,_get2["default"])(modifiedData,'componentToCreate',{}):modifiedData;// Check form validity for content type
if(!isCreatingContentType){_context.next=5;break;}schema=_forms["default"].contentType.schema(Object.keys(contentTypes),actionType==='edit',// currentUID
(0,_get2["default"])(allDataSchema,[].concat(pathToSchema,['uid']),null),reservedNames,ctbFormsAPI,contentTypes);// Check form validity for component
// This is happening when the user click on the link from the left menu
_context.next=29;break;case 5:if(!isCreatingComponent){_context.next=9;break;}schema=_forms["default"].component.schema(Object.keys(components),modifiedData.category||'',reservedNames,actionType==='edit',(0,_get2["default"])(allDataSchema,[].concat(pathToSchema,['uid']),null),ctbFormsAPI);// Check for validity for creating a component
// This is happening when the user creates a component "on the fly"
// Since we temporarily store the component info in another object
// The data is set in the componentToCreate key
_context.next=29;break;case 9:if(!(isComponentAttribute&&isCreatingComponentFromAView&&isInFirstComponentStep)){_context.next=13;break;}schema=_forms["default"].component.schema(Object.keys(components),(0,_get2["default"])(modifiedData,'componentToCreate.category',''),reservedNames,ctbFormsAPI);// Check form validity for creating a 'common attribute'
// We need to make sure that it is independent from the step
_context.next=29;break;case 13:if(!(isCreatingAttribute&&!isInFirstComponentStep)){_context.next=20;break;}type=attributeType==='relation'?'relation':modifiedData.type;alreadyTakenTargetContentTypeAttributes=[];if(type==='relation'){targetContentTypeUID=(0,_get2["default"])(modifiedData,['target'],null);targetContentTypeAttributes=(0,_get2["default"])(contentTypes,[targetContentTypeUID,'schema','attributes'],[]);// Create an array with all the targetContentType attributes name
// in order to prevent the user from creating a relation with a targetAttribute
// that may exist in the other content type
alreadyTakenTargetContentTypeAttributes=targetContentTypeAttributes.filter(function(_ref2){var attrName=_ref2.name;// Keep all the target content type attributes when creating a relation
if(actionType!=='edit'){return true;}// Remove the already created one when editing
return attrName!==initialData.targetAttribute;});}schema=_forms["default"].attribute.schema((0,_get2["default"])(allDataSchema,pathToSchema,{}),type,reservedNames,alreadyTakenTargetContentTypeAttributes,{modifiedData:modifiedData,initialData:initialData},ctbFormsAPI);_context.next=29;break;case 20:if(!isEditingCategory){_context.next=24;break;}schema=_forms["default"].editCategory.schema(allComponentsCategories,initialData,ctbFormsAPI);_context.next=29;break;case 24:if(!(isInFirstComponentStep&&isCreatingComponentFromAView)){_context.next=28;break;}schema=_forms["default"].component.schema(Object.keys(components),(0,_get2["default"])(modifiedData,'componentToCreate.category',''),reservedNames,ctbFormsAPI);_context.next=29;break;case 28:return _context.abrupt("return");case 29:_context.next=31;return schema.validate(dataToValidate,{abortEarly:false});case 31:case"end":return _context.stop();}}},_callee);}));return function checkFormValidity(){return _ref.apply(this,arguments);};}();var handleChange=(0,_react.useCallback)(function(_ref3){var _ref3$target=_ref3.target,name=_ref3$target.name,value=_ref3$target.value,type=_ref3$target.type,rest=(0,_objectWithoutProperties2["default"])(_ref3$target,_excluded);var namesThatCanResetToNullValue=['enumName','max','min','maxLength','minLength','regex','default'];var val;if(namesThatCanResetToNullValue.includes(name)&&value===''){val=null;}else{val=value;}var clonedErrors=Object.assign({},formErrors);// Reset min error when modifying the max
if(name==='max'){delete clonedErrors.min;}// Same here
if(name==='maxLength'){delete clonedErrors.minLength;}// Since the onBlur is deactivated we remove the errors directly when changing an input
delete clonedErrors[name];dispatch({type:_constants.SET_ERRORS,errors:clonedErrors});dispatch(_objectSpread({type:_constants.ON_CHANGE,keys:name.split('.'),value:val},rest));},[dispatch,formErrors]);var handleSubmit=/*#__PURE__*/function(){var _ref4=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(e){var shouldContinue,ctTargetUid,componentUid,category,rest,isDynamicZoneAttribute,_category,type,_rest,_componentUid,_modifiedData$compone,_category2,_type,_rest2,_componentUid2,errors,_args2=arguments;return _regenerator["default"].wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:shouldContinue=_args2.length>1&&_args2[1]!==undefined?_args2[1]:isCreating;e.preventDefault();_context2.prev=2;_context2.next=5;return checkFormValidity();case 5:sendButtonAddMoreFieldEvent(shouldContinue);ctTargetUid=forTarget==='components'?targetUid:uid;if(!isCreatingContentType){_context2.next=18;break;}if(!isCreating){_context2.next=14;break;}createSchema(_objectSpread(_objectSpread({},modifiedData),{},{kind:kind}),modalType,uid);// Redirect the user to the created content type
push({pathname:"/plugins/".concat(_pluginId["default"],"/content-types/").concat(uid)});// Navigate to the choose attribute modal
onNavigateToChooseAttributeModal({forTarget:forTarget,targetUid:ctTargetUid});_context2.next=16;break;case 14:// We cannot switch from collection type to single when the modal is making relations other than oneWay or manyWay
if((0,_utils2.canEditContentType)(allDataSchema,modifiedData)){onCloseModal();submitData(modifiedData);}else{toggleNotification({type:'warning',message:{id:'notification.contentType.relations.conflict'}});}return _context2.abrupt("return");case 16:_context2.next=75;break;case 18:if(!(modalType==='component')){_context2.next=32;break;}if(!isCreating){_context2.next=27;break;}// Create the component schema
componentUid=(0,_createUid.createComponentUid)(modifiedData.displayName,modifiedData.category);category=modifiedData.category,rest=(0,_objectWithoutProperties2["default"])(modifiedData,_excluded2);createSchema(rest,'component',componentUid,category);// Redirect the user to the created component
push({pathname:"/plugins/".concat(_pluginId["default"],"/component-categories/").concat(category,"/").concat(componentUid)});// Navigate to the choose attribute modal
onNavigateToChooseAttributeModal({forTarget:forTarget,targetUid:componentUid});_context2.next=30;break;case 27:updateSchema(modifiedData,modalType,targetUid);// Close the modal
onCloseModal();return _context2.abrupt("return");case 30:_context2.next=75;break;case 32:if(!isEditingCategory){_context2.next=40;break;}if(!((0,_toLower["default"])(initialData.name)===(0,_toLower["default"])(modifiedData.name))){_context2.next=36;break;}// Close the modal
onCloseModal();return _context2.abrupt("return");case 36:editCategory(initialData.name,modifiedData);return _context2.abrupt("return");case 40:if(!(isCreatingAttribute&&!isCreatingComponentFromAView)){_context2.next=58;break;}isDynamicZoneAttribute=attributeType==='dynamiczone';// The user is creating a DZ (he had entered the name of the dz)
if(!isDynamicZoneAttribute){_context2.next=46;break;}addAttribute(modifiedData,forTarget,targetUid,actionType==='edit',initialData);// Adding a component to a dynamiczone is not the same logic as creating a simple field
// so the search is different
if(isCreating){// Step 1 of adding a component to a DZ, the user has the option to create a component
dispatch({type:_constants.RESET_PROPS_AND_SET_THE_FORM_FOR_ADDING_A_COMPO_TO_A_DZ});tabGroupRef.current._handlers.setSelectedTabIndex(0);onNavigateToAddCompoToDZModal({dynamicZoneTarget:modifiedData.name});}else{onCloseModal();}return _context2.abrupt("return");case 46:if(isComponentAttribute){_context2.next=50;break;}addAttribute(modifiedData,forTarget,targetUid,actionType==='edit',initialData);if(shouldContinue){onNavigateToChooseAttributeModal({forTarget:forTarget,targetUid:ctTargetUid});}else{onCloseModal();}return _context2.abrupt("return");case 50:if(!isInFirstComponentStep){_context2.next=54;break;}// Navigate the user to step 2
onNavigateToCreateComponentStep2();// Clear the reducer and prepare the modified data
// This way we don't have to add some logic to re-run the useEffect
// The first step is either needed to create a component or just to navigate
// To the modal for adding a "common field"
dispatch({type:_constants.RESET_PROPS_AND_SET_FORM_FOR_ADDING_AN_EXISTING_COMPO,forTarget:forTarget});// We don't want all the props to be reset
return _context2.abrupt("return");case 54:addAttribute(modifiedData,forTarget,targetUid,// This change the dispatched type
// either 'EDIT_ATTRIBUTE' or 'ADD_ATTRIBUTE' in the DataManagerProvider
actionType==='edit',// This is for the edit part
initialData,// Passing true will add the component to the components object
// This way we can add fields to the added component (if it wasn't there already)
true);if(shouldContinue){onNavigateToChooseAttributeModal({forTarget:forTarget,targetUid:targetUid});}else{onCloseModal();}// We don't need to end the loop here we want the reducer to be reinitialised
// Logic for creating a component without clicking on the link in
// the left menu
// We need to separate the logic otherwise the component would be created
// even though the user didn't set any field
// We need to prevent the component from being created if the user closes the modal at step 2 without any submission
_context2.next=75;break;case 58:if(!(isCreatingAttribute&&isCreatingComponentFromAView)){_context2.next=73;break;}if(!isInFirstComponentStep){_context2.next=64;break;}// Here the search could be refactored since it is the same as the case from above
// Navigate the user to step 2
trackUsage('willCreateComponentFromAttributesModal');// Here we clear the reducer state but we also keep the created component
// If we were to create the component before
dispatch({type:_constants.RESET_PROPS_AND_SAVE_CURRENT_DATA,forTarget:forTarget});onNavigateToCreateComponentStep2();// Terminate because we don't want the reducer to be entirely reset
return _context2.abrupt("return");case 64:// We are destructuring because the modifiedData object doesn't have the appropriate format to create a field
_category=componentToCreate.category,type=componentToCreate.type,_rest=(0,_objectWithoutProperties2["default"])(componentToCreate,_excluded3);// Create a the component temp UID
// This could be refactored but I think it's more understandable to separate the logic
_componentUid=(0,_createUid.createComponentUid)(componentToCreate.displayName,_category);// Create the component first and add it to the components data
createSchema(// Component data
_rest,// Type will always be component
// It will dispatch the CREATE_COMPONENT_SCHEMA action
// So the component will be added in the main components object
// This might not be needed if we don't allow navigation between entries while editing
type,_componentUid,_category,// This will add the created component in the datamanager modifiedData components key
// Like explained above we will be able to modify the created component structure
isCreatingComponentFromAView);// Add the field to the schema
addAttribute(modifiedData,forTarget,targetUid,false);dispatch({type:_constants.RESET_PROPS});// Open modal attribute for adding attr to component
if(shouldContinue){onNavigateToChooseAttributeModal({forTarget:'components',targetUid:_componentUid});}else{onCloseModal();}return _context2.abrupt("return");case 73:// The modal is addComponentToDynamicZone
if(isInFirstComponentStep){if(isCreatingComponentFromAView){_modifiedData$compone=modifiedData.componentToCreate,_category2=_modifiedData$compone.category,_type=_modifiedData$compone.type,_rest2=(0,_objectWithoutProperties2["default"])(_modifiedData$compone,_excluded4);_componentUid2=(0,_createUid.createComponentUid)(modifiedData.componentToCreate.displayName,_category2);// Create the component first and add it to the components data
createSchema(// Component data
_rest2,// Type will always be component
// It will dispatch the CREATE_COMPONENT_SCHEMA action
// So the component will be added in the main components object
// This might not be needed if we don't allow navigation between entries while editing
_type,_componentUid2,_category2,// This will add the created component in the datamanager modifiedData components key
// Like explained above we will be able to modify the created component structure
isCreatingComponentFromAView);// Add the created component to the DZ
// We don't want to remove the old ones
addCreatedComponentToDynamicZone(dynamicZoneTarget,[_componentUid2]);// The Dynamic Zone and the component is created
// Open the modal to add fields to the created component
onNavigateToChooseAttributeModal({forTarget:'components',targetUid:_componentUid2});}else{// Add the components to the DZ
changeDynamicZoneComponents(dynamicZoneTarget,modifiedData.components);onCloseModal();}}else{console.error('This case is not handled');}return _context2.abrupt("return");case 75:dispatch({type:_constants.RESET_PROPS});_context2.next=83;break;case 78:_context2.prev=78;_context2.t0=_context2["catch"](2);errors=(0,_helperPlugin.getYupInnerErrors)(_context2.t0);console.log({err:_context2.t0,errors:errors});dispatch({type:_constants.SET_ERRORS,errors:errors});case 83:case"end":return _context2.stop();}}},_callee2,null,[[2,78]]);}));return function handleSubmit(_x){return _ref4.apply(this,arguments);};}();var handleClosed=function handleClosed(){// Close the modal
onCloseModal();// Reset the reducer
dispatch({type:_constants.RESET_PROPS});};var sendAdvancedTabEvent=function sendAdvancedTabEvent(tab){if(tab!=='advanced'){return;}if(isCreatingContentType){trackUsage('didSelectContentTypeSettings');return;}if(forTarget==='contentType'){trackUsage('didSelectContentTypeFieldSettings');}};var sendButtonAddMoreFieldEvent=function sendButtonAddMoreFieldEvent(shouldContinue){if(modalType==='attribute'&&forTarget==='contentType'&&attributeType!=='dynamiczone'&&shouldContinue){trackUsage('willAddMoreFieldToContentType');}};var shouldDisableAdvancedTab=function shouldDisableAdvancedTab(){if(modalType==='editCategory'){return true;}if(modalType==='component'){return true;}if((0,_has["default"])(modifiedData,'createComponent')){return true;}return false;};// Display data for the attributes picker modal
var displayedAttributes=(0,_utils2.getAttributesToDisplay)(forTarget,targetUid,// We need the nested components so we know when to remove the component option
nestedComponents);if(!isOpen){return null;}if(!modalType){return null;}var formToDisplay=(0,_get2["default"])(_forms["default"],[modalType,'form'],{advanced:function advanced(){return{sections:[]};},base:function base(){return{sections:[]};}});var isAddingAComponentToAnotherComponent=forTarget==='components'||forTarget==='component';var genericInputProps={customInputs:_objectSpread({'allowed-types-select':_AllowedTypesSelect["default"],'boolean-radio-group':_BooleanRadioGroup["default"],'checkbox-with-number-field':_CheckboxWithNumberField["default"],'component-icon-picker':_ComponentIconPicker["default"],'content-type-radio-group':_ContentTypeRadioGroup["default"],'radio-group':_CustomRadioGroup["default"],relation:_Relation["default"],'select-category':_SelectCategory["default"],'select-component':_SelectComponent["default"],'select-components':_SelectComponents["default"],'select-default-boolean':_BooleanDefaultValueSelect["default"],'select-number':_SelectNumber["default"],'select-date':_SelectDateType["default"],'toggle-draft-publish':_DraftAndPublishToggle["default"],'text-plural':_PluralName["default"],'text-singular':_SingularName["default"],'textarea-enum':_TextareaEnum["default"]},inputsFromPlugins),componentToCreate:componentToCreate,dynamicZoneTarget:dynamicZoneTarget,formErrors:formErrors,isAddingAComponentToAnotherComponent:isAddingAComponentToAnotherComponent,isCreatingComponentWhileAddingAField:isCreatingComponentWhileAddingAField,mainBoxHeader:(0,_get2["default"])(allDataSchema,[].concat(pathToSchema,['schema','displayName']),''),modifiedData:modifiedData,naturePickerType:forTarget,isCreating:isCreating,targetUid:targetUid,forTarget:forTarget};var advancedForm=formToDisplay.advanced({data:modifiedData,type:attributeType,step:step,actionType:actionType,attributes:attributes,extensions:ctbFormsAPI,forTarget:forTarget,contentTypeSchema:allDataSchema.contentType||{}}).sections;var baseForm=formToDisplay.base({data:modifiedData,type:attributeType,step:step,actionType:actionType,attributes:attributes,extensions:ctbFormsAPI,forTarget:forTarget,contentTypeSchema:allDataSchema.contentType||{}}).sections;var baseFormInputNames=(0,_utils2.getFormInputNames)(baseForm);var advancedFormInputNames=(0,_utils2.getFormInputNames)(advancedForm);var doesBaseFormHasError=Object.keys(formErrors).some(function(key){return baseFormInputNames.includes(key);});var doesAdvancedFormHasError=Object.keys(formErrors).some(function(key){return advancedFormInputNames.includes(key);});var schemaKind=(0,_get2["default"])(contentTypes,[targetUid,'schema','kind']);return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalLayout,{onClose:handleClosed,labelledBy:"title"},/*#__PURE__*/_react["default"].createElement(_FormModalHeader["default"],{actionType:actionType,attributeName:attributeName,categoryName:categoryName,contentTypeKind:kind,dynamicZoneTarget:dynamicZoneTarget,modalType:modalType,forTarget:forTarget,targetUid:targetUid,attributeType:attributeType}),isPickingAttribute&&/*#__PURE__*/_react["default"].createElement(_AttributeOptions["default"],{attributes:displayedAttributes,forTarget:forTarget,kind:schemaKind||'collectionType'}),!isPickingAttribute&&/*#__PURE__*/_react["default"].createElement("form",{onSubmit:handleSubmit},/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalBody,null,/*#__PURE__*/_react["default"].createElement(_Tabs.TabGroup,{label:"todo",id:"tabs",variant:"simple",ref:tabGroupRef,onTabChange:function onTabChange(selectedTab){if(selectedTab===1){sendAdvancedTabEvent('advanced');}}},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{justifyContent:"space-between"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{as:"h2",variant:"beta"},formatMessage({id:(0,_utils2.getModalTitleSubHeader)({actionType:actionType,forTarget:forTarget,kind:kind,step:step,modalType:modalType}),defaultMessage:'Add new field'},{type:(0,_upperFirst["default"])(formatMessage({id:(0,_utils.getTrad)("attribute.".concat(attributeType))})),name:(0,_upperFirst["default"])(attributeName),step:step})),/*#__PURE__*/_react["default"].createElement(_Tabs.Tabs,null,/*#__PURE__*/_react["default"].createElement(_Tabs.Tab,{hasError:doesBaseFormHasError},formatMessage({id:(0,_utils.getTrad)('popUpForm.navContainer.base'),defaultMessage:'Base settings'})),/*#__PURE__*/_react["default"].createElement(_Tabs.Tab,{hasError:doesAdvancedFormHasError// TODO put aria-disabled
,disabled:shouldDisableAdvancedTab()},formatMessage({id:(0,_utils.getTrad)('popUpForm.navContainer.advanced'),defaultMessage:'Advanced settings'})))),/*#__PURE__*/_react["default"].createElement(_Divider.Divider,null),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingTop:6},/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanels,null,/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:6},/*#__PURE__*/_react["default"].createElement(_TabForm["default"],{form:baseForm,formErrors:formErrors,genericInputProps:genericInputProps,modifiedData:modifiedData,onChange:handleChange}))),/*#__PURE__*/_react["default"].createElement(_Tabs.TabPanel,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:6},/*#__PURE__*/_react["default"].createElement(_TabForm["default"],{form:advancedForm,formErrors:formErrors,genericInputProps:genericInputProps,modifiedData:modifiedData,onChange:handleChange}))))))),/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalFooter,{endActions:/*#__PURE__*/_react["default"].createElement(_FormModalEndActions["default"],{deleteCategory:deleteCategory,deleteContentType:deleteData,deleteComponent:deleteData,categoryName:initialData.name,isAttributeModal:modalType==='attribute',isComponentToDzModal:modalType==='addComponentToDynamicZone',isComponentAttribute:attributeType==='component',isComponentModal:modalType==='component',isContentTypeModal:modalType==='contentType',isCreatingComponent:actionType==='create',isCreatingDz:actionType==='create',isCreatingComponentAttribute:modifiedData.createComponent||false,isCreatingComponentInDz:modifiedData.createComponent||false,isCreatingComponentWhileAddingAField:isCreatingComponentWhileAddingAField,isCreatingContentType:actionType==='create',isEditingAttribute:actionType==='edit',isDzAttribute:attributeType==='dynamiczone',isEditingCategory:modalType==='editCategory',isInFirstComponentStep:step==='1',onSubmitAddComponentAttribute:handleSubmit,onSubmitAddComponentToDz:handleSubmit,onSubmitCreateComponent:handleSubmit,onSubmitCreateContentType:handleSubmit,onSubmitCreateDz:handleSubmit,onSubmitEditAttribute:handleSubmit,onSubmitEditCategory:handleSubmit,onSubmitEditComponent:handleSubmit,onSubmitEditContentType:handleSubmit,onSubmitEditDz:handleSubmit}),startActions:/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"tertiary",onClick:handleClosed},formatMessage({id:'app.components.Button.cancel',defaultMessage:'Cancel'}))}))));};var _default=FormModal;exports.default=_default;

/***/ }),

/***/ 65752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.formModalDomain=exports.default=void 0;var _reselect=__webpack_require__(42279);var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _reducer=__webpack_require__(703);/**
 * Direct selector to the formModal state domain
 */var formModalDomain=function formModalDomain(){return function(state){return state["".concat(_pluginId["default"],"_formModal")]||_reducer.initialState;};};/**
 * Other specific selectors
 */ /**
 * Default selector used by formModal
 */exports.formModalDomain=formModalDomain;var makeSelectFormModal=function makeSelectFormModal(){return(0,_reselect.createSelector)(formModalDomain(),function(substate){return substate;});};var _default=makeSelectFormModal;exports.default=_default;

/***/ }),

/***/ 47677:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _get=_interopRequireDefault(__webpack_require__(27361));var _getRelationType=_interopRequireDefault(__webpack_require__(53518));var canEditContentType=function canEditContentType(data,modifiedData){var kind=(0,_get["default"])(data,['contentType','schema','kind'],'');// if kind isn't modified or content type is a single type, there is no need to check attributes.
if(kind==='singleType'||kind===modifiedData.kind){return true;}var contentTypeAttributes=(0,_get["default"])(data,['contentType','schema','attributes'],[]);var relationAttributes=contentTypeAttributes.filter(function(_ref){var relation=_ref.relation,type=_ref.type,targetAttribute=_ref.targetAttribute;var relationType=(0,_getRelationType["default"])(relation,targetAttribute);return type==='relation'&&!['oneWay','manyWay'].includes(relationType);});return relationAttributes.length===0;};var _default=canEditContentType;exports.default=_default;

/***/ }),

/***/ 45754:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var getAttributes=function getAttributes(){var dataTarget=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var targetUid=arguments.length>1?arguments[1]:undefined;var nestedComponents=arguments.length>2?arguments[2]:undefined;var defaultAttributes=['text','email','richtext','password','number','enumeration','date','media','boolean','json','relation'];var isPickingAttributeForAContentType=dataTarget==='contentType';var isNestedInAnotherComponent=nestedComponents.includes(targetUid);var canAddComponentInAnotherComponent=!isPickingAttributeForAContentType&&!isNestedInAnotherComponent;if(isPickingAttributeForAContentType){return[[].concat(defaultAttributes,['uid']),['component','dynamiczone']];}if(canAddComponentInAnotherComponent){return[defaultAttributes,['component']];}return[defaultAttributes];};var _default=getAttributes;exports.default=_default;

/***/ }),

/***/ 76316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var getFormInputNames=function getFormInputNames(form){return form.reduce(function(acc,current){var names=current.items.reduce(function(acc,current){if(current.name){acc.push(current.name);}return acc;},[]);return[].concat((0,_toConsumableArray2["default"])(acc),(0,_toConsumableArray2["default"])(names));},[]);};var _default=getFormInputNames;exports.default=_default;

/***/ }),

/***/ 84322:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _getTrad=_interopRequireDefault(__webpack_require__(97731));var getModalTitleSubHeader=function getModalTitleSubHeader(_ref){var modalType=_ref.modalType,forTarget=_ref.forTarget,kind=_ref.kind,actionType=_ref.actionType,step=_ref.step;switch(modalType){case'chooseAttribute':return(0,_getTrad["default"])("modalForm.sub-header.chooseAttribute.".concat(forTarget.includes('component')?'component':kind||'collectionType'));case'attribute':{return(0,_getTrad["default"])("modalForm.sub-header.attribute.".concat(actionType).concat(step!=='null'&&step!==null&&actionType!=='edit'?'.step':''));}case'addComponentToDynamicZone':return(0,_getTrad["default"])('modalForm.sub-header.addComponentToDynamicZone');default:return(0,_getTrad["default"])('configurations');}};var _default=getModalTitleSubHeader;exports.default=_default;

/***/ }),

/***/ 98200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "canEditContentType", ({enumerable:true,get:function get(){return _canEditContentType["default"];}}));Object.defineProperty(exports, "getAttributesToDisplay", ({enumerable:true,get:function get(){return _getAttributesToDisplay["default"];}}));Object.defineProperty(exports, "getFormInputNames", ({enumerable:true,get:function get(){return _getFormInputNames["default"];}}));Object.defineProperty(exports, "getModalTitleSubHeader", ({enumerable:true,get:function get(){return _getModalTitleSubHeader["default"];}}));var _canEditContentType=_interopRequireDefault(__webpack_require__(47677));var _getAttributesToDisplay=_interopRequireDefault(__webpack_require__(45754));var _getModalTitleSubHeader=_interopRequireDefault(__webpack_require__(84322));var _getFormInputNames=_interopRequireDefault(__webpack_require__(76316));

/***/ }),

/***/ 52147:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Button=__webpack_require__(19408);var _Plus=_interopRequireDefault(__webpack_require__(80768));var _utils=__webpack_require__(48008);/**
 *
 * FormModalEndActions
 *
 */var FormModalEndActions=function FormModalEndActions(_ref){var categoryName=_ref.categoryName,deleteCategory=_ref.deleteCategory,deleteComponent=_ref.deleteComponent,deleteContentType=_ref.deleteContentType,isAttributeModal=_ref.isAttributeModal,isComponentAttribute=_ref.isComponentAttribute,isComponentToDzModal=_ref.isComponentToDzModal,isContentTypeModal=_ref.isContentTypeModal,isCreatingComponent=_ref.isCreatingComponent,isCreatingComponentAttribute=_ref.isCreatingComponentAttribute,isCreatingComponentInDz=_ref.isCreatingComponentInDz,isCreatingComponentWhileAddingAField=_ref.isCreatingComponentWhileAddingAField,isCreatingContentType=_ref.isCreatingContentType,isCreatingDz=_ref.isCreatingDz,isComponentModal=_ref.isComponentModal,isDzAttribute=_ref.isDzAttribute,isEditingAttribute=_ref.isEditingAttribute,isEditingCategory=_ref.isEditingCategory,isInFirstComponentStep=_ref.isInFirstComponentStep,onSubmitAddComponentAttribute=_ref.onSubmitAddComponentAttribute,onSubmitAddComponentToDz=_ref.onSubmitAddComponentToDz,onSubmitCreateContentType=_ref.onSubmitCreateContentType,onSubmitCreateComponent=_ref.onSubmitCreateComponent,onSubmitCreateDz=_ref.onSubmitCreateDz,onSubmitEditAttribute=_ref.onSubmitEditAttribute,onSubmitEditCategory=_ref.onSubmitEditCategory,onSubmitEditComponent=_ref.onSubmitEditComponent,onSubmitEditContentType=_ref.onSubmitEditContentType,onSubmitEditDz=_ref.onSubmitEditDz;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;if(isComponentToDzModal){if(isCreatingComponentInDz){return/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",type:"submit",onClick:function onClick(e){e.preventDefault();onSubmitAddComponentToDz(e,true);},startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:(0,_utils.getTrad)('form.button.add-first-field-to-created-component'),defaultMessage:'Add first field to the component'}));}return/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"default",type:"submit",onClick:function onClick(e){e.preventDefault();onSubmitAddComponentToDz(e,false);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'Finish'}));}if(isAttributeModal&&isDzAttribute&&!isCreatingDz){return/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"default",type:"submit",onClick:function onClick(e){e.preventDefault();onSubmitEditDz(e,false);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'Finish'}));}if(isAttributeModal&&isDzAttribute&&isCreatingDz){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",type:"submit",onClick:function onClick(e){e.preventDefault();onSubmitCreateDz(e,true);},startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:(0,_utils.getTrad)('form.button.add-components-to-dynamiczone'),defaultMessage:'Add components to the zone'})));}if(isAttributeModal&&isComponentAttribute){if(isInFirstComponentStep){return/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",type:"submit",onClick:function onClick(e){e.preventDefault();onSubmitAddComponentAttribute(e,true);}},isCreatingComponentAttribute?formatMessage({id:(0,_utils.getTrad)('form.button.configure-component'),defaultMessage:'Configure the component'}):formatMessage({id:(0,_utils.getTrad)('form.button.select-component'),defaultMessage:'Configure the component'}));}return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"secondary",type:"submit",onClick:function onClick(e){e.preventDefault();onSubmitAddComponentAttribute(e,true);},startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},isCreatingComponentWhileAddingAField?formatMessage({id:(0,_utils.getTrad)('form.button.add-first-field-to-created-component'),defaultMessage:'Add first field to the component'}):formatMessage({id:(0,_utils.getTrad)('form.button.add-field'),defaultMessage:'Add another field'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{variant:"default",type:"button",onClick:function onClick(e){e.preventDefault();onSubmitAddComponentAttribute(e,false);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'Finish'})));}if(isAttributeModal&&!isComponentAttribute&&!isDzAttribute){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:isEditingAttribute?'button':'submit',variant:"secondary",onClick:function onClick(e){e.preventDefault();onSubmitEditAttribute(e,true);},startIcon:/*#__PURE__*/_react["default"].createElement(_Plus["default"],null)},formatMessage({id:(0,_utils.getTrad)('form.button.add-field'),defaultMessage:'Add another field'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:isEditingAttribute?'submit':'button',variant:"default",onClick:function onClick(e){e.preventDefault();onSubmitEditAttribute(e,false);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'Finish'})));}if(isContentTypeModal){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,!isCreatingContentType&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"button",variant:"danger",onClick:function onClick(e){e.preventDefault();deleteContentType();}},formatMessage({id:(0,_utils.getTrad)('form.button.delete'),defaultMessage:'Delete'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"submit",variant:"default",onClick:function onClick(e){e.preventDefault();onSubmitEditContentType(e,false);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'Finish'}))),isCreatingContentType&&/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"submit",variant:"secondary",onClick:function onClick(e){e.preventDefault();onSubmitCreateContentType(e,true);}},formatMessage({id:(0,_utils.getTrad)('form.button.continue'),defaultMessage:'Continue'})));}if(isComponentModal){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,!isCreatingComponent&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"button",variant:"danger",onClick:function onClick(e){e.preventDefault();deleteComponent();}},formatMessage({id:(0,_utils.getTrad)('form.button.delete'),defaultMessage:'Delete'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"submit",variant:"default",onClick:function onClick(e){e.preventDefault();onSubmitEditComponent(e,false);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'Finish'}))),isCreatingComponent&&/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"submit",variant:"secondary",onClick:function onClick(e){e.preventDefault();onSubmitCreateComponent(e,true);}},formatMessage({id:(0,_utils.getTrad)('form.button.continue'),defaultMessage:'Continue'})));}if(isEditingCategory){return/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"button",variant:"danger",onClick:function onClick(e){e.preventDefault();deleteCategory(categoryName);}},formatMessage({id:(0,_utils.getTrad)('form.button.delete'),defaultMessage:'Delete'})),/*#__PURE__*/_react["default"].createElement(_Button.Button,{type:"submit",variant:"default",onClick:function onClick(e){e.preventDefault();onSubmitEditCategory(e);}},formatMessage({id:(0,_utils.getTrad)('form.button.finish'),defaultMessage:'finish'})));}return null;};FormModalEndActions.defaultProps={categoryName:null};FormModalEndActions.propTypes={categoryName:_propTypes["default"].string,deleteCategory:_propTypes["default"].func.isRequired,deleteComponent:_propTypes["default"].func.isRequired,deleteContentType:_propTypes["default"].func.isRequired,isAttributeModal:_propTypes["default"].bool.isRequired,isComponentAttribute:_propTypes["default"].bool.isRequired,isComponentModal:_propTypes["default"].bool.isRequired,isComponentToDzModal:_propTypes["default"].bool.isRequired,isContentTypeModal:_propTypes["default"].bool.isRequired,isCreatingComponent:_propTypes["default"].bool.isRequired,isCreatingComponentAttribute:_propTypes["default"].bool.isRequired,isCreatingComponentInDz:_propTypes["default"].bool.isRequired,isCreatingComponentWhileAddingAField:_propTypes["default"].bool.isRequired,isCreatingContentType:_propTypes["default"].bool.isRequired,isCreatingDz:_propTypes["default"].bool.isRequired,isDzAttribute:_propTypes["default"].bool.isRequired,isEditingAttribute:_propTypes["default"].bool.isRequired,isEditingCategory:_propTypes["default"].bool.isRequired,isInFirstComponentStep:_propTypes["default"].bool.isRequired,onSubmitAddComponentAttribute:_propTypes["default"].func.isRequired,onSubmitAddComponentToDz:_propTypes["default"].func.isRequired,onSubmitCreateContentType:_propTypes["default"].func.isRequired,onSubmitCreateComponent:_propTypes["default"].func.isRequired,onSubmitCreateDz:_propTypes["default"].func.isRequired,onSubmitEditAttribute:_propTypes["default"].func.isRequired,onSubmitEditCategory:_propTypes["default"].func.isRequired,onSubmitEditComponent:_propTypes["default"].func.isRequired,onSubmitEditContentType:_propTypes["default"].func.isRequired,onSubmitEditDz:_propTypes["default"].func.isRequired};var _default=FormModalEndActions;exports.default=_default;

/***/ }),

/***/ 65431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _upperFirst=_interopRequireDefault(__webpack_require__(11700));var _Breadcrumbs=__webpack_require__(68115);var _ModalLayout=__webpack_require__(75146);var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var _Stack=__webpack_require__(9008);var _Typography=__webpack_require__(49425);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _AttributeIcon=_interopRequireDefault(__webpack_require__(1368));/**
 *
 * FormModalHeader
 *
 */var FormModalHeader=function FormModalHeader(_ref){var _modifiedData$forTarg;var actionType=_ref.actionType,attributeName=_ref.attributeName,attributeType=_ref.attributeType,categoryName=_ref.categoryName,contentTypeKind=_ref.contentTypeKind,dynamicZoneTarget=_ref.dynamicZoneTarget,forTarget=_ref.forTarget,modalType=_ref.modalType,targetUid=_ref.targetUid;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useDataManager=(0,_useDataManager2["default"])(),modifiedData=_useDataManager.modifiedData;var icon;var headers=[];var schema=(modifiedData===null||modifiedData===void 0?void 0:(_modifiedData$forTarg=modifiedData[forTarget])===null||_modifiedData$forTarg===void 0?void 0:_modifiedData$forTarg[targetUid])||(modifiedData===null||modifiedData===void 0?void 0:modifiedData[forTarget])||null;var displayName=schema===null||schema===void 0?void 0:schema.schema.displayName;if(modalType==='contentType'){icon=contentTypeKind;}if(['component','editCategory'].includes(modalType)){icon='component';}var isCreatingMainSchema=['component','contentType'].includes(modalType);if(isCreatingMainSchema){var headerId=(0,_getTrad["default"])("modalForm.component.header-".concat(actionType));if(modalType==='contentType'){headerId=(0,_getTrad["default"])("modalForm.".concat(contentTypeKind,".header-create"));}if(actionType==='edit'){headerId=(0,_getTrad["default"])("modalForm.header-edit");}return/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,null,/*#__PURE__*/_react["default"].createElement(_Box.Box,null,/*#__PURE__*/_react["default"].createElement(_AttributeIcon["default"],{type:icon})),/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingLeft:3},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},formatMessage({id:headerId},{name:displayName})))));}headers=[{label:displayName,info:{category:(schema===null||schema===void 0?void 0:schema.category)||null,name:schema===null||schema===void 0?void 0:schema.schema.displayName}}];if(modalType==='chooseAttribute'){icon=['component','components'].includes(forTarget)?'component':schema.schema.kind;}if(modalType==='addComponentToDynamicZone'){icon='dynamiczone';headers.push({label:dynamicZoneTarget});}if(modalType==='attribute'){icon=attributeType;headers.push({label:attributeName});}if(modalType==='editCategory'){var label=formatMessage({id:(0,_getTrad["default"])('modalForm.header.categories'),defaultMessage:'Categories'});headers=[{label:label},{label:categoryName}];}var breadcrumbsLabel=headers.map(function(_ref2){var label=_ref2.label;return label;}).join(',');return/*#__PURE__*/_react["default"].createElement(_ModalLayout.ModalHeader,null,/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{horizontal:true,size:3},/*#__PURE__*/_react["default"].createElement(_AttributeIcon["default"],{type:icon}),/*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Breadcrumbs,{label:breadcrumbsLabel},headers.map(function(header,index){var _header$info;var label=(0,_upperFirst["default"])(header.label);if(!label){return null;}var key="".concat(header.label,".").concat(index);if((_header$info=header.info)!==null&&_header$info!==void 0&&_header$info.category){var content="".concat(label," (").concat((0,_upperFirst["default"])(header.info.category)," - ").concat((0,_upperFirst["default"])(header.info.name),")");return/*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Crumb,{key:key},content);}return/*#__PURE__*/_react["default"].createElement(_Breadcrumbs.Crumb,{key:key},label);}))));};FormModalHeader.defaultProps={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,contentTypeKind:null,targetUid:null};FormModalHeader.propTypes={actionType:_propTypes["default"].string,attributeName:_propTypes["default"].string,attributeType:_propTypes["default"].string,categoryName:_propTypes["default"].string,contentTypeKind:_propTypes["default"].string,dynamicZoneTarget:_propTypes["default"].string,forTarget:_propTypes["default"].oneOf(['contentType','component','components']),modalType:_propTypes["default"].string.isRequired,targetUid:_propTypes["default"].string};var _default=FormModalHeader;exports.default=_default;

/***/ }),

/***/ 39396:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.INITIAL_STATE_DATA=void 0;var INITIAL_STATE_DATA={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:false,kind:null,step:null,targetUid:null};exports.INITIAL_STATE_DATA=INITIAL_STATE_DATA;

/***/ }),

/***/ 97800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _helperPlugin=__webpack_require__(68547);var _FormModalNavigationContext=_interopRequireDefault(__webpack_require__(61361));var _constants=__webpack_require__(39396);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var FormModalNavigationProvider=function FormModalNavigationProvider(_ref){var children=_ref.children;var _useState=(0,_react.useState)(_constants.INITIAL_STATE_DATA),_useState2=(0,_slicedToArray2["default"])(_useState,2),state=_useState2[0],setFormModalNavigationState=_useState2[1];var _useTracking=(0,_helperPlugin.useTracking)(),trackUsage=_useTracking.trackUsage;var onClickSelectField=function onClickSelectField(_ref2){var attributeType=_ref2.attributeType,step=_ref2.step;if(state.forTarget==='contentType'){trackUsage('didSelectContentTypeFieldType',{type:attributeType});}setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{actionType:'create',modalType:'attribute',step:step,attributeType:attributeType});});};var onOpenModalAddComponentsToDZ=function onOpenModalAddComponentsToDZ(_ref3){var dynamicZoneTarget=_ref3.dynamicZoneTarget,targetUid=_ref3.targetUid;setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{dynamicZoneTarget:dynamicZoneTarget,targetUid:targetUid,modalType:'addComponentToDynamicZone',forTarget:'contentType',step:'1',actionType:'edit',isOpen:true});});};var onOpenModalAddField=function onOpenModalAddField(_ref4){var forTarget=_ref4.forTarget,targetUid=_ref4.targetUid;setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{actionType:'create',forTarget:forTarget,targetUid:targetUid,modalType:'chooseAttribute',isOpen:true});});};var onOpenModalCreateSchema=function onOpenModalCreateSchema(nextState){setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread(_objectSpread({},prevState),nextState),{},{isOpen:true});});};var onOpenModalEditCategory=function onOpenModalEditCategory(categoryName){setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{categoryName:categoryName,actionType:'edit',modalType:'editCategory',isOpen:true});});};var onOpenModalEditField=function onOpenModalEditField(_ref5){var forTarget=_ref5.forTarget,targetUid=_ref5.targetUid,attributeName=_ref5.attributeName,attributeType=_ref5.attributeType,step=_ref5.step;setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{modalType:'attribute',actionType:'edit',forTarget:forTarget,targetUid:targetUid,attributeName:attributeName,attributeType:attributeType,step:step,isOpen:true});});};var onOpenModalEditSchema=function onOpenModalEditSchema(_ref6){var modalType=_ref6.modalType,forTarget=_ref6.forTarget,targetUid=_ref6.targetUid,kind=_ref6.kind;setFormModalNavigationState(function(prevState){return _objectSpread(_objectSpread({},prevState),{},{modalType:modalType,actionType:'edit',forTarget:forTarget,targetUid:targetUid,kind:kind,isOpen:true});});};var onCloseModal=function onCloseModal(){setFormModalNavigationState(_constants.INITIAL_STATE_DATA);};var onNavigateToChooseAttributeModal=function onNavigateToChooseAttributeModal(_ref7){var forTarget=_ref7.forTarget,targetUid=_ref7.targetUid;setFormModalNavigationState(function(prev){return _objectSpread(_objectSpread({},prev),{},{forTarget:forTarget,targetUid:targetUid,modalType:'chooseAttribute'});});};var onNavigateToCreateComponentStep2=function onNavigateToCreateComponentStep2(){setFormModalNavigationState(function(prev){return _objectSpread(_objectSpread({},prev),{},{attributeType:'component',modalType:'attribute',step:'2'});});};var onNavigateToAddCompoToDZModal=function onNavigateToAddCompoToDZModal(_ref8){var dynamicZoneTarget=_ref8.dynamicZoneTarget;setFormModalNavigationState(function(prev){return _objectSpread(_objectSpread({},prev),{},{dynamicZoneTarget:dynamicZoneTarget,modalType:'addComponentToDynamicZone',actionType:'create',step:'1',attributeType:null,attributeName:null});});};return/*#__PURE__*/_react["default"].createElement(_FormModalNavigationContext["default"].Provider,{value:_objectSpread(_objectSpread({},state),{},{onClickSelectField:onClickSelectField,onCloseModal:onCloseModal,onNavigateToChooseAttributeModal:onNavigateToChooseAttributeModal,onNavigateToAddCompoToDZModal:onNavigateToAddCompoToDZModal,onOpenModalAddComponentsToDZ:onOpenModalAddComponentsToDZ,onNavigateToCreateComponentStep2:onNavigateToCreateComponentStep2,onOpenModalAddField:onOpenModalAddField,onOpenModalCreateSchema:onOpenModalCreateSchema,onOpenModalEditCategory:onOpenModalEditCategory,onOpenModalEditField:onOpenModalEditField,onOpenModalEditSchema:onOpenModalEditSchema,setFormModalNavigationState:setFormModalNavigationState})},children);};FormModalNavigationProvider.propTypes={children:_propTypes["default"].node.isRequired};var _default=FormModalNavigationProvider;exports.default=_default;

/***/ }),

/***/ 61669:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _pluralize=_interopRequireDefault(__webpack_require__(23450));var _TextInput=__webpack_require__(55967);var _nameToSlug=_interopRequireDefault(__webpack_require__(18062));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var PluralName=function PluralName(_ref){var description=_ref.description,error=_ref.error,intlLabel=_ref.intlLabel,modifiedData=_ref.modifiedData,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var onChangeRef=(0,_react.useRef)(onChange);var displayName=(modifiedData===null||modifiedData===void 0?void 0:modifiedData.displayName)||'';(0,_react.useEffect)(function(){if(displayName){var _value=(0,_nameToSlug["default"])(displayName);try{var plural=(0,_pluralize["default"])(_value,2);onChangeRef.current({target:{name:name,value:plural}});}catch(err){onChangeRef.current({target:{name:name,value:_value}});}}else{onChangeRef.current({target:{name:name,value:''}});}},[displayName,name]);var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var hint=description?formatMessage({id:description.id,defaultMessage:description.defaultMessage},_objectSpread({},description.values)):'';var label=formatMessage(intlLabel);return/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{error:errorMessage,label:label,id:name,hint:hint,name:name,onChange:onChange,value:value||''});};PluralName.defaultProps={description:null,error:null,value:null};PluralName.propTypes={description:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}),error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,modifiedData:_propTypes["default"].object.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].string};var _default=PluralName;exports.default=_default;

/***/ }),

/***/ 40624:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactRedux=__webpack_require__(37424);var _get=_interopRequireDefault(__webpack_require__(27361));var _SimpleMenu=__webpack_require__(33097);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _constants=__webpack_require__(97537);var _utils=__webpack_require__(48008);var RelationTargetPicker=function RelationTargetPicker(_ref){var oneThatIsCreatingARelationWithAnother=_ref.oneThatIsCreatingARelationWithAnother,target=_ref.target;var _useDataManager=(0,_useDataManager2["default"])(),contentTypes=_useDataManager.contentTypes,sortedContentTypesList=_useDataManager.sortedContentTypesList;var dispatch=(0,_reactRedux.useDispatch)();// TODO: replace with an obj { relation: 'x', bidirctional: true|false }
var allowedContentTypesForRelation=sortedContentTypesList.filter(_utils.isAllowedContentTypesForRelations);var plugin=(0,_get["default"])(contentTypes,[target,'plugin'],null);var targetFriendlyName=(0,_get["default"])(contentTypes,[target,'schema','displayName'],'error');return/*#__PURE__*/_react["default"].createElement(_SimpleMenu.SimpleMenu,{id:"label",label:"".concat(targetFriendlyName,"\n    ").concat(plugin?"(from: ".concat(plugin,")"):'')},allowedContentTypesForRelation.map(function(_ref2){var uid=_ref2.uid,title=_ref2.title,restrictRelationsTo=_ref2.restrictRelationsTo,plugin=_ref2.plugin;var handleChange=function handleChange(){var selectedContentTypeFriendlyName=plugin?"".concat(plugin,"_").concat(title):title;dispatch({type:_constants.ON_CHANGE_RELATION_TARGET,target:{value:uid,oneThatIsCreatingARelationWithAnother:oneThatIsCreatingARelationWithAnother,selectedContentTypeFriendlyName:selectedContentTypeFriendlyName,targetContentTypeAllowedRelations:restrictRelationsTo}});};return/*#__PURE__*/_react["default"].createElement(_SimpleMenu.MenuItem,{key:uid,onClick:handleChange},title,"\xA0",plugin&&/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment,null,"(from: ",plugin,")"));}));};RelationTargetPicker.defaultProps={target:null};RelationTargetPicker.propTypes={oneThatIsCreatingARelationWithAnother:_propTypes["default"].string.isRequired,target:_propTypes["default"].string};var _default=RelationTargetPicker;exports.default=_default;

/***/ }),

/***/ 64582:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var _Divider=__webpack_require__(14276);var _Typography=__webpack_require__(49425);var _helperPlugin=__webpack_require__(68547);var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _RelationTargetPicker=_interopRequireDefault(__webpack_require__(40624));var RelationFormBox=function RelationFormBox(_ref){var disabled=_ref.disabled,error=_ref.error,header=_ref.header,isMain=_ref.isMain,name=_ref.name,onChange=_ref.onChange,oneThatIsCreatingARelationWithAnother=_ref.oneThatIsCreatingARelationWithAnother,target=_ref.target,value=_ref.value;return/*#__PURE__*/_react["default"].createElement(_Box.Box,{background:"neutral100",hasRadius:true,borderColor:"neutral200"},/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{paddingTop:isMain?4:1,paddingBottom:isMain?3:1,justifyContent:"center"},isMain?/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},header):/*#__PURE__*/_react["default"].createElement(_RelationTargetPicker["default"],{target:target,oneThatIsCreatingARelationWithAnother:oneThatIsCreatingARelationWithAnother})),/*#__PURE__*/_react["default"].createElement(_Divider.Divider,{background:"neutral200"}),/*#__PURE__*/_react["default"].createElement(_Box.Box,{padding:4},/*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput,{disabled:disabled,error:(error===null||error===void 0?void 0:error.id)||null,intlLabel:{id:(0,_getTrad["default"])('form.attribute.item.defineRelation.fieldName'),defaultMessage:'Field name'},name:name,onChange:onChange,type:"text",value:value})));};RelationFormBox.defaultProps={disabled:false,error:null,header:null,isMain:false,onChange:function onChange(){},oneThatIsCreatingARelationWithAnother:null,target:null,value:''};RelationFormBox.propTypes={disabled:_propTypes["default"].bool,error:_propTypes["default"].object,header:_propTypes["default"].string,isMain:_propTypes["default"].bool,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func,oneThatIsCreatingARelationWithAnother:_propTypes["default"].string,target:_propTypes["default"].string,value:_propTypes["default"].string};var _default=RelationFormBox;exports.default=_default;

/***/ }),

/***/ 93071:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.Wrapper=exports.InfosWrapper=exports.IconWrapper=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(78384));var _Box=__webpack_require__(5493);var _Flex=__webpack_require__(67826);var Wrapper=/*#__PURE__*/(0,_styledComponents["default"])(_Box.Box).withConfig({displayName:"components__Wrapper",componentId:"sc-5ljpu5-0"})(["position:relative;width:100%;&::before{content:'';position:absolute;top:calc(50% - 0px);height:2px;width:100%;background-color:",";z-index:0;}"],function(_ref){var theme=_ref.theme;return theme.colors.primary600;});exports.Wrapper=Wrapper;var IconWrapper=/*#__PURE__*/(0,_styledComponents["default"])(_Box.Box).withConfig({displayName:"components__IconWrapper",componentId:"sc-5ljpu5-1"})(["background:",";border:1px solid ",";border-radius:",";z-index:1;svg{width:1.5rem;height:100%;path{fill:",";}}&:disabled{cursor:not-allowed;}"],function(_ref2){var theme=_ref2.theme,isSelected=_ref2.isSelected;return theme.colors[isSelected?'primary100':'neutral0'];},function(_ref3){var theme=_ref3.theme,isSelected=_ref3.isSelected;return theme.colors[isSelected?'primary700':'neutral200'];},function(_ref4){var theme=_ref4.theme;return theme.borderRadius;},function(_ref5){var theme=_ref5.theme,isSelected=_ref5.isSelected;return theme.colors[isSelected?'primary700':'neutral500'];});exports.IconWrapper=IconWrapper;var InfosWrapper=/*#__PURE__*/(0,_styledComponents["default"])(_Flex.Flex).withConfig({displayName:"components__InfosWrapper",componentId:"sc-5ljpu5-2"})(["position:absolute;bottom:0;left:0;right:0;"]);exports.InfosWrapper=InfosWrapper;

/***/ }),

/***/ 98296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _reactRedux=__webpack_require__(37424);var _get=_interopRequireDefault(__webpack_require__(27361));var _truncate=_interopRequireDefault(__webpack_require__(39138));var _pluralize=_interopRequireDefault(__webpack_require__(23450));var _OneToOne=_interopRequireDefault(__webpack_require__(97314));var _OneWay=_interopRequireDefault(__webpack_require__(53666));var _ManyWays=_interopRequireDefault(__webpack_require__(23379));var _OneToMany=_interopRequireDefault(__webpack_require__(92197));var _ManyToOne=_interopRequireDefault(__webpack_require__(37685));var _ManyToMany=_interopRequireDefault(__webpack_require__(95832));var _Flex=__webpack_require__(67826);var _Typography=__webpack_require__(49425);var _KeyboardNavigable=__webpack_require__(65967);var _Stack=__webpack_require__(9008);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _constants=__webpack_require__(97537);var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _components=__webpack_require__(93071);var relations={oneWay:_OneWay["default"],oneToOne:_OneToOne["default"],oneToMany:_OneToMany["default"],manyToOne:_ManyToOne["default"],manyToMany:_ManyToMany["default"],manyWay:_ManyWays["default"]};var RelationNaturePicker=function RelationNaturePicker(_ref){var naturePickerType=_ref.naturePickerType,oneThatIsCreatingARelationWithAnother=_ref.oneThatIsCreatingARelationWithAnother,relationType=_ref.relationType,target=_ref.target;var dispatch=(0,_reactRedux.useDispatch)();var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useDataManager=(0,_useDataManager2["default"])(),contentTypes=_useDataManager.contentTypes,modifiedData=_useDataManager.modifiedData;var ctRelations=['oneWay','oneToOne','oneToMany','manyToOne','manyToMany','manyWay'];var componentRelations=['oneWay','manyWay'];var dataType=naturePickerType==='contentType'?(0,_get["default"])(modifiedData,[naturePickerType,'schema','kind'],''):naturePickerType;var relationsType=dataType==='collectionType'?ctRelations:componentRelations;var areDisplayedNamesInverted=relationType==='manyToOne';var targetLabel=(0,_get["default"])(contentTypes,[target,'schema','displayName'],'unknown');var leftTarget=areDisplayedNamesInverted?targetLabel:oneThatIsCreatingARelationWithAnother;var rightTarget=areDisplayedNamesInverted?oneThatIsCreatingARelationWithAnother:targetLabel;var leftDisplayedValue=(0,_pluralize["default"])(leftTarget,relationType==='manyToMany'?2:1);var restrictedRelations=(0,_get["default"])(contentTypes,[target,'schema','restrictRelationsTo'],null);var rightDisplayedValue=(0,_pluralize["default"])(rightTarget,['manyToMany','oneToMany','manyToOne','manyWay'].includes(relationType)?2:1);if(!relationType){return null;}return/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{style:{flex:1}},/*#__PURE__*/_react["default"].createElement(_components.Wrapper,null,/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center"},/*#__PURE__*/_react["default"].createElement(_KeyboardNavigable.KeyboardNavigable,{tagName:"button"},/*#__PURE__*/_react["default"].createElement(_Stack.Stack,{size:3,horizontal:true},relationsType.map(function(relation){var Asset=relations[relation];var isEnabled=restrictedRelations===null||restrictedRelations.includes(relation);return/*#__PURE__*/_react["default"].createElement(_components.IconWrapper,{as:"button",isSelected:relationType===relation,disabled:!isEnabled,key:relation,onClick:function onClick(){if(isEnabled){dispatch({type:_constants.ON_CHANGE_RELATION_TYPE,target:{oneThatIsCreatingARelationWithAnother:oneThatIsCreatingARelationWithAnother,targetContentType:target,value:relation}});}},padding:2,type:"button"},/*#__PURE__*/_react["default"].createElement(Asset,{key:relation}));}))))),/*#__PURE__*/_react["default"].createElement(_components.InfosWrapper,{justifyContent:"center"},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,null,(0,_truncate["default"])(leftDisplayedValue,{length:24}),"\xA0"),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{textColor:"primary600"},formatMessage({id:(0,_getTrad["default"])("relation.".concat(relationType))}),"\xA0"),/*#__PURE__*/_react["default"].createElement(_Typography.Typography,null,(0,_truncate["default"])(rightDisplayedValue,{length:24}))));};RelationNaturePicker.defaultProps={relationType:null,target:null};RelationNaturePicker.propTypes={naturePickerType:_propTypes["default"].string.isRequired,oneThatIsCreatingARelationWithAnother:_propTypes["default"].string.isRequired,relationType:_propTypes["default"].string,target:_propTypes["default"].string};var _default=RelationNaturePicker;exports.default=_default;

/***/ }),

/***/ 92824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Flex=__webpack_require__(67826);var _getRelationType=_interopRequireDefault(__webpack_require__(53518));var _RelationField=_interopRequireDefault(__webpack_require__(64582));var _RelationNaturePicker=_interopRequireDefault(__webpack_require__(98296));/**
 *
 * Relation
 *
 */var Relation=function Relation(_ref){var formErrors=_ref.formErrors,mainBoxHeader=_ref.mainBoxHeader,modifiedData=_ref.modifiedData,naturePickerType=_ref.naturePickerType,onChange=_ref.onChange;var relationType=(0,_getRelationType["default"])(modifiedData.relation,modifiedData.targetAttribute);return/*#__PURE__*/_react["default"].createElement(_Flex.Flex,{style:{position:'relative'}},/*#__PURE__*/_react["default"].createElement(_RelationField["default"],{isMain:true,header:mainBoxHeader,error:(formErrors===null||formErrors===void 0?void 0:formErrors.name)||null,name:"name",onChange:onChange,value:(modifiedData===null||modifiedData===void 0?void 0:modifiedData.name)||''}),/*#__PURE__*/_react["default"].createElement(_RelationNaturePicker["default"],{naturePickerType:naturePickerType,oneThatIsCreatingARelationWithAnother:mainBoxHeader,relationType:relationType,target:modifiedData.target}),/*#__PURE__*/_react["default"].createElement(_RelationField["default"],{disabled:['oneWay','manyWay'].includes(relationType),error:(formErrors===null||formErrors===void 0?void 0:formErrors.targetAttribute)||null,name:"targetAttribute",onChange:onChange,oneThatIsCreatingARelationWithAnother:mainBoxHeader,target:modifiedData.target,value:(modifiedData===null||modifiedData===void 0?void 0:modifiedData.targetAttribute)||''}));};Relation.propTypes={formErrors:_propTypes["default"].object.isRequired,mainBoxHeader:_propTypes["default"].string.isRequired,modifiedData:_propTypes["default"].object.isRequired,naturePickerType:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired};var _default=Relation;exports.default=_default;

/***/ }),

/***/ 59892:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Combobox=__webpack_require__(54675);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}/**
 *
 * SelectCategory
 *
 */var SelectCategory=function SelectCategory(_ref){var error=_ref.error,intlLabel=_ref.intlLabel,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useDataManager=(0,_useDataManager2["default"])(),allComponentsCategories=_useDataManager.allComponentsCategories;var _useState=(0,_react.useState)(allComponentsCategories),_useState2=(0,_slicedToArray2["default"])(_useState,2),categories=_useState2[0],setCategories=_useState2[1];var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var label=formatMessage(intlLabel);var handleChange=function handleChange(value){onChange({target:{name:name,value:value,type:'select-category'}});};var handleCreateOption=function handleCreateOption(value){setCategories(function(prev){return[].concat((0,_toConsumableArray2["default"])(prev),[value]);});handleChange(value);};return/*#__PURE__*/_react["default"].createElement(_Combobox.CreatableCombobox,{error:errorMessage,id:name,label:label,name:name,onChange:handleChange,onCreateOption:handleCreateOption,value:value},categories.map(function(category){return/*#__PURE__*/_react["default"].createElement(_Combobox.ComboboxOption,{key:category,value:category},category);}));};SelectCategory.defaultProps={error:null,value:null};SelectCategory.propTypes={error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].string};var _default=SelectCategory;exports.default=_default;

/***/ }),

/***/ 86718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireDefault(__webpack_require__(67294));var _reactIntl=__webpack_require__(97132);var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Select=__webpack_require__(43808);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));/**
 *
 * SelectComponent
 *
 */var SelectComponent=function SelectComponent(_ref){var error=_ref.error,intlLabel=_ref.intlLabel,isAddingAComponentToAnotherComponent=_ref.isAddingAComponentToAnotherComponent,isCreating=_ref.isCreating,isCreatingComponentWhileAddingAField=_ref.isCreatingComponentWhileAddingAField,componentToCreate=_ref.componentToCreate,name=_ref.name,_onChange=_ref.onChange,targetUid=_ref.targetUid,forTarget=_ref.forTarget,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var label=formatMessage(intlLabel);var _useDataManager=(0,_useDataManager2["default"])(),componentsGroupedByCategory=_useDataManager.componentsGroupedByCategory,componentsThatHaveOtherComponentInTheirAttributes=_useDataManager.componentsThatHaveOtherComponentInTheirAttributes;var isTargetAComponent=['component','components'].includes(forTarget);var options=Object.entries(componentsGroupedByCategory).reduce(function(acc,current){var _current=(0,_slicedToArray2["default"])(current,2),categoryName=_current[0],components=_current[1];var compos=components.map(function(component){return{uid:component.uid,label:component.schema.displayName,categoryName:categoryName};});return[].concat((0,_toConsumableArray2["default"])(acc),(0,_toConsumableArray2["default"])(compos));},[]);if(isAddingAComponentToAnotherComponent){options=options.filter(function(option){return!componentsThatHaveOtherComponentInTheirAttributes.includes(option.uid);});}if(isTargetAComponent){options=options.filter(function(option){return option.uid!==targetUid;});}if(isCreatingComponentWhileAddingAField){options=[{uid:value,label:componentToCreate.displayName,categoryName:componentToCreate.category}];}return/*#__PURE__*/_react["default"].createElement(_Select.Select,{disabled:isCreatingComponentWhileAddingAField||!isCreating,error:errorMessage,label:label,id:name,name:name,onChange:function onChange(value){_onChange({target:{name:name,value:value,type:'select-category'}});},value:value||''},options.map(function(option){return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:option.uid,value:option.uid},"".concat(option.categoryName," - ").concat(option.label));}));};SelectComponent.defaultProps={componentToCreate:null,error:null};SelectComponent.propTypes={componentToCreate:_propTypes["default"].object,forTarget:_propTypes["default"].string.isRequired,error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,isAddingAComponentToAnotherComponent:_propTypes["default"].bool.isRequired,isCreating:_propTypes["default"].bool.isRequired,isCreatingComponentWhileAddingAField:_propTypes["default"].bool.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,targetUid:_propTypes["default"].string.isRequired,value:_propTypes["default"].string.isRequired};var _default=SelectComponent;exports.default=_default;

/***/ }),

/***/ 75845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__(63038));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _Select=__webpack_require__(43808);var _reactIntl=__webpack_require__(97132);var _useDataManager2=_interopRequireDefault(__webpack_require__(32989));var _findAttribute=_interopRequireDefault(__webpack_require__(96876));var _utils=__webpack_require__(48008);/**
 *
 * SelectComponents
 *
 */var SelectComponents=function SelectComponents(_ref){var dynamicZoneTarget=_ref.dynamicZoneTarget,intlLabel=_ref.intlLabel,name=_ref.name,_onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var _useDataManager=(0,_useDataManager2["default"])(),componentsGroupedByCategory=_useDataManager.componentsGroupedByCategory,modifiedData=_useDataManager.modifiedData;var dzSchema=(0,_findAttribute["default"])(modifiedData.contentType.schema.attributes,dynamicZoneTarget)||{};var alreadyUsedComponents=dzSchema.components||[];var filteredComponentsGroupedByCategory=Object.keys(componentsGroupedByCategory).reduce(function(acc,current){var filteredComponents=componentsGroupedByCategory[current].filter(function(_ref2){var uid=_ref2.uid;return!alreadyUsedComponents.includes(uid);});if(filteredComponents.length>0){acc[current]=filteredComponents;}return acc;},{});var options=Object.entries(filteredComponentsGroupedByCategory).reduce(function(acc,current){var _current=(0,_slicedToArray2["default"])(current,2),categoryName=_current[0],components=_current[1];var section={label:categoryName,children:components.map(function(_ref3){var uid=_ref3.uid,displayName=_ref3.schema.displayName;return{label:displayName,value:uid};})};acc.push(section);return acc;},[]);var displayedValue=formatMessage({id:(0,_utils.getTrad)('components.SelectComponents.displayed-value'),defaultMessage:'{number, plural, =0 {# components} one {# component} other {# components}} selected'},{number:value.length});return/*#__PURE__*/_react["default"].createElement(_Select.MultiSelectNested,{id:"select1",label:formatMessage(intlLabel),customizeContent:function customizeContent(){return displayedValue;},name:name,onChange:function onChange(values){_onChange({target:{name:name,value:values,type:'select-components'}});},options:options,value:value||[]});};SelectComponents.propTypes={intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,dynamicZoneTarget:_propTypes["default"].string.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].array.isRequired};var _default=SelectComponents;exports.default=_default;

/***/ }),

/***/ 22992:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Select=__webpack_require__(43808);/**
 *
 * SelectDateType
 *
 */var SelectDateType=function SelectDateType(_ref){var intlLabel=_ref.intlLabel,error=_ref.error,modifiedData=_ref.modifiedData,name=_ref.name,onChange=_ref.onChange,options=_ref.options,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var label=formatMessage(intlLabel);var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var handleChange=function handleChange(nextValue){onChange({target:{name:name,value:nextValue,type:'select'}});if(!value){return;}if(modifiedData["default"]!==undefined&&modifiedData["default"]!==null){onChange({target:{name:'default',value:null}});}};return/*#__PURE__*/_react["default"].createElement(_Select.Select,{error:errorMessage,label:label,id:name,name:name,onChange:handleChange,value:value||''},options.map(function(_ref2){var _ref2$metadatas=_ref2.metadatas,intlLabel=_ref2$metadatas.intlLabel,disabled=_ref2$metadatas.disabled,hidden=_ref2$metadatas.hidden,key=_ref2.key,value=_ref2.value;return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:key,value:value,disabled:disabled,hidden:hidden},formatMessage(intlLabel));}));};SelectDateType.defaultProps={error:undefined,value:''};SelectDateType.propTypes={error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,modifiedData:_propTypes["default"].object.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,options:_propTypes["default"].arrayOf(_propTypes["default"].shape({metadatas:_propTypes["default"].shape({intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired}).isRequired,disabled:_propTypes["default"].bool,hidden:_propTypes["default"].bool}).isRequired,key:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired,value:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired}).isRequired).isRequired,value:_propTypes["default"].string};var _default=SelectDateType;exports.default=_default;

/***/ }),

/***/ 81825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Select=__webpack_require__(43808);/**
 *
 * SelectNumber
 *
 */var SelectNumber=function SelectNumber(_ref){var intlLabel=_ref.intlLabel,error=_ref.error,modifiedData=_ref.modifiedData,name=_ref.name,onChange=_ref.onChange,options=_ref.options,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var label=formatMessage(intlLabel);var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var handleChange=function handleChange(nextValue){onChange({target:{name:name,value:nextValue,type:'select'}});if(!value){return;}if(nextValue==='biginteger'&&value!=='biginteger'){if(modifiedData["default"]!==undefined&&modifiedData["default"]!==null){onChange({target:{name:'default',value:null}});}if(modifiedData.max!==undefined&&modifiedData.max!==null){onChange({target:{name:'max',value:null}});}if(modifiedData.min!==undefined&&modifiedData.min!==null){onChange({target:{name:'min',value:null}});}}if(['decimal','float','integer'].includes(nextValue)&&value==='biginteger'){if(modifiedData["default"]!==undefined&&modifiedData["default"]!==null){onChange({target:{name:'default',value:null}});}if(modifiedData.max!==undefined&&modifiedData.max!==null){onChange({target:{name:'max',value:null}});}if(modifiedData.min!==undefined&&modifiedData.min!==null){onChange({target:{name:'min',value:null}});}}};return/*#__PURE__*/_react["default"].createElement(_Select.Select,{error:errorMessage,label:label,id:name,name:name,onChange:handleChange,value:value||''},options.map(function(_ref2){var _ref2$metadatas=_ref2.metadatas,intlLabel=_ref2$metadatas.intlLabel,disabled=_ref2$metadatas.disabled,hidden=_ref2$metadatas.hidden,key=_ref2.key,value=_ref2.value;return/*#__PURE__*/_react["default"].createElement(_Select.Option,{key:key,value:value,disabled:disabled,hidden:hidden},formatMessage(intlLabel));}));};SelectNumber.defaultProps={error:undefined,value:''};SelectNumber.propTypes={error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,modifiedData:_propTypes["default"].object.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,options:_propTypes["default"].arrayOf(_propTypes["default"].shape({metadatas:_propTypes["default"].shape({intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired}).isRequired,disabled:_propTypes["default"].bool,hidden:_propTypes["default"].bool}).isRequired,key:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired,value:_propTypes["default"].oneOfType([_propTypes["default"].string,_propTypes["default"].number]).isRequired}).isRequired).isRequired,value:_propTypes["default"].string};var _default=SelectNumber;exports.default=_default;

/***/ }),

/***/ 86017:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _react=_interopRequireWildcard(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _TextInput=__webpack_require__(55967);var _nameToSlug=_interopRequireDefault(__webpack_require__(18062));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var SingularName=function SingularName(_ref){var description=_ref.description,error=_ref.error,intlLabel=_ref.intlLabel,modifiedData=_ref.modifiedData,name=_ref.name,onChange=_ref.onChange,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var onChangeRef=(0,_react.useRef)(onChange);var displayName=(modifiedData===null||modifiedData===void 0?void 0:modifiedData.displayName)||'';(0,_react.useEffect)(function(){if(displayName){onChangeRef.current({target:{name:name,value:(0,_nameToSlug["default"])(displayName)}});}else{onChangeRef.current({target:{name:name,value:''}});}},[displayName,name]);var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var hint=description?formatMessage({id:description.id,defaultMessage:description.defaultMessage},_objectSpread({},description.values)):'';var label=formatMessage(intlLabel);return/*#__PURE__*/_react["default"].createElement(_TextInput.TextInput,{error:errorMessage,label:label,id:name,hint:hint,name:name,onChange:onChange,value:value||''});};SingularName.defaultProps={description:null,error:null,value:null};SingularName.propTypes={description:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}),error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,modifiedData:_propTypes["default"].object.isRequired,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,value:_propTypes["default"].string};var _default=SingularName;exports.default=_default;

/***/ }),

/***/ 90756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(67154));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(319));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _get=_interopRequireDefault(__webpack_require__(27361));var _helperPlugin=__webpack_require__(68547);var _Box=__webpack_require__(5493);var _Grid=__webpack_require__(34626);var _Typography=__webpack_require__(49425);/**
 *
 * TabForm
 *
 */ /* eslint-disable react/no-array-index-key */var TabForm=function TabForm(_ref){var form=_ref.form,formErrors=_ref.formErrors,genericInputProps=_ref.genericInputProps,modifiedData=_ref.modifiedData,onChange=_ref.onChange;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;return form.map(function(section,sectionIndex){// Don't display an empty section
if(section.items.length===0){return null;}return/*#__PURE__*/_react["default"].createElement(_Box.Box,{key:sectionIndex},section.sectionTitle&&/*#__PURE__*/_react["default"].createElement(_Box.Box,{paddingBottom:4},/*#__PURE__*/_react["default"].createElement(_Typography.Typography,{variant:"delta",as:"h3"},formatMessage(section.sectionTitle))),/*#__PURE__*/_react["default"].createElement(_Grid.Grid,{gap:4},section.items.map(function(input,i){var key="".concat(sectionIndex,".").concat(i);var value=(0,_get["default"])(modifiedData,input.name,'');// When extending the yup schema of an existing field (like in https://github.com/strapi/strapi/blob/293ff3b8f9559236609d123a2774e3be05ce8274/packages/strapi-plugin-i18n/admin/src/index.js#L52)
// and triggering a yup validation error in the UI (missing a required field for example)
// We got an object that looks like: formErrors = { "pluginOptions.i18n.localized": {...} }
// In order to deal with this error, we can't rely on lodash.get to resolve this key
// - lodash will try to access {pluginOptions: {i18n: {localized: true}}})
// - and we just want to access { "pluginOptions.i18n.localized": {...} }
// NOTE: this is a hack
var pluginOptionError=Object.keys(formErrors).find(function(key){return key===input.name;});// Retrieve the error for a specific input
var errorId=pluginOptionError?formErrors[pluginOptionError].id:(0,_get["default"])(formErrors,[].concat((0,_toConsumableArray2["default"])(input.name.split('.')// The filter here is used when creating a component
// in the component step 1 modal
// Since the component info is stored in the
// componentToCreate object we can access the error
// By removing the key
.filter(function(key){return key!=='componentToCreate';})),['id']),null);if(input.type==='pushRight'){return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:input.size||6,key:input.name||key},/*#__PURE__*/_react["default"].createElement("div",null));}return/*#__PURE__*/_react["default"].createElement(_Grid.GridItem,{col:input.size||6,key:input.name||key},/*#__PURE__*/_react["default"].createElement(_helperPlugin.GenericInput,(0,_extends2["default"])({},input,genericInputProps,{error:errorId,onChange:onChange,value:value})));})));});};TabForm.propTypes={form:_propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,formErrors:_propTypes["default"].object.isRequired,genericInputProps:_propTypes["default"].object.isRequired,modifiedData:_propTypes["default"].object.isRequired,onChange:_propTypes["default"].func.isRequired};var _default=TabForm;exports.default=_default;

/***/ }),

/***/ 92557:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _defineProperty2=_interopRequireDefault(__webpack_require__(59713));var _react=_interopRequireDefault(__webpack_require__(67294));var _propTypes=_interopRequireDefault(__webpack_require__(45697));var _reactIntl=__webpack_require__(97132);var _Textarea=__webpack_require__(59626);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){(0,_defineProperty2["default"])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var TextareaEnum=function TextareaEnum(_ref){var description=_ref.description,disabled=_ref.disabled,error=_ref.error,intlLabel=_ref.intlLabel,labelAction=_ref.labelAction,name=_ref.name,onChange=_ref.onChange,placeholder=_ref.placeholder,value=_ref.value;var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var errorMessage=error?formatMessage({id:error,defaultMessage:error}):'';var hint=description?formatMessage({id:description.id,defaultMessage:description.defaultMessage},_objectSpread({},description.values)):'';var label=formatMessage(intlLabel);var formattedPlaceholder=placeholder?formatMessage({id:placeholder.id,defaultMessage:placeholder.defaultMessage},_objectSpread({},placeholder.values)):'';var inputValue=Array.isArray(value)?value.join('\n'):'';var handleChange=function handleChange(e){var arrayValue=e.target.value.split('\n');onChange({target:{name:name,value:arrayValue}});};return/*#__PURE__*/_react["default"].createElement(_Textarea.Textarea,{disabled:disabled,error:errorMessage,label:label,labelAction:labelAction,id:name,hint:hint,name:name,onChange:handleChange,placeholder:formattedPlaceholder,value:inputValue},inputValue);};TextareaEnum.defaultProps={description:null,disabled:false,error:'',labelAction:undefined,placeholder:null,value:''};TextareaEnum.propTypes={description:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}),disabled:_propTypes["default"].bool,error:_propTypes["default"].string,intlLabel:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}).isRequired,labelAction:_propTypes["default"].element,name:_propTypes["default"].string.isRequired,onChange:_propTypes["default"].func.isRequired,placeholder:_propTypes["default"].shape({id:_propTypes["default"].string.isRequired,defaultMessage:_propTypes["default"].string.isRequired,values:_propTypes["default"].object}),value:_propTypes["default"].oneOfType([_propTypes["default"].array,_propTypes["default"].string])};var _default=TextareaEnum;exports.default=_default;

/***/ }),

/***/ 662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=__webpack_require__(67294);var DataManagerContext=/*#__PURE__*/(0,_react.createContext)();var _default=DataManagerContext;exports.default=_default;

/***/ }),

/***/ 61361:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=__webpack_require__(67294);var FormModalNavigationContext=/*#__PURE__*/(0,_react.createContext)();var _default=FormModalNavigationContext;exports.default=_default;

/***/ }),

/***/ 32989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=__webpack_require__(67294);var _DataManagerContext=_interopRequireDefault(__webpack_require__(662));var useDataManager=function useDataManager(){return(0,_react.useContext)(_DataManagerContext["default"]);};var _default=useDataManager;exports.default=_default;

/***/ }),

/***/ 51528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=__webpack_require__(67294);var _FormModalNavigationContext=_interopRequireDefault(__webpack_require__(61361));var useFormModalNavigation=function useFormModalNavigation(){return(0,_react.useContext)(_FormModalNavigationContext["default"]);};var _default=useFormModalNavigation;exports.default=_default;

/***/ }),

/***/ 17309:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactRouterDom=__webpack_require__(39711);var _reactHelmet=__webpack_require__(15482);var _reactIntl=__webpack_require__(97132);var _helperPlugin=__webpack_require__(68547);var _Layout=__webpack_require__(78862);var _permissions=_interopRequireDefault(__webpack_require__(25225));var _pluginId=_interopRequireDefault(__webpack_require__(14432));var _DataManagerProvider=_interopRequireDefault(__webpack_require__(67187));var _FormModalNavigationProvider=_interopRequireDefault(__webpack_require__(97800));var _RecursivePath=_interopRequireDefault(__webpack_require__(45456));var _icons=_interopRequireDefault(__webpack_require__(28595));var _ContentTypeBuilderNav=_interopRequireDefault(__webpack_require__(71914));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}/**
 *
 * App
 *
 */var ListView=/*#__PURE__*/(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 1394).then(__webpack_require__.bind(__webpack_require__, 91394));});var App=function App(){var _useIntl=(0,_reactIntl.useIntl)(),formatMessage=_useIntl.formatMessage;var title=formatMessage({id:"".concat(_pluginId["default"],".plugin.name"),defaultMessage:'Content Types Builder'});return/*#__PURE__*/_react["default"].createElement(_helperPlugin.CheckPagePermissions,{permissions:_permissions["default"].main},/*#__PURE__*/_react["default"].createElement(_reactHelmet.Helmet,{title:title}),/*#__PURE__*/_react["default"].createElement(_FormModalNavigationProvider["default"],null,/*#__PURE__*/_react["default"].createElement(_DataManagerProvider["default"],{allIcons:_icons["default"]},/*#__PURE__*/_react["default"].createElement(_Layout.Layout,{sideNav:/*#__PURE__*/_react["default"].createElement(_ContentTypeBuilderNav["default"],null)},/*#__PURE__*/_react["default"].createElement(_react.Suspense,{fallback:/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)},/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch,null,/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"/plugins/".concat(_pluginId["default"],"/content-types/create-content-type"),component:ListView}),/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"/plugins/".concat(_pluginId["default"],"/content-types/:uid"),component:ListView}),/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"/plugins/".concat(_pluginId["default"],"/component-categories/:categoryUid"),component:_RecursivePath["default"]})))))));};var _default=App;exports.default=_default;

/***/ }),

/***/ 45456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _typeof=__webpack_require__(50008);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _react=_interopRequireWildcard(__webpack_require__(67294));var _reactRouterDom=__webpack_require__(39711);var _helperPlugin=__webpack_require__(68547);function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ListView=/*#__PURE__*/(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 1394).then(__webpack_require__.bind(__webpack_require__, 91394));});var RecursivePath=function RecursivePath(){var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)(),url=_useRouteMatch.url;var _useParams=(0,_reactRouterDom.useParams)(),categoryUid=_useParams.categoryUid;return/*#__PURE__*/_react["default"].createElement(_react.Suspense,{fallback:/*#__PURE__*/_react["default"].createElement(_helperPlugin.LoadingIndicatorPage,null)},/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch,null,/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{path:"".concat(url,"/:componentUid")},/*#__PURE__*/_react["default"].createElement(ListView,{categoryId:categoryUid}))));};var _default=RecursivePath;exports.default=_default;

/***/ }),

/***/ 96876:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var findAttribute=function findAttribute(attributes,attributeToFind){return attributes.find(function(_ref){var name=_ref.name;return name===attributeToFind;});};var _default=findAttribute;exports.default=_default;

/***/ }),

/***/ 97731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var _pluginId=_interopRequireDefault(__webpack_require__(14432));var getTrad=function getTrad(id){return"".concat(_pluginId["default"],".").concat(id);};var _default=getTrad;exports.default=_default;

/***/ }),

/***/ 48008:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var _interopRequireDefault=__webpack_require__(95318);Object.defineProperty(exports, "__esModule", ({value:true}));Object.defineProperty(exports, "getTrad", ({enumerable:true,get:function get(){return _getTrad["default"];}}));Object.defineProperty(exports, "isAllowedContentTypesForRelations", ({enumerable:true,get:function get(){return _isAllowedContentTypesForRelations["default"];}}));var _getTrad=_interopRequireDefault(__webpack_require__(97731));var _isAllowedContentTypesForRelations=_interopRequireDefault(__webpack_require__(70708));

/***/ }),

/***/ 70708:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports.default=void 0;var isAllowedContentTypesForRelations=function isAllowedContentTypesForRelations(contentType){return contentType.kind==='collectionType'&&(contentType.restrictRelationsTo===null||Array.isArray(contentType.restrictRelationsTo)&&contentType.restrictRelationsTo.length>0);};var _default=isAllowedContentTypesForRelations;exports.default=_default;

/***/ }),

/***/ 62001:
/***/ ((module) => {

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

module.exports = function () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 70045:
/***/ ((module, exports) => {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ 32317:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

exports.__esModule = true;
exports.default = scrollbarSize;

var _canUseDOM = _interopRequireDefault(__webpack_require__(70045));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_canUseDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];

/***/ }),

/***/ 89881:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(47816),
    createBaseEach = __webpack_require__(99291);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 23933:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ 69199:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(89881),
    isArrayLike = __webpack_require__(98612);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 82689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(29932),
    baseGet = __webpack_require__(97786),
    baseIteratee = __webpack_require__(67206),
    baseMap = __webpack_require__(69199),
    baseSortBy = __webpack_require__(71131),
    baseUnary = __webpack_require__(7518),
    compareMultiple = __webpack_require__(85022),
    identity = __webpack_require__(6557),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap(iteratees, function(iteratee) {
      if (isArray(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity];
  }

  var index = -1;
  iteratees = arrayMap(iteratees, baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),

/***/ 71131:
/***/ ((module) => {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),

/***/ 26393:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(33448);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),

/***/ 85022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var compareAscending = __webpack_require__(26393);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),

/***/ 99291:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(98612);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 96347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsRegExp = __webpack_require__(23933),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(31167);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ 89734:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(21078),
    baseOrderBy = __webpack_require__(82689),
    baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),

/***/ 39138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(80531),
    castSlice = __webpack_require__(40180),
    hasUnicode = __webpack_require__(62689),
    isObject = __webpack_require__(13218),
    isRegExp = __webpack_require__(96347),
    stringSize = __webpack_require__(88016),
    stringToArray = __webpack_require__(83140),
    toInteger = __webpack_require__(40554),
    toString = __webpack_require__(79833);

/** Used as default options for `_.truncate`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);

  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols
    ? castSlice(strSymbols, 0, end).join('')
    : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += (result.length - end);
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

module.exports = truncate;


/***/ }),

/***/ 10752:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

exports.polyfill = polyfill;


/***/ }),

/***/ 80695:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _reactLifecyclesCompat = __webpack_require__(10752);

var _Grid = __webpack_require__(39305);

var _types = __webpack_require__(60301);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ArrowKeyStepper = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(ArrowKeyStepper, _React$PureComponent);

  function ArrowKeyStepper() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ArrowKeyStepper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ArrowKeyStepper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      scrollToColumn: 0,
      scrollToRow: 0,
      instanceProps: {
        prevScrollToColumn: 0,
        prevScrollToRow: 0
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnStartIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnStopIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowStartIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowStopIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyDown", function (event) {
      var _this$props = _this.props,
          columnCount = _this$props.columnCount,
          disabled = _this$props.disabled,
          mode = _this$props.mode,
          rowCount = _this$props.rowCount;

      if (disabled) {
        return;
      }

      var _this$_getScrollState = _this._getScrollState(),
          scrollToColumnPrevious = _this$_getScrollState.scrollToColumn,
          scrollToRowPrevious = _this$_getScrollState.scrollToRow;

      var _this$_getScrollState2 = _this._getScrollState(),
          scrollToColumn = _this$_getScrollState2.scrollToColumn,
          scrollToRow = _this$_getScrollState2.scrollToRow; // The above cases all prevent default event event behavior.
      // This is to keep the grid from scrolling after the snap-to update.


      switch (event.key) {
        case 'ArrowDown':
          scrollToRow = mode === 'cells' ? Math.min(scrollToRow + 1, rowCount - 1) : Math.min(_this._rowStopIndex + 1, rowCount - 1);
          break;

        case 'ArrowLeft':
          scrollToColumn = mode === 'cells' ? Math.max(scrollToColumn - 1, 0) : Math.max(_this._columnStartIndex - 1, 0);
          break;

        case 'ArrowRight':
          scrollToColumn = mode === 'cells' ? Math.min(scrollToColumn + 1, columnCount - 1) : Math.min(_this._columnStopIndex + 1, columnCount - 1);
          break;

        case 'ArrowUp':
          scrollToRow = mode === 'cells' ? Math.max(scrollToRow - 1, 0) : Math.max(_this._rowStartIndex - 1, 0);
          break;
      }

      if (scrollToColumn !== scrollToColumnPrevious || scrollToRow !== scrollToRowPrevious) {
        event.preventDefault();

        _this._updateScrollState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSectionRendered", function (_ref) {
      var columnStartIndex = _ref.columnStartIndex,
          columnStopIndex = _ref.columnStopIndex,
          rowStartIndex = _ref.rowStartIndex,
          rowStopIndex = _ref.rowStopIndex;
      _this._columnStartIndex = columnStartIndex;
      _this._columnStopIndex = columnStopIndex;
      _this._rowStartIndex = rowStartIndex;
      _this._rowStopIndex = rowStopIndex;
    });
    return _this;
  }

  (0, _createClass2["default"])(ArrowKeyStepper, [{
    key: "setScrollIndexes",
    value: function setScrollIndexes(_ref2) {
      var scrollToColumn = _ref2.scrollToColumn,
          scrollToRow = _ref2.scrollToRow;
      this.setState({
        scrollToRow: scrollToRow,
        scrollToColumn: scrollToColumn
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children;

      var _this$_getScrollState3 = this._getScrollState(),
          scrollToColumn = _this$_getScrollState3.scrollToColumn,
          scrollToRow = _this$_getScrollState3.scrollToRow;

      return React.createElement("div", {
        className: className,
        onKeyDown: this._onKeyDown
      }, children({
        onSectionRendered: this._onSectionRendered,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow
      }));
    }
  }, {
    key: "_getScrollState",
    value: function _getScrollState() {
      return this.props.isControlled ? this.props : this.state;
    }
  }, {
    key: "_updateScrollState",
    value: function _updateScrollState(_ref3) {
      var scrollToColumn = _ref3.scrollToColumn,
          scrollToRow = _ref3.scrollToRow;
      var _this$props3 = this.props,
          isControlled = _this$props3.isControlled,
          onScrollToChange = _this$props3.onScrollToChange;

      if (typeof onScrollToChange === 'function') {
        onScrollToChange({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }

      if (!isControlled) {
        this.setState({
          scrollToColumn: scrollToColumn,
          scrollToRow: scrollToRow
        });
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isControlled) {
        return {};
      }

      if (nextProps.scrollToColumn !== prevState.instanceProps.prevScrollToColumn || nextProps.scrollToRow !== prevState.instanceProps.prevScrollToRow) {
        return _objectSpread({}, prevState, {
          scrollToColumn: nextProps.scrollToColumn,
          scrollToRow: nextProps.scrollToRow,
          instanceProps: {
            prevScrollToColumn: nextProps.scrollToColumn,
            prevScrollToRow: nextProps.scrollToRow
          }
        });
      }

      return {};
    }
  }]);
  return ArrowKeyStepper;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp);
(0, _defineProperty2["default"])(ArrowKeyStepper, "defaultProps", {
  disabled: false,
  isControlled: false,
  mode: 'edges',
  scrollToColumn: 0,
  scrollToRow: 0
});
(0, _reactLifecyclesCompat.polyfill)(ArrowKeyStepper);
var _default = ArrowKeyStepper;
exports.default = _default;

/***/ }),

/***/ 20312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _ArrowKeyStepper["default"];
  }
}));
Object.defineProperty(exports, "ArrowKeyStepper", ({
  enumerable: true,
  get: function get() {
    return _ArrowKeyStepper["default"];
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_ScrollIndices", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_ScrollIndices;
  }
}));

var _ArrowKeyStepper = _interopRequireDefault(__webpack_require__(80695));

var _types = __webpack_require__(60301);

/***/ }),

/***/ 60301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_ScrollIndices = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_ScrollIndices =  true ? null : 0;
exports.bpfrpt_proptype_ScrollIndices = bpfrpt_proptype_ScrollIndices;

/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _detectElementResize = _interopRequireDefault(__webpack_require__(55736));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AutoSizer = (_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AutoSizer, _React$Component);

  function AutoSizer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, AutoSizer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AutoSizer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_parentNode", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_autoSizer", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_window", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_detectElementResize", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onResize", function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;

      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.
        var height = _this._parentNode.offsetHeight || 0;
        var width = _this._parentNode.offsetWidth || 0;
        var win = _this._window || window;
        var style = win.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(style.paddingRight, 10) || 0;
        var paddingTop = parseInt(style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(style.paddingBottom, 10) || 0;
        var newHeight = height - paddingTop - paddingBottom;
        var newWidth = width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: height - paddingTop - paddingBottom,
            width: width - paddingLeft - paddingRight
          });

          onResize({
            height: height,
            width: width
          });
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRef", function (autoSizer) {
      _this._autoSizer = autoSizer;
    });
    return _this;
  }

  (0, _createClass2["default"])(AutoSizer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;
        this._window = this._autoSizer.parentNode.ownerDocument.defaultView; // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41

        this._detectElementResize = (0, _detectElementResize["default"])(nonce, this._window);

        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          disableHeight = _this$props2.disableHeight,
          disableWidth = _this$props2.disableWidth,
          style = _this$props2.style;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width; // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = {
        overflow: 'visible'
      };
      var childParams = {};

      if (!disableHeight) {
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
        childParams.width = width;
      }
      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
       * Note that if default width/height props were provided this would still work with SSR.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */


      return React.createElement("div", {
        className: className,
        ref: this._setRef,
        style: _objectSpread({}, outerStyle, {}, style)
      }, children(childParams));
    }
  }]);
  return AutoSizer;
}(React.Component), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp);
exports.default = AutoSizer;
(0, _defineProperty2["default"])(AutoSizer, "defaultProps", {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
});

/***/ }),

/***/ 90143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _AutoSizer["default"];
  }
}));
Object.defineProperty(exports, "AutoSizer", ({
  enumerable: true,
  get: function get() {
    return _AutoSizer["default"];
  }
}));

var _AutoSizer = _interopRequireDefault(__webpack_require__(849));

/***/ }),

/***/ 55870:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _reactDom = __webpack_require__(73935);

var _types = __webpack_require__(98263);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

/**
 * Wraps a cell and measures its rendered content.
 * Measurements are stored in a per-cell cache.
 * Cached-content is not be re-measured.
 */
var CellMeasurer = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(CellMeasurer, _React$PureComponent);

  function CellMeasurer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CellMeasurer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CellMeasurer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_child", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_measure", function () {
      var _this$props = _this.props,
          cache = _this$props.cache,
          _this$props$columnInd = _this$props.columnIndex,
          columnIndex = _this$props$columnInd === void 0 ? 0 : _this$props$columnInd,
          parent = _this$props.parent,
          _this$props$rowIndex = _this$props.rowIndex,
          rowIndex = _this$props$rowIndex === void 0 ? _this.props.index || 0 : _this$props$rowIndex;

      var _this$_getCellMeasure = _this._getCellMeasurements(),
          height = _this$_getCellMeasure.height,
          width = _this$_getCellMeasure.width;

      if (height !== cache.getHeight(rowIndex, columnIndex) || width !== cache.getWidth(rowIndex, columnIndex)) {
        cache.set(rowIndex, columnIndex, width, height);

        if (parent && typeof parent.recomputeGridSize === 'function') {
          parent.recomputeGridSize({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('CellMeasurer registerChild expects to be passed Element or null');
      }

      _this._child = element;

      if (element) {
        _this._maybeMeasureCell();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(CellMeasurer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._maybeMeasureCell();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._maybeMeasureCell();
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return typeof children === 'function' ? children({
        measure: this._measure,
        registerChild: this._registerChild
      }) : children;
    }
  }, {
    key: "_getCellMeasurements",
    value: function _getCellMeasurements() {
      var cache = this.props.cache;
      var node = this._child || (0, _reactDom.findDOMNode)(this); // TODO Check for a bad combination of fixedWidth and missing numeric width or vice versa with height

      if (node && node.ownerDocument && node.ownerDocument.defaultView && node instanceof node.ownerDocument.defaultView.HTMLElement) {
        var styleWidth = node.style.width;
        var styleHeight = node.style.height; // If we are re-measuring a cell that has already been measured,
        // It will have a hard-coded width/height from the previous measurement.
        // The fact that we are measuring indicates this measurement is probably stale,
        // So explicitly clear it out (eg set to "auto") so we can recalculate.
        // See issue #593 for more info.
        // Even if we are measuring initially- if we're inside of a MultiGrid component,
        // Explicitly clear width/height before measuring to avoid being tainted by another Grid.
        // eg top/left Grid renders before bottom/right Grid
        // Since the CellMeasurerCache is shared between them this taints derived cell size values.

        if (!cache.hasFixedWidth()) {
          node.style.width = 'auto';
        }

        if (!cache.hasFixedHeight()) {
          node.style.height = 'auto';
        }

        var height = Math.ceil(node.offsetHeight);
        var width = Math.ceil(node.offsetWidth); // Reset after measuring to avoid breaking styles; see #660

        if (styleWidth) {
          node.style.width = styleWidth;
        }

        if (styleHeight) {
          node.style.height = styleHeight;
        }

        return {
          height: height,
          width: width
        };
      } else {
        return {
          height: 0,
          width: 0
        };
      }
    }
  }, {
    key: "_maybeMeasureCell",
    value: function _maybeMeasureCell() {
      var _this$props2 = this.props,
          cache = _this$props2.cache,
          _this$props2$columnIn = _this$props2.columnIndex,
          columnIndex = _this$props2$columnIn === void 0 ? 0 : _this$props2$columnIn,
          parent = _this$props2.parent,
          _this$props2$rowIndex = _this$props2.rowIndex,
          rowIndex = _this$props2$rowIndex === void 0 ? this.props.index || 0 : _this$props2$rowIndex;

      if (!cache.has(rowIndex, columnIndex)) {
        var _this$_getCellMeasure2 = this._getCellMeasurements(),
            height = _this$_getCellMeasure2.height,
            width = _this$_getCellMeasure2.width;

        cache.set(rowIndex, columnIndex, width, height); // If size has changed, let Grid know to re-render.

        if (parent && typeof parent.invalidateCellSizeAfterRender === 'function') {
          parent.invalidateCellSizeAfterRender({
            columnIndex: columnIndex,
            rowIndex: rowIndex
          });
        }
      }
    }
  }]);
  return CellMeasurer;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp); // Used for DEV mode warning check

exports.default = CellMeasurer;
(0, _defineProperty2["default"])(CellMeasurer, "__internalCellMeasurerFlag", false);

if (false) {}

/***/ }),

/***/ 22844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.DEFAULT_WIDTH = exports.DEFAULT_HEIGHT = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _types = __webpack_require__(98263);

var DEFAULT_HEIGHT = 30;
exports.DEFAULT_HEIGHT = DEFAULT_HEIGHT;
var DEFAULT_WIDTH = 100; // Enables more intelligent mapping of a given column and row index to an item ID.
// This prevents a cell cache from being invalidated when its parent collection is modified.

exports.DEFAULT_WIDTH = DEFAULT_WIDTH;

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCache =
/*#__PURE__*/
function () {
  function CellMeasurerCache() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CellMeasurerCache);
    (0, _defineProperty2["default"])(this, "_cellHeightCache", {});
    (0, _defineProperty2["default"])(this, "_cellWidthCache", {});
    (0, _defineProperty2["default"])(this, "_columnWidthCache", {});
    (0, _defineProperty2["default"])(this, "_rowHeightCache", {});
    (0, _defineProperty2["default"])(this, "_defaultHeight", void 0);
    (0, _defineProperty2["default"])(this, "_defaultWidth", void 0);
    (0, _defineProperty2["default"])(this, "_minHeight", void 0);
    (0, _defineProperty2["default"])(this, "_minWidth", void 0);
    (0, _defineProperty2["default"])(this, "_keyMapper", void 0);
    (0, _defineProperty2["default"])(this, "_hasFixedHeight", void 0);
    (0, _defineProperty2["default"])(this, "_hasFixedWidth", void 0);
    (0, _defineProperty2["default"])(this, "_columnCount", 0);
    (0, _defineProperty2["default"])(this, "_rowCount", 0);
    (0, _defineProperty2["default"])(this, "columnWidth", function (_ref) {
      var index = _ref.index;

      var key = _this._keyMapper(0, index);

      return _this._columnWidthCache[key] !== undefined ? _this._columnWidthCache[key] : _this._defaultWidth;
    });
    (0, _defineProperty2["default"])(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;

      var key = _this._keyMapper(index, 0);

      return _this._rowHeightCache[key] !== undefined ? _this._rowHeightCache[key] : _this._defaultHeight;
    });
    var defaultHeight = params.defaultHeight,
        defaultWidth = params.defaultWidth,
        fixedHeight = params.fixedHeight,
        fixedWidth = params.fixedWidth,
        keyMapper = params.keyMapper,
        minHeight = params.minHeight,
        minWidth = params.minWidth;
    this._hasFixedHeight = fixedHeight === true;
    this._hasFixedWidth = fixedWidth === true;
    this._minHeight = minHeight || 0;
    this._minWidth = minWidth || 0;
    this._keyMapper = keyMapper || defaultKeyMapper;
    this._defaultHeight = Math.max(this._minHeight, typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT);
    this._defaultWidth = Math.max(this._minWidth, typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH);

    if (false) {}
  }

  (0, _createClass2["default"])(CellMeasurerCache, [{
    key: "clear",
    value: function clear(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      delete this._cellHeightCache[key];
      delete this._cellWidthCache[key];

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellHeightCache = {};
      this._cellWidthCache = {};
      this._columnWidthCache = {};
      this._rowHeightCache = {};
      this._rowCount = 0;
      this._columnCount = 0;
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._hasFixedHeight;
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._hasFixedWidth;
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedHeight) {
        return this._defaultHeight;
      } else {
        var _key = this._keyMapper(rowIndex, columnIndex);

        return this._cellHeightCache[_key] !== undefined ? Math.max(this._minHeight, this._cellHeightCache[_key]) : this._defaultHeight;
      }
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this._hasFixedWidth) {
        return this._defaultWidth;
      } else {
        var _key2 = this._keyMapper(rowIndex, columnIndex);

        return this._cellWidthCache[_key2] !== undefined ? Math.max(this._minWidth, this._cellWidthCache[_key2]) : this._defaultWidth;
      }
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this._keyMapper(rowIndex, columnIndex);

      return this._cellHeightCache[key] !== undefined;
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      var key = this._keyMapper(rowIndex, columnIndex);

      if (columnIndex >= this._columnCount) {
        this._columnCount = columnIndex + 1;
      }

      if (rowIndex >= this._rowCount) {
        this._rowCount = rowIndex + 1;
      } // Size is cached per cell so we don't have to re-measure if cells are re-ordered.


      this._cellHeightCache[key] = height;
      this._cellWidthCache[key] = width;

      this._updateCachedColumnAndRowSizes(rowIndex, columnIndex);
    }
  }, {
    key: "_updateCachedColumnAndRowSizes",
    value: function _updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
      // :columnWidth and :rowHeight are derived based on all cells in a column/row.
      // Pre-cache these derived values for faster lookup later.
      // Reads are expected to occur more frequently than writes in this case.
      // Only update non-fixed dimensions though to avoid doing unnecessary work.
      if (!this._hasFixedWidth) {
        var columnWidth = 0;

        for (var i = 0; i < this._rowCount; i++) {
          columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
        }

        var columnKey = this._keyMapper(0, columnIndex);

        this._columnWidthCache[columnKey] = columnWidth;
      }

      if (!this._hasFixedHeight) {
        var rowHeight = 0;

        for (var _i = 0; _i < this._columnCount; _i++) {
          rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, _i));
        }

        var rowKey = this._keyMapper(rowIndex, 0);

        this._rowHeightCache[rowKey] = rowHeight;
      }
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._defaultWidth;
    }
  }]);
  return CellMeasurerCache;
}();

exports.default = CellMeasurerCache;

function defaultKeyMapper(rowIndex, columnIndex) {
  return "".concat(rowIndex, "-").concat(columnIndex);
}

/***/ }),

/***/ 11866:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "CellMeasurer", ({
  enumerable: true,
  get: function get() {
    return _CellMeasurer["default"];
  }
}));
Object.defineProperty(exports, "CellMeasurerCache", ({
  enumerable: true,
  get: function get() {
    return _CellMeasurerCache["default"];
  }
}));
exports.default = void 0;

var _CellMeasurer = _interopRequireDefault(__webpack_require__(55870));

var _CellMeasurerCache = _interopRequireDefault(__webpack_require__(22844));

var _default = _CellMeasurer["default"];
exports.default = _default;

/***/ }),

/***/ 98263:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_CellMeasureCache = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_CellMeasureCache =  true ? null : 0;
exports.bpfrpt_proptype_CellMeasureCache = bpfrpt_proptype_CellMeasureCache;

/***/ }),

/***/ 40651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _CollectionView = _interopRequireDefault(__webpack_require__(1548));

var _calculateSizeAndPositionData2 = _interopRequireDefault(__webpack_require__(25853));

var _getUpdatedOffsetForIndex = _interopRequireDefault(__webpack_require__(23696));

var _types = __webpack_require__(52424);

/**
 * Renders scattered or non-linear data.
 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
 */
var Collection =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Collection, _React$PureComponent);

  function Collection(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Collection);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Collection).call(this, props, context));
    _this._cellMetadata = [];
    _this._lastRenderedCellIndices = []; // Cell cache during scroll (for performance)

    _this._cellCache = [];
    _this._isScrollingChange = _this._isScrollingChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this._setCollectionViewRef = _this._setCollectionViewRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Collection, [{
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this._collectionView !== undefined) {
        this._collectionView.forceUpdate();
      }
    }
    /** See Collection#recomputeCellSizesAndPositions */

  }, {
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._cellCache = [];

      this._collectionView.recomputeCellSizesAndPositions();
    }
    /** React lifecycle methods */

  }, {
    key: "render",
    value: function render() {
      var props = (0, _extends2["default"])({}, this.props);
      return React.createElement(_CollectionView["default"], (0, _extends2["default"])({
        cellLayoutManager: this,
        isScrollingChange: this._isScrollingChange,
        ref: this._setCollectionViewRef
      }, props));
    }
    /** CellLayoutManager interface */

  }, {
    key: "calculateSizeAndPositionData",
    value: function calculateSizeAndPositionData() {
      var _this$props = this.props,
          cellCount = _this$props.cellCount,
          cellSizeAndPositionGetter = _this$props.cellSizeAndPositionGetter,
          sectionSize = _this$props.sectionSize;
      var data = (0, _calculateSizeAndPositionData2["default"])({
        cellCount: cellCount,
        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
        sectionSize: sectionSize
      });
      this._cellMetadata = data.cellMetadata;
      this._sectionManager = data.sectionManager;
      this._height = data.height;
      this._width = data.width;
    }
    /**
     * Returns the most recently rendered set of cell indices.
     */

  }, {
    key: "getLastRenderedIndices",
    value: function getLastRenderedIndices() {
      return this._lastRenderedCellIndices;
    }
    /**
     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
     */

  }, {
    key: "getScrollPositionForCell",
    value: function getScrollPositionForCell(_ref) {
      var align = _ref.align,
          cellIndex = _ref.cellIndex,
          height = _ref.height,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          width = _ref.width;
      var cellCount = this.props.cellCount;

      if (cellIndex >= 0 && cellIndex < cellCount) {
        var cellMetadata = this._cellMetadata[cellIndex];
        scrollLeft = (0, _getUpdatedOffsetForIndex["default"])({
          align: align,
          cellOffset: cellMetadata.x,
          cellSize: cellMetadata.width,
          containerSize: width,
          currentOffset: scrollLeft,
          targetIndex: cellIndex
        });
        scrollTop = (0, _getUpdatedOffsetForIndex["default"])({
          align: align,
          cellOffset: cellMetadata.y,
          cellSize: cellMetadata.height,
          containerSize: height,
          currentOffset: scrollTop,
          targetIndex: cellIndex
        });
      }

      return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      };
    }
  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return {
        height: this._height,
        width: this._width
      };
    }
  }, {
    key: "cellRenderers",
    value: function cellRenderers(_ref2) {
      var _this2 = this;

      var height = _ref2.height,
          isScrolling = _ref2.isScrolling,
          width = _ref2.width,
          x = _ref2.x,
          y = _ref2.y;
      var _this$props2 = this.props,
          cellGroupRenderer = _this$props2.cellGroupRenderer,
          cellRenderer = _this$props2.cellRenderer; // Store for later calls to getLastRenderedIndices()

      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
        height: height,
        width: width,
        x: x,
        y: y
      });
      return cellGroupRenderer({
        cellCache: this._cellCache,
        cellRenderer: cellRenderer,
        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref3) {
          var index = _ref3.index;
          return _this2._sectionManager.getCellMetadata({
            index: index
          });
        },
        indices: this._lastRenderedCellIndices,
        isScrolling: isScrolling
      });
    }
  }, {
    key: "_isScrollingChange",
    value: function _isScrollingChange(isScrolling) {
      if (!isScrolling) {
        this._cellCache = [];
      }
    }
  }, {
    key: "_setCollectionViewRef",
    value: function _setCollectionViewRef(ref) {
      this._collectionView = ref;
    }
  }]);
  return Collection;
}(React.PureComponent);

exports.default = Collection;
(0, _defineProperty2["default"])(Collection, "defaultProps", {
  'aria-label': 'grid',
  cellGroupRenderer: defaultCellGroupRenderer
});
Collection.propTypes =  false ? 0 : {};

function defaultCellGroupRenderer(_ref4) {
  var cellCache = _ref4.cellCache,
      cellRenderer = _ref4.cellRenderer,
      cellSizeAndPositionGetter = _ref4.cellSizeAndPositionGetter,
      indices = _ref4.indices,
      isScrolling = _ref4.isScrolling;
  return indices.map(function (index) {
    var cellMetadata = cellSizeAndPositionGetter({
      index: index
    });
    var cellRendererProps = {
      index: index,
      isScrolling: isScrolling,
      key: index,
      style: {
        height: cellMetadata.height,
        left: cellMetadata.x,
        position: 'absolute',
        top: cellMetadata.y,
        width: cellMetadata.width
      }
    }; // Avoid re-creating cells while scrolling.
    // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
    // If a scroll is in progress- cache and reuse cells.
    // This cache will be thrown away once scrolling complets.

    if (isScrolling) {
      if (!(index in cellCache)) {
        cellCache[index] = cellRenderer(cellRendererProps);
      }

      return cellCache[index];
    } else {
      return cellRenderer(cellRendererProps);
    }
  }).filter(function (renderedCell) {
    return !!renderedCell;
  });
}

/***/ }),

/***/ 1548:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _clsx = _interopRequireDefault(__webpack_require__(62001));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _reactLifecyclesCompat = __webpack_require__(10752);

var _createCallbackMemoizer = _interopRequireDefault(__webpack_require__(41498));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(32317));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// @TODO Merge Collection and CollectionView

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};
/**
 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
 */

var CollectionView =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(CollectionView, _React$PureComponent);

  // Invokes callbacks only when their values have changed.
  function CollectionView() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CollectionView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CollectionView)).call.apply(_getPrototypeOf2, [this].concat(args))); // If this component is being rendered server-side, getScrollbarSize() will return undefined.
    // We handle this case in componentDidMount()

    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_calculateSizeAndPositionDataOnNextUpdate", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSectionRenderedMemoizer", (0, _createCallbackMemoizer["default"])());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScrollMemoizer", (0, _createCallbackMemoizer["default"])(false));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_invokeOnSectionRenderedHelper", function () {
      var _this$props = _this.props,
          cellLayoutManager = _this$props.cellLayoutManager,
          onSectionRendered = _this$props.onSectionRendered;

      _this._onSectionRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          indices: cellLayoutManager.getLastRenderedIndices()
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateScrollPositionForScrollToCell", function () {
      var _this$props2 = _this.props,
          cellLayoutManager = _this$props2.cellLayoutManager,
          height = _this$props2.height,
          scrollToAlignment = _this$props2.scrollToAlignment,
          scrollToCell = _this$props2.scrollToCell,
          width = _this$props2.width;
      var _this$state = _this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;

      if (scrollToCell >= 0) {
        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
          align: scrollToAlignment,
          cellIndex: scrollToCell,
          height: height,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          width: width
        });

        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
          _this._setScrollPosition(scrollPosition);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== _this._scrollingContainer) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      _this._enablePointerEventsAfterDelay(); // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.


      var _this$props3 = _this.props,
          cellLayoutManager = _this$props3.cellLayoutManager,
          height = _this$props3.height,
          isScrollingChange = _this$props3.isScrollingChange,
          width = _this$props3.width;
      var scrollbarSize = _this._scrollbarSize;

      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge.height,
          totalWidth = _cellLayoutManager$ge.width;

      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop)); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (_this.state.scrollLeft !== scrollLeft || _this.state.scrollTop !== scrollTop) {
        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
        // All things considered, this seems to be the best current work around that I'm aware of.
        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED; // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)

        if (!_this.state.isScrolling) {
          isScrollingChange(true);
        }

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: scrollPositionChangeReason,
          scrollTop: scrollTop
        });
      }

      _this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalWidth: totalWidth,
        totalHeight: totalHeight
      });
    });
    _this._scrollbarSize = (0, _scrollbarSize["default"])();

    if (_this._scrollbarSize === undefined) {
      _this._scrollbarSizeMeasured = false;
      _this._scrollbarSize = 0;
    } else {
      _this._scrollbarSizeMeasured = true;
    }

    return _this;
  }
  /**
   * Forced recompute of cell sizes and positions.
   * This function should be called if cell sizes have changed but nothing else has.
   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
   */


  (0, _createClass2["default"])(CollectionView, [{
    key: "recomputeCellSizesAndPositions",
    value: function recomputeCellSizesAndPositions() {
      this._calculateSizeAndPositionDataOnNextUpdate = true;
      this.forceUpdate();
    }
    /* ---------------------------- Component lifecycle methods ---------------------------- */

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          cellLayoutManager = _this$props4.cellLayoutManager,
          scrollLeft = _this$props4.scrollLeft,
          scrollToCell = _this$props4.scrollToCell,
          scrollTop = _this$props4.scrollTop; // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.

      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = (0, _scrollbarSize["default"])();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollToCell >= 0) {
        this._updateScrollPositionForScrollToCell();
      } else if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      } // Update onSectionRendered callback.


      this._invokeOnSectionRenderedHelper();

      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge2.height,
          totalWidth = _cellLayoutManager$ge2.width; // Initialize onScroll callback.


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalHeight: totalHeight,
        totalWidth: totalWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props5 = this.props,
          height = _this$props5.height,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToCell = _this$props5.scrollToCell,
          width = _this$props5.width;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollPositionChangeReason = _this$state2.scrollPositionChangeReason,
          scrollTop = _this$state2.scrollTop; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Update scroll offsets if the current :scrollToCell values requires it


      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
        this._updateScrollPositionForScrollToCell();
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnSectionRenderedHelper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoHeight = _this$props6.autoHeight,
          cellCount = _this$props6.cellCount,
          cellLayoutManager = _this$props6.cellLayoutManager,
          className = _this$props6.className,
          height = _this$props6.height,
          horizontalOverscanSize = _this$props6.horizontalOverscanSize,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          style = _this$props6.style,
          verticalOverscanSize = _this$props6.verticalOverscanSize,
          width = _this$props6.width;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollLeft = _this$state3.scrollLeft,
          scrollTop = _this$state3.scrollTop; // Memoization reset

      if (this._lastRenderedCellCount !== cellCount || this._lastRenderedCellLayoutManager !== cellLayoutManager || this._calculateSizeAndPositionDataOnNextUpdate) {
        this._lastRenderedCellCount = cellCount;
        this._lastRenderedCellLayoutManager = cellLayoutManager;
        this._calculateSizeAndPositionDataOnNextUpdate = false;
        cellLayoutManager.calculateSizeAndPositionData();
      }

      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize(),
          totalHeight = _cellLayoutManager$ge3.height,
          totalWidth = _cellLayoutManager$ge3.width; // Safely expand the rendered area by the specified overscan amount


      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
      var top = Math.max(0, scrollTop - verticalOverscanSize);
      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);
      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
        height: bottom - top,
        isScrolling: isScrolling,
        width: right - left,
        x: left,
        y: top
      }) : [];
      var collectionStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        WebkitOverflowScrolling: 'touch',
        width: width,
        willChange: 'transform'
      }; // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0; // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23

      collectionStyle.overflowX = totalWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      collectionStyle.overflowY = totalHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      return React.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0, _clsx["default"])('ReactVirtualized__Collection', className),
        id: id,
        onScroll: this._onScroll,
        role: "grid",
        style: _objectSpread({}, collectionStyle, {}, style),
        tabIndex: 0
      }, cellCount > 0 && React.createElement("div", {
        className: "ReactVirtualized__Collection__innerScrollContainer",
        style: {
          height: totalHeight,
          maxHeight: totalHeight,
          maxWidth: totalWidth,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          width: totalWidth
        }
      }, childrenToDisplay), cellCount === 0 && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Collection.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_enablePointerEventsAfterDelay",
    value: function _enablePointerEventsAfterDelay() {
      var _this2 = this;

      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(function () {
        var isScrollingChange = _this2.props.isScrollingChange;
        isScrollingChange(false);
        _this2._disablePointerEventsTimeoutId = null;

        _this2.setState({
          isScrolling: false
        });
      }, IS_SCROLLING_TIMEOUT);
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref) {
      var _this3 = this;

      var scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          totalHeight = _ref.totalHeight,
          totalWidth = _ref.totalWidth;

      this._onScrollMemoizer({
        callback: function callback(_ref2) {
          var scrollLeft = _ref2.scrollLeft,
              scrollTop = _ref2.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_setScrollPosition",
    value: function _setScrollPosition(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.cellCount === 0 && (prevState.scrollLeft !== 0 || prevState.scrollTop !== 0)) {
        return {
          scrollLeft: 0,
          scrollTop: 0,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      } else if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null ? nextProps.scrollTop : prevState.scrollTop,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
        };
      }

      return null;
    }
  }]);
  return CollectionView;
}(React.PureComponent);

(0, _defineProperty2["default"])(CollectionView, "defaultProps", {
  'aria-label': 'grid',
  horizontalOverscanSize: 0,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  scrollToAlignment: 'auto',
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0
});
CollectionView.propTypes =  false ? 0 : {};
(0, _reactLifecyclesCompat.polyfill)(CollectionView);
var _default = CollectionView;
exports.default = _default;

/***/ }),

/***/ 42220:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _types = __webpack_require__(52424);

/**
 * A section of the Window.
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
 */
var Section =
/*#__PURE__*/
function () {
  function Section(_ref) {
    var height = _ref.height,
        width = _ref.width,
        x = _ref.x,
        y = _ref.y;
    (0, _classCallCheck2["default"])(this, Section);
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this._indexMap = {};
    this._indices = [];
  }
  /** Add a cell to this section. */


  (0, _createClass2["default"])(Section, [{
    key: "addCellIndex",
    value: function addCellIndex(_ref2) {
      var index = _ref2.index;

      if (!this._indexMap[index]) {
        this._indexMap[index] = true;

        this._indices.push(index);
      }
    }
    /** Get all cell indices that have been added to this section. */

  }, {
    key: "getCellIndices",
    value: function getCellIndices() {
      return this._indices;
    }
    /** Intended for debugger/test purposes only */

  }, {
    key: "toString",
    value: function toString() {
      return "".concat(this.x, ",").concat(this.y, " ").concat(this.width, "x").concat(this.height);
    }
  }]);
  return Section;
}();

exports.default = Section;

/***/ }),

/***/ 68207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _Section = _interopRequireDefault(__webpack_require__(42220));

var _types = __webpack_require__(52424);

/**
 * Window Sections are used to group nearby cells.
 * This enables us to more quickly determine which cells to display in a given region of the Window.
 * 
 */
var SECTION_SIZE = 100;

/**
 * Contains 0 to many Sections.
 * Grows (and adds Sections) dynamically as cells are registered.
 * Automatically adds cells to the appropriate Section(s).
 */
var SectionManager =
/*#__PURE__*/
function () {
  function SectionManager() {
    var sectionSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SECTION_SIZE;
    (0, _classCallCheck2["default"])(this, SectionManager);
    this._sectionSize = sectionSize;
    this._cellMetadata = [];
    this._sections = {};
  }
  /**
   * Gets all cell indices contained in the specified region.
   * A region may encompass 1 or more Sections.
   */


  (0, _createClass2["default"])(SectionManager, [{
    key: "getCellIndices",
    value: function getCellIndices(_ref) {
      var height = _ref.height,
          width = _ref.width,
          x = _ref.x,
          y = _ref.y;
      var indices = {};
      this.getSections({
        height: height,
        width: width,
        x: x,
        y: y
      }).forEach(function (section) {
        return section.getCellIndices().forEach(function (index) {
          indices[index] = index;
        });
      }); // Object keys are strings; this function returns numbers

      return Object.keys(indices).map(function (index) {
        return indices[index];
      });
    }
    /** Get size and position information for the cell specified. */

  }, {
    key: "getCellMetadata",
    value: function getCellMetadata(_ref2) {
      var index = _ref2.index;
      return this._cellMetadata[index];
    }
    /** Get all Sections overlapping the specified region. */

  }, {
    key: "getSections",
    value: function getSections(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          x = _ref3.x,
          y = _ref3.y;
      var sectionXStart = Math.floor(x / this._sectionSize);
      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
      var sectionYStart = Math.floor(y / this._sectionSize);
      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);
      var sections = [];

      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
          var key = "".concat(sectionX, ".").concat(sectionY);

          if (!this._sections[key]) {
            this._sections[key] = new _Section["default"]({
              height: this._sectionSize,
              width: this._sectionSize,
              x: sectionX * this._sectionSize,
              y: sectionY * this._sectionSize
            });
          }

          sections.push(this._sections[key]);
        }
      }

      return sections;
    }
    /** Total number of Sections based on the currently registered cells. */

  }, {
    key: "getTotalSectionCount",
    value: function getTotalSectionCount() {
      return Object.keys(this._sections).length;
    }
    /** Intended for debugger/test purposes only */

  }, {
    key: "toString",
    value: function toString() {
      var _this = this;

      return Object.keys(this._sections).map(function (index) {
        return _this._sections[index].toString();
      });
    }
    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

  }, {
    key: "registerCell",
    value: function registerCell(_ref4) {
      var cellMetadatum = _ref4.cellMetadatum,
          index = _ref4.index;
      this._cellMetadata[index] = cellMetadatum;
      this.getSections(cellMetadatum).forEach(function (section) {
        return section.addCellIndex({
          index: index
        });
      });
    }
  }]);
  return SectionManager;
}();

exports.default = SectionManager;

/***/ }),

/***/ 18228:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Collection", ({
  enumerable: true,
  get: function get() {
    return _Collection["default"];
  }
}));
exports.default = void 0;

var _Collection = _interopRequireDefault(__webpack_require__(40651));

var _default = _Collection["default"];
exports.default = _default;

/***/ }),

/***/ 52424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_SizeInfo = exports.bpfrpt_proptype_SizeAndPositionInfo = exports.bpfrpt_proptype_ScrollPosition = exports.bpfrpt_proptype_PositionInfo = exports.bpfrpt_proptype_Index = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_Index =  true ? null : 0;
exports.bpfrpt_proptype_Index = bpfrpt_proptype_Index;
var bpfrpt_proptype_PositionInfo =  true ? null : 0;
exports.bpfrpt_proptype_PositionInfo = bpfrpt_proptype_PositionInfo;
var bpfrpt_proptype_ScrollPosition =  true ? null : 0;
exports.bpfrpt_proptype_ScrollPosition = bpfrpt_proptype_ScrollPosition;
var bpfrpt_proptype_SizeAndPositionInfo =  true ? null : 0;
exports.bpfrpt_proptype_SizeAndPositionInfo = bpfrpt_proptype_SizeAndPositionInfo;
var bpfrpt_proptype_SizeInfo =  true ? null : 0;
exports.bpfrpt_proptype_SizeInfo = bpfrpt_proptype_SizeInfo;

/***/ }),

/***/ 25853:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = calculateSizeAndPositionData;

var _SectionManager = _interopRequireDefault(__webpack_require__(68207));

function calculateSizeAndPositionData(_ref) {
  var cellCount = _ref.cellCount,
      cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter,
      sectionSize = _ref.sectionSize;
  var cellMetadata = [];
  var sectionManager = new _SectionManager["default"](sectionSize);
  var height = 0;
  var width = 0;

  for (var index = 0; index < cellCount; index++) {
    var cellMetadatum = cellSizeAndPositionGetter({
      index: index
    });

    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
      throw Error("Invalid metadata returned for cell ".concat(index, ":\n        x:").concat(cellMetadatum.x, ", y:").concat(cellMetadatum.y, ", width:").concat(cellMetadatum.width, ", height:").concat(cellMetadatum.height));
    }

    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);
    cellMetadata[index] = cellMetadatum;
    sectionManager.registerCell({
      cellMetadatum: cellMetadatum,
      index: index
    });
  }

  return {
    cellMetadata: cellMetadata,
    height: height,
    sectionManager: sectionManager,
    width: width
  };
}

/***/ }),

/***/ 51603:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

/**
 * High-order component that auto-calculates column-widths for `Grid` cells.
 */
var ColumnSizer =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(ColumnSizer, _React$PureComponent);

  function ColumnSizer(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ColumnSizer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ColumnSizer).call(this, props, context));
    _this._registerChild = _this._registerChild.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ColumnSizer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          columnMaxWidth = _this$props.columnMaxWidth,
          columnMinWidth = _this$props.columnMinWidth,
          columnCount = _this$props.columnCount,
          width = _this$props.width;

      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          columnMaxWidth = _this$props2.columnMaxWidth,
          columnMinWidth = _this$props2.columnMinWidth,
          columnCount = _this$props2.columnCount,
          width = _this$props2.width;
      var safeColumnMinWidth = columnMinWidth || 1;
      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;
      var columnWidth = width / columnCount;
      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
      columnWidth = Math.floor(columnWidth);
      var adjustedWidth = Math.min(width, columnWidth * columnCount);
      return children({
        adjustedWidth: adjustedWidth,
        columnWidth: columnWidth,
        getColumnWidth: function getColumnWidth() {
          return columnWidth;
        },
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(child) {
      if (child && typeof child.recomputeGridSize !== 'function') {
        throw Error('Unexpected child type registered; only Grid/MultiGrid children are supported.');
      }

      this._registeredChild = child;

      if (this._registeredChild) {
        this._registeredChild.recomputeGridSize();
      }
    }
  }]);
  return ColumnSizer;
}(React.PureComponent);

exports.default = ColumnSizer;
ColumnSizer.propTypes =  false ? 0 : {};

/***/ }),

/***/ 77276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ColumnSizer", ({
  enumerable: true,
  get: function get() {
    return _ColumnSizer["default"];
  }
}));
exports.default = void 0;

var _ColumnSizer = _interopRequireDefault(__webpack_require__(51603));

var _default = _ColumnSizer["default"];
exports.default = _default;

/***/ }),

/***/ 41427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _clsx = _interopRequireDefault(__webpack_require__(62001));

var _calculateSizeAndPositionDataAndUpdateScrollOffset = _interopRequireDefault(__webpack_require__(38022));

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(15825));

var _createCallbackMemoizer = _interopRequireDefault(__webpack_require__(41498));

var _defaultOverscanIndicesGetter = _interopRequireWildcard(__webpack_require__(74070));

var _updateScrollIndexHelper = _interopRequireDefault(__webpack_require__(4675));

var _defaultCellRangeRenderer = _interopRequireDefault(__webpack_require__(8824));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(32317));

var _reactLifecyclesCompat = __webpack_require__(10752);

var _requestAnimationTimeout = __webpack_require__(96271);

var _types = __webpack_require__(31826);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Specifies the number of milliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */

exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = DEFAULT_SCROLLING_RESET_TIME_INTERVAL;
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

var renderNull = function renderNull() {
  return null;
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */
var Grid = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Grid, _React$PureComponent);

  // Invokes onSectionRendered callback only when start/stop row or column indices change
  function Grid(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Grid);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Grid).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onGridRenderedMemoizer", (0, _createCallbackMemoizer["default"])());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScrollMemoizer", (0, _createCallbackMemoizer["default"])(false));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deferredInvalidateColumnIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deferredInvalidateRowIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_recomputeScrollLeftFlag", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_recomputeScrollTopFlag", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_horizontalScrollBarSize", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_verticalScrollBarSize", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_scrollbarPresenceChanged", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_scrollingContainer", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_childrenToDisplay", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnStartIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnStopIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowStartIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowStopIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedColumnStartIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedColumnStopIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedRowStartIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderedRowStopIndex", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_initialScrollTop", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_initialScrollLeft", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_disablePointerEventsTimeoutId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_styleCache", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellCache", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_debounceScrollEndedCallback", function () {
      _this._disablePointerEventsTimeoutId = null; // isScrolling is used to determine if we reset styleCache

      _this.setState({
        isScrolling: false,
        needToResetStyleCache: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_invokeOnGridRenderedHelper", function () {
      var onSectionRendered = _this.props.onSectionRendered;

      _this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: _this._columnStartIndex,
          columnOverscanStopIndex: _this._columnStopIndex,
          columnStartIndex: _this._renderedColumnStartIndex,
          columnStopIndex: _this._renderedColumnStopIndex,
          rowOverscanStartIndex: _this._rowStartIndex,
          rowOverscanStopIndex: _this._rowStopIndex,
          rowStartIndex: _this._renderedRowStartIndex,
          rowStopIndex: _this._renderedRowStopIndex
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target === _this._scrollingContainer) {
        _this.handleScrollEvent(event.target);
      }
    });
    var columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager["default"]({
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.columnWidth)(params);
      },
      estimatedCellSize: Grid._getEstimatedColumnSize(props)
    });
    var rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager["default"]({
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return Grid._wrapSizeGetter(props.rowHeight)(params);
      },
      estimatedCellSize: Grid._getEstimatedRowSize(props)
    });
    _this.state = {
      instanceProps: {
        columnSizeAndPositionManager: columnSizeAndPositionManager,
        rowSizeAndPositionManager: rowSizeAndPositionManager,
        prevColumnWidth: props.columnWidth,
        prevRowHeight: props.rowHeight,
        prevColumnCount: props.columnCount,
        prevRowCount: props.rowCount,
        prevIsScrolling: props.isScrolling === true,
        prevScrollToColumn: props.scrollToColumn,
        prevScrollToRow: props.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false
      },
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false
    };

    if (props.scrollToRow > 0) {
      _this._initialScrollTop = _this._getCalculatedScrollTop(props, _this.state);
    }

    if (props.scrollToColumn > 0) {
      _this._initialScrollLeft = _this._getCalculatedScrollLeft(props, _this.state);
    }

    return _this;
  }
  /**
   * Gets offsets for a given cell and alignment.
   */


  (0, _createClass2["default"])(Grid, [{
    key: "getOffsetForCell",
    value: function getOffsetForCell() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alignment = _ref.alignment,
          alignment = _ref$alignment === void 0 ? this.props.scrollToAlignment : _ref$alignment,
          _ref$columnIndex = _ref.columnIndex,
          columnIndex = _ref$columnIndex === void 0 ? this.props.scrollToColumn : _ref$columnIndex,
          _ref$rowIndex = _ref.rowIndex,
          rowIndex = _ref$rowIndex === void 0 ? this.props.scrollToRow : _ref$rowIndex;

      var offsetProps = _objectSpread({}, this.props, {
        scrollToAlignment: alignment,
        scrollToColumn: columnIndex,
        scrollToRow: rowIndex
      });

      return {
        scrollLeft: this._getCalculatedScrollLeft(offsetProps),
        scrollTop: this._getCalculatedScrollTop(offsetProps)
      };
    }
    /**
     * Gets estimated total rows' height.
     */

  }, {
    key: "getTotalRowsHeight",
    value: function getTotalRowsHeight() {
      return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
    }
    /**
     * Gets estimated total columns' width.
     */

  }, {
    key: "getTotalColumnsWidth",
    value: function getTotalColumnsWidth() {
      return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
    }
    /**
     * This method handles a scroll event originating from an external scroll control.
     * It's an advanced method and should probably not be used unless you're implementing a custom scroll-bar solution.
     */

  }, {
    key: "handleScrollEvent",
    value: function handleScrollEvent(_ref2) {
      var _ref2$scrollLeft = _ref2.scrollLeft,
          scrollLeftParam = _ref2$scrollLeft === void 0 ? 0 : _ref2$scrollLeft,
          _ref2$scrollTop = _ref2.scrollTop,
          scrollTopParam = _ref2$scrollTop === void 0 ? 0 : _ref2$scrollTop;

      // On iOS, we can arrive at negative offsets by swiping past the start.
      // To prevent flicker here, we make playing in the negative offset zone cause nothing to happen.
      if (scrollTopParam < 0) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      this._debounceScrollEnded();

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          autoWidth = _this$props.autoWidth,
          height = _this$props.height,
          width = _this$props.width;
      var instanceProps = this.state.instanceProps; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = instanceProps.scrollbarSize;
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), scrollLeftParam);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), scrollTopParam); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.

      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        // Don't change direction for an axis unless scroll offset has changed.
        var scrollDirectionHorizontal = scrollLeft !== this.state.scrollLeft ? scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionHorizontal;
        var scrollDirectionVertical = scrollTop !== this.state.scrollTop ? scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD : this.state.scrollDirectionVertical;
        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        if (!autoWidth) {
          newState.scrollLeft = scrollLeft;
        }

        newState.needToResetStyleCache = false;
        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        totalColumnsWidth: totalColumnsWidth,
        totalRowsHeight: totalRowsHeight
      });
    }
    /**
     * Invalidate Grid size and recompute visible cells.
     * This is a deferred wrapper for recomputeGridSize().
     * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
     * This method is intended for advanced use-cases like CellMeasurer.
     */
    // @TODO (bvaughn) Add automated test coverage for this.

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;
      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          rowCount = _this$props2.rowCount;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }
    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$columnIndex = _ref4.columnIndex,
          columnIndex = _ref4$columnIndex === void 0 ? 0 : _ref4$columnIndex,
          _ref4$rowIndex = _ref4.rowIndex,
          rowIndex = _ref4$rowIndex === void 0 ? 0 : _ref4$rowIndex;

      var _this$props3 = this.props,
          scrollToColumn = _this$props3.scrollToColumn,
          scrollToRow = _this$props3.scrollToRow;
      var instanceProps = this.state.instanceProps;
      instanceProps.columnSizeAndPositionManager.resetCell(columnIndex);
      instanceProps.rowSizeAndPositionManager.resetCell(rowIndex); // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.

      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && (this.state.scrollDirectionHorizontal === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? columnIndex <= scrollToColumn : columnIndex >= scrollToColumn);
      this._recomputeScrollTopFlag = scrollToRow >= 0 && (this.state.scrollDirectionVertical === _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD ? rowIndex <= scrollToRow : rowIndex >= scrollToRow); // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.

      this._styleCache = {};
      this._cellCache = {};
      this.forceUpdate();
    }
    /**
     * Ensure column and row are visible.
     */

  }, {
    key: "scrollToCell",
    value: function scrollToCell(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;
      var columnCount = this.props.columnCount;
      var props = this.props; // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.

      if (columnCount > 1 && columnIndex !== undefined) {
        this._updateScrollLeftForScrollToColumn(_objectSpread({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      if (rowIndex !== undefined) {
        this._updateScrollTopForScrollToRow(_objectSpread({}, props, {
          scrollToRow: rowIndex
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          getScrollbarSize = _this$props4.getScrollbarSize,
          height = _this$props4.height,
          scrollLeft = _this$props4.scrollLeft,
          scrollToColumn = _this$props4.scrollToColumn,
          scrollTop = _this$props4.scrollTop,
          scrollToRow = _this$props4.scrollToRow,
          width = _this$props4.width;
      var instanceProps = this.state.instanceProps; // Reset initial offsets to be ignored in browser

      this._initialScrollTop = 0;
      this._initialScrollLeft = 0; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.


      if (!instanceProps.scrollbarSizeMeasured) {
        this.setState(function (prevState) {
          var stateUpdate = _objectSpread({}, prevState, {
            needToResetStyleCache: false
          });

          stateUpdate.instanceProps.scrollbarSize = getScrollbarSize();
          stateUpdate.instanceProps.scrollbarSizeMeasured = true;
          return stateUpdate;
        });
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 || typeof scrollTop === 'number' && scrollTop >= 0) {
        var stateUpdate = Grid._getScrollToPositionStateUpdate({
          prevState: this.state,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        if (stateUpdate) {
          stateUpdate.needToResetStyleCache = false;
          this.setState(stateUpdate);
        }
      } // refs don't work in `react-test-renderer`


      if (this._scrollingContainer) {
        // setting the ref's scrollLeft and scrollTop.
        // Somehow in MultiGrid the main grid doesn't trigger a update on mount.
        if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
          this._scrollingContainer.scrollLeft = this.state.scrollLeft;
        }

        if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
          this._scrollingContainer.scrollTop = this.state.scrollTop;
        }
      } // Don't update scroll offset if the size is 0; we don't render any cells in this case.
      // Setting a state may cause us to later thing we've updated the offce when we haven't.


      var sizeIsBiggerThanZero = height > 0 && width > 0;

      if (scrollToColumn >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollLeftForScrollToColumn();
      }

      if (scrollToRow >= 0 && sizeIsBiggerThanZero) {
        this._updateScrollTopForScrollToRow();
      } // Update onRowsRendered callback


      this._invokeOnGridRenderedHelper(); // Initialize onScroll callback


      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: instanceProps.columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: instanceProps.rowSizeAndPositionManager.getTotalSize()
      });

      this._maybeCallOnScrollbarPresenceChange();
    }
    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props5 = this.props,
          autoHeight = _this$props5.autoHeight,
          autoWidth = _this$props5.autoWidth,
          columnCount = _this$props5.columnCount,
          height = _this$props5.height,
          rowCount = _this$props5.rowCount,
          scrollToAlignment = _this$props5.scrollToAlignment,
          scrollToColumn = _this$props5.scrollToColumn,
          scrollToRow = _this$props5.scrollToRow,
          width = _this$props5.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollPositionChangeReason = _this$state.scrollPositionChangeReason,
          scrollTop = _this$state.scrollTop,
          instanceProps = _this$state.instanceProps; // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize(); // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218


      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0; // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.

      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        // @TRICKY :autoHeight and :autoWidth properties instructs Grid to leave :scrollTop and :scrollLeft management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop and scrollingContainer.scrollLeft since it forces layout/flow.
        if (!autoWidth && scrollLeft >= 0 && (scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        if (!autoHeight && scrollTop >= 0 && (scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      } // Special case where the previous size was 0:
      // In this case we don't show any windowed cells at all.
      // So we should always recalculate offset afterwards.


      var sizeJustIncreasedFromZero = (prevProps.width === 0 || prevProps.height === 0) && height > 0 && width > 0; // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?

      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;

        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0, _updateScrollIndexHelper["default"])({
          cellSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;

        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0, _updateScrollIndexHelper["default"])({
          cellSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          sizeJustIncreasedFromZero: sizeJustIncreasedFromZero,
          updateScrollIndexCallback: function updateScrollIndexCallback() {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      } // Update onRowsRendered callback if start/stop indices have changed


      this._invokeOnGridRenderedHelper(); // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners


      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          totalColumnsWidth: totalColumnsWidth,
          totalRowsHeight: totalRowsHeight
        });
      }

      this._maybeCallOnScrollbarPresenceChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }
    }
    /**
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          autoContainerWidth = _this$props6.autoContainerWidth,
          autoHeight = _this$props6.autoHeight,
          autoWidth = _this$props6.autoWidth,
          className = _this$props6.className,
          containerProps = _this$props6.containerProps,
          containerRole = _this$props6.containerRole,
          containerStyle = _this$props6.containerStyle,
          height = _this$props6.height,
          id = _this$props6.id,
          noContentRenderer = _this$props6.noContentRenderer,
          role = _this$props6.role,
          style = _this$props6.style,
          tabIndex = _this$props6.tabIndex,
          width = _this$props6.width;
      var _this$state2 = this.state,
          instanceProps = _this$state2.instanceProps,
          needToResetStyleCache = _this$state2.needToResetStyleCache;

      var isScrolling = this._isScrolling();

      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: autoWidth ? 'auto' : width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      if (needToResetStyleCache) {
        this._styleCache = {};
      } // calculate _styleCache here
      // if state.isScrolling (not from _isScrolling) then reset


      if (!this.state.isScrolling) {
        this._resetStyleCache();
      } // calculate children to render here


      this._calculateChildrenToRender(this.props, this.state);

      var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize(); // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116

      var verticalScrollBarSize = totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;

      if (horizontalScrollBarSize !== this._horizontalScrollBarSize || verticalScrollBarSize !== this._verticalScrollBarSize) {
        this._horizontalScrollBarSize = horizontalScrollBarSize;
        this._verticalScrollBarSize = verticalScrollBarSize;
        this._scrollbarPresenceChanged = true;
      } // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23


      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';
      var childrenToDisplay = this._childrenToDisplay;
      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;
      return React.createElement("div", (0, _extends2["default"])({
        ref: this._setScrollingContainerRef
      }, containerProps, {
        "aria-label": this.props['aria-label'],
        "aria-readonly": this.props['aria-readonly'],
        className: (0, _clsx["default"])('ReactVirtualized__Grid', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({}, gridStyle, {}, style),
        tabIndex: tabIndex
      }), childrenToDisplay.length > 0 && React.createElement("div", {
        className: "ReactVirtualized__Grid__innerScrollContainer",
        role: containerRole,
        style: _objectSpread({
          width: autoContainerWidth ? 'auto' : totalColumnsWidth,
          height: totalRowsHeight,
          maxWidth: totalColumnsWidth,
          maxHeight: totalRowsHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }, containerStyle)
      }, childrenToDisplay), showNoContentRenderer && noContentRenderer());
    }
    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: "_calculateChildrenToRender",
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width,
          isScrollingOptOut = props.isScrollingOptOut;
      var scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          instanceProps = state.instanceProps;
      var scrollTop = this._initialScrollTop > 0 ? this._initialScrollTop : state.scrollTop;
      var scrollLeft = this._initialScrollLeft > 0 ? this._initialScrollLeft : state.scrollLeft;

      var isScrolling = this._isScrolling(props, state);

      this._childrenToDisplay = []; // Render only enough columns and rows to cover the visible area of the grid.

      if (height > 0 && width > 0) {
        var visibleColumnIndices = instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });
        var horizontalOffsetAdjustment = instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        }); // Store for _invokeOnGridRenderedHelper()

        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;
        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: typeof visibleColumnIndices.start === 'number' ? visibleColumnIndices.start : 0,
          stopIndex: typeof visibleColumnIndices.stop === 'number' ? visibleColumnIndices.stop : -1
        });
        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: typeof visibleRowIndices.start === 'number' ? visibleRowIndices.start : 0,
          stopIndex: typeof visibleRowIndices.stop === 'number' ? visibleRowIndices.stop : -1
        }); // Store for _invokeOnGridRenderedHelper()

        var columnStartIndex = overscanColumnIndices.overscanStartIndex;
        var columnStopIndex = overscanColumnIndices.overscanStopIndex;
        var rowStartIndex = overscanRowIndices.overscanStartIndex;
        var rowStopIndex = overscanRowIndices.overscanStopIndex; // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.

        if (deferredMeasurementCache) {
          // If rows have a dynamic height, scan the rows we are about to render.
          // If any have not yet been measured, then we need to render all columns initially,
          // Because the height of the row is equal to the tallest cell within that row,
          // (And so we can't know the height without measuring all column-cells first).
          if (!deferredMeasurementCache.hasFixedHeight()) {
            for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
              if (!deferredMeasurementCache.has(rowIndex, 0)) {
                columnStartIndex = 0;
                columnStopIndex = columnCount - 1;
                break;
              }
            }
          } // If columns have a dynamic width, scan the columns we are about to render.
          // If any have not yet been measured, then we need to render all rows initially,
          // Because the width of the column is equal to the widest cell within that column,
          // (And so we can't know the width without measuring all row-cells first).


          if (!deferredMeasurementCache.hasFixedWidth()) {
            for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
              if (!deferredMeasurementCache.has(0, columnIndex)) {
                rowStartIndex = 0;
                rowStopIndex = rowCount - 1;
                break;
              }
            }
          }
        }

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: instanceProps.columnSizeAndPositionManager,
          columnStartIndex: columnStartIndex,
          columnStopIndex: columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          isScrollingOptOut: isScrollingOptOut,
          parent: this,
          rowSizeAndPositionManager: instanceProps.rowSizeAndPositionManager,
          rowStartIndex: rowStartIndex,
          rowStopIndex: rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        }); // update the indices

        this._columnStartIndex = columnStartIndex;
        this._columnStopIndex = columnStopIndex;
        this._rowStartIndex = rowStartIndex;
        this._rowStopIndex = rowStopIndex;
      }
    }
    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: "_debounceScrollEnded",
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._disablePointerEventsTimeoutId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_handleInvalidatedGridSize",

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number' && typeof this._deferredInvalidateRowIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
      }
    }
  }, {
    key: "_invokeOnScrollMemoizer",
    value: function _invokeOnScrollMemoizer(_ref6) {
      var _this3 = this;

      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop,
          totalColumnsWidth = _ref6.totalColumnsWidth,
          totalRowsHeight = _ref6.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref7) {
          var scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          var _this3$props = _this3.props,
              height = _this3$props.height,
              onScroll = _this3$props.onScroll,
              width = _this3$props.width;
          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: "_isScrolling",
    value: function _isScrolling() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      // If isScrolling is defined in props, use it to override the value in state
      // This is a performance optimization for WindowScroller + Grid
      return Object.hasOwnProperty.call(props, 'isScrolling') ? Boolean(props.isScrolling) : Boolean(state.isScrolling);
    }
  }, {
    key: "_maybeCallOnScrollbarPresenceChange",
    value: function _maybeCallOnScrollbarPresenceChange() {
      if (this._scrollbarPresenceChanged) {
        var onScrollbarPresenceChange = this.props.onScrollbarPresenceChange;
        this._scrollbarPresenceChanged = false;
        onScrollbarPresenceChange({
          horizontal: this._horizontalScrollBarSize > 0,
          size: this.state.instanceProps.scrollbarSize,
          vertical: this._verticalScrollBarSize > 0
        });
      }
    }
  }, {
    key: "scrollToPosition",

    /**
     * Scroll to the specified offset(s).
     * Useful for animating position changes.
     */
    value: function scrollToPosition(_ref8) {
      var scrollLeft = _ref8.scrollLeft,
          scrollTop = _ref8.scrollTop;

      var stateUpdate = Grid._getScrollToPositionStateUpdate({
        prevState: this.state,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollLeft(props, state);
    }
  }, {
    key: "_updateScrollLeftForScrollToColumn",
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollLeftForScrollToColumnStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      return Grid._getCalculatedScrollTop(props, state);
    }
  }, {
    key: "_resetStyleCache",
    value: function _resetStyleCache() {
      var styleCache = this._styleCache;
      var cellCache = this._cellCache;
      var isScrollingOptOut = this.props.isScrollingOptOut; // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      // Don't clear visible cells from cellCache if isScrollingOptOut is specified.
      // This keeps the cellCache to a resonable size.

      this._cellCache = {};
      this._styleCache = {}; // Copy over the visible cell styles so avoid unnecessary re-render.

      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = "".concat(rowIndex, "-").concat(columnIndex);
          this._styleCache[key] = styleCache[key];

          if (isScrollingOptOut) {
            this._cellCache[key] = cellCache[key];
          }
        }
      }
    }
  }, {
    key: "_updateScrollTopForScrollToRow",
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;

      var stateUpdate = Grid._getScrollTopForScrollToRowStateUpdate(props, state);

      if (stateUpdate) {
        stateUpdate.needToResetStyleCache = false;
        this.setState(stateUpdate);
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.columnCount === 0 && prevState.scrollLeft !== 0 || nextProps.rowCount === 0 && prevState.scrollTop !== 0) {
        newState.scrollLeft = 0;
        newState.scrollTop = 0; // only use scroll{Left,Top} from props if scrollTo{Column,Row} isn't specified
        // scrollTo{Column,Row} should override scroll{Left,Top}
      } else if (nextProps.scrollLeft !== prevState.scrollLeft && nextProps.scrollToColumn < 0 || nextProps.scrollTop !== prevState.scrollTop && nextProps.scrollToRow < 0) {
        Object.assign(newState, Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: nextProps.scrollLeft,
          scrollTop: nextProps.scrollTop
        }));
      }

      var instanceProps = prevState.instanceProps; // Initially we should not clearStyleCache

      newState.needToResetStyleCache = false;

      if (nextProps.columnWidth !== instanceProps.prevColumnWidth || nextProps.rowHeight !== instanceProps.prevRowHeight) {
        // Reset cache. set it to {} in render
        newState.needToResetStyleCache = true;
      }

      instanceProps.columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: Grid._getEstimatedColumnSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.columnWidth)
      });
      instanceProps.rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: Grid._getEstimatedRowSize(nextProps),
        cellSizeGetter: Grid._wrapSizeGetter(nextProps.rowHeight)
      });

      if (instanceProps.prevColumnCount === 0 || instanceProps.prevRowCount === 0) {
        instanceProps.prevColumnCount = 0;
        instanceProps.prevRowCount = 0;
      } // If scrolling is controlled outside this component, clear cache when scrolling stops


      if (nextProps.autoHeight && nextProps.isScrolling === false && instanceProps.prevIsScrolling === true) {
        Object.assign(newState, {
          isScrolling: false
        });
      }

      var maybeStateA;
      var maybeStateB;
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset["default"])({
        cellCount: instanceProps.prevColumnCount,
        cellSize: typeof instanceProps.prevColumnWidth === 'number' ? instanceProps.prevColumnWidth : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: typeof nextProps.columnWidth === 'number' ? nextProps.columnWidth : null,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: instanceProps.prevScrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateA = Grid._getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState);
        }
      });
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset["default"])({
        cellCount: instanceProps.prevRowCount,
        cellSize: typeof instanceProps.prevRowHeight === 'number' ? instanceProps.prevRowHeight : null,
        computeMetadataCallback: function computeMetadataCallback() {
          return instanceProps.rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: typeof nextProps.rowHeight === 'number' ? nextProps.rowHeight : null,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: instanceProps.prevScrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          maybeStateB = Grid._getScrollTopForScrollToRowStateUpdate(nextProps, prevState);
        }
      });
      instanceProps.prevColumnCount = nextProps.columnCount;
      instanceProps.prevColumnWidth = nextProps.columnWidth;
      instanceProps.prevIsScrolling = nextProps.isScrolling === true;
      instanceProps.prevRowCount = nextProps.rowCount;
      instanceProps.prevRowHeight = nextProps.rowHeight;
      instanceProps.prevScrollToColumn = nextProps.scrollToColumn;
      instanceProps.prevScrollToRow = nextProps.scrollToRow; // getting scrollBarSize (moved from componentWillMount)

      instanceProps.scrollbarSize = nextProps.getScrollbarSize();

      if (instanceProps.scrollbarSize === undefined) {
        instanceProps.scrollbarSizeMeasured = false;
        instanceProps.scrollbarSize = 0;
      } else {
        instanceProps.scrollbarSizeMeasured = true;
      }

      newState.instanceProps = instanceProps;
      return _objectSpread({}, newState, {}, maybeStateA, {}, maybeStateB);
    }
  }, {
    key: "_getEstimatedColumnSize",
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: "_getEstimatedRowSize",
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }
  }, {
    key: "_getScrollToPositionStateUpdate",

    /**
     * Get the updated state after scrolling to
     * scrollLeft and scrollTop
     */
    value: function _getScrollToPositionStateUpdate(_ref9) {
      var prevState = _ref9.prevState,
          scrollLeft = _ref9.scrollLeft,
          scrollTop = _ref9.scrollTop;
      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (typeof scrollLeft === 'number' && scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > prevState.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (typeof scrollTop === 'number' && scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > prevState.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (typeof scrollLeft === 'number' && scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft || typeof scrollTop === 'number' && scrollTop >= 0 && scrollTop !== prevState.scrollTop) {
        return newState;
      }

      return {};
    }
  }, {
    key: "_wrapSizeGetter",
    value: function _wrapSizeGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: "_getCalculatedScrollLeft",
    value: function _getCalculatedScrollLeft(nextProps, prevState) {
      var columnCount = nextProps.columnCount,
          height = nextProps.height,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToColumn = nextProps.scrollToColumn,
          width = nextProps.width;
      var scrollLeft = prevState.scrollLeft,
          instanceProps = prevState.instanceProps;

      if (columnCount > 0) {
        var finalColumn = columnCount - 1;
        var targetIndex = scrollToColumn < 0 ? finalColumn : Math.min(finalColumn, scrollToColumn);
        var totalRowsHeight = instanceProps.rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalRowsHeight > height ? instanceProps.scrollbarSize : 0;
        return instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollLeftForScrollToColumnStateUpdate",
    value: function _getScrollLeftForScrollToColumnStateUpdate(nextProps, prevState) {
      var scrollLeft = prevState.scrollLeft;

      var calculatedScrollLeft = Grid._getCalculatedScrollLeft(nextProps, prevState);

      if (typeof calculatedScrollLeft === 'number' && calculatedScrollLeft >= 0 && scrollLeft !== calculatedScrollLeft) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: calculatedScrollLeft,
          scrollTop: -1
        });
      }

      return {};
    }
  }, {
    key: "_getCalculatedScrollTop",
    value: function _getCalculatedScrollTop(nextProps, prevState) {
      var height = nextProps.height,
          rowCount = nextProps.rowCount,
          scrollToAlignment = nextProps.scrollToAlignment,
          scrollToRow = nextProps.scrollToRow,
          width = nextProps.width;
      var scrollTop = prevState.scrollTop,
          instanceProps = prevState.instanceProps;

      if (rowCount > 0) {
        var finalRow = rowCount - 1;
        var targetIndex = scrollToRow < 0 ? finalRow : Math.min(finalRow, scrollToRow);
        var totalColumnsWidth = instanceProps.columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = instanceProps.scrollbarSizeMeasured && totalColumnsWidth > width ? instanceProps.scrollbarSize : 0;
        return instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });
      }

      return 0;
    }
  }, {
    key: "_getScrollTopForScrollToRowStateUpdate",
    value: function _getScrollTopForScrollToRowStateUpdate(nextProps, prevState) {
      var scrollTop = prevState.scrollTop;

      var calculatedScrollTop = Grid._getCalculatedScrollTop(nextProps, prevState);

      if (typeof calculatedScrollTop === 'number' && calculatedScrollTop >= 0 && scrollTop !== calculatedScrollTop) {
        return Grid._getScrollToPositionStateUpdate({
          prevState: prevState,
          scrollLeft: -1,
          scrollTop: calculatedScrollTop
        });
      }

      return {};
    }
  }]);
  return Grid;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp);
(0, _defineProperty2["default"])(Grid, "defaultProps", {
  'aria-label': 'grid',
  'aria-readonly': true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: _defaultCellRangeRenderer["default"],
  containerRole: 'rowgroup',
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: _scrollbarSize["default"],
  noContentRenderer: renderNull,
  onScroll: function onScroll() {},
  onScrollbarPresenceChange: function onScrollbarPresenceChange() {},
  onSectionRendered: function onSectionRendered() {},
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter["default"],
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false
});
(0, _reactLifecyclesCompat.polyfill)(Grid);
var _default = Grid;
exports.default = _default;

/***/ }),

/***/ 45669:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultOverscanIndicesGetter;
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = void 0;

var _types = __webpack_require__(31826);

var SCROLL_DIRECTION_BACKWARD = -1;
exports.SCROLL_DIRECTION_BACKWARD = SCROLL_DIRECTION_BACKWARD;
var SCROLL_DIRECTION_FORWARD = 1;
exports.SCROLL_DIRECTION_FORWARD = SCROLL_DIRECTION_FORWARD;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
exports.SCROLL_DIRECTION_HORIZONTAL = SCROLL_DIRECTION_HORIZONTAL;
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

exports.SCROLL_DIRECTION_VERTICAL = SCROLL_DIRECTION_VERTICAL;

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;
  // Make sure we render at least 1 cell extra before and after (except near boundaries)
  // This is necessary in order to support keyboard navigation (TAB/SHIFT+TAB) in some cases
  // For more info see issues #625
  overscanCellsCount = Math.max(1, overscanCellsCount);

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex - 1),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + 1)
    };
  }
}

/***/ }),

/***/ 8824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultCellRangeRenderer;

var _types = __webpack_require__(31826);

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      isScrollingOptOut = _ref.isScrollingOptOut,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;
  var renderedCells = []; // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.

  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();
  var canCacheStyle = !isScrolling && !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = "".concat(rowIndex, "-").concat(columnIndex);
      var style = void 0; // Cache style objects so shallow-compare doesn't re-render unnecessarily.

      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMeasurementCache && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };
          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };
      var renderedCell = void 0; // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      //
      // If isScrollingOptOut is specified, we always cache cells.
      // For more info refer to issue #1028

      if ((isScrollingOptOut || isScrolling) && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key]; // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {}

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {}
}

/***/ }),

/***/ 74070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultOverscanIndicesGetter;
exports.SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_BACKWARD = void 0;

var _types = __webpack_require__(31826);

var SCROLL_DIRECTION_BACKWARD = -1;
exports.SCROLL_DIRECTION_BACKWARD = SCROLL_DIRECTION_BACKWARD;
var SCROLL_DIRECTION_FORWARD = 1;
exports.SCROLL_DIRECTION_FORWARD = SCROLL_DIRECTION_FORWARD;
var SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
exports.SCROLL_DIRECTION_HORIZONTAL = SCROLL_DIRECTION_HORIZONTAL;
var SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 */

exports.SCROLL_DIRECTION_VERTICAL = SCROLL_DIRECTION_VERTICAL;

function defaultOverscanIndicesGetter(_ref) {
  var cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  if (scrollDirection === SCROLL_DIRECTION_FORWARD) {
    return {
      overscanStartIndex: Math.max(0, startIndex),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
    };
  } else {
    return {
      overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
      overscanStopIndex: Math.min(cellCount - 1, stopIndex)
    };
  }
}

/***/ }),

/***/ 39305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _Grid["default"];
  }
}));
Object.defineProperty(exports, "Grid", ({
  enumerable: true,
  get: function get() {
    return _Grid["default"];
  }
}));
Object.defineProperty(exports, "accessibilityOverscanIndicesGetter", ({
  enumerable: true,
  get: function get() {
    return _accessibilityOverscanIndicesGetter["default"];
  }
}));
Object.defineProperty(exports, "defaultCellRangeRenderer", ({
  enumerable: true,
  get: function get() {
    return _defaultCellRangeRenderer["default"];
  }
}));
Object.defineProperty(exports, "defaultOverscanIndicesGetter", ({
  enumerable: true,
  get: function get() {
    return _defaultOverscanIndicesGetter["default"];
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_NoContentRenderer", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_NoContentRenderer;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_Alignment", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_Alignment;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_CellPosition", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_CellPosition;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_CellSize", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_CellSize;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_OverscanIndicesGetter", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_OverscanIndicesGetter;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_RenderedSection", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_RenderedSection;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_CellRendererParams", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_CellRendererParams;
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_Scroll", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_Scroll;
  }
}));

var _Grid = _interopRequireDefault(__webpack_require__(41427));

var _accessibilityOverscanIndicesGetter = _interopRequireDefault(__webpack_require__(45669));

var _defaultCellRangeRenderer = _interopRequireDefault(__webpack_require__(8824));

var _defaultOverscanIndicesGetter = _interopRequireDefault(__webpack_require__(74070));

var _types = __webpack_require__(31826);

/***/ }),

/***/ 31826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_VisibleCellRange = exports.bpfrpt_proptype_Alignment = exports.bpfrpt_proptype_OverscanIndicesGetter = exports.bpfrpt_proptype_OverscanIndices = exports.bpfrpt_proptype_OverscanIndicesGetterParams = exports.bpfrpt_proptype_RenderedSection = exports.bpfrpt_proptype_ScrollbarPresenceChange = exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_NoContentRenderer = exports.bpfrpt_proptype_CellSize = exports.bpfrpt_proptype_CellSizeGetter = exports.bpfrpt_proptype_CellRangeRenderer = exports.bpfrpt_proptype_CellRangeRendererParams = exports.bpfrpt_proptype_StyleCache = exports.bpfrpt_proptype_CellCache = exports.bpfrpt_proptype_CellRenderer = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_CellPosition = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(15825));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_CellPosition =  true ? null : 0;
exports.bpfrpt_proptype_CellPosition = bpfrpt_proptype_CellPosition;
var bpfrpt_proptype_CellRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_CellRendererParams = bpfrpt_proptype_CellRendererParams;
var bpfrpt_proptype_CellRenderer =  true ? null : 0;
exports.bpfrpt_proptype_CellRenderer = bpfrpt_proptype_CellRenderer;
var bpfrpt_proptype_CellCache =  true ? null : 0;
exports.bpfrpt_proptype_CellCache = bpfrpt_proptype_CellCache;
var bpfrpt_proptype_StyleCache =  true ? null : 0;
exports.bpfrpt_proptype_StyleCache = bpfrpt_proptype_StyleCache;
var bpfrpt_proptype_CellRangeRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_CellRangeRendererParams = bpfrpt_proptype_CellRangeRendererParams;
var bpfrpt_proptype_CellRangeRenderer =  true ? null : 0;
exports.bpfrpt_proptype_CellRangeRenderer = bpfrpt_proptype_CellRangeRenderer;
var bpfrpt_proptype_CellSizeGetter =  true ? null : 0;
exports.bpfrpt_proptype_CellSizeGetter = bpfrpt_proptype_CellSizeGetter;
var bpfrpt_proptype_CellSize =  true ? null : 0;
exports.bpfrpt_proptype_CellSize = bpfrpt_proptype_CellSize;
var bpfrpt_proptype_NoContentRenderer =  true ? null : 0;
exports.bpfrpt_proptype_NoContentRenderer = bpfrpt_proptype_NoContentRenderer;
var bpfrpt_proptype_Scroll =  true ? null : 0;
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;
var bpfrpt_proptype_ScrollbarPresenceChange =  true ? null : 0;
exports.bpfrpt_proptype_ScrollbarPresenceChange = bpfrpt_proptype_ScrollbarPresenceChange;
var bpfrpt_proptype_RenderedSection =  true ? null : 0;
exports.bpfrpt_proptype_RenderedSection = bpfrpt_proptype_RenderedSection;
var bpfrpt_proptype_OverscanIndicesGetterParams =  true ? null : 0;
exports.bpfrpt_proptype_OverscanIndicesGetterParams = bpfrpt_proptype_OverscanIndicesGetterParams;
var bpfrpt_proptype_OverscanIndices =  true ? null : 0;
exports.bpfrpt_proptype_OverscanIndices = bpfrpt_proptype_OverscanIndices;
var bpfrpt_proptype_OverscanIndicesGetter =  true ? null : 0;
exports.bpfrpt_proptype_OverscanIndicesGetter = bpfrpt_proptype_OverscanIndicesGetter;
var bpfrpt_proptype_Alignment =  true ? null : 0;
exports.bpfrpt_proptype_Alignment = bpfrpt_proptype_Alignment;
var bpfrpt_proptype_VisibleCellRange =  true ? null : 0;
exports.bpfrpt_proptype_VisibleCellRange = bpfrpt_proptype_VisibleCellRange;

/***/ }),

/***/ 50553:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _types = __webpack_require__(31826);

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager =
/*#__PURE__*/
function () {
  // Cache of size and position data for cells, mapped by cell index.
  // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
  // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
  // Used in deferred mode to track which cells have been queued for measurement.
  function CellSizeAndPositionManager(_ref) {
    var cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;
    (0, _classCallCheck2["default"])(this, CellSizeAndPositionManager);
    (0, _defineProperty2["default"])(this, "_cellSizeAndPositionData", {});
    (0, _defineProperty2["default"])(this, "_lastMeasuredIndex", -1);
    (0, _defineProperty2["default"])(this, "_lastBatchedIndex", -1);
    (0, _defineProperty2["default"])(this, "_cellCount", void 0);
    (0, _defineProperty2["default"])(this, "_cellSizeGetter", void 0);
    (0, _defineProperty2["default"])(this, "_estimatedCellSize", void 0);
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;
  }

  (0, _createClass2["default"])(CellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: "configure",
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize,
          cellSizeGetter = _ref2.cellSizeGetter;
      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
      this._cellSizeGetter = cellSizeGetter;
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment() {
      return 0;
    }
    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error("Requested index ".concat(index, " is outside of range 0..").concat(this._cellCount));
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var size = this._cellSizeGetter({
            index: i
          }); // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.


          if (size === undefined || isNaN(size)) {
            throw Error("Invalid size returned for cell ".concat(i, " of value ").concat(size));
          } else if (size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: 0
            };
            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: offset,
              size: size
            };
            offset += size;
            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }
    /**
     * Total size of all cells being measured.
     * This value will be completely estimated initially.
     * As cells are measured, the estimate will be updated.
     */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var totalSizeOfMeasuredCells = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;
      var numUnmeasuredCells = this._cellCount - this._lastMeasuredIndex - 1;
      var totalSizeOfUnmeasuredCells = numUnmeasuredCells * this._estimatedCellSize;
      return totalSizeOfMeasuredCells + totalSizeOfUnmeasuredCells;
    }
    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;
      var idealOffset;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;

        case 'end':
          idealOffset = minOffset;
          break;

        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;

        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();
      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(params) {
      var containerSize = params.containerSize,
          offset = params.offset;
      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;

      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;
      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;
        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }
    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: "_binarySearch",
    value: function _binarySearch(high, low, offset) {
      while (low <= high) {
        var middle = low + Math.floor((high - low) / 2);
        var currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    }
  }, {
    key: "_exponentialSearch",
    value: function _exponentialSearch(index, offset) {
      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch(Math.min(index, this._cellCount - 1), Math.floor(index / 2), offset);
    }
    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: "_findNearestCell",
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error("Invalid offset ".concat(offset, " specified"));
      } // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.


      offset = Math.max(0, offset);
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch(lastMeasuredIndex, 0, offset);
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch(lastMeasuredIndex, offset);
      }
    }
  }]);
  return CellSizeAndPositionManager;
}();

exports.default = CellSizeAndPositionManager;

/***/ }),

/***/ 15825:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(6479));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _CellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(50553));

var _maxElementSize = __webpack_require__(41333);

var _types = __webpack_require__(31826);

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */
var ScalingCellSizeAndPositionManager =
/*#__PURE__*/
function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === void 0 ? (0, _maxElementSize.getMaxElementSize)() : _ref$maxScrollSize,
        params = (0, _objectWithoutProperties2["default"])(_ref, ["maxScrollSize"]);
    (0, _classCallCheck2["default"])(this, ScalingCellSizeAndPositionManager);
    (0, _defineProperty2["default"])(this, "_cellSizeAndPositionManager", void 0);
    (0, _defineProperty2["default"])(this, "_maxScrollSize", void 0);
    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager["default"](params);
    this._maxScrollSize = maxScrollSize;
  }

  (0, _createClass2["default"])(ScalingCellSizeAndPositionManager, [{
    key: "areOffsetsAdjusted",
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: "configure",
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: "getCellCount",
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: "getEstimatedCellSize",
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: "getLastMeasuredIndex",
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }
    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scaled (safe) as well.
     */

  }, {
    key: "getOffsetAdjustment",
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: "getSizeAndPositionOfCell",
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: "getSizeAndPositionOfLastMeasuredCell",
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }
    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: "getTotalSize",
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }
    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: "getUpdatedOffsetForIndex",
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === void 0 ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex;
      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }
    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: "getVisibleCellRange",
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;
      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });
      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: "resetCell",
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: "_getOffsetPercentage",
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;
      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: "_offsetToSafeOffset",
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: "_safeOffsetToOffset",
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();

      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);
  return ScalingCellSizeAndPositionManager;
}();

exports.default = ScalingCellSizeAndPositionManager;

/***/ }),

/***/ 38022:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;

/**
 * Helper method that determines when to recalculate row or column metadata.
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps); // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.

    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),

/***/ 41333:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMaxElementSize = void 0;
var DEFAULT_MAX_ELEMENT_SIZE = 1500000;
var CHROME_MAX_ELEMENT_SIZE = 1.67771e7;

var isBrowser = function isBrowser() {
  return typeof window !== 'undefined';
};

var isChrome = function isChrome() {
  return !!window.chrome;
};

var getMaxElementSize = function getMaxElementSize() {
  if (isBrowser()) {
    if (isChrome()) {
      return CHROME_MAX_ELEMENT_SIZE;
    }
  }

  return DEFAULT_MAX_ELEMENT_SIZE;
};

exports.getMaxElementSize = getMaxElementSize;

/***/ }),

/***/ 4675:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = updateScrollIndexHelper;

var _ScalingCellSizeAndPositionManager = _interopRequireDefault(__webpack_require__(15825));

var _types = __webpack_require__(31826);

function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      sizeJustIncreasedFromZero = _ref.sizeJustIncreasedFromZero,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;
  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || sizeJustIncreasedFromZero || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize; // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.

  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex); // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),

/***/ 2178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isRangeVisible = isRangeVisible;
exports.scanForUnloadedRanges = scanForUnloadedRanges;
exports.forceUpdateReactVirtualizedComponent = forceUpdateReactVirtualizedComponent;
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(319));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _createCallbackMemoizer = _interopRequireDefault(__webpack_require__(41498));

/**
 * Higher-order component that manages lazy-loading for "infinite" data.
 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
 */
var InfiniteLoader =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(InfiniteLoader, _React$PureComponent);

  function InfiniteLoader(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, InfiniteLoader);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InfiniteLoader).call(this, props, context));
    _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer["default"])();
    _this._onRowsRendered = _this._onRowsRendered.bind((0, _assertThisInitialized2["default"])(_this));
    _this._registerChild = _this._registerChild.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(InfiniteLoader, [{
    key: "resetLoadMoreRowsCache",
    value: function resetLoadMoreRowsCache(autoReload) {
      this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer["default"])();

      if (autoReload) {
        this._doStuff(this._lastRenderedStartIndex, this._lastRenderedStopIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        onRowsRendered: this._onRowsRendered,
        registerChild: this._registerChild
      });
    }
  }, {
    key: "_loadUnloadedRanges",
    value: function _loadUnloadedRanges(unloadedRanges) {
      var _this2 = this;

      var loadMoreRows = this.props.loadMoreRows;
      unloadedRanges.forEach(function (unloadedRange) {
        var promise = loadMoreRows(unloadedRange);

        if (promise) {
          promise.then(function () {
            // Refresh the visible rows if any of them have just been loaded.
            // Otherwise they will remain in their unloaded visual state.
            if (isRangeVisible({
              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
              startIndex: unloadedRange.startIndex,
              stopIndex: unloadedRange.stopIndex
            })) {
              if (_this2._registeredChild) {
                forceUpdateReactVirtualizedComponent(_this2._registeredChild, _this2._lastRenderedStartIndex);
              }
            }
          });
        }
      });
    }
  }, {
    key: "_onRowsRendered",
    value: function _onRowsRendered(_ref) {
      var startIndex = _ref.startIndex,
          stopIndex = _ref.stopIndex;
      this._lastRenderedStartIndex = startIndex;
      this._lastRenderedStopIndex = stopIndex;

      this._doStuff(startIndex, stopIndex);
    }
  }, {
    key: "_doStuff",
    value: function _doStuff(startIndex, stopIndex) {
      var _ref2,
          _this3 = this;

      var _this$props = this.props,
          isRowLoaded = _this$props.isRowLoaded,
          minimumBatchSize = _this$props.minimumBatchSize,
          rowCount = _this$props.rowCount,
          threshold = _this$props.threshold;
      var unloadedRanges = scanForUnloadedRanges({
        isRowLoaded: isRowLoaded,
        minimumBatchSize: minimumBatchSize,
        rowCount: rowCount,
        startIndex: Math.max(0, startIndex - threshold),
        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
      }); // For memoize comparison

      var squashedUnloadedRanges = (_ref2 = []).concat.apply(_ref2, (0, _toConsumableArray2["default"])(unloadedRanges.map(function (_ref3) {
        var startIndex = _ref3.startIndex,
            stopIndex = _ref3.stopIndex;
        return [startIndex, stopIndex];
      })));

      this._loadMoreRowsMemoizer({
        callback: function callback() {
          _this3._loadUnloadedRanges(unloadedRanges);
        },
        indices: {
          squashedUnloadedRanges: squashedUnloadedRanges
        }
      });
    }
  }, {
    key: "_registerChild",
    value: function _registerChild(registeredChild) {
      this._registeredChild = registeredChild;
    }
  }]);
  return InfiniteLoader;
}(React.PureComponent);
/**
 * Determines if the specified start/stop range is visible based on the most recently rendered range.
 */


exports.default = InfiniteLoader;
(0, _defineProperty2["default"])(InfiniteLoader, "defaultProps", {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15
});
InfiniteLoader.propTypes =  false ? 0 : {};

function isRangeVisible(_ref4) {
  var lastRenderedStartIndex = _ref4.lastRenderedStartIndex,
      lastRenderedStopIndex = _ref4.lastRenderedStopIndex,
      startIndex = _ref4.startIndex,
      stopIndex = _ref4.stopIndex;
  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
}
/**
 * Returns all of the ranges within a larger range that contain unloaded rows.
 */


function scanForUnloadedRanges(_ref5) {
  var isRowLoaded = _ref5.isRowLoaded,
      minimumBatchSize = _ref5.minimumBatchSize,
      rowCount = _ref5.rowCount,
      startIndex = _ref5.startIndex,
      stopIndex = _ref5.stopIndex;
  var unloadedRanges = [];
  var rangeStartIndex = null;
  var rangeStopIndex = null;

  for (var index = startIndex; index <= stopIndex; index++) {
    var loaded = isRowLoaded({
      index: index
    });

    if (!loaded) {
      rangeStopIndex = index;

      if (rangeStartIndex === null) {
        rangeStartIndex = index;
      }
    } else if (rangeStopIndex !== null) {
      unloadedRanges.push({
        startIndex: rangeStartIndex,
        stopIndex: rangeStopIndex
      });
      rangeStartIndex = rangeStopIndex = null;
    }
  } // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
  // Scan forward to try filling our :minimumBatchSize.


  if (rangeStopIndex !== null) {
    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
      if (!isRowLoaded({
        index: _index
      })) {
        rangeStopIndex = _index;
      } else {
        break;
      }
    }

    unloadedRanges.push({
      startIndex: rangeStartIndex,
      stopIndex: rangeStopIndex
    });
  } // Check to see if our first range ended prematurely.
  // In this case we should scan backwards to try filling our :minimumBatchSize.


  if (unloadedRanges.length) {
    var firstUnloadedRange = unloadedRanges[0];

    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
      var _index2 = firstUnloadedRange.startIndex - 1;

      if (!isRowLoaded({
        index: _index2
      })) {
        firstUnloadedRange.startIndex = _index2;
      } else {
        break;
      }
    }
  }

  return unloadedRanges;
}
/**
 * Since RV components use shallowCompare we need to force a render (even though props haven't changed).
 * However InfiniteLoader may wrap a Grid or it may wrap a Table or List.
 * In the first case the built-in React forceUpdate() method is sufficient to force a re-render,
 * But in the latter cases we need to use the RV-specific forceUpdateGrid() method.
 * Else the inner Grid will not be re-rendered and visuals may be stale.
 *
 * Additionally, while a Grid is scrolling the cells can be cached,
 * So it's important to invalidate that cache by recalculating sizes
 * before forcing a rerender.
 */


function forceUpdateReactVirtualizedComponent(component) {
  var currentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var recomputeSize = typeof component.recomputeGridSize === 'function' ? component.recomputeGridSize : component.recomputeRowHeights;

  if (recomputeSize) {
    recomputeSize.call(component, currentIndex);
  } else {
    component.forceUpdate();
  }
}

/***/ }),

/***/ 71249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "InfiniteLoader", ({
  enumerable: true,
  get: function get() {
    return _InfiniteLoader["default"];
  }
}));
exports.default = void 0;

var _InfiniteLoader = _interopRequireDefault(__webpack_require__(2178));

var _default = _InfiniteLoader["default"];
exports.default = _default;

/***/ }),

/***/ 41233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _Grid = _interopRequireWildcard(__webpack_require__(39305));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _clsx = _interopRequireDefault(__webpack_require__(62001));

var _types = __webpack_require__(72049);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

var List = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(List, _React$PureComponent);

  function List() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Grid", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellRenderer", function (_ref) {
      var parent = _ref.parent,
          rowIndex = _ref.rowIndex,
          style = _ref.style,
          isScrolling = _ref.isScrolling,
          isVisible = _ref.isVisible,
          key = _ref.key;
      var rowRenderer = _this.props.rowRenderer; // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var widthDescriptor = Object.getOwnPropertyDescriptor(style, 'width');

      if (widthDescriptor && widthDescriptor.writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer({
        index: rowIndex,
        style: style,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRef", function (ref) {
      _this.Grid = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;
      var onScroll = _this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSectionRendered", function (_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
          rowStartIndex = _ref3.rowStartIndex,
          rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered = _this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(List, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref4) {
      var alignment = _ref4.alignment,
          index = _ref4.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index,
          columnIndex: 0
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref5) {
      var columnIndex = _ref5.columnIndex,
          rowIndex = _ref5.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$columnIndex = _ref6.columnIndex,
          columnIndex = _ref6$columnIndex === void 0 ? 0 : _ref6$columnIndex,
          _ref6$rowIndex = _ref6.rowIndex,
          rowIndex = _ref6$rowIndex === void 0 ? 0 : _ref6$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index,
          columnIndex: 0
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          noRowsRenderer = _this$props.noRowsRenderer,
          scrollToIndex = _this$props.scrollToIndex,
          width = _this$props.width;
      var classNames = (0, _clsx["default"])('ReactVirtualized__List', className);
      return React.createElement(_Grid["default"], (0, _extends2["default"])({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }]);
  return List;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp);
exports.default = List;
(0, _defineProperty2["default"])(List, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function onScroll() {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {},
  overscanIndicesGetter: _Grid.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});

/***/ }),

/***/ 35277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _List["default"];
  }
}));
Object.defineProperty(exports, "List", ({
  enumerable: true,
  get: function get() {
    return _List["default"];
  }
}));
Object.defineProperty(exports, "bpfrpt_proptype_RowRendererParams", ({
  enumerable: true,
  get: function get() {
    return _types.bpfrpt_proptype_RowRendererParams;
  }
}));

var _List = _interopRequireDefault(__webpack_require__(41233));

var _types = __webpack_require__(72049);

/***/ }),

/***/ 72049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_Scroll = exports.bpfrpt_proptype_RenderedRows = exports.bpfrpt_proptype_RowRenderer = exports.bpfrpt_proptype_RowRendererParams = void 0;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_RowRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_RowRendererParams = bpfrpt_proptype_RowRendererParams;
var bpfrpt_proptype_RowRenderer =  true ? null : 0;
exports.bpfrpt_proptype_RowRenderer = bpfrpt_proptype_RowRenderer;
var bpfrpt_proptype_RenderedRows =  true ? null : 0;
exports.bpfrpt_proptype_RenderedRows = bpfrpt_proptype_RenderedRows;
var bpfrpt_proptype_Scroll =  true ? null : 0;
exports.bpfrpt_proptype_Scroll = bpfrpt_proptype_Scroll;

/***/ }),

/***/ 41347:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_Positioner = exports.bpfrpt_proptype_CellMeasurerCache = exports.default = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _clsx = _interopRequireDefault(__webpack_require__(62001));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _reactLifecyclesCompat = __webpack_require__(10752);

var _PositionCache = _interopRequireDefault(__webpack_require__(46555));

var _requestAnimationTimeout = __webpack_require__(96271);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var emptyObject = {};
/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */

var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;
/**
 * This component efficiently displays arbitrarily positioned cells using windowing techniques.
 * Cell position is determined by an injected `cellPositioner` property.
 * Windowing is vertical; this component does not support horizontal scrolling.
 *
 * Rendering occurs in two phases:
 * 1) First pass uses estimated cell sizes (provided by the cache) to determine how many cells to measure in a batch.
 *    Batch size is chosen using a fast, naive layout algorithm that stacks images in order until the viewport has been filled.
 *    After measurement is complete (componentDidMount or componentDidUpdate) this component evaluates positioned cells
 *    in order to determine if another measurement pass is required (eg if actual cell sizes were less than estimated sizes).
 *    All measurements are permanently cached (keyed by `keyMapper`) for performance purposes.
 * 2) Second pass uses the external `cellPositioner` to layout cells.
 *    At this time the positioner has access to cached size measurements for all cells.
 *    The positions it returns are cached by Masonry for fast access later.
 *    Phase one is repeated if the user scrolls beyond the current layout's bounds.
 *    If the layout is invalidated due to eg a resize, cached positions can be cleared using `recomputeCellPositions()`.
 *
 * Animation constraints:
 *   Simple animations are supported (eg translate/slide into place on initial reveal).
 *   More complex animations are not (eg flying from one position to another on resize).
 *
 * Layout constraints:
 *   This component supports multi-column layout.
 *   The height of each item may vary.
 *   The width of each item must not exceed the width of the column it is "in".
 *   The left position of all items within a column must align.
 *   (Items may not span multiple columns.)
 */

exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = DEFAULT_SCROLLING_RESET_TIME_INTERVAL;
var Masonry = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Masonry, _React$PureComponent);

  function Masonry() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Masonry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Masonry)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isScrolling: false,
      scrollTop: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_debounceResetIsScrollingId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_invalidateOnUpdateStartIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_invalidateOnUpdateStopIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_positionCache", new _PositionCache["default"]());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startIndexMemoized", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_stopIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_stopIndexMemoized", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_debounceResetIsScrollingCallback", function () {
      _this.setState({
        isScrolling: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setScrollingContainerRef", function (ref) {
      _this._scrollingContainer = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (event) {
      var height = _this.props.height;
      var eventScrollTop = event.currentTarget.scrollTop; // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollTop = Math.min(Math.max(0, _this._getEstimatedTotalHeight() - height), eventScrollTop); // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.

      if (eventScrollTop !== scrollTop) {
        return;
      } // Prevent pointer events from interrupting a smooth scroll


      _this._debounceResetIsScrolling(); // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.


      if (_this.state.scrollTop !== scrollTop) {
        _this.setState({
          isScrolling: true,
          scrollTop: scrollTop
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Masonry, [{
    key: "clearCellPositions",
    value: function clearCellPositions() {
      this._positionCache = new _PositionCache["default"]();
      this.forceUpdate();
    } // HACK This method signature was intended for Grid

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref) {
      var index = _ref.rowIndex;

      if (this._invalidateOnUpdateStartIndex === null) {
        this._invalidateOnUpdateStartIndex = index;
        this._invalidateOnUpdateStopIndex = index;
      } else {
        this._invalidateOnUpdateStartIndex = Math.min(this._invalidateOnUpdateStartIndex, index);
        this._invalidateOnUpdateStopIndex = Math.max(this._invalidateOnUpdateStopIndex, index);
      }
    }
  }, {
    key: "recomputeCellPositions",
    value: function recomputeCellPositions() {
      var stopIndex = this._positionCache.count - 1;
      this._positionCache = new _PositionCache["default"]();

      this._populatePositionCache(0, stopIndex);

      this.forceUpdate();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._checkInvalidateOnUpdate();

      this._invokeOnScrollCallback();

      this._invokeOnCellsRenderedCallback();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this._checkInvalidateOnUpdate();

      this._invokeOnScrollCallback();

      this._invokeOnCellsRenderedCallback();

      if (this.props.scrollTop !== prevProps.scrollTop) {
        this._debounceResetIsScrolling();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._debounceResetIsScrollingId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          autoHeight = _this$props.autoHeight,
          cellCount = _this$props.cellCount,
          cellMeasurerCache = _this$props.cellMeasurerCache,
          cellRenderer = _this$props.cellRenderer,
          className = _this$props.className,
          height = _this$props.height,
          id = _this$props.id,
          keyMapper = _this$props.keyMapper,
          overscanByPixels = _this$props.overscanByPixels,
          role = _this$props.role,
          style = _this$props.style,
          tabIndex = _this$props.tabIndex,
          width = _this$props.width,
          rowDirection = _this$props.rowDirection;
      var _this$state = this.state,
          isScrolling = _this$state.isScrolling,
          scrollTop = _this$state.scrollTop;
      var children = [];

      var estimateTotalHeight = this._getEstimatedTotalHeight();

      var shortestColumnSize = this._positionCache.shortestColumnSize;
      var measuredCellCount = this._positionCache.count;
      var startIndex = 0;
      var stopIndex;

      this._positionCache.range(Math.max(0, scrollTop - overscanByPixels), height + overscanByPixels * 2, function (index, left, top) {
        var _style;

        if (typeof stopIndex === 'undefined') {
          startIndex = index;
          stopIndex = index;
        } else {
          startIndex = Math.min(startIndex, index);
          stopIndex = Math.max(stopIndex, index);
        }

        children.push(cellRenderer({
          index: index,
          isScrolling: isScrolling,
          key: keyMapper(index),
          parent: _this2,
          style: (_style = {
            height: cellMeasurerCache.getHeight(index)
          }, (0, _defineProperty2["default"])(_style, rowDirection === 'ltr' ? 'left' : 'right', left), (0, _defineProperty2["default"])(_style, "position", 'absolute'), (0, _defineProperty2["default"])(_style, "top", top), (0, _defineProperty2["default"])(_style, "width", cellMeasurerCache.getWidth(index)), _style)
        }));
      }); // We need to measure additional cells for this layout


      if (shortestColumnSize < scrollTop + height + overscanByPixels && measuredCellCount < cellCount) {
        var batchSize = Math.min(cellCount - measuredCellCount, Math.ceil((scrollTop + height + overscanByPixels - shortestColumnSize) / cellMeasurerCache.defaultHeight * width / cellMeasurerCache.defaultWidth));

        for (var _index = measuredCellCount; _index < measuredCellCount + batchSize; _index++) {
          stopIndex = _index;
          children.push(cellRenderer({
            index: _index,
            isScrolling: isScrolling,
            key: keyMapper(_index),
            parent: this,
            style: {
              width: cellMeasurerCache.getWidth(_index)
            }
          }));
        }
      }

      this._startIndex = startIndex;
      this._stopIndex = stopIndex;
      return React.createElement("div", {
        ref: this._setScrollingContainerRef,
        "aria-label": this.props['aria-label'],
        className: (0, _clsx["default"])('ReactVirtualized__Masonry', className),
        id: id,
        onScroll: this._onScroll,
        role: role,
        style: _objectSpread({
          boxSizing: 'border-box',
          direction: 'ltr',
          height: autoHeight ? 'auto' : height,
          overflowX: 'hidden',
          overflowY: estimateTotalHeight < height ? 'hidden' : 'auto',
          position: 'relative',
          width: width,
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform'
        }, style),
        tabIndex: tabIndex
      }, React.createElement("div", {
        className: "ReactVirtualized__Masonry__innerScrollContainer",
        style: {
          width: '100%',
          height: estimateTotalHeight,
          maxWidth: '100%',
          maxHeight: estimateTotalHeight,
          overflow: 'hidden',
          pointerEvents: isScrolling ? 'none' : '',
          position: 'relative'
        }
      }, children));
    }
  }, {
    key: "_checkInvalidateOnUpdate",
    value: function _checkInvalidateOnUpdate() {
      if (typeof this._invalidateOnUpdateStartIndex === 'number') {
        var startIndex = this._invalidateOnUpdateStartIndex;
        var stopIndex = this._invalidateOnUpdateStopIndex;
        this._invalidateOnUpdateStartIndex = null;
        this._invalidateOnUpdateStopIndex = null; // Query external layout logic for position of newly-measured cells

        this._populatePositionCache(startIndex, stopIndex);

        this.forceUpdate();
      }
    }
  }, {
    key: "_debounceResetIsScrolling",
    value: function _debounceResetIsScrolling() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;

      if (this._debounceResetIsScrollingId) {
        (0, _requestAnimationTimeout.cancelAnimationTimeout)(this._debounceResetIsScrollingId);
      }

      this._debounceResetIsScrollingId = (0, _requestAnimationTimeout.requestAnimationTimeout)(this._debounceResetIsScrollingCallback, scrollingResetTimeInterval);
    }
  }, {
    key: "_getEstimatedTotalHeight",
    value: function _getEstimatedTotalHeight() {
      var _this$props2 = this.props,
          cellCount = _this$props2.cellCount,
          cellMeasurerCache = _this$props2.cellMeasurerCache,
          width = _this$props2.width;
      var estimatedColumnCount = Math.max(1, Math.floor(width / cellMeasurerCache.defaultWidth));
      return this._positionCache.estimateTotalHeight(cellCount, estimatedColumnCount, cellMeasurerCache.defaultHeight);
    }
  }, {
    key: "_invokeOnScrollCallback",
    value: function _invokeOnScrollCallback() {
      var _this$props3 = this.props,
          height = _this$props3.height,
          onScroll = _this$props3.onScroll;
      var scrollTop = this.state.scrollTop;

      if (this._onScrollMemoized !== scrollTop) {
        onScroll({
          clientHeight: height,
          scrollHeight: this._getEstimatedTotalHeight(),
          scrollTop: scrollTop
        });
        this._onScrollMemoized = scrollTop;
      }
    }
  }, {
    key: "_invokeOnCellsRenderedCallback",
    value: function _invokeOnCellsRenderedCallback() {
      if (this._startIndexMemoized !== this._startIndex || this._stopIndexMemoized !== this._stopIndex) {
        var onCellsRendered = this.props.onCellsRendered;
        onCellsRendered({
          startIndex: this._startIndex,
          stopIndex: this._stopIndex
        });
        this._startIndexMemoized = this._startIndex;
        this._stopIndexMemoized = this._stopIndex;
      }
    }
  }, {
    key: "_populatePositionCache",
    value: function _populatePositionCache(startIndex, stopIndex) {
      var _this$props4 = this.props,
          cellMeasurerCache = _this$props4.cellMeasurerCache,
          cellPositioner = _this$props4.cellPositioner;

      for (var _index2 = startIndex; _index2 <= stopIndex; _index2++) {
        var _cellPositioner = cellPositioner(_index2),
            left = _cellPositioner.left,
            top = _cellPositioner.top;

        this._positionCache.setPosition(_index2, left, top, cellMeasurerCache.getHeight(_index2));
      }
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollTop !== undefined && prevState.scrollTop !== nextProps.scrollTop) {
        return {
          isScrolling: true,
          scrollTop: nextProps.scrollTop
        };
      }

      return null;
    }
  }]);
  return Masonry;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp);
(0, _defineProperty2["default"])(Masonry, "defaultProps", {
  autoHeight: false,
  keyMapper: identity,
  onCellsRendered: noop,
  onScroll: noop,
  overscanByPixels: 20,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  style: emptyObject,
  tabIndex: 0,
  rowDirection: 'ltr'
});

function identity(value) {
  return value;
}

function noop() {}

var bpfrpt_proptype_CellMeasurerCache =  true ? null : 0;
exports.bpfrpt_proptype_CellMeasurerCache = bpfrpt_proptype_CellMeasurerCache;
(0, _reactLifecyclesCompat.polyfill)(Masonry);
var _default = Masonry;
exports.default = _default;
var bpfrpt_proptype_Positioner =  true ? null : 0;
exports.bpfrpt_proptype_Positioner = bpfrpt_proptype_Positioner;

/***/ }),

/***/ 46555:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(63038));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _intervalTree = _interopRequireDefault(__webpack_require__(78694));

// Position cache requirements:
//   O(log(n)) lookup of cells to render for a given viewport size
//   O(1) lookup of shortest measured column (so we know when to enter phase 1)
var PositionCache =
/*#__PURE__*/
function () {
  function PositionCache() {
    (0, _classCallCheck2["default"])(this, PositionCache);
    (0, _defineProperty2["default"])(this, "_columnSizeMap", {});
    (0, _defineProperty2["default"])(this, "_intervalTree", (0, _intervalTree["default"])());
    (0, _defineProperty2["default"])(this, "_leftMap", {});
  }

  (0, _createClass2["default"])(PositionCache, [{
    key: "estimateTotalHeight",
    value: function estimateTotalHeight(cellCount, columnCount, defaultCellHeight) {
      var unmeasuredCellCount = cellCount - this.count;
      return this.tallestColumnSize + Math.ceil(unmeasuredCellCount / columnCount) * defaultCellHeight;
    } // Render all cells visible within the viewport range defined.

  }, {
    key: "range",
    value: function range(scrollTop, clientHeight, renderCallback) {
      var _this = this;

      this._intervalTree.queryInterval(scrollTop, scrollTop + clientHeight, function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 3),
            top = _ref2[0],
            _ = _ref2[1],
            index = _ref2[2];

        return renderCallback(index, _this._leftMap[index], top);
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(index, left, top, height) {
      this._intervalTree.insert([top, top + height, index]);

      this._leftMap[index] = left;
      var columnSizeMap = this._columnSizeMap;
      var columnHeight = columnSizeMap[left];

      if (columnHeight === undefined) {
        columnSizeMap[left] = top + height;
      } else {
        columnSizeMap[left] = Math.max(columnHeight, top + height);
      }
    }
  }, {
    key: "count",
    get: function get() {
      return this._intervalTree.count;
    }
  }, {
    key: "shortestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = size === 0 ? height : Math.min(size, height);
      }

      return size;
    }
  }, {
    key: "tallestColumnSize",
    get: function get() {
      var columnSizeMap = this._columnSizeMap;
      var size = 0;

      for (var i in columnSizeMap) {
        var height = columnSizeMap[i];
        size = Math.max(size, height);
      }

      return size;
    }
  }]);
  return PositionCache;
}();

exports.default = PositionCache;

/***/ }),

/***/ 87062:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createCellPositioner;

var _Masonry = __webpack_require__(41347);

function createCellPositioner(_ref) {
  var cellMeasurerCache = _ref.cellMeasurerCache,
      columnCount = _ref.columnCount,
      columnWidth = _ref.columnWidth,
      _ref$spacer = _ref.spacer,
      spacer = _ref$spacer === void 0 ? 0 : _ref$spacer;
  var columnHeights;
  initOrResetDerivedValues();

  function cellPositioner(index) {
    // Find the shortest column and use it.
    var columnIndex = 0;

    for (var i = 1; i < columnHeights.length; i++) {
      if (columnHeights[i] < columnHeights[columnIndex]) {
        columnIndex = i;
      }
    }

    var left = columnIndex * (columnWidth + spacer);
    var top = columnHeights[columnIndex] || 0;
    columnHeights[columnIndex] = top + cellMeasurerCache.getHeight(index) + spacer;
    return {
      left: left,
      top: top
    };
  }

  function initOrResetDerivedValues() {
    // Track the height of each column.
    // Layout algorithm below always inserts into the shortest column.
    columnHeights = [];

    for (var i = 0; i < columnCount; i++) {
      columnHeights[i] = 0;
    }
  }

  function reset(params) {
    columnCount = params.columnCount;
    columnWidth = params.columnWidth;
    spacer = params.spacer;
    initOrResetDerivedValues();
  }

  cellPositioner.reset = reset;
  return cellPositioner;
}

/***/ }),

/***/ 50228:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "createCellPositioner", ({
  enumerable: true,
  get: function get() {
    return _createCellPositioner["default"];
  }
}));
Object.defineProperty(exports, "Masonry", ({
  enumerable: true,
  get: function get() {
    return _Masonry["default"];
  }
}));
exports.default = void 0;

var _createCellPositioner = _interopRequireDefault(__webpack_require__(87062));

var _Masonry = _interopRequireDefault(__webpack_require__(41347));

var _default = _Masonry["default"];
exports.default = _default;

/***/ }),

/***/ 9274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _CellMeasurer = __webpack_require__(11866);

/**
 * Caches measurements for a given cell.
 */
var CellMeasurerCacheDecorator =
/*#__PURE__*/
function () {
  function CellMeasurerCacheDecorator() {
    var _this = this;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, CellMeasurerCacheDecorator);
    (0, _defineProperty2["default"])(this, "_cellMeasurerCache", void 0);
    (0, _defineProperty2["default"])(this, "_columnIndexOffset", void 0);
    (0, _defineProperty2["default"])(this, "_rowIndexOffset", void 0);
    (0, _defineProperty2["default"])(this, "columnWidth", function (_ref) {
      var index = _ref.index;

      _this._cellMeasurerCache.columnWidth({
        index: index + _this._columnIndexOffset
      });
    });
    (0, _defineProperty2["default"])(this, "rowHeight", function (_ref2) {
      var index = _ref2.index;

      _this._cellMeasurerCache.rowHeight({
        index: index + _this._rowIndexOffset
      });
    });
    var cellMeasurerCache = params.cellMeasurerCache,
        _params$columnIndexOf = params.columnIndexOffset,
        columnIndexOffset = _params$columnIndexOf === void 0 ? 0 : _params$columnIndexOf,
        _params$rowIndexOffse = params.rowIndexOffset,
        rowIndexOffset = _params$rowIndexOffse === void 0 ? 0 : _params$rowIndexOffse;
    this._cellMeasurerCache = cellMeasurerCache;
    this._columnIndexOffset = columnIndexOffset;
    this._rowIndexOffset = rowIndexOffset;
  }

  (0, _createClass2["default"])(CellMeasurerCacheDecorator, [{
    key: "clear",
    value: function clear(rowIndex, columnIndex) {
      this._cellMeasurerCache.clear(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "clearAll",
    value: function clearAll() {
      this._cellMeasurerCache.clearAll();
    }
  }, {
    key: "hasFixedHeight",
    value: function hasFixedHeight() {
      return this._cellMeasurerCache.hasFixedHeight();
    }
  }, {
    key: "hasFixedWidth",
    value: function hasFixedWidth() {
      return this._cellMeasurerCache.hasFixedWidth();
    }
  }, {
    key: "getHeight",
    value: function getHeight(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getHeight(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "getWidth",
    value: function getWidth(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.getWidth(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "has",
    value: function has(rowIndex) {
      var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return this._cellMeasurerCache.has(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset);
    }
  }, {
    key: "set",
    value: function set(rowIndex, columnIndex, width, height) {
      this._cellMeasurerCache.set(rowIndex + this._rowIndexOffset, columnIndex + this._columnIndexOffset, width, height);
    }
  }, {
    key: "defaultHeight",
    get: function get() {
      return this._cellMeasurerCache.defaultHeight;
    }
  }, {
    key: "defaultWidth",
    get: function get() {
      return this._cellMeasurerCache.defaultWidth;
    }
  }]);
  return CellMeasurerCacheDecorator;
}();

exports.default = CellMeasurerCacheDecorator;

/***/ }),

/***/ 32056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(6479));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _reactLifecyclesCompat = __webpack_require__(10752);

var _CellMeasurerCacheDecorator = _interopRequireDefault(__webpack_require__(9274));

var _Grid = _interopRequireDefault(__webpack_require__(39305));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SCROLLBAR_SIZE_BUFFER = 20;
/**
 * Renders 1, 2, or 4 Grids depending on configuration.
 * A main (body) Grid will always be rendered.
 * Optionally, 1-2 Grids for sticky header rows will also be rendered.
 * If no sticky columns, only 1 sticky header Grid will be rendered.
 * If sticky columns, 2 sticky header Grids will be rendered.
 */

var MultiGrid =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(MultiGrid, _React$PureComponent);

  function MultiGrid(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, MultiGrid);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MultiGrid).call(this, props, context));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deferredInvalidateColumnIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deferredInvalidateRowIndex", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_bottomLeftGridRef", function (ref) {
      _this._bottomLeftGrid = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_bottomRightGridRef", function (ref) {
      _this._bottomRightGrid = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellRendererBottomLeftGrid", function (_ref) {
      var rowIndex = _ref.rowIndex,
          rest = (0, _objectWithoutProperties2["default"])(_ref, ["rowIndex"]);
      var _this$props = _this.props,
          cellRenderer = _this$props.cellRenderer,
          fixedRowCount = _this$props.fixedRowCount,
          rowCount = _this$props.rowCount;

      if (rowIndex === rowCount - fixedRowCount) {
        return React.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            height: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          parent: (0, _assertThisInitialized2["default"])(_this),
          rowIndex: rowIndex + fixedRowCount
        }));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellRendererBottomRightGrid", function (_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex,
          rest = (0, _objectWithoutProperties2["default"])(_ref2, ["columnIndex", "rowIndex"]);
      var _this$props2 = _this.props,
          cellRenderer = _this$props2.cellRenderer,
          fixedColumnCount = _this$props2.fixedColumnCount,
          fixedRowCount = _this$props2.fixedRowCount;
      return cellRenderer(_objectSpread({}, rest, {
        columnIndex: columnIndex + fixedColumnCount,
        parent: (0, _assertThisInitialized2["default"])(_this),
        rowIndex: rowIndex + fixedRowCount
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cellRendererTopRightGrid", function (_ref3) {
      var columnIndex = _ref3.columnIndex,
          rest = (0, _objectWithoutProperties2["default"])(_ref3, ["columnIndex"]);
      var _this$props3 = _this.props,
          cellRenderer = _this$props3.cellRenderer,
          columnCount = _this$props3.columnCount,
          fixedColumnCount = _this$props3.fixedColumnCount;

      if (columnIndex === columnCount - fixedColumnCount) {
        return React.createElement("div", {
          key: rest.key,
          style: _objectSpread({}, rest.style, {
            width: SCROLLBAR_SIZE_BUFFER
          })
        });
      } else {
        return cellRenderer(_objectSpread({}, rest, {
          columnIndex: columnIndex + fixedColumnCount,
          parent: (0, _assertThisInitialized2["default"])(_this)
        }));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_columnWidthRightGrid", function (_ref4) {
      var index = _ref4.index;
      var _this$props4 = _this.props,
          columnCount = _this$props4.columnCount,
          fixedColumnCount = _this$props4.fixedColumnCount,
          columnWidth = _this$props4.columnWidth;
      var _this$state = _this.state,
          scrollbarSize = _this$state.scrollbarSize,
          showHorizontalScrollbar = _this$state.showHorizontalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showHorizontalScrollbar && index === columnCount - fixedColumnCount) {
        return scrollbarSize;
      }

      return typeof columnWidth === 'function' ? columnWidth({
        index: index + fixedColumnCount
      }) : columnWidth;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScroll", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft,
          scrollTop = scrollInfo.scrollTop;

      _this.setState({
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
      });

      var onScroll = _this.props.onScroll;

      if (onScroll) {
        onScroll(scrollInfo);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScrollbarPresenceChange", function (_ref5) {
      var horizontal = _ref5.horizontal,
          size = _ref5.size,
          vertical = _ref5.vertical;
      var _this$state2 = _this.state,
          showHorizontalScrollbar = _this$state2.showHorizontalScrollbar,
          showVerticalScrollbar = _this$state2.showVerticalScrollbar;

      if (horizontal !== showHorizontalScrollbar || vertical !== showVerticalScrollbar) {
        _this.setState({
          scrollbarSize: size,
          showHorizontalScrollbar: horizontal,
          showVerticalScrollbar: vertical
        });

        var onScrollbarPresenceChange = _this.props.onScrollbarPresenceChange;

        if (typeof onScrollbarPresenceChange === 'function') {
          onScrollbarPresenceChange({
            horizontal: horizontal,
            size: size,
            vertical: vertical
          });
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScrollLeft", function (scrollInfo) {
      var scrollLeft = scrollInfo.scrollLeft;

      _this._onScroll({
        scrollLeft: scrollLeft,
        scrollTop: _this.state.scrollTop
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onScrollTop", function (scrollInfo) {
      var scrollTop = scrollInfo.scrollTop;

      _this._onScroll({
        scrollTop: scrollTop,
        scrollLeft: _this.state.scrollLeft
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_rowHeightBottomGrid", function (_ref6) {
      var index = _ref6.index;
      var _this$props5 = _this.props,
          fixedRowCount = _this$props5.fixedRowCount,
          rowCount = _this$props5.rowCount,
          rowHeight = _this$props5.rowHeight;
      var _this$state3 = _this.state,
          scrollbarSize = _this$state3.scrollbarSize,
          showVerticalScrollbar = _this$state3.showVerticalScrollbar; // An extra cell is added to the count
      // This gives the smaller Grid extra room for offset,
      // In case the main (bottom right) Grid has a scrollbar
      // If no scrollbar, the extra space is overflow:hidden anyway

      if (showVerticalScrollbar && index === rowCount - fixedRowCount) {
        return scrollbarSize;
      }

      return typeof rowHeight === 'function' ? rowHeight({
        index: index + fixedRowCount
      }) : rowHeight;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_topLeftGridRef", function (ref) {
      _this._topLeftGrid = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_topRightGridRef", function (ref) {
      _this._topRightGrid = ref;
    });
    var deferredMeasurementCache = props.deferredMeasurementCache,
        _fixedColumnCount = props.fixedColumnCount,
        _fixedRowCount = props.fixedRowCount;

    _this._maybeCalculateCachedStyles(true);

    if (deferredMeasurementCache) {
      _this._deferredMeasurementCacheBottomLeftGrid = _fixedRowCount > 0 ? new _CellMeasurerCacheDecorator["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: 0,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheBottomRightGrid = _fixedColumnCount > 0 || _fixedRowCount > 0 ? new _CellMeasurerCacheDecorator["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: _fixedRowCount
      }) : deferredMeasurementCache;
      _this._deferredMeasurementCacheTopRightGrid = _fixedColumnCount > 0 ? new _CellMeasurerCacheDecorator["default"]({
        cellMeasurerCache: deferredMeasurementCache,
        columnIndexOffset: _fixedColumnCount,
        rowIndexOffset: 0
      }) : deferredMeasurementCache;
    }

    return _this;
  }

  (0, _createClass2["default"])(MultiGrid, [{
    key: "forceUpdateGrids",
    value: function forceUpdateGrids() {
      this._bottomLeftGrid && this._bottomLeftGrid.forceUpdate();
      this._bottomRightGrid && this._bottomRightGrid.forceUpdate();
      this._topLeftGrid && this._topLeftGrid.forceUpdate();
      this._topRightGrid && this._topRightGrid.forceUpdate();
    }
    /** See Grid#invalidateCellSizeAfterRender */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$columnIndex = _ref7.columnIndex,
          columnIndex = _ref7$columnIndex === void 0 ? 0 : _ref7$columnIndex,
          _ref7$rowIndex = _ref7.rowIndex,
          rowIndex = _ref7$rowIndex === void 0 ? 0 : _ref7$rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllCells",
    value: function measureAllCells() {
      this._bottomLeftGrid && this._bottomLeftGrid.measureAllCells();
      this._bottomRightGrid && this._bottomRightGrid.measureAllCells();
      this._topLeftGrid && this._topLeftGrid.measureAllCells();
      this._topRightGrid && this._topRightGrid.measureAllCells();
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$columnIndex = _ref8.columnIndex,
          columnIndex = _ref8$columnIndex === void 0 ? 0 : _ref8$columnIndex,
          _ref8$rowIndex = _ref8.rowIndex,
          rowIndex = _ref8$rowIndex === void 0 ? 0 : _ref8$rowIndex;

      var _this$props6 = this.props,
          fixedColumnCount = _this$props6.fixedColumnCount,
          fixedRowCount = _this$props6.fixedRowCount;
      var adjustedColumnIndex = Math.max(0, columnIndex - fixedColumnCount);
      var adjustedRowIndex = Math.max(0, rowIndex - fixedRowCount);
      this._bottomLeftGrid && this._bottomLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: adjustedRowIndex
      });
      this._bottomRightGrid && this._bottomRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: adjustedRowIndex
      });
      this._topLeftGrid && this._topLeftGrid.recomputeGridSize({
        columnIndex: columnIndex,
        rowIndex: rowIndex
      });
      this._topRightGrid && this._topRightGrid.recomputeGridSize({
        columnIndex: adjustedColumnIndex,
        rowIndex: rowIndex
      });
      this._leftGridWidth = null;
      this._topGridHeight = null;

      this._maybeCalculateCachedStyles(true);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
          scrollLeft = _this$props7.scrollLeft,
          scrollTop = _this$props7.scrollTop;

      if (scrollLeft > 0 || scrollTop > 0) {
        var newState = {};

        if (scrollLeft > 0) {
          newState.scrollLeft = scrollLeft;
        }

        if (scrollTop > 0) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }

      this._handleInvalidatedGridSize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._handleInvalidatedGridSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          onScroll = _this$props8.onScroll,
          onSectionRendered = _this$props8.onSectionRendered,
          onScrollbarPresenceChange = _this$props8.onScrollbarPresenceChange,
          scrollLeftProp = _this$props8.scrollLeft,
          scrollToColumn = _this$props8.scrollToColumn,
          scrollTopProp = _this$props8.scrollTop,
          scrollToRow = _this$props8.scrollToRow,
          rest = (0, _objectWithoutProperties2["default"])(_this$props8, ["onScroll", "onSectionRendered", "onScrollbarPresenceChange", "scrollLeft", "scrollToColumn", "scrollTop", "scrollToRow"]);

      this._prepareForRender(); // Don't render any of our Grids if there are no cells.
      // This mirrors what Grid does,
      // And prevents us from recording inaccurage measurements when used with CellMeasurer.


      if (this.props.width === 0 || this.props.height === 0) {
        return null;
      } // scrollTop and scrollLeft props are explicitly filtered out and ignored


      var _this$state4 = this.state,
          scrollLeft = _this$state4.scrollLeft,
          scrollTop = _this$state4.scrollTop;
      return React.createElement("div", {
        style: this._containerOuterStyle
      }, React.createElement("div", {
        style: this._containerTopStyle
      }, this._renderTopLeftGrid(rest), this._renderTopRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollLeft: scrollLeft
      }))), React.createElement("div", {
        style: this._containerBottomStyle
      }, this._renderBottomLeftGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        scrollTop: scrollTop
      })), this._renderBottomRightGrid(_objectSpread({}, rest, {
        onScroll: onScroll,
        onSectionRendered: onSectionRendered,
        scrollLeft: scrollLeft,
        scrollToColumn: scrollToColumn,
        scrollToRow: scrollToRow,
        scrollTop: scrollTop
      }))));
    }
  }, {
    key: "_getBottomGridHeight",
    value: function _getBottomGridHeight(props) {
      var height = props.height;

      var topGridHeight = this._getTopGridHeight(props);

      return height - topGridHeight;
    }
  }, {
    key: "_getLeftGridWidth",
    value: function _getLeftGridWidth(props) {
      var fixedColumnCount = props.fixedColumnCount,
          columnWidth = props.columnWidth;

      if (this._leftGridWidth == null) {
        if (typeof columnWidth === 'function') {
          var leftGridWidth = 0;

          for (var index = 0; index < fixedColumnCount; index++) {
            leftGridWidth += columnWidth({
              index: index
            });
          }

          this._leftGridWidth = leftGridWidth;
        } else {
          this._leftGridWidth = columnWidth * fixedColumnCount;
        }
      }

      return this._leftGridWidth;
    }
  }, {
    key: "_getRightGridWidth",
    value: function _getRightGridWidth(props) {
      var width = props.width;

      var leftGridWidth = this._getLeftGridWidth(props);

      return width - leftGridWidth;
    }
  }, {
    key: "_getTopGridHeight",
    value: function _getTopGridHeight(props) {
      var fixedRowCount = props.fixedRowCount,
          rowHeight = props.rowHeight;

      if (this._topGridHeight == null) {
        if (typeof rowHeight === 'function') {
          var topGridHeight = 0;

          for (var index = 0; index < fixedRowCount; index++) {
            topGridHeight += rowHeight({
              index: index
            });
          }

          this._topGridHeight = topGridHeight;
        } else {
          this._topGridHeight = rowHeight * fixedRowCount;
        }
      }

      return this._topGridHeight;
    }
  }, {
    key: "_handleInvalidatedGridSize",
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;
        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;
        this.recomputeGridSize({
          columnIndex: columnIndex,
          rowIndex: rowIndex
        });
        this.forceUpdate();
      }
    }
    /**
     * Avoid recreating inline styles each render; this bypasses Grid's shallowCompare.
     * This method recalculates styles only when specific props change.
     */

  }, {
    key: "_maybeCalculateCachedStyles",
    value: function _maybeCalculateCachedStyles(resetAll) {
      var _this$props9 = this.props,
          columnWidth = _this$props9.columnWidth,
          enableFixedColumnScroll = _this$props9.enableFixedColumnScroll,
          enableFixedRowScroll = _this$props9.enableFixedRowScroll,
          height = _this$props9.height,
          fixedColumnCount = _this$props9.fixedColumnCount,
          fixedRowCount = _this$props9.fixedRowCount,
          rowHeight = _this$props9.rowHeight,
          style = _this$props9.style,
          styleBottomLeftGrid = _this$props9.styleBottomLeftGrid,
          styleBottomRightGrid = _this$props9.styleBottomRightGrid,
          styleTopLeftGrid = _this$props9.styleTopLeftGrid,
          styleTopRightGrid = _this$props9.styleTopRightGrid,
          width = _this$props9.width;
      var sizeChange = resetAll || height !== this._lastRenderedHeight || width !== this._lastRenderedWidth;
      var leftSizeChange = resetAll || columnWidth !== this._lastRenderedColumnWidth || fixedColumnCount !== this._lastRenderedFixedColumnCount;
      var topSizeChange = resetAll || fixedRowCount !== this._lastRenderedFixedRowCount || rowHeight !== this._lastRenderedRowHeight;

      if (resetAll || sizeChange || style !== this._lastRenderedStyle) {
        this._containerOuterStyle = _objectSpread({
          height: height,
          overflow: 'visible',
          // Let :focus outline show through
          width: width
        }, style);
      }

      if (resetAll || sizeChange || topSizeChange) {
        this._containerTopStyle = {
          height: this._getTopGridHeight(this.props),
          position: 'relative',
          width: width
        };
        this._containerBottomStyle = {
          height: height - this._getTopGridHeight(this.props),
          overflow: 'visible',
          // Let :focus outline show through
          position: 'relative',
          width: width
        };
      }

      if (resetAll || styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid) {
        this._bottomLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: enableFixedColumnScroll ? 'auto' : 'hidden',
          position: 'absolute'
        }, styleBottomLeftGrid);
      }

      if (resetAll || leftSizeChange || styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid) {
        this._bottomRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          position: 'absolute'
        }, styleBottomRightGrid);
      }

      if (resetAll || styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
        this._topLeftGridStyle = _objectSpread({
          left: 0,
          overflowX: 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopLeftGrid);
      }

      if (resetAll || leftSizeChange || styleTopRightGrid !== this._lastRenderedStyleTopRightGrid) {
        this._topRightGridStyle = _objectSpread({
          left: this._getLeftGridWidth(this.props),
          overflowX: enableFixedRowScroll ? 'auto' : 'hidden',
          overflowY: 'hidden',
          position: 'absolute',
          top: 0
        }, styleTopRightGrid);
      }

      this._lastRenderedColumnWidth = columnWidth;
      this._lastRenderedFixedColumnCount = fixedColumnCount;
      this._lastRenderedFixedRowCount = fixedRowCount;
      this._lastRenderedHeight = height;
      this._lastRenderedRowHeight = rowHeight;
      this._lastRenderedStyle = style;
      this._lastRenderedStyleBottomLeftGrid = styleBottomLeftGrid;
      this._lastRenderedStyleBottomRightGrid = styleBottomRightGrid;
      this._lastRenderedStyleTopLeftGrid = styleTopLeftGrid;
      this._lastRenderedStyleTopRightGrid = styleTopRightGrid;
      this._lastRenderedWidth = width;
    }
  }, {
    key: "_prepareForRender",
    value: function _prepareForRender() {
      if (this._lastRenderedColumnWidth !== this.props.columnWidth || this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount) {
        this._leftGridWidth = null;
      }

      if (this._lastRenderedFixedRowCount !== this.props.fixedRowCount || this._lastRenderedRowHeight !== this.props.rowHeight) {
        this._topGridHeight = null;
      }

      this._maybeCalculateCachedStyles();

      this._lastRenderedColumnWidth = this.props.columnWidth;
      this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
      this._lastRenderedFixedRowCount = this.props.fixedRowCount;
      this._lastRenderedRowHeight = this.props.rowHeight;
    }
  }, {
    key: "_renderBottomLeftGrid",
    value: function _renderBottomLeftGrid(props) {
      var enableFixedColumnScroll = props.enableFixedColumnScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          hideBottomLeftGridScrollbar = props.hideBottomLeftGridScrollbar;
      var showVerticalScrollbar = this.state.showVerticalScrollbar;

      if (!fixedColumnCount) {
        return null;
      }

      var additionalRowCount = showVerticalScrollbar ? 1 : 0,
          height = this._getBottomGridHeight(props),
          width = this._getLeftGridWidth(props),
          scrollbarSize = this.state.showVerticalScrollbar ? this.state.scrollbarSize : 0,
          gridWidth = hideBottomLeftGridScrollbar ? width + scrollbarSize : width;

      var bottomLeftGrid = React.createElement(_Grid["default"], (0, _extends2["default"])({}, props, {
        cellRenderer: this._cellRendererBottomLeftGrid,
        className: this.props.classNameBottomLeftGrid,
        columnCount: fixedColumnCount,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomLeftGrid,
        height: height,
        onScroll: enableFixedColumnScroll ? this._onScrollTop : undefined,
        ref: this._bottomLeftGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount) + additionalRowCount,
        rowHeight: this._rowHeightBottomGrid,
        style: this._bottomLeftGridStyle,
        tabIndex: null,
        width: gridWidth
      }));

      if (hideBottomLeftGridScrollbar) {
        return React.createElement("div", {
          className: "BottomLeftGrid_ScrollWrapper",
          style: _objectSpread({}, this._bottomLeftGridStyle, {
            height: height,
            width: width,
            overflowY: 'hidden'
          })
        }, bottomLeftGrid);
      }

      return bottomLeftGrid;
    }
  }, {
    key: "_renderBottomRightGrid",
    value: function _renderBottomRightGrid(props) {
      var columnCount = props.columnCount,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          rowCount = props.rowCount,
          scrollToColumn = props.scrollToColumn,
          scrollToRow = props.scrollToRow;
      return React.createElement(_Grid["default"], (0, _extends2["default"])({}, props, {
        cellRenderer: this._cellRendererBottomRightGrid,
        className: this.props.classNameBottomRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount),
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheBottomRightGrid,
        height: this._getBottomGridHeight(props),
        onScroll: this._onScroll,
        onScrollbarPresenceChange: this._onScrollbarPresenceChange,
        ref: this._bottomRightGridRef,
        rowCount: Math.max(0, rowCount - fixedRowCount),
        rowHeight: this._rowHeightBottomGrid,
        scrollToColumn: scrollToColumn - fixedColumnCount,
        scrollToRow: scrollToRow - fixedRowCount,
        style: this._bottomRightGridStyle,
        width: this._getRightGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopLeftGrid",
    value: function _renderTopLeftGrid(props) {
      var fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount;

      if (!fixedColumnCount || !fixedRowCount) {
        return null;
      }

      return React.createElement(_Grid["default"], (0, _extends2["default"])({}, props, {
        className: this.props.classNameTopLeftGrid,
        columnCount: fixedColumnCount,
        height: this._getTopGridHeight(props),
        ref: this._topLeftGridRef,
        rowCount: fixedRowCount,
        style: this._topLeftGridStyle,
        tabIndex: null,
        width: this._getLeftGridWidth(props)
      }));
    }
  }, {
    key: "_renderTopRightGrid",
    value: function _renderTopRightGrid(props) {
      var columnCount = props.columnCount,
          enableFixedRowScroll = props.enableFixedRowScroll,
          fixedColumnCount = props.fixedColumnCount,
          fixedRowCount = props.fixedRowCount,
          scrollLeft = props.scrollLeft,
          hideTopRightGridScrollbar = props.hideTopRightGridScrollbar;
      var _this$state5 = this.state,
          showHorizontalScrollbar = _this$state5.showHorizontalScrollbar,
          scrollbarSize = _this$state5.scrollbarSize;

      if (!fixedRowCount) {
        return null;
      }

      var additionalColumnCount = showHorizontalScrollbar ? 1 : 0,
          height = this._getTopGridHeight(props),
          width = this._getRightGridWidth(props),
          additionalHeight = showHorizontalScrollbar ? scrollbarSize : 0;

      var gridHeight = height,
          style = this._topRightGridStyle;

      if (hideTopRightGridScrollbar) {
        gridHeight = height + additionalHeight;
        style = _objectSpread({}, this._topRightGridStyle, {
          left: 0
        });
      }

      var topRightGrid = React.createElement(_Grid["default"], (0, _extends2["default"])({}, props, {
        cellRenderer: this._cellRendererTopRightGrid,
        className: this.props.classNameTopRightGrid,
        columnCount: Math.max(0, columnCount - fixedColumnCount) + additionalColumnCount,
        columnWidth: this._columnWidthRightGrid,
        deferredMeasurementCache: this._deferredMeasurementCacheTopRightGrid,
        height: gridHeight,
        onScroll: enableFixedRowScroll ? this._onScrollLeft : undefined,
        ref: this._topRightGridRef,
        rowCount: fixedRowCount,
        scrollLeft: scrollLeft,
        style: style,
        tabIndex: null,
        width: width
      }));

      if (hideTopRightGridScrollbar) {
        return React.createElement("div", {
          className: "TopRightGrid_ScrollWrapper",
          style: _objectSpread({}, this._topRightGridStyle, {
            height: height,
            width: width,
            overflowX: 'hidden'
          })
        }, topRightGrid);
      }

      return topRightGrid;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.scrollLeft !== prevState.scrollLeft || nextProps.scrollTop !== prevState.scrollTop) {
        return {
          scrollLeft: nextProps.scrollLeft != null && nextProps.scrollLeft >= 0 ? nextProps.scrollLeft : prevState.scrollLeft,
          scrollTop: nextProps.scrollTop != null && nextProps.scrollTop >= 0 ? nextProps.scrollTop : prevState.scrollTop
        };
      }

      return null;
    }
  }]);
  return MultiGrid;
}(React.PureComponent);

(0, _defineProperty2["default"])(MultiGrid, "defaultProps", {
  classNameBottomLeftGrid: '',
  classNameBottomRightGrid: '',
  classNameTopLeftGrid: '',
  classNameTopRightGrid: '',
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false
});
MultiGrid.propTypes =  false ? 0 : {};
(0, _reactLifecyclesCompat.polyfill)(MultiGrid);
var _default = MultiGrid;
exports.default = _default;

/***/ }),

/***/ 75:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "MultiGrid", ({
  enumerable: true,
  get: function get() {
    return _MultiGrid["default"];
  }
}));
exports.default = void 0;

var _MultiGrid = _interopRequireDefault(__webpack_require__(32056));

var _default = _MultiGrid["default"];
exports.default = _default;

/***/ }),

/***/ 29906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

/**
 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
 */
var ScrollSync =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(ScrollSync, _React$PureComponent);

  function ScrollSync(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScrollSync);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ScrollSync).call(this, props, context));
    _this.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0
    };
    _this._onScroll = _this._onScroll.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ScrollSync, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
          clientHeight = _this$state.clientHeight,
          clientWidth = _this$state.clientWidth,
          scrollHeight = _this$state.scrollHeight,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop,
          scrollWidth = _this$state.scrollWidth;
      return children({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        onScroll: this._onScroll,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref) {
      var clientHeight = _ref.clientHeight,
          clientWidth = _ref.clientWidth,
          scrollHeight = _ref.scrollHeight,
          scrollLeft = _ref.scrollLeft,
          scrollTop = _ref.scrollTop,
          scrollWidth = _ref.scrollWidth;
      this.setState({
        clientHeight: clientHeight,
        clientWidth: clientWidth,
        scrollHeight: scrollHeight,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        scrollWidth: scrollWidth
      });
    }
  }]);
  return ScrollSync;
}(React.PureComponent);

exports.default = ScrollSync;
ScrollSync.propTypes =  false ? 0 : {};

/***/ }),

/***/ 27010:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ScrollSync", ({
  enumerable: true,
  get: function get() {
    return _ScrollSync["default"];
  }
}));
exports.default = void 0;

var _ScrollSync = _interopRequireDefault(__webpack_require__(29906));

var _default = _ScrollSync["default"];
exports.default = _default;

/***/ }),

/***/ 9195:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _defaultHeaderRenderer = _interopRequireDefault(__webpack_require__(67607));

var _defaultCellRenderer = _interopRequireDefault(__webpack_require__(54106));

var _defaultCellDataGetter = _interopRequireDefault(__webpack_require__(70144));

var _SortDirection = _interopRequireDefault(__webpack_require__(89975));

/**
 * Describes the header and cell contents of a table column.
 */
var Column =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Column, _React$Component);

  function Column() {
    (0, _classCallCheck2["default"])(this, Column);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Column).apply(this, arguments));
  }

  return Column;
}(React.Component);

exports.default = Column;
(0, _defineProperty2["default"])(Column, "defaultProps", {
  cellDataGetter: _defaultCellDataGetter["default"],
  cellRenderer: _defaultCellRenderer["default"],
  defaultSortDirection: _SortDirection["default"].ASC,
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer: _defaultHeaderRenderer["default"],
  style: {}
});
Column.propTypes =  false ? 0 : {};

/***/ }),

/***/ 89975:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var SortDirection = {
  /**
   * Sort items in ascending order.
   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
   */
  ASC: 'ASC',

  /**
   * Sort items in descending order.
   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
   */
  DESC: 'DESC'
};
var _default = SortDirection;
exports.default = _default;

/***/ }),

/***/ 76898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = SortIndicator;

var _clsx = _interopRequireDefault(__webpack_require__(62001));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _SortDirection = _interopRequireDefault(__webpack_require__(89975));

/**
 * Displayed beside a header to indicate that a Table is currently sorted by this column.
 */
function SortIndicator(_ref) {
  var sortDirection = _ref.sortDirection;
  var classNames = (0, _clsx["default"])('ReactVirtualized__Table__sortableHeaderIcon', {
    'ReactVirtualized__Table__sortableHeaderIcon--ASC': sortDirection === _SortDirection["default"].ASC,
    'ReactVirtualized__Table__sortableHeaderIcon--DESC': sortDirection === _SortDirection["default"].DESC
  });
  return React.createElement("svg", {
    className: classNames,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24"
  }, sortDirection === _SortDirection["default"].ASC ? React.createElement("path", {
    d: "M7 14l5-5 5 5z"
  }) : React.createElement("path", {
    d: "M7 10l5 5 5-5z"
  }), React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
}

SortIndicator.propTypes =  false ? 0 : {};

/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var _clsx = _interopRequireDefault(__webpack_require__(62001));

var _Column = _interopRequireDefault(__webpack_require__(9195));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _reactDom = __webpack_require__(73935);

var _Grid2 = _interopRequireWildcard(__webpack_require__(39305));

var _defaultRowRenderer = _interopRequireDefault(__webpack_require__(45252));

var _defaultHeaderRowRenderer = _interopRequireDefault(__webpack_require__(75381));

var _SortDirection = _interopRequireDefault(__webpack_require__(89975));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
 * This component expects explicit width, height, and padding parameters.
 */
var Table =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Table, _React$PureComponent);

  function Table(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Table);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Table).call(this, props));
    _this.state = {
      scrollbarWidth: 0
    };
    _this._createColumn = _this._createColumn.bind((0, _assertThisInitialized2["default"])(_this));
    _this._createRow = _this._createRow.bind((0, _assertThisInitialized2["default"])(_this));
    _this._onScroll = _this._onScroll.bind((0, _assertThisInitialized2["default"])(_this));
    _this._onSectionRendered = _this._onSectionRendered.bind((0, _assertThisInitialized2["default"])(_this));
    _this._setRef = _this._setRef.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Table, [{
    key: "forceUpdateGrid",
    value: function forceUpdateGrid() {
      if (this.Grid) {
        this.Grid.forceUpdate();
      }
    }
    /** See Grid#getOffsetForCell */

  }, {
    key: "getOffsetForRow",
    value: function getOffsetForRow(_ref) {
      var alignment = _ref.alignment,
          index = _ref.index;

      if (this.Grid) {
        var _this$Grid$getOffsetF = this.Grid.getOffsetForCell({
          alignment: alignment,
          rowIndex: index
        }),
            scrollTop = _this$Grid$getOffsetF.scrollTop;

        return scrollTop;
      }

      return 0;
    }
    /** CellMeasurer compatibility */

  }, {
    key: "invalidateCellSizeAfterRender",
    value: function invalidateCellSizeAfterRender(_ref2) {
      var columnIndex = _ref2.columnIndex,
          rowIndex = _ref2.rowIndex;

      if (this.Grid) {
        this.Grid.invalidateCellSizeAfterRender({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#measureAllCells */

  }, {
    key: "measureAllRows",
    value: function measureAllRows() {
      if (this.Grid) {
        this.Grid.measureAllCells();
      }
    }
    /** CellMeasurer compatibility */

  }, {
    key: "recomputeGridSize",
    value: function recomputeGridSize() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$columnIndex = _ref3.columnIndex,
          columnIndex = _ref3$columnIndex === void 0 ? 0 : _ref3$columnIndex,
          _ref3$rowIndex = _ref3.rowIndex,
          rowIndex = _ref3$rowIndex === void 0 ? 0 : _ref3$rowIndex;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });
      }
    }
    /** See Grid#recomputeGridSize */

  }, {
    key: "recomputeRowHeights",
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.recomputeGridSize({
          rowIndex: index
        });
      }
    }
    /** See Grid#scrollToPosition */

  }, {
    key: "scrollToPosition",
    value: function scrollToPosition() {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToPosition({
          scrollTop: scrollTop
        });
      }
    }
    /** See Grid#scrollToCell */

  }, {
    key: "scrollToRow",
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.Grid) {
        this.Grid.scrollToCell({
          columnIndex: 0,
          rowIndex: index
        });
      }
    }
  }, {
    key: "getScrollbarWidth",
    value: function getScrollbarWidth() {
      if (this.Grid) {
        var _Grid = (0, _reactDom.findDOMNode)(this.Grid);

        var clientWidth = _Grid.clientWidth || 0;
        var offsetWidth = _Grid.offsetWidth || 0;
        return offsetWidth - clientWidth;
      }

      return 0;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setScrollbarWidth();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._setScrollbarWidth();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          disableHeader = _this$props.disableHeader,
          gridClassName = _this$props.gridClassName,
          gridStyle = _this$props.gridStyle,
          headerHeight = _this$props.headerHeight,
          headerRowRenderer = _this$props.headerRowRenderer,
          height = _this$props.height,
          id = _this$props.id,
          noRowsRenderer = _this$props.noRowsRenderer,
          rowClassName = _this$props.rowClassName,
          rowStyle = _this$props.rowStyle,
          scrollToIndex = _this$props.scrollToIndex,
          style = _this$props.style,
          width = _this$props.width;
      var scrollbarWidth = this.state.scrollbarWidth;
      var availableRowsHeight = disableHeader ? height : height - headerHeight;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: -1
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: -1
      }) : rowStyle; // Precompute and cache column styles before rendering rows and columns to speed things up

      this._cachedColumnStyles = [];
      React.Children.toArray(children).forEach(function (column, index) {
        var flexStyles = _this2._getFlexStyleForColumn(column, column.props.style);

        _this2._cachedColumnStyles[index] = _objectSpread({
          overflow: 'hidden'
        }, flexStyles);
      }); // Note that we specify :rowCount, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.

      return React.createElement("div", {
        "aria-label": this.props['aria-label'],
        "aria-labelledby": this.props['aria-labelledby'],
        "aria-colcount": React.Children.toArray(children).length,
        "aria-rowcount": this.props.rowCount,
        className: (0, _clsx["default"])('ReactVirtualized__Table', className),
        id: id,
        role: "grid",
        style: style
      }, !disableHeader && headerRowRenderer({
        className: (0, _clsx["default"])('ReactVirtualized__Table__headerRow', rowClass),
        columns: this._getHeaderColumns(),
        style: _objectSpread({
          height: headerHeight,
          overflow: 'hidden',
          paddingRight: scrollbarWidth,
          width: width
        }, rowStyleObject)
      }), React.createElement(_Grid2["default"], (0, _extends2["default"])({}, this.props, {
        "aria-readonly": null,
        autoContainerWidth: true,
        className: (0, _clsx["default"])('ReactVirtualized__Table__Grid', gridClassName),
        cellRenderer: this._createRow,
        columnWidth: width,
        columnCount: 1,
        height: availableRowsHeight,
        id: undefined,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        role: "rowgroup",
        scrollbarWidth: scrollbarWidth,
        scrollToRow: scrollToIndex,
        style: _objectSpread({}, gridStyle, {
          overflowX: 'hidden'
        })
      })));
    }
  }, {
    key: "_createColumn",
    value: function _createColumn(_ref4) {
      var column = _ref4.column,
          columnIndex = _ref4.columnIndex,
          isScrolling = _ref4.isScrolling,
          parent = _ref4.parent,
          rowData = _ref4.rowData,
          rowIndex = _ref4.rowIndex;
      var onColumnClick = this.props.onColumnClick;
      var _column$props = column.props,
          cellDataGetter = _column$props.cellDataGetter,
          cellRenderer = _column$props.cellRenderer,
          className = _column$props.className,
          columnData = _column$props.columnData,
          dataKey = _column$props.dataKey,
          id = _column$props.id;
      var cellData = cellDataGetter({
        columnData: columnData,
        dataKey: dataKey,
        rowData: rowData
      });
      var renderedCell = cellRenderer({
        cellData: cellData,
        columnData: columnData,
        columnIndex: columnIndex,
        dataKey: dataKey,
        isScrolling: isScrolling,
        parent: parent,
        rowData: rowData,
        rowIndex: rowIndex
      });

      var onClick = function onClick(event) {
        onColumnClick && onColumnClick({
          columnData: columnData,
          dataKey: dataKey,
          event: event
        });
      };

      var style = this._cachedColumnStyles[columnIndex];
      var title = typeof renderedCell === 'string' ? renderedCell : null; // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942

      return React.createElement("div", {
        "aria-colindex": columnIndex + 1,
        "aria-describedby": id,
        className: (0, _clsx["default"])('ReactVirtualized__Table__rowColumn', className),
        key: 'Row' + rowIndex + '-' + 'Col' + columnIndex,
        onClick: onClick,
        role: "gridcell",
        style: style,
        title: title
      }, renderedCell);
    }
  }, {
    key: "_createHeader",
    value: function _createHeader(_ref5) {
      var column = _ref5.column,
          index = _ref5.index;
      var _this$props2 = this.props,
          headerClassName = _this$props2.headerClassName,
          headerStyle = _this$props2.headerStyle,
          onHeaderClick = _this$props2.onHeaderClick,
          sort = _this$props2.sort,
          sortBy = _this$props2.sortBy,
          sortDirection = _this$props2.sortDirection;
      var _column$props2 = column.props,
          columnData = _column$props2.columnData,
          dataKey = _column$props2.dataKey,
          defaultSortDirection = _column$props2.defaultSortDirection,
          disableSort = _column$props2.disableSort,
          headerRenderer = _column$props2.headerRenderer,
          id = _column$props2.id,
          label = _column$props2.label;
      var sortEnabled = !disableSort && sort;
      var classNames = (0, _clsx["default"])('ReactVirtualized__Table__headerColumn', headerClassName, column.props.headerClassName, {
        ReactVirtualized__Table__sortableHeaderColumn: sortEnabled
      });

      var style = this._getFlexStyleForColumn(column, _objectSpread({}, headerStyle, {}, column.props.headerStyle));

      var renderedHeader = headerRenderer({
        columnData: columnData,
        dataKey: dataKey,
        disableSort: disableSort,
        label: label,
        sortBy: sortBy,
        sortDirection: sortDirection
      });
      var headerOnClick, headerOnKeyDown, headerTabIndex, headerAriaSort, headerAriaLabel;

      if (sortEnabled || onHeaderClick) {
        // If this is a sortable header, clicking it should update the table data's sorting.
        var isFirstTimeSort = sortBy !== dataKey; // If this is the firstTime sort of this column, use the column default sort order.
        // Otherwise, invert the direction of the sort.

        var newSortDirection = isFirstTimeSort ? defaultSortDirection : sortDirection === _SortDirection["default"].DESC ? _SortDirection["default"].ASC : _SortDirection["default"].DESC;

        var onClick = function onClick(event) {
          sortEnabled && sort({
            defaultSortDirection: defaultSortDirection,
            event: event,
            sortBy: dataKey,
            sortDirection: newSortDirection
          });
          onHeaderClick && onHeaderClick({
            columnData: columnData,
            dataKey: dataKey,
            event: event
          });
        };

        var onKeyDown = function onKeyDown(event) {
          if (event.key === 'Enter' || event.key === ' ') {
            onClick(event);
          }
        };

        headerAriaLabel = column.props['aria-label'] || label || dataKey;
        headerAriaSort = 'none';
        headerTabIndex = 0;
        headerOnClick = onClick;
        headerOnKeyDown = onKeyDown;
      }

      if (sortBy === dataKey) {
        headerAriaSort = sortDirection === _SortDirection["default"].ASC ? 'ascending' : 'descending';
      } // Avoid using object-spread syntax with multiple objects here,
      // Since it results in an extra method call to 'babel-runtime/helpers/extends'
      // See PR https://github.com/bvaughn/react-virtualized/pull/942


      return React.createElement("div", {
        "aria-label": headerAriaLabel,
        "aria-sort": headerAriaSort,
        className: classNames,
        id: id,
        key: 'Header-Col' + index,
        onClick: headerOnClick,
        onKeyDown: headerOnKeyDown,
        role: "columnheader",
        style: style,
        tabIndex: headerTabIndex
      }, renderedHeader);
    }
  }, {
    key: "_createRow",
    value: function _createRow(_ref6) {
      var _this3 = this;

      var index = _ref6.rowIndex,
          isScrolling = _ref6.isScrolling,
          key = _ref6.key,
          parent = _ref6.parent,
          style = _ref6.style;
      var _this$props3 = this.props,
          children = _this$props3.children,
          onRowClick = _this$props3.onRowClick,
          onRowDoubleClick = _this$props3.onRowDoubleClick,
          onRowRightClick = _this$props3.onRowRightClick,
          onRowMouseOver = _this$props3.onRowMouseOver,
          onRowMouseOut = _this$props3.onRowMouseOut,
          rowClassName = _this$props3.rowClassName,
          rowGetter = _this$props3.rowGetter,
          rowRenderer = _this$props3.rowRenderer,
          rowStyle = _this$props3.rowStyle;
      var scrollbarWidth = this.state.scrollbarWidth;
      var rowClass = typeof rowClassName === 'function' ? rowClassName({
        index: index
      }) : rowClassName;
      var rowStyleObject = typeof rowStyle === 'function' ? rowStyle({
        index: index
      }) : rowStyle;
      var rowData = rowGetter({
        index: index
      });
      var columns = React.Children.toArray(children).map(function (column, columnIndex) {
        return _this3._createColumn({
          column: column,
          columnIndex: columnIndex,
          isScrolling: isScrolling,
          parent: parent,
          rowData: rowData,
          rowIndex: index,
          scrollbarWidth: scrollbarWidth
        });
      });
      var className = (0, _clsx["default"])('ReactVirtualized__Table__row', rowClass);

      var flattenedStyle = _objectSpread({}, style, {
        height: this._getRowHeight(index),
        overflow: 'hidden',
        paddingRight: scrollbarWidth
      }, rowStyleObject);

      return rowRenderer({
        className: className,
        columns: columns,
        index: index,
        isScrolling: isScrolling,
        key: key,
        onRowClick: onRowClick,
        onRowDoubleClick: onRowDoubleClick,
        onRowRightClick: onRowRightClick,
        onRowMouseOver: onRowMouseOver,
        onRowMouseOut: onRowMouseOut,
        rowData: rowData,
        style: flattenedStyle
      });
    }
    /**
     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
     */

  }, {
    key: "_getFlexStyleForColumn",
    value: function _getFlexStyleForColumn(column) {
      var customStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var flexValue = "".concat(column.props.flexGrow, " ").concat(column.props.flexShrink, " ").concat(column.props.width, "px");

      var style = _objectSpread({}, customStyle, {
        flex: flexValue,
        msFlex: flexValue,
        WebkitFlex: flexValue
      });

      if (column.props.maxWidth) {
        style.maxWidth = column.props.maxWidth;
      }

      if (column.props.minWidth) {
        style.minWidth = column.props.minWidth;
      }

      return style;
    }
  }, {
    key: "_getHeaderColumns",
    value: function _getHeaderColumns() {
      var _this4 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          disableHeader = _this$props4.disableHeader;
      var items = disableHeader ? [] : React.Children.toArray(children);
      return items.map(function (column, index) {
        return _this4._createHeader({
          column: column,
          index: index
        });
      });
    }
  }, {
    key: "_getRowHeight",
    value: function _getRowHeight(rowIndex) {
      var rowHeight = this.props.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight({
        index: rowIndex
      }) : rowHeight;
    }
  }, {
    key: "_onScroll",
    value: function _onScroll(_ref7) {
      var clientHeight = _ref7.clientHeight,
          scrollHeight = _ref7.scrollHeight,
          scrollTop = _ref7.scrollTop;
      var onScroll = this.props.onScroll;
      onScroll({
        clientHeight: clientHeight,
        scrollHeight: scrollHeight,
        scrollTop: scrollTop
      });
    }
  }, {
    key: "_onSectionRendered",
    value: function _onSectionRendered(_ref8) {
      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref8.rowOverscanStopIndex,
          rowStartIndex = _ref8.rowStartIndex,
          rowStopIndex = _ref8.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;
      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }, {
    key: "_setRef",
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: "_setScrollbarWidth",
    value: function _setScrollbarWidth() {
      var scrollbarWidth = this.getScrollbarWidth();
      this.setState({
        scrollbarWidth: scrollbarWidth
      });
    }
  }]);
  return Table;
}(React.PureComponent);

exports.default = Table;
(0, _defineProperty2["default"])(Table, "defaultProps", {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanIndicesGetter: _Grid2.accessibilityOverscanIndicesGetter,
  overscanRowCount: 10,
  rowRenderer: _defaultRowRenderer["default"],
  headerRowRenderer: _defaultHeaderRowRenderer["default"],
  rowStyle: {},
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
});
Table.propTypes =  false ? 0 : {};

/***/ }),

/***/ 5263:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createMultiSort;

function createMultiSort(sortCallback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultSortBy = _ref.defaultSortBy,
      _ref$defaultSortDirec = _ref.defaultSortDirection,
      defaultSortDirection = _ref$defaultSortDirec === void 0 ? {} : _ref$defaultSortDirec;

  if (!sortCallback) {
    throw Error("Required parameter \"sortCallback\" not specified");
  }

  var sortBy = defaultSortBy || [];
  var sortDirection = {};
  sortBy.forEach(function (dataKey) {
    sortDirection[dataKey] = defaultSortDirection[dataKey] !== undefined ? defaultSortDirection[dataKey] : 'ASC';
  });

  function sort(_ref2) {
    var defaultSortDirection = _ref2.defaultSortDirection,
        event = _ref2.event,
        dataKey = _ref2.sortBy;

    if (event.shiftKey) {
      // Shift + click appends a column to existing criteria
      if (sortDirection[dataKey] !== undefined) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
        sortBy.push(dataKey);
      }
    } else if (event.ctrlKey || event.metaKey) {
      // Control + click removes column from sort (if pressent)
      var index = sortBy.indexOf(dataKey);

      if (index >= 0) {
        sortBy.splice(index, 1);
        delete sortDirection[dataKey];
      }
    } else {
      // Clear sortBy array of all non-selected keys
      sortBy.length = 0;
      sortBy.push(dataKey); // Clear sortDirection object of all non-selected keys

      var sortDirectionKeys = Object.keys(sortDirection);
      sortDirectionKeys.forEach(function (key) {
        if (key !== dataKey) delete sortDirection[key];
      }); // If key is already selected, reverse sort direction.
      // Else, set sort direction to default direction.

      if (sortDirection[dataKey] !== undefined) {
        sortDirection[dataKey] = sortDirection[dataKey] === 'ASC' ? 'DESC' : 'ASC';
      } else {
        sortDirection[dataKey] = defaultSortDirection;
      }
    } // Notify application code


    sortCallback({
      sortBy: sortBy,
      sortDirection: sortDirection
    });
  }

  return {
    sort: sort,
    sortBy: sortBy,
    sortDirection: sortDirection
  };
}

/***/ }),

/***/ 70144:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultCellDataGetter;

var _types = __webpack_require__(88482);

/**
 * Default accessor for returning a cell value for a given attribute.
 * This function expects to operate on either a vanilla Object or an Immutable Map.
 * You should override the column's cellDataGetter if your data is some other type of object.
 */
function defaultCellDataGetter(_ref) {
  var dataKey = _ref.dataKey,
      rowData = _ref.rowData;

  if (typeof rowData.get === 'function') {
    return rowData.get(dataKey);
  } else {
    return rowData[dataKey];
  }
}

/***/ }),

/***/ 54106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultCellRenderer;

var _types = __webpack_require__(88482);

/**
 * Default cell renderer that displays an attribute as a simple string
 * You should override the column's cellRenderer if your data is some other type of object.
 */
function defaultCellRenderer(_ref) {
  var cellData = _ref.cellData;

  if (cellData == null) {
    return '';
  } else {
    return String(cellData);
  }
}

/***/ }),

/***/ 67607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultHeaderRenderer;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _SortIndicator = _interopRequireDefault(__webpack_require__(76898));

var _types = __webpack_require__(88482);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

/**
 * Default table header renderer.
 */
function defaultHeaderRenderer(_ref) {
  var dataKey = _ref.dataKey,
      label = _ref.label,
      sortBy = _ref.sortBy,
      sortDirection = _ref.sortDirection;
  var showSortIndicator = sortBy === dataKey;
  var children = [React.createElement("span", {
    className: "ReactVirtualized__Table__headerTruncatedText",
    key: "label",
    title: typeof label === 'string' ? label : null
  }, label)];

  if (showSortIndicator) {
    children.push(React.createElement(_SortIndicator["default"], {
      key: "SortIndicator",
      sortDirection: sortDirection
    }));
  }

  return children;
}

defaultHeaderRenderer.propTypes =  true ? null : 0;

/***/ }),

/***/ 75381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultHeaderRowRenderer;

var React = _interopRequireWildcard(__webpack_require__(67294));

var _types = __webpack_require__(88482);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

function defaultHeaderRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      style = _ref.style;
  return React.createElement("div", {
    className: className,
    role: "row",
    style: style
  }, columns);
}

defaultHeaderRowRenderer.propTypes =  true ? null : 0;

/***/ }),

/***/ 45252:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = defaultRowRenderer;

var _extends2 = _interopRequireDefault(__webpack_require__(67154));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _types = __webpack_require__(88482);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

/**
 * Default row renderer for Table.
 */
function defaultRowRenderer(_ref) {
  var className = _ref.className,
      columns = _ref.columns,
      index = _ref.index,
      key = _ref.key,
      onRowClick = _ref.onRowClick,
      onRowDoubleClick = _ref.onRowDoubleClick,
      onRowMouseOut = _ref.onRowMouseOut,
      onRowMouseOver = _ref.onRowMouseOver,
      onRowRightClick = _ref.onRowRightClick,
      rowData = _ref.rowData,
      style = _ref.style;
  var a11yProps = {
    'aria-rowindex': index + 1
  };

  if (onRowClick || onRowDoubleClick || onRowMouseOut || onRowMouseOver || onRowRightClick) {
    a11yProps['aria-label'] = 'row';
    a11yProps.tabIndex = 0;

    if (onRowClick) {
      a11yProps.onClick = function (event) {
        return onRowClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowDoubleClick) {
      a11yProps.onDoubleClick = function (event) {
        return onRowDoubleClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowMouseOut) {
      a11yProps.onMouseOut = function (event) {
        return onRowMouseOut({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowMouseOver) {
      a11yProps.onMouseOver = function (event) {
        return onRowMouseOver({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }

    if (onRowRightClick) {
      a11yProps.onContextMenu = function (event) {
        return onRowRightClick({
          event: event,
          index: index,
          rowData: rowData
        });
      };
    }
  }

  return React.createElement("div", (0, _extends2["default"])({}, a11yProps, {
    className: className,
    key: key,
    role: "row",
    style: style
  }), columns);
}

defaultRowRenderer.propTypes =  true ? null : 0;

/***/ }),

/***/ 44321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "createMultiSort", ({
  enumerable: true,
  get: function get() {
    return _createMultiSort["default"];
  }
}));
Object.defineProperty(exports, "defaultCellDataGetter", ({
  enumerable: true,
  get: function get() {
    return _defaultCellDataGetter["default"];
  }
}));
Object.defineProperty(exports, "defaultCellRenderer", ({
  enumerable: true,
  get: function get() {
    return _defaultCellRenderer["default"];
  }
}));
Object.defineProperty(exports, "defaultHeaderRowRenderer", ({
  enumerable: true,
  get: function get() {
    return _defaultHeaderRowRenderer["default"];
  }
}));
Object.defineProperty(exports, "defaultHeaderRenderer", ({
  enumerable: true,
  get: function get() {
    return _defaultHeaderRenderer["default"];
  }
}));
Object.defineProperty(exports, "defaultRowRenderer", ({
  enumerable: true,
  get: function get() {
    return _defaultRowRenderer["default"];
  }
}));
Object.defineProperty(exports, "Column", ({
  enumerable: true,
  get: function get() {
    return _Column["default"];
  }
}));
Object.defineProperty(exports, "SortDirection", ({
  enumerable: true,
  get: function get() {
    return _SortDirection["default"];
  }
}));
Object.defineProperty(exports, "SortIndicator", ({
  enumerable: true,
  get: function get() {
    return _SortIndicator["default"];
  }
}));
Object.defineProperty(exports, "Table", ({
  enumerable: true,
  get: function get() {
    return _Table["default"];
  }
}));
exports.default = void 0;

var _createMultiSort = _interopRequireDefault(__webpack_require__(5263));

var _defaultCellDataGetter = _interopRequireDefault(__webpack_require__(70144));

var _defaultCellRenderer = _interopRequireDefault(__webpack_require__(54106));

var _defaultHeaderRowRenderer = _interopRequireDefault(__webpack_require__(75381));

var _defaultHeaderRenderer = _interopRequireDefault(__webpack_require__(67607));

var _defaultRowRenderer = _interopRequireDefault(__webpack_require__(45252));

var _Column = _interopRequireDefault(__webpack_require__(9195));

var _SortDirection = _interopRequireDefault(__webpack_require__(89975));

var _SortIndicator = _interopRequireDefault(__webpack_require__(76898));

var _Table = _interopRequireDefault(__webpack_require__(614));

var _default = _Table["default"];
exports.default = _default;

/***/ }),

/***/ 88482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_RowRendererParams = exports.bpfrpt_proptype_HeaderRendererParams = exports.bpfrpt_proptype_HeaderRowRendererParams = exports.bpfrpt_proptype_CellRendererParams = exports.bpfrpt_proptype_CellDataGetterParams = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_CellDataGetterParams =  true ? null : 0;
exports.bpfrpt_proptype_CellDataGetterParams = bpfrpt_proptype_CellDataGetterParams;
var bpfrpt_proptype_CellRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_CellRendererParams = bpfrpt_proptype_CellRendererParams;
var bpfrpt_proptype_HeaderRowRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_HeaderRowRendererParams = bpfrpt_proptype_HeaderRowRendererParams;
var bpfrpt_proptype_HeaderRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_HeaderRendererParams = bpfrpt_proptype_HeaderRendererParams;
var bpfrpt_proptype_RowRendererParams =  true ? null : 0;
exports.bpfrpt_proptype_RowRendererParams = bpfrpt_proptype_RowRendererParams;

/***/ }),

/***/ 52244:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(25108);


var _interopRequireDefault = __webpack_require__(95318);

var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.IS_SCROLLING_TIMEOUT = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(34575));

var _createClass2 = _interopRequireDefault(__webpack_require__(93913));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(78585));

var _getPrototypeOf3 = _interopRequireDefault(__webpack_require__(29754));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(81506));

var _inherits2 = _interopRequireDefault(__webpack_require__(2205));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(59713));

var React = _interopRequireWildcard(__webpack_require__(67294));

var ReactDOM = _interopRequireWildcard(__webpack_require__(73935));

var _onScroll = __webpack_require__(89239);

var _dimensions = __webpack_require__(89893);

var _detectElementResize = _interopRequireDefault(__webpack_require__(55736));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _class, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = 150;
exports.IS_SCROLLING_TIMEOUT = IS_SCROLLING_TIMEOUT;

var getWindow = function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
};

var WindowScroller = (_temp = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(WindowScroller, _React$PureComponent);

  function WindowScroller() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, WindowScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(WindowScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_window", getWindow());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isMounted", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_positionFromTop", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_positionFromLeft", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_detectElementResize", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_child", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", _objectSpread({}, (0, _dimensions.getDimensions)(_this.props.scrollElement, _this.props), {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_registerChild", function (element) {
      if (element && !(element instanceof Element)) {
        console.warn('WindowScroller registerChild expects to be passed Element or null');
      }

      _this._child = element;

      _this.updatePosition();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChildScroll", function (_ref) {
      var scrollTop = _ref.scrollTop;

      if (_this.state.scrollTop === scrollTop) {
        return;
      }

      var scrollElement = _this.props.scrollElement;

      if (scrollElement) {
        if (typeof scrollElement.scrollTo === 'function') {
          scrollElement.scrollTo(0, scrollTop + _this._positionFromTop);
        } else {
          scrollElement.scrollTop = scrollTop + _this._positionFromTop;
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_registerResizeListener", function (element) {
      if (element === window) {
        window.addEventListener('resize', _this._onResize, false);
      } else {
        _this._detectElementResize.addResizeListener(element, _this._onResize);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_unregisterResizeListener", function (element) {
      if (element === window) {
        window.removeEventListener('resize', _this._onResize, false);
      } else if (element) {
        _this._detectElementResize.removeResizeListener(element, _this._onResize);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onResize", function () {
      _this.updatePosition();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "__handleWindowScrollEvent", function () {
      if (!_this._isMounted) {
        return;
      }

      var onScroll = _this.props.onScroll;
      var scrollElement = _this.props.scrollElement;

      if (scrollElement) {
        var scrollOffset = (0, _dimensions.getScrollOffset)(scrollElement);
        var scrollLeft = Math.max(0, scrollOffset.left - _this._positionFromLeft);
        var scrollTop = Math.max(0, scrollOffset.top - _this._positionFromTop);

        _this.setState({
          isScrolling: true,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });

        onScroll({
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "__resetIsScrolling", function () {
      _this.setState({
        isScrolling: false
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(WindowScroller, [{
    key: "updatePosition",
    value: function updatePosition() {
      var scrollElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.scrollElement;
      var onResize = this.props.onResize;
      var _this$state = this.state,
          height = _this$state.height,
          width = _this$state.width;
      var thisNode = this._child || ReactDOM.findDOMNode(this);

      if (thisNode instanceof Element && scrollElement) {
        var offset = (0, _dimensions.getPositionOffset)(thisNode, scrollElement);
        this._positionFromTop = offset.top;
        this._positionFromLeft = offset.left;
      }

      var dimensions = (0, _dimensions.getDimensions)(scrollElement, this.props);

      if (height !== dimensions.height || width !== dimensions.width) {
        this.setState({
          height: dimensions.height,
          width: dimensions.width
        });
        onResize({
          height: dimensions.height,
          width: dimensions.width
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement;
      this._detectElementResize = (0, _detectElementResize["default"])();
      this.updatePosition(scrollElement);

      if (scrollElement) {
        (0, _onScroll.registerScrollListener)(this, scrollElement);

        this._registerResizeListener(scrollElement);
      }

      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var scrollElement = this.props.scrollElement;
      var prevScrollElement = prevProps.scrollElement;

      if (prevScrollElement !== scrollElement && prevScrollElement != null && scrollElement != null) {
        this.updatePosition(scrollElement);
        (0, _onScroll.unregisterScrollListener)(this, prevScrollElement);
        (0, _onScroll.registerScrollListener)(this, scrollElement);

        this._unregisterResizeListener(prevScrollElement);

        this._registerResizeListener(scrollElement);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var scrollElement = this.props.scrollElement;

      if (scrollElement) {
        (0, _onScroll.unregisterScrollListener)(this, scrollElement);

        this._unregisterResizeListener(scrollElement);
      }

      this._isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state2 = this.state,
          isScrolling = _this$state2.isScrolling,
          scrollTop = _this$state2.scrollTop,
          scrollLeft = _this$state2.scrollLeft,
          height = _this$state2.height,
          width = _this$state2.width;
      return children({
        onChildScroll: this._onChildScroll,
        registerChild: this._registerChild,
        height: height,
        isScrolling: isScrolling,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        width: width
      });
    }
  }]);
  return WindowScroller;
}(React.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes",  true ? null : 0), _temp);
exports.default = WindowScroller;
(0, _defineProperty2["default"])(WindowScroller, "defaultProps", {
  onResize: function onResize() {},
  onScroll: function onScroll() {},
  scrollingResetTimeInterval: IS_SCROLLING_TIMEOUT,
  scrollElement: getWindow(),
  serverHeight: 0,
  serverWidth: 0
});

/***/ }),

/***/ 6462:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = __webpack_require__(20862);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "WindowScroller", ({
  enumerable: true,
  get: function get() {
    return _WindowScroller["default"];
  }
}));
Object.defineProperty(exports, "IS_SCROLLING_TIMEOUT", ({
  enumerable: true,
  get: function get() {
    return _WindowScroller.IS_SCROLLING_TIMEOUT;
  }
}));
exports.default = void 0;

var _WindowScroller = _interopRequireWildcard(__webpack_require__(52244));

var _default = _WindowScroller["default"];
exports.default = _default;

/***/ }),

/***/ 89893:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDimensions = getDimensions;
exports.getPositionOffset = getPositionOffset;
exports.getScrollOffset = getScrollOffset;

/**
 * Gets the dimensions of the element, accounting for API differences between
 * `window` and other DOM elements.
 */
// TODO Move this into WindowScroller and import from there
var isWindow = function isWindow(element) {
  return element === window;
};

var getBoundingBox = function getBoundingBox(element) {
  return element.getBoundingClientRect();
};

function getDimensions(scrollElement, props) {
  if (!scrollElement) {
    return {
      height: props.serverHeight,
      width: props.serverWidth
    };
  } else if (isWindow(scrollElement)) {
    var _window = window,
        innerHeight = _window.innerHeight,
        innerWidth = _window.innerWidth;
    return {
      height: typeof innerHeight === 'number' ? innerHeight : 0,
      width: typeof innerWidth === 'number' ? innerWidth : 0
    };
  } else {
    return getBoundingBox(scrollElement);
  }
}
/**
 * Gets the vertical and horizontal position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top or left position will be a negative number and this element’s top or left will be increased (by that amount).
 */


function getPositionOffset(element, container) {
  if (isWindow(container) && document.documentElement) {
    var containerElement = document.documentElement;
    var elementRect = getBoundingBox(element);
    var containerRect = getBoundingBox(containerElement);
    return {
      top: elementRect.top - containerRect.top,
      left: elementRect.left - containerRect.left
    };
  } else {
    var scrollOffset = getScrollOffset(container);

    var _elementRect = getBoundingBox(element);

    var _containerRect = getBoundingBox(container);

    return {
      top: _elementRect.top + scrollOffset.top - _containerRect.top,
      left: _elementRect.left + scrollOffset.left - _containerRect.left
    };
  }
}
/**
 * Gets the vertical and horizontal scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */


function getScrollOffset(element) {
  if (isWindow(element) && document.documentElement) {
    return {
      top: 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop,
      left: 'scrollX' in window ? window.scrollX : document.documentElement.scrollLeft
    };
  } else {
    return {
      top: element.scrollTop,
      left: element.scrollLeft
    };
  }
}

/***/ }),

/***/ 89239:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.registerScrollListener = registerScrollListener;
exports.unregisterScrollListener = unregisterScrollListener;

var _requestAnimationTimeout = __webpack_require__(96271);

var _WindowScroller = __webpack_require__(52244);

var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    if (document.body && originalBodyPointerEvents != null) {
      document.body.style.pointerEvents = originalBodyPointerEvents;
    }

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    (0, _requestAnimationTimeout.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
  }

  var maximumTimeout = 0;
  mountedInstances.forEach(function (instance) {
    maximumTimeout = Math.max(maximumTimeout, instance.props.scrollingResetTimeInterval);
  });
  disablePointerEventsTimeoutId = (0, _requestAnimationTimeout.requestAnimationTimeout)(enablePointerEventsAfterDelayCallback, maximumTimeout);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null && document.body) {
    originalBodyPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = 'none';
  }

  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.props.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent();
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.props.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }

  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });

  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);

    if (disablePointerEventsTimeoutId) {
      (0, _requestAnimationTimeout.cancelAnimationTimeout)(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),

/***/ 99272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ArrowKeyStepper", ({
  enumerable: true,
  get: function get() {
    return _ArrowKeyStepper.ArrowKeyStepper;
  }
}));
Object.defineProperty(exports, "AutoSizer", ({
  enumerable: true,
  get: function get() {
    return _AutoSizer.AutoSizer;
  }
}));
Object.defineProperty(exports, "CellMeasurer", ({
  enumerable: true,
  get: function get() {
    return _CellMeasurer.CellMeasurer;
  }
}));
Object.defineProperty(exports, "CellMeasurerCache", ({
  enumerable: true,
  get: function get() {
    return _CellMeasurer.CellMeasurerCache;
  }
}));
Object.defineProperty(exports, "Collection", ({
  enumerable: true,
  get: function get() {
    return _Collection.Collection;
  }
}));
Object.defineProperty(exports, "ColumnSizer", ({
  enumerable: true,
  get: function get() {
    return _ColumnSizer.ColumnSizer;
  }
}));
Object.defineProperty(exports, "accessibilityOverscanIndicesGetter", ({
  enumerable: true,
  get: function get() {
    return _Grid.accessibilityOverscanIndicesGetter;
  }
}));
Object.defineProperty(exports, "defaultCellRangeRenderer", ({
  enumerable: true,
  get: function get() {
    return _Grid.defaultCellRangeRenderer;
  }
}));
Object.defineProperty(exports, "defaultOverscanIndicesGetter", ({
  enumerable: true,
  get: function get() {
    return _Grid.defaultOverscanIndicesGetter;
  }
}));
Object.defineProperty(exports, "Grid", ({
  enumerable: true,
  get: function get() {
    return _Grid.Grid;
  }
}));
Object.defineProperty(exports, "InfiniteLoader", ({
  enumerable: true,
  get: function get() {
    return _InfiniteLoader.InfiniteLoader;
  }
}));
Object.defineProperty(exports, "List", ({
  enumerable: true,
  get: function get() {
    return _List.List;
  }
}));
Object.defineProperty(exports, "createMasonryCellPositioner", ({
  enumerable: true,
  get: function get() {
    return _Masonry.createCellPositioner;
  }
}));
Object.defineProperty(exports, "Masonry", ({
  enumerable: true,
  get: function get() {
    return _Masonry.Masonry;
  }
}));
Object.defineProperty(exports, "MultiGrid", ({
  enumerable: true,
  get: function get() {
    return _MultiGrid.MultiGrid;
  }
}));
Object.defineProperty(exports, "ScrollSync", ({
  enumerable: true,
  get: function get() {
    return _ScrollSync.ScrollSync;
  }
}));
Object.defineProperty(exports, "createTableMultiSort", ({
  enumerable: true,
  get: function get() {
    return _Table.createMultiSort;
  }
}));
Object.defineProperty(exports, "defaultTableCellDataGetter", ({
  enumerable: true,
  get: function get() {
    return _Table.defaultCellDataGetter;
  }
}));
Object.defineProperty(exports, "defaultTableCellRenderer", ({
  enumerable: true,
  get: function get() {
    return _Table.defaultCellRenderer;
  }
}));
Object.defineProperty(exports, "defaultTableHeaderRenderer", ({
  enumerable: true,
  get: function get() {
    return _Table.defaultHeaderRenderer;
  }
}));
Object.defineProperty(exports, "defaultTableHeaderRowRenderer", ({
  enumerable: true,
  get: function get() {
    return _Table.defaultHeaderRowRenderer;
  }
}));
Object.defineProperty(exports, "defaultTableRowRenderer", ({
  enumerable: true,
  get: function get() {
    return _Table.defaultRowRenderer;
  }
}));
Object.defineProperty(exports, "Table", ({
  enumerable: true,
  get: function get() {
    return _Table.Table;
  }
}));
Object.defineProperty(exports, "Column", ({
  enumerable: true,
  get: function get() {
    return _Table.Column;
  }
}));
Object.defineProperty(exports, "SortDirection", ({
  enumerable: true,
  get: function get() {
    return _Table.SortDirection;
  }
}));
Object.defineProperty(exports, "SortIndicator", ({
  enumerable: true,
  get: function get() {
    return _Table.SortIndicator;
  }
}));
Object.defineProperty(exports, "WindowScroller", ({
  enumerable: true,
  get: function get() {
    return _WindowScroller.WindowScroller;
  }
}));

var _ArrowKeyStepper = __webpack_require__(20312);

var _AutoSizer = __webpack_require__(90143);

var _CellMeasurer = __webpack_require__(11866);

var _Collection = __webpack_require__(18228);

var _ColumnSizer = __webpack_require__(77276);

var _Grid = __webpack_require__(39305);

var _InfiniteLoader = __webpack_require__(71249);

var _List = __webpack_require__(35277);

var _Masonry = __webpack_require__(50228);

var _MultiGrid = __webpack_require__(75);

var _ScrollSync = __webpack_require__(27010);

var _Table = __webpack_require__(44321);

var _WindowScroller = __webpack_require__(6462);

/***/ }),

/***/ 51278:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.caf = exports.raf = void 0;
// Properly handle server-side rendering.
var win;

if (typeof window !== 'undefined') {
  win = window;
} else if (typeof self !== 'undefined') {
  win = self;
} else {
  win = {};
} // requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/


var request = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function (callback) {
  return win.setTimeout(callback, 1000 / 60);
};

var cancel = win.cancelAnimationFrame || win.webkitCancelAnimationFrame || win.mozCancelAnimationFrame || win.oCancelAnimationFrame || win.msCancelAnimationFrame || function (id) {
  win.clearTimeout(id);
};

var raf = request;
exports.raf = raf;
var caf = cancel;
exports.caf = caf;

/***/ }),

/***/ 41498:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createCallbackMemoizer;

/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var cachedIndices = {};
  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;
    var keys = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];
      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });
    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ 23696:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = getUpdatedOffsetForIndex;

/**
 * Determines a new offset that ensures a certain cell is visible, given the current offset.
 * If the cell is already visible then the current offset will be returned.
 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
 *
 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
 * @param cellOffset Offset (x or y) position for cell
 * @param cellSize Size (width or height) of cell
 * @param containerSize Total size (width or height) of the container
 * @param currentOffset Container's current (x or y) offset
 * @return Offset to use to ensure the specified cell is visible
 */
function getUpdatedOffsetForIndex(_ref) {
  var _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'auto' : _ref$align,
      cellOffset = _ref.cellOffset,
      cellSize = _ref.cellSize,
      containerSize = _ref.containerSize,
      currentOffset = _ref.currentOffset;
  var maxOffset = cellOffset;
  var minOffset = maxOffset - containerSize + cellSize;

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return maxOffset - (containerSize - cellSize) / 2;

    default:
      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
  }
}

/***/ }),

/***/ 96271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bpfrpt_proptype_AnimationTimeoutId = exports.requestAnimationTimeout = exports.cancelAnimationTimeout = void 0;

var _animationFrame = __webpack_require__(51278);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var bpfrpt_proptype_AnimationTimeoutId =  true ? null : 0;
exports.bpfrpt_proptype_AnimationTimeoutId = bpfrpt_proptype_AnimationTimeoutId;

var cancelAnimationTimeout = function cancelAnimationTimeout(frame) {
  return (0, _animationFrame.caf)(frame.id);
};
/**
 * Recursively calls requestAnimationFrame until a specified delay has been met or exceeded.
 * When the delay time has been reached the function you're timing out will be called.
 *
 * Credit: Joe Lambert (https://gist.github.com/joelambert/1002116#file-requesttimeout-js)
 */


exports.cancelAnimationTimeout = cancelAnimationTimeout;

var requestAnimationTimeout = function requestAnimationTimeout(callback, delay) {
  var start; // wait for end of processing current event handler, because event handler may be long

  Promise.resolve().then(function () {
    start = Date.now();
  });

  var timeout = function timeout() {
    if (Date.now() - start >= delay) {
      callback.call();
    } else {
      frame.id = (0, _animationFrame.raf)(timeout);
    }
  };

  var frame = {
    id: (0, _animationFrame.raf)(timeout)
  };
  return frame;
};

exports.requestAnimationTimeout = requestAnimationTimeout;

/***/ }),

/***/ 32172:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/binary-search-bounds
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/
function _GEA(a, l, h, y) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x >= y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _GEP(a, l, h, y, c) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) >= 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function dispatchBsearchGE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _GTA(a, l, h, y) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x > y) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function _GTP(a, l, h, y, c) {
  var i = h + 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) > 0) {
      i = m;
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return i;
}

function dispatchBsearchGT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _GTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _GTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LTA(a, l, h, y) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x < y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _LTP(a, l, h, y, c) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) < 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function dispatchBsearchLT(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LTP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LTA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _LEA(a, l, h, y) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x <= y) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function _LEP(a, l, h, y, c) {
  var i = l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (c(x, y) <= 0) {
      i = m;
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return i;
}

function dispatchBsearchLE(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _LEP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _LEA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

function _EQA(a, l, h, y) {
  l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];

    if (x === y) {
      return m;
    } else if (x <= y) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function _EQP(a, l, h, y, c) {
  l - 1;

  while (l <= h) {
    var m = l + h >>> 1,
        x = a[m];
    var p = c(x, y);

    if (p === 0) {
      return m;
    } else if (p <= 0) {
      l = m + 1;
    } else {
      h = m - 1;
    }
  }

  return -1;
}

function dispatchBsearchEQ(a, y, c, l, h) {
  if (typeof c === 'function') {
    return _EQP(a, l === void 0 ? 0 : l | 0, h === void 0 ? a.length - 1 : h | 0, y, c);
  } else {
    return _EQA(a, c === void 0 ? 0 : c | 0, l === void 0 ? a.length - 1 : l | 0, y);
  }
}

var _default = {
  ge: dispatchBsearchGE,
  gt: dispatchBsearchGT,
  lt: dispatchBsearchLT,
  le: dispatchBsearchLE,
  eq: dispatchBsearchEQ
};
exports.default = _default;

/***/ }),

/***/ 55736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createDetectElementResize;

/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 * 5) Added support for injecting custom window object
 **/
function createDetectElementResize(nonce, hostWindow) {
  // Check `document` and `window` in case of server-side rendering
  var _window;

  if (typeof hostWindow !== 'undefined') {
    _window = hostWindow;
  } else if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = __webpack_require__.g;
  }

  var attachEvent = typeof _window.document !== 'undefined' && _window.document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };

      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);

      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }

      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;

          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };
    /* Detect CSS Animations support to detect element display/re-attach */


    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = _window.document.createElement('fakeelement');

      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }
    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');
      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;

        var elementStyle = _window.getComputedStyle(element);

        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }

        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        var resizeTriggersHtml = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';

        if (window.trustedTypes) {
          var staticPolicy = trustedTypes.createPolicy('react-virtualized-auto-sizer', {
            createHTML: function createHTML() {
              return resizeTriggersHtml;
            }
          });
          element.__resizeTriggers__.innerHTML = staticPolicy.createHTML('');
        } else {
          element.__resizeTriggers__.innerHTML = resizeTriggersHtml;
        }

        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);
        /* Listen for a css animation to detect element display/re-attach */

        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };

          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }

      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);

      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);

        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);

          element.__resizeTriggers__.__animationListener__ = null;
        }

        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {// Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),

/***/ 78694:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(95318);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = createWrapper;

var _binarySearchBounds = _interopRequireDefault(__webpack_require__(32172));

/**
 * Binary Search Bounds
 * https://github.com/mikolalysenko/interval-tree-1d
 * Mikola Lysenko
 *
 * Inlined because of Content Security Policy issue caused by the use of `new Function(...)` syntax in an upstream dependency.
 * Issue reported here: https://github.com/mikolalysenko/binary-search-bounds/issues/5
 **/
var NOT_FOUND = 0;
var SUCCESS = 1;
var EMPTY = 2;

function IntervalTreeNode(mid, left, right, leftPoints, rightPoints) {
  this.mid = mid;
  this.left = left;
  this.right = right;
  this.leftPoints = leftPoints;
  this.rightPoints = rightPoints;
  this.count = (left ? left.count : 0) + (right ? right.count : 0) + leftPoints.length;
}

var proto = IntervalTreeNode.prototype;

function copy(a, b) {
  a.mid = b.mid;
  a.left = b.left;
  a.right = b.right;
  a.leftPoints = b.leftPoints;
  a.rightPoints = b.rightPoints;
  a.count = b.count;
}

function rebuild(node, intervals) {
  var ntree = createIntervalTree(intervals);
  node.mid = ntree.mid;
  node.left = ntree.left;
  node.right = ntree.right;
  node.leftPoints = ntree.leftPoints;
  node.rightPoints = ntree.rightPoints;
  node.count = ntree.count;
}

function rebuildWithInterval(node, interval) {
  var intervals = node.intervals([]);
  intervals.push(interval);
  rebuild(node, intervals);
}

function rebuildWithoutInterval(node, interval) {
  var intervals = node.intervals([]);
  var idx = intervals.indexOf(interval);

  if (idx < 0) {
    return NOT_FOUND;
  }

  intervals.splice(idx, 1);
  rebuild(node, intervals);
  return SUCCESS;
}

proto.intervals = function (result) {
  result.push.apply(result, this.leftPoints);

  if (this.left) {
    this.left.intervals(result);
  }

  if (this.right) {
    this.right.intervals(result);
  }

  return result;
};

proto.insert = function (interval) {
  var weight = this.count - this.leftPoints.length;
  this.count += 1;

  if (interval[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.left.insert(interval);
      }
    } else {
      this.left = createIntervalTree([interval]);
    }
  } else if (interval[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (weight + 1)) {
        rebuildWithInterval(this, interval);
      } else {
        this.right.insert(interval);
      }
    } else {
      this.right = createIntervalTree([interval]);
    }
  } else {
    var l = _binarySearchBounds["default"].ge(this.leftPoints, interval, compareBegin);

    var r = _binarySearchBounds["default"].ge(this.rightPoints, interval, compareEnd);

    this.leftPoints.splice(l, 0, interval);
    this.rightPoints.splice(r, 0, interval);
  }
};

proto.remove = function (interval) {
  var weight = this.count - this.leftPoints;

  if (interval[1] < this.mid) {
    if (!this.left) {
      return NOT_FOUND;
    }

    var rw = this.right ? this.right.count : 0;

    if (4 * rw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.left.remove(interval);

    if (r === EMPTY) {
      this.left = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else if (interval[0] > this.mid) {
    if (!this.right) {
      return NOT_FOUND;
    }

    var lw = this.left ? this.left.count : 0;

    if (4 * lw > 3 * (weight - 1)) {
      return rebuildWithoutInterval(this, interval);
    }

    var r = this.right.remove(interval);

    if (r === EMPTY) {
      this.right = null;
      this.count -= 1;
      return SUCCESS;
    } else if (r === SUCCESS) {
      this.count -= 1;
    }

    return r;
  } else {
    if (this.count === 1) {
      if (this.leftPoints[0] === interval) {
        return EMPTY;
      } else {
        return NOT_FOUND;
      }
    }

    if (this.leftPoints.length === 1 && this.leftPoints[0] === interval) {
      if (this.left && this.right) {
        var p = this;
        var n = this.left;

        while (n.right) {
          p = n;
          n = n.right;
        }

        if (p === this) {
          n.right = this.right;
        } else {
          var l = this.left;
          var r = this.right;
          p.count -= n.count;
          p.right = n.left;
          n.left = l;
          n.right = r;
        }

        copy(this, n);
        this.count = (this.left ? this.left.count : 0) + (this.right ? this.right.count : 0) + this.leftPoints.length;
      } else if (this.left) {
        copy(this, this.left);
      } else {
        copy(this, this.right);
      }

      return SUCCESS;
    }

    for (var l = _binarySearchBounds["default"].ge(this.leftPoints, interval, compareBegin); l < this.leftPoints.length; ++l) {
      if (this.leftPoints[l][0] !== interval[0]) {
        break;
      }

      if (this.leftPoints[l] === interval) {
        this.count -= 1;
        this.leftPoints.splice(l, 1);

        for (var r = _binarySearchBounds["default"].ge(this.rightPoints, interval, compareEnd); r < this.rightPoints.length; ++r) {
          if (this.rightPoints[r][1] !== interval[1]) {
            break;
          } else if (this.rightPoints[r] === interval) {
            this.rightPoints.splice(r, 1);
            return SUCCESS;
          }
        }
      }
    }

    return NOT_FOUND;
  }
};

function reportLeftRange(arr, hi, cb) {
  for (var i = 0; i < arr.length && arr[i][0] <= hi; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRightRange(arr, lo, cb) {
  for (var i = arr.length - 1; i >= 0 && arr[i][1] >= lo; --i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

function reportRange(arr, cb) {
  for (var i = 0; i < arr.length; ++i) {
    var r = cb(arr[i]);

    if (r) {
      return r;
    }
  }
}

proto.queryPoint = function (x, cb) {
  if (x < this.mid) {
    if (this.left) {
      var r = this.left.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportLeftRange(this.leftPoints, x, cb);
  } else if (x > this.mid) {
    if (this.right) {
      var r = this.right.queryPoint(x, cb);

      if (r) {
        return r;
      }
    }

    return reportRightRange(this.rightPoints, x, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

proto.queryInterval = function (lo, hi, cb) {
  if (lo < this.mid && this.left) {
    var r = this.left.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi > this.mid && this.right) {
    var r = this.right.queryInterval(lo, hi, cb);

    if (r) {
      return r;
    }
  }

  if (hi < this.mid) {
    return reportLeftRange(this.leftPoints, hi, cb);
  } else if (lo > this.mid) {
    return reportRightRange(this.rightPoints, lo, cb);
  } else {
    return reportRange(this.leftPoints, cb);
  }
};

function compareNumbers(a, b) {
  return a - b;
}

function compareBegin(a, b) {
  var d = a[0] - b[0];

  if (d) {
    return d;
  }

  return a[1] - b[1];
}

function compareEnd(a, b) {
  var d = a[1] - b[1];

  if (d) {
    return d;
  }

  return a[0] - b[0];
}

function createIntervalTree(intervals) {
  if (intervals.length === 0) {
    return null;
  }

  var pts = [];

  for (var i = 0; i < intervals.length; ++i) {
    pts.push(intervals[i][0], intervals[i][1]);
  }

  pts.sort(compareNumbers);
  var mid = pts[pts.length >> 1];
  var leftIntervals = [];
  var rightIntervals = [];
  var centerIntervals = [];

  for (var i = 0; i < intervals.length; ++i) {
    var s = intervals[i];

    if (s[1] < mid) {
      leftIntervals.push(s);
    } else if (mid < s[0]) {
      rightIntervals.push(s);
    } else {
      centerIntervals.push(s);
    }
  } //Split center intervals


  var leftPoints = centerIntervals;
  var rightPoints = centerIntervals.slice();
  leftPoints.sort(compareBegin);
  rightPoints.sort(compareEnd);
  return new IntervalTreeNode(mid, createIntervalTree(leftIntervals), createIntervalTree(rightIntervals), leftPoints, rightPoints);
} //User friendly wrapper that makes it possible to support empty trees


function IntervalTree(root) {
  this.root = root;
}

var tproto = IntervalTree.prototype;

tproto.insert = function (interval) {
  if (this.root) {
    this.root.insert(interval);
  } else {
    this.root = new IntervalTreeNode(interval[0], null, null, [interval], [interval]);
  }
};

tproto.remove = function (interval) {
  if (this.root) {
    var r = this.root.remove(interval);

    if (r === EMPTY) {
      this.root = null;
    }

    return r !== NOT_FOUND;
  }

  return false;
};

tproto.queryPoint = function (p, cb) {
  if (this.root) {
    return this.root.queryPoint(p, cb);
  }
};

tproto.queryInterval = function (lo, hi, cb) {
  if (lo <= hi && this.root) {
    return this.root.queryInterval(lo, hi, cb);
  }
};

Object.defineProperty(tproto, 'count', {
  get: function get() {
    if (this.root) {
      return this.root.count;
    }

    return 0;
  }
});
Object.defineProperty(tproto, 'intervals', {
  get: function get() {
    if (this.root) {
      return this.root.intervals([]);
    }

    return [];
  }
});

function createWrapper(intervals) {
  if (!intervals || intervals.length === 0) {
    return new IntervalTree(null);
  }

  return new IntervalTree(createIntervalTree(intervals));
}

/***/ })

}]);