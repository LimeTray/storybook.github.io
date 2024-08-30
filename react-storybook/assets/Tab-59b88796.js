import{_ as L}from"./objectWithoutPropertiesLoose-f3b3ace0.js";import{_ as w}from"./extends-4c19d496.js";import{_ as j}from"./inheritsLoose-5494d9cc.js";import{m as _}from"./map-81dc436d.js";import{i as B,g as D}from"./childrenUtils-eea4be66.js";import{a as V,_ as O}from"./factories-5eda43f6.js";import{R as f}from"./index-ad58220e.js";import{M as F}from"./ModernAutoControlledComponent-1c638d94.js";import{c as W,y as g,B as p,b as U,r as G,C,u as o,g as T,a as N,l as E}from"./getElementType-605cc275.js";import{M as q}from"./Menu-bab3e750.js";import{S as k}from"./Segment-8ad59cc5.js";function u(e){var s=e.children,c=e.className,n=e.computer,t=e.color,r=e.floated,a=e.largeScreen,i=e.mobile,d=e.only,l=e.stretched,m=e.tablet,v=e.textAlign,A=e.verticalAlign,x=e.widescreen,P=e.width,S=W(t,o(l,"stretched"),C(d,"only"),G(v),U(r,"floated"),p(A),g(n,"wide computer"),g(a,"wide large screen"),g(i,"wide mobile"),g(m,"wide tablet"),g(x,"wide widescreen"),g(P,"wide"),"column",c),K=T(u,e),M=N(u,e);return f.createElement(M,w({},K,{className:S}),s)}u.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"];u.propTypes={};u.create=V(u,function(e){return{children:e}});function I(e){var s=e.centered,c=e.children,n=e.className,t=e.color,r=e.columns,a=e.divided,i=e.only,d=e.reversed,l=e.stretched,m=e.textAlign,v=e.verticalAlign,A=W(t,o(s,"centered"),o(a,"divided"),o(l,"stretched"),C(i,"only"),C(d,"reversed"),G(m),p(v),g(r,"column",!0),"row",n),x=T(I,e),P=N(I,e);return f.createElement(P,w({},x,{className:A}),c)}I.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"];I.propTypes={};function b(e){var s=e.celled,c=e.centered,n=e.children,t=e.className,r=e.columns,a=e.container,i=e.divided,d=e.doubling,l=e.inverted,m=e.padded,v=e.relaxed,A=e.reversed,x=e.stackable,P=e.stretched,S=e.textAlign,K=e.verticalAlign,M=W("ui",o(c,"centered"),o(a,"container"),o(d,"doubling"),o(l,"inverted"),o(x,"stackable"),o(P,"stretched"),E(s,"celled"),E(i,"divided"),E(m,"padded"),E(v,"relaxed"),C(A,"reversed"),G(S),p(K),g(r,"column",!0),"grid",t),R=T(b,e),$=N(b,e);return f.createElement($,w({},R,{className:M}),n)}b.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"];b.Column=u;b.Row=I;b.propTypes={};function h(e){var s=e.active,c=e.children,n=e.className,t=e.content,r=e.loading,a=W(o(s,"active"),o(r,"loading"),"tab",n),i=T(h,e),d=N(h,e),l={};return d===k&&(l.attached="bottom"),f.createElement(d,w({},l,i,{className:a}),B(c)?t:c)}h.handledProps=["active","as","children","className","content","loading"];h.defaultProps={as:k,active:!0};h.propTypes={};h.create=V(h,function(e){return{content:e}});var y=function(e){j(s,e);function s(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,n.handleItemClick=function(i,d){var l=d.index;O(n.props,"onTabChange",i,w({},n.props,{activeIndex:l})),n.setState({activeIndex:l})},n}var c=s.prototype;return c.getInitialAutoControlledState=function(){return{activeIndex:0}},c.renderItems=function(){var t=this.props,r=t.panes,a=t.renderActiveOnly,i=this.state.activeIndex;return a?O(D(r,"["+i+"]"),"render",this.props):_(r,function(d,l){var m=d.pane;return h.create(m,{overrideProps:{active:l===i}})})},c.renderMenu=function(){var t=this.props,r=t.menu,a=t.panes,i=t.menuPosition,d=this.state.activeIndex;return r.tabular===!0&&i==="right"&&(r.tabular="right"),q.create(r,{autoGenerateKey:!1,overrideProps:{items:_(a,"menuItem"),onItemClick:this.handleItemClick,activeIndex:d}})},c.renderVertical=function(t){var r=this.props,a=r.grid,i=r.menuPosition,d=a.paneWidth,l=a.tabWidth,m=L(a,["paneWidth","tabWidth"]),v=i||t.props.tabular==="right"&&"right"||"left";return f.createElement(b,m,v==="left"&&u.create({width:l,children:t},{autoGenerateKey:!1}),u.create({width:d,children:this.renderItems(),stretched:!0},{autoGenerateKey:!1}),v==="right"&&u.create({width:l,children:t},{autoGenerateKey:!1}))},c.render=function(){var t=this.renderMenu(),r=T(s,this.props),a=N(s,this.props);return t.props.vertical?f.createElement(a,r,this.renderVertical(t)):f.createElement(a,r,t.props.attached!=="bottom"&&t,this.renderItems(),t.props.attached==="bottom"&&t)},s}(F);y.handledProps=["activeIndex","as","defaultActiveIndex","grid","menu","menuPosition","onTabChange","panes","renderActiveOnly"];y.propTypes={};y.autoControlledProps=["activeIndex"];y.defaultProps={grid:{paneWidth:12,tabWidth:4},menu:{attached:!0,tabular:!0},renderActiveOnly:!0};y.Pane=h;const ne=y;export{ne as T};