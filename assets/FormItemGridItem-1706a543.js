import{_ as n,g as a,b as i}from"./Grid-720faae6.js";import{_ as m,d as p,e as _}from"./rule-9b1bb503.js";import{d as f,r as l,h as o,ai as r}from"./index-d54e27e5.js";const u=Object.assign(Object.assign({},a),p),P=f({__GRID_ITEM__:!0,name:"FormItemGridItem",alias:["FormItemGi"],props:u,setup(){const e=l(null);return{formItemInstRef:e,validate:(...t)=>{const{value:s}=e;if(s)return s.validate(...t)},restoreValidation:()=>{const{value:t}=e;t&&t.restoreValidation()}}},render(){return o(n,r(this.$.vnode.props||{},i),{default:()=>{const e=r(this.$props,_);return o(m,Object.assign({ref:"formItemInstRef"},e),this.$slots)}})}});export{P as _};
