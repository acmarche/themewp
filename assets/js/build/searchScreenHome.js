!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=113)}([function(e,t){e.exports=window.wp.element},function(e,t,n){"use strict";var r=n(8),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function s(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){s(t[r])&&s(n)?t[r]=e(t[r],n):s(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},,function(e,t,n){var r=n(21),o=n(22),a=n(18),i=n(23);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()}},,function(e,t,n){"use strict";var r=n(6),o=n.n(r).a.create({baseURL:"https://new.marche.be/"});t.a=o},function(e,t,n){e.exports=n(24)},function(e,t){e.exports=window.regeneratorRuntime},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(1);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var c=e.indexOf("#");-1!==c&&(e=e.slice(0,c)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(1),o=n(29),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,s={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(c=n(12)),c),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){s.headers[e]=r.merge(a)})),e.exports=s}).call(this,n(20))},function(e,t,n){"use strict";var r=n(1),o=n(30),a=n(32),i=n(9),c=n(33),s=n(36),u=n(37),l=n(13);e.exports=function(e){return new Promise((function(t,n){var f=e.data,m=e.headers;r.isFormData(f)&&delete m["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(h+":"+d)}var b=c(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(b,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,a),p=null}},p.onabort=function(){p&&(n(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(b))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(m[e.xsrfHeaderName]=g)}if("setRequestHeader"in p&&r.forEach(m,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete m[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),f||(f=null),p.send(f)}))}},function(e,t,n){"use strict";var r=n(31);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],c=["validateStatus"];function s(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=s(void 0,t[e]))})),r.forEach(a,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=s(void 0,e[o])):n[o]=s(void 0,t[o])})),r.forEach(c,(function(r){r in t?n[r]=s(e[r],t[r]):r in e&&(n[r]=s(void 0,e[r]))}));var l=o.concat(a).concat(i).concat(c),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t){function n(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,s,"next",e)}function s(e){n(i,o,a,c,s,"throw",e)}c(void 0)}))}}},,function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var s,u=[],l=!1,f=-1;function m(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=c(m);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(e,t,n){"use strict";var r=n(1),o=n(8),a=n(25),i=n(14);function c(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var s=c(n(11));s.Axios=a,s.create=function(e){return c(i(s.defaults,e))},s.Cancel=n(15),s.CancelToken=n(38),s.isCancel=n(10),s.all=function(e){return Promise.all(e)},s.spread=n(39),s.isAxiosError=n(40),e.exports=s,e.exports.default=s},function(e,t,n){"use strict";var r=n(1),o=n(9),a=n(26),i=n(27),c=n(14);function s(e){this.defaults=e,this.interceptors={request:new a,response:new a}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=c(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},s.prototype.getUri=function(e){return e=c(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,n){return this.request(c(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,n,r){return this.request(c(r||{},{method:e,url:t,data:n}))}})),e.exports=s},function(e,t,n){"use strict";var r=n(1);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(1),o=n(28),a=n(10),i=n(11);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(13);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var c=[];c.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),r.isString(o)&&c.push("path="+o),r.isString(a)&&c.push("domain="+a),!0===i&&c.push("secure"),document.cookie=c.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(34),o=n(35);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(1),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(15);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(5);function o(e){var t="wp-json/search/search/".concat(e);return r.a.get(t,{params:{}})}function a(e){var t="wp-json/search/suggest/".concat(e);return r.a.get(t,{params:{}})}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var r=n(7),o=n.n(r),a=n(16),i=n.n(a),c=n(3),s=n.n(c),u=n(0),l=n(91),f=n(92),m=n(93),p=n(41),h=wp.element,d=h.useState,b=h.useEffect;t.a=function(){var e=d(""),t=s()(e,2),n=t[0],r=t[1],a=d(null),c=s()(a,2),h=c[0],g=c[1],v=d([]),y=s()(v,2),x=y[0],j=y[1];function E(){return(E=i()(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(p.b)(n);case 3:t=e.sent,r=t.data,j(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var w=void 0!==n&&2<n.length;return b((function(){w&&function(){E.apply(this,arguments)}(n)}),[n]),Object(u.createElement)(u.Fragment,null,Object(u.createElement)("h1",{className:"pb-22px"},"Bienvenue ",Object(u.createElement)("br",{className:"d-ls-md-none d-md-none"}),"à Marche-en-Famenne"),Object(u.createElement)("form",{action:"/",method:"get",className:"mw-550px position-relative m-auto searchHome"},Object(u.createElement)("input",{name:"s",autoComplete:"off",type:"search",placeholder:"Que cherchez-vous ?",className:"border-0 rounded-pill h-42px pl-16px pr-58px fs-short-3",onChange:function(e){return t=e.target.value,h&&clearTimeout(h),void g(setTimeout((function(){r(t),g(null)}),500));var t}}),Object(u.createElement)("button",{type:"submit",className:"position-absolute top-0 bottom-0 right-0 w-42px d-flex justify-content-center align-items-center p-0 border-0 rounded-right-pill bg-transparent icon_custom"},Object(u.createElement)("i",{className:"i-search i-dark-primary"})),Object(u.createElement)("div",{className:"bubble d-ls-lg-none d-lg-none"},Object(u.createElement)("i",{className:"graphicElement"}),Object(u.createElement)("h3",null,"Suggestions"),w?Object(u.createElement)(m.a,{suggestionsList:x}):Object(u.createElement)(l.a,null),Object(u.createElement)("i",{className:"graphicElement"}))),Object(u.createElement)(f.a,null))}},function(e,t,n){"use strict";var r=n(0);t.a=function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("ul",null,Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"/sport/piscine-communale",className:"icon_custom"},Object(r.createElement)("i",{className:"i-swimmer"}),"Piscine")),Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"/environnement",className:"icon_custom"},Object(r.createElement)("i",{className:"i-leaf"}),"Environnment-Déchet")),Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"/mobilite/infos-travaux/",className:"icon_custom"},Object(r.createElement)("i",{className:"i-traffic-cone"}),"Travaux")),Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"https://enfance-jeunesse.marche.be",className:"icon_custom"},Object(r.createElement)("i",{className:"i-beach-ball"}),"Jeunesse-Stages")),Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"/tourisme/cartographie",className:"icon_custom"},Object(r.createElement)("i",{className:"i-map"}),"Cartes dynamiques")),Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"/social/centre-public-daction-sociale-cpas/",className:"icon_custom"},Object(r.createElement)("i",{className:"i-handshake"}),"CPAS")),Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{href:"https://citoyen.marche.be",className:"icon_custom"},Object(r.createElement)("i",{className:"i-envelope"}),"Mon adresse e-mail"))))}},function(e,t,n){"use strict";var r=n(0);t.a=function(){return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("ul",{className:"d-none d-ls-lg-flex d-lg-flex flex-wrap justify-content-center mw-500px pt-42px mx-auto "},Object(r.createElement)("li",{className:"col-3 d-flex justify-content-center"},Object(r.createElement)("a",{href:"/sport/piscine-communale",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-swimmer i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-62"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"Piscine"))),Object(r.createElement)("li",{className:"col-3 d-flex justify-content-center"},Object(r.createElement)("a",{href:"/environnement",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-leaf i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-53"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"Environnement Déchet"))),Object(r.createElement)("li",{className:"col-3 d-flex justify-content-center"},Object(r.createElement)("a",{href:"/mobilite/infos-travaux/",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-traffic-cone i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-48"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"Travaux"))),Object(r.createElement)("li",{className:"col-3 d-flex justify-content-center"},Object(r.createElement)("a",{href:"https://enfance-jeunesse.marche.be",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-beach-ball i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-55"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"Jeunesse Stage"))),Object(r.createElement)("li",{className:"col-3 pt-12px d-flex justify-content-center"},Object(r.createElement)("a",{href:"/tourisme/cartographie",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-map i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-55"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"Cartes dynamiques"))),Object(r.createElement)("li",{className:"col-3 pt-12px d-flex justify-content-center"},Object(r.createElement)("a",{href:"/social/centre-public-daction-sociale-cpas/",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-handshake i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-55"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"CPAS"))),Object(r.createElement)("li",{className:"col-3 pt-12px d-flex justify-content-center"},Object(r.createElement)("a",{href:"https://citoyen.marche.be",className:"icon_custom"},Object(r.createElement)("i",{className:" d-block w-54px h-54px shadow-sm-2 mx-auto rounded-circle i-envelope i-bg-white i-bg-hover-primary i-hover-white i-bg-color-transition bg-size-55"}),Object(r.createElement)("span",{className:"d-inline-block text-white fs-short-3 ff-semibold lh-150 pt-6px"},"Mon adresse e-mail")))))}},function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=e.suggestionsList;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)("ul",null,0!==t.length?t.map((function(e,t){return Object(r.createElement)("li",{key:t,className:"col-ls-6"},Object(r.createElement)("a",{href:"/?s=".concat(e),className:"icon_custom"},e))})):Object(r.createElement)("li",{className:"col-ls-6"},Object(r.createElement)("a",{className:"icon_custom"},"Pas de proposition"))))}},,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(114)},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(90);ReactDOM.render(Object(r.createElement)(o.a,null),document.getElementById("search-screen-home"))}]);
//# sourceMappingURL=searchScreenHome.js.map