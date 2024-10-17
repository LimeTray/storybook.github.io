import{j as c}from"./jsx-runtime-8406ef1e.js";import{d as r,l as p}from"./styled-components.browser.esm-d2d81691.js";import{t as m}from"./config-a488a195.js";import{H as h}from"./Header-30441d32.js";const $=()=>m,v=$(),T=()=>v,f={getStyle:T},q=r(h)`
  color: ${e=>e.$color};
`,i=(e,t,n,o)=>p`
  font-family: ${e.fontFamily};
  font-weight: ${e.fontWeight};
  font-size: ${t};
  line-height: ${e.lineHeight};
  color: ${n};
  text-align: ${o||"left"};
`,x=r.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,S=r.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,b=r.span`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,z=r.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,a=e=>{const t=f.getStyle(),n=t.typography[e.type],o=e.size?t.sizes[e.size]:n.fontSize,s=e.color||t.colors.text,y=e.textAlign||"left",l=(d=>{switch(d){case"heading":return q;case"body":return x;case"caption":return S;case"button":return b;default:return z}})(e.type),{type:A,size:j,color:C,text:g,textAlign:_,typographyType:w,subheader:H,...u}=e;return c.jsx(l,{$typographyType:n,$resolvedSize:o,$color:s,$textAlign:y,...u,children:g})},I=a;a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  heading: Typography;
  body: Typography;
  caption: Typography;
  button: Typography;
}`,signature:{properties:[{key:"heading",value:{name:"Typography",required:!0}},{key:"body",value:{name:"Typography",required:!0}},{key:"caption",value:{name:"Typography",required:!0}},{key:"button",value:{name:"Typography",required:!0}}]}},description:""},id:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  mini: string;
  tiny: string;
  small: string;
  medium: string;
  large: string;
  big: string;
  huge: string;
  massive: string;
}`,signature:{properties:[{key:"mini",value:{name:"string",required:!0}},{key:"tiny",value:{name:"string",required:!0}},{key:"small",value:{name:"string",required:!0}},{key:"medium",value:{name:"string",required:!0}},{key:"large",value:{name:"string",required:!0}},{key:"big",value:{name:"string",required:!0}},{key:"huge",value:{name:"string",required:!0}},{key:"massive",value:{name:"string",required:!0}}]}},description:""},subheader:{required:!1,tsType:{name:"string"},description:""}}};export{I as T};
