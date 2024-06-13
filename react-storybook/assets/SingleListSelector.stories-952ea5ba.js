import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as g}from"./index-76fb7be0.js";import{_ as n}from"./lodash-ee9167ea.js";import{F as I}from"./fuse.esm-88e2763d.js";import{R as S}from"./Radio-7ea8cc2a.js";import{I as x}from"./Input-87e74d35.js";import{C as m}from"./Checkbox-647e2ca7.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./getElementType-ead3b972.js";import"./inheritsLoose-c82a83d4.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./factories-a0d6c822.js";import"./map-6332fbaf.js";import"./childrenUtils-25a53b67.js";import"./htmlPropsUtils-194f1060.js";import"./Button-28b2e7e6.js";import"./Icon-84915bf2.js";import"./Label-fd2b2d7f.js";import"./Portal-73b13d0f.js";import"./_baseSet-20dcbcd5.js";let d=null;class r extends g.Component{constructor(){super(...arguments),this.state={dataList:[],duplicateDataList:[],selectedItems:[],allSelected:!1},this.searchChildrens=e=>{clearTimeout(d),d=setTimeout(()=>{if(e.length>0){const{duplicateDataList:s}=this.state,o=new I(s,{shouldSort:!0,threshold:.3,location:0,distance:100,minMatchCharLength:1,keys:[this.props.keyName]}).search(e);this.setState({dataList:o})}else this.resetChildren()},200)},this.addRemoveItem=(e,s)=>{if(this.props.multiSelection)s?this.addItem(e):this.removeItem(e);else{let a=[e];this.setState({selectedItems:a})}},this.addItem=e=>{const{selectedItems:s}=this.state;let a=[...s,e];this.setState({selectedItems:a}),this.props.selectItem(a)},this.removeItem=e=>{const{selectedItems:s}=this.state;let a=s.filter(o=>o[this.props.keyId]!==e[this.props.keyId]);this.setState({selectedItems:a}),this.props.selectItem(a)},this.resetChildren=()=>{this.setState({dataList:this.props.listItems})},this.selectAll=()=>{let e=[];this.state.allSelected||(e=this.state.dataList),this.setState({selectedItems:e,allSelected:!this.state.allSelected}),this.props.selectItem(e)}}componentDidMount(){let e=n.cloneDeep(this.props.listItems);this.setState({dataList:this.props.listItems,duplicateDataList:e,selectedItems:this.props.selectedItems})}render(){return t.jsx("div",{className:"single-list-selector",children:t.jsxs("div",{className:"left-half",children:[t.jsxs("div",{className:"sticky-header",children:[this.props.multiSelection?t.jsxs("div",{className:"brdr-btm-grey main-header disp-flex spc-btw",children:[this.props.header+` (${this.state.selectedItems.length} selected)`,t.jsxs("div",{onClick:this.selectAll,className:"pntr-crsr disp-flex align-c",children:[t.jsx(m,{className:"margin-right-xs",checked:this.state.allSelected}),"Select All"]})]}):t.jsx("div",{className:"brdr-btm-grey main-header disp-flex spc-btw",children:this.props.header}),t.jsx("div",{className:"brdr-btm-grey search-cntnr",children:t.jsx(x,{icon:{name:"search",color:"blue"},iconPosition:"left",onChange:e=>this.searchChildrens(e.target.value),placeholder:`Search ${this.props.header}`})})]}),t.jsx("div",{children:this.state.dataList&&this.state.dataList.map(e=>{const s=!!n.find(this.state.selectedItems,{[this.props.keyId]:e[this.props.keyId]});return t.jsxs("div",{className:"brdr-btm-grey right-item disp-flex",onClick:()=>this.addRemoveItem(e,!s),children:[this.props.multiSelection?t.jsx(m,{checked:s,className:"margin-right-xs"}):t.jsx(S,{checked:s,className:"margin-right-xs"}),e[this.props.keyName]]},e[this.props.keyId])})})]})})}}r.defaultProps={};r.defaultProps={header:"Header",keyId:"id",keyName:"title",listItems:[{id:1,title:"One"},{id:2,title:"Two"},{id:3,title:"Three"}],selectItem:()=>{console.log("works")},selectedItems:[],multiSelection:!0};const k=r;r.__docgenInfo={description:"",methods:[{name:"searchChildrens",docblock:null,modifiers:[],params:[{name:"text",optional:!1,type:{name:"any"}}],returns:null},{name:"addRemoveItem",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}},{name:"status",optional:!1,type:{name:"any"}}],returns:null},{name:"addItem",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:null},{name:"removeItem",docblock:null,modifiers:[],params:[{name:"item",optional:!1,type:{name:"any"}}],returns:null},{name:"resetChildren",docblock:null,modifiers:[],params:[],returns:null},{name:"selectAll",docblock:null,modifiers:[],params:[],returns:null}],displayName:"SingleListFilter",props:{header:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Header"',computed:!1}},keyId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"id"',computed:!1}},keyName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"title"',computed:!1}},listItems:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  { id: 1, title: "One" },
  { id: 2, title: "Two" },
  { id: 3, title: "Three" },
]`,computed:!1}},selectItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:`() => {
  console.log("works");
}`,computed:!1}},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:"[]",computed:!1}},multiSelection:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const K={component:k,title:"SingleListSelector",tags:["autodocs"]},i={args:{multiSelection:!1}},l={args:{multiSelection:!0}};var c,p,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    multiSelection: false
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var u,f,y;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    multiSelection: true
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Q=["WithSingleSelection","WithMultipleSelection"];export{l as WithMultipleSelection,i as WithSingleSelection,Q as __namedExportsOrder,K as default};
