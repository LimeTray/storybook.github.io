const a=["parentId","parentName","childId","childName","childrenElement"],c=["parentId","parentName","childId","childName","childrenElement","subParentElement"],h=(t,e)=>{const i=[];return t&&e&&t.map(n=>{const r={parentId:n[e.parentId],parentName:n[e.parentName],childrens:[]};return n[e.childrenElement]&&n[e.childrenElement].map(l=>r.childrens.push({childId:l[e.childId],childName:l[e.childName]})),i.push(r),r}),i},d=(t,e)=>{const i=[];return t&&e&&t.forEach(n=>{const r={parentId:n[e.parentId],parentName:n[e.parentName],childrens:[],childIds:[],showSelected:!1,subParents:[]};n[e.childrenElement]&&n[e.childrenElement].forEach(l=>{r.childrens.push({childId:l[e.childId],childName:l[e.childName]}),r.childIds.push(l[e.childId])}),n[e.subParentElement]&&(r.subParents=d(n[e.subParentElement],e)),(r.childrens.length||r.subParents.length)&&i.push(r)}),i},s=t=>{let e=!0;return t?a.map(i=>(t[i]||(e=!1),e)):e=!1,e},p=t=>{let e=!0;return t?c.map(i=>(t[i]||(e=!1),e)):e=!1,e},o=t=>({shouldSort:!0,threshold:.25,location:0,distance:100,minMatchCharLength:1,keys:t}),m={mapDataWithSchema:h,schemaValidator:s,searchSetting:o,mapDataWithSchemaForDynamicMultiSelector:d,schemaValidatorForDynamicSelector:p};export{m as h};
