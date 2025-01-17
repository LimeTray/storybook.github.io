import{j as o}from"./jsx-runtime-8406ef1e.js";import{L as p}from"./ltTable-72f3962d.js";import"./index-ad58220e.js";import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./map-20538cdf.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./factories-df82d7d3.js";import"./Icon-370c2d23.js";import"./inheritsLoose-5494d9cc.js";import"./index-6dcb29cb.js";import"./Button-21321eef.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";const R={component:p,title:"LtTable",tags:["autodocs"]},y=a=>o.jsx("div",{style:{padding:"20px",backgroundColor:"#f5f5f5"},children:o.jsx(p,{...a})}),e=y.bind({}),c=[["213912","213912","12233","Delhi"],["123456","789012","22222","delhi"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678","32255","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["987654","345678","32244","City Name"],["213912","213912","12233","City Name"],["123456","789012","22222","City Name"],["987654","345678","32211","City Name"],["987654","345678",o.jsx("span",{style:{color:"red"},children:"32255"}),"City Name"]],d=["Metric Name","Trigger Value","Medium","Trigger Timestamp"];e.args={size:"small",cellData:c,headers:d};const t={args:{size:"small",customHeaders:d,cellData:c,onSort:(a,C)=>{console.log(a,C)}}};var r,i,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => <div style={{
  padding: '20px',
  backgroundColor: '#f5f5f5'
}}>
    <LtTable {...args} />
  </div>`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var m,l,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'small',
    customHeaders: headers,
    cellData: LogData,
    onSort: (col: number, isAs: boolean) => {
      console.log(col, isAs);
    }
  }
}`,...(n=(l=t.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const V=["Default","TableWithCustomheader"];export{e as Default,t as TableWithCustomheader,V as __namedExportsOrder,R as default};
