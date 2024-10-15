import{j as t}from"./jsx-runtime-8406ef1e.js";import{d as r,o as d}from"./styled-components.browser.esm-d2d81691.js";import{t as o}from"./config-d0b94773.js";const c=r.span`
  margin-right: 0.5em;
`,m=r.span`
  margin-left: 0.5em;
`,u=r.div`
  display: inline-flex;
  width:auto;
  align-items: center;
  padding: ${({theme:e})=>`${e.padding.xsmall} ${e.padding.small}`};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  font-size: ${({theme:e})=>e.sizes.small};
  color: ${({variant:e,theme:a})=>e==="filled"?a.colors.white:a.colors.text};
  background-color: ${({variant:e,type:a,theme:l})=>e==="filled"?a==="default"?l.colors.grey:l.colors[a]:"transparent"};
  border: ${({variant:e,type:a,theme:l})=>e==="outline"?`${l.border[a]}`:"none"};
`,i=({text:e,leftElement:a,rightElement:l,variant:n="filled",type:s="default"})=>t.jsx(d,{theme:o,children:t.jsxs(u,{variant:n,type:s,children:[a&&t.jsx(c,{children:a}),t.jsx("span",{children:e}),l&&t.jsx(m,{children:l})]})}),h=i;i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{text:{required:!1,tsType:{name:"string"},description:""},leftElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'outline' | 'filled'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'default'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'default'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};export{h as B};
