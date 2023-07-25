import{_ as W,a as L,b as D,c as F}from"./avatar-331a2b81.js";import{e as x,i as g,d as v,m as O,p as P,O as I,c as q,v as J,h as d,C as y,bF as U,b1 as Y,as as f,av as k,aw as l,au as h,aB as a,az as M,ax as m,at as u,aE as C,J as Q,ag as H,bk as T,aX as X,aI as j,aQ as B,bd as A,be as R}from"./index-d54e27e5.js";import{N}from"./Space-87b276b9.js";import{_ as G,a as K}from"./Grid-720faae6.js";import"./next-frame-once-7035a838.js";const Z=x("statistic",[g("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),x("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[g("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[x("icon",{verticalAlign:"-0.125em"})]),g("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),g("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[x("icon",{verticalAlign:"-0.125em"})])])]),a1=Object.assign(Object.assign({},P.props),{tabularNums:Boolean,label:String,value:[String,Number]}),t1=v({name:"Statistic",props:a1,setup(i){const{mergedClsPrefixRef:t,inlineThemeDisabled:s,mergedRtlRef:o}=O(i),z=P("Statistic","-statistic",Z,U,i,t),c=I("Statistic",o,t),e=q(()=>{const{self:{labelFontWeight:r,valueFontSize:_,valueFontWeight:w,valuePrefixTextColor:S,labelTextColor:$,valueSuffixTextColor:b,valueTextColor:V,labelFontSize:p},common:{cubicBezierEaseInOut:E}}=z.value;return{"--n-bezier":E,"--n-label-font-size":p,"--n-label-font-weight":r,"--n-label-text-color":$,"--n-value-font-weight":w,"--n-value-font-size":_,"--n-value-prefix-text-color":S,"--n-value-suffix-text-color":b,"--n-value-text-color":V}}),n=s?J("statistic",void 0,e,i):void 0;return{rtlEnabled:c,mergedClsPrefix:t,cssVars:s?void 0:e,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var i;const{mergedClsPrefix:t,$slots:{default:s,label:o,prefix:z,suffix:c}}=this;return(i=this.onRender)===null||i===void 0||i.call(this),d("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},y(o,e=>d("div",{class:`${t}-statistic__label`},this.label||e)),d("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},y(z,e=>e&&d("span",{class:`${t}-statistic-value__prefix`},e)),this.value!==void 0?d("span",{class:`${t}-statistic-value__content`},this.value):y(s,e=>e&&d("span",{class:`${t}-statistic-value__content`},e)),y(c,e=>e&&d("span",{class:`${t}-statistic-value__suffix`},e))))}}),l1={class:"flex-y-center justify-between"},e1={class:"flex-y-center"},o1={class:"pl-12px"},i1={class:"text-18px font-semibold"},h1=h("p",{class:"leading-30px text-#999"},"今日多云转晴，20℃ - 25℃！",-1),s1=v({name:"DashboardWorkbenchHeader",__name:"index",setup(i){const t=Y(),s=[{id:0,label:"项目数",value:"25"},{id:1,label:"待办",value:"4/16"},{id:2,label:"消息",value:"12"}];return(o,z)=>{const c=W,e=t1,n=N,r=T;return f(),k(r,{bordered:!1,class:"rounded-8px shadow-sm"},{default:l(()=>[h("div",l1,[h("div",e1,[a(c,{class:"text-70px"}),h("div",o1,[h("h3",i1,"早安，"+M(m(t).userInfo.userName)+", 今天又是充满活力的一天！",1),h1])]),a(n,{size:24,wrap:!1},{default:l(()=>[(f(),u(H,null,C(s,_=>a(e,Q({key:_.id,class:"whitespace-nowrap"},_),null,16)),64))]),_:1})])]),_:1})}}}),n1={class:"inline-block",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500"},p1=X('<path fill="#ebebeb" d="M0 382.4h500v.25H0zM416.78 398.49h33.12v.25h-33.12zM322.53 401.21h8.69v.25h-8.69zM396.59 389.21h19.19v.25h-19.19zM52.46 390.89h43.19v.25H52.46zM104.56 390.89h6.33v.25h-6.33zM131.47 395.11h93.68v.25h-93.68zM237 337.8H43.91a5.71 5.71 0 01-5.7-5.71V60.66a5.71 5.71 0 015.7-5.66H237a5.71 5.71 0 015.71 5.71v271.38a5.71 5.71 0 01-5.71 5.71zM43.91 55.2a5.46 5.46 0 00-5.45 5.46v271.43a5.46 5.46 0 005.45 5.46H237a5.47 5.47 0 005.46-5.46V60.66A5.47 5.47 0 00237 55.2zM453.31 337.8h-193.1a5.72 5.72 0 01-5.71-5.71V60.66a5.72 5.72 0 015.71-5.66h193.1a5.71 5.71 0 015.69 5.66v271.43a5.71 5.71 0 01-5.69 5.71zM260.21 55.2a5.47 5.47 0 00-5.46 5.46v271.43a5.47 5.47 0 005.46 5.46h193.1a5.47 5.47 0 005.46-5.46V60.66a5.47 5.47 0 00-5.46-5.46z"></path><path fill="#e6e6e6" d="M409.9 275.41H301.09V78.79H409.9z"></path><path fill="#f0f0f0" d="M407.56 275.41H296.08V78.79h111.48z"></path><path fill="#e6e6e6" d="M409.9 280.07H301.09v-4.66H409.9z"></path><path fill="#f0f0f0" d="M405.75 280.07H294.27v-4.66h111.48z"></path><path fill="#fafafa" d="M400.52 85.82v182.56H303.1V85.82z"></path><path fill="#fff" d="M330.66 268.38l27.42-182.56h19.48l-27.43 182.56h-19.47z"></path><path fill="#fff" d="M333.75 268.38l27.43-182.56h19.47l-27.43 182.56h-19.47zM354.31 268.38l27.43-182.56h7.59l-27.42 182.56h-7.6z"></path><path fill="#e6e6e6" d="M304 85.82v182.56h-.89V85.82z"></path><path fill="#ebebeb" opacity=".6" d="M294.41 91.12h108.81l.64-2.57h-108.8l-.65 2.57zM294.41 95.32h108.81l.64-2.56h-108.8l-.65 2.56zM294.41 99.53h108.81l.64-2.56h-108.8l-.65 2.56zM294.41 103.74h108.81l.64-2.57h-108.8l-.65 2.57zM294.41 107.95h108.81l.64-2.57h-108.8l-.65 2.57zM294.41 112.15h108.81l.64-2.56h-108.8l-.65 2.56z"></path><path fill="#f0f0f0" d="M274.53 67h156.92v3.79H274.53z"></path><path fill="#fafafa" opacity=".8" d="M420.36 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M420.36 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M412.11 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M412.11 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M403.86 63.81h8.25v242.84h-8.25zM292.84 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M292.84 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M284.6 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M284.6 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M276.35 63.81h8.25v242.84h-8.25z"></path><path fill="#e6e6e6" d="M194.15 275.41H85.34V78.79h108.81z"></path><path fill="#f0f0f0" d="M191.8 275.41H80.32V78.79H191.8z"></path><path fill="#e6e6e6" d="M194.15 280.07H85.34v-4.66h108.81z"></path><path fill="#f0f0f0" d="M189.99 280.07H78.51v-4.66h111.48z"></path><path fill="#fafafa" d="M184.77 85.82v182.56H87.35V85.82z"></path><path fill="#fff" d="M114.91 268.38l27.42-182.56h19.48l-27.43 182.56h-19.47z"></path><path fill="#fff" d="M118 268.38l27.42-182.56h19.48l-27.43 182.56H118zM138.56 268.38l27.43-182.56h7.59l-27.42 182.56h-7.6z"></path><path fill="#e6e6e6" d="M88.25 85.81v182.56h-.89V85.81z"></path><path fill="#ebebeb" opacity=".6" d="M78.66 91.12h108.81l.64-2.57H79.31l-.65 2.57zM78.66 95.32h108.81l.64-2.56H79.31l-.65 2.56zM78.66 99.53h108.81l.64-2.56H79.31l-.65 2.56zM78.66 103.74h108.81l.64-2.57H79.31l-.65 2.57zM78.66 107.95h108.81l.64-2.57H79.31l-.65 2.57zM78.66 112.15h108.81l.64-2.56H79.31l-.65 2.56z"></path><path fill="#f0f0f0" d="M58.78 67H215.7v3.79H58.78z"></path><path fill="#fafafa" opacity=".8" d="M204.61 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M204.61 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M196.36 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M196.36 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M188.11 63.81h8.25v242.84h-8.25zM77.09 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M77.09 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M68.84 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" opacity=".8" d="M68.84 63.81h2.14v242.84h-2.14z"></path><path fill="#fafafa" opacity=".8" d="M60.59 63.81h8.25v242.84h-8.25z"></path><path fill="#f0f0f0" d="M392.58 375.61h-16.81v-84h16.81z"></path><path fill="#f0f0f0" d="M386.44 382.4H243.98v-6.79h142.46z"></path><path fill="#f5f5f5" d="M237.85 291.61h137.92v84H237.85z"></path><path fill="#f0f0f0" d="M250.41 300.51H363.2v27.94H250.41zM250.41 334.85H363.2v27.94H250.41z"></path><path d="M293.44 304.36h26.73a2.41 2.41 0 002.41-2.41 2.42 2.42 0 00-2.41-2.41h-26.73A2.42 2.42 0 00291 302a2.41 2.41 0 002.44 2.36zM293.44 338.71h26.73a2.42 2.42 0 002.41-2.41 2.41 2.41 0 00-2.41-2.41h-26.73a2.41 2.41 0 00-2.44 2.41 2.42 2.42 0 002.44 2.41z" fill="#f5f5f5"></path><path fill="#f0f0f0" d="M375.76 291.62H233.58v-3.28h142.18z"></path><path fill="#e6e6e6" d="M375.76 288.33h21.28v3.28h-21.28z"></path><path d="M108.34 376.83a7.25 7.25 0 01-7.23-7.23v-70.76a7.25 7.25 0 017.23-7.23 7.24 7.24 0 017.22 7.23v70.76a7.24 7.24 0 01-7.22 7.23z" fill="#f5f5f5"></path><path d="M112.47 374a4.9 4.9 0 01-4.88-4.88v-69.78a4.9 4.9 0 014.88-4.88 4.9 4.9 0 014.89 4.88v69.76a4.9 4.9 0 01-4.89 4.9z" fill="#ebebeb"></path><path d="M118.83 376.83a7.24 7.24 0 01-7.22-7.23v-70.76a7.24 7.24 0 017.22-7.23 7.25 7.25 0 017.23 7.23v70.76a7.25 7.25 0 01-7.23 7.23z" fill="#f5f5f5"></path><path d="M123 374a4.89 4.89 0 01-4.88-4.88v-69.78a4.89 4.89 0 014.88-4.88 4.89 4.89 0 014.88 4.88v69.76A4.89 4.89 0 01123 374z" fill="#ebebeb"></path><rect x="122.1" y="291.61" width="14.45" height="85.22" rx="7.23" fill="#f5f5f5"></rect><path d="M133.47 374a4.89 4.89 0 01-4.88-4.88v-69.78a4.89 4.89 0 014.88-4.88 4.89 4.89 0 014.88 4.88v69.76a4.89 4.89 0 01-4.88 4.9z" fill="#ebebeb"></path><path d="M139.83 376.83a7.25 7.25 0 01-7.23-7.23v-70.76a7.25 7.25 0 017.23-7.23 7.25 7.25 0 017.23 7.23v70.76a7.25 7.25 0 01-7.23 7.23z" fill="#f5f5f5"></path><path d="M144 374a4.9 4.9 0 01-4.89-4.88v-69.78a4.9 4.9 0 014.89-4.88 4.9 4.9 0 014.88 4.88v69.76A4.9 4.9 0 01144 374z" fill="#ebebeb"></path><path d="M150.33 376.83a7.25 7.25 0 01-7.23-7.23v-70.76a7.25 7.25 0 017.23-7.23 7.25 7.25 0 017.23 7.23v70.76a7.25 7.25 0 01-7.23 7.23z" fill="#f5f5f5"></path><path d="M154.47 374a4.9 4.9 0 01-4.89-4.88v-69.78a4.9 4.9 0 014.89-4.88 4.9 4.9 0 014.88 4.88v69.76a4.9 4.9 0 01-4.88 4.9z" fill="#ebebeb"></path><path d="M160.83 376.83a7.25 7.25 0 01-7.23-7.23v-70.76a7.25 7.25 0 017.23-7.23 7.24 7.24 0 017.22 7.23v70.76a7.24 7.24 0 01-7.22 7.23z" fill="#f5f5f5"></path><path d="M165 374a4.9 4.9 0 01-4.88-4.88v-69.78a4.9 4.9 0 014.88-4.88 4.9 4.9 0 014.89 4.88v69.76A4.9 4.9 0 01165 374z" fill="#ebebeb"></path><path d="M171.33 376.83a7.25 7.25 0 01-7.23-7.23v-70.76a7.25 7.25 0 017.23-7.23 7.24 7.24 0 017.22 7.23v70.76a7.24 7.24 0 01-7.22 7.23z" fill="#f5f5f5"></path><rect x="157.39" y="364.15" width="24.4" height="3.2" rx="1.6" fill="#f5f5f5"></rect><path d="M180.19 306.38H159a1.6 1.6 0 01-1.6-1.6 1.6 1.6 0 011.6-1.6h21.2a1.6 1.6 0 011.6 1.6 1.6 1.6 0 01-1.61 1.6z" fill="#f5f5f5"></path><g><ellipse cx="250" cy="416.24" rx="193.89" ry="11.32" fill="#f5f5f5"></ellipse></g><g><path d="M409.83 248.66h-239a9.25 9.25 0 01-9.32-9.93l8.76-141.08a10.75 10.75 0 0110.55-9.94h239a9.26 9.26 0 019.32 9.94l-8.76 141.08a10.75 10.75 0 01-10.55 9.93z" fill="currentColor"></path><path d="M409.83 248.66h-239a9.25 9.25 0 01-9.32-9.93l8.76-141.08a10.75 10.75 0 0110.55-9.94h239a9.26 9.26 0 019.32 9.94l-8.76 141.08a10.75 10.75 0 01-10.55 9.93z" fill="#fff" opacity=".8"></path><path d="M201.46 128.36H173a2.61 2.61 0 01-2.64-2.81l.81-13a3 3 0 013-2.82h28.46z" fill="#fff" opacity=".4"></path><path d="M419.67 90.2H211.28a8 8 0 00-7.91 7.45l-2 32.37H172.9a3 3 0 00-3 2.82l-.75 12.2a2.61 2.61 0 002.64 2.82h28.46l-5.64 90.87a6.92 6.92 0 007 7.45H410a8 8 0 007.91-7.45l8.76-141.08a6.91 6.91 0 00-7-7.45z" fill="#fff"></path><path d="M199 167.36h-28.42a2.62 2.62 0 01-2.65-2.82l.76-12.2a3 3 0 013-2.82h28.46zM197.83 186.86h-28.46a2.62 2.62 0 01-2.65-2.82l.76-12.21a3 3 0 013-2.81h28.46zM196.62 206.36h-28.46a2.63 2.63 0 01-2.65-2.82l.76-12.21a3.05 3.05 0 013-2.82h28.46zM195.41 225.85H167a2.62 2.62 0 01-2.7-2.85l.76-12.2a3 3 0 013-2.82h28.47z" fill="#fff" opacity=".4"></path><path d="M172.63 145.59a1.13 1.13 0 01-1.15-1.23l.66-10.71a1.48 1.48 0 011.44-1.36h24.12a1.13 1.13 0 011.15 1.23l-.66 10.72a1.48 1.48 0 01-1.44 1.35z" fill="currentColor" opacity=".2"></path><path d="M253 107h-34.43a4.47 4.47 0 01-4.49-4.79 5.17 5.17 0 015.08-4.78h34.41a4.46 4.46 0 014.49 4.78A5.19 5.19 0 01253 107z" fill="currentColor" opacity=".3"></path><path d="M417 102.22a5.17 5.17 0 01-5.08 4.79 4.46 4.46 0 01-4.49-4.79 5.16 5.16 0 015.08-4.78 4.45 4.45 0 014.49 4.78z" fill="currentColor"></path><path d="M319.53 188.84H218a8.83 8.83 0 01-8.9-9.49l3.05-49.35a10.23 10.23 0 0110.07-9.48h101.56a8.81 8.81 0 018.89 9.48l-3.06 49.34a10.26 10.26 0 01-10.08 9.5zm-97.34-67.9a9.79 9.79 0 00-9.63 9.07l-3.06 49.34a8.43 8.43 0 008.51 9.07h101.55a9.79 9.79 0 009.63-9.07l3.07-49.35a8.44 8.44 0 00-8.51-9.07z" fill="currentColor" opacity=".4"></path><path d="M230.33 153.34l14.57 9.43a33 33 0 0111.33-10.27L248.4 137a52.81 52.81 0 00-18.07 16.34z" fill="currentColor"></path><path d="M230.33 153.34l14.57 9.43a33 33 0 0111.33-10.27L248.4 137a52.81 52.81 0 00-18.07 16.34z" fill="#fff" opacity=".8"></path><path d="M221.55 178.6h17.84a31.51 31.51 0 015.51-15.83l-14.57-9.43a50.28 50.28 0 00-8.78 25.26z" fill="#263238"></path><path d="M272.36 130.76a49.82 49.82 0 00-24 6.22l7.83 15.52a31.31 31.31 0 0115-3.89 27.86 27.86 0 0128.13 30h17.84c1.72-26.43-18.37-47.85-44.8-47.85zM260.78 207h-52.3a.85.85 0 01-.85-.91l.23-3.68a1 1 0 011-.91h52.3z" fill="currentColor"></path><path d="M260.78 207h66a1 1 0 001-.91l.23-3.68a.85.85 0 00-.85-.91h-66z" fill="currentColor" opacity=".2"></path><path d="M296.3 221.51h-88.72a.84.84 0 01-.85-.91l.23-3.67a1 1 0 011-.91h88.72z" fill="currentColor"></path><path d="M296.3 221.51h29.58a1 1 0 001-.91l.23-3.67a.84.84 0 00-.85-.91h-29.62z" fill="currentColor" opacity=".2"></path><path d="M217.1 236h-10.42a.85.85 0 01-.85-.91l.23-3.68a1 1 0 011-.91h10.42z" fill="currentColor"></path><path d="M217.1 236H325a1 1 0 001-.91l.23-3.68a.85.85 0 00-.86-.91H217.44z" fill="currentColor" opacity=".2"></path><path d="M348.77 236.45a.38.38 0 01-.39-.41l7.16-115.31a.44.44 0 01.44-.41.38.38 0 01.38.41L349.2 236a.44.44 0 01-.43.45z" fill="currentColor"></path><path d="M356.83 150.94a3 3 0 01-2.93 2.76 2.57 2.57 0 01-2.59-2.76 3 3 0 012.94-2.76 2.55 2.55 0 012.58 2.76z" fill="#fff"></path><path d="M353.88 154.11a3 3 0 01-3-3.17 3.43 3.43 0 013.37-3.18 3 3 0 013 3.18 3.42 3.42 0 01-3.37 3.17zm.34-5.52a2.53 2.53 0 00-2.49 2.35 2.18 2.18 0 002.2 2.34 2.53 2.53 0 002.49-2.34 2.18 2.18 0 00-2.2-2.35z" fill="currentColor"></path><path d="M355.29 175.78a3 3 0 01-2.93 2.76 2.57 2.57 0 01-2.59-2.76 3 3 0 012.93-2.78 2.56 2.56 0 012.59 2.78z" fill="#fff"></path><path d="M352.34 179a3 3 0 01-3-3.17 3.43 3.43 0 013.37-3.18 3 3 0 013 3.18 3.42 3.42 0 01-3.37 3.17zm.34-5.52a2.53 2.53 0 00-2.49 2.35 2.17 2.17 0 002.2 2.34 2.53 2.53 0 002.49-2.34 2.18 2.18 0 00-2.2-2.4z" fill="currentColor"></path><path fill="#fff" d="M351.78 187.86l-3.65 5.71h6.6l-2.95-5.71z"></path><path d="M354.7 194h-6.6a.39.39 0 01-.34-.2.42.42 0 010-.42l3.66-5.71a.42.42 0 01.71 0l3 5.71a.44.44 0 01-.4.62zm-5.83-.82H354l-2.3-4.48zM398.45 236.45a.38.38 0 01-.39-.41l7.16-115.31a.44.44 0 01.44-.41.38.38 0 01.39.41L398.89 236a.45.45 0 01-.44.45z" fill="currentColor"></path><path d="M403.67 196.71a2.56 2.56 0 00-2.58-2.76 3 3 0 00-2.94 2.76 2.57 2.57 0 002.59 2.76 3 3 0 002.93-2.76z" fill="#fff"></path><path d="M400.72 199.88a3 3 0 01-3-3.17 3.42 3.42 0 013.37-3.17 3 3 0 013 3.17 3.42 3.42 0 01-3.37 3.17zm.34-5.52a2.54 2.54 0 00-2.49 2.35 2.19 2.19 0 002.2 2.35 2.54 2.54 0 002.49-2.35 2.19 2.19 0 00-2.2-2.35z" fill="currentColor"></path><path d="M407.53 134.6a2.56 2.56 0 00-2.59-2.76 3 3 0 00-2.94 2.76 2.57 2.57 0 002.59 2.76 3 3 0 002.94-2.76z" fill="#fff"></path><path d="M404.57 137.77a2.94 2.94 0 01-3-3.17 3.43 3.43 0 013.37-3.18 3 3 0 013 3.18 3.43 3.43 0 01-3.37 3.17zm.35-5.52a2.53 2.53 0 00-2.49 2.35 2.17 2.17 0 002.2 2.34 2.53 2.53 0 002.49-2.34 2.18 2.18 0 00-2.2-2.35z" fill="currentColor"></path><path fill="#fff" d="M402.64 168.92l-2.94-5.72h6.59l-3.65 5.72z"></path><path d="M402.61 169.33a.38.38 0 01-.34-.21l-2.95-5.71a.43.43 0 010-.41.44.44 0 01.37-.21h6.6a.39.39 0 01.35.21.43.43 0 010 .41l-3.64 5.71a.47.47 0 01-.39.21zm-2.22-5.71l2.3 4.47 2.86-4.47zM373.61 236.45a.38.38 0 01-.39-.41l7.16-115.31a.44.44 0 01.44-.41.37.37 0 01.38.41L374.05 236a.45.45 0 01-.44.45z" fill="currentColor"></path><path d="M381.24 158a3 3 0 01-2.94 2.76 2.55 2.55 0 01-2.58-2.76 3 3 0 012.93-2.76 2.57 2.57 0 012.59 2.76z" fill="#fff"></path><path d="M378.28 161.2a3 3 0 01-3-3.18 3.42 3.42 0 013.37-3.17 3 3 0 013 3.17 3.43 3.43 0 01-3.37 3.18zm.34-5.53a2.54 2.54 0 00-2.49 2.35 2.19 2.19 0 002.2 2.35 2.54 2.54 0 002.49-2.35 2.18 2.18 0 00-2.2-2.35z" fill="currentColor"></path><path d="M377.81 213.26a3 3 0 01-2.93 2.76 2.56 2.56 0 01-2.59-2.76 3 3 0 012.93-2.76 2.57 2.57 0 012.59 2.76z" fill="#fff"></path><path d="M374.85 216.43a3 3 0 01-3-3.17 3.43 3.43 0 013.37-3.18 3 3 0 013 3.18 3.42 3.42 0 01-3.37 3.17zm.34-5.52a2.53 2.53 0 00-2.49 2.35 2.18 2.18 0 002.2 2.34 2.53 2.53 0 002.49-2.34 2.18 2.18 0 00-2.2-2.35z" fill="currentColor"></path><path fill="#fff" d="M380.46 126.12l-3.66 5.72h6.6l-2.94-5.72z"></path><path d="M383.37 132.25h-6.59a.39.39 0 01-.35-.21.43.43 0 010-.41l3.65-5.71a.43.43 0 01.72 0l2.94 5.71a.4.4 0 010 .41.47.47 0 01-.37.21zm-5.82-.83h5.16L380.4 127z" fill="currentColor"></path></g><g><path d="M111.54 155.81l-1 4.87-1 5c-.66 3.32-1.22 6.64-1.73 9.9-.26 1.63-.46 3.24-.63 4.83s-.32 3.13-.4 4.62a40 40 0 000 4.08c0 1.17.26 2.17.21 2.28l-.67-1.15c-.3-.3-.85-.58-.94-.45s.26.36.9.53a13.51 13.51 0 002.51.35 29.74 29.74 0 003.22-.08 65.84 65.84 0 007.23-1c1.25-.24 2.52-.49 3.78-.77l3.74-.81.5-.11a5.25 5.25 0 014.24 9.34l-1.87 1.38-1.84 1.26c-1.26.8-2.53 1.58-3.85 2.3a55.3 55.3 0 01-8.46 3.78 41.08 41.08 0 01-4.87 1.31 26.44 26.44 0 01-5.69.54 20.16 20.16 0 01-7-1.34 16.42 16.42 0 01-7.2-5.61 7.56 7.56 0 01-.52-.86l-.15-.29a28 28 0 01-2.55-8 47.2 47.2 0 01-.64-6.62q-.11-3.13 0-6.1t.41-5.85c.34-3.84.91-7.58 1.56-11.29.34-1.85.68-3.69 1.1-5.52.2-.92.4-1.84.63-2.76l.74-2.83a10.47 10.47 0 0120.39 4.73z" fill="currentColor"></path><path d="M111.54 155.81l-1 4.87-1 5c-.66 3.32-1.22 6.64-1.73 9.9-.26 1.63-.46 3.24-.63 4.83s-.32 3.13-.4 4.62a40 40 0 000 4.08c0 1.17.26 2.17.21 2.28l-.67-1.15c-.3-.3-.85-.58-.94-.45s.26.36.9.53a13.51 13.51 0 002.51.35 29.74 29.74 0 003.22-.08 65.84 65.84 0 007.23-1c1.25-.24 2.52-.49 3.78-.77l3.74-.81.5-.11a5.25 5.25 0 014.24 9.34l-1.87 1.38-1.84 1.26c-1.26.8-2.53 1.58-3.85 2.3a55.3 55.3 0 01-8.46 3.78 41.08 41.08 0 01-4.87 1.31 26.44 26.44 0 01-5.69.54 20.16 20.16 0 01-7-1.34 16.42 16.42 0 01-7.2-5.61 7.56 7.56 0 01-.52-.86l-.15-.29a28 28 0 01-2.55-8 47.2 47.2 0 01-.64-6.62q-.11-3.13 0-6.1t.41-5.85c.34-3.84.91-7.58 1.56-11.29.34-1.85.68-3.69 1.1-5.52.2-.92.4-1.84.63-2.76l.74-2.83a10.47 10.47 0 0120.39 4.73z" opacity=".2"></path><path d="M86.23 411.58S76.77 403 77 400.28l-7.86-4-4.68 8.08 4.34 2.43 1.2-.39.79 1.37c3.92 2 12.48 5.91 15.47 5.8a1.92 1.92 0 00-.03-1.99z" fill="#263238"></path><path d="M86.91 310.62c5.72-41 3.85-65.87 9.86-86.06l37.2-3s-16.49 65-24 92.06-31.23 88.42-31.23 88.42l-10.35-5.3s8.45-54.42 18.52-86.12z" fill="#263238"></path><path d="M117.25 251.87c-2.53 5.85-7.47 43.42-7.45 62.18 0-.13.08-.28.12-.42 2.65-9.51 6.42-23.72 10.18-38.13z" opacity=".2"></path><path d="M146 412.92s-15.43-3.5-16.14-6h-9.79l-.81 9.33h5.44l1-.86 1.22.86c4.4 0 17.12 0 19.86-1.6.02-1.42-.78-1.73-.78-1.73z" fill="#263238"></path><path d="M119.87 311.77c-8.17-55.51-8.17-89.88-8.17-89.88l36.4-.59s-4.37 66.2-5.89 93.93c-1.57 28.83-10.57 92.29-10.57 92.29H119s-3-60.1.87-95.75z" fill="#263238"></path><path d="M115.92 117.67c-1.73 10.89-4.87 16.73-7 22.14 3.67 3.42 11.53 7.65 19.46 7.54s6.49-5.48 4.36-8.25c-5.69-2.87-5.91-5.77-4.52-8.31z" fill="#7f3e3b"></path><path d="M102.32 141.35s5.06-5.95 7.06-6.95 17.13 1 20.7 1.72 7.92 6 7.92 6zM141 116.76c-.16.72.09 1.38.56 1.48s1-.4 1.14-1.12-.09-1.38-.56-1.48-1 .36-1.14 1.12z" fill="#263238"></path><path d="M140.71 117.75a26.08 26.08 0 002.06 6.87c-1.54.91-3.58-.1-3.58-.1z" fill="#630f0f"></path><path d="M143.46 112.63a.41.41 0 01-.4 0 3.39 3.39 0 00-3.11.1.42.42 0 01-.59-.12.43.43 0 01.12-.6 4.23 4.23 0 013.92-.18.43.43 0 01.22.57.38.38 0 01-.16.23z" fill="#263238"></path><path d="M117.18 109.46c-1.43 8.92-2.73 14.07.72 19.55 5.18 8.24 17 6.56 21.07-1.78 3.68-7.5 5.41-20.83-2.45-26.19a12.46 12.46 0 00-19.34 8.42z" fill="#7f3e3b"></path><path d="M133.39 118c7.22 1.56 5.12-7.36 3.39-8.25 4.34 2.6 7.22-.42 7-3.14 3.32-.55 3.15-6 .87-6.17-1.44-3.77-8.17-6.94-9.42-4.61-3.63-4.22-13.35-3.5-11.94-.44-3.69-.72-11.55-.39-8.92 5.17-5.61.72-5.34 10.32-1.68 11.32-3.83 2.12-.12 9.36 1.53 13.9s18.09.5 19.17-7.78z" fill="#263238"></path><path d="M129.28 117.09a7.61 7.61 0 001.18 5.45c1.41 2 3.59.75 4.44-1.66.76-2.16.94-5.8-1.07-6.89s-4.18.66-4.55 3.1z" fill="#7f3e3b"></path><path d="M102.83 140.35c12.3-1.51 29.75-1.38 41.33.64A13.17 13.17 0 01155 152.91c1.44 17.67-2.47 48.55-5.85 79.64-27.25 9.14-54.91-.13-54.91-.13-.61-6.27 2.77-26.82 4.88-37.79-1.55-11.32-5.48-24.29-7.69-39.34a13.15 13.15 0 0111.4-14.94z" fill="currentColor"></path><path d="M139.84 165.09c1.86 10.64 7.75 23.32 13.14 31.71.74-7.35 1.36-14.35 1.75-20.81z" opacity=".2"></path><path d="M229.93 140.44a17.77 17.77 0 00-19.06 30c-1.78 2.4-7 9.45-8.59 12.17-2 3.29-3 6.25-1.62 7.07s3.48-1.51 5.43-4.8c1.62-2.71 5.34-10.65 6.59-13.37a17.77 17.77 0 0017.25-31.06zm4.27 23.23a15.54 15.54 0 11-5.41-21.31 15.53 15.53 0 015.41 21.31z" fill="currentColor"></path><path d="M234.93 164.1a16.39 16.39 0 11-5.71-22.46 16.38 16.38 0 015.71 22.46z" fill="currentColor" opacity=".2"></path><path d="M209.43 179.66l-2.17-1.92a3.36 3.36 0 00-3-.76l-5 1.14a6.28 6.28 0 00-4.4 3.72l-.48 1.16c3.37 3.43 9.54 4.66 9.54 4.66l1.73.54a2.79 2.79 0 003.57-1.76l1.13-3.39a3.27 3.27 0 00-.92-3.39z" fill="#7f3e3b"></path><path d="M154.47 149.29l2 4.39 2.11 4.48c1.41 3 2.9 5.89 4.39 8.72q1.13 2.12 2.32 4.11c.77 1.33 1.56 2.61 2.36 3.79a38.85 38.85 0 002.35 3.12c.7.86 1.42 1.48 1.44 1.58l-1.24-.51a12 12 0 004.36 1.1 43.06 43.06 0 006.37.08c2.28-.1 4.63-.34 7-.62 1.19-.15 2.4-.29 3.61-.47l3.58-.48.49-.07a5.26 5.26 0 013.6 9.6l-1.82 1.2-1.79 1.08c-1.21.69-2.43 1.36-3.69 2s-2.53 1.21-3.84 1.75-2.66 1-4 1.49a46 46 0 01-8.9 2 28.27 28.27 0 01-10.86-.66 4.81 4.81 0 01-.75-.28l-.48-.23a26.69 26.69 0 01-6.86-4.74 46.93 46.93 0 01-4.48-4.82 83.07 83.07 0 01-6.74-9.64c-2-3.23-3.74-6.51-5.39-9.8-.81-1.66-1.62-3.31-2.36-5-.37-.84-.75-1.69-1.1-2.54l-1.08-2.67a10.47 10.47 0 0119.22-8.3z" fill="currentColor"></path></g><g><path d="M362.85 378.84c-1.54-12.09 5.2-21.84 11.72-31.28 7.67-11.1 15.6-22.57 10.91-38.32a33 33 0 00-6.31-11.77 40.88 40.88 0 01-13.75 18c-8.7 6.48-19 8.52-26.17 5.21-4.05-1.86-9-6.25-9.75-16.53-.74-10.52 5.37-18 16.33-20s24.27 2 33 11.41a43.49 43.49 0 001.84-20.25l1-.14a44.23 44.23 0 01-2.07 21.24 33.94 33.94 0 016.84 12.59c4.83 16.2-3.24 27.88-11.05 39.17-6.71 9.71-13 18.88-11.55 30.58zm-11.33-94.2a31.2 31.2 0 00-5.51.48c-10.41 1.89-16.21 9-15.52 18.93.54 7.75 3.71 13.18 9.18 15.69 6.87 3.16 16.75 1.16 25.16-5.1a39.92 39.92 0 0013.6-18 36.79 36.79 0 00-26.91-12z" fill="#263238"></path><path d="M381.57 278.67c-7.92-7.07-8.83-16.4-4.19-18.37 6.43-2.73 8.83 8.63 4.19 18.37zM375.56 347c-5.66-9-6-20.22.91-21 6.29-.74 7.67 9.92-.91 21z" fill="currentColor"></path><path d="M381.75 281.64c-1.09-6.71 2.21-11.71 5.31-10.82 4.29 1.23.94 7.84-5.31 10.82zM366.18 314.07c-3.47-7.48-1.25-14.41 2.67-14.39 5.42.04 3.63 8.87-2.67 14.39zM352.86 284.24c-7.14 1.21-12.5-2.28-11.57-5.59 1.29-4.59 8.36-1.03 11.57 5.59z" fill="currentColor"></path><path d="M352.86 284.24c-4.38-2.34-5-5.82-2.76-6.75 3.15-1.29 4.65 2.9 2.76 6.75zM387.28 314c-1.73-4.67.1-7.7 2.41-6.89 3.21 1.13 1.56 5.25-2.41 6.89zM331.11 310.73c-4.95.54-7.44-2-6.09-4 1.88-2.86 5.48-.25 6.09 4zM392.202 396.072l2.36-17.36.99.135-2.36 17.36zM390.413 408.877l1.141-8.393.991.135-1.14 8.393zM344 371.23l5.79 42.34a3.09 3.09 0 003.06 2.67h31.26a3.09 3.09 0 003.06-2.67l5.79-42.34a3.09 3.09 0 00-3.06-3.5H347a3.09 3.09 0 00-3 3.5z" fill="currentColor"></path></g>',65),f1=[p1];function c1(i,t){return f(),u("svg",n1,f1)}const r1={name:"local-banner",render:c1},d1={class:"flex-y-center"},u1={class:"pl-12px text-18px font-semibold"},z1={class:"py-8px h-56px text-#999"},_1={class:"flex justify-end"},v1=v({name:"DashboardWorkbenchMainTechnologyCard",__name:"technology-card",props:{name:{},description:{},author:{},site:{},icon:{},iconColor:{}},setup(i){const t=i;function s(){window.open(t.site,"_blank")}return(o,z)=>{const c=B;return f(),u("div",{class:"h-120px p-4px border-1px border-#efeff5 dark:border-#ffffff17 rounded-4px hover:shadow-sm cursor-pointer",onClick:s},[h("header",d1,[a(c,{icon:o.icon,style:j({color:o.iconColor}),class:"text-30px"},null,8,["icon","style"]),h("h3",u1,M(o.name),1)]),h("p",z1,M(o.description),1),h("div",_1,[h("span",null,M(o.author),1)])])}}}),M1={class:"flex-col-center h-120px p-12px border-1px border-#efeff5 dark:border-#ffffff17 rounded-4px hover:shadow-sm cursor-pointer"},m1={class:"py-8px text-16px"},b1=v({name:"DashboardWorkbenchMainShortcutsCard",__name:"shortcuts-card",props:{label:{},icon:{},iconColor:{}},setup(i){return(t,s)=>{const o=B;return f(),u("div",M1,[a(o,{icon:t.icon,style:j({color:t.iconColor}),class:"text-30px"},null,8,["icon","style"]),h("p",m1,M(t.label),1)])}}}),x1=h("a",{class:"text-primary",href:"javascript:;"},"更多技术栈",-1),g1=h("a",{class:"text-primary",href:"javascript:;"},"更多动态",-1),y1={class:"flex-center h-380px"},C1=v({name:"DashboardWorkbenchMain",__name:"index",setup(i){const t=[{id:0,name:"Vue",description:"一套用于构建用户界面的渐进式框架",author:"尤雨溪 - Evan You",site:"https://v3.cn.vuejs.org/",icon:"logos:vue"},{id:1,name:"TypeScript",description:"JavaScript类型的超集，它可以编译成纯JavaScript",author:"微软 - Microsoft",site:"https://www.typescriptlang.org/",icon:"logos:typescript-icon"},{id:2,name:"Vite",description:"下一代前端开发与构建工具",author:"尤雨溪 - Evan You",site:"https://vitejs.cn/",icon:"logos:vitejs"},{id:3,name:"NaiveUI",description:"一个 Vue 3 组件库",author:"图森未来 - TuSimple",site:"https://www.naiveui.com/zh-CN/os-theme",icon:"logos:naiveui"},{id:4,name:"UnoCSS",description:"下一代实用优先的CSS框架",author:"Anthony Fu",site:"https://uno.antfu.me/?s=",icon:"logos:unocss"},{id:5,name:"Pinia",description:"vue状态管理框架，支持vue2、vue3",author:"Posva",site:"https://pinia.esm.dev/",icon:"noto:pineapple"}],s=[{id:4,content:"Warehouse 刚才把工作台页面随便写了一些，凑合能看了！",time:"2021-11-07 22:45:32"},{id:3,content:"Warehouse 正在忙于为warehouse-admin写项目说明文档！",time:"2021-11-03 20:33:31"},{id:2,content:"Warehouse 准备为warehouse-admin 1.0的发布做充分的准备工作！",time:"2021-10-31 22:43:12"},{id:1,content:"@yanbowe 向warehouse-admin提交了一个bug，多标签栏不会自适应。",time:"2021-10-27 10:24:54"},{id:0,content:"Warehouse 在2021年5月28日创建了开源项目warehouse-admin！",time:"2021-05-28 22:22:22"}],o=[{id:0,label:"主控台",icon:"mdi:desktop-mac-dashboard",iconColor:"#409eff"},{id:1,label:"系统管理",icon:"ic:outline-settings",iconColor:"#7238d1"},{id:2,label:"权限管理",icon:"mdi:family-tree",iconColor:"#f56c6c"},{id:3,label:"组件",icon:"fluent:app-store-24-filled",iconColor:"#19a2f1"},{id:4,label:"表格",icon:"mdi:table-large",iconColor:"#fab251"},{id:5,label:"图表",icon:"mdi:chart-areaspline",iconColor:"#8aca6b"}];return(z,c)=>{const e=G,n=K,r=T,_=W,w=L,S=D,$=F,b=N,V=r1;return f(),k(n,{"item-responsive":!0,"x-gap":16,"y-gap":16},{default:l(()=>[a(e,{span:"0:24 640:24 1024:16"},{default:l(()=>[a(b,{vertical:!0,size:16},{default:l(()=>[a(r,{title:"项目主要技术栈",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{"header-extra":l(()=>[x1]),default:l(()=>[a(n,{"item-responsive":!0,responsive:"screen",cols:"m:2 l:3","x-gap":8,"y-gap":8},{default:l(()=>[(f(),u(H,null,C(t,p=>a(e,{key:p.id},{default:l(()=>[a(m(v1),A(R(p)),null,16)]),_:2},1024)),64))]),_:1})]),_:1}),a(r,{title:"动态",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{"header-extra":l(()=>[g1]),default:l(()=>[a($,null,{default:l(()=>[(f(),u(H,null,C(s,p=>a(S,{key:p.id},{prefix:l(()=>[a(_,{class:"text-48px"})]),default:l(()=>[a(w,{title:p.content,description:p.time},null,8,["title","description"])]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1}),a(e,{span:"0:24 640:24 1024:8"},{default:l(()=>[a(b,{vertical:!0,size:16},{default:l(()=>[a(r,{title:"快捷操作",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:l(()=>[a(n,{"item-responsive":!0,responsive:"screen",cols:"m:2 l:3","x-gap":8,"y-gap":8},{default:l(()=>[(f(),u(H,null,C(o,p=>a(e,{key:p.id},{default:l(()=>[a(m(b1),A(R(p)),null,16)]),_:2},1024)),64))]),_:1})]),_:1}),a(r,{title:"创意",bordered:!1,size:"small",class:"rounded-8px shadow-sm"},{default:l(()=>[h("div",y1,[a(V,{class:"text-400px sm:text-320px text-primary"})])]),_:1})]),_:1})]),_:1})]),_:1})}}}),k1=v({__name:"index",setup(i){return(t,s)=>{const o=N;return f(),k(o,{vertical:!0,size:16},{default:l(()=>[a(m(s1)),a(m(C1))]),_:1})}}});export{k1 as default};
