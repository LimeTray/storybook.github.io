import{j as t}from"./jsx-runtime-8406ef1e.js";import{I as i}from"./Icon-370c2d23.js";import{T as m}from"./tooltip-5737cc0e.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Popup-7902b892.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./pick-729eb0ec.js";import"./_baseSet-d58de3a8.js";import"./includes-192f9362.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./toPropertyKey-4015efc6.js";const c=({bars:r})=>t.jsx("div",{className:"distributionBar-container",children:r.map((e,p)=>t.jsxs("div",{className:"distributionBar-container-div",style:{width:`${e.percentage}`},children:[t.jsx("div",{className:"label",children:e.icon&&e.tooltipContent?t.jsxs(t.Fragment,{children:[t.jsx(m,{content:e.tooltipContent,trigger:t.jsx(i,{className:"distributionbar-icon",name:e.icon,color:"black"})}),t.jsx("span",{style:{color:e.color,fontWeight:"700",fontSize:"16px"},children:`${e.percentage}`})]}):t.jsx(i,{className:"distributionbar-icon",name:e.icon,color:"black"})}),t.jsx("div",{className:"bar-text-div",children:t.jsx("span",{className:"bar-text",children:`${e.text}`})}),t.jsx("div",{className:"custom-progress-bar",style:{backgroundColor:e.color,cursor:e.onClick?"pointer":"auto"},onClick:e.onClick})]},p))}),l=c;c.__docgenInfo={description:"",methods:[],displayName:"DistributionBar",props:{bars:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  text: string;
  percentage: string;
  color?: string;
  onClick?: () => void;
  tooltipContent?: React.ReactNode;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"percentage",value:{name:"string",required:!0}},{key:"color",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"tooltipContent",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"Bar[]"},description:""}}};const z={title:"DistributionBar",component:l,argTypes:{bars:{control:"object"}}},d=r=>t.jsx(l,{...r}),o=d.bind({});o.args={bars:[{icon:"thumbs down",text:"Category 1",percentage:"25%",color:"blue",onClick:()=>{console.log("Category 1 clicked")},tooltipContent:"Tooltip content for Category 1"},{icon:"thumbs up",text:"Category 2",percentage:"50%",color:"green",onClick:()=>{console.log("Category 2 clicked")},tooltipContent:"Tooltip content for Category 2"},{icon:"star",text:"Category 3",percentage:"25%",color:"red",onClick:()=>{console.log("Category 3 clicked")},tooltipContent:"Tooltip content for Category 3"}]};var n,s,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"args => <DistributionBar {...args} />",...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,z as default};