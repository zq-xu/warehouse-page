import{V as L,_ as U}from"./vuedraggable.umd-6f97032d.js";import{_ as T,a as H}from"./refresh-ba31b930.js";import{d as b,g as _,h as C,o as x,b as P,w as t,f as n,aU as v,aR as S,u as i,a as w,aT as $,e as F,as as z,bn as j,ap as E,ay as R,r as q,aS as A,F as G}from"./index-74b62da3.js";import{_ as I}from"./Checkbox-4778377f.js";import{N as J}from"./Popover-04d9f1d4.js";import{u as K}from"./useLoading-f21cce98.js";import{N as k}from"./Space-4e03680c.js";import{_ as M}from"./DataTable-4e997df8.js";const O={class:"w-180px"},Q={key:0,class:"flex-y-center h-36px px-12px hover:bg-primary_active"},W=b({__name:"ColumnSetting",props:{columns:null},emits:["update:columns"],setup(d,{emit:g}){const f=d,e=_(h());function h(){return f.columns.map(c=>({...c,checked:!0}))}return C(e,c=>{const r=c.filter(l=>l.checked).map(l=>{const o={...l};return delete o.checked,o});g("update:columns",r)},{deep:!0}),(c,u)=>{const r=T,l=z,o=U,m=I,p=J;return x(),P(p,{placement:"bottom",trigger:"click"},{trigger:t(()=>[n(l,{size:"small",type:"primary"},{default:t(()=>[n(r,{class:"mr-4px text-16px"}),v(" 表格列设置 ")]),_:1})]),default:t(()=>[S("div",O,[n(i(L),{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=s=>e.value=s),"item-key":"key"},{item:t(({element:s})=>[s.key?(x(),w("div",Q,[n(o,{class:"mr-8px text-20px cursor-move"}),n(m,{checked:s.checked,"onUpdate:checked":a=>s.checked=a},{default:t(()=>[v($(s.title),1)]),_:2},1032,["checked","onUpdate:checked"])])):F("",!0)]),_:1},8,["modelValue"])])]),_:1})}}}),se=b({__name:"ListTable",props:{data:null,initLoad:{type:Boolean,default:!0},disableHeader:{type:Boolean,default:!1},columns:null,actionColumns:{default:void 0}},emits:["loadData"],setup(d,{expose:g,emit:f}){const e=d,h=_(!e.disableHeader),c=_(e.data),{loading:u,startLoading:r,endLoading:l}=K(!1);async function o(){r(),f("loadData"),setTimeout(()=>{l()},300)}const m=_(e.actionColumns?e.columns.concat(e.actionColumns):e.columns),p=j({class:"center",page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,15,20,25,30],onChange:a=>{p.page=a},onUpdatePageSize:a=>{p.pageSize=a,p.page=1}});C(()=>e.data,a=>{a&&(c.value=a)});function s(){e.initLoad&&o()}return s(),g({loadTableData:o}),(a,y)=>{const N=H,V=W,B=M;return x(),w(G,null,[E(S("div",null,[n(i(k),{class:"pb-12px",justify:"space-between"},{default:t(()=>[n(i(k),{align:"center",size:18},{default:t(()=>[q(a.$slots,"default")]),_:3}),n(i(k),{align:"center",size:18},{default:t(()=>[n(i(z),{size:"small",type:"primary",onClick:o},{default:t(()=>[n(N,{class:A(["mr-4px text-16px",{"animate-spin":i(u)}])},null,8,["class"]),v(" 刷新 ")]),_:1}),n(V,{columns:m.value,"onUpdate:columns":y[0]||(y[0]=D=>m.value=D)},null,8,["columns"])]),_:1})]),_:3})],512),[[R,h.value]]),n(B,{columns:m.value,data:c.value,loading:i(u),pagination:p},null,8,["columns","data","loading","pagination"])],64)}}});export{se as _};