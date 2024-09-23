import{j as t}from"./jsx-runtime-8406ef1e.js";import{r as u,R as J}from"./index-ad58220e.js";import{d as g,o as Le}from"./styled-components.browser.esm-d2d81691.js";import{t as q,T as w}from"./index-a0004372.js";import{L as O}from"./index-6dcb29cb.js";import{S as Oe}from"./searchComponent-2c6d643d.js";import{L as R}from"./ltCheckBox-fb658f45.js";import{S as j}from"./stringConstants-4e8cb88a.js";import{_ as Te}from"./lodash-9978a6f3.js";import"./_commonjsHelpers-de833af9.js";import"./Header-30441d32.js";import"./extends-4c19d496.js";import"./getElementType-ff0d42f5.js";import"./childrenUtils-dd3b0ba5.js";import"./Icon-370c2d23.js";import"./inheritsLoose-5494d9cc.js";import"./factories-df82d7d3.js";import"./Label-d5345000.js";import"./ModernAutoControlledComponent-6bbe7d3d.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-2b22d933.js";import"./includes-192f9362.js";import"./Portal-8d2f321a.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./Button-21321eef.js";import"./map-20538cdf.js";import"./Input-3f8aa787.js";import"./Search-36bb2c3d.js";import"./isEmpty-b690c58c.js";import"./index-f77928b3.js";import"./_arrayReduce-865b0d3f.js";import"./Checkbox-cb5dd6fb.js";import"./_baseSet-d58de3a8.js";const Ee=g.div`
  position: relative;
  width: 100%;
`,Ie=g.div`
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
`,Me=g.div`
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
`,_=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  cursor: pointer;
`,We=g.div`
  padding: ${({theme:e})=>e.spacing.sm};
`,Re=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({theme:e})=>e.spacing.xs};
  padding: 0 ${({theme:e})=>e.spacing.sm};
`,K=g.div`
  padding: ${({theme:e})=>e.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ischild:e})=>e&&"padding-left: 28px;"}
  ${({isCollapsible:e})=>!e&&`border-bottom: 1px solid ${q.colors.border}3f;`}
  ${({isCollapsible:e,ischild:f})=>e&&!f&&`background-color: ${q.colors.backgroundSecondary};`}
`,_e=g.span`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  align-items: center;
  & > span {
    text-decoration: underline;
  }
  gap: ${({theme:e})=>e.spacing.xxs};
  cursor: pointer;
`,Q=g.span`
  color: ${({theme:e,isSelected:f})=>f?e.colors.primary:e.colors.muted};
`,qe=g.div`
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
  padding: 0 ${({theme:e})=>e.spacing.xs};
`,V=g.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  ${({ischild:e})=>e&&"justify-content: space-between;"}
  width: 100%;
