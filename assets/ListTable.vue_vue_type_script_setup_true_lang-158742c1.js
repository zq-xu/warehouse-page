import{_ as I,a as j}from"./refresh-26d8b195.js";import{d as V,r as m,w as $,as as z,av as A,aw as i,aB as t,aC as F,az as N,au as P,at as T,aF as E,ax as d,ae as U,c as O,b4 as q,b8 as G,ab as B,aO as D,aA as J,ay as K,ag as M}from"./index-82878933.js";import{u as Q}from"./use-loading-499c0e90.js";import{V as R,_ as W}from"./vuedraggable.umd-dc8b72a9.js";import{N as X}from"./Checkbox-60e346ec.js";import{N as Y}from"./Popover-77a1abb2.js";import{N as w}from"./Space-5ce7b0d3.js";import{_ as Z}from"./DataTable-380fd57e.js";const ee={class:"w-180px"},ae={key:0,class:"flex-y-center h-36px px-12px hover:bg-primary_active"},ne=V({__name:"ColumnSetting",props:{columns:{}},emits:["update:columns"],setup(x,{expose:y,emit:b}){const a=x,c=m(g());function g(){return a.columns.map(n=>({...n,checked:!0}))}function h(n){c.value=n.map(s=>{const l=c.value.findIndex(u=>u.key===s.key);return l>=0?{...s,checked:c.value[l].checked}:{...s,checked:!0}}),_(c.value)}function _(n){const l=n.filter(u=>u.checked).map(u=>{const o={...u};return delete o.checked,o});b("update:columns",l)}return $(c,n=>{_(n)},{deep:!0}),y({refreshList:h}),(n,s)=>{const l=I,u=U,o=W,v=X,C=Y;return z(),A(C,{placement:"bottom",trigger:"click"},{trigger:i(()=>[t(u,{size:"small",type:"primary"},{default:i(()=>[t(l,{class:"mr-4px text-16px"}),F(" "+N(n.$t("warehouse.common.tableColumnSetting")),1)]),_:1})]),default:i(()=>[P("div",ee,[t(d(R),{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=r=>c.value=r),"item-key":"key"},{item:i(({element:r})=>[r.key?(z(),T("div",ae,[t(o,{class:"mr-8px text-20px cursor-move"}),t(v,{checked:r.checked,"onUpdate:checked":p=>r.checked=p},{default:i(()=>[F(N(r.title),1)]),_:2},1032,["checked","onUpdate:checked"])])):E("",!0)]),_:1},8,["modelValue"])])]),_:1})}}}),de=V({__name:"ListTable",props:{data:{default:void 0},initLoad:{type:Boolean,default:!0},disableHeader:{type:Boolean,default:!1},disablePagination:{type:Boolean,default:!1},columnsFn:{},actionColumnsFn:{type:Function,default:void 0},loadData:{type:Function,default:void 0}},emits:["update:data","update:columns"],setup(x,{expose:y,emit:b}){const a=x,c=m(!a.disableHeader),g=m(1),h=m([]),_=O({get(){return a.data??h.value},set(e){a.data?b("update:data",e):h.value=e}}),n=m(s(a.columnsFn?a.columnsFn():[]));function s(e){return a.actionColumnsFn?e.concat(a.actionColumnsFn()):e}const l=m(),{locale:u}=q();$(u,()=>{var k;const e=a.columnsFn?a.columnsFn().map(S=>({...S})):[],f=s(e);n.value=f,(k=l.value)==null||k.refreshList(f)},{deep:!0});const o=a.disablePagination?void 0:G({class:"center",page:1,pageSize:10,showSizePicker:!0,pageCount:g,pageSizes:[10,15,20,25,30],onChange:e=>{o.page=e,p()},onUpdatePageSize:e=>{o.pageSize=e,o.page=1,p()}}),{loading:v,startLoading:C,endLoading:r}=Q(!1);async function p(){if(C(),a.loadData){const{data:e}=await a.loadData("",{pageNum:(o.page??1).toString(),pageSize:(o.pageSize??10).toString()});e&&(_.value=e.items,g.value=e.pageCount)}setTimeout(()=>{r()},300)}function H(){a.initLoad&&p()}return H(),y({loadTableData:p}),(e,f)=>{const k=j,S=Z;return z(),T(M,null,[B(P("div",null,[t(d(w),{class:"pb-12px",justify:"space-between"},{default:i(()=>[t(d(w),{align:"center",size:18},{default:i(()=>[J(e.$slots,"default")]),_:3}),t(d(w),{align:"center",size:18},{default:i(()=>[B(t(d(U),{size:"small",type:"primary",onClick:p},{default:i(()=>[t(k,{class:K(["mr-4px text-16px",{"animate-spin":d(v)}])},null,8,["class"]),F(" "+N(e.$t("warehouse.common.refresh")),1)]),_:1},512),[[D,a.loadData!=null]]),t(ne,{ref_key:"columnSetting",ref:l,columns:n.value,"onUpdate:columns":f[0]||(f[0]=L=>n.value=L)},null,8,["columns"])]),_:1})]),_:3})],512),[[D,c.value]]),t(S,{remote:"",columns:n.value,data:_.value,loading:d(v),pagination:d(o)},null,8,["columns","data","loading","pagination"])],64)}}});export{de as _};
