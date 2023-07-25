import{o as ie,b$ as Ke,w as Ie,A as Ue,e as V,g as L,a as J,j as ze,d as Le,m as Ve,p as me,r as Q,R as be,h as _,d1 as Ce,aj as ye,c as k,b as Xe,i as le,t as de,d2 as Fe,d3 as Je,y as Qe,v as et,I as tt,C as rt,s as B,a7 as Pe}from"./index-d54e27e5.js";import{f as he}from"./format-length-c9d165c6.js";import{g as Te}from"./get-f627e15a.js";function nt(n,e,t){var r;const i=ie(n,null);if(i===null)return;const s=(r=Ke())===null||r===void 0?void 0:r.proxy;Ie(t,a),a(t.value),Ue(()=>{a(void 0,t.value)});function a(d,l){const m=i[e];l!==void 0&&o(m,l),d!==void 0&&f(m,d)}function o(d,l){d[l]||(d[l]=[]),d[l].splice(d[l].findIndex(m=>m===s),1)}function f(d,l){d[l]||(d[l]=[]),~d[l].findIndex(m=>m===s)||d[l].push(s)}}const it=V("form",[L("inline",`
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `,[V("form-item",{width:"auto",marginRight:"18px"},[J("&:last-child",{marginRight:0})])])]),ae=ze("n-form"),Ne=ze("n-form-item-insts");var at=globalThis&&globalThis.__awaiter||function(n,e,t,r){function i(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(l){try{d(r.next(l))}catch(m){a(m)}}function f(l){try{d(r.throw(l))}catch(m){a(m)}}function d(l){l.done?s(l.value):i(l.value).then(o,f)}d((r=r.apply(n,e||[])).next())})};const st=Object.assign(Object.assign({},me.props),{inline:Boolean,labelWidth:[Number,String],labelAlign:String,labelPlacement:{type:String,default:"top"},model:{type:Object,default:()=>{}},rules:Object,disabled:Boolean,size:String,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:!0},onSubmit:{type:Function,default:n=>{n.preventDefault()}},showLabel:{type:Boolean,default:void 0},validateMessages:Object}),Jt=Le({name:"Form",props:st,setup(n){const{mergedClsPrefixRef:e}=Ve(n);me("Form","-form",it,Ce,n,e);const t={},r=Q(void 0),i=f=>{const d=r.value;(d===void 0||f>=d)&&(r.value=f)};function s(f,d=()=>!0){return at(this,void 0,void 0,function*(){yield new Promise((l,m)=>{const b=[];for(const c of ye(t)){const y=t[c];for(const g of y)g.path&&b.push(g.internalValidate(null,d))}Promise.all(b).then(c=>{if(c.some(y=>!y.valid)){const y=c.filter(g=>g.errors).map(g=>g.errors);f&&f(y),m(y)}else f&&f(),l()})})})}function a(){for(const f of ye(t)){const d=t[f];for(const l of d)l.restoreValidation()}}return be(ae,{props:n,maxChildLabelWidthRef:r,deriveMaxChildLabelWidth:i}),be(Ne,{formItems:t}),Object.assign({validate:s,restoreValidation:a},{mergedClsPrefix:e})},render(){const{mergedClsPrefix:n}=this;return _("form",{class:[`${n}-form`,this.inline&&`${n}-form--inline`],onSubmit:this.onSubmit},this.$slots)}});function Z(){return Z=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Z.apply(this,arguments)}function ot(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,ne(n,e)}function we(n){return we=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},we(n)}function ne(n,e){return ne=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ne(n,e)}function ft(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ce(n,e,t){return ft()?ce=Reflect.construct.bind():ce=function(i,s,a){var o=[null];o.push.apply(o,s);var f=Function.bind.apply(i,o),d=new f;return a&&ne(d,a.prototype),d},ce.apply(null,arguments)}function lt(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function xe(n){var e=typeof Map=="function"?new Map:void 0;return xe=function(r){if(r===null||!lt(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return ce(r,arguments,we(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ne(i,r)},xe(n)}var dt=/%[sdj%]/g,ut=function(){};typeof process<"u"&&process.env;function Re(n){if(!n||!n.length)return null;var e={};return n.forEach(function(t){var r=t.field;e[r]=e[r]||[],e[r].push(t)}),e}function j(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=0,s=t.length;if(typeof n=="function")return n.apply(null,t);if(typeof n=="string"){var a=n.replace(dt,function(o){if(o==="%%")return"%";if(i>=s)return o;switch(o){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch{return"[Circular]"}break;default:return o}});return a}return n}function ct(n){return n==="string"||n==="url"||n==="hex"||n==="email"||n==="date"||n==="pattern"}function q(n,e){return!!(n==null||e==="array"&&Array.isArray(n)&&!n.length||ct(e)&&typeof n=="string"&&!n)}function mt(n,e,t){var r=[],i=0,s=n.length;function a(o){r.push.apply(r,o||[]),i++,i===s&&t(r)}n.forEach(function(o){e(o,a)})}function _e(n,e,t){var r=0,i=n.length;function s(a){if(a&&a.length){t(a);return}var o=r;r=r+1,o<i?e(n[o],s):t([])}s([])}function gt(n){var e=[];return Object.keys(n).forEach(function(t){e.push.apply(e,n[t]||[])}),e}var Oe=function(n){ot(e,n);function e(t,r){var i;return i=n.call(this,"Async Validation Error")||this,i.errors=t,i.fields=r,i}return e}(xe(Error));function ht(n,e,t,r,i){if(e.first){var s=new Promise(function(b,c){var y=function(u){return r(u),u.length?c(new Oe(u,Re(u))):b(i)},g=gt(n);_e(g,t,y)});return s.catch(function(b){return b}),s}var a=e.firstFields===!0?Object.keys(n):e.firstFields||[],o=Object.keys(n),f=o.length,d=0,l=[],m=new Promise(function(b,c){var y=function(x){if(l.push.apply(l,x),d++,d===f)return r(l),l.length?c(new Oe(l,Re(l))):b(i)};o.length||(r(l),b(i)),o.forEach(function(g){var x=n[g];a.indexOf(g)!==-1?_e(x,t,y):mt(x,t,y)})});return m.catch(function(b){return b}),m}function pt(n){return!!(n&&n.message!==void 0)}function vt(n,e){for(var t=n,r=0;r<e.length;r++){if(t==null)return t;t=t[e[r]]}return t}function $e(n,e){return function(t){var r;return n.fullFields?r=vt(e,n.fullFields):r=e[t.field||n.fullField],pt(t)?(t.field=t.field||n.fullField,t.fieldValue=r,t):{message:typeof t=="function"?t():t,fieldValue:r,field:t.field||n.fullField}}}function Se(n,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r=="object"&&typeof n[t]=="object"?n[t]=Z({},n[t],r):n[t]=r}}return n}var We=function(e,t,r,i,s,a){e.required&&(!r.hasOwnProperty(e.field)||q(t,a||e.type))&&i.push(j(s.messages.required,e.fullField))},bt=function(e,t,r,i,s){(/^\s+$/.test(t)||t==="")&&i.push(j(s.messages.whitespace,e.fullField))},ue,yt=function(){if(ue)return ue;var n="[a-fA-F\\d:]",e=function(w){return w&&w.includeBoundaries?"(?:(?<=\\s|^)(?="+n+")|(?<="+n+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+t+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+t+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+t+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+t+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+t+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+t+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+t+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+i+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+i+"$"),f=function(w){return w&&w.exact?s:new RegExp("(?:"+e(w)+t+e(w)+")|(?:"+e(w)+i+e(w)+")","g")};f.v4=function(p){return p&&p.exact?a:new RegExp(""+e(p)+t+e(p),"g")},f.v6=function(p){return p&&p.exact?o:new RegExp(""+e(p)+i+e(p),"g")};var d="(?:(?:[a-z]+:)?//)",l="(?:\\S+(?::\\S*)?@)?",m=f.v4().source,b=f.v6().source,c="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",y="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",g="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",x="(?::\\d{2,5})?",u='(?:[/?#][^\\s"]*)?',M="(?:"+d+"|www\\.)"+l+"(?:localhost|"+m+"|"+b+"|"+c+y+g+")"+x+u;return ue=new RegExp("(?:^"+M+"$)","i"),ue},Ae={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},te={integer:function(e){return te.number(e)&&parseInt(e,10)===e},float:function(e){return te.number(e)&&!te.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!te.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ae.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(yt())},hex:function(e){return typeof e=="string"&&!!e.match(Ae.hex)}},wt=function(e,t,r,i,s){if(e.required&&t===void 0){We(e,t,r,i,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?te[o](t)||i.push(j(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&i.push(j(s.messages.types[o],e.fullField,e.type))},xt=function(e,t,r,i,s){var a=typeof e.len=="number",o=typeof e.min=="number",f=typeof e.max=="number",d=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=t,m=null,b=typeof t=="number",c=typeof t=="string",y=Array.isArray(t);if(b?m="number":c?m="string":y&&(m="array"),!m)return!1;y&&(l=t.length),c&&(l=t.replace(d,"_").length),a?l!==e.len&&i.push(j(s.messages[m].len,e.fullField,e.len)):o&&!f&&l<e.min?i.push(j(s.messages[m].min,e.fullField,e.min)):f&&!o&&l>e.max?i.push(j(s.messages[m].max,e.fullField,e.max)):o&&f&&(l<e.min||l>e.max)&&i.push(j(s.messages[m].range,e.fullField,e.min,e.max))},X="enum",Rt=function(e,t,r,i,s){e[X]=Array.isArray(e[X])?e[X]:[],e[X].indexOf(t)===-1&&i.push(j(s.messages[X],e.fullField,e[X].join(", ")))},qt=function(e,t,r,i,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(j(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||i.push(j(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},v={required:We,whitespace:bt,type:wt,range:xt,enum:Rt,pattern:qt},kt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t,"string")&&!e.required)return r();v.required(e,t,i,a,s,"string"),q(t,"string")||(v.type(e,t,i,a,s),v.range(e,t,i,a,s),v.pattern(e,t,i,a,s),e.whitespace===!0&&v.whitespace(e,t,i,a,s))}r(a)},Ft=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}r(a)},Pt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},_t=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}r(a)},Ot=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),q(t)||v.type(e,t,i,a,s)}r(a)},$t=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},St=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},At=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return r();v.required(e,t,i,a,s,"array"),t!=null&&(v.type(e,t,i,a,s),v.range(e,t,i,a,s))}r(a)},Et=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v.type(e,t,i,a,s)}r(a)},jt="enum",Mt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s),t!==void 0&&v[jt](e,t,i,a,s)}r(a)},It=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t,"string")&&!e.required)return r();v.required(e,t,i,a,s),q(t,"string")||v.pattern(e,t,i,a,s)}r(a)},zt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t,"date")&&!e.required)return r();if(v.required(e,t,i,a,s),!q(t,"date")){var f;t instanceof Date?f=t:f=new Date(t),v.type(e,f,i,a,s),f&&v.range(e,f.getTime(),i,a,s)}}r(a)},Lt=function(e,t,r,i,s){var a=[],o=Array.isArray(t)?"array":typeof t;v.required(e,t,i,a,s,o),r(a)},pe=function(e,t,r,i,s){var a=e.type,o=[],f=e.required||!e.required&&i.hasOwnProperty(e.field);if(f){if(q(t,a)&&!e.required)return r();v.required(e,t,i,o,s,a),q(t,a)||v.type(e,t,i,o,s)}r(o)},Vt=function(e,t,r,i,s){var a=[],o=e.required||!e.required&&i.hasOwnProperty(e.field);if(o){if(q(t)&&!e.required)return r();v.required(e,t,i,a,s)}r(a)},re={string:kt,method:Ft,number:Pt,boolean:_t,regexp:Ot,integer:$t,float:St,array:At,object:Et,enum:Mt,pattern:It,date:zt,url:pe,hex:pe,email:pe,required:Lt,any:Vt};function qe(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var ke=qe(),se=function(){function n(t){this.rules=null,this._messages=ke,this.define(t)}var e=n.prototype;return e.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(s){var a=r[s];i.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(r){return r&&(this._messages=Se(qe(),r)),this._messages},e.validate=function(r,i,s){var a=this;i===void 0&&(i={}),s===void 0&&(s=function(){});var o=r,f=i,d=s;if(typeof f=="function"&&(d=f,f={}),!this.rules||Object.keys(this.rules).length===0)return d&&d(null,o),Promise.resolve(o);function l(g){var x=[],u={};function M(w){if(Array.isArray(w)){var P;x=(P=x).concat.apply(P,w)}else x.push(w)}for(var p=0;p<g.length;p++)M(g[p]);x.length?(u=Re(x),d(x,u)):d(null,o)}if(f.messages){var m=this.messages();m===ke&&(m=qe()),Se(m,f.messages),f.messages=m}else f.messages=this.messages();var b={},c=f.keys||Object.keys(this.rules);c.forEach(function(g){var x=a.rules[g],u=o[g];x.forEach(function(M){var p=M;typeof p.transform=="function"&&(o===r&&(o=Z({},o)),u=o[g]=p.transform(u)),typeof p=="function"?p={validator:p}:p=Z({},p),p.validator=a.getValidationMethod(p),p.validator&&(p.field=g,p.fullField=p.fullField||g,p.type=a.getType(p),b[g]=b[g]||[],b[g].push({rule:p,value:u,source:o,field:g}))})});var y={};return ht(b,f,function(g,x){var u=g.rule,M=(u.type==="object"||u.type==="array")&&(typeof u.fields=="object"||typeof u.defaultField=="object");M=M&&(u.required||!u.required&&g.value),u.field=g.field;function p(F,O){return Z({},O,{fullField:u.fullField+"."+F,fullFields:u.fullFields?[].concat(u.fullFields,[F]):[F]})}function w(F){F===void 0&&(F=[]);var O=Array.isArray(F)?F:[F];!f.suppressWarning&&O.length&&n.warning("async-validator:",O),O.length&&u.message!==void 0&&(O=[].concat(u.message));var I=O.map($e(u,o));if(f.first&&I.length)return y[u.field]=1,x(I);if(!M)x(I);else{if(u.required&&!g.value)return u.message!==void 0?I=[].concat(u.message).map($e(u,o)):f.error&&(I=[f.error(u,j(f.messages.required,u.field))]),x(I);var W={};u.defaultField&&Object.keys(g.value).map(function(z){W[z]=u.defaultField}),W=Z({},W,g.rule.fields);var ee={};Object.keys(W).forEach(function(z){var h=W[z],A=Array.isArray(h)?h:[h];ee[z]=A.map(p.bind(null,z))});var N=new n(ee);N.messages(f.messages),g.rule.options&&(g.rule.options.messages=f.messages,g.rule.options.error=f.error),N.validate(g.value,g.rule.options||f,function(z){var h=[];I&&I.length&&h.push.apply(h,I),z&&z.length&&h.push.apply(h,z),x(h.length?h:null)})}}var P;if(u.asyncValidator)P=u.asyncValidator(u,g.value,w,g.source,f);else if(u.validator){try{P=u.validator(u,g.value,w,g.source,f)}catch(F){console.error==null||console.error(F),f.suppressValidatorError||setTimeout(function(){throw F},0),w(F.message)}P===!0?w():P===!1?w(typeof u.message=="function"?u.message(u.fullField||u.field):u.message||(u.fullField||u.field)+" fails"):P instanceof Array?w(P):P instanceof Error&&w(P.message)}P&&P.then&&P.then(function(){return w()},function(F){return w(F)})},function(g){l(g)},o)},e.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!re.hasOwnProperty(r.type))throw new Error(j("Unknown rule type %s",r.type));return r.type||"string"},e.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),s=i.indexOf("message");return s!==-1&&i.splice(s,1),i.length===1&&i[0]==="required"?re.required:re[this.getType(r)]||void 0},n}();se.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");re[e]=t};se.warning=ut;se.messages=ke;se.validators=re;function Ct(n){const e=ie(ae,null);return{mergedSize:k(()=>n.size!==void 0?n.size:(e==null?void 0:e.props.size)!==void 0?e.props.size:"medium")}}function Tt(n){const e=ie(ae,null),t=k(()=>{const{labelPlacement:c}=n;return c!==void 0?c:e!=null&&e.props.labelPlacement?e.props.labelPlacement:"top"}),r=k(()=>t.value==="left"&&(n.labelWidth==="auto"||(e==null?void 0:e.props.labelWidth)==="auto")),i=k(()=>{if(t.value==="top")return;const{labelWidth:c}=n;if(c!==void 0&&c!=="auto")return he(c);if(r.value){const y=e==null?void 0:e.maxChildLabelWidthRef.value;return y!==void 0?he(y):void 0}if((e==null?void 0:e.props.labelWidth)!==void 0)return he(e.props.labelWidth)}),s=k(()=>{const{labelAlign:c}=n;if(c)return c;if(e!=null&&e.props.labelAlign)return e.props.labelAlign}),a=k(()=>{var c;return[(c=n.labelProps)===null||c===void 0?void 0:c.style,n.labelStyle,{width:i.value}]}),o=k(()=>{const{showRequireMark:c}=n;return c!==void 0?c:e==null?void 0:e.props.showRequireMark}),f=k(()=>{const{requireMarkPlacement:c}=n;return c!==void 0?c:(e==null?void 0:e.props.requireMarkPlacement)||"right"}),d=Q(!1),l=k(()=>{const{validationStatus:c}=n;if(c!==void 0)return c;if(d.value)return"error"}),m=k(()=>{const{showFeedback:c}=n;return c!==void 0?c:(e==null?void 0:e.props.showFeedback)!==void 0?e.props.showFeedback:!0}),b=k(()=>{const{showLabel:c}=n;return c!==void 0?c:(e==null?void 0:e.props.showLabel)!==void 0?e.props.showLabel:!0});return{validationErrored:d,mergedLabelStyle:a,mergedLabelPlacement:t,mergedLabelAlign:s,mergedShowRequireMark:o,mergedRequireMarkPlacement:f,mergedValidationStatus:l,mergedShowFeedback:m,mergedShowLabel:b,isAutoLabelWidth:r}}function Nt(n){const e=ie(ae,null),t=k(()=>{const{rulePath:a}=n;if(a!==void 0)return a;const{path:o}=n;if(o!==void 0)return o}),r=k(()=>{const a=[],{rule:o}=n;if(o!==void 0&&(Array.isArray(o)?a.push(...o):a.push(o)),e){const{rules:f}=e.props,{value:d}=t;if(f!==void 0&&d!==void 0){const l=Te(f,d);l!==void 0&&(Array.isArray(l)?a.push(...l):a.push(l))}}return a}),i=k(()=>r.value.some(a=>a.required)),s=k(()=>i.value||n.required);return{mergedRules:r,mergedRequired:s}}const{cubicBezierEaseInOut:Ee}=Xe;function Wt({name:n="fade-down",fromOffset:e="-4px",enterDuration:t=".3s",leaveDuration:r=".3s",enterCubicBezier:i=Ee,leaveCubicBezier:s=Ee}={}){return[J(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0,transform:`translateY(${e})`}),J(`&.${n}-transition-enter-to, &.${n}-transition-leave-from`,{opacity:1,transform:"translateY(0)"}),J(`&.${n}-transition-leave-active`,{transition:`opacity ${r} ${s}, transform ${r} ${s}`}),J(`&.${n}-transition-enter-active`,{transition:`opacity ${t} ${i}, transform ${t} ${i}`})]}const Bt=V("form-item",`
 display: grid;
 line-height: var(--n-line-height);
