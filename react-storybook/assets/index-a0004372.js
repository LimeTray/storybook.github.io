import{j as u}from"./jsx-runtime-8406ef1e.js";import{d as n,l as m}from"./styled-components.browser.esm-d2d81691.js";import{H as x}from"./Header-30441d32.js";const c={colors:{primary:"#00CD7C",secondary:"#1b1c1d",success:"#21ba45",error:"#db2828",warning:"#f2c037",info:"#31ccec",backgroundSecondary:"#f6f7fb",background:"#f2c037",text:"#333333",border:"#d4d4d5",muted:"#767676"},spacing:{xxs:"4px",xs:"8px",sm:"12px",md:"16px",lg:"24px",xl:"32px",xxl:"48px"},sizes:{mini:"4px",tiny:"8px",small:"12px",medium:"16px",large:"24px",big:"32px",huge:"48px",massive:"64px"},typography:{heading:{fontFamily:"'CustomFont1', 'Roboto', sans-serif",fontWeight:"700",fontSize:"2rem",lineHeight:"1.2"},body:{fontFamily:"'CustomFont2', 'Open Sans', sans-serif",fontWeight:"400",fontSize:"1rem",lineHeight:"1.5"},caption:{fontFamily:"'CustomFont2', 'Open Sans', sans-serif",fontWeight:"300",fontSize:"0.875rem",lineHeight:"1.4"},button:{fontFamily:"'CustomFont1', 'Roboto', sans-serif",fontWeight:"500",fontSize:"1rem",lineHeight:"1.25"}},borderRadius:{small:"4px",medium:"6px",large:"8px",xlarge:"12px",xxlarge:"16px"},shadows:{small:"0 1px 2px rgba(0, 0, 0, 0.1)",medium:"0 2px 4px rgba(0, 0, 0, 0.1)",large:"0 4px 8px rgba(0, 0, 0, 0.1)",xlarge:"0 8px 16px rgba(0, 0, 0, 0.1)"},breakpoints:{xs:"0px",sm:"600px",md:"768px",lg:"1024px",xl:"1200px"},margins:{none:"0px",small:"8px",medium:"16px",large:"24px",xlarge:"32px"},padding:{none:"0px",small:"8px",medium:"16px",large:"24px",xlarge:"32px"}},h=()=>c,f=h(),$=()=>f,b={getStyle:$},v=n(x)`
  color: ${e=>e.$color};
`,i=(e,t,r,o)=>m`
  font-family: ${e.fontFamily};
  font-weight: ${e.fontWeight};
  font-size: ${t};
  line-height: ${e.lineHeight};
  color: ${r};
  text-align: ${o||"left"};
`,S=n.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,T=n.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,q=n.span`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,z=n.div`
  ${e=>i(e.$typographyType,e.$resolvedSize,e.$color,e.$textAlign)}
`,a=e=>{const t=b.getStyle(),r=t.typography[e.type],o=e.size?t.sizes[e.size]:r.fontSize,s=e.color||t.colors.text,l=e.textAlign||"left",g=(d=>{switch(d){case"heading":return v;case"body":return S;case"caption":return T;case"button":return q;default:return z}})(e.type),{type:C,size:A,color:F,text:p,textAlign:H,typographyType:w,subheader:j,...y}=e;return u.jsx(g,{$typographyType:r,$resolvedSize:o,$color:s,$textAlign:l,...y,children:p})},B=a;a.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{text:{required:!0,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"mini",value:{name:"string",required:!0}},{key:"tiny",value:{name:"string",required:!0}},{key:"small",value:{name:"string",required:!0}},{key:"medium",value:{name:"string",required:!0}},{key:"large",value:{name:"string",required:!0}},{key:"big",value:{name:"string",required:!0}},{key:"huge",value:{name:"string",required:!0}},{key:"massive",value:{name:"string",required:!0}}]}},description:""},subheader:{required:!1,tsType:{name:"string"},description:""}}};export{B as T,c as t};
