import{d,r as m,il as f,as as v,at as w,aB as t,aw as s,aC as g,ae as C,bk as h}from"./index-5bf6305f.js";import{_ as x}from"./Input-1579017c.js";import{_ as b}from"./InputGroup-91e2c8d2.js";import"./Suffix-ac4d6ce4.js";import"./use-merged-state-ac77a2a7.js";const $={class:"h-full"},E=d({__name:"index",setup(k){const e=m(""),{copy:r,isSupported:u}=f();function _(){var a,o,n;if(!u){(a=window.$message)==null||a.error("您的浏览器不支持Clipboard API");return}if(!e.value){(o=window.$message)==null||o.error("请输入要复制的内容");return}r(e.value),(n=window.$message)==null||n.success(`复制成功：${e.value}`)}return(a,o)=>{const n=x,l=C,p=b,c=h;return v(),w("div",$,[t(c,{title:"文本复制",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:s(()=>[t(p,null,{default:s(()=>[t(n,{value:e.value,"onUpdate:value":o[0]||(o[0]=i=>e.value=i),placeholder:"请输入要复制的内容吧"},null,8,["value"]),t(l,{type:"primary",onClick:_},{default:s(()=>[g("复制")]),_:1})]),_:1})]),_:1})])}}});export{E as default};