`,xe=({options:e,defaultSelectedItems:f,isMultiSelect:L,isSearchable:Se,isCollapsible:T,onSelect:z,searchPlaceholder:ye,placeholder:P})=>{const[p,S]=u.useState([]),[y,E]=u.useState(!1),[I,je]=u.useState(""),[Ce,F]=u.useState(!1),M=u.useRef(null),[x,N]=u.useState(!0),[De,$e]=u.useState(e),[m,H]=u.useState([]),W=(r,o)=>()=>{var a;const i=e.find(n=>{var l;return o?(l=n.children)==null?void 0:l.some(c=>c.id===r):n.id===r}),s=i==null?void 0:i.id,d=((a=i==null?void 0:i.children)==null?void 0:a.filter(n=>!n.isDisabled).map(n=>n.id))||[];S(n=>n.includes(r)?o?d.filter(c=>c!==r&&n.includes(c)).length?n.filter(c=>c!==r):n.filter(c=>c!==s&&c!==r):n.filter(l=>l!==r&&!d.includes(l)):o?s&&n.includes(s)?[...n,r]:[...n,r,s]:[...n,r,...d])},B=r=>()=>{S([r]),E(!1),z([r])},Ae=()=>{y?(E(!1),z(p)):E(!0)};u.useEffect(()=>{const r=f.reduce((i,s)=>{const d=e.find(a=>a.id===s);if(d)i.push(s),d.children&&i.push(...d.children.map(a=>a.id));else{const a=e.find(n=>{var l;return(l=n.children)==null?void 0:l.some(c=>c.id===s)});a&&(i.push(s),i.push(a.id))}return i},[]),o=Array.from(new Set(r));S(o)},[f,e]);const ve=(r,o)=>{const{checked:i}=o;if(i){const s=e.flatMap(d=>{var l;const a=d.isDisabled&&!p.includes(d.id)?[]:[d.id],n=((l=d.children)==null?void 0:l.filter(c=>!c.isDisabled||p.includes(c.id)).map(c=>c.id))||[];return[...a,...n]});S(s)}else{const s=e.flatMap(a=>{var n;return((n=a.children)==null?void 0:n.filter(l=>l.isDisabled).map(l=>l.id))||[]}),d=p.filter(a=>s.includes(a));S(d)}};u.useEffect(()=>{const r=Te.filter(e,o=>{var i;return o.label.toLowerCase().includes(I.toLowerCase())||((i=o.children)==null?void 0:i.some(s=>s.label.toLowerCase().includes(I.toLowerCase())))});$e(r)},[I]),u.useEffect(()=>{const r=()=>{if(M.current){const o=M.current.getBoundingClientRect();window.innerHeight-o.bottom<300?F(!0):F(!1)}};return y&&r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[y]);const U=r=>()=>{N(!!r)},ke=r=>()=>{m.includes(r)?H(m.filter(o=>o!==r)):H(o=>[...o,r])},G=()=>{const r=[];return e.forEach(o=>{var s;const i=(s=o.children)==null?void 0:s.filter(d=>p.includes(d.id));if(p.includes(o.id)||i!=null&&i.length){const d=i==null?void 0:i.map(a=>a.label).join(", ");r.push(`${o.label}${d?": "+d:""}`)}}),r.join(" ; ")};return t.jsx(Le,{theme:q,children:t.jsxs(Ee,{ref:M,children:[t.jsxs(Ie,{onClick:Ae,children:[t.jsx(w,{text:G()?G():P||j.SELECT,type:"body",id:"dropdown-value"}),t.jsx(O,{icon:`chevron ${y?"up":"down"}`,size:"small",color:"#0000008A"})]}),y&&t.jsxs(Me,{openUp:Ce,children:[Se&&t.jsx(We,{children:t.jsx(Oe,{placeholder:ye||j.SEARCH,onChange:r=>je(r.target.value),className:"search-input",fluid:!0,SearchProps:{fluid:!0}})}),L&&t.jsxs(Re,{children:[t.jsx(R,{label:j.SELECT_ALL,checked:p.length===e.length+e.reduce((r,o)=>{var i;return r+(((i=o.children)==null?void 0:i.length)||0)},0),onChange:ve}),t.jsxs(_e,{children:[t.jsx(Q,{isSelected:x,onClick:U(!0),children:t.jsx(w,{text:j.ALL,type:"body",id:"dropdown-value",color:x?"#00CD7C":"#767676"})})," ","|"," ",t.jsx(Q,{isSelected:!x,onClick:U(!1),children:t.jsx(w,{text:j.SELECTED,type:"body",id:"dropdown-value",color:x?"#767676":"#00CD7C"})})]})]}),t.jsx(qe,{isMultiSelect:L,children:De.map(r=>{var o,i;return!x&&!p.includes(r.id)?null:t.jsxs(J.Fragment,{children:[t.jsxs(K,{isCollapsed:m==null?void 0:m.includes(r.id),isCollapsible:T,children:[L?t.jsxs(V,{children:[t.jsx(R,{checked:p.includes(r.id)||((o=r.children)==null?void 0:o.every(s=>p.includes(s.id))),onChange:W(r.id,!1),disabled:r.isDisabled}),r==null?void 0:r.icon,t.jsx(_,{onClick:W(r.id,!1),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})})]}):t.jsx(_,{onClick:B(r.id),children:t.jsx(w,{text:r.label,type:"body",id:"dropdown-value"})}),T&&t.jsx(O,{icon:`chevron ${m!=null&&m.includes(r.id)?"down":"up"}`,size:"small",color:"#9CA3AF",style:{color:"#9CA3AF"},onClick:ke(r.id)})]},r.id),!(m!=null&&m.includes(r.id))&&t.jsx(J.Fragment,{children:(i=r.children)==null?void 0:i.map(s=>!x&&!p.includes(s.id)?null:t.jsx(K,{ischild:!0,isCollapsible:T,children:L?t.jsxs(V,{ischild:!0,children:[t.jsx(R,{label:s.label,checked:p.includes(s.id),onChange:W(s.id,!0),disabled:s.isDisabled}),s==null?void 0:s.icon]}):t.jsx(_,{onClick:B(s.id),children:t.jsx(w,{text:s.label,type:"body",id:"dropdown-value"})})},s.id))})]},r.id)})})]})]})})},we=xe;xe.__docgenInfo={description:"",methods:[],displayName:"AdvancedMultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},defaultSelectedItems:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isMultiSelect:{required:!0,tsType:{name:"boolean"},description:""},isSearchable:{required:!0,tsType:{name:"boolean"},description:""},isCollapsible:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedItems: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedItems"}],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""}}};const Sr={title:"AdvancedMultiSelectDropdown",component:we},b=e=>t.jsx(we,{...e}),h=b.bind({});h.args={placeholder:"Select",isMultiSelect:!0,isSearchable:!0,isCollapsible:!1,defaultSelectedItems:[],onSelect:e=>{console.log(e)},options:[{label:"Option 1",id:"1",icon:t.jsx(O,{icon:"food",size:"small",fitted:!0}),children:[{label:"Option 1.1",id:"1.1",icon:t.jsx(O,{icon:"food",size:"small",fitted:!0}),isDisabled:!0},{label:"Option 1.2",id:"1.2",isDisabled:!0}]},{label:"Option 2",id:"2",children:[{label:"Option 2.1",id:"2.1",isDisabled:!0},{label:"Option 2.2",id:"2.2"}]},{label:"Option 3",id:"3",children:[{label:"Option 3.1",id:"3.1"},{label:"Option 3.2",id:"3.2"}]}]};const C=b.bind({});C.args={...h.args,options:Array(100).fill(null).map((e,f)=>({label:`Option ${f+1}`,id:`${f+1}`}))};const D=b.bind({});D.args={...h.args,defaultSelectedItems:["1","2.1"]};const $=b.bind({});$.args={...h.args,placeholder:"Select your options..."};const A=b.bind({});A.args={...h.args,searchable:!0};const v=b.bind({});v.args={...h.args,isMultiSelect:!1};const k=b.bind({});k.args={...h.args,isCollapsible:!0};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(te=(re=C.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ie,oe;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(oe=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ne,de,ae;$.parameters={...$.parameters,docs:{...(ne=$.parameters)==null?void 0:ne.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(ae=(de=$.parameters)==null?void 0:de.docs)==null?void 0:ae.source}}};var le,ce,pe;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(pe=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,he;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,fe,be;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:"args => <AdvancedMultiSelectDropdown {...args} />",...(be=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const yr=["Default","DropdownWithLongList","DropdownWithPreselectedOptions","CustomPlaceholder","WithSearchEnabled","withSingleSelection","withCollapsible"];export{$ as CustomPlaceholder,h as Default,C as DropdownWithLongList,D as DropdownWithPreselectedOptions,A as WithSearchEnabled,yr as __namedExportsOrder,Sr as default,k as withCollapsible,v as withSingleSelection};
