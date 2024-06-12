import{j as f}from"./jsx-runtime-ffb262ed.js";import{L as C}from"./ltButton-cf3776ac.js";import{I as B}from"./Icon-3e17657a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Button-89f13c84.js";import"./extends-d7eb49ad.js";import"./getElementType-68bbeded.js";import"./Label-28a867c8.js";import"./includes-fd62a01a.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2e7c2e5e.js";import"./Portal-f68bc7ab.js";import"./map-88496d49.js";const v={component:C,title:"Button",tags:["autodocs"]},h={borderRadius:"50px",border:"1px solid black",color:"red",backgroundColor:"lightblue"},s=()=>{alert("Button clicked")},e={args:{label:"default",onClick:s}},r={args:{label:"click me",size:"medium",onClick:s,customStyles:{customStyles:h},icon:f.jsx(B,{name:"filter",size:"small",color:"green"})}},o={args:{label:"Apply filter",size:"small",onClick:s,transparent:!0,icon:f.jsx(B,{name:"filter",size:"small",color:"green"})}},t={args:{label:"Disbaled Button",size:"small",onClick:s,disabled:!0}};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: "default",
    onClick: handleClick
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "click me",
    size: "medium",
    onClick: handleClick,
    customStyles: {
      customStyles
    },
    icon: <Icon name="filter" size="small" color="green" />
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Apply filter",
    size: "small",
    onClick: handleClick,
    transparent: true,
    icon: <Icon name="filter" size="small" color="green" />
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,k,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Disbaled Button",
    size: "small",
    onClick: handleClick,
    disabled: true
  }
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const w=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton"];export{r as ButtonWithIcon,o as ButtonWithTransparentBackground,e as Default,t as DisabledButton,w as __namedExportsOrder,v as default};
