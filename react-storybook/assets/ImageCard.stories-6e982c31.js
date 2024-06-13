import{j as e}from"./jsx-runtime-ffb262ed.js";import{I as d}from"./Label-fd2b2d7f.js";import{C as t}from"./Card-6a95bc5d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./factories-a0d6c822.js";import"./getElementType-ead3b972.js";import"./childrenUtils-25a53b67.js";import"./Icon-84915bf2.js";import"./htmlPropsUtils-194f1060.js";import"./Portal-73b13d0f.js";import"./map-6332fbaf.js";const n=({position:m="top",image:c,title:p,description:N,className:q="",imageClassName:l=""})=>e.jsxs(t,{className:`image-card image-card--${m} ${q}`,children:[["top","left"].includes(m)&&e.jsx(d,{src:c,alt:p,className:`image-card__image ${l}`,wrapped:!0,ui:!1}),e.jsxs(t.Content,{children:[e.jsx(t.Header,{children:p}),e.jsx(t.Description,{children:N})]}),["right","bottom"].includes(m)&&e.jsx(d,{src:c,alt:p,className:`image-card__image ${l}`,wrapped:!0,ui:!1})]}),V=n;n.defaultProps={position:"top",image:"https://via.placeholder.com/400",title:"Default Title",description:"Default Description",className:"",imageClassName:""};n.__docgenInfo={description:"",methods:[],displayName:"ImageCard",props:{position:{required:!1,tsType:{name:"union",raw:'"top" | "left" | "right" | "bottom"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},image:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://via.placeholder.com/400"',computed:!1}},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Default Title"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Default Description"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},imageClassName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const U={component:V,title:"ImageCard",tags:["autodocs"]},a={args:{}},i={args:{position:"top",image:"https://via.placeholder.com/400",title:"Top Image",description:"This is a description with the image at the top."}},s={args:{position:"bottom",image:"https://via.placeholder.com/400",title:"Bottom Image",description:"This is a description with the image at the bottom."}},o={args:{position:"left",image:"https://via.placeholder.com/400",title:"Left Image",description:"This is a description with the image on the left."}},r={args:{position:"right",image:"https://via.placeholder.com/400",title:"Right Image",description:"This is a description with the image on the right."}};var g,h,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,I,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    position: "top",
    image: "https://via.placeholder.com/400",
    title: "Top Image",
    description: "This is a description with the image at the top."
  }
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var T,w,x;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    position: "bottom",
    image: "https://via.placeholder.com/400",
    title: "Bottom Image",
    description: "This is a description with the image at the bottom."
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var C,D,_;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    position: "left",
    image: "https://via.placeholder.com/400",
    title: "Left Image",
    description: "This is a description with the image on the left."
  }
}`,...(_=(D=o.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var j,b,y;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    position: "right",
    image: "https://via.placeholder.com/400",
    title: "Right Image",
    description: "This is a description with the image on the right."
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const W=["Default","TopImage","BottomImage","LeftImage","RightImage"];export{s as BottomImage,a as Default,o as LeftImage,r as RightImage,i as TopImage,W as __namedExportsOrder,U as default};
