import{j as a}from"./jsx-runtime-8406ef1e.js";import{r as i}from"./index-ad58220e.js";import{S as u}from"./stepperFooter-92b7ac67.js";import"./_commonjsHelpers-de833af9.js";import"./ltButton-168e1acc.js";import"./Button-05fae707.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-0eb4186c.js";import"./getElementType-09c91dec.js";import"./childrenUtils-fbaf208d.js";import"./Icon-fe22c22f.js";import"./Label-c7d6d896.js";import"./ModernAutoControlledComponent-907d0808.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-dd3478e8.js";import"./includes-0befd159.js";import"./Portal-cb2f33ad.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-e91e58f3.js";const q={title:"StepperFooter",component:u,tags:["autodocs"]},C=e=>{const[S,o]=i.useState(1),[n,p]=i.useState(!1),d=()=>{o(r=>Math.max(0,r-1)),p(!1)},x=()=>{o(r=>{const s=Math.min(e.totalSteps,r+1);return s===e.totalSteps&&p(!0),s})};return a.jsx("div",{style:{width:"300px"},children:a.jsx(u,{...e,currentStep:S,onPrevClick:d,onNextClick:x,nextButtonLabel:n?"Done":"Next",isCompleted:n})})},t=C.bind({});t.args={totalSteps:3,previousButtonLabel:"Previous",nextButtonLabel:"Next",steptext:"Step"};var m,l,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,q as default};
