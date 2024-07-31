import{j as t}from"./jsx-runtime-ffb262ed.js";import{B as n}from"./Button-4d603abf.js";import{R as B,r as ke}from"./index-76fb7be0.js";import{I as ze}from"./Icon-c6fca73b.js";import{_ as R}from"./extends-98964cd2.js";import{c as E,u as r,g as I,a as k,A as qe,l as V,b as Ve}from"./getElementType-751ca897.js";import{i as z}from"./childrenUtils-5b78ad27.js";import{S as Ae}from"./Sidebar-ff006d78.js";import"./inheritsLoose-c82a83d4.js";import"./factories-34c191df.js";import"./Label-0be1d8a8.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-26f5100b.js";import"./Portal-07b213b9.js";import"./_commonjsHelpers-de833af9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-0d286b3c.js";function f(e){var o=e.children,c=e.className,i=e.compact,l=e.content,d=e.horizontal,a=e.piled,g=e.raised,u=e.size,m=e.stacked,p=E("ui",u,r(i,"compact"),r(d,"horizontal"),r(a,"piled"),r(g,"raised"),r(m,"stacked"),"segments",c),h=I(f,e),N=k(f,e);return B.createElement(N,R({},h,{className:p}),z(o)?l:o)}f.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];f.propTypes={};function w(e){var o=e.children,c=e.className,i=e.content,l=E("inline",c),d=I(w,e),a=k(w,e);return B.createElement(a,R({},d,{className:l}),z(o)?i:o)}w.handledProps=["as","children","className","content"];w.propTypes={};function s(e){var o=e.attached,c=e.basic,i=e.children,l=e.circular,d=e.className,a=e.clearing,g=e.color,u=e.compact,m=e.content,p=e.disabled,h=e.floated,N=e.inverted,Ce=e.loading,xe=e.placeholder,ve=e.padded,Pe=e.piled,be=e.raised,je=e.secondary,Oe=e.size,Te=e.stacked,We=e.tertiary,Se=e.textAlign,Ne=e.vertical,Re=E("ui",g,Oe,r(c,"basic"),r(l,"circular"),r(a,"clearing"),r(u,"compact"),r(p,"disabled"),r(N,"inverted"),r(Ce,"loading"),r(xe,"placeholder"),r(Pe,"piled"),r(be,"raised"),r(je,"secondary"),r(Te,"stacked"),r(We,"tertiary"),r(Ne,"vertical"),V(o,"attached"),V(ve,"padded"),qe(Se),Ve(h,"floated"),"segment",d),Ee=I(s,e),Ie=k(s,e);return B.createElement(Ie,R({},Ee,{className:Re}),z(i)?m:i)}s.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"];s.Group=f;s.Inline=w;s.propTypes={};const q=({triggerButton:e,children:o,className:c,direction:i,closeButtonPosition:l,closeButtonClass:d,closeIcon:a,closeButtonImage:g})=>{const[u,m]=ke.useState(!1),p=()=>m(!u),h=()=>t.jsxs(n,{onClick:p,className:`${l} ${d}`,icon:!!a,children:[a&&t.jsx(ze,{name:a}),g]});return t.jsxs(B.Fragment,{children:[e&&B.cloneElement(e,{onClick:p}),t.jsxs(Ae,{as:s,animation:"overlay",direction:i,onHide:()=>m(!1),visible:u,className:c,children:[h(),t.jsx(s,{attached:!0,children:o})]})]})},_e=q;q.defaultProps={closeButtonPosition:"top",className:"",closeButtonClass:"",direction:"right",closeIcon:"close"};q.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{triggerButton:{required:!1,tsType:{name:"ReactElement"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},closeButtonPosition:{required:!1,tsType:{name:"union",raw:`| "top"
| "right"
| "bottomright"
| "bottomleft"
| "topcenter"
| "bottomcenter"
| "leftcenter"
| "rightcenter"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottomright"'},{name:"literal",value:'"bottomleft"'},{name:"literal",value:'"topcenter"'},{name:"literal",value:'"bottomcenter"'},{name:"literal",value:'"leftcenter"'},{name:"literal",value:'"rightcenter"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},closeButtonClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},closeIcon:{required:!1,tsType:{name:"SemanticICONS"},description:"",defaultValue:{value:'"close"',computed:!1}},closeButtonImage:{required:!1,tsType:{name:"JSX.Element"},description:""}}};const st={component:_e,title:"Drawer",tags:["autodocs"]},y={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"top"}},D={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"top",children:t.jsx("p",{children:"Content goes here."})}},C={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"right",children:t.jsx("p",{children:"Content goes here."})}},x={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomleft",children:t.jsx("p",{children:"Content goes here."})}},v={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomright",children:t.jsx("p",{children:"Content goes here."})}},P={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"topcenter",children:t.jsx("p",{children:"Content goes here."})}},b={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"leftcenter",children:t.jsx("p",{children:"Content goes here."})}},j={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomcenter",children:t.jsx("p",{children:"Content goes here."})}},O={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"rightcenter",children:t.jsx("p",{children:"Content goes here."})}},T={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"rightcenter",children:t.jsx("p",{children:"Content goes here."}),direction:"left"}},W={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomcenter",children:t.jsx("p",{children:"Content goes here."}),direction:"top"}},S={args:{triggerButton:t.jsx(n,{primary:!0,children:"Open Drawer"}),closeButtonPosition:"bottomcenter",children:t.jsx("p",{children:"Content goes here."}),direction:"top",closeIcon:"arrow circle up"}};var A,_,L;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'top'
  }
}`,...(L=(_=y.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var K,$,G;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'top',
    children: <p>Content goes here.</p>
  }
}`,...(G=($=D.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var F,H,J;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'right',
    children: <p>Content goes here.</p>
  }
}`,...(J=(H=C.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var U,X,M;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomleft',
    children: <p>Content goes here.</p>
  }
}`,...(M=(X=x.parameters)==null?void 0:X.docs)==null?void 0:M.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomright',
    children: <p>Content goes here.</p>
  }
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;P.parameters={...P.parameters,docs:{...(ee=P.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'topcenter',
    children: <p>Content goes here.</p>
  }
}`,...(re=(te=P.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,oe,ae;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'leftcenter',
    children: <p>Content goes here.</p>
  }
}`,...(ae=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,se,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomcenter',
    children: <p>Content goes here.</p>
  }
}`,...(ce=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var le,de,ue;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'rightcenter',
    children: <p>Content goes here.</p>
  }
}`,...(ue=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,pe,ge;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'rightcenter',
    children: <p>Content goes here.</p>,
    direction: 'left'
  }
}`,...(ge=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,Be,fe;W.parameters={...W.parameters,docs:{...(he=W.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomcenter',
    children: <p>Content goes here.</p>,
    direction: 'top'
  }
}`,...(fe=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:fe.source}}};var we,ye,De;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    triggerButton: <Button primary>Open Drawer</Button>,
    closeButtonPosition: 'bottomcenter',
    children: <p>Content goes here.</p>,
    direction: 'top',
    closeIcon: 'arrow circle up'
  }
}`,...(De=(ye=S.parameters)==null?void 0:ye.docs)==null?void 0:De.source}}};const ct=["Default","DrawerWithContent","DrawerWithButtonRight","DrawerWithButtonBottomLeft","DrawerWithButtonBottomRight","DrawerWithButtonTopCenter","DrawerWithButtonLeftCenter","DrawerWithButtonBottomCenter","DrawerWithButtonRightCenter","LeftDrawerWithButtonRightCenter","TopDrawerWithButtonBottomCenter","TopDrawerWithDynamicCloseIcon"];export{y as Default,j as DrawerWithButtonBottomCenter,x as DrawerWithButtonBottomLeft,v as DrawerWithButtonBottomRight,b as DrawerWithButtonLeftCenter,C as DrawerWithButtonRight,O as DrawerWithButtonRightCenter,P as DrawerWithButtonTopCenter,D as DrawerWithContent,T as LeftDrawerWithButtonRightCenter,W as TopDrawerWithButtonBottomCenter,S as TopDrawerWithDynamicCloseIcon,ct as __namedExportsOrder,st as default};
