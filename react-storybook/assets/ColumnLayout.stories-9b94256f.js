import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as w}from"./Radio-1beb9084.js";import{a as D,_ as x}from"./extends-d7eb49ad.js";import{_ as S,g as P,a as V}from"./getElementType-68bbeded.js";import{g as T,I as f}from"./Icon-3e17657a.js";import{r as g,R as b}from"./index-76fb7be0.js";import{R as $}from"./includes-fd62a01a.js";import{S as v}from"./Button-89f13c84.js";import{I as F}from"./Input-d1b5754e.js";/* empty css              */import"./Checkbox-fd08ab71.js";import"./_baseSet-4bbc9ad1.js";import"./htmlPropsUtils-2e7c2e5e.js";import"./_commonjsHelpers-de833af9.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./index-d3ea75b5.js";import"./assertThisInitialized-081f9914.js";import"./Label-28a867c8.js";import"./Portal-f68bc7ab.js";import"./map-88496d49.js";var m=function(l){D(r,l);function r(){for(var n,t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return n=l.call.apply(l,[this].concat(s))||this,n.ref=g.createRef(),n.focus=function(){return n.ref.current.focus()},n.handleChange=function(a){var i=T(a,"target.value");S(n.props,"onChange",a,x({},n.props,{value:i}))},n.handleInput=function(a){var i=T(a,"target.value");S(n.props,"onInput",a,x({},n.props,{value:i}))},n}var h=r.prototype;return h.render=function(){var t=this.props,s=t.rows,o=t.value,a=P(r,this.props),i=V(r,this.props);return b.createElement($,{innerRef:this.ref},b.createElement(i,x({},a,{onChange:this.handleChange,onInput:this.handleInput,rows:s,value:o})))},r}(g.Component);m.handledProps=["as","onChange","onInput","rows","value"];m.propTypes={};m.defaultProps={as:"textarea",rows:3};const J=m;class y extends g.Component{render(){const{headerText:r,onClose:h,columnFooter:n,showColumnFooter:t,columnBody:s,className:o}=this.props;return e.jsxs("div",{className:`column-layout-container ${o}`,children:[e.jsxs("div",{className:"column-layout-container-header",children:[e.jsx("div",{children:r}),e.jsx("div",{children:e.jsxs(v,{className:"column-layout-container-header-close-btn",onClick:h,children:["Close",e.jsx(f,{name:"close"})]})})]}),e.jsx("div",{className:`column-layout-container-body ${t?"body-with-action":"body-wo-action"}`,children:s}),t&&e.jsx("div",{className:"column-layout-container-footer",children:n})]})}}y.defaultProps={};y.defaultProps={headerText:"Header",columnFooter:e.jsx(e.Fragment,{}),showColumnFooter:!1,columnBody:e.jsx(e.Fragment,{}),className:""};const X=y;y.__docgenInfo={description:"",methods:[],displayName:"ColumnLayout",props:{onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:""},headerText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Header"',computed:!1}},columnFooter:{required:!1,tsType:{name:"JSX.Element"},description:"",defaultValue:{value:"<></>",computed:!1}},showColumnFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},columnBody:{required:!1,tsType:{name:"JSX.Element"},description:"",defaultValue:{value:"<></>",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const ue={component:X,title:"ColumnLayout",tags:["autodocs"]},d={args:{}},C=()=>{alert("closed")},q=()=>{alert("saved")},j={minHeight:"100px",borderRadius:"6px",padding:"24px",boxShadow:"0px 1px 2px 0px #0000000F",background:"#fff"},p={args:{onClose:C,headerText:"Column Layout",showColumnFooter:!0,columnFooter:e.jsx("div",{style:{justifyContent:"flex-end",display:"flex",width:"100%"},children:e.jsx(v,{color:"green",onClick:q,children:e.jsxs("div",{style:{fontWeight:"600"},children:["Create",e.jsx(f,{name:"check",style:{marginLeft:"8px"}})]})})}),columnBody:e.jsx("div",{style:{width:"95%",margin:"auto"},children:e.jsx("div",{style:j,children:"Body"})})}},c={args:{onClose:C,headerText:"Column Layout",showColumnFooter:!1,columnBody:e.jsx("div",{style:{width:"95%",margin:"auto"},children:e.jsx("div",{style:j,children:"Body"})})}},u={args:{onClose:C,headerText:"Column Layout",showColumnFooter:!0,columnFooter:e.jsx("div",{style:{justifyContent:"flex-end",display:"flex",width:"100%"},children:e.jsx(v,{color:"green",onClick:q,children:e.jsxs("div",{style:{fontWeight:"600"},children:["Create",e.jsx(f,{name:"check",style:{marginLeft:"8px"}})]})})}),columnBody:e.jsx("div",{style:{width:"95%",margin:"auto"},children:e.jsxs("div",{style:j,children:[e.jsxs("div",{style:{padding:"12px 16px 12px 16px",borderRadius:"6px",background:"#fff !important",boxShadow:"0px 1px 3px 0px #0000001A"},children:[e.jsxs("div",{style:{fontWeight:"500",fontSize:"14px",lineHeight:"20px",color:"#545454",display:"inline-block",marginRight:"20px"},children:[e.jsx(w,{style:{marginRight:"5px"}}),"Create Category"]}),e.jsxs("div",{style:{fontWeight:"500",fontSize:"14px",lineHeight:"20px",color:"#545454",display:"inline-block",marginRight:"20px"},children:[e.jsx(w,{style:{marginRight:"5px"}}),"Create Sub-Category"]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[e.jsxs("div",{style:{width:"48%"},children:[e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("div",{style:{paddingBottom:"6px",fontWeight:"500",fontSize:"13px",color:"#374151"},children:"Category Name"}),e.jsx(F,{placeholder:"Enter Full Category Name"})]}),e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("div",{style:{paddingBottom:"6px",fontWeight:"500",fontSize:"13px",color:"#374151"},children:"Display Name"}),e.jsx(F,{placeholder:"Enter short name"})]})]}),e.jsx("div",{style:{width:"48%"},children:e.jsxs("div",{style:{marginTop:"24px"},children:[e.jsx("div",{style:{paddingBottom:"6px",fontWeight:"500",fontSize:"13px",color:"#374151"},children:"Enter Description"}),e.jsx(J,{rows:7,style:{width:"100%"}})]})})]})]})})}};var B,R,L;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {}
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var W,N,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    onClose: onClose,
    headerText: "Column Layout",
    showColumnFooter: true,
    columnFooter: <div style={{
      justifyContent: "flex-end",
      display: "flex",
      width: "100%"
    }}>
        <Button color={"green"} onClick={onSave}>
          <div style={{
          fontWeight: "600"
        }}>
            Create
            <Icon name={"check"} style={{
            marginLeft: "8px"
          }} />
          </div>
        </Button>
      </div>,
    columnBody: <div style={{
      width: "95%",
      margin: "auto"
    }}>
        <div style={bodyStyle}>Body</div>
      </div>
  }
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var k,I,z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onClose: onClose,
    headerText: "Column Layout",
    showColumnFooter: false,
    columnBody: <div style={{
      width: "95%",
      margin: "auto"
    }}>
        <div style={bodyStyle}>Body</div>
      </div>
  }
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var A,H,_;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    onClose: onClose,
    headerText: "Column Layout",
    showColumnFooter: true,
    columnFooter: <div style={{
      justifyContent: "flex-end",
      display: "flex",
      width: "100%"
    }}>
        <Button color={"green"} onClick={onSave}>
          <div style={{
          fontWeight: "600"
        }}>
            Create
            <Icon name={"check"} style={{
            marginLeft: "8px"
          }} />
          </div>
        </Button>
      </div>,
    columnBody: <div style={{
      width: "95%",
      margin: "auto"
    }}>
        <div style={bodyStyle}>
          <div style={{
          padding: "12px 16px 12px 16px",
          borderRadius: "6px",
          background: "#fff !important",
          boxShadow: "0px 1px 3px 0px #0000001A"
        }}>
            <div style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#545454",
            display: "inline-block",
            marginRight: "20px"
          }}>
              <Radio style={{
              marginRight: "5px"
            }} />
              Create Category
            </div>
            <div style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#545454",
            display: "inline-block",
            marginRight: "20px"
          }}>
              <Radio style={{
              marginRight: "5px"
            }} />
              Create Sub-Category
            </div>
          </div>

          <div style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}>
            <div style={{
            width: "48%"
          }}>
              <div style={{
              marginTop: "24px"
            }}>
                <div style={{
                paddingBottom: "6px",
                fontWeight: "500",
                fontSize: "13px",
                color: "#374151"
              }}>
                  Category Name
                </div>
                <Input placeholder={"Enter Full Category Name"} />
              </div>

              <div style={{
              marginTop: "24px"
            }}>
                <div style={{
                paddingBottom: "6px",
                fontWeight: "500",
                fontSize: "13px",
                color: "#374151"
              }}>
                  Display Name
                </div>
                <Input placeholder={"Enter short name"} />
              </div>
            </div>

            <div style={{
            width: "48%"
          }}>
              <div style={{
              marginTop: "24px"
            }}>
                <div style={{
                paddingBottom: "6px",
                fontWeight: "500",
                fontSize: "13px",
                color: "#374151"
              }}>
                  Enter Description
                </div>
                <TextArea rows={7} style={{
                width: "100%"
              }} />
              </div>
            </div>
          </div>
        </div>
      </div>
  }
}`,...(_=(H=u.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const me=["Default","WithFooter","WithoutFooter","AddNewCategoryColumnLayout"];export{u as AddNewCategoryColumnLayout,d as Default,p as WithFooter,c as WithoutFooter,me as __namedExportsOrder,ue as default};
