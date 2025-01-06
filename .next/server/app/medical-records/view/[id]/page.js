(()=>{var e={};e.id=923,e.ids=[923],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},1100:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>d.a,__next_app__:()=>p,pages:()=>o,routeModule:()=>m,tree:()=>c});var i=s(260),a=s(8203),t=s(5155),d=s.n(t),l=s(7292),n={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);s.d(r,n);let c=["",{children:["medical-records",{children:["view",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9139)),"D:\\Practice-2\\new\\src\\app\\medical-records\\view\\[id]\\page.tsx"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1354)),"D:\\Practice-2\\new\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["D:\\Practice-2\\new\\src\\app\\medical-records\\view\\[id]\\page.tsx"],p={require:s,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/medical-records/view/[id]/page",pathname:"/medical-records/view/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4676:(e,r,s)=>{Promise.resolve().then(s.bind(s,9139))},7828:(e,r,s)=>{Promise.resolve().then(s.bind(s,6839))},6839:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>v});var i=s(5512),a=s(8009),t=s(9334),d=s(9400),l=s(4590),n=s(7093),c=s(288),o=s(5607),p=s(5430);function m({id:e}){let r=(0,t.useRouter)(),[s,n]=(0,a.useState)(null),[m,v]=(0,a.useState)(!0),[h,u]=(0,a.useState)(null);return m?(0,i.jsx)(x,{}):h?(0,i.jsx)(c.Fc,{variant:"destructive",children:(0,i.jsx)(c.TN,{children:h})}):s?(0,i.jsxs)("div",{className:"page-container flex flex-col min-h-screen",children:[(0,i.jsxs)(l.Zp,{className:"max-w-[800px] w-full mx-auto bg-white",children:[(0,i.jsxs)("div",{className:"text-center border-b-2 border-gray-300 flex items-center p-4",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/logo1.jpeg",alt:"Hospital Logo",className:"w-24 h-24 mb-2 ml-5"})}),(0,i.jsx)("div",{className:"flex-1",children:(0,i.jsx)("h1",{className:"text-xl font-semibold",children:"Sudheer Hospital And Neuro Center"})})]}),(0,i.jsxs)("div",{className:"text-center font-bold border-b-2 border-gray-300 py-2",children:["PATIENT DETAILS [ ",s.patientId," ]"]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4 p-4 text-sm",children:[(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-2 capitalize",children:[(0,i.jsx)("div",{className:"font-semibold",children:"Patient"}),(0,i.jsxs)("div",{children:[": ",s.patientName]}),(0,i.jsx)("div",{className:"font-semibold",children:"Patient Id"}),(0,i.jsxs)("div",{children:[": ",s.patientId]}),(0,i.jsx)("div",{className:"font-semibold",children:"Age"}),(0,i.jsxs)("div",{children:[": ",s.age]}),(0,i.jsx)("div",{className:"font-semibold",children:"Gender"}),(0,i.jsxs)("div",{children:[": ",s.gender]}),(0,i.jsx)("div",{className:"font-semibold",children:"Reference"}),(0,i.jsxs)("div",{children:[": ",s.reference]}),(0,i.jsx)("div",{className:"font-semibold",children:"Phone"}),(0,i.jsxs)("div",{children:[": ",s.phone]})]}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-2 capitalize",children:[(0,i.jsx)("div",{className:"font-semibold",children:"Reg Date"}),(0,i.jsxs)("div",{children:[": ",(0,o.GP)((0,p.H)(s.regDate),"dd-MM-yyyy")]}),(0,i.jsx)("div",{className:"font-semibold",children:"Weight"}),(0,i.jsxs)("div",{children:[": ",s.weight," kg"]}),(0,i.jsx)("div",{className:"font-semibold",children:"Temperature"}),(0,i.jsxs)("div",{children:[": ",s.temperature," \xb0C"]}),(0,i.jsx)("div",{className:"font-semibold",children:"Pulse"}),(0,i.jsxs)("div",{children:[": ",s.pulse," bpm"]}),(0,i.jsx)("div",{className:"font-semibold",children:"Case Type"}),(0,i.jsxs)("div",{children:[": ",s.caseType]}),(0,i.jsx)("div",{className:"font-semibold",children:"Doctor"}),(0,i.jsxs)("div",{children:[": ",s.doctorName]})]})]}),(0,i.jsxs)("div",{className:"border-t border-gray-300",children:[(0,i.jsxs)("div",{className:"grid grid-cols-3 border-b border-gray-300 ",children:[(0,i.jsx)("div",{className:"p-2 font-semibold",children:"Problem"}),(0,i.jsx)("div",{className:"p-2 font-semibold border-x border-gray-300",children:"Clinical Notes"}),(0,i.jsx)("div",{className:"p-2 font-semibold",children:"Medication"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-3 min-h-[180px] h-[450px] capitalize",children:[(0,i.jsx)("div",{className:"p-2 border-r border-gray-300",children:(0,i.jsx)("p",{className:"whitespace-pre-line",children:s.problem})}),(0,i.jsx)("div",{className:"p-2 border-r border-gray-300",children:(0,i.jsx)("p",{className:" whitespace-pre-line",children:s.clinicalNotes})}),(0,i.jsx)("div",{className:"p-2",children:(0,i.jsx)("p",{className:"whitespace-pre-line",children:s.treatment})})]})]})]}),(0,i.jsxs)("div",{className:"flex justify-center gap-4 my-4 print:hidden",children:[(0,i.jsx)(d.$,{onClick:()=>window.print(),variant:"default",children:"Print Record"}),(0,i.jsx)(d.$,{onClick:()=>r.push("/patients"),variant:"outline",children:"Back to List"})]})]}):null}function x(){return(0,i.jsxs)("div",{className:"max-w-[800px] mx-auto space-y-4",children:[(0,i.jsx)(n.E,{className:"h-24 w-full"}),(0,i.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,i.jsx)("div",{className:"space-y-2",children:[...Array(6)].map((e,r)=>(0,i.jsx)(n.E,{className:"h-4 w-full"},r))}),(0,i.jsx)("div",{className:"space-y-2",children:[...Array(6)].map((e,r)=>(0,i.jsx)(n.E,{className:"h-4 w-full"},r))})]}),(0,i.jsx)(n.E,{className:"h-[400px] w-full"})]})}function v(){let e=(0,t.useParams)();return(0,i.jsx)("div",{className:"container mx-auto py-6",children:(0,i.jsx)(m,{id:e.id})})}},288:(e,r,s)=>{"use strict";s.d(r,{Fc:()=>n,TN:()=>c});var i=s(5512),a=s(8009),t=s(1643),d=s(4195);let l=(0,t.F)("relative w-full rounded-lg border border-zinc-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-zinc-950 dark:border-zinc-800 dark:[&>svg]:text-zinc-50",{variants:{variant:{default:"bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50",destructive:"border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"}},defaultVariants:{variant:"default"}}),n=a.forwardRef(({className:e,variant:r,...s},a)=>(0,i.jsx)("div",{ref:a,role:"alert",className:(0,d.cn)(l({variant:r}),e),...s}));n.displayName="Alert",a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("h5",{ref:s,className:(0,d.cn)("mb-1 font-medium leading-none tracking-tight",e),...r})).displayName="AlertTitle";let c=a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,d.cn)("text-sm [&_p]:leading-relaxed",e),...r}));c.displayName="AlertDescription"},4590:(e,r,s)=>{"use strict";s.d(r,{Wu:()=>c,ZB:()=>n,Zp:()=>d,aR:()=>l});var i=s(5512),a=s(8009),t=s(4195);let d=a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,t.cn)("rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",e),...r}));d.displayName="Card";let l=a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,t.cn)("flex flex-col space-y-1.5 p-6",e),...r}));l.displayName="CardHeader";let n=a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,t.cn)("text-2xl font-semibold leading-none tracking-tight",e),...r}));n.displayName="CardTitle",a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,t.cn)("text-sm text-zinc-500 dark:text-zinc-400",e),...r})).displayName="CardDescription";let c=a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,t.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent",a.forwardRef(({className:e,...r},s)=>(0,i.jsx)("div",{ref:s,className:(0,t.cn)("flex items-center p-6 pt-0",e),...r})).displayName="CardFooter"},7093:(e,r,s)=>{"use strict";s.d(r,{E:()=>t});var i=s(5512),a=s(4195);function t({className:e,...r}){return(0,i.jsx)("div",{className:(0,a.cn)("animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-800",e),...r})}},9139:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>i});let i=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\Practice-2\\\\new\\\\src\\\\app\\\\medical-records\\\\view\\\\[id]\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\Practice-2\\new\\src\\app\\medical-records\\view\\[id]\\page.tsx","default")},440:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>a});var i=s(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var r=require("../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),i=r.X(0,[638,127,77,344,212],()=>s(1100));module.exports=i})();