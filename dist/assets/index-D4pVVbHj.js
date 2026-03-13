import{r as we,g as ke,a as x,H as Se,R as ze,b as Ae}from"./helmet-CgBnGRdU.js";import{r as Ie,u as W,L as h,a as Q,N as J,b as Pe,B as Re,R as Ce,c as y}from"./vendor-WkbbhL0n.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();var O={exports:{}},P={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K;function Me(){if(K)return P;K=1;var a=we(),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(o,r,m){var d,u={},j=null,N=null;m!==void 0&&(j=""+m),r.key!==void 0&&(j=""+r.key),r.ref!==void 0&&(N=r.ref);for(d in r)l.call(r,d)&&!i.hasOwnProperty(d)&&(u[d]=r[d]);if(o&&o.defaultProps)for(d in r=o.defaultProps,r)u[d]===void 0&&(u[d]=r[d]);return{$$typeof:t,type:o,key:j,ref:N,props:u,_owner:n.current}}return P.Fragment=s,P.jsx=c,P.jsxs=c,P}var Y;function Ee(){return Y||(Y=1,O.exports=Me()),O.exports}var e=Ee(),L={},X;function Te(){if(X)return L;X=1;var a=Ie();return L.createRoot=a.createRoot,L.hydrateRoot=a.hydrateRoot,L}var _e=Te();const Le=ke(_e);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ie=(...a)=>a.filter((t,s,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=x.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:n="",children:i,iconNode:c,...o},r)=>x.createElement("svg",{ref:r,...$e,width:t,height:t,stroke:a,strokeWidth:l?Number(s)*24/Number(t):s,className:ie("lucide",n),...o},[...c.map(([m,d])=>x.createElement(m,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(a,t)=>{const s=x.forwardRef(({className:l,...n},i)=>x.createElement(Fe,{ref:i,iconNode:t,className:ie(`lucide-${De(a)}`,l),...n}));return s.displayName=`${a}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=p("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=p("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=p("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=p("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=p("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=p("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=p("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=p("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=p("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=p("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=p("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=p("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=p("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=p("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=p("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=p("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=p("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=p("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=p("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=p("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=p("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=p("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=p("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=p("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=p("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=p("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=p("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=p("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=p("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=p("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=p("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=p("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=p("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=p("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=p("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=p("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=p("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function lt(){const[a,t]=x.useState(!1),[s,l]=x.useState(!1),n=W();x.useEffect(()=>{t(!1)},[n]),x.useEffect(()=>{const r=()=>{l(window.scrollY>50)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const i=[{href:"/#about",label:"Метод"},{href:"/cases",label:"Кейсы"},{href:"/blog",label:"Блог"},{href:"/#program",label:"Обучение"}],c=n.pathname==="/",o=(r,m)=>{if(m.startsWith("/#")&&c){r.preventDefault();const d=document.querySelector(m.substring(1));d&&d.scrollIntoView({behavior:"smooth"})}t(!1)};return e.jsxs("nav",{className:`fixed w-full z-50 transition-all duration-300 ${s?"bg-[#0a0a0a]/95 shadow-lg":"bg-[#0a0a0a]/90"} backdrop-blur-md border-b border-zinc-800`,children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-6 h-20 flex justify-between items-center",children:[e.jsxs(h,{to:"/",className:"flex items-center gap-3",children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"2",y:"2",width:"12",height:"12",className:"fill-emerald-500"}),e.jsx("rect",{x:"18",y:"2",width:"12",height:"12",className:"fill-white"}),e.jsx("rect",{x:"18",y:"18",width:"12",height:"12",className:"fill-emerald-500"}),e.jsx("path",{d:"M2 30V18H14L2 30Z",className:"fill-white"})]}),e.jsxs("span",{className:"font-black text-xl text-white tracking-widest uppercase",children:["SAAS",e.jsx("span",{className:"text-emerald-500",children:"ПРЕНЕР"})]})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-8",children:[i.map(r=>r.href.startsWith("/#")?e.jsx("a",{href:r.href,onClick:m=>o(m,r.href),className:"text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors",children:r.label},r.href):e.jsx(h,{to:r.href,className:`text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors ${n.pathname.startsWith(r.href)?"text-emerald-400":""}`,children:r.label},r.href)),e.jsx("a",{href:"https://t.me/saasprener",target:"_blank",rel:"noopener noreferrer",className:"text-zinc-400 hover:text-emerald-400 transition-colors",title:"Telegram-канал",children:e.jsx($,{className:"w-5 h-5"})}),e.jsx(h,{to:"/#price",onClick:r=>o(r,"/#price"),className:"bg-white text-zinc-950 hover:bg-emerald-400 px-6 py-2 rounded-none text-sm font-black uppercase tracking-widest transition-all",children:"Старт"})]}),e.jsx("button",{className:"md:hidden p-2",onClick:()=>t(!a),"aria-label":a?"Закрыть меню":"Открыть меню",children:a?e.jsx(me,{className:"w-6 h-6 text-white"}):e.jsx(Ge,{className:"w-6 h-6 text-white"})})]}),e.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-300 ${a?"max-h-96":"max-h-0"}`,children:e.jsxs("div",{className:"px-6 py-4 bg-[#0a0a0a] border-t border-zinc-800",children:[i.map(r=>r.href.startsWith("/#")?e.jsx("a",{href:r.href,onClick:m=>o(m,r.href),className:"block py-3 text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors",children:r.label},r.href):e.jsx(h,{to:r.href,className:`block py-3 text-sm font-bold tracking-widest uppercase hover:text-emerald-400 transition-colors ${n.pathname.startsWith(r.href)?"text-emerald-400":""}`,children:r.label},r.href)),e.jsxs("a",{href:"https://t.me/saasprener",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 py-3 text-sm font-bold tracking-widest uppercase text-emerald-400 hover:text-emerald-300 transition-colors",children:[e.jsx($,{className:"w-4 h-4"}),"Telegram-канал"]}),e.jsx(h,{to:"/#price",onClick:r=>o(r,"/#price"),className:"block mt-4 bg-emerald-500 text-zinc-950 px-6 py-3 text-center text-sm font-black uppercase tracking-widest",children:"Записаться"})]})})]})}function ct(){const a=new Date().getFullYear(),t={platform:[{href:"/#about",label:"О методе"},{href:"/cases",label:"Кейсы"},{href:"/blog",label:"Блог"},{href:"/#program",label:"Обучение"},{href:"/#price",label:"Цены"}],topics:[{href:"/hub/saas-razrabotka",label:"SaaS-разработка"},{href:"/hub/zapusk-it-proekta",label:"Запуск IT-проекта"},{href:"/hub/zarabotok-na-saas",label:"Заработок на SaaS"},{href:"/hub/ai-v-razrabotke",label:"AI в разработке"},{href:"/hub/arhitektura-servisov",label:"Архитектура сервисов"}],resources:[{href:"/blog/sozdavay-saas-biznes-v-odinochku",label:"Как создать SaaS"},{href:"/blog/kak-odnomu-cheloveku-zapustit-it-proekt",label:"Запуск без команды"},{href:"/blog/kak-ai-pomogaet-zapuskat-servisy-bystree",label:"AI для разработки"}]};return e.jsxs("footer",{className:"bg-[#050505] border-t border-zinc-900",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-6 py-16",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12",children:[e.jsxs("div",{className:"lg:col-span-1",children:[e.jsxs(h,{to:"/",className:"flex items-center gap-3 mb-6",children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{x:"2",y:"2",width:"12",height:"12",className:"fill-emerald-500"}),e.jsx("rect",{x:"18",y:"2",width:"12",height:"12",className:"fill-white opacity-30"}),e.jsx("rect",{x:"18",y:"18",width:"12",height:"12",className:"fill-emerald-500"}),e.jsx("path",{d:"M2 30V18H14L2 30Z",className:"fill-white opacity-30"})]}),e.jsxs("span",{className:"font-black text-xl text-white tracking-widest uppercase",children:["SAAS",e.jsx("span",{className:"text-emerald-500",children:"ПРЕНЕР"})]})]}),e.jsx("p",{className:"text-zinc-500 text-sm leading-relaxed mb-6",children:"Веб-кодинг для предпринимателей. Учу создавать SaaS-сервисы и онлайн-продукты без команды."}),e.jsxs("a",{href:"https://t.me/saasprener",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors text-sm font-bold uppercase tracking-wider",children:[e.jsx($,{className:"w-4 h-4"}),"Telegram-канал"]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-black text-white uppercase tracking-widest text-sm mb-6",children:"Платформа"}),e.jsx("ul",{className:"space-y-3",children:t.platform.map(s=>e.jsx("li",{children:e.jsx(h,{to:s.href,className:"text-zinc-500 hover:text-emerald-400 transition-colors text-sm",children:s.label})},s.href))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-black text-white uppercase tracking-widest text-sm mb-6",children:"Темы"}),e.jsx("ul",{className:"space-y-3",children:t.topics.map(s=>e.jsx("li",{children:e.jsx(h,{to:s.href,className:"text-zinc-500 hover:text-emerald-400 transition-colors text-sm",children:s.label})},s.href))})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-black text-white uppercase tracking-widest text-sm mb-6",children:"Полезное"}),e.jsx("ul",{className:"space-y-3",children:t.resources.map(s=>e.jsx("li",{children:e.jsx(h,{to:s.href,className:"text-zinc-500 hover:text-emerald-400 transition-colors text-sm",children:s.label})},s.href))})]})]})}),e.jsx("div",{className:"border-t border-zinc-900",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4",children:[e.jsxs("p",{className:"text-zinc-600 text-xs font-bold uppercase tracking-widest",children:["© ",a," SAASPRENER. Все права защищены."]}),e.jsx("p",{className:"text-zinc-700 text-xs",children:"Обучение веб-кодингу для предпринимателей"})]})})]})}function ot({children:a}){return e.jsxs("div",{className:"min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-emerald-500 selection:text-white",children:[e.jsx(lt,{}),e.jsx("main",{children:a}),e.jsx(ct,{})]})}function A({title:a,description:t,canonical:s,type:l="website",image:n="/banner-social.jpg",article:i=null,noindex:c=!1}){var d;const o="https://saasprener.online",r=s?`${o}${s}`:o,m=n.startsWith("http")?n:`${o}${n}`;return e.jsxs(Se,{children:[e.jsx("title",{children:a}),e.jsx("meta",{name:"description",content:t}),e.jsx("link",{rel:"canonical",href:r}),c&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),e.jsx("meta",{property:"og:type",content:l}),e.jsx("meta",{property:"og:url",content:r}),e.jsx("meta",{property:"og:title",content:a}),e.jsx("meta",{property:"og:description",content:t}),e.jsx("meta",{property:"og:image",content:m}),e.jsx("meta",{property:"og:image:width",content:"1200"}),e.jsx("meta",{property:"og:image:height",content:"630"}),e.jsx("meta",{property:"og:site_name",content:"SAASPRENER"}),e.jsx("meta",{property:"og:locale",content:"ru_RU"}),e.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),e.jsx("meta",{name:"twitter:title",content:a}),e.jsx("meta",{name:"twitter:description",content:t}),e.jsx("meta",{name:"twitter:image",content:m}),i&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{property:"article:published_time",content:i.date}),e.jsx("meta",{property:"article:author",content:"SAASPRENER"}),(d=i.tags)==null?void 0:d.map(u=>e.jsx("meta",{property:"article:tag",content:u},u))]})]})}function z({type:a,data:t}){var i,c;const s="https://saasprener.online",n={organization:{"@context":"https://schema.org","@type":"Organization",name:"SAASPRENER",url:s,logo:`${s}/logo.png`,description:"Веб-кодинг для предпринимателей. Обучение созданию SaaS-сервисов без команды.",sameAs:["https://t.me/saasprener"]},website:{"@context":"https://schema.org","@type":"WebSite",name:"SAASPRENER",url:s,description:"Платформа для обучения созданию SaaS-сервисов и онлайн-продуктов",potentialAction:{"@type":"SearchAction",target:`${s}/blog?search={search_term_string}`,"query-input":"required name=search_term_string"}},person:{"@context":"https://schema.org","@type":"Person",name:"SAASPRENER",url:s,jobTitle:"SaaS Developer & Entrepreneur",description:"Практик создания SaaS-сервисов. Обучаю предпринимателей веб-кодингу.",knowsAbout:["SaaS","Web Development","AI","Startups","JavaScript","React"]},article:{"@context":"https://schema.org","@type":"Article",headline:t==null?void 0:t.title,description:t==null?void 0:t.description,image:t!=null&&t.image?`${s}${t.image}`:`${s}/banner-social.jpg`,datePublished:t==null?void 0:t.date,dateModified:t==null?void 0:t.date,author:{"@type":"Person",name:"SAASPRENER",url:s},publisher:{"@type":"Organization",name:"SAASPRENER",logo:{"@type":"ImageObject",url:`${s}/logo.png`}},mainEntityOfPage:{"@type":"WebPage","@id":(t==null?void 0:t.url)||s}},faq:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:((i=t==null?void 0:t.questions)==null?void 0:i.map(o=>({"@type":"Question",name:o.question,acceptedAnswer:{"@type":"Answer",text:o.answer}})))||[]},breadcrumbs:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:((c=t==null?void 0:t.items)==null?void 0:c.map((o,r)=>({"@type":"ListItem",position:r+1,name:o.name,item:o.url?`${s}${o.url}`:void 0})))||[]},course:{"@context":"https://schema.org","@type":"Course",name:"Веб-кодинг для предпринимателей",description:"Обучение созданию SaaS-сервисов с нуля до запуска",provider:{"@type":"Organization",name:"SAASPRENER",url:s},offers:{"@type":"Offer",price:"50000",priceCurrency:"RUB",availability:"https://schema.org/InStock"}}}[a];return n?e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n)}}):null}function dt({question:a,answer:t,isOpen:s,onToggle:l}){return e.jsxs("div",{className:"border-b border-zinc-800 last:border-b-0",children:[e.jsxs("button",{onClick:l,className:"w-full py-6 flex items-center justify-between text-left hover:text-emerald-400 transition-colors group","aria-expanded":s,children:[e.jsx("span",{className:"text-lg font-bold text-white group-hover:text-emerald-400 transition-colors pr-4",children:a}),e.jsx(ce,{className:`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform duration-300 ${s?"rotate-180":""}`})]}),e.jsx("div",{className:`overflow-hidden transition-all duration-300 ${s?"max-h-96 pb-6":"max-h-0"}`,children:e.jsx("p",{className:"text-zinc-400 leading-relaxed",children:t})})]})}function xe({questions:a,title:t="Частые вопросы",showSchema:s=!0,className:l=""}){const[n,i]=x.useState(0),c=o=>{i(n===o?-1:o)};return e.jsxs("section",{className:`py-16 md:py-24 ${l}`,children:[s&&e.jsx(z,{type:"faq",data:{questions:a}}),e.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-black text-white mb-12 tracking-tighter uppercase",children:t}),e.jsx("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6 md:p-10",children:a.map((o,r)=>e.jsx(dt,{question:o.question,answer:o.answer,isOpen:n===r,onToggle:()=>c(r)},o.id||r))})]})]})}function q({article:a,variant:t="default"}){const{slug:s,title:l,description:n,category:i,date:c,readTime:o,image:r}=a,m=d=>{const u={day:"numeric",month:"long",year:"numeric"};return new Date(d).toLocaleDateString("ru-RU",u)};return t==="compact"?e.jsxs(h,{to:`/blog/${s}`,className:"group bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300 flex flex-col",children:[e.jsxs("div",{className:"relative h-48 overflow-hidden border-b border-zinc-800",children:[e.jsx("div",{className:"absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("img",{src:r||"/articles/default.jpg",alt:l,loading:"lazy",className:"w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"})]}),e.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[e.jsx("span",{className:"text-emerald-500 text-xs font-black uppercase tracking-widest mb-3",children:i}),e.jsx("h3",{className:"text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2",children:l}),e.jsx("p",{className:"text-zinc-500 text-sm line-clamp-2 flex-grow",children:n}),e.jsxs("div",{className:"flex items-center gap-2 mt-4 text-zinc-600 text-xs",children:[e.jsx(I,{className:"w-3 h-3"}),e.jsx("span",{children:o})]})]})]}):e.jsxs(h,{to:`/blog/${s}`,className:"group bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300 flex flex-col md:flex-row",children:[e.jsxs("div",{className:"relative w-full md:w-72 h-48 md:h-auto flex-shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800",children:[e.jsx("div",{className:"absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("img",{src:r||"/articles/default.jpg",alt:l,loading:"lazy",className:"w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"})]}),e.jsxs("div",{className:"p-6 md:p-8 flex flex-col flex-grow",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest",children:i}),e.jsx("span",{className:"text-zinc-600 text-sm",children:m(c)})]}),e.jsx("h3",{className:"text-xl md:text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors uppercase tracking-tight",children:l}),e.jsx("p",{className:"text-zinc-400 mb-6 flex-grow line-clamp-2 md:line-clamp-3",children:n}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2 text-zinc-500 text-sm",children:[e.jsx(I,{className:"w-4 h-4"}),e.jsx("span",{children:o})]}),e.jsxs("span",{className:"flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all",children:["Читать ",e.jsx(w,{className:"w-4 h-4"})]})]})]})]})}function mt({targetDate:a,label:t}){const[s,l]=x.useState(i()),n=x.useRef(s);function i(){const o=a-new Date;return o<=0?{days:0,hours:0,minutes:0,seconds:0,expired:!0}:{days:Math.floor(o/(1e3*60*60*24)),hours:Math.floor(o/(1e3*60*60)%24),minutes:Math.floor(o/1e3/60%60),seconds:Math.floor(o/1e3%60),expired:!1}}if(x.useEffect(()=>{const o=setInterval(()=>{n.current=s,l(i())},1e3);return()=>clearInterval(o)},[a,s]),s.expired)return e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4",children:t||"Время вышло"})});const c=[{value:s.days,label:"дней",prev:n.current.days},{value:s.hours,label:"часов",prev:n.current.hours},{value:s.minutes,label:"минут",prev:n.current.minutes},{value:s.seconds,label:"секунд",prev:n.current.seconds}];return e.jsxs("div",{className:"countdown-wrapper",children:[t&&e.jsx("p",{className:"text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4 text-center",children:t}),e.jsx("div",{className:"flex justify-center items-center gap-2 md:gap-4",children:c.map((o,r)=>e.jsxs("div",{className:"flex items-center",children:[e.jsx(xt,{value:o.value,label:o.label,isChanging:o.value!==o.prev}),r<c.length-1&&e.jsx("span",{className:"text-zinc-600 text-3xl md:text-4xl font-bold mx-1 md:mx-2",children:":"})]},o.label))}),e.jsx("style",{children:`
        .time-unit {
          position: relative;
          perspective: 300px;
        }
        
        .time-digit {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
          border: 1px solid #262626;
          min-width: 60px;
          height: 72px;
          position: relative;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .time-digit {
            min-width: 80px;
            height: 96px;
          }
        }
        
        .time-digit::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #1f1f1f;
          z-index: 2;
        }
        
        .time-digit::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
          pointer-events: none;
        }
        
        .digit-value {
          font-size: 2rem;
          font-weight: 900;
          color: #fafafa;
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.02em;
          transition: transform 0.15s ease-out, opacity 0.15s ease-out;
        }
        
        @media (min-width: 768px) {
          .digit-value {
            font-size: 2.5rem;
          }
        }
        
        .digit-changing .digit-value {
          animation: digitFlip 0.3s ease-out;
        }
        
        @keyframes digitFlip {
          0% {
            transform: translateY(-20%);
            opacity: 0;
          }
          50% {
            transform: translateY(5%);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .time-label {
          font-size: 0.625rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          margin-top: 8px;
          text-align: center;
        }
        
        @media (min-width: 768px) {
          .time-label {
            font-size: 0.7rem;
          }
        }
      `})]})}function xt({value:a,label:t,isChanging:s}){const l=String(a).padStart(2,"0");return e.jsxs("div",{className:"time-unit flex flex-col items-center",children:[e.jsx("div",{className:`time-digit ${s?"digit-changing":""}`,children:e.jsx("span",{className:"digit-value",children:l})}),e.jsx("span",{className:"time-label",children:t})]})}const g={streamName:"Март 2026",courseStartDate:new Date(2026,2,25,10,0,0),firstPriceRiseDate:new Date(2026,2,18,0,0,0),secondPriceRiseDate:new Date(2026,2,25,0,0,0),priceStage1:5e4,priceStage2:7e4,priceStage3:1e5,enrollmentClosed:!1,prepaymentAmount:1e4,prepaymentRefundable:!1,telegramBot:"@saasprener_bot",totalSpots:10,spotsLeft:7};function B(){const a=new Date,{firstPriceRiseDate:t,secondPriceRiseDate:s}=g;return a<t?1:a<s?2:3}function pe(){const a=B(),{priceStage1:t,priceStage2:s,priceStage3:l}=g;switch(a){case 1:return t;case 2:return s;case 3:return l;default:return l}}function pt(){const a=new Date,{firstPriceRiseDate:t,secondPriceRiseDate:s,courseStartDate:l}=g;return a<t?t:a<s?s:l}function ht(){const a=B(),{priceStage2:t,priceStage3:s}=g;switch(a){case 1:return`До повышения цены до ${k(t)}`;case 2:return`До повышения цены до ${k(s)}`;case 3:return"Курс стартовал";case"closed":return"Набор закрыт";default:return""}}function k(a){return new Intl.NumberFormat("ru-RU").format(a)+" ₽"}function C(a){return a.toLocaleDateString("ru-RU",{day:"numeric",month:"long"})}function ut(){const a=B(),{priceStage1:t,priceStage2:s,priceStage3:l,firstPriceRiseDate:n,secondPriceRiseDate:i}=g;return[{id:1,label:"Сейчас",date:"До 18 числа",price:t,status:a===1?"active":a>1?"passed":"upcoming"},{id:2,label:"С 18 числа",date:C(n),price:s,status:a===2?"active":a>2?"passed":"upcoming"},{id:3,label:"С 25 числа",date:C(i),price:l,status:a===3?"active":"upcoming"}]}function gt(){const a=ut();return e.jsxs("div",{className:"price-timeline",children:[e.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6",children:"Рост цены по этапам"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-zinc-800"}),e.jsx("div",{className:"space-y-4",children:a.map((t,s)=>e.jsx(bt,{stage:t,isLast:s===a.length-1},t.id))})]}),e.jsx("style",{children:`
        .price-stage {
          transition: all 0.3s ease;
        }
        
        .price-stage:hover {
          transform: translateX(4px);
        }
        
        .stage-icon {
          transition: all 0.3s ease;
        }
        
        .price-stage:hover .stage-icon {
          transform: scale(1.1);
        }
        
        .stage-active {
          background: linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, transparent 100%);
        }
        
        .stage-passed {
          opacity: 0.5;
        }
        
        .price-glow {
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
        }
      `})]})}function bt({stage:a,isLast:t}){const s=a.status==="active",l=a.status==="passed";return e.jsxs("div",{className:`price-stage relative flex items-start gap-4 py-3 px-4 -ml-4 rounded-r-lg
        ${s?"stage-active":""}
        ${l?"stage-passed":""}
      `,children:[e.jsx("div",{className:"stage-icon relative z-10 flex-shrink-0",children:l?e.jsx(E,{className:"w-6 h-6 text-zinc-600"}):s?e.jsxs("div",{className:"relative",children:[e.jsx(V,{className:"w-6 h-6 text-emerald-500 fill-emerald-500"}),e.jsx("div",{className:"absolute inset-0 animate-ping",children:e.jsx(V,{className:"w-6 h-6 text-emerald-500 opacity-50"})})]}):e.jsx(V,{className:"w-6 h-6 text-zinc-700"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[e.jsx("span",{className:`text-sm font-bold uppercase tracking-wide
            ${s?"text-emerald-400":l?"text-zinc-600":"text-zinc-500"}
          `,children:a.label}),e.jsx("span",{className:`text-lg font-black tabular-nums
            ${s?"text-white price-glow":l?"text-zinc-600 line-through":"text-zinc-400"}
          `,children:k(a.price)})]}),s&&e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(I,{className:"w-3 h-3 text-emerald-500"}),e.jsx("span",{className:"text-xs text-emerald-400/80",children:"Действует сейчас"})]})]})]})}const ft=[{id:1,question:"Что входит в обучение?",answer:`В обучение входит:
• Полный доступ к программе курса
• Практика кода с первого дня
• Разбор архитектуры именно твоей идеи
• Ревью ключевых решений
• Помощь в доведении до боевого запуска
• Формат групповой работы: чат + созвоны по необходимости
• Доступ к материалам без ограничения по времени`},{id:2,question:"Когда старт курса?",answer:`Старт потока — ${C(g.courseStartDate)}. До этого момента идет набор участников. После старта мы сразу переходим к практике.`},{id:3,question:"Почему цена растет?",answer:"Потому что ближе к старту меньше мест, а группа ограничена 20 участниками. Чем раньше ты заходишь — тем выгоднее условия."},{id:4,question:"Можно ли забронировать место?",answer:`Да, можно внести предоплату ${k(g.prepaymentAmount)} и зафиксировать участие по текущей цене. Предоплата гарантирует место на потоке и защищает от повышения цены.`},{id:5,question:"Возвращается ли предоплата?",answer:"Нет, предоплата невозвратная. Это не штраф, а фильтр: я работаю только с теми, кто принял решение и готов идти до конца. Если сомневаешься — лучше сначала разобраться с сомнениями."},{id:6,question:"Для кого подходит курс?",answer:`Курс подходит для:
• Предпринимателей, которые хотят собирать свои сервисы сами
• Тех, кто хочет запускать MVP без зависимости от команды
• Тех, кто хочет понять архитектуру продукта, а не просто "пописать код"
• Тех, кто хочет выйти на запуск и монетизацию`},{id:7,question:"Нужен ли опыт в программировании?",answer:'Базовое понимание логики и готовность разбираться — обязательны. Это не пассивное обучение, где можно "посмотреть видосики". Здесь ты будешь писать код, получать обратную связь и переделывать. Если готов работать — справишься.'},{id:8,question:"Какой формат обучения?",answer:"Обучение проходит в группах до 20 человек. Ты работаешь над своим проектом, я помогаю с архитектурой, кодом и запуском. Общение в чате + созвоны по необходимости."}];function jt(){const[a,t]=x.useState(null),s=l=>{t(a===l?null:l)};return e.jsxs("div",{className:"course-accordion",children:[e.jsx("h3",{className:"text-xl md:text-2xl font-black text-white mb-8 uppercase tracking-tight",children:"Частые вопросы по обучению"}),e.jsx("div",{className:"space-y-2",children:ft.map(l=>e.jsx(Nt,{item:l,isOpen:a===l.id,onToggle:()=>s(l.id)},l.id))}),e.jsx("style",{children:`
        .accordion-item {
          border: 1px solid #262626;
          transition: all 0.3s ease;
        }
        
        .accordion-item:hover {
          border-color: #3f3f46;
        }
        
        .accordion-item.is-open {
          border-color: #10b981;
          background: linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, transparent 100%);
        }
        
        .accordion-header {
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .accordion-header:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        
        .accordion-icon {
          transition: transform 0.3s ease;
        }
        
        .accordion-item.is-open .accordion-icon {
          transform: rotate(180deg);
        }
        
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        
        .accordion-item.is-open .accordion-content {
          max-height: 500px;
          opacity: 1;
        }
        
        .accordion-answer {
          white-space: pre-line;
        }
      `})]})}function Nt({item:a,isOpen:t,onToggle:s}){return e.jsxs("div",{className:`accordion-item bg-[#0d0d0d] ${t?"is-open":""}`,children:[e.jsxs("button",{onClick:s,className:"accordion-header w-full flex items-center justify-between gap-4 p-5 text-left",children:[e.jsx("span",{className:"font-bold text-white text-sm md:text-base uppercase tracking-wide",children:a.question}),e.jsx(ce,{className:"accordion-icon w-5 h-5 text-emerald-500 flex-shrink-0"})]}),e.jsx("div",{className:"accordion-content",children:e.jsx("div",{className:"px-5 pb-5",children:e.jsx("p",{className:"accordion-answer text-zinc-400 text-sm leading-relaxed",children:a.answer})})})]})}const U="https://saasprener.online/api";function he(a="v"){return a+"_"+Date.now().toString(36)+Math.random().toString(36).substr(2,9)}function ue(){let a=localStorage.getItem("sp_visitor_id");return a||(a=he("v"),localStorage.setItem("sp_visitor_id",a)),a}function ge(){let a=sessionStorage.getItem("sp_session_id");return a||(a=he("s"),sessionStorage.setItem("sp_session_id",a)),a}function vt(){const a=new URLSearchParams(window.location.search);return{utm_source:a.get("utm_source"),utm_medium:a.get("utm_medium"),utm_campaign:a.get("utm_campaign"),utm_content:a.get("utm_content"),utm_term:a.get("utm_term")}}function yt(){const a=vt();a.utm_source&&sessionStorage.setItem("sp_utm",JSON.stringify(a))}function be(){try{return JSON.parse(sessionStorage.getItem("sp_utm"))||{}}catch{return{}}}async function T(a,t={}){try{const s=ue(),l=ge(),n=be(),i={event_name:a,visitor_id:s,session_id:l,page_url:window.location.href,page_path:window.location.pathname,page_title:document.title,referrer:document.referrer,user_agent:navigator.userAgent,...n,...t};if(navigator.sendBeacon){const c=new Blob([JSON.stringify(i)],{type:"application/json"});navigator.sendBeacon(`${U}/tracking/event`,c)}else fetch(`${U}/tracking/event`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),keepalive:!0});console.log(`📊 Track: ${a}`,t)}catch(s){console.error("Analytics error:",s)}}function D(){yt(),T("page_view")}function wt(a="channel"){T("telegram_click",{target_type:"telegram",target_value:a})}function fe(a="application"){T("form_opened",{target_type:"form",target_value:a})}function je(a="application"){T("form_submitted",{target_type:"form",target_value:a})}async function kt(a){try{const t=ue(),s=ge(),l=be(),n={...a,visitor_id:t,session_id:s,source_page:window.location.pathname,source_type:"form",...l},c=await(await fetch(`${U}/leads/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json();return c.success&&(console.log("✅ Lead submitted:",c.lead_id),T("lead_created",{lead_id:c.lead_id,duplicate:c.duplicate||!1})),c}catch(t){throw console.error("Lead submission error:",t),t}}function re(){document.querySelectorAll('a[href*="t.me"]').forEach(a=>{a.dataset.tracked||(a.dataset.tracked="true",a.addEventListener("click",()=>{const t=a.getAttribute("href"),s=t.includes("?start")||t.includes("saasprener_bot");wt(s?"bot":"channel")}))})}function St(){document.readyState==="complete"?(D(),re()):window.addEventListener("load",()=>{D(),re()}),window.addEventListener("popstate",D)}St();function zt({isOpen:a,onClose:t}){const[s,l]=x.useState({name:"",contact:"",idea:"",level:""}),[n,i]=x.useState(!1),[c,o]=x.useState(!1),[r,m]=x.useState(null);if(x.useEffect(()=>{a&&fe("application")},[a]),!a)return null;const d=async j=>{j.preventDefault(),i(!0),m(null);try{const N=s.contact.trim(),S=/^[\d\+\-\(\)\s]+$/.test(N);await kt({name:s.name,phone:S?N:null,telegram:S?null:N.replace("@",""),idea:s.idea||null,level:s.level||null}),je("application"),o(!0),setTimeout(()=>{t(),o(!1),l({name:"",contact:"",idea:"",level:""})},2e3)}catch(N){console.error("Submit error:",N),m("Ошибка отправки. Попробуй ещё раз или напиши в Telegram @saasprener")}finally{i(!1)}},u=j=>{l({...s,[j.target.name]:j.target.value})};return e.jsx(Ne,{onClose:t,children:c?e.jsx(It,{title:"Заявка отправлена!",message:"Я свяжусь с тобой в ближайшее время"}):e.jsxs(e.Fragment,{children:[e.jsx(ve,{title:"Оставить заявку",subtitle:`Текущая цена: ${k(pe())}`,onClose:t}),r&&e.jsx("div",{className:"bg-red-500/10 border border-red-500/30 p-3 mb-4 text-red-400 text-sm",children:r}),e.jsxs("form",{onSubmit:d,className:"space-y-5",children:[e.jsx(R,{label:"Имя",name:"name",value:s.name,onChange:u,placeholder:"Как тебя зовут?",required:!0}),e.jsx(R,{label:"Telegram или телефон",name:"contact",value:s.contact,onChange:u,placeholder:"@username или +7...",required:!0}),e.jsx(Pt,{label:"Идея проекта",name:"idea",value:s.idea,onChange:u,placeholder:"Кратко опиши, что хочешь создать...",rows:3}),e.jsx(Rt,{label:"Уровень подготовки",name:"level",value:s.level,onChange:u,options:[{value:"",label:"Выбери уровень"},{value:"beginner",label:"Начинающий — мало опыта в коде"},{value:"intermediate",label:"Средний — есть базовые навыки"},{value:"advanced",label:"Продвинутый — опыт разработки"}]}),e.jsx("button",{type:"submit",disabled:n,className:"w-full bg-emerald-500 text-zinc-950 py-4 font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3",children:n?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"animate-spin",children:"⏳"}),"Отправка..."]}):e.jsxs(e.Fragment,{children:[e.jsx($,{className:"w-5 h-5"}),"Отправить заявку"]})})]})]})})}function At({isOpen:a,onClose:t}){const[s,l]=x.useState(!1),[n,i]=x.useState(!1),[c,o]=x.useState({name:"",phone:"",email:""}),[r,m]=x.useState(!1),[d,u]=x.useState(null),j="https://saasprener.online/api";if(x.useEffect(()=>{a&&fe("prepayment")},[a]),!a)return null;const N=async b=>{if(b.preventDefault(),!(!s||!n)){m(!0),u(null);try{const f=await(await fetch(`${j}/yookassa/create-payment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c.name,email:c.email,phone:c.phone,amount:g.prepaymentAmount,description:`Предоплата за курс SAASPRENER — ${g.streamName}`})})).json();if(f.success&&f.confirmation_url)localStorage.setItem("sp_pending_payment",f.payment_id),je("prepayment_payment"),typeof window<"u"&&window.ym&&window.ym(98650651,"reachGoal","payment_started",{amount:g.prepaymentAmount}),window.location.href=f.confirmation_url;else throw new Error(f.error||"Не удалось создать платеж")}catch(v){console.error("Payment error:",v),u("Ошибка создания платежа. Попробуй ещё раз или напиши в Telegram @saasprener")}finally{m(!1)}}},S=b=>{o({...c,[b.target.name]:b.target.value})};return e.jsxs(Ne,{onClose:t,children:[e.jsx(ve,{title:"Внести предоплату",subtitle:`Сумма: ${k(g.prepaymentAmount)}`,onClose:t}),d&&e.jsx("div",{className:"bg-red-500/10 border border-red-500/30 p-3 mb-4 text-red-400 text-sm",children:d}),e.jsx("div",{className:"bg-amber-500/10 border border-amber-500/30 p-4 mb-6",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(at,{className:"w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("p",{className:"text-amber-400 font-bold text-sm uppercase tracking-wide mb-1",children:"Важно"}),e.jsx("p",{className:"text-amber-200/80 text-sm leading-relaxed",children:"Предоплата фиксирует место и текущую цену. Предоплата невозвратная."})]})]})}),e.jsxs("form",{onSubmit:N,className:"space-y-5",children:[e.jsx(R,{label:"Имя",name:"name",value:c.name,onChange:S,placeholder:"Как тебя зовут?",required:!0}),e.jsx(R,{label:"Email",name:"email",type:"email",value:c.email,onChange:S,placeholder:"email@example.com",helperText:"На email придёт чек об оплате",required:!0}),e.jsx(R,{label:"Телефон",name:"phone",type:"tel",value:c.phone,onChange:S,placeholder:"+7 (999) 123-45-67",required:!0}),e.jsxs("div",{className:"space-y-3 pt-2",children:[e.jsxs("label",{className:"flex items-start gap-3 cursor-pointer group",children:[e.jsx("input",{type:"checkbox",checked:s,onChange:b=>l(b.target.checked),className:"mt-1 w-4 h-4 accent-emerald-500"}),e.jsxs("span",{className:"text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors",children:["Я понимаю, что предоплата ",e.jsx("strong",{className:"text-white",children:"невозвратная"})]})]}),e.jsxs("label",{className:"flex items-start gap-3 cursor-pointer group",children:[e.jsx("input",{type:"checkbox",checked:n,onChange:b=>i(b.target.checked),className:"mt-1 w-4 h-4 accent-emerald-500"}),e.jsx("span",{className:"text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors",children:"Я согласен с условиями участия"})]})]}),e.jsx("button",{type:"submit",disabled:r||!s||!n,className:"w-full bg-emerald-500 text-zinc-950 py-4 font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3",children:r?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"animate-spin",children:"⏳"}),"Создание платежа..."]}):e.jsxs(e.Fragment,{children:[e.jsx(G,{className:"w-5 h-5"}),"Оплатить ",k(g.prepaymentAmount)]})}),e.jsx("p",{className:"text-xs text-zinc-600 text-center",children:"Оплата через защищённый сервис ЮKassa"})]})]})}function Ne({children:a,onClose:t}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fadeIn",onClick:t}),e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",children:e.jsx("div",{className:"bg-[#0d0d0d] border border-zinc-800 w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto animate-slideUp",onClick:s=>s.stopPropagation(),children:e.jsx("div",{className:"p-6 md:p-8",children:a})})}),e.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `})]})}function ve({title:a,subtitle:t,onClose:s}){return e.jsxs("div",{className:"flex items-start justify-between mb-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-tight",children:a}),t&&e.jsx("p",{className:"text-emerald-400 text-sm font-bold mt-1",children:t})]}),e.jsx("button",{onClick:s,className:"text-zinc-500 hover:text-white transition-colors p-1",children:e.jsx(me,{className:"w-6 h-6"})})]})}function It({title:a,message:t}){return e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6",children:e.jsx(E,{className:"w-8 h-8 text-emerald-500"})}),e.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-tight mb-2",children:a}),e.jsx("p",{className:"text-zinc-400",children:t})]})}function R({label:a,name:t,value:s,onChange:l,placeholder:n,type:i="text",required:c=!1,helperText:o}){return e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2",children:[a," ",c&&e.jsx("span",{className:"text-emerald-500",children:"*"})]}),e.jsx("input",{type:i,name:t,value:s,onChange:l,placeholder:n,required:c,className:"w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"}),o&&e.jsx("p",{className:"text-xs text-zinc-600 mt-1",children:o})]})}function Pt({label:a,name:t,value:s,onChange:l,placeholder:n,rows:i=3}){return e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2",children:a}),e.jsx("textarea",{name:t,value:s,onChange:l,placeholder:n,rows:i,className:"w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"})]})}function Rt({label:a,name:t,value:s,onChange:l,options:n}){return e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2",children:a}),e.jsx("select",{name:t,value:s,onChange:l,className:"w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors appearance-none cursor-pointer",children:n.map(i=>e.jsx("option",{value:i.value,children:i.label},i.value))})]})}function Ct(){const[a,t]=x.useState(!1),[s,l]=x.useState(!1),n=pe(),i=B(),c=pt(),o=ht(),r=i==="closed";return e.jsxs(e.Fragment,{children:[e.jsx("section",{id:"price",className:"py-20 md:py-32 px-6 border-t border-zinc-900",children:e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:"grid lg:grid-cols-2 gap-0 border border-zinc-800 bg-[#0d0d0d]",children:[e.jsxs("div",{className:"p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tighter uppercase leading-[0.95]",children:["Инвестиция",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-500",children:"в скиллы"})]}),e.jsx("p",{className:"text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed",children:"Не теория ради теории, а практика, архитектура и запуск собственного продукта."}),e.jsx("div",{className:"prose prose-zinc prose-invert mb-10",children:e.jsx("p",{className:"text-zinc-400 leading-relaxed",children:'Один сильный сервис, который ты соберешь после обучения, может окупить эти вложения в первый же месяц. Здесь ты покупаешь не "курс посмотреть", а системный путь: от идеи и архитектуры до рабочего запуска.'})}),e.jsxs("div",{className:"mb-10",children:[e.jsx("h3",{className:"text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6",children:"Что ты получишь"}),e.jsx("ul",{className:"space-y-4",children:["Практика кода с первого дня","Разбор архитектуры именно твоей идеи","Мое личное ревью ключевых решений","Помощь в доведении до боевого запуска","Понимание, как собирать продукт без команды","Фокус на реальный результат, а не на теорию"].map((m,d)=>e.jsxs("li",{className:"flex items-start gap-4 group",children:[e.jsx(E,{className:"text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"}),e.jsx("span",{className:"text-zinc-300 font-medium text-sm md:text-base",children:m})]},d))})]}),e.jsxs("div",{className:"mb-10 p-6 bg-zinc-900/50 border-l-2 border-emerald-500",children:[e.jsx("h4",{className:"text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4",children:"Для кого это"}),e.jsxs("ul",{className:"space-y-2 text-sm text-zinc-400",children:[e.jsx("li",{children:"• Предприниматели, которые хотят собирать свои сервисы сами"}),e.jsx("li",{children:"• Те, кто хочет запускать MVP без зависимости от команды"}),e.jsx("li",{children:'• Те, кто хочет понять архитектуру продукта, а не просто "пописать код"'}),e.jsx("li",{children:"• Те, кто хочет выйти на запуск и монетизацию"})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-6 pt-6 border-t border-zinc-800",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(Z,{className:"w-5 h-5 text-emerald-500"}),e.jsxs("span",{className:"text-sm text-zinc-400",children:["Старт потока — ",e.jsx("strong",{className:"text-white",children:C(g.courseStartDate)})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(nt,{className:"w-5 h-5 text-emerald-500"}),e.jsxs("span",{className:"text-sm text-zinc-400",children:["Осталось мест: ",e.jsx("strong",{className:"text-white",children:g.spotsLeft})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(et,{className:"w-5 h-5 text-emerald-500"}),e.jsx("span",{className:"text-sm text-zinc-400",children:"Группы до 20 человек"})]})]})]}),e.jsxs("div",{className:"p-8 md:p-12 lg:p-16 bg-[#0a0a0a] relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-emerald-500/5 blur-[80px] pointer-events-none"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 mb-8",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),e.jsx("span",{className:"text-emerald-400 text-xs font-black uppercase tracking-widest",children:r?"Набор закрыт":"Набор на текущий поток"})]}),!r&&e.jsxs("div",{className:"mb-8",children:[e.jsx("div",{className:"text-6xl md:text-7xl font-black text-white tracking-tighter mb-2 price-display",children:k(n)}),e.jsxs("p",{className:"text-zinc-500 text-sm font-medium",children:[i===1&&"Цена действует до 18 числа",i===2&&"Цена действует до 25 числа",i===3&&"Финальная цена"]})]}),!r&&i!==3&&e.jsx("div",{className:"mb-8",children:e.jsx(mt,{targetDate:c,label:o})}),!r&&e.jsx("div",{className:"mb-8",children:e.jsx(gt,{})}),e.jsx("div",{className:"space-y-4",children:r?e.jsx("button",{onClick:()=>t(!0),className:"w-full bg-zinc-800 text-white py-5 font-black text-lg uppercase tracking-widest hover:bg-zinc-700 transition-colors flex items-center justify-center gap-3",children:"Оставить заявку на следующий поток"}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>t(!0),className:"btn-glint relative overflow-hidden w-full bg-emerald-500 text-zinc-950 py-5 font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3",children:["Оставить заявку",e.jsx(w,{className:"w-5 h-5"})]}),e.jsxs("button",{onClick:()=>l(!0),className:"w-full bg-transparent border-2 border-zinc-700 text-white py-4 font-bold text-sm uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-500 transition-colors flex items-center justify-center gap-2",children:[e.jsx(Ze,{className:"w-4 h-4"}),"Внести предоплату ",k(g.prepaymentAmount)]}),e.jsxs("p",{className:"text-xs text-zinc-600 text-center leading-relaxed",children:["Предоплата фиксирует место и текущие условия участия.",e.jsx("br",{}),e.jsx("span",{className:"text-zinc-500",children:"Предоплата невозвратная."})]})]})}),!r&&e.jsxs("div",{className:"mt-8 pt-6 border-t border-zinc-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs text-zinc-500",children:[e.jsx(I,{className:"w-3 h-3"}),e.jsx("span",{children:"Места ограничены — набор в группы до 20 человек"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-xs text-zinc-500",children:[e.jsx(Z,{className:"w-3 h-3"}),e.jsxs("span",{children:["Старт курса — ",C(g.courseStartDate)]})]})]})]})]})]}),e.jsx("div",{className:"mt-16 md:mt-20",children:e.jsx(jt,{})})]})}),e.jsx(zt,{isOpen:a,onClose:()=>t(!1)}),e.jsx(At,{isOpen:s,onClose:()=>l(!1)}),e.jsx("style",{children:`
        .price-display {
          background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-glint::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s ease;
        }
        
        .btn-glint:hover::before {
          left: 100%;
        }
      `})]})}const M=[{id:1,slug:"sozdavay-saas-biznes-v-odinochku",title:"Создавай SaaS-бизнес в одиночку: почему сейчас это реально",description:"Узнай, как один человек с AI-инструментами может создать то, на что раньше нужна была команда из 5-10 специалистов.",category:"SaaS",tags:["SaaS","бизнес","соло-разработка","AI"],date:"2026-03-10",readTime:"8 мин",image:"/articles/article-1.svg",content:`
## Почему сейчас это возможно

Еще недавно запуск цифрового продукта казался историей только для команд с инвесторами, программистами, дизайнерами и длинным runway. Сейчас ситуация изменилась. Один человек с сильной архитектурной головой, правильным стеком и AI-инструментами может делать то, на что раньше уходила работа 5–10 специалистов. Это не магия и не легкие деньги. Это другая плотность навыков, другое мышление и другая скорость принятия решений.

## Что значит SaaS-бизнес в одиночку

SaaS-бизнес в одиночку — это не про "сделал сайт и разбогател". Это про способность увидеть бизнес-задачу, собрать под нее систему, быстро запустить MVP, проверить спрос, переделать слабые места и довести сервис до оплаты. Именно поэтому выигрывает не тот, у кого больше людей, а тот, кто быстрее учится, быстрее принимает решения и глубже понимает архитектуру продукта.

## Главное преимущество соло-подхода

Главное преимущество соло-подхода — контроль. Ты не ждешь, пока дизайнер дорисует макет, пока разработчик закончит таск, пока партнеры согласуют решение. Ты сам двигаешь продукт, сам управляешь скоростью и сам забираешь результат. Это дает не только скорость, но и экономику. Чем меньше зависимость от команды на старте, тем проще довести продукт до первых денег.

## Инструменты, которые делают это возможным

Сегодня создание SaaS-сервиса стало доступнее благодаря фреймворкам, облачной инфраструктуре, AI-помощникам и готовым интеграциям. Но доступность инструментов сама по себе ничего не дает. Важно уметь собирать систему: интерфейс, backend, базу данных, бизнес-логику, авторизацию, платежи, аналитику и маркетинговую упаковку. Именно на стыке этих элементов и рождается продукт, за который люди готовы платить.

## Главные выводы

- SaaS-бизнес в одиночку — это не мечта, а реальная бизнес-модель 2026 года
- Ключевое преимущество — скорость принятия решений и полный контроль
- AI-инструменты усиливают возможности одиночки в разы
- Важна архитектурная грамотность, а не размер команды
- Первые деньги приходят быстрее, когда нет лишних звеньев
    `,relatedArticles:[2,3,4]},{id:2,slug:"moy-pervyy-it-proekt-i-glavnaya-oshibka",title:"Мой первый IT-проект и главная ошибка: почему нельзя рано раздавать доли",description:"История о том, как преждевременное партнерство превращается в якорь для бизнеса и что делать вместо этого.",category:"кейсы",tags:["кейсы","ошибки","партнерство","опыт"],date:"2026-03-08",readTime:"7 мин",image:"/articles/article-2.svg",content:`
## Как начинается хаос

У многих первый IT-проект начинается не с побед, а с хаоса. Ты вкладываешь деньги, тестируешь гипотезы, пытаешься объяснить подрядчикам, что именно хочешь получить, и постепенно понимаешь, что между "бизнес-идеей" и "работающим сервисом" лежит огромная пропасть. Самая опасная ошибка в этот момент — пытаться закрыть системные проблемы раздачей долей.

## Почему доли не решают проблемы

Когда продукт еще не собран, экономика не подтверждена, процессы не выстроены, а архитектура держится на костылях, доля в проекте начинает работать не как ускоритель, а как якорь. Ты вроде бы уменьшаешь напряжение в моменте, но закладываешь себе долгосрочную сложность. Потом продукт начинает жить своей жизнью, ты меняешься, рынок меняется, а структура владения уже мешает двигаться быстро.

## Проблема преждевременного партнерства

Проблема не в людях как таковых, а в преждевременном партнерстве. Пока ты сам не понял механику разработки, монетизации, воронки и реальной ценности продукта, делиться бизнесом опасно. Ты можешь отдать часть компании не за результат, а за попытку компенсировать отсутствие собственной системности. И потом годами платить за это скоростью, деньгами и потерянной гибкостью.

## Чему учит первый проект

Первый проект хорош не деньгами, а тем, что он ломает иллюзии. Он показывает, где ты не понимаешь продукт, где не понимаешь разработку, где у тебя нет контроля, где команда не чувствует твою бизнес-задачу. Именно эти ошибки потом становятся фундаментом для зрелого подхода, когда ты уже не хочешь распыляться и строишь сервис осознанно.

## Главные выводы

- Не раздавай доли, пока сам не понимаешь механику продукта
- Доля — это не решение системных проблем
- Первый проект ценен уроками, а не прибылью
- Лучше медленнее, но с полным контролем
- Партнерство имеет смысл только когда ты уже системный
    `,relatedArticles:[1,3,5]},{id:3,slug:"kak-odnomu-cheloveku-zapustit-it-proekt",title:"Как одному человеку запустить IT-проект без команды и инвесторов",description:"Пошаговый подход к запуску цифрового продукта: от ясности идеи до первых платящих клиентов.",category:"запуск",tags:["запуск","MVP","стартап","соло"],date:"2026-03-05",readTime:"9 мин",image:"/articles/article-3.svg",content:`
## Дисциплина вместо героизма

Запуск IT-проекта без команды — это не вопрос героизма, а вопрос дисциплины и правильной архитектуры. Если человек пытается "сделать всё и сразу", он утонет. Если же он собирает продукт слоями, от самой ценной функции к следующей, шансы на запуск возрастают в разы.

## Первый шаг — ясность

Первый шаг — не код, а ясность. Нужно понять, какую конкретную проблему решает сервис, для кого он создается и почему за это вообще будут платить. Без этого любая разработка превращается в красивую, но бесполезную конструкцию. Второй шаг — минимальная архитектура. Не идеальная, а рабочая: интерфейс, авторизация, база данных, одна основная функция, трекинг действий пользователя и понятный способ получить обратную связь.

## Главная ошибка — избыточная сложность

Самая распространенная ошибка — начинать с избыточной сложности. Огромная админка, десятки ролей, тонны экранов, сложная автоматизация и бесконечные настройки до появления первого клиента. Реальный запуск выглядит иначе: один основной сценарий, одна сильная ценность, одна понятная точка входа. Все остальное можно наращивать после первых подтверждений спроса.

## Что заменяет команду

Когда у человека нет команды, у него должен быть другой капитал: скорость мышления, умение учиться, готовность переделывать, внимание к деталям и способность доводить до конца. Это жесткий путь, но он дает главное — независимость. Ты не зависишь от инвестора, не делишь бизнес раньше времени и не вязнешь в бесконечных согласованиях.

## Главные выводы

- Запуск без команды требует дисциплины, а не героизма
- Начинай с ясности: проблема → решение → MVP
- Избегай избыточной сложности на старте
- Один сценарий, одна ценность, одна точка входа
- Независимость — главный приз соло-подхода
    `,relatedArticles:[1,4,6]},{id:4,slug:"arhitektura-pribylnogo-saas-servisa",title:"Архитектура прибыльного SaaS-сервиса: что должно быть внутри",description:"Разбираем технический и бизнес-каркас SaaS: от интерфейса до биллинга и аналитики.",category:"архитектура",tags:["архитектура","backend","монетизация","MVP"],date:"2026-03-02",readTime:"10 мин",image:"/articles/article-4.svg",content:`
## Архитектура — это не только техника

Прибыльный SaaS начинается не с "прикольной идеи", а с правильной архитектуры. Под архитектурой здесь понимается не только техническая схема, но и способ, которым продукт приводит пользователя к ценности и к оплате. Если внутри сервиса нет логики движения к результату, даже красивый интерфейс не спасет.

## Шесть слоев SaaS-сервиса

У любого сильного SaaS есть несколько обязательных слоев:

1. **Интерфейс** — который быстро объясняет, что делать
2. **Backend** — который надежно обрабатывает данные и действия пользователя
3. **База данных** — где все хранится структурно и предсказуемо
4. **Авторизация** — управление доступом и ролями
5. **Биллинг** — логика монетизации и приема платежей
6. **Аналитика** — без которой невозможно понять, где продукт теряет деньги

## Экономика продукта

Но технический каркас — это только половина задачи. Вторая половина — экономика продукта. Пользователь должен быстро почувствовать пользу, а владелец сервиса должен понимать, откуда приходит выручка, где формируется retention и какие функции реально влияют на платность. Если архитектура не поддерживает экономику, продукт будет красивым, но слабым как бизнес.

## Масштабируемость без переписывания

Хорошая архитектура отличается тем, что ее можно развивать без постоянного переписывания всего проекта. Ты можешь добавлять роли, интеграции, новые сценарии, автоматизации и AI-слой, не разрушая базу. Именно поэтому архитектурное мышление — одно из самых ценных качеств для тех, кто хочет строить SaaS всерьез.

## Главные выводы

- Архитектура = техника + бизнес-логика
- 6 обязательных слоев: интерфейс, backend, БД, авторизация, биллинг, аналитика
- Экономика продукта важнее красоты интерфейса
- Хорошая архитектура позволяет расти без переписывания
- Архитектурное мышление — ключевой навык SaaS-создателя
    `,relatedArticles:[1,3,5]},{id:5,slug:"kak-ai-pomogaet-zapuskat-servisy-bystree",title:"Как AI помогает запускать сервисы быстрее и дешевле",description:"Практическое руководство по использованию AI на всех этапах создания SaaS: от проектирования до запуска.",category:"AI",tags:["AI","нейросети","автоматизация","разработка"],date:"2026-02-28",readTime:"8 мин",image:"/articles/article-5.svg",content:`
## AI как усилитель скорости

AI не заменяет мышление, но драматически усиливает скорость. Для соло-разработчика это особенно важно, потому что каждая сэкономленная неделя — это шанс быстрее выйти на рынок, быстрее протестировать гипотезу и быстрее получить первые деньги. AI сегодня — это не игрушка для генерации текста, а слой ускорения почти на каждом участке работы.

## Где AI дает максимум пользы

С его помощью можно быстрее:
- Проектировать интерфейсы
- Писать черновую логику
- Формировать структуру базы данных
- Подготавливать тексты
- Продумывать сценарии
- Генерировать документацию
- Собирать технические задания
- Ускорять анализ ошибок

Но самая большая ценность AI — в снижении когнитивной нагрузки. Он помогает быстрее разложить задачу на части и не терять темп.

## Когда AI не работает

При этом AI не спасает слабую голову. Если человек не понимает, что строит, он просто будет генерировать хаос быстрее. Поэтому AI дает максимальный эффект там, где уже есть архитектурное мышление, логика продукта и понимание бизнес-цели. Тогда он становится не костылем, а мультипликатором.

## AI на старте SaaS

Для SaaS-проектов AI особенно полезен на старте: когда нужно быстро собрать MVP, упаковать его, подготовить контент, сделать первые лендинги, описать сценарии, внедрить подсказки внутри интерфейса и ускорить коммуникацию с клиентом. Это не отменяет тяжелую работу, но позволяет делать ее на другой скорости.

## Главные выводы

- AI усиливает скорость на каждом этапе разработки
- Главная ценность — снижение когнитивной нагрузки
- AI не спасает, если нет понимания продукта
- Максимальный эффект — при архитектурном мышлении
- На старте SaaS AI экономит недели работы
    `,relatedArticles:[1,4,6]},{id:6,slug:"pochemu-buduschee-za-solo-razrabotchikami",title:"Почему будущее за соло-разработчиками с сильным AI-стеком",description:"Анализ рынка и трендов: почему маленькие быстрые команды побеждают крупные структуры.",category:"тренды",tags:["тренды","будущее","соло","AI"],date:"2026-02-25",readTime:"7 мин",image:"/articles/article-6.svg",content:`
## Рынок меняется

Рынок цифровых продуктов меняется в сторону меньших, быстрых и более сфокусированных команд. Во многих нишах уже не выигрывает тот, у кого больше людей, а выигрывает тот, кто быстрее принимает решения, быстрее собирает MVP и быстрее адаптирует продукт под реальную обратную связь. Именно поэтому соло-разработчик с сильным AI-стеком становится опасно эффективной единицей.

## Преимущества без команды

У него нет длинных цепочек согласований, нет лишних издержек, нет внутренней бюрократии. Он ближе к продукту, ближе к пользователю и ближе к деньгам. Он может в один день придумать гипотезу, на следующий собрать интерфейс, потом поднять backend, протестировать воронку и запустить трафик. Для старта это огромное преимущество.

## Новый входной порог

Это не означает, что команды исчезнут. Но это означает, что входной порог в создание сервисов стал другим. Теперь один человек способен забрать на себя кусок рынка, который раньше казался доступным только студиям и стартап-командам. Особенно если он умеет сочетать код, продукт, маркетинг, аналитику и AI-инструменты в одной системе.

## Соло — это бизнес-модель

Будущее не за "одиночками вообще", а за теми, кто умеет строить системы. Если у человека есть дисциплина, насмотренность, архитектурное мышление и готовность работать на длинной дистанции, он может создавать продукты, которые приносят реальные деньги. И именно это делает соло-подход не романтикой, а полноценной бизнес-моделью.

## Главные выводы

- Рынок сдвигается к быстрым маленьким командам
- Соло-разработчик с AI — опасно эффективная единица
- Входной порог в SaaS-бизнес снизился радикально
- Важны системность и архитектурное мышление
- Соло-подход — это полноценная бизнес-модель
    `,relatedArticles:[1,3,5]}],Mt=[{id:"all",name:"Все статьи"},{id:"SaaS",name:"SaaS"},{id:"AI",name:"AI"},{id:"запуск",name:"Запуск"},{id:"архитектура",name:"Архитектура"},{id:"кейсы",name:"Кейсы"},{id:"тренды",name:"Тренды"}],Et=["SaaS","AI","запуск","монетизация","архитектура","MVP","стартап","кодинг","бизнес","автоматизация","соло-разработка","нейросети","backend","кейсы"],F=[{id:1,slug:"fiveads",title:"FIVEADS",subtitle:"Система автоматизации рекламы на Avito",description:"Мощная система для автоматизации рекламы на Avito. Управление балансами и авто-уникализация фото.",fullDescription:`
FIVEADS — это B2B-сервис для автоматизации размещения и продвижения объявлений на Avito. Проект решает реальную бизнес-задачу: помогает продавцам масштабировать присутствие на площадке без ручной рутины.

### Что делает сервис

- Автоматическое размещение объявлений
- Управление балансами нескольких аккаунтов
- Авто-уникализация фотографий для обхода блокировок
- Аналитика эффективности объявлений
- Массовое редактирование и обновление

### Технический стек

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **База данных:** PostgreSQL
- **Интеграции:** Avito API, Telegram Bot
- **Инфраструктура:** VPS, Docker

### Результаты

Сервис используется несколькими десятками бизнесов ежедневно. Модель монетизации — подписка с разными тарифами в зависимости от объема объявлений.
    `,tags:["АВТОМАТИЗАЦИЯ","ПРОДАЖИ","CRM"],image:"/project-3.png",stats:"B2B СЕГМЕНТ",url:"https://fiveads.ru/",type:"B2B SaaS",status:"Активный",year:"2024"},{id:2,slug:"synapse",title:"SYNAPSE",subtitle:"Платформа для разведки данных и визуализации связей",description:"Платформа на базе Telegram для разведки данных и визуализации связей в реальном времени.",fullDescription:`
SYNAPSE — это OSINT-платформа, которая позволяет анализировать связи между данными и визуализировать их в реальном времени. Проект интегрирован с Telegram для удобства использования.

### Что делает сервис

- Поиск и агрегация данных из открытых источников
- Визуализация связей между объектами
- Построение графов взаимосвязей
- Экспорт отчетов
- Telegram-бот для быстрого доступа

### Технический стек

- **Frontend:** React, D3.js для визуализации графов
- **Backend:** Python, FastAPI
- **База данных:** Neo4j (графовая БД), PostgreSQL
- **Интеграции:** Telegram Bot API
- **Инфраструктура:** Kubernetes, облачные сервисы

### Особенности архитектуры

Сложная система с графовой базой данных для хранения связей. Высокая нагрузка на обработку данных потребовала оптимизации запросов и кэширования.
    `,tags:["BIG DATA","TELEGRAM","OSINT"],image:"/project-1.png",stats:"СЛОЖНАЯ АРХИТЕКТУРА",url:"https://synapse.com.ru/",type:"OSINT Platform",status:"Активный",year:"2025"},{id:3,slug:"emailzavr",title:"Emailzavr",subtitle:"Платформа для email-маркетинга с AI",description:"Платформа для email-маркетинга с нейросетью-менеджером и контролем доставляемости писем.",fullDescription:`
Emailzavr — это современная платформа для email-маркетинга с интегрированным AI-ассистентом. Сервис решает проблему низкой доставляемости и помогает создавать эффективные рассылки.

### Что делает сервис

- Управление email-рассылками
- AI-ассистент для создания текстов писем
- Контроль доставляемости и репутации домена
- Аналитика открытий и кликов
- Сегментация базы подписчиков
- A/B тестирование

### Технический стек

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, интеграция с LLM
- **База данных:** PostgreSQL, Redis для очередей
- **Email-инфраструктура:** собственные SMTP-серверы
- **AI:** GPT API для генерации контента

### Результаты

Сотни отправок в день. Пользователи отмечают высокую доставляемость и удобство AI-ассистента для создания писем.
    `,tags:["БИЗНЕС-ИНСТРУМЕНТ","АНАЛИТИКА","ДАШБОРД"],image:"/project-5.png",stats:"СОТНИ ОТПРАВОК / ДЕНЬ",url:"https://emailzavr.ru/",type:"Email SaaS",status:"Активный",year:"2025"},{id:4,slug:"bazy-kontaktov",title:"Базы Контактов",subtitle:"Профессиональные базы данных для отделов продаж",description:"Профессиональные базы данных для отделов продаж. Актуальные номера телефонов, Telegram и WhatsApp.",fullDescription:`
Базы Контактов — это data-сервис для B2B-продаж. Предоставляем актуальные контактные данные для отделов продаж и маркетинга.

### Что предлагает сервис

- Базы контактов по отраслям
- Актуальные номера телефонов
- Telegram и WhatsApp контакты
- Email-адреса ЛПР
- Регулярное обновление данных
- API для интеграции в CRM

### Технический стек

- **Frontend:** React
- **Backend:** Python, Django
- **База данных:** PostgreSQL с полнотекстовым поиском
- **Парсинг:** Собственные парсеры на Python
- **API:** REST API для интеграций

### Масштаб данных

Более 5.1 миллионов контактов в базе. Данные регулярно верифицируются и обновляются для поддержания актуальности.
    `,tags:["DATA","КОММЕРЦИЯ","ЛИДЫ"],image:"/project-2.png",stats:"5.1M+ КОНТАКТОВ",url:"https://24fiveads.ru/",type:"Data Service",status:"Активный",year:"2024"},{id:5,slug:"vdialoge",title:"ВДиалоге",subtitle:"Нейросеть-психолог и трекер отношений для пар",description:"Нейросеть-психолог и трекер отношений для пар. Помогает решать конфликты и возвращать близость.",fullDescription:`
ВДиалоге — это B2C-приложение на базе AI, которое помогает парам улучшать отношения. Нейросеть выступает в роли психолога и помогает разбирать конфликтные ситуации.

### Что делает сервис

- AI-психолог для разбора конфликтов
- Трекер состояния отношений
- Персональные рекомендации для пар
- Дневник отношений
- Упражнения на сближение

### Технический стек

- **Frontend:** React Native (мобильное приложение)
- **Backend:** Node.js
- **AI:** Fine-tuned LLM для психологических консультаций
- **База данных:** MongoDB
- **Аналитика:** собственная система трекинга прогресса

### Особенности

Продукт для массового рынка. Требовал тщательной работы над промптами и safety-фильтрами для AI-психолога.
    `,tags:["B2C","ПСИХОЛОГИЯ","AI"],image:"/project-4.png",stats:"МАССОВЫЙ РЫНОК",url:"https://soulsync.com.ru",type:"B2C AI App",status:"Активный",year:"2025"}],Tt=[{id:1,question:"Что такое SaaS?",answer:"SaaS (Software as a Service) — это модель распространения программного обеспечения, при которой пользователи платят за доступ к сервису по подписке. Вместо покупки программы навсегда, клиент платит ежемесячно или ежегодно и получает доступ к актуальной версии через интернет. Примеры: Notion, Slack, Figma."},{id:2,question:"Можно ли создать SaaS одному?",answer:"Да, сейчас это абсолютно реально. Современные инструменты, фреймворки, облачная инфраструктура и AI-помощники позволяют одному человеку делать то, на что раньше нужна была команда из 5-10 специалистов. Ключевое — это архитектурное мышление и готовность учиться."},{id:3,question:"Сколько можно заработать на SaaS?",answer:"Доход зависит от ниши, ценовой модели и количества пользователей. Соло-SaaS с 100-500 платящими клиентами по $20-50/мес уже дает серьезный доход. Многие соло-разработчики выходят на $10-50K MRR (ежемесячный повторяющийся доход). Ключ — найти реальную боль и решить ее качественно."},{id:4,question:"Как запускать онлайн-сервисы без команды?",answer:"Фокус на MVP — минимально жизнеспособном продукте. Сначала одна ключевая функция, один сценарий использования, одна четкая ценность. Потом валидация спроса через первых пользователей. И только после подтверждения гипотезы — расширение функционала. AI-инструменты ускоряют этот процесс в разы."},{id:5,question:"Нужен ли программист для создания SaaS?",answer:"Если ты сам не программист — есть два пути. Первый: научиться кодить самому (это то, чему учит SAASPRENER). Второй: использовать no-code инструменты для простых сервисов. Но для серьезного SaaS-бизнеса навыки программирования дают полный контроль, гибкость и независимость."},{id:6,question:"Можно ли использовать AI для разработки?",answer:"Обязательно. AI сегодня — это не опция, а необходимость. Он помогает писать код, проектировать архитектуру, создавать тексты, анализировать ошибки, формировать документацию. AI не заменяет мышление, но драматически ускоряет работу. Соло-разработчик с AI-стеком — это новая норма."},{id:7,question:"Как быстро сделать MVP?",answer:"Реальный MVP можно собрать за 2-4 недели, если четко понимаешь задачу. Ключевые принципы: минимум функций, максимум фокуса на главной ценности, готовые компоненты и библиотеки, отказ от перфекционизма. Цель MVP — проверить гипотезу, а не построить идеальный продукт."},{id:8,question:"Как продвигать SaaS-проект?",answer:"Начинай с контент-маркетинга и SEO — это дает долгосрочный органический трафик. Параллельно: Product Hunt, Telegram-каналы в твоей нише, интеграции с другими сервисами, партнерские программы. Платная реклама имеет смысл только когда уже есть подтвержденный product-market fit."}],_t=[{id:1,question:"С чего начать разработку SaaS?",answer:"Начни с проблемы, а не с решения. Найди реальную боль у реальных людей. Потом спроектируй минимальное решение. Только после этого пиши код. Архитектура важнее красоты интерфейса на старте."},{id:2,question:"Какой стек выбрать для SaaS?",answer:"Для соло-разработчика оптимален стек, который ты знаешь. React + Node.js + PostgreSQL — универсальный выбор. Python + Django — если фокус на данных. Next.js — если важен SEO. Главное — не усложнять на старте."},{id:3,question:"Сколько времени занимает создание SaaS?",answer:"MVP — 2-4 недели при фокусе и ясной задаче. Полноценная версия — 2-3 месяца. Выход на стабильную монетизацию — от 6 месяцев до года. Это марафон, не спринт."}],Lt=[{id:1,question:"Как AI помогает в разработке?",answer:"AI ускоряет написание кода, помогает с отладкой, генерирует документацию, создает тесты, проектирует архитектуру. Главное — снижение когнитивной нагрузки и ускорение рутинных задач."},{id:2,question:"Какие AI-инструменты использовать?",answer:"GitHub Copilot для кода, ChatGPT/Claude для проектирования и текстов, Midjourney/DALL-E для графики, Cursor как AI-IDE. Комбинация инструментов дает максимальный эффект."},{id:3,question:"Заменит ли AI программистов?",answer:"Нет, но изменит роль. AI — это усилитель, не замена. Программист с AI в 5-10 раз продуктивнее. Но понимание архитектуры, бизнес-логики и системное мышление останутся критически важными."}];function Dt({project:a,idx:t}){const s=x.useRef(null),[l,n]=x.useState(!1);return x.useEffect(()=>{const i=new IntersectionObserver(([c])=>{n(c.isIntersecting)},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return s.current&&i.observe(s.current),()=>{s.current&&i.unobserve(s.current)}},[]),e.jsxs("div",{ref:s,className:`bg-[#0d0d0d] border border-zinc-800 flex flex-col group hover:border-emerald-500 transition-colors duration-300 ${l?"mobile-active":""}`,children:[e.jsxs("div",{className:"relative overflow-hidden h-48 md:h-72 border-b border-zinc-800 bg-zinc-950 flex items-center justify-center",children:[e.jsx("div",{className:"project-overlay absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("img",{src:a.image,alt:a.title,loading:"lazy",className:"project-img w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"})]}),e.jsxs("div",{className:"p-4 md:p-8 flex flex-col flex-grow",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 gap-2 md:gap-4",children:[e.jsx(h,{to:`/cases/${a.slug}`,className:"text-xl md:text-3xl font-black text-white tracking-tighter uppercase hover:text-emerald-400 transition-colors",children:a.title}),e.jsx("span",{className:"px-2 md:px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-[10px] md:text-xs font-black text-emerald-400 uppercase tracking-widest whitespace-nowrap w-fit",children:a.stats})]}),e.jsx("p",{className:"text-zinc-400 mb-4 md:mb-8 flex-grow text-sm md:text-lg",children:a.description}),e.jsx("div",{className:"flex flex-wrap gap-1.5 md:gap-2 mt-auto",children:a.tags.map(i=>e.jsx("span",{className:"px-2 md:px-3 py-1 bg-zinc-900 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-zinc-300 border border-zinc-800",children:i},i))})]})]})}function $t(){const a=[{Icon:te,title:"АРХИТЕКТУРА ПРИБЫЛЬНОГО СЕРВИСА",desc:"Выбираем идею, которая нужна рынку. Проектируем фундамент так, чтобы сервис работал быстро и не падал от наплыва клиентов."},{Icon:tt,title:"ИНТЕРФЕЙС, ЗА КОТОРЫЙ ПЛАТЯТ",desc:"Создаем удобный и красивый внешний вид программы. Клиент должен понимать, как пользоваться сервисом, за 3 секунды."},{Icon:We,title:"ЛОГИКА И БАЗЫ ДАННЫХ",desc:"Надежная работа с данными клиентов, безопасность, регистрация и стабильность всей системы под капотом."},{Icon:ae,title:"ВНЕДРЕНИЕ НЕЙРОСЕТЕЙ",desc:"Автоматизируем процессы внутри сервиса с помощью искусственного интеллекта. Это то, что сейчас повышает ценность продукта в 10 раз."},{Icon:it,title:"ЗАПУСК И МОНЕТИЗАЦИЯ",desc:"Публикуем сервис в интернете, подключаем прием платежей и готовимся получать первые деньги от подписчиков."}],t=[{Icon:te,title:"Архитектура сервисов",desc:"Как проектировать SaaS, который можно развивать и масштабировать без переписывания кода",link:"/hub/arhitektura-servisov"},{Icon:Xe,title:"Запуск MVP",desc:"Как собрать минимальную версию продукта за 2-4 недели и выйти на первые продажи",link:"/hub/zapusk-it-proekta"},{Icon:qe,title:"AI в разработке",desc:"Как использовать нейросети для ускорения работы в 3-5 раз и замены части команды",link:"/hub/ai-v-razrabotke"},{Icon:st,title:"Монетизация SaaS",desc:"Модели заработка на онлайн-сервисах: подписка, freemium, enterprise и другие",link:"/hub/zarabotok-na-saas"},{Icon:Ue,title:"Веб-кодинг",desc:"Практические навыки программирования для создания собственных цифровых продуктов",link:"/hub/veb-koding-dlya-predprinimateley"},{Icon:Je,title:"Кейсы запусков",desc:"Разборы реальных проектов: что работает, что нет, какие ошибки не повторять",link:"/cases"}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"SAASPRENER — Создавай SaaS-бизнес в одиночку",description:"Веб-кодинг для предпринимателей. Научу создавать SaaS-сервисы и онлайн-продукты без команды. Запускай свои проекты и забирай 100% прибыли.",canonical:"/"}),e.jsx(z,{type:"organization"}),e.jsx(z,{type:"website"}),e.jsx(z,{type:"person"}),e.jsx(z,{type:"course"}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes glint {
          0% { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
          15% { opacity: 1; }
          50%, 100% { transform: translateX(200%) skewX(-25deg); opacity: 0; }
        }
        .btn-glint::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-150%) skewX(-25deg);
          animation: glint 3s infinite ease-in-out;
        }
        @keyframes spin-border {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animated-border-box {
          position: relative;
          overflow: hidden;
        }
        .animated-border-box::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 300%;
          height: 300%;
          background: conic-gradient(from 0deg, transparent 70%, #10b981 100%);
          animation: spin-border 3s linear infinite;
        }
        .animated-border-box-inner {
          position: relative;
          z-index: 10;
        }
        /* Мобильная анимация при скролле */
        @media (hover: none) and (pointer: coarse) {
          .mobile-active {
            border-color: #10b981 !important;
          }
          .mobile-active .project-overlay {
            opacity: 1 !important;
          }
          .mobile-active .project-img {
            filter: grayscale(0) !important;
            transform: scale(1.05);
          }
        }
      `}}),e.jsx("section",{className:"pt-36 pb-20 px-6 max-w-7xl mx-auto",children:e.jsxs("div",{className:"grid lg:grid-cols-12 gap-12 items-center",children:[e.jsxs("div",{className:"lg:col-span-7 flex flex-col items-start text-left",children:[e.jsx("div",{className:"animated-border-box p-[1px] rounded-none mb-8",children:e.jsxs("div",{className:"animated-border-box-inner bg-[#0a0a0a] px-4 py-2 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-none bg-emerald-500 animate-pulse"}),e.jsx("span",{className:"text-emerald-400 text-xs font-black uppercase tracking-widest",children:"Набор в группы до 20 человек открыт"})]})}),e.jsxs("h1",{className:"text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-8 uppercase",children:["Создавай ",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-500",children:"SaaS-бизнес"}),e.jsx("br",{}),"В одиночку."]}),e.jsx("p",{className:"text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed border-l-2 border-emerald-500 pl-6",children:"Веб-кодинг для предпринимателей. Я научу тебя собирать работающие онлайн-продукты без команды. Ты сам придумываешь, сам программируешь, сам запускаешь и забираешь 100% прибыли."}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-6 w-full sm:w-auto",children:[e.jsxs("a",{href:"#price",className:"btn-glint relative overflow-hidden bg-emerald-500 text-zinc-950 px-10 py-5 rounded-none font-black text-lg uppercase tracking-widest hover:bg-emerald-400 transition-colors flex items-center justify-center gap-3",children:["Записаться на курс ",e.jsx(w,{className:"w-6 h-6"})]}),e.jsx("a",{href:"#portfolio",className:"bg-transparent text-white border-2 border-zinc-800 px-10 py-5 rounded-none font-black text-lg uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-500 transition-colors flex items-center justify-center",children:"Мои сервисы"})]}),e.jsxs("div",{className:"mt-16 grid grid-cols-2 gap-8 border-t border-zinc-900 pt-8 w-full max-w-lg",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-4xl font-black text-white",children:"5+"}),e.jsx("span",{className:"text-xs text-zinc-500 font-bold uppercase tracking-widest mt-2",children:"Запущенных SaaS"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-4xl font-black text-white",children:"100%"}),e.jsx("span",{className:"text-xs text-zinc-500 font-bold uppercase tracking-widest mt-2",children:"Сделано соло"})]})]})]}),e.jsxs("div",{className:"lg:col-span-5 relative",children:[e.jsx("div",{className:"absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-none"}),e.jsxs("div",{className:"relative border-4 border-zinc-900 bg-zinc-950 p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500",children:[e.jsx("img",{src:"/hero-image.png",alt:"SAASPRENER — практик создания SaaS-сервисов",className:"w-full h-auto object-contain"}),e.jsxs("div",{className:"absolute -bottom-6 -left-6 bg-emerald-500 p-6 shadow-2xl",children:[e.jsxs("p",{className:"font-black text-zinc-950 text-xl flex items-center gap-2 uppercase tracking-tight",children:[e.jsx(E,{className:"text-zinc-950 w-6 h-6 stroke-[3]"})," Практик, а не теоретик"]}),e.jsx("p",{className:"text-sm text-zinc-900 font-bold mt-1 uppercase tracking-wider",children:"Делаю проекты, которые приносят деньги"})]})]})]})]})}),e.jsxs("section",{className:"py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsxs("h2",{className:"text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase",children:["Как одному человеку запускать",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-500",children:"SaaS-сервисы и онлайн-бизнес"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsxs("p",{className:"text-lg text-zinc-400 leading-relaxed",children:[e.jsx("strong",{className:"text-white",children:"SAASPRENER"}),' — это платформа для тех, кто хочет создавать цифровые продукты самостоятельно. Без команды. Без инвесторов. Без бесконечного ожидания "идеального момента".']}),e.jsx("p",{className:"text-zinc-400 leading-relaxed",children:"Здесь ты найдешь знания и практику: как проектировать архитектуру сервисов, как быстро запускать MVP, как использовать AI для ускорения разработки, как монетизировать продукт и как строить бизнес на подписочной модели."})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-zinc-400 leading-relaxed",children:'Сегодня один человек с правильным стеком и AI-инструментами способен делать то, на что раньше нужна была команда из 5-10 специалистов. Это не про "легкие деньги" — это про другую плотность навыков и другую скорость принятия решений.'}),e.jsxs("p",{className:"text-zinc-400 leading-relaxed",children:["Главный принцип: ",e.jsx("strong",{className:"text-emerald-400",children:"практика важнее теории"}),". Все, что здесь есть — проверено на реальных проектах, которые работают и приносят деньги."]})]})]})]}),e.jsxs("section",{className:"py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase",children:"Что ты здесь получишь"}),e.jsx("p",{className:"text-xl text-zinc-400 mb-12 max-w-3xl border-l-2 border-emerald-500 pl-4",children:"Структурированные знания и реальный опыт для запуска собственных SaaS-сервисов"}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map((s,l)=>{const n=s.Icon;return e.jsxs(h,{to:s.link,className:"bg-[#0d0d0d] border border-zinc-800 p-8 hover:border-emerald-500 transition-all duration-300 group",children:[e.jsx("div",{className:"w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-colors",children:e.jsx(n,{className:"w-6 h-6 text-emerald-500"})}),e.jsx("h3",{className:"text-xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-emerald-400 transition-colors",children:s.title}),e.jsx("p",{className:"text-zinc-400 text-sm leading-relaxed",children:s.desc})]},l)})})]}),e.jsxs("section",{id:"about",className:"py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsxs("h2",{className:"text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter uppercase",children:["Почему соло-",e.jsx("br",{}),"разработчик?"]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsx("div",{className:"md:col-span-2 bg-[#0d0d0d] border border-zinc-800 p-10 flex flex-col justify-between hover:border-emerald-500 transition-colors",children:e.jsxs("div",{children:[e.jsx(Be,{className:"w-12 h-12 text-emerald-500 mb-8"}),e.jsx("h3",{className:"text-3xl font-black text-white mb-6 uppercase tracking-tight",children:"Бизнес, а не просто код"}),e.jsx("p",{className:"text-lg text-zinc-400 leading-relaxed",children:"Большинство курсов готовят наемных сотрудников. Я даю навыки для предпринимателей. Ты научишься за выходные собирать рабочий продукт, проверять спрос и брать за это деньги по подписке."})]})}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-10 hover:border-emerald-500 transition-colors",children:[e.jsx(ae,{className:"w-10 h-10 text-emerald-500 mb-6"}),e.jsx("h3",{className:"text-xl font-black text-white mb-4 uppercase tracking-tight",children:"Скорость"}),e.jsx("p",{className:"text-zinc-400",children:"Один человек с AI делает то, на что раньше нужна была команда из 5 человек. Запуск за дни, а не месяцы."})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-10 hover:border-emerald-500 transition-colors",children:[e.jsx(de,{className:"w-10 h-10 text-emerald-500 mb-6"}),e.jsx("h3",{className:"text-xl font-black text-white mb-4 uppercase tracking-tight",children:"Независимость"}),e.jsx("p",{className:"text-zinc-400",children:"Тебе не нужно платить программистам или искать партнеров. Все технические ключи только в твоих руках."})]}),e.jsxs("div",{className:"md:col-span-2 bg-emerald-500 p-10 relative overflow-hidden text-zinc-950",children:[e.jsx("div",{className:"absolute right-0 bottom-0 opacity-10",children:e.jsx(Oe,{className:"w-64 h-64 text-zinc-950"})}),e.jsx("h3",{className:"text-3xl font-black mb-6 relative z-10 uppercase tracking-tight",children:"Слабым здесь не место"}),e.jsx("p",{className:"text-lg font-bold relative z-10 max-w-xl",children:"Это не «волшебная кнопка бабло». Программирование — это сложно. Придется думать, разбираться с ошибками и много пахать. Если ищешь легких денег, этот курс не для тебя."})]})]})]}),e.jsx("section",{className:"py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:e.jsxs("div",{className:"max-w-4xl",children:[e.jsxs("h2",{className:"text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase",children:["Почему сейчас можно запускать",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-500",children:"SaaS в одиночку"})]}),e.jsxs("div",{className:"space-y-6 text-zinc-400 leading-relaxed",children:[e.jsx("p",{className:"text-lg",children:"За последние годы порог входа в создание SaaS-сервисов снизился радикально. Современные фреймворки, облачная инфраструктура, готовые интеграции и AI-инструменты позволяют одному человеку собирать продукты, которые раньше требовали целой команды."}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6 py-8",children:[e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"3-5x"}),e.jsx("p",{className:"text-sm text-zinc-500 uppercase tracking-wider font-bold",children:"Ускорение с AI-инструментами"})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"2-4"}),e.jsx("p",{className:"text-sm text-zinc-500 uppercase tracking-wider font-bold",children:"Недели на запуск MVP"})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"100%"}),e.jsx("p",{className:"text-sm text-zinc-500 uppercase tracking-wider font-bold",children:"Прибыль остается у тебя"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-white",children:"Создание SaaS"})," перестало быть уделом технарей с дипломами. Сегодня предприниматель с правильным подходом может освоить ",e.jsx("strong",{className:"text-white",children:"разработку SaaS"})," за несколько месяцев и начать запускать собственные сервисы. AI становится мультипликатором: он не заменяет мышление, но драматически ускоряет рутинные задачи."]}),e.jsxs("p",{children:[e.jsx("strong",{className:"text-white",children:"IT-бизнес без команды"})," — это не романтика одиночки, а прагматичный выбор. Ты не ждешь, пока дизайнер дорисует макет, пока разработчик закончит таск, пока партнеры согласуют решение. Ты сам двигаешь ",e.jsx("strong",{className:"text-white",children:"запуск цифрового продукта"})," и сам контролируешь результат."]})]})]})}),e.jsxs("section",{id:"portfolio",className:"py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsxs("div",{className:"flex flex-col mb-10 md:mb-16 gap-4",children:[e.jsx("h2",{className:"text-3xl md:text-6xl font-black text-white tracking-tighter uppercase",children:"Мои сервисы"}),e.jsx("p",{className:"text-base md:text-xl text-zinc-400 max-w-2xl border-l-2 border-emerald-500 pl-4",children:"Слова ничего не значат. Вот реальные проекты, которые я создал своими руками. Это сложные системы, которые решают бизнес-задачи."})]}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8",children:F.map((s,l)=>e.jsx(Dt,{project:s,idx:l},l))}),e.jsx("div",{className:"mt-12 text-center",children:e.jsxs(h,{to:"/cases",className:"inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:gap-4 transition-all",children:["Смотреть все кейсы ",e.jsx(w,{className:"w-5 h-5"})]})})]}),e.jsxs("section",{id:"program",className:"py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsxs("div",{className:"mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4",children:"План обучения"}),e.jsx("p",{className:"text-xl text-zinc-400 border-l-2 border-emerald-500 pl-4",children:"Шаг за шагом создаем твой первый прибыльный сервис."})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:a.map((s,l)=>{const n=s.Icon;return e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-8 flex flex-col hover:border-emerald-500 hover:bg-[#111] transition-all duration-300",children:[e.jsx("div",{className:"w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8",children:e.jsx(n,{className:"w-6 h-6 text-emerald-500"})}),e.jsxs("div",{className:"text-emerald-500 font-black text-sm mb-2 opacity-50 tracking-widest",children:["ЭТАП 0",l+1]}),e.jsx("h3",{className:"text-2xl font-black text-white mb-4 tracking-tight uppercase leading-none",children:s.title}),e.jsx("p",{className:"text-zinc-400 leading-relaxed font-medium",children:s.desc})]},l)})})]}),e.jsxs("section",{className:"py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase",children:"Последние статьи"}),e.jsx("p",{className:"text-zinc-400 max-w-xl",children:"Практические материалы про создание SaaS, запуск IT-проектов и монетизацию онлайн-сервисов"})]}),e.jsxs(h,{to:"/blog",className:"flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:gap-3 transition-all",children:["Все статьи ",e.jsx(w,{className:"w-5 h-5"})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:M.slice(0,3).map(s=>e.jsx(q,{article:s,variant:"compact"},s.id))})]}),e.jsx("div",{className:"border-t border-zinc-900",children:e.jsx(xe,{questions:Tt,title:"Частые вопросы"})}),e.jsx(Ct,{})]})}function _({items:a}){W();const t=[{name:"Главная",url:"/"},...a];return e.jsxs(e.Fragment,{children:[e.jsx(z,{type:"breadcrumbs",data:{items:t}}),e.jsx("nav",{"aria-label":"Breadcrumb",className:"py-4",children:e.jsxs("ol",{className:"flex flex-wrap items-center gap-2 text-sm",children:[e.jsx("li",{className:"flex items-center",children:e.jsxs(h,{to:"/",className:"text-zinc-500 hover:text-emerald-400 transition-colors flex items-center gap-1",children:[e.jsx(Qe,{className:"w-4 h-4"}),e.jsx("span",{className:"sr-only md:not-sr-only",children:"Главная"})]})}),a.map((s,l)=>e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Ve,{className:"w-4 h-4 text-zinc-700"}),s.url&&l!==a.length-1?e.jsx(h,{to:s.url,className:"text-zinc-500 hover:text-emerald-400 transition-colors",children:s.name}):e.jsx("span",{className:"text-zinc-300 font-medium",children:s.name})]},l))]})})]})}function Ft(){const[a,t]=x.useState("all"),[s,l]=x.useState(""),n=x.useMemo(()=>M.filter(c=>{const o=a==="all"||c.category===a,r=s===""||c.title.toLowerCase().includes(s.toLowerCase())||c.description.toLowerCase().includes(s.toLowerCase());return o&&r}),[a,s]),i=[{name:"Блог",url:"/blog"}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Блог SAASPRENER — статьи про SaaS, AI и запуск IT-проектов",description:"Практические статьи о создании SaaS-сервисов, использовании AI в разработке, запуске IT-проектов без команды и монетизации онлайн-продуктов.",canonical:"/blog"}),e.jsxs("section",{className:"pt-32 pb-16 px-6 max-w-7xl mx-auto",children:[e.jsx(_,{items:i}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase",children:"Блог"}),e.jsx("p",{className:"text-xl text-zinc-400 max-w-2xl border-l-2 border-emerald-500 pl-6",children:"Практические материалы про создание SaaS-сервисов, AI в разработке, запуск IT-проектов и монетизацию онлайн-продуктов."})]}),e.jsx("div",{className:"mb-8",children:e.jsx("input",{type:"text",placeholder:"Поиск статей...",value:s,onChange:c=>l(c.target.value),className:"w-full md:w-96 bg-[#0d0d0d] border border-zinc-800 px-6 py-4 text-white placeholder-zinc-600 focus:border-emerald-500 focus:outline-none transition-colors"})}),e.jsx("div",{className:"flex flex-wrap gap-3 mb-12",children:Mt.map(c=>e.jsx("button",{onClick:()=>t(c.id),className:`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${a===c.id?"bg-emerald-500 text-zinc-950":"bg-[#0d0d0d] border border-zinc-800 text-zinc-400 hover:border-emerald-500 hover:text-emerald-400"}`,children:c.name},c.id))}),n.length>0?e.jsx("div",{className:"space-y-6",children:n.map(c=>e.jsx(q,{article:c},c.id))}):e.jsx("div",{className:"text-center py-16",children:e.jsx("p",{className:"text-zinc-500 text-lg",children:"Статьи не найдены"})})]}),e.jsxs("section",{className:"py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsx("h2",{className:"text-2xl font-black text-white mb-8 uppercase tracking-tight",children:"Популярные темы"}),e.jsx("div",{className:"flex flex-wrap gap-3",children:Et.map(c=>e.jsxs(h,{to:`/blog?tag=${encodeURIComponent(c)}`,className:"px-4 py-2 bg-[#0d0d0d] border border-zinc-800 text-sm text-zinc-400 hover:border-emerald-500 hover:text-emerald-400 transition-colors",children:["#",c]},c))})]}),e.jsx("section",{className:"py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight",children:"Хочешь создавать свои SaaS-сервисы?"}),e.jsx("p",{className:"text-zinc-400",children:"Записывайся на обучение и начни строить собственные онлайн-продукты"})]}),e.jsx(h,{to:"/#price",className:"flex-shrink-0 bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors",children:"Записаться"})]})})]})}function qt({content:a}){const t=a.trim().split(`
`),s=[];let l=[],n=[];const i=()=>{l.length>0&&(s.push(e.jsx("p",{className:"text-zinc-400 leading-relaxed mb-6",children:o(l.join(" "))},s.length)),l=[])},c=()=>{n.length>0&&(s.push(e.jsx("ul",{className:"list-none space-y-3 mb-8 pl-0",children:n.map((r,m)=>e.jsxs("li",{className:"flex items-start gap-3 text-zinc-400",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 flex-shrink-0 mt-2"}),e.jsx("span",{children:o(r)})]},m))},s.length)),n=[])},o=r=>r.split(/(\*\*[^*]+\*\*)/).map((d,u)=>d.startsWith("**")&&d.endsWith("**")?e.jsx("strong",{className:"text-white font-bold",children:d.slice(2,-2)},u):d);return t.forEach((r,m)=>{const d=r.trim();d.startsWith("## ")?(i(),c(),s.push(e.jsx("h2",{className:"text-2xl md:text-3xl font-black text-white mb-6 mt-12 uppercase tracking-tight",children:d.slice(3)},s.length))):d.startsWith("### ")?(i(),c(),s.push(e.jsx("h3",{className:"text-xl font-black text-white mb-4 mt-8 uppercase tracking-tight",children:d.slice(4)},s.length))):/^\d+\.\s/.test(d)?(i(),n.push(d.replace(/^\d+\.\s/,""))):d.startsWith("- ")?(i(),n.push(d.slice(2))):d===""?(i(),c()):(c(),l.push(d))}),i(),c(),e.jsx(e.Fragment,{children:s})}function Bt(){var o;const{slug:a}=Q(),t=M.find(r=>r.slug===a);if(!t)return e.jsx(J,{to:"/blog",replace:!0});const s=((o=t.relatedArticles)==null?void 0:o.map(r=>M.find(m=>m.id===r)).filter(Boolean))||[],l=r=>{const m={day:"numeric",month:"long",year:"numeric"};return new Date(r).toLocaleDateString("ru-RU",m)},n=[{name:"Блог",url:"/blog"},{name:t.title}],c=(r=>(r.match(/^## .+$/gm)||[]).map(d=>({title:d.replace("## ",""),id:d.replace("## ","").toLowerCase().replace(/\s+/g,"-")})))(t.content);return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:`${t.title} — SAASPRENER`,description:t.description,canonical:`/blog/${t.slug}`,type:"article",image:t.image,article:{date:t.date,tags:t.tags}}),e.jsx(z,{type:"article",data:{title:t.title,description:t.description,image:t.image,date:t.date,url:`/blog/${t.slug}`}}),e.jsxs("section",{className:"pt-32 pb-8 px-6 max-w-4xl mx-auto",children:[e.jsx(_,{items:n}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-6",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest",children:t.category}),e.jsx("span",{className:"text-zinc-500 text-sm",children:l(t.date)}),e.jsxs("span",{className:"flex items-center gap-1 text-zinc-500 text-sm",children:[e.jsx(I,{className:"w-4 h-4"}),t.readTime]})]}),e.jsx("h1",{className:"text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight",children:t.title}),e.jsx("p",{className:"text-xl text-zinc-400 leading-relaxed border-l-2 border-emerald-500 pl-6 mb-8",children:t.description})]}),t.image&&e.jsx("div",{className:"max-w-5xl mx-auto px-6 mb-12",children:e.jsxs("div",{className:"relative overflow-hidden border border-zinc-800",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-64 md:h-96 object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"})]})}),e.jsx("div",{className:"max-w-7xl mx-auto px-6",children:e.jsxs("div",{className:"grid lg:grid-cols-12 gap-12",children:[e.jsx("aside",{className:"lg:col-span-3 hidden lg:block",children:e.jsxs("div",{className:"sticky top-28",children:[c.length>0&&e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6 mb-6",children:[e.jsx("h4",{className:"text-sm font-black text-white uppercase tracking-widest mb-4",children:"Содержание"}),e.jsx("nav",{className:"space-y-2",children:c.map((r,m)=>e.jsx("a",{href:`#${r.id}`,className:"block text-sm text-zinc-500 hover:text-emerald-400 transition-colors py-1",children:r.title},m))})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6",children:[e.jsx("h4",{className:"text-sm font-black text-white uppercase tracking-widest mb-4",children:"Теги"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(r=>e.jsxs(h,{to:`/blog?tag=${encodeURIComponent(r)}`,className:"px-3 py-1 bg-zinc-900 text-xs text-zinc-400 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors",children:["#",r]},r))})]})]})}),e.jsxs("article",{className:"lg:col-span-9",children:[e.jsx("div",{className:"prose prose-invert max-w-none",children:e.jsx(qt,{content:t.content})}),t.content.includes("## Главные выводы")&&e.jsxs("div",{className:"mt-12 bg-emerald-500/10 border border-emerald-500/30 p-8",children:[e.jsx("h3",{className:"text-xl font-black text-emerald-400 mb-4 uppercase",children:"Ключевые мысли"}),e.jsx("p",{className:"text-zinc-400",children:"Сохрани эту статью и возвращайся к ней, когда будешь планировать свой следующий проект."})]}),e.jsxs("div",{className:"mt-12 bg-[#0d0d0d] border border-zinc-800 p-8 md:p-10",children:[e.jsx("h3",{className:"text-2xl font-black text-white mb-4 uppercase tracking-tight",children:"Хочешь создавать свои SaaS-сервисы?"}),e.jsx("p",{className:"text-zinc-400 mb-6",children:"Записывайся на обучение и начни строить собственные онлайн-продукты в группе до 20 человек под руководством практика."}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(h,{to:"/#price",className:"bg-emerald-500 text-zinc-950 px-6 py-3 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors",children:"Записаться на курс"}),e.jsx(h,{to:"/cases",className:"border border-zinc-700 text-white px-6 py-3 font-bold uppercase tracking-widest hover:border-emerald-500 transition-colors",children:"Смотреть кейсы"})]})]}),e.jsx("div",{className:"mt-8 lg:hidden",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(r=>e.jsxs(h,{to:`/blog?tag=${encodeURIComponent(r)}`,className:"px-3 py-1 bg-zinc-900 text-xs text-zinc-400 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-colors",children:["#",r]},r))})}),e.jsx("div",{className:"mt-12 flex justify-between items-center border-t border-zinc-800 pt-8",children:e.jsxs(h,{to:"/blog",className:"flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors",children:[e.jsx(le,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider",children:"Все статьи"})]})})]})]})}),s.length>0&&e.jsxs("section",{className:"py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 mt-16",children:[e.jsx("h2",{className:"text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight",children:"Читайте также"}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(r=>e.jsx(q,{article:r,variant:"compact"},r.id))})]})]})}function Ot(){const a=[{name:"Кейсы",url:"/cases"}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Кейсы SAASPRENER — реальные SaaS-проекты и результаты",description:"Примеры реальных SaaS-сервисов, созданных соло: FIVEADS, SYNAPSE, Emailzavr и другие. Архитектура, технологии, результаты.",canonical:"/cases"}),e.jsxs("section",{className:"pt-32 pb-16 px-6 max-w-7xl mx-auto",children:[e.jsx(_,{items:a}),e.jsxs("div",{className:"mb-12",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase",children:"Кейсы проектов"}),e.jsx("p",{className:"text-xl text-zinc-400 max-w-2xl border-l-2 border-emerald-500 pl-6",children:"Реальные SaaS-сервисы, созданные своими руками. Каждый проект — это рабочий бизнес с платящими клиентами."})]}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-16",children:[e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6 text-center",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"5+"}),e.jsx("p",{className:"text-xs text-zinc-500 uppercase tracking-wider font-bold",children:"Запущенных сервисов"})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6 text-center",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"100%"}),e.jsx("p",{className:"text-xs text-zinc-500 uppercase tracking-wider font-bold",children:"Соло-разработка"})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6 text-center",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"B2B"}),e.jsx("p",{className:"text-xs text-zinc-500 uppercase tracking-wider font-bold",children:"И B2C сегменты"})]}),e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6 text-center",children:[e.jsx("div",{className:"text-4xl font-black text-emerald-500 mb-2",children:"5M+"}),e.jsx("p",{className:"text-xs text-zinc-500 uppercase tracking-wider font-bold",children:"Записей в базах"})]})]}),e.jsx("div",{className:"space-y-8",children:F.map((t,s)=>e.jsx(h,{to:`/cases/${t.slug}`,className:"group block bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300",children:e.jsxs("div",{className:"grid md:grid-cols-12 gap-0",children:[e.jsxs("div",{className:"md:col-span-5 relative overflow-hidden h-64 md:h-auto border-b md:border-b-0 md:border-r border-zinc-800",children:[e.jsx("div",{className:"absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("img",{src:t.image,alt:t.title,loading:"lazy",className:"w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"})]}),e.jsxs("div",{className:"md:col-span-7 p-6 md:p-10 flex flex-col",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-4",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest",children:t.type}),e.jsx("span",{className:"text-zinc-600 text-sm",children:t.year})]}),e.jsx("h2",{className:"text-2xl md:text-4xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-emerald-400 transition-colors",children:t.title}),e.jsx("p",{className:"text-lg text-zinc-500 mb-4",children:t.subtitle}),e.jsx("p",{className:"text-zinc-400 mb-6 flex-grow",children:t.description}),e.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:t.tags.map(l=>e.jsx("span",{className:"px-3 py-1 bg-zinc-900 text-xs font-black uppercase tracking-widest text-zinc-400 border border-zinc-800",children:l},l))}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-black text-zinc-600 uppercase tracking-widest",children:t.stats}),e.jsxs("span",{className:"flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider group-hover:gap-3 transition-all",children:["Подробнее ",e.jsx(w,{className:"w-4 h-4"})]})]})]})]})},t.id))})]}),e.jsx("section",{className:"py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:e.jsx("div",{className:"bg-emerald-500 p-8 md:p-12",children:e.jsxs("div",{className:"max-w-3xl",children:[e.jsx("h3",{className:"text-2xl md:text-4xl font-black text-zinc-950 mb-4 uppercase tracking-tight",children:"Хочешь создавать такие же проекты?"}),e.jsx("p",{className:"text-zinc-900 font-medium mb-8",children:"Записывайся на обучение и научись собирать SaaS-сервисы с нуля. От идеи до первых платящих клиентов."}),e.jsx(h,{to:"/#price",className:"inline-block bg-zinc-950 text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors",children:"Записаться на курс"})]})})})]})}function Vt({content:a}){const t=a.trim().split(`
`),s=[];let l=[],n=[];const i=()=>{l.length>0&&(s.push(e.jsx("p",{className:"text-zinc-400 leading-relaxed mb-6",children:l.join(" ")},s.length)),l=[])},c=()=>{n.length>0&&(s.push(e.jsx("ul",{className:"list-none space-y-3 mb-8 pl-0",children:n.map((o,r)=>e.jsxs("li",{className:"flex items-start gap-3 text-zinc-400",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 flex-shrink-0 mt-2"}),e.jsx("span",{children:o})]},r))},s.length)),n=[])};return t.forEach(o=>{const r=o.trim();if(r.startsWith("### "))i(),c(),s.push(e.jsx("h3",{className:"text-xl font-black text-white mb-4 mt-8 uppercase tracking-tight",children:r.slice(4)},s.length));else if(r.startsWith("- **")){i();const m=r.match(/- \*\*(.+?)\*\*(.+)/);m?n.push(e.jsxs(e.Fragment,{children:[e.jsx("strong",{className:"text-white",children:m[1]}),m[2]]})):n.push(r.slice(2))}else r.startsWith("- ")?(i(),n.push(r.slice(2))):r===""?(i(),c()):(c(),l.push(r))}),i(),c(),e.jsx(e.Fragment,{children:s})}function Ht(){const{slug:a}=Q(),t=F.find(n=>n.slug===a);if(!t)return e.jsx(J,{to:"/cases",replace:!0});const s=F.filter(n=>n.id!==t.id).slice(0,2),l=[{name:"Кейсы",url:"/cases"},{name:t.title}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:`${t.title} — кейс SaaS-проекта | SAASPRENER`,description:t.description,canonical:`/cases/${t.slug}`,image:t.image}),e.jsx(z,{type:"article",data:{title:t.title,description:t.description,image:t.image,date:`${t.year}-01-01`,url:`/cases/${t.slug}`}}),e.jsxs("section",{className:"pt-32 pb-8 px-6 max-w-7xl mx-auto",children:[e.jsx(_,{items:l}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4 mb-6",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-xs font-black text-emerald-400 uppercase tracking-widest",children:t.type}),e.jsx("span",{className:"text-zinc-500 text-sm",children:t.year}),e.jsx("span",{className:"px-3 py-1 bg-zinc-900 border border-zinc-800 text-xs font-black text-zinc-400 uppercase tracking-widest",children:t.status})]}),e.jsx("h1",{className:"text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase",children:t.title}),e.jsx("p",{className:"text-xl text-zinc-500 mb-8",children:t.subtitle}),t.url&&e.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:text-emerald-400 transition-colors",children:["Перейти на сайт ",e.jsx(ee,{className:"w-4 h-4"})]})]}),e.jsx("div",{className:"max-w-7xl mx-auto px-6 mb-12",children:e.jsxs("div",{className:"relative overflow-hidden border border-zinc-800",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-64 md:h-[500px] object-cover object-top"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"}),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-6 md:p-10",children:e.jsx("div",{className:"flex flex-wrap gap-4",children:e.jsx("div",{className:"bg-[#0a0a0a]/90 backdrop-blur-sm border border-zinc-800 px-6 py-4",children:e.jsx("div",{className:"text-2xl font-black text-emerald-500",children:t.stats})})})})]})}),e.jsxs("div",{className:"max-w-4xl mx-auto px-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-12",children:t.tags.map(n=>e.jsx("span",{className:"px-4 py-2 bg-zinc-900 text-sm font-black uppercase tracking-widest text-zinc-400 border border-zinc-800",children:n},n))}),e.jsx("div",{className:"prose prose-invert max-w-none",children:e.jsx(Vt,{content:t.fullDescription})}),e.jsxs("div",{className:"mt-16 bg-[#0d0d0d] border border-zinc-800 p-8 md:p-10",children:[e.jsx("h3",{className:"text-2xl font-black text-white mb-4 uppercase tracking-tight",children:"Хочешь создавать такие проекты?"}),e.jsx("p",{className:"text-zinc-400 mb-6",children:"Записывайся на обучение и научись собирать SaaS-сервисы с нуля в группе до 20 человек под руководством практика."}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(h,{to:"/#price",className:"bg-emerald-500 text-zinc-950 px-6 py-3 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors",children:"Записаться на курс"}),e.jsxs("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"border border-zinc-700 text-white px-6 py-3 font-bold uppercase tracking-widest hover:border-emerald-500 transition-colors flex items-center gap-2",children:["Смотреть проект ",e.jsx(ee,{className:"w-4 h-4"})]})]})]}),e.jsx("div",{className:"mt-12 flex justify-between items-center border-t border-zinc-800 pt-8",children:e.jsxs(h,{to:"/cases",className:"flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-colors",children:[e.jsx(le,{className:"w-4 h-4"}),e.jsx("span",{className:"text-sm font-bold uppercase tracking-wider",children:"Все кейсы"})]})})]}),s.length>0&&e.jsxs("section",{className:"py-16 md:py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900 mt-16",children:[e.jsx("h2",{className:"text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight",children:"Смотрите также"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:s.map(n=>e.jsxs(h,{to:`/cases/${n.slug}`,className:"group bg-[#0d0d0d] border border-zinc-800 hover:border-emerald-500 transition-all duration-300",children:[e.jsxs("div",{className:"relative overflow-hidden h-48 border-b border-zinc-800",children:[e.jsx("div",{className:"absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),e.jsx("img",{src:n.image,alt:n.title,loading:"lazy",className:"w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-emerald-400 transition-colors",children:n.title}),e.jsx("p",{className:"text-zinc-500 text-sm",children:n.subtitle})]})]},n.id))})]})]})}const ne=[{id:1,slug:"saas-razrabotka",title:"Разработка SaaS-сервисов",metaTitle:"Разработка SaaS-сервисов — создание прибыльных онлайн-продуктов",description:"Полное руководство по созданию SaaS-сервисов: от идеи до запуска и монетизации. Архитектура, технологии, бизнес-модели.",heroTitle:"Разработка SaaS-сервисов",heroSubtitle:"Как создавать прибыльные онлайн-продукты: архитектура, технологии, запуск",content:`
## Что такое SaaS-разработка

SaaS (Software as a Service) — это модель создания программных продуктов, которые работают в облаке и предоставляются пользователям по подписке. Разработка SaaS отличается от традиционного софта: здесь важны не только технические навыки, но и понимание бизнес-модели, unit-экономики и retention.

## Почему SaaS — это выгодно

SaaS-модель дает предпринимателю несколько ключевых преимуществ:

- **Рекуррентный доход** — клиенты платят регулярно, а не один раз
- **Масштабируемость** — один продукт может обслуживать тысячи клиентов
- **Низкий барьер входа для клиентов** — подписка дешевле, чем покупка
- **Постоянная связь с пользователем** — возможность улучшать продукт

## Ключевые этапы разработки SaaS

### 1. Валидация идеи
Прежде чем писать код, нужно убедиться, что проблема реальна, а люди готовы за решение платить. Это делается через custdev, лендинги, предзаказы.

### 2. Проектирование архитектуры
Определение технического стека, структуры базы данных, API, системы авторизации и биллинга. На этом этапе закладывается фундамент масштабируемости.

### 3. Разработка MVP
Минимально жизнеспособный продукт — это версия, которая решает одну ключевую проблему. Без лишних функций, но с рабочей ценностью.

### 4. Запуск и монетизация
Подключение платежной системы, выбор ценовой модели (freemium, trial, платный вход), запуск трафика.

### 5. Итерации и рост
На основе обратной связи — улучшение продукта, добавление функций, оптимизация конверсии в оплату.

## Технологии для SaaS-разработки

Современный SaaS-стек обычно включает:

- **Frontend:** React, Vue, Next.js
- **Backend:** Node.js, Python, Go
- **База данных:** PostgreSQL, MongoDB
- **Инфраструктура:** Docker, Kubernetes, облачные провайдеры
- **Платежи:** Stripe, ЮKassa, Robokassa
- **Аналитика:** Mixpanel, Amplitude, собственные решения

## Ошибки в SaaS-разработке

1. **Слишком сложный MVP** — попытка сделать идеальный продукт сразу
2. **Игнорирование бизнес-метрик** — фокус только на коде, не на экономике
3. **Отсутствие обратной связи** — разработка в вакууме без общения с пользователями
4. **Плохая архитектура** — техдолг, который тормозит развитие

## Как SAASPRENER помогает в разработке SaaS

На платформе SAASPRENER ты найдешь:

- Пошаговые руководства по созданию SaaS
- Реальные кейсы запущенных проектов
- Обучение веб-кодингу для предпринимателей
- Архитектурные разборы успешных сервисов
    `,relatedArticles:[1,3,4],relatedHubs:["zapusk-it-proekta","arhitektura-servisov"],keywords:["разработка saas","создание saas","saas сервис","как создать saas","saas разработка"]},{id:2,slug:"zapusk-it-proekta",title:"Запуск IT-проекта",metaTitle:"Запуск IT-проекта с нуля — пошаговое руководство",description:"Как запустить IT-проект без команды и инвесторов. От идеи до первых платящих клиентов.",heroTitle:"Запуск IT-проекта",heroSubtitle:"Как запустить цифровой продукт без команды и инвесторов",content:`
## Что значит запустить IT-проект

Запуск IT-проекта — это не просто написать код и выложить в интернет. Это процесс превращения идеи в работающий бизнес: от валидации концепции до получения первых денег от клиентов.

## Почему многие проекты не запускаются

Большинство IT-проектов умирают на стадии разработки. Причины:

- **Перфекционизм** — бесконечная доработка до "идеала"
- **Отсутствие фокуса** — попытка сделать все и сразу
- **Страх запуска** — боязнь критики и неудачи
- **Нехватка ресурсов** — неправильная оценка времени и денег

## Принципы успешного запуска

### Минимализм
Запускай минимальную версию. Один сценарий, одна ценность, одна точка входа. Все остальное — после подтверждения спроса.

### Скорость
Чем быстрее запуск — тем быстрее обратная связь. Два месяца на MVP — это долго. Две-четыре недели — реально.

### Итеративность
Первая версия будет неидеальной. Это нормально. Улучшения — после запуска, на основе реальных данных.

## Этапы запуска IT-проекта

1. **Определение проблемы** — что болит у людей?
2. **Исследование конкурентов** — как решают сейчас?
3. **Формулировка решения** — как ты решишь лучше?
4. **Создание MVP** — минимально рабочая версия
5. **Тестовый запуск** — первые пользователи
6. **Сбор обратной связи** — что работает, что нет?
7. **Доработка** — фикс критичных проблем
8. **Публичный запуск** — трафик и маркетинг
9. **Монетизация** — подключение платежей

## Ресурсы для соло-запуска

Для запуска IT-проекта одному человеку нужно:

- **Время:** 2-4 часа в день минимум
- **Навыки:** базовое программирование или готовность учиться
- **Деньги:** минимум, в основном на инфраструктуру
- **AI-инструменты:** ускорение в 3-5 раз

## Главная ошибка — не запускать

Лучший запуск — тот, который случился. Не жди идеального момента. Не жди идеального продукта. Запускай, собирай фидбэк, улучшай.
    `,relatedArticles:[1,2,3],relatedHubs:["saas-razrabotka","zarabotok-na-saas"],keywords:["запуск it проекта","запуск стартапа","как запустить проект","запуск онлайн сервиса"]},{id:3,slug:"zarabotok-na-saas",title:"Заработок на SaaS",metaTitle:"Заработок на SaaS — как монетизировать онлайн-сервисы",description:"Модели монетизации SaaS-сервисов: подписка, freemium, enterprise. Реальные цифры и стратегии.",heroTitle:"Заработок на SaaS",heroSubtitle:"Как монетизировать онлайн-сервисы и выйти на стабильный доход",content:`
## Почему SaaS — это прибыльная модель

SaaS отличается от других бизнес-моделей предсказуемостью дохода. Monthly Recurring Revenue (MRR) — ежемесячный повторяющийся доход — позволяет планировать и масштабировать бизнес.

## Модели монетизации SaaS

### Подписка
Классическая модель. Пользователь платит ежемесячно или ежегодно за доступ к сервису. Простая и понятная.

### Freemium
Базовый функционал бесплатно, расширенный — за деньги. Помогает привлечь пользователей, но требует четкого разделения функций.

### Usage-based
Оплата за использование: количество API-вызовов, объем данных, число операций. Справедливо, но сложнее прогнозировать.

### Enterprise
Индивидуальные тарифы для крупных клиентов. Высокий чек, но длинный цикл продажи.

## Экономика SaaS

Ключевые метрики:

- **MRR** — ежемесячный повторяющийся доход
- **ARR** — годовой повторяющийся доход
- **Churn** — отток клиентов
- **LTV** — пожизненная ценность клиента
- **CAC** — стоимость привлечения клиента

Здоровый SaaS: LTV/CAC > 3, Churn < 5% в месяц.

## Сколько реально заработать

Примеры соло-SaaS:

- 100 клиентов × $30/мес = $3,000 MRR
- 500 клиентов × $50/мес = $25,000 MRR
- 1000 клиентов × $20/мес = $20,000 MRR

Это реальные цифры для нишевых сервисов, созданных одним человеком.

## Стратегии увеличения дохода

1. **Upsell** — переводить на более дорогие тарифы
2. **Снижение churn** — удерживать существующих клиентов
3. **Повышение цен** — при росте ценности продукта
4. **Новые функции** — за дополнительную плату
5. **Партнерские программы** — привлечение через партнеров

## Первые деньги vs стабильный доход

Первая продажа — это валидация. Стабильный доход — когда MRR растет месяц к месяцу. Фокус: сначала доказать ценность, потом масштабировать.
    `,relatedArticles:[1,4,6],relatedHubs:["saas-razrabotka","zapusk-it-proekta"],keywords:["заработок на saas","монетизация saas","доход saas","как заработать на сервисе"]},{id:4,slug:"ai-v-razrabotke",title:"AI в разработке",metaTitle:"AI в разработке — как нейросети ускоряют создание продуктов",description:"Использование AI для ускорения разработки: инструменты, практики, реальные кейсы применения.",heroTitle:"AI в разработке",heroSubtitle:"Как нейросети помогают создавать продукты быстрее и дешевле",content:`
## AI как мультипликатор скорости

AI в 2026 году — это не опция, а необходимость. Разработчик без AI-инструментов проигрывает в скорости в 3-5 раз. Для соло-предпринимателя это критично: каждая сэкономленная неделя — это раньше выход на рынок.

## Где AI дает максимум пользы

### Написание кода
GitHub Copilot, Cursor, Claude — пишут boilerplate, предлагают решения, помогают с отладкой.

### Проектирование
ChatGPT/Claude помогают продумать архитектуру, сценарии, API, структуру данных.

### Документация
Автоматическая генерация README, комментариев, пользовательских гайдов.

### Тексты и контент
Копирайтинг для лендингов, email-рассылок, описаний продукта.

### Отладка
Анализ ошибок, объяснение stack trace, поиск решений.

## AI-стек современного разработчика

1. **GitHub Copilot / Cursor** — AI-помощник в IDE
2. **ChatGPT / Claude** — универсальный ассистент
3. **v0.dev / Bolt** — генерация UI-компонентов
4. **Midjourney / DALL-E** — генерация графики
5. **Whisper** — транскрипция голоса

## Как не попасть в ловушку AI

AI усиливает, но не заменяет мышление. Если нет понимания архитектуры, AI будет генерировать хаос быстрее. Ключевое:

- Понимать, что строишь
- Проверять сгенерированный код
- Не слепо копировать решения
- Учиться на ходу

## AI для соло-разработчика

Для одиночки AI особенно ценен:

- Заменяет часть команды
- Снижает когнитивную нагрузку
- Ускоряет рутину
- Помогает в незнакомых областях

Соло-разработчик с AI-стеком = мини-команда из 3-5 человек.
    `,relatedArticles:[5,6,1],relatedHubs:["saas-razrabotka","arhitektura-servisov"],keywords:["ai в разработке","нейросети для программиста","ai для разработки","ai инструменты"]},{id:5,slug:"arhitektura-servisov",title:"Архитектура сервисов",metaTitle:"Архитектура онлайн-сервисов — проектирование SaaS",description:"Как проектировать архитектуру SaaS-сервисов: backend, frontend, база данных, масштабирование.",heroTitle:"Архитектура сервисов",heroSubtitle:"Как проектировать SaaS, который можно развивать без переписывания",content:`
## Что такое архитектура сервиса

Архитектура — это не только техническая схема. Это способ, которым компоненты системы взаимодействуют друг с другом и с пользователем. Хорошая архитектура позволяет развивать продукт без постоянного переписывания.

## Слои SaaS-архитектуры

### Frontend
Клиентская часть, с которой взаимодействует пользователь. React, Vue, Next.js — популярные решения.

### Backend
Серверная логика, API, обработка данных. Node.js, Python, Go — зависит от задач.

### База данных
Хранение данных. PostgreSQL для структурированных данных, MongoDB для документов, Redis для кэша.

### Авторизация
Система входа, роли, права доступа. JWT, OAuth, session-based — варианты подходов.

### Биллинг
Платежи, подписки, тарифы. Stripe, ЮKassa, собственные решения.

### Инфраструктура
Хостинг, деплой, мониторинг. VPS, облака, контейнеры.

## Принципы хорошей архитектуры

1. **Модульность** — компоненты независимы друг от друга
2. **Масштабируемость** — можно добавлять мощности
3. **Простота** — минимум сложности на старте
4. **Документированность** — понятно, как что работает

## Типичные ошибки

- Overengineering на старте
- Монолит без разделения
- Игнорирование безопасности
- Отсутствие логирования
- Жесткие связи между компонентами

## Архитектура для соло-разработчика

Для одиночки важен баланс:

- Достаточно простая для быстрого запуска
- Достаточно гибкая для масштабирования
- С готовыми решениями для типовых задач

Monolith-first: начни с монолита, переходи к микросервисам только при необходимости.
    `,relatedArticles:[4,1,3],relatedHubs:["saas-razrabotka","ai-v-razrabotke"],keywords:["архитектура saas","проектирование сервиса","backend архитектура","архитектура приложения"]},{id:6,slug:"veb-koding-dlya-predprinimateley",title:"Веб-кодинг для предпринимателей",metaTitle:"Веб-кодинг для предпринимателей — программирование для бизнеса",description:"Зачем предпринимателю уметь программировать и как освоить веб-кодинг для создания своих продуктов.",heroTitle:"Веб-кодинг для предпринимателей",heroSubtitle:"Почему навык программирования — главное преимущество в цифровом бизнесе",content:`
## Почему предпринимателю нужен кодинг

В цифровую эпоху предприниматель без технических навыков зависим:

- От программистов — их скорости, качества, лояльности
- От подрядчиков — их расценок и сроков
- От партнеров — их готовности делить контроль

Кодинг дает независимость. Ты сам строишь продукт, сам контролируешь процесс, сам забираешь результат.

## Что значит веб-кодинг

Веб-кодинг — это создание продуктов, работающих в браузере:

- Сайты и веб-приложения
- SaaS-сервисы
- Дашборды и админки
- Лендинги и воронки
- API и интеграции

## С чего начать

### HTML/CSS
Основа любого веб-интерфейса. Структура и стилизация страниц.

### JavaScript
Язык для интерактивности. Обязателен для серьезных продуктов.

### React
Библиотека для создания интерфейсов. Стандарт индустрии.

### Node.js
JavaScript на сервере. Единый язык для frontend и backend.

### PostgreSQL
База данных. Надежное хранение информации.

## Сколько времени нужно

- Базовые навыки: 2-3 месяца
- Уверенная разработка: 6-12 месяцев
- Профессиональный уровень: 2+ года

Но MVP можно делать уже через 2-3 месяца обучения.

## Кодинг + AI = суперсила

Сегодня не нужно знать всё наизусть. AI-помощники:

- Пишут boilerplate код
- Объясняют непонятное
- Помогают с отладкой
- Ускоряют обучение

Порог входа снизился. Предприниматель с AI-стеком за год осваивает то, на что раньше нужно было три.

## Что дает SAASPRENER

На платформе SAASPRENER:

- Обучение с нуля до запуска своего сервиса
- Фокус на бизнес-результат, не на теорию
- Реальные проекты как учебные материалы
- Обучение в группах до 20 человек
    `,relatedArticles:[1,3,6],relatedHubs:["saas-razrabotka","zapusk-it-proekta"],keywords:["веб кодинг","программирование для бизнеса","обучение веб разработке","кодинг с нуля"]}];function Ut({content:a}){const t=a.trim().split(`
`),s=[];let l=[],n=[];const i=()=>{if(l.length>0){const m=l.join(" ").split(/(\*\*[^*]+\*\*)/).map((d,u)=>d.startsWith("**")&&d.endsWith("**")?e.jsx("strong",{className:"text-white font-bold",children:d.slice(2,-2)},u):d);s.push(e.jsx("p",{className:"text-zinc-400 leading-relaxed mb-6",children:m},s.length)),l=[]}},c=()=>{n.length>0&&(s.push(e.jsx("ul",{className:"list-none space-y-3 mb-8 pl-0",children:n.map((o,r)=>e.jsxs("li",{className:"flex items-start gap-3 text-zinc-400",children:[e.jsx("span",{className:"w-2 h-2 bg-emerald-500 flex-shrink-0 mt-2"}),e.jsx("span",{children:o})]},r))},s.length)),n=[])};return t.forEach(o=>{const r=o.trim();if(r.startsWith("## "))i(),c(),s.push(e.jsx("h2",{className:"text-2xl md:text-3xl font-black text-white mb-6 mt-16 uppercase tracking-tight",children:r.slice(3)},s.length));else if(r.startsWith("### "))i(),c(),s.push(e.jsx("h3",{className:"text-xl font-black text-white mb-4 mt-8 uppercase tracking-tight",children:r.slice(4)},s.length));else if(/^\d+\.\s\*\*/.test(r)){i();const m=r.match(/^\d+\.\s\*\*(.+?)\*\*\s*—?\s*(.*)/);m&&n.push(e.jsxs(e.Fragment,{children:[e.jsx("strong",{className:"text-white",children:m[1]})," — ",m[2]]}))}else if(/^\d+\.\s/.test(r))i(),n.push(r.replace(/^\d+\.\s/,""));else if(r.startsWith("- **")){i();const m=r.match(/- \*\*(.+?)\*\*\s*—?\s*(.*)/);m&&n.push(e.jsxs(e.Fragment,{children:[e.jsx("strong",{className:"text-white",children:m[1]})," — ",m[2]]}))}else r.startsWith("- ")?(i(),n.push(r.slice(2))):r===""?(i(),c()):(c(),l.push(r))}),i(),c(),e.jsx(e.Fragment,{children:s})}function Wt(){var o,r,m;const{slug:a}=Q(),t=ne.find(d=>d.slug===a);if(!t)return e.jsx(J,{to:"/",replace:!0});const s=((o=t.relatedArticles)==null?void 0:o.map(d=>M.find(u=>u.id===d)).filter(Boolean))||[],l=((r=t.relatedHubs)==null?void 0:r.map(d=>ne.find(u=>u.slug===d)).filter(Boolean))||[],i=(d=>{switch(d){case"saas-razrabotka":return _t;case"ai-v-razrabotke":return Lt;default:return null}})(t.slug),c=[{name:t.title}];return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:t.metaTitle,description:t.description,canonical:`/hub/${t.slug}`}),e.jsxs("section",{className:"pt-32 pb-16 px-6 max-w-7xl mx-auto",children:[e.jsx(_,{items:c}),e.jsxs("div",{className:"max-w-4xl",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase",children:t.heroTitle}),e.jsx("p",{className:"text-xl text-zinc-400 leading-relaxed border-l-2 border-emerald-500 pl-6",children:t.heroSubtitle})]})]}),e.jsx("section",{className:"px-6 max-w-4xl mx-auto pb-16",children:e.jsx("div",{className:"prose prose-invert max-w-none",children:e.jsx(Ut,{content:t.content})})}),e.jsx("div",{className:"sr-only",children:(m=t.keywords)==null?void 0:m.join(", ")}),i&&e.jsx("div",{className:"border-t border-zinc-900",children:e.jsx(xe,{questions:i,title:"Частые вопросы"})}),s.length>0&&e.jsxs("section",{className:"py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsxs("div",{className:"flex justify-between items-end mb-8",children:[e.jsx("h2",{className:"text-2xl md:text-4xl font-black text-white uppercase tracking-tight",children:"Статьи по теме"}),e.jsxs(h,{to:"/blog",className:"flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider hover:gap-3 transition-all",children:["Все статьи ",e.jsx(w,{className:"w-4 h-4"})]})]}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(d=>e.jsx(q,{article:d,variant:"compact"},d.id))})]}),l.length>0&&e.jsxs("section",{className:"py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:[e.jsx("h2",{className:"text-2xl md:text-4xl font-black text-white mb-8 uppercase tracking-tight",children:"Смежные темы"}),e.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:l.map(d=>e.jsxs(h,{to:`/hub/${d.slug}`,className:"group bg-[#0d0d0d] border border-zinc-800 p-8 hover:border-emerald-500 transition-all duration-300",children:[e.jsx("h3",{className:"text-xl font-black text-white mb-3 uppercase tracking-tight group-hover:text-emerald-400 transition-colors",children:d.title}),e.jsx("p",{className:"text-zinc-500 text-sm mb-4",children:d.description}),e.jsxs("span",{className:"flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all",children:["Читать ",e.jsx(w,{className:"w-4 h-4"})]})]},d.id))})]}),e.jsx("section",{className:"py-16 px-6 max-w-7xl mx-auto border-t border-zinc-900",children:e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight",children:"Готов начать создавать свои сервисы?"}),e.jsx("p",{className:"text-zinc-400",children:"Записывайся на обучение и получи все знания для запуска собственного SaaS-бизнеса"})]}),e.jsx(h,{to:"/#price",className:"flex-shrink-0 bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors",children:"Записаться"})]})})]})}const Qt="https://saasprener.online/api";function Jt({defaultAmount:a=5e3,description:t="Оплата на SAASPRENER",onSuccess:s,onError:l,className:n=""}){const[i,c]=x.useState({name:"",email:"",phone:"",amount:a}),[o,r]=x.useState(!1),[m,d]=x.useState(""),u=b=>{const{name:v,value:f}=b.target;c(ye=>({...ye,[v]:f})),d("")},j=()=>i.name.trim()?!i.email.trim()||!i.email.includes("@")?(d("Введите корректный email"),!1):i.phone.trim()?!i.amount||i.amount<=0?(d("Введите сумму оплаты"),!1):!0:(d("Введите номер телефона"),!1):(d("Введите ваше имя"),!1),N=async b=>{if(b.preventDefault(),!!j()){r(!0),d("");try{const f=await(await fetch(`${Qt}/yookassa/create-payment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:i.name,email:i.email,phone:i.phone,amount:parseFloat(i.amount),description:t})})).json();if(f.success&&f.confirmation_url)localStorage.setItem("sp_pending_payment",f.payment_id),typeof window<"u"&&window.ym&&window.ym(98650651,"reachGoal","payment_started",{amount:i.amount}),s&&s(f),window.location.href=f.confirmation_url;else throw new Error(f.error||"Не удалось создать платеж")}catch(v){console.error("Payment error:",v),d(v.message||"Произошла ошибка. Попробуйте позже."),l&&l(v)}finally{r(!1)}}},S=b=>new Intl.NumberFormat("ru-RU").format(b);return e.jsxs("form",{onSubmit:N,className:`space-y-6 ${n}`,children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2",children:"Ваше имя *"}),e.jsxs("div",{className:"relative",children:[e.jsx(rt,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"}),e.jsx("input",{type:"text",name:"name",value:i.name,onChange:u,placeholder:"Иван Иванов",className:"w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2",children:"Email *"}),e.jsxs("div",{className:"relative",children:[e.jsx(oe,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"}),e.jsx("input",{type:"email",name:"email",value:i.email,onChange:u,placeholder:"email@example.com",className:"w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2",children:"Телефон *"}),e.jsxs("div",{className:"relative",children:[e.jsx(Ye,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"}),e.jsx("input",{type:"tel",name:"phone",value:i.phone,onChange:u,placeholder:"+7 (999) 123-45-67",className:"w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors",required:!0})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-bold text-zinc-400 uppercase tracking-wider mb-2",children:"Сумма оплаты *"}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold",children:"₽"}),e.jsx("input",{type:"number",name:"amount",value:i.amount,onChange:u,min:"1",step:"1",className:"w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 text-white text-xl font-bold placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 transition-colors",required:!0})]})]}),m&&e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 text-red-400",children:[e.jsx(He,{className:"w-5 h-5 flex-shrink-0"}),e.jsx("span",{children:m})]}),e.jsx("button",{type:"submit",disabled:o,className:"w-full flex items-center justify-center gap-3 bg-emerald-500 text-zinc-950 px-8 py-5 font-black uppercase tracking-widest hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:o?e.jsxs(e.Fragment,{children:[e.jsx(H,{className:"w-5 h-5 animate-spin"}),"Создание платежа..."]}):e.jsxs(e.Fragment,{children:[e.jsx(G,{className:"w-5 h-5"}),"Оплатить ",S(i.amount)," ₽"]})}),e.jsxs("p",{className:"text-xs text-zinc-500 text-center",children:["Нажимая кнопку, вы соглашаетесь с условиями оферты.",e.jsx("br",{}),"Оплата через защищенный сервис ЮKassa."]})]})}function Gt(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Оплата — SAASPRENER",description:"Безопасная оплата через ЮKassa",noIndex:!0}),e.jsxs("div",{className:"min-h-screen bg-[#0a0a0a]",children:[e.jsx("div",{className:"border-b border-zinc-800",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-16 text-center",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 mb-6",children:[e.jsx(se,{className:"w-4 h-4 text-emerald-400"}),e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-widest",children:"Безопасная оплата"})]}),e.jsx("h1",{className:"text-4xl md:text-5xl font-black text-white tracking-tighter mb-4",children:"ОПЛАТА"}),e.jsx("p",{className:"text-lg text-zinc-400",children:"Заполните форму и перейдите к оплате"})]})}),e.jsxs("div",{className:"max-w-xl mx-auto px-6 py-16",children:[e.jsx("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-8 mb-8",children:e.jsx(Jt,{defaultAmount:5e3,description:"Оплата услуги на SAASPRENER"})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center text-center p-4 bg-[#0d0d0d] border border-zinc-800",children:[e.jsx(de,{className:"w-8 h-8 text-emerald-500 mb-2"}),e.jsx("span",{className:"text-xs text-zinc-400",children:"SSL защита"})]}),e.jsxs("div",{className:"flex flex-col items-center text-center p-4 bg-[#0d0d0d] border border-zinc-800",children:[e.jsx(G,{className:"w-8 h-8 text-emerald-500 mb-2"}),e.jsx("span",{className:"text-xs text-zinc-400",children:"ЮKassa"})]}),e.jsxs("div",{className:"flex flex-col items-center text-center p-4 bg-[#0d0d0d] border border-zinc-800",children:[e.jsx(se,{className:"w-8 h-8 text-emerald-500 mb-2"}),e.jsx("span",{className:"text-xs text-zinc-400",children:"PCI DSS"})]})]}),e.jsxs("div",{className:"mt-8 p-6 bg-zinc-900/50 border border-zinc-800",children:[e.jsx("h3",{className:"text-sm font-bold text-white uppercase tracking-wider mb-3",children:"Как происходит оплата?"}),e.jsxs("ol",{className:"space-y-2 text-sm text-zinc-400",children:[e.jsxs("li",{className:"flex gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"1."}),'Заполните форму и нажмите "Оплатить"']}),e.jsxs("li",{className:"flex gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"2."}),"Вы перейдете на защищенную страницу ЮKassa"]}),e.jsxs("li",{className:"flex gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"3."}),"Введите данные карты и подтвердите оплату"]}),e.jsxs("li",{className:"flex gap-3",children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"4."}),"Получите подтверждение на email"]})]})]})]})]})]})}const Kt="https://saasprener.online/api",Yt="https://t.me/+l3nPILH3twowNjdi";function Xt(){Pe();const[a,t]=x.useState("checking"),[s,l]=x.useState(null);x.useEffect(()=>{const c=localStorage.getItem("sp_pending_payment");c?n(c):t("success"),typeof window<"u"&&window.ym&&window.ym(98650651,"reachGoal","payment_success"),localStorage.removeItem("sp_pending_payment")},[]);const n=async c=>{try{const r=await(await fetch(`${Kt}/yookassa/payment-status/${c}`)).json();r.status==="paid"?(t("success"),l(r)):r.status==="pending"?(t("pending"),setTimeout(()=>n(c),3e3)):r.status==="canceled"?t("canceled"):t("success")}catch(o){console.error("Error checking payment status:",o),t("success")}},i=c=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0}).format(c);return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Оплата получена — SAASPRENER",description:"Спасибо за оплату! Ваш платеж успешно обработан.",noIndex:!0}),e.jsx("div",{className:"min-h-[80vh] flex items-center justify-center px-6 py-20",children:e.jsxs("div",{className:"max-w-lg w-full text-center",children:[a==="checking"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-zinc-800 flex items-center justify-center",children:e.jsx(H,{className:"w-10 h-10 text-emerald-500 animate-spin"})}),e.jsx("h1",{className:"text-3xl font-black text-white tracking-tighter",children:"Проверяем платеж..."}),e.jsx("p",{className:"text-zinc-400",children:"Пожалуйста, подождите"})]}),a==="pending"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-yellow-500/10 border-2 border-yellow-500/30 flex items-center justify-center",children:e.jsx(I,{className:"w-10 h-10 text-yellow-500"})}),e.jsx("h1",{className:"text-3xl font-black text-white tracking-tighter",children:"Обрабатываем платеж"}),e.jsx("p",{className:"text-zinc-400",children:"Ваш платеж обрабатывается. Это может занять несколько минут."}),e.jsxs("div",{className:"flex items-center justify-center gap-2 text-zinc-500",children:[e.jsx(H,{className:"w-4 h-4 animate-spin"}),e.jsx("span",{className:"text-sm",children:"Автоматическое обновление..."})]})]}),a==="success"&&e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"w-24 h-24 mx-auto rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center",children:e.jsx(E,{className:"w-12 h-12 text-emerald-500"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-4xl md:text-5xl font-black text-white tracking-tighter mb-4",children:"СПАСИБО ЗА ОПЛАТУ!"}),e.jsx("p",{className:"text-lg text-zinc-400",children:"Ваш платеж успешно обработан"})]}),(s==null?void 0:s.amount)&&e.jsxs("div",{className:"bg-[#0d0d0d] border border-zinc-800 p-6",children:[e.jsx("div",{className:"text-3xl font-black text-emerald-500 mb-2",children:i(s.amount)}),e.jsx("div",{className:"text-sm text-zinc-500",children:"Сумма платежа"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-3 p-4 bg-zinc-900 border border-zinc-800",children:[e.jsx(oe,{className:"w-5 h-5 text-emerald-500"}),e.jsx("span",{className:"text-zinc-300",children:"Чек отправлен на вашу почту"})]}),e.jsxs("div",{className:"pt-4 space-y-4",children:[e.jsxs("a",{href:Yt,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-center gap-3 bg-[#0088cc] text-white px-8 py-5 font-black uppercase tracking-widest hover:bg-[#0099dd] transition-colors",children:[e.jsx(Ke,{className:"w-6 h-6"}),"Войти в закрытый чат"]}),e.jsx("p",{className:"text-sm text-zinc-400",children:"Нажмите кнопку выше, чтобы присоединиться к закрытому Telegram-чату"})]}),e.jsx("div",{className:"pt-2",children:e.jsxs(h,{to:"/",className:"inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors",children:[e.jsx(w,{className:"w-4 h-4"}),"На главную"]})}),e.jsxs("p",{className:"text-sm text-zinc-500",children:["Есть вопросы? Напишите нам на"," ",e.jsx("a",{href:"mailto:support@saasprener.online",className:"text-emerald-500 hover:underline",children:"support@saasprener.online"})]})]}),a==="canceled"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"w-20 h-20 mx-auto rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center",children:e.jsx("span",{className:"text-4xl",children:"✕"})}),e.jsx("h1",{className:"text-3xl font-black text-white tracking-tighter",children:"Платеж отменен"}),e.jsx("p",{className:"text-zinc-400",children:"Платеж был отменен. Вы можете попробовать снова."}),e.jsx(h,{to:"/payment",className:"inline-flex items-center gap-3 bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors",children:"Попробовать снова"})]})]})})]})}function Zt(){const{pathname:a,hash:t}=W();return x.useEffect(()=>{t||window.scrollTo(0,0),D()},[a,t]),null}function es(){return e.jsxs("div",{className:"min-h-[60vh] flex flex-col items-center justify-center px-6 text-center",children:[e.jsx("h1",{className:"text-6xl font-black text-white mb-4",children:"404"}),e.jsx("p",{className:"text-xl text-zinc-400 mb-8",children:"Страница не найдена"}),e.jsx("a",{href:"/",className:"bg-emerald-500 text-zinc-950 px-8 py-4 font-black uppercase tracking-widest hover:bg-emerald-400 transition-colors",children:"На главную"})]})}function ts(){return e.jsxs(Re,{children:[e.jsx(Zt,{}),e.jsx(ot,{children:e.jsxs(Ce,{children:[e.jsx(y,{path:"/",element:e.jsx($t,{})}),e.jsx(y,{path:"/blog",element:e.jsx(Ft,{})}),e.jsx(y,{path:"/blog/:slug",element:e.jsx(Bt,{})}),e.jsx(y,{path:"/cases",element:e.jsx(Ot,{})}),e.jsx(y,{path:"/cases/:slug",element:e.jsx(Ht,{})}),e.jsx(y,{path:"/hub/:slug",element:e.jsx(Wt,{})}),e.jsx(y,{path:"/payment",element:e.jsx(Gt,{})}),e.jsx(y,{path:"/payment-success",element:e.jsx(Xt,{})}),e.jsx(y,{path:"*",element:e.jsx(es,{})})]})})]})}Le.createRoot(document.getElementById("root")).render(e.jsx(ze.StrictMode,{children:e.jsx(Ae,{children:e.jsx(ts,{})})}));document.dispatchEvent(new Event("render-event"));
