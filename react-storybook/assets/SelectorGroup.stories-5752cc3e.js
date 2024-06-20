import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as O}from"./index-76fb7be0.js";import{f as R}from"./index-d50b82e2.js";import{R as G}from"./Radio-b298bf45.js";import{C as h}from"./Checkbox-170d07b9.js";import{g as l}from"./requestIdGenerator-f6efc017.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./getElementType-06192456.js";import"./inheritsLoose-c82a83d4.js";import"./_baseSet-0563758b.js";import"./factories-75e2f8cc.js";import"./includes-b3798d5a.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-cce87410.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";class u extends O.Component{constructor(s){super(s),this.mapRadioButton=(e,n)=>{const{storedValueObject:t}=this.state,a=t[n];return o.jsx("div",{className:"margin-right-s",children:o.jsx(G,{onChange:()=>{t[n].value=e.key,this.setState({storedValueObject:t},()=>{this.sendUpdates()})},checked:a.value===e.key,label:e.value})},l())},this.sendUpdates=()=>{const{storedValueObject:e}=this.state,{onChangeUpdates:n}=this.props;n&&n(e)},this.mapCheckboxOptions=(e,n,t)=>{const{storedValueObject:a}=this.state,i=a[n].options[t].selectedValues||[],r=R(i,{key:e.key}),y=!!r;return o.jsx("div",{className:"margin-right-s",children:o.jsx(h,{onChange:()=>{y?(a[n].options[t].selectedValues=a[n].options[t].selectedValues.filter(T=>T.key!==r.key),a[n].options[t].selected=!!a[n].options[t].selectedValues.length):(a[n].options[t].selectedValues.push(e),a[n].options[t].selected=!0),this.setState({storedValueObject:a},()=>{this.sendUpdates()})},checked:y,label:e.value})},l())},this.addRemoveCheckbox=(e,n,t)=>{const{storedValueObject:a}=this.state;a[e].options[t].selected=n,a[e].options[t].selectedValues=n?a[e].options[t].childrens:[],this.setState({storedValueObject:a},()=>{this.sendUpdates()})},this.mapCheckbox=(e,n,t)=>{const{storedValueObject:a}=this.state,{selected:i}=a[t].options[n];return o.jsxs("div",{className:"margin-right-s margin-bottom-xs",children:[o.jsx(h,{checked:i,onChange:()=>this.addRemoveCheckbox(t,!i,n),label:e.value}),o.jsx("div",{className:"margin-left-s",children:e.childrens&&o.jsx("div",{className:"flex align-center margin-top-xs",children:e.childrens.map(r=>this.mapCheckboxOptions(r,t,n))})})]},l())},this.mapElement=(e,n)=>o.jsxs("div",{className:"margin-bottom-s",children:[e.label,e.type==="radio"&&e.options&&o.jsx("div",{className:"flex align-center margin-top-xs",children:e.options.map(t=>this.mapRadioButton(t,n))}),e.type==="checkbox"&&e.options&&o.jsx("div",{className:"margin-top-xs",children:e.options.map((t,a)=>this.mapCheckbox(t,a,n))})]},l()),this.state={storedValueObject:[],originalObject:[]}}componentDidMount(){const{options:s,storedValueObject:e}=this.props;this.setState({storedValueObject:e||s||[],originalObject:s||[]})}render(){const{originalObject:s}=this.state;return o.jsx("div",{children:s.map(this.mapElement)})}}u.defaultProps={};const D=u;u.defaultProps={options:[{label:"Type",type:"radio",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]},{label:"Services",type:"checkbox",options:[{key:"delivery",value:"Delivery",childrens:[{key:"zomato",value:"Zomato"},{key:"swiggy",value:"Swiggy"}],selectedValues:[]},{key:"takeaway",value:"Take away",selectedValues:[]}]}],onChangeUpdates:()=>{},storedValueObject:null};u.__docgenInfo={description:"",methods:[{name:"mapRadioButton",docblock:`Function to render group of radio buttons
@param {Object} value contains the information for the radio button
@param {Number} i index`,modifiers:[],params:[{name:"value",description:"contains the information for the radio button",type:{name:"any"},optional:!1},{name:"i",description:"index",type:{name:"any"},optional:!1}],returns:null,description:"Function to render group of radio buttons"},{name:"sendUpdates",docblock:`Function to send updates on every change to a prop function which can
be called in the parent component.`,modifiers:[],params:[],returns:null,description:`Function to send updates on every change to a prop function which can
be called in the parent component.`},{name:"mapCheckboxOptions",docblock:`Function to render Checkbox nested element
@param {Object} value contains the information for the elment
@param {Number} index element index
@param {Number} i index of the option`,modifiers:[],params:[{name:"value",description:"contains the information for the elment",type:{name:"any"},optional:!1},{name:"index",description:"element index",type:{name:"any"},optional:!1},{name:"i",description:"index of the option",type:{name:"any"},optional:!1}],returns:null,description:"Function to render Checkbox nested element"},{name:"addRemoveCheckbox",docblock:`Add/Remove whole checkbox and the childrens in/from the storedValueObject
@param {Number} index contains the information for the elment
@param {Boolean} status element index
@param {Number} i index of the option`,modifiers:[],params:[{name:"index",description:"contains the information for the elment",type:{name:"any"},optional:!1},{name:"status",description:"element index",type:{name:"any"},optional:!1},{name:"i",description:"index of the option",type:{name:"any"},optional:!1}],returns:null,description:"Add/Remove whole checkbox and the childrens in/from the storedValueObject"},{name:"mapCheckbox",docblock:`Function to render Checkbox element
@param {Object} value contains the information for the elment
@param {Number} index element index
@param {Number} i index of the option`,modifiers:[],params:[{name:"value",description:"contains the information for the elment",type:{name:"any"},optional:!1},{name:"i",description:"index of the option",type:{name:"any"},optional:!1},{name:"index",description:"element index",type:{name:"any"},optional:!1}],returns:null,description:"Function to render Checkbox element"},{name:"mapElement",docblock:`Function to map all the element
there are different function for rendering checkbox and radio buttons
@param {Object} value contains the information for the element
@param {Number} index element index`,modifiers:[],params:[{name:"value",description:"contains the information for the element",type:{name:"any"},optional:!1},{name:"index",description:"element index",type:{name:"any"},optional:!1}],returns:null,description:`Function to map all the element
there are different function for rendering checkbox and radio buttons`}],displayName:"SelectorGroup",props:{options:{required:!1,tsType:{name:"Array",elements:[{name:"object"}],raw:"object[]"},description:"",defaultValue:{value:`[
  {
    label: 'Type',
    type: 'radio',
    options: [
      {
        key: 'veg',
        value: 'Veg'
      },
      {
        key: 'nonveg',
        value: 'Non-veg'
      }
    ]
  },
  {
    label: 'Services',
    type: 'checkbox',
    options: [
      {
        key: 'delivery',
        value: 'Delivery',
        childrens: [
          {
            key: 'zomato',
            value: 'Zomato'
          },
          {
            key: 'swiggy',
            value: 'Swiggy'
          }
        ],
        selectedValues: []
      },
      {
        key: 'takeaway',
        value: 'Take away',
        selectedValues: []
      }
    ]
  }
]`,computed:!1}},onChangeUpdates:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},storedValueObject:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  [key: string]: any[]
}`,signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"any"}],raw:"any[]",required:!0}}]}},description:"",defaultValue:{value:"null",computed:!1}}}};const Y={component:D,title:"SelectorGroup",tags:["autodocs"]},c={args:{options:[{label:"Type",type:"radio",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]},{label:"Type",type:"radio",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]}]}},p={args:{options:[{label:"Type",type:"checkbox",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]},{label:"Type",type:"checkbox",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]}]}},d={args:{options:[{label:"Services",type:"checkbox",options:[{key:"delivery",value:"Delivery",childrens:[{key:"zomato",value:"Zomato"},{key:"swiggy",value:"Swiggy"}],selectedValues:[]},{key:"takeaway",value:"Take away",selectedValues:[]}]},{label:"Services",type:"checkbox",options:[{key:"delivery",value:"Delivery",selectedValues:[]},{key:"takeaway",value:"Take away",selectedValues:[]}]}]}},m={args:{options:[{label:"Type",type:"radio",options:[{key:"veg",value:"Veg"},{key:"nonveg",value:"Non-veg"}]},{label:"Services",type:"checkbox",options:[{key:"delivery",value:"Delivery",childrens:[{key:"zomato",value:"Zomato"},{key:"swiggy",value:"Swiggy"}],selectedValues:[]},{key:"takeaway",value:"Take away",selectedValues:[]}]},{label:"Services",type:"checkbox",options:[{key:"delivery",value:"Delivery",selectedValues:[]},{key:"takeaway",value:"Take away",selectedValues:[]}]}]}};var v,k,g;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Type",
      type: "radio",
      options: [{
        key: "veg",
        value: "Veg"
      }, {
        key: "nonveg",
        value: "Non-veg"
      }]
    }, {
      label: "Type",
      type: "radio",
      options: [{
        key: "veg",
        value: "Veg"
      }, {
        key: "nonveg",
        value: "Non-veg"
      }]
    }]
  }
}`,...(g=(k=c.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var b,f,x;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Type",
      type: "checkbox",
      options: [{
        key: "veg",
        value: "Veg"
      }, {
        key: "nonveg",
        value: "Non-veg"
      }]
    }, {
      label: "Type",
      type: "checkbox",
      options: [{
        key: "veg",
        value: "Veg"
      }, {
        key: "nonveg",
        value: "Non-veg"
      }]
    }]
  }
}`,...(x=(f=p.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var V,w,j;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Services",
      type: "checkbox",
      options: [{
        key: "delivery",
        value: "Delivery",
        childrens: [{
          key: "zomato",
          value: "Zomato"
        }, {
          key: "swiggy",
          value: "Swiggy"
        }],
        selectedValues: []
      }, {
        key: "takeaway",
        value: "Take away",
        selectedValues: []
      }]
    }, {
      label: "Services",
      type: "checkbox",
      options: [{
        key: "delivery",
        value: "Delivery",
        selectedValues: []
      }, {
        key: "takeaway",
        value: "Take away",
        selectedValues: []
      }]
    }]
  }
}`,...(j=(w=d.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,S,C;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Type",
      type: "radio",
      options: [{
        key: "veg",
        value: "Veg"
      }, {
        key: "nonveg",
        value: "Non-veg"
      }]
    }, {
      label: "Services",
      type: "checkbox",
      options: [{
        key: "delivery",
        value: "Delivery",
        childrens: [{
          key: "zomato",
          value: "Zomato"
        }, {
          key: "swiggy",
          value: "Swiggy"
        }],
        selectedValues: []
      }, {
        key: "takeaway",
        value: "Take away",
        selectedValues: []
      }]
    }, {
      label: "Services",
      type: "checkbox",
      options: [{
        key: "delivery",
        value: "Delivery",
        selectedValues: []
      }, {
        key: "takeaway",
        value: "Take away",
        selectedValues: []
      }]
    }]
  }
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const ee=["RadioButtonsGroup","CheckboxGroup","CheckboxNestedGroup","CheckboxAndRadioButtonNestedGroup"];export{m as CheckboxAndRadioButtonNestedGroup,p as CheckboxGroup,d as CheckboxNestedGroup,c as RadioButtonsGroup,ee as __namedExportsOrder,Y as default};
