import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as de}from"./index-76fb7be0.js";import{B as oe}from"./Button-e3382ee2.js";import{I as ue}from"./Icon-d9fe74ba.js";import{S as me}from"./Segment-0d2a6223.js";import{S as be}from"./Sidebar-e5efce47.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-11ce6580.js";import"./getElementType-09c91dec.js";import"./childrenUtils-9ef4481f.js";import"./Label-5ae2fa2f.js";import"./ModernAutoControlledComponent-c1b6fd56.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-cb2aded5.js";import"./includes-ad1e3bca.js";import"./Portal-1bd82a23.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-e654f292.js";const v=({children:n,className:p,direction:h,closeButtonPosition:B,closeButtonClass:ie,closeIcon:f,closeButtonImage:re,visible:ae,onHide:C,showCloseButton:le})=>{const ce=()=>e.jsxs(oe,{onClick:C,className:`close-button-position-${B} ${ie}`,icon:!!f,children:[f&&e.jsx(ue,{name:f}),re]});return e.jsxs(be,{as:me,animation:"overlay",direction:h,onHide:C,visible:ae,className:p,children:[n,le&&ce()]})},se=v;v.defaultProps={closeButtonPosition:"top",className:"",closeButtonClass:"",direction:"right",closeIcon:"close"};v.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},closeButtonPosition:{required:!1,tsType:{name:"union",raw:`| "top"
| "right"
| "bottomright"
| "bottomleft"
| "topcenter"
| "bottomcenter"
| "leftcenter"
| "rightcenter"`,elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottomright"'},{name:"literal",value:'"bottomleft"'},{name:"literal",value:'"topcenter"'},{name:"literal",value:'"bottomcenter"'},{name:"literal",value:'"leftcenter"'},{name:"literal",value:'"rightcenter"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},closeButtonClass:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},closeIcon:{required:!1,tsType:{name:"SemanticICONS"},description:"",defaultValue:{value:'"close"',computed:!1}},closeButtonImage:{required:!1,tsType:{name:"JSX.Element"},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""},onHide:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:""}}};const je={component:se,title:"Drawer",tags:["autodocs"],argTypes:{visible:{control:"boolean"},onHide:{action:"onHide"}}},t=n=>{const[p,h]=de.useState(n.visible),B=()=>{h(!1),n.onHide&&n.onHide()};return e.jsxs("div",{children:[e.jsx(oe,{onClick:()=>h(!0),children:"Open Drawer"}),e.jsx(se,{...n,visible:p,onHide:B})]})},o=t.bind({});o.args={visible:!1,closeButtonPosition:"top",showCloseButton:!0};const s=t.bind({});s.args={visible:!1,closeButtonPosition:"top",children:e.jsx("p",{children:"Content goes here."})};const i=t.bind({});i.args={visible:!1,closeButtonPosition:"right",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const r=t.bind({});r.args={visible:!1,closeButtonPosition:"bottomleft",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const a=t.bind({});a.args={visible:!1,closeButtonPosition:"bottomright",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const l=t.bind({});l.args={visible:!1,closeButtonPosition:"topcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const c=t.bind({});c.args={visible:!1,closeButtonPosition:"leftcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const d=t.bind({});d.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const u=t.bind({});u.args={visible:!1,closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),showCloseButton:!0};const m=t.bind({});m.args={visible:!1,closeButtonPosition:"rightcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"left",showCloseButton:!0};const b=t.bind({});b.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",showCloseButton:!0};const g=t.bind({});g.args={visible:!1,closeButtonPosition:"bottomcenter",children:e.jsx("p",{children:"Content goes here."}),direction:"top",closeIcon:"arrow circle up",showCloseButton:!0};var I,w,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var H,V,D;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(D=(V=s.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var y,N,R;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(R=(N=i.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var O,P,J;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(J=(P=r.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var X,x,W;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(W=(x=a.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};var j,T,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var k,A,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(q=(A=c.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,_,$;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var z,F,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(G=(F=u.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,M,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(Q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,Y,Z;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & {
  children?: React.ReactNode;
  className?: string;
  direction?: "top" | "right" | "bottom" | "left";
  closeButtonPosition?: "top" | "right" | "bottomright" | "bottomleft" | "topcenter" | "bottomcenter" | "leftcenter" | "rightcenter";
  closeButtonClass?: string;
  closeIcon?: SemanticICONS;
  closeButtonImage?: JSX.Element;
  visible?: boolean;
  onHide?: (...args: any[]) => any;
  showCloseButton?: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(args.visible);
  const handleHide = () => {
    setIsVisible(false);
    if (args.onHide) args.onHide();
  };
  return <div>
      <Button onClick={() => setIsVisible(true)}>Open Drawer</Button>
      <Drawer {...args} visible={isVisible} onHide={handleHide} />
    </div>;
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Te=["Default","DrawerWithContent","DrawerWithButtonRight","DrawerWithButtonBottomLeft","DrawerWithButtonBottomRight","DrawerWithButtonTopCenter","DrawerWithButtonLeftCenter","DrawerWithButtonBottomCenter","DrawerWithButtonRightCenter","LeftDrawerWithButtonRightCenter","TopDrawerWithButtonBottomCenter","TopDrawerWithDynamicCloseIcon"];export{o as Default,d as DrawerWithButtonBottomCenter,r as DrawerWithButtonBottomLeft,a as DrawerWithButtonBottomRight,c as DrawerWithButtonLeftCenter,i as DrawerWithButtonRight,u as DrawerWithButtonRightCenter,l as DrawerWithButtonTopCenter,s as DrawerWithContent,m as LeftDrawerWithButtonRightCenter,b as TopDrawerWithButtonBottomCenter,g as TopDrawerWithDynamicCloseIcon,Te as __namedExportsOrder,je as default};
