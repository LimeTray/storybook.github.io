import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{S as u}from"./stepperHeader-d0cb94bd.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-3e17657a.js";import"./extends-d7eb49ad.js";import"./getElementType-68bbeded.js";const P={title:"StepperHeader",component:u,tags:["autodocs"]},h=n=>{const[s,p]=l.useState(0),[S,o]=l.useState(!1),m=()=>{p(r=>Math.max(0,r-1)),o(!1)},x=()=>{p(r=>{const a=Math.min(n.steps.length,r+1);return a===n.steps.length&&o(!0),a})};return e.jsxs("div",{style:{width:"600px"},children:[e.jsx(u,{...n,currentStep:s,isCompleted:S}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("button",{onClick:m,disabled:s===0,children:"Previous Step"}),e.jsx("button",{onClick:x,disabled:s===n.steps.length,children:"Next Step"})]})]})},t=h.bind({});t.args={steps:[{label:"Step 1"},{label:"Step 2"},{label:"Step 3"}]};var d,i,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.steps.length, prevStep + 1);
      if (nextStep === args.steps.length) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "600px"
  }}>
      <StepperHeader {...args} currentStep={currentStep} isCompleted={isCompleted} />
      <div style={{
      marginTop: "20px"
    }}>
        <button onClick={handlePrev} disabled={currentStep === 0}>
          Previous Step
        </button>
        <button onClick={handleNext} disabled={currentStep === args.steps.length}>
          Next Step
        </button>
      </div>
    </div>;
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,P as default};
