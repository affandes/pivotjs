!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.pivotJs=t():e.pivotJs=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);t.default=function(e){let t=e,n=[],r=[],o=[],u=[],a={};function i(){return t}function l(){return n}function s(){return r}function c(){return o}function f(){return a}function m(e,t,n){let r=l()[n],o=i()[t][r.name];return void 0===e[o]&&(e[o]={values:null}),e[o].values=function(e,t){let n=s(),r=c(),o=i()[t];null===e&&(e={});return r.forEach(t=>{if(void 0===e[t.name]?e[t.name]=p(null,o[t.name],t.type):e[t.name]=p(e[t.name],o[t.name],t.type),n.length>0){let r=n[0];f()[r.name].values.forEach(n=>{let r=t.name+":"+n;void 0===e[r]&&(e[r]=null)});let u=t.name+":"+o[r.name];e[u]=p(e[u],o[r.name],t.type)}}),e}(e[o].values,t),n<l().length-1&&(e[o].sub=m(e[o].sub,t,n+1)),e}function p(e,t,n){if(null===e&&(e={val:0,sum:0,count:0,avg:0,min:t,max:t}),e.count++,"number"==typeof t)switch(e.sum+=t,e.avg=e.sum/e.count,e.min=t<e.min?t:e.min,e.max=t>e.max?t:e.max,n){case"sum":e.val=e.sum;break;case"count":e.val=e.count;break;case"average":e.val=e.avg;break;case"min":e.val=e.min;break;case"max":e.val=e.max;break;default:e.val=e.count}else e.sum=null,e.avg=null,e.min=null,e.max=null;return e}this.getRaw=function(){return i()},this.getLabels=function(){return u},this.groupBy=function(e){return l().push(e),this},this.columnBy=function(e){return s().push(e),this},this.valueBy=function(e){return c().push(e),this},this.getSummary=function(){return f()},this.toPivot=function(){if(this.validate()){if(this.validateFilters()){let e=i(),t=0,n={};for(let r=0;r<e.length;r++)n=m(n,r,t);return n}return{}}return{}},this.validateFilters=function(){let e=l(),t=s(),n=c();return e.length<1?(console.error("Choose row filter at least 1"),!1):n.length<1?(console.error("Choose value filter at least 1"),!1):!(t.length>1)||(console.error("Column cannot more than 1"),!1)},this.validate=function(){let e=i();if("object"!=typeof e)return console.error("Base table is not an object!"),!1;if(Array.isArray(e)){if(0===e.length)return console.error("Base table is empty array!"),!1;{let t=e[0];if("object"!=typeof t)return console.error("First row is not an object!"),!1;if(Array.isArray(t))return console.error("First row is an array!"),!1;{let n=Object.keys(t),r={},o=JSON.stringify(n),u=!0;for(let t=0;t<e.length;t++){let n=Object.keys(e[t]);if(o!==JSON.stringify(n)){u=!1,console.error("Inconsistent column name!");break}n.forEach(n=>{void 0===r[n]&&(r[n]={type:"number",values:[]});let o=e[t][n];r[n].values.indexOf(o)<0&&r[n].values.push(o),"number"!=typeof o&&(r[n].type="mixed")})}return a=r,u}}}return console.error("Base table is not an array!"),!1}}}])}));