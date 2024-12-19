import{j as t}from"./jsx-runtime-8406ef1e.js";import{d as n,o as $}from"./styled-components.browser.esm-d2d81691.js";import{t as w}from"./config-15336477.js";import{M as D}from"./mixedChart-682e3699.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./auto-a199c2c6.js";import"./lodash-9978a6f3.js";const m=({title:a,footer:u,children:f})=>{const b=n.div`
    background-color: ${({theme:e})=>e.colors.white};
  `,i=(e,k,v)=>`
    font-weight: ${e.fontWeight};
    font-size: ${e.fontSize};
    line-height: ${e.lineHeight};
    font-family: ${e.fontFamily};
    color: ${k};
    text-align: ${v||"left"};
  `,x=n.div`
    ${({theme:e})=>i(e.typography.heading,e.colors.text)}
  `,y=n.div`
    ${({theme:e})=>i(e.typography.caption,e.colors.text,"center")}
  `,R=n.div`
    background-color: ${({theme:e})=>e.colors.white};
    padding: ${({theme:e})=>e.padding.medium} 0;
  `;return t.jsx($,{theme:w,children:t.jsxs(b,{children:[t.jsx(x,{children:a}),t.jsx(R,{children:f}),t.jsx(y,{children:u})]})})},C=m;m.__docgenInfo={description:"",methods:[],displayName:"ChartContainer",props:{title:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},footer:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const j={data:{labels:["2023 April - June","2023 October - December","2024 April - June","2024 October - December","2023 April - June","2023 October - December","2024 April - June","2024 October - December"],datasets:[{type:"bar",label:"Call Center",data:[20,25,30,28,20,25,30,28],backgroundColor:"#8B0000",barPercentage:1},{type:"bar",label:"Order Online",data:[15,20,18,22,15,20,18,22],backgroundColor:"#0073e6",barPercentage:1},{type:"bar",label:"POS",data:[5,6,8,7,5,6,8,7],backgroundColor:"#32CD32",barPercentage:1},{type:"bar",label:"Magicpin",data:[2,3,4,3,2,3,4,3],backgroundColor:"#FFD700",barPercentage:1},{type:"line",label:"Total",data:[42,54,60,60,42,54,60,60],borderColor:"#0000FF",borderWidth:2,pointBackgroundColor:"#0000FF",fill:!1,tension:.4}]},options:{responsive:!0,plugins:{legend:{position:"bottom"}}},yTicks:a=>`${a}L`},A={title:"ChartContainer",component:C,parameters:{docs:{description:{component:`
The \`ChartContainer\` is a reusable container component designed to wrap charts. 
It includes optional features like titles and footers to provide context for the chart content.
        `}}},argTypes:{title:{description:"Title displayed at the top of the ChartContainer.",control:{type:"text"}},children:{description:"Content inside the ChartContainer, typically a chart component.",control:{type:"text"}},footer:{description:"Footer content displayed at the bottom of the ChartContainer.",control:{type:"text"}}}},g=a=>t.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:t.jsx(C,{...a})}),r=g.bind({});r.args={title:"Chart Container",children:t.jsx(D,{...j}),footer:"There is an increase of 5% compared to the 30-day average. (Mocked)"};r.parameters={docs:{storyDescription:"The default usage of the `ChartContainer` with title, children, and footer."}};const o=g.bind({});o.args={title:"Chart Container",children:"Chart goes here"};o.parameters={docs:{storyDescription:"This example shows the `ChartContainer` without the footer."}};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <ChartContainer {...args} />
  </div>`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <ChartContainer {...args} />
  </div>`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const J=["Default","WithoutFooter"];export{r as Default,o as WithoutFooter,J as __namedExportsOrder,A as default};
