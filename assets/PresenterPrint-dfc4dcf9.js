import{d,u as _,a as u,c as m,b as p,r as h,o as a,e as n,f as t,t as s,g as l,F as f,h as g,n as v,i as b,j as x,k as y,l as k,m as N,_ as P}from"./index-407ca346.js";import{N as w}from"./NoteDisplay-d52872fb.js";const T={class:"m-4"},V={class:"mb-10"},L={class:"text-4xl font-bold mt-2"},S={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(F){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const c=p(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:v(l(b))},[t("div",T,[t("div",V,[t("h1",L,s(l(m).title),1),t("div",S,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(c.value,(e,i)=>(a(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,s(e==null?void 0:e.no)+"/"+s(l(x)),1),y(" "+s(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(a(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),A=P(C,[["__file","/Users/neirda/Projects/RocIT/talks/gotenberg-bundle/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
