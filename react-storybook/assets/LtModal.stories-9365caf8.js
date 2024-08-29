import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as a}from"./index-ad58220e.js";import{M as h}from"./ltModal-5f5bec2c.js";import{B as d}from"./Button-05fae707.js";import{I as f}from"./Icon-fe22c22f.js";import{I as u}from"./Input-44c2d150.js";import{L as y}from"./legends-ae624067.js";import"./_commonjsHelpers-de833af9.js";import"./Modal-9a606026.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-0eb4186c.js";import"./getElementType-09c91dec.js";import"./pick-a194e9d0.js";import"./_baseSet-a0bc582b.js";import"./childrenUtils-fbaf208d.js";import"./includes-0befd159.js";import"./index-6d8b3050.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-2c8d1933.js";import"./ModernAutoControlledComponent-907d0808.js";import"./assertThisInitialized-081f9914.js";import"./Portal-cb2f33ad.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-e91e58f3.js";import"./Label-c7d6d896.js";import"./htmlPropsUtils-dd3478e8.js";const ee={component:h,title:"LtModal",tags:["autodocs"]},V=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],j=({modalProps:x})=>{const[C,l]=a.useState(!1),[s,r]=a.useState(""),[p,i]=a.useState(""),v=()=>l(!0),t=()=>l(!1),I=()=>{console.log("Input 1:",s),console.log("Input 2:",p),r(""),i(""),t()},M="Legend";return e.jsxs("div",{children:[e.jsx("button",{onClick:v,children:"Open Modal"}),e.jsx(h,{...x,open:C,onClose:t,children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:s,onChange:o=>r(o.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:o=>i(o.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(y,{heading:M,legendsData:V}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(d,{content:"Cancel",onClick:t}),e.jsx(d,{content:"Create",color:"green",onClick:I})]})]})})]})},n=j.bind({});n.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,headerIcon:e.jsx(f,{name:"close"}),className:"my-custom-class"}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const ne=["Default"];export{n as Default,ne as __namedExportsOrder,ee as default};
