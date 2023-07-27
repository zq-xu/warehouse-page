import{h as r,df as m,iM as p,iN as f,d as y,r as g,w as _,aZ as h,as as b,av as v,ax as N,aB as o,ae as k,aC as x,bj as P,iO as M}from"./index-5bf6305f.js";import{_ as A}from"./ListTable.vue_vue_type_script_setup_true_lang-6cf305fe.js";import{d as C}from"./time-3d6c5d3a.js";import{N as i}from"./text-46906b8b.js";import{_ as s}from"./Tag-cb1657ff.js";import{N as B}from"./Popover-7d8b81d0.js";import{N as q}from"./Space-21ff50c5.js";const R=[{key:"id",title:"订单编号",align:"center"},{key:"name",title:"客户",align:"center",render:e=>r(i,{},{default:()=>{var t;return(t=e.customer)==null?void 0:t.name}})},{title:"订单商品",key:"products",render:e=>e.products.map(n=>r(s,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>n.name}))},{key:"totalPrice",title:"订单总价",align:"center",render:e=>[r(s,{type:e.totalPaid>=e.totalPrice?"success":"error"},{default:()=>`€${e.totalPaid}`}),r(i,{},{default:()=>"/"}),r(s,{type:"success"},{default:()=>`€${e.totalPrice}`})]},{key:"deliveryAt",title:"配送时间",align:"center",render:e=>r(i,{},{default:()=>m(e.deliveryAt)?C(e.deliveryAt):""})},{key:"deliveryMode",title:"配送方式",align:"center",render:e=>{const t=p[e.deliveryMode||"2"];return r(B,{placement:"right-end",disabled:e.deliveryMode!==1},{trigger:()=>r(s,{style:{marginRight:"6px"},type:t.type,bordered:!1},{default:()=>t.label}),default:()=>r("span",{style:{"margin-right":"5px"}},{default:()=>e.deliveryAddress})})}},{key:"status",title:"状态",align:"center",render:e=>{const t=f[e.status||"1"];return r(s,{style:{marginRight:"6px"},type:t.type,bordered:!1},{default:()=>t.label})}}],V=y({__name:"index",props:{queryMap:{}},setup(e){const t=e,n=g([]);_(()=>t.queryMap,async a=>{if(a){const{data:l}=await M.list("",t.queryMap);n.value=l?l.items:[]}});const d=[{key:"actions",title:"操作",align:"center",render:a=>o(q,{justify:"center"},{default:()=>[o(k,{size:"small",onClick:()=>c(a.id)},{default:()=>[x("详情")]})]})}],{routerPush:u}=h();function c(a){u({name:P("warehouse_order-detail"),query:{id:a}})}return(a,l)=>(b(),v(A,{ref:"listTable",columns:N(R),"action-columns":d,data:n.value,"init-load":!1,"disable-header":!0},null,8,["columns","data"]))}});export{V as _};