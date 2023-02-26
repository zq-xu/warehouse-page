import{d as w,o,a as s,f as e,w as r,F as c,aV as y,aT as b,e as k,b as q,m as S,bk as E,aU as n,u as i,aR as P,b4 as D,as as I,bv as W}from"./index-aebf9257.js";import{u as C}from"./useLoading-b7c7bf96.js";import{N}from"./Space-f30a6a21.js";import{_ as T,a as v}from"./Grid-ac1c94bb.js";import"./next-frame-once-7035a838.js";const B={key:0,class:"pb-16px"},V=P("p",{class:"pb-16px"},"按钮有加载状态。",-1),A=w({__name:"index",setup(z){const{loading:g,startLoading:f,endLoading:m}=C(),_=[{id:0,label:"基础",buttons:[{id:0,props:{},label:"Default"},{id:1,props:{type:"tertiary"},label:"Tertiary"},{id:2,props:{type:"primary"},label:"Primary"},{id:3,props:{type:"info"},label:"Info"},{id:4,props:{type:"success"},label:"Success"},{id:5,props:{type:"warning"},label:"Warning"},{id:6,props:{type:"error"},label:"Error"}],desc:"按钮的 type 分别为 default、primary、info、success、warning 和 error。"},{id:1,label:"次要按钮",buttons:[{id:0,props:{strong:!0,secondary:!0},label:"Default"},{id:1,props:{strong:!0,secondary:!0,type:"tertiary"},label:"Tertiary"},{id:2,props:{strong:!0,secondary:!0,type:"primary"},label:"Primary"},{id:3,props:{strong:!0,secondary:!0,type:"info"},label:"Info"},{id:4,props:{strong:!0,secondary:!0,type:"success"},label:"Success"},{id:5,props:{strong:!0,secondary:!0,type:"warning"},label:"Warning"},{id:6,props:{strong:!0,secondary:!0,type:"error"},label:"Error"},{id:7,props:{strong:!0,secondary:!0,round:!0},label:"Default"},{id:8,props:{strong:!0,secondary:!0,round:!0,type:"tertiary"},label:"Tertiary"},{id:9,props:{strong:!0,secondary:!0,round:!0,type:"primary"},label:"Primary"},{id:10,props:{strong:!0,secondary:!0,round:!0,type:"info"},label:"Info"},{id:11,props:{strong:!0,secondary:!0,round:!0,type:"success"},label:"Success"},{id:12,props:{strong:!0,secondary:!0,round:!0,type:"warning"},label:"Warning"},{id:13,props:{strong:!0,secondary:!0,round:!0,type:"error"},label:"Error"}]},{id:2,label:"次次要按钮",buttons:[{id:0,props:{tertiary:!0},label:"Default"},{id:1,props:{tertiary:!0,type:"primary"},label:"Primary"},{id:2,props:{tertiary:!0,type:"info"},label:"Info"},{id:3,props:{tertiary:!0,type:"success"},label:"Success"},{id:4,props:{tertiary:!0,type:"warning"},label:"Warning"},{id:5,props:{tertiary:!0,type:"error"},label:"Error"},{id:6,props:{tertiary:!0,round:!0},label:"Default"},{id:7,props:{tertiary:!0,round:!0,type:"primary"},label:"Primary"},{id:8,props:{tertiary:!0,round:!0,type:"info"},label:"Info"},{id:9,props:{tertiary:!0,round:!0,type:"success"},label:"Success"},{id:10,props:{tertiary:!0,round:!0,type:"warning"},label:"Warning"},{id:11,props:{tertiary:!0,round:!0,type:"error"},label:"Error"}]},{id:3,label:"次次次要按钮",buttons:[{id:0,props:{quaternary:!0},label:"Default"},{id:1,props:{quaternary:!0,type:"primary"},label:"Primary"},{id:2,props:{quaternary:!0,type:"info"},label:"Info"},{id:3,props:{quaternary:!0,type:"success"},label:"Success"},{id:4,props:{quaternary:!0,type:"warning"},label:"Warning"},{id:5,props:{quaternary:!0,type:"error"},label:"Error"},{id:6,props:{quaternary:!0,round:!0},label:"Default"},{id:7,props:{quaternary:!0,round:!0,type:"primary"},label:"Primary"},{id:8,props:{quaternary:!0,round:!0,type:"info"},label:"Info"},{id:9,props:{quaternary:!0,round:!0,type:"success"},label:"Success"},{id:10,props:{quaternary:!0,round:!0,type:"warning"},label:"Warning"},{id:11,props:{quaternary:!0,round:!0,type:"error"},label:"Error"}]},{id:4,label:"虚线按钮",buttons:[{id:0,props:{dashed:!0},label:"Default"},{id:1,props:{dashed:!0,type:"tertiary"},label:"Tertiary"},{id:2,props:{dashed:!0,type:"primary"},label:"Primary"},{id:3,props:{dashed:!0,type:"info"},label:"Info"},{id:4,props:{dashed:!0,type:"success"},label:"Success"},{id:5,props:{dashed:!0,type:"warning"},label:"Warning"},{id:6,props:{dashed:!0,type:"error"},label:"Error"}]},{id:5,label:"尺寸",buttons:[{id:0,props:{size:"tiny",strong:!0},label:"小小"},{id:1,props:{size:"small",strong:!0},label:"小"},{id:2,props:{size:"medium",strong:!0},label:"不小"},{id:3,props:{size:"large",strong:!0},label:"不不小"}]},{id:6,label:"文本按钮",buttons:[{id:0,props:{text:!0},label:"那车头依然吐着烟",icon:"mdi:train"}]},{id:7,label:"自定义标签按钮",buttons:[{id:0,props:{text:!0,tag:"a",href:"https://github.com/honghuangdc/warehouse-admin",target:"_blank",type:"primary"},label:"warehouse-admin"}],desc:"你可以把按钮渲染成不同的标签，比如 a标签 。"},{id:8,label:"按钮禁用",buttons:[{id:0,props:{disabled:!0},label:"不许点"}],desc:"按钮可以被禁用"},{id:9,label:"图标按钮",buttons:[{id:0,props:{secondary:!0,strong:!0},label:"+100元",icon:"mdi:cash-100"},{id:0,props:{iconPlacement:"right",secondary:!0,strong:!0},label:"+100元",icon:"mdi:cash-100"}],desc:"在按钮上使用图标。"},{id:10,label:"不同形状按钮",buttons:[{id:0,props:{circle:!0},icon:"mdi:cash-100"},{id:1,props:{round:!0},label:"圆角"},{id:2,props:{},label:"方"}],desc:"按钮拥有不同的形状。"},{id:11,label:"透明背景按钮",buttons:[{id:0,props:{ghost:!0},label:"Default"},{id:1,props:{ghost:!0,type:"tertiary"},label:"Tertiary"},{id:2,props:{ghost:!0,type:"primary"},label:"Primary"},{id:3,props:{ghost:!0,type:"info"},label:"Info"},{id:4,props:{ghost:!0,type:"success"},label:"Success"},{id:5,props:{ghost:!0,type:"warning"},label:"Warning"},{id:6,props:{ghost:!0,type:"error"},label:"Error"}],desc:"Ghost 按钮有透明的背景。"},{id:12,label:"自定义颜色",buttons:[{id:0,props:{color:"#8a2be2"},label:"#8a2be2",icon:"ic:baseline-color-lens"},{id:1,props:{color:"#ff69b4"},label:"#ff69b4",icon:"ic:baseline-color-lens"},{id:2,props:{color:"#8a2be2",ghost:!0},label:"#8a2be2",icon:"ic:baseline-color-lens"},{id:3,props:{color:"#ff69b4",ghost:!0},label:"#ff69b4",icon:"ic:baseline-color-lens"},{id:4,props:{color:"#8a2be2",text:!0},label:"#8a2be2",icon:"ic:baseline-color-lens"},{id:5,props:{color:"#ff69b4",text:!0},label:"#ff69b4",icon:"ic:baseline-color-lens"}],desc:"这两个颜色看起来像毒蘑菇。"}];return(L,$)=>{const h=D,l=I,u=N,p=W,d=T,x=v;return o(),s("div",null,[e(p,{title:"按钮",class:"h-full shadow-sm rounded-16px"},{default:r(()=>[e(x,{cols:"s:1 m:2",responsive:"screen","x-gap":16,"y-gap":16},{default:r(()=>[(o(),s(c,null,y(_,a=>e(d,{key:a.id},{default:r(()=>[e(p,{title:a.label,class:"min-h-180px"},{default:r(()=>[a.desc?(o(),s("p",B,b(a.desc),1)):k("",!0),e(u,null,{default:r(()=>[(o(!0),s(c,null,y(a.buttons,t=>(o(),q(l,S({key:t.id},t.props,{style:`--icon-margin: ${t.props.circle?0:6}px`}),E({default:r(()=>[n(" "+b(t.label),1)]),_:2},[t.icon?{name:"icon",fn:r(()=>[e(h,{icon:t.icon},null,8,["icon"])]),key:"0"}:void 0]),1040,["style"]))),128))]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024)),64)),e(d,{class:"h-180px"},{default:r(()=>[e(p,{title:"加载中",class:"h-full"},{default:r(()=>[V,e(u,null,{default:r(()=>[e(l,{loading:i(g),type:"primary",onClick:i(f)},{default:r(()=>[n("开始加载")]),_:1},8,["loading","onClick"]),e(l,{onClick:i(m)},{default:r(()=>[n("取消加载")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}});export{A as default};
