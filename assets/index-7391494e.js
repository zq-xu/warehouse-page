import{a as m}from"./business-397e7e6f.js";import{d as b,j as N,bi as g,bC as k,h as w,bD as R,o as t,a as B,f as n,w as e,aR as p,aU as s,aT as U,u as o,ap as c,b as r,e as d,as as z,bv as C}from"./index-34a5d1ff.js";import{_ as D}from"./GradientText-24e207c7.js";import{_ as P}from"./Select-eb0e2562.js";import{N as S}from"./Space-62cb8e84.js";import"./use-houdini-316b81ec.js";import"./format-length-c9d165c6.js";import"./use-merged-state-fca7e891.js";import"./Suffix-53c356dc.js";import"./use-compitable-8657cdd7.js";import"./Tag-cf9c036e.js";import"./cssr-99ea0e89.js";import"./Popover-de0facf6.js";import"./get-eec00e4f.js";import"./next-frame-once-7035a838.js";const V={class:"h-full"},I={class:"pb-12px"},A={class:"py-12px"},E={class:"py-12px"},te=b({__name:"index",setup(L){const f=N(),i=g(),{hasPermission:l}=k(),v=[{label:m.super,value:"super"},{label:m.admin,value:"admin"},{label:m.user,value:"user"}];return w(()=>i.userInfo.userRole,async()=>{f.reloadPage()}),(j,q)=>{const u=D,h=P,a=z,x=S,y=C,_=R("permission");return t(),B("div",V,[n(y,{title:"权限切换",class:"h-full shadow-sm rounded-16px"},{default:e(()=>[p("div",I,[n(u,{type:"primary",size:20},{default:e(()=>[s("当前用户的权限："+U(o(i).userInfo.userRole),1)]),_:1})]),n(h,{value:o(i).userInfo.userRole,class:"w-120px",size:"small",options:o(v),"onUpdate:value":o(i).updateUserRole},null,8,["value","options","onUpdate:value"]),p("div",A,[n(u,{type:"primary",size:20},{default:e(()=>[s("权限指令 v-permission")]),_:1})]),p("div",null,[c((t(),r(a,{class:"mr-12px"},{default:e(()=>[s("super可见")]),_:1})),[[_,"super"]]),c((t(),r(a,{class:"mr-12px"},{default:e(()=>[s("admin可见")]),_:1})),[[_,"admin"]]),c((t(),r(a,null,{default:e(()=>[s("admin和test可见")]),_:1})),[[_,["admin","user"]]])]),p("div",E,[n(u,{type:"primary",size:20},{default:e(()=>[s("权限函数 hasPermission")]),_:1})]),n(x,null,{default:e(()=>[o(l)("super")?(t(),r(a,{key:0},{default:e(()=>[s("super可见")]),_:1})):d("",!0),o(l)("admin")?(t(),r(a,{key:1},{default:e(()=>[s("admin可见")]),_:1})):d("",!0),o(l)(["admin","user"])?(t(),r(a,{key:2},{default:e(()=>[s("admin和user可见")]),_:1})):d("",!0)]),_:1})]),_:1})])}}});export{te as default};