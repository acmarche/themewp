!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=111)}([function(e,t){e.exports=window.wp.element},function(e,t,n){"use strict";var r=n(7),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function a(e){return void 0===e}function i(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:i,isPlainObject:c,isUndefined:a,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return i(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):s(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},,function(e,t,n){var r=n(19),o=n(20),s=n(16),a=n(21);e.exports=function(e,t){return r(e)||o(e,t)||s(e,t)||a()}},,function(e,t,n){"use strict";var r=n(6),o=n.n(r).a.create({baseURL:"https://new.marche.be/"});t.a=o},function(e,t,n){e.exports=n(22)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(1);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(27),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var i,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(i=n(11)),i),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c}).call(this,n(18))},function(e,t,n){"use strict";var r=n(1),o=n(28),s=n(30),a=n(8),i=n(31),c=n(34),u=n(35),l=n(12);e.exports=function(e){return new Promise((function(t,n){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(d+":"+h)}var b=i(e.baseURL,e.url);if(m.open(e.method.toUpperCase(),a(b,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in m?c(m.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};o(t,n,s),m=null}},m.onabort=function(){m&&(n(l("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){n(l("Network Error",e,null,m)),m=null},m.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||u(b))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in m&&r.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:m.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),e.responseType)try{m.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),n(e),m=null)})),f||(f=null),m.send(f)}))}},function(e,t,n){"use strict";var r=n(29);e.exports=function(e,t,n,o,s){var a=new Error(e);return r(a,t,n,o,s)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],s=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(s,u),r.forEach(a,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(i,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=o.concat(s).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},,function(e,t,n){var r=n(17);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){var n,r,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,f=-1;function p(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&m())}function m(){if(!l){var e=i(p);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||l||i(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw s}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";var r=n(1),o=n(7),s=n(23),a=n(13);function i(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var c=i(n(10));c.Axios=s,c.create=function(e){return i(a(c.defaults,e))},c.Cancel=n(14),c.CancelToken=n(36),c.isCancel=n(9),c.all=function(e){return Promise.all(e)},c.spread=n(37),c.isAxiosError=n(38),e.exports=c,e.exports.default=c},function(e,t,n){"use strict";var r=n(1),o=n(8),s=n(24),a=n(25),i=n(13);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=i(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(i(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(i(r||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(1);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(1),o=n(26),s=n(9),a=n(10);function i(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return i(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return i(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(i(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(12);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(32),o=n(33);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,a={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(14);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},function(e,t){e.exports=window.regeneratorRuntime},,function(e,t){function n(e,t,n,r,o,s,a){try{var i=e[s](a),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var a=e.apply(t,r);function i(e){n(a,o,s,i,c,"next",e)}function c(e){n(a,o,s,i,c,"throw",e)}i(void 0)}))}}},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var r=n(5);function o(e){var t="wp-json/search/search/".concat(e);return r.a.get(t,{params:{}})}function s(e){var t="wp-json/search/suggest/".concat(e);return r.a.get(t,{params:{}})}},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(39),o=n.n(r),s=n(41),a=n.n(s),i=n(3),c=n.n(i),u=n(0),l=n(88),f=n(89),p=n(67),m=wp.element,d=m.useState,h=m.useEffect;t.a=function(){var e=d(""),t=c()(e,2),n=t[0],r=t[1],s=d(null),i=c()(s,2),m=i[0],b=i[1],v=d([]),y=c()(v,2),g=y[0],x=y[1];function E(){return(E=a()(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.b)(n);case 3:t=e.sent,r=t.data,x(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var j=void 0!==n&&2<n.length;return h((function(){j&&function(){E.apply(this,arguments)}(n)}),[n]),Object(u.createElement)(u.Fragment,null,Object(u.createElement)("i",{className:"graphicElement"}),Object(u.createElement)("ul",null,Object(u.createElement)("li",{className:"col-ls-12"},Object(u.createElement)("form",{className:"h-32px"},Object(u.createElement)("input",{type:"search",placeholder:"Que cherchez-vous ?",className:"border-0 rounded-pill h-32px pl-16px pr-48px fs-short-3",onChange:function(e){return t=e.target.value,m&&clearTimeout(m),void b(setTimeout((function(){r(t),b(null)}),500));var t}}),Object(u.createElement)("button",{className:"position-absolute top-0 bottom-0 right-0 w-32px h-32px d-flex justify-content-center align-items-center p-0 border-0 rounded-right-pill bg-transparent icon_custom"},Object(u.createElement)("i",{className:"i-search i-dark-primary w-16px h-16px"}))),Object(u.createElement)("a",{href:"#",className:"icon_custom"},Object(u.createElement)("i",{className:"i-times",id:"btn-close-search"}))),j?Object(u.createElement)(f.a,{suggestionsList:g}):Object(u.createElement)(l.a,null)),Object(u.createElement)("i",{className:"graphicElement"}))}},function(e,t,n){"use strict";var r=n(0);t.a=function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"/sport/piscine-communal",className:"icon_custom"},Object(r.createElement)("i",{className:"i-swimmer"}),"Piscine")),Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"/environnement",className:"icon_custom"},Object(r.createElement)("i",{className:"i-leaf"}),"Environnement-Déchet")),Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"/mobilite/infos-travaux/",className:"icon_custom"},Object(r.createElement)("i",{className:"i-traffic-cone"}),"Travaux")),Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"https://enfance-jeunesse.marche.be",className:"icon_custom"},Object(r.createElement)("i",{className:"i-beach-ball"}),"Jeunesse-Stages")),Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"/tourisme/cartographie",className:"icon_custom"},Object(r.createElement)("i",{className:"i-map"}),"Cartes dynamiques")),Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"/social/centre-public-daction-sociale-cpas/",className:"icon_custom"},Object(r.createElement)("i",{className:"i-handshake"}),"CPAS")),Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"https://citoyen.marche.be",className:"icon_custom"},Object(r.createElement)("i",{className:"i-envelope"}),"Mon adresse e-mail")))}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.suggestionsList;return Object(r.createElement)(r.Fragment,null,0!==t.length?t.map((function(e,t){return Object(r.createElement)("li",{key:t,className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{href:"/?s=".concat(e),className:"icon_custom"},e))})):Object(r.createElement)("li",{className:"col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"},Object(r.createElement)("a",{className:"icon_custom"},"Pas de proposition")))}},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(112)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(87);ReactDOM.render(Object(r.createElement)(o.a,null),document.querySelector(".searchScreen"))}]);
//# sourceMappingURL=searchScreen.js.map