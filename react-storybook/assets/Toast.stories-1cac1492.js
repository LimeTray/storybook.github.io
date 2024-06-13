import{j as m}from"./jsx-runtime-ffb262ed.js";import{S as q}from"./Button-28b2e7e6.js";import{I as Ue}from"./Icon-84915bf2.js";import{r as h,R as v}from"./index-76fb7be0.js";import{c as W}from"./getElementType-ead3b972.js";import{C as Qe}from"./customToastContent-7ac83cef.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-a0d6c822.js";import"./childrenUtils-25a53b67.js";import"./Label-fd2b2d7f.js";import"./includes-ae816ee0.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-194f1060.js";import"./Portal-73b13d0f.js";import"./map-6332fbaf.js";const re=e=>typeof e=="number"&&!isNaN(e),F=e=>typeof e=="string",x=e=>typeof e=="function",de=e=>F(e)||x(e)?e:null,fe=e=>h.isValidElement(e)||F(e)||x(e)||re(e);function Ve(e,t,s){s===void 0&&(s=300);const{scrollHeight:l,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=l+"px",c.transition=`all ${s}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(t,s)})})}function pe(e){let{enter:t,exit:s,appendPosition:l=!1,collapse:c=!0,collapseDuration:r=300}=e;return function(o){let{children:n,position:B,preventExitTransition:E,done:T,nodeRef:C,isIn:k}=o;const i=l?`${t}--${B}`:t,d=l?`${s}--${B}`:s,p=h.useRef(0);return h.useLayoutEffect(()=>{const a=C.current,u=i.split(" "),b=_=>{_.target===C.current&&(a.dispatchEvent(new Event("d")),a.removeEventListener("animationend",b),a.removeEventListener("animationcancel",b),p.current===0&&_.type!=="animationcancel"&&a.classList.remove(...u))};a.classList.add(...u),a.addEventListener("animationend",b),a.addEventListener("animationcancel",b)},[]),h.useEffect(()=>{const a=C.current,u=()=>{a.removeEventListener("animationend",u),c?Ve(a,T,r):T()};k||(E?u():(p.current=1,a.className+=` ${d}`,a.addEventListener("animationend",u)))},[k]),v.createElement(v.Fragment,null,n)}}function ye(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const N={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const s=this.list.get(e).filter(l=>l!==t);return this.list.set(e,s),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const s=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(s)})}},le=e=>{let{theme:t,type:s,...l}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${s})`,...l})},ge={info:function(e){return v.createElement(le,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(le,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(le,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(le,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}};function Ge(e){const[,t]=h.useReducer(i=>i+1,0),[s,l]=h.useState([]),c=h.useRef(null),r=h.useRef(new Map).current,o=i=>s.indexOf(i)!==-1,n=h.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:i=>r.get(i)}).current;function B(i){let{containerId:d}=i;const{limit:p}=n.props;!p||d&&n.containerId!==d||(n.count-=n.queue.length,n.queue=[])}function E(i){l(d=>i==null?[]:d.filter(p=>p!==i))}function T(){const{toastContent:i,toastProps:d,staleId:p}=n.queue.shift();k(i,d,p)}function C(i,d){let{delay:p,staleId:a,...u}=d;if(!fe(i)||function(A){return!c.current||n.props.enableMultiContainer&&A.containerId!==n.props.containerId||r.has(A.toastId)&&A.updateId==null}(u))return;const{toastId:b,updateId:_,data:f}=u,{props:y}=n,R=()=>E(b),S=_==null;S&&n.count++;const I={...y,style:y.toastStyle,key:n.toastKey++,...Object.fromEntries(Object.entries(u).filter(A=>{let[O,L]=A;return L!=null})),toastId:b,updateId:_,data:f,closeToast:R,isIn:!1,className:de(u.className||y.toastClassName),bodyClassName:de(u.bodyClassName||y.bodyClassName),progressClassName:de(u.progressClassName||y.progressClassName),autoClose:!u.isLoading&&(P=u.autoClose,Q=y.autoClose,P===!1||re(P)&&P>0?P:Q),deleteToast(){const A=ye(r.get(b),"removed");r.delete(b),N.emit(4,A);const O=n.queue.length;if(n.count=b==null?n.count-n.displayedToast:n.count-1,n.count<0&&(n.count=0),O>0){const L=b==null?n.props.limit:1;if(O===1||L===1)n.displayedToast++,T();else{const H=L>O?O:L;n.displayedToast=H;for(let w=0;w<H;w++)T()}}else t()}};var P,Q;I.iconOut=function(A){let{theme:O,type:L,isLoading:H,icon:w}=A,M=null;const $={theme:O,type:L};return w===!1||(x(w)?M=w($):h.isValidElement(w)?M=h.cloneElement(w,$):F(w)||re(w)?M=w:H?M=ge.spinner():(ce=>ce in ge)(L)&&(M=ge[L]($))),M}(I),x(u.onOpen)&&(I.onOpen=u.onOpen),x(u.onClose)&&(I.onClose=u.onClose),I.closeButton=y.closeButton,u.closeButton===!1||fe(u.closeButton)?I.closeButton=u.closeButton:u.closeButton===!0&&(I.closeButton=!fe(y.closeButton)||y.closeButton);let D=i;h.isValidElement(i)&&!F(i.type)?D=h.cloneElement(i,{closeToast:R,toastProps:I,data:f}):x(i)&&(D=i({closeToast:R,toastProps:I,data:f})),y.limit&&y.limit>0&&n.count>y.limit&&S?n.queue.push({toastContent:D,toastProps:I,staleId:a}):re(p)?setTimeout(()=>{k(D,I,a)},p):k(D,I,a)}function k(i,d,p){const{toastId:a}=d;p&&r.delete(p);const u={content:i,props:d};r.set(a,u),l(b=>[...b,a].filter(_=>_!==p)),N.emit(4,ye(u,u.props.updateId==null?"added":"updated"))}return h.useEffect(()=>(n.containerId=e.containerId,N.cancelEmit(3).on(0,C).on(1,i=>c.current&&E(i)).on(5,B).emit(2,n),()=>{r.clear(),N.emit(3,n)}),[]),h.useEffect(()=>{n.props=e,n.isToastActive=o,n.displayedToast=s.length}),{getToastToRender:function(i){const d=new Map,p=Array.from(r.values());return e.newestOnTop&&p.reverse(),p.forEach(a=>{const{position:u}=a.props;d.has(u)||d.set(u,[]),d.get(u).push(a)}),Array.from(d,a=>i(a[0],a[1]))},containerRef:c,isToastActive:o}}function ve(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Ee(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Xe(e){const[t,s]=h.useState(!1),[l,c]=h.useState(!1),r=h.useRef(null),o=h.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,n=h.useRef(e),{autoClose:B,pauseOnHover:E,closeToast:T,onClick:C,closeOnClick:k}=e;function i(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",u),document.addEventListener("mouseup",b),document.addEventListener("touchmove",u),document.addEventListener("touchend",b);const y=r.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=y.getBoundingClientRect(),y.style.transition="",o.x=ve(f.nativeEvent),o.y=Ee(f.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(f){if(o.boundingRect){const{top:y,bottom:R,left:S,right:I}=o.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=S&&o.x<=I&&o.y>=y&&o.y<=R?a():p()}}function p(){s(!0)}function a(){s(!1)}function u(f){const y=r.current;o.canDrag&&y&&(o.didMove=!0,t&&a(),o.x=ve(f),o.y=Ee(f),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),y.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,y.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function b(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",b);const f=r.current;if(o.canDrag&&o.didMove&&f){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return c(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}h.useEffect(()=>{n.current=e}),h.useEffect(()=>(r.current&&r.current.addEventListener("d",p,{once:!0}),x(e.onOpen)&&e.onOpen(h.isValidElement(e.children)&&e.children.props),()=>{const f=n.current;x(f.onClose)&&f.onClose(h.isValidElement(f.children)&&f.children.props)}),[]),h.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||a(),window.addEventListener("focus",p),window.addEventListener("blur",a)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",p),window.removeEventListener("blur",a))}),[e.pauseOnFocusLoss]);const _={onMouseDown:i,onTouchStart:i,onMouseUp:d,onTouchEnd:d};return B&&E&&(_.onMouseEnter=a,_.onMouseLeave=p),k&&(_.onClick=f=>{C&&C(f),o.canCloseOnClick&&T()}),{playToast:p,pauseToast:a,isRunning:t,preventExitTransition:l,toastRef:r,eventHandlers:_}}function Fe(e){let{closeToast:t,theme:s,ariaLabel:l="close"}=e;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${s}`,type:"button",onClick:c=>{c.stopPropagation(),t(c)},"aria-label":l},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ye(e){let{delay:t,isRunning:s,closeToast:l,type:c="default",hide:r,className:o,style:n,controlledProgress:B,progress:E,rtl:T,isIn:C,theme:k}=e;const i=r||B&&E===0,d={...n,animationDuration:`${t}ms`,animationPlayState:s?"running":"paused",opacity:i?0:1};B&&(d.transform=`scaleX(${E})`);const p=W("Toastify__progress-bar",B?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${k}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":T}),a=x(o)?o({rtl:T,type:c,defaultClassName:p}):W(p,o);return v.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:a,style:d,[B&&E>=1?"onTransitionEnd":"onAnimationEnd"]:B&&E<1?null:()=>{C&&l()}})}const Ke=e=>{const{isRunning:t,preventExitTransition:s,toastRef:l,eventHandlers:c}=Xe(e),{closeButton:r,children:o,autoClose:n,onClick:B,type:E,hideProgressBar:T,closeToast:C,transition:k,position:i,className:d,style:p,bodyClassName:a,bodyStyle:u,progressClassName:b,progressStyle:_,updateId:f,role:y,progress:R,rtl:S,toastId:I,deleteToast:P,isIn:Q,isLoading:D,iconOut:A,closeOnClick:O,theme:L}=e,H=W("Toastify__toast",`Toastify__toast-theme--${L}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":S},{"Toastify__toast--close-on-click":O}),w=x(d)?d({rtl:S,position:i,type:E,defaultClassName:H}):W(H,d),M=!!R||!n,$={closeToast:C,type:E,theme:L};let ce=null;return r===!1||(ce=x(r)?r($):h.isValidElement(r)?h.cloneElement(r,$):Fe($)),v.createElement(k,{isIn:Q,done:P,position:i,preventExitTransition:s,nodeRef:l},v.createElement("div",{id:I,onClick:B,className:w,...c,style:p,ref:l},v.createElement("div",{...Q&&{role:y},className:x(a)?a({type:E}):W("Toastify__toast-body",a),style:u},A!=null&&v.createElement("div",{className:W("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},A),v.createElement("div",null,o)),ce,v.createElement(Ye,{...f&&!M?{key:`pb-${f}`}:{},rtl:S,theme:L,delay:n,isRunning:t,isIn:Q,closeToast:C,hide:T,type:E,style:_,className:b,controlledProgress:M,progress:R||0})))},he=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Je=pe(he("bounce",!0));pe(he("slide",!0));pe(he("zoom"));pe(he("flip"));const Ce=h.forwardRef((e,t)=>{const{getToastToRender:s,containerRef:l,isToastActive:c}=Ge(e),{className:r,style:o,rtl:n,containerId:B}=e;function E(T){const C=W("Toastify__toast-container",`Toastify__toast-container--${T}`,{"Toastify__toast-container--rtl":n});return x(r)?r({position:T,rtl:n,defaultClassName:C}):W(C,de(r))}return h.useEffect(()=>{t&&(t.current=l.current)},[]),v.createElement("div",{ref:l,className:"Toastify",id:B},s((T,C)=>{const k=C.length?{...o}:{...o,pointerEvents:"none"};return v.createElement("div",{className:E(T),style:k,key:`container-${T}`},C.map((i,d)=>{let{content:p,props:a}=i;return v.createElement(Ke,{...a,isIn:c(a.toastId),style:{...a.style,"--nth":d+1,"--len":C.length},key:`toast-${a.key}`},p)}))}))});Ce.displayName="ToastContainer",Ce.defaultProps={position:"top-right",transition:Je,autoClose:5e3,closeButton:Fe,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Te,z=new Map,J=[],Ze=1;function qe(){return""+Ze++}function et(e){return e&&(F(e.toastId)||re(e.toastId))?e.toastId:qe()}function ie(e,t){return z.size>0?N.emit(0,e,t):J.push({content:e,options:t}),t.toastId}function me(e,t){return{...t,type:t&&t.type||e,toastId:et(t)}}function ue(e){return(t,s)=>ie(t,me(e,s))}function g(e,t){return ie(e,me("default",t))}g.loading=(e,t)=>ie(e,me("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),g.promise=function(e,t,s){let l,{pending:c,error:r,success:o}=t;c&&(l=F(c)?g.loading(c,s):g.loading(c.render,{...s,...c}));const n={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},B=(T,C,k)=>{if(C==null)return void g.dismiss(l);const i={type:T,...n,...s,data:k},d=F(C)?{render:C}:C;return l?g.update(l,{...i,...d}):g(d.render,{...i,...d}),k},E=x(e)?e():e;return E.then(T=>B("success",o,T)).catch(T=>B("error",r,T)),E},g.success=ue("success"),g.info=ue("info"),g.error=ue("error"),g.warning=ue("warning"),g.warn=g.warning,g.dark=(e,t)=>ie(e,me("default",{theme:"dark",...t})),g.dismiss=e=>{z.size>0?N.emit(1,e):J=J.filter(t=>e!=null&&t.options.toastId!==e)},g.clearWaitingQueue=function(e){return e===void 0&&(e={}),N.emit(5,e)},g.isActive=e=>{let t=!1;return z.forEach(s=>{s.isToastActive&&s.isToastActive(e)&&(t=!0)}),t},g.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const s=function(l,c){let{containerId:r}=c;const o=z.get(r||Te);return o&&o.getToast(l)}(e,t);if(s){const{props:l,content:c}=s,r={delay:100,...l,...t,toastId:t.toastId||e,updateId:qe()};r.toastId!==e&&(r.staleId=e);const o=r.render||c;delete r.render,ie(o,r)}},0)},g.done=e=>{g.update(e,{progress:1})},g.onChange=e=>(N.on(4,e),()=>{N.off(4,e)}),g.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},g.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},N.on(2,e=>{Te=e.containerId||e,z.set(Te,e),J.forEach(t=>{N.emit(0,t.content,t.options)}),J=[]}).on(3,e=>{z.delete(e.containerId||e),z.size===0&&N.off(0).off(1).off(5)});const tt=(e,t,s,l,c,r,o,n,B)=>m.jsx(Qe,{upperBoxMessage:s,heading:e,message:t,primaryActionButtonLabel:l,secondaryActionButtonLabel:c,onPrimaryActionClick:r,onSecondaryActionClick:o,status:n,iconElement:B}),ot={success:g.success,error:g.error,warning:g.warn},U=(e,t,s,l,c,r,o,n,B,E)=>ot[e](m.jsx(m.Fragment,{children:tt(t,s,l,c,r,o,n,e,B)}),{...E}),j=e=>{const{closeButton:t,autoClose:s,position:l,closeOnClick:c}=e;return m.jsx(Ce,{closeButton:t,theme:"colored",icon:!1,autoClose:s,position:l,hideProgressBar:!0,closeOnClick:c})};j.__docgenInfo={description:"",methods:[],displayName:"ToastifyContainer",props:{closeButton:{required:!1,tsType:{name:"union",raw:"boolean| false",elements:[{name:"boolean"},{name:"literal",value:"false"}]},description:""},autoClose:{required:!1,tsType:{name:"union",raw:"number | false",elements:[{name:"number"},{name:"literal",value:"false"}]},description:""},position:{required:!1,tsType:{name:"ToastPosition"},description:""},closeOnClick:{required:!1,tsType:{name:"boolean"},description:""}}};const V=()=>{console.log("primary button clicked")},G=()=>{console.log("secondary button clicked")},X="Continue",Y="Delete",K=m.jsx(Ue,{name:"bell"}),Bt={title:"Toast"},Z=()=>{const e=()=>{U("success","Custom Heading","This is a custom success message.","New Product Draft lorem ipsum random message how are you",X,Y,V,G,K)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"green",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!1,position:"bottom-right",autoClose:!1})]})},ee=()=>{const e=()=>{U("error","Error Heading","This is a custom error message.","Error-Message",X,Y,V,G,K)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"red",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!1,position:"bottom-right",autoClose:2e3})]})},te=()=>{const e=()=>{U("warning","Warning Heading","This is a custom warn message.","",X,Y,V,G,K)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"yellow",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!1,position:"bottom-left",autoClose:!1})]})},oe=()=>{const e=()=>{U("warning","Warning Heading","This is a custom warn message.","Upper-box message",X,Y,V,G,K)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"yellow",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!1,position:"bottom-left",autoClose:!1})]})},ne=()=>{const e=()=>{U("success","success Heading","This is a custom success message.","Success-Message",X,Y,V,G)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"green",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!1,position:"bottom-left",autoClose:!1})]})},se=()=>{const e=()=>{U("success","","This is a custom success message.","success-Message",X,Y,V,G,K)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"green",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!1,position:"bottom-left",autoClose:!1})]})},ae=()=>{const e=()=>{U("error","error heading","This is a custom error message.","Error-Message","","","","",K)};return m.jsxs("div",{children:[m.jsx("h2",{children:"Toast Component"}),m.jsx(q,{color:"red",onClick:e,children:"Click me"}),m.jsx(j,{closeButton:!0,position:"bottom-left",autoClose:!1})]})};Z.__docgenInfo={description:"",methods:[],displayName:"SuccessToastWithAutocloseDisabled"};ee.__docgenInfo={description:"",methods:[],displayName:"ErrorToastWithAutocloseEnabled"};te.__docgenInfo={description:"",methods:[],displayName:"WarningToastWithoutUpperBoxMessage"};oe.__docgenInfo={description:"",methods:[],displayName:"WarningToastWithUpperBoxMessage"};ne.__docgenInfo={description:"",methods:[],displayName:"SuccessToastWithoutIcon"};se.__docgenInfo={description:"",methods:[],displayName:"SuccessToastWithoutHeader"};ae.__docgenInfo={description:"",methods:[],displayName:"ErrorToastWithoutButtonsButWithClosingIcon"};var Be,be,ke;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("success", "Custom Heading", "This is a custom success message.", "New Product Draft lorem ipsum random message how are you", primaryActionButtonLabel, secondaryActionButtonLabel, onPrimaryActionClick, onSecondaryActionClick, customIcon);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="green" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={false} position="bottom-right" autoClose={false} />
    </div>;
}`,...(ke=(be=Z.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var Ie,_e,xe;ee.parameters={...ee.parameters,docs:{...(Ie=ee.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("error", "Error Heading", "This is a custom error message.", "Error-Message", primaryActionButtonLabel, secondaryActionButtonLabel, onPrimaryActionClick, onSecondaryActionClick, customIcon);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="red" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={false} position="bottom-right" autoClose={2000} />
    </div>;
}`,...(xe=(_e=ee.parameters)==null?void 0:_e.docs)==null?void 0:xe.source}}};var Le,we,Ae;te.parameters={...te.parameters,docs:{...(Le=te.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("warning", "Warning Heading", "This is a custom warn message.", "", primaryActionButtonLabel, secondaryActionButtonLabel, onPrimaryActionClick, onSecondaryActionClick, customIcon);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="yellow" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={false} position="bottom-left" autoClose={false} />
    </div>;
}`,...(Ae=(we=te.parameters)==null?void 0:we.docs)==null?void 0:Ae.source}}};var Ne,Oe,Me;oe.parameters={...oe.parameters,docs:{...(Ne=oe.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("warning", "Warning Heading", "This is a custom warn message.", "Upper-box message", primaryActionButtonLabel, secondaryActionButtonLabel, onPrimaryActionClick, onSecondaryActionClick, customIcon);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="yellow" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={false} position="bottom-left" autoClose={false} />
    </div>;
}`,...(Me=(Oe=oe.parameters)==null?void 0:Oe.docs)==null?void 0:Me.source}}};var Re,Se,We;ne.parameters={...ne.parameters,docs:{...(Re=ne.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("success", "success Heading", "This is a custom success message.", "Success-Message", primaryActionButtonLabel, secondaryActionButtonLabel, onPrimaryActionClick, onSecondaryActionClick);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="green" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={false} position="bottom-left" autoClose={false} />
    </div>;
}`,...(We=(Se=ne.parameters)==null?void 0:Se.docs)==null?void 0:We.source}}};var je,Pe,De;se.parameters={...se.parameters,docs:{...(je=se.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("success", "", "This is a custom success message.", "success-Message", primaryActionButtonLabel, secondaryActionButtonLabel, onPrimaryActionClick, onSecondaryActionClick, customIcon);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="green" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={false} position="bottom-left" autoClose={false} />
    </div>;
}`,...(De=(Pe=se.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var He,$e,ze;ae.parameters={...ae.parameters,docs:{...(He=ae.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const handleButtonClick = () => {
    showToast("error", "error heading", "This is a custom error message.", "Error-Message", "", "", "", "", customIcon);
  };
  return <div>
      <h2>Toast Component</h2>
      <Button color="red" onClick={handleButtonClick}>
        Click me
      </Button>
      <ToastifyContainer closeButton={true} position="bottom-left" autoClose={false} />
    </div>;
}`,...(ze=($e=ae.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};const bt=["SuccessToastWithAutocloseDisabled","ErrorToastWithAutocloseEnabled","WarningToastWithoutUpperBoxMessage","WarningToastWithUpperBoxMessage","SuccessToastWithoutIcon","SuccessToastWithoutHeader","ErrorToastWithoutButtonsButWithClosingIcon"];export{ee as ErrorToastWithAutocloseEnabled,ae as ErrorToastWithoutButtonsButWithClosingIcon,Z as SuccessToastWithAutocloseDisabled,se as SuccessToastWithoutHeader,ne as SuccessToastWithoutIcon,oe as WarningToastWithUpperBoxMessage,te as WarningToastWithoutUpperBoxMessage,bt as __namedExportsOrder,Bt as default};
