import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as X}from"./Radio-e2d21675.js";import{C as L}from"./Checkbox-b5314c7e.js";import{C as _}from"./Card-dd009747.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./getElementType-800224f7.js";import"./inheritsLoose-c82a83d4.js";import"./_baseSet-b544df4d.js";import"./factories-aa9c7902.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./childrenUtils-ad5f8e12.js";import"./Label-f2be6096.js";import"./Icon-f4a5e358.js";import"./Portal-41e64c31.js";import"./map-5ec937e9.js";const N=({option:w,checked:p,onChange:I,type:l,className:J,style:P})=>{const{key:m,text:d,value:c,childElement:t}=w||{key:"",text:"",value:""},u=z=>{I(c)};return e.jsxs("div",{className:J,style:P,children:[l==="radio"&&e.jsx(X,{label:t||d,value:c,checked:p,onChange:u},m),l==="checkbox"&&e.jsx(L,{label:t||d,value:c,checked:p,onChange:u},m)]})},$=N;N.__docgenInfo={description:"",methods:[],displayName:"OptionSelector",props:{option:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  key: string;
  text: string;
  value: string;
  // Optional property for custom child element
  childElement?: JSX.Element;
}`,signature:{properties:[{key:"key",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"childElement",value:{name:"JSX.Element",required:!1}}]}},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},type:{required:!0,tsType:{name:"union",raw:"'radio' | 'checkbox'",elements:[{name:"literal",value:"'radio'"},{name:"literal",value:"'checkbox'"}]},description:""},color:{required:!1,tsType:{name:"SemanticCOLORS"},description:""},icon:{required:!1,tsType:{name:"SemanticICONS"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const me={title:"OptionSelector",component:$,argTypes:{options:{control:{type:"object"}}}},o={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"radio"}},n={args:{option:{key:"1",text:"Option 1",value:"option1"},checked:!1,type:"checkbox"}},r={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx(_,{header:"Custom Card"})},checked:!1,type:"checkbox"}},a={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx("span",{children:"Custom Element for Option 2"})},checked:!1,type:"checkbox"}},i={args:{option:{key:"2",text:"Option 2",value:"option2",childElement:e.jsx(_,{header:"Custom Card"})},checked:!0,type:"checkbox"}},s={args:{option:{key:"3",text:"Option 3",value:"option3"},checked:!0,type:"radio",className:"custom-radio",style:{backgroundColor:"lightblue",padding:"10px"}}};var h,k,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: false,
    type: 'radio'
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var x,C,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    option: {
      key: '1',
      text: 'Option 1',
      value: 'option1'
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(g=(C=n.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var v,b,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    option: {
      key: '2',
      text: 'Option 2',
      value: 'option2',
      childElement: <Card header="Custom Card" />
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var O,S,E;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    option: {
      key: '2',
      text: 'Option 2',
      value: 'option2',
      childElement: <span>Custom Element for Option 2</span>
    },
    checked: false,
    type: 'checkbox'
  }
}`,...(E=(S=a.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var q,R,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    option: {
      key: '2',
      text: 'Option 2',
      value: 'option2',
      childElement: <Card header="Custom Card" />
    },
    checked: true,
    type: 'checkbox'
  }
}`,...(j=(R=i.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var T,D,W;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    option: {
      key: '3',
      text: 'Option 3',
      value: 'option3'
    },
    checked: true,
    type: 'radio',
    className: 'custom-radio',
    style: {
      backgroundColor: 'lightblue',
      padding: '10px'
    }
  }
}`,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const de=["DefaultRadio","DefaultCheckbox","WithCustomChildElementRadio","WithCustomChildElementCheckbox","WithCustomChildElementCheckboxChecked","StyledDynamicRadio"];export{n as DefaultCheckbox,o as DefaultRadio,s as StyledDynamicRadio,a as WithCustomChildElementCheckbox,i as WithCustomChildElementCheckboxChecked,r as WithCustomChildElementRadio,de as __namedExportsOrder,me as default};
