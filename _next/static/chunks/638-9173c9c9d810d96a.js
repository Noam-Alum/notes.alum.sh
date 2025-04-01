"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{8447:(e,t,a)=>{a.d(t,{default:()=>i});var s=a(5155),r=a(9602),l=a(7396),n=a(6046);function i(e){let{absolute:t,className:a="",activeClassName:i="",disabled:o,children:d,...c}=e,f=(0,n.usePathname)(),m=t?c.href.toString().split("/")[1]==f.split("/")[1]:f===c.href;return(c.href.toString().includes("http")&&(m=!1),o)?(0,s.jsx)("div",{className:(0,r.cn)(a,"cursor-not-allowed"),children:d}):(0,s.jsx)(l.default,{className:(0,r.cn)(a,m&&i),...c,children:d})}},17:(e,t,a)=>{a.d(t,{default:()=>g});var s=a(5155),r=a(8484),l=a(8447),n=a(8369);let i=n.bL,o=n.R6,d=n.Ke;var c=a(9602),f=a(6870),m=a(6967),u=a(1719),h=a(2115),p=a(6046);function x(e){let{title:t,href:a,items:r,noLink:n,level:g,isSheet:b}=e,v=(0,p.usePathname)(),[y,N]=(0,h.useState)(0==g);(0,h.useEffect)(()=>{(v==a||v.includes(a))&&N(!0)},[a,v]);let w=(0,s.jsx)(l.default,{activeClassName:"text-primary font-medium",href:a,children:t}),j=n?(0,s.jsx)("h4",{className:"font-medium sm:text-sm text-primary",children:t}):b?(0,s.jsx)(f.SheetClose,{asChild:!0,children:w}):w;return r?(0,s.jsx)("div",{className:"flex flex-col gap-1 w-full",children:(0,s.jsxs)(i,{open:y,onOpenChange:N,children:[(0,s.jsx)(o,{className:"w-full pr-5",children:(0,s.jsxs)("div",{className:"flex items-center justify-between cursor-pointer w-full",children:[j,(0,s.jsx)("span",{children:y?(0,s.jsx)(u.A,{className:"h-[0.9rem] w-[0.9rem]"}):(0,s.jsx)(m.A,{className:"h-[0.9rem] w-[0.9rem]"})})]})}),(0,s.jsx)(d,{children:(0,s.jsx)("div",{className:(0,c.cn)("flex flex-col items-start sm:text-sm dark:text-stone-300/85 text-stone-800 ml-0.5 mt-2.5 gap-3",g>0&&"pl-4 border-l ml-1.5"),children:null==r?void 0:r.map(e=>{let t={...e,href:"".concat(a+e.href),level:g+1,isSheet:b};return(0,s.jsx)(x,{...t},t.href)})})})]})}):(0,s.jsx)("div",{className:"flex flex-col",children:j})}function g(e){let{isSheet:t=!1}=e;return(0,p.usePathname)().startsWith("/notes")?(0,s.jsx)("div",{className:"flex flex-col gap-3.5 mt-5 pr-2 pb-6",children:r.b.map((e,a)=>{let r={...e,href:"/notes".concat(e.href),level:0,isSheet:t};return(0,s.jsx)(x,{...r},e.title+a)})}):null}},1623:(e,t,a)=>{a.d(t,{default:()=>u});var s=a(5155),r=a(853),l=a(8218),n=a(6659),i=a(2115),o=a(9602);let d=i.forwardRef((e,t)=>{let{className:a,type:r,...l}=e;return(0,s.jsx)("input",{type:r,className:(0,o.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...l})});d.displayName="Input";var c=a(7837),f=a(8447),m=a(3392);function u(){let[e,t]=(0,i.useState)(""),[a,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),u(!0))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]);let p=(0,i.useMemo)(()=>(0,o.x6)(e.trim()),[e]);return(0,s.jsx)("div",{children:(0,s.jsxs)(c.lG,{open:a,onOpenChange:e=>{e||t(""),u(e)},children:[(0,s.jsx)(c.zM,{asChild:!0,children:(0,s.jsxs)("div",{className:"relative flex-1 max-w-md cursor-pointer",children:[(0,s.jsx)(r.A,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400"}),(0,s.jsx)(d,{className:"md:w-full rounded-md dark:bg-background/95 bg-background border h-9 pl-10 pr-0 sm:pr-7 text-sm shadow-sm overflow-ellipsis",placeholder:"Now what?",type:"search"}),(0,s.jsxs)("div",{className:"sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-900 bg-stone-200/65 p-1 rounded-sm",children:[(0,s.jsx)(l.A,{className:"w-3 h-3"}),(0,s.jsx)("span",{children:"k"})]})]})}),(0,s.jsxs)(c.Cf,{className:"p-0 max-w-[650px] sm:top-[38%] top-[45%] !rounded-md",children:[(0,s.jsx)(c.DialogTitle,{className:"sr-only",children:"Search"}),(0,s.jsx)(c.c7,{children:(0,s.jsx)("input",{value:e,onChange:e=>t(e.target.value),placeholder:"Why can't I ever find my keys? I swear they’re hiding in a secret society of lost things.",autoFocus:!0,className:"h-14 px-6 bg-transparent border-b text-[14px] outline-none"})}),0==p.length&&e&&(0,s.jsxs)("p",{className:"text-muted-foreground mx-auto mt-2 text-sm",children:["Can't find,"," ",(0,s.jsx)("span",{className:"text-primary",children:'"'.concat(e,'"')})," ","ask ChatGPT or sm \uD83D\uDE44"]}),(0,s.jsx)(m.ScrollArea,{className:"max-h-[400px] overflow-y-auto",children:(0,s.jsx)("div",{className:"flex flex-col items-start overflow-y-auto sm:px-2 px-1 pb-4",children:p.map(e=>{let t=e.href.split("/").slice(1).length-1,a=h[t];return(0,s.jsx)(c.HM,{asChild:!0,children:(0,s.jsx)(f.default,{className:(0,o.cn)("dark:hover:bg-stone-900 hover:bg-stone-100 w-full px-3 rounded-sm text-sm flex items-center gap-2.5",a),href:"/notes".concat(e.href),children:(0,s.jsxs)("div",{className:(0,o.cn)("flex items-center w-fit h-full py-3 gap-1.5 px-2",t>1&&"border-l pl-4"),children:[(0,s.jsx)(n.A,{className:"h-[1.1rem] w-[1.1rem] mr-1"})," ",e.title]})})},e.href)})})})]})]})})}let h={1:"pl-2",2:"pl-4",3:"pl-10"}},9124:(e,t,a)=>{a.d(t,{ModeToggle:()=>b});var s=a(5155),r=a(2115),l=a(7725),n=a(2104),i=a(7113),o=a(4085),d=a(8813),c=a(6967),f=a(8867),m=a(3565),u=a(9602);let h=d.bL,p=d.l9;d.YJ,d.ZL,d.Pb,d.z6,r.forwardRef((e,t)=>{let{className:a,inset:r,children:l,...n}=e;return(0,s.jsxs)(d.ZP,{ref:t,className:(0,u.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",a),...n,children:[l,(0,s.jsx)(c.A,{className:"ml-auto h-4 w-4"})]})}).displayName=d.ZP.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(d.G5,{ref:t,className:(0,u.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})}).displayName=d.G5.displayName;let x=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...l}=e;return(0,s.jsx)(d.ZL,{children:(0,s.jsx)(d.UC,{ref:t,sideOffset:r,className:(0,u.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...l})})});x.displayName=d.UC.displayName;let g=r.forwardRef((e,t)=>{let{className:a,inset:r,...l}=e;return(0,s.jsx)(d.q7,{ref:t,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",a),...l})});function b(){let{setTheme:e}=(0,i.D)();return(0,s.jsxs)(h,{children:[(0,s.jsx)(p,{asChild:!0,children:(0,s.jsxs)(o.$,{variant:"ghost",size:"icon",children:[(0,s.jsx)(l.A,{className:"h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(n.A,{className:"absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,s.jsxs)(x,{align:"end",children:[(0,s.jsx)(g,{onClick:()=>e("light"),children:"Just use dark. (light)"}),(0,s.jsx)(g,{onClick:()=>e("dark"),children:"Dark"}),(0,s.jsx)(g,{onClick:()=>e("system"),children:"Hopefuly you use dark. (system)"})]})]})}g.displayName=d.q7.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,checked:l,...n}=e;return(0,s.jsxs)(d.H_,{ref:t,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:l,...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.VF,{children:(0,s.jsx)(f.A,{className:"h-4 w-4"})})}),r]})}).displayName=d.H_.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(d.hN,{ref:t,className:(0,u.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...l,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(d.VF,{children:(0,s.jsx)(m.A,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=d.hN.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...l}=e;return(0,s.jsx)(d.JU,{ref:t,className:(0,u.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...l})}).displayName=d.JU.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(d.wv,{ref:t,className:(0,u.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=d.wv.displayName},4085:(e,t,a)=>{a.d(t,{$:()=>d,r:()=>o});var s=a(5155),r=a(2115),l=a(2317),n=a(652),i=a(9602);let o=(0,n.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:n,asChild:d=!1,...c}=e,f=d?l.DX:"button";return(0,s.jsx)(f,{className:(0,i.cn)(o({variant:r,size:n,className:a})),ref:t,...c})});d.displayName="Button"},7837:(e,t,a)=>{a.d(t,{Cf:()=>m,DialogTitle:()=>h,HM:()=>c,c7:()=>u,lG:()=>i,zM:()=>o});var s=a(5155),r=a(2115),l=a(7782),n=a(9602);let i=l.bL,o=l.l9,d=l.ZL,c=l.bm,f=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.hJ,{ref:t,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});f.displayName=l.hJ.displayName;let m=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(d,{children:[(0,s.jsx)(f,{}),(0,s.jsxs)(l.UC,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...i,children:[r,(0,s.jsxs)(l.bm,{className:"absolute right-3 top-3.5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)("div",{className:"rounded-sm text-xs border py-1 px-2 hover:bg-muted",children:"Esc"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});m.displayName=l.UC.displayName;let u=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};u.displayName="DialogHeader";let h=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.hE,{ref:t,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})});h.displayName=l.hE.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.VY,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...r})}).displayName=l.VY.displayName},3392:(e,t,a)=>{a.d(t,{ScrollArea:()=>i});var s=a(5155),r=a(2115),l=a(2341),n=a(9602);let i=r.forwardRef((e,t)=>{let{className:a,children:r,...i}=e;return(0,s.jsxs)(l.bL,{ref:t,className:(0,n.cn)("relative overflow-hidden",a),...i,children:[(0,s.jsx)(l.LM,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(o,{}),(0,s.jsx)(l.OK,{})]})});i.displayName=l.bL.displayName;let o=r.forwardRef((e,t)=>{let{className:a,orientation:r="vertical",...i}=e;return(0,s.jsx)(l.VM,{ref:t,orientation:r,className:(0,n.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...i,children:(0,s.jsx)(l.lr,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=l.VM.displayName},6870:(e,t,a)=>{a.r(t),a.d(t,{Sheet:()=>d,SheetClose:()=>f,SheetContent:()=>p,SheetDescription:()=>v,SheetFooter:()=>g,SheetHeader:()=>x,SheetOverlay:()=>u,SheetPortal:()=>m,SheetTitle:()=>b,SheetTrigger:()=>c});var s=a(5155),r=a(2115),l=a(7782),n=a(652),i=a(767),o=a(9602);let d=l.bL,c=l.l9,f=l.bm,m=l.ZL,u=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.hJ,{className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});u.displayName=l.hJ.displayName;let h=(0,n.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),p=r.forwardRef((e,t)=>{let{side:a="right",className:r,children:n,...d}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(l.UC,{ref:t,className:(0,o.cn)(h({side:a}),r),...d,children:[n,(0,s.jsxs)(l.bm,{className:"absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(i.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});p.displayName=l.UC.displayName;let x=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};x.displayName="SheetHeader";let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};g.displayName="SheetFooter";let b=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.hE,{ref:t,className:(0,o.cn)("text-lg font-semibold text-foreground",a),...r})});b.displayName=l.hE.displayName;let v=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(l.VY,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...r})});v.displayName=l.VY.displayName},8484:(e,t,a)=>{a.d(t,{b:()=>s});let s=[{title:"Hoshen",href:"/Hoshen",noLink:!0,items:[{title:"Routing",href:"/routing",items:[{title:"BGP",href:"/bgp"},{title:"Distance vector VS Link state",href:"/distance-vector-vs-link-state"},{title:"EIGRP",href:"/eigrp"},{title:"OSPF",href:"/OSPF"}]}]},{title:"Rust",href:"/Rust",noLink:!0,items:[{title:"Libraries in Rust",href:"/libraries_in_rust"},{title:"Handling variables",href:"/variables"},{title:"User input",href:"/user-input"},{title:"Adding crates",href:"/adding-crates"}]},{title:"cPanel",href:"/cPanel",noLink:!0,items:[{title:"Administration Tier 3 | WHM Administration (CWA)",href:"/CWA"},{title:"Mail Administration from the command line",href:"/mail"}]},{title:"Harel",href:"/Harel",noLink:!0,items:[{title:"Website",href:"/website",items:[{title:"Accessing the admin panel",href:"/how-to-login"},{title:"Adding posts",href:"/how-to-add-posts"}]}]},{title:"General",href:"/General",noLink:!0,items:[{title:"BIND",href:"/BIND"}]},{title:"JavaScript",href:"/JavaScript",noLink:!0,items:[{title:"Introduction",href:"/Introduction"},{title:"Data types",href:"/Data_types"},{title:"Difference between equal operators",href:"/Difference_between_equal_operators"}]},{title:"JetBackup",href:"/JetBackup",noLink:!0,items:[{title:"Bash API",href:"/Bash_API"},{title:"n8n",href:"/n8n",items:[{title:"MongoDB integration",href:"/MongoDB_integration"}]}]},{title:"JetServer",href:"/JetServer",noLink:!0,items:[{title:"Duplicate",href:"/Duplicate",items:[{title:"Duplicate-cPanel-server-TEMP",href:"/duplicate-cPanel-server-TEMP"}]}]},{title:"Linux",href:"/Linux",noLink:!0,items:[{title:"Boot process",href:"/Boot_process",items:[{title:"Boot loader Grub",href:"/boot_loader_Grub"},{title:"Boot process",href:"/boot_process"}]},{title:"Disks",href:"/Disks",items:[{title:"Disks partitions swap",href:"/disks_partitions_swap"}]},{title:"General",href:"/General",items:[{title:"Hardware_commands",href:"/hardware_commands"},{title:"Linux directories overview",href:"/linux_directories_overview"},{title:"Manage shared libraries",href:"/Manage_shared_libraries"},{title:"New OS",href:"/new_os"}]},{title:"Init systems",href:"/Init_systems",items:[{title:"SysV",href:"/SysV"}]},{title:"Package Managers",href:"/Package_managers",items:[{title:"DNF features",href:"/DNF_features"},{title:"How to create a repo",href:"/How_to_create_a_repo"},{title:"Introduction",href:"/introduction"}]},{title:"SELinux",href:"/SELinux",items:[{title:"Introduction",href:"/introduction"}]},{title:"Shell scripting",href:"/Shell_scripting",items:[{title:"BASH-scripting",href:"/BASH-scripting"},{title:"System variables",href:"/system_variables"},{title:"Handling variables",href:"/Handling_variables"}]}]}];s.map(e=>(function e(t){var a;let s=[];return t.noLink||s.push({title:t.title,href:t.href}),null===(a=t.items)||void 0===a||a.forEach(a=>{let r={...a,href:"".concat(t.href).concat(a.href)};s.push(...e(r))}),s})(e)).flat()},9602:(e,t,a)=>{a.d(t,{cn:()=>n,x6:()=>i});var s=a(3463),r=a(9795),l=a(8484);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}function i(e){return l.b.map(t=>(function e(t,a,s,r,l){var n;let i=[],o=!1,d="".concat(s).concat(a.href);return!a.noLink&&a.title.toLowerCase().includes(t.toLowerCase())&&(i.push({...a,items:void 0,href:d}),o=!0),(!l||r<l)&&(null===(n=a.items)||void 0===n||n.forEach(s=>{let n=e(t,s,d,r+1,l);!n.length||o||a.noLink||(i.push({...a,items:void 0,href:d}),o=!0),i.push(...n)})),i})(e,t,"",1,0==e.length?2:void 0)).flat()}}}]);