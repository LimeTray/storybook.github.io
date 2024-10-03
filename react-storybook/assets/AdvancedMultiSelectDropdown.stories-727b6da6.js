import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as u,R as J}from"./index-ad58220e.js";import{d as f,o as ke}from"./styled-components.browser.esm-d2d81691.js";import{t as _,T as w}from"./index-df1ca142.js";import{L as k}from"./index-6dcb29cb.js";import{S as Ie}from"./searchComponent-2c6d643d.js";import{L as q}from"./ltCheckBox-fb658f45.js";import{S as j}from"./stringConstants-4e8cb88a.js";import{_ as Ee}from"./lodash-9978a6f3.js";import"./_commonjsHelpers-de833af9.js";import"./Header-30441d32.js";import"./extends-4c19d496.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Button-21321eef.js";import"./map-20538cdf.js";import"./Input-3f8aa787.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";const Te=f.div`
  position: relative;
  width: 100%;
`,Me=f.div`
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
`,We=f.div`
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
`,R=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
`,qe=f.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,Re=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,K=f.div`
  padding: ${({theme:e})=>`${parseInt(e.padding.xsmall.replace("px",""))*3}px ${parseInt(e.padding.xsmall.replace("px",""))*5}px`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e})=>!e&&`border-bottom: 1px solid ${_.colors.border}3f;`}
  ${({isCollapsible:e,ischild:g})=>e&&!g&&`background-color: ${_.colors.backgroundSecondary};`}
`,_e=f.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,Q=f.span`
  color: ${({theme:e,isSelected:g})=>g?e.colors.primary:e.colors.muted};
