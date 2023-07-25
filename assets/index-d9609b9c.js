import{_ as E}from"./count-to.vue_vue_type_script_setup_true_lang-d2a75911.js";import{D as q,bC as U,e as l,g as y,a as b,i as p,d as x,m as O,p as I,R as X,h as _,j as Z,o as ee,bD as te,c as w,v as ne,C as L,B as N,s as z,r as R,bE as D,as as h,av as $,aw as r,aB as o,au as f,aC as oe,ae as ie,bk as S,at as T,aA as ae,aI as re,aE as W,ax as k,az as se,ag as A,aQ as le,J as ce}from"./index-abdd351b.js";import{_ as B,a as P}from"./Grid-9e38cefb.js";import{f as de}from"./format-length-c9d165c6.js";import{u as me}from"./use-houdini-08895c60.js";import{_ as pe}from"./Tag-d7c56c8d.js";import{_ as ue}from"./DataTable-f31b3f0d.js";import{N as _e}from"./Space-b1d09008.js";import"./next-frame-once-7035a838.js";import"./Checkbox-63cc49b7.js";import"./use-merged-state-819b618f.js";import"./Popover-4ab62dc2.js";import"./Suffix-9dcbc97d.js";import"./get-adbc5cb4.js";import"./cssr-b0f85bf5.js";import"./use-compitable-92c58416.js";import"./Dropdown-7c020671.js";import"./Select-b44a3ca0.js";import"./Input-fea9007e.js";const fe=e=>{const{textColor3:n,infoColor:i,errorColor:a,successColor:t,warningColor:c,textColor1:d,textColor2:m,railColor:u,fontWeightStrong:s,fontSize:g}=e;return Object.assign(Object.assign({},U),{contentFontSize:g,titleFontWeight:s,circleBorder:`2px solid ${n}`,circleBorderInfo:`2px solid ${i}`,circleBorderError:`2px solid ${a}`,circleBorderSuccess:`2px solid ${t}`,circleBorderWarning:`2px solid ${c}`,iconColor:n,iconColorInfo:i,iconColorError:a,iconColorSuccess:t,iconColorWarning:c,titleTextColor:d,contentTextColor:m,metaTextColor:n,lineColor:u})},ge={name:"Timeline",common:q,self:fe},he=ge,j=1.25,xe=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${j};
`,[y("horizontal",`
 flex-direction: row;
 `,[b(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[y("dashed-line-type",[b(">",[l("timeline-item-timeline",[p("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),b(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[b(">",[p("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[p("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),y("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),y("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[b("&:last-child",[l("timeline-item-timeline",[p("line",`
 display: none;
 `)]),l("timeline-item-content",[p("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[p("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),p("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),p("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),y("dashed-line-type",[l("timeline-item-timeline",[p("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${j} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[p("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),p("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),p("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ve=Object.assign(Object.assign({},I.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),F=Z("n-timeline"),ye=x({name:"Timeline",props:ve,setup(e,{slots:n}){const{mergedClsPrefixRef:i}=O(e),a=I("Timeline","-timeline",xe,he,e,i);return X(F,{props:e,mergedThemeRef:a,mergedClsPrefixRef:i}),()=>{const{value:t}=i;return _("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},n)}}}),be={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ze=x({name:"TimelineItem",props:be,setup(e){const n=ee(F);n||te("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),me();const{inlineThemeDisabled:i}=O(),a=w(()=>{const{props:{size:c,iconSize:d},mergedThemeRef:m}=n,{type:u}=e,{self:{titleTextColor:s,contentTextColor:g,metaTextColor:v,lineColor:C,titleFontWeight:J,contentFontSize:M,[z("iconSize",c)]:V,[z("titleMargin",c)]:G,[z("titleFontSize",c)]:H,[z("circleBorder",u)]:K,[z("iconColor",u)]:Y},common:{cubicBezierEaseInOut:Q}}=m.value;return{"--n-bezier":Q,"--n-circle-border":K,"--n-icon-color":Y,"--n-content-font-size":M,"--n-content-text-color":g,"--n-line-color":C,"--n-meta-text-color":v,"--n-title-font-size":H,"--n-title-font-weight":J,"--n-title-margin":G,"--n-title-text-color":s,"--n-icon-size":de(d)||V}}),t=i?ne("timeline-item",w(()=>{const{props:{size:c,iconSize:d}}=n,{type:m}=e;return`${c[0]}${d||"a"}${m[0]}`}),a,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:i?void 0:a,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){const{mergedClsPrefix:e,color:n,onRender:i,$slots:a}=this;return i==null||i(),_("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},_("div",{class:`${e}-timeline-item-timeline`},_("div",{class:`${e}-timeline-item-timeline__line`}),L(a.icon,t=>t?_("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:n}},t):_("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:n}}))),_("div",{class:`${e}-timeline-item-content`},L(a.header,t=>t||this.title?_("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),_("div",{class:`${e}-timeline-item-content__content`},N(a.default,()=>[this.content])),_("div",{class:`${e}-timeline-item-content__meta`},N(a.footer,()=>[this.time]))))}}),Ce={class:"w-full h-360px py-12px"},ke=f("h3",{class:"text-16px font-bold"},"Dashboard",-1),$e=f("p",{class:"text-#aaa"},"Overview Of Lasted Month",-1),we={class:"pt-32px text-24px font-bold"},Se=f("p",{class:"text-#aaa"},"Current Month Earnings",-1),Te={class:"pt-32px text-24px font-bold"},Be=f("p",{class:"text-#aaa"},"Current Month Sales",-1),Pe=x({name:"DashboardAnalysisTopCard",__name:"index",setup(e){const n=R({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["下载量","注册数"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","24:00"]}],yAxis:[{type:"value"}],series:[{color:"#8e9dff",name:"下载量",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#8e9dff"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[4623,6145,6268,6411,1890,4251,2978,3880,3606,4311]},{color:"#26deca",name:"注册数",type:"line",smooth:!0,stack:"Total",areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:.25,color:"#26deca"},{offset:1,color:"#fff"}]}},emphasis:{focus:"series"},data:[2208,2016,2916,4512,8281,2008,1963,2367,2956,678]}]}),{domRef:i}=D(n),a=R({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center",itemStyle:{borderWidth:0}},series:[{color:["#5da8ff","#8e9dff","#fedc69","#26deca"],name:"时间安排",type:"pie",radius:["45%","75%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:1},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12"}},labelLine:{show:!1},data:[{value:20,name:"学习"},{value:10,name:"娱乐"},{value:30,name:"工作"},{value:40,name:"休息"}]}]}),{domRef:t}=D(a);return(c,d)=>{const m=E,u=ie,s=S,g=B,v=P;return h(),$(v,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:r(()=>[o(g,{span:"0:24 640:24 1024:6"},{default:r(()=>[o(s,{bordered:!1,class:"rounded-8px shadow-sm"},{default:r(()=>[f("div",Ce,[ke,$e,f("h3",we,[o(m,{prefix:"$","start-value":0,"end-value":7754})]),Se,f("h3",Te,[o(m,{"start-value":0,"end-value":1234})]),Be,o(u,{class:"mt-24px whitespace-pre-wrap",type:"primary"},{default:r(()=>[oe("Last Month Summary")]),_:1})])]),_:1})]),_:1}),o(g,{span:"0:24 640:24 1024:10"},{default:r(()=>[o(s,{bordered:!1,class:"rounded-8px shadow-sm"},{default:r(()=>[f("div",{ref_key:"lineRef",ref:i,class:"w-full h-360px"},null,512)]),_:1})]),_:1}),o(g,{span:"0:24 640:24 1024:8"},{default:r(()=>[o(s,{bordered:!1,class:"rounded-8px shadow-sm"},{default:r(()=>[f("div",{ref_key:"pieRef",ref:t,class:"w-full h-360px"},null,512)]),_:1})]),_:1})]),_:1})}}}),Le=x({__name:"gradient-bg",props:{startColor:{default:"#56cdf3"},endColor:{default:"#719de3"}},setup(e){const n=e,i=w(()=>`linear-gradient(to bottom right, ${n.startColor}, ${n.endColor})`);return(a,t)=>(h(),T("div",{class:"p-16px rounded-8px text-white",style:re({backgroundImage:i.value})},[ae(a.$slots,"default")],4))}}),Ne={class:"text-16px"},Re={class:"flex justify-between pt-12px"},De=x({name:"DashboardAnalysisDataCard",__name:"index",setup(e){const n=[{id:"visit",title:"访问量",value:1e6,unit:"",colors:["#ec4786","#b955a4"],icon:"ant-design:bar-chart-outlined"},{id:"amount",title:"成交额",value:234567.89,unit:"$",colors:["#865ec0","#5144b4"],icon:"ant-design:money-collect-outlined"},{id:"download",title:"下载数",value:666666,unit:"",colors:["#56cdf3","#719de3"],icon:"carbon:document-download"},{id:"trade",title:"成交数",value:999999,unit:"",colors:["#fcbc25","#f68057"],icon:"ant-design:trademark-circle-outlined"}];return(i,a)=>{const t=le,c=E,d=B,m=P,u=S;return h(),$(u,{bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:r(()=>[o(m,{cols:"s:1 m:2 l:4",responsive:"screen","x-gap":16,"y-gap":16},{default:r(()=>[(h(),T(A,null,W(n,s=>o(d,{key:s.id},{default:r(()=>[o(k(Le),{class:"h-100px","start-color":s.colors[0],"end-color":s.colors[1]},{default:r(()=>[f("h3",Ne,se(s.title),1),f("div",Re,[o(t,{icon:s.icon,class:"text-32px"},null,8,["icon"]),o(c,{prefix:s.unit,"start-value":1,"end-value":s.value,class:"text-30px text-white dark:text-dark"},null,8,["prefix","end-value"])])]),_:2},1032,["start-color","end-color"])]),_:2},1024)),64))]),_:1})]),_:1})}}}),je=x({name:"DashboardAnalysisBottomPart",__name:"index",setup(e){const n=[{type:"default",title:"啊",content:"",time:"2021-10-10 20:46"},{type:"success",title:"成功",content:"哪里成功",time:"2021-10-10 20:46"},{type:"error",title:"错误",content:"哪里错误",time:"2021-10-10 20:46"},{type:"warning",title:"警告",content:"哪里警告",time:"2021-10-10 20:46"},{type:"info",title:"信息",content:"是的",time:"2021-10-10 20:46"}],i=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"Tags",key:"tags",render(t){return t.tags.map(d=>_(pe,{style:{marginRight:"6px"},type:"info"},{default:()=>d}))}}],a=[{key:0,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:1,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:2,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]},{key:3,name:"Warehouse",age:25,address:"China Shenzhen",tags:["handsome","programmer"]},{key:4,name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:5,name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["wow"]},{key:6,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];return(t,c)=>{const d=ze,m=ye,u=S,s=B,g=ue,v=P;return h(),$(v,{"x-gap":16,"y-gap":16,"item-responsive":!0},{default:r(()=>[o(s,{span:"0:24 640:24 1024:8"},{default:r(()=>[o(u,{title:"时间线",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:r(()=>[o(m,null,{default:r(()=>[(h(),T(A,null,W(n,C=>o(d,ce({key:C.type},C),null,16)),64))]),_:1})]),_:1})]),_:1}),o(s,{span:"0:24 640:24 1024:16"},{default:r(()=>[o(u,{title:"表格",bordered:!1,class:"h-full rounded-8px shadow-sm"},{default:r(()=>[o(g,{size:"small",columns:i,data:a})]),_:1})]),_:1})]),_:1})}}}),tt=x({__name:"index",setup(e){return(n,i)=>{const a=_e;return h(),$(a,{vertical:!0,size:16},{default:r(()=>[o(k(Pe)),o(k(De)),o(k(je))]),_:1})}}});export{tt as default};
