import{V as $,_ as F}from"./vuedraggable.umd-7d530147.js";import{_ as H,a as P}from"./refresh-5904e64e.js";import{d as w,r as d,w as j,as as k,av as A,aw as s,aB as t,aC as y,au as z,at as N,az as E,aF as O,ax as u,ae as D,c as q,b8 as G,ab as C,aO as S,aA as I,ay as J,ag as K}from"./index-d54e27e5.js";import{N as M}from"./Checkbox-489d1cbc.js";import{N as Q}from"./Popover-7b0135d6.js";import{u as R}from"./use-loading-a821e2fc.js";import{N as h}from"./Space-87b276b9.js";import{_ as W}from"./DataTable-5a20c5e9.js";const X={class:"w-180px"},Y={key:0,class:"flex-y-center h-36px px-12px hover:bg-primary_active"},Z=w({__name:"ColumnSetting",props:{columns:{}},emits:["update:columns"],setup(_,{emit:g}){const f=_,e=d(v());function v(){return f.columns.map(l=>({...l,checked:!0}))}return j(e,l=>{const r=l.filter(o=>o.checked).map(o=>{const n={...o};return delete n.checked,n});g("update:columns",r)},{deep:!0}),(l,p)=>{const r=H,o=D,n=F,m=M,x=Q;return k(),A(x,{placement:"bottom",trigger:"click"},{trigger:s(()=>[t(o,{size:"small",type:"primary"},{default:s(()=>[t(r,{class:"mr-4px text-16px"}),y(" 表格列设置 ")]),_:1})]),default:s(()=>[z("div",X,[t(u($),{modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=c=>e.value=c),"item-key":"key"},{item:s(({element:c})=>[c.key?(k(),N("div",Y,[t(n,{class:"mr-8px text-20px cursor-move"}),t(m,{checked:c.checked,"onUpdate:checked":i=>c.checked=i},{default:s(()=>[y(E(c.title),1)]),_:2},1032,["checked","onUpdate:checked"])])):O("",!0)]),_:1},8,["modelValue"])])]),_:1})}}}),ie=w({__name:"ListTable",props:{data:{default:void 0},initLoad:{type:Boolean,default:!0},disableHeader:{type:Boolean,default:!1},columns:{},actionColumns:{default:void 0},loadData:{type:Function,default:void 0}},emits:["update:data"],setup(_,{expose:g,emit:f}){const e=_,v=d(!e.disableHeader),l=d(1),p=d([]),r=q({get(){return e.data??p.value},set(a){e.data?f("update:data",a):p.value=a}}),o=d(e.actionColumns?e.columns.concat(e.actionColumns):e.columns),n=G({class:"center",page:1,pageSize:10,showSizePicker:!0,pageCount:l,pageSizes:[10,15,20,25,30],onChange:a=>{n.page=a,i()},onUpdatePageSize:a=>{n.pageSize=a,n.page=1,i()}}),{loading:m,startLoading:x,endLoading:c}=R(!1);async function i(){if(x(),e.loadData){const{data:a}=await e.loadData("",{pageNum:(n.page??1).toString(),pageSize:(n.pageSize??10).toString()});a&&(r.value=a.items,l.value=a.pageCount)}setTimeout(()=>{c()},300)}function V(){e.initLoad&&i()}return V(),g({loadTableData:i}),(a,b)=>{const B=P,L=Z,T=W;return k(),N(K,null,[C(z("div",null,[t(u(h),{class:"pb-12px",justify:"space-between"},{default:s(()=>[t(u(h),{align:"center",size:18},{default:s(()=>[I(a.$slots,"default")]),_:3}),t(u(h),{align:"center",size:18},{default:s(()=>[C(t(u(D),{size:"small",type:"primary",onClick:i},{default:s(()=>[t(B,{class:J(["mr-4px text-16px",{"animate-spin":u(m)}])},null,8,["class"]),y(" 刷新 ")]),_:1},512),[[S,e.loadData!=null]]),t(L,{columns:o.value,"onUpdate:columns":b[0]||(b[0]=U=>o.value=U)},null,8,["columns"])]),_:1})]),_:3})],512),[[S,v.value]]),t(T,{remote:"",columns:o.value,data:r.value,loading:u(m),pagination:n},null,8,["columns","data","loading","pagination"])],64)}}});export{ie as _};
