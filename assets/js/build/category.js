!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=110)}([function(e,t){e.exports=window.wp.element},function(e,t,n){"use strict";var r=n(10),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function s(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function n(n,r){s(t[r])&&s(n)?t[r]=e(t[r],n):s(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},,function(e,t,n){var r=n(22),o=n(23),a=n(19),i=n(24);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},function(e,t){e.exports=window.regeneratorRuntime},,function(e,t,n){"use strict";var r=n(8),o=n.n(r).a.create({baseURL:"https://www.marche.be/"});t.a=o},function(e,t){function n(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}}},function(e,t,n){e.exports=n(25)},,function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(1);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(30),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,s={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(c=n(14)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(a)})),e.exports=s}).call(this,n(21))},function(e,t,n){"use strict";var r=n(1),o=n(31),a=n(33),i=n(11),c=n(34),s=n(37),u=n(38),f=n(15);e.exports=function(e){return new Promise((function(t,n){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var v=c(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};o(t,n,a),d=null}},d.onabort=function(){d&&(n(f("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(f("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=(e.withCredentials||u(v))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),l||(l=null),d.send(l)}))}},function(e,t,n){"use strict";var r=n(32);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),r.forEach(a,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(void 0,t[o])})),r.forEach(c,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var f=o.concat(a).concat(i).concat(c),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(l,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},,function(e,t,n){var r=n(20);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?u=s.concat(u):l=-1,u.length&&d())}function d(){if(!f){var e=c(p);f=!0;for(var t=u.length;t;){for(s=u,u=[];++l<t;)s&&s[l].run();l=-1,t=u.length}s=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||f||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";var r=n(1),o=n(10),a=n(26),i=n(16);function c(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=c(n(13));s.Axios=a,s.create=function(e){return c(i(s.defaults,e))},s.Cancel=n(17),s.CancelToken=n(39),s.isCancel=n(12),s.all=function(e){return Promise.all(e)},s.spread=n(40),s.isAxiosError=n(41),e.exports=s,e.exports.default=s},function(e,t,n){"use strict";var r=n(1),o=n(11),a=n(27),i=n(28),c=n(16);function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=c(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=c(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(c(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,r){return this.request(c(r||{},{method:e,url:t,data:n}))}})),e.exports=s},function(e,t,n){"use strict";var r=n(1);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(1),o=n(29),a=n(12),i=n(13);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(a)&&c.push("domain="+a),!0===i&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(35),o=n(36);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(17);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(6);function o(e,t){var n={};t&&(n.parent=t),n._fields="name, id, description",n.per_page=100;var o="".concat(e,"wp-json/wp/v2/categories");return r.a.get(o,{params:n})}function a(e,t){var n="".concat(e,"wp-json/wp/v2/categories/").concat(t);return r.a.get(n,{})}},,,,,,,,function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(7),i=n.n(a),c=n(3),s=n.n(c),u=n(0),f=n(65),l=n(56),p=n(69),d=n(72),m=n(73),h=wp.element,v=h.useState,y=h.useEffect;t.a=function(){var e=v(0),t=s()(e,2),n=t[0],r=t[1],a=v(null),c=s()(a,2),h=c[0],g=c[1],b="app-category",x=document.getElementById(b).getAttribute("data-main-category-id"),w=document.getElementById(b).getAttribute("data-site-slug"),j=document.getElementById(b).getAttribute("data-color");function E(){return(E=i()(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0<n)){e.next=12;break}return e.prev=1,e.next=4,Object(l.b)(w,n);case 4:t=e.sent,g(t.data),document.title=t.data.name,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:return e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return y((function(){r(x)}),[]),y((function(){!function(){E.apply(this,arguments)}()}),[n]),Object(u.createElement)(u.Fragment,null,Object(u.createElement)(d.a,{category:h,color:j}),Object(u.createElement)(f.a,{catId:x,mainCategory:x,siteSlug:w,setSelectedCategory:r}),h&&Object(u.createElement)(m.a,{category:h}),Object(u.createElement)(p.a,{catId:n,siteSlug:w}))}},function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(66),i=n.n(a),c=n(7),s=n.n(c),u=n(3),f=n.n(u),l=n(0),p=n(56),d=n(67),m=n(68),h=wp.element,v=h.useState,y=h.useEffect;t.a=function(e){var t=v([]),n=f()(t,2),r=n[0],a=n[1],c=v(!1),u=f()(c,2),h=(u[0],u[1]),g=e.catId,b=e.mainCategory;function x(){return(x=s()(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,Object(p.a)(e.siteSlug,g);case 4:n=t.sent,0<(r=n.data).length?a([{name:"Tout",id:b,description:"",active:!0}].concat(i()(r))):a([]),h(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),h(!1);case 13:return t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function w(e){r.map((function(t){return t.id===e?Object.assign(t,{active:!0}):Object.assign(t,{active:!1})}))}y((function(){0<g&&function(){x.apply(this,arguments)}()}),[g]);var j=r.map((function(t){return Object(l.createElement)(d.a,{item:t,key:t.id,setItemActive:w,setSelectedCategory:e.setSelectedCategory})})),E=r.map((function(e){return Object(l.createElement)(m.a,{item:e,key:e.id})}));return 0===r.length?Object(l.createElement)(l.Fragment,null):Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"d-lg-none pr-12px border border-dark-primary mt-48px"},Object(l.createElement)("select",{id:"cat-select",name:"categories",value:g,className:"fs-short-3 ff-semibold",onChange:function(t){var n=t.target.value;w(n),e.setSelectedCategory(n)}},E)),Object(l.createElement)("div",{className:"d-none d-lg-block overflow-hidden w-100 pt-48px col-6 px-0"},Object(l.createElement)("ul",{className:"object-tags"},j)))}},function(e,t,n){var r=n(112),o=n(113),a=n(19),i=n(114);e.exports=function(e){return r(e)||o(e)||a(e)||i()}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.item;return Object(r.createElement)("li",{className:"".concat(t.active?"active":""," pr-24px")},Object(r.createElement)("a",{"data-category-id":t.id,onClick:function(){return n=t.id,e.setItemActive(n),void e.setSelectedCategory(n);var n},href:"#"},t.name))}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.item;return Object(r.createElement)("option",{key:t.id,value:t.id},t.name)}},function(e,t,n){"use strict";var r=n(4),o=n.n(r),a=n(7),i=n.n(a),c=n(3),s=n.n(c),u=n(0),f=n(70),l=n(71),p=wp.element,d=p.useState,m=p.useEffect;t.a=function(e){var t=d([]),n=s()(t,2),r=n[0],a=n[1],c=d(!1),p=s()(c,2),h=(p[0],p[1]);function v(){return(v=i()(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,Object(f.a)(e.siteSlug,e.catId);case 4:n=t.sent,a(n.data),h(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),h(!1);case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}m((function(){0<e.catId&&function(){v.apply(this,arguments)}()}),[e.catId]);var y=r.map((function(e,t){return Object(u.createElement)(l.a,{key:e.ID,item:e})}));return Object(u.createElement)("div",{className:"pt-24px"},Object(u.createElement)("ul",{className:"d-flex mx-n12px flex-wrap"},y))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(6);function o(e,t){var n="".concat(e,"wp-json/jfs/v1/all/").concat(t);return r.a.get(n,{params:{}})}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.item;return Object(r.createElement)("li",{className:"pb-12px px-12px col-12 col-md-6"},Object(r.createElement)("a",{href:t.url,className:"border border-default p-24px shadow-sm d-block"},Object(r.createElement)("h3",{className:"fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis",dangerouslySetInnerHTML:{__html:t.post_title}}),Object(r.createElement)("span",{className:"d-block pt-8px fs-short-3 ellipsis text-dark-primary",dangerouslySetInnerHTML:{__html:t.post_excerpt}})))}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.category;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("span",{className:"".concat(e.color," ff-semibold pt-12px d-block fs-short-2")},t&&t.name))}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.category;return 0<t.description.length?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("p",{className:"mt-2",dangerouslySetInnerHTML:{__html:null==t?void 0:t.description}})):Object(r.createElement)(r.Fragment,null)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(111)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(64);ReactDOM.render(Object(r.createElement)(o.a,null),document.getElementById("app-category"))},function(e,t,n){var r=n(20);e.exports=function(e){if(Array.isArray(e))return r(e)}},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}]);
//# sourceMappingURL=category.js.map