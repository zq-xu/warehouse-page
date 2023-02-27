import{_ as A,a as d,s as O,b as T}from"./index.vue_vue_type_script_setup_true_lang-6d170a74.js";import{d as U,bf as k,be as q,g as B,c as I,db as R,o as j,b as J,w as o,f as a,u as i,as as L,aU as l,aT as u,bu as V,j as F,bv as z}from"./index-c504f951.js";import{d as E}from"./SearchableSelect.vue_vue_type_script_setup_true_lang-bcdaf694.js";import{C as G}from"./difference-b7ea1681.js";import{s as f,a as H}from"./salesman-761844d1.js";import{s as b}from"./salesman-d853935b.js";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang-b8dc5fa7.js";import{N as M}from"./Space-45b7edb9.js";import{_ as Q,a as W}from"./DescriptionsItem-41564477.js";import{_ as X}from"./Tag-4accb8f6.js";import{_ as Y,a as Z}from"./Tabs-03785541.js";import"./Input-a8459934.js";import"./Suffix-4a685509.js";import"./use-merged-state-184d082d.js";import"./InputNumber-b45e7ab6.js";import"./Add-af9bfbbe.js";import"./Select-01f4371d.js";import"./use-compitable-3c06317e.js";import"./cssr-70ddafe0.js";import"./Popover-1b93b8ee.js";import"./get-3eee0bd1.js";import"./format-length-c9d165c6.js";import"./next-frame-once-7035a838.js";import"./Switch-f6322ec8.js";import"./Checkbox-dc3673ea.js";import"./text-386bb090.js";import"./DataTable-48ae6045.js";import"./Dropdown-5ad302b9.js";import"./Popconfirm-272e3447.js";import"./crud-c9b4981a.js";import"./order-1f01bcfe.js";import"./ListTable.vue_vue_type_script_setup_true_lang-3459e516.js";import"./vuedraggable.umd-9f9c900f.js";import"./refresh-21f7caa5.js";import"./useLoading-41614498.js";const Ia=U({__name:"index",setup(aa){const{routerPush:g}=k();function v(){g({name:V("warehouse_salesman")})}const w=q(),n=B({}),h=I(()=>{var s,t;return R((s=n.value)==null?void 0:s.createdAt)?E((t=n.value)==null?void 0:t.createdAt):""}),_=new G;function c(s,t){const p=n.value[s];O(n.value,s,t),_.updateProp({key:s,oldValue:p,newValue:t,propOptions:H})}async function y(){var t,p;const{error:s}=await b.update(n.value.id,_.generateChangedRecord());s?(t=window.$message)==null||t.error(`操作失败! ${s.msg}`):((p=window.$message)==null||p.success("修改成功!"),setTimeout(()=>{F().reloadPage()},500))}async function x(){var p;const s=(p=w.query)==null?void 0:p.id,{data:t}=await b.get(s);n.value=JSON.parse(JSON.stringify(t))}return x(),(s,t)=>{const p=T,N=M,m=Q,P=X,C=W,$=Y,D=Z,S=z;return j(),J(S,{bordered:!1,class:"h-full rounded-16px shadow-sm"},{default:o(()=>[a(N,{class:"pb-12px",justify:"space-between"},{default:o(()=>[a(i(L),{onClick:v},{icon:o(()=>[a(p)]),default:o(()=>[l("返回 ")]),_:1}),a(A,{class:"max-w-500px",data:i(_).changedData.value,onPositiveClick:y},null,8,["data"])]),_:1}),a(C,{columns:4,"label-placement":"left",class:"text-center",bordered:""},{default:o(()=>[a(m,{span:2,label:"名称"},{default:o(()=>{var e;return[l(u((e=n.value)==null?void 0:e.name),1)]}),_:1}),a(m,{span:2,label:"状态"},{default:o(()=>{var e;return[a(P,{type:i(f)[((e=n.value)==null?void 0:e.status)||"1"].type},{default:o(()=>{var r;return[l(u(i(f)[((r=n.value)==null?void 0:r.status)||"1"].label),1)]}),_:1},8,["type"])]}),_:1}),a(m,{span:2,label:"联系方式"},{default:o(()=>{var e;return[a(d,{"edit-component":"NInput",data:(e=n.value)==null?void 0:e.phone,"onUpdate:data":t[0]||(t[0]=r=>c("phone",r))},null,8,["data"])]}),_:1}),a(m,{span:2,label:"创建时间"},{default:o(()=>[l(u(i(h)),1)]),_:1}),a(m,{span:4,label:"备注信息"},{default:o(()=>{var e;return[a(d,{data:(e=n.value)==null?void 0:e.comment,"onUpdate:data":t[1]||(t[1]=r=>c("comment",r))},null,8,["data"])]}),_:1})]),_:1}),a(D,{type:"line",animated:""},{default:o(()=>[a($,{name:"order",tab:"订单信息"},{default:o(()=>{var e;return[a(K,{"query-map":{salesmanId:(e=n.value)==null?void 0:e.id}},null,8,["query-map"])]}),_:1})]),_:1})]),_:1})}}});export{Ia as default};