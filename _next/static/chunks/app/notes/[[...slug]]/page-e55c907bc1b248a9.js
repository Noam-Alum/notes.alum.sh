(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{9338:(e,t,r)=>{Promise.resolve().then(r.bind(r,1861)),Promise.resolve().then(r.bind(r,157)),Promise.resolve().then(r.bind(r,3392)),Promise.resolve().then(r.bind(r,1641)),Promise.resolve().then(r.t.bind(r,7970,23)),Promise.resolve().then(r.t.bind(r,4839,23))},1861:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var i=r(5155),n=r(8867),s=r(3920),a=r(4085),o=r(2115);function l(e){let{content:t}=e,[r,l]=(0,o.useState)(!1);async function f(){await navigator.clipboard.writeText(t),l(!0),setTimeout(()=>{l(!1)},2e3)}return(0,i.jsx)(a.$,{variant:"secondary",className:"border",size:"xs",onClick:f,children:r?(0,i.jsx)(n.A,{className:"w-3 h-3"}):(0,i.jsx)(s.A,{className:"w-3 h-3"})})}},157:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var i=r(5155),n=r(3463),s=r(7396),a=r(2115);function o(e){let{data:t}=e,[r,o]=(0,a.useState)(null),l=(0,a.useRef)(null);return(0,a.useEffect)(()=>{l.current=new IntersectionObserver(e=>{let t=e.find(e=>e.isIntersecting);t&&o(t.target.id)},{root:null,rootMargin:"-20px 0px 0px 0px",threshold:.1});let e=t.map(e=>document.getElementById(e.href.slice(1)));return e.forEach(e=>{e&&l.current&&l.current.observe(e)}),()=>{l.current&&e.forEach(e=>{e&&l.current.unobserve(e)})}},[t]),(0,i.jsx)("div",{className:"flex flex-col gap-2.5 text-sm dark:text-stone-300/85 text-stone-800 ml-0.5",children:t.map(e=>{let{href:t,level:a,text:o}=e;return(0,i.jsx)(s.default,{href:t,className:(0,n.A)({"pl-0":2==a,"pl-4":3==a,"pl-8 ":4==a,"font-medium text-primary":r==t.slice(1)}),children:o},t)})})}},4085:(e,t,r)=>{"use strict";r.d(t,{$:()=>f,r:()=>l});var i=r(5155),n=r(2115),s=r(2317),a=r(652),o=r(9602);let l=(0,a.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),f=n.forwardRef((e,t)=>{let{className:r,variant:n,size:a,asChild:f=!1,...c}=e,d=f?s.DX:"button";return(0,i.jsx)(d,{className:(0,o.cn)(l({variant:n,size:a,className:r})),ref:t,...c})});f.displayName="Button"},3392:(e,t,r)=>{"use strict";r.d(t,{ScrollArea:()=>o});var i=r(5155),n=r(2115),s=r(2341),a=r(9602);let o=n.forwardRef((e,t)=>{let{className:r,children:n,...o}=e;return(0,i.jsxs)(s.bL,{ref:t,className:(0,a.cn)("relative overflow-hidden",r),...o,children:[(0,i.jsx)(s.LM,{className:"h-full w-full rounded-[inherit]",children:n}),(0,i.jsx)(l,{}),(0,i.jsx)(s.OK,{})]})});o.displayName=s.bL.displayName;let l=n.forwardRef((e,t)=>{let{className:r,orientation:n="vertical",...o}=e;return(0,i.jsx)(s.VM,{ref:t,orientation:n,className:(0,a.cn)("flex touch-none select-none transition-colors","vertical"===n&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===n&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...o,children:(0,i.jsx)(s.lr,{className:"relative flex-1 rounded-full bg-border"})})});l.displayName=s.VM.displayName},1641:(e,t,r)=>{"use strict";r.d(t,{Tabs:()=>o,TabsContent:()=>c,TabsList:()=>l,TabsTrigger:()=>f});var i=r(5155),n=r(2115),s=r(8629),a=r(9602);let o=s.bL,l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)(s.B8,{ref:t,className:(0,a.cn)("inline-flex h-10 items-center gap-2 text-muted-foreground font-mono -mb-28 w-full border-b",r),...n})});l.displayName=s.B8.displayName;let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)(s.l9,{ref:t,className:(0,a.cn)("inline-flex items-center justify-center whitespace-nowrap px-1.5 py-[0.58rem] text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary border-b-2 border-transparent data-[state=active]:text-foreground font-code",r),...n})});f.displayName=s.l9.displayName;let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,i.jsx)(s.UC,{ref:t,className:(0,a.cn)("ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",r),...n})});c.displayName=s.UC.displayName},8484:(e,t,r)=>{"use strict";r.d(t,{b:()=>i});let i=[{title:"Hoshen",href:"/Hoshen",noLink:!0,items:[{title:"Routing",href:"/routing",items:[{title:"BGP",href:"/bgp"},{title:"Distance vector VS Link state",href:"/distance-vector-vs-link-state"},{title:"EIGRP",href:"/eigrp"},{title:"OSPF",href:"/OSPF"}]}]},{title:"Rust",href:"/Rust",noLink:!0,items:[{title:"Libraries in Rust",href:"/libraries_in_rust"},{title:"Handling variables",href:"/variables"},{title:"User input",href:"/user-input"},{title:"Adding crates",href:"/adding-crates"}]},{title:"cPanel",href:"/cPanel",noLink:!0,items:[{title:"Administration Tier 3 | WHM Administration (CWA)",href:"/CWA"},{title:"Mail Administration from the command line",href:"/mail"}]},{title:"Harel",href:"/Harel",noLink:!0,items:[{title:"Website",href:"/website",items:[{title:"Accessing the admin panel",href:"/how-to-login"},{title:"Adding posts",href:"/how-to-add-posts"}]}]},{title:"General",href:"/General",noLink:!0,items:[{title:"BIND",href:"/BIND"}]},{title:"JavaScript",href:"/JavaScript",noLink:!0,items:[{title:"Introduction",href:"/Introduction"},{title:"Data types",href:"/Data_types"},{title:"Difference between equal operators",href:"/Difference_between_equal_operators"}]},{title:"JetBackup",href:"/JetBackup",noLink:!0,items:[{title:"Bash API",href:"/Bash_API"},{title:"n8n",href:"/n8n",items:[{title:"MongoDB integration",href:"/MongoDB_integration"}]}]},{title:"JetServer",href:"/JetServer",noLink:!0,items:[{title:"Duplicate",href:"/Duplicate",items:[{title:"Duplicate-cPanel-server-TEMP",href:"/duplicate-cPanel-server-TEMP"}]}]},{title:"Linux",href:"/Linux",noLink:!0,items:[{title:"Boot process",href:"/Boot_process",items:[{title:"Boot loader Grub",href:"/boot_loader_Grub"},{title:"Boot process",href:"/boot_process"}]},{title:"Disks",href:"/Disks",items:[{title:"Disks partitions swap",href:"/disks_partitions_swap"}]},{title:"General",href:"/General",items:[{title:"Hardware_commands",href:"/hardware_commands"},{title:"Linux directories overview",href:"/linux_directories_overview"},{title:"Manage shared libraries",href:"/Manage_shared_libraries"},{title:"New OS",href:"/new_os"}]},{title:"Init systems",href:"/Init_systems",items:[{title:"SysV",href:"/SysV"}]},{title:"Package Managers",href:"/Package_managers",items:[{title:"DNF features",href:"/DNF_features"},{title:"How to create a repo",href:"/How_to_create_a_repo"},{title:"Introduction",href:"/introduction"}]},{title:"SELinux",href:"/SELinux",items:[{title:"Introduction",href:"/introduction"}]},{title:"Shell scripting",href:"/Shell_scripting",items:[{title:"BASH-scripting",href:"/BASH-scripting"},{title:"System variables",href:"/system_variables"},{title:"Handling variables",href:"/Handling_variables"}]}]}];i.map(e=>(function e(t){var r;let i=[];return t.noLink||i.push({title:t.title,href:t.href}),null===(r=t.items)||void 0===r||r.forEach(r=>{let n={...r,href:"".concat(t.href).concat(r.href)};i.push(...e(n))}),i})(e)).flat()},9602:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a,x6:()=>o});var i=r(3463),n=r(9795),s=r(8484);function a(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,i.$)(t))}function o(e){return s.b.map(t=>(function e(t,r,i,n,s){var a;let o=[],l=!1,f="".concat(i).concat(r.href);return!r.noLink&&r.title.toLowerCase().includes(t.toLowerCase())&&(o.push({...r,items:void 0,href:f}),l=!0),(!s||n<s)&&(null===(a=r.items)||void 0===a||a.forEach(i=>{let a=e(t,i,f,n+1,s);!a.length||l||r.noLink||(o.push({...r,items:void 0,href:f}),l=!0),o.push(...a)})),o})(e,t,"",1,0==e.length?2:void 0)).flat()}}},e=>{var t=t=>e(e.s=t);e.O(0,[839,716,434,371,178,441,517,358],()=>t(9338)),_N_E=e.O()}]);