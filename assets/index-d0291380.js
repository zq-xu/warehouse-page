import{d as v,bf as g,bm as D,g as h,o as k,b as w,w as e,f as t,aU as u,bu as m,as as x,bv as C}from"./index-aebf9257.js";import{_ as N}from"./Input-9990f81d.js";import{_ as S}from"./InputGroup-0d23c4b5.js";import{N as H}from"./Space-f30a6a21.js";import"./Suffix-7f3abdfa.js";import"./use-merged-state-b7e52fc3.js";const E=v({__name:"index",setup(M){const{routerPush:i}=g(),c=D(),o=h("");function p(){i({name:m("function_tab-detail"),query:{name:"abc"},hash:"#DEMO_HASH"})}function _(a){i({name:m("function_tab-multi-detail"),query:{name:"abc",num:a},hash:"#DEMO_HASH"})}function d(){var a;o.value?c.setActiveTabTitle(o.value):(a=window.$message)==null||a.warning("请输入要设置的标题名称")}return(a,n)=>{const l=x,f=N,b=S,r=H,T=C;return k(),w(r,{vertical:!0,size:16},{default:e(()=>[t(T,{title:"Tab Home",bordered:!1,size:"small",class:"shadow-sm rounded-16px"},{default:e(()=>[t(r,{vertical:!0,size:12},{default:e(()=>[t(l,{onClick:p},{default:e(()=>[u("跳转Tab Detail")]),_:1}),t(l,{onClick:n[0]||(n[0]=s=>_(1))},{default:e(()=>[u("跳转Tab Multi Detail 1")]),_:1}),t(l,{onClick:n[1]||(n[1]=s=>_(2))},{default:e(()=>[u("跳转Tab Multi Detail 2")]),_:1}),t(b,null,{default:e(()=>[t(f,{value:o.value,"onUpdate:value":n[2]||(n[2]=s=>o.value=s)},null,8,["value"]),t(l,{type:"primary",onClick:d},{default:e(()=>[u("设置当前Tab页标题")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{E as default};
