(()=>{var e={1504:e=>{function t(e,t,r,n,o,a,u){try{var c=e[a](u),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var u=e.apply(r,n);function c(e){t(u,o,a,c,s,"next",e)}function s(e){t(u,o,a,c,s,"throw",e)}c(void 0)}))}}},7135:(e,t,r)=>{e.exports=r(6248)},5366:(e,t,r)=>{"use strict";r(9641);var n,o=r(7135),a=r.n(o),u=r(1504),c=r.n(u),s=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(s)}const l=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const p=function(e){return"string"==typeof e&&l.test(e)};for(var d=[],f=0;f<256;++f)d.push((f+256).toString(16).substr(1));const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!p(r))throw TypeError("Stringified UUID is invalid");return r};const y=function(e,t,r){var n=(e=e||{}).random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return m(n)};var g="qwertyujn";const v="http://localhost:3000";function h(e){return b.apply(this,arguments)}function b(){return(b=c()(a().mark((function e(t){var r,n,o,u,c,s,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,o={},n&&(o["Content-Type"]="application/json",u=JSON.stringify(n)),e.next=6,fetch("".concat(v).concat(t),{method:r,headers:o,body:u});case 6:if((c=e.sent).ok){e.next=10;break}return console.warn("Error",c.statusText),e.abrupt("return",null);case 10:return e.next=12,c.json();case 12:return s=e.sent,e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){var t=document.querySelector("#".concat(e));t.value.trim()||(t.style.borderColor="rgba(225, 0, 0, 0.6)",t.addEventListener("focus",(function(e){e.target.style.borderColor=""})))}))}function S(e,t,r){return x.apply(this,arguments)}function x(){return(x=c()(a().mark((function e(t,r,n){var o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=y(),e.next=3,h("/api/registration","POST",{name:t,email:r,password:n,progress:[],token:o});case 3:return u=e.sent,localStorage.setItem("".concat(g,"token"),o),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r,n){return q.apply(this,arguments)}function q(){return(q=c()(a().mark((function e(t,r,n,o){var u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&/^[a-z0-9_.]+@\w+\.\w+$/i.test(r)&&n.length>5)){e.next=8;break}return u=document.querySelector("#reg"),e.next=4,S(t,r,n);case 4:e.sent?u.submit():o.classList.add("opacity-1"),e.next=9;break;case 8:o.classList.add("opacity-1");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return E.apply(this,arguments)}function E(){return(E=c()(a().mark((function e(t){var r,n,o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=document.querySelector("#name-reg").value.trim(),n=document.querySelector("#email-reg").value.trim(),o=document.querySelector("#pass-reg").value.trim(),u=document.querySelector("#error-reg"),w("name-reg","email-reg","pass-reg"),k(r,n,o,u);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T,C;document.querySelector("#get-reg-form").addEventListener("click",(function(){document.querySelector("#btn-reg").addEventListener("click",L)})),document.querySelector(".form-switch_color").addEventListener("click",(function(){document.body.classList.toggle("dark"),document.body.classList.contains("dark")?localStorage.setItem("colorTheme","dark"):localStorage.setItem("colorTheme","light")})),T=localStorage.getItem("colorTheme"),C=document.querySelector(".form-switch_color input"),"dark"===T&&(document.body.classList.add("dark"),C.setAttribute("checked",""));var j=document.querySelector("#btn-log"),O=document.querySelector("#log");function P(e,t){e?(localStorage.setItem("".concat(g,"token"),t),O.submit()):document.querySelector(".message-error").classList.add("opacity-1")}function _(){return(_=c()(a().mark((function e(t){var r,n,o,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=document.querySelector("#email-log").value.trim(),n=document.querySelector("#password-log").value.trim(),o=y(),e.next=6,h("/api/log","POST",{email:r,password:n,token:o});case 6:u=e.sent,w("email-log","password-log"),P(u,o);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j.addEventListener("click",(function(e){return _.apply(this,arguments)}))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={962:0},t=[[5366,641,248]],n=e=>{},o=(o,a)=>{for(var u,c,[s,i,l,p]=a,d=0,f=[];d<s.length;d++)c=s[d],r.o(e,c)&&e[c]&&f.push(e[c][0]),e[c]=0;for(u in i)r.o(i,u)&&(r.m[u]=i[u]);for(l&&l(r),o&&o(a);f.length;)f.shift()();return p&&t.push.apply(t,p),n()},a=self.webpackChunk=self.webpackChunk||[];function u(){for(var n,o=0;o<t.length;o++){for(var a=t[o],u=!0,c=1;c<a.length;c++){var s=a[c];0!==e[s]&&(u=!1)}u&&(t.splice(o--,1),n=r(r.s=a[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var c=r.x;r.x=()=>(r.x=c||(e=>{}),(n=u)())})(),r.x()})();