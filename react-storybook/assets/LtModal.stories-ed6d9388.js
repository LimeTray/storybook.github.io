import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{M as h}from"./ltModal-d386cc90.js";import{B as d}from"./Button-e3382ee2.js";import{I as f}from"./Icon-d9fe74ba.js";import{I as u}from"./Input-90a6e334.js";import{L as y}from"./legends-339a4fdd.js";import"./_commonjsHelpers-de833af9.js";import"./Modal-dd49114f.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-11ce6580.js";import"./getElementType-09c91dec.js";import"./pick-777fb73a.js";import"./_baseSet-c9884042.js";import"./childrenUtils-9ef4481f.js";import"./includes-ad1e3bca.js";import"./index-6ba73468.js";import"./_arrayReduce-865b0d3f.js";import"./isEmpty-8aefed8a.js";import"./ModernAutoControlledComponent-c1b6fd56.js";import"./assertThisInitialized-081f9914.js";import"./Portal-1bd82a23.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-e654f292.js";import"./Label-5ae2fa2f.js";import"./htmlPropsUtils-cb2aded5.js";const ee={component:h,title:"LtModal",tags:["autodocs"]},V=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],j=({modalProps:x})=>{const[C,l]=a.useState(!1),[s,r]=a.useState(""),[p,i]=a.useState(""),v=()=>l(!0),t=()=>l(!1),I=()=>{console.log("Input 1:",s),console.log("Input 2:",p),r(""),i(""),t()},M="Legend";return e.jsxs("div",{children:[e.jsx("button",{onClick:v,children:"Open Modal"}),e.jsx(h,{...x,open:C,onClose:t,children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:s,onChange:o=>r(o.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:o=>i(o.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(y,{heading:M,legendsData:V}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(d,{content:"Cancel",onClick:t}),e.jsx(d,{content:"Create",color:"green",onClick:I})]})]})})]})},n=j.bind({});n.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,headerIcon:e.jsx(f,{name:"close"}),className:"my-custom-class"}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
