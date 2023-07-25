import{d as A,r as k,o as X,bI as H,c as z,m as Y,O as fe,z as be,w as me,A as ge,bJ as ve,R,bK as pe,bL as we,bM as ye,ab as j,aO as U,h as s,bN as ze,I as K,J as $e,an as V,ac as Se,a as n,b as O,e as d,g as p,i as x,bx as Be,H as Ce,p as q,t as L,bO as xe,v as ke,bP as Ee,L as Re,bQ as Oe,ad as B,bR as Te,bD as Me,bS as Fe}from"./index-d54e27e5.js";import{u as N}from"./use-merged-state-3e142966.js";import{f as W}from"./format-length-c9d165c6.js";const Ie=A({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){const t=k(!!e.show),r=k(null),f=X(H);let c=0,m="",l=null;const g=k(!1),b=k(!1),w=z(()=>e.placement==="top"||e.placement==="bottom"),{mergedClsPrefixRef:u,mergedRtlRef:T}=Y(e),M=fe("Drawer",T,u),F=o=>{b.value=!0,c=w.value?o.clientY:o.clientX,m=document.body.style.cursor,document.body.style.cursor=w.value?"ns-resize":"ew-resize",document.body.addEventListener("mousemove",C),document.body.addEventListener("mouseleave",v),document.body.addEventListener("mouseup",y)},I=()=>{l!==null&&(window.clearTimeout(l),l=null),b.value?g.value=!0:l=window.setTimeout(()=>{g.value=!0},300)},P=()=>{l!==null&&(window.clearTimeout(l),l=null),g.value=!1},{doUpdateHeight:D,doUpdateWidth:_}=f,C=o=>{var h,E;if(b.value)if(w.value){let $=((h=r.value)===null||h===void 0?void 0:h.offsetHeight)||0;const S=c-o.clientY;$+=e.placement==="bottom"?S:-S,D($),c=o.clientY}else{let $=((E=r.value)===null||E===void 0?void 0:E.offsetWidth)||0;const S=c-o.clientX;$+=e.placement==="right"?S:-S,_($),c=o.clientX}},y=()=>{b.value&&(c=0,b.value=!1,document.body.style.cursor=m,document.body.removeEventListener("mousemove",C),document.body.removeEventListener("mouseup",y),document.body.removeEventListener("mouseleave",v))},v=y;be(()=>{e.show&&(t.value=!0)}),me(()=>e.show,o=>{o||y()}),ge(()=>{y()});const i=z(()=>{const{show:o}=e,h=[[U,o]];return e.showMask||h.push([Se,e.onClickoutside,void 0,{capture:!0}]),h});function a(){var o;t.value=!1,(o=e.onAfterLeave)===null||o===void 0||o.call(e)}return ve(z(()=>e.blockScroll&&t.value)),R(pe,r),R(we,null),R(ye,null),{bodyRef:r,rtlEnabled:M,mergedClsPrefix:f.mergedClsPrefixRef,isMounted:f.isMountedRef,mergedTheme:f.mergedThemeRef,displayed:t,transitionName:z(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[e.placement]),handleAfterLeave:a,bodyDirectives:i,handleMousedownResizeTrigger:F,handleMouseenterResizeTrigger:I,handleMouseleaveResizeTrigger:P,isDragging:b,isHoverOnResizeTrigger:g}},render(){const{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective==="show"||this.displayed||this.show?j(s("div",{role:"none"},s(ze,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>s(K,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>j(s("div",$e(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?s("div",{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?s("div",{class:`${t}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},e):s(V,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${t}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[U,this.displayDirective==="if"||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Pe,cubicBezierEaseOut:De}=O;function _e({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-right"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Pe}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${De}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:je,cubicBezierEaseOut:Ae}=O;function He({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-left"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${je}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Ae}`}),n(`&.${r}-transition-enter-to`,{transform:"translateX(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateX(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateX(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:Ue,cubicBezierEaseOut:Le}=O;function Ne({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-top"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${Ue}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Le}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(-100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:We,cubicBezierEaseOut:Xe}=O;function Ye({duration:e="0.3s",leaveDuration:t="0.2s",name:r="slide-in-from-bottom"}={}){return[n(`&.${r}-transition-leave-active`,{transition:`transform ${t} ${We}`}),n(`&.${r}-transition-enter-active`,{transition:`transform ${e} ${Xe}`}),n(`&.${r}-transition-enter-to`,{transform:"translateY(0)"}),n(`&.${r}-transition-enter-from`,{transform:"translateY(100%)"}),n(`&.${r}-transition-leave-from`,{transform:"translateY(0)"}),n(`&.${r}-transition-leave-to`,{transform:"translateY(100%)"})]}const Ke=n([d("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[_e(),He(),Ne(),Ye(),p("unselectable",`
 user-select: none; 
 -webkit-user-select: none;
 `),p("native-scrollbar",[d("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),x("resize-trigger",`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[p("hover",`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),d("drawer-content-wrapper",`
 box-sizing: border-box;
 `),d("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[p("native-scrollbar",[d("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),d("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),d("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),d("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[x("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),p("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `,[x("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),p("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `,[x("resize-trigger",`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),p("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `,[x("resize-trigger",`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),p("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `,[x("resize-trigger",`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),n("body",[n(">",[d("drawer-container",{position:"fixed"})])]),d("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[n("> *",{pointerEvents:"all"})]),d("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[p("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),Be({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]),Ve=Object.assign(Object.assign({},q.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),Ze=A({name:"Drawer",inheritAttrs:!1,props:Ve,setup(e){const{mergedClsPrefixRef:t,namespaceRef:r,inlineThemeDisabled:f}=Y(e),c=Ce(),m=q("Drawer","-drawer",Ke,Oe,e,t),l=k(e.defaultWidth),g=k(e.defaultHeight),b=N(L(e,"width"),l),w=N(L(e,"height"),g),u=z(()=>{const{placement:i}=e;return i==="top"||i==="bottom"?"":W(b.value)}),T=z(()=>{const{placement:i}=e;return i==="left"||i==="right"?"":W(w.value)}),M=i=>{const{onUpdateWidth:a,"onUpdate:width":o}=e;a&&B(a,i),o&&B(o,i),l.value=i},F=i=>{const{onUpdateHeight:a,"onUpdate:width":o}=e;a&&B(a,i),o&&B(o,i),g.value=i},I=z(()=>[{width:u.value,height:T.value},e.drawerStyle||""]);function P(i){const{onMaskClick:a,maskClosable:o}=e;o&&C(!1),a&&a(i)}const D=xe();function _(i){var a;(a=e.onEsc)===null||a===void 0||a.call(e),e.show&&e.closeOnEsc&&Te(i)&&!D.value&&C(!1)}function C(i){const{onHide:a,onUpdateShow:o,"onUpdate:show":h}=e;o&&B(o,i),h&&B(h,i),a&&!i&&B(a,i)}R(H,{isMountedRef:c,mergedThemeRef:m,mergedClsPrefixRef:t,doUpdateShow:C,doUpdateHeight:F,doUpdateWidth:M});const y=z(()=>{const{common:{cubicBezierEaseInOut:i,cubicBezierEaseIn:a,cubicBezierEaseOut:o},self:{color:h,textColor:E,boxShadow:$,lineHeight:S,headerPadding:J,footerPadding:Q,bodyPadding:G,titleFontSize:Z,titleTextColor:ee,titleFontWeight:te,headerBorderBottom:re,footerBorderTop:oe,closeIconColor:ne,closeIconColorHover:ie,closeIconColorPressed:se,closeColorHover:ae,closeColorPressed:le,closeIconSize:de,closeSize:ce,closeBorderRadius:ue,resizableTriggerColorHover:he}}=m.value;return{"--n-line-height":S,"--n-color":h,"--n-text-color":E,"--n-box-shadow":$,"--n-bezier":i,"--n-bezier-out":o,"--n-bezier-in":a,"--n-header-padding":J,"--n-body-padding":G,"--n-footer-padding":Q,"--n-title-text-color":ee,"--n-title-font-size":Z,"--n-title-font-weight":te,"--n-header-border-bottom":re,"--n-footer-border-top":oe,"--n-close-icon-color":ne,"--n-close-icon-color-hover":ie,"--n-close-icon-color-pressed":se,"--n-close-size":ce,"--n-close-color-hover":ae,"--n-close-color-pressed":le,"--n-close-icon-size":de,"--n-close-border-radius":ue,"--n-resize-trigger-color-hover":he}}),v=f?ke("drawer",void 0,y,e):void 0;return{mergedClsPrefix:t,namespace:r,mergedBodyStyle:I,handleMaskClick:P,handleEsc:_,mergedTheme:m,cssVars:f?void 0:y,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender,isMounted:c}},render(){const{mergedClsPrefix:e}=this;return s(Re,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),j(s("div",{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?s(K,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?s("div",{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask==="transparent"&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,s(Ie,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Ee,{zIndex:this.zIndex,enabled:this.show}]])}})}}),qe={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},et=A({name:"DrawerContent",props:qe,setup(){const e=X(H,null);e||Me("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:t}=e;function r(){t(!1)}return{handleCloseClick:r,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{title:e,mergedClsPrefix:t,nativeScrollbar:r,mergedTheme:f,bodyStyle:c,bodyContentStyle:m,headerStyle:l,footerStyle:g,scrollbarProps:b,closable:w,$slots:u}=this;return s("div",{role:"none",class:[`${t}-drawer-content`,r&&`${t}-drawer-content--native-scrollbar`]},u.header||e||w?s("div",{class:`${t}-drawer-header`,style:l,role:"none"},s("div",{class:`${t}-drawer-header__main`,role:"heading","aria-level":"1"},u.header!==void 0?u.header():e),w&&s(Fe,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,r?s("div",{class:`${t}-drawer-body`,style:c,role:"none"},s("div",{class:`${t}-drawer-body-content-wrapper`,style:m,role:"none"},u)):s(V,Object.assign({themeOverrides:f.peerOverrides.Scrollbar,theme:f.peers.Scrollbar},b,{class:`${t}-drawer-body`,contentClass:`${t}-drawer-body-content-wrapper`,contentStyle:m}),u),u.footer?s("div",{class:`${t}-drawer-footer`,style:g,role:"none"},u.footer()):null)}});export{et as _,Ze as a};
