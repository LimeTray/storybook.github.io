import{j as e}from"./jsx-runtime-ffb262ed.js";import{I as y}from"./Icon-f4a5e358.js";import{I as f}from"./Input-118b97ba.js";import{D as g}from"./Dropdown-317d6a86.js";/* empty css              */import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-aa9c7902.js";import"./getElementType-800224f7.js";import"./childrenUtils-ad5f8e12.js";import"./includes-2d2ad27d.js";import"./map-5ec937e9.js";import"./htmlPropsUtils-09ff187c.js";import"./Button-1eadaef4.js";import"./Label-f2be6096.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./Portal-41e64c31.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./without-8297d7fd.js";import"./isEmpty-a3120e76.js";import"./deburr-046b2e64.js";import"./pick-303a328b.js";import"./_baseSet-b544df4d.js";import"./index-901c962e.js";import"./_arrayReduce-865b0d3f.js";const a=m=>{const{searchOptions:i,selectedValue:l,searchInputValue:n,onCrossIconClick:c,onSearchValueChange:p,onDropDownChange:d,showSearchBar:t}=m;return e.jsxs("div",{className:`dropdown-search ${t?"visibility-show":""}`,children:[e.jsx(g,{className:"searchOption",search:!0,selection:!0,options:i,onChange:h=>{d(h)},value:l}),e.jsx(f,{className:"searchBox",placeholder:"Search here.",value:n,onChange:p,icon:e.jsx(y,{name:"delete",link:!0,onClick:c,className:`search-cross ${t&&n?"show":""}`})})]})},b=a;a.defaultProps={searchOptions:[],selectedValue:"",searchInputValue:"",showSearchBar:!1};a.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{searchOptions:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"''",computed:!1}},searchInputValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"''",computed:!1}},onCrossIconClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onSearchValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onDropDownChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showSearchBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const U={component:b,title:"SearchBar",tags:["autodocs"]},r={args:{searchOptions:[{key:"_referencenumber",text:"Reference Number",value:"referencenumber"},{key:"_billnumber",text:"Bill Number",value:"billnumber"},{key:"_customername",text:"Customer Name",value:"customername"},{key:"_customermobile",text:"Mobile",value:"customermobile"},{key:"_ltorderid",text:"LT Order ID",value:"ltorderid"}],selectedValue:"referencenumber",searchInputValue:"Search",showSearchBar:!0}};var s,o,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    searchOptions: [{
      key: "_referencenumber",
      text: "Reference Number",
      value: "referencenumber"
    }, {
      key: "_billnumber",
      text: "Bill Number",
      value: "billnumber"
    }, {
      key: "_customername",
      text: "Customer Name",
      value: "customername"
    }, {
      key: "_customermobile",
      text: "Mobile",
      value: "customermobile"
    }, {
      key: "_ltorderid",
      text: "LT Order ID",
      value: "ltorderid"
    }],
    selectedValue: "referencenumber",
    searchInputValue: "Search",
    showSearchBar: true
  }
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const W=["Default"];export{r as Default,W as __namedExportsOrder,U as default};
