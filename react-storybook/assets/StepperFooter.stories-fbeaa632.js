import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as i}from"./index-76fb7be0.js";import{S as u}from"./stepperFooter-398c6064.js";import"./_commonjsHelpers-de833af9.js";import"./ltButton-79958403.js";import"./Button-4d603abf.js";import"./extends-98964cd2.js";import"./inheritsLoose-c82a83d4.js";import"./factories-34c191df.js";import"./getElementType-751ca897.js";import"./childrenUtils-5b78ad27.js";import"./Icon-c6fca73b.js";import"./Label-0be1d8a8.js";import"./includes-e85ccecd.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-26f5100b.js";import"./Portal-07b213b9.js";import"./index-d3ea75b5.js";import"./Ref-0f7da313.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./map-0d286b3c.js";const T={title:"StepperFooter",component:u,tags:["autodocs"]},C=e=>{const[S,o]=i.useState(1),[n,p]=i.useState(!1),d=()=>{o(r=>Math.max(0,r-1)),p(!1)},x=()=>{o(r=>{const s=Math.min(e.totalSteps,r+1);return s===e.totalSteps&&p(!0),s})};return a.jsx("div",{style:{width:"300px"},children:a.jsx(u,{...e,currentStep:S,onPrevClick:d,onNextClick:x,nextButtonLabel:n?"Done":"Next",isCompleted:n})})},t=C.bind({});t.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
