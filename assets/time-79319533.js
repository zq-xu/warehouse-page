import{it as c,iu as w,iv as x,iw as J,ix as E,iy as H}from"./index-705f4fe4.js";import{d as Z}from"./Suffix-53b8263c.js";function z(n,t){c(2,arguments);var e=w(n).getTime(),r=x(t);return new Date(e+r)}function ee(n){var t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),n.getTime()-t.getTime()}function te(n){return c(1,arguments),n instanceof Date||J(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function re(n){if(c(1,arguments),!te(n)&&typeof n!="number")return!1;var t=w(n);return!isNaN(Number(t))}function ae(n,t){c(2,arguments);var e=x(t);return z(n,-e)}var ne=864e5;function ie(n){c(1,arguments);var t=w(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=e-r;return Math.floor(a/ne)+1}function W(n){c(1,arguments);var t=1,e=w(n),r=e.getUTCDay(),a=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-a),e.setUTCHours(0,0,0,0),e}function Q(n){c(1,arguments);var t=w(n),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var a=W(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var o=W(i);return t.getTime()>=a.getTime()?e+1:t.getTime()>=o.getTime()?e:e-1}function oe(n){c(1,arguments);var t=Q(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=W(e);return r}var ue=6048e5;function se(n){c(1,arguments);var t=w(n),e=W(t).getTime()-oe(t).getTime();return Math.round(e/ue)+1}function R(n,t){var e,r,a,i,o,s,l,v;c(1,arguments);var g=w(n),m=g.getUTCFullYear(),T=H(),f=x((e=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:T.firstWeekContainsDate)!==null&&r!==void 0?r:(l=T.locale)===null||l===void 0||(v=l.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(m+1,0,f),h.setUTCHours(0,0,0,0);var U=E(h,t),C=new Date(0);C.setUTCFullYear(m,0,f),C.setUTCHours(0,0,0,0);var p=E(C,t);return g.getTime()>=U.getTime()?m+1:g.getTime()>=p.getTime()?m:m-1}function de(n,t){var e,r,a,i,o,s,l,v;c(1,arguments);var g=H(),m=x((e=(r=(a=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(o=t.locale)===null||o===void 0||(s=o.options)===null||s===void 0?void 0:s.firstWeekContainsDate)!==null&&a!==void 0?a:g.firstWeekContainsDate)!==null&&r!==void 0?r:(l=g.locale)===null||l===void 0||(v=l.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&e!==void 0?e:1),T=R(n,t),f=new Date(0);f.setUTCFullYear(T,0,m),f.setUTCHours(0,0,0,0);var h=E(f,t);return h}var ce=6048e5;function fe(n,t){c(1,arguments);var e=w(n),r=E(e,t).getTime()-de(e,t).getTime();return Math.round(r/ce)+1}function u(n,t){for(var e=n<0?"-":"",r=Math.abs(n).toString();r.length<t;)r="0"+r;return e+r}var le={y:function(t,e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return u(e==="yy"?a%100:a,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):u(r+1,2)},d:function(t,e){return u(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return u(t.getUTCHours()%12||12,e.length)},H:function(t,e){return u(t.getUTCHours(),e.length)},m:function(t,e){return u(t.getUTCMinutes(),e.length)},s:function(t,e){return u(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,a=t.getUTCMilliseconds(),i=Math.floor(a*Math.pow(10,r-3));return u(i,e.length)}};const y=le;var D={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ve={G:function(t,e,r){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var a=t.getUTCFullYear(),i=a>0?a:1-a;return r.ordinalNumber(i,{unit:"year"})}return y.y(t,e)},Y:function(t,e,r,a){var i=R(t,a),o=i>0?i:1-i;if(e==="YY"){var s=o%100;return u(s,2)}return e==="Yo"?r.ordinalNumber(o,{unit:"year"}):u(o,e.length)},R:function(t,e){var r=Q(t);return u(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return u(r,e.length)},Q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,r){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return u(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,r){var a=t.getUTCMonth();switch(e){case"M":case"MM":return y.M(t,e);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,r){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,r,a){var i=fe(t,a);return e==="wo"?r.ordinalNumber(i,{unit:"week"}):u(i,e.length)},I:function(t,e,r){var a=se(t);return e==="Io"?r.ordinalNumber(a,{unit:"week"}):u(a,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):y.d(t,e)},D:function(t,e,r){var a=ie(t);return e==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):u(a,e.length)},E:function(t,e,r){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return u(o,2);case"eo":return r.ordinalNumber(o,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,r,a){var i=t.getUTCDay(),o=(i-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return u(o,e.length);case"co":return r.ordinalNumber(o,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,r){var a=t.getUTCDay(),i=a===0?7:a;switch(e){case"i":return String(i);case"ii":return u(i,e.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,r){var a=t.getUTCHours(),i=a/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,r){var a=t.getUTCHours(),i;switch(a===12?i=D.noon:a===0?i=D.midnight:i=a/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,r){var a=t.getUTCHours(),i;switch(a>=17?i=D.evening:a>=12?i=D.afternoon:a>=4?i=D.morning:i=D.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var a=t.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return y.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):y.H(t,e)},K:function(t,e,r){var a=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},k:function(t,e,r){var a=t.getUTCHours();return a===0&&(a=24),e==="ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):y.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y.s(t,e)},S:function(t,e){return y.S(t,e)},X:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();if(o===0)return"Z";switch(e){case"X":return F(o);case"XXXX":case"XX":return O(o);case"XXXXX":case"XXX":default:return O(o,":")}},x:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(e){case"x":return F(o);case"xxxx":case"xx":return O(o);case"xxxxx":case"xxx":default:return O(o,":")}},O:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(o,":");case"OOOO":default:return"GMT"+O(o,":")}},z:function(t,e,r,a){var i=a._originalDate||t,o=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(o,":");case"zzzz":default:return"GMT"+O(o,":")}},t:function(t,e,r,a){var i=a._originalDate||t,o=Math.floor(i.getTime()/1e3);return u(o,e.length)},T:function(t,e,r,a){var i=a._originalDate||t,o=i.getTime();return u(o,e.length)}};function L(n,t){var e=n>0?"-":"+",r=Math.abs(n),a=Math.floor(r/60),i=r%60;if(i===0)return e+String(a);var o=t||"";return e+String(a)+o+u(i,2)}function F(n,t){if(n%60===0){var e=n>0?"-":"+";return e+u(Math.abs(n)/60,2)}return O(n,t)}function O(n,t){var e=t||"",r=n>0?"-":"+",a=Math.abs(n),i=u(Math.floor(a/60),2),o=u(a%60,2);return r+i+e+o}const me=ve;var G=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},B=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},ge=function(t,e){var r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return G(t,e);var o;switch(a){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;case"PPPP":default:o=e.dateTime({width:"full"});break}return o.replace("{{date}}",G(a,e)).replace("{{time}}",B(i,e))},he={p:B,P:ge};const we=he;var Te=["D","DD"],be=["YY","YYYY"];function ye(n){return Te.indexOf(n)!==-1}function Ce(n){return be.indexOf(n)!==-1}function I(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,De=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,xe=/^'([^]*?)'?$/,Ue=/''/g,pe=/[a-zA-Z]/;function Ye(n,t,e){var r,a,i,o,s,l,v,g,m,T,f,h,U,C,p,P,S,$;c(2,arguments);var X=String(t),Y=H(),M=(r=(a=e==null?void 0:e.locale)!==null&&a!==void 0?a:Y.locale)!==null&&r!==void 0?r:Z,N=x((i=(o=(s=(l=e==null?void 0:e.firstWeekContainsDate)!==null&&l!==void 0?l:e==null||(v=e.locale)===null||v===void 0||(g=v.options)===null||g===void 0?void 0:g.firstWeekContainsDate)!==null&&s!==void 0?s:Y.firstWeekContainsDate)!==null&&o!==void 0?o:(m=Y.locale)===null||m===void 0||(T=m.options)===null||T===void 0?void 0:T.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var q=x((f=(h=(U=(C=e==null?void 0:e.weekStartsOn)!==null&&C!==void 0?C:e==null||(p=e.locale)===null||p===void 0||(P=p.options)===null||P===void 0?void 0:P.weekStartsOn)!==null&&U!==void 0?U:Y.weekStartsOn)!==null&&h!==void 0?h:(S=Y.locale)===null||S===void 0||($=S.options)===null||$===void 0?void 0:$.weekStartsOn)!==null&&f!==void 0?f:0);if(!(q>=0&&q<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");var k=w(n);if(!re(k))throw new RangeError("Invalid time value");var j=ee(k),K=ae(k,j),A={firstWeekContainsDate:N,weekStartsOn:q,locale:M,_originalDate:k},V=X.match(De).map(function(d){var b=d[0];if(b==="p"||b==="P"){var _=we[b];return _(d,M.formatLong)}return d}).join("").match(Oe).map(function(d){if(d==="''")return"'";var b=d[0];if(b==="'")return Me(d);var _=me[b];if(_)return!(e!=null&&e.useAdditionalWeekYearTokens)&&Ce(d)&&I(d,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&ye(d)&&I(d,t,String(n)),_(K,d,M.localize,A);if(b.match(pe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+b+"`");return d}).join("");return V}function Me(n){var t=n.match(xe);return t?t[1].replace(Ue,"'"):n}function Ee(n){return Ye(n,"yyyy-MM-dd HH:mm:ss")}export{fe as a,se as b,ye as c,Ee as d,ae as e,ee as f,R as g,re as h,Ce as i,Ye as j,we as l,W as s,I as t};