import{o,a as l,aR as t,d as y,c as b,g as C,b as $,w as r,f as e,u as a,bc as L,F as k,aV as w,aS as M,b4 as V,bv as N}from"./index-aebf9257.js";import{_ as F}from"./WebSiteLink.vue_vue_type_script_setup_true_lang-2fa5ed89.js";import{_ as S}from"./Input-9990f81d.js";import{_ as j,N as A}from"./Popover-cee38c67.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./Suffix-7f3abdfa.js";import"./use-merged-state-b7e52fc3.js";import"./get-87184c73.js";import"./format-length-c9d165c6.js";import"./cssr-6154291c.js";import"./use-compitable-9dc60f29.js";import"./next-frame-once-7035a838.js";const R={width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"prefix__prefix__feather prefix__prefix__feather-cast"},U=t("path",{d:"M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6M2 20h.01"},null,-1),O=[U];function P(m,_){return o(),l("svg",R,O)}const z={name:"local-cast",render:P},H={class:"inline-block",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},T=t("path",{d:"M22 12h-4l-3 9L9 3l-3 9H2"},null,-1),X=[T];function q(m,_){return o(),l("svg",H,X)}const D={name:"local-activity",render:q},G={key:0,class:"grid grid-cols-9 h-auto overflow-auto"},J=["onClick"],K=y({name:"IconSelect"}),Q=y({...K,props:{value:null,icons:null,emptyIcon:{default:"mdi:apps"}},emits:["update:value"],setup(m,{emit:_}){const u=m,i=b({get(){return u.value},set(n){_("update:value",n)}}),x=b(()=>i.value||u.emptyIcon),p=C(""),h=b(()=>u.icons.filter(n=>n.includes(p.value)));function v(n){i.value=n}return(n,d)=>{const f=V,s=S,g=j,B=A;return o(),$(B,{placement:"bottom-end",trigger:"click"},{trigger:r(()=>[e(s,{value:a(i),"onUpdate:value":d[0]||(d[0]=c=>L(i)?i.value=c:null),readonly:"",placeholder:"点击选择图标"},{suffix:r(()=>[e(f,{icon:a(x),class:"text-30px p-5px"},null,8,["icon"])]),_:1},8,["value"])]),header:r(()=>[e(s,{value:p.value,"onUpdate:value":d[1]||(d[1]=c=>p.value=c),placeholder:"搜索图标"},null,8,["value"])]),default:r(()=>[a(h).length>0?(o(),l("div",G,[(o(!0),l(k,null,w(a(h),c=>(o(),l("span",{key:c,onClick:ae=>v(c)},[e(f,{icon:c,class:M(["border-1px border-[#d9d9d9] text-30px m-2px p-5px cursor-pointer",{"border-primary":a(i)===c}])},null,8,["icon","class"])],8,J))),128))])):(o(),$(g,{key:1,class:"w-306px",description:"你什么也找不到"}))]),_:1})}}});const W=E(Q,[["__scopeId","data-v-fb115121"]]),I=["mdi:emoticon","mdi:ab-testing","ph:alarm","ph:android-logo","ph:align-bottom","ph:archive-box-light","uil:basketball","uil:brightness-plus","uil:capture","mdi:apps-box","mdi:alert","mdi:airballoon","mdi:airplane-edit","mdi:alpha-f-box-outline","mdi:arm-flex-outline","ic:baseline-10mp","ic:baseline-access-time","ic:baseline-brightness-4","ic:baseline-brightness-5","ic:baseline-credit-card","ic:baseline-filter-1","ic:baseline-filter-2","ic:baseline-filter-3","ic:baseline-filter-4","ic:baseline-filter-5","ic:baseline-filter-6","ic:baseline-filter-7","ic:baseline-filter-8","ic:baseline-filter-9","ic:baseline-filter-9-plus"],Y={class:"h-full"},Z={class:"grid grid-cols-10"},ee={class:"mt-50px"},te=t("h1",{class:"mb-20px text-18px font-500"},"Icon图标选择器",-1),oe=t("div",{class:"pb-12px text-16px"}," 在src/assets/svg-icon文件夹下的svg文件，通过在template里面以 icon-local-{文件名} 直接渲染, 其中icon-local为.env文件里的 VITE_ICON_LOCAL_PREFFIX ",-1),ne={class:"grid grid-cols-10"},se={class:"mt-5px flex-x-center"},le={class:"mt-5px flex-x-center"},ce=t("div",{class:"py-12px text-16px"},"通过SvgIcon组件动态渲染, 菜单通过meta的localIcon属性渲染自定义图标",-1),ie={class:"grid grid-cols-10"},ke=y({__name:"index",setup(m){const _=C(""),u=["custom-icon","activity","at-sign","cast","chrome","copy","wind"];return(i,x)=>{const p=V,h=W,v=F,n=N,d=D,f=z;return o(),l("div",Y,[e(n,{title:"Icon组件示例",class:"shadow-sm rounded-16px"},{footer:r(()=>[e(v,{label:"iconify地址：",link:"https://icones.js.org/",class:"mt-10px"})]),default:r(()=>[t("div",Z,[(o(!0),l(k,null,w(a(I),s=>(o(),l("div",{key:s,class:"mt-5px flex-x-center"},[e(p,{icon:s,class:"text-30px"},null,8,["icon"])]))),128))]),t("div",ee,[te,e(h,{value:_.value,"onUpdate:value":x[0]||(x[0]=s=>_.value=s),icons:a(I)},null,8,["value","icons"])])]),_:1}),e(n,{title:"自定义图标示例",class:"mt-10px shadow-sm rounded-16px"},{default:r(()=>[oe,t("div",ne,[t("div",se,[e(d,{class:"text-40px text-success"})]),t("div",le,[e(f,{class:"text-20px text-error"})])]),ce,t("div",ie,[(o(),l(k,null,w(u,(s,g)=>t("div",{key:g,class:"mt-5px flex-x-center"},[e(p,{"local-icon":s,class:"text-30px text-primary"},null,8,["local-icon"])])),64))])]),_:1})])}}});export{ke as default};
