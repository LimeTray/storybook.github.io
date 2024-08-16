import{j as e}from"./jsx-runtime-ffb262ed.js";import{I as d}from"./Label-f2be6096.js";import{C as t}from"./Card-dd009747.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./Icon-f4a5e358.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-5ec937e9.js";const n=({position:m="top",image:c,title:p,description:N,className:q="",imageClassName:l=""})=>e.jsxs(t,{className:`image-card image-card--${m} ${q}`,children:[["top","left"].includes(m)&&e.jsx(d,{src:c,alt:p,className:`image-card__image ${l}`,wrapped:!0,ui:!1}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:p}),e.jsx(t.Description,{children:N})]}),["right","bottom"].includes(m)&&e.jsx(d,{src:c,alt:p,className:`image-card__image ${l}`,wrapped:!0,ui:!1})]}),V=n;n.defaultProps={position:"top",image:"https://via.placeholder.com/400",title:"Default Title",description:"Default Description",className:"",imageClassName:""};n.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{position:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "right" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://via.placeholder.com/400"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Default Title"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Default Description"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},imageClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const X={component:V,title:"ImageCard",tags:["autodocs"]},a={args:{}},i={args:{position:"top",image:"https://via.placeholder.com/400",title:"Top Image",description:"This is a description with the image at the top."}},o={args:{position:"bottom",image:"https://via.placeholder.com/400",title:"Bottom Image",description:"This is a description with the image at the bottom."}},s={args:{position:"left",image:"https://via.placeholder.com/400",title:"Left Image",description:"This is a description with the image on the left."}},r={args:{position:"right",image:"https://via.placeholder.com/400",title:"Right Image",description:"This is a description with the image on the right."}};var g,h,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,I,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    position: "top",
    image: "https://via.placeholder.com/400",
    title: "Top Image",
    description: "This is a description with the image at the top."
  }
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var T,w,x;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    image: "https://via.placeholder.com/400",
    title: "Bottom Image",
    description: "This is a description with the image at the bottom."
  }
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,D,_;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    position: "left",
    image: "https://via.placeholder.com/400",
    title: "Left Image",
    description: "This is a description with the image on the left."
  }
}`,...(_=(D=s.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var j,b,y;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: "right",
    image: "https://via.placeholder.com/400",
    title: "Right Image",
    description: "This is a description with the image on the right."
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const Y=["Default","TopImage","BottomImage","LeftImage","RightImage"];export{o as BottomImage,a as Default,s as LeftImage,r as RightImage,i as TopImage,Y as __namedExportsOrder,X as default};
