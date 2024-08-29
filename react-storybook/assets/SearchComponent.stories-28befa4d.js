import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as c}from"./index-ad58220e.js";import{S as p}from"./searchComponent-2428d4e0.js";import"./_commonjsHelpers-de833af9.js";import"./Input-44c2d150.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./includes-0befd159.js";import"./factories-0eb4186c.js";import"./getElementType-09c91dec.js";import"./map-e91e58f3.js";import"./childrenUtils-fbaf208d.js";import"./htmlPropsUtils-dd3478e8.js";import"./Button-05fae707.js";import"./Icon-fe22c22f.js";import"./Label-c7d6d896.js";import"./ModernAutoControlledComponent-907d0808.js";import"./assertThisInitialized-081f9914.js";import"./Portal-cb2f33ad.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Search-cf1d0655.js";import"./isEmpty-2c8d1933.js";import"./index-6d8b3050.js";import"./_arrayReduce-865b0d3f.js";const A={component:p,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,m]=c.useState(""),n=i=>{m(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(p,{...s,onChange:n})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
