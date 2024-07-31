import{j as s}from"./jsx-runtime-ffb262ed.js";import{r as L}from"./index-76fb7be0.js";import{B as S}from"./Button-4d603abf.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-34c191df.js";import"./getElementType-751ca897.js";import"./childrenUtils-5b78ad27.js";import"./Icon-c6fca73b.js";import"./Label-0be1d8a8.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-26f5100b.js";import"./Portal-07b213b9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-0d286b3c.js";const b=""+new URL("pending-bf6253e5.png",import.meta.url).href,v=""+new URL("publishError-0a25f147.png",import.meta.url).href,T=""+new URL("publishSuccess-fd1e1a9a.png",import.meta.url).href;class n extends L.Component{constructor(e){super(e),this.state={}}render(){const{loaderStatus:e,loadingText:f,doneLabel:x,onOk:h}=this.props;return s.jsxs("div",{className:"publish-container",children:[s.jsxs("div",{className:"text-center",children:[s.jsx("div",{className:"display-inline",children:s.jsx("img",{src:e==="pending"?b:e==="success"?T:e==="error"?v:"",alt:"penidig"})}),s.jsxs("div",{className:"display-inline status",children:["Status:",s.jsx("span",{style:{marginLeft:"6px",color:e==="pending"?"#297DE0":e==="success"?"#008000":e==="error"?"#CF2A27":"#000000"},children:e==="pending"?"Pending":e==="success"?"Success":e==="error"?"Failed":null})]})]}),s.jsx("div",{className:"display-inline publish-text",children:f}),s.jsx("div",{className:"display-inline text-center",children:s.jsx(S,{className:"blue-btn ok-btn-width",content:x,primary:!0,disabled:e==="pending",onClick:h})})]})}}n.defaultProps={loaderStatus:"success",loadingText:"Loader",doneLabel:"OK",onOk:()=>{console.log("ok works")}};const y=n;n.__docgenInfo={description:"",methods:[],displayName:"AdvanceLoader",props:{loaderStatus:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"success"',computed:!1}},loadingText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Loader"',computed:!1}},doneLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"OK"',computed:!1}},onOk:{required:!1,tsType:{name:"any"},description:"",defaultValue:{value:`() => {
  console.log("ok works");
}`,computed:!1}}}};const H={component:y,title:"AdvancedLoader",tags:["autodocs"]},r={args:{loaderStatus:"pending",loadingText:"Loading pending"}},a={args:{loaderStatus:"success",loadingText:"Loading successful"}},o={args:{loaderStatus:"error",loadingText:"Loading failed"}};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    loaderStatus: "pending",
    loadingText: "Loading pending"
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    loaderStatus: "success",
    loadingText: "Loading successful"
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,m,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    loaderStatus: "error",
    loadingText: "Loading failed"
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const J=["Pending","Success","Failed"];export{o as Failed,r as Pending,a as Success,J as __namedExportsOrder,H as default};
