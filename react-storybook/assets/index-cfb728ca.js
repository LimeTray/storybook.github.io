import{j as t}from"./jsx-runtime-8406ef1e.js";import{d as r,o as d}from"./styled-components.browser.esm-d2d81691.js";import{t as o}from"./config-15336477.js";const c=r.span`
  margin-right: 0.5em;
`,u=r.span`
  margin-left: 0.5em;
`,m=r.div`
  display: inline-flex;
  width:auto;
  align-items: center;
  padding: ${({theme:e})=>`${e.padding.xsmall} ${e.padding.small}`};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  font-size: ${({theme:e})=>e.sizes.small};
  color: ${({variant:e,type:l,theme:a})=>e==="outline"||e==="filled"&&l==="default"?a.colors.text:a.colors.white}; 
  background-color: ${({variant:e,type:l,theme:a})=>e==="filled"?l==="default"?a.colors.grey:a.colors[l]:"transparent"};
  border: ${({variant:e,type:l,theme:a})=>e==="outline"?`${a.border[l]}`:"none"};
`,i=({text:e,leftElement:l,rightElement:a,variant:s="filled",type:n="default"})=>t.jsx(d,{theme:o,children:t.jsxs(m,{variant:s,type:n,children:[l&&t.jsx(c,{children:l}),t.jsx("span",{children:e}),a&&t.jsx(u,{children:a})]})}),x=i;i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!1,tsType:{name:"string"},description:""},leftElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'default'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};export{x as B};
