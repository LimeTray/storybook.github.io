import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{S as n}from"./searchComponent-d6e01770.js";import"./_commonjsHelpers-de833af9.js";import"./Input-90a6e334.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./includes-ad1e3bca.js";import"./factories-11ce6580.js";import"./getElementType-09c91dec.js";import"./map-e654f292.js";import"./childrenUtils-9ef4481f.js";import"./htmlPropsUtils-cb2aded5.js";import"./Button-e3382ee2.js";import"./Icon-d9fe74ba.js";import"./Label-5ae2fa2f.js";import"./ModernAutoControlledComponent-c1b6fd56.js";import"./assertThisInitialized-081f9914.js";import"./Portal-1bd82a23.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Search-0aebfdfc.js";import"./isEmpty-8aefed8a.js";import"./index-6ba73468.js";import"./_arrayReduce-865b0d3f.js";const A={component:n,title:"SearchComponent",tags:["autodocs"]},h=p=>{const[l,s]=c.useState(""),m=i=>{s(i.target.value)};return e.jsx("div",{style:{width:"200px"},children:e.jsx(n,{...p,onChange:m})})},t=h.bind({});t.args={placeholder:"Search..."};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
