import{_ as S}from"./export-9494ff81.js";import{_ as U}from"./round-plus-c1092305.js";import{h as V,d as w,c as j,r as h,b8 as q,as as k,av as C,aw as o,aB as e,aC as d,ae as f,aJ as A,aK as P,aZ as z,ax as p,aW as D,bj as E,bk as F}from"./index-d54e27e5.js";import{s as R}from"./salesman-d1765744.js";import{_ as L}from"./ListTable.vue_vue_type_script_setup_true_lang-8a138c6f.js";import{s as I}from"./salesman-761844d1.js";import{_ as J}from"./Tag-e65656a5.js";import{c as y,u as K,a as W}from"./rule-9b1bb503.js";import{_ as Z}from"./Input-ed39452b.js";import{_ as G}from"./FormItemGridItem-1706a543.js";import{a as H}from"./Grid-720faae6.js";import{N as B}from"./Space-87b276b9.js";import"./vuedraggable.umd-7d530147.js";import"./refresh-5904e64e.js";import"./Checkbox-489d1cbc.js";import"./use-merged-state-3e142966.js";import"./Popover-7b0135d6.js";import"./Suffix-bd6327fa.js";import"./get-f627e15a.js";import"./cssr-66e6389d.js";import"./format-length-c9d165c6.js";import"./use-compitable-689c1d61.js";import"./next-frame-once-7035a838.js";import"./use-loading-a821e2fc.js";import"./DataTable-5a20c5e9.js";import"./Dropdown-fc098814.js";import"./Select-559fcc4a.js";const O=[{key:"name",title:"名称",align:"center"},{key:"phone",title:"联系方式",align:"center"},{key:"comment",title:"备注信息",align:"center",ellipsis:{tooltip:!0}},{key:"status",title:"状态",align:"center",render:c=>{const a=I[c.status||"1"];return V(J,{style:{marginRight:"6px"},type:a.type,bordered:!1},{default:()=>a.label})}}],Q=w({__name:"AddSalesmanModal",props:{visible:{type:Boolean}},emits:["update:visible","succeed"],setup(c,{emit:a}){const b=c,m=j({get(){return b.visible},set(r){a("update:visible",r)}}),v=()=>{m.value=!1},_=h(),n=q({}),g={name:y("请输入供应商名称"),phone:y("请输入联系方式"),comment:K};async function s(){var t,l;await((t=_.value)==null?void 0:t.validate());const{error:r}=await R.create(n);r||((l=window.$message)==null||l.success("新增成功!"),v(),a("succeed"))}return(r,t)=>{const l=Z,u=G,x=H,$=W,N=f,T=B,M=A;return k(),C(M,{show:m.value,"onUpdate:show":t[3]||(t[3]=i=>m.value=i),preset:"card",title:"新增销售人员",class:"w-700px"},{default:o(()=>[e($,{ref_key:"formRef",ref:_,class:"w-80% m-auto","label-placement":"left","label-width":150,model:n,rules:g},{default:o(()=>[e(x,{cols:12,"x-gap":18},{default:o(()=>[e(u,{span:12,label:"名称",path:"name"},{default:o(()=>[e(l,{value:n.name,"onUpdate:value":t[0]||(t[0]=i=>n.name=i),clearable:""},null,8,["value"])]),_:1}),e(u,{span:12,label:"联系方式",path:"phone"},{default:o(()=>[e(l,{value:n.phone,"onUpdate:value":t[1]||(t[1]=i=>n.phone=i),clearable:""},null,8,["value"])]),_:1}),e(u,{span:36,label:"备注",path:"comment"},{default:o(()=>[e(l,{value:n.comment,"onUpdate:value":t[2]||(t[2]=i=>n.comment=i)},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model"]),e(T,{class:"w-full pt-16px",size:24,justify:"end"},{default:o(()=>[e(N,{class:"w-72px",type:"primary",onClick:s},{default:o(()=>[d("确定")]),_:1})]),_:1})]),_:1},8,["show"])}}}),Re=w({__name:"index",setup(c){const{bool:a,setTrue:b}=P(),m=h(),v=()=>{var s;return(s=m.value)==null?void 0:s.loadTableData()},_=[{key:"actions",title:"操作",align:"center",render:s=>e(B,{justify:"center"},{default:()=>[e(f,{size:"small",onClick:()=>g(s.id)},{default:()=>[d("详情")]})]})}],{routerPush:n}=z();function g(s){n({name:E("warehouse_salesman-detail"),query:{id:s}})}return(s,r)=>{const t=U,l=S,u=F;return k(),C(u,{bordered:!1,class:"rounded-16px shadow-sm"},{default:o(()=>[e(L,{ref_key:"listTable",ref:m,columns:p(O),"action-columns":_,"load-data":p(R).list},{default:o(()=>[e(p(f),{type:"primary",onClick:p(b)},{default:o(()=>[e(t,{class:"mr-4px text-20px"}),d(" 新增 ")]),_:1},8,["onClick"]),e(p(f),{type:"success"},{default:o(()=>[e(l,{class:"mr-4px text-20px"}),d(" 导出Excel ")]),_:1})]),_:1},8,["columns","load-data"]),e(Q,{visible:p(a),"onUpdate:visible":r[0]||(r[0]=x=>D(a)?a.value=x:null),onSucceed:v},null,8,["visible"])]),_:1})}}});export{Re as default};
