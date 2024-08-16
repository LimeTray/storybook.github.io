import{j as r}from"./jsx-runtime-ffb262ed.js";import{S as d}from"./index-101c92a2.js";import{L as N}from"./ltButton-0caef407.js";import{L as T}from"./ltInput-7be31955.js";import{L as O}from"./ltToggle-6a179600.js";import{H as C,a as E}from"./Header-383d746d.js";import{A as t,L as y}from"./appConstants-a928a1ef.js";import{L as P}from"./ltDropdown-ccbcf174.js";import{S as f}from"./searchComponent-6d13b22b.js";const o=({className:a="",header:p,subHeader:i,components:m})=>{const u=()=>m.map((n,s)=>{const{isHidden:c,props:e={}}=n;if(c)return null;switch(n.type){case t.COMPONENTS_TYPE.SELECTOR_GROUP:return r.jsx(d,{...e},s);case t.COMPONENTS_TYPE.BUTTON:return r.jsx(N,{...e},s);case t.COMPONENTS_TYPE.INPUT:return r.jsx(T,{...e},s);case t.COMPONENTS_TYPE.TOGGLE:return r.jsx(O,{...e},s);case t.COMPONENTS_TYPE.CHECKBOX:return r.jsx(y,{...e},s);case t.COMPONENTS_TYPE.DROPDOWN:return r.jsx(P,{...e,placeholder:e.placeholder,options:e.options},s);case t.COMPONENTS_TYPE.SEARCH:return r.jsx(f,{...e,placeholder:e.placeholder,onChange:e.onChange},s);case t.COMPONENTS_TYPE.CUSTOM:const l=e.component;return r.jsx(l,{},s);default:return null}});return r.jsxs("div",{className:`form-row-root ${a}`,children:[r.jsxs(C,{as:"h4",className:"header-text",children:[p,r.jsx(E,{className:"subheader",children:i})]}),r.jsx("div",{className:"component-container",children:u()})]})},H=o;o.__docgenInfo={description:"",methods:[],displayName:"FormRow",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},header:{required:!0,tsType:{name:"string"},description:""},subHeader:{required:!0,tsType:{name:"string"},description:""},components:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  type: string;
  className?: string;
  isHidden?: boolean;
  props: {
    [key: string]: any;
  };
}`,signature:{properties:[{key:"type",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"isHidden",value:{name:"boolean",required:!1}},{key:"props",value:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]},required:!0}}]}}],raw:"ComponentProps[]"},description:""}}};export{H as F};