"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[248],{767:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9930:(e,t,r)=>{r.d(t,{Kq:()=>B,LM:()=>J,VY:()=>ee,bL:()=>Q,bm:()=>er,hE:()=>$,rc:()=>et});var n=r(2115),o=r(7650),a=r(3610),i=r(8068),s=r(9741),l=r(8166),d=r(9674),u=r(7323),c=r(7028),p=r(3360),v=r(1524),f=r(1488),w=r(6611),m=r(3543),y=r(5155),E="ToastProvider",[x,h,T]=(0,s.N)("Toast"),[g,b]=(0,l.A)("Toast",[T]),[C,P]=g(E),R=e=>{let{__scopeToast:t,label:r="Notification",duration:o=5e3,swipeDirection:a="right",swipeThreshold:i=50,children:s}=e,[l,d]=n.useState(null),[u,c]=n.useState(0),p=n.useRef(!1),v=n.useRef(!1);return r.trim()||console.error("Invalid prop `label` supplied to `".concat(E,"`. Expected non-empty `string`.")),(0,y.jsx)(x.Provider,{scope:t,children:(0,y.jsx)(C,{scope:t,label:r,duration:o,swipeDirection:a,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:d,onToastAdd:n.useCallback(()=>c(e=>e+1),[]),onToastRemove:n.useCallback(()=>c(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:v,children:s})})};R.displayName=E;var L="ToastViewport",N=["F8"],j="toast.viewportPause",k="toast.viewportResume",D=n.forwardRef((e,t)=>{let{__scopeToast:r,hotkey:o=N,label:a="Notifications ({hotkey})",...s}=e,l=P(L,r),u=h(r),c=n.useRef(null),v=n.useRef(null),f=n.useRef(null),w=n.useRef(null),m=(0,i.s)(t,w,l.onViewportChange),E=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),T=l.toastCount>0;n.useEffect(()=>{let e=e=>{var t;0!==o.length&&o.every(t=>e[t]||e.code===t)&&(null===(t=w.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[o]),n.useEffect(()=>{let e=c.current,t=w.current;if(T&&e&&t){let r=()=>{if(!l.isClosePausedRef.current){let e=new CustomEvent(j);t.dispatchEvent(e),l.isClosePausedRef.current=!0}},n=()=>{if(l.isClosePausedRef.current){let e=new CustomEvent(k);t.dispatchEvent(e),l.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},a=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[T,l.isClosePausedRef]);let g=n.useCallback(e=>{let{tabbingDirection:t}=e,r=u().map(e=>{let r=e.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===t?n:n.reverse()});return("forwards"===t?r.reverse():r).flat()},[u]);return n.useEffect(()=>{let e=w.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,a;let r=document.activeElement,i=t.shiftKey;if(t.target===e&&i){null===(n=v.current)||void 0===n||n.focus();return}let s=g({tabbingDirection:i?"backwards":"forwards"}),l=s.findIndex(e=>e===r);z(s.slice(l+1))?t.preventDefault():i?null===(o=v.current)||void 0===o||o.focus():null===(a=f.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[u,g]),(0,y.jsxs)(d.lg,{ref:c,role:"region","aria-label":a.replace("{hotkey}",E),tabIndex:-1,style:{pointerEvents:T?void 0:"none"},children:[T&&(0,y.jsx)(S,{ref:v,onFocusFromOutsideViewport:()=>{z(g({tabbingDirection:"forwards"}))}}),(0,y.jsx)(x.Slot,{scope:r,children:(0,y.jsx)(p.sG.ol,{tabIndex:-1,...s,ref:m})}),T&&(0,y.jsx)(S,{ref:f,onFocusFromOutsideViewport:()=>{z(g({tabbingDirection:"backwards"}))}})]})});D.displayName=L;var F="ToastFocusProxy",S=n.forwardRef((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...o}=e,a=P(F,r);return(0,y.jsx)(m.s,{"aria-hidden":!0,tabIndex:0,...o,ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;(null===(t=a.viewport)||void 0===t?void 0:t.contains(r))||n()}})});S.displayName=F;var A="Toast",I=n.forwardRef((e,t)=>{let{forceMount:r,open:n,defaultOpen:o,onOpenChange:i,...s}=e,[l=!0,d]=(0,f.i)({prop:n,defaultProp:o,onChange:i});return(0,y.jsx)(c.C,{present:r||l,children:(0,y.jsx)(_,{open:l,...s,ref:t,onClose:()=>d(!1),onPause:(0,v.c)(e.onPause),onResume:(0,v.c)(e.onResume),onSwipeStart:(0,a.m)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,a.m)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(r,"px"))}),onSwipeCancel:(0,a.m)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,a.m)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(r,"px")),d(!1)})})})});I.displayName=A;var[M,K]=g(A,{onClose(){}}),_=n.forwardRef((e,t)=>{let{__scopeToast:r,type:s="foreground",duration:l,open:u,onClose:c,onEscapeKeyDown:f,onPause:w,onResume:m,onSwipeStart:E,onSwipeMove:h,onSwipeCancel:T,onSwipeEnd:g,...b}=e,C=P(A,r),[R,L]=n.useState(null),N=(0,i.s)(t,e=>L(e)),D=n.useRef(null),F=n.useRef(null),S=l||C.duration,I=n.useRef(0),K=n.useRef(S),_=n.useRef(0),{onToastAdd:V,onToastRemove:O}=C,X=(0,v.c)(()=>{var e;(null==R?void 0:R.contains(document.activeElement))&&(null===(e=C.viewport)||void 0===e||e.focus()),c()}),q=n.useCallback(e=>{e&&e!==1/0&&(window.clearTimeout(_.current),I.current=new Date().getTime(),_.current=window.setTimeout(X,e))},[X]);n.useEffect(()=>{let e=C.viewport;if(e){let t=()=>{q(K.current),null==m||m()},r=()=>{let e=new Date().getTime()-I.current;K.current=K.current-e,window.clearTimeout(_.current),null==w||w()};return e.addEventListener(j,r),e.addEventListener(k,t),()=>{e.removeEventListener(j,r),e.removeEventListener(k,t)}}},[C.viewport,S,w,m,q]),n.useEffect(()=>{u&&!C.isClosePausedRef.current&&q(S)},[u,S,C.isClosePausedRef,q]),n.useEffect(()=>(V(),()=>O()),[V,O]);let H=n.useMemo(()=>R?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(R):null,[R]);return C.viewport?(0,y.jsxs)(y.Fragment,{children:[H&&(0,y.jsx)(G,{__scopeToast:r,role:"status","aria-live":"foreground"===s?"assertive":"polite","aria-atomic":!0,children:H}),(0,y.jsx)(M,{scope:r,onClose:X,children:o.createPortal((0,y.jsx)(x.ItemSlot,{scope:r,children:(0,y.jsx)(d.bL,{asChild:!0,onEscapeKeyDown:(0,a.m)(f,()=>{C.isFocusedToastEscapeKeyDownRef.current||X(),C.isFocusedToastEscapeKeyDownRef.current=!1}),children:(0,y.jsx)(p.sG.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":C.swipeDirection,...b,ref:N,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,a.m)(e.onKeyDown,e=>{"Escape"!==e.key||(null==f||f(e.nativeEvent),e.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,X()))}),onPointerDown:(0,a.m)(e.onPointerDown,e=>{0===e.button&&(D.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,a.m)(e.onPointerMove,e=>{if(!D.current)return;let t=e.clientX-D.current.x,r=e.clientY-D.current.y,n=!!F.current,o=["left","right"].includes(C.swipeDirection),a=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,i=o?a(0,t):0,s=o?0:a(0,r),l="touch"===e.pointerType?10:2,d={x:i,y:s},u={originalEvent:e,delta:d};n?(F.current=d,Y("toast.swipeMove",h,u,{discrete:!1})):Z(d,C.swipeDirection,l)?(F.current=d,Y("toast.swipeStart",E,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(D.current=null)}),onPointerUp:(0,a.m)(e.onPointerUp,e=>{let t=F.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),F.current=null,D.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};Z(t,C.swipeDirection,C.swipeThreshold)?Y("toast.swipeEnd",g,n,{discrete:!0}):Y("toast.swipeCancel",T,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})})}),C.viewport)})]}):null}),G=e=>{let{__scopeToast:t,children:r,...o}=e,a=P(A,t),[i,s]=n.useState(!1),[l,d]=n.useState(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,v.c)(e);(0,w.N)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),n.useEffect(()=>{let e=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,y.jsx)(u.Z,{asChild:!0,children:(0,y.jsx)(m.s,{...o,children:i&&(0,y.jsxs)(y.Fragment,{children:[a.label," ",r]})})})},V=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,y.jsx)(p.sG.div,{...n,ref:t})});V.displayName="ToastTitle";var O=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e;return(0,y.jsx)(p.sG.div,{...n,ref:t})});O.displayName="ToastDescription";var X="ToastAction",q=n.forwardRef((e,t)=>{let{altText:r,...n}=e;return r.trim()?(0,y.jsx)(W,{altText:r,asChild:!0,children:(0,y.jsx)(U,{...n,ref:t})}):(console.error("Invalid prop `altText` supplied to `".concat(X,"`. Expected non-empty `string`.")),null)});q.displayName=X;var H="ToastClose",U=n.forwardRef((e,t)=>{let{__scopeToast:r,...n}=e,o=K(H,r);return(0,y.jsx)(W,{asChild:!0,children:(0,y.jsx)(p.sG.button,{type:"button",...n,ref:t,onClick:(0,a.m)(e.onClick,o.onClose)})})});U.displayName=H;var W=n.forwardRef((e,t)=>{let{__scopeToast:r,altText:n,...o}=e;return(0,y.jsx)(p.sG.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0,...o,ref:t})});function Y(e,t,r,n){let{discrete:o}=n,a=r.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&a.addEventListener(e,t,{once:!0}),o?(0,p.hO)(a,i):a.dispatchEvent(i)}var Z=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Math.abs(e.x),o=Math.abs(e.y),a=n>o;return"left"===t||"right"===t?a&&n>r:!a&&o>r};function z(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}var B=R,J=D,Q=I,$=V,ee=O,et=q,er=U},3543:(e,t,r)=>{r.d(t,{b:()=>s,s:()=>i});var n=r(2115),o=r(3360),a=r(5155),i=n.forwardRef((e,t)=>(0,a.jsx)(o.sG.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden";var s=i}}]);