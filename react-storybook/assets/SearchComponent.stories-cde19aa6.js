import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-e46dc5be.js";import"./_commonjsHelpers-de833af9.js";import"./Input-8f9d0f6e.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-6af2fe54.js";import"./factories-03e2068e.js";import"./getElementType-486fb75c.js";import"./map-0dadb82a.js";import"./childrenUtils-8c0966fa.js";import"./htmlPropsUtils-cd6198e4.js";import"./Button-8f1e9999.js";import"./Icon-a36dbc07.js";import"./Label-3b77b452.js";import"./ModernAutoControlledComponent-4ca57a24.js";import"./assertThisInitialized-081f9914.js";import"./Portal-3e499843.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-f3d3555e.js";import"./isEmpty-8d8d3e94.js";import"./index-aa4587fb.js";import"./_arrayReduce-865b0d3f.js";const A={component:p,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,m]=c.useState(""),n=i=>{m(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...s,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
