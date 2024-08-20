import{j as r}from"./jsx-runtime-ffb262ed.js";import{R as c,r as k}from"./index-76fb7be0.js";import{_ as d}from"./extends-98964cd2.js";import{_ as le}from"./inheritsLoose-c82a83d4.js";import{i as K,b as W,_ as U}from"./factories-aa9c7902.js";import{c as V,y as O,u as o,g as T,b as N}from"./getElementType-800224f7.js";import{B as G}from"./Button-1eadaef4.js";import{g as ce,i as ee}from"./childrenUtils-ad5f8e12.js";import{L as de}from"./Label-f2be6096.js";import{C as re}from"./Checkbox-b5314c7e.js";import{R as ae}from"./Radio-e2d21675.js";import{D as A}from"./Dropdown-317d6a86.js";import{I as me}from"./Input-118b97ba.js";import{T as ue}from"./TextArea-bc3630c6.js";import{L as pe}from"./Loader-1f152c78.js";import{L as he}from"./ltButton-9cc67321.js";/* empty css                     */import"./_commonjsHelpers-de833af9.js";import"./Icon-f4a5e358.js";import"./map-5ec937e9.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./ModernAutoControlledComponent-922f5d0f.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-09ff187c.js";import"./includes-2d2ad27d.js";import"./Portal-41e64c31.js";import"./_baseSet-b544df4d.js";import"./without-8297d7fd.js";import"./isEmpty-a3120e76.js";import"./deburr-046b2e64.js";import"./pick-303a328b.js";import"./index-901c962e.js";import"./_arrayReduce-865b0d3f.js";function E(e){return c.createElement(A,d({},e,{selection:!0}))}E.handledProps=["options"];E.propTypes={};E.Divider=A.Divider;E.Header=A.Header;E.Item=A.Item;E.Menu=A.Menu;function b(e){var n=e.children,s=e.className,a=e.content,t=e.control,v=e.disabled,l=e.error,g=e.inline,m=e.label,i=e.required,C=e.type,f=e.width,h=e.id,L=V(o(v,"disabled"),o(l,"error"),o(g,"inline"),o(i,"required"),O(f,"wide"),"field",s),w=T(b,e),p=N(b,e),x=ce(l,"pointing","above"),u=de.create(l,{autoGenerateKey:!1,defaultProps:{prompt:!0,pointing:x,id:h?h+"-error-message":void 0,role:"alert","aria-atomic":!0}}),j=(x==="below"||x==="right")&&u,P=(x==="above"||x==="left")&&u;if(K(t))return K(m)?c.createElement(p,d({},w,{className:L,id:h}),ee(n)?a:n):c.createElement(p,d({},w,{className:L,id:h}),j,W(m,{autoGenerateKey:!1}),P);var $=h&&l?h+"-error-message":null,B={"aria-describedby":$,"aria-invalid":l?!0:void 0},Z=d({},w,{content:a,children:n,disabled:v,required:i,type:C,id:h});return t==="input"&&(C==="checkbox"||C==="radio")?c.createElement(p,{className:L},c.createElement("label",null,j,k.createElement(t,d({},B,Z))," ",m,P)):t===re||t===ae?c.createElement(p,{className:L},j,k.createElement(t,d({},B,Z,{label:m})),P):c.createElement(p,{className:L},W(m,{defaultProps:{htmlFor:h},autoGenerateKey:!1}),j,k.createElement(t,d({},B,Z)),P)}b.handledProps=["as","children","className","content","control","disabled","error","id","inline","label","required","type","width"];b.propTypes={};function _(e){var n=e.control,s=T(_,e),a=N(_,e);return c.createElement(a,d({},s,{control:n}))}_.handledProps=["as","control"];_.propTypes={};_.defaultProps={as:b,control:G};function F(e){var n=e.control,s=T(F,e),a=N(F,e);return c.createElement(a,d({},s,{control:n}))}F.handledProps=["as","control"];F.propTypes={};F.defaultProps={as:b,control:re};function H(e){var n=e.control,s=T(H,e),a=N(H,e);return c.createElement(a,d({},s,{control:n}))}H.handledProps=["as","control"];H.propTypes={};H.defaultProps={as:b,control:A};function z(e){var n=e.children,s=e.className,a=e.grouped,t=e.inline,v=e.unstackable,l=e.widths,g=V(o(a,"grouped"),o(t,"inline"),o(v,"unstackable"),O(l,null,!0),"fields",s),m=T(z,e),i=N(z,e);return c.createElement(i,d({},m,{className:g}),n)}z.handledProps=["as","children","className","grouped","inline","unstackable","widths"];z.propTypes={};function I(e){var n=e.control,s=T(I,e),a=N(I,e);return c.createElement(a,d({},s,{control:n}))}I.handledProps=["as","control"];I.propTypes={};I.defaultProps={as:b,control:me};function S(e){var n=e.control,s=T(S,e),a=N(S,e);return c.createElement(a,d({},s,{control:n}))}S.handledProps=["as","control"];S.propTypes={};S.defaultProps={as:b,control:ae};function D(e){var n=e.control,s=e.options,a=T(D,e),t=N(D,e);return c.createElement(t,d({},a,{control:n,options:s}))}D.handledProps=["as","control","options"];D.propTypes={};D.defaultProps={as:b,control:E};function q(e){var n=e.control,s=T(q,e),a=N(q,e);return c.createElement(a,d({},s,{control:n}))}q.handledProps=["as","control"];q.propTypes={};q.defaultProps={as:b,control:ue};var y=function(e){le(n,e);function n(){for(var a,t=arguments.length,v=new Array(t),l=0;l<t;l++)v[l]=arguments[l];return a=e.call.apply(e,[this].concat(v))||this,a.handleSubmit=function(g){var m=a.props.action;typeof m!="string"&&U(g,"preventDefault");for(var i=arguments.length,C=new Array(i>1?i-1:0),f=1;f<i;f++)C[f-1]=arguments[f];U.apply(void 0,[a.props,"onSubmit",g,a.props].concat(C))},a}var s=n.prototype;return s.render=function(){var t=this.props,v=t.action,l=t.children,g=t.className,m=t.error,i=t.inverted,C=t.loading,f=t.reply,h=t.size,L=t.success,w=t.unstackable,p=t.warning,x=t.widths,u=V("ui",h,o(m,"error"),o(i,"inverted"),o(C,"loading"),o(f,"reply"),o(L,"success"),o(w,"unstackable"),o(p,"warning"),O(x,null,!0),"form",g),j=T(n,this.props),P=N(n,this.props);return c.createElement(P,d({},j,{action:v,className:u,onSubmit:this.handleSubmit}),l)},n}(k.Component);y.handledProps=["action","as","children","className","error","inverted","loading","onSubmit","reply","size","success","unstackable","warning","widths"];y.propTypes={};y.defaultProps={as:"form"};y.Field=b;y.Button=_;y.Checkbox=F;y.Dropdown=H;y.Group=z;y.Input=I;y.Radio=S;y.Select=D;y.TextArea=q;const J=y;function M(e){var n=e.children,s=e.className,a=e.clearing,t=e.content,v=e.fitted,l=e.hidden,g=e.horizontal,m=e.inverted,i=e.section,C=e.vertical,f=V("ui",o(a,"clearing"),o(v,"fitted"),o(l,"hidden"),o(g,"horizontal"),o(m,"inverted"),o(i,"section"),o(C,"vertical"),"divider",s),h=T(M,e),L=N(M,e);return c.createElement(L,d({},h,{className:f}),ee(n)?t:n)}M.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"];M.propTypes={};const te=e=>r.jsxs("svg",{width:"22",height:"16",viewBox:"0 0 22 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("g",{clipPath:"url(#clip0_13152_107174)",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.1787 1.95157C21.5923 2.36514 21.877 2.90762 21.9683 3.51276C22.0023 3.74551 22.0005 3.94603 22.0005 4.1752V7.95108C22.0005 8.15518 22.0059 8.35749 21.988 8.56159C21.9092 9.40664 21.4365 10.1855 20.724 10.6456C19.8216 11.231 18.7904 11.0967 17.7108 11.0967C18.0671 12.0779 18.785 12.9838 19.5602 13.6695L19.2702 14.2138L19.2612 14.2102C17.3832 13.7268 15.403 12.6168 14.1963 11.095C13.4497 11.0878 12.8392 11.0967 12.0944 10.9965C11.2744 11.4942 10.2987 11.8183 9.33546 11.8183C8.71062 12.5971 7.98373 13.2631 7.153 13.8092C6.25603 14.3982 5.24269 14.8458 4.11297 15.143C4.05746 15.1573 4.00196 15.1716 3.94467 15.1788C3.74952 15.2003 3.54542 15.1304 3.40577 14.9729C3.1766 14.7151 3.20167 14.3194 3.45948 14.0902C4.18995 13.4439 4.59815 12.7349 4.88998 11.8218C3.46485 11.8218 2.27247 11.9722 1.11231 10.8139C-0.336091 9.36368 0.0237721 5.99242 0.0971771 3.96931C0.120452 3.3194 0.0756927 2.89151 0.335296 2.21296C0.671884 1.32852 1.37013 0.614163 2.25278 0.259671C3.07813 -0.0733372 3.97511 0.00901956 4.84522 0.00901956H10.1358C10.5243 0.00901956 10.8412 0.00722919 11.2386 0.100328C11.9082 0.2543 12.5151 0.610582 12.9896 1.128L19.0983 1.12979C19.9058 1.12979 20.5986 1.3697 21.1787 1.95157ZM17.8916 7.66104H16.2857L16.0637 8.45954H14.6242C15.1058 7.09886 15.5892 5.7364 16.0708 4.37393C16.2445 3.88158 16.4414 3.06696 17.0734 3.06696C17.7287 3.06696 17.9453 3.81354 18.1279 4.32917L19.5925 8.45775H18.1172L17.8916 7.66104ZM17.5962 6.61368L17.0913 4.87344L16.59 6.61368H17.5962ZM14.8874 12.8298L13.8436 11.9669L12.5402 13.5764L10.6478 11.9346L9.75441 12.9444L11.8044 14.5754L13.4658 14.4322L14.8874 12.8298ZM13.7236 1.76537C14.3359 4.14834 14.9894 8.33422 13.3459 10.454C13.7344 10.4594 14.1175 10.4594 14.506 10.4594C15.3869 11.6303 16.5184 12.4485 17.8504 13.0465C17.9758 13.102 18.1029 13.1575 18.23 13.2076C17.777 12.6597 17.3796 12.0277 17.1271 11.3581C17.0108 11.0484 16.9481 10.7763 16.8693 10.4594C17.2346 10.4594 17.5926 10.463 17.9596 10.4755C18.7707 10.5041 19.6247 10.5274 20.2997 10.1496C20.5915 9.98672 20.826 9.75576 21.0104 9.47826C21.1734 9.2294 21.2879 8.94473 21.3381 8.64216C21.3757 8.41299 21.3631 8.16055 21.3631 7.9278V4.05166C21.3631 3.94961 21.3649 3.85651 21.3578 3.75446C21.3166 3.22989 21.0838 2.75365 20.7293 2.39916C20.3856 2.05362 19.9255 1.82445 19.417 1.77432C19.2863 1.76179 19.1574 1.76358 19.0267 1.76358L13.7236 1.76537ZM3.79786 2.41527H6.20411V1.73672H7.27833V2.41527H9.69353V3.52888H9.1976C9.15821 3.84219 9.08481 4.15371 8.98455 4.46166H8.98634C8.88429 4.77497 8.74464 5.09008 8.57814 5.4016C8.29526 5.92976 7.93002 6.43643 7.5075 6.92341C8.18425 7.73265 9.02215 8.43627 10.023 9.07722L9.46974 9.93838C8.42058 9.26521 7.52898 8.52399 6.79672 7.66999C6.14145 8.30378 5.39845 8.8946 4.61785 9.4335L4.03598 8.59203C4.80763 8.0585 5.53989 7.47484 6.17009 6.85358C5.58823 6.00316 5.14422 5.0489 4.83627 3.9514L5.82276 3.67569C6.07521 4.57624 6.4297 5.36758 6.88445 6.07657C7.19418 5.70059 7.46274 5.31566 7.67579 4.91999C7.81007 4.66934 7.92465 4.40795 8.01238 4.14118H8.01417C8.08041 3.94245 8.13054 3.73656 8.16456 3.52888H3.79786V2.41527Z",fill:"#6B7280"})}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_13152_107174",children:r.jsx("rect",{width:"22",height:"15.1841",fill:"white"})})})]});te.__docgenInfo={description:"",methods:[],displayName:"LanguageTranslatorIcon"};const ne=e=>r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5 15L15 5M5 5L15 15",stroke:"#F87171",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});ne.__docgenInfo={description:"",methods:[],displayName:"CrossIcon"};const se=e=>r.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M4.1665 10.834L7.49984 14.1673L15.8332 5.83398",stroke:"#00CD7C",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});se.__docgenInfo={description:"",methods:[],displayName:"CheckIcon"};const oe=({inputFields:e,languages:n,isLoading:s,limit:a,onSave:t,label:v,btnClassName:l})=>{const[g,m]=k.useState(!1),[i,C]=k.useState(n),f=()=>{m(!g)},h=(w,p,x)=>{const u=[...i];u[w].variants[p]=x,C(u)},L=()=>{t(i),m(!1)};return r.jsxs("div",{children:[r.jsx(he,{onClick:f,label:v,className:l}),r.jsx("div",{className:`translation-panel ${g?"open":"closed"}`,children:r.jsxs("div",{className:"translation-panel-content",children:[r.jsxs("div",{className:"translation-panel-header",children:[r.jsxs("div",{className:"header-left",children:[r.jsx(te,{}),r.jsx("div",{className:"title",children:"Add Translations"})]}),r.jsxs("div",{className:"translation-panel-btn",children:[r.jsx(G,{icon:!0,onClick:f,circular:!0,className:"btn",children:r.jsx(ne,{})}),r.jsx(G,{icon:!0,onClick:L,circular:!0,className:"btn",children:r.jsx(se,{})})]})]}),r.jsx(M,{}),r.jsx("div",{className:"translation-panel-body",children:s?r.jsx(pe,{active:!0}):r.jsx(J,{children:i.map((w,p)=>{var x;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"translation-panel-language",children:[r.jsxs("div",{children:[r.jsxs("span",{children:[w.name," "]}),(x=w.tags)==null?void 0:x.map((u,j)=>r.jsx("span",{className:"tag",children:u},j))]}),e.map((u,j)=>{var P,$;return r.jsxs(J.Field,{children:[r.jsxs("div",{className:"label",children:[r.jsx("label",{children:u.label}),a?r.jsx("span",{children:`${((P=i[p].variants[u.key])==null?void 0:P.length)||0}/${a}`}):null]}),r.jsx("input",{placeholder:u.placeholder,value:i[p].variants[u.key]||"",className:a&&(($=i[p].variants[u.key])==null?void 0:$.length)>a?"error":"",onChange:B=>h(p,u.key,B.target.value)})]},j)})]},p),r.jsx(M,{})]})})})})]})})]})},ie=oe;oe.__docgenInfo={description:"",methods:[],displayName:"TranslationPanel",props:{inputFields:{required:!0,tsType:{name:"Array",elements:[{name:"InputField"}],raw:"InputField[]"},description:""},languages:{required:!0,tsType:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},limit:{required:!1,tsType:{name:"number"},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(languages: Language[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"Language"}],raw:"Language[]"},name:"languages"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""},btnClassName:{required:!1,tsType:{name:"string"},description:""}}};const Qe={title:"TranslationPanel",component:ie},ve=e=>r.jsx(ie,{...e}),R=ve.bind({});R.args={inputFields:[{label:"Product Name",key:"product_name",placeholder:"enter product name",value:""},{label:"Product Display Name",key:"product_display_name",placeholder:"enter product display name",value:""},{label:"Product Description",key:"product_description",placeholder:"enter product description",value:""}],languages:[{name:"Language Name One",tags:["default"],variants:{product_name:"xxx",product_description:"",product_display_name:""}},{name:"Language Name Two",tags:[],variants:{}},{name:"Language Name Three",tags:[],variants:{}}],isLoading:!1,limit:30,onSave:()=>{console.log("Saved")},label:"Edit Translations"};var Q,X,Y;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:"(args: any) => <TranslationPanel {...args} />",...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Xe=["Default"];export{R as Default,Xe as __namedExportsOrder,Qe as default};