import{j as e}from"./jsx-runtime-8406ef1e.js";import{r as l}from"./index-ad58220e.js";import{S as u}from"./stepperHeader-32131df1.js";import"./_commonjsHelpers-de833af9.js";import"./Icon-c71aa201.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-5eda43f6.js";import"./getElementType-605cc275.js";import"./childrenUtils-eea4be66.js";const H={title:"StepperHeader",component:u,tags:["autodocs"]},h=n=>{const[s,p]=l.useState(0),[m,o]=l.useState(!1),S=()=>{p(r=>Math.max(0,r-1)),o(!1)},x=()=>{p(r=>{const a=Math.min(n.steps.length,r+1);return a===n.steps.length&&o(!0),a})};return e.jsxs("div",{style:{width:"600px"},children:[e.jsx(u,{...n,currentStep:s,isCompleted:m}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("button",{onClick:S,disabled:s===0,children:"Previous Step"}),e.jsx("button",{onClick:x,disabled:s===n.steps.length,children:"Next Step"})]})]})},t=h.bind({});t.args={steps:[{label:"Step 1"},{label:"Step 2"},{label:"Step 3"}]};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,H as default};
