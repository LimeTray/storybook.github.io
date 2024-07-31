import{j as e}from"./jsx-runtime-ffb262ed.js";import{I as y}from"./Icon-c6fca73b.js";import{I as f}from"./Input-44f566af.js";import{D as g}from"./Dropdown-b8024e92.js";/* empty css              */import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-34c191df.js";import"./getElementType-751ca897.js";import"./childrenUtils-5b78ad27.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./map-0d286b3c.js";import"./htmlPropsUtils-26f5100b.js";import"./Button-4d603abf.js";import"./Label-0be1d8a8.js";import"./Portal-07b213b9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./without-f56303be.js";import"./isEmpty-5e5afd8d.js";import"./deburr-ab306e7a.js";import"./pick-00c18628.js";import"./_baseSet-16f9c6a2.js";import"./index-2c65c7c8.js";const a=m=>{const{searchOptions:l,selectedValue:i,searchInputValue:n,onCrossIconClick:c,onSearchValueChange:p,onDropDownChange:d,showSearchBar:t}=m;return e.jsxs("div",{className:`dropdown-search ${t?"visibility-show":""}`,children:[e.jsx(g,{className:"searchOption",search:!0,selection:!0,options:l,onChange:h=>{d(h)},value:i}),e.jsx(f,{className:"searchBox",placeholder:"Search here.",value:n,onChange:p,icon:e.jsx(y,{name:"delete",link:!0,onClick:c,className:`search-cross ${t&&n?"show":""}`})})]})},b=a;a.defaultProps={searchOptions:[],selectedValue:"",searchInputValue:"",showSearchBar:!1};a.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{searchOptions:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}},selectedValue:{required:!1,tsType:{name:"union",raw:"string | null | undefined",elements:[{name:"string"},{name:"null"},{name:"undefined"}]},description:"",defaultValue:{value:"''",computed:!1}},searchInputValue:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"''",computed:!1}},onCrossIconClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onSearchValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},onDropDownChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},showSearchBar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const K={component:b,title:"SearchBar",tags:["autodocs"]},r={args:{searchOptions:[{key:"_referencenumber",text:"Reference Number",value:"referencenumber"},{key:"_billnumber",text:"Bill Number",value:"billnumber"},{key:"_customername",text:"Customer Name",value:"customername"},{key:"_customermobile",text:"Mobile",value:"customermobile"},{key:"_ltorderid",text:"LT Order ID",value:"ltorderid"}],selectedValue:"referencenumber",searchInputValue:"Search",showSearchBar:!0}};var s,o,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(o=r.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};const Q=["Default"];export{r as Default,Q as __namedExportsOrder,K as default};
