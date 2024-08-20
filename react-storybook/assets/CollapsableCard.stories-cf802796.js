import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{L as N}from"./ltButton-9cc67321.js";import{I as s}from"./Icon-f4a5e358.js";import{L as d}from"./ltCardV2-53e06a7d.js";import"./_commonjsHelpers-de833af9.js";import"./Button-1eadaef4.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./Label-f2be6096.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-5ec937e9.js";import"./Header-383d746d.js";import"./Card-dd009747.js";const x=({hiddenCardText:a,collapsedCardText:f,hiddenContent:t,hiddenCardIcon:h,collapsedCardIcon:g,collapsedCardHoveredIcon:I})=>{const[n,T]=c.useState(!1),[r,i]=c.useState(!1),l=()=>{T(!n)},j=()=>{i(!0)},v=()=>{i(!1)};return e.jsx("div",{className:"collapsableCard-container",children:e.jsxs("div",{className:"collapsableCard-content",children:[n&&e.jsx("div",{className:"hidden-content",children:t==null?void 0:t.map((S,b)=>e.jsx("div",{className:"hidden-content-item",children:S},`hiddenContent_${b}`))}),e.jsx("div",{className:`collapsableCard-Content-div ${r?"hovered":""}`,onClick:l,onMouseEnter:j,onMouseLeave:v,children:e.jsx(N,{label:n?a:f,customStyles:{fontSize:"14px",padding:"17px",fontWeight:"400",color:"#6B7280",...r&&{color:"#00CD7C"}},onClick:l,transparent:!0,size:"small",rightElement:n?e.jsx(s,{name:h,size:"small",color:"green"}):r?e.jsx(s,{name:I,size:"small",color:"green"}):e.jsx(s,{name:g,size:"small",color:"green"})})})]})})},u=x;x.__docgenInfo={description:"",methods:[],displayName:"CollapsibleCard",props:{collapsedCardText:{required:!1,tsType:{name:"string"},description:""},hiddenCardText:{required:!1,tsType:{name:"string"},description:""},hiddenContent:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},hiddenCardIcon:{required:!1,tsType:{name:"union",raw:"SemanticICONS | undefined",elements:[{name:"SemanticICONS"},{name:"undefined"}]},description:""},collapsedCardIcon:{required:!1,tsType:{name:"union",raw:"SemanticICONS | undefined",elements:[{name:"SemanticICONS"},{name:"undefined"}]},description:""},collapsedCardHoveredIcon:{required:!1,tsType:{name:"union",raw:"SemanticICONS | undefined",elements:[{name:"SemanticICONS"},{name:"undefined"}]},description:""}}};const X={title:"CollapsibleCard",component:u,argTypes:{hiddenCardText:{control:"text"},collapsedCardText:{control:"text"},hiddenContent:{control:"object"},hiddenCardIcon:{control:"text"},collapsedCardIcon:{control:"text"},collapsedCardHoveredIcon:{control:"text"}},tags:["autodocs"]},y=a=>e.jsx("div",{style:{width:"100%",marginBottom:"20px",marginTop:"5px"},children:e.jsx(u,{...a})}),o=y.bind({});o.args={hiddenCardText:"Hidden Content",collapsedCardText:"Collapsed Content",hiddenContent:[e.jsx(d,{children:"Card Content 1"},"1"),e.jsx(d,{children:"Card Content 2"},"2"),e.jsx(d,{children:"Card Content 3"},"3")],hiddenCardIcon:"angle double up",collapsedCardIcon:"angle down",collapsedCardHoveredIcon:"angle double down"};var p,m,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => <div style={{
  width: "100%",
  marginBottom: "20px",
  marginTop: "5px"
}}>
    <CollapsibleCard {...args} />
  </div>`,...(C=(m=o.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};const Y=["Default"];export{o as Default,Y as __namedExportsOrder,X as default};