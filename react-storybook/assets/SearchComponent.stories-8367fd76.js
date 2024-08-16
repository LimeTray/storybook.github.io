import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{S as n}from"./searchComponent-6d13b22b.js";import"./_commonjsHelpers-de833af9.js";import"./Input-118b97ba.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./includes-2d2ad27d.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./map-5ec937e9.js";import"./childrenUtils-ad5f8e12.js";import"./htmlPropsUtils-09ff187c.js";import"./Button-1eadaef4.js";import"./Icon-f4a5e358.js";import"./Label-f2be6096.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Search-76e1a116.js";import"./isEmpty-a3120e76.js";import"./index-901c962e.js";import"./_arrayReduce-865b0d3f.js";const A={component:n,title:"SearchComponent",tags:["autodocs"]},h=p=>{const[l,s]=c.useState(""),m=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(n,{...p,onChange:m})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
