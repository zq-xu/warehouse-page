import{_ as C}from"./LoadingEmptyWrapper.vue_vue_type_script_setup_true_lang-1cee9532.js";import{aX as g,d as B,g as E,P as L,o as S,a as b,f as e,w as o,u as n,as as m,aU as u,bv as w}from"./index-34a5d1ff.js";import{N as A}from"./Popconfirm-58fa1c66.js";import{_ as T}from"./DataTable-48dee99f.js";import{N as p}from"./Space-62cb8e84.js";import"./use-compitable-8657cdd7.js";import"./Popover-de0facf6.js";import"./Suffix-53c356dc.js";import"./get-eec00e4f.js";import"./format-length-c9d165c6.js";import"./cssr-99ea0e89.js";import"./use-merged-state-fca7e891.js";import"./next-frame-once-7035a838.js";import"./Checkbox-62de4b5f.js";import"./Dropdown-0efc0ade.js";import"./Select-eb0e2562.js";import"./Tag-cf9c036e.js";import"./Input-6f725f97.js";function D(s,t=0){const a=s-t;return Math.floor(Math.random()*a+t)}function F(s=!1,t=!1){const{bool:a,setTrue:r,setFalse:c}=g(s),{bool:i,setBool:d}=g(t);return{loading:a,startLoading:r,endLoading:c,empty:i,setEmpty:d}}const Y=B({__name:"index",setup(s){const{loading:t,startLoading:a,endLoading:r,empty:c,setEmpty:i}=F(),d=[{title:"Name",key:"name",align:"center"},{title:"Age",key:"age",align:"center"},{title:"Address",key:"address",align:"center"},{key:"action",title:"Action",align:"center",render:()=>e(p,{justify:"center"},{default:()=>[e(m,{size:"small",onClick:()=>{}},{default:()=>[u("编辑")]}),e(A,{onPositiveClick:()=>{}},{default:()=>"确认删除",trigger:()=>e(m,{size:"small"},{default:()=>[u("删除")]})})]})}],l=E([]);function y(){return Array(100).fill(1).map((k,f)=>({name:`Name${f}`,age:D(30,20),address:"中国"}))}function _(){a(),setTimeout(()=>{l.value=y(),r(),i(!l.value.length)},1e3)}function h(){a(),setTimeout(()=>{l.value=[],r(),i(!l.value.length)},1e3)}return L(()=>{_()}),(k,f)=>{const v=T,x=C,N=w;return S(),b("div",null,[e(N,{title:"表格",class:"h-full shadow-sm rounded-16px"},{default:o(()=>[e(n(p),{vertical:!0},{default:o(()=>[e(n(p),null,{default:o(()=>[e(n(m),{onClick:_},{default:o(()=>[u("有数据")]),_:1}),e(n(m),{onClick:h},{default:o(()=>[u("空数据")]),_:1})]),_:1}),e(x,{class:"h-480px",loading:n(t),empty:n(c)},{default:o(()=>[e(v,{columns:d,data:l.value,"flex-height":!0,class:"h-480px"},null,8,["data"])]),_:1},8,["loading","empty"])]),_:1})]),_:1})])}}});export{Y as default};