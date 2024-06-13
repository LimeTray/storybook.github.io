import{j as f}from"./jsx-runtime-ffb262ed.js";import{L as C}from"./ltButton-c274246d.js";import{I as B}from"./Icon-84915bf2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Button-28b2e7e6.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-a0d6c822.js";import"./getElementType-ead3b972.js";import"./childrenUtils-25a53b67.js";import"./Label-fd2b2d7f.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-194f1060.js";import"./Portal-73b13d0f.js";import"./map-6332fbaf.js";const G={component:C,title:"Button",tags:["autodocs"]},h={borderRadius:"50px",border:"1px solid black",color:"red",backgroundColor:"lightblue"},s=()=>{alert("Button clicked")},e={args:{label:"default",onClick:s}},r={args:{label:"click me",size:"medium",onClick:s,customStyles:{customStyles:h},icon:f.jsx(B,{name:"filter",size:"small",color:"green"})}},o={args:{label:"Apply filter",size:"small",onClick:s,transparent:!0,icon:f.jsx(B,{name:"filter",size:"small",color:"green"})}},t={args:{label:"Disbaled Button",size:"small",onClick:s,disabled:!0}};var a,n,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const H=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton"];export{r as ButtonWithIcon,o as ButtonWithTransparentBackground,e as Default,t as DisabledButton,H as __namedExportsOrder,G as default};
