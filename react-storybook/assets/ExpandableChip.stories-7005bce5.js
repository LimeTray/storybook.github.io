import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./index-76fb7be0.js";import{I as r}from"./Icon-84915bf2.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-a0d6c822.js";import"./getElementType-ead3b972.js";import"./childrenUtils-25a53b67.js";const a=({defaultContent:o,hoverContent:c,onClick:m})=>{const[n,u]=x.useState(!1),s=()=>{u(!n)};return e.jsx("div",{className:`expandable-chip ${n?"hovered":""}`,style:{transition:"min-Width 0.2s ease-in-out,border 0.1s ease-in-out",minWidth:n?"260px":"230px"},onMouseEnter:s,onMouseLeave:s,onClick:m,children:e.jsx("div",{className:"expandable-chip-div",children:n?c:o})})};a.defaultProps={defaultContent:"Default Content",hoverContent:"Hover Content"};const l=a;a.__docgenInfo={description:"",methods:[],displayName:"ExpandableChip",props:{defaultContent:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"Default Content"',computed:!1}},hoverContent:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:'"Hover Content"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const T={component:l,title:"ExpandableChip",tags:["autodocs"],argTypes:{defaultContent:{control:"text"},hoverContent:{control:"text"}}},h=o=>e.jsx(l,{...o}),t=h.bind({});t.args={defaultContent:e.jsxs("div",{children:[e.jsx("span",{children:e.jsx(r,{name:"user",color:"grey"})})," ",e.jsx("b",{children:"60%"})," Stores Missed Goal"]}),hoverContent:e.jsxs("div",{children:["Goal Set To ",e.jsx("b",{children:"8mins-11mins"}),e.jsxs("span",{className:"hovered-span",children:[e.jsx(r,{name:"pencil alternate",size:"small",color:"orange"}),"Edit"]})]})};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"args => <ExpandableChip {...args} />",...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const H=["ExpandableChipContent"];export{t as ExpandableChipContent,H as __namedExportsOrder,T as default};
