import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{S as n}from"./searchComponent-700e8922.js";import"./_commonjsHelpers-de833af9.js";import"./Input-2c70c87c.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./includes-b3798d5a.js";import"./assertThisInitialized-081f9914.js";import"./factories-75e2f8cc.js";import"./getElementType-06192456.js";import"./map-372c3dbe.js";import"./childrenUtils-f807df98.js";import"./htmlPropsUtils-cce87410.js";import"./Button-3de4f15d.js";import"./Icon-8c7b360e.js";import"./Label-3a60549d.js";import"./Portal-73562830.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Search-7d3d7416.js";import"./isEmpty-2791ffa2.js";import"./index-e7629195.js";const q={component:n,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,p]=c.useState(""),m=i=>{p(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(n,{...s,onChange:m})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
