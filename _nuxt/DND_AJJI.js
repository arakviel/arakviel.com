import P from"./C5Ni2U2e.js";import k from"./C2PR_dgs.js";import b from"./sfvVauvR.js";import{d,u as L,D as g,P as R,s as x,E as S,G as B,H as r,I as m,r as C,a as N,J as T,K as j,L as p,M as H,N as O,S as A,T as D,O as E,Q as w,p as $,R as I,U as M,e as V,i as y,w as _,c as f,V as v}from"./D1TClWOB.js";import"./DTzF9RRs.js";import"./76o_WpOd.js";import"./DHRfpW3W.js";import"./MXyfB1DA.js";const F=d({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},setup(t,o){return()=>p(m[t.name],t.layoutProps,o.slots)}}),G=d({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,o){const e=L(),n=g(R),s=n===x()?S():n,u=B(()=>{let a=r(t.name)??s.meta.layout??"default";return a&&!(a in m)&&t.fallback&&(a=r(t.fallback)),a}),i=C();o.expose({layoutRef:i});const l=e.deferHydration();if(e.isHydrating){const a=e.hooks.hookOnce("app:error",l);N().beforeEach(a)}return()=>{const a=u.value&&u.value in m,c=s.meta.layoutTransition??T;return j(D,a&&c,{default:()=>p(A,{suspensible:!0,onResolve:()=>{O(l)}},{default:()=>p(J,{layoutProps:H(o.attrs,{ref:i}),key:u.value||void 0,name:u.value,shouldProvide:!t.name,hasTransition:!!c},o.slots)})}).default()}}}),J=d({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,o){const e=t.name;return t.shouldProvide&&E(w,{isCurrent:n=>e===(n.meta.layout??"default")}),()=>{var n,s;return!e||typeof e=="string"&&!(e in m)?(s=(n=o.slots).default)==null?void 0:s.call(n):p(F,{key:e,layoutProps:t.layoutProps,name:e},o.slots)}}}),K={class:"document-driven-page"},ee=d({__name:"document-driven",setup(t){const{contentHead:o}=$().public.content,{page:e,layout:n}=I();return e.value,o&&M(e),(s,u)=>{const i=P,l=k,a=b,c=G;return f(),V("div",K,[y(c,{name:r(n)||"default"},{default:_(()=>[r(e)?(f(),v(l,{key:r(e)._id,value:r(e)},{empty:_(({value:h})=>[y(i,{value:h},null,8,["value"])]),_:1},8,["value"])):(f(),v(a,{key:1}))]),_:1},8,["name"])])}}});export{ee as default};
