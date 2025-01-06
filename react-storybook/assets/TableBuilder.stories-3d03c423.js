import{j as n}from"./jsx-runtime-8406ef1e.js";import{r as d}from"./index-ad58220e.js";import{d as c}from"./styled-components.browser.esm-d2d81691.js";import{S as F}from"./searchComponent-bcb17182.js";import{L as Q}from"./ltTable-ba24546b.js";import{C as W}from"./crossIcon-11d15636.js";import"./_commonjsHelpers-de833af9.js";import"./Input-3f8aa787.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-192f9362.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./map-20538cdf.js";import"./childrenUtils-dd3b0ba5.js";import"./htmlPropsUtils-2b22d933.js";import"./Button-21321eef.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./index-6dcb29cb.js";const q=()=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-grip-vertical",children:[n.jsx("circle",{cx:"9",cy:"12",r:"1"}),n.jsx("circle",{cx:"9",cy:"5",r:"1"}),n.jsx("circle",{cx:"9",cy:"19",r:"1"}),n.jsx("circle",{cx:"15",cy:"12",r:"1"}),n.jsx("circle",{cx:"15",cy:"5",r:"1"}),n.jsx("circle",{cx:"15",cy:"19",r:"1"})]});q.__docgenInfo={description:"",methods:[],displayName:"GripVerticalIcon"};const z=({height:t=48,width:s=48,color:l="currentColor"})=>n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:s,height:t,viewBox:"0 0 24 24",fill:"none",stroke:l,"stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"lucide lucide-table",children:[n.jsx("path",{d:"M12 3v18"}),n.jsx("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),n.jsx("path",{d:"M3 9h18"}),n.jsx("path",{d:"M3 15h18"})]});z.__docgenInfo={description:"",methods:[],displayName:"TableIcon",props:{color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},style:{required:!1,tsType:{name:"object"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const J=c.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`,K=c.div`
  width: 25%;
  background: white;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: calc(100vh - 64px);
`,M=c.div`
  font-size: 16px;
  font-weight: 500;
  color: rgb(2, 8, 23);
`,U=c.div`
  max-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,X=c.div`
  background: white;
  border: 1px solid #e5e7eb;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background: #f9fafb;
  }
`,Y=c.div`
  max-height: 24rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`,Z=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid #e5e7eb;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  gap: 4px;
  cursor: grab;
`,ee=c.div`
  width: ${t=>t.width||"75%"};
`,te=c.div`
  font-size: 18px;
  font-weight: 500;
  color: rgb(2, 8, 23);
  margin: 16px 0 10px 0;
`,ne=c.div`
  font-size: 14px;
  color: rgb(107, 114, 128);
  text-align: center;
`,oe=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 16px;
  height: 256px;
  background: white;
  border-radius: 16px;
`,E=({builderMode:t=!1,tableData:s,columnsInfo:l,selectedColumnsInfo:m,tableOptions:y={},tableActions:h,onColumnChange:u,onColumnReorder:j})=>{const[S,T]=d.useState(""),[i,g]=d.useState(m||[]),[x,P]=d.useState(l||[]),[p,f]=d.useState([[]]),b=e=>{const o=i.filter(r=>r.type==="dimension"),a=i.filter(r=>r.type==="metric");if(e.type==="dimension"){if(u)return u([...o,e,...a]);g([...o,e,...a])}else{if(u)return u([...o,...a,e]);g([...o,...a,e])}P(x.filter(r=>r.id!==e.id))},v=e=>{const o=i.find(r=>r.id===e),a=i.filter(r=>r.id!==e);if(u)return u(a);g(a),o&&P([...x,o])},O=(e,o)=>{e.dataTransfer.setData("text/plain",o.toString())},$=(e,o)=>{e.preventDefault();const a=parseInt(e.dataTransfer.getData("text/plain")),r=Array.from(i),[k]=r.splice(a,1),A=r.filter(D=>D.type==="dimension");r.filter(D=>D.type==="metric");let I=o;if(k.type==="dimension"?I=Math.min(o,A.length):I=Math.max(o,A.length),r.splice(I,0,k),j)return j(r);g(r)};d.useEffect(()=>{l&&(P(l.filter(e=>!(m!=null&&m.find(o=>o.id===e.id)))),g(m||[]))},[m]),d.useEffect(()=>{if(!s)return;const e=(s==null?void 0:s.map(o=>i.map(a=>o[a.id])))||[];f(e)},[i,s]);const H=e=>{T(e.target.value)},G=(e,o)=>{y.onSort&&y.onSort(i[e],o)};return n.jsxs(J,{children:[t&&n.jsxs(K,{children:[n.jsx(F,{placeholder:"Search columns",onChange:H,fluid:!0}),n.jsx(M,{children:"Available Columns"}),n.jsx(U,{children:x.filter(e=>e.name.toLowerCase().includes(S.toLowerCase())).map(e=>n.jsx(X,{onClick:()=>b(e),children:n.jsx("span",{children:e.name})},e.id))}),n.jsx(M,{children:"Selected Columns (drag to reorder)"}),n.jsx(Y,{children:i.map((e,o)=>n.jsxs(Z,{draggable:!0,onDragStart:a=>O(a,o),onDragOver:a=>a.preventDefault(),onDrop:a=>$(a,o),children:[n.jsx(q,{}),n.jsx("div",{style:{marginRight:"auto"},children:e.name}),n.jsx(W,{color:"rgb(156, 163, 175)",height:16,width:16,style:{cursor:"pointer"},onClick:()=>v(e.id)})]},e.id))})]}),n.jsxs(ee,{width:t?"75%":"100%",children:[h,t&&i.length===0?n.jsxs(oe,{children:[n.jsx(z,{height:96,width:96,color:"rgb(156, 163, 175)"}),n.jsx(te,{children:"Customized Data Table"}),n.jsx(ne,{children:"Select columns from the available options on the left to build your custom data table."})]}):n.jsx(Q,{...y,cellData:p,headers:i.map(e=>e.name),sortableColumns:i.map(e=>e.isSortable||!1),onSort:G})]})]})},V=E;E.__docgenInfo={description:"",methods:[],displayName:"TableBuilder",props:{builderMode:{defaultValue:{value:"false",computed:!1},required:!1},tableOptions:{defaultValue:{value:"{}",computed:!1},required:!1}}};const R=[{id:"outlet",name:"Outlet",type:"dimension",isSortable:!0},{id:"channel",name:"Channel",type:"dimension"},{id:"service",name:"Service",type:"dimension"},{id:"net_subtotal",name:"Net Subtotal",type:"metric",isSortable:!0},{id:"net_revenue",name:"Net Revenue",type:"metric"},{id:"net_discount",name:"Net Discount",type:"metric"}],ae=t=>{const s=[];for(let l=1;l<=t;l++)s.push({outlet:`Outlet ${l}`,channel:`Channel ${l}`,service:`Service ${l}`,net_subtotal:Math.floor(Math.random()*1e3)+1,net_revenue:Math.floor(Math.random()*1e3)+1,net_discount:Math.floor(Math.random()*100)+1}),l===1&&s.push({outlet:"Outlet 1",channel:"Channel 1",service:"Service 3",net_subtotal:Math.floor(Math.random()*1e3)+1,net_revenue:Math.floor(Math.random()*1e3)+1,net_discount:Math.floor(Math.random()*100)+1});return s},C=ae(30),L=[{id:"outlet",name:"Outlet",type:"dimension",isSortable:!0}],re={builderMode:!0,columnsInfo:R,selectedColumnsInfo:L,tableData:C,tableOptions:{size:"small",pagination:!0,rowsPerPage:10,onSort:(t,s)=>{console.log(t,s)},totalPage:Math.ceil(C.length/10),currentPage:1}},ze={component:V,title:"TableBuilder",parameters:{docs:{description:{component:"\nThe `TableBuilder` component is a table-building utility that allows users to customize the columns and data displayed. It supports features like pagination, column reordering, and sorting.\n\n### Props:\n\n- `builderMode?: boolean`: Determines whether the table is in builder mode. In this mode, users can customize columns and other table settings.\n\n- `columnsInfo?: ColumnsInfo`: An array of objects defining all available columns.\n  - **Properties**:\n    - `id: string`: A unique identifier for the column.\n    - `name: string`: The display name of the column.\n    - `type: string`: The type of the column (e.g., dimension or metric).\n    - `isSortable?: boolean`: Specifies if the column is sortable.\n\n- `selectedColumnsInfo?: ColumnsInfo`: An array of objects defining the columns selected for display. These objects have the same structure as `columnsInfo`.\n\n- `tableData?: any[]`: An array of objects defining the data to be displayed in the table.\n  - Each object represents a row, where the keys correspond to column IDs, and the values are the data for each column.\n\n- `tableOptions?: TableOption`: An object defining table-specific options.\n  - **Properties**:\n    - `searchQuery?: string`: A search query to filter table data.\n    - `sortableColumns?: boolean[]`: An optional array specifying which columns are sortable.\n    - `pagination?: boolean`: Enables or disables pagination.\n    - `rowsPerPage?: number`: The number of rows to display per page.\n    - `totalPage?: number`: The total number of pages available.\n    - `currentPage?: number`: The current page number.\n    - `onPrevPage?: () => void`: A function triggered when navigating to the previous page.\n    - `onNextPage?: () => void`: A function triggered when navigating to the next page.\n    - `onSort?: (column: Column, isAscending: boolean) => void`: A callback for handling sorting.\n      - **Parameters**:\n        - `column: Column`: The column to sort by.\n        - `isAscending: boolean`: Whether the sorting is in ascending order.\n\n- `tableActions?: React.ReactNode`: Custom actions or buttons displayed with the table.\n\n- `onColumnChange?: (selectedColumns: Column[]) => void`: A callback triggered when the selected columns change.\n\n- `onColumnReorder?: (selectedColumns: Column[]) => void`: A callback triggered when columns are reordered.\n\n- `currentPage?: number`: The current page number of the table (used when pagination is enabled).\n\n- `totalPage?: number`: The total number of pages (used when pagination is enabled).\n    "}}}},se=t=>{var x,P;const[s,l]=d.useState(R),[m,y]=d.useState(L),[h,u]=d.useState(((x=t==null?void 0:t.tableOptions)==null?void 0:x.currentPage)||1),[j,S]=d.useState(C.slice(0,(P=t==null?void 0:t.tableOptions)==null?void 0:P.rowsPerPage)),T=p=>{y(p)},i=()=>{var p,f;if((p=t==null?void 0:t.tableOptions)!=null&&p.totalPage&&((f=t==null?void 0:t.tableOptions)!=null&&f.rowsPerPage)&&h<t.tableOptions.totalPage){const b=h+1;u(b);const v=(b-1)*t.tableOptions.rowsPerPage,O=v+t.tableOptions.rowsPerPage;S(C.slice(v,O))}},g=()=>{var p;if((p=t==null?void 0:t.tableOptions)!=null&&p.rowsPerPage&&h>1){const f=h-1;u(f);const b=(f-1)*t.tableOptions.rowsPerPage,v=b+t.tableOptions.rowsPerPage;S(C.slice(b,v))}};return n.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:n.jsx(V,{...t,columnsInfo:s,selectedColumnsInfo:m,onColumnChange:T,tableData:j,tableOptions:{...t.tableOptions,currentPage:h,onPrevPage:g,onNextPage:i}})})},w=se.bind({});w.args={...re};var _,N,B;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [columnsInfos, setColumnsInfos] = useState<Column[]>(columnsInfo);
  const [selectedColumnsInfos, setSelectedColumnsInfos] = useState<Column[]>(selectedColumns);
  const [currentPage, setCurrentPage] = useState<number>(args?.tableOptions?.currentPage || 1);
  const [data, setData] = useState<any[]>(tableData.slice(0, args?.tableOptions?.rowsPerPage));
  const handleColumn = (columns: Column[]) => {
    setSelectedColumnsInfos(columns);
  };
  const handleNextPage = () => {
    if (args?.tableOptions?.totalPage && args?.tableOptions?.rowsPerPage) {
      if (currentPage < args.tableOptions.totalPage) {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        const start = (nextPage - 1) * args.tableOptions.rowsPerPage;
        const end = start + args.tableOptions.rowsPerPage;
        setData(tableData.slice(start, end));
      }
    }
  };
  const handlePrevPage = () => {
    if (args?.tableOptions?.rowsPerPage) {
      if (currentPage > 1) {
        const prevPage = currentPage - 1;
        setCurrentPage(prevPage);
        const start = (prevPage - 1) * args.tableOptions.rowsPerPage;
        const end = start + args.tableOptions.rowsPerPage;
        setData(tableData.slice(start, end));
      }
    }
  };
  return <div style={{
    padding: '20px',
    backgroundColor: '#f5f5f5'
  }}>
      <TableBuilder {...args} columnsInfo={columnsInfos} selectedColumnsInfo={selectedColumnsInfos} onColumnChange={handleColumn} tableData={data} tableOptions={{
      ...args.tableOptions,
      currentPage: currentPage,
      onPrevPage: handlePrevPage,
      onNextPage: handleNextPage
    }} />
    </div>;
}`,...(B=(N=w.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const Ee=["Default"];export{w as Default,Ee as __namedExportsOrder,ze as default};
