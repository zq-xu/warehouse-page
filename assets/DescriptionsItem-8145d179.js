import{v as d,y as e,aM as L,A as C,B as k,E as V,G as F,d as j,H as G,J as D,d1 as H,c as B,L as I,M as q,bT as J,q as n}from"./index-b28eb342.js";import{u as K}from"./use-compitable-2499bb8f.js";import{g as N}from"./Space-ddb3c2dc.js";function O(t,p="default",l=[]){const{children:i}=t;if(i!==null&&typeof i=="object"&&!Array.isArray(i)){const b=i[p];if(typeof b=="function")return b()}return l}const E="DESCRIPTION_ITEM_FLAG";function W(t){return typeof t=="object"&&t&&!Array.isArray(t)?t.type&&t.type[E]:!1}const Q=d([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),L("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[d("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),C("left-label-placement",[e("descriptions-table-content",[d("> *",{verticalAlign:"top"})])]),C("left-label-align",[d("th",{textAlign:"left"})]),C("center-label-align",[d("th",{textAlign:"center"})]),C("right-label-align",[d("th",{textAlign:"right"})]),C("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[d("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[d("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[d("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[k("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),k("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),V(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),F(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),U=Object.assign(Object.assign({},D.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),oe=j({name:"Descriptions",props:U,setup(t){const{mergedClsPrefixRef:p,inlineThemeDisabled:l}=G(t),i=D("Descriptions","-descriptions",Q,H,t,p),b=B(()=>{const{size:s,bordered:h}=t,{common:{cubicBezierEaseInOut:u},self:{titleTextColor:r,thColor:$,thColorModal:f,thColorPopover:P,thTextColor:_,thFontWeight:T,tdTextColor:R,tdColor:o,tdColorModal:v,tdColorPopover:A,borderColor:a,borderColorModal:g,borderColorPopover:y,borderRadius:w,lineHeight:m,[I("fontSize",s)]:x,[I(h?"thPaddingBordered":"thPadding",s)]:S,[I(h?"tdPaddingBordered":"tdPadding",s)]:z}}=i.value;return{"--n-title-text-color":r,"--n-th-padding":S,"--n-td-padding":z,"--n-font-size":x,"--n-bezier":u,"--n-th-font-weight":T,"--n-line-height":m,"--n-th-text-color":_,"--n-td-text-color":R,"--n-th-color":$,"--n-th-color-modal":f,"--n-th-color-popover":P,"--n-td-color":o,"--n-td-color-modal":v,"--n-td-color-popover":A,"--n-border-radius":w,"--n-border-color":a,"--n-border-color-modal":g,"--n-border-color-popover":y}}),c=l?q("descriptions",B(()=>{let s="";const{size:h,bordered:u}=t;return u&&(s+="a"),s+=h[0],s}),b,t):void 0;return{mergedClsPrefix:p,cssVars:l?void 0:b,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,compitableColumn:K(t,["columns","column"]),inlineThemeDisabled:l}},render(){const t=this.$slots.default,p=t?J(t()):[];p.length;const{compitableColumn:l,labelPlacement:i,labelAlign:b,size:c,bordered:s,title:h,cssVars:u,mergedClsPrefix:r,separator:$,onRender:f}=this;f==null||f();const P=p.filter(o=>W(o)),_={span:0,row:[],secondRow:[],rows:[]},R=P.reduce((o,v,A)=>{const a=v.props||{},g=P.length-1===A,y=["label"in a?a.label:O(v,"label")],w=[O(v)],m=a.span||1,x=o.span;o.span+=m;const S=a.labelStyle||a["label-style"]||this.labelStyle,z=a.contentStyle||a["content-style"]||this.contentStyle;if(i==="left")s?o.row.push(n("th",{class:`${r}-descriptions-table-header`,colspan:1,style:S},y),n("td",{class:`${r}-descriptions-table-content`,colspan:g?(l-x)*2+1:m*2-1,style:z},w)):o.row.push(n("td",{class:`${r}-descriptions-table-content`,colspan:g?(l-x)*2:m*2},n("span",{class:`${r}-descriptions-table-content__label`,style:S},[...y,$&&n("span",{class:`${r}-descriptions-separator`},$)]),n("span",{class:`${r}-descriptions-table-content__content`,style:z},w)));else{const M=g?(l-x)*2:m*2;o.row.push(n("th",{class:`${r}-descriptions-table-header`,colspan:M,style:S},y)),o.secondRow.push(n("td",{class:`${r}-descriptions-table-content`,colspan:M,style:z},w))}return(o.span>=l||g)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),i!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},_).rows.map(o=>n("tr",{class:`${r}-descriptions-table-row`},o));return n("div",{style:u,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${i}-label-placement`,`${r}-descriptions--${b}-label-align`,`${r}-descriptions--${c}-size`,s&&`${r}-descriptions--bordered`]},h||this.$slots.header?n("div",{class:`${r}-descriptions-header`},h||N(this,"header")):null,n("div",{class:`${r}-descriptions-table-wrapper`},n("table",{class:`${r}-descriptions-table`},n("tbody",null,R))))}}),X={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},re=j({name:"DescriptionsItem",[E]:!0,props:X,render(){return null}});export{re as _,oe as a};
