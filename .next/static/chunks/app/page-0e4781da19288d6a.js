(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2815:(e,t,r)=>{Promise.resolve().then(r.bind(r,9425))},7401:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var a=r(2115);let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let d=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:s=24,strokeWidth:d=2,absoluteStrokeWidth:c,className:i="",children:o,iconNode:u,...x}=e;return(0,a.createElement)("svg",{ref:t,...l,width:s,height:s,stroke:r,strokeWidth:c?24*Number(d)/Number(s):d,className:n("lucide",i),...x},[...u.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(o)?o:[o]])}),c=(e,t)=>{let r=(0,a.forwardRef)((r,l)=>{let{className:c,...i}=r;return(0,a.createElement)(d,{ref:l,iconNode:t,className:n("lucide-".concat(s(e)),c),...i})});return r.displayName="".concat(e),r}},9425:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(5155),s=r(2115),n=r(7401);(0,n.A)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]),(0,n.A)("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);let l=(0,n.A)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);(0,n.A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),(0,n.A)("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);let d=(0,n.A)("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);var c=r(2651),i=r(9749);function o(){let[e,t]=s.useState({pcount:"0"});async function r(){await c.A.get("/api/stats").then(e=>{t(e.data)}).catch(e=>{console.log(e)})}return s.useEffect(()=>{r()},[]),(0,a.jsxs)("div",{className:"space-y-6 p-4",children:[(0,a.jsxs)("div",{className:"grid gap-8 p-5 md:grid-cols-2 lg:grid-cols-4",children:[(0,a.jsx)(u,{title:"Patients",value:null==e?void 0:e.pcount,icon:l,trend:"up",trendValue:"5.25%"}),(0,a.jsx)(u,{title:"Reference",value:"4",icon:d,trend:"up",trendValue:"2.5%"})]}),(0,a.jsx)("div",{className:"grid gap-4 md:grid-cols-2"})]})}function u(e){let{title:t,value:r,icon:s,trend:n,trendValue:l}=e;return(0,a.jsxs)(i.Zp,{children:[(0,a.jsxs)(i.aR,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,a.jsx)(i.ZB,{className:"text-sm font-medium",children:t}),(0,a.jsx)(s,{className:"h-4 w-4 text-muted-foreground"})]}),(0,a.jsxs)(i.Wu,{children:[(0,a.jsx)("div",{className:"text-2xl font-bold",children:r}),(0,a.jsx)("p",{className:"text-xs text-muted-foreground"})]})]})}},9749:(e,t,r)=>{"use strict";r.d(t,{Wu:()=>i,ZB:()=>c,Zp:()=>l,aR:()=>d});var a=r(5155),s=r(2115),n=r(1567);let l=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",r),...s})});l.displayName="Card";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",r),...s})});d.displayName="CardHeader";let c=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",r),...s})});c.displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("text-sm text-zinc-500 dark:text-zinc-400",r),...s})}).displayName="CardDescription";let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",r),...s})});i.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter"},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var a=r(3463),s=r(9795);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[181,651,441,517,358],()=>t(2815)),_N_E=e.O()}]);