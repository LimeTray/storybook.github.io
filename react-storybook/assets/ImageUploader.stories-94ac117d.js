import{j as a}from"./jsx-runtime-8406ef1e.js";import{r as k,R as C}from"./index-ad58220e.js";import{f as D}from"./index-d50b82e2.js";import{c as f}from"./index-cb7fca97.js";import{F as q}from"./fuse.esm-88e2763d.js";import{B as c}from"./Button-8f1e9999.js";import{I as y}from"./Icon-a36dbc07.js";import{I as U}from"./Input-8f9d0f6e.js";import{L as A}from"./Loader-897e86c6.js";import{P as B}from"./Popup-6de70d7e.js";import{h as _}from"./util-85866ba9.js";import{g as m}from"./requestIdGenerator-f6efc017.js";/* empty css              */import"./_commonjsHelpers-de833af9.js";import"./extends-4c19d496.js";import"./inheritsLoose-5494d9cc.js";import"./factories-03e2068e.js";import"./getElementType-486fb75c.js";import"./childrenUtils-8c0966fa.js";import"./Label-3b77b452.js";import"./ModernAutoControlledComponent-4ca57a24.js";import"./assertThisInitialized-081f9914.js";import"./htmlPropsUtils-cd6198e4.js";import"./includes-6af2fe54.js";import"./Portal-3e499843.js";import"./index-4fee7e45.js";import"./Ref-51c42093.js";import"./objectWithoutPropertiesLoose-f3b3ace0.js";import"./map-0dadb82a.js";import"./pick-621ad31c.js";import"./_baseSet-4bb90091.js";import"./index-aa4587fb.js";import"./_arrayReduce-865b0d3f.js";import"./toPropertyKey-4015efc6.js";const v=l=>a.jsx("svg",{...l,xmlns:"http://www.w3.org/2000/svg",width:56,height:68,viewBox:"0 0 56 68",children:a.jsxs("g",{fill:"#0054CE",fillRule:"nonzero",children:[a.jsx("path",{d:"M27.292 50.572a1 1 0 0 1-1-1l.002-22.558a1 1 0 0 1 2 0l-.002 22.558a1 1 0 0 1-1 1z"}),a.jsx("path",{d:"M35.918 36.638c-.256 0-.512-.098-.708-.292l-7.918-7.918-7.918 7.918a1 1 0 0 1-1.414-1.414l8.626-8.626a1 1 0 0 1 1.414 0l8.626 8.626a1 1 0 0 1-.708 1.706z"}),a.jsxs("g",{children:[a.jsx("path",{d:"M50.034 67.565H5.527c-2.805 0-5.09-2.275-5.09-5.073V5.074C.438 2.275 2.723 0 5.528 0h32.321c.562 0 1.018.455 1.018 1.015 0 .56-.456 1.014-1.018 1.014H5.527a3.053 3.053 0 0 0-3.054 3.045v57.418a3.053 3.053 0 0 0 3.054 3.044h44.507a3.053 3.053 0 0 0 3.053-3.044V17.664c0-.56.456-1.015 1.018-1.015s1.018.455 1.018 1.015v44.83c0 2.796-2.282 5.071-5.09 5.071z"}),a.jsx("path",{d:"M54.105 18.679H37.848a1.017 1.017 0 0 1-1.018-1.015V1.455c0-.56.456-1.015 1.018-1.015s1.018.455 1.018 1.015v15.192h15.24a1.017 1.017 0 1 1 0 2.032z"}),a.jsx("path",{d:"M54.105 18.679a1.02 1.02 0 0 1-.729-.307L37.12 1.725c-.39-.4-.383-1.045.02-1.435a1.02 1.02 0 0 1 1.44.02l16.257 16.648a1.013 1.013 0 0 1-.73 1.72z"})]})]})});v.__docgenInfo={description:"",methods:[],displayName:"FileUpload"};let I=null;const h=()=>{const l=[];return[1,2,3,4,5,6].map(()=>l.push({imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yunyxizz6ggixkbms5mr",uniqueId:m(),fileName:m(),fileSize:"126kb"},{imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lmlcsu5vpbrybvqggv30",uniqueId:m(),fileName:m(),fileSize:"126kb"})),l};class g extends k.Component{constructor(F){super(F),this.successStateFetchingImage=(e,t)=>this.setState({uploadLoadingState:!1,images:[...e,...t],initialLoading:!1,duplicateImageList:[...e,...t],moreImagesLoadingState:!1}),this.successUploadingImage=(e,t)=>this.setState({uploadLoadingState:!1,images:[...t,...e],initialLoading:!1,duplicateImageList:[...t,...e],moreImagesLoadingState:!1}),this.initialLoad=async()=>{await this.setState({uploadLoadingState:!0}),setTimeout(async()=>{const{images:e}=this.state,{initialLoad:t}=this.props;let s=[];if(t)try{const i=await t();s.push(...i)}catch(i){throw i}else s=s.concat(h());this.successStateFetchingImage(e,s)},1e3)},this.renderHeader=()=>{const{headerLabel:e}=this.props;return a.jsxs("div",{className:"u-l-header flex align-center",children:[a.jsx("div",{className:"u-l-header-label",children:e}),a.jsx("div",{className:"flex-grow-1 justify-end flex",children:a.jsx(y,{onClick:()=>{const{onCancel:t}=this.props;t&&t()},className:"pointer-cr",name:"close"})})]})},this.uploadImage=async e=>{const{duplicateImageList:t}=this.state;await this.setState({uploadLoadingState:!0,images:f(t),searchQuery:""}),setTimeout(async()=>{const{images:s}=this.state,{uploadImage:i}=this.props;let n=[];if(i)try{const o=await i(e);n.push(...o)}catch(o){throw o}else n=n.concat(h());this.successUploadingImage(s,n)},1e3)},this.lazyLoadImages=()=>{const e=document.getElementById("images-container");if(e.offsetHeight+e.scrollTop>=e.scrollHeight-100){const{moreImagesLoadingState:t}=this.state;t||this.loadMoreImages()}},this.loadMoreImages=async()=>{await this.setState({moreImagesLoadingState:!0}),setTimeout(async()=>{const{images:e,searchingRequest:t,searchQuery:s}=this.state,{loadMoreImages:i,searchFunc:n}=this.props;let o=[];if(!t){if(s.length>2&&n){const r=await n(s,e.length);this.setState({images:r,moreImagesLoadingState:!1});return}i?o=await i():o=o.concat(h()),this.successStateFetchingImage(e,o)}},1e3)},this.handleFileSelect=e=>{e.preventDefault();const{uploadLoadingState:t}=this.state;if(!t){const s=document.createElement("input");s.setAttribute("type","file"),s.setAttribute("id","file"),s.setAttribute("accept",".jpg, .jpeg, .png"),s.addEventListener("change",i=>{this.uploadImage()}),setTimeout(()=>{s.click()},100)}},this.renderLeftButtonSection=()=>{const{uploadLoadingState:e}=this.state,{uploadSectionLabel:t,uploadButtonLabel:s}=this.props;return a.jsx("div",{className:"left-button-section",children:a.jsxs("div",{className:"pdng-s",children:[a.jsx("div",{className:"u-i-button-label",children:t}),a.jsx(c,{loading:e,onClick:this.handleFileSelect,className:"blue-btn u-i-upload-button",fluid:!0,children:s})]})})},this.selectImages=(e,t)=>{const{imageSelectionType:s}=this.props,{selectedImages:i}=this.state;s==="multiple"?this.setState({selectedImages:t?[...i,e]:i.filter(n=>n!==e)}):this.setState({selectedImages:t?[e]:i.filter(n=>n!==e)})},this.mapImages=(e,t)=>{const{selectedImages:s,deletePopupIndex:i}=this.state,{imageSelectionType:n}=this.props,o=s.indexOf(e.uniqueId)!==-1;return a.jsxs("div",{className:"brand-gallery-item-container",children:[a.jsxs("div",{role:"button",className:`brand-gallery-item ${o?"active":"inactive"}`,children:[a.jsxs(B,{onClose:()=>{this.setState({deletePopupIndex:null})},open:i===t,onOpen:()=>{this.setState({deletePopupIndex:t})},on:"click",pinned:!0,trigger:a.jsx("div",{className:"gallery-close-icon-container",children:a.jsx(y,{name:"close",className:"gallery-close-icon"})}),children:[n!=="single"?a.jsxs("div",{children:["Are you sure about deleting ",s.length," ",s.length>1?"images":"image"," ?"]}):a.jsx("div",{children:"Are you sure about deleting this image?"}),a.jsxs("div",{className:"text-center margin-top-s",children:[a.jsx(c,{onClick:()=>{this.setState({deletePopupIndex:null})},children:"CANCEL"}),a.jsx(c,{onClick:async()=>{const{deleteImage:r}=this.props;if(r&&!await r(s))return;const{images:N,duplicateImageList:T}=this.state;this.setState({images:N.filter(d=>s.indexOf(d.uniqueId)===-1),duplicateImageList:T.filter(d=>s.indexOf(d.uniqueId)===-1),deletePopupIndex:null,selectedImages:[]})},color:"red",className:"margin-left-s",children:"DELETE"})]})]}),a.jsx("div",{style:{height:"100%",width:"100%"},role:"button",tabIndex:t,onKeyDown:()=>{},onClick:()=>this.selectImages(e.uniqueId,!o),children:a.jsx("img",{className:"brand-gallery-img",src:e.imageUrl,alt:"Brand Gallery"})})]}),a.jsxs("div",{className:"fnt-s margin-top-xs",children:[e.fileName,".png"]}),a.jsx("div",{className:"fnt-xs",children:e.fileSize})]},m())},this.putSearchedImageInState=e=>this.setState({images:e,searchingRequest:!1}),this.searchImage=e=>{clearTimeout(I),this.setState({searchQuery:e,searchingRequest:!0}),I=setTimeout(async()=>{if(e.length>0){const{images:t}=this.state,{searchFunc:s}=this.props;let i=[];if(s)i=await s(e,0);else{const n=_.searchSetting(["fileName"]);i=new q(t,n).search(e)}this.putSearchedImageInState(i)}else{const{duplicateImageList:t}=this.state;this.putSearchedImageInState(f(t))}},200)},this.renderRightButtonSection=()=>{const{images:e,moreImagesLoadingState:t,initialLoading:s,searchQuery:i}=this.state;return a.jsxs("div",{className:"u-i-right-container",children:[a.jsx("div",{className:"u-i-search-container",children:a.jsx(U,{icon:{name:"search",color:"blue"},iconPosition:"left",value:i,fluid:!0,onChange:n=>this.searchImage(n.target.value),placeholder:"Search Image Name"})}),a.jsx("div",{onDrop:n=>{n.preventDefault();const o=[];if(n.dataTransfer.items)for(let r=0;r<n.dataTransfer.items.length;r+=1)n.dataTransfer.items[r].kind==="file"&&o.push(n.dataTransfer.items[r].getAsFile());else for(let r=0;r<n.dataTransfer.files.length;r+=1)o.push(n.dataTransfer.files[r]);this.uploadImage(o)},onDragOver:n=>n.preventDefault(),id:"images-container",onScroll:this.lazyLoadImages,className:"right-gallery-container no-scrollbar",children:e&&e.length>0?a.jsxs(C.Fragment,{children:[a.jsx("div",{className:"brand-gallery-container",children:e.map(this.mapImages)}),a.jsx("div",{children:a.jsx(A,{className:"margin-bottom-m",inline:"centered",active:t,children:"Loading"})})]}):a.jsx("div",{className:"flex align-center u-l-processing-state justify-center fnt-m",children:s?"Loading...":a.jsx("div",{className:"u-i-no-image-container",children:a.jsxs("div",{onDrop:n=>{n.preventDefault();const o=[];if(n.dataTransfer.items)for(let r=0;r<n.dataTransfer.items.length;r+=1)n.dataTransfer.items[r].kind==="file"&&o.push(n.dataTransfer.items[r].getAsFile());else for(let r=0;r<n.dataTransfer.files.length;r+=1)o.push(n.dataTransfer.files[r]);this.uploadImage(o)},onDragOver:n=>n.preventDefault(),className:"u-i-no-image-ui",children:[a.jsx("div",{children:a.jsx(v,{})}),a.jsx("div",{className:"margin-top-m u-i-no-image-drag-label",children:"Drag & Drop images here to upload"}),a.jsx("div",{className:"margin-top-s",children:"File Supported: .png, .jpg, .jpeg"})]})})})})]})},this.renderUploadSection=()=>a.jsxs("div",{className:"bdr-top-grey flex u-i-gallery-container",children:[this.renderLeftButtonSection(),this.renderRightButtonSection()]}),this.onDone=()=>{const{onDone:e}=this.props,{images:t,selectedImages:s,uploadLoadingState:i}=this.state;if(i)alert("Images are being uploaded, Please wait for it to finish");else{const n=s.map(o=>(D(t,{uniqueId:o})||{}).imageUrl);e&&e(n)}},this.onCancel=()=>{const{uploadLoadingState:e}=this.state,{onCancel:t}=this.props;e?alert("Images are being uploaded, Please wait for it to finish"):t&&t()},this.renderActionSection=()=>{const{cancelButtonLabel:e,doneButtonLabel:t}=this.props;return a.jsxs("div",{className:"action-section bdr-top-grey flex justify-end",children:[a.jsx(c,{className:"white-btn",onClick:this.onCancel,children:e}),a.jsx(c,{onClick:this.onDone,className:"blue-btn margin-left-m",children:t})]})},this.state={images:[],uploadLoadingState:!1,selectedImages:[],moreImagesLoadingState:!1,deletePopupIndex:null,initialLoading:!1,duplicateImageList:[],searchingRequest:!1,searchQuery:""}}componentDidMount(){this.initialLoad()}render(){return a.jsxs("div",{className:"uploader-container bdr bdr-rds",children:[this.renderHeader(),this.renderUploadSection(),this.renderActionSection()]})}}g.defaultProps={};const E=g;g.defaultProps={imageSelectionType:"multiple",onCancel:()=>{},uploadImage:null,loadMoreImages:null,onDone:null,initialLoad:null,deleteImage:null,headerLabel:"Upload Image",uploadSectionLabel:"UPLOAD SOURCES",uploadButtonLabel:"Upload from PC",cancelButtonLabel:"CANCEL",doneButtonLabel:"DONE",searchFunc:null};g.__docgenInfo={description:"",methods:[{name:"successStateFetchingImage",docblock:null,modifiers:[],params:[{name:"images",optional:!1,type:{name:"any"}},{name:"dummyImages",optional:!1,type:{name:"any"}}],returns:null},{name:"successUploadingImage",docblock:null,modifiers:[],params:[{name:"images",optional:!1,type:{name:"any"}},{name:"dummyImages",optional:!1,type:{name:"any"}}],returns:null},{name:"initialLoad",docblock:"Function for fetching images when the component is loaded",modifiers:["async"],params:[],returns:null,description:"Function for fetching images when the component is loaded"},{name:"renderHeader",docblock:"Function for rendering upper label section",modifiers:[],params:[],returns:null,description:"Function for rendering upper label section"},{name:"uploadImage",docblock:`Function for uploading image to the server
@param {Object} files`,modifiers:["async"],params:[{name:"files",type:{name:"any"},optional:!0}],returns:null,description:"Function for uploading image to the server"},{name:"lazyLoadImages",docblock:"Function to track the scroll position in gallery to check if it reaches the bottom of the div",modifiers:[],params:[],returns:null,description:"Function to track the scroll position in gallery to check if it reaches the bottom of the div"},{name:"loadMoreImages",docblock:"Function to load more images when user scrolls down",modifiers:["async"],params:[],returns:null,description:"Function to load more images when user scrolls down"},{name:"handleFileSelect",docblock:"Function to open file selector modal",modifiers:[],params:[{name:"event",optional:!1,type:{name:"any"}}],returns:null,description:"Function to open file selector modal"},{name:"renderLeftButtonSection",docblock:"render left section where upload image button exist",modifiers:[],params:[],returns:null,description:"render left section where upload image button exist"},{name:"selectImages",docblock:`Function to select images, it will either select one image or multiple image.
depending on imageSelectionType, if it is multiple, user can select multiple images
otherwise only one image will be selected`,modifiers:[],params:[{name:"uniqueId",optional:!1,type:{name:"any"}},{name:"status",optional:!1,type:{name:"any"}}],returns:null,description:`Function to select images, it will either select one image or multiple image.
depending on imageSelectionType, if it is multiple, user can select multiple images
otherwise only one image will be selected`},{name:"mapImages",docblock:"Function to map images and render them",modifiers:[],params:[{name:"value",optional:!1,type:{name:"any"}},{name:"index",optional:!1,type:{name:"any"}}],returns:null,description:"Function to map images and render them"},{name:"putSearchedImageInState",docblock:null,modifiers:[],params:[{name:"images",optional:!1,type:{name:"any"}}],returns:null},{name:"searchImage",docblock:`Function to search elements inside parents listing. uses fuse.js for accurate searching.
@param {String} text`,modifiers:[],params:[{name:"text",type:{name:"any"},optional:!1}],returns:null,description:"Function to search elements inside parents listing. uses fuse.js for accurate searching."},{name:"renderRightButtonSection",docblock:"render right section where image gallery exist",modifiers:[],params:[],returns:null,description:"render right section where image gallery exist"},{name:"renderUploadSection",docblock:"Function to render Image section",modifiers:[],params:[],returns:null,description:"Function to render Image section"},{name:"onDone",docblock:"Function which gets called when done button is clicked nd returns selectedImages",modifiers:[],params:[],returns:null,description:"Function which gets called when done button is clicked nd returns selectedImages"},{name:"onCancel",docblock:"Function to close image modal by calling onCancel function passed by parent component",modifiers:[],params:[],returns:null,description:"Function to close image modal by calling onCancel function passed by parent component"},{name:"renderActionSection",docblock:"Function to render action section which contains Cancel and done.",modifiers:[],params:[],returns:null,description:"Function to render action section which contains Cancel and done."}],displayName:"ImageUploader",props:{uploadImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},initialLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},imageSelectionType:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'multiple'",computed:!1}},loadMoreImages:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},onDone:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"() => {}",computed:!1}},deleteImage:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}},headerLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Upload Image'",computed:!1}},uploadSectionLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'UPLOAD SOURCES'",computed:!1}},uploadButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Upload from PC'",computed:!1}},cancelButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'CANCEL'",computed:!1}},doneButtonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'DONE'",computed:!1}},searchFunc:{required:!1,tsType:{name:"signature",type:"function",raw:"(...args: any[]) => any",signature:{arguments:[{type:{name:"Array",elements:[{name:"any"}],raw:"any[]"},name:"args",rest:!0}],return:{name:"any"}}},description:"",defaultValue:{value:"null",computed:!1}}}};const Ie={component:E,title:"ImageUploader",tags:["autodocs"]},u={args:{}},p={args:{imageSelectionType:"multiple"}};var S,b,x;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {}
}`,...(x=(b=u.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var L,w,j;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    imageSelectionType: "multiple"
  }
}`,...(j=(w=p.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const Se=["Default","MultipleSelection"];export{u as Default,p as MultipleSelection,Se as __namedExportsOrder,Ie as default};