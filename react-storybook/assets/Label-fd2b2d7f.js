import{_ as m}from"./extends-98964cd2.js";import{_ as Q}from"./inheritsLoose-c82a83d4.js";import{R as re,b as ne}from"./includes-ae816ee0.js";import{_ as H,a as B,i as q}from"./factories-a0d6c822.js";import{c as P,u as c,g,b as C,D as ee,a as te,l as J}from"./getElementType-ead3b972.js";import{R as d,r as O}from"./index-76fb7be0.js";import{i as h}from"./childrenUtils-25a53b67.js";import{I as Z}from"./Icon-84915bf2.js";import{p as ie,a as ce}from"./htmlPropsUtils-194f1060.js";import{d as le,i as _,P as oe}from"./Portal-73b13d0f.js";function w(e){var i=e.blurring,s=e.className,a=e.children,t=e.content,n=e.dimmed,r=P(c(i,"blurring"),c(n,"dimmed"),"dimmable",s),l=g(w,e),o=C(w,e);return d.createElement(o,m({},l,{className:r}),h(a)?t:a)}w.handledProps=["as","blurring","children","className","content","dimmed"];w.propTypes={};var M=function(e){Q(i,e);function i(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return a=e.call.apply(e,[this].concat(n))||this,a.containerRef=O.createRef(),a.contentRef=O.createRef(),a.handleClick=function(l){var o=a.contentRef.current;H(a.props,"onClick",l,a.props),!(o&&o!==l.target&&le(o,l))&&H(a.props,"onClickOutside",l,a.props)},a}var s=i.prototype;return s.componentDidMount=function(){var t=this.props.active;this.toggleStyles(t)},s.componentDidUpdate=function(t){var n=this.props.active,r=t.active;r!==n&&this.toggleStyles(n)},s.toggleStyles=function(t){var n=this.containerRef.current;!n||!n.style||(t?n.style.setProperty("display","flex","important"):n.style.removeProperty("display"))},s.render=function(){var t=this.props,n=t.active,r=t.children,l=t.className,o=t.content,u=t.disabled,b=t.inverted,I=t.page,A=t.simple,k=t.verticalAlign,L=P("ui",c(n,"active transition visible"),c(u,"disabled"),c(b,"inverted"),c(I,"page"),c(A,"simple"),ee(k),"dimmer",l),T=g(i,this.props),G=C(i,this.props),R=h(r)?o:r;return d.createElement(re,{innerRef:this.containerRef},d.createElement(G,m({},T,{className:L,onClick:this.handleClick}),R&&d.createElement("div",{className:"content",ref:this.contentRef},R)))},i}(O.Component);M.handledProps=["active","as","children","className","content","disabled","inverted","onClick","onClickOutside","page","simple","verticalAlign"];M.propTypes={};var N=function(e){Q(i,e);function i(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return a=e.call.apply(e,[this].concat(n))||this,a.handlePortalMount=function(){_()&&(document.body.classList.add("dimmed"),document.body.classList.add("dimmable"))},a.handlePortalUnmount=function(){_()&&(document.body.classList.remove("dimmed"),document.body.classList.remove("dimmable"))},a}var s=i.prototype;return s.render=function(){var t=this.props,n=t.active,r=t.page,l=g(i,this.props);return r?d.createElement(oe,{closeOnEscape:!1,closeOnDocumentClick:!1,onMount:this.handlePortalMount,onUnmount:this.handlePortalUnmount,open:n,openOnTriggerClick:!1},d.createElement(M,m({},l,{active:n,page:r}))):d.createElement(M,m({},l,{active:n,page:r}))},i}(O.Component);N.handledProps=["active","page"];N.propTypes={};N.Dimmable=w;N.Inner=M;N.create=B(N,function(e){return{content:e}});function U(e){var i=e.children,s=e.className,a=e.content,t=e.size,n=P("ui",t,s,"images"),r=g(U,e),l=C(U,e);return d.createElement(l,m({},r,{className:n}),h(i)?a:i)}U.handledProps=["as","children","className","content","size"];U.propTypes={};function f(e){var i=e.avatar,s=e.bordered,a=e.centered,t=e.children,n=e.circular,r=e.className,l=e.content,o=e.dimmer,u=e.disabled,b=e.floated,I=e.fluid,A=e.hidden,k=e.href,L=e.inline,T=e.label,G=e.rounded,R=e.size,F=e.spaced,K=e.verticalAlign,j=e.wrapped,v=e.ui,z=P(c(v,"ui"),R,c(i,"avatar"),c(s,"bordered"),c(n,"circular"),c(a,"centered"),c(u,"disabled"),c(I,"fluid"),c(A,"hidden"),c(L,"inline"),c(G,"rounded"),J(F,"spaced"),te(b,"floated"),ee(K),"image",r),D=g(f,e),x=ie(D,{htmlProps:ce}),$=x[0],V=x[1],y=C(f,e,function(){if(!q(o)||!q(T)||!q(j)||!h(t))return"div"});return h(t)?h(l)?y==="img"?d.createElement(y,m({},V,$,{className:z})):d.createElement(y,m({},V,{className:z,href:k}),N.create(o,{autoGenerateKey:!1}),E.create(T,{autoGenerateKey:!1}),d.createElement("img",$)):d.createElement(y,m({},D,{className:z}),l):d.createElement(y,m({},D,{className:z}),t)}f.handledProps=["as","avatar","bordered","centered","children","circular","className","content","dimmer","disabled","floated","fluid","hidden","href","inline","label","rounded","size","spaced","ui","verticalAlign","wrapped"];f.Group=U;f.propTypes={};f.defaultProps={as:"img",ui:!0};f.create=B(f,function(e){return{src:e}});function p(e){var i=e.children,s=e.className,a=e.content,t=P("detail",s),n=g(p,e),r=C(p,e);return d.createElement(r,m({},n,{className:t}),h(i)?a:i)}p.handledProps=["as","children","className","content"];p.propTypes={};p.create=B(p,function(e){return{content:e}});function S(e){var i=e.children,s=e.circular,a=e.className,t=e.color,n=e.content,r=e.size,l=e.tag,o=P("ui",t,r,c(s,"circular"),c(l,"tag"),"labels",a),u=g(S,e),b=C(S,e);return d.createElement(b,m({},u,{className:o}),h(i)?n:i)}S.handledProps=["as","children","circular","className","color","content","size","tag"];S.propTypes={};var E=function(e){Q(i,e);function i(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return a=e.call.apply(e,[this].concat(n))||this,a.handleClick=function(l){var o=a.props.onClick;o&&o(l,a.props)},a.handleIconOverrides=function(l){return{onClick:function(u){H(l,"onClick",u),H(a.props,"onRemove",u,a.props)}}},a}var s=i.prototype;return s.render=function(){var t=this.props,n=t.active,r=t.attached,l=t.basic,o=t.children,u=t.circular,b=t.className,I=t.color,A=t.content,k=t.corner,L=t.detail,T=t.empty,G=t.floating,R=t.horizontal,F=t.icon,K=t.image,j=t.onRemove,v=t.pointing,z=t.prompt,D=t.removeIcon,x=t.ribbon,$=t.size,V=t.tag,y=v===!0&&"pointing"||(v==="left"||v==="right")&&v+" pointing"||(v==="above"||v==="below")&&"pointing "+v,W=P("ui",I,y,$,c(n,"active"),c(l,"basic"),c(u,"circular"),c(T,"empty"),c(G,"floating"),c(R,"horizontal"),c(K===!0,"image"),c(z,"prompt"),c(V,"tag"),J(k,"corner"),J(x,"ribbon"),te(r,"attached"),"label",b),X=g(i,this.props),Y=C(i,this.props);if(!h(o))return d.createElement(Y,m({},X,{className:W,onClick:this.handleClick}),o);var ae=ne(D)?"delete":D;return d.createElement(Y,m({className:W,onClick:this.handleClick},X),Z.create(F,{autoGenerateKey:!1}),typeof K!="boolean"&&f.create(K,{autoGenerateKey:!1}),A,p.create(L,{autoGenerateKey:!1}),j&&Z.create(ae,{autoGenerateKey:!1,overrideProps:this.handleIconOverrides}))},i}(O.Component);E.handledProps=["active","as","attached","basic","children","circular","className","color","content","corner","detail","empty","floating","horizontal","icon","image","onClick","onRemove","pointing","prompt","removeIcon","ribbon","size","tag"];E.propTypes={};E.Detail=p;E.Group=S;E.create=B(E,function(e){return{content:e}});export{f as I,E as L};
