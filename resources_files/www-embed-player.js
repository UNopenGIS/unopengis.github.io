(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ja(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var oa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||oa});
var qa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if(typeof Object.setPrototypeOf=="function")sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function x(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function xa(){this.B=!1;this.u=null;this.i=void 0;this.h=1;this.D=this.o=0;this.K=this.j=null}
function ya(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
xa.prototype.G=function(a){this.i=a};
function za(a,b){a.j={exception:b,dd:!0};a.h=a.o||a.D}
xa.prototype.return=function(a){this.j={return:a};this.h=this.D};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.F=function(a){this.h=a};
function Aa(a,b,c){a.o=b;c!=void 0&&(a.D=c)}
function Ba(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.dd?a.h=a.o||a.D:b.F!=void 0&&a.D<b.F?(a.h=b.F,a.j=null):a.h=a.D:a.h=0}
function Da(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.u;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.u=null,za(a.h,g),Ha(a)}a.h.u=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.dd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ya(a.h);a.h.u?b=Ga(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ha(a));return b};
this.throw=function(b){ya(a.h);a.h.u?b=Ga(a,a.h.u["throw"],b,a.h.G):(za(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ja(new Ia(new Da(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ra});
v("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.D()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.D=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.W),reject:g(this.D)}};
b.prototype.W=function(g){if(g===this)this.D(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ha(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.V(g):this.u(g)}};
b.prototype.V=function(g){var h=void 0;try{h=g.then}catch(k){this.D(k);return}typeof h=="function"?this.xa(h,g):this.u(g)};
b.prototype.D=function(g){this.G(2,g)};
b.prototype.u=function(g){this.G(1,g)};
b.prototype.G=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ea();this.K()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=da.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.B)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ha=function(g){var h=this.o();g.Vb(h.resolve,h.reject)};
b.prototype.xa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(u){try{l(r(u))}catch(y){m(y)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Vb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Vb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).Vb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(y){r[u]=y;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Vb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||wa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&na(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
v("globalThis",function(a){return a||da});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
v("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ma=Ma||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a,b){var c=F("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Pa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(eb===void 0){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){D.console&&D.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ja([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.he=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof jb)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Yb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function $b(a){var b,c;return(a=(c=(b=a.document).querySelector)==null?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=kb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&a.stack.indexOf(a.toString())==0||(c+=typeof a==="string"?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];(e=uc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){return{fieldType:2,fieldName:a}}
function G(a){return{fieldType:3,fieldName:a}}
;function zc(a){this.h=a}
;function Ac(a,b,c){this.o=a;this.j=b;this.fields=c||[];this.h=new Map}
function Bc(a){return a.fields.map(function(b){return b.fieldType})}
function Cc(a){return a.fields.map(function(b){return b.fieldName})}
p=Ac.prototype;p.Fd=function(a){var b=C.apply(1,arguments),c=this.uc(b);c?c.push(new zc(a)):this.rd(a,b)};
p.rd=function(a){var b=this.Nc(C.apply(1,arguments));this.h.set(b,[new zc(a)])};
p.uc=function(){var a=this.Nc(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.Vd=function(){var a=this.uc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Nc=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function Dc(a,b){Ac.call(this,a,3,b)}
x(Dc,Ac);Dc.prototype.i=function(a){var b=C.apply(1,arguments),c=0,d=this.Vd(b);d&&(c=d.h);this.rd(c+a,b)};function Ec(a,b){Ac.call(this,a,2,b)}
x(Ec,Ac);Ec.prototype.record=function(a){this.Fd(a,C.apply(1,arguments))};function Fc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Gc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Gc.apply(null,d):Fc(d)}}
;function I(){this.ia=this.ia;this.D=this.D}
I.prototype.ia=!1;I.prototype.dispose=function(){this.ia||(this.ia=!0,this.ba())};
I.prototype[Symbol.dispose]=function(){this.dispose()};
function Hc(a,b){a.addOnDisposeCallback(Ya(Fc,b))}
I.prototype.addOnDisposeCallback=function(a,b){this.ia?b!==void 0?a.call(b):a():(this.D||(this.D=[]),b&&(a=a.bind(b)),this.D.push(a))};
I.prototype.ba=function(){if(this.D)for(;this.D.length;)this.D.shift()()};function Ic(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ic.prototype.stopPropagation=function(){this.j=!0};
Ic.prototype.preventDefault=function(){this.defaultPrevented=!0};var Jc=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();var Kc=Oa(610401301,!1),Lc=Oa(188588736,!0),Mc=Oa(645172343,Oa(1,!0));function Nc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Oc,Pc=D.navigator;Oc=Pc?Pc.userAgentData||null:null;function Qc(a){return Kc?Oc?Oc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Nc().indexOf(a)!=-1}
;function Rc(){return Kc?!!Oc&&Oc.brands.length>0:!1}
function Sc(){return Rc()?!1:J("Opera")}
function Tc(){return J("Firefox")||J("FxiOS")}
function Uc(){return Rc()?Qc("Chromium"):(J("Chrome")||J("CriOS"))&&!(Rc()?0:J("Edge"))||J("Silk")}
;function Vc(){return Kc?!!Oc&&!!Oc.platform:!1}
function Wc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;var Xc=Sc(),Yc=Rc()?!1:J("Trident")||J("MSIE"),Zc=J("Edge"),$c=J("Gecko")&&!(Nc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),ad=Nc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");ad&&J("Mobile");Vc()||J("Macintosh");Vc()||J("Windows");(Vc()?Oc.platform==="Linux":J("Linux"))||Vc()||J("CrOS");var bd=Vc()?Oc.platform==="Android":J("Android");Wc();J("iPad");J("iPod");Wc()||J("iPad")||J("iPod");Nc().toLowerCase().indexOf("kaios");function cd(a,b){Ic.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(cd,Ic);
cd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&cd.Aa.preventDefault.call(this)};
cd.prototype.stopPropagation=function(){cd.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
cd.prototype.preventDefault=function(){cd.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dd="closure_listenable_"+(Math.random()*1E6|0);var ed=0;function fd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ac=e;this.key=++ed;this.Lb=this.Ub=!1}
function gd(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.ac=null}
;function hd(a){this.src=a;this.listeners={};this.h=0}
hd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=id(a,b,d,e);g>-1?(b=a[g],c||(b.Ub=!1)):(b=new fd(b,this.src,f,!!d,e),b.Ub=c,a.push(b));return b};
hd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=id(e,b,c,d);return b>-1?(gd(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function jd(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(gd(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function id(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.ac==d)return e}return-1}
;var kd="closure_lm_"+(Math.random()*1E6|0),ld={},md=0;function nd(a,b,c,d,e){if(d&&d.once)od(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):qd(a,b,c,!1,d,e)}
function qd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=rd(a);h||(a[kd]=h=new hd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=sd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Jc||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(td(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");md++}}
function sd(){function a(c){return b.call(a.src,a.listener,c)}
var b=ud;return a}
function od(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)od(a,b[f],c,d,e);else c=pd(c),a&&a[dd]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):qd(a,b,c,!0,d,e)}
function vd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)vd(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=pd(c),a&&a[dd])?a.h.remove(String(b),c,d,e):a&&(a=rd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=id(b,c,d,e)),(c=a>-1?b[a]:null)&&wd(c))}
function wd(a){if(typeof a!=="number"&&a&&!a.Lb){var b=a.src;if(b&&b[dd])jd(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(td(c),d):b.addListener&&b.removeListener&&b.removeListener(d);md--;(c=rd(b))?(jd(c,a),c.h==0&&(c.src=null,b[kd]=null)):gd(a)}}}
function td(a){return a in ld?ld[a]:ld[a]="on"+a}
function ud(a,b){if(a.Lb)a=!0;else{b=new cd(b,this);var c=a.listener,d=a.ac||a.src;a.Ub&&wd(a);a=c.call(d,b)}return a}
function rd(a){a=a[kd];return a instanceof hd?a:null}
var xd="__closure_events_fn_"+(Math.random()*1E9>>>0);function pd(a){if(typeof a==="function")return a;a[xd]||(a[xd]=function(b){return a.handleEvent(b)});
return a[xd]}
;function yd(){I.call(this);this.h=new hd(this);this.Wa=this;this.ea=null}
$a(yd,I);yd.prototype[dd]=!0;p=yd.prototype;p.addEventListener=function(a,b,c,d){nd(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){vd(this,a,b,c,d)};
function zd(a,b){var c=a.ea;if(c){var d=[];for(var e=1;c;c=c.ea)d.push(c),++e}a=a.Wa;c=b.type||b;typeof b==="string"?b=new Ic(b,a):b instanceof Ic?b.target=b.target||a:(e=b,b=new Ic(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Ad(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ad(g,c,!0,b)&&e,b.j||(e=Ad(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ad(g,c,!1,b)&&e}
p.ba=function(){yd.Aa.ba.call(this);this.removeAllListeners();this.ea=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,gd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Ad(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.ac||g.src;g.Ub&&jd(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Bd(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Bd.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Cd(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Dd(){}
function Ed(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Fd(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=Fd.prototype;p.clone=function(){return new Fd(this.x,this.y)};
p.equals=function(a){return a instanceof Fd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Gd(a,b){this.width=a;this.height=b}
p=Gd.prototype;p.clone=function(){return new Gd(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Hd(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Id(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Jd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Kd;function Ld(){var a=D.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=Id("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Rc;c.Rc=null;e()}};
return function(e){d.next={Rc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function Md(a){D.setTimeout(function(){throw a;},0)}
;function Nd(){this.i=this.h=null}
Nd.prototype.add=function(a,b){var c=Od.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Nd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Od=new Bd(function(){return new Pd},function(a){return a.reset()});
function Pd(){this.next=this.scope=this.h=null}
Pd.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Pd.prototype.reset=function(){this.next=this.scope=this.h=null};var Qd,Rd=!1,Sd=new Nd;function Td(a,b){Qd||Ud();Rd||(Qd(),Rd=!0);Sd.add(a,b)}
function Ud(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);Qd=function(){a.then(Vd)}}else Qd=function(){var b=Vd;
typeof D.setImmediate!=="function"||D.Window&&D.Window.prototype&&D.Window.prototype.setImmediate==D.setImmediate?(Kd||(Kd=Ld()),Kd(b)):D.setImmediate(b)}}
function Vd(){for(var a;a=Sd.remove();){try{a.h.call(a.scope)}catch(b){Md(b)}Cd(Od,a)}Rd=!1}
;function Wd(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.D=this.u=!1;if(a!=Dd)try{var b=this;a.call(void 0,function(c){Xd(b,2,c)},function(c){Xd(b,3,c)})}catch(c){Xd(this,3,c)}}
function Yd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Yd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Zd=new Bd(function(){return new Yd},function(a){a.reset()});
function $d(a,b,c){var d=Zd.get();d.i=a;d.h=b;d.context=c;return d}
function ae(a){return new Wd(function(b,c){c(a)})}
Wd.prototype.then=function(a,b,c){return be(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Wd.prototype.$goog_Thenable=!0;p=Wd.prototype;p.lc=function(a,b){return be(this,null,a,b)};
p.catch=Wd.prototype.lc;p.cancel=function(a){if(this.h==0){var b=new ce(a);Td(function(){de(this,b)},this)}};
function de(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?de(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):ee(c),fe(c,e,3,b)))}a.j=null}else Xd(a,3,b)}
function ge(a,b){a.i||a.h!=2&&a.h!=3||he(a);a.o?a.o.next=b:a.i=b;a.o=b}
function be(a,b,c,d){var e=$d(null,null,null);e.child=new Wd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ce?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;ge(a,e);return e.child}
p.Ye=function(a){this.h=0;Xd(this,2,a)};
p.Ze=function(a){this.h=0;Xd(this,3,a)};
function Xd(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ye,f=a.Ze;if(d instanceof Wd){ge(d,$d(e||Dd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){ie(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,he(a),b!=3||c instanceof ce||je(a,c))}}
function ie(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function he(a){a.u||(a.u=!0,Td(a.Qd,a))}
function ee(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.Qd=function(){for(var a;a=ee(this);)fe(this,a,this.h,this.B);this.u=!1};
function fe(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.D;a=a.j)a.D=!1;if(b.child)b.child.j=null,ke(b,c,d);else try{b.j?b.i.call(b.context):ke(b,c,d)}catch(e){le.call(null,e)}Cd(Zd,b)}
function ke(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function je(a,b){a.D=!0;Td(function(){a.D&&le.call(null,b)})}
var le=Md;function ce(a){bb.call(this,a)}
$a(ce,bb);ce.prototype.name="cancel";function me(a,b){yd.call(this);this.j=a||1;this.i=b||D;this.o=Xa(this.Ve,this);this.u=Za()}
$a(me,yd);p=me.prototype;p.enabled=!1;p.Ea=null;p.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
p.Ve=function(){if(this.enabled){var a=Za()-this.u;a>0&&a<this.j*.8?this.Ea=this.i.setTimeout(this.o,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),zd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.o,this.j),this.u=Za())};
p.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
p.ba=function(){me.Aa.ba.call(this);this.stop();delete this.i};
function ne(a,b,c){if(typeof a==="function")c&&(a=Xa(a,c));else if(a&&typeof a.handleEvent=="function")a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:D.setTimeout(a,b||0)}
;function oe(a){I.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new me(this.flushInterval);this.h.listen("tick",this.nc,!1,this);Hc(this,this.h)}
x(oe,I);p=oe.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function pe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.nc()}
p.nc=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);qe(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Qa=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Dc(a,b))};
p.Ab=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ec(a,b))};
function re(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.xb=function(a){this.Dd(a,1,C.apply(1,arguments))};
p.Dd=function(a,b){var c=C.apply(2,arguments),d=re(this,a);d&&d instanceof Dc&&(d.i(b,c),pe(this))};
p.record=function(a,b){var c=C.apply(2,arguments),d=re(this,a);d&&d instanceof Ec&&(d.record(b,c),pe(this))};
function qe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function se(a){this.h=a;this.h.Qa("/client_streamz/bg/fic",G("ke"))}
function te(a){this.h=a;this.h.Qa("/client_streamz/bg/fiec",G("rk"),G("ke"),yc("ec"))}
function ue(a){this.h=a;this.h.Ab("/client_streamz/bg/fil",G("rk"),G("ke"))}
ue.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ve(a){this.h=a;this.h.Qa("/client_streamz/bg/fcc",yc("ph"),G("ke"))}
function we(a){this.h=a;this.h.Ab("/client_streamz/bg/fcd",yc("ph"),G("ke"))}
we.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function xe(a){this.h=a;this.h.Qa("/client_streamz/bg/fsc",G("rk"),G("ke"))}
function ye(a){this.h=a;this.h.Ab("/client_streamz/bg/fsl",G("rk"),G("ke"))}
ye.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function ze(a){this.h=a;this.h.Ab("/client_streamz/bg/wrl",G("mn"),yc("ac"),yc("sc"),G("rk"),G("mk"))}
ze.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Ae(a){this.h=a;this.h.Ab("/client_streamz/bg/el",G("en"),G("bk"),G("rk"),G("mk"))}
Ae.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/el",a,b,c,d,e)};
function Be(a){this.h=a;this.h.Qa("/client_streamz/bg/cec",yc("ec"),G("bk"),G("rk"),G("mk"))}
function Ce(a){this.h=a;this.h.Qa("/client_streamz/bg/po/csc",yc("cs"),G("rk"),G("mk"))}
function De(a){this.h=a;this.h.Qa("/client_streamz/bg/po/ctav",G("av"),G("rk"),G("mk"))}
function Ee(a){this.h=a;this.h.Qa("/client_streamz/bg/po/cwsc",G("su"),G("rk"),G("mk"))}
;Tc();var Fe=Wc()||J("iPod"),Ge=J("iPad");!J("Android")||Uc()||Tc()||Sc()||J("Silk");Uc();var He=J("Safari")&&!(Uc()||(Rc()?0:J("Coast"))||Sc()||(Rc()?0:J("Edge"))||(Rc()?Qc("Microsoft Edge"):J("Edg/"))||(Rc()?Qc("Opera"):J("OPR"))||Tc()||J("Silk")||J("Android"))&&!(Wc()||J("iPad")||J("iPod"));var Ie={},Je=null;function Ke(a,b){Qa(a);b===void 0&&(b=0);Le();b=Ie[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Me(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Ne(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ne(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Je[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Le();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Le(){if(!Je){Je={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Ie[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Je[f]===void 0&&(Je[f]=e)}}}}
;var Oe=typeof Uint8Array!=="undefined",Pe=!Yc&&typeof btoa==="function";function Qe(a){if(!Pe)return Ke(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Re=/[-_.]/g,Se={"-":"+",_:"/",".":"="};function Te(a){return Se[a]||""}
function Ue(a){return Oe&&a!=null&&a instanceof Uint8Array}
var Ve={};var We;function Xe(a){if(a!==Ve)throw Error("illegal external caller");}
function Ye(a,b){Xe(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Ye.prototype.sizeBytes=function(){Xe(Ve);var a=this.h;if(a!=null&&!Ue(a))if(typeof a==="string")if(Pe){Re.test(a)&&(a=a.replace(Re,Te));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Me(a);else Pa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};var Ze;function $e(){var a=Error();ec(a,"incident");Md(a)}
function af(a){a=Error(a);ec(a,"warning");return a}
;function bf(){return typeof BigInt==="function"}
;function cf(a){return Array.prototype.slice.call(a)}
;var df=typeof Symbol==="function"&&typeof Symbol()==="symbol";function ef(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var ff=ef(),gf=ef("2ex"),hf=ef("1oa");Math.max.apply(Math,ma(Object.values({yg:1,wg:2,vg:4,Bg:8,Ag:16,zg:32,qf:64,Dg:128,ug:256,tg:512,xg:1024,vf:2048,Cg:4096,wf:8192})));var jf=df?function(a,b){a[ff]|=b}:function(a,b){a.h!==void 0?a.h|=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},kf=df?function(a){return a[ff]|0}:function(a){return a.h|0},lf=df?function(a){return a[ff]}:function(a){return a.h},mf=df?function(a,b){a[ff]=b}:function(a,b){a.h!==void 0?a.h=b:Object.defineProperties(a,{h:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function nf(a,b){mf(b,(a|0)&-14591)}
function of(a,b){mf(b,(a|34)&-14557)}
;var pf={},qf={};function rf(a){return!(!a||typeof a!=="object"||a.h!==qf)}
function sf(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function tf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=kf(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;mf(a,d|1);return!0}
var uf,vf=[];mf(vf,55);uf=Object.freeze(vf);function wf(a){if(a&2)throw Error();}
var xf=Object.freeze({});Object.freeze({});var yf=Object.freeze({});var zf=0,Af=0;function Bf(a){var b=a>>>0;zf=b;Af=(a-b)/4294967296>>>0}
function Cf(a){if(a<0){Bf(0-a);var b=w(Df(zf,Af));a=b.next().value;b=b.next().value;zf=a>>>0;Af=b>>>0}else Bf(a)}
function Ef(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else bf()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ff(c)+Ff(a));return c}
function Ff(a){a=String(a);return"0000000".slice(a.length)+a}
function Gf(){var a=zf,b=Af;b&2147483648?bf()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Df(a,b)),a=b.next().value,b=b.next().value,a="-"+Ef(a,b)):a=Ef(a,b);return a}
function Df(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Hf(a){a.Og=!0;return a}
;var If=Hf(function(a){return typeof a==="number"}),Jf=Hf(function(a){return typeof a==="string"}),Kf=Hf(function(a){return typeof a==="boolean"});
function Lf(){var a=Mf;return Hf(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;var Nf=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function Of(a){var b=a;if(Jf(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(If(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Nf?BigInt(a):a=Kf(a)?a?"1":"0":Jf(a)?a.trim()||"0":String(a)}
var Uf=Hf(function(a){return Nf?a>=Pf&&a<=Qf:a[0]==="-"?Rf(a,Sf):Rf(a,Tf)}),Sf=Number.MIN_SAFE_INTEGER.toString(),Pf=Nf?BigInt(Number.MIN_SAFE_INTEGER):void 0,Tf=Number.MAX_SAFE_INTEGER.toString(),Qf=Nf?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Rf(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;function Vf(a){return a.displayName||a.name||"unknown type name"}
function Wf(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Xf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Yf(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:Xf.test(a)}
function Zf(a){if(typeof a!=="number")throw af("int32");if(!Number.isFinite(a))throw af("int32");return a|0}
function $f(a){return a==null?a:Zf(a)}
function ag(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function bg(a){var b=b===void 0?0:b;if(!Yf(a))throw af("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return cg(a);case "bigint":return String(BigInt.asIntN(64,a));default:return dg(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Of(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=bf()?Of(BigInt.asIntN(64,BigInt(a))):Of(eg(a))),a;case "bigint":return Of(BigInt.asIntN(64,a));default:return Of(fg(a))}case 0:switch(c){case "string":return cg(a);
case "bigint":return Of(BigInt.asIntN(64,a));default:return fg(a)}default:return Xb(b,"Unknown format requested type for int64")}}
function gg(a){return a==null?a:bg(a)}
function hg(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function eg(a){a.indexOf(".");if(hg(a))return a;if(a.length<16)Cf(Number(a));else if(bf())a=BigInt(a),zf=Number(a&BigInt(4294967295))>>>0,Af=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Af=zf=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Af*=1E6,zf=zf*1E6+d,zf>=4294967296&&(Af+=Math.trunc(zf/4294967296),Af>>>=0,zf>>>=0);b&&(b=w(Df(zf,Af)),a=b.next().value,b=b.next().value,zf=a,Af=b)}return Gf()}
function fg(a){Yf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){Cf(a);var b=zf,c=Af;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function dg(a){Yf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);hg(b)?a=b:(Cf(a),a=Gf())}return a}
function cg(a){Yf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return eg(a)}
function ig(a){if(a==null)return a;if(typeof a==="bigint")return Uf(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=Uf(a)?Number(a):String(a)),a;if(Yf(a))return typeof a==="number"?fg(a):cg(a)}
function jg(a){if(typeof a!=="string")throw Error();return a}
function kg(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function lg(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Vf(b)+" but got "+(a&&Vf(a.constructor)));}
function mg(a,b,c){if(a!=null&&typeof a==="object"&&a.Bc===pf)return a;if(Array.isArray(a)){var d=kf(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&mf(a,e);return new b(a)}}
;function ng(a){var b=og(a);if(b)return b;if(Math.random()>.01)return a;if(pg===void 0)if(typeof Proxy!=="function")pg=null;else try{pg=Proxy.toString().indexOf("[native code]")!==-1?Proxy:null}catch(c){pg=null}b=pg;if(!b)return a;b=new b(a,{set:function(c,d,e){qg();c[d]=e;return!0}});
rg(a,b);return b}
function qg(){$e()}
var sg=void 0,tg=void 0;function og(a){var b;return(b=sg)==null?void 0:b.get(a)}
function ug(a){var b;return((b=tg)==null?void 0:b.get(a))||a}
function rg(a,b){(sg||(sg=new WeakMap)).set(a,b);(tg||(tg=new WeakMap)).set(b,a)}
var pg=void 0;var vg;function wg(a,b){kf(b);vg=b;a=new a(b);vg=void 0;return a}
function K(a,b,c){a==null&&(a=vg);vg=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=kf(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(sf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}mf(a,d);return a}
;function xg(a,b){return yg(b)}
function yg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(tf(a,void 0,0))return}else{if(Ue(a))return Qe(a);if(a instanceof Ye){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=Qe(b)}}}return a}
;function zg(a,b,c){a=cf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Ag(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=tf(a,void 0,0)?void 0:e&&kf(a)&2?a:Bg(a,b,c,d!==void 0,e);else if(sf(a)){var f={},g;for(g in a)f[g]=Ag(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Bg(a,b,c,d,e){var f=d||c?kf(a):0;d=d?!!(f&32):void 0;a=cf(a);for(var g=0;g<a.length;g++)a[g]=Ag(a[g],b,c,d,e);c&&c(f,a);return a}
function Cg(a){return a.Bc===pf?a.toJSON():yg(a)}
;function Dg(a,b,c){c=c===void 0?of:c;if(a!=null){if(Oe&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=kf(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(mf(a,(d|34)&-12293),a):Bg(a,Dg,d&4?of:c,!0,!0)}a.Bc===pf&&(c=a.H,d=lf(c),a=d&2?a:wg(a.constructor,Eg(c,d,!0)));return a}}
function Eg(a,b,c){var d=c||b&2?of:nf,e=!!(b&32);a=zg(a,b,function(f){return Dg(f,e,d)});
jf(a,32|(c?2:0));return a}
function Fg(a){var b=a.H,c=lf(b);return c&2?wg(a.constructor,Eg(b,c,!1)):a}
;function Gg(a,b){a=a.H;return Hg(a,lf(a),b)}
function Ig(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Hg(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Ig(a,b,e,c)&&gf!=null){var g;a=(g=Ze)!=null?g:Ze={};g=a[gf]||0;g>=4||(a[gf]=g+1,$e())}return d}return Ig(a,b,e,c)}}
function Jg(a,b,c){var d=a.H,e=lf(d);wf(e);Kg(d,e,b,c);return a}
function Kg(a,b,c,d,e){sf(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Mc){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&mf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Lg(a){return Mg(a,Ng,11,!1)!==void 0}
function Og(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Pg(a,b,c){var d=a.H,e=lf(d);wf(e);if(b==null)return Kg(d,e,3),a;b=ug(b);if(!Array.isArray(b))throw af();var f=kf(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===yf||!1);if(!(4&f))for(f=21,h&&(b=cf(b),g=0,f=Qg(f,e),f=Rg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=cf(b),g=0,f=Qg(f,e),f=Rg(f,e,!0));f!==g&&mf(b,f);Kg(d,e,3,b);return a}
function Sg(a,b,c,d){a=a.H;var e=lf(a);wf(e);if(d==null){var f=Tg(a);if(Wg(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=Tg(a);var g=Wg(f,a,e,c);g!==b&&(g&&(e=Kg(a,e,g)),f.set(c,b))}Kg(a,e,b,d)}
function Tg(a){if(df){var b;return(b=a[hf])!=null?b:a[hf]=new Map}if(hf in a)return a[hf];b=new Map;Object.defineProperty(a,hf,{value:b});return b}
function Wg(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Hg(b,c,g)!=null&&(e!==0&&(c=Kg(b,c,e)),e=g)}a.set(d,e);return e}
function Mg(a,b,c,d){a=a.H;var e=lf(a),f=Hg(a,e,c,d);b=mg(f,b,e);b!==f&&b!=null&&Kg(a,e,c,b,d);return b}
function Xg(a,b,c,d){d=d===void 0?!1:d;b=Mg(a,b,c,d);if(b==null)return b;a=a.H;var e=lf(a);if(!(e&2)){var f=Fg(b);f!==b&&(b=f,Kg(a,e,c,b,d))}return b}
function Yg(a,b,c,d){d!=null?lg(d,b):d=void 0;return Jg(a,c,d)}
function Zg(a,b,c,d){var e=a.H,f=lf(e);wf(f);if(d==null)return Kg(e,f,c),a;d=ug(d);if(!Array.isArray(d))throw af();for(var g=kf(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===yf||!1),n=!0,r=!0,t=0;t<d.length;t++){var u=d[t];lg(u,b);k||(u=!!(kf(u.H)&2),n&&(n=!u),r&&(r=u))}k||(g|=5,g=n?g|8:g&-9,g=r?g|16:g&-17);if(m||l&&g!==h)d=cf(d),h=0,g=Qg(g,f),g=Rg(g,f,!0);g!==h&&mf(d,g);Kg(e,f,c,d);return a}
function Qg(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function Rg(a,b,c){32&b&&c||(a&=-33);return a}
function $g(a){a=Gg(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):Yf(a)?c==="string"?cg(a):b?dg(a):fg(a):void 0;return b}
function ah(a,b){return a!=null?a:b}
function bh(a,b){var c=c===void 0?"":c;a=Gg(a,b);return ah(a==null||typeof a==="string"?a:void 0,c)}
function ch(a){var b=0;b=b===void 0?0:b;a=Gg(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return ah(a,b)}
function dh(a,b,c){return Jg(a,b,kg(c))}
function eh(a,b,c){if(c!=null){if(!Number.isFinite(c))throw af("enum");c|=0}return Jg(a,b,c)}
;function fh(a){return a}
function gh(a){return a}
function hh(a,b,c,d){return ih(a,b,c,d,jh,kh)}
function lh(a,b,c,d){return ih(a,b,c,d,mh,nh)}
function ih(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=oh(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var u=m,y=c.length-1;y>=0;y--){var z=c[y];if(!(z==null||d&&y===c.length-1&&z===d)){z=y-b;var A=e(z,t)+f(n,r,u);A<l&&(a=1+z,l=A);n++;t--;u+=oh(z);r=Math.max(r,z)}}b=e(0,0)+f(n,r,u);b<l&&(a=0,l=b);if(d){n=h;r=g;u=m;t=k;for(var H in d)d=+H,isNaN(d)||d>=
1024||(n--,t++,u-=H.length,g=e(d,t)+f(n,r,u),g<l&&(a=1+d,l=g))}return a}
function nh(a,b,c){return c+a*3+(a>1?a-1:0)}
function mh(a,b){return(a>1?a-1:0)+(a-b)*4}
function kh(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function jh(a){return 40+4*a}
function oh(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var ph,qh;function L(a,b,c){this.H=K(a,b,c)}
p=L.prototype;p.toJSON=function(){return rh(this)};
p.serialize=function(a){try{return qh=!0,a&&(ph=a===gh||a!==fh&&a!==hh&&a!==lh?gh:a),JSON.stringify(rh(this),xg)}finally{a&&(ph=void 0),qh=!1}};
function sh(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");jf(b,32);return wg(a,b)}
p.clone=function(){var a=this.H,b=lf(a);return wg(this.constructor,Eg(a,b,!1))};
p.Bc=pf;p.toString=function(){try{return qh=!0,rh(this).toString()}finally{qh=!1}};
function rh(a){var b;qh?b=a.H:b=Bg(a.H,Cg,void 0,void 0,!1);var c=!qh;var d=Lc?void 0:a.constructor.Zg;var e=lf(c?a.H:b);if(a=b.length){var f=b[a-1],g=sf(f);g?a--:f=void 0;var h=+!!(e&512)-1,k=a-h,l=!!ph&&Mc&&!(e&512),m;e=(m=ph)!=null?m:gh;e=l?e(k,h,b,f):k;k=(m=l&&k!==e)?Array.prototype.slice.call(b,0,a):b;if(g||m){b:{var n=k;var r=f;g={};l=!1;if(m)for(var t=Math.max(0,e+h);t<n.length;t++){var u=n[t],y=t-h;u==null||tf(u,d,y)||rf(u)&&u.size===0||(n[t]=void 0,g[y]=u,l=!0)}if(r)for(var z in r)if(t=+z,
isNaN(t))g[z]=r[z];else if(u=r[z],Array.isArray(u)&&(tf(u,d,+z)||rf(u)&&u.size===0)&&(u=null),u==null&&(l=!0),m&&t<e){l=!0;u=t+h;for(y=n.length;y<=u;y++)n.push(void 0);n[u]=r[t]}else u!=null&&(g[z]=u);if(l){for(var A in g){r=g;break b}r=null}}n=r==null?f!=null:r!==f}m&&(a=k.length);for(;a>0;a--){A=a-1;z=k[A];A-=h;if(!(z==null||tf(z,d,A)||rf(z)&&z.size===0))break;var H=!0}if(k!==b||n||H){if(!m&&!c)k=Array.prototype.slice.call(k,0,a);else if(H||n||r)k.length=a;r&&k.push(r)}H=k}else H=b;return H}
;function th(a){this.H=K(a)}
x(th,L);function uh(a){this.H=K(a)}
x(uh,L);var vh=[1,2,3];function wh(a){this.H=K(a)}
x(wh,L);var xh=[1,2,3];function yh(a){this.H=K(a)}
x(yh,L);function zh(a){this.H=K(a)}
x(zh,L);function Ah(a){this.H=K(a)}
x(Ah,L);function Bh(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Ch(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],y=e[2],z=e[3],A=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var H=z^u&(y^z);var T=1518500249}else H=u^y^z,T=1859775393;else t<60?(H=u&y|z&(u|y),T=2400959708):(H=u^y^z,T=3395469782);H=((n<<5|n>>>27)&4294967295)+H+A+T+r[t]&4294967295;A=z;z=y;y=(u<<30|u>>>2)&4294967295;u=n;n=H}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+A&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],u=0,y=n.length;u<y;++u)t.push(n.charCodeAt(u));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var u=24;u>=0;u-=8)n[r++]=e[t]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Md:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function Dh(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Eh(Bh(d),a,c||null)].join(" "):null}
function Eh(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Db(d,function(h){e.push(h)}),Fh(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=Fh(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Fh(a){var b=Ch();b.update(a);return b.Md().toLowerCase()}
;var Gh={};function Hh(a){this.h=a||{cookie:""}}
p=Hh.prototype;p.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Jb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Ce;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Jb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Jb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Ih=new Hh(typeof document=="undefined"?null:document);function Jh(a){return!!Gh.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Kh(a){a=a===void 0?!1:a;var b=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;Jh(a)&&(b=b||D.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Hh(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Jh(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Lh(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new Hh(document)).get(b));return a?Dh(a,c,d):null}
function Mh(a,b){b=b===void 0?!1:b;var c=Bh(String(D.location.href)),d=[];if(Kh(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?D.__SAPISID:D.__APISID;e||typeof document==="undefined"||(e=new Hh(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Dh(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Jh(b)&&((b=Lh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),
(a=Lh("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Nh(a){this.H=K(a)}
x(Nh,L);function Oh(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
Oh.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Oh.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
Oh.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Oh.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Ph(a){this.H=K(a)}
x(Ph,L);function Qh(a){this.H=K(a)}
x(Qh,L);function Rh(a){this.h=this.i=this.j=a}
Rh.prototype.reset=function(){this.h=this.i=this.j};
Rh.prototype.getValue=function(){return this.i};function Sh(a){this.H=K(a)}
x(Sh,L);Sh.prototype.Zb=function(){return ch(this)};function Th(a){this.H=K(a)}
x(Th,L);function Uh(a){this.H=K(a)}
x(Uh,L);function Vh(a,b){Zg(a,Th,1,b)}
;function Ng(a){this.H=K(a)}
x(Ng,L);var Wh=["platform","platformVersion","architecture","model","uaFullVersion"],Xh=new Uh,Yh=null;function Zh(a,b){b=b===void 0?Wh:b;if(!Yh){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Th;f=dh(f,1,e.brand);return dh(f,2,e.version)});
Vh(Jg(Xh,2,Wf(a.mobile)),c);Yh=a.getHighEntropyValues(b)}var d=new Set(b);return Yh.then(function(e){var f=Xh.clone();d.has("platform")&&dh(f,3,e.platform);d.has("platformVersion")&&dh(f,4,e.platformVersion);d.has("architecture")&&dh(f,5,e.architecture);d.has("model")&&dh(f,6,e.model);d.has("uaFullVersion")&&dh(f,7,e.uaFullVersion);return f}).catch(function(){return Xh.clone()})}
;function $h(a){this.H=K(a)}
x($h,L);function ai(a){this.H=K(a,4)}
x(ai,L);function bi(a){this.H=K(a,35)}
x(bi,L);function ci(a){this.H=K(a,19)}
x(ci,L);ci.prototype.Mb=function(a){return eh(this,2,a)};function di(a){this.H=K(a,8)}
x(di,L);var ei=function(a){return function(b){return sh(a,b)}}(di);function fi(a){this.H=K(a)}
x(fi,L);var gi=new function(){this.ctor=fi;this.isRepeated=0;this.h=Xg;this.defaultValue=void 0};function hi(a){I.call(this);var b=this;this.componentId="";this.j=[];this.W="";this.pageId=null;this.ea=this.T=-1;this.experimentIds=null;this.K=this.u=0;this.ha=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Fb=a.Fb||function(){};
this.i=new ii(a.logSource,a.ab);this.network=a.network;this.vb=a.vb||null;this.bufferSize=1E3;this.B=a.af||null;this.sessionIndex=a.sessionIndex||null;this.Db=a.Db||!1;this.logger=null;this.withCredentials=!a.Uc;this.ab=a.ab||!1;this.G=typeof URLSearchParams!=="undefined"&&!!(new URL(ji())).searchParams&&!!(new URL(ji())).searchParams.set;var c=eh(new $h,1,1);ki(this.i,c);this.o=new Rh(1E4);a=li(this,a.Oc);this.h=new Oh(this.o.getValue(),a);this.V=new Oh(6E5,a);this.Db||this.V.start();this.ab||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.sc()}),document.addEventListener("pagehide",this.sc.bind(this)))}
x(hi,I);function li(a,b){return a.G?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=hi.prototype;p.ba=function(){this.sc();this.h.stop();this.V.stop();I.prototype.ba.call(this)};
p.log=function(a){if(this.G){a=a.clone();var b=this.ha++;a=Jg(a,21,gg(b));this.componentId&&dh(a,26,this.componentId);if($g(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Jg(b,1,gg(c))}ig(Gg(a,15))==null&&Jg(a,15,gg((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Yg(b,Nh,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.u+=b);this.j.push(a);this.Db||this.h.enabled||this.h.start()}};
p.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ea>d&&this.T<d)b&&b("throttled");else{this.network&&(typeof this.network.Zb==="function"?mi(this.i,this.network.Zb()):mi(this.i,0));var e=ni(this.i,this.j,this.u,this.K,this.vb);d={};var f=this.Fb();f&&(d.Authorization=f);this.B||(this.B=ji());try{var g=(new URL(this.B)).toString()}catch(k){g=(new URL(this.B,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.W===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.u=0;var h=e.serialize();d={url:g.toString(),body:h,Gg:1,od:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.o.reset();c.h.setInterval(c.o.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=ei(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=ah($g(l),m),k=k(m),k>0&&(c.T=Date.now(),c.ea=c.T+k),l=gi.ctor?gi.h(l,gi.ctor,175237375,!0):gi.h(l,175237375,null,!0),l=l===null?void 0:l)&&(k=-1,k=k===void 0?0:k,l=ah(ag(Gg(l,1)),k),l!==-1&&(c.o=new Rh(l<1?1:l),c.h.setInterval(c.o.getValue())))}a&&a();c.K=0};
h=function(k,l){var m,n=void 0===xf?2:5,r=e.H,t=lf(r),u=t,y=!(2&t),z=!!(2&u);t=z?1:n;y&&(y=!z);n=Hg(r,u,3);n=Array.isArray(n)?n:uf;var A=kf(n);z=!!(4&A);if(!z){var H=A;H===0&&(H=Qg(H,u));A=n;H|=1;var T=u,O=!!(2&H);O&&(T|=2);for(var ea=!O,Ea=!0,P=0,fa=0;P<A.length;P++){var ka=mg(A[P],bi,T);if(ka instanceof bi){if(!O){var pa=!!(kf(ka.H)&2);ea&&(ea=!pa);Ea&&(Ea=pa)}A[fa++]=ka}}fa<P&&(A.length=fa);H|=4;H=Ea?H|16:H&-17;H=ea?H|8:H&-9;mf(A,H);O&&Object.freeze(A);A=H}if(y&&!(8&A||!n.length&&(t===1||t===4&&
32&A))){Og(A)&&(n=cf(n),A=Qg(A,u),u=Kg(r,u,3,n));y=n;for(H=0;H<y.length;H++)T=y[H],O=Fg(T),T!==O&&(y[H]=O);A|=8;A=y.length?A&-17:A|16;mf(y,A)}t===1||t===4&&32&A?Og(A)||(u=A,r=!!(32&A),A|=!n.length||16&A&&(!z||r)?2:2048,A!==u&&mf(n,A),Object.freeze(n)):(z=t!==5?!1:!!(32&A)||Og(A)||!!og(n),(t===2||z)&&Og(A)&&(n=cf(n),A=Qg(A,u),A=Rg(A,u,!1),mf(n,A),u=Kg(r,u,3,n)),Og(A)||(r=A,A=Rg(A,u,!1),A!==r&&mf(n,A)),z&&(m=ng(n)));m=m||n;u=ig(Gg(e,14));r=c.o;r.h=Math.min(3E5,r.h*2);r.i=Math.min(3E5,r.h+Math.round((Math.random()-
.5)*.2*r.h));c.h.setInterval(c.o.getValue());k===401&&f&&(c.W=f);u&&(c.u+=u);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Db||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.K};
c.network&&c.network.send(d,g,h)}}}};
p.sc=function(){oi(this.i,!0);this.flush();oi(this.i,!1)};
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function ji(){return"https://play.google.com/log?format=json&hasfast=true"}
function ii(a,b){this.ab=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new ci;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));ki(this,new $h)}
ii.prototype.Mb=function(a){this.h.Mb(a);return this};
function ki(a,b){Yg(a.h,$h,1,b);ch(b)||eh(b,1,1);a.ab||(b=pi(a),bh(b,5)||dh(b,5,a.locale));a.i&&(b=pi(a),Xg(b,Uh,9)||Yg(b,Uh,9,a.i))}
function mi(a,b){Lg(qi(a))&&(a=ri(a),eh(a,1,b))}
function oi(a,b){Lg(qi(a))&&(a=ri(a),Jg(a,2,Wf(b)))}
function qi(a){return Xg(a.h,$h,1)}
function si(a){var b=b===void 0?Wh:b;var c=a.ab?void 0:window;c?Zh(c,b).then(function(d){a.i=d;d=pi(a);Yg(d,Uh,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function pi(a){a=qi(a);var b=Xg(a,Ng,11);b||(b=new Ng,Yg(a,Ng,11,b));return b}
function ri(a){a=pi(a);var b=Xg(a,Sh,10);b||(b=new Sh,Jg(b,2,Wf(!1)),Yg(a,Sh,10,b));return b}
function ni(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(Lg(qi(a))){var h=ri(a);Jg(h,3,$f(d))}Lg(qi(a))&&(d=ri(a),Jg(d,4,$f(f)));Lg(qi(a))&&(f=ri(a),Jg(f,5,$f(g)));a=a.h.clone();g=Date.now().toString();a=Jg(a,4,gg(g));b=b.slice();b=Zg(a,bi,3,b);e&&(a=new Ph,e=Jg(a,13,$f(e)),a=new Qh,e=Yg(a,Ph,2,e),a=new ai,e=Yg(a,Qh,1,e),e=eh(e,2,9),Yg(b,ai,18,e));c&&Jg(b,14,gg(c));return b}
;function ti(){this.Ed=typeof AbortController!=="undefined"}
ti.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return B(function(u){switch(u.h){case 1:return f=(e=d.Ed?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.od)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.F(3);break}if((l=b)==null){u.F(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.K=[u.j];u.o=0;u.D=0;clearTimeout(f);Ca(u);break;case 2:m=Ba(u);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}u.F(3)}})};
ti.prototype.Zb=function(){return 4};function ui(a,b){I.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.o=!1;this.network=null;this.componentId="";this.pageId=this.i=this.vb=null}
x(ui,I);ui.prototype.Uc=function(){this.u=!0;return this};
function vi(a){a.network||(a.network=new ti);var b=new hi({logSource:a.logSource,Fb:a.Fb?a.Fb:Mh,sessionIndex:a.sessionIndex,af:a.j,ab:a.o,Db:!1,Uc:a.u,Oc:a.Oc,network:a.network});Hc(a,b);if(a.h){var c=a.h,d=pi(b.i);dh(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.vb&&(b.vb=a.vb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new Nh),c=b.experimentIds,d=d.serialize(),dh(c,4,d)):b.experimentIds&&Jg(b.experimentIds,4));si(b.i);a.network.Mb&&a.network.Mb(a.logSource);
a.network.Ne&&a.network.Ne(b);return b}
;function wi(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;I.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new ui(a,"0"),a.componentId=b,Hc(this,a),c!==""&&(a.j=c),d&&(a.o=!0),e&&(a.h=e),g&&(a.network=g),b=vi(a));this.h=b}
x(wi,I);
wi.prototype.flush=function(a){var b=a||[];if(b.length){a=new Ah;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new zh;f=dh(f,1,e.o);var g=Cc(e);f=Pg(f,g,jg);g=[];var h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.j;for(var n=e.uc(l)||[],r=[],t=0;t<n.length;t++){var u=n[t],y=u&&u.h;u=new wh;switch(m){case 3:y=Number(y);Number.isFinite(y)&&Sg(u,1,xh,gg(y));break;case 2:y=Number(y);if(y!=null&&typeof y!=="number")throw Error("Value of float/double field must be a number, found "+typeof y+
": "+y);Sg(u,2,xh,y)}r.push(u)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new yh;r=Yg(t,wh,2,r);t=l;u=[];y=Bc(e);for(var z=0;z<y.length;z++){var A=y[z],H=t[z],T=new uh;switch(A){case 3:Sg(T,1,vh,kg(String(H)));break;case 2:A=Number(H);Number.isFinite(A)&&Sg(T,2,vh,$f(A));break;case 1:Sg(T,3,vh,Wf(H==="true"))}u.push(T)}Zg(r,uh,1,u);g.push(r)}}Zg(f,yh,4,g);c.push(f);e.clear()}Zg(a,zh,1,c);b=this.h;b.G&&(a instanceof bi?b.log(a):(c=new bi,a=a.serialize(),a=dh(c,8,a),b.log(a)));this.h.flush()}};function xi(){}
xi.prototype.serialize=function(a){var b=[];yi(this,a,b);return b.join("")};
function yi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),yi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),zi(d,c),c.push(":"),yi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ai={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Bi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zi(a,b){b.push('"',a.replace(Bi,function(c){var d=Ai[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ai[c]=d);return d}),'"')}
;function Ci(){}
Ci.prototype.h=null;Ci.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var Di;function Ei(){}
$a(Ei,Ci);Di=new Ei;function Fi(a){yd.call(this);this.headers=new Map;this.Fa=a||null;this.i=!1;this.K=this.U=null;this.o=this.W="";this.j=this.V=this.u=this.T=!1;this.G=0;this.B=null;this.xa="";this.ha=!1}
$a(Fi,yd);var Gi=/^https?$/i,Hi=["POST","PUT"],Ii=[];function Ji(a,b,c,d,e,f,g){var h=new Fi;Ii.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Kd,!0,void 0,void 0);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
p=Fi.prototype;p.Kd=function(){this.dispose();Ib(Ii,this)};
p.send=function(a,b,c,d){if(this.U)throw Error("[goog.net.XhrIo] Object is active with another request="+this.W+"; newUri="+a);b=b?b.toUpperCase():"GET";this.W=a;this.o="";this.T=!1;this.i=!0;this.U=new XMLHttpRequest;this.K=this.Fa?this.Fa.getOptions():Di.getOptions();this.U.onreadystatechange=Xa(this.jd,this);try{this.getStatus(),this.V=!0,this.U.open(b,String(a),!0),this.V=!1}catch(g){this.getStatus();Ki(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Cb(Hi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.U.setRequestHeader(d,c);this.xa&&(this.U.responseType=this.xa);"withCredentials"in this.U&&this.U.withCredentials!==this.ha&&(this.U.withCredentials=this.ha);try{Li(this),this.G>0&&(this.getStatus(),this.B=ne(this.Xe,this.G,this)),this.getStatus(),this.u=!0,this.U.send(a),this.u=
!1}catch(g){this.getStatus(),Ki(this,g)}};
p.Xe=function(){typeof Ma!="undefined"&&this.U&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),zd(this,"timeout"),this.abort(8))};
function Ki(a,b){a.i=!1;a.U&&(a.j=!0,a.U.abort(),a.j=!1);a.o=b;Mi(a);Ni(a)}
function Mi(a){a.T||(a.T=!0,zd(a,"complete"),zd(a,"error"))}
p.abort=function(){this.U&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.U.abort(),this.j=!1,zd(this,"complete"),zd(this,"abort"),Ni(this))};
p.ba=function(){this.U&&(this.i&&(this.i=!1,this.j=!0,this.U.abort(),this.j=!1),Ni(this,!0));Fi.Aa.ba.call(this)};
p.jd=function(){this.ia||(this.V||this.u||this.j?Oi(this):this.qe())};
p.qe=function(){Oi(this)};
function Oi(a){if(a.i&&typeof Ma!="undefined")if(a.K[1]&&Pi(a)==4&&a.getStatus()==2)a.getStatus();else if(a.u&&Pi(a)==4)ne(a.jd,0,a);else if(zd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Qi(a))zd(a,"complete"),zd(a,"success");else{try{var b=Pi(a)>2?a.U.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Mi(a)}}finally{Ni(a)}}}
function Ni(a,b){if(a.U){Li(a);var c=a.U,d=a.K[0]?function(){}:null;
a.U=null;a.K=null;b||zd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Li(a){a.B&&(D.clearTimeout(a.B),a.B=null)}
p.isActive=function(){return!!this.U};
p.isComplete=function(){return Pi(this)==4};
function Qi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=nc(1,String(a.W)),!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Gi.test(a?a.toLowerCase():"");c=b}return c}
function Pi(a){return a.U?a.U.readyState:0}
p.getStatus=function(){try{return Pi(this)>2?this.U.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Ri(){}
Ri.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ji(a.url,function(d){d=d.target;if(Qi(d)){try{var e=d.U?d.U.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.od,a.timeoutMillis,a.withCredentials)};
Ri.prototype.Zb=function(){return 1};function Si(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=Ti()}
Si.prototype.start=function(){this.h=Ti()};
Si.prototype.done=function(){this.h!=null&&this.logger.Ib(this.event,Ti()-this.h)};
function Ui(){I.apply(this,arguments)}
x(Ui,I);function Vi(a,b){var c=Ti();b=b();a.Ib("n",Ti()-c);return b}
function Wi(){Ui.apply(this,arguments)}
x(Wi,Ui);p=Wi.prototype;p.ed=function(){};
p.yc=function(){};
p.Ib=function(){};
p.Ga=function(){};
p.Pa=function(){};
function Xi(a,b,c){b=b===void 0?"":b;Ui.call(this);this.Da=a;this.u=b;this.o=new Map;this.i=new Map;a=new ui(1828,"0");a.h="25";a.network=new Ri;c&&(b=new th,c=Pg(b,c,Zf),a.i=c);this.h&&this.h.dispose();this.j&&this.j.dispose();this.j=new wi(1828,"","",!1,"",vi(a));this.h=new oe(this.j);this.h.o=1E5;c=this.h;c.flushInterval=3E4;c.h.setInterval(3E4);this.W=new ue(this.h);this.ea=new xe(this.h);this.ha=new ye(this.h);this.V=new te(this.h);this.B=new ve(this.h);this.G=new we(this.h);this.errorCount=
new Be(this.h);this.K=new Ae(this.h);new ze(this.h);new Ce(this.h);new De(this.h);new Ee(this.h);this.T=new se(this.h);Hc(this,this.j);Hc(this,this.h);this.o.set("h",1);this.o.set("u",2);this.o.set("k",3);this.i.set(25,1);this.i.set(26,2);this.i.set(27,3);this.i.set(28,4)}
x(Xi,Ui);p=Xi.prototype;p.ed=function(){var a;(a=this.T)!=null&&a.h.xb("/client_streamz/bg/fic",this.Da)};
p.yc=function(){var a;(a=this.ea)!=null&&a.h.xb("/client_streamz/bg/fsc","",this.Da)};
p.Ib=function(a,b){if(a==="t"){var c;(c=this.W)==null||c.record(b,"",this.Da)}else if(a==="n"){var d;(d=this.ha)==null||d.record(b,"",this.Da)}else if(a==="h"||a==="u"||a==="k"){if(a=this.o.get(a)){var e;(e=this.B)!=null&&e.h.xb("/client_streamz/bg/fcc",a,this.Da);var f;(f=this.G)==null||f.record(b,a,this.Da)}}else{var g;(g=this.K)==null||g.record(b,a,"",this.u,this.Da)}};
p.Ga=function(a){var b=this.i.get(a);if(b){var c;(c=this.V)!=null&&c.h.xb("/client_streamz/bg/fiec","",this.Da,b)}else{var d;(d=this.errorCount)!=null&&d.h.xb("/client_streamz/bg/cec",a,"",this.u,this.Da)}};
p.Pa=function(){var a;(a=this.h)==null||a.nc()};
function Ti(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Yi(a){this.H=K(a,0,"bfkj")}
x(Yi,L);var Zi=function(a){return Hf(function(b){return b instanceof a&&!(kf(b.H)&2)})}(Yi);function $i(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function aj(a){function b(m,n,r,t){Promise.resolve().then(function(){l.done();d.Z.Pa();k.resolve({Hd:m,Qe:n,Vg:r,Jg:t})})}
function c(m,n,r,t){var u="k";n?u="h":r&&(u="u");u!=="k"?t!==0&&d.Z.Ib(u,m):d.i<=0?(d.Z.Ib(u,m),d.i=Math.floor(Math.random()*200)):d.i--}
I.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=[];if("challenge"in a&&Zi(a.challenge)){var e=bh(a.challenge,4);var f=bh(a.challenge,5)}else e=a.program,f=a.Xd;var g=new I;this.addOnDisposeCallback(function(){var m,n,r;return B(function(t){if(t.h==1)return t.yield(d.j,2);if(t.h!=3)return m=t.i,n=m.Qe,t.yield(Promise.all(d.h),3);d.h=[];d.Z.Pa();(r=n)==null||r();g.dispose();t.h=0})});
if(a.we!==!1)if(a.Z)this.Z=a.Z;else{var h;Hc(g,this.Z=new Xi((h=a.Da)!=null?h:"_"))}else Hc(g,this.Z=new Wi);var k=new $i;this.j=k.promise;var l=new Si(this.Z,"t",!0);this.Z.ed();if(!D[f])throw this.Z.Ga(25),this.Z.Pa(),Error("EGOU");if(!D[f].a)throw this.Z.Ga(26),this.Z.Pa(),Error("ELIU");try{this.o=w((0,D[f].a)(e,b,!0,a.hh,c)).next().value,this.Pe=k.promise.then(function(){})}catch(m){throw this.Z.Ga(28),this.Z.Pa(),m;
}}
x(aj,I);aj.prototype.snapshot=function(a){var b=this;if(this.ia)throw Error("Already disposed");var c=new $i;this.h.push(c.promise);this.Z.yc();return this.j.then(function(d){var e=d.Hd;return new Promise(function(f){var g=new Si(b.Z,"n");e(function(h){g.done();b.Z.Pa();f(h)},[a.Tc,
a.Re,a.cf,a.Se])})}).finally(function(){return void c.resolve()})};
aj.prototype.td=function(a){var b=this;if(this.ia)throw Error("Already disposed");this.Z.yc();var c=Vi(this.Z,function(){return b.o([a.Tc,a.Re,a.cf,a.Se])});
this.Z.Pa();return c};
aj.prototype.getLogger=function(){return this.Z};var bj=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function cj(a){var b=dj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ej(){var a=[];cj(function(b){a.push(b)});
return a}
var dj={df:"allow-forms",ef:"allow-modals",ff:"allow-orientation-lock",gf:"allow-pointer-lock",hf:"allow-popups",jf:"allow-popups-to-escape-sandbox",kf:"allow-presentation",lf:"allow-same-origin",mf:"allow-scripts",nf:"allow-top-navigation",pf:"allow-top-navigation-by-user-activation"},fj=Ed(function(){return ej()});
function gj(){var a=hj(),b={};Db(fj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function hj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function ij(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var jj=(new Date).getTime();function kj(a){yd.call(this);var b=this;this.B=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(lj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||mj(this)}
x(kj,yd);function nj(){var a=oj;kj.h||(kj.h=new kj(a));return kj.h}
kj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.B);delete kj.h};
kj.prototype.va=function(){return this.i};
function mj(a){a.B=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.F(3):c.yield(lj(a),3):c.yield(lj(a),3);mj(a);c.h=0})},3E4)}
function lj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.o=0;h.D=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?zd(a,"networkstatus-online"):zd(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.F(3)}})})}
;function pj(){this.data=[];this.h=-1}
pj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
pj.prototype.get=function(a){return!!this.data[a]};
function qj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function rj(){this.blockSize=-1}
;function sj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.D=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
$a(sj,rj);sj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function tj(a,b,c){c||(c=0);var d=a.u;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
sj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.D,f=this.i;d<b;){if(f==0)for(;d<=c;)tj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){tj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){tj(this,e);f=0;break}}this.i=f;this.o+=b}};
sj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.D[c]=b&255,b/=256;tj(this,this.D);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function uj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function vj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function wj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:uj(a).match(/\S+/g)||[],b=Cb(a,b)>=0);return b}
function xj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):wj(a,"inverted-hdpi")&&vj(a,Array.prototype.filter.call(a.classList?a.classList:uj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function yj(){}
yj.prototype.next=function(){return zj};
var zj={done:!0,value:void 0};yj.prototype.jb=function(){return this};function Aj(a){if(a instanceof Bj||a instanceof Cj||a instanceof Dj)return a;if(typeof a.next=="function")return new Bj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Bj(function(){return a[Symbol.iterator]()});
if(typeof a.jb=="function")return new Bj(function(){return a.jb()});
throw Error("Not an iterator or iterable.");}
function Bj(a){this.h=a}
Bj.prototype.jb=function(){return new Cj(this.h())};
Bj.prototype[Symbol.iterator]=function(){return new Dj(this.h())};
Bj.prototype.i=function(){return new Dj(this.h())};
function Cj(a){this.h=a}
x(Cj,yj);Cj.prototype.next=function(){return this.h.next()};
Cj.prototype[Symbol.iterator]=function(){return new Dj(this.h)};
Cj.prototype.i=function(){return new Dj(this.h)};
function Dj(a){Bj.call(this,function(){return a});
this.j=a}
x(Dj,Bj);Dj.prototype.next=function(){return this.j.next()};function M(a){I.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
$a(M,I);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Pb(a)}return!1};
p.Pb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.ib=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];Ej(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ia;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Pb(c)}}return e!=0}return!1};
function Ej(a,b,c){Td(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Pb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.ba=function(){M.Aa.ba.call(this);this.clear();this.j.length=0};function Fj(a){this.h=a}
Fj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new xi).serialize(b))};
Fj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Fj.prototype.remove=function(a){this.h.remove(a)};function Gj(a){this.h=a}
$a(Gj,Fj);function Hj(a){this.data=a}
function Ij(a){return a===void 0||a instanceof Hj?a:new Hj(a)}
Gj.prototype.set=function(a,b){Gj.Aa.set.call(this,a,Ij(b))};
Gj.prototype.i=function(a){a=Gj.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Gj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Jj(a){this.h=a}
$a(Jj,Gj);Jj.prototype.set=function(a,b,c){if(b=Ij(b)){if(c){if(c<Za()){Jj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}Jj.Aa.set.call(this,a,b)};
Jj.prototype.i=function(a){var b=Jj.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())Jj.prototype.remove.call(this,a);else return b}};function Kj(){}
;function Lj(){}
$a(Lj,Kj);Lj.prototype[Symbol.iterator]=function(){return Aj(this.jb(!0)).i()};
Lj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Mj(a){this.h=a;this.i=null}
$a(Mj,Lj);p=Mj.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){Nj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){Nj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){Nj(this);this.h.removeItem(a)};
p.jb=function(a){Nj(this);var b=0,c=this.h,d=new yj;d.next=function(){if(b>=c.length)return zj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){Nj(this);this.h.clear()};
p.key=function(a){Nj(this);return this.h.key(a)};
function Nj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Md(Error("Storage mechanism: Storage unavailable"))}
;function Oj(){var a=null;try{a=D.localStorage||null}catch(b){}Mj.call(this,a)}
$a(Oj,Mj);function Pj(a,b){this.i=a;this.h=b+"::"}
$a(Pj,Lj);Pj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Pj.prototype.get=function(a){return this.i.get(this.h+a)};
Pj.prototype.remove=function(a){this.i.remove(this.h+a)};
Pj.prototype.jb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new yj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Qj=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Jc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Rj={kb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Wc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Sj={kb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Wc:function(a){return[].concat.apply([],a)}};
N.Oe=function(){Qj?(N.hb=Uint8Array,N.Ia=Uint16Array,N.Cd=Int32Array,N.assign(N,Rj)):(N.hb=Array,N.Ia=Array,N.Cd=Array,N.assign(N,Sj))};
N.Oe();var Tj=!0;try{new Uint8Array(1)}catch(a){Tj=!1}
function Uj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.hb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Vj={};Vj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Wj={},Xj,Yj=[],Zj=0;Zj<256;Zj++){Xj=Zj;for(var ak=0;ak<8;ak++)Xj=Xj&1?3988292384^Xj>>>1:Xj>>>1;Yj[Zj]=Xj}Wj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Yj[(a^b[d])&255];return a^-1};var bk={};bk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ck(a){for(var b=a.length;--b>=0;)a[b]=0}
var dk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ek=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],fk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],gk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],hk=Array(576);ck(hk);var ik=Array(60);ck(ik);var jk=Array(512);ck(jk);var kk=Array(256);ck(kk);var lk=Array(29);ck(lk);var mk=Array(30);ck(mk);function nk(a,b,c,d,e){this.ud=a;this.Td=b;this.Sd=c;this.Nd=d;this.oe=e;this.Zc=a&&a.length}
var ok,pk,qk;function rk(a,b){this.Vc=a;this.sb=0;this.Ua=b}
function sk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function tk(a,b,c){a.ja>16-c?(a.oa|=b<<a.ja&65535,sk(a,a.oa),a.oa=b>>16-a.ja,a.ja+=c-16):(a.oa|=b<<a.ja&65535,a.ja+=c)}
function uk(a,b,c){tk(a,c[b*2],c[b*2+1])}
function vk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function wk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=vk(d[e]++,e))}
function xk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.Ya[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ra[512]=1;a.Oa=a.wb=0;a.ya=a.matches=0}
function yk(a){a.ja>8?sk(a,a.oa):a.ja>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ja=0}
function zk(a,b,c){yk(a);sk(a,c);sk(a,~c);N.kb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Ak(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Bk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Ma;){e<a.Ma&&Ak(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Ak(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Ck(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Cb+d*2]<<8|a.aa[a.Cb+d*2+1];var f=a.aa[a.xc+d];d++;if(e===0)uk(a,f,b);else{var g=kk[f];uk(a,g+256+1,b);var h=dk[g];h!==0&&(f-=lk[g],tk(a,f,h));e--;g=e<256?jk[e]:jk[256+(e>>>7)];uk(a,g,c);h=ek[g];h!==0&&(e-=mk[g],tk(a,e,h))}}while(d<a.ya)}uk(a,256,b)}
function Dk(a,b){var c=b.Vc,d=b.Ua.ud,e=b.Ua.Zc,f=b.Ua.Nd,g,h=-1;a.Ma=0;a.nb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Ma]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Ma<2;){var k=a.da[++a.Ma]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.wb-=d[k*2+1])}b.sb=h;for(g=a.Ma>>1;g>=1;g--)Bk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Ma--],Bk(a,c,1),d=a.da[1],a.da[--a.nb]=g,a.da[--a.nb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Bk(a,c,1);while(a.Ma>=
2);a.da[--a.nb]=a.da[1];g=b.Vc;k=b.sb;d=b.Ua.ud;e=b.Ua.Zc;f=b.Ua.Td;var l=b.Ua.Sd,m=b.Ua.oe,n,r=0;for(n=0;n<=15;n++)a.Ja[n]=0;g[a.da[a.nb]*2+1]=0;for(b=a.nb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ja[n]++;var u=0;t>=l&&(u=f[t-l]);var y=g[t*2];a.Oa+=y*(n+u);e&&(a.wb+=y*(d[t*2+1]+u))}}if(r!==0){do{for(n=m-1;a.Ja[n]===0;)n--;a.Ja[n]--;a.Ja[n+1]+=2;a.Ja[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ja[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}wk(c,h,a.Ja)}
function Ek(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Fk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do uk(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(uk(a,l,a.ka),g--),uk(a,16,a.ka),tk(a,g-3,2)):g<=10?(uk(a,17,a.ka),tk(a,g-3,3)):(uk(a,18,a.ka),tk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Gk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var Hk=!1;function Ik(a,b,c){a.aa[a.Cb+a.ya*2]=b>>>8&255;a.aa[a.Cb+a.ya*2+1]=b&255;a.aa[a.xc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(kk[c]+256+1)*2]++,a.Ya[(b<256?jk[b]:jk[256+(b>>>7)])*2]++);return a.ya===a.Hb-1}
;function Jk(a,b){a.msg=bk[b];return b}
function Kk(a){for(var b=a.length;--b>=0;)a[b]=0}
function Lk(a){var b=a.state,c=b.pending;c>a.R&&(c=a.R);c!==0&&(N.kb(a.output,b.aa,b.Kb,c,a.tb),a.tb+=c,b.Kb+=c,a.Kc+=c,a.R-=c,b.pending-=c,b.pending===0&&(b.Kb=0))}
function Mk(a,b){var c=a.ta>=0?a.ta:-1,d=a.v-a.ta,e=0;if(a.level>0){a.M.qc===2&&(a.M.qc=Gk(a));Dk(a,a.dc);Dk(a,a.Xb);Ek(a,a.ra,a.dc.sb);Ek(a,a.Ya,a.Xb.sb);Dk(a,a.Pc);for(e=18;e>=3&&a.ka[gk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+14;var f=a.Oa+3+7>>>3;var g=a.wb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)tk(a,b?1:0,3),zk(a,c,d);else if(a.strategy===4||g===f)tk(a,2+(b?1:0),3),Ck(a,hk,ik);else{tk(a,4+(b?1:0),3);c=a.dc.sb+1;d=a.Xb.sb+1;e+=1;tk(a,c-257,5);tk(a,d-1,5);tk(a,e-4,4);for(f=0;f<e;f++)tk(a,a.ka[gk[f]*
2+1],3);Fk(a,a.ra,c-1);Fk(a,a.Ya,d-1);Ck(a,a.ra,a.Ya)}xk(a);b&&yk(a);a.ta=a.v;Lk(a.M)}
function R(a,b){a.aa[a.pending++]=b}
function Nk(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function Ok(a,b){var c=a.gd,d=a.v,e=a.wa,f=a.hd,g=a.v>a.ma-262?a.v-(a.ma-262):0,h=a.window,k=a.Va,l=a.Ha,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.Yc&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.rb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function Pk(a){var b=a.ma,c;do{var d=a.Ad-a.A-a.v;if(a.v>=b+(b-262)){N.kb(a.window,a.window,b,b,0);a.rb-=b;a.v-=b;a.ta-=b;var e=c=a.cc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ha[--e],a.Ha[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.na===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,N.kb(c,e.input,e.eb,g,f),e.state.wrap===1?e.J=Vj(e.J,c,g,f):e.state.wrap===2&&(e.J=Wj(e.J,c,g,f)),e.eb+=g,e.gb+=g,c=g);a.A+=c;if(a.A+a.sa>=3)for(d=a.v-a.sa,a.P=a.window[d],
a.P=(a.P<<a.La^a.window[d+1])&a.Ka;a.sa&&!(a.P=(a.P<<a.La^a.window[d+3-1])&a.Ka,a.Ha[d&a.Va]=a.head[a.P],a.head[a.P]=d,d++,a.sa--,a.A+a.sa<3););}while(a.A<262&&a.M.na!==0)}
function Qk(a,b){for(var c;;){if(a.A<262){Pk(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,c=a.Ha[a.v&a.Va]=a.head[a.P],a.head[a.P]=a.v);c!==0&&a.v-c<=a.ma-262&&(a.S=Ok(a,c));if(a.S>=3)if(c=Ik(a,a.v-a.rb,a.S-3),a.A-=a.S,a.S<=a.zc&&a.A>=3){a.S--;do a.v++,a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,a.Ha[a.v&a.Va]=a.head[a.P],a.head[a.P]=a.v;while(--a.S!==0);a.v++}else a.v+=a.S,a.S=0,a.P=a.window[a.v],a.P=(a.P<<a.La^a.window[a.v+1])&a.Ka;else c=Ik(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(Mk(a,!1),a.M.R===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(Mk(a,!0),a.M.R===0?3:4):a.ya&&(Mk(a,!1),a.M.R===0)?1:2}
function Rk(a,b){for(var c,d;;){if(a.A<262){Pk(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,c=a.Ha[a.v&a.Va]=a.head[a.P],a.head[a.P]=a.v);a.wa=a.S;a.ld=a.rb;a.S=2;c!==0&&a.wa<a.zc&&a.v-c<=a.ma-262&&(a.S=Ok(a,c),a.S<=5&&(a.strategy===1||a.S===3&&a.v-a.rb>4096)&&(a.S=2));if(a.wa>=3&&a.S<=a.wa){d=a.v+a.A-3;c=Ik(a,a.v-1-a.ld,a.wa-3);a.A-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.P=(a.P<<a.La^a.window[a.v+3-1])&a.Ka,a.Ha[a.v&a.Va]=a.head[a.P],a.head[a.P]=a.v);
while(--a.wa!==0);a.bb=0;a.S=2;a.v++;if(c&&(Mk(a,!1),a.M.R===0))return 1}else if(a.bb){if((c=Ik(a,0,a.window[a.v-1]))&&Mk(a,!1),a.v++,a.A--,a.M.R===0)return 1}else a.bb=1,a.v++,a.A--}a.bb&&(Ik(a,0,a.window[a.v-1]),a.bb=0);a.sa=a.v<2?a.v:2;return b===4?(Mk(a,!0),a.M.R===0?3:4):a.ya&&(Mk(a,!1),a.M.R===0)?1:2}
function Sk(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){Pk(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.S=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.S=258-(e-d);a.S>a.A&&(a.S=a.A)}a.S>=3?(c=Ik(a,1,a.S-3),a.A-=a.S,a.v+=a.S,a.S=0):(c=Ik(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(Mk(a,!1),a.M.R===0))return 1}a.sa=0;return b===4?(Mk(a,!0),a.M.R===0?3:4):
a.ya&&(Mk(a,!1),a.M.R===0)?1:2}
function Tk(a,b){for(var c;;){if(a.A===0&&(Pk(a),a.A===0)){if(b===0)return 1;break}a.S=0;c=Ik(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(Mk(a,!1),a.M.R===0))return 1}a.sa=0;return b===4?(Mk(a,!0),a.M.R===0?3:4):a.ya&&(Mk(a,!1),a.M.R===0)?1:2}
function Uk(a,b,c,d,e){this.Yd=a;this.ne=b;this.pe=c;this.le=d;this.Ud=e}
var Vk;Vk=[new Uk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.A<=1){Pk(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.ta+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,Mk(a,!1),a.M.R===0)return 1;if(a.v-a.ta>=a.ma-262&&(Mk(a,!1),a.M.R===0))return 1}a.sa=0;if(b===4)return Mk(a,!0),a.M.R===0?3:4;a.v>a.ta&&Mk(a,!1);return 1}),
new Uk(4,4,8,4,Qk),new Uk(4,5,16,8,Qk),new Uk(4,6,32,32,Qk),new Uk(4,4,16,16,Rk),new Uk(8,16,32,32,Rk),new Uk(8,16,128,128,Rk),new Uk(8,32,128,256,Rk),new Uk(32,128,258,1024,Rk),new Uk(32,258,258,4096,Rk)];
function Wk(){this.M=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Kb=this.za=0;this.I=null;this.Ba=0;this.method=8;this.pb=-1;this.Va=this.Mc=this.ma=0;this.window=null;this.Ad=0;this.head=this.Ha=null;this.hd=this.Yc=this.strategy=this.level=this.zc=this.gd=this.wa=this.A=this.rb=this.v=this.bb=this.ld=this.S=this.ta=this.La=this.Ka=this.vc=this.cc=this.P=0;this.ra=new N.Ia(1146);this.Ya=new N.Ia(122);this.ka=new N.Ia(78);Kk(this.ra);Kk(this.Ya);Kk(this.ka);this.Pc=this.Xb=this.dc=
null;this.Ja=new N.Ia(16);this.da=new N.Ia(573);Kk(this.da);this.nb=this.Ma=0;this.depth=new N.Ia(573);Kk(this.depth);this.ja=this.oa=this.sa=this.matches=this.wb=this.Oa=this.Cb=this.ya=this.Hb=this.xc=0}
function Xk(a,b){if(!a||!a.state||b>5||b<0)return a?Jk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return Jk(a,a.R===0?-5:-2);c.M=a;var d=c.pb;c.pb=b;if(c.status===42)if(c.wrap===2)a.J=0,R(c,31),R(c,139),R(c,8),c.I?(R(c,(c.I.text?1:0)+(c.I.Sa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),R(c,c.I.time&255),R(c,c.I.time>>8&255),R(c,c.I.time>>16&255),R(c,c.I.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(R(c,c.I.extra.length&255),R(c,c.I.extra.length>>8&255)),c.I.Sa&&(a.J=Wj(a.J,c.aa,c.pending,0)),c.Ba=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Mc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;Nk(c,e+(31-e%31));c.v!==0&&(Nk(c,a.J>>>16),Nk(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Ba<(c.I.extra.length&65535)&&(c.pending!==c.za||
(c.I.Sa&&c.pending>e&&(a.J=Wj(a.J,c.aa,c.pending-e,e)),Lk(a),e=c.pending,c.pending!==c.za));)R(c,c.I.extra[c.Ba]&255),c.Ba++;c.I.Sa&&c.pending>e&&(a.J=Wj(a.J,c.aa,c.pending-e,e));c.Ba===c.I.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.za&&(c.I.Sa&&c.pending>e&&(a.J=Wj(a.J,c.aa,c.pending-e,e)),Lk(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.I.name.length?c.I.name.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.I.Sa&&c.pending>
e&&(a.J=Wj(a.J,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.za&&(c.I.Sa&&c.pending>e&&(a.J=Wj(a.J,c.aa,c.pending-e,e)),Lk(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.I.comment.length?c.I.comment.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.I.Sa&&c.pending>e&&(a.J=Wj(a.J,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Sa?(c.pending+2>c.za&&Lk(a),c.pending+2<=c.za&&(R(c,
a.J&255),R(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(Lk(a),a.R===0)return c.pb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Jk(a,-5);if(c.status===666&&a.na!==0)return Jk(a,-5);if(a.na!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?Tk(c,b):c.strategy===3?Sk(c,b):Vk[c.level].Ud(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.R===0&&(c.pb=-1),0;if(d===2&&(b===1?(tk(c,2,3),uk(c,256,hk),c.ja===16?(sk(c,c.oa),c.oa=0,c.ja=0):c.ja>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ja-=8)):b!==5&&(tk(c,0,3),zk(c,0,0),b===3&&(Kk(c.head),c.A===0&&(c.v=0,c.ta=0,c.sa=0))),Lk(a),a.R===0))return c.pb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.J&255),R(c,a.J>>8&255),R(c,a.J>>16&255),R(c,a.J>>24&255),R(c,a.gb&255),R(c,a.gb>>8&255),R(c,a.gb>>16&255),R(c,a.gb>>24&255)):(Nk(c,a.J>>>16),Nk(c,a.J&65535));Lk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Yk={};Yk=function(){this.input=null;this.gb=this.na=this.eb=0;this.output=null;this.Kc=this.R=this.tb=0;this.msg="";this.state=null;this.qc=2;this.J=0};var Zk=Object.prototype.toString;
function $k(a){if(!(this instanceof $k))return new $k(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new Yk;this.M.R=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Jk(b,-2);else{e===8&&(e=9);var k=new Wk;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Mc=e;k.ma=1<<k.Mc;k.Va=k.ma-1;k.vc=f+7;k.cc=1<<k.vc;k.Ka=k.cc-1;k.La=~~((k.vc+3-1)/3);k.window=new N.hb(k.ma*2);k.head=new N.Ia(k.cc);k.Ha=new N.Ia(k.ma);k.Hb=1<<f+6;k.za=k.Hb*4;k.aa=new N.hb(k.za);k.Cb=1*k.Hb;k.xc=3*k.Hb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.gb=b.Kc=0;b.qc=2;c=b.state;c.pending=0;c.Kb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.pb=0;if(!Hk){d=Array(16);for(f=g=0;f<28;f++)for(lk[f]=g,e=0;e<1<<dk[f];e++)kk[g++]=f;kk[g-1]=f;for(f=g=0;f<16;f++)for(mk[f]=g,e=0;e<1<<ek[f];e++)jk[g++]=f;for(g>>=7;f<30;f++)for(mk[f]=g<<7,e=0;e<1<<ek[f]-7;e++)jk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)hk[e*2+1]=8,e++,d[8]++;for(;e<=255;)hk[e*2+1]=9,e++,d[9]++;for(;e<=279;)hk[e*2+1]=7,e++,d[7]++;for(;e<=287;)hk[e*2+1]=8,e++,d[8]++;wk(hk,287,d);for(e=0;e<30;e++)ik[e*2+1]=5,ik[e*2]=vk(e,5);ok=new nk(hk,dk,257,286,15);pk=new nk(ik,
ek,0,30,15);qk=new nk([],fk,0,19,7);Hk=!0}c.dc=new rk(c.ra,ok);c.Xb=new rk(c.Ya,pk);c.Pc=new rk(c.ka,qk);c.oa=0;c.ja=0;xk(c);c=0}else c=Jk(b,-2);c===0&&(b=b.state,b.Ad=2*b.ma,Kk(b.head),b.zc=Vk[b.level].ne,b.Yc=Vk[b.level].Yd,b.hd=Vk[b.level].pe,b.gd=Vk[b.level].le,b.v=0,b.ta=0,b.A=0,b.sa=0,b.S=b.wa=2,b.bb=0,b.P=0);b=c}}else b=-2;if(b!==0)throw Error(bk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Uj(a.dictionary):
Zk.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=Vj(a.J,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(Kk(l.head),l.v=0,l.ta=0,l.sa=0),c=new N.hb(l.ma),N.kb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.na;d=a.eb;e=a.input;a.na=g;a.eb=0;a.input=f;for(Pk(l);l.A>=3;){f=l.v;g=l.A-2;do l.P=(l.P<<l.La^l.window[f+3-1])&l.Ka,l.Ha[f&l.Va]=l.head[l.P],l.head[l.P]=f,f++;while(--g);
l.v=f;l.A=2;Pk(l)}l.v+=l.A;l.ta=l.v;l.sa=l.A;l.A=0;l.S=l.wa=2;l.bb=0;a.eb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(bk[b]);this.Eg=!0}}
$k.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Uj(a):Zk.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.eb=0;c.na=c.input.length;do{c.R===0&&(c.output=new N.hb(d),c.tb=0,c.R=d);a=Xk(c,e);if(a!==1&&a!==0)return al(this,a),this.ended=!0,!1;if(c.R===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Jc(c.output,c.tb);b=f;f=f.length;if(f<65537&&(b.subarray&&Tj||!b.subarray))b=
String.fromCharCode.apply(null,N.Jc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Jc(c.output,c.tb),this.chunks.push(b)}while((c.na>0||c.R===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Jk(c,-2):(c.state=null,a=d===113?Jk(c,-3):0)):a=-2,al(this,a),this.ended=!0,a===0;e===2&&(al(this,0),c.R=0);return!0};
function al(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.Wc(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function bl(a,b){b=b||{};b.gzip=!0;b=new $k(b);b.push(a,!0);if(b.err)throw b.msg||bk[b.err];return b.result}
;function cl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function dl(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function el(a){this.name=a}
;var fl=new el("rawColdConfigGroup");var gl=new el("rawHotConfigGroup");function hl(a){this.H=K(a)}
x(hl,L);var il=new el("continuationCommand");var jl=new el("webCommandMetadata");var kl=new el("signalServiceEndpoint");var ll={uf:"EMBEDDED_PLAYER_MODE_UNKNOWN",rf:"EMBEDDED_PLAYER_MODE_DEFAULT",tf:"EMBEDDED_PLAYER_MODE_PFP",sf:"EMBEDDED_PLAYER_MODE_PFL"};var ml=new el("feedbackEndpoint");function nl(a){this.H=K(a)}
x(nl,L);nl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Ye(a,Ve):We||(We=new Ye(null,Ve));else if(a.constructor!==Ye)if(Ue(a))a=a.length?new Ye(new Uint8Array(a),Ve):We||(We=new Ye(null,Ve));else throw Error();return Jg(this,1,a)};var Mf={jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Ff:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Af:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Ef:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Cf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Df:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Bf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED"};var ol=new el("shareEndpoint"),pl=new el("shareEntityEndpoint"),ql=new el("shareEntityServiceEndpoint"),rl=new el("webPlayerShareEntityServiceEndpoint");var sl=new el("playlistEditEndpoint");var tl=new el("modifyChannelNotificationPreferenceEndpoint");var ul=new el("unsubscribeEndpoint");var vl=new el("subscribeEndpoint");function wl(){var a=xl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function yl(a){E("yt.ads.biscotti.lastId_",a)}
;function zl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Al=D.window,Bl,Cl,Dl=(Al==null?void 0:(Bl=Al.yt)==null?void 0:Bl.config_)||(Al==null?void 0:(Cl=Al.ytcfg)==null?void 0:Cl.data_)||{};E("yt.config_",Dl);function El(){zl(Dl,arguments)}
function S(a,b){return a in Dl?Dl[a]:b}
function Fl(a){var b=Dl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Gl=[];function Hl(a){Gl.forEach(function(b){return b(a)})}
function Il(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jl(b)}}:a}
function Jl(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),El("ERRORS",b));Hl(a)}
function Kl(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),El("ERRORS",f))}
;var Ll=/^[\w.]*$/,Ml={q:!0,search_query:!0};function Nl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Ol(f[0]||""),h=Ol(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(Nl);l.args=[{key:m,value:f[1],query:a,method:Pl===n?"unchanged":n}];Ml.hasOwnProperty(m)||Kl(l)}}return c}
var Pl=String(Nl);function Ql(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Rl(a){a.charAt(0)==="?"&&(a=a.substring(1));return Nl(a,"&")}
function Sl(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Rl(a.length>1?a[1]:a[0])):{}}
function Tl(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Rl(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function Ul(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function Ol(a){return a&&a.match(Ll)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Vl(a){var b=Wl;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=jj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Na){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?bj:g;try{var h=g.history.length}catch(Na){h=0}e.u_his=h;var k;e.u_h=(k=bj.screen)==null?void 0:k.height;var l;e.u_w=(l=bj.screen)==null?void 0:l.width;var m;e.u_ah=(m=bj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=bj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=bj.screen)==null?void 0:r.colorDepth}catch(Na){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Na){}try{var y=h.outerWidth;var z=h.outerHeight}catch(Na){}try{var A=h.innerWidth;var H=h.innerHeight}catch(Na){}try{var T=h.screenLeft;var O=h.screenTop}catch(Na){}try{A=h.innerWidth,H=h.innerHeight}catch(Na){}try{var ea=h.screen.availWidth;var Ea=h.screen.availTop}catch(Na){}t=[T,O,t,u,ea,Ea,y,z,A,H];try{var P=(b.h.top||window).document,fa=P.compatMode==
"CSS1Compat"?P.documentElement:P.body;var ka=(new Gd(fa.clientWidth,fa.clientHeight)).round()}catch(Na){ka=new Gd(-12245933,-12245933)}P=ka;ka={};var pa=pa===void 0?D:pa;fa=new pj;"SVGElement"in pa&&"createElementNS"in pa.document&&fa.set(0);u=gj();u["allow-top-navigation-by-user-activation"]&&fa.set(1);u["allow-popups-to-escape-sandbox"]&&fa.set(2);pa.crypto&&pa.crypto.subtle&&fa.set(3);"TextDecoder"in pa&&"TextEncoder"in pa&&fa.set(4);pa=qj(fa);ka.bc=pa;ka.bih=P.height;ka.biw=P.width;ka.brdim=t.join();
b=b.i;b=(ka.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ka.wgl=!!bj.WebGLRenderingContext,ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Wl=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Ql(Vl(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var Xl="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function Yl(){if(!Xl)return null;var a=Xl();return"open"in a?a:null}
function Zl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function $l(a,b){typeof a==="function"&&(a=Il(a));return window.setTimeout(a,b)}
;var am="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(am),["client_dev_set_cookie"]);function U(a){a=bm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function cm(a,b){a=bm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function bm(a){return S("EXPERIMENT_FLAGS",{})[a]}
function dm(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var em={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},fm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(am)),gm=!1;
function hm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Il(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Yl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=im(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=jm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){Kl(n)}}l.send(d);return l}
function jm(a,b){b=b===void 0?{}:b;var c=Ul(a),d=S("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in em){var g=S(em[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(oc(a)?!1:!0))){k=a;var l;if(l=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=oc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(nc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=Ql(Vl()));return b}
function km(a,b){b.method="POST";b.postParams||(b.postParams={});return lm(a,b)}
function lm(a,b){var c=b.format||"JSON";a=mm(a,b);var d=nm(a,b),e=!1,f=om(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Zl(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=pm(a,c,k,b.convertToSafeHtml);l&&(l=qm(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=$l(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function mm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Tl(a,b||{},!0);return a}
function nm(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Rl(e),Ub(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!gm&&f&&b.method!=="POST"&&(gm=!0,Jl(Error("AJAX request with postData should use POST")));return e}
function pm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Kl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rm(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=sm(g)})}d&&tm(e);
return e}
function tm(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else tm(a[b])}}
function qm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function rm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function sm(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function im(a){var b=window.location.search,c=oc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Ul(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Rl(b),f={};Db(fm,function(g){e[g]&&(f[g]=e[g])});
return Tl(a,f||{},!1)}
var om=hm;var um=[{Ac:function(a){return"Cannot read property '"+a.key+"'"},
ec:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ac:function(a){return"Cannot call '"+a.key+"'"},
ec:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ac:function(a){return a.key+" is not defined"},
ec:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xm={Ta:[],Ra:[{callback:wm,weight:500}]};function wm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ym(){this.Ra=[];this.Ta=[]}
var zm;function Am(){if(!zm){var a=zm=new ym;a.Ta.length=0;a.Ra.length=0;xm.Ta&&a.Ta.push.apply(a.Ta,xm.Ta);xm.Ra&&a.Ra.push.apply(a.Ra,xm.Ra)}return zm}
;var Bm=new M;function Cm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Dm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Dm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Dm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Em(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Cm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Fm(f+".ve",g,h,k):0;d+=f;d+=Fm(e,a[e],b,c);if(d>500)break}}else c[b]=Gm(a),d+=c[b].length;else c[b]=Gm(a),d+=c[b].length;return d}
function Fm(a,b,c,d){c+="."+a;a=Gm(b);d[c]=a;return c.length+a.length}
function Gm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Hm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Im(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Jm(){this.Te=!0}
function Km(){Jm.h||(Jm.h=new Jm);return Jm.h}
function Lm(a,b){a={};var c=[],d=U("enable_first_party_auth_v2")||(b==null?void 0:b.bd)&&U("enable_first_party_auth_v2_on_get_account_menu");"USER_SESSION_ID"in Dl&&d&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=Mh(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Dl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in
Dl&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var Mm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Nm(a,b,c,d,e){Ih.set(""+a,b,{Jb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function Om(a){return Ih.get(""+a,void 0)}
function Pm(a,b,c){Ih.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Qm(){if(U("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!Ih.isEnabled())return!1;if(Ih.h.cookie)return!0;U("embeds_web_enable_cookie_detection_fix")?Ih.set("TESTCOOKIESENABLED","1",{Jb:60,Ce:"none",secure:!0}):Ih.set("TESTCOOKIESENABLED","1",{Jb:60});if(Ih.get("TESTCOOKIESENABLED")!=="1")return!1;Ih.remove("TESTCOOKIESENABLED");return!0}
;var Rm=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",Rm);function Sm(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Om(this.h);a&&this.parse(a)}
var Tm;function Um(){Tm||(Tm=new Sm);return Tm}
p=Sm.prototype;p.get=function(a,b){Vm(a);Wm(a);a=Rm[a]!==void 0?Rm[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){Vm(a);Wm(a);if(b==null)throw Error("ExpectedNotNull");Rm[a]=b.toString()};
function Xm(a){return!!((Ym("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){Vm(a);Wm(a);delete Rm[a]};
p.clear=function(){for(var a in Rm)delete Rm[a]};
function Wm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Vm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ym(a){a=Rm[a]!==void 0?Rm[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Rm[d]=c.toString())}};var Zm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},$m={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function an(){var a=D.navigator;return a?a.connection:void 0}
function bn(){var a=an();if(a){var b=Zm[a.type||"unknown"]||"CONN_UNKNOWN";a=Zm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function cn(){var a=an();if(a!=null&&a.effectiveType)return $m.hasOwnProperty(a.effectiveType)?$m[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
x(V,Error);function dn(){try{return en(),!0}catch(a){return!1}}
function en(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new V("Datasync ID not set",a===void 0?"unknown":a);}
;function fn(){}
function gn(a,b){return oj.Xa(a,0,b)}
fn.prototype.pa=function(a,b){return this.Xa(a,1,b)};
fn.prototype.zb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var hn=cm("web_emulated_idle_callback_delay",300),jn=1E3/60-3,kn=[8,5,4,3,2,1,0];
function ln(a){a=a===void 0?{}:a;I.call(this);this.i=[];this.j={};this.W=this.h=0;this.V=this.u=!1;this.K=[];this.T=this.ea=!1;for(var b=w(kn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.pc=a.timeout||1;this.G=jn;this.B=0;this.xa=this.re.bind(this);this.oc=this.We.bind(this);this.Wa=this.Gd.bind(this);this.yb=this.Zd.bind(this);this.Qb=this.ue.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ha=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
x(ln,I);p=ln.prototype;p.zb=function(a){var b=Za();mn(this,a);a=Za()-b;this.u||(this.G-=a)};
p.Xa=function(a,b,c){++this.W;if(b===10)return this.zb(a),this.W;var d=this.W;this.j[d]=a;this.u&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.V||this.u||(this.h!==0&&nn(this)!==this.B&&this.stop(),this.start()));return d};
p.qa=function(a){delete this.j[a]};
function on(a){a.K.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function pn(a){return!a.isHidden()&&a.ha}
function nn(a){if(a.i[8].length){if(a.T)return 4;if(pn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?pn(a)?3:2:1;return 0}
p.Ga=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function mn(a,b){try{b()}catch(c){a.Ga(c)}}
function qn(a){for(var b=w(kn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.Zd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;rn(this,b);this.ea=!1};
p.We=function(){rn(this)};
p.Gd=function(){sn(this)};
p.ue=function(a){this.T=!0;var b=nn(this);b===4&&b!==this.B&&(this.stop(),this.start());rn(this,void 0,a);this.T=!1};
p.re=function(){this.isHidden()||sn(this);this.h&&(this.stop(),this.start())};
function sn(a){a.stop();a.u=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&mn(a,e)}tn(a);a.u=!1;qn(a)&&a.start();b=Za()-b;a.G-=b}
function tn(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function rn(a,b,c){a.T&&a.B===4&&a.h||a.stop();a.u=!0;b=Za()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ga(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&mn(a,f);d=a.ea?0:1;d=a.o>d?a.o:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&mn(a,c)}while(c&&Za()<b)}a.u=!1;tn(a);a.G=jn;qn(a)&&a.start()}
p.start=function(){this.V=!1;if(this.h===0)switch(this.B=nn(this),this.B){case 1:var a=this.yb;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,hn);break;case 2:this.h=window.setTimeout(this.oc,this.pc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Wa,0)}};
p.pause=function(){this.stop();this.V=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.ba=function(){on(this);this.stop();this.ha&&document.removeEventListener("visibilitychange",this.xa);I.prototype.ba.call(this)};var un=F("yt.scheduler.instance.timerIdMap_")||{},vn=cm("kevlar_tuner_scheduler_soft_state_timer_ms",800),wn=0,xn=0;function yn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ia)a=new ln(S("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function zn(){An();var a=F("ytglobal.schedulerInstanceInstance_");a&&(Fc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function An(){on(yn());for(var a in un)un.hasOwnProperty(a)&&delete un[Number(a)]}
function Bn(a,b,c){if(!c)return c=c===void 0,-yn().Xa(a,b,c);var d=window.setTimeout(function(){var e=yn().Xa(a,b);un[d]=e},c);
return d}
function Cn(a){yn().zb(a)}
function Dn(a){var b=yn();if(a<0)b.qa(-a);else{var c=un[a];c?(b.qa(c),delete un[a]):window.clearTimeout(a)}}
function En(){Fn()}
function Fn(){window.clearTimeout(wn);yn().start()}
function Gn(){yn().pause();window.clearTimeout(wn);wn=window.setTimeout(En,vn)}
function Hn(){window.clearTimeout(xn);xn=window.setTimeout(function(){In(0)},vn)}
function In(a){Hn();var b=yn();b.o=a;b.start()}
function Jn(a){Hn();var b=yn();b.o>a&&(b.o=a,b.start())}
function Kn(){window.clearTimeout(xn);var a=yn();a.o=0;a.start()}
;function Ln(){fn.apply(this,arguments)}
x(Ln,fn);function Mn(){Ln.h||(Ln.h=new Ln);return Ln.h}
Ln.prototype.Xa=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):$l(a,c||0)};
Ln.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Ln.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
Ln.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var oj=Mn();
U("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",zn),E("yt.scheduler.instance.addJob",Bn),E("yt.scheduler.instance.addImmediateJob",Cn),E("yt.scheduler.instance.cancelJob",Dn),E("yt.scheduler.instance.cancelAllJobs",An),E("yt.scheduler.instance.start",Fn),E("yt.scheduler.instance.pause",Gn),E("yt.scheduler.instance.setPriorityThreshold",In),E("yt.scheduler.instance.enablePriorityThreshold",Jn),E("yt.scheduler.instance.clearPriorityThreshold",Kn),E("yt.scheduler.initialized",
!0));function Nn(a){var b=new Oj;this.h=(a=b.isAvailable()?a?new Pj(b,a):b:null)?new Jj(a):null;this.i=document.domain||window.location.hostname}
Nn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new xi).serialize(b))}catch(f){return}else e=escape(b);Nm(a,e,c,this.i)};
Nn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Om(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Nn.prototype.remove=function(a){this.h&&this.h.remove(a);Pm(a,"/",this.i)};var On=function(){var a;return function(){a||(a=new Nn("ytidb"));return a}}();
function Pn(){var a;return(a=On())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Qn=[],Rn,Sn=!1;function Tn(){var a={};for(Rn=new Un(a.handleError===void 0?Vn:a.handleError,a.logEvent===void 0?Wn:a.logEvent);Qn.length>0;)switch(a=Qn.shift(),a.type){case "ERROR":Rn.Ga(a.payload);break;case "EVENT":Rn.logEvent(a.eventType,a.payload)}}
function Xn(a){Sn||(Rn?Rn.Ga(a):(Qn.push({type:"ERROR",payload:a}),Qn.length>10&&Qn.shift()))}
function Yn(a,b){Sn||(Rn?Rn.logEvent(a,b):(Qn.push({type:"EVENT",eventType:a,payload:b}),Qn.length>10&&Qn.shift()))}
;function Zn(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function $n(a){return a.substr(0,a.indexOf(":"))||a}
;var ao=Fe||Ge;function bo(a){var b=Nc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var co={},eo=(co.AUTH_INVALID="No user identifier specified.",co.EXPLICIT_ABORT="Transaction was explicitly aborted.",co.IDB_NOT_SUPPORTED="IndexedDB is not supported.",co.MISSING_INDEX="Index not created.",co.MISSING_OBJECT_STORES="Object stores not created.",co.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",co.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",co.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
co.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",co.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",co.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",co.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",co),fo={},go=(fo.AUTH_INVALID="ERROR",fo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",fo.EXPLICIT_ABORT="IGNORED",fo.IDB_NOT_SUPPORTED="ERROR",fo.MISSING_INDEX=
"WARNING",fo.MISSING_OBJECT_STORES="ERROR",fo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",fo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",fo.QUOTA_EXCEEDED="WARNING",fo.QUOTA_MAYBE_EXCEEDED="WARNING",fo.UNKNOWN_ABORT="WARNING",fo.INCOMPATIBLE_DB_VERSION="WARNING",fo),ho={},io=(ho.AUTH_INVALID=!1,ho.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ho.EXPLICIT_ABORT=!1,ho.IDB_NOT_SUPPORTED=!1,ho.MISSING_INDEX=!1,ho.MISSING_OBJECT_STORES=!1,ho.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ho.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ho.QUOTA_EXCEEDED=!1,ho.QUOTA_MAYBE_EXCEEDED=!0,ho.UNKNOWN_ABORT=!0,ho.INCOMPATIBLE_DB_VERSION=!1,ho);function jo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?eo[a]:c;d=d===void 0?go[a]:d;e=e===void 0?io[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,jo.prototype)}
x(jo,V);function ko(a,b){jo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},eo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ko.prototype)}
x(ko,jo);function lo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,lo.prototype)}
x(lo,Error);var mo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function no(a,b,c,d){b=$n(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof jo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new jo("QUOTA_EXCEEDED",a);if(He&&e.name==="UnknownError")return new jo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof lo)return new jo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&mo.some(function(f){return e.message.includes(f)}))return new jo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new jo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",kd:e.name})];e.level="WARNING";return e}
function oo(a,b,c){var d=Pn();return new jo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function po(a){if(!a)throw Error();throw a;}
function qo(a){return a}
function ro(a){this.h=a}
function so(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
so.all=function(a){return new so(new ro(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)so.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
so.resolve=function(a){return new so(new ro(function(b,c){a instanceof so?a.then(b,c):b(a)}))};
so.reject=function(a){return new so(new ro(function(b,c){c(a)}))};
so.prototype.then=function(a,b){var c=this,d=a!=null?a:qo,e=b!=null?b:po;return new so(new ro(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){to(c,c,d,f,g)}),c.i.push(function(){uo(c,c,e,f,g)})):c.state.status==="FULFILLED"?to(c,c,d,f,g):c.state.status==="REJECTED"&&uo(c,c,e,f,g)}))};
so.prototype.catch=function(a){return this.then(void 0,a)};
function to(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof so?vo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function uo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof so?vo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function vo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof so?vo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function wo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function xo(a){return new Promise(function(b,c){wo(a,b,c)})}
function yo(a){return new so(new ro(function(b,c){wo(a,b,c)}))}
;function zo(a,b){return new so(new ro(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Ao=window,W=Ao.ytcsi&&Ao.ytcsi.now?Ao.ytcsi.now:Ao.performance&&Ao.performance.timing&&Ao.performance.now&&Ao.performance.timing.navigationStart?function(){return Ao.performance.timing.navigationStart+Ao.performance.now()}:function(){return(new Date).getTime()};function Bo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
p=Bo.prototype;p.add=function(a,b,c){return Co(this,[a],{mode:"readwrite",la:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Co(this,[a],{mode:"readwrite",la:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Co(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).count(b)})};
function Do(a,b,c){a=a.h.createObjectStore(b,c);return new Eo(a)}
p.delete=function(a,b){return Co(this,[a],{mode:"readwrite",la:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Co(this,[a],{mode:"readonly",la:!0},function(c){return c.objectStore(a).get(b)})};
function Fo(a,b,c){return Co(a,[b],{mode:"readwrite",la:!0},function(d){d=d.objectStore(b);return yo(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Co(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,u,y;return B(function(z){switch(z.h){case 1:var A={mode:"readonly",la:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?A.mode=c:Object.assign(A,c);e=A;a.transactionCount++;f=e.la?3:1;g=0;case 2:if(h){z.F(4);break}g++;k=Math.round(W());Aa(z,5);l=a.h.transaction(b,e.mode);A=z.yield;var H=new Go(l);H=Ho(H,d);return A.call(z,H,7);case 7:return m=z.i,n=Math.round(W()),Io(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:r=Ba(z);t=Math.round(W());u=no(r,
a.h.name,b.join(),a.h.version);if((y=u instanceof jo&&!u.h)||g>=f)Io(a,k,t,g,u,b.join(),e),h=u;z.F(2);break;case 4:return z.return(Promise.reject(h))}})}
function Io(a,b,c,d,e,f,g){b=c-b;e?(e instanceof jo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Yn("QUOTA_EXCEEDED",{dbName:$n(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof jo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=Math.pow(2,31)&&(c=0),Yn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Jo(a,!1,d,f,b,g.tag),Xn(e)):Jo(a,!0,d,f,b,g.tag)}
function Jo(a,b,c,d,e,f){Yn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Eo(a){this.h=a}
p=Eo.prototype;p.add=function(a,b){return yo(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return yo(this.h.clear()).then(function(){})};
function Ko(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return yo(this.h.count(a))};
function Lo(a,b){return Mo(a,{query:b},function(c){return c.delete().then(function(){return No(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?Lo(this,a):yo(this.h.delete(a))};
p.get=function(a){return yo(this.h.get(a))};
p.index=function(a){try{return new Oo(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new lo(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function Mo(a,b,c){a=a.h.openCursor(b.query,b.direction);return Po(a).then(function(d){return zo(d,c)})}
function Go(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=jo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Ho(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Go.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new jo("EXPLICIT_ABORT");};
Go.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Eo(a),this.i.set(a,b));return b};
function Oo(a){this.h=a}
p=Oo.prototype;p.count=function(a){return yo(this.h.count(a))};
p.delete=function(a){return Qo(this,{query:a},function(b){return b.delete().then(function(){return No(b)})})};
p.get=function(a){return yo(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function Qo(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Po(a).then(function(d){return zo(d,c)})}
function Ro(a,b){this.request=a;this.cursor=b}
function Po(a){return yo(a).then(function(b){return b?new Ro(a,b):null})}
function No(a){a.cursor.continue(void 0);return Po(a.request)}
Ro.prototype.delete=function(){return yo(this.cursor.delete()).then(function(){})};
Ro.prototype.getValue=function(){return this.cursor.value};
Ro.prototype.update=function(a){return yo(this.cursor.update(a))};function So(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Bo(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Id,k=c.blocking,l=c.Ue,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Yn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:$n(a)});var u=f(),y=new Go(g.transaction);
m&&m(u,function(z){return t.oldVersion<z&&t.newVersion>=z},y);
y.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Yn("IDB_UNEXPECTEDLY_CLOSED",{dbName:$n(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function To(a,b,c){c=c===void 0?{}:c;return So(a,b,c)}
function Uo(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Id)&&c.addEventListener("blocked",function(){e()}),g.yield(xo(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Ba(g),no(f,a,"",-1);})}
;function Vo(a,b){this.name=a;this.options=b;this.j=!0;this.D=this.o=0}
Vo.prototype.i=function(a,b,c){c=c===void 0?{}:c;return To(a,b,c)};
Vo.prototype.delete=function(a){a=a===void 0?{}:a;return Uo(this.name,a)};
function Wo(a,b){return new jo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Xo(a,b){if(!b)throw oo("openWithToken",$n(a.name));return a.open()}
Vo.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,u;return B(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",Aa(y,2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=y.i,A=c.options,H=[],T=w(Object.keys(A.ub)),O=T.next();!O.done;O=T.next()){O=O.value;var ea=A.ub[O],Ea=ea.xe===void 0?Number.MAX_VALUE:ea.xe;!(z.h.version>=ea.Bb)||z.h.version>=Ea||z.h.objectStoreNames.contains(O)||H.push(O)}k=H;if(k.length===0){y.F(5);break}l=Object.keys(c.options.ub);
m=h.objectStoreNames();if(c.D<cm("ytidb_reopen_db_retries",0))return c.D++,h.close(),Xn(new jo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.o<cm("ytidb_remake_db_retries",1))){y.F(6);break}c.o++;return y.yield(c.delete(),7);case 7:return Xn(new jo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());case 6:throw new ko(m,l);case 5:return y.return(h);case 2:n=Ba(y);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){y.F(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=y.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,Wo(c,t);return y.return(r);case 8:throw b(),n instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),no(n,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Wo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ue:b,upgrade:this.options.upgrade};return this.h=d=a()};var Yo=new Vo("YtIdbMeta",{ub:{databases:{Bb:1}},upgrade:function(a,b){b(1)&&Do(a,"databases",{keyPath:"actualName"})}});
function Zo(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Xo(Yo,b),2);c=d.i;return d.return(Co(c,["databases"],{la:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return yo(f.h.put(a,void 0)).then(function(){})})}))})}
function $o(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(Xo(Yo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function ap(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(Xo(Yo,b),2)):e.h!=3?(d=e.i,e.yield(Co(d,["databases"],{la:!0,mode:"readonly"},function(f){c.length=0;return Mo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return No(g)})}),3)):e.return(c)})}
function bp(a){return ap(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function cp(a,b,c){return ap(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function dp(a){var b,c;return B(function(d){if(d.h==1)return b=en("YtIdbMeta hasAnyMeta other"),d.yield(ap(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var ep,fp=new function(){}(new function(){});
function gp(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=Pn();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ao)f=/WebKit\/([0-9]+)/.exec(Nc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Nc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Zc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Zo(d,fp),4);case 4:return e.yield($o("yt-idb-test-do-not-use",fp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function hp(){if(ep!==void 0)return ep;Sn=!0;return ep=gp().then(function(a){Sn=!1;var b;if((b=On())!=null&&b.h){var c;b={hasSucceededOnce:((c=Pn())==null?void 0:c.hasSucceededOnce)||a};var d;(d=On())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function ip(){return F("ytglobal.idbToken_")||void 0}
function jp(){var a=ip();return a?Promise.resolve(a):hp().then(function(b){(b=b?fp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var kp=0;function lp(a,b){kp||(kp=oj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(jp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(cp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.F(6);break}f=e[0];return h.yield(Uo(f.actualName),7);case 7:return h.yield($o(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Ba(h),Xn(g),d=!1;case 4:oj.qa(kp),kp=0,d&&lp(a,b),h.h=0}})}))}
function mp(){var a;return B(function(b){return b.h==1?b.yield(jp(),2):(a=b.i)?b.return(dp(a)):b.return(!1)})}
new $i;function np(a){if(!dn())throw a=new jo("AUTH_INVALID",{dbName:a}),Xn(a),a;var b=en();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function op(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(jp(),2);case 2:g=m.i;if(!g)throw h=oo("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Xn(h),h;Zn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:np(a);Aa(m,3);return m.yield(Zo(k,g),5);case 5:return m.yield(To(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),Aa(m,7),m.yield($o(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Ba(m);case 8:throw l;}})}
function pp(a,b,c){c=c===void 0?{}:c;return op(a,b,!1,c)}
function qp(a,b,c){c=c===void 0?{}:c;return op(a,b,!0,c)}
function rp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(jp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Zn(a);d=np(a);return e.yield(Uo(d.actualName,b),3)}return e.yield($o(d.actualName,c),0)})}
function sp(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(Uo(d.actualName,b),2):e.yield($o(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function tp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(jp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Zn("LogsDatabaseV2");return d.yield(bp(b),3)}c=d.i;return d.yield(sp(c,a,b),0)})}
function up(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(jp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Zn(a);return d.yield(Uo(a,b),3)}return d.yield($o(a,c),0)})}
;function vp(a,b){Vo.call(this,a,b);this.options=b;Zn(a)}
x(vp,Vo);function wp(a,b){var c;return function(){c||(c=new vp(a,b));return c}}
vp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?qp:pp)(a,b,Object.assign({},c))};
vp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?up:rp)(this.name,a)};
function xp(a,b){return wp(a,b)}
;var yp={},zp=xp("ytGcfConfig",{ub:(yp.coldConfigStore={Bb:1},yp.hotConfigStore={Bb:1},yp),shared:!1,upgrade:function(a,b){b(1)&&(Ko(Do(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Ko(Do(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Ap(a){return Xo(zp(),a)}
function Bp(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Ap(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Fo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Cp(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Ap(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Fo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Dp(a){var b,c;return B(function(d){return d.h==1?d.yield(Ap(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Co(b,["coldConfigStore"],{mode:"readwrite",la:!0},function(e){return Qo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Ep(a){var b,c;return B(function(d){return d.h==1?d.yield(Ap(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Co(b,["hotConfigStore"],{mode:"readwrite",la:!0},function(e){return Qo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Fp(){I.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
x(Fp,I);Fp.prototype.ba=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;I.prototype.ba.call(this)};function Gp(){this.h=0;this.i=new Fp}
function Hp(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function Ip(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.F(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=ip();if(!d){g.F(3);break}if(c){g.F(4);break}return g.yield(Ep(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Bp(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Jp(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!U("start_client_gcf"))return h.F(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=ip())?c?h.F(4):h.yield(Dp(d),5):h.F(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.F(0);g=c.configData;return h.yield(Cp(c,b,g,d),0)})}
function Kp(){if(!Gp.h){var a=new Gp;Gp.h=a}a=Gp.h;var b=W()-a.h;if(!(a.h!==0&&b<cm("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Gp.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Lp(){return"INNERTUBE_API_KEY"in Dl&&"INNERTUBE_API_VERSION"in Dl}
function Mp(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ae:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ng:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),ce:S("INNERTUBE_CONTEXT_HL"),be:S("INNERTUBE_CONTEXT_GL"),de:S("INNERTUBE_HOST_OVERRIDE")||"",ge:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ee:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Np(a){var b={client:{hl:a.ce,gl:a.be,clientName:a.cd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ae}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=dm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.cd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=Im()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=bn())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&
(a=cn())&&b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=Kp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(Rl(S("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function Op(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().Fg:(a=Lm(Km()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Pp=typeof TextEncoder!=="undefined"?new TextEncoder:null,Qp=Pp?function(a){return Pp.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Rp(a,b){this.version=a;this.args=b}
Rp.prototype.serialize=function(){return{version:this.version,args:this.args}};function Sp(a,b){this.topic=a;this.h=b}
Sp.prototype.toString=function(){return this.topic};var Tp=F("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.ib;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",Tp);var Up=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",Up);var Vp=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",Vp);var Wp=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",Wp);
E("ytPubsub2Pubsub2SkipSubKey",null);function Xp(a,b){var c=Yp();c&&c.publish.call(c,a.toString(),a,b)}
function Zp(a){var b=$p,c=Yp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Up[d])try{if(f&&b instanceof Sp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.yd){var l=new h;h.yd=l.version}var m=h.yd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=r[k];var y=u}else y=[];f=n.call(m,h,y)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){Jl(z)}},Wp[b.toString()]?F("yt.scheduler.instance")?oj.pa(g):$l(g,0):g())});
Up[d]=!0;Vp[b.toString()]||(Vp[b.toString()]=[]);Vp[b.toString()].push(d);return d}
function aq(){var a=bq,b=Zp(function(c){a.apply(void 0,arguments);cq(b)});
return b}
function cq(a){var b=Yp();b&&(typeof a==="number"&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete Up[c]}))}
function Yp(){return F("ytPubsub2Pubsub2Instance")}
;function dq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Xp("meta_logging_csi_event",{timerName:a,gh:b})}
;var eq=void 0,fq=void 0;function gq(){fq||(fq=cl(S("WORKER_SERIALIZATION_URL")));return fq||void 0}
function hq(){var a=gq();eq||a===void 0||(eq=new Worker(kb(a),void 0));return eq}
;var iq=cm("max_body_size_to_compress",5E5),jq=cm("min_body_size_to_compress",500),kq=!0,lq=0,mq=0,nq=cm("compression_performance_threshold_lr",250),oq=cm("slow_compressions_before_abandon_count",4),pq=!1,qq=new Map,rq=1,sq=!0;function tq(){if(typeof Worker==="function"&&gq()&&!pq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=qq.get(c.key);d&&(uq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),qq.delete(c.key))}},b=hq();
b&&(b.addEventListener("message",a),b.onerror=function(){qq.clear()},pq=!0)}}
function vq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(kq)try{var g=wq(b);if(g!=null&&(g>iq||g<jq))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!sq||!U("initial_gzip_use_main_thread"))){pq||tq();var h=hq();if(h&&!e){qq.set(rq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:rq});rq++;return}}var k=bl(Qp(b));uq(k,f,a,c,d)}}catch(l){Kl(l),d(a,c)}else d(a,c)}
function uq(a,b,c,d,e){sq=!1;var f=W();b.ticks.gelc=f;mq++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=nq&&(lq++,U("abandon_compression_after_N_slow_zips")?mq===cm("compression_disable_point")&&lq>oq&&(kq=!1):kq=!1);xq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function yq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(kq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=wq(g);if(h!=null&&(h>iq||h<jq))return a;c=b?{level:1}:void 0;f=bl(Qp(g),c);var k=W();e.ticks.gelc=k;if(b){mq++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=nq)if(lq++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=lq/mq;var l=oq/cm("compression_disable_point");mq>0&&mq%cm("compression_disable_point")===0&&b>=l&&(kq=!1)}else kq=!1;xq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return Kl(m),a}}else return a}
function wq(a){try{return(new Blob(a.split(""))).size}catch(b){return Kl(b),null}}
function xq(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||dq("gel_compression",a,{sampleRate:.1})}
;function zq(a){a=Object.assign({},a);delete a.Authorization;var b=Mh();if(b){var c=new sj;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=Ke(c.digest(),3)}return a}
;var Aq;function Bq(){Aq||(Aq=new Nn("yt.innertube"));return Aq}
function Cq(a,b,c,d){if(d)return null;d=Bq().get("nextId",!0)||1;var e=Bq().get("requests",!0)||{};e[d]={method:a,request:b,authState:zq(c),requestTime:Math.round(W())};Bq().set("nextId",d+1,86400,!0);Bq().set("requests",e,86400,!0);return d}
function Dq(a){var b=Bq().get("requests",!0)||{};delete b[a];Bq().set("requests",b,86400,!0)}
function Eq(a){var b=Bq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=zq(Op(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Fq(a,d.method,e,{}));delete b[c]}}Bq().set("requests",b,86400,!0)}}
;function Gq(a){this.Tb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.mb=function(){};
this.now=Date.now;this.Eb=!1;var b;this.vd=(b=a.vd)!=null?b:100;var c;this.qd=(c=a.qd)!=null?c:1;var d;this.nd=(d=a.nd)!=null?d:2592E6;var e;this.md=(e=a.md)!=null?e:12E4;var f;this.pd=(f=a.pd)!=null?f:5E3;var g;this.X=(g=a.X)!=null?g:void 0;this.Yb=!!a.Yb;var h;this.Wb=(h=a.Wb)!=null?h:.1;var k;this.hc=(k=a.hc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.mb&&(this.mb=a.mb);a.Eb&&(this.Eb=a.Eb);a.Tb&&(this.Tb=a.Tb);this.Y=a.Y;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Gc=a.Gc;this.Dc=a.Dc;Hq(this)&&(!this.Y||this.Y("networkless_logging"))&&Iq(this)}
function Iq(a){Hq(a)&&!a.Eb&&(a.h=!0,a.Yb&&Math.random()<=a.Wb&&a.ga.Jd(a.X),Jq(a),a.fa.va()&&a.Ob(),a.fa.listen(a.Gc,a.Ob.bind(a)),a.fa.listen(a.Dc,a.Qc.bind(a)))}
p=Gq.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Hq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.X).then(function(e){d.id=e;c.fa.va()&&Kq(c,d)}).catch(function(e){Kq(c,d);
Lq(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Hq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y&&this.Y("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.va()||this.Y&&this.Y("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.X).catch(function(l){Lq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.X).catch(function(g){d.sendFn(a,b,e.skipRetry);
Lq(d,g)})}else this.sendFn(a,b,this.Y&&this.Y("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Hq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.lb(d.id,c.X):e=!0;c.fa.cb&&c.Y&&c.Y("vss_network_hint")&&c.fa.cb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.X).then(function(g){d.id=g;e&&c.ga.lb(d.id,c.X)}).catch(function(g){Lq(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Ob=function(){var a=this;if(!Hq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.Xc("NEW",a.X),2);if(c.h!=3)return b=c.i,b?c.yield(Kq(a,b),3):(a.Qc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.vd))};
p.Qc=function(){this.Ca.qa(this.i);this.i=0};
function Kq(a,b){var c;return B(function(d){switch(d.h){case 1:if(!Hq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.F(2);break}return d.yield(a.ga.ke(b.id,a.X),3);case 3:(c=d.i)||a.mb(Error("The request cannot be found in the database."));case 2:if(Mq(a,b,a.nd)){d.F(4);break}a.mb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.F(5);break}return d.yield(a.ga.lb(b.id,a.X),5);case 5:return d.return();case 4:b.skipRetry||(b=Nq(a,
b));if(!b){d.F(0);break}if(!b.skipRetry||b.id===void 0){d.F(8);break}return d.yield(a.ga.lb(b.id,a.X),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function Nq(a,b){if(!Hq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=Oq(f);(h=Pq(f))&&a.Y&&a.Y("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Y&&a.Y("nwl_consider_error_code")&&g||a.Y&&!a.Y("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.hc)){m.F(2);break}if(!a.fa.kc){m.F(3);break}return m.yield(a.fa.kc(),3);case 3:if(a.fa.va()){m.F(2);break}c(e,f);if(!a.Y||!a.Y("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.F(6);
break}return m.yield(a.ga.Hc(b.id,a.X,!1),6);case 6:return m.return();case 2:if(a.Y&&a.Y("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.hc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.F(8);break}return b.sendCount<a.qd?m.yield(a.ga.Hc(b.id,a.X,!0,h?!1:void 0),12):m.yield(a.ga.lb(b.id,a.X),8);case 12:a.Ca.pa(function(){a.fa.va()&&a.Ob()},a.pd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.F(2):h.yield(a.ga.lb(b.id,a.X),2);a.fa.cb&&a.Y&&a.Y("vss_network_hint")&&a.fa.cb(!0);d(e,f);h.h=0})};
return b}
function Mq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Jq(a){if(!Hq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.Xc("QUEUED",a.X).then(function(b){b&&!Mq(a,b,a.md)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.F(2):c.yield(a.ga.Hc(b.id,a.X),2);Jq(a);c.h=0})}):a.fa.va()&&a.Ob()})}
function Lq(a,b){a.Bd&&!a.fa.va()?a.Bd(b):a.handleError(b)}
function Hq(a){return!!a.X||a.Tb}
function Oq(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Pq(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Qq;
function Rq(){if(Qq)return Qq();var a={};Qq=xp("LogsDatabaseV2",{ub:(a.LogsRequestsStore={Bb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Do(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Ko(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Qq()}
;function Sq(a){return Xo(Rq(),a)}
function Tq(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Sq(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Fo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Uq(c);return g.return(f)})}
function Vq(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Sq(b),2);if(m.h!=3)return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Co(d,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(n){return Qo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=W();Uq(c);return m.return(l)})}
function Wq(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Sq(b),2);c=d.i;return d.return(Co(c,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",yo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Xq(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(Sq(b),2);e=f.i;return f.return(Co(e,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),yo(h.h.put(k,void 0)).then(function(){return k})):so.resolve(void 0)})}))})}
function Yq(a,b){var c;return B(function(d){if(d.h==1)return d.yield(Sq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Zq(a){var b,c;return B(function(d){if(d.h==1)return d.yield(Sq(a),2);b=d.i;c=W()-2592E6;return d.yield(Co(b,["LogsRequestsStore"],{mode:"readwrite",la:!0},function(e){return Mo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return No(f)})})}),0)})}
function $q(){B(function(a){return a.yield(tp(),0)})}
function Uq(a){U("nwl_csi_killswitch")||dq("networkless_performance",a,{sampleRate:1})}
;var ar={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var br={},cr=xp("ServiceWorkerLogsDatabase",{ub:(br.SWHealthLog={Bb:1},br),shared:!0,upgrade:function(a,b){b(1)&&Ko(Do(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function dr(a){return Xo(cr(),a)}
function er(a){var b,c;B(function(d){if(d.h==1)return d.yield(dr(a),2);b=d.i;c=W()-2592E6;return d.yield(Co(b,["SWHealthLog"],{mode:"readwrite",la:!0},function(e){return Mo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return No(f)})})}),0)})}
function fr(a){var b;return B(function(c){if(c.h==1)return c.yield(dr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var gr={},hr=0;function ir(a){var b=new Image,c=""+hr++;gr[c]=b;b.onload=b.onerror=function(){delete gr[c]};
b.src=a}
;var jr;function kr(){jr||(jr=new Nn("yt.offline"));return jr}
function lr(a){if(U("offline_error_handling")){var b=kr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);kr().set("errors",b,2592E3,!0)}}
;function mr(){this.h=new Map;this.i=!1}
function nr(){if(!mr.h){var a=F("yt.networkRequestMonitor.instance")||new mr;E("yt.networkRequestMonitor.instance",a);mr.h=a}return mr.h}
mr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
mr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
mr.prototype.removeParams=function(a){return a.split("?")[0]};
mr.prototype.removeParams=mr.prototype.removeParams;mr.prototype.isEndpointCFR=mr.prototype.isEndpointCFR;mr.prototype.requestComplete=mr.prototype.requestComplete;mr.getInstance=nr;function or(){yd.call(this);var a=this;this.j=!1;this.i=nj();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=kr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Jl(d)}kr().set("errors",{},2592E3,!0)}}})}
x(or,yd);function pr(){if(!or.h){var a=F("yt.networkStatusManager.instance")||new or;E("yt.networkStatusManager.instance",a);or.h=a}return or.h}
p=or.prototype;p.va=function(){return this.i.va()};
p.cb=function(a){this.i.i=a};
p.Wd=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Od=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.kc=function(a){a=lj(this.i,a);a.then(function(b){U("use_cfr_monitor")&&nr().requestComplete("generate_204",b)});
return a};
or.prototype.sendNetworkCheckRequest=or.prototype.kc;or.prototype.listen=or.prototype.listen;or.prototype.enableErrorFlushing=or.prototype.Od;or.prototype.getWindowStatus=or.prototype.Wd;or.prototype.networkStatusHint=or.prototype.cb;or.prototype.isNetworkAvailable=or.prototype.va;or.getInstance=pr;function qr(a){a=a===void 0?{}:a;yd.call(this);var b=this;this.i=this.u=0;this.j=pr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){rr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){rr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){zd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){zd(b,"publicytnetworkstatus-offline")})))}
x(qr,yd);qr.prototype.va=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
qr.prototype.cb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
qr.prototype.kc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&nr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.cb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function rr(a,b){a.rateLimit?a.i?(oj.qa(a.u),a.u=oj.pa(function(){a.o!==b&&(zd(a,b),a.o=b,a.i=W())},a.rateLimit-(W()-a.i))):(zd(a,b),a.o=b,a.i=W()):zd(a,b)}
;var sr;function tr(){var a=Gq.call;sr||(sr=new qr({Sg:!0,Lg:!0}));a.call(Gq,this,{ga:{Jd:Zq,lb:Yq,Xc:Vq,ke:Wq,Hc:Xq,set:Tq},fa:sr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Kl(new V(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Jl(b)},
mb:Kl,sendFn:ur,now:W,Bd:lr,Ca:Mn(),Gc:"publicytnetworkstatus-online",Dc:"publicytnetworkstatus-offline",Yb:!0,Wb:.1,hc:cm("potential_esf_error_limit",10),Y:U,Eb:!(dn()&&vr())});this.j=new $i;U("networkless_immediately_drop_all_requests")&&$q();up("LogsDatabaseV2")}
x(tr,Gq);function wr(){var a=F("yt.networklessRequestController.instance");a||(a=new tr,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&jp().then(function(b){a.X=b;Iq(a);a.j.resolve();a.Yb&&Math.random()<=a.Wb&&a.X&&er(a.X);U("networkless_immediately_drop_sw_health_store")&&xr(a)}));
return a}
tr.prototype.writeThenSend=function(a,b){b||(b={});b=yr(a,b);dn()||(this.h=!1);Gq.prototype.writeThenSend.call(this,a,b)};
tr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=yr(a,b);dn()||(this.h=!1);Gq.prototype.sendThenWrite.call(this,a,b,c)};
tr.prototype.sendAndWrite=function(a,b){b||(b={});b=yr(a,b);dn()||(this.h=!1);Gq.prototype.sendAndWrite.call(this,a,b)};
tr.prototype.awaitInitialization=function(){return this.j.promise};
function xr(a){var b;B(function(c){if(!a.X)throw b=oo("clearSWHealthLogsDb"),b;return c.return(fr(a.X).catch(function(d){a.handleError(d)}))})}
function ur(a,b,c,d){d=d===void 0?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Cr(a,b);if(U("use_request_time_ms_header"))b.headers&&Ul(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)hm(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)hm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.o){var l=mc(nc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(vc),r=uc(a,0,"ri",n);if(r<0)var t=null;else{var u=a.indexOf("&",r);if(u<0||u>n)u=n;t=decodeURIComponent(a.slice(r+3,u!==-1?u:0).replace(/\+/g," "))}m=t!=="1"}var y=!m;break b}}catch(A){}y=!1}if(y){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(A){}z=!1}c=z?!0:!1}else c=
!1;c||ir(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),vq(a,b.postBody,b,lm,d)):vq(a,JSON.stringify(b.postParams),b,km,d):lm(a,b)}
function yr(a,b){U("use_event_time_ms_header")&&Ul(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Cr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){nr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){nr().requestComplete(a,!0);d(e,f)}}
function vr(){return oc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Dr=!1,Er=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Dr};E("ytNetworklessLoggingInitializationOptions",Er);function Fr(){var a;B(function(b){if(b.h==1)return b.yield(jp(),2);a=b.i;if(!a||!dn()&&!U("nwl_init_require_datasync_id_killswitch")||!vr())return b.F(0);Dr=!0;Er.isNwlInitialized=Dr;return b.yield(wr().awaitInitialization(),0)})}
;function Gr(a){var b=this;this.config_=null;a?this.config_=a:Lp()&&(this.config_=Mp());gn(function(){Eq(b)},5E3)}
Gr.prototype.isReady=function(){!this.config_&&Lp()&&(this.config_=Mp());return!!this.config_};
function Fq(a,b,c,d){function e(u){u=u===void 0?!1:u;var y;if(d.retry&&h!="www.youtube-nocookie.com"&&(u||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(y=Cq(b,c,l,k)),y)){var z=g.onSuccess,A=g.onFetchSuccess;g.onSuccess=function(O,ea){Dq(y);z(O,ea)};
c.onFetchSuccess=function(O,ea){Dq(y);A(O,ea)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?wr().writeThenSend(t,g):wr().sendAndWrite(t,g);
else if(d.compress){var H=!d.networklessOptions.writeThenSend;if(g.postBody){var T=g.postBody;typeof T!=="string"&&(T=JSON.stringify(g.postBody));vq(t,T,g,lm,H)}else vq(t,JSON.stringify(g.postParams),g,km,H)}else U("web_all_payloads_via_jspb")?lm(t,g):km(t,g)}catch(O){if(O.name==="InvalidAccessError")y&&(Dq(y),y=0),Kl(Error("An extension is blocking network request."));else throw O;}y&&gn(function(){Eq(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Kl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);Jl(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,y){if(d.onError)d.onError(y)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.de)&&(h=f);var k=a.config_.ge||!1,l=Op(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},r=a.config_.ee&&f;r=r&&f.startsWith("Bearer");r||(n.key=a.config_.innertubeApiKey);var t=Tl(""+h+m,n||{},!0);(F("ytNetworklessLoggingInitializationOptions")?
Er.isNwlInitialized:Dr)?hp().then(function(u){e(u)}):e(!1)}
;var Hr=0,Ir=ad?"webkit":$c?"moz":Yc?"ms":Xc?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++Hr});var Jr={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Kr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Jr||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Lr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Kr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Kr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Kr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",Mb);var Mr=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Mr);
function Nr(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Or(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Nr(a,b,c,d);if(e)return e;e=++Mr.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Kr(h);if(!Jd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Kr(h);
h.currentTarget=a;return c.call(a,h)};
g=Il(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Pr()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function Qr(a){a&&(typeof a=="string"&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Pr()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var Pr=Ed(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Rr(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.T=Or(window,"mousemove",Xa(this.V,this));a=Xa(this.K,this);typeof a==="function"&&(a=Il(a));this.W=window.setInterval(a,25)}
$a(Rr,I);Rr.prototype.V=function(a){a.h===void 0&&Lr(a);var b=a.h;a.i===void 0&&Lr(a);this.h=new Fd(b,a.i)};
Rr.prototype.K=function(){if(this.h){var a=W();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
Rr.prototype.ba=function(){window.clearInterval(this.W);Qr(this.T)};var Sr={};
function Tr(a){var b=a===void 0?{}:a;a=b.te===void 0?!1:b.te;b=b.Pd===void 0?!0:b.Pd;if(F("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&Ur();Or(document,"keydown",Ur);Or(document,"keyup",Ur);Or(document,"mousedown",Ur);Or(document,"mouseup",Ur);a?Or(window,"touchmove",function(){Vr("touchmove",200)},{passive:!0}):(Or(window,"resize",function(){Vr("resize",200)}),b&&Or(window,"scroll",function(){Vr("scroll",200)}));
new Rr(function(){Vr("mouse",100)});
Or(document,"touchstart",Ur,{passive:!0});Or(document,"touchend",Ur,{passive:!0})}}
function Vr(a,b){Sr[a]||(Sr[a]=!0,oj.pa(function(){Ur();Sr[a]=!1},b))}
function Ur(){F("_lact",window)==null&&Tr();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function Wr(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Xr=D.ytPubsubPubsubInstance||new M,Yr=D.ytPubsubPubsubSubscribedKeys||{},Zr=D.ytPubsubPubsubTopicToKeys||{},$r=D.ytPubsubPubsubIsSynchronous||{};function as(a,b){var c=bs();if(c&&b){var d=c.subscribe(a,function(){function e(){Yr[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{$r[a]?e():$l(e,0)}catch(g){Jl(g)}},void 0);
Yr[d]=!0;Zr[a]||(Zr[a]=[]);Zr[a].push(d);return d}return 0}
function cs(a){var b=bs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete Yr[c]}))}
function ds(a,b){var c=bs();c&&c.publish.apply(c,arguments)}
function es(a){var b=bs();if(b)if(b.clear(a),a)gs(a);else for(var c in Zr)gs(c)}
function bs(){return D.ytPubsubPubsubInstance}
function gs(a){Zr[a]&&(a=Zr[a],Db(a,function(b){Yr[b]&&delete Yr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Pb;M.prototype.publish=M.prototype.ib;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",Xr);E("ytPubsubPubsubTopicToKeys",Zr);E("ytPubsubPubsubIsSynchronous",$r);E("ytPubsubPubsubSubscribedKeys",Yr);var hs=Symbol("injectionDeps");function is(a){this.name=a}
is.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function js(a){this.key=a}
function ks(){this.i=new Map;this.j=new Map;this.h=new Map}
function ls(a,b){a.i.set(b.jc,b);var c=a.j.get(b.jc);if(c)try{c.bh(a.resolve(b.jc))}catch(d){c.Yg(d)}}
ks.prototype.resolve=function(a){return a instanceof js?ms(this,a.key,[],!0):ms(this,a,[])};
function ms(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.xd!==void 0)var e=d.xd;else if(d.bf)e=d[hs]?ns(a,d[hs],c):[],e=d.bf.apply(d,ma(e));else if(d.wd){e=d.wd;var f=e[hs]?ns(a,e[hs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.fh||a.h.set(b,e);return e}
function ns(a,b,c){return b?b.map(function(d){return d instanceof js?ms(a,d.key,c,!0):ms(a,d,c)}):[]}
;var ps;function qs(){ps||(ps=new ks);return ps}
;var rs=window;function ss(){var a,b;return"h5vcc"in rs&&((a=rs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=rs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in rs&&rs.performance.mark&&rs.performance.measure?2:0}
function ts(a){var b=ss();switch(b){case 1:rs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:rs.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function us(a){var b=ss();switch(b){case 1:rs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";rs.performance.mark(c);rs.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var vs=U("web_enable_lifecycle_monitoring")&&ss()!==0,ws=U("web_enable_lifecycle_monitoring");function xs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Mn():d;this.j=c;this.scheduler=d;this.i=new $i;this.h=a;for(a={Za:0};a.Za<this.h.length;a={fc:void 0,Za:a.Za},a.Za++)a.fc=this.h[a.Za],c=function(e){return function(){e.fc.wc();b.h[e.Za].ic=!0;b.h.every(function(f){return f.ic===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.fc),d=this.scheduler.Xa(c,d),this.h[a.Za]=Object.assign({},a.fc,{wc:c,
jobId:d})}
function ys(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.ic||(a.scheduler.qa(c.jobId),a.scheduler.Xa(c.wc,10))}
xs.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.ic||this.scheduler.qa(b.jobId),b.ic=!0;this.i.resolve()};
xs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function zs(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};vs&&ts(this.state)}
p=zs.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;vs&&us(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ys(this.j),this.j=void 0);As(this,a,b);this.state=a;vs&&ts(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Bs(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Bs(a,b){var c=b.filter(function(e){return Cs(a,e)===10}),d=b.filter(function(e){return Cs(a,e)!==10});
return a.B.eh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ae.apply(a,[c].concat(ma(e))),2);a.sd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.Be.apply(a,[c].concat(ma(e)));a.sd.apply(a,[d].concat(ma(e)))}}
p.Be=function(a){for(var b=C.apply(1,arguments),c=Mn(),d=w(a),e=d.next(),f={};!e.done;f={Gb:void 0},e=d.next())f.Gb=e.value,c.zb(function(g){return function(){Ds(g.Gb.name);g.Gb.callback.apply(g.Gb,ma(b));Es(g.Gb.name)}}(f))};
p.Ae=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=Mn(),d=w(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.F(0);f.qb=e.value;f.Rb=void 0;g=function(k){return function(){Ds(k.qb.name);var l=k.qb.callback.apply(k.qb,ma(b));typeof(l==null?void 0:l.then)==="function"?k.Rb=l.then(function(){Es(k.qb.name)}):Es(k.qb.name)}}(f);
c.zb(g);return f.Rb?h.yield(f.Rb,3):h.F(3)}f={qb:void 0,Rb:void 0};e=d.next();return h.F(2)})};
p.sd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{wc:function(){Ds(e.name);e.callback.apply(e,ma(b));Es(e.name)},
priority:Cs(c,e)}});
d.length&&(this.j=new xs(d))};
function Cs(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Ds(a){vs&&a&&ts(a)}
function Es(a){vs&&a&&us(a)}
function As(a,b,c){ws&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(zs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Fs(a){zs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.D},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Gs;x(Fs,zs);Fs.prototype.i=function(a,b){var c=this;this.h=gn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
Fs.prototype.D=function(a,b){this.h&&(oj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function Hs(){Gs||(Gs=new Fs);return Gs}
;var Is=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return Is});function Js(){this.store={};this.h={}}
Js.prototype.storePayload=function(a,b){a=Ks(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Js.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ls(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
Js.prototype.extractMatchingEntries=function(a){a=Ls(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
Js.prototype.getSequenceCount=function(a){a=Ls(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ls(a,b){var c=Ks(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Ks(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ms(b.auth,g[0])){var h=b.isJspb;Ms(h===void 0?"undefined":h?"true":"false",g[1])&&Ms(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Ms(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ms(a,b){return a===void 0||a==="undefined"?!0:a===b}
Js.prototype.getSequenceCount=Js.prototype.getSequenceCount;Js.prototype.extractMatchingEntries=Js.prototype.extractMatchingEntries;Js.prototype.smartExtractMatchingEntries=Js.prototype.smartExtractMatchingEntries;Js.prototype.storePayload=Js.prototype.storePayload;function Ks(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Ns(a,b){if(a)return a[b.name]}
;var Os=cm("initial_gel_batch_timeout",2E3),Ps=cm("gel_queue_timeout_max_ms",6E4),Qs=Math.pow(2,16)-1,Rs=cm("gel_min_batch_size",5),Ss=void 0;function Ts(){this.o=this.h=this.i=0;this.j=!1}
var Us=new Ts,Vs=new Ts,Ws=new Ts,Xs=new Ts,Ys,Zs=!0,$s=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",$s);var at={};function bt(){var a=F("yt.logging.ims");a||(a=new Js,E("yt.logging.ims",a));return a}
function ct(a,b){if(a.endpoint==="log_event"){dt();var c=et(a),d=ft(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=ar[d||""];var f,g,h,k=qs().resolve(new js(Gp))==null?void 0:(f=Hp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;k=gt(e.tier);if(k===400){ht(a,b);return}}at[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};bt().storePayload(e,a.payload);jt(b,c,e,d==="gelDebuggingEvent")}}
function jt(a,b,c,d){function e(){kt({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Ss=new a);a=cm("tvhtml5_logging_max_batch_ads_fork")||cm("tvhtml5_logging_max_batch")||cm("web_logging_max_batch")||100;var g=W(),h=lt(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=bt().getSequenceCount(c));d>=1E3?e():d>=a?Ys||(Ys=mt(function(){e();Ys=void 0},0)):g-k>=10&&(nt(f,c.tier),h.o=g)}
function ht(a,b){if(a.endpoint==="log_event"){dt();var c=et(a),d=new Map;d.set(c,[a.payload]);var e=ft(a.payload)||"";b&&(Ss=new b);return new Wd(function(f,g){Ss&&Ss.isReady()?ot(d,Ss,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function et(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);$s[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function kt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Wd(function(e,f){var g=lt(c,d),h=g.j;g.j=!1;pt(g.i);pt(g.h);g.h=0;Ss&&Ss.isReady()?d===void 0&&U("enable_web_tiered_gel")?qt(e,f,a,b,c,300,h):qt(e,f,a,b,c,d,h):(nt(c,d),e())})}
function qt(a,b,c,d,e,f,g){var h=Ss;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=U("enable_web_tiered_gel")?bt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):bt().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(at)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?bt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):bt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete at[l];ot(k,h,a,b,c,!1,g)}
function nt(a,b){function c(){kt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=lt(a,b),e=d===Xs||d===Ws?5E3:Ps;U("web_gel_timeout_cap")&&!d.h&&(e=mt(function(){c()},e),d.h=e);
pt(d.i);e=S("LOGGING_BATCH_TIMEOUT",cm("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Zs&&(e=Os);e=mt(function(){cm("gel_min_batch_size")>0?bt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Rs&&c():c()},e);
d.i=e}
function ot(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var m=a.next();for(g={};!m.done;g={Cc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Fc:void 0,Ec:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Sb({context:Np(b.config_||Mp())});if(!Qa(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=$s[m])&&
rt(g.batchRequest,m,n);delete $s[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";st(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Fc=function(r){U("start_client_gcf")&&oj.pa(function(){return B(function(t){return t.yield(tt(r),0)})});
k--;k||c()};
g.Cc=0;g.Ec=function(r){return function(){r.Cc++;if(e.bypassNetworkless&&r.Cc===1)try{Fq(b,l,r.batchRequest,ut({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Fc,r.Ec,f)),Zs=!1}catch(t){Jl(t),d()}k--;k||c()}}(g);
try{Fq(b,l,g.batchRequest,ut(e,g.dangerousLogToVisitorSession,g.Fc,g.Ec,f)),Zs=!1}catch(r){Jl(r),d()}}}
function ut(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Hg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};vt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function st(a,b,c){vt()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Qs/2)),c++,c>Qs&&(c=1),El("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function rt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function dt(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=bm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(Is=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",Is),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0))}
function vt(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function mt(a,b){return U("transport_use_scheduler")===!1?$l(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?gn(function(){if(Hs().currentState==="none")a();else{var c={};Hs().install((c.none={callback:a},c))}},b):gn(a,b)}
function pt(a){U("transport_use_scheduler")?oj.qa(a):window.clearTimeout(a)}
function tt(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Ns(d,gl),g=(f=d)==null?void 0:f.hotHashData,h=Ns(d,fl),l=(k=d)==null?void 0:k.coldHashData,(m=qs().resolve(new js(Gp)))?g?e?n.yield(Ip(m,g,e),2):n.yield(Ip(m,g),2):n.F(2):n.return()):l?h?n.yield(Jp(m,l,h),0):n.yield(Jp(m,l),0):n.F(0)})}
function lt(a,b){b=b===void 0?200:b;return a?b===300?Xs:Vs:b===300?Ws:Us}
function ft(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ar[b])return b}
function gt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var wt=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",wt);
function xt(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Wr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,wt[b]=b in wt?wt[b]+1:0,a.sequence={index:wt[b],groupKey:b},d.endOfSequence&&delete wt[d.sequenceGroup]);(d.sendIsolatedPayload?ht:ct)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Wn(a,b,c){c=c===void 0?{}:c;var d=Gr;S("ytLoggingEventsDefaultDisabled",!1)&&Gr===Gr&&(d=null);xt(a,b,d,c)}
;var zt=new Set,At=0,Bt=0,Ct=0,Dt=[],Et=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Vn(a){Ft(a)}
function Gt(a){Ft(a,"WARNING")}
function Ht(a){a instanceof Error?Ft(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Gt(a))}
function Ft(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(At>=5))){d=Dt;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=Em(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var u="params."+r,y=Gm(t[r]);c[u]=y;n+=u.length+y.length;if(n>500)break}}else c.params=Gm(t)}if(d.length)for(r=0;r<d.length&&!(n=Em(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Am();c=w(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.Tg)){a=d.weight;break a}a=w(a.Ra);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=w(um);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.ec[r.name])for(e=w(c.ec[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Ac(f);break}r.params||(r.params={});a=Am();r.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Ra.length;r.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);
if(r.sampleWeight!==0&&!zt.has(r.message)){if(g&&U("web_enable_error_204"))It(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Bm.ib("handleError",r),U("record_app_crashed_web")&&Ct===0&&r.sampleWeight===1&&(Ct++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),Wn("appCrashed",g)),Bt++):b==="WARNING"&&Bm.ib("handleWarning",r);if(U("kevlar_gel_error_routing")){g=b;h=h===
void 0?{}:h;b:{a=w(Et);for(c=a.next();!c.done;c=a.next())if(bo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Fl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=w(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Wn("clientError",h),(g==="ERROR"||U("errors_flush_gel_always_killswitch"))&&kt(void 0,void 0,!1))}U("suppress_error_204_logging")||It(b,r)}try{zt.add(r.message)}catch(z){}At++}}}
function It(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}lm(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Jt(){this.register=new Map}
function Kt(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Xg("ABORTED")}
Jt.prototype.clear=function(){Kt(this);this.register.clear()};
var Lt=new Jt;var Mt=Date.now().toString();
function Nt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Mt)for(a=1,b=0;b<Mt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Mt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ot,Pt=D.ytLoggingDocDocumentNonce_;Pt||(Pt=Nt(),E("ytLoggingDocDocumentNonce_",Pt));Ot=Pt;function Qt(a){this.h=a}
p=Qt.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new nl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&Jg(a,2,$f(this.h.veType)),this.h.veCounter!==void 0&&Jg(a,6,$f(this.h.veCounter)),this.h.elementIndex!==void 0&&Jg(a,3,$f(this.h.elementIndex)),this.h.isCounterfactual&&Jg(a,5,Wf(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Yg(a,nl,7,b)}this.h.youtubeData!==void 0&&Yg(a,hl,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function Rt(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function St(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},El("client-screen-nonce-store",c));c[b]=a}
function Tt(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ut(a){return S(Tt(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",Ut);function Vt(){var a=S("csn-to-ctt-auth-info");a||(a={},El("csn-to-ctt-auth-info",a));return a}
function Wt(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Xt(a){a=Rt(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Xt);function Yt(a,b,c){var d=Vt();(c=Xt(c))&&delete d[c];b&&(d[a]=b)}
function Zt(a){return Vt()[a]}
E("yt_logging_screen.getCttAuthInfo",Zt);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Rt(c)||b!==S(Tt(c)))if(Yt(a,d,c),St(a,c),El(Tt(c),b),b=function(){setTimeout(function(){a&&Wn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ot,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function $t(){var a=Rb(au),b;return(new Wd(function(c,d){a.onSuccess=function(e){Zl(e)?c(new bu(e)):d(new cu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new cu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new cu("Request timed out","net.timeout",e))};
b=lm("//googleads.g.doubleclick.net/pagead/id",a)})).lc(function(c){if(c instanceof ce){var d;
(d=b)==null||d.abort()}return ae(c)})}
function cu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
x(cu,bb);function bu(a){this.xhr=a}
;function du(){this.h=0;this.i=null}
du.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:eu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:fu(a):this};
du.prototype.getValue=function(){return this.i};
du.prototype.isRejected=function(){return this.h==2};
du.prototype.$goog_Thenable=!0;function fu(a){var b=new du;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function eu(a){var b=new du;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function gu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Ul(a)?"same-origin":"cors",credentials:Ul(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function hu(){return Kh()||(Fe||Ge)&&bo("applewebkit")&&!bo("version")&&(!bo("safari")||bo("gsa/"))||bd&&bo("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function iu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in ll)if(ll[d]==c.embeddedPlayerMode){b=ll[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function ju(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ku;this.isTimeout=a instanceof cu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ce}
x(ju,bb);ju.prototype.name="BiscottiError";function ku(){bb.call(this,"Biscotti ID is missing from server")}
x(ku,bb);ku.prototype.name="BiscottiMissingError";var au={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},lu=null;function mu(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!hu())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(Pb(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(iu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function xl(){var a=mu();if(a!==void 0)return ae(a);lu||(lu=$t().then(nu).lc(function(b){return ou(2,b)}));
return lu}
function nu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new ku;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new ku;a=a.id;yl(a);lu=eu(a);pu(18E5,2);return a}
function ou(a,b){b=new ju(b);yl("");lu=fu(b);a>0&&pu(12E4,a-1);throw b;}
function pu(a,b){$l(function(){$t().then(nu,function(c){return ou(b,c)}).lc(Dd)},a)}
function qu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():xl()}catch(b){return ae(b)}}
;var Bb=ja(["data-"]);function ru(a){a&&(a.dataset?a.dataset[su()]="true":Wb(a))}
function tu(a){return a?a.dataset?a.dataset[su()]:a.getAttribute("data-loaded"):null}
var uu={};function su(){return uu.loaded||(uu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function vu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
vu.prototype.clone=function(){var a=new vu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Pa(c)=="object"?a[b]=Rb(c):a[b]=c}return a};var wu=["share/get_share_panel"],xu=["share/get_web_player_share_panel"],yu=["feedback"],zu=["notification/modify_channel_preference"],Au=["browse/edit_playlist"],Bu=["subscription/subscribe"],Cu=["subscription/unsubscribe"];var Du=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",Du);function Eu(a){zl(Du,arguments)}
;function Fu(a,b,c){Gu(a,b,c===void 0?null:c)}
function Hu(a){a=Iu(a);var b=document.getElementById(a);b&&(es(a),b.parentNode.removeChild(b))}
function Ju(a,b){a&&b&&(a=""+Sa(b),(a=Ku[a])&&cs(a))}
function Gu(a,b,c){c=c===void 0?null:c;var d=Iu(a),e=document.getElementById(d),f=e&&tu(e),g=e&&!f;f?b&&b():(b&&(f=as(d,b),b=""+Sa(b),Ku[b]=f),g||(e=Lu(a,d,function(){tu(e)||(ru(e),ds(d),$l(function(){es(d)},0))},c)))}
function Lu(a,b,c,d){d=d===void 0?null:d;var e=Id("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,dl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Iu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var Ku={};function Mu(a){var b=Nu(a),c=document.getElementById(b),d=c&&tu(c);d||c&&!d||(c=Ou(a,b,function(){if(!tu(c)){ru(c);ds(b);var e=Ya(es,b);$l(e,0)}}))}
function Ou(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=dl(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Nu(a){var b=Id("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Pu(a){var b=C.apply(1,arguments);if(!Qu(a)||b.some(function(d){return!Qu(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())Ru(a,c.value)}
function Ru(a,b){for(var c in b)if(Qu(b[c])){if(c in a&&!Qu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ru(a[c],b[c])}else if(Su(b[c])){if(c in a&&!Su(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Tu(a[c],b[c])}else a[c]=b[c];return a}
function Tu(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Qu(c)?a.push(Ru({},c)):Su(c)?a.push(Tu([],c)):a.push(c);return a}
function Qu(a){return typeof a==="object"&&!Array.isArray(a)}
function Su(a){return typeof a==="object"&&Array.isArray(a)}
;var Uu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Vu(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(Cb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Xt()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Wu(a,b,f)}else Wu(a,b)}
function Wu(a,b,c){a=Xu(a);b=b?sc(b):"";c=c||5;hu()&&Nm(a,b,c)}
function Xu(a){for(var b=w(Uu),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function Yu(a){Rp.call(this,1,arguments);this.csn=a}
x(Yu,Rp);var $p=new Sp("screen-created",Yu),Zu=[],$u=0,av=new Map,bv=new Map,cv=new Map;
function dv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=ev({cttAuthInfo:Zt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&Gt(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=fv(h,b);if(k.veType&&!bv.has(l)&&!cv.has(l)&&!e){if(!U("il_attach_cache_limit")||av.size<1E3){av.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&av.size>1E3&&Gt(new V("IL Attach cache exceeded limit"))}h=fv(c,b);av.has(h)?
gv(c,b):cv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?hv("visualElementAttached",f,c):a?xt("visualElementAttached",c,a,f):Wn("visualElementAttached",c,f)}
function hv(a,b,c){Zu.push({se:a,payload:c,Pg:void 0,options:b});$u||($u=aq())}
function bq(a){if(Zu){for(var b=w(Zu),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Wn(c.se,c.payload,c.options));Zu.length=0}$u=0}
function fv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function gv(a,b){a=fv(a,b);av.has(a)&&(b=av.get(a)||[],dv(b[0],b[1],b[2],[b[3]],!0),av.delete(a))}
function ev(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function iv(){try{return!!self.localStorage}catch(a){return!1}}
;function jv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function kv(a){if(iv()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=jv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function lv(){if(!iv())return!1;var a=en(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=jv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function mv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function nv(a){if(S("LOGGED_IN",!0)&&mv()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);Cb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=pc(a),(b=qc(b))?(b=Xu(b),b=(b=Om(b)||null)?Rl(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;mv()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Vu(a,b)}}
;function ov(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Vu(a,b);if(c)return!1;nv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=tc(a,e);nv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.he(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function pv(a){if(Pb(S("PLAYER_VARS",{}))!="1"){a&&wl();try{qu().then(function(){},function(){}),$l(pv,18E5)}catch(b){Jl(b)}}}
;var qv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function rv(){var a=a===void 0?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Sl(a).theme;return qv.get(b)||null}catch(c){}return null}
;function sv(){this.h={};if(this.i=Qm()){var a=Om("CONSISTENCY");a&&tv(this,{encryptedTokenJarContents:a})}}
sv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Na.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];tv(this,a)}};
function tv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&Nm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var uv=window.location.hostname.split(".").slice(-2).join(".");function vv(){this.j=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=wv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var xv;function yv(){xv=F("yt.clientLocationService.instance");xv||(xv=new vv,E("yt.clientLocationService.instance",xv));return xv}
p=vv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=wv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Nm("YT_CL",JSON.stringify({loctok:a}),15552E3,uv,!0))};
function wv(a){return a.h===void 0?new Nn("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=wv(this))&&this.h.remove("yt-location-playability-token"):Pm("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function zv(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function Av(){this.h={}}
Av.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Av.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Av.prototype.set=function(a,b){this.h[a]=b};
Av.prototype.remove=function(a){delete this.h[a]};function Bv(){this.mappings=new Av}
Bv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Bv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new Bv;function Cv(a){return function(){return new a}}
;var Dv={},Ev=(Dv.WEB_UNPLUGGED="^unplugged/",Dv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Dv.WEB_UNPLUGGED_OPS="^unplugged/",Dv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Dv.WEB_CREATOR="^creator/",Dv.WEB_KIDS="^kids/",Dv.WEB_EXPERIMENTS="^experiments/",Dv.WEB_MUSIC="^music/",Dv.WEB_REMIX="^music/",Dv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Dv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Dv);
function Fv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=Ev[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Ev).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function Gv(){}
Gv.prototype.D=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?Mm:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=S("INNERTUBE_CONTEXT");if(g){g=Sb(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;Um();var l="USER_INTERFACE_THEME_LIGHT";Xm(165)?l="USER_INTERFACE_THEME_DARK":Xm(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:rv()||l;h.userInterfaceTheme=k;if(!f){if(k=bn())h.connectionType=k;U("web_log_effective_connection_type")&&(k=cn())&&(g.client.effectiveConnectionType=k)}var m;if(U("web_log_memory_total_kbytes")&&((m=D.navigator)==null?0:m.deviceMemory)){var n;m=(n=D.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}U("web_gcf_hashes_innertube")&&(k=Kp())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=Sl(D.location.href);!U("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:D.location.href},U("kevlar_woffle")&&Hm.h&&(n=Hm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Im(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!U("web_lr_app_quality_killswitch")&&(n=S("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!U("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(fa){}r=
void 0}r&&(h.timeZone=r)}(r=S("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=dm();sv.h||(sv.h=new sv);h=sv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!U("web_prequest_context_killswitch")&&(t=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=Um();t=Xm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?e&&(f=Xt())&&(g.clientScreenNonce=f):!f&&(f=Xt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=F("yt.mdx.remote.remoteClient_"))g.remoteClient=d;yv().setLocationOnInnerTubeContext(g);try{var u=Vl(),y=u.bid;delete u.bid;g.adSignalsInfo={params:[],bid:y};var z=w(Object.entries(u));for(var A=z.next();!A.done;A=z.next()){var H=w(A.value),T=H.next().value,O=H.next().value;u=T;y=O;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:u,value:""+
y})}var ea;if(((ea=g.client)==null?void 0:ea.clientName)==="TVHTML5"){var Ea=S("INNERTUBE_CONTEXT");Ea.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ea.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Ea.adSignalsInfo.limitAdTracking)}}catch(fa){Ft(fa)}z=g}else Ft(Error("Error: No InnerTubeContext shell provided in ytconfig.")),z={};z={context:z};if(A=this.i(a)){this.h(z,A,b);var P;b="/youtubei/v1/"+Fv(this.j());
(A=(P=Ns(a.commandMetadata,jl))==null?void 0:P.apiUrl)&&(b=A);P=b;(b=S("INNERTUBE_HOST_OVERRIDE"))&&(P=String(b)+String(pc(P)));b={};U("web_api_key_killswitch")&&(b.key=S("INNERTUBE_API_KEY"));U("json_condensed_response")&&(b.prettyPrint="false");P=Tl(P,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:P,fb:gu(P),Na:z,config:a};a.config.Sb?a.config.Sb.identity=c:a.config.Sb={identity:c};return a}Ft(new V("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Gv.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Hv(){}
x(Hv,Gv);function Iv(){}
x(Iv,Hv);Iv.prototype.D=function(){return{input:"/getDatasyncIdsEndpoint",fb:gu("/getDatasyncIdsEndpoint","GET"),Na:{}}};
Iv.prototype.j=function(){return[]};
Iv.prototype.i=function(){};
Iv.prototype.h=function(){};var Jv={},Kv=(Jv.GET_DATASYNC_IDS=Cv(Iv),Jv);function Lv(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function Mv(){var a=Lv();a.info||(a.info={});return a.info}
function Nv(a){a=Lv(a);a.metadata||(a.metadata={});return a.metadata}
function Ov(a){a=Lv(a);a.tick||(a.tick={});return a.tick}
function Pv(a){a=Lv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qv(a){a=Pv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Rv(a){var b=Lv(a).nonce;b||(b=Nt(),Lv(a).nonce=b);return b}
;function Sv(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function Tv(a){a=a||"";var b=F("ytcsi.reference");b||(Sv(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=Sv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Uv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",
X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]=
"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",
X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function Vv(a,b){Rp.call(this,1,arguments);this.timer=b}
x(Vv,Rp);var Wv=new Sp("aft-recorded",Vv);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var Xv=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Xv);function Yv(){this.h=0}
function Zv(){Yv.h||(Yv.h=new Yv);return Yv.h}
Yv.prototype.tick=function(a,b,c,d){$v(this,"tick_"+a+"_"+b)||Wn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Yv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");$v(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Wn("latencyActionInfo",a,{cttAuthInfo:c}))};
Yv.prototype.jspbInfo=function(){};
Yv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");$v(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Wn("latencyActionSpan",a,{cttAuthInfo:c}))};
function $v(a,b){Xv[b]=Xv[b]||{count:0};var c=Xv[b];c.count++;c.time=W();a.h||(a.h=gn(function(){var d=W(),e;for(e in Xv)Xv[e]&&d-Xv[e].time>6E4&&delete Xv[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||Gt(c)),!0):!1}
;var aw=window;function bw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function cw(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=dw(e.requestStart),e.responseEnd=dw(e.responseEnd),e.redirectStart=dw(e.redirectStart),e.redirectEnd=dw(e.redirectEnd),e.domainLookupEnd=dw(e.domainLookupEnd),e.connectStart=dw(e.connectStart),e.connectEnd=
dw(e.connectEnd),e.responseStart=dw(e.responseStart),e.secureConnectionStart=dw(e.secureConnectionStart),e.domainLookupStart=dw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function dw(a){return Math.round(ew()+a)}
function ew(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=aw.performance||aw.mozPerformance||aw.msPerformance||aw.webkitPerformance||new bw;var fw=!1,gw=!1,hw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Dd,Y);function iw(a,b){if(!U("web_csi_action_sampling_enabled")||!Lv(b).actionDisabled){var c=Tv(b||"");Pu(c.info,a);a.loadType&&(c=a.loadType,Nv(b).loadType=c);Pu(Qv(b),a);c=Rv(b);b=Lv(b).cttAuthInfo;Zv().info(a,c,b)}}
function jw(){var a,b,c,d;return((d=qs().resolve(new js(Gp))==null?void 0:(a=Hp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!U("web_csi_action_sampling_enabled")||!Lv(c).actionDisabled){var d=Rv(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){(qs().resolve(new js(Gp))==null?0:Hp())&&!gw&&(gw=!0,Z("gcfl",W(),c));var f,g,h;e=(qs().resolve(new js(Gp))==null?void 0:(f=Hp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=jw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=f%1E5%e!==0;Lv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,iw(f,c));Lv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||U("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=Tv(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Pv(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Ov(c);e=b||W();U("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Lv(c).cttAuthInfo;a==="_start"?(a=Zv(),$v(a,"baseline_"+d)||Wn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Zv().tick(a,d,b,f);kw(c);return e}}}
function lw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Ir+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function mw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function nw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=ew(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function ow(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",dw(b.startTime)),Z("wffe",dw(b.responseEnd)))}
function pw(a){var b=qw("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=qw(b[d],a);if(e)return e}return NaN}
function qw(a,b){if(a=Ov(b)[a])return typeof a==="number"?a:a[a.length-1]}
function kw(a){var b=qw("_start",a),c=pw(a),d=U("enable_cow_info_csi")||!fw;b&&c&&d&&(Xp(Wv,new Vv(Math.round(c-b),a)),fw=!0)}
function rw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(c){return c.name==="first-paint"}))return dw(a.startTime)}var b;
U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Ug;return b?Math.max(0,b):0}
;function sw(a,b){Il(function(){Tv("").info.actionType=a;b&&El("TIMING_AFT_KEYS",b);El("TIMING_ACTION",a);var c=mw();Object.keys(c).length>0&&iw(c);c={isNavigation:!0,actionType:Uv[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=Uv[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Xt())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=lw();if(d===1||d===-1)c.isVisible=!0;Nv();Mv();
c.loadType="cold";d=Mv();var e=cw(),f=ew(),g=S("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=rw();d>0&&Z("fpt",d);d=cw();d.isPerformanceNavigationTiming&&iw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=ew()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&ow();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in hw)hw.hasOwnProperty(h)&&(e=hw[h],
nw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});iw(c);c=Pv();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Qv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Nv().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Ov();e=Pv();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,qw(k));else if(U("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,Pu(c,d),Pu(k,d),d=!0;d&&iw(k)}E("ytglobal.timingready_",!0);k=S("TIMING_ACTION");F("ytglobal.timingready_")&&k&&tw()&&pw()&&kw()})()}
function tw(){return Il(function(){return uw()})()}
function vw(a,b,c){Il(iw)(a,b,c===void 0?!1:c)}
function ww(a,b,c){return Il(Z)(a,b,c)}
function uw(){return Il(function(){return"_start"in Ov()})()}
function xw(){Il(function(){var a=Rv();requestAnimationFrame(function(){setTimeout(function(){a===Rv()&&ww("ol",void 0,void 0)},0)})})()}
var yw=window;yw.ytcsi&&(yw.ytcsi.infoGel=vw,yw.ytcsi.tick=ww);var zw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Aw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function Bw(a,b,c,d){this.D=a;this.fa=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},Kv,a.Nb)}
function Cw(a,b,c,d){if(Bw.h!==void 0){if(d=Bw.h,a=[a!==d.D,b!==d.fa,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else Bw.h=new Bw(a,b,c,d)}
function Dw(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?Mm:c;var d=Ew(a,b);return d?new Wd(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.D(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));n.F(0);break}nv(h.input);l=((k=h.fb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.Te){var r=h.config,t,u=r==null?void 0:(t=r.Sb)==null?void 0:t.sessionIndex,y;r=((y=Ns(r==null?void 0:r.command,
kl))==null?void 0:y.signal)==="GET_ACCOUNT_MENU"?!0:!1;u=Lm(0,{sessionIndex:u,bd:r});m=Object.assign({},zv(l),u);n.F(4);break}return n.yield(Fw(h.config,l),5);case 5:m=n.i;case 4:e(Gw(a,h,m)),n.h=0}})}):ae(new V("Error: No request builder found for command.",b))}
function Hw(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=w(zw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function Gw(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,u,y,z,A,H,T,O,ea,Ea,P,fa,ka,pa,Na,Ug,Vg,zr,Ar,Br;return B(function(ia){switch(ia.h){case 1:ia.F(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Na)==null?0:g.context)){ia.F(4);break}h=b.Na.context;ia.F(5);break;case 5:k=w([]),l=k.next();case 8:if(l.done){ia.F(4);break}m=l.value;return ia.yield(m.Wg(h),9);case 9:l=k.next();ia.F(8);break;case 4:if((n=a.i)==null||!n.dh(b.input,b.Na)){ia.F(12);break}return ia.yield(a.i.Rg(b.input,
b.Na),13);case 13:return r=ia.i,U("kevlar_process_local_innertube_responses_killswitch")||Hw(a,r,b),ia.return(r);case 12:return(y=(u=b.config)==null?void 0:u.ah)&&a.h.has(y)?t=a.h.get(y):(z=JSON.stringify(b.Na),T=(H=(A=b.fb)==null?void 0:A.headers)!=null?H:{},b.fb=Object.assign({},b.fb,{headers:Object.assign({},T,c)}),O=Object.assign({},b.fb),b.fb.method==="POST"&&(O=Object.assign({},O,{body:z})),((ea=b.config)==null?0:ea.ye)&&ww(b.config.ye),Ea=function(){return a.fa.fetch(b.input,O,b.config)},t=
Ea(),y&&a.h.set(y,t)),ia.yield(t,14);
case 14:if((P=ia.i)&&"error"in P&&((fa=P)==null?0:(ka=fa.error)==null?0:ka.details))for(pa=P.error.details,Na=w(pa),Ug=Na.next();!Ug.done;Ug=Na.next())Vg=Ug.value,(zr=Vg["@type"])&&Aw.indexOf(zr)>-1&&(delete Vg["@type"],P=Vg);y&&a.h.has(y)&&a.h.delete(y);((Ar=b.config)==null?0:Ar.ze)&&ww(b.config.ze);if(P||(Br=a.i)==null||!Br.Ig(b.input,b.Na)){ia.F(15);break}return ia.yield(a.i.Qg(b.input,b.Na),16);case 16:P=ia.i;case 15:return Hw(a,P,b),d(),ia.return(P||void 0)}})}
function Ew(a,b){a:{a=a.D;var c,d=(c=Ns(b,kl))==null?void 0:c.signal;if(d&&a.Nb&&(c=a.Nb[d])){var e=c();break a}var f;if((c=(f=Ns(b,il))==null?void 0:f.request)&&a.Ld&&(f=a.Ld[c])){e=f();break a}for(e in b)if(a.Sc[e]&&(b=a.Sc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Fw(a,b){var c,d,e,f,g,h,k;return B(function(l){if(l.h==1){e=(c=a)==null?void 0:(d=c.Sb)==null?void 0:d.sessionIndex;h=((g=Ns((f=a)==null?void 0:f.command,kl))==null?void 0:g.signal)==="GET_ACCOUNT_MENU"?!0:!1;var m=l.yield;var n=Lm(0,{sessionIndex:e,bd:h});if(!(n instanceof Wd)){var r=new Wd(Dd);Xd(r,2,n);n=r}return m.call(l,n,2)}k=l.i;return l.return(Promise.resolve(Object.assign({},zv(b),k)))})}
;var Iw=new is("INNERTUBE_TRANSPORT_TOKEN");function Jw(){}
x(Jw,Hv);Jw.prototype.j=function(){return Bu};
Jw.prototype.i=function(a){return Ns(a,vl)||void 0};
Jw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(Jw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Kw(){}
x(Kw,Hv);Kw.prototype.j=function(){return Cu};
Kw.prototype.i=function(a){return Ns(a,ul)||void 0};
Kw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(Kw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Lw=new is("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Mw(a){this.u=a}
x(Mw,Hv);Mw.prototype.j=function(){return wu};
Mw.prototype.i=function(a){return Ns(a,pl)||Ns(a,ql)||Ns(a,ol)};
Mw.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.u)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.u.i(b.clientParamIdentifier)}};
Mw[hs]=[Lw];function Nw(){}
x(Nw,Hv);Nw.prototype.j=function(){return yu};
Nw.prototype.i=function(a){return Ns(a,ml)||void 0};
Nw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(Nw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ow(){}
x(Ow,Hv);Ow.prototype.j=function(){return zu};
Ow.prototype.i=function(a){return Ns(a,tl)||void 0};
Ow.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Pw(){}
x(Pw,Hv);Pw.prototype.j=function(){return Au};
Pw.prototype.i=function(a){return Ns(a,sl)||void 0};
Pw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Qw(){}
x(Qw,Hv);Qw.prototype.j=function(){return xu};
Qw.prototype.i=function(a){return Ns(a,rl)};
Qw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Rw(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
x(Rw,V);var Sw=new is("NETWORK_SLI_TOKEN");function Tw(a){this.h=a}
Tw.prototype.fetch=function(a,b,c){var d=this,e;return B(function(f){e=Uw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Gt(g);
if((c==null?0:c.Rd)&&g instanceof Rw&&g.errorType===1)return Promise.reject(g)}))})};
function Uw(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=yq(c));return new window.Request(b,a)}
Tw.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.je)&&a.ok)return sh(b.je,d);d=d.replace(")]}'","");if((b==null?0:b.Rd)&&d)try{var e=JSON.parse(d)}catch(g){throw new Rw(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Mg(),c=c.then(function(d){Gt(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Tw[hs]=[new js(Sw)];var Vw=new is("NETWORK_MANAGER_TOKEN");var Ww;function Xw(){var a,b,c;return B(function(d){if(d.h==1)return a=qs().resolve(Iw),a?d.yield(Dw(a),2):(Gt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Gt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Kg;return d.return(c)}Gt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Yw(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Zw=D.caches,$w;function ax(a){var b=a.indexOf(":");return b===-1?{kd:a}:{kd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function bx(){return B(function(a){if($w!==void 0)return a.return($w);$w=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Zw.open("test-only"),4);case 4:return d.yield(Zw.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return($w)})}
function cx(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(bx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Zw.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=ax(f),h=g.datasyncId,!h||a.includes(h)||b.push(Zw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function dx(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(bx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=en("cache contains other");return h.yield(Zw.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=ax(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ex(){try{return!!self.sessionStorage}catch(a){return!1}}
;function fx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function gx(a){if(ex()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=fx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function hx(){if(!ex())return!1;var a=en(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=fx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function ix(){Xw().then(function(a){a&&(lp(a),cx(a),kv(a),gx(a))})}
function jx(){var a=new qr;oj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.F(2);break}b=en("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];lp(h);cx(h);kv(h);gx(h);return g.return()}c=lv();d=hx();return g.yield(dx(),3);case 3:return e=g.i,g.yield(mp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?ix():a.h.add("publicytnetworkstatus-online",ix,!0,void 0,void 0),g.h=0}})})}
;function kx(){this.state=1;this.h=null}
p=kx.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=cl(a.interpreterSafeUrl).toString());lx(this,d,e,a.program,b,c)}else Gt(Error("Cannot initialize botguard without program"))};
function lx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,Fu(c,function(){window[g]?mx(a,d,g,e):(a.state=3,Hu(c),Gt(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Id("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?mx(a,d,g,e):(a.state=4,Gt(new V("Unable to load Botguard from JS")))):Gt(new V("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function mx(a,b,c,d){a.state=5;try{var e=new aj({program:b,Xd:c,we:U("att_web_record_metrics"),Da:"aGIf"});e.Pe.then(function(){a.state=6;d&&d(b)});
a.Ic(e)}catch(f){a.state=7,f instanceof Error&&Gt(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Lc()?this.zd({Tc:a}):null};
p.dispose=function(){this.Ic(null);this.state=8};
p.Lc=function(){return!!this.h};
p.zd=function(a){return this.h.td(a)};
p.Ic=function(a){Fc(this.h);this.h=a};var nx=[],ox=!1;function px(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&hu()){var a=S("PLAYER_VARS",{});if(Pb(a)!="1"&&!iu(a)){var b=function(){ox=!0;"google_ad_status"in window?El("DCLKSTAT",1):El("DCLKSTAT",2)};
try{Fu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}nx.push(oj.pa(function(){if(!(ox||"google_ad_status"in window)){try{Ju("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ox=!0;El("DCLKSTAT",3)}},5E3))}}}
function qx(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function rx(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function sx(){kx.apply(this,arguments)}
x(sx,kx);sx.prototype.Ic=function(a){var b;(b=rx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.td.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
sx.prototype.Lc=function(){return!!rx()};
sx.prototype.zd=function(a){return rx().bgvmc(a)};function tx(a){zs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"document_disposed",action:this.D},{from:"document_disposed_preventable",to:"flush_logs",action:this.u},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.u},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
x(tx,zs);tx.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
tx.prototype.D=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
tx.prototype.u=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
tx.prototype.i=function(){this.h=new Map};function ux(a){zs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.u},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.D},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.u},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.u},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.D},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.D},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
x(ux,zs);ux.prototype.i=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
ux.prototype.h=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
ux.prototype.D=function(a,b){a(b==null?void 0:b.event)};
ux.prototype.u=function(a,b){a(b==null?void 0:b.event)};function vx(){this.o=new tx;this.D=new ux}
vx.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.D.install(c)})};function wx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
wx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Xt(c===void 0?0:c)){a=this.client;d=new Qt({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=fv(d,c);bv.set(f,!0);gv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=ev({cttAuthInfo:Zt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?hv("visualElementGestured",f,d):a?xt("visualElementGestured",d,a,f):Wn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
wx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Qt({trackingParams:a}),b,c===void 0?0:c)};
wx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Xt(d);a||(a=(a=Ut(d===void 0?0:d))?new Qt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=ev({cttAuthInfo:Zt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?hv("visualElementStateChanged",d,b):a?xt("visualElementStateChanged",b,a,d):Wn("visualElementStateChanged",b,d))}};
function xx(a,b){if(b===void 0)for(var c=Wt(),d=0;d<c.length;d++)c[d]!==void 0&&xx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&dv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function yx(){vx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||gn(zx)}
x(yx,vx);yx.prototype.j=function(){Wn("finalPayload",{csn:Xt()})};
yx.prototype.h=function(){Kt(Lt)};
yx.prototype.i=function(){var a=xx;wx.h||(wx.h=new wx);a(wx.h)};
function zx(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Lf();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Wn("genericClientExperimentEvent",{eventType:c});delete Dl.CLIENT_EXPERIMENT_EVENTS}}
;function Ax(){}
function Bx(){var a=F("ytglobal.storage_");a||(a=new Ax,E("ytglobal.storage_",a));return a}
Ax.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Cx()):d.return()})};
function Cx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",Ax);function Un(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Un.prototype.Ga=function(a){this.handleError(a)};
Un.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Dx(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Dx(a,b){Bx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Ex(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Ex(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Ex(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Fx={},Gx=(Fx["api.invalidparam"]=2,Fx.auth=150,Fx["drm.auth"]=150,Fx["heartbeat.net"]=150,Fx["heartbeat.servererror"]=150,Fx["heartbeat.stop"]=150,Fx["html5.unsupportedads"]=5,Fx["fmt.noneavailable"]=5,Fx["fmt.decode"]=5,Fx["fmt.unplayable"]=5,Fx["html5.missingapi"]=5,Fx["html5.unsupportedlive"]=5,Fx["drm.unavailable"]=5,Fx["mrm.blocked"]=151,Fx["embedder.identity.denied"]=152,Fx);var Hx=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Ix(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Jx(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(Hx);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Kx(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Lx(a){I.call(this);var b=this;this.api=a;this.V=this.u=!1;this.B=[];this.K={};this.j=[];this.i=[];this.W=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.T=U("web_player_split_event_bus_iframe");this.ea=U("embeds_error_code_as_integer");this.o=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=
c.source;c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.V=!0;b.u=!1;b.sendMessage("initialDelivery",Mx(b));b.sendMessage("onReady");e=w(b.B);for(d=e.next();!d.done;d=e.next())Nx(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.W&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.K[e]||
e==="onReady"||(c=Ox(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.T?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.K[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Ix(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Jx(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Jx(g);break;case "loadPlaylist":case "cuePlaylist":g=Kx(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Ix(e)&&Px(b,Mx(b))}}}};
Qx.addEventListener("message",this.G);if(a=S("WIDGET_ID"))this.sessionId=a;Rx(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.W=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Gx[c]||d:d;b.ea?b.sendMessage("onError",Number(b.errorCode)):b.sendMessage("onError",b.errorCode.toString())}});
Rx(this,"onVideoProgress",this.Ke.bind(this));Rx(this,"onVolumeChange",this.Le.bind(this));Rx(this,"onApiChange",this.De.bind(this));Rx(this,"onPlaybackQualityChange",this.He.bind(this));Rx(this,"onPlaybackRateChange",this.Ie.bind(this));Rx(this,"onStateChange",this.Je.bind(this));Rx(this,"onWebglSettingsChanged",this.Me.bind(this));Rx(this,"onCaptionsTrackListChanged",this.Ee.bind(this));Rx(this,"captionssettingschanged",this.Fe.bind(this))}
x(Lx,I);function Px(a,b){a.sendMessage("infoDelivery",b)}
p=Lx.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.V?Nx(this,a):this.B.push(a)};
function Ox(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Rx(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Mx(a){if(!a.api)return null;var b=a.api.getApiInterface();Ib(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.Je=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Px(this,a)};
p.He=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Px(this,a)};
p.Ie=function(a){Px(this,{playbackRate:a})};
p.De=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.Le=function(){Px(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Ke=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Px(this,a)};
p.Me=function(){Px(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Ee=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Px(this,a)}};
p.Fe=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Px(this,a)}};
function Nx(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){Gt(d)}}}
p.ba=function(){I.prototype.ba.call(this);Qx.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.T?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Qx=window;function Sx(a,b,c){I.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=U("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ia){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Tx(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Ux(g,f))&&Vx(d,g,f))}}}}}};
Wx.addEventListener("message",this.i);Vx(this,"RECEIVING")}
x(Sx,I);p=Sx.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.Ge.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.Ge=function(a,b){this.ia||Vx(this,a,Xx(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Tx(a,b){switch(a){case "loadVideoById":return[Jx(b)];case "cueVideoById":return[Jx(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Kx(b)];case "cuePlaylist":return[Kx(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ux(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Xx(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Vx(a,b,c){a.ia||(b={id:a.id,command:b},c&&(b.data=c),Yx.postMessage(JSON.stringify(b),a.origin))}
p.ba=function(){Wx.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);I.prototype.ba.call(this)};
var Wx=window,Yx=window.parent;var Zx=new sx;function $x(){return Zx.Lc()}
function ay(a){a=a===void 0?{}:a;return Zx.invoke(a)}
;function by(a,b,c,d,e){I.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.oc=e;this.Wa=!1;this.api={};this.ha=this.u=null;this.T=new M;this.h={};this.W=this.xa=this.elementId=this.yb=this.config=null;this.V=!1;this.j=this.G=null;this.Fa={};this.pc=["onReady"];this.lastError=null;this.Qb=NaN;this.K={};this.ea=0;this.i=this.o=a;Hc(this,this.T);cy(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(dy(this),ey(this))}
x(by,I);p=by.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.ia){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof vu||(b=new vu(b));this.config=b;this.setConfig(a);ey(this);this.isReady()&&fy(this)}};
function dy(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.yb=a;this.config=gy(a);dy(this);if(!this.xa){var b;this.xa=hy(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=ij(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=ij(Number(a)||a))};
function fy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function iy(a){var b=!0,c=jy(a);c&&a.config&&(b=c.dataset.version===ky(a));return b&&!!F("yt.player.Application.create")}
function ey(a){if(!a.ia&&!a.V){var b=iy(a);if(b&&(jy(a)?"html5":null)==="html5")a.W="html5",a.isReady()||ly(a);else if(my(a),a.W="html5",b&&a.j&&a.o)a.o.appendChild(a.j),ly(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=ny(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?gy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.oc);ly(a)};
a.V=!0;b?a.G():(Fu(ky(a),a.G),(b=oy(a))&&Mu(b||""),py(a)&&!c&&E("yt.player.Application.create",null))}}}
function jy(a){var b=Hd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function ly(a){if(!a.ia){var b=jy(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.V=!1;if(!ny(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}qy(a)}else a.Qb=setTimeout(function(){ly(a)},50)}}
function qy(a){cy(a);a.Wa=!0;var b=jy(a);if(b){a.u=ry(a,b,"addEventListener");a.ha=ry(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=ry(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);fy(a);a.xa&&a.xa(a.api);a.T.ib("onReady",a.api)}
function ry(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function cy(a){a.Wa=!1;if(a.ha)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ha(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.u=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.yb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Wa};
p.addEventListener=function(a,b){var c=this,d=hy(this,b);d&&(Cb(this.pc,a)>=0||this.h[a]||(b=sy(this,a),this.u&&this.u(a,b)),this.T.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.ia||(b=hy(this,b))&&this.T.unsubscribe(a,b)};
function hy(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function sy(a,b){function c(d){var e=setTimeout(function(){if(!a.ia){try{a.T.ib(b,d!=null?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.K,String(e))}
return a.h[b]=c}
p.getPlayerType=function(){return this.W||(jy(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function my(a){a.cancel();cy(a);a.W=null;a.config&&(a.config.loaded=!1);var b=jy(a);b&&(iy(a)||!py(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&Ju(ky(this),this.G);clearTimeout(this.Qb);this.V=!1};
p.ba=function(){my(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.yb=this.config=this.api=null;delete this.o;delete this.i;I.prototype.ba.call(this)};
function py(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function ky(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function oy(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function ny(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function gy(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Rb(e):e}return b}
;var ty={},uy="player_uid_"+(Math.random()*1E9>>>0);function vy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Hd(c):c;var e=uy+"_"+Sa(c),f=ty[e];if(f&&d)return wy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new by(c,e,a,b,void 0);ty[e]=f;f.addOnDisposeCallback(function(){delete ty[f.getId()]});
return f.api}
function wy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var xy=null,yy=null;
function zy(){xw();var a=Um(),b=Xm(119),c=window.devicePixelRatio>1;if(document.body&&wj(document.body,"exp-invert-logo"))if(c&&!wj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!wj(d,"inverted-hdpi")){var e=uj(d);vj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&wj(document.body,"inverted-hdpi")&&xj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Ym(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Rm[b]:(c=d.toString(16),Rm[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Rm)Rm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Rm[f])));var f=d.join("&");Nm(b,f,63072E3,a.i,c)}}
function Ay(){By()}
function Cy(){ww("ep_init_pr");By()}
function By(){var a=xy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Dy(){xy&&xy.sendAbandonmentPing&&xy.sendAbandonmentPing();S("PL_ATT")&&Zx.dispose();for(var a=oj,b=0,c=nx.length;b<c;b++)a.qa(nx[b]);nx.length=0;Hu("//static.doubleclick.net/instream/ad_status.js");ox=!1;El("DCLKSTAT",0);Gc(yy);xy&&(xy.removeEventListener("onVideoDataChange",Ay),xy.destroy())}
;E("yt.setConfig",El);E("yt.config.set",El);E("yt.setMsg",Eu);E("yt.msgs.set",Eu);E("yt.logging.errors.log",Ft);
E("writeEmbed",function(){var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}pv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);sw("embed",["ol"]);c=Yw();if(!c.serializedForcedExperimentIds){var d=Sl(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&sw("watch",["pbs","pbu","pbp"]);xy=vy(a,c);xy.addEventListener("onVideoDataChange",Ay);xy.addEventListener("onReady",Cy);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?yy=new Lx(xy):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(yy=new Sx(xy,a,b));px();U("ytidb_create_logger_embed_killswitch")||Tn();a={};yx.h||(yx.h=new yx);yx.h.install((a.flush_logs={callback:function(){kt()}},a));
Fr();U("ytidb_clear_embedded_player")&&oj.pa(function(){var f,g;if(!Ww){var h=qs();ls(h,{jc:Vw,wd:Tw});var k={Sc:{feedbackEndpoint:Cv(Nw),modifyChannelNotificationPreferenceEndpoint:Cv(Ow),playlistEditEndpoint:Cv(Pw),shareEntityEndpoint:Cv(Mw),subscribeEndpoint:Cv(Jw),unsubscribeEndpoint:Cv(Kw),webPlayerShareEntityServiceEndpoint:Cv(Qw)}},l=yv(),m={};l&&(m.client_location=l);f===void 0&&(f=Km());g===void 0&&(g=h.resolve(Vw));Cw(k,g,f,m);ls(h,{jc:Iw,xd:Bw.h});Ww=h.resolve(Iw)}jx()})});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||$x);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||ay);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||qx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||ov);E("yt.util.activity.init",F("yt.util.activity.init")||Tr);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||Wr);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||Ur);window.addEventListener("load",Il(function(){zy()}));
window.addEventListener("pageshow",Il(function(a){a.persisted||zy()}));
window.addEventListener("pagehide",Il(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Dy():a.persisted||Dy()}));
window.onerror=function(a,b,c,d,e){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var f=!1,g=Fl("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(g[h].src.indexOf("/debug-")>0){f=!0;break}}f&&(f=!1,e?f=!0:(typeof a==="string"?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Ft(e):Gt(e))};
le=Ht;window.addEventListener("unhandledrejection",function(a){Ht(a.reason)});
Db(S("ERRORS")||[],function(a){Ft.apply(null,a)});
El("ERRORS",[]);}).call(this);
