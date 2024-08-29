import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-4a6ba8a8.js";import"./_commonjsHelpers-de833af9.js";import"./Input-96c3508c.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-d285d188.js";import"./factories-5eda43f6.js";import"./getElementType-605cc275.js";import"./map-81dc436d.js";import"./childrenUtils-eea4be66.js";import"./htmlPropsUtils-54dd1e2d.js";import"./Button-4bb9fc92.js";import"./Icon-c71aa201.js";import"./Label-4ead698f.js";import"./ModernAutoControlledComponent-1c638d94.js";import"./assertThisInitialized-081f9914.js";import"./Portal-1cdc15ec.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-41509a44.js";import"./isEmpty-984c4ea6.js";import"./index-40c811d2.js";import"./_arrayReduce-865b0d3f.js";const A={component:p,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,m]=c.useState(""),n=i=>{m(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...s,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,A as default};
