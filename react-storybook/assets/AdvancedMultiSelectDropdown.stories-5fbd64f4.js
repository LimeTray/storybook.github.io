import{j as r}from"./jsx-runtime-8406ef1e.js";import{r as m,R as Q}from"./index-ad58220e.js";import{d as g,o as Oe}from"./styled-components.browser.esm-d2d81691.js";import{t as z}from"./config-15336477.js";import{L as O}from"./index-6dcb29cb.js";import{S as ke}from"./searchComponent-bcb17182.js";import{L as q}from"./ltCheckBox-fb658f45.js";import{T as S}from"./index-9561a1c8.js";import{S as D}from"./stringConstants-4e8cb88a.js";import{_ as Ee}from"./lodash-9978a6f3.js";import"./_commonjsHelpers-de833af9.js";import"./Button-21321eef.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-20538cdf.js";import"./Input-3f8aa787.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";import"./Header-30441d32.js";const Te=g.div`
  position: relative;
  width: 100%;
`,Me=g.div`
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
`,_e=g.div`
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
`,R=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
`,We=g.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,qe=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,X=g.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e})=>!e&&`border-bottom: 1px solid ${z.colors.border}3f;`}
  ${({isCollapsible:e,ischild:u})=>e&&!u&&`background-color: ${z.colors.backgroundSecondary};`}
`,Re=g.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,Y=g.span`
  color: ${({theme:e,isSelected:u})=>u?e.colors.primary:e.colors.muted};
`,ze=g.div`
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
`,Z=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
`,ye=({options:e,defaultSelectedItems:u,isMultiSelect:b,isSearchable:k,isCollapsible:E,onSelect:F,searchPlaceholder:je,placeholder:N,showOnlyEnabledInInput:Ce=!1})=>{const[p,j]=m.useState([]),[C,T]=m.useState(!1),[M,De]=m.useState(""),[$e,H]=m.useState(!1),_=m.useRef(null),[x,B]=m.useState(!0),[Ie,U]=m.useState(e),[h,G]=m.useState([]),W=(t,n)=>()=>{var d;const s=e.find(o=>{var a;return n?(a=o.children)==null?void 0:a.some(c=>c.id===t):o.id===t}),i=s==null?void 0:s.id,l=((d=s==null?void 0:s.children)==null?void 0:d.filter(o=>!o.isDisabled).map(o=>o.id))||[];j(o=>o.includes(t)?n?l.filter(c=>c!==t&&o.includes(c)).length?o.filter(c=>c!==t):o.filter(c=>c!==i&&c!==t):o.filter(a=>a!==t&&!l.includes(a)):n?i&&o.includes(i)?[...o,t]:[...o,t,i]:[...o,t,...l])},V=t=>()=>{console.log(t),j([t]),T(!1),F([t])},Ae=()=>{C?(T(!1),F(p)):T(!0)};m.useEffect(()=>{U(e)},[e]),m.useEffect(()=>{const t=b?u.reduce((s,i)=>{const l=e.find(d=>d.id===i);if(l)s.push(i),l.children&&s.push(...l.children.map(d=>d.id));else{const d=e.find(o=>{var a;return(a=o.children)==null?void 0:a.some(c=>c.id===i)});d&&s.push(d.id)}return s},[]):u,n=Array.from(new Set(t));j(n)},[u,e]);const ve=(t,n)=>{const{checked:s}=n;if(s){const i=e.flatMap(l=>{var a;const d=l.isDisabled&&!p.includes(l.id)?[]:[l.id],o=((a=l.children)==null?void 0:a.filter(c=>!c.isDisabled||p.includes(c.id)).map(c=>c.id))||[];return[...d,...o]});j(i)}else{const i=e.flatMap(d=>{var o;return((o=d.children)==null?void 0:o.filter(a=>a.isDisabled).map(a=>a.id))||[]}),l=p.filter(d=>i.includes(d));j(l)}};m.useEffect(()=>{const t=Ee.filter(e,n=>{var s;return n.label.toLowerCase().includes(M.toLowerCase())||((s=n.children)==null?void 0:s.some(i=>i.label.toLowerCase().includes(M.toLowerCase())))});U(t)},[M]),m.useEffect(()=>{const t=()=>{if(_.current){const n=_.current.getBoundingClientRect();window.innerHeight-n.bottom<300?H(!0):H(!1)}};return C&&t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[C]);const J=t=>()=>{B(!!t)},Le=t=>()=>{h.includes(t)?G(h.filter(n=>n!==t)):G(n=>[...n,t])},K=()=>{const t=[];return e.forEach(n=>{var i;const s=(i=n.children)==null?void 0:i.filter(l=>p.includes(l.id));if(p.includes(n.id)||s!=null&&s.length)if(Ce){const l=s==null?void 0:s.filter(d=>!d.isDisabled);if(l&&l.length>0){const d=l.map(o=>o.label).join(", ");(p.includes(n.id)||l.some(o=>p.includes(o.id)))&&t.push(`${n.label}${d?": "+d:""}`)}}else{const l=s==null?void 0:s.map(d=>d.label).join(", ");t.push(`${n.label}${l?": "+l:""}`)}}),t.join(" ; ")};return r.jsx(Oe,{theme:z,children:r.jsxs(Te,{ref:_,children:[r.jsxs(Me,{onClick:Ae,children:[r.jsx(S,{text:K()?K():N||D.SELECT,type:"body",id:"dropdown-value"}),r.jsx(O,{icon:`chevron ${C?"up":"down"}`,size:"small",color:"#0000008A"})]}),C&&r.jsxs(_e,{openUp:$e,children:[k&&r.jsx(We,{children:r.jsx(ke,{placeholder:je||D.SEARCH,onChange:t=>De(t.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),b&&r.jsxs(qe,{children:[r.jsx(q,{label:D.SELECT_ALL,checked:p.length===e.length+e.reduce((t,n)=>{var s;return t+(((s=n.children)==null?void 0:s.length)||0)},0),onChange:ve}),r.jsxs(Re,{children:[r.jsx(Y,{isSelected:x,onClick:J(!0),children:r.jsx(S,{text:D.ALL,type:"body",id:"dropdown-value",color:x?"#00CD7C":"#767676"})})," ","|"," ",r.jsx(Y,{isSelected:!x,onClick:J(!1),children:r.jsx(S,{text:D.SELECTED,type:"body",id:"dropdown-value",color:x?"#767676":"#00CD7C"})})]})]}),r.jsx(ze,{isMultiSelect:b,children:Ie.map(t=>{var n,s;return!x&&!p.includes(t.id)?null:r.jsxs(Q.Fragment,{children:[r.jsxs(X,{isCollapsed:h==null?void 0:h.includes(t.id),isCollapsible:E,children:[b?r.jsxs(Z,{children:[r.jsx(q,{checked:p.includes(t.id)||((n=t.children)==null?void 0:n.every(i=>p.includes(i.id))),onChange:W(t.id,!1),disabled:t.isDisabled}),t==null?void 0:t.icon,r.jsx(R,{onClick:W(t.id,!1),children:r.jsx(S,{text:t.label,type:"body",id:"dropdown-value"})})]}):r.jsx(R,{onClick:V(t.id),children:r.jsx(S,{text:t.label,type:"body",id:"dropdown-value"})}),E&&r.jsx(O,{icon:`chevron ${h!=null&&h.includes(t.id)?"down":"up"}`,size:"small",color:"#9CA3AF",style:{color:"#9CA3AF"},onClick:Le(t.id)})]},t.id),!(h!=null&&h.includes(t.id))&&r.jsx(Q.Fragment,{children:(s=t.children)==null?void 0:s.map(i=>!x&&!p.includes(i.id)?null:r.jsx(X,{ischild:!0,isCollapsible:E,children:b?r.jsxs(Z,{ischild:!0,children:[r.jsx(q,{label:i.label,checked:p.includes(i.id),onChange:W(i.id,!0),disabled:i.isDisabled}),i==null?void 0:i.icon]}):r.jsx(R,{onClick:V(i.id),children:r.jsx(S,{text:i.label,type:"body",id:"dropdown-value"})})},i.id))})]},t.id)})})]})]})})},P=ye;ye.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const jt={title:"AdvancedMultiSelectDropdown",component:P},y=e=>r.jsx(P,{...e}),f=y.bind({});f.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,isCollapsible:!1,defaultSelectedItems:[],onSelect:e=>{console.log(e)},options:[{label:"Option 1",id:"1",icon:r.jsx(O,{icon:"food",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:r.jsx(O,{icon:"food",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const $=y.bind({});$.args={...f.args,options:Array(100).fill(null).map((e,u)=>({label:`Option ${u+1}`,id:`${u+1}`}))};const I=y.bind({});I.args={...f.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const A=y.bind({});A.args={...f.args,placeholder:"Select your options..."};const v=y.bind({});v.args={...f.args,isSearchable:!0};const w=e=>{const[u,b]=m.useState([]);return r.jsx(P,{...e,isMultiSelect:!1,onSelect:k=>{b(k)},defaultSelectedItems:u})};w.args={...f.args,isMultiSelect:!1};const L=y.bind({});L.args={...f.args,isCollapsible:!0};w.__docgenInfo={description:"",methods:[],displayName:"withSingleSelection"};var ee,te,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,ne;$.parameters={...$.parameters,docs:{...(se=$.parameters)==null?void 0:se.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ne=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var oe,le,de;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(de=(le=I.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ae,ce,pe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(pe=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,he;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var fe,ge,be;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return <AdvancedMultiSelectDropdown {...args} isMultiSelect={false} onSelect={(selectedItems: string[]) => {
    setSelectedItems(selectedItems);
  }} defaultSelectedItems={selectedItems} />;
}`,...(be=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var xe,Se,we;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(we=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const Ct=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible"];export{A as CustomPlaceholder,f as Default,$ as DropdownWithLongList,I as DropdownWithPreselectedOptions,v as WithSearchEnabled,Ct as __namedExportsOrder,jt as default,L as withCollapsible,w as withSingleSelection};
