import{d as re,q as u,c5 as Me,W as Se,c6 as Te,c7 as De,v as Ce,y as J,H as Fe,J as le,am as Pe,g as N,t as _e,aJ as h,h as Oe,a3 as Ae,c as ke,a9 as Ue,U as q,af as X,S as Q,a1 as Y,c8 as Z,ar as I,s as $e}from"./index-68664c05.js";import{u as Ee}from"./Suffix-d732bfd9.js";import{u as Le}from"./use-merged-state-0f73ecfd.js";import{_ as He}from"./Input-076cda82.js";import{A as je}from"./Add-3361b0f7.js";const ze=re({name:"Remove",render(){return u("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},u("line",{x1:"400",y1:"256",x2:"112",y2:"256",style:`
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `}))}}),Ge=n=>{const{textColorDisabled:i}=n;return{iconColorDisabled:i}},Ke=Me({name:"InputNumber",common:Se,peers:{Button:Te,Input:De},self:Ge}),We=Ke;function Je(n){return n==null||typeof n=="string"&&n.trim()===""?null:Number(n)}function qe(n){return n.includes(".")&&(/^(-)?\d+.*(\.|0)$/.test(n)||/^\.\d+$/.test(n))}function L(n){return n==null?!0:!Number.isNaN(n)}function ee(n,i){return n==null?"":i===void 0?String(n):n.toFixed(i)}function H(n){if(n===null)return null;if(typeof n=="number")return n;{const i=Number(n);return Number.isNaN(i)?null:i}}const Xe=Ce([J("input-number-suffix",`
 display: inline-block;
 margin-right: 10px;
 `),J("input-number-prefix",`
 display: inline-block;
 margin-left: 10px;
 `)]),ne=800,te=100,Qe=Object.assign(Object.assign({},le.props),{autofocus:Boolean,loading:{type:Boolean,default:void 0},placeholder:String,defaultValue:{type:Number,default:null},value:Number,step:{type:[Number,String],default:1},min:[Number,String],max:[Number,String],size:String,disabled:{type:Boolean,default:void 0},validator:Function,bordered:{type:Boolean,default:void 0},showButton:{type:Boolean,default:!0},buttonPlacement:{type:String,default:"right"},readonly:Boolean,clearable:Boolean,keyboard:{type:Object,default:{}},updateValueOnInput:{type:Boolean,default:!0},parse:Function,format:Function,precision:Number,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onChange:[Function,Array]}),rn=re({name:"InputNumber",props:Qe,setup(n){const{mergedBorderedRef:i,mergedClsPrefixRef:p,mergedRtlRef:D}=Fe(n),a=le("InputNumber","-input-number",Xe,We,n,p),{localeRef:v}=Ee("InputNumber"),R=Pe(n),{mergedSizeRef:ie,mergedDisabledRef:ue,mergedStatusRef:ae}=R,c=N(null),j=N(null),z=N(null),C=N(n.defaultValue),oe=_e(n,"value"),d=Le(oe,C),g=N(""),F=e=>{const t=String(e).split(".")[1];return t?t.length:0},se=e=>{const t=[n.min,n.max,n.step,e].map(r=>r===void 0?0:F(r));return Math.max(...t)},de=h(()=>{const{placeholder:e}=n;return e!==void 0?e:v.value.placeholder}),M=h(()=>{const e=H(n.step);return e!==null?e===0?1:Math.abs(e):1}),G=h(()=>{const e=H(n.min);return e!==null?e:null}),K=h(()=>{const e=H(n.max);return e!==null?e:null}),V=e=>{const{value:t}=d;if(e===t){b();return}const{"onUpdate:value":r,onUpdateValue:l,onChange:s}=n,{nTriggerFormInput:f,nTriggerFormChange:x}=R;s&&I(s,e),l&&I(l,e),r&&I(r,e),C.value=e,f(),x()},o=({offset:e,doUpdateIfValid:t,fixPrecision:r,isInputing:l})=>{const{value:s}=g;if(l&&qe(s))return!1;const f=(n.parse||Je)(s);if(f===null)return t&&V(null),null;if(L(f)){const x=F(f),{precision:B}=n;if(B!==void 0&&B<x&&!r)return!1;let m=parseFloat((f+e).toFixed(B??se(f)));if(L(m)){const{value:$}=K,{value:E}=G;if($!==null&&m>$){if(!t||l)return!1;m=$}if(E!==null&&m<E){if(!t||l)return!1;m=E}return n.validator&&!n.validator(m)?!1:(t&&V(m),m)}}return!1},b=()=>{const{value:e}=d;if(L(e)){const{format:t,precision:r}=n;t?g.value=t(e):e===null||r===void 0||F(e)>r?g.value=ee(e,void 0):g.value=ee(e,r)}else g.value=String(e)};b();const fe=h(()=>o({offset:0,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})===!1),P=h(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:-t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1}),_=h(()=>{const{value:e}=d;if(n.validator&&e===null)return!1;const{value:t}=M;return o({offset:+t,doUpdateIfValid:!1,isInputing:!1,fixPrecision:!1})!==!1});function ce(e){const{onFocus:t}=n,{nTriggerFormFocus:r}=R;t&&I(t,e),r()}function me(e){var t,r;if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;const l=o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0});if(l!==!1){const x=(r=c.value)===null||r===void 0?void 0:r.inputElRef;x&&(x.value=String(l||"")),d.value===l&&b()}else b();const{onBlur:s}=n,{nTriggerFormBlur:f}=R;s&&I(s,e),f(),$e(()=>{b()})}function ve(e){const{onClear:t}=n;t&&I(t,e)}function O(){const{value:e}=_;if(!e){U();return}const{value:t}=d;if(t===null)n.validator||V(W());else{const{value:r}=M;o({offset:r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}function A(){const{value:e}=P;if(!e){k();return}const{value:t}=d;if(t===null)n.validator||V(W());else{const{value:r}=M;o({offset:-r,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})}}const ge=ce,he=me;function W(){if(n.validator)return null;const{value:e}=G,{value:t}=K;return e!==null?Math.max(0,e):t!==null?Math.min(0,t):0}function pe(e){ve(e),V(null)}function be(e){var t,r,l;!((t=z.value)===null||t===void 0)&&t.$el.contains(e.target)&&e.preventDefault(),!((r=j.value)===null||r===void 0)&&r.$el.contains(e.target)&&e.preventDefault(),(l=c.value)===null||l===void 0||l.activate()}let y=null,w=null,S=null;function k(){S&&(window.clearTimeout(S),S=null),y&&(window.clearInterval(y),y=null)}function U(){T&&(window.clearTimeout(T),T=null),w&&(window.clearInterval(w),w=null)}function xe(){k(),S=window.setTimeout(()=>{y=window.setInterval(()=>{A()},te)},ne),X("mouseup",document,k,{once:!0})}let T=null;function Ie(){U(),T=window.setTimeout(()=>{w=window.setInterval(()=>{O()},te)},ne),X("mouseup",document,U,{once:!0})}const Ve=()=>{w||O()},ye=()=>{y||A()};function we(e){var t,r;if(e.key==="Enter"){if(e.target===((t=c.value)===null||t===void 0?void 0:t.wrapperElRef))return;o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&((r=c.value)===null||r===void 0||r.deactivate())}else if(e.key==="ArrowUp"){if(!_.value||n.keyboard.ArrowUp===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&O()}else if(e.key==="ArrowDown"){if(!P.value||n.keyboard.ArrowDown===!1)return;e.preventDefault(),o({offset:0,doUpdateIfValid:!0,isInputing:!1,fixPrecision:!0})!==!1&&A()}}function Be(e){g.value=e,n.updateValueOnInput&&!n.format&&!n.parse&&n.precision===void 0&&o({offset:0,doUpdateIfValid:!0,isInputing:!0,fixPrecision:!1})}Oe(d,()=>{b()});const Ne={focus:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.focus()},blur:()=>{var e;return(e=c.value)===null||e===void 0?void 0:e.blur()}},Re=Ae("InputNumber",D,p);return Object.assign(Object.assign({},Ne),{rtlEnabled:Re,inputInstRef:c,minusButtonInstRef:j,addButtonInstRef:z,mergedClsPrefix:p,mergedBordered:i,uncontrolledValue:C,mergedValue:d,mergedPlaceholder:de,displayedValueInvalid:fe,mergedSize:ie,mergedDisabled:ue,displayedValue:g,addable:_,minusable:P,mergedStatus:ae,handleFocus:ge,handleBlur:he,handleClear:pe,handleMouseDown:be,handleAddClick:Ve,handleMinusClick:ye,handleAddMousedown:Ie,handleMinusMousedown:xe,handleKeyDown:we,handleUpdateDisplayedValue:Be,mergedTheme:a,inputThemeOverrides:{paddingSmall:"0 8px 0 10px",paddingMedium:"0 8px 0 12px",paddingLarge:"0 8px 0 14px"},buttonThemeOverrides:ke(()=>{const{self:{iconColorDisabled:e}}=a.value,[t,r,l,s]=Ue(e);return{textColorTextDisabled:`rgb(${t}, ${r}, ${l})`,opacityDisabled:`${s}`}})})},render(){const{mergedClsPrefix:n,$slots:i}=this,p=()=>u(Z,{text:!0,disabled:!this.minusable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleMinusClick,onMousedown:this.handleMinusMousedown,ref:"minusButtonInstRef"},{icon:()=>Q(i["minus-icon"],()=>[u(Y,{clsPrefix:n},{default:()=>u(ze,null)})])}),D=()=>u(Z,{text:!0,disabled:!this.addable||this.mergedDisabled||this.readonly,focusable:!1,theme:this.mergedTheme.peers.Button,themeOverrides:this.mergedTheme.peerOverrides.Button,builtinThemeOverrides:this.buttonThemeOverrides,onClick:this.handleAddClick,onMousedown:this.handleAddMousedown,ref:"addButtonInstRef"},{icon:()=>Q(i["add-icon"],()=>[u(Y,{clsPrefix:n},{default:()=>u(je,null)})])});return u("div",{class:[`${n}-input-number`,this.rtlEnabled&&`${n}-input-number--rtl`]},u(He,{ref:"inputInstRef",autofocus:this.autofocus,status:this.mergedStatus,bordered:this.mergedBordered,loading:this.loading,value:this.displayedValue,onUpdateValue:this.handleUpdateDisplayedValue,theme:this.mergedTheme.peers.Input,themeOverrides:this.mergedTheme.peerOverrides.Input,builtinThemeOverrides:this.inputThemeOverrides,size:this.mergedSize,placeholder:this.mergedPlaceholder,disabled:this.mergedDisabled,readonly:this.readonly,textDecoration:this.displayedValueInvalid?"line-through":void 0,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onClear:this.handleClear,clearable:this.clearable,internalLoadingBeforeSuffix:!0},{prefix:()=>{var a;return this.showButton&&this.buttonPlacement==="both"?[p(),q(i.prefix,v=>v?u("span",{class:`${n}-input-number-prefix`},v):null)]:(a=i.prefix)===null||a===void 0?void 0:a.call(i)},suffix:()=>{var a;return this.showButton?[q(i.suffix,v=>v?u("span",{class:`${n}-input-number-suffix`},v):null),this.buttonPlacement==="right"?p():null,D()]:(a=i.suffix)===null||a===void 0?void 0:a.call(i)}}))}});export{rn as _};