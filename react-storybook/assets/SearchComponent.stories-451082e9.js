import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{S as n}from"./searchComponent-3f2f3f9c.js";import"./_commonjsHelpers-de833af9.js";import"./Input-87e74d35.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./factories-a0d6c822.js";import"./getElementType-ead3b972.js";import"./map-6332fbaf.js";import"./childrenUtils-25a53b67.js";import"./htmlPropsUtils-194f1060.js";import"./Button-28b2e7e6.js";import"./Icon-84915bf2.js";import"./Label-fd2b2d7f.js";import"./Portal-73b13d0f.js";import"./Search-e28c6900.js";import"./isEmpty-d4f4cd99.js";import"./index-83dfe39a.js";const k={component:n,title:"SearchComponent",tags:["autodocs"]},h=s=>{const[l,p]=c.useState(""),m=i=>{p(i.target.value)};return t.jsx("div",{style:{width:"200px"},children:t.jsx(n,{...s,onChange:m})})},e=h.bind({});e.args={placeholder:"Search..."};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return <div style={{
    width: "200px"
  }}>
      <SearchComponent {...args} onChange={handleChange} />
    </div>;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const q=["Default"];export{e as Default,q as __namedExportsOrder,k as default};
