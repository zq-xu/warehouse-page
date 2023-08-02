import{_ as M}from"./round-plus-88128d85.js";import{aD as o,h as y,d as k,c as V,r as P,b8 as z,as as C,av as N,aw as l,aB as e,ax as n,aC as R,az as S,ae as v,aJ as q,aK as A,aZ as F,aW as L,bj as O,bk as J,iQ as K}from"./index-82878933.js";import{s as $}from"./supplier-d516b9a4.js";import{_ as Q}from"./ListTable.vue_vue_type_script_setup_true_lang-158742c1.js";import{N as g}from"./text-1d62828f.js";import{c as x,u as w,a as W}from"./rule-34c9079a.js";import{_ as Z}from"./Input-73537fce.js";import{_ as E}from"./FormItemGridItem-0a2884f7.js";import{a as G}from"./Grid-32cf7ff4.js";import{N as T}from"./Space-5ce7b0d3.js";import"./refresh-26d8b195.js";import"./use-loading-499c0e90.js";import"./vuedraggable.umd-dc8b72a9.js";import"./Checkbox-60e346ec.js";import"./use-merged-state-73225c5f.js";import"./Popover-77a1abb2.js";import"./Suffix-9de0baa4.js";import"./get-f3cd441e.js";import"./cssr-4b5a1daa.js";import"./format-length-c9d165c6.js";import"./use-compitable-88d2e5e4.js";import"./next-frame-once-7035a838.js";import"./DataTable-380fd57e.js";import"./Dropdown-b655dc06.js";import"./Select-8c691358.js";import"./Tag-44f4bb3b.js";function H(){return[{key:"name",title:o("warehouse.property.name"),align:"center"},{key:"phone",title:o("warehouse.property.phone"),align:"center"},{key:"address",title:o("warehouse.property.address"),align:"center",ellipsis:{tooltip:!0}},{key:"totalPrice",title:o("warehouse.property.totalPrice"),align:"center",render:i=>y(g,{},{default:()=>`€${i.totalPrice}`})},{key:"totalPaid",title:o("warehouse.property.totalPaid"),align:"center",render:i=>y(g,{},{default:()=>`€${i.totalPaid}`})},{key:"comment",title:o("warehouse.property.comment"),align:"center",ellipsis:{tooltip:!0}}]}const X=k({__name:"AddSupplierModal",props:{visible:{type:Boolean}},emits:["update:visible","succeed"],setup(i,{emit:c}){const f=i,d=V({get(){return f.visible},set(r){c("update:visible",r)}}),b=()=>{d.value=!1},_=P(),a=z({}),h={name:x(o("warehouse.property.namePlaceholder")),phone:x(o("warehouse.property.phonePlaceholder")),address:w,invoiceInfo:w,comment:w};async function u(){var t,p;await((t=_.value)==null?void 0:t.validate());const{error:r}=await $.create(a);r||((p=window.$message)==null||p.success(o("warehouse.common.addSuccess")),b(),c("succeed"))}return(r,t)=>{const p=Z,m=E,U=G,j=W,B=v,I=T,D=q;return C(),N(D,{show:d.value,"onUpdate:show":t[5]||(t[5]=s=>d.value=s),preset:"card",title:n(o)("warehouse.common.add")+" "+n(o)("warehouse.supplier.tittle"),class:"w-700px"},{default:l(()=>[e(j,{ref_key:"formRef",ref:_,class:"w-80% m-auto","label-placement":"left","label-width":150,model:a,rules:h},{default:l(()=>[e(U,{cols:12,"x-gap":18},{default:l(()=>[e(m,{span:12,label:n(o)("warehouse.property.name"),path:"name"},{default:l(()=>[e(p,{value:a.name,"onUpdate:value":t[0]||(t[0]=s=>a.name=s),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(m,{span:12,label:n(o)("warehouse.property.phone"),path:"phone"},{default:l(()=>[e(p,{value:a.phone,"onUpdate:value":t[1]||(t[1]=s=>a.phone=s),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(m,{span:12,label:n(o)("warehouse.property.address"),path:"address"},{default:l(()=>[e(p,{value:a.address,"onUpdate:value":t[2]||(t[2]=s=>a.address=s),clearable:""},null,8,["value"])]),_:1},8,["label"]),e(m,{span:12,label:n(o)("warehouse.property.invoiceInfo"),path:"invoiceInfo"},{default:l(()=>[e(p,{value:a.invoiceInfo,"onUpdate:value":t[3]||(t[3]=s=>a.invoiceInfo=s),type:"textarea",clearable:""},null,8,["value"])]),_:1},8,["label"]),e(m,{span:36,label:n(o)("warehouse.property.comment"),path:"comment"},{default:l(()=>[e(p,{value:a.comment,"onUpdate:value":t[4]||(t[4]=s=>a.comment=s)},null,8,["value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"]),e(I,{class:"w-full pt-16px",size:24,justify:"end"},{default:l(()=>[e(B,{class:"w-72px",type:"primary",onClick:u},{default:l(()=>[R(S(n(o)("warehouse.common.confirm")),1)]),_:1})]),_:1})]),_:1},8,["show","title"])}}});function Y(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!K(i)}const Ne=k({__name:"index",setup(i){const{bool:c,setTrue:f}=A(),d=P(),b=()=>{var u;return(u=d.value)==null?void 0:u.loadTableData()};function _(){return[{key:"actions",title:o("warehouse.property.operation"),align:"center",render:u=>{let r;return e(T,{justify:"center"},{default:()=>[e(v,{size:"small",onClick:()=>h(u.id)},Y(r=o("warehouse.common.showDetail"))?r:{default:()=>[r]})]})}}]}const{routerPush:a}=F();function h(u){a({name:O("warehouse_supplier-detail"),query:{id:u}})}return(u,r)=>{const t=M,p=J;return C(),N(p,{bordered:!1,class:"rounded-16px shadow-sm"},{default:l(()=>[e(Q,{ref_key:"listTable",ref:d,"columns-fn":n(H),"action-columns-fn":_,"load-data":n($).list},{default:l(()=>[e(n(v),{size:"small",type:"primary",onClick:n(f)},{default:l(()=>[e(t,{class:"mr-4px text-20px"}),R(" "+S(n(o)("warehouse.common.add")),1)]),_:1},8,["onClick"])]),_:1},8,["columns-fn","load-data"]),e(X,{visible:n(c),"onUpdate:visible":r[0]||(r[0]=m=>L(c)?c.value=m:null),onSucceed:b},null,8,["visible"])]),_:1})}}});export{Ne as default};
