import{_ as i}from"./extends-4c19d496.js";import{_ as c}from"./inheritsLoose-5494d9cc.js";import{_ as l}from"./factories-5eda43f6.js";import{g as f}from"./childrenUtils-eea4be66.js";import{r as h,R as v}from"./index-ad58220e.js";import{g,a as d}from"./getElementType-605cc275.js";import{R as x}from"./Ref-51c42093.js";var p=function(u){c(a,u);function a(){for(var r,o=arguments.length,s=new Array(o),t=0;t<o;t++)s[t]=arguments[t];return r=u.call.apply(u,[this].concat(s))||this,r.ref=h.createRef(),r.focus=function(){return r.ref.current.focus()},r.handleChange=function(e){var n=f(e,"target.value");l(r.props,"onChange",e,i({},r.props,{value:n}))},r.handleInput=function(e){var n=f(e,"target.value");l(r.props,"onInput",e,i({},r.props,{value:n}))},r}var m=a.prototype;return m.render=function(){var o=this.props,s=o.rows,t=o.value,e=g(a,this.props),n=d(a,this.props);return v.createElement(x,{innerRef:this.ref},v.createElement(n,i({},e,{onChange:this.handleChange,onInput:this.handleInput,rows:s,value:t})))},a}(h.Component);p.handledProps=["as","onChange","onInput","rows","value"];p.propTypes={};p.defaultProps={as:"textarea",rows:3};const y=p;export{y as T};