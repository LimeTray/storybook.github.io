import{j as e}from"./jsx-runtime-ffb262ed.js";import{B as t}from"./Button-1eadaef4.js";import{r as ue,R as C}from"./index-76fb7be0.js";import{I as me}from"./Icon-f4a5e358.js";import{S as y}from"./Segment-e192d931.js";import{S as ge}from"./Sidebar-808684d2.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./Label-f2be6096.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Portal-41e64c31.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-5ec937e9.js";const h=({triggerButton:B,children:ne,className:se,direction:ae,closeButtonPosition:ie,closeButtonClass:ce,closeIcon:d,closeButtonImage:pe})=>{const[w,D]=ue.useState(!1),f=()=>D(!w),le=()=>e.jsxs(t,{onClick:f,className:`${ie} ${ce}`,icon:!!d,children:[d&&e.jsx(me,{name:d}),pe]});return e.jsxs(C.Fragment,{children:[B&&C.cloneElement(B,{onClick:f}),e.jsxs(ge,{as:y,animation:"overlay",direction:ae,onHide:()=>D(!1),visible:w,className:se,children:[le(),e.jsx(y,{attached:!0,children:ne})]})]})},de=h;h.defaultProps={closeButtonPosition:"top",className:"",closeButtonClass:"",direction:"right",closeIcon:"close"};h.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{triggerButton:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},closeButtonPosition:{required:!1,tsType:{name:"union",raw:`| "top"
| "right"
| "bottomright"
| "bottomleft"
| "topcenter"
| "bottomcenter"
| "leftcenter"
| "rightcenter"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottomright"'},{name:"literal",value:'"bottomleft"'},{name:"literal",value:'"topcenter"'},{name:"literal",value:'"bottomcenter"'},{name:"literal",value:'"leftcenter"'},{name:"literal",value:'"rightcenter"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},closeButtonClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},closeIcon:{required:!1,tsType:{name:"SemanticICONS"},description:"",defaultValue:{value:'"close"',computed:!1}},closeButtonImage:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const Ve={component:de,title:"Drawer",tags:["autodocs"]},r={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"top"}},o={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"top",children:e.jsx("p",{children:"Content goes here."})}},n={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"right",children:e.jsx("p",{children:"Content goes here."})}},s={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomleft",children:e.jsx("p",{children:"Content goes here."})}},a={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomright",children:e.jsx("p",{children:"Content goes here."})}},i={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"topcenter",children:e.jsx("p",{children:"Content goes here."})}},c={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"leftcenter",children:e.jsx("p",{children:"Content goes here."})}},p={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."})}},l={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."})}},u={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"left"}},m={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top"}},g={args:{triggerButton:e.jsx(t,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",closeIcon:"arrow circle up"}};var x,j,P;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'top'
  }
}`,...(P=(j=r.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var O,W,b;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'top',
    children: <p>Content goes here.</p>
  }
}`,...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var S,v,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'right',
    children: <p>Content goes here.</p>
  }
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var T,I,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomleft',
    children: <p>Content goes here.</p>
  }
}`,...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var N,E,L;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomright',
    children: <p>Content goes here.</p>
  }
}`,...(L=(E=a.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var V,_,$;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'topcenter',
    children: <p>Content goes here.</p>
  }
}`,...($=(_=i.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var k,F,H;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'leftcenter',
    children: <p>Content goes here.</p>
  }
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,X,z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomcenter',
    children: <p>Content goes here.</p>
  }
}`,...(z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var A,G,K;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'rightcenter',
    children: <p>Content goes here.</p>
  }
}`,...(K=(G=l.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var M,Q,U;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'rightcenter',
    children: <p>Content goes here.</p>,
    direction: 'left'
  }
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomcenter',
    children: <p>Content goes here.</p>,
    direction: 'top'
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,oe;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomcenter',
    children: <p>Content goes here.</p>,
    direction: 'top',
    closeIcon: 'arrow circle up'
  }
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const _e=["Default","DrawerWithContent","DrawerWithButtonRight","DrawerWithButtonBottomLeft","DrawerWithButtonBottomRight","DrawerWithButtonTopCenter","DrawerWithButtonLeftCenter","DrawerWithButtonBottomCenter","DrawerWithButtonRightCenter","LeftDrawerWithButtonRightCenter","TopDrawerWithButtonBottomCenter","TopDrawerWithDynamicCloseIcon"];export{r as Default,p as DrawerWithButtonBottomCenter,s as DrawerWithButtonBottomLeft,a as DrawerWithButtonBottomRight,c as DrawerWithButtonLeftCenter,n as DrawerWithButtonRight,l as DrawerWithButtonRightCenter,i as DrawerWithButtonTopCenter,o as DrawerWithContent,u as LeftDrawerWithButtonRightCenter,m as TopDrawerWithButtonBottomCenter,g as TopDrawerWithDynamicCloseIcon,_e as __namedExportsOrder,Ve as default};
