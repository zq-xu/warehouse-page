import{_ as A,a as c,s as O,b as T}from"./index.vue_vue_type_script_setup_true_lang-6d170a74.js";import{d as U,bf as k,be as q,g as B,c as I,db as R,o as j,b as J,w as o,f as e,u as m,as as L,aU as l,aT as u,bu as V,j as F,bv as z}from"./index-c504f951.js";import{d as E}from"./SearchableSelect.vue_vue_type_script_setup_true_lang-bcdaf694.js";import{C as G}from"./difference-b7ea1681.js";import{d as f,a as H}from"./deliverer-f32e87ea.js";import{d as b}from"./deliverer-0c24c460.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-b8dc5fa7.js";import{N as M}from"./Space-45b7edb9.js";import{_ as Q,a as W}from"./DescriptionsItem-41564477.js";import{_ as X}from"./Tag-4accb8f6.js";import{_ as Y,a as Z}from"./Tabs-03785541.js";import"./Input-a8459934.js";import"./Suffix-4a685509.js";import"./use-merged-state-184d082d.js";import"./InputNumber-b45e7ab6.js";import"./Add-af9bfbbe.js";import"./Select-01f4371d.js";import"./use-compitable-3c06317e.js";import"./cssr-70ddafe0.js";import"./Popover-1b93b8ee.js";import"./get-3eee0bd1.js";import"./format-length-c9d165c6.js";import"./next-frame-once-7035a838.js";import"./Switch-f6322ec8.js";import"./Checkbox-dc3673ea.js";import"./text-386bb090.js";import"./DataTable-48ae6045.js";import"./Dropdown-5ad302b9.js";import"./Popconfirm-272e3447.js";import"./crud-c9b4981a.js";import"./order-1f01bcfe.js";import"./ListTable.vue_vue_type_script_setup_true_lang-3459e516.js";import"./vuedraggable.umd-9f9c900f.js";import"./refresh-21f7caa5.js";import"./useLoading-41614498.js";const Ie=U({__name:"index",setup(ee){const{routerPush:g}=k();function v(){g({name:V("warehouse_deliverer")})}const w=q(),n=B({}),h=I(()=>{var s,t;return R((s=n.value)==null?void 0:s.createdAt)?E((t=n.value)==null?void 0:t.createdAt):""}),_=new G;function d(s,t){const r=n.value[s];O(n.value,s,t),_.updateProp({key:s,oldValue:r,newValue:t,propOptions:H})}async function y(){var t,r;const{error:s}=await b.update(n.value.id,_.generateChangedRecord());s?(t=window.$message)==null||t.error(`操作失败! ${s.msg}`):((r=window.$message)==null||r.success("修改成功!"),setTimeout(()=>{F().reloadPage()},500))}async function x(){var r;const s=(r=w.query)==null?void 0:r.id,{data:t}=await b.get(s);n.value=JSON.parse(JSON.stringify(t))}return x(),(s,t)=>{const r=T,N=M,i=Q,P=X,C=W,$=Y,D=Z,S=z;return j(),J(S,{bordered:!1,class:"h-full rounded-16px shadow-sm"},{default:o(()=>[e(N,{class:"pb-12px",justify:"space-between"},{default:o(()=>[e(m(L),{onClick:v},{icon:o(()=>[e(r)]),default:o(()=>[l("返回 ")]),_:1}),e(A,{class:"max-w-500px",data:m(_).changedData.value,onPositiveClick:y},null,8,["data"])]),_:1}),e(C,{columns:4,"label-placement":"left",class:"text-center",bordered:""},{default:o(()=>[e(i,{span:2,label:"名称"},{default:o(()=>{var a;return[l(u((a=n.value)==null?void 0:a.name),1)]}),_:1}),e(i,{span:2,label:"状态"},{default:o(()=>{var a;return[e(P,{type:m(f)[((a=n.value)==null?void 0:a.status)||"1"].type},{default:o(()=>{var p;return[l(u(m(f)[((p=n.value)==null?void 0:p.status)||"1"].label),1)]}),_:1},8,["type"])]}),_:1}),e(i,{span:2,label:"联系方式"},{default:o(()=>{var a;return[e(c,{"edit-component":"NInput",data:(a=n.value)==null?void 0:a.phone,"onUpdate:data":t[0]||(t[0]=p=>d("phone",p))},null,8,["data"])]}),_:1}),e(i,{span:2,label:"创建时间"},{default:o(()=>[l(u(m(h)),1)]),_:1}),e(i,{span:4,label:"备注信息"},{default:o(()=>{var a;return[e(c,{data:(a=n.value)==null?void 0:a.comment,"onUpdate:data":t[1]||(t[1]=p=>d("comment",p))},null,8,["data"])]}),_:1})]),_:1}),e(D,{type:"line",animated:""},{default:o(()=>[e($,{name:"order",tab:"订单信息"},{default:o(()=>{var a;return[e(K,{"query-map":{delivererId:(a=n.value)==null?void 0:a.id}},null,8,["query-map"])]}),_:1})]),_:1})]),_:1})}}});export{Ie as default};