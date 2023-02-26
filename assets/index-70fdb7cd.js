import{aX as Q,g as P,c as N,bw as Y,bx as ee,P as oe,d as k,o as x,a as I,aR as v,by as W,f as e,u as d,b as T,w as n,aU as b,F as te,aV as ne,aT as U,as as B,bi as X,bf as G,bn as A,h as Z,bc as le,bz as q,k as se,bA as ae,a0 as re,bg as de,n as ce,br as ie,b3 as ue,bv as pe}from"./index-b28eb342.js";import{_ as _e,c as fe}from"./DarkModeSwitch.vue_vue_type_script_setup_true_lang-3eac3601.js";import{E as M}from"./business-397e7e6f.js";import{R as me,f as R,_ as V,a as O,g as ge,b as J}from"./rule-140695a6.js";import{N as E}from"./Space-ddb3c2dc.js";import{_ as K}from"./Checkbox-753a63cd.js";import{_ as j}from"./Input-75a7a16e.js";import{u as ve}from"./useLoading-6b4d3d46.js";import{_ as he}from"./GradientText-8d37a567.js";import"./format-length-c9d165c6.js";import"./get-7f25b093.js";import"./use-merged-state-26468420.js";import"./Suffix-c1e795dc.js";import"./use-houdini-a1c0a7e2.js";function we(p){if(p<=0&&p%1!==0)throw new Error("倒计时的时间应该为一个正整数！");const{bool:r,setTrue:l,setFalse:_}=Q(!1),i=P(0),o=N(()=>Boolean(i.value));let c;function t(m=p){i.value||(_(),i.value=m,c=setInterval(()=>{i.value-=1,i.value<=0&&(clearInterval(c),l())},1e3))}function u(){c=clearInterval(c),i.value=0}return Y(u),{counts:i,isCounting:o,start:t,stop:u,isComplete:r}}function F(){const{loading:p,startLoading:r,endLoading:l}=ve(),{counts:_,start:i,isCounting:o}=we(60),c="获取验证码",t=a=>`${a}秒后重新获取`,u=N(()=>{let a=c;return p.value&&(a=""),o.value&&(a=t(_.value)),a});function m(a){var f,g;let s=!0;return a.trim()===""?((f=window.$message)==null||f.error("手机号码不能为空！"),s=!1):me.test(a)||((g=window.$message)==null||g.error("手机号码格式错误！"),s=!1),s}async function w(a){var g;if(!m(a)||p.value)return;r();const{data:f}=await ee(a);f&&((g=window.$message)==null||g.success("验证码发送成功！"),i()),l()}return{label:u,start:i,isCounting:o,getSmsCode:w,loading:p}}function be(p=152,r=40){const l=P(),_=P("");function i(c){_.value=c}function o(){l.value&&(_.value=Ce(l.value,p,r))}return oe(()=>{o()}),{domRef:l,imgCode:_,setImgCode:i,getImgCode:o}}function z(p,r){return Math.floor(Math.random()*(r-p)+p)}function D(p,r){const l=z(p,r),_=z(p,r),i=z(p,r);return`rgb(${l},${_},${i})`}function Ce(p,r,l){let _="";const i="0123456789",o=p.getContext("2d");if(!o)return _;o.fillStyle=D(180,230),o.fillRect(0,0,r,l);for(let c=0;c<4;c+=1){const t=i[z(0,i.length)];_+=t;const u=z(18,41),m=z(-30,30);o.font=`${u}px Simhei`,o.textBaseline="top",o.fillStyle=D(80,150),o.save(),o.translate(30*c+23,15),o.rotate(m*Math.PI/180),o.fillText(t,-15+5,-15),o.restore()}for(let c=0;c<5;c+=1)o.beginPath(),o.moveTo(z(0,r),z(0,l)),o.lineTo(z(0,r),z(0,l)),o.strokeStyle=D(180,230),o.closePath(),o.stroke();for(let c=0;c<41;c+=1)o.beginPath(),o.arc(z(0,r),z(0,l),1,0,2*Math.PI),o.closePath(),o.fillStyle=D(150,200),o.fill();return _}const xe={height:"1337",width:"1337"},ke=v("path",{id:"path-1",opacity:"1","fill-rule":"evenodd",d:"M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"},null,-1),ye={id:"linearGradient-2",x1:"0.79",y1:"0.62",x2:"0.21",y2:"0.86"},$e=["stop-color"],ze=["stop-color"],Se=v("g",{opacity:"1"},[v("use",{"xlink:href":"#path-1",fill:"url(#linearGradient-2)","fill-opacity":"1"})],-1),Re=k({__name:"CornerTop",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(p){return(r,l)=>(x(),I("svg",xe,[v("defs",null,[ke,v("linearGradient",ye,[v("stop",{offset:"0","stop-color":p.startColor,"stop-opacity":"1"},null,8,$e),v("stop",{offset:"1","stop-color":p.endColor,"stop-opacity":"1"},null,8,ze)])]),Se]))}}),Pe={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"896",width:"967.8852157128662"},Ue=v("path",{id:"path-2",opacity:"1","fill-rule":"evenodd",d:"M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"},null,-1),Le={id:"linearGradient-3",x1:"0.5",y1:"0",x2:"0.5",y2:"1"},Ne=["stop-color"],Me=["stop-color"],Ie=v("g",{opacity:"1"},[v("use",{"xlink:href":"#path-2",fill:"url(#linearGradient-3)","fill-opacity":"1"})],-1),Te=k({__name:"CornerBottom",props:{startColor:{default:"#28aff0"},endColor:{default:"#120fc4"}},setup(p){return(r,l)=>(x(),I("svg",Pe,[v("defs",null,[Ue,v("linearGradient",Le,[v("stop",{offset:"0","stop-color":p.startColor,"stop-opacity":"1"},null,8,Ne),v("stop",{offset:"1","stop-color":p.endColor,"stop-opacity":"1"},null,8,Me)])]),Ie]))}}),Be={class:"absolute-lt z-1 wh-full overflow-hidden"},Ee={class:"absolute -right-300px -top-900px <sm:(-right-100px -top-1170px)"},Ge={class:"absolute -left-200px -bottom-400px <sm:(-left-100px -bottom-760px)"},Ae=k({__name:"index",props:{themeColor:null},setup(p){const r=p,l=N(()=>W(r.themeColor,3)),_=N(()=>W(r.themeColor,6));return(i,o)=>(x(),I("div",Be,[v("div",Ee,[e(d(Re),{"start-color":d(l),"end-color":d(_)},null,8,["start-color","end-color"])]),v("div",Ge,[e(d(Te),{"start-color":d(_),"end-color":d(l)},null,8,["start-color","end-color"])])]))}}),Ve=k({__name:"OtherAccount",emits:["login"],setup(p,{emit:r}){const l=[{label:"超级管理员",userName:"Super",password:"super123"},{label:"管理员",userName:"Admin",password:"admin123"},{label:"普通用户",userName:"User01",password:"user01123"}];function _(i,o){r("login",{userName:i,password:o})}return(i,o)=>{const c=_e,t=B,u=E;return x(),T(u,{vertical:!0},{default:n(()=>[e(c,{class:"!mb-0 text-14px text-[#666]"},{default:n(()=>[b("其他账户登录")]),_:1}),e(u,{justify:"center"},{default:n(()=>[(x(),I(te,null,ne(l,m=>e(t,{key:m.userName,type:"primary",onClick:w=>_(m.userName,m.password)},{default:n(()=>[b(U(m.label),1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}}}),Oe={class:"flex-y-center justify-between"},je={class:"flex-y-center justify-between"},De=v("div",{class:"w-12px"},null,-1),Fe=k({__name:"index",setup(p){const r=X(),{login:l}=X(),{toLoginModule:_}=G(),i=P(),o=A({userName:"Warehouse",password:"warehouse123"}),c={password:R.pwd},t=P(!1);async function u(){var s;await((s=i.value)==null?void 0:s.validate());const{userName:w,password:a}=o;l(w,a)}function m(w){const{userName:a,password:s}=w;l(a,s)}return(w,a)=>{const s=j,f=V,g=K,C=B,y=E,S=O;return x(),T(S,{ref_key:"formRef",ref:i,model:o,rules:c,size:"large","show-label":!1},{default:n(()=>[e(f,{path:"userName"},{default:n(()=>[e(s,{value:o.userName,"onUpdate:value":a[0]||(a[0]=h=>o.userName=h),placeholder:"请输入用户名"},null,8,["value"])]),_:1}),e(f,{path:"password"},{default:n(()=>[e(s,{value:o.password,"onUpdate:value":a[1]||(a[1]=h=>o.password=h),type:"password","show-password-on":"click",placeholder:"请输入密码"},null,8,["value"])]),_:1}),e(y,{vertical:!0,size:24},{default:n(()=>[v("div",Oe,[e(g,{checked:t.value,"onUpdate:checked":a[2]||(a[2]=h=>t.value=h)},{default:n(()=>[b("记住我")]),_:1},8,["checked"]),e(C,{text:!0,onClick:a[3]||(a[3]=h=>d(_)("reset-pwd"))},{default:n(()=>[b("忘记密码？")]),_:1})]),e(C,{type:"primary",size:"large",block:!0,round:!0,loading:d(r).loginLoading,onClick:u},{default:n(()=>[b(" 确定 ")]),_:1},8,["loading"]),v("div",je,[e(C,{class:"flex-1",block:!0,onClick:a[4]||(a[4]=h=>d(_)("code-login"))},{default:n(()=>[b(U(d(M)["code-login"]),1)]),_:1}),De,e(C,{class:"flex-1",block:!0,onClick:a[5]||(a[5]=h=>d(_)("register"))},{default:n(()=>[b(U(d(M).register),1)]),_:1})])]),_:1}),e(d(Ve),{onLogin:m})]),_:1},8,["model"])}}}),He=k({name:"ImageVerify"}),We=k({...He,props:{code:{default:""}},emits:["update:code"],setup(p,{expose:r,emit:l}){const _=p,{domRef:i,imgCode:o,setImgCode:c,getImgCode:t}=be();return Z(()=>_.code,u=>{c(u)}),Z(o,u=>{l("update:code",u)}),r({getImgCode:t}),(u,m)=>(x(),I("div",null,[v("canvas",{ref_key:"domRef",ref:i,width:"152",height:"40",class:"cursor-pointer",onClick:m[0]||(m[0]=(...w)=>d(t)&&d(t)(...w))},null,512)]))}}),Xe={class:"flex-y-center w-full"},Ze=v("div",{class:"w-18px"},null,-1),qe={class:"pl-8px"},Je=k({__name:"index",setup(p){const r=X(),{toLoginModule:l}=G(),{label:_,isCounting:i,loading:o,getSmsCode:c}=F(),t=P(),u=A({phone:"",code:"",imgCode:""}),m=P(""),w={phone:R.phone,code:R.code,imgCode:ge(m)};function a(){c(u.phone)}async function s(){var f,g;await((f=t.value)==null?void 0:f.validate()),(g=window.$message)==null||g.success("验证成功!")}return(f,g)=>{const C=j,y=V,S=B,h=We,H=E,$=O;return x(),T($,{ref_key:"formRef",ref:t,model:u,rules:w,size:"large","show-label":!1},{default:n(()=>[e(y,{path:"phone"},{default:n(()=>[e(C,{value:u.phone,"onUpdate:value":g[0]||(g[0]=L=>u.phone=L),placeholder:"手机号码"},null,8,["value"])]),_:1}),e(y,{path:"code"},{default:n(()=>[v("div",Xe,[e(C,{value:u.code,"onUpdate:value":g[1]||(g[1]=L=>u.code=L),placeholder:"验证码"},null,8,["value"]),Ze,e(S,{size:"large",disabled:d(i),loading:d(o),onClick:a},{default:n(()=>[b(U(d(_)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(y,{path:"imgCode"},{default:n(()=>[e(C,{value:u.imgCode,"onUpdate:value":g[2]||(g[2]=L=>u.imgCode=L),placeholder:"验证码,点击图片刷新"},null,8,["value"]),v("div",qe,[e(h,{code:m.value,"onUpdate:code":g[3]||(g[3]=L=>m.value=L)},null,8,["code"])])]),_:1}),e(H,{vertical:!0,size:18},{default:n(()=>[e(S,{type:"primary",size:"large",block:!0,round:!0,loading:d(r).loginLoading,onClick:s},{default:n(()=>[b(" 确定 ")]),_:1},8,["loading"]),e(S,{size:"large",block:!0,round:!0,onClick:g[4]||(g[4]=L=>d(l)("pwd-login"))},{default:n(()=>[b("返回")]),_:1})]),_:1})]),_:1},8,["model"])}}}),Ke={class:"w-full text-14px"},Qe=k({name:"LoginAgreement"}),Ye=k({...Qe,props:{value:{type:Boolean,default:!0}},emits:["update:value","click-protocol","click-policy"],setup(p,{emit:r}){const l=p,_=N({get(){return l.value},set(c){r("update:value",c)}});function i(){r("click-protocol")}function o(){r("click-policy")}return(c,t)=>{const u=K,m=B;return x(),I("div",Ke,[e(u,{checked:d(_),"onUpdate:checked":t[0]||(t[0]=w=>le(_)?_.value=w:null)},{default:n(()=>[b("我已经仔细阅读并接受")]),_:1},8,["checked"]),e(m,{text:!0,type:"primary",onClick:i},{default:n(()=>[b("《用户协议》")]),_:1}),e(m,{text:!0,type:"primary",onClick:o},{default:n(()=>[b("《隐私权政策》")]),_:1})])}}}),eo={class:"flex-y-center w-full"},oo=v("div",{class:"w-18px"},null,-1),to=k({__name:"index",setup(p){const{toLoginModule:r}=G(),{label:l,isCounting:_,loading:i,start:o}=F(),c=P(),t=A({phone:"",code:"",pwd:"",confirmPwd:""}),u={phone:R.phone,code:R.code,pwd:R.pwd,confirmPwd:J(q(t).pwd)},m=P(!1);function w(){o()}async function a(){var s,f;await((s=c.value)==null?void 0:s.validate()),(f=window.$message)==null||f.success("验证成功!")}return(s,f)=>{const g=j,C=V,y=B,S=Ye,h=E,H=O;return x(),T(H,{ref_key:"formRef",ref:c,model:t,rules:u,size:"large","show-label":!1},{default:n(()=>[e(C,{path:"phone"},{default:n(()=>[e(g,{value:t.phone,"onUpdate:value":f[0]||(f[0]=$=>t.phone=$),placeholder:"手机号码"},null,8,["value"])]),_:1}),e(C,{path:"code"},{default:n(()=>[v("div",eo,[e(g,{value:t.code,"onUpdate:value":f[1]||(f[1]=$=>t.code=$),placeholder:"验证码"},null,8,["value"]),oo,e(y,{size:"large",disabled:d(_),loading:d(i),onClick:w},{default:n(()=>[b(U(d(l)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(C,{path:"pwd"},{default:n(()=>[e(g,{value:t.pwd,"onUpdate:value":f[2]||(f[2]=$=>t.pwd=$),type:"password","show-password-on":"click",placeholder:"密码"},null,8,["value"])]),_:1}),e(C,{path:"confirmPwd"},{default:n(()=>[e(g,{value:t.confirmPwd,"onUpdate:value":f[3]||(f[3]=$=>t.confirmPwd=$),type:"password","show-password-on":"click",placeholder:"确认密码"},null,8,["value"])]),_:1}),e(h,{vertical:!0,size:18},{default:n(()=>[e(S,{value:m.value,"onUpdate:value":f[4]||(f[4]=$=>m.value=$)},null,8,["value"]),e(y,{type:"primary",size:"large",block:!0,round:!0,onClick:a},{default:n(()=>[b("确定")]),_:1}),e(y,{size:"large",block:!0,round:!0,onClick:f[5]||(f[5]=$=>d(r)("pwd-login"))},{default:n(()=>[b("返回")]),_:1})]),_:1})]),_:1},8,["model"])}}}),no={class:"flex-y-center w-full"},lo=v("div",{class:"w-18px"},null,-1),so=k({__name:"index",setup(p){const{toLoginModule:r}=G(),{label:l,isCounting:_,loading:i,start:o}=F(),c=P(),t=A({phone:"",code:"",pwd:"",confirmPwd:""}),u={phone:R.phone,code:R.code,pwd:R.pwd,confirmPwd:J(q(t).pwd)};function m(){o()}async function w(){var a,s;await((a=c.value)==null?void 0:a.validate()),(s=window.$message)==null||s.success("验证成功!")}return(a,s)=>{const f=j,g=V,C=B,y=E,S=O;return x(),T(S,{ref_key:"formRef",ref:c,model:t,rules:u,size:"large","show-label":!1},{default:n(()=>[e(g,{path:"phone"},{default:n(()=>[e(f,{value:t.phone,"onUpdate:value":s[0]||(s[0]=h=>t.phone=h),placeholder:"手机号码"},null,8,["value"])]),_:1}),e(g,{path:"code"},{default:n(()=>[v("div",no,[e(f,{value:t.code,"onUpdate:value":s[1]||(s[1]=h=>t.code=h),placeholder:"验证码"},null,8,["value"]),lo,e(C,{size:"large",disabled:d(_),loading:d(i),onClick:m},{default:n(()=>[b(U(d(l)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(g,{path:"pwd"},{default:n(()=>[e(f,{value:t.pwd,"onUpdate:value":s[2]||(s[2]=h=>t.pwd=h),type:"password","show-password-on":"click",placeholder:"密码"},null,8,["value"])]),_:1}),e(g,{path:"confirmPwd"},{default:n(()=>[e(f,{value:t.confirmPwd,"onUpdate:value":s[3]||(s[3]=h=>t.confirmPwd=h),type:"password","show-password-on":"click",placeholder:"确认密码"},null,8,["value"])]),_:1}),e(y,{vertical:!0,size:"large"},{default:n(()=>[e(C,{type:"primary",size:"large",block:!0,round:!0,onClick:w},{default:n(()=>[b("确定")]),_:1}),e(C,{size:"large",block:!0,round:!0,onClick:s[4]||(s[4]=h=>d(r)("pwd-login"))},{default:n(()=>[b("返回")]),_:1})]),_:1})]),_:1},8,["model"])}}}),ao={class:"flex-y-center w-full"},ro=v("div",{class:"w-18px"},null,-1),co=k({__name:"index",setup(p){const{toLoginModule:r}=G(),{label:l,isCounting:_,loading:i,getSmsCode:o}=F(),c=P(),t=A({phone:"",code:"",imgCode:""}),u={phone:R.phone,code:R.code};function m(){o(t.phone)}async function w(){var a,s;await((a=c.value)==null?void 0:a.validate()),(s=window.$message)==null||s.success("验证成功!")}return(a,s)=>{const f=j,g=V,C=B,y=E,S=O;return x(),T(S,{ref_key:"formRef",ref:c,model:t,rules:u,size:"large","show-label":!1},{default:n(()=>[e(g,{path:"phone"},{default:n(()=>[e(f,{value:t.phone,"onUpdate:value":s[0]||(s[0]=h=>t.phone=h),placeholder:"手机号码"},null,8,["value"])]),_:1}),e(g,{path:"code"},{default:n(()=>[v("div",ao,[e(f,{value:t.code,"onUpdate:value":s[1]||(s[1]=h=>t.code=h),placeholder:"验证码"},null,8,["value"]),ro,e(C,{size:"large",disabled:d(_),loading:d(i),onClick:m},{default:n(()=>[b(U(d(l)),1)]),_:1},8,["disabled","loading"])])]),_:1}),e(y,{vertical:!0,size:"large"},{default:n(()=>[e(C,{type:"primary",size:"large",block:!0,round:!0,onClick:w},{default:n(()=>[b("确定")]),_:1}),e(C,{size:"large",block:!0,round:!0,onClick:s[2]||(s[2]=h=>d(r)("pwd-login"))},{default:n(()=>[b("返回")]),_:1})]),_:1})]),_:1},8,["model"])}}}),io={class:"w-300px sm:w-360px"},uo={class:"flex-y-center justify-between"},po={class:"pt-24px"},_o={class:"text-18px text-primary font-medium"},fo={class:"pt-24px"},Po=k({__name:"index",props:{module:null},setup(p){const r=p,l=se(),{title:_}=ie(),i=[{key:"pwd-login",label:M["pwd-login"],component:Fe},{key:"code-login",label:M["code-login"],component:Je},{key:"register",label:M.register,component:to},{key:"reset-pwd",label:M["reset-pwd"],component:so},{key:"bind-wechat",label:M["bind-wechat"],component:co}],o=N(()=>{const u={...i[0]},m=i.find(w=>w.key===r.module);return m&&Object.assign(u,m),u}),c=N(()=>l.darkMode?W(l.themeColor,7):l.themeColor),t=N(()=>{const u="#ffffff",m=l.darkMode?.5:.2;return ae(u,l.themeColor,m)});return(u,m)=>{const w=fe,a=ue,s=he,f=pe;return x(),I("div",{class:"relative flex-center wh-full",style:ce({backgroundColor:d(t)})},[e(w,{dark:d(l).darkMode,class:"absolute left-48px top-24px z-3 text-20px","onUpdate:dark":d(l).setDarkMode},null,8,["dark","onUpdate:dark"]),e(f,{bordered:!1,size:"large",class:"z-4 !w-auto rounded-20px shadow-sm"},{default:n(()=>[v("div",io,[v("header",uo,[e(a,{class:"text-64px text-primary"}),e(s,{type:"primary",size:28},{default:n(()=>[b(U(d(_)),1)]),_:1})]),v("main",po,[v("h3",_o,U(d(o).label),1),v("div",fo,[e(re,{name:"fade-slide",mode:"out-in",appear:""},{default:n(()=>[(x(),T(de(d(o).component)))]),_:1})])])])]),_:1}),e(d(Ae),{"theme-color":d(c)},null,8,["theme-color"])],4)}}});export{Po as default};