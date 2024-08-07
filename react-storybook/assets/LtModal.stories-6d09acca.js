import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{M as h}from"./ltModal-43e13bbe.js";import{B as d}from"./Button-4d603abf.js";import{I as f}from"./Icon-c6fca73b.js";import{I as u}from"./Input-44f566af.js";import{L as y}from"./legends-cdf2acc2.js";import"./_commonjsHelpers-de833af9.js";import"./Modal-867ef2dc.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-34c191df.js";import"./getElementType-751ca897.js";import"./pick-00c18628.js";import"./_baseSet-16f9c6a2.js";import"./childrenUtils-5b78ad27.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./index-2c65c7c8.js";import"./isEmpty-5e5afd8d.js";import"./Portal-07b213b9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-0d286b3c.js";import"./Label-0be1d8a8.js";import"./htmlPropsUtils-26f5100b.js";const Z={component:h,title:"LtModal",tags:["autodocs"]},V=[{text:"Superb!",description:"(<8 mins)",color:"#00FF00"},{text:"Acceptable",description:"(8 mins-11 mins)",color:"#FFFF00"},{text:"Alarming",description:"(>11 mins)",color:"#FF0000"}],j=({modalProps:x})=>{const[C,l]=a.useState(!1),[s,r]=a.useState(""),[p,i]=a.useState(""),v=()=>l(!0),t=()=>l(!1),I=()=>{console.log("Input 1:",s),console.log("Input 2:",p),r(""),i(""),t()},M="Legend";return e.jsxs("div",{children:[e.jsx("button",{onClick:v,children:"Open Modal"}),e.jsx(h,{...x,open:C,onClose:t,children:e.jsxs("div",{children:[e.jsx("h5",{children:"Enter Goal Range (in Minutes)"}),e.jsxs("div",{style:{display:"flex"},children:[e.jsx(u,{placeholder:"Min value",value:s,onChange:o=>r(o.target.value),style:{margin:"10px",padding:"0px"}}),e.jsx(u,{placeholder:"Min value",value:p,onChange:o=>i(o.target.value),style:{margin:"10px",padding:"0px"}})]}),e.jsx(y,{heading:M,legendsData:V}),e.jsxs("div",{style:{marginTop:"20px",display:"flex"},children:[e.jsx(d,{content:"Cancel",onClick:t}),e.jsx(d,{content:"Create",color:"green",onClick:I})]})]})})]})},n=j.bind({});n.args={modalProps:{header:"Goal Setup for {metric name}",showCloseIcon:!0,headerIcon:e.jsx(f,{name:"close"}),className:"my-custom-class"}};var c,m,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const $=["Default"];export{n as Default,$ as __namedExportsOrder,Z as default};
