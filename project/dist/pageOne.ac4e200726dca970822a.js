(()=>{var e={1504:e=>{function t(e,t,r,n,o,a,c){try{var u=e[a](c),s=u.value}catch(e){return void r(e)}u.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var c=e.apply(r,n);function u(e){t(c,o,a,u,s,"next",e)}function s(e){t(c,o,a,u,s,"throw",e)}u(void 0)}))}}},5526:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},7135:(e,t,r)=>{e.exports=r(6248)},2324:(e,t,r)=>{"use strict";r(9641);var n=r(7135),o=r.n(n),a=r(5526),c=r.n(a),u=r(1504),s=r.n(u),i="qwertyujn";const l="http://localhost:3000";function p(e){return f.apply(this,arguments)}function f(){return(f=s()(o().mark((function e(t){var r,n,a,c,u,s,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,a={},n&&(a["Content-Type"]="application/json",c=JSON.stringify(n)),e.next=6,fetch("".concat(l).concat(t),{method:r,headers:a,body:c});case 6:if((u=e.sent).ok){e.next=10;break}return console.warn("Error",u.statusText),e.abrupt("return",null);case 10:return e.next=12,u.json();case 12:return s=e.sent,e.abrupt("return",s);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d,m=new Uint8Array(16);function y(){if(!d&&!(d="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(m)}const g=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const v=function(e){return"string"==typeof e&&g.test(e)};for(var h=[],b=0;b<256;++b)h.push((b+256).toString(16).substr(1));const w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(h[e[t+0]]+h[e[t+1]]+h[e[t+2]]+h[e[t+3]]+"-"+h[e[t+4]]+h[e[t+5]]+"-"+h[e[t+6]]+h[e[t+7]]+"-"+h[e[t+8]]+h[e[t+9]]+"-"+h[e[t+10]]+h[e[t+11]]+h[e[t+12]]+h[e[t+13]]+h[e[t+14]]+h[e[t+15]]).toLowerCase();if(!v(r))throw TypeError("Stringified UUID is invalid");return r};const x=function(e,t,r){var n=(e=e||{}).random||(e.rng||y)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return w(n)};function S(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];t.forEach((function(e){var t=document.querySelector("#".concat(e));t.value.trim()||(t.style.borderColor="rgba(225, 0, 0, 0.6)",t.addEventListener("focus",(function(e){e.target.style.borderColor=""})))}))}function k(e,t,r){return O.apply(this,arguments)}function O(){return(O=s()(o().mark((function e(t,r,n){var a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=x(),e.next=3,p("/api/registration","POST",{name:t,email:r,password:n,progress:[],token:a});case 3:return c=e.sent,localStorage.setItem("".concat(i,"token"),a),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,r,n){return P.apply(this,arguments)}function P(){return(P=s()(o().mark((function e(t,r,n,a){var c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&/^[a-z0-9_.]+@\w+\.\w+$/i.test(r)&&n.length>5)){e.next=8;break}return c=document.querySelector("#reg"),e.next=4,k(t,r,n);case 4:e.sent?c.submit():a.classList.add("opacity-1"),e.next=9;break;case 8:a.classList.add("opacity-1");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return E.apply(this,arguments)}function E(){return(E=s()(o().mark((function e(t){var r,n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r=document.querySelector("#name-reg").value.trim(),n=document.querySelector("#email-reg").value.trim(),a=document.querySelector("#pass-reg").value.trim(),c=document.querySelector("#error-reg"),S("name-reg","email-reg","pass-reg"),j(r,n,a,c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C,D,_=document.querySelector("#get-reg-form"),I=[{id:2,name:"ssfdf",value:"fffffAf",marked:!1}];function R(){return(R=s()(o().mark((function e(){var t,r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/api/contacts");case 2:return t=e.sent,e.next=5,p("/api/contacts","POST",I);case 5:return r=e.sent,e.next=8,p("/api/contacts/".concat(2),"DELETE");case 8:return n=e.sent,e.next=11,p("/api/contacts/".concat(2),"PUT",L(L({},I),{},{marked:!0}));case 11:a=e.sent,I.marked=a.marked,console.log(t),console.log(r),console.log(n);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}_.addEventListener("click",(function(){document.querySelector("#btn-reg").addEventListener("click",q)})),function(){R.apply(this,arguments)}(),document.querySelector(".form-switch_color").addEventListener("click",(function(){document.body.classList.toggle("dark"),document.body.classList.contains("dark")?localStorage.setItem("colorTheme","dark"):localStorage.setItem("colorTheme","light")})),C=localStorage.getItem("colorTheme"),D=document.querySelector(".form-switch_color input"),"dark"===C&&(document.body.classList.add("dark"),D.setAttribute("checked",""));var V=document.querySelector("#btn-log"),A=document.querySelector("#log");function U(e,t){e?(localStorage.setItem("".concat(i,"token"),t),A.submit()):document.querySelector(".message-error").classList.add("opacity-1")}function M(){return(M=s()(o().mark((function e(t){var r,n,a,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=document.querySelector("#email-log").value.trim(),n=document.querySelector("#password-log").value.trim(),a=x(),e.next=6,p("/api/log","POST",{email:r,password:n,token:a});case 6:c=e.sent,S("email-log","password-log"),U(c,a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}V.addEventListener("click",(function(e){return M.apply(this,arguments)}))}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={962:0},t=[[2324,641,248]],n=e=>{},o=(o,a)=>{for(var c,u,[s,i,l,p]=a,f=0,d=[];f<s.length;f++)u=s[f],r.o(e,u)&&e[u]&&d.push(e[u][0]),e[u]=0;for(c in i)r.o(i,c)&&(r.m[c]=i[c]);for(l&&l(r),o&&o(a);d.length;)d.shift()();return p&&t.push.apply(t,p),n()},a=self.webpackChunk=self.webpackChunk||[];function c(){for(var n,o=0;o<t.length;o++){for(var a=t[o],c=!0,u=1;u<a.length;u++){var s=a[u];0!==e[s]&&(c=!1)}c&&(t.splice(o--,1),n=r(r.s=a[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var u=r.x;r.x=()=>(r.x=u||(e=>{}),(n=c)())})(),r.x()})();