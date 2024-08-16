import{_ as x}from"./extends-98964cd2.js";import{c as I,u as f,g as P,b as E}from"./getElementType-800224f7.js";import{R as v,r as D}from"./index-76fb7be0.js";import{_ as k}from"./inheritsLoose-c82a83d4.js";import{m as M}from"./map-5ec937e9.js";import{_ as y,a as g,i as S}from"./factories-aa9c7902.js";import{_ as G}from"./without-8297d7fd.js";import{i as $}from"./includes-2d2ad27d.js";import{M as O}from"./ModernAutoControlledComponent-922f5d0f.js";import{i as w}from"./childrenUtils-ad5f8e12.js";import{I as U}from"./Icon-f4a5e358.js";var h=function(t){k(i,t);function i(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,e.handleClick=function(c){return y(e.props,"onClick",c,e.props)},e}var s=i.prototype;return s.render=function(){var n=this.props,a=n.active,r=n.children,c=n.className,l=n.content,o=n.icon,p=I(f(a,"active"),"title",c),N=P(i,this.props),T=E(i,this.props),C=S(o)?"dropdown":o;return w(r)?v.createElement(T,x({},N,{className:p,onClick:this.handleClick}),U.create(C,{autoGenerateKey:!1}),l):v.createElement(T,x({},N,{className:p,onClick:this.handleClick}),r)},i}(D.Component);h.handledProps=["active","as","children","className","content","icon","index","onClick"];h.propTypes={};h.create=g(h,function(t){return{content:t}});function d(t){var i=t.active,s=t.children,e=t.className,n=t.content,a=I("content",f(i,"active"),e),r=P(d,t),c=E(d,t);return v.createElement(c,x({},r,{className:a}),w(s)?n:s)}d.handledProps=["active","as","children","className","content"];d.propTypes={};d.create=g(d,function(t){return{content:t}});var A=function(t){k(i,t);function i(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,e.handleTitleOverrides=function(c){return{onClick:function(o,p){y(c,"onClick",o,p),y(e.props,"onTitleClick",o,p)}}},e}var s=i.prototype;return s.render=function(){var n=this.props,a=n.active,r=n.content,c=n.index,l=n.title;return v.createElement(v.Fragment,null,h.create(l,{autoGenerateKey:!1,defaultProps:{active:a,index:c},overrideProps:this.handleTitleOverrides}),d.create(r,{autoGenerateKey:!1,defaultProps:{active:a}}))},i}(D.Component);A.handledProps=["active","content","index","onTitleClick","title"];A.propTypes={};A.create=g(A,null);const K=A;var u=function(t){k(i,t);function i(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,e.computeNewIndex=function(c){var l=e.props.exclusive,o=e.state.activeIndex;return l?c===o?-1:c:$(o,c)?G(o,c):[].concat(o,[c])},e.handleTitleClick=function(c,l){var o=l.index;e.setState({activeIndex:e.computeNewIndex(o)}),y(e.props,"onTitleClick",c,l)},e.isIndexActive=function(c){var l=e.props.exclusive,o=e.state.activeIndex;return l?o===c:$(o,c)},e}var s=i.prototype;return s.getInitialAutoControlledState=function(n){var a=n.exclusive;return{activeIndex:a?-1:[]}},s.componentDidMount=function(){},s.componentDidUpdate=function(){},s.render=function(){var n=this,a=this.props,r=a.className,c=a.children,l=a.panels,o=I("accordion",r),p=P(i,this.props),N=E(i,this.props);return v.createElement(N,x({},p,{className:o}),w(c)?M(l,function(T,C){return K.create(T,{defaultProps:{active:n.isIndexActive(C),index:C,onTitleClick:n.handleTitleClick}})}):c)},i}(O);u.handledProps=["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"];u.propTypes={};u.defaultProps={exclusive:!0};u.autoControlledProps=["activeIndex"];u.create=g(u,function(t){return{content:t}});function m(t){var i=t.className,s=t.fluid,e=t.inverted,n=t.styled,a=I("ui",f(s,"fluid"),f(e,"inverted"),f(n,"styled"),i),r=P(m,t);return v.createElement(u,x({},r,{className:a}))}m.handledProps=["className","fluid","inverted","styled"];m.propTypes={};m.Accordion=u;m.Content=d;m.Panel=K;m.Title=h;export{m as A};
