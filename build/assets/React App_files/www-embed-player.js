(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.S=b.prototype}
function oa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.u=this.m=0;this.F=this.j=null}
function pa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
oa.prototype.B=function(a){this.i=a};
function qa(a,b){a.j={gb:b,ib:!0};a.h=a.m||a.u}
oa.prototype.return=function(a){this.j={return:a};this.h=this.u};
function w(a,b,c){a.h=c;return{value:b}}
oa.prototype.A=function(a){this.h=a};
function ra(a,b,c){a.m=b;void 0!=c&&(a.u=c)}
function sa(a){a.m=0;var b=a.j.gb;a.j=null;return b}
function ta(a){a.F=[a.j];a.m=0;a.u=0}
function ua(a){var b=a.F.splice(0)[0];(b=a.j=a.j||b)?b.ib?a.h=a.m||a.u:void 0!=b.A&&a.u<b.A?(a.h=b.A,a.j=null):a.h=a.u:a.h=0}
function va(a){this.h=new oa;this.i=a}
function wa(a,b){pa(a.h);var c=a.h.l;if(c)return xa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return ya(a)}
function xa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,qa(a.h,g),ya(a)}a.h.l=null;d.call(a.h,f);return ya(a)}
function ya(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,qa(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ib)throw b.gb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l.next,b,a.h.B):(a.h.B(b),b=ya(a));return b};
this.throw=function(b){pa(a.h);a.h.l?b=xa(a,a.h.l["throw"],b,a.h.B):(qa(a.h,b),b=ya(a));return b};
this.return=function(b){return wa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ca(new Aa(new va(a)))}
function Da(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ia});
r("Reflect.setPrototypeOf",function(a){return a?a:na?function(b,c){try{return na(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.R),reject:g(this.u)}};
b.prototype.R=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ka(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.m(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}"function"==typeof h?this.la(h,g):this.m(g)};
b.prototype.u=function(g){this.B(2,g)};
b.prototype.m=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Y();this.F()};
b.prototype.Y=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.F=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ka=function(g){var h=this.l();g.ya(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(z){try{l(t(z))}catch(A){n(A)}}:q}
var l,n,p=new b(function(t,q){l=t;n=q});
this.ya(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ya=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ya(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(z){return function(A){t[z]=A;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).ya(p(t.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Ea(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Ea(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Ea(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Ea(k,g)&&Ea(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Ea(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Fa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Fa(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Object.setPrototypeOf",function(a){return a||na});
var Ga="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Ea(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ga});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Fa(this,b,"includes").indexOf(b,c||0)}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Ea(b,d)&&c.push(b[d]);return c}});
var y=this||self;function B(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ia(){}
function Ja(a){a.Qa=void 0;a.getInstance=function(){return a.Qa?a.Qa:a.Qa=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta=Ra:Ta=Sa;return Ta.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Va(a,b){B(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.S=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pm=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.vb=b)}
D(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Za(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var $a=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ab=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},bb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function db(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function eb(a,b){b=$a(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function gb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ib(a){var b=jb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function kb(a){for(var b in a)return!1;return!0}
function lb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function mb(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ob(a){var b={},c;for(c in a)b[c]=a[c];return b}
function pb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=pb(a[c]);return b}
var qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qb.length;f++)c=qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var sb;function tb(){if(void 0===sb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(c){y.console&&y.console.error(c.message)}sb=a}else sb=a}return sb}
;function ub(a,b){this.h=a===vb&&b||""}
ub.prototype.ca=!0;ub.prototype.ba=function(){return this.h};
function wb(a){return new ub(vb,a)}
var vb={};wb("");var xb={};function yb(a){this.h=xb===xb?a:"";this.ca=!0}
yb.prototype.ba=function(){return this.h.toString()};
yb.prototype.toString=function(){return this.h.toString()};function zb(a,b){this.h=b===Ab?a:""}
m=zb.prototype;m.ca=!0;m.ba=function(){return this.h.toString()};
m.Pa=!0;m.La=function(){return 1};
m.toString=function(){return this.h+""};
function Bb(a){if(a instanceof zb&&a.constructor===zb)return a.h;Ka(a);return"type_error:TrustedResourceUrl"}
var Ab={};function Cb(a){var b=tb();a=b?b.createScriptURL(a):a;return new zb(a,Ab)}
;var Db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Eb=/&/g,Fb=/</g,Gb=/>/g,Hb=/"/g,Ib=/'/g,Kb=/\x00/g,Lb=/[\x00&<>"']/;function Mb(a,b){this.h=b===Nb?a:""}
m=Mb.prototype;m.ca=!0;m.ba=function(){return this.h.toString()};
m.Pa=!0;m.La=function(){return 1};
m.toString=function(){return this.h.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.h;Ka(a);return"type_error:SafeUrl"}
var Pb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Qb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={},Sb=new Mb("about:invalid#zClosurez",Nb);var Tb;a:{var Ub=y.navigator;if(Ub){var Vb=Ub.userAgent;if(Vb){Tb=Vb;break a}}Tb=""}function G(a){return-1!=Tb.indexOf(a)}
;function Wb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")}
;var Xb={};function Yb(a,b,c){this.h=c===Xb?a:"";this.i=b;this.ca=this.Pa=!0}
Yb.prototype.La=function(){return this.i};
Yb.prototype.ba=function(){return this.h.toString()};
Yb.prototype.toString=function(){return this.h.toString()};
function Zb(a,b){var c=tb();a=c?c.createHTML(a):a;return new Yb(a,b,Xb)}
;function $b(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.ca?b.ba():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function ac(a,b){a.rel="stylesheet";a.href=Bb(b).toString();(b=bc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function cc(){return bc("script[nonce]",void 0)}
var dc=/^[\w+/_-]+[=]{0,2}$/;function bc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&dc.test(a)?a:"":""}
;function ec(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var fc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gc(a){return a?decodeURI(a):a}
function hc(a){return gc(a.match(fc)[3]||null)}
function ic(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ic(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function jc(a){var b=[],c;for(c in a)ic(c,a[c],b);return b.join("&")}
function kc(a,b){b=jc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var lc=/#|$/;function mc(a){y.setTimeout(function(){throw a;},0)}
;function nc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function oc(a){oc[" "](a);return a}
oc[" "]=Ia;var pc=G("Opera"),qc=G("Trident")||G("MSIE"),rc=G("Edge"),sc=G("Gecko")&&!(-1!=Tb.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),tc=-1!=Tb.toLowerCase().indexOf("webkit")&&!G("Edge"),uc=G("Android");function vc(){var a=y.document;return a?a.documentMode:void 0}
var wc;a:{var xc="",yc=function(){var a=Tb;if(sc)return/rv:([^\);]+)(\)|;)/.exec(a);if(rc)return/Edge\/([\d\.]+)/.exec(a);if(qc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(tc)return/WebKit\/(\S+)/.exec(a);if(pc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
yc&&(xc=yc?yc[1]:"");if(qc){var zc=vc();if(null!=zc&&zc>parseFloat(xc)){wc=String(zc);break a}}wc=xc}var Ac=wc,Bc;if(y.document&&qc){var Cc=vc();Bc=Cc?Cc:parseInt(Ac,10)||void 0}else Bc=void 0;var Dc=Bc;var Fc=nc()||G("iPod"),Gc=G("iPad");!G("Android")||Wb();Wb();var Hc=G("Safari")&&!(Wb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(nc()||G("iPad")||G("iPod"));var Ic={},Jc=null;
function Kc(a,b){La(a);void 0===b&&(b=0);if(!Jc){Jc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ic[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Jc[h]&&(Jc[h]=g)}}}b=Ic[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Lc="function"===typeof Uint8Array;var Mc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Nc(a){if(!Array.isArray(a))return a;Object.isFrozen(a)||(Mc?a[Mc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Oc(a){return null!==a&&"object"===typeof a&&a.constructor===Object}
function Pc(a,b){if(null!=a)return Array.isArray(a)||Oc(a)?Qc(a,b):b(a)}
function Qc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Pc(a[d],b);if(a){var e;Mc?e=a[Mc]:e=a.h;a=null==e?0:e}else a=0;a&1&&Nc(c);return c}e={};for(c in a)e[c]=Pc(a[c],b);return e}
function Rc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":return Lc&&null!=a&&a instanceof Uint8Array?Kc(a):a;default:return a}}
function Sc(a){return Lc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function Tc(a,b){this.h=a;this.i=b;this.map={};this.j=!0;if(0<this.h.length){for(a=0;a<this.h.length;a++){b=this.h[a];var c=b[0];this.map[c.toString()]=new Uc(c,b[1])}this.j=!0}}
m=Tc.prototype;m.isFrozen=function(){return!1};
m.toJSON=function(){var a=this.T();return Qc(a,Rc)};
m.T=function(){if(this.j){if(this.i){var a=this.map,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].h;c&&c.T()}}}else{this.h.length=0;a=Vc(this);a.sort();for(b=0;b<a.length;b++){c=this.map[a[b]];var d=c.h;d&&d.T();this.h.push([c.key,c.value])}this.j=!0}return this.h};
m.clear=function(){this.map={};this.j=!1};
m.entries=function(){var a=[],b=Vc(this);b.sort();for(var c=0;c<b.length;c++){var d=this.map[b[c]];a.push([d.key,Wc(this,d)])}return new Xc(a)};
m.keys=function(){var a=[],b=Vc(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.map[b[c]].key);return new Xc(a)};
m.values=function(){var a=[],b=Vc(this);b.sort();for(var c=0;c<b.length;c++)a.push(Wc(this,this.map[b[c]]));return new Xc(a)};
m.forEach=function(a,b){var c=Vc(this);c.sort();for(var d=0;d<c.length;d++){var e=this.map[c[d]];a.call(b,Wc(this,e),e.key,this)}};
m.set=function(a,b){var c=new Uc(a);this.i?(c.h=b,c.value=b.T()):c.value=b;this.map[a.toString()]=c;this.j=!1;return this};
function Wc(a,b){return a.i?(b.h||(b.h=new a.i(b.value),a.isFrozen()&&null(b.h)),b.h):b.value}
m.get=function(a){if(a=this.map[a.toString()])return Wc(this,a)};
m.has=function(a){return a.toString()in this.map};
function Vc(a){a=a.map;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}
Tc.prototype[Symbol.iterator]=function(){return this.entries()};
function Uc(a,b){this.key=a;this.value=b;this.h=void 0}
function Xc(a){this.i=0;this.h=a}
Xc.prototype.next=function(){return this.i<this.h.length?{done:!1,value:this.h[this.i++]}:{done:!0,value:void 0}};
Xc.prototype[Symbol.iterator]=function(){return this};var Yc;function Zc(a,b,c){var d=Yc;Yc=null;a||(a=d);d=this.constructor.Um;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.Tm||0);this.h=null;this.i=a;a:{d=this.i.length;a=d-1;if(d&&(d=this.i[a],Oc(d))){this.u=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.u=Math.max(b,a+1-this.l),this.j=null):this.u=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.u?(a+=this.l,(d=this.i[a])?Nc(d):this.i[a]=$c):(ad(this),(d=this.j[a])?Nc(d):this.j[a]=$c)}
var $c=Object.freeze(Nc([]));function ad(a){var b=a.u+a.l;a.i[b]||(a.j=a.i[b]={})}
function bd(a,b,c){return-1===b?null:(void 0===c?0:c)||b>=a.u?a.j?a.j[b]:void 0:a.i[b+a.l]}
function cd(a,b,c){a.h||(a.h={});if(b in a.h)return a.h[b];var d=bd(a,b);d||(d=Nc([]),dd(a,b,d));c=new Tc(d,c);return a.h[b]=c}
function dd(a,b,c,d){(void 0===d?0:d)||b>=a.u?(ad(a),a.j[b]=c):a.i[b+a.l]=c}
function ed(a,b,c,d){if(-1===c)return null;a.h||(a.h={});a.h[c]||(d=bd(a,c,void 0===d?!1:d))&&(a.h[c]=new b(d));return a.h[c]}
function fd(a,b,c){a.h||(a.h={});var d=a.h[c];if(!d){var e=void 0===e?!1:e;d=bd(a,c,e);null==d&&(d=$c);d===$c&&(d=Nc([]),dd(a,c,d,e));e=d;d=[];for(var f=0;f<e.length;f++)d[f]=new b(e[f]);a.h[c]=d}return d}
Zc.prototype.toJSON=function(){var a=this.T();return Qc(a,Rc)};
Zc.prototype.T=function(){if(this.h)for(var a in this.h){var b=this.h[a];if(Array.isArray(b))for(var c=0;c<b.length;c++)b[c]&&b[c].T();else b&&b.T()}return this.i};
Zc.prototype.toString=function(){return this.T().toString()};
Zc.prototype.clone=function(){var a=this.constructor,b=Qc(this.T(),Sc);Yc=b;a=new a(b);Yc=null;gd(a,this);return a};
function gd(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.j;var d={},e;for(e in c){var f=c[e];if(f){var g=!(!b||!b[e]),h=+e;if(Array.isArray(f)){if(f.length)for(g=fd(a,f[0].constructor,h),h=0;h<Math.min(g.length,f.length);h++)gd(g[h],f[h])}else f instanceof Tc?f.i&&(d.Ha=cd(a,h,f.i),f.forEach(function(k){return function(l,n){return gd(k.Ha.get(n),l)}}(d))):(g=ed(a,f.constructor,h,g))&&gd(g,f)}d={Ha:d.Ha}}}}
;var hd=window;wb("csi.gstatic.com");wb("googleads.g.doubleclick.net");wb("pagead2.googlesyndication.com");wb("partner.googleadservices.com");wb("pubads.g.doubleclick.net");wb("securepubads.g.doubleclick.net");wb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var id={};function jd(){}
function kd(a){this.h=a}
v(kd,jd);kd.prototype.toString=function(){return this.h};
var ld=new kd("about:invalid#zTSz",id);function md(a){this.isValid=a}
function nd(a){return new md(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var od=[nd("data"),nd("http"),nd("https"),nd("mailto"),nd("ftp"),new md(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function pd(a){if(a instanceof jd)if(a instanceof kd)a=a.h;else throw Error("");else a=Ob(a);return a}
;function qd(a,b){a.src=Bb(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function rd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=rd.prototype;m.clone=function(){return new rd(this.x,this.y)};
m.equals=function(a){return a instanceof rd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function sd(a,b){this.width=a;this.height=b}
m=sd.prototype;m.clone=function(){return new sd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function td(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function ud(a,b){hb(b,function(c,d){c&&"object"==typeof c&&c.ca&&(c=c.ba());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:vd.hasOwnProperty(d)?a.setAttribute(vd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var vd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function wd(a,b,c){var d=arguments,e=document,f=d[1],g=xd(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):ud(g,f));2<d.length&&yd(e,g,d);return g}
function yd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||Na(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Na(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?fb(f):f,d)}}}
function xd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function zd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ad(a){var b=Bd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Cd(){var a=[];Ad(function(b){a.push(b)});
return a}
var Bd={nc:"allow-forms",oc:"allow-modals",pc:"allow-orientation-lock",qc:"allow-pointer-lock",sc:"allow-popups",tc:"allow-popups-to-escape-sandbox",uc:"allow-presentation",wc:"allow-same-origin",xc:"allow-scripts",yc:"allow-top-navigation",zc:"allow-top-navigation-by-user-activation"},Dd=Za(function(){return Cd()});
function Ed(){var a=Fd(),b={};E(Dd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fd(){var a=void 0===a?document:a;var b="IFRAME";"application/xhtml+xml"===(null==a?void 0:a.contentType)&&(b=b.toLowerCase());return a.createElement(b)}
;function Gd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hd=(new Date).getTime();function Id(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==
c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Jd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],H=e[3],P=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Q=H^z&(A^H);var S=1518500249}else Q=z^A^H,S=1859775393;else 60>q?(Q=z&A|H&(z|A),S=2400959708):(Q=z^A^H,S=3395469782);Q=((p<<5|p>>>27)&4294967295)+Q+P+S+t[q]&4294967295;P=H;H=A;A=(z<<30|z>>>2)&4294967295;z=p;p=Q}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+P&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,A=p.length;z<A;++z)q.push(p.charCodeAt(z));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<t;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],t=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var z=24;0<=z;z-=8)p[t++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,xb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Kd(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Ld(Id(d),a,c||null)].join(" "):null}
function Ld(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Md(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Md(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Md(a){var b=Jd();b.update(a);return b.xb().toLowerCase()}
;var Nd={};function Od(a){this.h=a||{cookie:""}}
m=Od.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ra:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Zm;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ra}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Db(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ra:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Db(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Pd=new Od("undefined"==typeof document?null:document);function Qd(a){return!!Nd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Rd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Qd(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Od(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Qd(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Sd(a,b,c,d){(a=y[a])||(a=(new Od(document)).get(b));return a?Kd(a,c,d):null}
function Td(a){var b=void 0===b?!1:b;var c=Id(String(y.location.href)),d=[];if(Rd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Od(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Kd(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Qd(b)&&((b=Sd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Sd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Ud(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Vd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];La(d)?Vd.apply(null,d):Ud(d)}}
;function I(){this.h=this.h;this.u=this.u}
I.prototype.h=!1;I.prototype.dispose=function(){this.h||(this.h=!0,this.G())};
function Wd(a,b){a.h?b():(a.u||(a.u=[]),a.u.push(b))}
I.prototype.G=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function Xd(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Xd.prototype.stopPropagation=function(){this.j=!0};
Xd.prototype.preventDefault=function(){this.defaultPrevented=!0};function Yd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Zd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,$d[c])c=$d[c];else{c=String(c);if(!$d[c]){var f=/function\s+([^\(]+)/m.exec(c);$d[c]=f?f[1]:"[Anonymous]"}c=$d[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Zd(a,b){b||(b={});b[ae(a)]=!0;var c=a.stack||"";(a=a.vb)&&!b[ae(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Zd(a,b));return c}
function ae(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var $d={};var be=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ia,b),y.removeEventListener("test",Ia,b)}catch(c){}return a}();function ce(a,b){Xd.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(ce,Xd);var de={2:"touch",3:"pen",4:"mouse"};
ce.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(sc){a:{try{oc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:de[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ce.S.preventDefault.call(this)};
ce.prototype.stopPropagation=function(){ce.S.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ce.prototype.preventDefault=function(){ce.S.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ee="closure_listenable_"+(1E6*Math.random()|0);var fe=0;function ge(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ca=e;this.key=++fe;this.sa=this.xa=!1}
function he(a){a.sa=!0;a.listener=null;a.proxy=null;a.src=null;a.Ca=null}
;function ie(a){this.src=a;this.listeners={};this.h=0}
ie.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=je(a,b,d,e);-1<g?(b=a[g],c||(b.xa=!1)):(b=new ge(b,this.src,f,!!d,e),b.xa=c,a.push(b));return b};
ie.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=je(e,b,c,d);return-1<b?(he(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ke(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(he(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function je(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.sa&&f.listener==b&&f.capture==!!c&&f.Ca==d)return e}return-1}
;var le="closure_lm_"+(1E6*Math.random()|0),me={},ne=0;function oe(a,b,c,d,e){if(d&&d.once)pe(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)oe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.U(b,c,Na(d)?!!d.capture:!!d,e):re(a,b,c,!1,d,e)}
function re(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=se(a);h||(a[le]=h=new ie(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=te();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)be||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ue(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ne++}}
function te(){function a(c){return b.call(a.src,a.listener,c)}
var b=ve;return a}
function pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pe(a,b[f],c,d,e);else c=qe(c),a&&a[ee]?a.i.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):re(a,b,c,!0,d,e)}
function we(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)we(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=qe(c),a&&a[ee])?a.i.remove(String(b),c,d,e):a&&(a=se(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=je(b,c,d,e)),(c=-1<a?b[a]:null)&&xe(c))}
function xe(a){if("number"!==typeof a&&a&&!a.sa){var b=a.src;if(b&&b[ee])ke(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ue(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ne--;(c=se(b))?(ke(c,a),0==c.h&&(c.src=null,b[le]=null)):he(a)}}}
function ue(a){return a in me?me[a]:me[a]="on"+a}
function ve(a,b){if(a.sa)a=!0;else{b=new ce(b,this);var c=a.listener,d=a.Ca||a.src;a.xa&&xe(a);a=c.call(d,b)}return a}
function se(a){a=a[le];return a instanceof ie?a:null}
var ye="__closure_events_fn_"+(1E9*Math.random()>>>0);function qe(a){if("function"===typeof a)return a;a[ye]||(a[ye]=function(b){return a.handleEvent(b)});
return a[ye]}
;function J(){I.call(this);this.i=new ie(this);this.R=this;this.F=null}
D(J,I);J.prototype[ee]=!0;J.prototype.addEventListener=function(a,b,c,d){oe(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){we(this,a,b,c,d)};
function ze(a,b){var c=a.F;if(c){var d=[];for(var e=1;c;c=c.F)d.push(c),++e}a=a.R;c=b.type||b;"string"===typeof b?b=new Xd(b,a):b instanceof Xd?b.target=b.target||a:(e=b,b=new Xd(c,a),rb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ae(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ae(g,c,!0,b)&&e,b.j||(e=Ae(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ae(g,c,!1,b)&&e}
J.prototype.G=function(){J.S.G.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,he(d[e]);delete a.listeners[c];a.h--}}this.F=null};
J.prototype.U=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Ae(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.sa&&g.capture==c){var h=g.listener,k=g.Ca||g.src;g.xa&&ke(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Be(a){var b,c;J.call(this);var d=this;this.B=this.l=0;this.P=null!==a&&void 0!==a?a:{L:function(e,f){return setTimeout(e,f)},
aa:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return x(function(e){return w(e,Ce(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||De(this)}
v(Be,J);Be.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.P.aa(this.B);delete Be.h};
Be.prototype.I=function(){return this.j};
function De(a){a.B=a.P.L(function(){var b;return x(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.A(3):w(c,Ce(a),3):w(c,Ce(a),3);De(a);c.h=0})},3E4)}
function Ce(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(a.l=a.P.L(function(){d.abort()},b||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ta(g);a.o=void 0;a.l&&(a.P.aa(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?ze(a,"networkstatus-online"):ze(a,"networkstatus-offline"));c(f);ua(g);break;case 2:sa(g),f=!1,g.A(3)}})})}
;function Ee(){this.data_=[];this.h=-1}
Ee.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ee.prototype.get=function(a){return!!this.data_[a]};
function Fe(a){-1==a.h&&(a.h=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ge(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ge.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function He(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Ie;
function Je(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=xd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.bb;c.bb=null;e()}};
return function(e){d.next={bb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Ke(){this.i=this.h=null}
Ke.prototype.add=function(a,b){var c=Le.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ke.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Le=new Ge(function(){return new Me},function(a){return a.reset()});
function Me(){this.next=this.scope=this.h=null}
Me.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Me.prototype.reset=function(){this.next=this.scope=this.h=null};function Ne(a,b){Oe||Pe();Qe||(Oe(),Qe=!0);Re.add(a,b)}
var Oe;function Pe(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Oe=function(){a.then(Se)}}else Oe=function(){var b=Se;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Ie||(Ie=Je()),Ie(b)):y.setImmediate(b)}}
var Qe=!1,Re=new Ke;function Se(){for(var a;a=Re.remove();){try{a.h.call(a.scope)}catch(b){mc(b)}He(Le,a)}Qe=!1}
;function Te(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
Te.prototype[Symbol.iterator]=function(){return this};
Te.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function Ue(a,b){return new Te(a,b)}
;function Ve(){this.blockSize=-1}
;function We(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(We,Ve);We.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Xe(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
We.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(0==f)for(;d<=c;)Xe(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Xe(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Xe(this,e);f=0;break}}this.i=f;this.l+=b}};
We.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.u[c]=b&255,b/=256;Xe(this,this.u);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ye(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ze(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $e(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ye(a).match(/\S+/g)||[],b=0<=$a(a,b));return b}
function af(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):$e(a,"inverted-hdpi")&&Ze(a,Array.prototype.filter.call(a.classList?a.classList:Ye(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var bf="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function cf(){}
cf.prototype.V=function(){throw bf;};
cf.prototype.next=function(){return df};
var df={done:!0,value:void 0};function ef(a){return{value:a,done:!1}}
function ff(a){if(a.done)throw bf;return a.value}
cf.prototype.O=function(){return this};function gf(a){if(a instanceof hf||a instanceof jf||a instanceof kf)return a;if("function"==typeof a.V)return new hf(function(){return lf(a)});
if("function"==typeof a[Symbol.iterator])return new hf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.O)return new hf(function(){return lf(a.O())});
throw Error("Not an iterator or iterable.");}
function lf(a){if(!(a instanceof cf))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.V();break}catch(d){if(d!==bf)throw d;b=!0}return{value:c,done:b}}}}
function hf(a){this.h=a}
hf.prototype.O=function(){return new jf(this.h())};
hf.prototype[Symbol.iterator]=function(){return new kf(this.h())};
hf.prototype.i=function(){return new kf(this.h())};
function jf(a){this.h=a}
v(jf,cf);jf.prototype.V=function(){var a=this.h.next();if(a.done)throw bf;return a.value};
jf.prototype.next=function(){return this.h.next()};
jf.prototype[Symbol.iterator]=function(){return new kf(this.h)};
jf.prototype.i=function(){return new kf(this.h)};
function kf(a){hf.call(this,function(){return a});
this.j=a}
v(kf,hf);kf.prototype.next=function(){return this.j.next()};function mf(a,b){this.i={};this.h=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof mf)for(c=nf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function nf(a){of(a);return a.h.concat()}
m=mf.prototype;m.has=function(a){return pf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||qf;of(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function qf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ga=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return pf(this.i,a)?(delete this.i[a],--this.size,this.ga++,this.h.length>2*this.size&&of(this),!0):!1};
function of(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];pf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],pf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return pf(this.i,a)?this.i[a]:b};
m.set=function(a,b){pf(this.i,a)||(this.size+=1,this.h.push(a),this.ga++);this.i[a]=b};
m.forEach=function(a,b){for(var c=nf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new mf(this)};
m.keys=function(){return gf(this.O(!0)).i()};
m.values=function(){return gf(this.O(!1)).i()};
m.entries=function(){var a=this;return Ue(this.keys(),function(b){return[b,a.get(b)]})};
m.O=function(a){of(this);var b=0,c=this.ga,d=this,e=new cf;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return df;var g=d.h[b++];return ef(a?g:d.i[g])};
var f=e.next;e.V=function(){return ff(f.call(e))};
return e};
function pf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function rf(a){sf();return Cb(a)}
var sf=Ia;function tf(a){var b=[];uf(new vf,a,b);return b.join("")}
function vf(){}
function uf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),uf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),wf(d,c),c.push(":"),uf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":wf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var xf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},yf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function wf(a,b){b.push('"',a.replace(yf,function(c){var d=xf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),xf[c]=d);return d}),'"')}
;function zf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Af(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.u=this.m=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){Bf(b,2,c)},function(c){Bf(b,3,c)})}catch(c){Bf(this,3,c)}}
function Cf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Cf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Df=new Ge(function(){return new Cf},function(a){a.reset()});
function Ef(a,b,c){var d=Df.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Gf(a){return new Af(function(b,c){c(a)})}
Af.prototype.then=function(a,b,c){return Hf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Af.prototype.$goog_Thenable=!0;function If(a,b){return Hf(a,null,b,void 0)}
Af.prototype.cancel=function(a){if(0==this.h){var b=new Jf(a);Ne(function(){Kf(this,b)},this)}};
function Kf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Kf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Lf(c),Mf(c,e,3,b)))}a.j=null}else Bf(a,3,b)}
function Nf(a,b){a.i||2!=a.h&&3!=a.h||Of(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Hf(a,b,c,d){var e=Ef(null,null,null);e.h=new Af(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Jf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Nf(a,e);return e.h}
Af.prototype.F=function(a){this.h=0;Bf(this,2,a)};
Af.prototype.H=function(a){this.h=0;Bf(this,3,a)};
function Bf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.F,f=a.H;if(d instanceof Af){Nf(d,Ef(e||Ia,f||null,a));var g=!0}else if(zf(d))d.then(e,f,a),g=!0;else{if(Na(d))try{var h=d.then;if("function"===typeof h){Pf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.o=c,a.h=b,a.j=null,Of(a),3!=b||c instanceof Jf||Qf(a,c))}}
function Pf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Of(a){a.m||(a.m=!0,Ne(a.B,a))}
function Lf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Af.prototype.B=function(){for(var a;a=Lf(this);)Mf(this,a,this.h,this.o);this.m=!1};
function Mf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.h)b.h.j=null,Rf(b,c,d);else try{b.j?b.i.call(b.context):Rf(b,c,d)}catch(e){Sf.call(null,e)}He(Df,b)}
function Rf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Qf(a,b){a.u=!0;Ne(function(){a.u&&Sf.call(null,b)})}
var Sf=mc;function Jf(a){Xa.call(this,a)}
D(Jf,Xa);Jf.prototype.name="cancel";function K(a){I.call(this);this.o=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
D(K,I);m=K.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.o;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.o=e+3;d.push(e);return e};
function Tf(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.oa(b)}}
m.oa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ia):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Uf(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.oa(c)}}return 0!=e}return!1};
function Uf(a,b,c){Ne(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.oa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.G=function(){K.S.G.call(this);this.clear();this.l.length=0};function Vf(a){this.h=a}
Vf.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,tf(b))};
Vf.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Vf.prototype.remove=function(a){this.h.remove(a)};function Wf(a){this.h=a}
D(Wf,Vf);function Xf(a){this.data=a}
function Yf(a){return void 0===a||a instanceof Xf?a:new Xf(a)}
Wf.prototype.set=function(a,b){Wf.S.set.call(this,a,Yf(b))};
Wf.prototype.i=function(a){a=Wf.S.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Wf.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Zf(a){this.h=a}
D(Zf,Wf);Zf.prototype.set=function(a,b,c){if(b=Yf(b)){if(c){if(c<Date.now()){Zf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Zf.S.set.call(this,a,b)};
Zf.prototype.i=function(a){var b=Zf.S.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Zf.prototype.remove.call(this,a);else return b}};function $f(){}
;function ag(){}
D(ag,$f);ag.prototype[Symbol.iterator]=function(){return gf(this.O(!0)).i()};
ag.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function bg(a){this.h=a}
D(bg,ag);m=bg.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.O=function(a){var b=0,c=this.h,d=new cf;d.next=function(){if(b>=c.length)return df;var f=c.key(b++);if(a)return ef(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ef(f)};
var e=d.next;d.V=function(){return ff(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function cg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(cg,bg);function dg(a,b){this.i=a;this.h=null;var c;if(c=qc)c=!(9<=Number(Dc));if(c){eg||(eg=new mf);this.h=eg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),eg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(dg,ag);var fg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},eg=null;function gg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fg[b]})}
m=dg.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(gg(a),b);hg(this)};
m.get=function(a){a=this.h.getAttribute(gg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(gg(a));hg(this)};
m.O=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new cf;d.next=function(){if(b>=c.length)return df;var f=c[b++];if(a)return ef(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return ef(f)};
var e=d.next;d.V=function(){return ff(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);hg(this)};
function hg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ig(a,b){this.i=a;this.h=b+"::"}
D(ig,ag);ig.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ig.prototype.get=function(a){return this.i.get(this.h+a)};
ig.prototype.remove=function(a){this.i.remove(this.h+a)};
ig.prototype.O=function(a){var b=this.i.O(!0),c=this,d=new cf;d.next=function(){try{var f=b.V()}catch(g){if(g===bf)return df;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.V()}catch(g){if(g===bf)return df;throw g;}return ef(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.V=function(){return ff(e.call(d))};
return d};function jg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;function kg(a){Zc.call(this,a)}
v(kg,Zc);var lg,mg,ng,og=y.window,pg=(null===(lg=null===og||void 0===og?void 0:og.yt)||void 0===lg?void 0:lg.config_)||(null===(mg=null===og||void 0===og?void 0:og.ytcfg)||void 0===mg?void 0:mg.data_)||{},qg=(null===(ng=null===og||void 0===og?void 0:og.ytcfg)||void 0===ng?void 0:ng.obfuscatedData_)||[];new kg(qg);B("yt.config_",pg,void 0);B("yt.configJspb_",qg,void 0);function L(){jg(pg,arguments)}
function F(a,b){return a in pg?pg[a]:b}
;var rg=[];function sg(a){rg.forEach(function(b){return b(a)})}
function tg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ug(b)}}:a}
function ug(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),L("ERRORS",e));sg(a)}
function vg(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),L("ERRORS",e))}
;var wg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",wg,void 0);function xg(a){jg(wg,arguments)}
;function M(a){a=yg(a);return"string"===typeof a&&"false"===a?!1:!!a}
function zg(a,b){a=yg(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function yg(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
;var Ag={appSettingsCaptured:!0,foregroundHeartbeat:!0,foregroundHeartbeatScreenAssociated:!0,screenCreated:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},Bg={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,
tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,
tvhtml5ApiTest:!0};var Cg=0,Dg=tc?"webkit":sc?"moz":qc?"ms":pc?"o":"";B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Cg},void 0);var Eg={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Fg(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Eg||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Gg(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Fg.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Fg.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Fg.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var jb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",jb,void 0);var Hg=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Hg,void 0);
function Ig(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Jg=Za(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Kg(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ig(a,b,c,d);if(e)return e;e=++Hg.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Fg(h);if(!zd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Fg(h);
h.currentTarget=a;return c.call(a,h)};
g=tg(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Jg()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);jb[e]=[a,b,c,g,d];return e}
function Lg(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in jb){var c=jb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Jg()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete jb[b]}}))}
;var Mg=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Ng(a,b){"function"===typeof a&&(a=tg(a));return window.setTimeout(a,b)}
function Og(a){window.clearTimeout(a)}
;function Pg(a){this.F=a;this.i=null;this.m=0;this.B=null;this.o=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.N=Kg(window,"mousemove",Ta(this.R,this));a=Ta(this.H,this);"function"===typeof a&&(a=tg(a));this.Y=window.setInterval(a,25)}
D(Pg,I);Pg.prototype.R=function(a){void 0===a.h&&Gg(a);var b=a.h;void 0===a.i&&Gg(a);this.i=new rd(b,a.i)};
Pg.prototype.H=function(){if(this.i){var a=Mg();if(0!=this.m){var b=this.B,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.o)/this.o)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.F();this.o=d}this.m=a;this.B=this.i;this.l=(this.l+1)%4}};
Pg.prototype.G=function(){window.clearInterval(this.Y);Lg(this.N)};function Qg(){}
function Rg(a,b){return Sg(a,0,b)}
Qg.prototype.L=function(a,b){return Sg(a,1,b)};function Tg(){Qg.apply(this,arguments)}
v(Tg,Qg);function Ug(){Tg.h||(Tg.h=new Tg);return Tg.h}
function Sg(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ng(a,c||0)}
Tg.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):Og(a)}};
Tg.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Tg.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};var Vg=Ug();var Wg={};
function Xg(a){var b=void 0===a?{}:a;a=void 0===b.Nb?!1:b.Nb;b=void 0===b.zb?!0:b.zb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Yg();Kg(document,"keydown",Yg);Kg(document,"keyup",Yg);Kg(document,"mousedown",Yg);Kg(document,"mouseup",Yg);a?Kg(window,"touchmove",function(){Zg("touchmove",200)},{passive:!0}):(Kg(window,"resize",function(){Zg("resize",200)}),b&&Kg(window,"scroll",function(){Zg("scroll",200)}));
new Pg(function(){Zg("mouse",100)});
Kg(document,"touchstart",Yg,{passive:!0});Kg(document,"touchend",Yg,{passive:!0})}}
function Zg(a,b){Wg[a]||(Wg[a]=!0,Vg.L(function(){Yg();Wg[a]=!1},b))}
function Yg(){null==C("_lact",window)&&Xg();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function $g(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function ah(){var a=bh;C("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function ch(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var dh=/^[\w.]*$/,eh={q:!0,search_query:!0};function fh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=gh(f[0]||""),h=gh(f[1]||"");g in c?Array.isArray(c[g])?gb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(fh);k.args=[{key:l,value:f[1],query:a,method:hh==n?"unchanged":n}];eh.hasOwnProperty(l)||vg(k)}}return c}
var hh=String(fh);function ih(a){var b=[];hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function jh(a){"?"==a.charAt(0)&&(a=a.substr(1));return fh(a,"&")}
function kh(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),jh(1<a.length?a[1]:a[0])):{}}
function lh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return kc(a,e)+d}
function mh(a){if(!b)var b=window.location.href;var c=a.match(fc)[1]||null,d=hc(a);c&&d?(a=a.match(fc),b=b.match(fc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?hc(b)==d&&(Number(b.match(fc)[4]||null)||null)==(Number(a.match(fc)[4]||null)||null):!0;return a}
function gh(a){return a&&a.match(dh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function nh(a){var b=oh;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?hd:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=null==(k=hd.screen)?void 0:k.height;var l;e.u_w=null==(l=hd.screen)?void 0:l.width;var n;e.u_ah=null==(n=hd.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=hd.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=hd.screen)?void 0:t.colorDepth}catch(Ma){}h=b.h;try{var q=h.screenX;var z=h.screenY}catch(Ma){}try{var A=h.outerWidth;var H=h.outerHeight}catch(Ma){}try{var P=h.innerWidth;var Q=h.innerHeight}catch(Ma){}try{var S=h.screenLeft;var Ec=h.screenTop}catch(Ma){}try{P=h.innerWidth,Q=h.innerHeight}catch(Ma){}try{var Ff=h.screen.availWidth;var jn=h.screen.availTop}catch(Ma){}q=[S,Ec,q,z,Ff,jn,A,H,P,Q];z=b.h.top;try{var Jb=(z||window).document,za=
"CSS1Compat"==Jb.compatMode?Jb.documentElement:Jb.body;var Ba=(new sd(za.clientWidth,za.clientHeight)).round()}catch(Ma){Ba=new sd(-12245933,-12245933)}Jb=Ba;Ba={};za=new Ee;y.SVGElement&&y.document.createElementNS&&za.set(0);z=Ed();z["allow-top-navigation-by-user-activation"]&&za.set(1);z["allow-popups-to-escape-sandbox"]&&za.set(2);y.crypto&&y.crypto.subtle&&za.set(3);y.TextDecoder&&y.TextEncoder&&za.set(4);za=Fe(za);Ba.bc=za;Ba.bih=Jb.height;Ba.biw=Jb.width;Ba.brdim=q.join();b=b.i;b=(Ba.vis={visible:1,
hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ba.wgl=!!hd.WebGLRenderingContext,Ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var oh=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return ih(nh(a))},void 0);Date.now();var ph="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function qh(){if(!ph)return null;var a=ph();return"open"in a?a:null}
function rh(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var sh={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},th="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),uh=!1;
function vh(a,b){b=void 0===b?{}:b;var c=mh(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in sh){var f=F(sh[e]);!f||!c&&hc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!hc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!hc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!hc(a))b["X-YouTube-Ad-Signals"]=ih(nh(void 0));return b}
function wh(a){var b=window.location.search,c=hc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!mh(a)||(c=document.location.hostname);var d=gc(a.match(fc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jh(b),f={};E(th,function(g){e[g]&&(f[g]=e[g])});
return lh(a,f||{},!1)}
function xh(a,b){var c=b.format||"JSON";a=yh(a,b);var d=zh(a,b),e=!1,f=Ah(a,function(k){if(!e){e=!0;h&&Og(h);var l=rh(k),n=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)n=Bh(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Ng(function(){e||(e=!0,f.abort(),Og(h),g.call(b.context||y,f))},b.timeout)}return f}
function yh(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=lh(a,b||{},!0);return a}
function zh(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||hc(a)&&!b.withCredentials&&hc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=jh(e),rb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):jc(e));f=e||f&&!kb(f);!uh&&f&&
"POST"!=b.method&&(uh=!0,ug(Error("AJAX request with postData should use POST")));return e}
function Bh(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,vg(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ch(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=Dh(g)})}d&&Eh(e);
return e}
function Eh(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;wb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Zb(a[b],null);a[c]=d}else Eh(a[b])}}
function Ch(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Dh(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ah(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&tg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=qh();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=wh(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=vh(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Fh=Fc||Gc;function Gh(a){var b=Tb;return b?0<=b.toLowerCase().indexOf(a):!1}
;var Hh={},Ih=0;
function Jh(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Gh("cobalt")){if(a){a instanceof Mb||(a="object"==typeof a&&a.ca?a.ba():String(a),Rb.test(a)?a=new Mb(a,Nb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Qb))&&Pb.test(b[1])?new Mb(a,Nb):null));b=Ob(a||Sb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Yb)a=b;else{var f="object"==typeof b;a=null;f&&b.Pa&&(a=b.La());b=f&&b.ca?b.ba():String(b);Lb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Eb,"&amp;")),-1!=
b.indexOf("<")&&(b=b.replace(Fb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Gb,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Hb,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Ib,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Kb,"&#0;")));a=Zb(b,a)}a instanceof Yb&&a.constructor===Yb?a=a.h:(Ka(a),a="type_error:SafeHtml");a=encodeURIComponent(String(tf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=wd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||
a.document).body.appendChild(a))}}else if(e)Ah(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Ah(a,b,"GET","",d);else{b:{try{var g=new Ya({url:a});if(g.j&&g.i||g.l){var h=gc(a.match(fc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(lc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var t=c;break d}}c+=3}t=-1}if(0>t)var q=null;else{var z=a.indexOf("&",t);if(0>z||z>l)z=l;t+=3;
q=decodeURIComponent(a.substr(t,z-t).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(A){}f=!1}f?Kh(a)?(b&&b(),f=!0):f=!1:f=!1;f||Lh(a,b)}}
function Mh(a){var b=void 0===b?"":b;Kh(a,b)||Jh(a,void 0,void 0,void 0,b)}
function Kh(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Lh(a,b){var c=new Image,d=""+Ih++;Hh[d]=c;c.onload=c.onerror=function(){b&&Hh[d]&&b();delete Hh[d]};
c.src=a}
;var Nh=y.ytPubsubPubsubInstance||new K,Oh=y.ytPubsubPubsubSubscribedKeys||{},Ph=y.ytPubsubPubsubTopicToKeys||{},Qh=y.ytPubsubPubsubIsSynchronous||{};function Rh(a,b){var c=Sh();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Oh[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Qh[a]?f():Ng(f,0)}catch(g){ug(g)}},void 0);
Oh[d]=!0;Ph[a]||(Ph[a]=[]);Ph[a].push(d);return d}return 0}
function Th(a){var b=Sh();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Oh[c]}))}
function Uh(a,b){var c=Sh();c&&c.publish.apply(c,arguments)}
function Vh(a){var b=Sh();if(b)if(b.clear(a),a)Wh(a);else for(var c in Ph)Wh(c)}
function Sh(){return y.ytPubsubPubsubInstance}
function Wh(a){Ph[a]&&(a=Ph[a],E(a,function(b){Oh[b]&&delete Oh[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;B("ytPubsubPubsubInstance",Nh,void 0);B("ytPubsubPubsubTopicToKeys",Ph,void 0);B("ytPubsubPubsubIsSynchronous",Qh,void 0);B("ytPubsubPubsubSubscribedKeys",Oh,void 0);var Xh=window,N=Xh.ytcsi&&Xh.ytcsi.now?Xh.ytcsi.now:Xh.performance&&Xh.performance.timing&&Xh.performance.now&&Xh.performance.timing.navigationStart?function(){return Xh.performance.timing.navigationStart+Xh.performance.now()}:function(){return(new Date).getTime()};var Yh=zg("initial_gel_batch_timeout",2E3),Zh=Math.pow(2,16)-1,$h=void 0,ai=0,bi=0,ci=0,di=!0,ei=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",ei,void 0);var fi=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",fi,void 0);
function gi(a,b){if("log_event"===a.endpoint){var c="";a.Aa?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(fi[a.cttAuthInfo.token]=hi(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=ei.get(c)||[];ei.set(c,d);d.push(a.payload);b&&($h=new b);a=zg("tvhtml5_logging_max_batch")||zg("web_logging_max_batch")||100;b=N();d.length>=a?ii({writeThenSend:!0},M("flush_only_full_queue")?c:void 0):10<=b-ci&&(ji(),ci=b)}}
function ki(a,b){if("log_event"===a.endpoint){var c="";a.Aa?c="visitorOnlyApprovedKey":a.cttAuthInfo&&(fi[a.cttAuthInfo.token]=hi(a.cttAuthInfo),c=a.cttAuthInfo.token);var d=new Map;d.set(c,[a.payload]);b&&($h=new b);return new Af(function(e){$h&&$h.isReady()?li(d,e,{bypassNetworkless:!0},!0):e()})}}
function ii(a,b){a=void 0===a?{}:a;new Af(function(c){Og(ai);Og(bi);bi=0;if($h&&$h.isReady())if(void 0!==b){var d=new Map,e=ei.get(b)||[];d.set(b,e);li(d,c,a);ei.delete(b)}else li(ei,c,a),ei.clear();else ji(),c()})}
function ji(){M("web_gel_timeout_cap")&&!bi&&(bi=Ng(function(){ii({writeThenSend:!0})},6E4));
Og(ai);var a=F("LOGGING_BATCH_TIMEOUT",zg("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&di&&(a=Yh);ai=Ng(function(){ii({writeThenSend:!0})},a)}
function li(a,b,c,d){var e=$h;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=u(a);for(var h=a.next();!h.done;h=a.next()){var k=u(h.value);h=k.next().value;var l=k=k.next().value;k=pb({context:mi(e.config_||ni())});k.events=l;(l=fi[h])&&oi(k,h,l);delete fi[h];h="visitorOnlyApprovedKey"===h;pi(k,f,h);M("always_send_and_write")&&(c.writeThenSend=!1);M("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Mh("/generate_204");qi(e,"log_event",k,{retry:!0,onSuccess:function(){g--;
g||b()},
onError:function(){g--;g||b()},
kb:c,Aa:h,Qm:!!d});di=!1}}
function pi(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&((c=F("BATCH_CLIENT_COUNTER",void 0)||0)||(c=Math.floor(Math.random()*Zh/2)),c++,c>Zh&&(c=1),L("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function oi(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function hi(a){var b={};a.videoId?b.videoId=a.videoId:a.playlistId&&(b.playlistId=a.playlistId);return b}
;var ri=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",ri,void 0);
function si(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(Bg[a]||Ag[a])return}else if(M("lr_drop_other_payloads")&&Bg[a])return;var e={},f=Math.round(d.timestamp||N());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=$g();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.fa&&(a=e.context,b=d.fa,ri[b]=b in ri?ri[b]+1:0,a.sequence={index:ri[b],groupKey:b},d.Ab&&delete ri[d.fa]);(d.an?ki:gi)({endpoint:"log_event",payload:e,
cttAuthInfo:d.cttAuthInfo,Aa:d.Aa},c)}
;function ti(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function ui(a,b,c,d,e){Pd.set(""+a,b,{Ra:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var vi=C("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",vi,void 0);function wi(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Pd.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(vi[d]=c.toString())}}}
wi.prototype.get=function(a,b){xi(a);yi(a);a=void 0!==vi[a]?vi[a].toString():null;return null!=a?a:b?b:""};
wi.prototype.set=function(a,b){xi(a);yi(a);if(null==b)throw Error("ExpectedNotNull");vi[a]=b.toString()};
wi.prototype.remove=function(a){xi(a);yi(a);delete vi[a]};
wi.prototype.clear=function(){for(var a in vi)delete vi[a]};
function yi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function xi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function zi(a){a=void 0!==vi[a]?vi[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ja(wi);var Ai={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Bi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Ci(){var a=y.navigator;return a?a.connection:void 0}
;function Di(){return"INNERTUBE_API_KEY"in pg&&"INNERTUBE_API_VERSION"in pg}
function ni(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Cb:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Db:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Fb:F("INNERTUBE_CONTEXT_HL",void 0),Eb:F("INNERTUBE_CONTEXT_GL",void 0),Gb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ib:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Hb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function mi(a){var b={client:{hl:a.Fb,gl:a.Eb,clientName:a.Db,clientVersion:a.innertubeContextClientVersion,configInfo:a.Cb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=F("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=F("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===
d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});f=b.client.clientName;if("WEB"===f||"MWEB"===f||1===f||2===f){var g;b.client.mainAppWebInfo=null!=(g=b.client.mainAppWebInfo)?g:{};b.client.mainAppWebInfo.webDisplayMode=ti()}else if(g=b.client.clientName,("WEB_REMIX"===g||76===g)&&!M("music_web_display_mode_killswitch")){var h;b.client.jb=null!=(h=b.client.jb)?h:{};b.client.jb.webDisplayMode=ti()}var k;if(M("web_log_memory_total_kbytes")&&(null==(k=y.navigator)?
0:k.deviceMemory)){var l;h=null==(l=y.navigator)?void 0:l.deviceMemory;b.client.memoryTotalKbytes=""+1E6*h}a.appInstallData&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);F("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a:{if(l=Ci()){a=Ai[l.type||"unknown"]||"CONN_UNKNOWN";l=Ai[l.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===a&&"CONN_UNKNOWN"!==l&&(a=l);if("CONN_UNKNOWN"!==
a)break a;if("CONN_UNKNOWN"!==l){a=l;break a}}a=void 0}a&&(b.client.connectionType=a);M("web_log_effective_connection_type")&&(a=Ci(),a=null!==a&&void 0!==a&&a.effectiveType?Bi.hasOwnProperty(a.effectiveType)?Bi[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,a&&(b.client.effectiveConnectionType=a));a=Object;l=a.assign;h=b.client;k={};g=u(Object.entries(jh(F("DEVICE",""))));for(f=g.next();!f.done;f=g.next())e=u(f.value),f=e.next().value,e=e.next().value,"cbrand"===f?k.deviceMake=e:"cmodel"===
f?k.deviceModel=e:"cbr"===f?k.browserName=e:"cbrver"===f?k.browserVersion=e:"cos"===f?k.osName=e:"cosver"===f?k.osVersion=e:"cplatform"===f&&(k.platform=e);b.client=l.call(a,h,k);return b}
function Ei(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Om||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().Nm:b=Td([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Fi(a){a=Object.assign({},a);delete a.Authorization;var b=Td();if(b){var c=new We;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Kc(c.digest(),3)}return a}
;function Gi(a){var b=new cg;(b=b.isAvailable()?a?new ig(b,a):b:null)||(a=new dg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Zf(a):null;this.i=document.domain||window.location.hostname}
Gi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(tf(b))}catch(f){return}else e=escape(b);ui(a,e,c,this.i)};
Gi.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Pd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Gi.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Pd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Hi;function Ii(){Hi||(Hi=new Gi("yt.innertube"));return Hi}
function Ji(a,b,c,d){if(d)return null;d=Ii().get("nextId",!0)||1;var e=Ii().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fi(c),requestTime:Math.round(N())};Ii().set("nextId",d+1,86400,!0);Ii().set("requests",e,86400,!0);return d}
function Ki(a){var b=Ii().get("requests",!0)||{};delete b[a];Ii().set("requests",b,86400,!0)}
function Li(a){var b=Ii().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=Fi(Ei(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),qi(a,d.method,e,{}));delete b[c]}}Ii().set("requests",b,86400,!0)}}
;var Mi=function(){var a;return function(){a||(a=new Gi("ytidb"));return a}}();
function Ni(){var a;return null===(a=Mi())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Oi=[],Pi=!1;function Qi(a){Pi||(Oi.push({type:"ERROR",payload:a}),10<Oi.length&&Oi.shift())}
function Ri(a,b){Pi||(Oi.push({type:"EVENT",eventType:a,payload:b}),10<Oi.length&&Oi.shift())}
;function Si(a){var b=Da.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
v(Si,Error);function Ti(){try{return Ui(),!0}catch(a){return!1}}
function Ui(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new Si("Datasync ID not set","unknown");}
;function Vi(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Wi(a){return a.substr(0,a.indexOf(":"))||a}
;var Xi={},Yi=(Xi.AUTH_INVALID="No user identifier specified.",Xi.EXPLICIT_ABORT="Transaction was explicitly aborted.",Xi.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Xi.MISSING_INDEX="Index not created.",Xi.MISSING_OBJECT_STORES="Object stores not created.",Xi.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Xi.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",Xi.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
Xi.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Xi.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Xi.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Xi),Zi={},$i=(Zi.AUTH_INVALID="ERROR",Zi.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Zi.EXPLICIT_ABORT="IGNORED",Zi.IDB_NOT_SUPPORTED="ERROR",Zi.MISSING_INDEX="WARNING",Zi.MISSING_OBJECT_STORES="ERROR",Zi.DB_DELETED_BY_MISSING_OBJECT_STORES=
"WARNING",Zi.QUOTA_EXCEEDED="WARNING",Zi.QUOTA_MAYBE_EXCEEDED="WARNING",Zi.UNKNOWN_ABORT="WARNING",Zi.INCOMPATIBLE_DB_VERSION="WARNING",Zi),aj={},bj=(aj.AUTH_INVALID=!1,aj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,aj.EXPLICIT_ABORT=!1,aj.IDB_NOT_SUPPORTED=!1,aj.MISSING_INDEX=!1,aj.MISSING_OBJECT_STORES=!1,aj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,aj.QUOTA_EXCEEDED=!1,aj.QUOTA_MAYBE_EXCEEDED=!0,aj.UNKNOWN_ABORT=!0,aj.INCOMPATIBLE_DB_VERSION=!1,aj);
function O(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Yi[a]:c;d=void 0===d?$i[a]:d;e=void 0===e?bj[a]:e;Si.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,O.prototype)}
v(O,Si);function cj(a,b){O.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Yi.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,cj.prototype)}
v(cj,O);function dj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,dj.prototype)}
v(dj,Error);var ej=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function fj(a,b,c,d){b=Wi(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof O)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new O("QUOTA_EXCEEDED",a);if(Hc&&"UnknownError"===e.name)return new O("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof dj)return new O("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&ej.some(function(f){return e.message.includes(f)}))return new O("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new O("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",Wm:e.name})];e.level="WARNING";return e}
function gj(a,b,c){var d=Ni();return new O("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function hj(a){if(!a)throw Error();throw a;}
function ij(a){return a}
function jj(a){this.h=a}
function R(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
R.all=function(a){return new R(new jj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ja:0};f.ja<a.length;f={ja:f.ja},++f.ja)kj(R.resolve(a[f.ja]).then(function(g){return function(h){d[g.ja]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
R.resolve=function(a){return new R(new jj(function(b,c){a instanceof R?a.then(b,c):b(a)}))};
R.reject=function(a){return new R(new jj(function(b,c){c(a)}))};
R.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ij,e=null!==b&&void 0!==b?b:hj;return new R(new jj(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){lj(c,c,d,f,g)}),c.onRejected.push(function(){mj(c,c,e,f,g)})):"FULFILLED"===c.state.status?lj(c,c,d,f,g):"REJECTED"===c.state.status&&mj(c,c,e,f,g)}))};
function kj(a,b){a.then(void 0,b)}
function lj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof R?nj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function mj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof R?nj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function nj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof R?nj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function oj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function pj(a){return new Promise(function(b,c){oj(a,b,c)})}
function T(a){return new R(new jj(function(b,c){oj(a,b,c)}))}
;function qj(a,b){return new R(new jj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function rj(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(N());this.i=!1}
m=rj.prototype;m.add=function(a,b,c){return sj(this,[a],{mode:"readwrite",M:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return sj(this,[a],{mode:"readwrite",M:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return sj(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).count(b)})};
function tj(a,b,c){a=a.h.createObjectStore(b,c);return new uj(a)}
m.delete=function(a,b){return sj(this,[a],{mode:"readwrite",M:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return sj(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).get(b)})};
function vj(a,b){return sj(a,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(c){c=c.objectStore("LogsRequestsStore");return T(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function sj(a,b,c,d){var e,f,g,h,k,l,n,p,t,q,z,A;return x(function(H){switch(H.h){case 1:var P={mode:"readonly",M:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?P.mode=c:Object.assign(P,c);e=P;a.transactionCount++;f=e.M?3:1;g=0;case 2:if(h){H.A(3);break}g++;k=Math.round(N());ra(H,4);l=a.h.transaction(b,e.mode);P=new wj(l);P=xj(P,d);return w(H,P,6);case 6:return n=H.i,p=Math.round(N()),yj(a,k,p,g,void 0,b.join(),e),H.return(n);case 4:t=sa(H);q=Math.round(N());z=fj(t,a.h.name,b.join(),a.h.version);
if((A=z instanceof O&&!z.h)||g>=f)yj(a,k,q,g,z,b.join(),e),h=z;H.A(2);break;case 3:return H.return(Promise.reject(h))}})}
function yj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof O&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Ri("QUOTA_EXCEEDED",{dbName:Wi(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof O&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Ri("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),zj(a,!1,d,f,b,g.tag),Qi(e)):zj(a,!0,d,f,b,g.tag)}
function zj(a,b,c,d,e,f){Ri("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function uj(a){this.h=a}
m=uj.prototype;m.add=function(a,b){return T(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return T(this.h.clear()).then(function(){})};
m.count=function(a){return T(this.h.count(a))};
function Aj(a,b){return Bj(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Aj(this,a):T(this.h.delete(a))};
m.get=function(a){return T(this.h.get(a))};
m.index=function(a){try{return new Cj(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new dj(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Bj(a,b,c){a=a.h.openCursor(b.query,b.direction);return Dj(a).then(function(d){return qj(d,c)})}
function wj(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=O;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function xj(a,b){var c=new Promise(function(d,e){try{kj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
wj.prototype.abort=function(){this.h.abort();this.i=!0;throw new O("EXPLICIT_ABORT");};
wj.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new uj(a),this.j.set(a,b));return b};
function Cj(a){this.h=a}
m=Cj.prototype;m.count=function(a){return T(this.h.count(a))};
m.delete=function(a){return Ej(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return T(this.h.get(a))};
m.getKey=function(a){return T(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Ej(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Dj(a).then(function(d){return qj(d,c)})}
function Fj(a,b){this.request=a;this.cursor=b}
function Dj(a){return T(a).then(function(b){return b?new Fj(a,b):null})}
m=Fj.prototype;m.advance=function(a){this.cursor.advance(a);return Dj(this.request)};
m.continue=function(a){this.cursor.continue(a);return Dj(this.request)};
m.delete=function(){return T(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return T(this.cursor.update(a))};function Gj(a,b,c){return new Promise(function(d,e){function f(){t||(t=new rj(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Yb,n=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&Ri("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Wi(a)});var z=f(),A=new wj(g.transaction);
n&&n(z,function(H){return q.oldVersion<H&&q.newVersion>=H},A);
A.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Ri("IDB_UNEXPECTEDLY_CLOSED",{dbName:Wi(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Hj(a,b,c){c=void 0===c?{}:c;return Gj(a,b,c)}
function Ij(a,b){b=void 0===b?{}:b;var c,d,e;return x(function(f){c=self.indexedDB.deleteDatabase(a);d=b;(e=d.blocked)&&c.addEventListener("blocked",function(){e()});
return w(f,pj(c),0)})}
;function Jj(a,b){this.name=a;this.options=b;this.l=!0;this.j=!1}
Jj.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Hj(a,b,c)};
Jj.prototype.delete=function(a){a=void 0===a?{}:a;return Ij(this.name,a)};
function Kj(a,b){return new O("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Lj(a,b){if(!b)throw gj("openWithToken",Wi(a.name));return a.open()}
Jj.prototype.open=function(){function a(){var f,g,h,k,l,n,p,t,q,z;return x(function(A){switch(A.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ra(A,2),w(A,c.i(c.name,c.options.version,e),4);case 4:k=A.i;for(var H=c.options,P=[],Q=u(Object.keys(H.ra)),S=Q.next();!S.done;S=Q.next()){S=S.value;var Ec=H.ra[S],Ff=void 0===Ec.Pb?Number.MAX_VALUE:Ec.Pb;!(k.h.version>=Ec.Ka)||k.h.version>=Ff||k.h.objectStoreNames.contains(S)||P.push(S)}l=P;if(0===l.length){A.A(5);break}n=Object.keys(c.options.ra);
p=k.objectStoreNames();if(c.j){A.A(6);break}c.j=!0;return w(A,c.delete(),7);case 7:return Qi(new O("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:p})),A.return(a());case 6:throw new cj(p,n);case 5:return A.return(k);case 2:t=sa(A);if(t instanceof DOMException?"VersionError"!==t.name:"DOMError"in self&&t instanceof DOMError?"VersionError"!==t.name:!(t instanceof Object&&"message"in t)||"An attempt was made to open a database using a lower version than the existing version."!==
t.message){A.A(8);break}return w(A,c.i(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),9);case 9:q=A.i;z=q.h.version;if(void 0!==c.options.version&&z>c.options.version+1)throw q.close(),c.l=!1,Kj(c,z);return A.return(q);case 8:throw b(),t instanceof Error&&!M("ytidb_async_stack_killswitch")&&(t.stack=t.stack+"\n"+h.substring(h.indexOf("\n")+1)),fj(t,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Kj(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Yb:b,upgrade:this.options.upgrade};return this.h=d=a()};var Mj=new Jj("YtIdbMeta",{ra:{databases:{Ka:1}},upgrade:function(a,b){b(1)&&tj(a,"databases",{keyPath:"actualName"})}});
function Nj(a,b){var c;return x(function(d){if(1==d.h)return w(d,Lj(Mj,b),2);c=d.i;return d.return(sj(c,["databases"],{M:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return T(f.h.put(a,void 0)).then(function(){})})}))})}
function Oj(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Lj(Mj,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Pj(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Lj(Mj,b),2)):3!=e.h?(d=e.i,w(e,sj(d,["databases"],{M:!0,mode:"readonly"},function(f){c.length=0;return Bj(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Qj(a){return Pj(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Rj,Sj=new function(){}(new function(){});
function Tj(){var a,b,c;return x(function(d){switch(d.h){case 1:a=Ni();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=Fh)e=/WebKit\/([0-9]+)/.exec(Tb),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Tb),e=!(e&&602<=parseInt(e[1],10)));if(e||rc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ra(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(d,Nj(c,Sj),4);case 4:return w(d,Oj("yt-idb-test-do-not-use",Sj),5);case 5:return d.return(!0);case 2:return sa(d),d.return(!1)}})}
function Uj(){if(void 0!==Rj)return Rj;Pi=!0;return Rj=Tj().then(function(a){Pi=!1;var b,c;null!==(b=Mi())&&void 0!==b&&b.h&&(b=Ni(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=Mi())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function Vj(){return C("ytglobal.idbToken_")||void 0}
function Wj(){var a=Vj();return a?Promise.resolve(a):Uj().then(function(b){(b=b?Sj:void 0)&&B("ytglobal.idbToken_",b,void 0);return b})}
;new function(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Xj(a){if(!Ti())throw a=new O("AUTH_INVALID",{dbName:a}),Qi(a),a;var b=Ui();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Yj(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",w(n,Wj(),2);case 2:g=n.i;if(!g)throw h=gj("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Qi(h),h;Vi(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Xj(a);ra(n,3);return w(n,Nj(k,g),5);case 5:return w(n,Hj(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=sa(n),ra(n,7),w(n,Oj(k.actualName,
g),9);case 9:n.h=8;n.m=0;break;case 7:sa(n);case 8:throw l;}})}
function Zj(a,b,c){c=void 0===c?{}:c;return Yj(a,b,!1,c)}
function ak(a,b,c){c=void 0===c?{}:c;return Yj(a,b,!0,c)}
function bk(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Wj(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Vi(a);d=Xj(a);return w(e,Ij(d.actualName,b),3)}return w(e,Oj(d.actualName,c),0)})}
function ck(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Ij(d.actualName,b),2):w(e,Oj(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function dk(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Wj(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Vi("LogsDatabaseV2");return w(d,Qj(b),3)}c=d.i;return w(d,ck(c,a,b),0)})}
function ek(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Wj(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Vi(a);return w(d,Ij(a,b),3)}return w(d,Oj(a,c),0)})}
;function fk(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.na=function(){};
this.now=Date.now;this.qa=!1;this.rb=null!==(b=a.rb)&&void 0!==b?b:100;this.pb=null!==(c=a.pb)&&void 0!==c?c:1;this.nb=null!==(d=a.nb)&&void 0!==d?d:2592E6;this.lb=null!==(e=a.lb)&&void 0!==e?e:12E4;this.ob=null!==(f=a.ob)&&void 0!==f?f:5E3;this.C=null!==(g=a.C)&&void 0!==g?g:void 0;this.Ba=!!a.Ba;this.za=null!==(h=a.za)&&void 0!==h?h:.1;this.Fa=null!==(k=a.Fa)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.na&&(this.na=a.na);a.qa&&(this.qa=a.qa);this.D=a.D;this.P=a.P;this.J=a.J;
this.K=a.K;this.W=a.W;this.Ua=a.Ua;this.Ta=a.Ta;this.C&&(!this.D||this.D("networkless_logging"))&&gk(this)}
function gk(a){x(function(b){if(!a.C||a.qa)return b.return();hk(a);a.K.I()&&a.ta();a.K.U(a.Ua,a.ta.bind(a));a.K.U(a.Ta,a.ab.bind(a));a.h=!0;return a.Ba&&Math.random()<=a.za?w(b,a.J.wb(a.C),0):b.A(0)})}
m=fk.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J.set(d,this.C).then(function(e){d.id=e;c.K.I()&&ik(c,d)}).catch(function(e){ik(c,d);
jk(c,e)})}else this.W(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.C&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.D&&this.D("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.I()||this.D&&this.D("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.J.set(e,d.C).catch(function(l){jk(d,l)}),2);
f(g,h);k.h=0})}}this.W(a,b,e.skipRetry)}else this.J.set(e,this.C).catch(function(g){d.W(a,b,e.skipRetry);
jk(d,g)})}else this.W(a,b,this.D&&this.D("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.C&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.J.ma(d.id,c.C):e=!0;c.K.ea&&c.D&&c.D("vss_network_hint")&&c.K.ea(!0);f(g,h)};
this.W(d.url,d.options);this.J.set(d,this.C).then(function(g){d.id=g;e&&c.J.ma(d.id,c.C)}).catch(function(g){jk(c,g)})}else this.W(a,b)};
m.ta=function(){var a=this;if(!this.C)throw gj("throttleSend");this.i||(this.i=this.P.L(function(){var b;return x(function(c){if(1==c.h)return w(c,a.J.hb("NEW",a.C),2);if(3!=c.h)return b=c.i,b?w(c,ik(a,b),3):(a.ab(),c.return());a.i&&(a.i=0,a.ta());c.h=0})},this.rb))};
m.ab=function(){this.P.aa(this.i);this.i=0};
function ik(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.C)throw c=gj("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.J.Jb(b.id,a.C),3);case 3:(d=e.i)?b=d:a.na(Error("The request cannot be found in the database."));case 2:if(kk(a,b,a.nb)){e.A(4);break}a.na(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.J.ma(b.id,a.C),5);case 5:return e.return();case 4:b.skipRetry||(b=lk(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.J.ma(b.id,a.C),8);case 8:a.W(b.url,b.options,!!b.skipRetry),e.h=0}})}
function lk(a,b){if(!a.C)throw gj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=mk(f);if(!(a.D&&a.D("nwl_consider_error_code")&&g||a.D&&!a.D("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Fa)){h.A(2);break}if(!a.K.X){h.A(3);break}return w(h,a.K.X(),3);case 3:if(a.K.I()){h.A(2);break}c(e,f);if(!a.D||!a.D("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.A(6);break}return w(h,a.J.Va(b.id,a.C,!1),6);case 6:return h.return();case 2:if(a.D&&a.D("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Fa)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.A(8);break}return b.sendCount<a.pb?w(h,a.J.Va(b.id,a.C),12):w(h,a.J.ma(b.id,a.C),8);case 12:a.P.L(function(){a.K.I()&&a.ta()},a.ob);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.A(2):w(g,a.J.ma(b.id,a.C),2);a.K.ea&&a.D&&a.D("vss_network_hint")&&a.K.ea(!0);d(e,f);g.h=0})};
return b}
function kk(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function hk(a){if(!a.C)throw gj("retryQueuedRequests");a.J.hb("QUEUED",a.C).then(function(b){b&&!kk(a,b,a.lb)?a.P.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.J.Va(b.id,a.C),2);hk(a);c.h=0})}):a.K.I()&&a.ta()})}
function jk(a,b){a.sb&&!a.K.I()?a.sb(b):a.handleError(b)}
function mk(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function nk(a,b){this.version=a;this.args=b}
;function ok(a,b){this.topic=a;this.h=b}
ok.prototype.toString=function(){return this.topic};var pk=C("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.oa;K.prototype.publish=K.prototype.ha;K.prototype.clear=K.prototype.clear;B("ytPubsub2Pubsub2Instance",pk,void 0);var qk=C("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",qk,void 0);var rk=C("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",rk,void 0);var sk=C("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",sk,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function tk(a,b){var c=uk();c&&c.publish.call(c,a.toString(),a,b)}
function vk(a){var b=wk,c=uk();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(qk[d])try{if(f&&b instanceof ok&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var l=new h;h.ga=l.version}var n=h.ga}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
fb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){ug(p)}},sk[b.toString()]?C("yt.scheduler.instance")?Vg.L(g):Ng(g,0):g())});
qk[d]=!0;rk[b.toString()]||(rk[b.toString()]=[]);rk[b.toString()].push(d);return d}
function xk(){var a=yk,b=vk(function(c){a.apply(void 0,arguments);zk(b)});
return b}
function zk(a){var b=uk();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete qk[c]}))}
function uk(){return C("ytPubsub2Pubsub2Instance")}
;function Ak(a,b){Jj.call(this,a,b);this.options=b;Vi(a)}
v(Ak,Jj);function Bk(a,b){var c;return function(){c||(c=new Ak(a,b));return c}}
Ak.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Wa?ak:Zj)(a,b,Object.assign({},c))};
Ak.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Wa?ek:bk)(this.name,a)};
function Ck(a,b){return Bk(a,b)}
;var Dk;
function Ek(){if(Dk)return Dk();var a={};Dk=Ck("LogsDatabaseV2",{ra:(a.LogsRequestsStore={Ka:2},a),Wa:!1,upgrade:function(b,c,d){c(2)&&tj(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Dk()}
;function Fk(a){return Lj(Ek(),a)}
function Gk(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Fk(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,vj(d,e),3);f=g.i;c.Zb=N();Hk(c);return g.return(f)})}
function Ik(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Fk(b),2);if(3!=l.h)return d=l.i,e=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,N()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,sj(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(n){return Ej(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.Zb=N();Hk(c);return l.return(k)})}
function Jk(a,b){var c;return x(function(d){if(1==d.h)return w(d,Fk(b),2);c=d.i;return d.return(sj(c,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",T(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Kk(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,Fk(b),2);d=e.i;return e.return(sj(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),T(g.h.put(h,void 0)).then(function(){return h})):R.resolve(void 0)})}))})}
function Lk(a,b){var c;return x(function(d){if(1==d.h)return w(d,Fk(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Mk(a){var b,c;return x(function(d){if(1==d.h)return w(d,Fk(a),2);b=d.i;c=N()-2592E6;return w(d,sj(b,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){return Bj(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Nk(){return x(function(a){return w(a,dk(),0)})}
function Hk(a){M("nwl_csi_killswitch")||.01>=Math.random()&&tk("nwl_transaction_latency_payload",a)}
;var Ok={},Pk=Ck("ServiceWorkerLogsDatabase",{ra:(Ok.SWHealthLog={Ka:1},Ok),Wa:!0,upgrade:function(a,b){b(1)&&tj(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Qk(a){return Lj(Pk(),a)}
function Rk(a){var b,c;return x(function(d){if(1==d.h)return w(d,Qk(a),2);b=d.i;c=N()-2592E6;return w(d,sj(b,["SWHealthLog"],{mode:"readwrite",M:!0},function(e){return Bj(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Sk(a){var b;return x(function(c){if(1==c.h)return w(c,Qk(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var Tk;function Uk(){Tk||(Tk=new Gi("yt.offline"));return Tk}
function Vk(a){if(M("offline_error_handling")){var b=Uk().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Uk().set("errors",b,2592E3,!0)}}
function Wk(){if(M("offline_error_handling")){var a=Uk().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Si(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;ug(c)}Uk().set("errors",{},2592E3,!0)}}}
;var Xk=zg("network_polling_interval",3E4);function U(){J.call(this);this.H=0;this.N=this.m=!1;this.l=this.Oa();M("use_shared_nsm")?(Be.h||(Be.h=new Be(Vg)),this.j=Be.h):(Yk(this),Zk(this))}
v(U,J);function $k(){if(!U.h){var a=C("yt.networkStatusManager.instance")||new U;B("yt.networkStatusManager.instance",a,void 0);U.h=a}return U.h}
m=U.prototype;m.I=function(){var a;return M("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.I():this.l};
m.ea=function(a){var b;M("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
m.Kb=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.H||al(this))};
m.Oa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.yb=function(){this.N=!0};
m.U=function(a,b){return M("use_shared_nsm")&&this.j?this.j.U(a,b):J.prototype.U.call(this,a,b)};
function Zk(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.X(),2);a.N&&Wk();b.h=0})})}
function Yk(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.X(),0)})})}
function al(a){a.H=Rg(function(){return x(function(b){if(1==b.h)return a.l?a.Oa()||!a.m?b.A(3):w(b,a.X(),3):w(b,a.X(),3);al(a);b.h=0})},Xk)}
m.X=function(a){var b=this;return M("use_shared_nsm")&&this.j?Ce(this.j,a):this.o?this.o:this.o=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ra(g,2,3),d&&(b.B=Vg.L(function(){d.abort()},a||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:ta(g);b.o=void 0;b.B&&Vg.aa(b.B);f!==b.l&&(b.l=f,b.l&&b.m?ze(b,"ytnetworkstatus-online"):b.m&&ze(b,"ytnetworkstatus-offline"));c(f);ua(g);break;case 2:sa(g),f=!1,g.A(3)}})})};
U.prototype.sendNetworkCheckRequest=U.prototype.X;U.prototype.listen=U.prototype.U;U.prototype.enableErrorFlushing=U.prototype.yb;U.prototype.getWindowStatus=U.prototype.Oa;U.prototype.monitorNetworkStatusChange=U.prototype.Kb;U.prototype.networkStatusHint=U.prototype.ea;U.prototype.isNetworkAvailable=U.prototype.I;U.getInstance=$k;function bl(a){a=void 0===a?{}:a;J.call(this);var b=this;this.l=this.H=0;this.m="ytnetworkstatus-offline";this.o="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.o="networkstatus-online");this.j=$k();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.fb);a.Da&&!M("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Ga?
(this.Ga=a.Ga,c(this.o,function(){cl(b,"publicytnetworkstatus-online");M("use_shared_nsm")&&a.Da&&Wk()}),c(this.m,function(){cl(b,"publicytnetworkstatus-offline")})):(c(this.o,function(){ze(b,"publicytnetworkstatus-online");
M("use_shared_nsm")&&a.Da&&Wk()}),c(this.m,function(){ze(b,"publicytnetworkstatus-offline")}))}
v(bl,J);bl.prototype.I=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
bl.prototype.ea=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
bl.prototype.X=function(a){var b=this,c;return x(function(d){return(c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j))?d.return(c(a)):d.return(!0)})};
function cl(a,b){a.Ga?a.l?(Vg.aa(a.H),a.H=Vg.L(function(){a.B!==b&&(ze(a,b),a.B=b,a.l=N())},a.Ga-(N()-a.l))):(ze(a,b),a.B=b,a.l=N()):ze(a,b)}
;var dl=!1,el=0,fl=0,gl,hl=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:dl,potentialEsfErrorCounter:fl};B("ytNetworklessLoggingInitializationOptions",hl,void 0);
function il(){var a;x(function(b){switch(b.h){case 1:return w(b,Wj(),2);case 2:a=b.i;if(!a||!Ti()&&!M("nwl_init_require_datasync_id_killswitch")){b.A(0);break}dl=!0;hl.isNwlInitialized=dl;return w(b,ek("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.A(5);break}return w(b,Mk(a),6);case 6:return w(b,Rk(a),5);case 5:jl();kl().I()&&ll();kl().U("publicytnetworkstatus-online",ll);kl().U("publicytnetworkstatus-offline",ml);if(!M("networkless_immediately_drop_sw_health_store")){b.A(8);break}return w(b,
nl(),8);case 8:if(M("networkless_immediately_drop_all_requests"))return w(b,Nk(),0);b.A(0)}})}
function ol(a,b){function c(d){var e=kl().I();if(!pl()||!d||e&&M("vss_networkless_bypass_write"))ql(a,b);else{var f={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0};Gk(f,d).then(function(g){f.id=g;kl().I()&&rl(f)}).catch(function(g){rl(f);
kl().I()?ug(g):Vk(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Wj().then(function(d){c(d)}):c(Vj())}
function sl(a,b){function c(d){if(pl()&&d){var e={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(h,k){void 0!==e.id?Lk(e.id,d):f=!0;M("vss_network_hint")&&kl().ea(!0);g(h,k)};
ql(e.url,e.options);Gk(e,d).then(function(h){e.id=h;f&&Lk(e.id,d)}).catch(function(h){kl().I()?ug(h):Vk(h)})}else ql(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?Wj().then(function(d){c(d)}):c(Vj())}
function ll(){var a=Vj();if(!a)throw gj("throttleSend");el||(el=Vg.L(function(){var b;return x(function(c){if(1==c.h)return w(c,Ik("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,rl(b),3):(ml(),c.return());el&&(el=0,ll());c.h=0})},100))}
function ml(){Vg.aa(el);el=0}
function rl(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=Vj();if(!b)throw c=gj("immediateSend"),c;if(void 0===a.id){e.A(2);break}return w(e,Jk(a.id,b),3);case 3:(d=e.i)?a=d:vg(Error("The request cannot be found in the database."));case 2:if(tl(a,2592E6)){e.A(4);break}vg(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.A(5);break}return w(e,Lk(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=ul(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(N());a=f;if(!a){e.A(0);break}if(!a.skipRetry||void 0===a.id){e.A(8);break}return w(e,Lk(a.id,b),8);case 8:ql(a.url,a.options,!!a.skipRetry),e.h=0}})}
function ul(a){var b=Vj();if(!b)throw gj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=mk(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&vl()<=zg("potential_esf_error_limit",10))){h.A(2);break}return w(h,kl().X(),3);case 3:if(kl().I()){h.A(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:a.id)){h.A(5);break}return w(h,Kk(a.id,b,!1),5);case 5:return h.return();case 2:if(M("nwl_consider_error_code")&&!g&&vl()>zg("potential_esf_error_limit",10))return h.return();
C("ytNetworklessLoggingInitializationOptions")&&hl.potentialEsfErrorCounter++;fl++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.A(7);break}return 1>a.sendCount?w(h,Kk(a.id,b),11):w(h,Lk(a.id,b),7);case 11:Vg.L(function(){kl().I()&&ll()},5E3);
case 7:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===a||void 0===a?void 0:a.id)?g.A(2):w(g,Lk(a.id,b),2);M("vss_network_hint")&&kl().ea(!0);d(e,f);g.h=0})};
return a}
function tl(a,b){a=a.timestamp;return N()-a>=b?!1:!0}
function jl(){var a=Vj();if(!a)throw gj("retryQueuedRequests");Ik("QUEUED",a).then(function(b){b&&!tl(b,12E4)?Vg.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,Kk(b.id,a),2);jl();c.h=0})}):kl().I()&&ll()})}
function nl(){var a,b;return x(function(c){a=Vj();if(!a)throw b=gj("clearSWHealthLogsDb"),b;return c.return(Sk(a).catch(function(d){ug(d)}))})}
function kl(){gl||(gl=new bl({Da:!0,fb:!0}));return gl}
function ql(a,b,c){c&&0===Object.keys(b).length?Jh(a):xh(a,b)}
function pl(){return C("ytNetworklessLoggingInitializationOptions")?hl.isNwlInitialized:dl}
function vl(){return C("ytNetworklessLoggingInitializationOptions")?hl.potentialEsfErrorCounter:fl}
;function wl(){fk.call(this,{J:{wb:Mk,ma:Lk,hb:Ik,Jb:Jk,Va:Kk,set:Gk},K:new bl({Da:!0,fb:!0}),handleError:ug,na:vg,W:xl,now:N,sb:Vk,P:Ug(),Ua:"publicytnetworkstatus-online",Ta:"publicytnetworkstatus-offline",Ba:!0,za:.1,Fa:zg("potential_esf_error_limit",10),D:M,qa:!Ti()});this.Ba&&Math.random()<=this.za&&this.C&&Rk(this.C);M("networkless_immediately_drop_sw_health_store")&&yl(this);M("networkless_immediately_drop_all_requests")&&Nk();ek("LogsDatabaseV2")}
v(wl,fk);function zl(){var a=C("yt.networklessRequestController.instance");a||(a=new wl,B("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&Wj().then(function(b){a.C=b;gk(a)}));
return a}
wl.prototype.writeThenSend=function(a,b){b||(b={});Ti()||(this.h=!1);fk.prototype.writeThenSend.call(this,a,b)};
wl.prototype.sendThenWrite=function(a,b,c){b||(b={});Ti()||(this.h=!1);fk.prototype.sendThenWrite.call(this,a,b,c)};
wl.prototype.sendAndWrite=function(a,b){b||(b={});Ti()||(this.h=!1);fk.prototype.sendAndWrite.call(this,a,b)};
function yl(a){var b;x(function(c){if(!a.C)throw b=gj("clearSWHealthLogsDb"),b;return c.return(Sk(a.C).catch(function(d){a.handleError(d)}))})}
function xl(a,b,c){var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(N());c&&0===Object.keys(b).length?Jh(a):xh(a,b)}
;function Al(a){var b=this;this.config_=null;a?this.config_=a:Di()&&(this.config_=ni());Rg(function(){Li(b)},5E3)}
Al.prototype.isReady=function(){!this.config_&&Di()&&(this.config_=ni());return!!this.config_};
function qi(a,b,c,d){function e(z){z=void 0===z?!1:z;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||M("skip_ls_gel_retry")||(A=Ji(b,c,l,k)),A)){var H=g.onSuccess,P=g.onFetchSuccess;g.onSuccess=function(Q,S){Ki(A);H(Q,S)};
c.onFetchSuccess=function(Q,S){Ki(A);P(Q,S)}}try{z&&d.retry&&!d.kb.bypassNetworkless?(g.method="POST",d.kb.writeThenSend?M("use_new_nwl")?zl().writeThenSend(q,g):ol(q,g):M("use_new_nwl")?zl().sendAndWrite(q,g):sl(q,g)):(g.method="POST",g.postParams||(g.postParams={}),xh(q,g))}catch(Q){if("InvalidAccessError"==Q.name)A&&(Ki(A),A=0),vg(Error("An extension is blocking network request."));
else throw Q;}A&&Rg(function(){Li(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&vg(new Si("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Si("innertube xhrclient not ready",b,c,d);ug(f);throw f;}var g={headers:{"Content-Type":"application/json"},method:"POST",postParams:c,postBodyFormat:"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,A){if(d.onError)d.onError(A)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0},h="";(f=a.config_.Gb)&&(h=f);var k=a.config_.Ib||!1,l=Ei(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},t=a.config_.Hb&&f;M("omit_innertube_api_key_for_bearer_auth_header")&&(t=t&&f.startsWith("Bearer"));t||(p.key=a.config_.innertubeApiKey);var q=lh(""+h+n,p||{},!0);M("use_new_nwl")||pl()?Uj().then(function(z){e(z)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=Al;F("ytLoggingEventsDefaultDisabled",!1)&&Al==Al&&(d=null);si(a,b,d,c)}
;var Bl=[{Sa:function(a){return"Cannot read property '"+a.key+"'"},
Ea:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sa:function(a){return"Cannot call '"+a.key+"'"},
Ea:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sa:function(a){return a.key+" is not defined"},
Ea:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Dl={da:[],Z:[{Za:Cl,weight:500}]};function Cl(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function El(){this.Z=[];this.da=[]}
var Fl;function Gl(){if(!Fl){var a=Fl=new El;a.da.length=0;a.Z.length=0;Dl.da&&a.da.push.apply(a.da,Dl.da);Dl.Z&&a.Z.push.apply(a.Z,Dl.Z)}return Fl}
;var Hl=new K;function Il(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Jl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Jl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Jl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Jl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Kl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ll(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Il(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Ll(e+".ve",f,g,h):0;d+=g;d+=Ll(e,a[e],b,c);if(500<d)break}}else c[b]=Ml(a),d+=c[b].length;else c[b]=Ml(a),d+=c[b].length;return d}
function Ll(a,b,c,d){c+="."+a;a=Ml(b);d[c]=a;return c.length+a.length}
function Ml(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Nl=new Set,Ol=0,Pl=0,Ql=0,Rl=[],Sl=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Tl(a){Ul(a,"WARNING")}
function Ul(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),M("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=Ol))){var g=Yd(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=Kl(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,t=Ml(n[l]);c[p]=t;k+=p.length+t.length;if(500<k)break}}else c.params=Ml(n)}if(Rl.length)for(l=0;l<Rl.length&&!(k=Kl(Rl[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Gl();c=u(a.da);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.Vm)){a=d.weight;break a}a=u(a.Z);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Za(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=u(Bl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Ea[l.name])for(e=u(c.Ea[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+e[g]]=
d[g+1];l.message=c.Sa(f);break}l.params||(l.params={});a=Gl();l.params["params.errorServiceSignature"]="msg="+a.da.length+"&cb="+a.Z.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));wb("sample").constructor!==ub&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!Nl.has(l.message)){"ERROR"===b?
(Hl.ha("handleError",l),M("record_app_crashed_web")&&0===Ql&&1===l.sampleWeight&&(Ql++,V("appCrashed",{appCrashType:"APP_CRASH_TYPE_BREAKPAD"})),Pl++):"WARNING"===b&&Hl.ha("handleWarning",l);if(M("kevlar_gel_error_routing")){a=b;b:{c=u(Sl);for(d=c.next();!d.done;d=c.next())if(Gh(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?
2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));f=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",
void 0);g=pg.EXPERIMENT_FLAGS;if((!g||!g.web_disable_gel_stp_ecatcher_killswitch)&&f)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:g,value:String(f[g])});if(f=l.params)for(h=u(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(f[g])});f=F("SERVER_NAME",void 0);g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,
logMessage:c}}c&&(V("clientError",c),("ERROR"===a||M("errors_flush_gel_always_killswitch"))&&ii())}if(!M("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=u(Object.keys(a));for(d=c.next();!d.done;d=
c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=u(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}xh(F("ECATCHER_REPORT_HOST","")+"/error_204",b)}try{Nl.add(l.message)}catch(q){}Ol++}}}
function Vl(a){var b=Da.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,fa(b))}
;var Wl={Nc:3611,ac:27686,cc:85013,dc:23462,fc:42016,hc:62407,ic:26926,ec:43781,jc:51236,kc:79148,lc:50160,mc:77504,Ac:87907,Bc:18630,Cc:54445,Dc:80935,Ec:105675,Fc:37521,Gc:47786,Hc:98349,Ic:123695,Jc:6827,Kc:29434,Lc:7282,Mc:124448,Qc:32276,Pc:76278,Rc:93911,Sc:106531,Tc:27259,Uc:27262,Vc:27263,Xc:21759,Yc:27107,Zc:62936,bd:49568,cd:38408,dd:80637,ed:68727,fd:68728,gd:80353,hd:80356,jd:74610,kd:45707,ld:83962,md:83970,nd:46713,od:89711,pd:74612,qd:93265,rd:74611,sd:131380,ud:128979,vd:139311,wd:128978,
td:131391,xd:105350,zd:139312,Ad:134800,yd:131392,Cd:113533,Dd:93252,Ed:99357,Gd:94521,Hd:114252,Id:113532,Jd:94522,Fd:94583,Kd:88E3,Ld:93253,Md:93254,Nd:94387,Od:94388,Pd:93255,Qd:97424,Bd:72502,Rd:110111,Sd:76019,Ud:117092,Vd:117093,Td:89431,Wd:110466,Xd:77240,Yd:60508,Zd:137401,ae:137402,be:137046,ce:73393,de:113534,ee:92098,ge:131381,he:84517,ie:83759,je:80357,ke:86113,le:72598,me:72733,ne:107349,oe:124275,pe:118203,qe:133275,re:133274,se:133272,te:133273,ue:133276,xe:117431,we:133797,ye:128572,
ze:133405,Ae:117429,Be:117430,Ce:117432,De:120080,Ee:117259,Fe:121692,Ge:132972,He:133051,Ie:133658,Je:132971,Ke:97615,Le:31402,Ne:133624,Oe:133623,Pe:133622,Me:133621,Qe:84774,Re:95117,Se:98930,Te:98931,Ue:98932,Ve:43347,We:129889,Xe:45474,Ye:100352,Ze:84758,af:98443,bf:117985,cf:74613,df:74614,ef:64502,ff:136032,gf:74615,hf:74616,jf:122224,kf:74617,lf:77820,mf:74618,nf:93278,pf:93274,qf:93275,rf:93276,sf:22110,tf:29433,uf:133798,vf:132295,xf:120541,zf:82047,Af:113550,Bf:75836,Cf:75837,Df:42352,
Ef:84512,Ff:76065,Gf:75989,Hf:16623,If:32594,Jf:27240,Kf:32633,Lf:74858,Nf:3945,Mf:16989,Of:45520,Pf:25488,Qf:25492,Rf:25494,Sf:55760,Tf:14057,Uf:18451,Vf:57204,Wf:57203,Xf:17897,Yf:57205,Zf:18198,ag:17898,cg:17909,dg:43980,eg:46220,fg:11721,gg:49954,hg:96369,ig:3854,jg:56251,kg:25624,lg:16906,mg:99999,ng:68172,og:27068,pg:47973,qg:72773,rg:26970,sg:26971,tg:96805,ug:17752,vg:73233,wg:109512,xg:22256,yg:14115,zg:22696,Ag:89278,Bg:89277,Cg:109513,Dg:43278,Eg:43459,Fg:43464,Gg:89279,Hg:43717,Ig:55764,
Jg:22255,Kg:89281,Lg:40963,Mg:43277,Ng:43442,Og:91824,Pg:120137,Qg:96367,Rg:36850,Sg:72694,Tg:37414,Ug:36851,Wg:124863,Vg:121343,Xg:73491,Yg:54473,Zg:43375,ah:46674,bh:139095,dh:32473,eh:72901,fh:72906,gh:50947,hh:50612,ih:50613,jh:50942,kh:84938,lh:84943,mh:84939,nh:84941,oh:84944,ph:84940,qh:84942,rh:35585,sh:51926,th:79983,uh:63238,vh:18921,wh:63241,xh:57893,yh:41182,zh:135732,Ah:33424,Bh:22207,Ch:42993,Dh:36229,Eh:22206,Fh:22205,Gh:18993,Hh:19001,Ih:18990,Jh:18991,Kh:18997,Lh:18725,Mh:19003,Nh:36874,
Oh:44763,Ph:33427,Qh:67793,Rh:22182,Sh:37091,Th:34650,Uh:50617,Vh:47261,Wh:22287,Xh:25144,Yh:97917,Zh:62397,ai:125598,bi:137935,ci:36961,di:108035,fi:27426,gi:27857,hi:27846,ii:27854,ji:69692,ki:61411,li:39299,mi:38696,ni:62520,oi:36382,ri:108701,si:50663,ti:36387,vi:14908,wi:37533,xi:105443,yi:61635,zi:62274,Ai:133818,Bi:65702,Ci:65703,Di:65701,Ei:76256,Fi:37671,Gi:49953,Ii:36216,Ji:28237,Ki:39553,Li:29222,Mi:26107,Ni:38050,Oi:26108,Qi:120745,Pi:26109,Ri:26110,Si:66881,Ti:28236,Ui:14586,Vi:57929,
Wi:74723,Xi:44098,Yi:44099,bj:23528,cj:61699,Zi:134104,aj:134103,dj:59149,ej:101951,fj:97346,gj:118051,hj:95102,ij:64882,jj:119505,kj:63595,lj:63349,mj:95101,nj:75240,oj:27039,pj:68823,qj:21537,rj:83464,sj:75707,tj:83113,uj:101952,vj:101953,xj:79610,yj:125755,zj:24402,Aj:24400,Bj:32925,Cj:57173,Dj:122502,Ej:138480,Fj:64423,Gj:64424,Hj:33986,Ij:100828,Jj:129089,Kj:21409,Oj:135155,Pj:135156,Qj:135157,Rj:135158,Sj:135159,Tj:135160,Uj:135161,Vj:135162,Wj:135163,Xj:135164,Yj:135165,Zj:135166,Lj:11070,
Mj:11074,Nj:17880,ak:14001,ck:30709,dk:30707,ek:30711,fk:30710,gk:30708,bk:26984,hk:63648,ik:63649,jk:51879,kk:111059,lk:5754,mk:20445,pk:130975,nk:130976,qk:110386,rk:113746,sk:66557,uk:17310,vk:28631,wk:21589,xk:68012,yk:60480,zk:138664,Ak:31571,Bk:76980,Ck:41577,Dk:45469,Ek:38669,Fk:13768,Gk:13777,Hk:62985,Ik:4724,Jk:59369,Kk:43927,Lk:43928,Mk:12924,Nk:100355,Qk:56219,Rk:27669,Sk:10337,Pk:47896,Tk:122629,Uk:121258,Vk:107598,Wk:127991,Xk:96639,Yk:107536,Zk:130169,al:96661,bl:96658,dl:116646,fl:121122,
il:96660,jl:127738,kl:127083,ll:104443,ml:96659,nl:106442,ol:134840,pl:63667,ql:63668,rl:63669,sl:130686,ul:78314,vl:55761,wl:127098,xl:134841,yl:96368,zl:67374,Al:48992,Bl:49956,Cl:31961,Dl:26388,El:23811,Fl:5E4,Gl:126250,Hl:96370,Il:47355,Jl:47356,Kl:37935,Ll:45521,Ml:21760,Nl:83769,Ol:49977,Pl:49974,Ql:93497,Rl:93498,Sl:34325,Tl:115803,Ul:123707,Vl:100081,Wl:35309,Xl:68314,Yl:25602,Zl:100339,am:59018,bm:18248,cm:50625,dm:9729,em:37168,fm:37169,gm:21667,hm:16749,im:18635,jm:39305,km:18046,lm:53969,
mm:8213,nm:93926,om:102852,pm:110099,qm:22678,rm:69076,sm:137575,um:139224,vm:100856,wm:17736,xm:3832,ym:55759,zm:64031,Am:93044,Bm:93045,Cm:34388,Dm:17657,Em:17655,Fm:39579,Gm:39578,Hm:77448,Im:8196,Jm:11357,Km:69877,Lm:8197,Mm:82039};function Xl(){var a=ob(Yl),b;return If(new Af(function(c,d){a.onSuccess=function(e){rh(e)?c(new Zl(e)):d(new $l("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new $l("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new $l("Request timed out","net.timeout",e))};
b=xh("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Jf&&b.abort();
return Gf(c)})}
function $l(a,b,c){Xa.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v($l,Xa);function Zl(a){this.xhr=a}
;function am(){this.i=0;this.h=null}
am.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),zf(a)?a:bm(a)):2===this.i&&b?(a=b.call(c,this.h),zf(a)?a:cm(a)):this};
am.prototype.getValue=function(){return this.h};
am.prototype.$goog_Thenable=!0;function cm(a){var b=new am;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function bm(a){var b=new am;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function dm(){if(Rd())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||Fh&&Gh("applewebkit")&&!Gh("version")&&(!Gh("safari")||Gh("gsa/"))||uc&&Gh("version/")?!0:(a=Pd.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function em(a){Xa.call(this,a.message||a.description||a.name);this.isMissing=a instanceof fm;this.isTimeout=a instanceof $l&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Jf}
v(em,Xa);em.prototype.name="BiscottiError";function fm(){Xa.call(this,"Biscotti ID is missing from server")}
v(fm,Xa);fm.prototype.name="BiscottiMissingError";var Yl={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},gm=null;function bh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Gf(Error("Biscotti id fetching has been disabled entirely."));if(!dm())return Gf(Error("User has not consented - not fetching biscotti id."));if("1"==mb())return Gf(Error("Biscotti ID is not available in private embed mode"));gm||(gm=If(Xl().then(hm),function(a){return im(2,a)}));
return gm}
function hm(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new fm;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new fm;a=a.id;ch(a);gm=bm(a);jm(18E5,2);return a}
function im(a,b){b=new em(b);ch("");gm=cm(b);0<a&&jm(12E4,a-1);throw b;}
function jm(a,b){Ng(function(){If(Xl().then(hm,function(c){return im(b,c)}),Ia)},a)}
function km(){try{var a=C("yt.ads.biscotti.getId_");return a?a():bh()}catch(b){return Gf(b)}}
;function lm(a){if("1"!=mb()){a&&ah();try{km().then(function(){},function(){}),Ng(lm,18E5)}catch(b){ug(b)}}}
;var mm=Date.now().toString();
function nm(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(mm)for(a=1,b=0;b<mm.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^mm.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var om,pm=y.ytLoggingDocDocumentNonce_;pm||(pm=nm(),Va("ytLoggingDocDocumentNonce_",pm));om=pm;var qm={wf:0,Oc:1,Wc:2,Hi:3,yf:4,tm:5,wj:6,Ok:7,tk:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function rm(a){this.h=a}
function sm(a){return new rm({trackingParams:a})}
rm.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
rm.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
rm.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function tm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function um(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function vm(a){return F(um(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",vm,void 0);function wm(a){return(a=vm(void 0===a?0:a))?new rm({veType:a,youtubeData:void 0}):null}
function xm(){var a=F("csn-to-ctt-auth-info");a||(a={},L("csn-to-ctt-auth-info",a));return a}
function ym(a){a=void 0===a?0:a;var b=F(tm(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!M("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
B("yt_logging_screen.getCurrentCsn",ym,void 0);function zm(a,b,c){var d=xm();(c=ym(c))&&delete d[c];b&&(d[a]=b)}
function Am(a){return xm()[a]}
B("yt_logging_screen.getCttAuthInfo",Am,void 0);function Bm(a,b,c,d){c=void 0===c?0:c;if(a!==F(tm(c))||b!==F(um(c)))zm(a,d,c),L(tm(c),a),L(um(c),b),b=function(){setTimeout(function(){a&&si("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:om,clientScreenNonce:a},Al)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",Bm,void 0);function Cm(a){nk.call(this,1,arguments);this.csn=a}
v(Cm,nk);var wk=new ok("screen-created",Cm),Dm=[],Fm=Em,Gm=0;function Hm(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:bb(e,function(f){return f.getAsJson()})};
d=u(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(kb(e)||!e.trackingParams&&!e.veType)&&Tl(Error("Child VE logged with no data"));d={cttAuthInfo:Am(b),fa:b};"UNDEFINED_CSN"==b?Im("visualElementAttached",c,d):a?si("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function Em(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Kc(b,3)}
function Im(a,b,c){Dm.push({payloadName:a,payload:b,options:c});Gm||(Gm=xk())}
function yk(a){if(Dm){for(var b=u(Dm),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,si(c.payloadName,c.payload,null,c.options));Dm.length=0}Gm=0}
;function Jm(){this.i=new Set;this.h=new Set;this.j=new Map}
Jm.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
Ja(Jm);function Km(a){var b=Da.apply(1,arguments);if(!Lm(a)||b.some(function(e){return!Lm(e)}))throw Error("Only objects may be merged.");
var c=a;b=u(b);for(var d=b.next();!d.done;d=b.next())Mm(c,d.value);return c}
function Mm(a,b){for(var c in b)if(Lm(b[c])){if(c in a&&!Lm(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Mm(a[c],b[c])}else if(Nm(b[c])){if(c in a&&!Nm(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Om(a[c],b[c])}else a[c]=b[c];return a}
function Om(a,b){b=u(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Lm(c)?a.push(Mm({},c)):Nm(c)?a.push(Om([],c)):a.push(c);return a}
function Lm(a){return"object"===typeof a&&!Array.isArray(a)}
function Nm(a){return"object"===typeof a&&Array.isArray(a)}
;function Pm(a,b){nk.call(this,1,arguments)}
v(Pm,nk);function Qm(a,b){nk.call(this,1,arguments)}
v(Qm,nk);var Rm=new ok("aft-recorded",Pm),Sm=new ok("timing-sent",Qm);var Tm=window;function Um(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=Tm.performance||Tm.mozPerformance||Tm.msPerformance||Tm.webkitPerformance||new Um;var Vm=!1,Wm={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Ta(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ia,W);function Xm(a){var b=Ym(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Zm(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=$m(e.requestStart),e.responseEnd=$m(e.responseEnd),e.redirectStart=$m(e.redirectStart),e.redirectEnd=$m(e.redirectEnd),e.domainLookupEnd=$m(e.domainLookupEnd),e.connectStart=$m(e.connectStart),
e.connectEnd=$m(e.connectEnd),e.responseStart=$m(e.responseStart),e.secureConnectionStart=$m(e.secureConnectionStart),e.domainLookupStart=$m(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function an(){return M("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function $m(a){return Math.round(an()+a)}
function bn(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Va("ytcsi."+(a||"")+"data_",b));return b}
function cn(a){a=bn(a);a.info||(a.info={});return a.info}
function Ym(a){a=bn(a);a.tick||(a.tick={});return a.tick}
function dn(a){var b=bn(a).nonce;b||(b=nm(),bn(a).nonce=b);return b}
function en(a){var b=Ym(a||""),c=Xm(a);c&&!Vm&&(tk(Rm,new Pm(Math.round(c-b._start),a)),Vm=!0)}
;function fn(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=db(a,function(b){return"first-paint"===b.name}))return $m(a.startTime)}a=W.timing;
return a.Lb?Math.max(0,a.Lb):0}
;function gn(){var a=C("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function hn(a){a=a||"";var b=C("ytcsi.reference");b||(gn(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=gn(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var kn=y.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",kn,void 0);function ln(){this.h=0}
function mn(){ln.h||(ln.h=new ln);return ln.h}
ln.prototype.tick=function(a,b,c,d){nn(this,"tick_"+a+"_"+b)||V("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ln.prototype.info=function(a,b,c){var d=Object.keys(a).join("");nn(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
ln.prototype.span=function(a,b,c){var d=Object.keys(a).join("");nn(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function nn(a,b){kn[b]=kn[b]||{count:0};var c=kn[b];c.count++;c.time=N();a.h||(a.h=Rg(function(){var d=N(),e;for(e in kn)kn[e]&&6E4<d-kn[e].time&&delete kn[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Si("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Tl(c)),!0):!1}
;var X={},on=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},pn=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),qn="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),rn={},sn=(rn.ccs="CANARY_STATE_",
rn.mver="MEASUREMENT_VERSION_",rn.pis="PLAYER_INITIALIZED_STATE_",rn.yt_pt="LATENCY_PLAYER_",rn.pa="LATENCY_ACTION_",rn.ctop="TOP_ENTITY_TYPE_",rn.yt_vst="VIDEO_STREAM_TYPE_",rn),tn="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function un(a){return!!F("FORCE_CSI_ON_GEL",!1)||M("csi_on_gel")||M("enable_csi_on_gel")||M("unplugged_tvhtml5_csi_on_gel")||!!bn(a).useGel}
function vn(a,b,c){var d=wn(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||N();if(un(c)){hn(c||"").tick[a]=b||N();d=dn(c);var e=bn(c).cttAuthInfo;"_start"===a?(a=mn(),nn(a,"baseline_"+d)||V("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:e})):mn().tick(a,d,b,e);en(c);return!0}return!1}
function xn(a,b,c){c=wn(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in pn){c=pn[a];0<=$a(qn,c)&&(b=!!b);a in sn&&"string"===typeof b&&(b=sn[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Km({},d)}0<=$a(tn,a)||Tl(new Si("Unknown label logged with GEL CSI",a))}
function wn(a){a=bn(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function yn(a){a=wn(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function zn(a,b,c){null!==b&&(cn(c)[a]=b,un(c)?(a=xn(a,b,c))&&un(c)&&(b=hn(c||""),Km(b.info,a),Km(yn(c),a),b=dn(c),c=bn(c).cttAuthInfo,mn().info(a,b,c)):hn(c||"").info[a]=b)}
function Z(a,b,c){var d=Ym(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||N();d[a]=e;vn(a,b,c)||c||(An(),hn("").tick[a]=b||N());return d[a]}
function Bn(){var a=dn(void 0);requestAnimationFrame(function(){setTimeout(function(){a===dn(void 0)&&Z("ol",void 0,void 0)},0)})}
function An(){if(!C("yt.timing.pingSent_")){var a=F("TIMING_ACTION",void 0),b=Ym();if(a=!!C("ytglobal.timingready_")&&a)a="_start"in Ym(void 0);if(a&&Xm()){en();a=!0;var c=F("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in b)){a=!1;break}if(a&&!un()){c=Ym();d=cn();e=c._start;var f=F("CSI_SERVICE_NAME","youtube");a={v:2,s:f,action:F("TIMING_ACTION",void 0)};b=d.srt;void 0!==c.srt&&delete d.srt;c.aft=Xm();var g=Ym(void 0),h=g.pbr,k=g.vc;g=g.pbs;h&&k&&g&&h<k&&k<g&&cn(void 0).yt_pvis&&
"youtube"===f&&(zn("yt_lt","hot_bg"),f=c.vc,h=c.pbs,delete c.aft,d.aft=Math.round(h-f));for(var l in d)"_"!==l.charAt(0)&&(a[l]=d[l]);c.ps=N();l={};f=[];for(var n in c)"_"!==n.charAt(0)&&(h=Math.round(c[n]-e),l[n]=h,f.push(n+"."+h));a.rt=f.join(",");n=!!d.ap;c="";for(var p in a)a.hasOwnProperty(p)&&(c+="&"+p+"="+a[p]);p="/csi_204?"+c.substring(1);window.navigator&&n?Mh(p):Jh(p);B("yt.timing.pingSent_",!0,void 0);tk(Sm,new Qm(l.aft+(Number(b)||0)))}}}}
function Cn(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Dg+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Dn(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);cc()&&a.setAttribute("nonce",cc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=an(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function En(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=ab(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=cb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",$m(b.startTime)),Z("wffe",$m(b.responseEnd)))}
var Fn=window;Fn.ytcsi&&(Fn.ytcsi.info=zn,Fn.ytcsi.tick=Z);function Gn(){this.u=[];this.o=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.B=new Map}
function Hn(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=ym(c),h=wm(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&Hm(a.client,g,h,[sm(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&Hm(a.client,g,h,[sm(d.playerResponse.trackingParams)]))})}
function In(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.u.push([b,c]);else{var e=ym(d);c=c||wm(d);e&&c&&Hm(a.client,e,c,[b])}}
Gn.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=ym(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:sm(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Am(c),fa:c};"UNDEFINED_CSN"==c?Im("visualElementGestured",a,b):d?si("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function Jn(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Kn(a,b,c);var f=wm(c.layer);if(f){for(var g=u(a.u),h=g.next();!h.done;h=g.next())h=h.value,In(a,h[0],h[1]||f,c.layer);f=u(a.o);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=ym(g);var l=k[0]||wm(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Am(h),fa:h},"UNDEFINED_CSN"==h?Im("visualElementStateChanged",k,l):g?si("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
ym(c.layer)||a.j();if(c.eb)for(var d=u(c.eb),e=d.next();!e.done;e=d.next())Hn(a,e.value,c.layer);else Ul(Error("Delayed screen needs a data promise."))}
function Kn(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Mb?c.Mb:c.layer;var e=ym(d);d=wm(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.cb,n=c.cttAuthInfo,p=c.Sm,t=Fm(),q={csn:t,pageVe:(new rm({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(q.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(q.implicitGesture.gestureType=p)):h&&Tl(new Si("newScreen() parent element does not have a VE - rootVe",b));l&&(q.cloneCsn=l);l={cttAuthInfo:n,fa:t};k?si("screenCreated",q,k,l):V("screenCreated",q,l);tk(wk,new Cm(t));var z=t}catch(A){Vl(A,{Ym:b,rootVe:d,parentVisualElement:void 0,Rm:e,Xm:f,cb:c.cb});Ul(A);return}Bm(z,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=M("screen_manager_skip_hide_killswitch"))){a:{b=
u(Object.values(qm));for(f=b.next();!f.done;f=b.next())if(ym(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Am(e),fa:e,Ab:f},"UNDEFINED_CSN"==e?Im("visualElementHidden",d,f):b?si("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=z||"");zn("csn",z);Jm.getInstance().clear();d=wm(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||
M("music_web_mark_root_visible"))&&(e=z,z={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Am(e),fa:e},"UNDEFINED_CSN"==e?Im("visualElementShown",z,b):V("visualElementShown",z,b));a.i.delete(c.layer||0);a.j=void 0;e=u(a.B);for(z=e.next();!z.done;z=e.next())b=u(z.value),z=b.next().value,b=b.next().value,b.has(c.layer)&&d&&In(a,z,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){Ul(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){Ul(A)}}}
;function Ln(a){a&&(a.dataset?a.dataset[Mn("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Nn(a,b){return a?a.dataset?a.dataset[Mn(b)]:a.getAttribute("data-"+b):null}
var On={};function Mn(a){return On[a]||(On[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Pn=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Qn=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Rn(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Pn,""),c=c.replace(Qn,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Sn(a,b,c)}
function Sn(a,b,c){c=void 0===c?null:c;var d=Tn(a),e=document.getElementById(d),f=e&&Nn(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Rh(d,b),b=""+Oa(b),Un[b]=f),g||(e=Vn(a,d,function(){Nn(e,"loaded")||(Ln(e),Uh(d),Ng(Ua(Vh,d),0))},c)))}
function Vn(a,b,c,d){d=void 0===d?null:d;var e=xd(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);qd(e,rf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Wn(a){a=Tn(a);var b=document.getElementById(a);b&&(Vh(a),b.parentNode.removeChild(b))}
function Xn(a,b){a&&b&&(a=""+Oa(b),(a=Un[a])&&Th(a))}
function Tn(a){var b=document.createElement("a");$b(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+ec(a)}
var Un={};var Yn=[],Zn=!1;function $n(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&dm()&&"1"!=mb()){var a=function(){Zn=!0;"google_ad_status"in window?L("DCLKSTAT",1):L("DCLKSTAT",2)};
try{Rn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Yn.push(Vg.L(function(){if(!(Zn||"google_ad_status"in window)){try{Xn("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}Zn=!0;L("DCLKSTAT",3)}},5E3))}}
function ao(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function bo(){this.i=!1;this.h=null}
bo.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;wb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=tb();g=k?k.createScript(g):g;g=(new yb(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,wb("From proto message. b/166824318"),h=Cb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());co(this,g,h,a.program,b,c,d)}else Tl(Error("Cannot initialize botguard without program"))};
function co(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,Rn(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?eo(a,d,!!g,h,e):(Wn(c),Tl(new Si("Unable to load Botguard","from "+c)))},f)):b&&(f=xd(document,"SCRIPT"),f.textContent=b,f.nonce=cc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?eo(a,d,!!g,b,e):Tl(Error("Unable to load Botguard from JS")))}
function eo(a,b,c,d,e){var f,g;if(d=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{fo(a,new d(b,e?function(){return e(b)}:Ia))}catch(h){h instanceof Error&&Tl(h)}else{try{fo(a,new d(b))}catch(h){h instanceof Error&&Tl(h)}e&&e(b)}else Tl(Error("Failed to finish initializing VM"))}
bo.prototype.invoke=function(a){a=void 0===a?{}:a;return this.h?this.h.hasOwnProperty("hot")?this.h.hot(void 0,void 0,a):this.h.invoke(void 0,void 0,a):null};
bo.prototype.dispose=function(){this.h=null};
function fo(a,b){a.h=b}
;var go=new bo;function ho(){return!!go.h}
function io(a){a=void 0===a?{}:a;return go.invoke(a)}
;var jo=window,ko=/[A-Za-z]+\/[0-9.]+/g;function lo(a,b){if(a.replace(ko,"")!==b.replace(ko,""))return!1;a=a.match(ko);b=b.match(ko);if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(!d.startsWith(e)&&!e.startsWith(d))return!1}return!0}
function mo(){var a=jo.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&lo(a.syntheticUa,b),d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),Ul(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var no=!1;function oo(){var a;1===(null===(a=jo.uaChPolyfill)||void 0===a?void 0:a.state.type)?no||(jo.uaChPolyfill.onReady=oo,no=!0):jo.uaChPolyfill&&mo()}
;function po(a,b,c){I.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.F="*";this.l=c;this.sessionId=null;this.channel="widget";this.H=!!a;this.B=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.H&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.F=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.o||0<=$a(d.o,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.o=this.i=this.m=null;window.addEventListener("message",this.B)}
v(po,I);po.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.F)}catch(d){vg(d)}}};
po.prototype.G=function(){window.removeEventListener("message",this.B);I.prototype.G.call(this)};function qo(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new po(!!F("WIDGET_ID_ENFORCE")),b=this.Ob.bind(this);a.m=b;a.o=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=qo.prototype;m.Ob=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,ro(this,a)),this.j[a]=!0)):this.Xa(a,b,c)};
m.Xa=function(){};
function ro(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Bb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Na());this.sendMessage("onReady");E(this.i,this.qb,this);this.i=[]};
m.Na=function(){return null};
function so(a,b){a.sendMessage("infoDelivery",b)}
m.qb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.qb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function to(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function uo(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function vo(a,b,c,d){if(Na(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function wo(a){qo.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Vb.bind(this));this.addEventListener("onVolumeChange",this.Wb.bind(this));this.addEventListener("onApiChange",this.Qb.bind(this));this.addEventListener("onPlaybackQualityChange",this.Sb.bind(this));this.addEventListener("onPlaybackRateChange",this.Tb.bind(this));this.addEventListener("onStateChange",this.Ub.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Xb.bind(this))}
v(wo,qo);m=wo.prototype;
m.Xa=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&to(a)){var d=b;if(Na(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=uo(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=uo(e);break;case "loadPlaylist":case "cuePlaylist":e=vo(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);to(a)&&so(this,this.Na())}};
m.onReady=function(){var a=this.Bb.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Na=function(){if(!this.api)return null;var a=this.api.getApiInterface();eb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Ub=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());so(this,a)};
m.Sb=function(a){so(this,{playbackQuality:a})};
m.Tb=function(a){so(this,{playbackRate:a})};
m.Qb=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Wb=function(){so(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Vb=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());so(this,a)};
m.Xb=function(){var a={sphericalProperties:this.api.getSphericalProperties()};so(this,a)};
m.dispose=function(){qo.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function xo(a){I.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.mb,this)}
v(xo,I);m=xo.prototype;m.start=function(){this.started||this.h||(this.started=!0,this.connection.ia("RECEIVING"))};
m.ia=function(a,b){this.started&&!this.h&&this.connection.ia(a,b)};
m.mb=function(a,b,c){if(this.started&&!this.h){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=yo(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=zo(a,c))&&this.ia(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Rb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Rb=function(a,b){this.started&&!this.h&&this.connection.ia(a,this.Ma(a,b))};
m.Ma=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.G=function(){var a=this.connection;a.h||Tf(a.i,"command",this.mb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);I.prototype.G.call(this)};function Ao(a,b){xo.call(this,b);this.api=a;this.start()}
v(Ao,xo);Ao.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Ao.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function yo(a,b){switch(a){case "loadVideoById":return a=uo(b),[a];case "cueVideoById":return a=uo(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=vo(b),[a];case "cuePlaylist":return a=vo(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function zo(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ao.prototype.Ma=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return xo.prototype.Ma.call(this,a,b)};
Ao.prototype.G=function(){xo.prototype.G.call(this);delete this.api};function Bo(a){a=void 0===a?!1:a;I.call(this);this.i=new K(a);Wd(this,Ua(Ud,this.i))}
D(Bo,I);Bo.prototype.subscribe=function(a,b,c){return this.h?0:this.i.subscribe(a,b,c)};
Bo.prototype.l=function(a,b){this.h||this.i.ha.apply(this.i,arguments)};function Co(a,b,c){Bo.call(this);this.j=a;this.destination=b;this.id=c}
v(Co,Bo);Co.prototype.ia=function(a,b){this.h||this.j.ia(this.destination,this.id,a,b)};
Co.prototype.G=function(){this.destination=this.j=null;Bo.prototype.G.call(this)};function Do(a,b,c){I.call(this);this.destination=a;this.origin=c;this.i=Kg(window,"message",this.j.bind(this));this.connection=new Co(this,a,b);Wd(this,Ua(Ud,this.connection))}
v(Do,I);Do.prototype.ia=function(a,b,c,d){this.h||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(tf(a),this.origin))};
Do.prototype.j=function(a){var b;if(b=!this.h)if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h||c.l("command",b.command,b.data,a.origin))}};
Do.prototype.G=function(){Lg(this.i);this.destination=null;I.prototype.G.call(this)};function Eo(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ob(b);this.assets=a.assets||{};this.attrs=a.attrs||ob(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Eo.prototype.clone=function(){var a=new Eo,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ka(c)?a[b]=ob(c):a[b]=c}return a};var Fo=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Go(a){a=a||"";if(window.spf){var b=a.match(Fo);spf.style.load(a,b?b[1]:"",void 0)}else Ho(a)}
function Ho(a){var b=Io(a),c=document.getElementById(b),d=c&&Nn(c,"loaded");d||c&&!d||(c=Jo(a,b,function(){Nn(c,"loaded")||(Ln(c),Uh(b),Ng(Ua(Vh,b),0))}))}
function Jo(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=rf(a);ac(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Io(a){var b=xd(document,"A");wb("This URL is never added to the DOM");$b(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+ec(a)}
;function Ko(){I.call(this);this.i=[]}
v(Ko,I);Ko.prototype.G=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.Za,void 0)}I.prototype.G.call(this)};function Lo(){Ko.apply(this,arguments)}
v(Lo,Ko);function Mo(a,b,c,d){I.call(this);var e=this;this.H=b;this.webPlayerContextConfig=d;this.Ia=!1;this.api={};this.la=this.o=null;this.N=new K;this.i={};this.Y=this.va=this.elementId=this.Ja=this.config=null;this.R=!1;this.l=this.B=null;this.wa={};this.tb=["onReady"];this.lastError=null;this.Ya=NaN;this.F={};this.ub=new Lo(this);this.ka=0;this.j=this.m=a;Wd(this,Ua(Ud,this.N));No(this);Oo(this);Wd(this,Ua(Ud,this.ub));c?this.ka=Ng(function(){e.loadNewVideoConfig(c)},0):d&&(Po(this),Qo(this))}
v(Mo,I);m=Mo.prototype;m.getId=function(){return this.H};
m.loadNewVideoConfig=function(a){if(!this.h){this.ka&&(Og(this.ka),this.ka=0);var b=a||{};b instanceof Eo||(b=new Eo(b));this.config=b;this.setConfig(a);Qo(this);this.isReady()&&Ro(this)}};
function Po(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.H,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.H:a.config.attrs.id=a.H);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Ja=a;this.config=So(a);Po(this);this.va||(this.va=To(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Gd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Gd(Number(a)||a))};
function Ro(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function Uo(a){var b=!0,c=Vo(a);c&&a.config&&(a=Wo(a),b=Nn(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function Qo(a){if(!a.h&&!a.R){var b=Uo(a);if(b&&"html5"===(Vo(a)?"html5":null))a.Y="html5",a.isReady()||Xo(a);else if(Yo(a),a.Y="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Xo(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=Zo(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?So(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);Xo(a)};
a.R=!0;b?a.B():(Rn(Wo(a),a.B),(b=$o(a))&&Go(b),ap(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function Vo(a){var b=td(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Xo(a){var b;if(!a.h){var c=Vo(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.R=!1,!Zo(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||bp(a)):a.Ya=Ng(function(){Xo(a)},50)}}
function bp(a){No(a);a.Ia=!0;var b=Vo(a);if(b){a.o=cp(a,b,"addEventListener");a.la=cp(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=cp(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.o&&a.o(g,a.i[g]);Ro(a);a.va&&a.va(a.api);a.N.ha("onReady",a.api)}
function cp(a,b,c){var d=b[c];return function(){var e=Da.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Tl(f))}}}
function No(a){a.Ia=!1;if(a.la)for(var b in a.i)a.i.hasOwnProperty(b)&&a.la(b,a.i[b]);for(var c in a.F)a.F.hasOwnProperty(c)&&Og(Number(c));a.F={};a.o=null;a.la=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ja};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ia};
function Oo(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Uh("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Uh("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Uh("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=To(this,b);d&&(0<=$a(this.tb,a)||this.i[a]||(b=dp(this,a),this.o&&this.o(a,b)),this.N.subscribe(a,d),"onReady"===a&&this.isReady()&&Ng(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h||(b=To(this,b))&&Tf(this.N,a,b)};
function To(a,b){var c=b;if("string"===typeof b){if(a.wa[b])return a.wa[b];c=function(){var d=Da.apply(0,arguments),e=C(b);if(e)try{e.apply(y,d)}catch(f){Ul(f)}};
a.wa[b]=c}return c?c:null}
function dp(a,b){var c="ytPlayer"+b+a.H;a.i[b]=c;y[c]=function(d){var e=Ng(function(){if(!a.h){a.N.ha(b,d);var f=a.F,g=String(e);g in f&&delete f[g]}},0);
lb(a.F,String(e))};
return c}
m.getPlayerType=function(){return this.Y||(Vo(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function Yo(a){a.cancel();No(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Vo(a);b&&(Uo(a)||!ap(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&Xn(Wo(this),this.B);Og(this.Ya);this.R=!1};
m.G=function(){Yo(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Ul(b)}this.wa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Ja=this.config=this.api=null;delete this.m;delete this.j;I.prototype.G.call(this)};
function ap(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Wo(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function $o(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Zo(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===fh(d||"","&")[b]}
function So(a){for(var b={},c=u(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ob(e):e}return b}
;var ep={},fp="player_uid_"+(1E9*Math.random()>>>0);function gp(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?td(d):d;var e=fp+"_"+Oa(d),f=ep[e];if(f&&c)return hp(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Mo(d,e,a,b);ep[e]=f;Uh("player-added",f.api);Wd(f,function(){delete ep[f.getId()]});
return f.api}
function hp(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ip=null,jp=null,kp=null;function lp(){var a=ip.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function mp(a,b,c){a="ST-"+ec(a).toString(36);b=b?jc(b):"";c=c||5;dm()&&ui(a,b,c)}
;function np(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=hc(window.location.href);g&&f.push(g);g=hc(d);if(0<=$a(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),$b(f,d),d=f.href),d){g=d.match(fc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:ym()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&mp(d,b,k)}else mp(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=kc(a,l)+n;var t=void 0===t?od:t;a:{t=void 0===t?od:t;for(l=0;l<t.length;++l)if(n=t[l],n instanceof md&&n.isValid(a)){t=new kd(a,id);break a}t=void 0}c.href=pd(t||ld)}return!0}
;B("yt.setConfig",L,void 0);B("yt.config.set",L,void 0);B("yt.setMsg",xg,void 0);B("yt.msgs.set",xg,void 0);B("yt.logging.errors.log",Ul,void 0);
B("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}lm(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=kh(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));L("FORCE_CSI_ON_GEL",!0);
c=["ol"];hn("").info.actionType="embed";c&&L("TIMING_AFT_KEYS",c);L("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&zn(d,c[d]);zn("is_nav",1);(d=ym())&&zn("csn",d);(d=F("PREVIOUS_ACTION",void 0))&&!un()&&zn("pa",d);d=cn();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&zn("p",c);e&&zn("t",e);zn("yt_vis",Cn());zn("yt_lt","cold");c=Zm();if(e=an())Z("srt",c.responseStart),1!==d.prerender&&(zn("yt_sts","n",void 0),Z("_start",e,void 0));d=fn();0<d&&Z("fpt",d);d=
Zm();d.isPerformanceNavigationTiming&&zn("pnt",1,void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=an()&&0<d.connectEnd-
d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));W&&W.getEntriesByType&&En();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in Wm)Wm.hasOwnProperty(f)&&(c=Wm[f],Dn(f,c)&&d.push(c));for(f=0;f<d.length;f++)zn("rc",d[f]);if(un(void 0)){f={actionType:on[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:on[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=ym())f.clientScreenNonce=d;d=dn(void 0);c=bn(void 0).cttAuthInfo;
mn().info(f,d,c)}f=cn();c=Ym();if("cold"===f.yt_lt&&(d=wn(),e=d.gelTicks?d.gelTicks:d.gelTicks={},d=d.gelInfos?d.gelInfos:d.gelInfos={},un())){for(var g in c)"tick_"+g in e||vn(g,c[g]);g=yn();c=dn();e=bn().cttAuthInfo;var h={},k=!1,l;for(l in f)if(!("info_"+l in d)){var n=xn(l,f[l]);n&&(Km(g,n),Km(h,n),k=!0)}k&&mn().info(h,c,e)}B("ytglobal.timingready_",!0,void 0);An();(l=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in l?(l=l.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
l.serializedForcedExperimentIds||(g=kh(),g.forced_experiments&&(l.serializedForcedExperimentIds=g.forced_experiments)),ip=gp(a,l,!1)):ip=gp(a);ip.addEventListener("onVideoDataChange",lp);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?kp=new wo(ip):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(jp=new Do(window.parent,a,b),kp=new Ao(ip,jp.connection));$n();M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?zl():il());M("embeds_enable_ua_ch_polyfill")&&oo()},
void 0);
var op=tg(function(){Bn();var a=wi.getInstance(),b=!!((zi("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&$e(document.body,"exp-invert-logo"))if(c&&!$e(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!$e(d,"inverted-hdpi")){var e=Ye(d);Ze(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&$e(document.body,"inverted-hdpi")&&af();if(b!=c){b="f"+(Math.floor(119/31)+1);d=zi(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete vi[b]:(c=d.toString(16),vi[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in vi)d.push(f+"="+encodeURIComponent(String(vi[f])));ui(b,d.join("&"),63072E3,a.i,c)}Gn.h||(Gn.h=new Gn);a=Gn.h;f=16623;var g=void 0===g?{}:g;Object.values(Wl).includes(f)||(Tl(new Si("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.u=[];a.o=[];g.eb?Jn(a,f,g):Kn(a,f,g)}),pp=tg(function(){ip&&
ip.sendAbandonmentPing&&ip.sendAbandonmentPing();
F("PL_ATT")&&go.dispose();for(var a=0,b=Yn.length;a<b;a++)Vg.aa(Yn[a]);Yn.length=0;Wn("//static.doubleclick.net/instream/ad_status.js");Zn=!1;L("DCLKSTAT",0);(0,Vd)(kp,jp);ip&&(ip.removeEventListener("onVideoDataChange",lp),ip.destroy())});
window.addEventListener?(window.addEventListener("load",op),window.addEventListener("unload",pp)):window.attachEvent&&(window.attachEvent("onload",op),window.attachEvent("onunload",pp));Va("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||ho);Va("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||io);Va("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||ao);
Va("yt.player.exports.navigate",C("yt.player.exports.navigate")||np);Va("yt.util.activity.init",C("yt.util.activity.init")||Xg);Va("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||$g);Va("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||Yg);}).call(this);
