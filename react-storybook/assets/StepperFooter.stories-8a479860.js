import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{S as u}from"./stepperFooter-8344f191.js";import"./_commonjsHelpers-de833af9.js";import"./ltButton-5eb3aa77.js";import"./Button-3de4f15d.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-75e2f8cc.js";import"./getElementType-06192456.js";import"./childrenUtils-f807df98.js";import"./Icon-8c7b360e.js";import"./Label-3a60549d.js";import"./includes-b3798d5a.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-cce87410.js";import"./Portal-73562830.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-372c3dbe.js";const T={title:"StepperFooter",component:u,tags:["autodocs"]},C=e=>{const[S,o]=i.useState(1),[n,p]=i.useState(!1),d=()=>{o(r=>Math.max(0,r-1)),p(!1)},x=()=>{o(r=>{const s=Math.min(e.totalSteps,r+1);return s===e.totalSteps&&p(!0),s})};return a.jsx("div",{style:{width:"300px"},children:a.jsx(u,{...e,currentStep:S,onPrevClick:d,onNextClick:x,nextButtonLabel:n?"Done":"Next",isCompleted:n})})},t=C.bind({});t.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePrev = () => {
    setCurrentStep(prevStep => Math.max(0, prevStep - 1));
    setIsCompleted(false);
  };
  const handleNext = () => {
    setCurrentStep(prevStep => {
      const nextStep = Math.min(args.totalSteps, prevStep + 1);
      if (nextStep === args.totalSteps) {
        setIsCompleted(true);
      }
      return nextStep;
    });
  };
  return <div style={{
    width: "300px"
  }}>
      <StepperFooter {...args} currentStep={currentStep} onPrevClick={handlePrev} onNextClick={handleNext} nextButtonLabel={isCompleted ? "Done" : "Next"} isCompleted={isCompleted} />
    </div>;
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,T as default};
