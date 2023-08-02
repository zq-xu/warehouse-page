import{_ as W}from"./round-plus-88128d85.js";import{aD as d,h,df as J,iO as K,iP as Q,d as O,c as T,as as N,av as D,aw as u,au as m,az as v,aB as t,aC as g,at as F,aE as X,ax as s,iV as Z,ag as G,ae as R,r as B,b8 as H,iX as Y,iW as ee,iR as j,aJ as te,aK as oe,aZ as ae,aW as le,bj as re,bk as se,iQ as ne}from"./index-82878933.js";import{_ as ue}from"./ListTable.vue_vue_type_script_setup_true_lang-158742c1.js";import{d as de}from"./time-2af255bb.js";import{N as S}from"./text-1d62828f.js";import{_ as P}from"./Tag-44f4bb3b.js";import{N as pe}from"./Popover-77a1abb2.js";import{_ as V}from"./SearchableSelect.vue_vue_type_script_setup_true_lang-120c33c2.js";import{s as ie}from"./salesman-6add9d98.js";import{d as ce}from"./deliverer-bb24bc62.js";import{c as me}from"./customer-6b6395e8.js";import{c as _e,u as b,a as fe}from"./rule-34c9079a.js";import{_ as ve}from"./InputNumber-d988ee38.js";import{_ as x}from"./Input-73537fce.js";import{_ as ye}from"./Table-332368ba.js";import{_ as he}from"./FormItemGridItem-0a2884f7.js";import{_ as be}from"./Select-8c691358.js";import{_ as we}from"./DatePicker-308829db.js";import{a as ge}from"./Grid-32cf7ff4.js";import{N as L}from"./Space-5ce7b0d3.js";import"./refresh-26d8b195.js";import"./use-loading-499c0e90.js";import"./vuedraggable.umd-dc8b72a9.js";import"./Checkbox-60e346ec.js";import"./use-merged-state-73225c5f.js";import"./DataTable-380fd57e.js";import"./format-length-c9d165c6.js";import"./Suffix-9de0baa4.js";import"./Dropdown-b655dc06.js";import"./get-f3cd441e.js";import"./next-frame-once-7035a838.js";import"./use-compitable-88d2e5e4.js";import"./cssr-4b5a1daa.js";import"./Add-b56c8fee.js";function ke(){return[{key:"id",title:d("warehouse.property.id"),align:"center"},{key:"customer",title:d("warehouse.order.customer"),align:"center",render:l=>h(S,{},{default:()=>{var c;return(c=l.customer)==null?void 0:c.name}})},{key:"products",title:d("warehouse.order.product"),render:l=>{var w;return(w=l.products)==null?void 0:w.map(o=>h(P,{style:{marginRight:"6px"},type:"info",bordered:!1},{default:()=>o.name}))}},{key:"totalPrice",title:d("warehouse.property.paid"),align:"center",render:l=>[h(P,{type:l.totalPaid>=l.totalPrice?"success":"error"},{default:()=>`€${l.totalPaid}`}),h(S,{},{default:()=>"/"}),h(P,{type:"success"},{default:()=>`€${l.totalPrice}`})]},{key:"deliveryAt",title:d("warehouse.order.deliveryAt"),align:"center",render:l=>h(S,{},{default:()=>J(l.deliveryAt)?de(l.deliveryAt):""})},{key:"deliveryMode",title:d("warehouse.order.deliveryMode"),align:"center",render:l=>{const c=K[l.deliveryMode||2];return h(pe,{placement:"right-end",disabled:l.deliveryMode!==1},{trigger:()=>h(P,{style:{marginRight:"6px"},type:c.type,bordered:!1},{default:()=>c.label}),default:()=>h("span",{style:{"margin-right":"5px"}},{default:()=>l.deliveryAddress})})}},{key:"status",title:d("warehouse.property.status"),align:"center",render:l=>{const c=Q[l.status||1];return h(P,{style:{marginRight:"6px"},type:c.type,bordered:!1},{default:()=>c.label})}}]}const Me={customerId:_e("请输入购买人员"),phone:b,payMode:b,deliveryMode:b,deliveryAt:b,deliveryAddress:b,salesmanId:b,delivererId:b,products:b,paid:b,comment:b},Ue={class:"text-center py-0"},Ie={scope:"col",width:"30%"},Pe={scope:"col",width:"15%"},$e={scope:"col",width:"15%"},Ae={scope:"col",width:"15%"},Ne={scope:"col",width:"15%"},Ce={scope:"col",width:"20%"},Re={scope:"col",width:"5%"},Be=["name"],Se=O({name:"OrderProductForm",__name:"OrderProductForm",props:{data:{}},emits:["update:data"],setup(l,{emit:c}){const w=l,o=T({get(){return w.data},set(e){c("update:data",e)}});function k(e){o.value.splice(e,1)}function M(){o.value.push({})}return(e,U)=>{const I=R,f=P,a=ve,r=x,y=ye;return N(),D(y,{striped:""},{default:u(()=>[m("thead",null,[m("tr",Ue,[m("th",Ie,v(e.$t("warehouse.property.name")),1),m("th",Pe,v(e.$t("warehouse.product.stock"))+"/"+v(e.$t("warehouse.property.price"))+" €",1),m("th",$e,v(e.$t("warehouse.property.count")),1),m("th",Ae,v(e.$t("warehouse.product.finalPrice"))+" €",1),m("th",Ne,v(e.$t("warehouse.property.paid"))+" €",1),m("th",Ce,v(e.$t("warehouse.property.comment")),1),m("th",Re,[t(I,{size:"small",class:"w-36px",onClick:M},{default:u(()=>[g("+")]),_:1})])])]),m("tbody",null,[(N(!0),F(G,null,X(o.value,(_,i)=>(N(),F("tr",{key:_.id,name:i,class:"text-center py-0"},[m("td",null,[t(V,{value:o.value[i].id,"list-fn":s(Z).list,"onUpdate:value":n=>{var C,$,A;o.value[i].id=n==null?void 0:n.value,o.value[i].stocks=(C=n==null?void 0:n.option)==null?void 0:C.stocks,o.value[i].price=($=n==null?void 0:n.option)==null?void 0:$.price,o.value[i].finalPrice=(A=n==null?void 0:n.option)==null?void 0:A.price}},null,8,["value","list-fn","onUpdate:value"])]),m("td",null,[t(f,null,{default:u(()=>[g(v(o.value[i].stocks??0),1)]),_:2},1024),g(" / "),t(f,null,{default:u(()=>[g(v(o.value[i].price??0),1)]),_:2},1024)]),m("td",null,[t(a,{value:o.value[i].count,"onUpdate:value":n=>o.value[i].count=n,"default-value":0},null,8,["value","onUpdate:value"])]),m("td",null,[t(a,{value:o.value[i].finalPrice,"onUpdate:value":n=>o.value[i].finalPrice=n,"default-value":0},null,8,["value","onUpdate:value"])]),m("td",null,[t(a,{value:o.value[i].paid,"onUpdate:value":n=>o.value[i].paid=n,"default-value":0},null,8,["value","onUpdate:value"])]),m("td",null,[t(r,{value:o.value[i].comment,"onUpdate:value":n=>o.value[i].comment=n},null,8,["value","onUpdate:value"])]),m("td",null,[t(I,{class:"w-36px",onClick:n=>k(i)},{default:u(()=>[g("-")]),_:2},1032,["onClick"])])],8,Be))),128))])]),_:1})}}}),Oe=O({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible","succeed"],setup(l,{emit:c}){const w=l,o=T({get(){return w.visible},set(a){c("update:visible",a)}}),k=()=>{o.value=!1},M=B(),e=H({products:[]}),U=B();function I(a){e.customerId=a==null?void 0:a.value,e.phone=a!=null&&a.option.phone?a==null?void 0:a.option.phone:e.phone}async function f(){var r,y;e.deliveryAt=U.value,await((r=M.value)==null?void 0:r.validate()),e.payMode=Number(e.payMode),e.deliveryMode=Number(e.deliveryMode);const{error:a}=await j.create(e);a||((y=window.$message)==null||y.success(d("warehouse.common.addSuccess")),k(),c("succeed"))}return(a,r)=>{const y=V,_=he,i=x,n=be,C=we,$=ge,A=R,z=L,q=fe,E=te;return N(),D(E,{show:o.value,"onUpdate:show":r[8]||(r[8]=p=>o.value=p),preset:"card",title:s(d)("warehouse.common.add"),class:"w-1200px"},{default:u(()=>[t(q,{ref_key:"formRef",ref:M,"label-placement":"left","label-width":150,model:e,rules:s(Me)},{default:u(()=>[t($,{cols:36,"x-gap":18},{default:u(()=>[t(_,{span:12,label:s(d)("warehouse.order.customer"),path:"customerId"},{default:u(()=>[t(y,{value:e.customerId,"list-fn":s(me).listBaseInfo,"onUpdate:value":I},null,8,["value","list-fn"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.property.phone"),path:"phone"},{default:u(()=>[t(i,{value:e.phone,"onUpdate:value":r[0]||(r[0]=p=>e.phone=p),clearable:""},null,8,["value"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.order.payMode"),path:"payMode"},{default:u(()=>[t(n,{value:e.payMode,"onUpdate:value":r[1]||(r[1]=p=>e.payMode=p),clearable:"",options:s(Y)},null,8,["value","options"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.order.deliveryMode"),path:"deliveryMode"},{default:u(()=>[t(n,{value:e.deliveryMode,"onUpdate:value":r[2]||(r[2]=p=>e.deliveryMode=p),clearable:"",options:s(ee)},null,8,["value","options"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.order.deliveryAt"),path:"deliveryAt"},{default:u(()=>[t(C,{value:U.value,"onUpdate:value":r[3]||(r[3]=p=>U.value=p),clearable:""},null,8,["value"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.order.deliveryAddress"),path:"deliveryAddress"},{default:u(()=>[t(i,{value:e.deliveryAddress,"onUpdate:value":r[4]||(r[4]=p=>e.deliveryAddress=p),clearable:""},null,8,["value"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.order.sales"),path:"salesmanId"},{default:u(()=>[t(y,{value:e.salesmanId,"list-fn":s(ie).listBaseInfo,"onUpdate:value":r[5]||(r[5]=p=>e.salesmanId=p==null?void 0:p.value)},null,8,["value","list-fn"])]),_:1},8,["label"]),t(_,{span:12,label:s(d)("warehouse.order.deliverer"),path:"delivererId"},{default:u(()=>[t(y,{value:e.delivererId,"list-fn":s(ce).listBaseInfo,"onUpdate:value":r[6]||(r[6]=p=>e.delivererId=p==null?void 0:p.value)},null,8,["value","list-fn"])]),_:1},8,["label"])]),_:1}),t($,{cols:36,"x-gap":18},{default:u(()=>[t(_,{span:36,label:s(d)("warehouse.order.productInfo"),path:"saler"},{default:u(()=>[t(Se,{data:e.products,"onUpdate:data":r[7]||(r[7]=p=>e.products=p)},null,8,["data"])]),_:1},8,["label"])]),_:1}),t(z,{class:"w-full pt-16px",size:24,justify:"end"},{default:u(()=>[t(A,{class:"w-72px",onClick:k},{default:u(()=>[g(v(s(d)("warehouse.common.cancel")),1)]),_:1}),t(A,{class:"w-72px",type:"primary",onClick:f},{default:u(()=>[g(v(s(d)("warehouse.common.confirm")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["show","title"])}}});function De(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!ne(l)}const vt=O({__name:"index",setup(l){const{bool:c,setTrue:w}=oe(),o=B(),k=B([]),M=()=>{var f;return(f=o.value)==null?void 0:f.loadTableData()};function e(){return[{key:"actions",title:d("warehouse.property.operation"),align:"center",render:f=>{let a;return t(L,{justify:"center"},{default:()=>[t(R,{size:"small",onClick:()=>I(f.id)},De(a=d("warehouse.common.showDetail"))?a:{default:()=>[a]})]})}}]}const{routerPush:U}=ae();function I(f){U({name:re("warehouse_order-detail"),query:{id:f}})}return(f,a)=>{const r=W,y=se;return N(),D(y,{bordered:!1,class:"rounded-16px shadow-sm"},{default:u(()=>[t(ue,{ref_key:"listTable",ref:o,data:k.value,"onUpdate:data":a[0]||(a[0]=_=>k.value=_),"columns-fn":s(ke),"action-columns-fn":e,"load-data":s(j).list},{default:u(()=>[t(s(R),{type:"primary",onClick:s(w)},{default:u(()=>[t(r,{class:"mr-4px text-20px"}),g(" "+v(s(d)("warehouse.common.add")),1)]),_:1},8,["onClick"])]),_:1},8,["data","columns-fn","load-data"]),t(Oe,{visible:s(c),"onUpdate:visible":a[1]||(a[1]=_=>le(c)?c.value=_:null),onSucceed:M},null,8,["visible"])]),_:1})}}});export{vt as default};
