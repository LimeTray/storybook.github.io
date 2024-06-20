import{_ as f}from"./extends-98964cd2.js";import{_ as W}from"./inheritsLoose-c82a83d4.js";import{_ as v,a as x,j as Z}from"./factories-75e2f8cc.js";import{_ as ee}from"./pick-81fca5fd.js";import{M as ne,i as te}from"./includes-b3798d5a.js";import{s as re,r as oe}from"./index-e7629195.js";import{i as ae}from"./isEmpty-2791ffa2.js";import{c as P,g as O,b as w,u as C}from"./getElementType-06192456.js";import{R as u,r as L}from"./index-76fb7be0.js";import{i as D}from"./childrenUtils-f807df98.js";import{i as _,d as B,a as I,P as q}from"./Portal-73562830.js";import{I as se}from"./Icon-8c7b360e.js";import{m as ie}from"./map-372c3dbe.js";import{S as ce}from"./Button-3de4f15d.js";import{i as z,R as j}from"./Ref-0f7da313.js";var le=_()?u.useLayoutEffect:u.useEffect;const G=le;var ue=/\s+/;function me(n){var t=[];return n?(n.forEach(function(o){if(typeof o.current=="string"){var e=o.current.split(ue);e.forEach(function(r){t.push(r)})}}),t.filter(function(o,e,r){return o.length>0&&r.indexOf(o)===e})):[]}function de(n,t){return[t.filter(function(o){return n.indexOf(o)===-1}),n.filter(function(o){return t.indexOf(o)===-1})]}var K=new Map,H=function(t,o){var e=me(o),r=de(K.get(t)||[],e),c=r[0],l=r[1];t&&(c.forEach(function(a){return t.classList.add(a)}),l.forEach(function(a){return t.classList.remove(a)})),K.set(t,e)},fe=function(){var t=this;this.add=function(o,e){if(t.nodes.has(o)){var r=t.nodes.get(o);r.add(e);return}var c=new Set;c.add(e),t.nodes.set(o,c)},this.del=function(o,e){if(t.nodes.has(o)){var r=t.nodes.get(o);if(r.size===1){t.nodes.delete(o);return}r.delete(e)}},this.emit=function(o,e){e(o,t.nodes.get(o))},this.nodes=new Map},b=new fe;function pe(n,t){var o=u.useRef(),e=u.useRef(!1);G(function(){if(o.current=t,e.current){var r=z(n)?n.current:n;b.emit(r,H)}e.current=!0},[t]),G(function(){var r=z(n)?n.current:n;return b.add(r,o),b.emit(r,H),function(){b.del(r,o),b.emit(r,H)}},[n])}var M=function(n){W(t,n);function t(){for(var e,r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return e=n.call.apply(n,[this].concat(c))||this,e.handleButtonOverrides=function(a){return{onClick:function(i,m){v(a,"onClick",i,m),v(e.props,"onActionClick",i,m)}}},e}var o=t.prototype;return o.render=function(){var r=this,c=this.props,l=c.actions,a=c.children,s=c.className,i=c.content,m=P("actions",s),d=O(t,this.props),p=w(t,this.props);return D(a)?D(i)?u.createElement(p,f({},d,{className:m}),ie(l,function(g){return ce.create(g,{overrideProps:r.handleButtonOverrides})})):u.createElement(p,f({},d,{className:m}),i):u.createElement(p,f({},d,{className:m}),a)},t}(L.Component);M.handledProps=["actions","as","children","className","content","onActionClick"];M.propTypes={};M.create=x(M,function(n){return{actions:n}});function y(n){var t=n.children,o=n.className,e=n.content,r=n.image,c=n.scrolling,l=P(o,C(r,"image"),C(c,"scrolling"),"content"),a=O(y,n),s=w(y,n);return u.createElement(s,f({},a,{className:l}),D(t)?e:t)}y.handledProps=["as","children","className","content","image","scrolling"];y.propTypes={};y.create=x(y,function(n){return{content:n}});function k(n){var t=n.children,o=n.className,e=n.content,r=P("description",o),c=O(k,n),l=w(k,n);return u.createElement(l,f({},c,{className:r}),D(t)?e:t)}k.handledProps=["as","children","className","content"];k.propTypes={};function N(n){var t=n.blurring,o=n.children,e=n.className,r=n.centered,c=n.content,l=n.inverted,a=n.mountNode,s=n.scrolling,i=u.useRef(),m=P("ui",C(l,"inverted"),C(!r,"top aligned"),"page modals dimmer transition visible active",e),d=P("dimmable dimmed",C(t,"blurring"),C(s,"scrolling")),p=O(N,n),g=w(N,n);return pe(a,d),u.useEffect(function(){i.current&&i.current.style&&i.current.style.setProperty("display","flex","important")},[]),u.createElement(j,{innerRef:i},u.createElement(g,f({},p,{className:m}),D(o)?c:o))}N.handledProps=["as","blurring","centered","children","className","content","inverted","mountNode","scrolling"];N.propTypes={};N.create=x(N,function(n){return{content:n}});function E(n){var t=n.children,o=n.className,e=n.content,r=P("header",o),c=O(E,n),l=w(E,n);return u.createElement(l,f({},c,{className:r}),D(t)?e:t)}E.handledProps=["as","children","className","content"];E.propTypes={};E.create=x(E,function(n){return{content:n}});var X=0,ve=50,he=function(t){var o=t.height+X,e=t.height+X,r=window.innerHeight,c=r/2,l=-(e/2),a=ve,s=c+l;return s+o+a<r},ge=function(t,o,e){var r=o&&t?-(e.height/2):0,c=-(e.width/2);return{marginLeft:c,marginTop:r}},Ce=function(){return!window.ActiveXObject&&"ActiveXObject"in window},h=function(n){W(t,n);function t(){for(var e,r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return e=n.call.apply(n,[this].concat(c))||this,e.legacy=_()&&Ce(),e.ref=L.createRef(),e.dimmerRef=L.createRef(),e.latestDocumentMouseDownEvent=null,e.getMountNode=function(){return _()?e.props.mountNode||document.body:null},e.handleActionsOverrides=function(a){return{onActionClick:function(i,m){v(a,"onActionClick",i,m),v(e.props,"onActionClick",i,e.props),e.handleClose(i)}}},e.handleClose=function(a){e.setState({open:!1}),v(e.props,"onClose",a,f({},e.props,{open:!1}))},e.handleDocumentMouseDown=function(a){e.latestDocumentMouseDownEvent=a},e.handleDocumentClick=function(a){var s=e.props.closeOnDimmerClick,i=e.latestDocumentMouseDownEvent;e.latestDocumentMouseDownEvent=null,!(!s||B(e.ref.current,i)||B(e.ref.current,a))&&(e.setState({open:!1}),v(e.props,"onClose",a,f({},e.props,{open:!1})))},e.handleIconOverrides=function(a){return{onClick:function(i){v(a,"onClick",i),e.handleClose(i)}}},e.handleOpen=function(a){v(e.props,"onOpen",a,f({},e.props,{open:!0})),e.setState({open:!0})},e.handlePortalMount=function(a){var s=e.props.eventPool;e.setState({scrolling:!1}),e.setPositionAndClassNames(),I.sub("mousedown",e.handleDocumentMouseDown,{pool:s,target:e.dimmerRef.current}),I.sub("click",e.handleDocumentClick,{pool:s,target:e.dimmerRef.current}),v(e.props,"onMount",a,e.props)},e.handlePortalUnmount=function(a){var s=e.props.eventPool;cancelAnimationFrame(e.animationRequestId),I.unsub("mousedown",e.handleDocumentMouseDown,{pool:s,target:e.dimmerRef.current}),I.unsub("click",e.handleDocumentClick,{pool:s,target:e.dimmerRef.current}),v(e.props,"onUnmount",a,e.props)},e.setPositionAndClassNames=function(){var a=e.props.centered,s,i={};if(e.ref.current){var m=e.ref.current.getBoundingClientRect(),d=he(m);s=!d;var p=e.legacy?ge(d,a,m):{};re(e.state.legacyStyles,p)||(i.legacyStyles=p),e.state.scrolling!==s&&(i.scrolling=s)}ae(i)||e.setState(i),e.animationRequestId=requestAnimationFrame(e.setPositionAndClassNames)},e.renderContent=function(a){var s=e.props,i=s.actions,m=s.basic,d=s.children,p=s.className,g=s.closeIcon,R=s.content,S=s.header,U=s.size,F=s.style,A=e.state,$=A.legacyStyles,T=A.scrolling,J=P("ui",U,C(m,"basic"),C(e.legacy,"legacy"),C(T,"scrolling"),"modal transition visible active",p),V=w(t,e.props),Q=g===!0?"close":g,Y=se.create(Q,{overrideProps:e.handleIconOverrides});return u.createElement(j,{innerRef:e.ref},u.createElement(V,f({},a,{className:J,style:f({},$,F)}),Y,D(d)?u.createElement(u.Fragment,null,E.create(S,{autoGenerateKey:!1}),y.create(R,{autoGenerateKey:!1}),M.create(i,{overrideProps:e.handleActionsOverrides})):d))},e}var o=t.prototype;return o.componentWillUnmount=function(){this.handlePortalUnmount()},o.render=function(){var r=this.props,c=r.centered,l=r.closeOnDocumentClick,a=r.dimmer,s=r.eventPool,i=r.trigger,m=this.state,d=m.open,p=m.scrolling,g=this.getMountNode();if(!_())return L.isValidElement(i)?i:null;var R=O(t,this.props),S=q.handledProps,U=oe(R,function(A,$,T){return te(S,T)||(A[T]=$),A},{}),F=ee(R,S);return u.createElement(q,f({closeOnDocumentClick:l},F,{trigger:i,eventPool:s,mountNode:g,open:d,onClose:this.handleClose,onMount:this.handlePortalMount,onOpen:this.handleOpen,onUnmount:this.handlePortalUnmount}),u.createElement(j,{innerRef:this.dimmerRef},N.create(Z(a)?a:{},{autoGenerateKey:!1,defaultProps:{blurring:a==="blurring",inverted:a==="inverted"},overrideProps:{children:this.renderContent(U),centered:c,mountNode:g,scrolling:p}})))},t}(ne);h.handledProps=["actions","as","basic","centered","children","className","closeIcon","closeOnDimmerClick","closeOnDocumentClick","content","defaultOpen","dimmer","eventPool","header","mountNode","onActionClick","onClose","onMount","onOpen","onUnmount","open","size","style","trigger"];h.propTypes={};h.defaultProps={centered:!0,dimmer:!0,closeOnDimmerClick:!0,closeOnDocumentClick:!1,eventPool:"Modal"};h.autoControlledProps=["open"];h.Actions=M;h.Content=y;h.Description=k;h.Dimmer=N;h.Header=E;const Le=h;export{Le as M};
