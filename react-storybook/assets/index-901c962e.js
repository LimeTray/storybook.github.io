import{a as p}from"./_arrayReduce-865b0d3f.js";import{d as y,m as c}from"./getElementType-800224f7.js";import{b as d}from"./childrenUtils-ad5f8e12.js";import{g}from"./_commonjsHelpers-de833af9.js";function m(f,e,r,t,s){return s(f,function(a,n,l){r=t?(t=!1,a):e(r,a,n,l)}),r}function R(f,e,r){var t=y(f)?p:m,s=arguments.length<3;return t(f,d(e),r,s,c)}var w=function(e,r,t,s){var a=t?t.call(s,e,r):void 0;if(a!==void 0)return!!a;if(e===r)return!0;if(typeof e!="object"||!e||typeof r!="object"||!r)return!1;var n=Object.keys(e),l=Object.keys(r);if(n.length!==l.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(r),u=0;u<n.length;u++){var i=n[u];if(!h(i))return!1;var o=e[i],v=r[i];if(a=t?t.call(s,o,v,i):void 0,a===!1||a===void 0&&o!==v)return!1}return!0};const k=g(w);export{R as r,k as s};
