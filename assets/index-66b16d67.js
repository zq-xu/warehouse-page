import{_ as C}from"./LoadingEmptyWrapper.vue_vue_type_script_setup_true_lang-3560afb4.js";import{aX as g,d as B,g as E,P as L,o as S,a as b,f as e,w as o,u as n,as as m,aU as u,bv as w}from"./index-b28eb342.js";import{N as A}from"./Popconfirm-a624e6f1.js";import{_ as T}from"./DataTable-bac6c263.js";import{N as p}from"./Space-ddb3c2dc.js";import"./use-compitable-2499bb8f.js";import"./Popover-047ad240.js";import"./Suffix-c1e795dc.js";import"./get-7f25b093.js";import"./format-length-c9d165c6.js";import"./cssr-315ed4eb.js";import"./use-merged-state-26468420.js";import"./next-frame-once-7035a838.js";import"./Checkbox-753a63cd.js";import"./Dropdown-1f50664d.js";import"./Select-6652b02f.js";import"./Tag-0fbeab37.js";import"./Input-75a7a16e.js";function D(s,t=0){const a=s-t;return Math.floor(Math.random()*a+t)}function F(s=!1,t=!1){const{bool:a,setTrue:r,setFalse:c}=g(s),{bool:i,setBool:d}=g(t);return{loading:a,startLoading:r,endLoading:c,empty:i,setEmpty:d}}const Y=B({__name:"index",setup(s){const{loading:t,startLoading:a,endLoading:r,empty:c,setEmpty:i}=F(),d=[{title:"Name",key:"name",align:"center"},{title:"Age",key:"age",align:"center"},{title:"Address",key:"address",align:"center"},{key:"action",title:"Action",align:"center",render:()=>e(p,{justify:"center"},{default:()=>[e(m,{size:"small",onClick:()=>{}},{default:()=>[u("编辑")]}),e(A,{onPositiveClick:()=>{}},{default:()=>"确认删除",trigger:()=>e(m,{size:"small"},{default:()=>[u("删除")]})})]})}],l=E([]);function y(){return Array(100).fill(1).map((k,f)=>({name:`Name${f}`,age:D(30,20),address:"中国"}))}function _(){a(),setTimeout(()=>{l.value=y(),r(),i(!l.value.length)},1e3)}function h(){a(),setTimeout(()=>{l.value=[],r(),i(!l.value.length)},1e3)}return L(()=>{_()}),(k,f)=>{const v=T,x=C,N=w;return S(),b("div",null,[e(N,{title:"表格",class:"h-full shadow-sm rounded-16px"},{default:o(()=>[e(n(p),{vertical:!0},{default:o(()=>[e(n(p),null,{default:o(()=>[e(n(m),{onClick:_},{default:o(()=>[u("有数据")]),_:1}),e(n(m),{onClick:h},{default:o(()=>[u("空数据")]),_:1})]),_:1}),e(x,{class:"h-480px",loading:n(t),empty:n(c)},{default:o(()=>[e(v,{columns:d,data:l.value,"flex-height":!0,class:"h-480px"},null,8,["data"])]),_:1},8,["loading","empty"])]),_:1})]),_:1})])}}});export{Y as default};