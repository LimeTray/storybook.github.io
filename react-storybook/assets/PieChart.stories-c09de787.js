import{j as m}from"./jsx-runtime-8406ef1e.js";import{r as l}from"./index-ad58220e.js";import{C as q}from"./auto-a199c2c6.js";import{_ as u}from"./lodash-9978a6f3.js";import"./_commonjsHelpers-de833af9.js";const B=({data:r,options:c})=>{const p=l.useRef(null),o=l.useRef(null);function D(t){return t?t.toLocaleString():0}const _={responsive:!0,plugins:{legend:{position:"bottom",labels:{generateLabels:t=>{const a=t.data.datasets[0];return(t.data.labels??[]).map((s,e)=>{const $=a.data[e];return{text:`${s}: ${D(parseInt($.toFixed(0)))}`,...a.backgroundColor&&{fillStyle:a.backgroundColor[e]},hidden:!t.getDataVisibility(e),index:e}})}}},tooltip:{mode:"index",intersect:!1,callbacks:{label:function(t){const a=t.raw||0,s=t.chart._metasets[0].total;return` ${(a/s*100).toFixed(2)}%`}}}}};function W(t,a){return u.mergeWith({},t,a,(s,e)=>u.isObject(s)&&u.isObject(e)?u.merge({},s,e):e!==void 0?e:s)}return l.useEffect(()=>{const t=W(_,c);return p.current&&(o.current&&o.current.destroy(),o.current=new q(p.current,{type:"pie",data:r,options:t})),()=>{o.current&&o.current.destroy()}},[r,c]),m.jsx("canvas",{ref:p})},A=B;B.__docgenInfo={description:"",methods:[],displayName:"PieChart",props:{data:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  datasets: ChartDataset[];
  [key: string]: any;
}`,signature:{properties:[{key:"datasets",value:{name:"Array",elements:[{name:"ChartDataset"}],raw:"ChartDataset[]",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""},options:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""}}};const Z={title:"PieChart",component:A,argTypes:{data:{control:"object",description:"Data object defining the labels and datasets for the pie chart."},options:{control:"object",description:"Configuration options for the chart, including plugins, tooltips, and legend settings."}},parameters:{docs:{description:{component:"The `PieChart` component is a reusable chart component built using Chart.js. It renders a pie chart based on the data and options provided as props.\nThis documentation provides examples and configurations for using the `PieChart` component in various scenarios."}}}},h=r=>m.jsx("div",{style:{maxWidth:"400px",margin:"auto"},children:m.jsx(A,{...r})}),n=h.bind({});n.args={data:{labels:["Pos","Online order","Zomato"],datasets:[{data:[3e3,53.3444,1e3],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},options:{}};const i=h.bind({});i.args={data:{labels:["Pos","Online order","Zomato"],datasets:[{data:[200,150,300],backgroundColor:["#FF6384","#36A2EB","#4BC0C0"],hoverBackgroundColor:["#FF6384","#36A2EB","#4BC0C0"]}]},options:{plugins:{legend:{position:"right"}}}};const d=h.bind({});d.args={data:{labels:["Pos","Online order","Zomato"],datasets:[{data:[120,80,200],backgroundColor:["#FF6384","#FFA500","#FFFF00"],hoverBackgroundColor:["#FF6384","#FFA500","#FFFF00"]}]},options:{plugins:{tooltip:{callbacks:{label:function(r){const c=r.raw||0,p=r.chart._metasets[0].total,o=(c/p*100).toFixed(2);return`${r.label}: ${c} (${o}%)`}}}}}};n.parameters={docs:{description:{component:`
### How to Use the PieChart Component

1. **Import the Component**:  
\`\`\`jsx
import PieChart from './PieChart';
\`\`\`

2. **Provide Data and Options**:  
\`\`\`jsx
const data = { ... };
const options = { ... };
<PieChart data={data} options={options} />;
\`\`\`

3. **Customize Further**:  
Adjust tooltips, legends, and other plugins for additional customization.
      `}}};var g,C,f,b,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <div style={{
    maxWidth: '400px',
    margin: 'auto'
  }}>
      <PieChart {...args} />
    </div>;
}`,...(f=(C=n.parameters)==null?void 0:C.docs)==null?void 0:f.source},description:{story:"This story demonstrates the `PieChart` with default data and options.",...(F=(b=n.parameters)==null?void 0:b.docs)==null?void 0:F.description}}};var y,v,P,x,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  return <div style={{
    maxWidth: '400px',
    margin: 'auto'
  }}>
      <PieChart {...args} />
    </div>;
}`,...(P=(v=i.parameters)==null?void 0:v.docs)==null?void 0:P.source},description:{story:"This story showcases how to position the legend to the right of the chart.",...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};var k,w,T,E,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <div style={{
    maxWidth: '400px',
    margin: 'auto'
  }}>
      <PieChart {...args} />
    </div>;
}`,...(T=(w=d.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"This story demonstrates how to customize tooltips to show both absolute values and percentages for each data segment.",...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.description}}};const N=["Default","CustomLegendPosition","WithCustomTooltips"];export{i as CustomLegendPosition,n as Default,d as WithCustomTooltips,N as __namedExportsOrder,Z as default};