`,[V("form-item-label",`
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `,[le("asterisk",`
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `),le("asterisk-placeholder",`
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]),V("form-item-blank",`
 grid-area: blank;
 min-height: var(--n-blank-height);
 `),L("auto-label-width",[V("form-item-label","white-space: nowrap;")]),L("left-labelled",`
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: start;
 `,[V("form-item-label",`
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `,[L("reverse-columns-space",`
 grid-template-columns: auto 1fr;
 `),L("left-mark",`
 grid-template-areas:
 "mark text"
 ". text";
 `),L("right-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),L("right-hanging-mark",`
 grid-template-areas: 
 "text mark"
 "text .";
 `),le("text",`
 grid-area: text; 
 `),le("asterisk",`
 grid-area: mark; 
 align-self: end;
 `)])]),L("top-labelled",`
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `,[L("no-label",`
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `),V("form-item-label",`
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]),V("form-item-blank",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `),V("form-item-feedback-wrapper",`
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `,[J("&:not(:empty)",`
 padding: var(--n-feedback-padding);
 `),V("form-item-feedback",{transition:"color .3s var(--n-bezier)",color:"var(--n-feedback-text-color)"},[L("warning",{color:"var(--n-feedback-text-color-warning)"}),L("error",{color:"var(--n-feedback-text-color-error)"}),Wt({fromOffset:"-3px",enterDuration:".3s",leaveDuration:".2s"})])])]);var je=globalThis&&globalThis.__awaiter||function(n,e,t,r){function i(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(l){try{d(r.next(l))}catch(m){a(m)}}function f(l){try{d(r.throw(l))}catch(m){a(m)}}function d(l){l.done?s(l.value):i(l.value).then(o,f)}d((r=r.apply(n,e||[])).next())})};const Be=Object.assign(Object.assign({},me.props),{label:String,labelWidth:[Number,String],labelStyle:[String,Object],labelAlign:String,labelPlacement:String,path:String,first:Boolean,rulePath:String,required:Boolean,showRequireMark:{type:Boolean,default:void 0},requireMarkPlacement:String,showFeedback:{type:Boolean,default:void 0},rule:[Object,Array],size:String,ignorePathChange:Boolean,validationStatus:String,feedback:String,showLabel:{type:Boolean,default:void 0},labelProps:Object}),Qt=ye(Be);function Me(n,e){return(...t)=>{try{const r=n(...t);return!e&&(typeof r=="boolean"||r instanceof Error||Array.isArray(r))||r!=null&&r.then?r:(r===void 0||Pe("form-item/validate",`You return a ${typeof r} typed value in the validator method, which is not recommended. Please use `+(e?"`Promise`":"`boolean`, `Error` or `Promise`")+" typed value instead."),!0)}catch(r){Pe("form-item/validate","An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."),console.error(r);return}}}const er=Le({name:"FormItem",props:Be,setup(n){nt(Ne,"formItems",de(n,"path"));const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=Ve(n),r=ie(ae,null),i=Ct(n),s=Tt(n),{validationErrored:a}=s,{mergedRequired:o,mergedRules:f}=Nt(n),{mergedSize:d}=i,{mergedLabelPlacement:l,mergedLabelAlign:m,mergedRequireMarkPlacement:b}=s,c=Q([]),y=Q(Fe()),g=r?de(r.props,"disabled"):Q(!1),x=me("Form","-form-item",Bt,Ce,n,e);Ie(de(n,"path"),()=>{n.ignorePathChange||u()});function u(){c.value=[],a.value=!1,n.feedback&&(y.value=Fe())}function M(){O("blur")}function p(){O("change")}function w(){O("focus")}function P(){O("input")}function F(h,A){return je(this,void 0,void 0,function*(){let E,$,D,Y;typeof h=="string"?(E=h,$=A):h!==null&&typeof h=="object"&&(E=h.trigger,$=h.callback,D=h.shouldRuleBeApplied,Y=h.options),yield new Promise((G,K)=>{O(E,D,Y).then(({valid:U,errors:H})=>{U?($&&$(),G()):($&&$(H),K(H))})})})}const O=(h=null,A=()=>!0,E={suppressWarning:!0})=>je(this,void 0,void 0,function*(){const{path:$}=n;E?E.first||(E.first=n.first):E={};const{value:D}=f,Y=r?Te(r.props.model,$||""):void 0,G={},K={},U=(h?D.filter(C=>Array.isArray(C.trigger)?C.trigger.includes(h):C.trigger===h):D).filter(A).map((C,T)=>{const R=Object.assign({},C);if(R.validator&&(R.validator=Me(R.validator,!1)),R.asyncValidator&&(R.asyncValidator=Me(R.asyncValidator,!0)),R.renderMessage){const S=`__renderMessage__${T}`;K[S]=R.message,R.message=S,G[S]=R.renderMessage}return R});if(!U.length)return{valid:!0};const H=$??"__n_no_path__",oe=new se({[H]:U}),{validateMessages:fe}=(r==null?void 0:r.props)||{};return fe&&oe.messages(fe),yield new Promise(C=>{oe.validate({[H]:Y},E,T=>{T!=null&&T.length?(c.value=T.map(R=>{const S=(R==null?void 0:R.message)||"";return{key:S,render:()=>S.startsWith("__renderMessage__")?G[S]():S}}),T.forEach(R=>{var S;!((S=R.message)===null||S===void 0)&&S.startsWith("__renderMessage__")&&(R.message=K[R.message])}),a.value=!0,C({valid:!1,errors:T})):(u(),C({valid:!0}))})})});be(Je,{path:de(n,"path"),disabled:g,mergedSize:i.mergedSize,mergedValidationStatus:s.mergedValidationStatus,restoreValidation:u,handleContentBlur:M,handleContentChange:p,handleContentFocus:w,handleContentInput:P});const I={validate:F,restoreValidation:u,internalValidate:O},W=Q(null);Qe(()=>{if(!s.isAutoLabelWidth.value)return;const h=W.value;if(h!==null){const A=h.style.whiteSpace;h.style.whiteSpace="nowrap",h.style.width="",r==null||r.deriveMaxChildLabelWidth(Number(getComputedStyle(h).width.slice(0,-2))),h.style.whiteSpace=A}});const ee=k(()=>{var h;const{value:A}=d,{value:E}=l,$=E==="top"?"vertical":"horizontal",{common:{cubicBezierEaseInOut:D},self:{labelTextColor:Y,asteriskColor:G,lineHeight:K,feedbackTextColor:U,feedbackTextColorWarning:H,feedbackTextColorError:oe,feedbackPadding:fe,labelFontWeight:C,[B("labelHeight",A)]:T,[B("blankHeight",A)]:R,[B("feedbackFontSize",A)]:S,[B("feedbackHeight",A)]:He,[B("labelPadding",$)]:Ze,[B("labelTextAlign",$)]:Ye,[B(B("labelFontSize",E),A)]:Ge}}=x.value;let ge=(h=m.value)!==null&&h!==void 0?h:Ye;return E==="top"&&(ge=ge==="right"?"flex-end":"flex-start"),{"--n-bezier":D,"--n-line-height":K,"--n-blank-height":R,"--n-label-font-size":Ge,"--n-label-text-align":ge,"--n-label-height":T,"--n-label-padding":Ze,"--n-label-font-weight":C,"--n-asterisk-color":G,"--n-label-text-color":Y,"--n-feedback-padding":fe,"--n-feedback-font-size":S,"--n-feedback-height":He,"--n-feedback-text-color":U,"--n-feedback-text-color-warning":H,"--n-feedback-text-color-error":oe}}),N=t?et("form-item",k(()=>{var h;return`${d.value[0]}${l.value[0]}${((h=m.value)===null||h===void 0?void 0:h[0])||""}`}),ee,n):void 0,z=k(()=>l.value==="left"&&b.value==="left"&&m.value==="left");return Object.assign(Object.assign(Object.assign(Object.assign({labelElementRef:W,mergedClsPrefix:e,mergedRequired:o,feedbackId:y,renderExplains:c,reverseColSpace:z},s),i),I),{cssVars:t?void 0:ee,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender})},render(){const{$slots:n,mergedClsPrefix:e,mergedShowLabel:t,mergedShowRequireMark:r,mergedRequireMarkPlacement:i,onRender:s}=this,a=r!==void 0?r:this.mergedRequired;s==null||s();const o=()=>{const f=this.$slots.label?this.$slots.label():this.label;if(!f)return null;const d=_("span",{class:`${e}-form-item-label__text`},f),l=a?_("span",{class:`${e}-form-item-label__asterisk`},i!=="left"?" *":"* "):i==="right-hanging"&&_("span",{class:`${e}-form-item-label__asterisk-placeholder`}," *"),{labelProps:m}=this;return _("label",Object.assign({},m,{class:[m==null?void 0:m.class,`${e}-form-item-label`,`${e}-form-item-label--${i}-mark`,this.reverseColSpace&&`${e}-form-item-label--reverse-columns-space`],style:this.mergedLabelStyle,ref:"labelElementRef"}),i==="left"?[l,d]:[d,l])};return _("div",{class:[`${e}-form-item`,this.themeClass,`${e}-form-item--${this.mergedSize}-size`,`${e}-form-item--${this.mergedLabelPlacement}-labelled`,this.isAutoLabelWidth&&`${e}-form-item--auto-label-width`,!t&&`${e}-form-item--no-label`],style:this.cssVars},t&&o(),_("div",{class:[`${e}-form-item-blank`,this.mergedValidationStatus&&`${e}-form-item-blank--${this.mergedValidationStatus}`]},n),this.mergedShowFeedback?_("div",{key:this.feedbackId,class:`${e}-form-item-feedback-wrapper`},_(tt,{name:"fade-down-transition",mode:"out-in"},{default:()=>{const{mergedValidationStatus:f}=this;return rt(n.feedback,d=>{var l;const{feedback:m}=this,b=d||m?_("div",{key:"__feedback__",class:`${e}-form-item-feedback__line`},d||m):this.renderExplains.length?(l=this.renderExplains)===null||l===void 0?void 0:l.map(({key:c,render:y})=>_("div",{key:c,class:`${e}-form-item-feedback__line`},y())):null;return b?f==="warning"?_("div",{key:"controlled-warning",class:`${e}-form-item-feedback ${e}-form-item-feedback--warning`},b):f==="error"?_("div",{key:"controlled-error",class:`${e}-form-item-feedback ${e}-form-item-feedback--error`},b):f==="success"?_("div",{key:"controlled-success",class:`${e}-form-item-feedback ${e}-form-item-feedback--success`},b):_("div",{key:"controlled-default",class:`${e}-form-item-feedback`},b):null})}})):null)}}),Dt=/^[1](([3][0-9])|([4][01456789])|([5][012356789])|([6][2567])|([7][0-8])|([8][0-9])|([9][012356789]))[0-9]{8}$/,Ht=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,Zt=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^.*[\u4E00-\u9FA5].*$)([^(0-9a-zA-Z)]|[()]|[a-z]|[A-Z]|[0-9]){6,18}$/,Yt=/^\d{6}$/,tr={required:!1},ve=(n="不能为空")=>({required:!0,message:n}),rr={phone:[ve("请输入手机号码"),{pattern:Dt,message:"手机号码格式错误",trigger:"input"}],pwd:[ve("请输入密码"),{pattern:Zt,message:"密码为6-18位数字/字符/符号，至少2种组合",trigger:"input"}],code:[ve("请输入验证码"),{pattern:Yt,message:"验证码格式错误",trigger:"input"}],email:[{pattern:Ht,message:"邮箱格式错误",trigger:"blur"}]};function De(n){return n.trim()===""}function nr(n){return[{required:!0,message:"请输入确认密码"},{validator:(t,r)=>!De(r)&&r!==n.value?Promise.reject(t.message):Promise.resolve(),message:"输入的值与密码不一致",trigger:"input"}]}function ir(n){return[{required:!0,message:"请输入验证码"},{validator:(t,r)=>!De(r)&&r!==n.value?Promise.reject(t.message):Promise.resolve(),message:"验证码不正确",trigger:"blur"}]}export{Dt as R,er as _,Jt as a,nr as b,ve as c,Be as d,Qt as e,rr as f,ir as g,tr as u};
