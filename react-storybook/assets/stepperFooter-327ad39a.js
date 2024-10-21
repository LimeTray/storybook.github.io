import{j as e}from"./jsx-runtime-8406ef1e.js";import{L as n}from"./ltButton-612ce8c0.js";const a=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:10,height:16,fill:"none",...t,children:e.jsx("path",{fill:"#00CD7C",d:"M8.85.49a1.041 1.041 0 0 0-1.475 0L.45 7.415a.83.83 0 0 0 0 1.175l6.925 6.925a1.041 1.041 0 0 0 1.475 0 1.041 1.041 0 0 0 0-1.475L2.816 7.998l6.042-6.041c.4-.4.4-1.067-.008-1.467Z"})});a.__docgenInfo={description:"",methods:[],displayName:"LeftIcon"};const o=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:15,height:11,fill:"none",...t,children:e.jsx("path",{fill:"#00CD7C",d:"M4.5 8.502 1.583 5.585a.82.82 0 0 0-1.166 0 .82.82 0 0 0 0 1.167l3.491 3.491a.83.83 0 0 0 1.175 0l8.834-8.825a.82.82 0 0 0 0-1.166.82.82 0 0 0-1.167 0L4.5 8.502Z"})});o.__docgenInfo={description:"",methods:[],displayName:"DoneIcon"};const i=t=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:10,height:16,fill:"none",...t,children:e.jsx("path",{fill:"#00CD7C",d:"M1.15 15.507a1.041 1.041 0 0 0 1.475 0L9.55 8.582a.83.83 0 0 0 0-1.175L2.625.482a1.041 1.041 0 0 0-1.475 0 1.041 1.041 0 0 0 0 1.475l6.033 6.042-6.041 6.041c-.4.4-.4 1.067.008 1.467Z"})});i.__docgenInfo={description:"",methods:[],displayName:"RightIcon"};const r=({currentStep:t,totalSteps:d,onPrevClick:l,onNextClick:c,previousButtonLabel:p,nextButtonLabel:u,steptext:m,isCompleted:s,isPreviousDisabled:f=!1,isNextDisabled:g=!1,previousIcon:h=e.jsx(a,{}),nextIcon:x=e.jsx(i,{}),doneIcon:v=e.jsx(o,{})})=>e.jsxs("div",{className:"navigation-buttons",children:[e.jsx(n,{className:"previous-button",label:p,onClick:l,transparent:!0,leftElement:h,disabled:f||t===0}),e.jsx("div",{className:"step-indicator",children:!s&&`${m} ${t+1}/${d}`}),e.jsx("div",{children:e.jsx(n,{className:"previous-button next-button",label:u,onClick:c,transparent:!0,rightElement:s?v:x,disabled:g})})]}),b=r;r.__docgenInfo={description:"",methods:[],displayName:"StepperFooter",props:{currentStep:{required:!0,tsType:{name:"number"},description:""},totalSteps:{required:!0,tsType:{name:"number"},description:""},onPrevClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onNextClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},previousButtonLabel:{required:!0,tsType:{name:"string"},description:""},nextButtonLabel:{required:!0,tsType:{name:"string"},description:""},steptext:{required:!0,tsType:{name:"string"},description:""},isCompleted:{required:!1,tsType:{name:"boolean"},description:""},isPreviousDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isNextDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},previousIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<LeftIcon />",computed:!1}},nextIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<RightIcon />",computed:!1}},doneIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"<DoneIcon />",computed:!1}}}};export{b as S};