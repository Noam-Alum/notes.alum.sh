"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{7401:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:s="",children:c,iconNode:f,...d}=e;return(0,n.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:r,strokeWidth:a?24*Number(l)/Number(o):l,className:u("lucide",s),...d},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(c)?c:[c]])}),a=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:a,...s}=r;return(0,n.createElement)(l,{ref:i,iconNode:t,className:u("lucide-".concat(o(e)),a),...s})});return r.displayName="".concat(e),r}},8867:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(7401).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},3610:(e,t,r)=>{r.d(t,{m:()=>n});function n(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}},2576:(e,t,r)=>{r.d(t,{N:()=>l});var n=r(2115),o=r(5155),u=r(8068),i=r(2317);function l(e){let t=e+"CollectionProvider",[r,l]=function(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let i=n.createContext(u),l=r.length;function a(t){let{scope:r,children:u,...a}=t,s=r?.[e][l]||i,c=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:c,children:u})}return r=[...r,u],a.displayName=t+"Provider",[a,function(r,o){let a=o?.[e][l]||i,s=n.useContext(a);if(s)return s;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}(t),[a,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:r}=e,u=n.useRef(null),i=n.useRef(new Map).current;return(0,o.jsx)(a,{scope:t,itemMap:i,collectionRef:u,children:r})};c.displayName=t;let f=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,l=s(f,r),a=(0,u.s)(t,l.collectionRef);return(0,o.jsx)(i.DX,{ref:a,children:n})});d.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=n.forwardRef((e,t)=>{let{scope:r,children:l,...a}=e,c=n.useRef(null),f=(0,u.s)(t,c),d=s(m,r);return n.useEffect(()=>(d.itemMap.set(c,{ref:c,...a}),()=>void d.itemMap.delete(c))),(0,o.jsx)(i.DX,{[p]:"",ref:f,children:l})});return v.displayName=m,[{Provider:c,Slot:d,ItemSlot:v},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},l]}},8166:(e,t,r)=>{r.d(t,{A:()=>i,q:()=>u});var n=r(2115),o=r(5155);function u(e,t){let r=n.createContext(t),u=e=>{let{children:t,...u}=e,i=n.useMemo(()=>u,Object.values(u));return(0,o.jsx)(r.Provider,{value:i,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=n.useContext(r);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let r=[],u=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return u.scopeName=e,[function(t,u){let i=n.createContext(u),l=r.length;r=[...r,u];let a=t=>{let{scope:r,children:u,...a}=t,s=r?.[e]?.[l]||i,c=n.useMemo(()=>a,Object.values(a));return(0,o.jsx)(s.Provider,{value:c,children:u})};return a.displayName=t+"Provider",[a,function(r,o){let a=o?.[e]?.[l]||i,s=n.useContext(a);if(s)return s;if(void 0!==u)return u;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(u,...t)]}},4256:(e,t,r)=>{r.d(t,{jH:()=>u});var n=r(2115);r(5155);var o=n.createContext(void 0);function u(e){let t=n.useContext(o);return e||t||"ltr"}},7668:(e,t,r)=>{r.d(t,{B:()=>a});var n,o=r(2115),u=r(6611),i=(n||(n=r.t(o,2)))["useId".toString()]||(()=>void 0),l=0;function a(e){let[t,r]=o.useState(i());return(0,u.N)(()=>{e||r(e=>e??String(l++))},[e]),e||(t?`radix-${t}`:"")}},7028:(e,t,r)=>{r.d(t,{C:()=>i});var n=r(2115),o=r(8068),u=r(6611),i=e=>{let{present:t,children:r}=e,i=function(e){var t,r;let[o,i]=n.useState(),a=n.useRef({}),s=n.useRef(e),c=n.useRef("none"),[f,d]=(t=e?"mounted":"unmounted",r={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},n.useReducer((e,t)=>{let n=r[e][t];return null!=n?n:e},t));return n.useEffect(()=>{let e=l(a.current);c.current="mounted"===f?e:"none"},[f]),(0,u.N)(()=>{let t=a.current,r=s.current;if(r!==e){let n=c.current,o=l(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):r&&n!==o?d("ANIMATION_OUT"):d("UNMOUNT"),s.current=e}},[e,d]),(0,u.N)(()=>{if(o){var e;let t;let r=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,n=e=>{let n=l(a.current).includes(e.animationName);if(e.target===o&&n&&(d("ANIMATION_END"),!s.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=r.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},u=e=>{e.target===o&&(c.current=l(a.current))};return o.addEventListener("animationstart",u),o.addEventListener("animationcancel",n),o.addEventListener("animationend",n),()=>{r.clearTimeout(t),o.removeEventListener("animationstart",u),o.removeEventListener("animationcancel",n),o.removeEventListener("animationend",n)}}d("ANIMATION_END")},[o,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:n.useCallback(e=>{e&&(a.current=getComputedStyle(e)),i(e)},[])}}(t),a="function"==typeof r?r({present:i.isPresent}):n.Children.only(r),s=(0,o.s)(i.ref,function(e){var t,r;let n=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?e.ref:(o=(n=null===(r=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===r?void 0:r.get)&&"isReactWarning"in n&&n.isReactWarning)?e.props.ref:e.props.ref||e.ref}(a));return"function"==typeof r||i.isPresent?n.cloneElement(a,{ref:s}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},3360:(e,t,r)=>{r.d(t,{hO:()=>a,sG:()=>l});var n=r(2115),o=r(7650),u=r(2317),i=r(5155),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=n.forwardRef((e,r)=>{let{asChild:n,...o}=e,l=n?u.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(l,{...o,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function a(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},3088:(e,t,r)=>{r.d(t,{q7:()=>I,bL:()=>S,RG:()=>y});var n=r(2115),o=r(3610),u=r(2576),i=r(8068),l=r(5155),a=r(7668),s=r(3360),c=r(1524),f=r(1488),d=r(4256),m="rovingFocusGroup.onEntryFocus",p={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[N,w,h]=(0,u.N)(v),[g,y]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let u=n.createContext(o),i=r.length;function a(t){let{scope:r,children:o,...a}=t,s=r?.[e][i]||u,c=n.useMemo(()=>a,Object.values(a));return(0,l.jsx)(s.Provider,{value:c,children:o})}return r=[...r,o],a.displayName=t+"Provider",[a,function(r,l){let a=l?.[e][i]||u,s=n.useContext(a);if(s)return s;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(v,[h]),[x,b]=g(v),M=n.forwardRef((e,t)=>(0,l.jsx)(N.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,l.jsx)(N.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,l.jsx)(R,{...e,ref:t})})}));M.displayName=v;var R=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:u,loop:a=!1,dir:v,currentTabStopId:N,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:g,onEntryFocus:y,preventScrollOnEntryFocus:b=!1,...M}=e,R=n.useRef(null),C=(0,i.s)(t,R),E=(0,d.jH)(v),[A=null,S]=(0,f.i)({prop:N,defaultProp:h,onChange:g}),[I,O]=n.useState(!1),T=(0,c.c)(y),j=w(r),P=n.useRef(!1),[k,$]=n.useState(0);return n.useEffect(()=>{let e=R.current;if(e)return e.addEventListener(m,T),()=>e.removeEventListener(m,T)},[T]),(0,l.jsx)(x,{scope:r,orientation:u,dir:E,loop:a,currentTabStopId:A,onItemFocus:n.useCallback(e=>S(e),[S]),onItemShiftTab:n.useCallback(()=>O(!0),[]),onFocusableItemAdd:n.useCallback(()=>$(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>$(e=>e-1),[]),children:(0,l.jsx)(s.sG.div,{tabIndex:I||0===k?-1:0,"data-orientation":u,...M,ref:C,style:{outline:"none",...e.style},onMouseDown:(0,o.m)(e.onMouseDown,()=>{P.current=!0}),onFocus:(0,o.m)(e.onFocus,e=>{let t=!P.current;if(e.target===e.currentTarget&&t&&!I){let t=new CustomEvent(m,p);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=j().filter(e=>e.focusable);_([e.find(e=>e.active),e.find(e=>e.id===A),...e].filter(Boolean).map(e=>e.ref.current),b)}}P.current=!1}),onBlur:(0,o.m)(e.onBlur,()=>O(!1))})})}),C="RovingFocusGroupItem",E=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:u=!0,active:i=!1,tabStopId:c,...f}=e,d=(0,a.B)(),m=c||d,p=b(C,r),v=p.currentTabStopId===m,h=w(r),{onFocusableItemAdd:g,onFocusableItemRemove:y}=p;return n.useEffect(()=>{if(u)return g(),()=>y()},[u,g,y]),(0,l.jsx)(N.ItemSlot,{scope:r,id:m,focusable:u,active:i,children:(0,l.jsx)(s.sG.span,{tabIndex:v?0:-1,"data-orientation":p.orientation,...f,ref:t,onMouseDown:(0,o.m)(e.onMouseDown,e=>{u?p.onItemFocus(m):e.preventDefault()}),onFocus:(0,o.m)(e.onFocus,()=>p.onItemFocus(m)),onKeyDown:(0,o.m)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return A[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=p.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>_(r))}})})})});E.displayName=C;var A={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var S=M,I=E},1524:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(2115);function o(e){let t=n.useRef(e);return n.useEffect(()=>{t.current=e}),n.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,r)=>{r.d(t,{i:()=>u});var n=r(2115),o=r(1524);function u({prop:e,defaultProp:t,onChange:r=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let r=n.useState(e),[u]=r,i=n.useRef(u),l=(0,o.c)(t);return n.useEffect(()=>{i.current!==u&&(l(u),i.current=u)},[u,i,l]),r}({defaultProp:t,onChange:r}),l=void 0!==e,a=l?e:u,s=(0,o.c)(r);return[a,n.useCallback(t=>{if(l){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else i(t)},[l,e,i,s])]}},6611:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(2115),o=globalThis?.document?n.useLayoutEffect:()=>{}}}]);