`,ze=f.div`
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
`,X=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
`,we=({options:e,defaultSelectedItems:g,isMultiSelect:O,isSearchable:ye,isCollapsible:I,onSelect:z,searchPlaceholder:je,placeholder:P,showOnlyEnabledInInput:Ce=!1})=>{const[p,S]=u.useState([]),[y,E]=u.useState(!1),[T,De]=u.useState(""),[$e,F]=u.useState(!1),M=u.useRef(null),[x,N]=u.useState(!0),[Ae,H]=u.useState(e),[m,B]=u.useState([]),W=(r,n)=>()=>{var a;const s=e.find(o=>{var d;return n?(d=o.children)==null?void 0:d.some(c=>c.id===r):o.id===r}),i=s==null?void 0:s.id,l=((a=s==null?void 0:s.children)==null?void 0:a.filter(o=>!o.isDisabled).map(o=>o.id))||[];S(o=>o.includes(r)?n?l.filter(c=>c!==r&&o.includes(c)).length?o.filter(c=>c!==r):o.filter(c=>c!==i&&c!==r):o.filter(d=>d!==r&&!l.includes(d)):n?i&&o.includes(i)?[...o,r]:[...o,r,i]:[...o,r,...l])},U=r=>()=>{S([r]),E(!1),z([r])},ve=()=>{y?(E(!1),z(p)):E(!0)};u.useEffect(()=>{H(e)},[e]),u.useEffect(()=>{const r=g.reduce((s,i)=>{const l=e.find(a=>a.id===i);if(l)s.push(i),l.children&&s.push(...l.children.map(a=>a.id));else{const a=e.find(o=>{var d;return(d=o.children)==null?void 0:d.some(c=>c.id===i)});a&&(s.push(i),s.push(a.id))}return s},[]),n=Array.from(new Set(r));S(n)},[g,e]);const Le=(r,n)=>{const{checked:s}=n;if(s){const i=e.flatMap(l=>{var d;const a=l.isDisabled&&!p.includes(l.id)?[]:[l.id],o=((d=l.children)==null?void 0:d.filter(c=>!c.isDisabled||p.includes(c.id)).map(c=>c.id))||[];return[...a,...o]});S(i)}else{const i=e.flatMap(a=>{var o;return((o=a.children)==null?void 0:o.filter(d=>d.isDisabled).map(d=>d.id))||[]}),l=p.filter(a=>i.includes(a));S(l)}};u.useEffect(()=>{const r=Ee.filter(e,n=>{var s;return n.label.toLowerCase().includes(T.toLowerCase())||((s=n.children)==null?void 0:s.some(i=>i.label.toLowerCase().includes(T.toLowerCase())))});H(r)},[T]),u.useEffect(()=>{const r=()=>{if(M.current){const n=M.current.getBoundingClientRect();window.innerHeight-n.bottom<300?F(!0):F(!1)}};return y&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[y]);const G=r=>()=>{N(!!r)},Oe=r=>()=>{m.includes(r)?B(m.filter(n=>n!==r)):B(n=>[...n,r])},V=()=>{const r=[];return e.forEach(n=>{var i;const s=(i=n.children)==null?void 0:i.filter(l=>p.includes(l.id));if(p.includes(n.id)||s!=null&&s.length)if(Ce){const l=s==null?void 0:s.filter(a=>!a.isDisabled);if(l&&l.length>0){const a=l.map(o=>o.label).join(", ");(p.includes(n.id)||l.some(o=>p.includes(o.id)))&&r.push(`${n.label}${a?": "+a:""}`)}}else{const l=s==null?void 0:s.map(a=>a.label).join(", ");r.push(`${n.label}${l?": "+l:""}`)}}),r.join(" ; ")};return t.jsx(ke,{theme:_,children:t.jsxs(Te,{ref:M,children:[t.jsxs(Me,{onClick:ve,children:[t.jsx(w,{text:V()?V():P||j.SELECT,type:"body",id:"dropdown-value"}),t.jsx(k,{icon:`chevron ${y?"up":"down"}`,size:"small",color:"#0000008A"})]}),y&&t.jsxs(We,{openUp:$e,children:[ye&&t.jsx(qe,{children:t.jsx(Ie,{placeholder:je||j.SEARCH,onChange:r=>De(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),O&&t.jsxs(Re,{children:[t.jsx(q,{label:j.SELECT_ALL,checked:p.length===e.length+e.reduce((r,n)=>{var s;return r+(((s=n.children)==null?void 0:s.length)||0)},0),onChange:Le}),t.jsxs(_e,{children:[t.jsx(Q,{isSelected:x,onClick:G(!0),children:t.jsx(w,{text:j.ALL,type:"body",id:"dropdown-value",color:x?"#00CD7C":"#767676"})})," ","|"," ",t.jsx(Q,{isSelected:!x,onClick:G(!1),children:t.jsx(w,{text:j.SELECTED,type:"body",id:"dropdown-value",color:x?"#767676":"#00CD7C"})})]})]}),t.jsx(ze,{isMultiSelect:O,children:Ae.map(r=>{var n,s;return!x&&!p.includes(r.id)?null:t.jsxs(J.Fragment,{children:[t.jsxs(K,{isCollapsed:m==null?void 0:m.includes(r.id),isCollapsible:I,children:[O?t.jsxs(X,{children:[t.jsx(q,{checked:p.includes(r.id)||((n=r.children)==null?void 0:n.every(i=>p.includes(i.id))),onChange:W(r.id,!1),disabled:r.isDisabled}),r==null?void 0:r.icon,t.jsx(R,{onClick:W(r.id,!1),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})})]}):t.jsx(R,{onClick:U(r.id),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})}),I&&t.jsx(k,{icon:`chevron ${m!=null&&m.includes(r.id)?"down":"up"}`,size:"small",color:"#9CA3AF",style:{color:"#9CA3AF"},onClick:Oe(r.id)})]},r.id),!(m!=null&&m.includes(r.id))&&t.jsx(J.Fragment,{children:(s=r.children)==null?void 0:s.map(i=>!x&&!p.includes(i.id)?null:t.jsx(K,{ischild:!0,isCollapsible:I,children:O?t.jsxs(X,{ischild:!0,children:[t.jsx(q,{label:i.label,checked:p.includes(i.id),onChange:W(i.id,!0),disabled:i.isDisabled}),i==null?void 0:i.icon]}):t.jsx(R,{onClick:U(i.id),children:t.jsx(w,{text:i.label,type:"body",id:"dropdown-value"})})},i.id))})]},r.id)})})]})]})})},Se=we;we.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},showOnlyEnabledInInput:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const yr={title:"AdvancedMultiSelectDropdown",component:Se},b=e=>t.jsx(Se,{...e}),h=b.bind({});h.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,isCollapsible:!1,defaultSelectedItems:[],onSelect:e=>{console.log(e)},options:[{label:"Option 1",id:"1",icon:t.jsx(k,{icon:"food",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:t.jsx(k,{icon:"food",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const C=b.bind({});C.args={...h.args,options:Array(100).fill(null).map((e,g)=>({label:`Option ${g+1}`,id:`${g+1}`}))};const D=b.bind({});D.args={...h.args,defaultSelectedItems:["1","2.1"],showOnlyEnabledInInput:!0};const $=b.bind({});$.args={...h.args,placeholder:"Select your options..."};const A=b.bind({});A.args={...h.args,searchable:!0};const v=b.bind({});v.args={...h.args,isMultiSelect:!1};const L=b.bind({});L.args={...h.args,isCollapsible:!0};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,se,te;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(te=(se=C.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,ne,oe;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(oe=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,ae,de;$.parameters={...$.parameters,docs:{...(le=$.parameters)==null?void 0:le.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(de=(ae=$.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var ce,pe,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ue=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,he,fe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(fe=(he=v.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,be,xe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(xe=(be=L.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};const jr=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible"];export{$ as CustomPlaceholder,h as Default,C as DropdownWithLongList,D as DropdownWithPreselectedOptions,A as WithSearchEnabled,jr as __namedExportsOrder,yr as default,L as withCollapsible,v as withSingleSelection};
