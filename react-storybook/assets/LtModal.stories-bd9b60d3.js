import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as a}from"./index-ad58220e.js";import{M as h}from"./ltModal-4ffb1988.js";import{B as d}from"./Button-8f1e9999.js";import{I as f}from"./Icon-a36dbc07.js";import{I as u}from"./Input-8f9d0f6e.js";import{L as y}from"./legends-c02adbc3.js";import"./_commonjsHelpers-de833af9.js";import"./Modal-49942d08.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-03e2068e.js";import"./getElementType-486fb75c.js";import"./pick-621ad31c.js";import"./_baseSet-4bb90091.js";import"./childrenUtils-8c0966fa.js";import"./includes-6af2fe54.js";import"./index-aa4587fb.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-8d8d3e94.js";import"./ModernAutoControlledComponent-4ca57a24.js";import"./assertThisInitialized-081f9914.js";import"./Portal-3e499843.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-0dadb82a.js";import"./checkIcon-670515d6.js";import"./Label-3b77b452.js";import"./htmlPropsUtils-cd6198e4.js";const ne={component:h,title:"LtModal",tags:["autodocs"]},V=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],j=({modalProps:x})=>{const[C,l]=a.useState(!1),[s,r]=a.useState(""),[p,i]=a.useState(""),v=()=>l(!0),t=()=>l(!1),I=()=>{console.log("Input 1:",s),console.log("Input 2:",p),r(""),i(""),t()},M="Legend";return e.jsxs("div",{children:[e.jsx("button",{onClick:v,children:"Open Modal"}),e.jsx(h,{...x,open:C,onClose:t,children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:s,onChange:o=>r(o.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:o=>i(o.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(y,{heading:M,legendsData:V}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(d,{content:"Cancel",onClick:t}),e.jsx(d,{content:"Create",color:"green",onClick:I})]})]})})]})},n=j.bind({});n.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,headerIcon:e.jsx(f,{name:"close"}),className:"my-custom-class"}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
  modalProps
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
  const handleCreate = () => {
    console.log("Input 1:", inputValue1);
    console.log("Input 2:", inputValue2);
    setInputValue1("");
    setInputValue2("");
    handleClose();
  };
  const heading = "Legend";
  return <div>
      <button onClick={handleOpen}>Open Modal</button>
      <MyModal {...modalProps} open={modalOpen} onClose={handleClose}>
        <div>
          <h5>Enter Goal Range (in Minutes)</h5>
          <div style={{
          display: "flex"
        }}>
            <Input placeholder="Min value" value={inputValue1} onChange={e => setInputValue1(e.target.value)} style={{
            margin: "10px",
            padding: "0px"
          }} />
            <Input placeholder="Min value" value={inputValue2} onChange={e => setInputValue2(e.target.value)} style={{
            margin: "10px",
            padding: "0px"
          }} />
          </div>
          <Legends heading={heading} legendsData={legendsData} />
          <div style={{
          marginTop: "20px",
          display: "flex"
        }}>
            <Button content="Cancel" onClick={handleClose} />
            <Button content="Create" color="green" onClick={handleCreate} />
          </div>
        </div>
      </MyModal>
    </div>;
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const te=["Default"];export{n as Default,te as __namedExportsOrder,ne as default};
