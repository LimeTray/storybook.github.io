import{y as b,i as g,n as h,z as R,A as C,B as A,C as l}from"./getElementType-ead3b972.js";import{f as L,g as m,h as E}from"./factories-a0d6c822.js";function O(u){return b(u)&&g(u)}var U=200;function I(u,e,f,n){var d=-1,s=L,c=!0,o=u.length,x=[],t=e.length;if(!o)return x;f&&(e=h(e,R(f))),n?(s=m,c=!1):e.length>=U&&(s=A,c=!1,e=new C(e));u:for(;++d<o;){var r=u[d],a=f==null?r:f(r);if(r=n||r!==0?r:0,c&&a===a){for(var i=t;i--;)if(e[i]===a)continue u;x.push(r)}else s(e,a,n)||x.push(r)}return x}var y="\\ud800-\\udfff",k="\\u0300-\\u036f",S="\\ufe20-\\ufe2f",p="\\u20d0-\\u20ff",w=k+S+p,H="\\ufe0e\\ufe0f",M="\\u200d",G=RegExp("["+M+y+w+H+"]");function V(u){return G.test(u)}var N=E(function(u,e){return O(u)?I(u,e):[]});const q=N;function Z(u){return function(e){return u==null?void 0:u[e]}}var $={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},z=Z($);const D=z;var T=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y="\\u0300-\\u036f",_="\\ufe20-\\ufe2f",j="\\u20d0-\\u20ff",J=Y+_+j,W="["+J+"]",B=RegExp(W,"g");function v(u){return u=l(u),u&&u.replace(T,D).replace(B,"")}export{q as _,I as b,v as d,V as h,O as i};
