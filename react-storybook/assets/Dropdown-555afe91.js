import{_ as I}from"./extends-98964cd2.js";import{_ as X}from"./inheritsLoose-c82a83d4.js";import{c as Ie,i as ie,M as Ue,a as He}from"./includes-b3798d5a.js";import{m as ee}from"./map-372c3dbe.js";import{m as Ce,d as we,i as xe,F as qe,k as Ge,c as S,g as R,b as P,u as m,z as je,G as Se,l as We}from"./getElementType-06192456.js";import{d as Je,b as Z,e as Xe,f as Ze,j as Ye,a as et,k as tt,i as Q,g as H,s as rt}from"./childrenUtils-f807df98.js";import{i as ae,b as at,_ as nt}from"./without-1e71b626.js";import{n as st,f as Oe,m as ot,k as it,p as lt,a as j,_ as b,i as $,h as ce,q as ut}from"./factories-75e2f8cc.js";import{i as J}from"./isEmpty-2791ffa2.js";import{h as ct,d as de}from"./deburr-c1b2126c.js";import{b as Ee,_ as dt}from"./pick-81fca5fd.js";import{k as w,d as pt,E as te}from"./Portal-73562830.js";import{R as y,r as D}from"./index-76fb7be0.js";import{r as ht,s as re}from"./index-e7629195.js";import{I as le}from"./Icon-8c7b360e.js";import{I as Ae,L as De}from"./Label-3a60549d.js";import{R as pe}from"./Ref-0f7da313.js";function ft(r,o){var c=[];return Ce(r,function(e,n,d){o(e,n,d)&&c.push(e)}),c}function he(r,o){var c=we(r)?Je:ft;return c(r,Z(o))}function vt(r){return function(o,c,e){var n=Object(o);if(!xe(o)){var d=Z(c);o=qe(o),c=function(t){return d(n[t],t,n)}}var p=r(o,c,e);return p>-1?n[d?o[p]:p]:void 0}}var mt=Math.max;function ne(r,o,c){var e=r==null?0:r.length;if(!e)return-1;var n=c==null?0:Ie(c);return n<0&&(n=mt(e+n,0)),st(r,Z(o),n)}var gt=vt(ne);const Ne=gt;var bt=Oe(function(r,o){return ae(r)?at(r,Ee(o,1,ae,!0)):[]});const fe=bt;function yt(r,o){return Xe(r,o)}function It(r){for(var o=-1,c=r==null?0:r.length,e=0,n=[];++o<c;){var d=r[o];d&&(n[e++]=d)}return n}function Ct(r,o){for(var c=-1,e=r==null?0:r.length;++c<e;)if(!o(r[c],c,r))return!1;return!0}function wt(r,o){var c=!0;return Ce(r,function(e,n,d){return c=!!o(e,n,d),c}),c}function xt(r,o,c){var e=we(r)?Ct:wt;return c&&Ze(r,o,c)&&(o=void 0),e(r,Z(o))}function St(r,o,c){var e=r==null?0:r.length;return e?(o=c||o===void 0?1:Ie(o),o=e-o,ot(r,0,o<0?0:o)):[]}var Ot=Ye("length");const Et=Ot;var ke="\\ud800-\\udfff",At="\\u0300-\\u036f",Dt="\\ufe20-\\ufe2f",Nt="\\u20d0-\\u20ff",kt=At+Dt+Nt,Rt="\\ufe0e\\ufe0f",Lt="["+ke+"]",se="["+kt+"]",oe="\\ud83c[\\udffb-\\udfff]",Pt="(?:"+se+"|"+oe+")",Re="[^"+ke+"]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",_t="\\u200d",_e=Pt+"?",Te="["+Rt+"]?",Tt="(?:"+_t+"(?:"+[Re,Le,Pe].join("|")+")"+Te+_e+")*",$t=Te+_e+Tt,Mt="(?:"+[Re+se+"?",se,Le,Pe,Lt].join("|")+")",ve=RegExp(oe+"(?="+oe+")|"+Mt+$t,"g");function Qt(r){for(var o=ve.lastIndex=0;ve.test(r);)++o;return o}function Vt(r){return ct(r)?Qt(r):Et(r)}var Ft="[object Map]",Bt="[object Set]";function Kt(r){if(r==null)return 0;if(xe(r))return it(r)?Vt(r):r.length;var o=et(r);return o==Ft||o==Bt?r.size:Ge(r).length}var zt=Oe(function(r){return lt(Ee(r,1,ae,!0))});const me=zt;var V=function(r){X(o,r);function o(){return r.apply(this,arguments)||this}var c=o.prototype;return c.render=function(){var n=this.props,d=n.className,p=n.name,t=S(p,"flag",d),a=R(o,this.props),s=P(o,this.props);return y.createElement(s,I({},a,{className:t}))},o}(D.PureComponent);V.handledProps=["as","className","name"];V.propTypes={};V.defaultProps={as:"i"};V.create=j(V,function(r){return{name:r}});const $e=V;function q(r){var o=r.className,c=S("divider",o),e=R(q,r),n=P(q,r);return y.createElement(n,I({},e,{className:c}))}q.handledProps=["as","className"];q.propTypes={};var G=function(r){X(o,r);function o(){for(var e,n=arguments.length,d=new Array(n),p=0;p<n;p++)d[p]=arguments[p];return e=r.call.apply(r,[this].concat(d))||this,e.handleClick=function(t){b(e.props,"onClick",t,e.props)},e}var c=o.prototype;return c.render=function(){var n=this.props,d=n.active,p=n.children,t=n.className,a=n.content,s=n.disabled,i=n.description,u=n.flag,l=n.icon,h=n.image,f=n.label,v=n.selected,g=n.text,x=S(m(d,"active"),m(s,"disabled"),m(v,"selected"),"item",t),C=$(l)?tt(p,"DropdownMenu")&&"dropdown":l,A=R(o,this.props),O=P(o,this.props),L={role:"option","aria-disabled":s,"aria-checked":d,"aria-selected":v};if(!Q(p))return y.createElement(O,I({},A,L,{className:x,onClick:this.handleClick}),p);var W=$e.create(u,{autoGenerateKey:!1}),_=le.create(C,{autoGenerateKey:!1}),T=Ae.create(h,{autoGenerateKey:!1}),K=De.create(f,{autoGenerateKey:!1}),Y=ce("span",function(U){return{children:U}},i,{defaultProps:{className:"description"},autoGenerateKey:!1}),z=ce("span",function(U){return{children:U}},Q(a)?g:a,{defaultProps:{className:"text"},autoGenerateKey:!1});return y.createElement(O,I({},A,L,{className:x,onClick:this.handleClick}),T,_,W,K,Y,z)},o}(D.Component);G.handledProps=["active","as","children","className","content","description","disabled","flag","icon","image","label","onClick","selected","text","value"];G.propTypes={};G.create=j(G,function(r){return r});const Me=G;function N(r){var o=r.children,c=r.className,e=r.content,n=r.icon,d=S("header",c),p=R(N,r),t=P(N,r);return Q(o)?y.createElement(t,I({},p,{className:d}),le.create(n,{autoGenerateKey:!1}),e):y.createElement(t,I({},p,{className:d}),o)}N.handledProps=["as","children","className","content","icon"];N.propTypes={};N.create=j(N,function(r){return{content:r}});function F(r){var o=r.children,c=r.className,e=r.content,n=r.direction,d=r.open,p=r.scrolling,t=S(n,m(d,"visible"),m(p,"scrolling"),"menu transition",c),a=R(F,r),s=P(F,r);return y.createElement(s,I({},a,{className:t}),Q(o)?e:o)}F.handledProps=["as","children","className","content","direction","open","scrolling"];F.propTypes={};var B=function(r){X(o,r);function o(){for(var e,n=arguments.length,d=new Array(n),p=0;p<n;p++)d[p]=arguments[p];return e=r.call.apply(r,[this].concat(d))||this,e.handleChange=function(t){var a=H(t,"target.value");b(e.props,"onChange",t,I({},e.props,{value:a}))},e}var c=o.prototype;return c.render=function(){var n=this.props,d=n.autoComplete,p=n.className,t=n.tabIndex,a=n.type,s=n.value,i=S("search",p),u=R(o,this.props);return y.createElement("input",I({},u,{"aria-autocomplete":"list",autoComplete:d,className:i,onChange:this.handleChange,tabIndex:t,type:a,value:s}))},o}(D.Component);B.handledProps=["as","autoComplete","className","tabIndex","type","value"];B.propTypes={};B.defaultProps={autoComplete:"off",type:"text"};B.create=j(B,function(r){return{type:r}});const Qe=B;function k(r){var o=r.children,c=r.className,e=r.content,n=S("divider",c),d=R(k,r),p=P(k,r);return y.createElement(p,I({"aria-atomic":!0,"aria-live":"polite",role:"alert"},d,{className:n}),Q(o)?e:o)}k.handledProps=["as","children","className","content"];k.propTypes={};k.create=j(k,function(r){return{content:r}});var Ve=/[\\^$.*+?()[\]{}|]/g,Ut=RegExp(Ve.source);function Ht(r){return r=je(r),r&&Ut.test(r)?r.replace(Ve,"\\$&"):r}function M(r){var o=r.additionLabel,c=r.additionPosition,e=r.allowAdditions,n=r.deburr,d=r.multiple,p=r.options,t=r.search,a=r.searchQuery,s=r.value,i=p;if(d&&(i=he(i,function(v){return!ie(s,v.value)})),t&&a)if(Se(t))i=t(i,a);else{var u=n?de(a):a,l=new RegExp(Ht(u),"i");i=he(i,function(v){return l.test(n?de(v.text):v.text)})}if(e&&t&&a&&!rt(i,{text:a})){var h=y.isValidElement(o)?y.cloneElement(o,{key:"addition-label"}):o||"",f={key:"addition",text:[h,y.createElement("b",{key:"addition-query"},a)],value:a,className:"addition","data-additional":!0};c==="top"?i.unshift(f):i.push(f)}return i}M.handledProps=[];function ge(r){var o=r.additionLabel,c=r.additionPosition,e=r.allowAdditions,n=r.deburr,d=r.multiple,p=r.options,t=r.search,a=r.searchQuery,s=r.selectedIndex,i=r.value,u=M({value:i,options:p,searchQuery:a,additionLabel:o,additionPosition:c,allowAdditions:e,deburr:n,multiple:d,search:t}),l=ht(u,function(g,x,C){return x.disabled||g.push(C),g},[]),h;if(!s||s<0){var f=l[0];h=d?f:ne(u,["value",i])||l[0]}else if(d)h=Ne(l,function(g){return g>=s}),s>=u.length-1&&(h=l[l.length-1]);else{var v=ne(u,["value",i]);h=ie(l,v)?v:void 0}return(!h||h<0)&&(h=l[0]),h}var be=function(o,c){return $(o)?c:o},ye=function(o){return o&&o.map(function(c){return dt(c,["key","value"])})};function Fe(r){var o=r.flag,c=r.image,e=r.text;return Se(e)?e:{content:y.createElement(y.Fragment,null,$e.create(o),Ae.create(c),e)}}var E=function(r){X(o,r);function o(){for(var e,n=arguments.length,d=new Array(n),p=0;p<n;p++)d[p]=arguments[p];return e=r.call.apply(r,[this].concat(d))||this,e.searchRef=D.createRef(),e.sizerRef=D.createRef(),e.ref=D.createRef(),e.handleChange=function(t,a){b(e.props,"onChange",t,I({},e.props,{value:a}))},e.closeOnChange=function(t){var a=e.props,s=a.closeOnChange,i=a.multiple,u=He(s)?!i:s;u&&e.close(t,ut)},e.closeOnEscape=function(t){e.props.closeOnEscape&&w.getCode(t)===w.Escape&&(t.preventDefault(),e.close(t))},e.moveSelectionOnKeyDown=function(t){var a,s=e.props,i=s.multiple,u=s.selectOnNavigation,l=e.state.open;if(l){var h=(a={},a[w.ArrowDown]=1,a[w.ArrowUp]=-1,a),f=h[w.getCode(t)];if(f!==void 0){t.preventDefault();var v=e.getSelectedIndexAfterMove(f);!i&&u&&e.makeSelectedItemActive(t,v),e.setState({selectedIndex:v})}}},e.openOnSpace=function(t){var a,s,i,u=e.state.focus&&!e.state.open&&w.getCode(t)===w.Spacebar,l=((a=t.target)==null?void 0:a.tagName)!=="INPUT"&&((s=t.target)==null?void 0:s.tagName)!=="TEXTAREA"&&((i=t.target)==null?void 0:i.isContentEditable)!==!0;u&&(l&&t.preventDefault(),e.open(t))},e.openOnArrow=function(t){var a=e.state,s=a.focus,i=a.open;if(s&&!i){var u=w.getCode(t);(u===w.ArrowDown||u===w.ArrowUp)&&(t.preventDefault(),e.open(t))}},e.makeSelectedItemActive=function(t,a){var s=e.state,i=s.open,u=s.value,l=e.props.multiple,h=e.getSelectedItem(a),f=H(h,"value"),v=H(h,"disabled");if($(f)||!i||v)return u;var g=l?me(u,[f]):f,x=l?!!fe(g,u).length:g!==u;return x&&(e.setState({value:g}),e.handleChange(t,g),h["data-additional"]&&b(e.props,"onAddItem",t,I({},e.props,{value:f}))),u},e.selectItemOnEnter=function(t){var a=e.props.search,s=e.state,i=s.open,u=s.selectedIndex;if(i){var l=w.getCode(t)===w.Enter||!a&&w.getCode(t)===w.Spacebar;if(l){t.preventDefault();var h=Kt(M({value:e.state.value,options:e.props.options,searchQuery:e.state.searchQuery,additionLabel:e.props.additionLabel,additionPosition:e.props.additionPosition,allowAdditions:e.props.allowAdditions,deburr:e.props.deburr,multiple:e.props.multiple,search:e.props.search}));if(!(a&&h===0)){var f=e.makeSelectedItemActive(t,u);e.setState({selectedIndex:ge({additionLabel:e.props.additionLabel,additionPosition:e.props.additionPosition,allowAdditions:e.props.allowAdditions,deburr:e.props.deburr,multiple:e.props.multiple,search:e.props.search,selectedIndex:u,value:f,options:e.props.options,searchQuery:""})}),e.closeOnChange(t),e.clearSearchQuery(),a&&b(e.searchRef.current,"focus")}}}},e.removeItemOnBackspace=function(t){var a=e.props,s=a.multiple,i=a.search,u=e.state,l=u.searchQuery,h=u.value;if(w.getCode(t)===w.Backspace&&!(l||!i||!s||J(h))){t.preventDefault();var f=St(h);e.setState({value:f}),e.handleChange(t,f)}},e.closeOnDocumentClick=function(t){e.props.closeOnBlur&&(e.ref.current&&pt(e.ref.current,t)||e.close())},e.handleMouseDown=function(t){e.isMouseDown=!0,b(e.props,"onMouseDown",t,e.props),document.addEventListener("mouseup",e.handleDocumentMouseUp)},e.handleDocumentMouseUp=function(){e.isMouseDown=!1,document.removeEventListener("mouseup",e.handleDocumentMouseUp)},e.handleClick=function(t){var a=e.props,s=a.minCharacters,i=a.search,u=e.state,l=u.open,h=u.searchQuery;if(b(e.props,"onClick",t,e.props),t.stopPropagation(),!i)return e.toggle(t);if(l){b(e.searchRef.current,"focus");return}if(h.length>=s||s===1){e.open(t);return}b(e.searchRef.current,"focus")},e.handleIconClick=function(t){var a=e.props.clearable,s=e.hasValue();b(e.props,"onClick",t,e.props),t.stopPropagation(),a&&s?e.clearValue(t):e.toggle(t)},e.handleItemClick=function(t,a){var s=e.props,i=s.multiple,u=s.search,l=e.state.value,h=a.value;if(t.stopPropagation(),(i||a.disabled)&&t.nativeEvent.stopImmediatePropagation(),!a.disabled){var f=a["data-additional"],v=i?me(e.state.value,[h]):h,g=i?!!fe(v,l).length:v!==l;g&&(e.setState({value:v}),e.handleChange(t,v)),e.clearSearchQuery(),u?b(e.searchRef.current,"focus"):b(e.ref.current,"focus"),e.closeOnChange(t),f&&b(e.props,"onAddItem",t,I({},e.props,{value:h}))}},e.handleFocus=function(t){var a=e.state.focus;a||(b(e.props,"onFocus",t,e.props),e.setState({focus:!0}))},e.handleBlur=function(t){var a=H(t,"currentTarget");if(!(a&&a.contains(document.activeElement))){var s=e.props,i=s.closeOnBlur,u=s.multiple,l=s.selectOnBlur;e.isMouseDown||(b(e.props,"onBlur",t,e.props),l&&!u&&(e.makeSelectedItemActive(t,e.state.selectedIndex),i&&e.close()),e.setState({focus:!1}),e.clearSearchQuery())}},e.handleSearchChange=function(t,a){var s=a.value;t.stopPropagation();var i=e.props.minCharacters,u=e.state.open,l=s;if(b(e.props,"onSearchChange",t,I({},e.props,{searchQuery:l})),e.setState({searchQuery:l,selectedIndex:0}),!u&&l.length>=i){e.open();return}u&&i!==1&&l.length<i&&e.close()},e.handleKeyDown=function(t){e.moveSelectionOnKeyDown(t),e.openOnArrow(t),e.openOnSpace(t),e.selectItemOnEnter(t),b(e.props,"onKeyDown",t)},e.getSelectedItem=function(t){var a=M({value:e.state.value,options:e.props.options,searchQuery:e.state.searchQuery,additionLabel:e.props.additionLabel,additionPosition:e.props.additionPosition,allowAdditions:e.props.allowAdditions,deburr:e.props.deburr,multiple:e.props.multiple,search:e.props.search});return H(a,"["+t+"]")},e.getItemByValue=function(t){var a=e.props.options;return Ne(a,{value:t})},e.getDropdownAriaOptions=function(){var t=e.props,a=t.loading,s=t.disabled,i=t.search,u=t.multiple,l=e.state.open,h={role:i?"combobox":"listbox","aria-busy":a,"aria-disabled":s,"aria-expanded":!!l};return h.role==="listbox"&&(h["aria-multiselectable"]=u),h},e.clearSearchQuery=function(){var t=e.state.searchQuery;t===void 0||t===""||e.setState({searchQuery:""})},e.handleLabelClick=function(t,a){t.stopPropagation(),e.setState({selectedLabel:a.value}),b(e.props,"onLabelClick",t,a)},e.handleLabelRemove=function(t,a){t.stopPropagation();var s=e.state.value,i=nt(s,a.value);e.setState({value:i}),e.handleChange(t,i)},e.getSelectedIndexAfterMove=function(t,a){a===void 0&&(a=e.state.selectedIndex);var s=M({value:e.state.value,options:e.props.options,searchQuery:e.state.searchQuery,additionLabel:e.props.additionLabel,additionPosition:e.props.additionPosition,allowAdditions:e.props.allowAdditions,deburr:e.props.deburr,multiple:e.props.multiple,search:e.props.search});if(!(s===void 0||xt(s,"disabled"))){var i=s.length-1,u=e.props.wrapSelection,l=a+t;return!u&&(l>i||l<0)?l=a:l>i?l=0:l<0&&(l=i),s[l].disabled?e.getSelectedIndexAfterMove(t,l):l}},e.handleIconOverrides=function(t){var a=e.props.clearable,s=S(a&&e.hasValue()&&"clear",t.className);return{className:s,onClick:function(u){b(t,"onClick",u,t),e.handleIconClick(u)}}},e.clearValue=function(t){var a=e.props.multiple,s=a?[]:"";e.setState({value:s}),e.handleChange(t,s)},e.computeSearchInputTabIndex=function(){var t=e.props,a=t.disabled,s=t.tabIndex;return $(s)?a?-1:0:s},e.computeSearchInputWidth=function(){var t=e.state.searchQuery;if(e.sizerRef.current&&t){e.sizerRef.current.style.display="inline",e.sizerRef.current.textContent=t;var a=Math.ceil(e.sizerRef.current.getBoundingClientRect().width);return e.sizerRef.current.style.removeProperty("display"),a}},e.computeTabIndex=function(){var t=e.props,a=t.disabled,s=t.search,i=t.tabIndex;if(!s)return a?-1:$(i)?0:i},e.handleSearchInputOverrides=function(t){return{onChange:function(s,i){b(t,"onChange",s,i),e.handleSearchChange(s,i)}}},e.hasValue=function(){var t=e.props.multiple,a=e.state.value;return t?!J(a):!$(a)&&a!==""},e.scrollSelectedItemIntoView=function(){if(e.ref.current){var t=e.ref.current.querySelector(".menu.visible");if(t){var a=t.querySelector(".item.selected");if(a){var s=a.offsetTop<t.scrollTop,i=a.offsetTop+a.clientHeight>t.scrollTop+t.clientHeight;s?t.scrollTop=a.offsetTop:i&&(t.scrollTop=a.offsetTop+a.clientHeight-t.clientHeight)}}}},e.setOpenDirection=function(){if(e.ref.current){var t=e.ref.current.querySelector(".menu.visible");if(t){var a=e.ref.current.getBoundingClientRect(),s=t.clientHeight,i=document.documentElement.clientHeight-a.top-a.height-s,u=a.top-s,l=i<0&&u>i;!l!=!e.state.upward&&e.setState({upward:l})}}},e.open=function(t,a){t===void 0&&(t=null),a===void 0&&(a=!0);var s=e.props,i=s.disabled,u=s.search;i||(u&&b(e.searchRef.current,"focus"),b(e.props,"onOpen",t,e.props),a&&e.setState({open:!0}),e.scrollSelectedItemIntoView())},e.close=function(t,a){a===void 0&&(a=e.handleClose),e.state.open&&(b(e.props,"onClose",t,e.props),e.setState({open:!1},a))},e.handleClose=function(){var t=document.activeElement===e.searchRef.current;!t&&e.ref.current&&e.ref.current.blur();var a=document.activeElement===e.ref.current,s=t||a;e.setState({focus:s})},e.toggle=function(t){return e.state.open?e.close(t):e.open(t)},e.renderText=function(){var t=e.props,a=t.multiple,s=t.placeholder,i=t.search,u=t.text,l=e.state,h=l.searchQuery,f=l.selectedIndex,v=l.value,g=l.open,x=e.hasValue(),C=S(s&&!x&&"default","text",i&&h&&"filtered"),A=s,O;return u?A=u:g&&!a?O=e.getSelectedItem(f):x&&(O=e.getItemByValue(v)),k.create(O?Fe(O):A,{defaultProps:{className:C}})},e.renderSearchInput=function(){var t=e.props,a=t.search,s=t.searchInput,i=e.state.searchQuery;return a&&y.createElement(pe,{innerRef:e.searchRef},Qe.create(s,{defaultProps:{style:{width:e.computeSearchInputWidth()},tabIndex:e.computeSearchInputTabIndex(),value:i},overrideProps:e.handleSearchInputOverrides}))},e.renderSearchSizer=function(){var t=e.props,a=t.search,s=t.multiple;return a&&s&&y.createElement("span",{className:"sizer",ref:e.sizerRef})},e.renderLabels=function(){var t=e.props,a=t.multiple,s=t.renderLabel,i=e.state,u=i.selectedLabel,l=i.value;if(!(!a||J(l))){var h=ee(l,e.getItemByValue);return ee(It(h),function(f,v){var g={active:f.value===u,as:"a",key:be(f.key,f.value),onClick:e.handleLabelClick,onRemove:e.handleLabelRemove,value:f.value};return De.create(s(f,v,g),{defaultProps:g})})}},e.renderOptions=function(){var t=e.props,a=t.lazyLoad,s=t.multiple,i=t.search,u=t.noResultsMessage,l=e.state,h=l.open,f=l.selectedIndex,v=l.value;if(a&&!h)return null;var g=M({value:e.state.value,options:e.props.options,searchQuery:e.state.searchQuery,additionLabel:e.props.additionLabel,additionPosition:e.props.additionPosition,allowAdditions:e.props.allowAdditions,deburr:e.props.deburr,multiple:e.props.multiple,search:e.props.search});if(u!==null&&i&&J(g))return y.createElement("div",{className:"message"},u);var x=s?function(C){return ie(v,C)}:function(C){return C===v};return ee(g,function(C,A){return Me.create(I({active:x(C.value),selected:f===A},C,{key:be(C.key,C.value),style:I({},C.style,{pointerEvents:"all"})}),{generateKey:!1,overrideProps:function(L){return{onClick:function(_,T){L.onClick==null||L.onClick(_,T),e.handleItemClick(_,T)}}}})})},e.renderMenu=function(){var t=e.props,a=t.children,s=t.direction,i=t.header,u=e.state.open,l=e.getDropdownMenuAriaOptions();if(!Q(a)){var h=D.Children.only(a),f=S(s,m(u,"visible"),h.props.className);return D.cloneElement(h,I({className:f},l))}return y.createElement(F,I({},l,{direction:s,open:u}),N.create(i,{autoGenerateKey:!1}),e.renderOptions())},e}var c=o.prototype;return c.getInitialAutoControlledState=function(){return{focus:!1,searchQuery:""}},o.getAutoControlledStateFromProps=function(n,d,p){var t={__options:n.options,__value:d.value},a=!re(p.__value,d.value)||!yt(ye(n.options),ye(p.__options));return a&&(t.selectedIndex=ge({additionLabel:n.additionLabel,additionPosition:n.additionPosition,allowAdditions:n.allowAdditions,deburr:n.deburr,multiple:n.multiple,search:n.search,selectedIndex:d.selectedIndex,value:d.value,options:n.options,searchQuery:d.searchQuery})),t},c.componentDidMount=function(){var n=this.state.open;n&&this.open(null,!1)},c.shouldComponentUpdate=function(n,d){return!re(n,this.props)||!re(d,this.state)},c.componentDidUpdate=function(n,d){var p=this.props,t=p.closeOnBlur,a=p.minCharacters,s=p.openOnFocus,i=p.search;if(!d.focus&&this.state.focus){if(!this.isMouseDown){var u=!i||i&&a===1&&!this.state.open;s&&u&&this.open()}}else d.focus&&!this.state.focus&&!this.isMouseDown&&t&&this.close();!d.open&&this.state.open?(this.setOpenDirection(),this.scrollSelectedItemIntoView()):d.open&&this.state.open,d.selectedIndex!==this.state.selectedIndex&&this.scrollSelectedItemIntoView()},c.getDropdownMenuAriaOptions=function(){var n=this.props,d=n.search,p=n.multiple,t={};return d&&(t["aria-multiselectable"]=p,t.role="listbox"),t},c.render=function(){var n=this.props,d=n.basic,p=n.button,t=n.className,a=n.compact,s=n.disabled,i=n.error,u=n.fluid,l=n.floating,h=n.icon,f=n.inline,v=n.item,g=n.labeled,x=n.loading,C=n.multiple,A=n.pointing,O=n.search,L=n.selection,W=n.scrolling,_=n.simple,T=n.trigger,K=this.state,Y=K.focus,z=K.open,U=K.upward,Be=S("ui",m(z,"active visible"),m(s,"disabled"),m(i,"error"),m(x,"loading"),m(d,"basic"),m(p,"button"),m(a,"compact"),m(u,"fluid"),m(l,"floating"),m(f,"inline"),m(g,"labeled"),m(v,"item"),m(C,"multiple"),m(O,"search"),m(L,"selection"),m(_,"simple"),m(W,"scrolling"),m(U,"upward"),We(A,"pointing"),"dropdown",t),Ke=R(o,this.props),ue=P(o,this.props),ze=this.getDropdownAriaOptions(ue,this.props);return y.createElement(pe,{innerRef:this.ref},y.createElement(ue,I({},Ke,ze,{className:Be,onBlur:this.handleBlur,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onFocus:this.handleFocus,onChange:this.handleChange,tabIndex:this.computeTabIndex()}),this.renderLabels(),this.renderSearchInput(),this.renderSearchSizer(),T||this.renderText(),le.create(h,{overrideProps:this.handleIconOverrides,autoGenerateKey:!1}),this.renderMenu(),z&&y.createElement(te,{name:"keydown",on:this.closeOnEscape}),z&&y.createElement(te,{name:"click",on:this.closeOnDocumentClick}),Y&&y.createElement(te,{name:"keydown",on:this.removeItemOnBackspace})))},o}(Ue);E.handledProps=["additionLabel","additionPosition","allowAdditions","as","basic","button","children","className","clearable","closeOnBlur","closeOnChange","closeOnEscape","compact","deburr","defaultOpen","defaultSearchQuery","defaultSelectedLabel","defaultUpward","defaultValue","direction","disabled","error","floating","fluid","header","icon","inline","item","labeled","lazyLoad","loading","minCharacters","multiple","noResultsMessage","onAddItem","onBlur","onChange","onClick","onClose","onFocus","onLabelClick","onMouseDown","onOpen","onSearchChange","open","openOnFocus","options","placeholder","pointing","renderLabel","scrolling","search","searchInput","searchQuery","selectOnBlur","selectOnNavigation","selectedLabel","selection","simple","tabIndex","text","trigger","upward","value","wrapSelection"];E.propTypes={};E.defaultProps={additionLabel:"Add ",additionPosition:"top",closeOnBlur:!0,closeOnEscape:!0,deburr:!1,icon:"dropdown",minCharacters:1,noResultsMessage:"No results found.",openOnFocus:!0,renderLabel:Fe,searchInput:"text",selectOnBlur:!0,selectOnNavigation:!0,wrapSelection:!0};E.autoControlledProps=["open","searchQuery","selectedLabel","value","upward"];E.Divider=q;E.Header=N;E.Item=Me;E.Menu=F;E.SearchInput=Qe;E.Text=k;export{E as D};
