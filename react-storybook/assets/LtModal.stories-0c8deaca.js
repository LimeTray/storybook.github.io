import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{M as h}from"./ltModal-ce4d2dc0.js";import{S as d}from"./Button-3de4f15d.js";import{I as u}from"./Input-2c70c87c.js";import{L as I}from"./legends-c493e7e6.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-8c7b360e.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-75e2f8cc.js";import"./getElementType-06192456.js";import"./childrenUtils-f807df98.js";import"./Modal-e2fcb703.js";import"./pick-81fca5fd.js";import"./_baseSet-0563758b.js";import"./includes-b3798d5a.js";import"./assertThisInitialized-081f9914.js";import"./index-e7629195.js";import"./isEmpty-2791ffa2.js";import"./Portal-73562830.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-372c3dbe.js";import"./Label-3a60549d.js";import"./htmlPropsUtils-cce87410.js";const Y={component:h,title:"LtModal",tags:["autodocs"]},V=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],y=({modalProps:x})=>{const[C,l]=a.useState(!1),[s,r]=a.useState(""),[p,i]=a.useState(""),v=()=>l(!0),t=()=>l(!1),M=()=>{console.log("Input 1:",s),console.log("Input 2:",p),r(""),i(""),t()},f="Legend";return e.jsxs("div",{children:[e.jsx("button",{onClick:v,children:"Open Modal"}),e.jsx(h,{...x,open:C,onClose:t,children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:s,onChange:o=>r(o.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:o=>i(o.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(I,{heading:f,legendsData:V}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(d,{content:"Cancel",onClick:t}),e.jsx(d,{content:"Create",color:"green",onClick:M})]})]})})]})},n=y.bind({});n.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,Y as default};
