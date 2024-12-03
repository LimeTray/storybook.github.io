import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as u,R as X}from"./index-ad58220e.js";import{d as g,o as ke}from"./styled-components.browser.esm-d2d81691.js";import{t as P}from"./config-15336477.js";import{L as k}from"./index-6dcb29cb.js";import{S as Ee}from"./searchComponent-bcb17182.js";import{L as R}from"./ltCheckBox-fb658f45.js";import{T as w}from"./index-9561a1c8.js";import{S as v}from"./stringConstants-4e8cb88a.js";import{_ as Te}from"./lodash-9978a6f3.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./Input-3f8aa787.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";import"./Header-30441d32.js";const Me=g.div`
  position: relative;
  width: 100%;
`,_e=g.div`
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.borderRadius.xxlarge};
  padding: 10px 12px;
  background: white;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`,We=g.div`
  position: absolute;
  ${({openUp:e})=>e?"bottom: 46px;":"top: 46px;"}
  left: 0;
  right: 0;
  background: white;
  border-radius: ${({theme:e})=>e.borderRadius.xlarge};
  box-shadow: ${({theme:e})=>e.shadows.medium};
  max-height: 320px;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.colors.border};
  z-index: 1;
`,z=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
`,qe=g.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,Re=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,Y=g.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e})=>!e&&`border-bottom: 1px solid ${P.colors.border}3f;`}
  ${({isCollapsible:e,ischild:m})=>e&&!m&&`background-color: ${P.colors.backgroundSecondary};`}
`,ze=g.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,Z=g.span`
  color: ${({theme:e,isSelected:m})=>m?e.colors.primary:e.colors.muted};
`,Pe=g.div`
  overflow-y: auto;
  max-height: ${({isMultiSelect:e})=>e?"210px":"256px"};
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.backgroundSecondary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
  }
`,ee=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
`,je=({options:e,defaultSelectedItems:m,isMultiSelect:x,isSearchable:E,isCollapsible:T,onSelect:N,searchPlaceholder:Ce,placeholder:H,showOnlyEnabledInInput:De=!1})=>{const[d,C]=u.useState([]),[D,M]=u.useState(!1),[_,ve]=u.useState(""),[$e,B]=u.useState(!1),W=u.useRef(null),[S,U]=u.useState(!0),[Ae,G]=u.useState(e),[h,V]=u.useState([]),q=(r,l,i)=>()=>{var c;const a=e.find(o=>{var p;return l?(p=o.children)==null?void 0:p.some(b=>b.id===r):o.id===r}),n=a==null?void 0:a.id,s=((c=a==null?void 0:a.children)==null?void 0:c.filter(o=>!o.isDisabled).map(o=>o.id))||[];C(o=>o.includes(r)||i?l?s.filter(b=>b!==r&&o.includes(b)).length?o.filter(b=>b!==r):o.filter(b=>b!==n&&b!==r):o.filter(p=>p!==r&&!s.includes(p)):l?[...o,r]:[...o,r,...s])},J=r=>()=>{console.log(r),C([r]),M(!1),N([r])},Oe=()=>{D?(M(!1),N(d)):M(!0)};u.useEffect(()=>{G(e)},[e]),u.useEffect(()=>{const r=x?m.reduce((i,a)=>{const n=e.find(s=>s.id===a);return n?(i.push(a),n.children&&i.push(...n.children.map(s=>s.id))):e.find(c=>{var o;return(o=c.children)==null?void 0:o.some(p=>p.id===a)})&&i.push(a),i},[]):m,l=Array.from(new Set(r));C(l)},[m,e]);const Ie=(r,l)=>{const{checked:i}=l;if(i){const a=e.flatMap(n=>{var o;const s=n.isDisabled&&!d.includes(n.id)?[]:[n.id],c=((o=n.children)==null?void 0:o.filter(p=>!p.isDisabled||d.includes(p.id)).map(p=>p.id))||[];return[...s,...c]});C(a)}else{const a=e.flatMap(s=>{var c;return((c=s.children)==null?void 0:c.filter(o=>o.isDisabled).map(o=>o.id))||[]}),n=d.filter(s=>a.includes(s));C(n)}};u.useEffect(()=>{const r=Te.filter(e,l=>{var i;return l.label.toLowerCase().includes(_.toLowerCase())||((i=l.children)==null?void 0:i.some(a=>a.label.toLowerCase().includes(_.toLowerCase())))});G(r)},[_]),u.useEffect(()=>{const r=()=>{if(W.current){const l=W.current.getBoundingClientRect();window.innerHeight-l.bottom<300?B(!0):B(!1)}};return D&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[D]);const K=r=>()=>{U(!!r)},Le=r=>()=>{h.includes(r)?V(h.filter(l=>l!==r)):V(l=>[...l,r])},Q=()=>{const r=[];return e.forEach(l=>{var a;const i=(a=l.children)==null?void 0:a.filter(n=>d.includes(n.id));if(d.includes(l.id)||i!=null&&i.length)if(De){const n=i==null?void 0:i.filter(s=>!s.isDisabled);if(n&&n.length>0){const s=n.map(c=>c.label).join(", ");(d.includes(l.id)||n.some(c=>d.includes(c.id)))&&r.push(`${l.label}${s?": "+s:""}`)}}else{const n=i==null?void 0:i.map(s=>s.label).join(", ");r.push(`${l.label}${n?": "+n:""}`)}}),r.join(" ; ")};return t.jsx(ke,{theme:P,children:t.jsxs(Me,{ref:W,children:[t.jsxs(_e,{onClick:Oe,children:[t.jsx(w,{text:Q()?Q():H||v.SELECT,type:"body",id:"dropdown-value"}),t.jsx(k,{icon:`chevron ${D?"up":"down"}`,size:"small",color:"#0000008A"})]}),D&&t.jsxs(We,{openUp:$e,children:[E&&t.jsx(qe,{children:t.jsx(Ee,{placeholder:Ce||v.SEARCH,onChange:r=>ve(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),x&&t.jsxs(Re,{children:[t.jsx(R,{label:v.SELECT_ALL,checked:d.length===e.length+e.reduce((r,l)=>{var i;return r+(((i=l.children)==null?void 0:i.length)||0)},0),onChange:Ie}),t.jsxs(ze,{children:[t.jsx(Z,{isSelected:S,onClick:K(!0),children:t.jsx(w,{text:v.ALL,type:"body",id:"dropdown-value",color:S?"#00CD7C":"#767676"})})," ","|"," ",t.jsx(Z,{isSelected:!S,onClick:K(!1),children:t.jsx(w,{text:v.SELECTED,type:"body",id:"dropdown-value",color:S?"#767676":"#00CD7C"})})]})]}),t.jsx(Pe,{isMultiSelect:x,children:Ae.map(r=>{var l,i,a,n;return!S&&!d.includes(r.id)?null:t.jsxs(X.Fragment,{children:[t.jsxs(Y,{isCollapsed:h==null?void 0:h.includes(r.id),isCollapsible:T,children:[x?t.jsxs(ee,{children:[t.jsx(R,{checked:d.includes(r.id)||((l=r.children)==null?void 0:l.some(s=>d.includes(s.id))),onChange:q(r.id,!1,(i=r.children)==null?void 0:i.some(s=>d.includes(s.id))),disabled:r.isDisabled,name:r.id}),r==null?void 0:r.icon,t.jsx(z,{onClick:q(r.id,!1,(a=r.children)==null?void 0:a.some(s=>d.includes(s.id))),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})})]}):t.jsx(z,{onClick:J(r.id),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})}),T&&t.jsx(k,{icon:`chevron ${h!=null&&h.includes(r.id)?"down":"up"}`,size:"small",color:"#9CA3AF",style:{color:"#9CA3AF"},onClick:Le(r.id)})]},r.id),!(h!=null&&h.includes(r.id))&&t.jsx(X.Fragment,{children:(n=r.children)==null?void 0:n.map(s=>!S&&!d.includes(s.id)?null:t.jsx(Y,{ischild:!0,isCollapsible:T,children:x?t.jsxs(ee,{ischild:!0,children:[t.jsx(R,{label:s.label,checked:d.includes(s.id),onChange:q(s.id,!0),disabled:s.isDisabled}),s==null?void 0:s.icon]}):t.jsx(z,{onClick:J(s.id),children:t.jsx(w,{text:s.label,type:"body",id:"dropdown-value"})})},s.id))})]},r.id)})})]})]})})},F=je;je.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Cr={title:"AdvancedMultiSelectDropdown",component:F},j=e=>t.jsx(F,{...e}),f=j.bind({});f.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,isCollapsible:!1,defaultSelectedItems:[],onSelect:e=>{console.log(e)},options:[{label:"Option 1",id:"1",icon:t.jsx(k,{icon:"food",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:t.jsx(k,{icon:"food",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const $=j.bind({});$.args={...f.args,options:Array(100).fill(null).map((e,m)=>({label:`Option ${m+1}`,id:`${m+1}`}))};const A=j.bind({});A.args={...f.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const O=j.bind({});O.args={...f.args,placeholder:"Select your options..."};const I=j.bind({});I.args={...f.args,isSearchable:!0};const y=e=>{const[m,x]=u.useState([]);return t.jsx(F,{...e,isMultiSelect:!1,onSelect:E=>{x(E)},defaultSelectedItems:m})};y.args={...f.args,isMultiSelect:!1};const L=j.bind({});L.args={...f.args,isCollapsible:!0};y.__docgenInfo={description:"",methods:[],displayName:"withSingleSelection"};var re,se,te;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(te=(se=f.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,le,ne;$.parameters={...$.parameters,docs:{...(ie=$.parameters)==null?void 0:ie.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ne=(le=$.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ae,oe,de;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(de=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,ue;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ue=(pe=O.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,fe;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(fe=(he=I.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,be,xe;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} onSelect={(selectedItems: string[]) => {
    setSelectedItems(selectedItems);
  }} defaultSelectedItems={selectedItems} />;
}`,...(xe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Se,we,ye;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ye=(we=L.parameters)==null?void 0:we.docs)==null?void 0:ye.source}}};const Dr=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible"];export{O as CustomPlaceholder,f as Default,$ as DropdownWithLongList,A as DropdownWithPreselectedOptions,I as WithSearchEnabled,Dr as __namedExportsOrder,Cr as default,L as withCollapsible,y as withSingleSelection};
