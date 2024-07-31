import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{S as n}from"./searchComponent-7dddbaf7.js";import"./_commonjsHelpers-de833af9.js";import"./Input-44f566af.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./factories-34c191df.js";import"./getElementType-751ca897.js";import"./map-0d286b3c.js";import"./childrenUtils-5b78ad27.js";import"./htmlPropsUtils-26f5100b.js";import"./Button-4d603abf.js";import"./Icon-c6fca73b.js";import"./Label-0be1d8a8.js";import"./Portal-07b213b9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Search-2a65db19.js";import"./isEmpty-5e5afd8d.js";import"./index-2c65c7c8.js";const q={component:n,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,p]=c.useState(""),m=i=>{p(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(n,{...s,onChange:m})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,q as default};
