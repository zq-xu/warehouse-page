import{y as w,aM as u,B as l,A as r,d as m,H as k,J as g,bB as $,c as f,M as C,q as d,F as y,o as c,a as v,aR as x,u as B,b as p}from"./index-b8a5e2f1.js";const M=w("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[u("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[u("no-title",`
 display: flex;
 align-items: center;
 `)]),l("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[l("line",[r("left",{width:"28px"})])]),r("title-position-right",[l("line",[r("right",{width:"28px"})])]),r("dashed",[l("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),l("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),u("dashed",[l("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[l("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]),z=Object.assign(Object.assign({},g.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),F=m({name:"Divider",props:z,setup(i){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=k(i),o=g("Divider","-divider",M,$,i,t),a=f(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:h,textColor:_,fontWeight:b}}=o.value;return{"--n-bezier":e,"--n-color":h,"--n-text-color":_,"--n-font-weight":b}}),n=s?C("divider",void 0,a,i):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:a,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var i;const{$slots:t,titlePlacement:s,vertical:o,dashed:a,cssVars:n,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),d("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:o,[`${e}-divider--no-title`]:!t.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${s}`]:t.default&&s}],style:n},o?null:d("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!o&&t.default?d(y,null,d("div",{class:`${e}-divider__title`},this.$slots),d("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),R={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},P=x("path",{fill:"currentColor",d:"M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12Z"},null,-1),D=[P];function V(i,t){return c(),v("svg",R,D)}const E={name:"mdi-moon-waning-crescent",render:V},H={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},L=x("path",{fill:"currentColor",d:"m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81l1.42-1.42M1 13h3v-2H1m12 9h-2v3h2"},null,-1),O=[L];function S(i,t){return c(),v("svg",H,O)}const T={name:"mdi-white-balance-sunny",render:S},j=m({name:"DarkModeSwitch"}),N=m({...j,props:{dark:{type:Boolean,default:!1}},emits:["update:dark"],setup(i,{emit:t}){const s=i,o=f({get(){return s.dark},set(n){t("update:dark",n)}});function a(){o.value=!o.value}return(n,e)=>{const h=E,_=T;return c(),v("div",{class:"flex-center text-18px cursor-pointer",onClick:a},[B(o)?(c(),p(h,{key:0})):(c(),p(_,{key:1}))])}}});export{F as _,T as a,E as b,N as c};
