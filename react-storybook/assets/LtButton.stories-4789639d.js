import{j as e}from"./jsx-runtime-8406ef1e.js";import{L as S}from"./ltButton-cd737601.js";import{I as r}from"./Icon-c71aa201.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./Button-4bb9fc92.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-5eda43f6.js";import"./getElementType-605cc275.js";import"./childrenUtils-eea4be66.js";import"./Label-4ead698f.js";import"./ModernAutoControlledComponent-1c638d94.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-54dd1e2d.js";import"./includes-d285d188.js";import"./Portal-1cdc15ec.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-81dc436d.js";const P={component:S,title:"Button",tags:["autodocs"]},E={borderRadius:"50px",border:"1px solid rgba(209, 213, 219, 1)",backgroundColor:"white"},t=()=>{alert("Button clicked")},o={args:{label:"default",onClick:t}},n={args:{label:"click me",size:"medium",onClick:t,customStyles:E,leftElement:e.jsx(r,{name:"filter",size:"small",color:"green"}),rightElement:e.jsx(r,{name:"arrow right",size:"small",color:"blue"})}},l={args:{label:"Apply filter",size:"small",onClick:t,transparent:!0,leftElement:e.jsx(r,{name:"filter",size:"small",color:"green"}),rightElement:e.jsx(r,{name:"arrow right",size:"small",color:"blue"})}},s={args:{label:"Disabled Button",size:"small",onClick:t,disabled:!0}},a={args:{label:"Select Categories",size:"small",onclick:t,customStyles:E,leftElement:e.jsx(r,{name:"plus",size:"small",color:"green"}),rightElement:e.jsx("span",{style:{color:"white",backgroundColor:"red",paddingRight:"5px",paddingLeft:"5px",borderRadius:"90%"},children:"4"})}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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