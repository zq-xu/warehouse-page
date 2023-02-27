import{_ as O}from"./CountTo.vue_vue_type_script_setup_true_lang-a2795a0c.js";import{W as q,bJ as Q,y as s,A as y,v as b,B as u,d as f,H as W,J as j,a6 as X,q as _,D as Z,I as ee,aG as te,c as S,L as z,M as ne,U as P,S as L,g as N,bK as R,o as x,b as $,w as l,f as r,aR as m,aU as oe,as as ie,bv as I,a as w,r as re,n as ae,u as k,F as A,aV as E,aT as se,b4 as le,m as ce}from"./index-c504f951.js";import{_ as T,a as B}from"./Grid-1713c493.js";import{f as me}from"./format-length-c9d165c6.js";import{u as de}from"./use-houdini-77672fff.js";import{_ as pe}from"./Tag-4accb8f6.js";import{_ as ue}from"./DataTable-48ae6045.js";import{N as _e}from"./Space-45b7edb9.js";import"./next-frame-once-7035a838.js";import"./Checkbox-dc3673ea.js";import"./use-merged-state-184d082d.js";import"./Popover-1b93b8ee.js";import"./Suffix-4a685509.js";import"./get-3eee0bd1.js";import"./cssr-70ddafe0.js";import"./use-compitable-3c06317e.js";import"./Dropdown-5ad302b9.js";import"./Select-01f4371d.js";import"./Input-a8459934.js";const fe=e=>{const{textColor3:n,infoColor:o,errorColor:i,successColor:t,warningColor:c,textColor1:d,textColor2:p,railColor:a,fontWeightStrong:g,fontSize:h}=e;return Object.assign(Object.assign({},Q),{contentFontSize:h,titleFontWeight:g,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${o}`,circleBorderError:`2px solid ${i}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${c}`,iconColor:n,iconColorInfo:o,iconColorError:i,iconColorSuccess:t,iconColorWarning:c,titleTextColor:d,contentTextColor:p,metaTextColor:n,lineColor:a})},ge={name:"Timeline",common:q,self:fe},he=ge,D=1.25,xe=s("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${D};
`,[y("horizontal",`
 flex-direction: row;
 `,[b(">",[s("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[y("dashed-line-type",[b(">",[s("timeline-item-timeline",[u("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),b(">",[s("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[b(">",[u("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),s("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[u("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),y("right-placement",[s("timeline-item",[s("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),s("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),y("left-placement",[s("timeline-item",[s("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),s("timeline-item-timeline",`
 left: 0;
 `)])]),s("timeline-item",`
 position: relative;
 `,[b("&:last-child",[s("timeline-item-timeline",[u("line",`
 display: none;
 `)]),s("timeline-item-content",[u("meta",`
 margin-bottom: 0;
 `)])]),s("timeline-item-content",[u("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),u("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),u("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),y("dashed-line-type",[s("timeline-item-timeline",[u("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),s("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${D} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[u("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),u("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),u("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ve=Object.assign(Object.assign({},j.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),F=Z("n-timeline"),ye=f({name:"Timeline",props:ve,setup(e,{slots:n}){const{mergedClsPrefixRef:o}=W(e),i=j("Timeline","-timeline",xe,he,e,o);return X(F,{props:e,mergedThemeRef:i,mergedClsPrefixRef:o}),()=>{const{value:t}=o;return _("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},n)}}}),be={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ze=f({name:"TimelineItem",props:be,setup(e){const n=ee(F);n||te("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),de();const{inlineThemeDisabled:o}=W(),i=S(()=>{const{props:{size:c,iconSize:d},mergedThemeRef:p}=n,{type:a}=e,{self:{titleTextColor:g,contentTextColor:h,metaTextColor:v,lineColor:C,titleFontWeight:J,contentFontSize:M,[z("iconSize",c)]:V,[z("titleMargin",c)]:G,[z("titleFontSize",c)]:H,[z("circleBorder",a)]:K,[z("iconColor",a)]:U},common:{cubicBezierEaseInOut:Y}}=p.value;return{"--n-bezier":Y,"--n-circle-border":K,"--n-icon-color":U,"--n-content-font-size":M,"--n-content-text-color":h,"--n-line-color":C,"--n-meta-text-color":v,"--n-title-font-size":H,"--n-title-font-weight":J,"--n-title-margin":G,"--n-title-text-color":g,"--n-icon-size":me(d)||V}}),t=o?ne("timeline-item",S(()=>{const{props:{size:c,iconSize:d}}=n,{type:p}=e;return`${c[0]}${d||"a"}${p[0]}`}),i,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:o?void 0:i,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:o,$slots:i}=this;return o==null||o(),_("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},_("div",{class:`${e}-timeline-item-timeline`},_("div",{class:`${e}-timeline-item-timeline__line`}),P(i.icon,t=>t?_("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},t):_("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),_("div",{class:`${e}-timeline-item-content`},P(i.header,t=>t||this.title?_("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),_("div",{class:`${e}-timeline-item-content__content`},L(i.default,()=>[this.content])),_("div",{class:`${e}-timeline-item-content__meta`},L(i.footer,()=>[this.time]))))}}),ke={class:"flex w-full h-360px"},Ce={class:"w-200px h-full py-12px"},$e=m("h3",{class:"text-16px font-bold"},"Dashboard",-1),Se=m("p",{class:"text-[#aaa]"},"Overview Of Lasted Month",-1),we={class:"pt-36px text-24px font-bold"},Te=m("p",{class:"text-[#aaa]"},"Current Month Earnings",-1),Be={class:"pt-36px text-24px font-bold"},Pe=m("p",{class:"text-[#aaa]"},"Current Month Sales",-1),Le={class:"flex-1-hidden h-full"},Ne=f({name:"DashboardAnalysisTopCard"}),Re=f({...Ne,setup(e){const n=N({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["下载量","注册数"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"]}],yAxis:[{type:"value"}],series:[{color:"#8e9dff",name:"下载量",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[4623,6145,6268,6411,1890,4251,2978,3880,3606,4311]},{color:"#26deca",name:"注册数",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#26deca"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[2208,2016,2916,4512,8281,2008,1963,2367,2956,678]}]}),{domRef:o}=R(n),i=N({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca"],name:"时间安排",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12"}},labelLine:{show:!1},data:[{value:20,name:"学习"},{value:10,name:"娱乐"},{value:30,name:"工作"},{value:40,name:"休息"}]}]}),{domRef:t}=R(i);return(c,d)=>{const p=O,a=ie,g=I,h=T,v=B;return x(),$(v,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:l(()=>[r(h,{span:"0:24 640:24 1024:16"},{default:l(()=>[r(g,{bordered:!1,class:"rounded-16px shadow-sm"},{default:l(()=>[m("div",ke,[m("div",Ce,[$e,Se,m("h3",we,[r(p,{prefix:"$","start-value":0,"end-value":7754})]),Te,m("h3",Be,[r(p,{"start-value":0,"end-value":1234})]),Pe,r(a,{class:"mt-24px",type:"primary"},{default:l(()=>[oe("Last Month Summary")]),_:1})]),m("div",Le,[m("div",{ref_key:"lineRef",ref:o,class:"wh-full"},null,512)])])]),_:1})]),_:1}),r(h,{span:"0:24 640:24 1024:8"},{default:l(()=>[r(g,{bordered:!1,class:"rounded-16px shadow-sm"},{default:l(()=>[m("div",{ref_key:"pieRef",ref:t,class:"w-full h-360px"},null,512)]),_:1})]),_:1})]),_:1})}}}),De=f({__name:"GradientBg",props:{startColor:{default:"#56cdf3"},endColor:{default:"#719de3"}},setup(e){const n=e,o=S(()=>`linear-gradient(to bottom right, ${n.startColor}, ${n.endColor})`);return(i,t)=>(x(),w("div",{class:"p-16px rounded-16px text-white",style:ae({backgroundImage:k(o)})},[re(i.$slots,"default")],4))}}),Oe={class:"text-16px"},We={class:"flex justify-between pt-12px"},je=f({name:"DashboardAnalysisDataCard"}),Ie=f({...je,setup(e){const n=[{id:"visit",title:"访问量",value:1e6,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"成交额",value:234567.89,unit:"$",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"下载数",value:666666,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"成交数",value:999999,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}];return(o,i)=>{const t=le,c=O,d=T,p=B;return x(),$(p,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:l(()=>[(x(),w(A,null,E(n,a=>r(d,{key:a.id},{default:l(()=>[r(k(De),{class:"h-100px","start-color":a.colors[0],"end-color":a.colors[1]},{default:l(()=>[m("h3",Oe,se(a.title),1),m("div",We,[r(t,{icon:a.icon,class:"text-32px"},null,8,["icon"]),r(c,{prefix:a.unit,"start-value":1,"end-value":a.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})}}}),Ae=f({name:"DashboardAnalysisBottomPart"}),Ee=f({...Ae,setup(e){const n=[{type:"default",title:"啊",content:"",time:"2021-10-10 20:46"},{type:"success",title:"成功",content:"哪里成功",time:"2021-10-10 20:46"},{type:"error",title:"错误",content:"哪里错误",time:"2021-10-10 20:46"},{type:"warning",title:"警告",content:"哪里警告",time:"2021-10-10 20:46"},{type:"info",title:"信息",content:"是的",time:"2021-10-10 20:46"}],o=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(t){return t.tags.map(d=>_(pe,{style:{marginRight:"6px"},type:"info"},{default:()=>d}))}}],i=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:3,name:"Warehouse",age:25,address:"China Shenzhen",tags:["handsome","programmer"]},{key:4,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:5,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:6,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];return(t,c)=>{const d=ze,p=ye,a=I,g=T,h=ue,v=B;return x(),$(v,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:l(()=>[r(g,{span:"0:24 640:24 1024:8"},{default:l(()=>[r(a,{title:"时间线",bordered:!1,class:"rounded-16px shadow-sm"},{default:l(()=>[r(p,null,{default:l(()=>[(x(),w(A,null,E(n,C=>r(d,ce({key:C.type},C),null,16)),64))]),_:1})]),_:1})]),_:1}),r(g,{span:"0:24 640:24 1024:16"},{default:l(()=>[r(a,{title:"表格",bordered:!1,class:"rounded-16px shadow-sm"},{default:l(()=>[r(h,{size:"small",columns:o,data:i})]),_:1})]),_:1})]),_:1})}}}),at=f({__name:"index",setup(e){return(n,o)=>{const i=_e;return x(),$(i,{vertical:!0,size:16},{default:l(()=>[r(k(Re)),r(k(Ie)),r(k(Ee))]),_:1})}}});export{at as default};
