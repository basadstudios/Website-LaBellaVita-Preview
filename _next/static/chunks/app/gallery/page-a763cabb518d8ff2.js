(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{158:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var i=a(5155),n=a(2115),s=a(6339);let l={some:0,all:1};var r=a(6084),o=a(760),c=a(1485),d=a(6766),m=a(4775);let u={initial:{opacity:0,y:60},animate:e=>({opacity:1,y:0,transition:{delay:.05*e,duration:.6,ease:[.215,.61,.355,1]}}),exit:{opacity:0,y:-40,transition:{duration:.4,ease:"easeInOut"}}},x={initial:{opacity:0},animate:{opacity:1,transition:{staggerChildren:.08,delayChildren:.3}}},p={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}},h={initial:{scaleX:0,originX:0},animate:{scaleX:1,transition:{duration:1.2,ease:[.215,.61,.355,1]}}},y={initial:{opacity:0,y:20},animate:e=>({opacity:1,y:0,transition:{delay:.2+.1*e,duration:.5,ease:"easeOut"}}),hover:{scale:1.05,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",transition:{duration:.3}},tap:{scale:.95}};function g(){let[e,t]=(0,n.useState)("all"),[a,g]=(0,n.useState)(null),[f,v]=(0,n.useState)({}),[b,w]=(0,n.useState)(!1),[j,N]=(0,n.useState)(12),P=(0,n.useRef)(null),k=(0,n.useRef)(null),F=function(e,{root:t,margin:a,amount:i,once:r=!1,initial:o=!1}={}){let[c,d]=(0,n.useState)(o);return(0,n.useEffect)(()=>{if(!e.current||r&&c)return;let n={root:t&&t.current||void 0,margin:a,amount:i};return function(e,t,{root:a,margin:i,amount:n="some"}={}){let r=(0,s.KJ)(e),o=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let a=o.get(e.target);if(!!a!==e.isIntersecting){if(e.isIntersecting){let a=t(e.target,e);"function"==typeof a?o.set(e.target,a):c.unobserve(e.target)}else"function"==typeof a&&(a(e),o.delete(e.target))}})},{root:a,rootMargin:i,threshold:"number"==typeof n?n:l[n]});return r.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(d(!0),r?void 0:()=>d(!1)),n)},[t,e,a,r,i]),c}(k,{once:!1,amount:.5}),C=c.FF.reduce((e,t)=>(e[t.category]=(e[t.category]||0)+1,e),{}),O="all"===e?c.FF:c.FF.filter(t=>t.category===e),L=O.slice(0,j),S=j<O.length,z=e=>{v(t=>({...t,[e]:!0}))},E=e=>{console.error("Failed to load image: ".concat(e)),v(t=>({...t,[e]:!0}))},I=a=>{a!==e&&(w(!0),t(a),N(12),setTimeout(()=>{w(!1)},800))},M=(0,n.useCallback)(()=>{N(e=>Math.min(e+8,O.length))},[O.length]);return(0,n.useEffect)(()=>{F&&S&&!b&&M()},[F,S,b,M]),(0,i.jsxs)(m.default,{children:[(0,i.jsxs)("div",{className:"relative h-[500px] overflow-hidden",children:[(0,i.jsx)(r.P.div,{initial:{scale:1.2,opacity:.8},animate:{scale:1,opacity:1},transition:{duration:1.5,ease:"easeOut"},className:"absolute inset-0 w-full h-full",children:(0,i.jsx)(d.default,{src:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop",alt:"La Bella Vita Gallery",fill:!0,className:"object-cover object-center",sizes:"100vw",priority:!0})}),(0,i.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1,delay:.3},className:"absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center",children:(0,i.jsxs)("div",{className:"text-center text-white max-w-3xl px-4",children:[(0,i.jsx)(r.P.h1,{variants:p,initial:"initial",animate:"animate",className:"text-5xl md:text-6xl font-serif font-bold mb-6",children:"Our Gallery"}),(0,i.jsx)(r.P.div,{variants:h,initial:"initial",animate:"animate",className:"w-24 h-1 bg-amber-500 mx-auto mb-6"}),(0,i.jsx)(r.P.p,{variants:p,initial:"initial",animate:"animate",transition:{delay:.6},className:"text-xl max-w-2xl mx-auto",children:"A visual journey through our restaurant, cuisine, and memorable events"})]})})]}),(0,i.jsxs)("main",{className:"container mx-auto px-4 py-16",children:[(0,i.jsxs)(r.P.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"mb-16",children:[(0,i.jsx)("h2",{className:"text-3xl md:text-4xl font-serif font-bold text-center mb-4",children:"Explore Our Moments"}),(0,i.jsx)(r.P.div,{initial:{scaleX:0},animate:{scaleX:1},transition:{duration:.8,delay:.2,ease:[.215,.61,.355,1]},className:"w-24 h-1 bg-amber-500 mx-auto mb-6"}),(0,i.jsx)(r.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.4},className:"text-gray-600 text-center max-w-3xl mx-auto",children:"Each image captures the essence of La Bella Vita - the flavors, the atmosphere, and the experiences that make dining with us special."})]}),(0,i.jsx)(r.P.div,{variants:x,initial:"initial",animate:"animate",className:"flex flex-wrap justify-center gap-4 mb-12",ref:P,children:["all","food","interior","events","staff"].map((t,a)=>(0,i.jsxs)(r.P.button,{custom:a,variants:y,initial:"initial",animate:"animate",whileHover:"hover",whileTap:"tap",onClick:()=>I(t),className:"px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ".concat(e===t?"bg-amber-600 text-white shadow-lg":"bg-gray-100 text-gray-700 hover:bg-amber-100"),disabled:b,children:[t.charAt(0).toUpperCase()+t.slice(1),"all"!==t&&(0,i.jsx)("span",{className:"ml-2 bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs",children:C[t]||0})]},t))}),(0,i.jsx)("div",{className:"relative",children:O.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.P.div,{variants:x,initial:"initial",animate:"animate",className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:(0,i.jsx)(o.N,{mode:"wait",children:L.map((e,t)=>(0,i.jsxs)(r.P.div,{custom:t,variants:u,initial:"initial",animate:"animate",exit:"exit",className:"relative overflow-hidden rounded-xl shadow-lg cursor-pointer group",onClick:()=>g(e.id),whileHover:{y:-8,boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",transition:{duration:.3,ease:"easeOut"}},children:[!f[e.id]&&(0,i.jsx)(r.P.div,{initial:{opacity:.6},animate:{opacity:[.6,.8,.6]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},className:"absolute inset-0 bg-gray-200"}),(0,i.jsxs)("div",{className:"aspect-[4/3] relative overflow-hidden",children:[(0,i.jsx)(d.default,{src:e.image,alt:e.title,fill:!0,className:"object-cover transition-transform duration-700 group-hover:scale-110",sizes:"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",onLoad:()=>z(e.id),onError:()=>E(e.id),priority:t<8}),(0,i.jsx)(r.P.div,{initial:{opacity:0},whileHover:{opacity:1},transition:{duration:.3},className:"absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"}),(0,i.jsxs)(r.P.div,{initial:{y:60,opacity:0},whileHover:{y:0,opacity:1},transition:{duration:.4,ease:[.19,1,.22,1],opacity:{duration:.2}},className:"absolute bottom-0 left-0 right-0 p-4 text-white",children:[(0,i.jsx)("h3",{className:"font-medium text-lg",children:e.title}),(0,i.jsx)("p",{className:"text-sm text-amber-300 capitalize",children:e.category})]})]})]},e.id))})}),S&&(0,i.jsx)(r.P.div,{ref:k,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},className:"flex justify-center mt-12",children:(0,i.jsxs)(r.P.button,{onClick:M,whileHover:{scale:1.05,boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"},whileTap:{scale:.95},className:"px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300 flex items-center gap-2 shadow-md",children:[(0,i.jsx)("span",{children:"Load More"}),(0,i.jsx)(r.P.svg,{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",animate:{rotate:[0,180,360]},transition:{duration:2,repeat:1/0,ease:"linear",repeatDelay:1},children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"})})]})})]}):(0,i.jsx)(r.P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5,ease:"easeOut"},className:"text-center py-16",children:(0,i.jsx)("p",{className:"text-xl text-gray-500",children:"No images found in this category."})})}),(0,i.jsx)(o.N,{children:a&&(0,i.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4},className:"fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm",onClick:()=>g(null),children:(0,i.jsxs)(r.P.div,{initial:{scale:.8,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:.8,opacity:0,y:20},transition:{type:"spring",damping:25,stiffness:300,opacity:{duration:.4}},className:"relative max-w-5xl max-h-[90vh] w-full",onClick:e=>e.stopPropagation(),children:[(0,i.jsx)(r.P.button,{initial:{opacity:0,rotate:-90},animate:{opacity:1,rotate:0},transition:{delay:.3,duration:.3},className:"absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white z-10",onClick:()=>g(null),whileHover:{scale:1.1,rotate:90},whileTap:{scale:.9},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,i.jsx)(r.P.div,{className:"absolute inset-y-0 left-4 flex items-center",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.3,duration:.4},children:(0,i.jsx)(r.P.button,{className:"bg-white/20 hover:bg-white/40 rounded-full p-2 text-white",onClick:e=>{e.stopPropagation();let t=(c.FF.findIndex(e=>e.id===a)-1+c.FF.length)%c.FF.length;g(c.FF[t].id)},whileHover:{scale:1.2,x:-5},whileTap:{scale:.9},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})})}),(0,i.jsx)(r.P.div,{className:"absolute inset-y-0 right-4 flex items-center",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.3,duration:.4},children:(0,i.jsx)(r.P.button,{className:"bg-white/20 hover:bg-white/40 rounded-full p-2 text-white",onClick:e=>{e.stopPropagation();let t=(c.FF.findIndex(e=>e.id===a)+1)%c.FF.length;g(c.FF[t].id)},whileHover:{scale:1.2,x:5},whileTap:{scale:.9},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})}),c.FF.find(e=>e.id===a)&&(0,i.jsxs)(r.P.div,{className:"relative h-[80vh]",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[(0,i.jsx)(d.default,{src:c.FF.find(e=>e.id===a).image,alt:c.FF.find(e=>e.id===a).title,fill:!0,className:"object-contain",sizes:"100vw",priority:!0}),(0,i.jsxs)(r.P.div,{className:"absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-black/0",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4,duration:.5,ease:"easeOut"},children:[(0,i.jsx)(r.P.h3,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5,duration:.5},className:"text-xl font-medium text-white",children:c.FF.find(e=>e.id===a).title}),(0,i.jsx)(r.P.p,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6,duration:.5},className:"text-amber-300 capitalize",children:c.FF.find(e=>e.id===a).category})]})]})]})})})]})]})}},1469:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return r}});let i=a(8229),n=a(8883),s=a(3063),l=i._(a(1193));function r(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Website-LaBellaVita-Preview/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=s.Image},3632:(e,t,a)=>{Promise.resolve().then(a.bind(a,158))},6766:(e,t,a)=>{"use strict";a.d(t,{default:()=>n.a});var i=a(1469),n=a.n(i)}},e=>{var t=t=>e(e.s=t);e.O(0,[711,777,827,63,775,441,684,358],()=>t(3632)),_N_E=e.O()}]);