!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("myprogress",[],t):"object"==typeof exports?exports.myprogress=t():e.myprogress=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,r){"use strict";t.a={name:"myprogress",props:["progressnum","bgcolor","fillcolor","diameter","strokewidth","clockwise"],data:function(){return{}},components:{},computed:{},watch:{},created:function(){},mounted:function(){this.setProgress()},methods:{setProgress:function(){var e=document.getElementsByClassName("progress")[0],t=this.clockwise?3.14*this.diameter-3.14*this.diameter*this.progressnum:-(3.14*this.diameter-3.14*this.diameter*this.progressnum);e.setAttribute("stroke-dashoffset",t)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=[n.a],s=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];o.map(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&s(window.Vue),t.default={install:s,myprogress:n.a}},function(e,t,r){"use strict";var n=r(3);n.a.install=function(e){return e.component(n.a.name,n.a)},t.a=n.a},function(e,t,r){"use strict";function n(e){r(4)}var o=r(0),s=r(10),i=r(9),a=n,u=i(o.a,s.a,!1,a,"data-v-56a68b5c",null);t.a=u.exports},function(e,t,r){var n=r(5);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(7)("5edd0e48",n,!0,{})},function(e,t,r){t=e.exports=r(6)(!1),t.push([e.i,"svg[data-v-56a68b5c]{transform:rotate(-90deg)}",""])},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var s=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([s]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(n[s]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){function n(e){for(var t=0;t<e.length;t++){var r=e[t],n=d[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(s(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(s(r.parts[o]));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function s(e){var t,r,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(y){var s=p++;n=l||(l=o()),t=i.bind(null,n,s,!1),r=i.bind(null,n,s,!0)}else n=o(),t=a.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}function i(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var s=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}function a(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(g,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=r(8),d={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,m=function(){},v=null,g="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,r,o){h=r,v=o||{};var s=c(e,t);return n(s),function(t){for(var r=[],o=0;o<s.length;o++){var i=s[o],a=d[i.id];a.refs--,r.push(a)}t?(s=c(e,t),n(s)):s=[];for(var o=0;o<r.length;o++){var a=r[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete d[a.id]}}}};var b=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var r=[],n={},o=0;o<t.length;o++){var s=t[o],i=s[0],a=s[1],u=s[2],c=s[3],d={id:e+":"+o,css:a,media:u,sourceMap:c};n[i]?n[i].parts.push(d):r.push(n[i]={id:i,parts:[d]})}return r}},function(e,t){e.exports=function(e,t,r,n,o,s){var i,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(i=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=d):n&&(d=n),d){var f=c.functional,l=f?c.render:c.beforeCreate;f?(c._injectStyles=d,c.render=function(e,t){return d.call(t),l(e,t)}):c.beforeCreate=l?[].concat(l,d):[d]}return{esModule:i,exports:a,options:c}}},function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("svg",{staticClass:"svg",attrs:{width:e.diameter+e.strokewidth,height:e.diameter+e.strokewidth}},[r("circle",{attrs:{r:e.diameter/2,cy:e.diameter/2+e.strokewidth/2,cx:e.diameter/2+e.strokewidth/2,"stroke-width":e.strokewidth,stroke:e.bgcolor,"stroke-linejoin":"round","stroke-linecap":"round",fill:"none"}}),e._v(" "),r("circle",{staticClass:"progress",attrs:{r:e.diameter/2,cy:e.diameter/2+e.strokewidth/2,cx:e.diameter/2+e.strokewidth/2,"stroke-width":e.strokewidth,stroke:e.fillcolor,"stroke-linejoin":"round","stroke-linecap":"round",fill:"none","stroke-dashoffset":"-0px","stroke-dasharray":3.14*e.diameter}})])])},o=[],s={render:n,staticRenderFns:o};t.a=s}])});
//# sourceMappingURL=MyProgress.js.map