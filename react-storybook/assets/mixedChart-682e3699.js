import{j as l}from"./jsx-runtime-8406ef1e.js";import{r as i}from"./index-ad58220e.js";import{C as f}from"./auto-a199c2c6.js";import{_ as t}from"./lodash-9978a6f3.js";const p=({data:u,options:o,xTicks:m,yTicks:c})=>{const n=i.useRef(null),e=i.useRef(null),g={responsive:!0,plugins:{legend:{position:"bottom"},tooltip:{mode:"index",intersect:!1}},scales:{x:{grid:{display:!0},ticks:{...m&&{callback:m}}},y:{ticks:{...c&&{callback:c}}}}};function d(a,y){return t.mergeWith({},a,y,(s,r)=>t.isObject(s)&&t.isObject(r)?t.merge({},s,r):r!==void 0?r:s)}return i.useEffect(()=>{const a=d(g,o);return n.current&&(e.current&&e.current.destroy(),e.current=new f(n.current,{data:u,type:"bar",options:a})),()=>{e.current&&e.current.destroy()}},[u,o]),l.jsx("canvas",{ref:n})},x=p;p.__docgenInfo={description:"",methods:[],displayName:"MixedChart",props:{data:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  datasets: ChartDataset[];
  [key: string]: any;
}`,signature:{properties:[{key:"datasets",value:{name:"Array",elements:[{name:"ChartDataset"}],raw:"ChartDataset[]",required:!0}},{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""},options:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: any;
}`,signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:""},xTicks:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | string) => string",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"string"}}},description:""},yTicks:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | string) => string",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"string"}}},description:""}}};export{x as M};
