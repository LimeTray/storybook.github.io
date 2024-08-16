import{j as e}from"./jsx-runtime-ffb262ed.js";import{L as S}from"./ltButton-0caef407.js";import{I as r}from"./Icon-f4a5e358.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Button-1eadaef4.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./Label-f2be6096.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-5ec937e9.js";const P={component:S,title:"Button",tags:["autodocs"]},E={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},t=()=>{alert("Button clicked")},o={args:{label:"default",onClick:t}},n={args:{label:"click me",size:"medium",onClick:t,customStyles:E,leftElement:e.jsx(r,{name:"filter",size:"small",color:"green"}),rightElement:e.jsx(r,{name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:t,transparent:!0,leftElement:e.jsx(r,{name:"filter",size:"small",color:"green"}),rightElement:e.jsx(r,{name:"arrow right",size:"small",color:"blue"})}},s={args:{label:"Disabled Button",size:"small",onClick:t,disabled:!0}},a={args:{label:"Select Categories",size:"small",onclick:t,customStyles:E,leftElement:e.jsx(r,{name:"plus",size:"small",color:"green"}),rightElement:e.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"4"})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "default",
    onClick: handleClick
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "click me",
    size: "medium",
    onClick: handleClick,
    customStyles: customStyles,
    leftElement: <Icon name="filter" size="small" color="green" />,
    rightElement: <Icon name="arrow right" size="small" color="blue" />
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Apply filter",
    size: "small",
    onClick: handleClick,
    transparent: true,
    leftElement: <Icon name="filter" size="small" color="green" />,
    rightElement: <Icon name="arrow right" size="small" color="blue" />
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,k,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Disabled Button",
    size: "small",
    onClick: handleClick,
    disabled: true
  }
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var z,x,B;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Select Categories",
    size: "small",
    onclick: handleClick,
    customStyles: customStyles,
    leftElement: <Icon name="plus" size="small" color="green" />,
    rightElement: <span style={{
      color: "white",
      backgroundColor: "red",
      paddingRight: "5px",
      paddingLeft: "5px",
      borderRadius: "90%"
    }}>
        4
      </span>
  }
}`,...(B=(x=a.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};const Q=["Default","ButtonWithIcon","ButtonWithTransparentBackground","DisabledButton","ButtonWithLeftAndRightElement"];export{n as ButtonWithIcon,a as ButtonWithLeftAndRightElement,l as ButtonWithTransparentBackground,o as Default,s as DisabledButton,Q as __namedExportsOrder,P as default};
