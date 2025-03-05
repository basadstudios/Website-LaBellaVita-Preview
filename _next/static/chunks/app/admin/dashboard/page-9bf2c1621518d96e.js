(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{3741:(e,t,s)=>{"use strict";s.d(t,{A:()=>i});var a=s(5155),r=s(6874),n=s.n(r);function i(e){let{children:t,onClick:s,href:r,variant:i="primary",size:d="md",className:l="",fullWidth:c=!1,disabled:m=!1,type:o="button",icon:x,iconPosition:h="left"}=e,p="\n    inline-flex items-center justify-center \n    font-medium transition-colors duration-300\n    ".concat(c?"w-full":"","\n    ").concat(m?"opacity-60 cursor-not-allowed":"cursor-pointer","\n  "),g="\n    ".concat(p," \n    ").concat({primary:"bg-primary-600 hover:bg-primary-700 text-white",secondary:"bg-olive-600 hover:bg-olive-700 text-white",outline:"border border-primary-600 text-primary-600 hover:bg-primary-50",text:"text-primary-600 hover:text-primary-700 hover:underline"}[i]," \n    ").concat({sm:"px-3 py-1.5 text-sm rounded-sm",md:"px-5 py-2.5 text-base rounded-sm",lg:"px-7 py-3.5 text-lg rounded-sm"}[d]," \n    ").concat(l,"\n  "),u=(0,a.jsxs)(a.Fragment,{children:[x&&"left"===h&&(0,a.jsx)("span",{className:"mr-2",children:x}),t,x&&"right"===h&&(0,a.jsx)("span",{className:"ml-2",children:x})]});return r?(0,a.jsx)(n(),{href:r,className:g,children:u}):(0,a.jsx)("button",{onClick:s,className:g,disabled:m,type:o,children:u})}},4163:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(5155),r=s(2115),n=s(5695),i=s(4775),d=s(3741);let l={totalReservations:128,pendingReservations:12,totalOrders:256,revenue:"$12,450",popularDishes:[{name:"Spaghetti Carbonara",orders:42},{name:"Margherita Pizza",orders:38},{name:"Tiramisu",orders:27},{name:"Risotto ai Funghi",orders:24},{name:"Lasagna",orders:21}],recentReservations:[{id:1,name:"John Smith",date:"2023-06-15",time:"19:00",guests:4,status:"confirmed"},{id:2,name:"Maria Garcia",date:"2023-06-15",time:"20:30",guests:2,status:"confirmed"},{id:3,name:"Robert Johnson",date:"2023-06-16",time:"18:00",guests:6,status:"pending"},{id:4,name:"Sarah Williams",date:"2023-06-16",time:"19:30",guests:3,status:"confirmed"},{id:5,name:"David Brown",date:"2023-06-17",time:"20:00",guests:2,status:"pending"}]};function c(){let e=(0,n.useRouter)(),[t,s]=(0,r.useState)(!1),[c,m]=(0,r.useState)(""),[o,x]=(0,r.useState)(""),[h]=(0,r.useState)(l),[p,g]=(0,r.useState)("dashboard");return((0,r.useEffect)(()=>{let t=localStorage.getItem("isAuthenticated"),a=localStorage.getItem("userRole"),r=localStorage.getItem("userEmail");if("true"!==t){e.push("/admin");return}s(!0),m(a||""),x(r||"")},[e]),t)?(0,a.jsx)(i.default,{children:(0,a.jsxs)("div",{className:"bg-gray-50 min-h-screen",children:[(0,a.jsx)("div",{className:"bg-white shadow",children:(0,a.jsx)("div",{className:"container mx-auto px-4 py-4",children:(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("h1",{className:"text-2xl font-serif font-bold text-gray-800",children:"La Bella Vita Admin"}),(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsxs)("div",{className:"text-sm text-gray-600",children:["Logged in as: ",(0,a.jsx)("span",{className:"font-medium",children:o})," (",c,")"]}),(0,a.jsx)("button",{onClick:()=>{localStorage.removeItem("isAuthenticated"),localStorage.removeItem("userRole"),localStorage.removeItem("userEmail"),e.push("/admin")},className:"text-sm text-primary-600 hover:text-primary-800",children:"Logout"})]})]})})}),(0,a.jsx)("div",{className:"bg-white shadow-sm border-b",children:(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsxs)("nav",{className:"flex space-x-8",children:[(0,a.jsx)("button",{className:"px-4 py-4 font-medium text-sm border-b-2 ".concat("dashboard"===p?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),onClick:()=>g("dashboard"),children:"Dashboard"}),(0,a.jsx)("button",{className:"px-4 py-4 font-medium text-sm border-b-2 ".concat("reservations"===p?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),onClick:()=>g("reservations"),children:"Reservations"}),(0,a.jsx)("button",{className:"px-4 py-4 font-medium text-sm border-b-2 ".concat("menu"===p?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),onClick:()=>g("menu"),children:"Menu Management"}),(0,a.jsx)("button",{className:"px-4 py-4 font-medium text-sm border-b-2 ".concat("orders"===p?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),onClick:()=>g("orders"),children:"Orders"}),"admin"===c&&(0,a.jsx)("button",{className:"px-4 py-4 font-medium text-sm border-b-2 ".concat("settings"===p?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"),onClick:()=>g("settings"),children:"Settings"})]})})}),(0,a.jsxs)("div",{className:"container mx-auto px-4 py-8",children:["dashboard"===p&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl font-serif font-bold mb-6",children:"Dashboard Overview"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Total Reservations"}),(0,a.jsx)("p",{className:"mt-2 text-3xl font-bold text-gray-900",children:h.totalReservations}),(0,a.jsxs)("div",{className:"mt-1 text-sm text-green-600",children:[(0,a.jsx)("span",{className:"font-medium",children:"+12%"})," from last month"]})]}),(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Pending Reservations"}),(0,a.jsx)("p",{className:"mt-2 text-3xl font-bold text-gray-900",children:h.pendingReservations}),(0,a.jsx)("div",{className:"mt-1 text-sm text-yellow-600",children:(0,a.jsx)("span",{className:"font-medium",children:"Requires attention"})})]}),(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Total Orders"}),(0,a.jsx)("p",{className:"mt-2 text-3xl font-bold text-gray-900",children:h.totalOrders}),(0,a.jsxs)("div",{className:"mt-1 text-sm text-green-600",children:[(0,a.jsx)("span",{className:"font-medium",children:"+8%"})," from last month"]})]}),(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.jsx)("h3",{className:"text-sm font-medium text-gray-500 uppercase tracking-wider",children:"Monthly Revenue"}),(0,a.jsx)("p",{className:"mt-2 text-3xl font-bold text-gray-900",children:h.revenue}),(0,a.jsxs)("div",{className:"mt-1 text-sm text-green-600",children:[(0,a.jsx)("span",{className:"font-medium",children:"+15%"})," from last month"]})]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Popular Dishes"}),(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Dish"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Orders"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:h.popularDishes.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.name}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right",children:e.orders})]},t))})]})})]}),(0,a.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,a.jsx)("h3",{className:"text-lg font-medium text-gray-900",children:"Recent Reservations"}),(0,a.jsx)("button",{className:"text-sm text-primary-600 hover:text-primary-800",onClick:()=>g("reservations"),children:"View all"})]}),(0,a.jsx)("div",{className:"overflow-hidden",children:(0,a.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,a.jsx)("thead",{className:"bg-gray-50",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date & Time"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Guests"}),(0,a.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"})]})}),(0,a.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:h.recentReservations.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:e.name}),(0,a.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:[e.date," at ",e.time]}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.guests}),(0,a.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:(0,a.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full ".concat("confirmed"===e.status?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"),children:e.status})})]},e.id))})]})})]})]})]}),"reservations"===p&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-serif font-bold",children:"Reservations Management"}),(0,a.jsx)(d.A,{children:"New Reservation"})]}),(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:"This section would contain a full reservation management system with filtering, sorting, and CRUD operations."}),(0,a.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:(0,a.jsx)("p",{className:"text-center text-gray-500 py-8",children:"Reservation management interface would be implemented here."})})]}),"menu"===p&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-serif font-bold",children:"Menu Management"}),(0,a.jsx)(d.A,{children:"Add Menu Item"})]}),(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:"This section would allow you to manage your restaurant's menu items, categories, and pricing."}),(0,a.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:(0,a.jsx)("p",{className:"text-center text-gray-500 py-8",children:"Menu management interface would be implemented here."})})]}),"orders"===p&&(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,a.jsx)("h2",{className:"text-2xl font-serif font-bold",children:"Orders Management"}),(0,a.jsx)(d.A,{children:"New Order"})]}),(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:"This section would allow you to manage online orders, track delivery status, and process payments."}),(0,a.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:(0,a.jsx)("p",{className:"text-center text-gray-500 py-8",children:"Orders management interface would be implemented here."})})]}),"settings"===p&&"admin"===c&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl font-serif font-bold mb-6",children:"Admin Settings"}),(0,a.jsx)("p",{className:"text-gray-600 mb-4",children:"This section would allow administrators to manage users, system settings, and website configuration."}),(0,a.jsx)("div",{className:"bg-white p-6 rounded-lg shadow-sm",children:(0,a.jsx)("p",{className:"text-center text-gray-500 py-8",children:"Admin settings interface would be implemented here."})})]})]})]})}):null}},5699:(e,t,s)=>{Promise.resolve().then(s.bind(s,4163))}},e=>{var t=t=>e(e.s=t);e.O(0,[711,777,827,775,441,684,358],()=>t(5699)),_N_E=e.O()}]);