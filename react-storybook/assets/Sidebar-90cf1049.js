import{_ as v}from"./extends-4c19d496.js";import{_ as x}from"./inheritsLoose-5494d9cc.js";import{_ as T}from"./factories-df82d7d3.js";import{c as y,g,b as P,u as N}from"./getElementType-ff0d42f5.js";import{r as m,R as u}from"./index-ad58220e.js";import{i as S}from"./childrenUtils-dd3b0ba5.js";import{d as A}from"./Portal-8d2f321a.js";import{i as D,R as U}from"./Ref-51c42093.js";var _=function(n){if(n){var r,a,e;return typeof n.window=="object"&&n.window===n?n.event:(r=(a=n.ownerDocument)==null||(e=a.defaultView)==null?void 0:e.event)!=null?r:void 0}},w=function(n,r){return n?!!n[r]:!1},W=function(n){var r=n.capture,a=n.listener,e=n.type,i=n.target,o=n.targetRef,c=m.useRef(a);c.current=a;var h=m.useCallback(function(s){return c.current(s)},[]),b=m.useRef(void 0);m.useEffect(function(){var s=typeof o>"u"?i:o.current,d=_(window),E=function(k){if(k===d){d=void 0;return}h(k)};return w(s,"addEventListener")&&s.addEventListener(e,E,r),b.current=setTimeout(function(){d=void 0},1),function(){clearTimeout(b.current),d=void 0,w(s,"removeEventListener")&&s.removeEventListener(e,E,r)}},[r,h,i,o,e])},F=function(){function t(n){return W(n),null}return t.defaultProps={capture:!1},t}(),V={current:typeof document>"u"?null:document};function f(t){var n=t.className,r=t.children,a=t.content,e=y("pushable",n),i=g(f,t),o=P(f,t);return u.createElement(o,v({},i,{className:e}),S(r)?a:r)}f.handledProps=["as","children","className","content"];f.propTypes={};function p(t){var n=t.className,r=t.dimmed,a=t.children,e=t.content,i=y("pusher",N(r,"dimmed"),n),o=g(p,t),c=P(p,t);return u.createElement(c,v({},o,{className:i}),S(a)?e:a)}p.handledProps=["as","children","className","content","dimmed"];p.propTypes={};var l=function(t){x(n,t);function n(a){var e;return e=t.call(this,a)||this,e.ref=m.createRef(),e.handleAnimationStart=function(){var i=e.props.visible,o=i?"onVisible":"onHide";if(clearTimeout(e.animationTimer),e.animationTimer=setTimeout(e.handleAnimationEnd,n.animationDuration),e.skipNextCallback){e.skipNextCallback=!1;return}T(e.props,o,null,e.props)},e.handleAnimationEnd=function(){var i=e.props.visible,o=i?"onShow":"onHidden";e.setState({animationTick:0}),T(e.props,o,null,e.props)},e.handleDocumentClick=function(i){A(e.ref.current,i)||(e.skipNextCallback=!0,T(e.props,"onHide",i,v({},e.props,{visible:!1})))},e.state={animationTick:0,visible:a.visible},e}n.getDerivedStateFromProps=function(e,i){var o=!!e.visible==!!i.visible?0:1;return{animationTick:i.animationTick+o,visible:e.visible}};var r=n.prototype;return r.componentDidUpdate=function(e,i){this.state.animationTick>i.animationTick&&this.handleAnimationStart()},r.componentWillUnmount=function(){clearTimeout(this.animationTimer)},r.render=function(){var e=this.props,i=e.animation,o=e.className,c=e.children,h=e.content,b=e.direction,s=e.target,d=e.visible,E=e.width,R=this.state.animationTick,k=y("ui",i,b,E,N(R>0,"animating"),N(d,"visible"),"sidebar",o),L=g(n,this.props),C=P(n,this.props),H=D(s)?{targetRef:s}:{target:s};return u.createElement(u.Fragment,null,u.createElement(U,{innerRef:this.ref},u.createElement(C,v({},L,{className:k}),S(c)?h:c)),d&&u.createElement(F,v({listener:this.handleDocumentClick,type:"click"},H)))},n}(m.Component);l.handledProps=["animation","as","children","className","content","direction","onHidden","onHide","onShow","onVisible","target","visible","width"];l.propTypes={};l.defaultProps={direction:"left",target:V,visible:!1};l.animationDuration=500;l.autoControlledProps=["visible"];l.Pushable=f;l.Pusher=p;const J=l;export{J as S};