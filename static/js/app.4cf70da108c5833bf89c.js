webpackJsonp([1,0],[function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(62),i=a(o),u=r(6),l=a(u),c=r(5),f=n(c),d=r(40),m=a(d);r(39),i.default.use(l.default);var p=", 100%, 85%";new i.default({el:"#app",components:s({LangSwitcher:m.default},f),data:function(){return{isNavSticky:!1,firstColor:Math.floor(255*Math.random()),secondColor:Math.floor(255*Math.random()),markupLangs:["pug","html"],markupLanguage:"pug",currentHash:""}},computed:{gradient:function(){return{background:"linear-gradient(to left bottom, hsl("+(this.firstColor+p)+") 0%, hsl("+(this.secondColor+p)+") 100%)"}},allHeaders:function(){return[].slice.call(document.querySelectorAll("section[id], .typo__h2[id]"))}},methods:{selectLanguage:function(e){this.markupLanguage=e},adjustNav:function(){var e=document.getElementById("main-nav"),t=e.getBoundingClientRect().top;this.isNavSticky=t<0;var r=this.allHeaders.findIndex(function(e){var t=e.getBoundingClientRect().top;return t>0});console.log(this.allHeaders);var n=r===-1?this.allHeaders.length-1:r-1;if(n!==-1){var a=this.allHeaders[n],s=a.getAttribute("id");this.currentHash!==s&&(this.currentHash=s,a.setAttribute("id",""),window.location.hash=s,a.setAttribute("id",s))}},requestFrame:function(){var e=this;this._frameRequested||(this._frameRequested=!0,window.requestAnimationFrame(function(){e._frameRequested=!1,e.adjustNav()}))}},mounted:function(){this.adjustNav(),window.addEventListener("scroll",this.requestFrame)}})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var a=r(26),s=n(a);t.withParams=s.default;var o=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||e===!1)return!1;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]},t.regex=function(e,t){return(0,s.default)({type:e},function(e){return!o(e)||t.test(e)})}},,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.maxValue=t.minValue=t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.macAddress=t.ipAddress=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var a=r(7),s=n(a),o=r(8),i=n(o),u=r(18),l=n(u),c=r(10),f=n(c),d=r(11),m=n(d),p=r(12),v=n(p),_=r(13),h=n(_),g=r(14),$=n(g),y=r(16),b=n(y),P=r(20),w=n(P),x=r(21),C=n(x),M=r(22),q=n(M),A=r(23),N=n(A),j=r(24),O=n(j),L=r(19),k=n(L),E=r(9),B=n(E),F=r(17),z=n(F),R=r(15),D=n(R);t.alpha=s.default,t.alphaNum=i.default,t.numeric=l.default,t.between=f.default,t.email=m.default,t.ipAddress=v.default,t.macAddress=h.default,t.maxLength=$.default,t.minLength=b.default,t.required=w.default,t.requiredIf=C.default,t.requiredUnless=q.default,t.sameAs=N.default,t.url=O.default,t.or=k.default,t.and=B.default,t.minValue=z.default,t.maxValue=D.default},function(e,t){"use strict";function r(){null!==c&&l.push(c),t.target=c={}}function n(){var e=c,r=t.target=c=l.pop()||null;return r&&(Array.isArray(r.$sub)||(r.$sub=[]),r.$sub.push(e)),e}function a(e){if("object"!=typeof e||Array.isArray(e))throw new Error("params must be an object");t.target=c=u({},c,e)}function s(e,t){return o(function(r){return function(){r(e);for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];return t.apply(this,a)}})}function o(e){var t=e(a);return function(){r();try{for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return t.apply(this,a)}finally{n()}}}function i(e,t){return"object"==typeof e&&void 0!==t?s(e,t):o(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.pushParams=r,t.popParams=n,t.withParams=i;var l=[],c=t.target=null;t._setTarget=function(e){t.target=c=e}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ExampleDynamic=t.ExampleDynParams=t.ExampleParams=t.ExampleValidationGroups=t.ExampleRepeatPassword=t.ExampleNested=t.ExampleEachArray=t.ExampleDelayedTouch=t.ExampleBasic=t.ExampleAsync=void 0;var a=r(41),s=n(a),o=r(42),i=n(o),u=r(43),l=n(u),c=r(46),f=n(c),d=r(47),m=n(d),p=r(49),v=n(p),_=r(50),h=n(_),g=r(48),$=n(g),y=r(44),b=n(y),P=r(45),w=n(P);t.ExampleAsync=s.default,t.ExampleBasic=i.default,t.ExampleDelayedTouch=l.default,t.ExampleEachArray=f.default,t.ExampleNested=m.default,t.ExampleRepeatPassword=v.default,t.ExampleValidationGroups=h.default,t.ExampleParams=$.default,t.ExampleDynParams=b.default,t.ExampleDynamic=w.default},function(e,t,r){"use strict";function n(e){return("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}function a(e,t){var r=new e({data:{p:!0,v:!1}});return t.then(function(e){r.p=!1,r.v=e},function(e){throw r.p=!1,r.v=!1,e}),r[p]=!0,r}function s(e){this.dirty=e;var t=this.proxy,r=e?"$touch":"$reset";this.nestedKeys.forEach(function(e){t[e][r]()})}function o(e){if(b)return b;for(var t=e.constructor;t.super;)t=t.super;return b=t,t}function i(e){e.mixin(w)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=t.validationMixin=t.Vuelidate=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=r(25),c=r(4),f=function(){return null},d=function(e,t,r){return e.reduce(function(e,n){return e[r?r(n):n]=t(n),e},{})},m=function(e,t,r,n){if("function"==typeof r)return r.call(e,t,n);r=Array.isArray(r)?r:r.split(".");for(var a=0;a<r.length;a++){if(!t||"object"!=typeof t)return n;t=t[r[a]]}return"undefined"==typeof t?n:t},p="__isVuelidateAsyncVm",v={$invalid:function(){var e=this,t=this.proxy;return this.nestedKeys.some(function(t){return e.refProxy(t).$invalid})||this.ruleKeys.some(function(e){return!t[e]})},$dirty:function(){var e=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every(function(t){return e.refProxy(t).$dirty})},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$pending:function(){var e=this;return this.ruleKeys.some(function(t){return e.getRef(t).$pending})||this.nestedKeys.some(function(t){return e.refProxy(t).$pending})},$params:function(){var e=this,t=this.validations;return u({},d(this.nestedKeys,function(e){return t[e]&&t[e].$params||null}),d(this.ruleKeys,function(t){return e.getRef(t).$params}))}},_={$touch:function(){s.call(this,!0)},$reset:function(){s.call(this,!1)},$flattenParams:function(){var e=this.proxy,t=[];for(var r in this.$params)if(this.isNested(r)){for(var n=e[r].$flattenParams(),a=0;a<n.length;a++)n[a].path.unshift(r);t=t.concat(n)}else t.push({path:[],name:r,params:this.$params[r]});return t}},h=Object.keys(v),g=Object.keys(_),$=null,y=function(e){if($)return $;var t=e.extend({beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&(0,l.patchChildren)(this._vval)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(e){return this.getModel()[e]}},computed:{refs:function e(){var t=this._vval;this._vval=this.children,(0,l.patchChildren)(t,this._vval);var e={};return this._vval.forEach(function(t){e[t.key]=t.vm}),e}}}),r=t.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(t){var r=this.getModel();(0,c.pushParams)();var s=this.rule.call(this.rootModel,r,t),o=n(s)?a(e,s):s,i=(0,c.popParams)(),u=i&&i.$sub?i.$sub.length>1?i:i.$sub[0]:null;return{output:o,params:u}}},computed:{run:function(){return this.runRule(this.lazyParentModel())},$params:function(){return this.run.params},proxy:function(){var e=this.run.output;return e[p]?!!e.v:!!e},$pending:function(){var e=this.run.output;return!!e[p]&&e.p}}}),s=t.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:u({},_,{refProxy:function(e){return this.getRef(e).proxy},getRef:function(e){return this.refs[e]},isNested:function(e){return"function"!=typeof this.validations[e]}}),computed:u({},v,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var e=this;return this.keys.filter(function(t){return!e.isNested(t)})},keys:function(){return Object.keys(this.validations).filter(function(e){return"$params"!==e})},proxy:function(){var e=this,t=d(this.keys,function(t){return{enumerable:!0,configurable:!1,get:function(){return e.refProxy(t)}}}),r=d(h,function(t){return{enumerable:!0,configurable:!1,get:function(){return e[t]}}}),n=d(g,function(t){return{enumerable:!1,configurable:!1,get:function(){return e[t]}}});return Object.defineProperties({},u({},t,r,n))},children:function(){var e=this;return[].concat(this.nestedKeys.map(function(t){return y(e,t)}),this.ruleKeys.map(function(t){return b(e,t)})).filter(Boolean)}})}),o=s.extend({methods:{isNested:function(e){return"undefined"!=typeof this.validations[e]()},getRef:function(e){var t=this;return{get proxy(){return t.validations[e]()||!1}}}}}),i=s.extend({computed:{keys:function(){return Object.keys(this.getModel())},tracker:function(){var e=this,t=this.validations.$trackBy;return t?function(r){return""+m(e.rootModel,e.getModelKey(r),t)}:function(e){return""+e}},eagerParentModel:function(){var e=this.lazyParentModel();return function(){return e}},children:function(){var e=this,t=this.validations,r=this.getModel(),n=u({},t);delete n.$trackBy;var a={};return this.keys.map(function(t){var o=e.tracker(t);return a.hasOwnProperty(o)?null:(a[o]=!0,(0,l.h)(s,o,{validations:n,prop:t,lazyParentModel:e.eagerParentModel,model:r[t],rootModel:e.rootModel}))}).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(e){return this.refs[this.tracker(e)]}}}),y=function(e,t){if("$each"===t)return(0,l.h)(i,t,{validations:e.validations[t],lazyParentModel:e.lazyParentModel,prop:t,lazyModel:e.getModel,rootModel:e.rootModel});var r=e.validations[t];if(Array.isArray(r)){var n=e.rootModel,a=d(r,function(e){return function(){return m(n,n.$v,e)}},function(e){return Array.isArray(e)?e.join("."):e});return(0,l.h)(o,t,{validations:a,lazyParentModel:f,prop:t,lazyModel:f,rootModel:n})}return(0,l.h)(s,t,{validations:r,lazyParentModel:e.getModel,prop:t,lazyModel:e.getModelKey,rootModel:e.rootModel})},b=function(e,t){return(0,l.h)(r,t,{rule:e.validations[t],lazyParentModel:e.lazyParentModel,lazyModel:e.getModel,rootModel:e.rootModel})};return $={VBase:t,Validation:s}},b=null,P=function(e,t){var r=o(e),n=y(r),a=n.Validation,s=n.VBase,i=new s({computed:{children:function(){var r="function"==typeof t?t.call(e):t;return[(0,l.h)(a,"$v",{validations:r,lazyParentModel:f,prop:"$v",model:e,rootModel:e})]}}});return i},w={data:function(){var e=this.$options.validations;return e&&(this._vuelidate=P(this,e)),{}},beforeCreate:function(){var e=this,t=this.$options,r=t.validations;r&&(t.computed||(t.computed={}),t.computed.$v=function(){return e._vuelidate.refs.$v.proxy})},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};t.Vuelidate=i,t.validationMixin=w,t.withParams=c.withParams,t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=(0,n.regex)("alpha",/^[a-zA-Z]*$/)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,n)},!0)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},function(r){return!(0,n.req)(r)||!/\s/.test(r)&&+e<=+r&&+t>=+r})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,n.regex)("email",a)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=(0,n.withParams)({type:"ipAddress"},function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)});var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):16===t.length?t.match(/.{2}/g):null;return null!==r&&8===r.length&&r.every(a)})};var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},function(t){return!(0,n.req)(t)||!/\s/.test(t)&&t<=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},function(t){return!(0,n.req)(t)||!/\s/.test(t)&&t>=e})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=(0,n.regex)("numeric",/^[0-9]*$/)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,n)},!1)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=(0,n.withParams)({type:"required"},n.req)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,n.ref)(e,this,r)})}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/;t.default=(0,n.regex)("url",a)},function(e,t){"use strict";function r(e){return null===e||void 0===e}function n(e){return null!==e&&void 0!==e}function a(e,t){return t.tag===e.tag&&t.key===e.key}function s(e){var t=e.tag;e.vm=new t({data:e.args})}function o(e){for(var t=Object.keys(e.args),r=0;r<t.length;r++)t.forEach(function(t){e.vm[t]=e.args[t]})}function i(e,t,r){var a=void 0,s=void 0,o={};for(a=t;a<=r;++a)s=e[a].key,n(s)&&(o[s]=a);return o}function u(e,t){for(var o=0,u=0,d=e.length-1,m=e[0],p=e[d],v=t.length-1,_=t[0],h=t[v],g=void 0,$=void 0,y=void 0;o<=d&&u<=v;)r(m)?m=e[++o]:r(p)?p=e[--d]:a(m,_)?(f(m,_),m=e[++o],_=t[++u]):a(p,h)?(f(p,h),p=e[--d],h=t[--v]):a(m,h)?(f(m,h),m=e[++o],h=t[--v]):a(p,_)?(f(p,_),p=e[--d],_=t[++u]):(r(g)&&(g=i(e,o,d)),$=n(_.key)?g[_.key]:null,r($)?(s(_),_=t[++u]):(y=e[$],a(y,_)?(f(y,_),e[$]=void 0,_=t[++u]):(s(_),_=t[++u])));o>d?l(t,u,v):u>v&&c(e,o,d)}function l(e,t,r){for(;t<=r;++t)s(e[t])}function c(e,t,r){for(;t<=r;++t){var a=e[t];n(a)&&(a.vm.$destroy(),a.vm=null)}}function f(e,t){e!==t&&(t.vm=e.vm,o(t))}function d(e,t){n(e)&&n(t)?e!==t&&u(e,t):n(t)?l(t,0,t.length-1):n(e)&&c(e,0,e.length-1)}function m(e,t,r){return{tag:e,key:t,args:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.patchChildren=d,t.h=m},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4).withParams;t.default=n},function(e,t){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"!=typeof e?e:"undefined"!=typeof window?window:{},n=function(e,t){return"object"==typeof e&&void 0!==t?t:e(function(){})};t.withParams=r.vuelidate?r.vuelidate.withParams:n}).call(t,function(){return this}())},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["langs","current"],methods:{select:function(e){this.$emit("select",e)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{username:""}},validations:{username:{required:n.required,isUnique:function(e){return""===e||new Promise(function(t,r){setTimeout(function(){t("string"==typeof e&&e.length%2!==0)},350+300*Math.random())})}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{name:"",age:0}},validations:{name:{required:n.required,minLength:(0,n.minLength)(4)},age:{between:(0,n.between)(20,30)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),a=new WeakMap;t.default={data:function(){return{name:""}},validations:{name:{required:n.required,minLength:(0,n.minLength)(4),maxLength:(0,n.maxLength)(15)}},methods:{delayTouch:function(e){e.$reset(),a.has(e)&&clearTimeout(a.get(e)),a.set(e,setTimeout(e.$touch,1e3))}}}},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(3);t.default={data:function(){return{name:"",minLength:3,valName:"validatorName"}},validations:function(){return{name:n({},this.valName,(0,a.minLength)(this.minLength))}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{hasDescription:!1,name:"",description:""}},validations:function(){return this.hasDescription?{name:{required:n.required},description:{required:n.required}}:{name:{required:n.required}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{people:[{name:"John"},{name:""}]}},validations:{people:{required:n.required,minLength:(0,n.minLength)(3),$each:{name:{required:n.required,minLength:(0,n.minLength)(2)}}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{form:{nestedA:"",nestedB:""}}},validations:{form:{nestedA:{required:n.required},nestedB:{required:n.required}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{form:{userName:"",password:""}}},validations:{form:{userName:{required:n.required,minLength:(0,n.minLength)(5)},password:{required:n.required,minLength:(0,n.minLength)(8)}}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{password:"",repeatPassword:""}},validations:{password:{required:n.required,minLength:(0,n.minLength)(6)},repeatPassword:{sameAsPassword:(0,n.sameAs)("password")}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.default={data:function(){return{flatA:"",flatB:"",forGroup:{nested:""}}},validations:{flatA:{required:n.required},flatB:{required:n.required},forGroup:{nested:{required:n.required}},validationGroup:["flatA","flatB","forGroup.nested"]}}},function(e,t){},function(e,t,r){var n=r(2)(r(28),r(55),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(29),r(53),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(30),r(54),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(31),r(61),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(32),r(59),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(33),r(51),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(34),r(56),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(35),r(52),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(36),r(58),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(37),r(57),null,null);e.exports=n.exports},function(e,t,r){var n=r(2)(r(38),r(60),null,null);e.exports=n.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.name.$error}},[r("label",{staticClass:"form__label"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value.trim())},function(t){e.$v.name.$touch()}],blur:function(t){e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label",attrs:{for:"hasDesc"}},[e._v("Has description?")]),r("div",{staticClass:"toggle"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.hasDescription,expression:"hasDescription"}],attrs:{id:"hasDesc",type:"checkbox"},domProps:{checked:Array.isArray(e.hasDescription)?e._i(e.hasDescription,null)>-1:e.hasDescription},on:{__c:function(t){var r=e.hasDescription,n=t.target,a=!!n.checked;if(Array.isArray(r)){var s=null,o=e._i(r,s);a?o<0&&(e.hasDescription=r.concat(s)):o>-1&&(e.hasDescription=r.slice(0,o).concat(r.slice(o+1)))}else e.hasDescription=a}}}),e._m(0)])]),e.hasDescription?r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.description.$error}},[r("label",{staticClass:"form__label"},[e._v("Description")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.description,expression:"description",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.description},on:{input:[function(t){t.target.composing||(e.description=t.target.value.trim())},function(t){e.$v.description.$touch()}],blur:function(t){e.$forceUpdate()}}})]):e._e(),r("pre",[e._v("$v: "+e._s(e.$v))])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"hasDesc"}},[r("div",{staticClass:"toggle__switch"})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.nestedA.$error}},[r("label",{staticClass:"form__label"},[e._v("Nested A")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.nestedA,expression:"form.nestedA",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.form.nestedA},on:{input:[function(t){t.target.composing||(e.form.nestedA=t.target.value.trim())},function(t){e.$v.form.nestedA.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.form.nestedA.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.nestedB.$error}},[r("label",{staticClass:"form__label"},[e._v("Nested B")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.nestedB,expression:"form.nestedB",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.form.nestedB},on:{input:[function(t){t.target.composing||(e.form.nestedB=t.target.value.trim())},function(t){e.$v.form.nestedB.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.form.nestedB.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.$error}}),e.$v.form.$error?r("span",{staticClass:"form-group__message"},[e._v("Form is invalid.")]):e._e(),r("pre",[e._v("form: "+e._s(e.$v.form))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.username.$error,"form-group--loading":e.$v.username.$pending}},[r("label",{staticClass:"form__label"},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.username,expression:"username",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.username},on:{input:[function(t){t.target.composing||(e.username=t.target.value.trim())},function(t){e.$v.username.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.username.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Username is required.")]),e.$v.username.isUnique?e._e():r("span",{staticClass:"form-group__message"},[e._v("This username is already registered.")]),r("pre",[e._v("username: "+e._s(e.$v.username))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.name.$error}},[r("label",{staticClass:"form__label"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value.trim())},function(t){e.$v.name.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.name.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required")]),e.$v.name.minLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" letters.")]),r("pre",[e._v("name: "+e._s(e.$v.name))]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.age.$error}},[r("label",{staticClass:"form__label"},[e._v("Age")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.age,expression:"age",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.age},on:{blur:[function(t){e.$v.age.$touch()},function(t){e.$forceUpdate()}],input:function(t){t.target.composing||(e.age=t.target.value.trim())}}})]),e.$v.age.between?e._e():r("span",{staticClass:"form-group__message"},[e._v("Must be between "+e._s(e.$v.age.$params.between.min)+" and "+e._s(e.$v.age.$params.between.max))]),r("pre",[e._v("age: "+e._s(e.$v.age))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tabs"},e._l(e.langs,function(t){return r("a",{staticClass:"tabs__link",class:{"tabs__link--active":t===e.current},on:{click:function(r){e.select(t)}}},[e._v(e._s(t))])}))},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._l(e.people,function(t,n){return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.people.$each[n].$error}},[r("label",{staticClass:"form__label"},[e._v("Name for "+e._s(n))]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.name,expression:"person.name",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:t.name},on:{input:[function(e){e.target.composing||(t.name=e.target.value.trim())},function(t){e.$v.people.$each[n].name.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.people.$each[n].name.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Name is required.")]),e.$v.people.$each[n].name.minLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Name must have at least "+e._s(e.$v.people.$each[n].name.$params.minLength.min)+" letters.")])])}),r("div",[r("button",{staticClass:"button",on:{click:function(t){e.people.push({name:""})}}},[e._v("Add")]),r("button",{staticClass:"button",on:{click:function(t){e.people.pop()}}},[e._v("Remove")])]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.people.$error}}),e.$v.people.minLength?e.$v.people.required?e.$v.people.$error?r("span",{staticClass:"form-group__message"},[e._v("List is invalid.")]):e._e():r("span",{staticClass:"form-group__message"},[e._v("List must not be empty.")]):r("span",{staticClass:"form-group__message"},[e._v("List must have at least "+e._s(e.$v.people.$params.minLength.min)+" elements.")]),r("button",{staticClass:"button",on:{click:e.$v.people.$touch}},[e._v("$touch")]),r("button",{staticClass:"button",on:{click:e.$v.people.$reset}},[e._v("$reset")]),r("pre",[e._v("people: "+e._s(e.$v.people))])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.password.$error}},[r("label",{staticClass:"form__label"},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.password},on:{input:[function(t){t.target.composing||(e.password=t.target.value.trim())},function(t){e.$v.password.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.password.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Password is required.")]),e.$v.password.minLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Password must have at least "+e._s(e.$v.password.$params.minLength.min)+" letters.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.repeatPassword.$error}},[r("label",{staticClass:"form__label"},[e._v("Repeat password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.repeatPassword,expression:"repeatPassword",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.repeatPassword},on:{input:[function(t){t.target.composing||(e.repeatPassword=t.target.value.trim())},function(t){e.$v.repeatPassword.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.repeatPassword.sameAsPassword?e._e():r("span",{staticClass:"form-group__message"},[e._v("Passwords must be identical.")]),r("pre",[e._v("password: "+e._s(e.$v.password)+"\nrepeatPassword: "+e._s(e.$v.repeatPassword))])])},staticRenderFns:[]
}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.userName.$error}},[r("label",{staticClass:"form__label"},[e._v("Nested A")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.userName,expression:"form.userName",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.form.userName},on:{input:[function(t){t.target.composing||(e.form.userName=t.target.value.trim())},function(t){e.$v.form.userName.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.form.userName.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),e.$v.form.userName.minLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field must have at least "+e._s(e.$v.form.userName.$params.minLength.min)+" characters.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.password.$error}},[r("label",{staticClass:"form__label"},[e._v("Nested B")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form__input",attrs:{type:"password"},domProps:{value:e.form.password},on:{input:[function(t){t.target.composing||(e.form.password=t.target.value.trim())},function(t){e.$v.form.password.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.form.password.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),e.$v.form.password.minLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field must have at least "+e._s(e.$v.form.password.$params.minLength.min)+" characters.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.$error}},[e.$v.form.$error?r("span",{staticClass:"form-group__message"},[e._v("Form is invalid.")]):e._e()]),r("pre",[e._v("form: "+e._s(e.$v.form))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Validator name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.valName,expression:"valName",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.valName},on:{input:[function(t){t.target.composing||(e.valName=t.target.value.trim())},function(t){e.$v.name.$touch()}],blur:function(t){e.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form__label"},[e._v("Dynamic min length")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.minLength,expression:"minLength",modifiers:{number:!0}}],staticClass:"form__input",attrs:{type:"number"},domProps:{value:e.minLength},on:{input:[function(t){t.target.composing||(e.minLength=e._n(t.target.value))},function(t){e.$v.name.$touch()}],blur:function(t){e.$forceUpdate()}}})]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.name.$error}},[r("label",{staticClass:"form__label"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value.trim())},function(t){e.$v.name.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.name[e.valName]?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is invalid")]),r("pre",[e._v("$v: "+e._s(e.$v))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.flatA.$error}},[r("label",{staticClass:"form__label"},[e._v("Flat A")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.flatA,expression:"flatA",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.flatA},on:{input:[function(t){t.target.composing||(e.flatA=t.target.value.trim())},function(t){e.$v.flatA.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.flatA.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.flatB.$error}},[r("label",{staticClass:"form__label"},[e._v("Flat B")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.flatB,expression:"flatB",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.flatB},on:{input:[function(t){t.target.composing||(e.flatB=t.target.value.trim())},function(t){e.$v.flatB.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.flatB.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.forGroup.nested.$error}},[r("label",{staticClass:"form__label"},[e._v("Nested field")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.forGroup.nested,expression:"forGroup.nested",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.forGroup.nested},on:{input:[function(t){t.target.composing||(e.forGroup.nested=t.target.value.trim())},function(t){e.$v.forGroup.nested.$touch()}],blur:function(t){e.$forceUpdate()}}})]),e.$v.forGroup.nested.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required.")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.validationGroup.$error}}),e.$v.validationGroup.$error?r("span",{staticClass:"form-group__message"},[e._v("Group is invalid.")]):e._e(),r("pre",[e._v("validationGroup: "+e._s(e.$v.validationGroup))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.name.$error}},[r("label",{staticClass:"form__label"},[e._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"name",modifiers:{trim:!0}}],staticClass:"form__input",domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value.trim())},function(t){e.delayTouch(e.$v.name)}],blur:function(t){e.$forceUpdate()}}})]),e.$v.name.required?e._e():r("span",{staticClass:"form-group__message"},[e._v("Field is required")]),e.$v.name.minLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Name must have at least "+e._s(e.$v.name.$params.minLength.min)+" letters.")]),e.$v.name.maxLength?e._e():r("span",{staticClass:"form-group__message"},[e._v("Name must have at most "+e._s(e.$v.name.$params.maxLength.max)+" letters.")]),r("pre",[e._v("name: "+e._s(e.$v.name))])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.4cf70da108c5833bf89c.js.map