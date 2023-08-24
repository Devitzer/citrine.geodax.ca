"use strict";(self.webpackChunkcitrine_script_documentation=self.webpackChunkcitrine_script_documentation||[]).push([[5515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(g,l(l({ref:t},p),{},{components:n})):o.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={slug:"devlog-4",title:"Devlog 4. Update Periods, Plans For v2.4.0.0",authors:["devitzer"],tags:["devlog","plans","update","obsidian","obpl"]},l=void 0,i={permalink:"/blog/devlog-4",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Devlog/2023-08-24-Devlog-4.mdx",source:"@site/blog/Devlog/2023-08-24-Devlog-4.mdx",title:"Devlog 4. Update Periods, Plans For v2.4.0.0",description:"Welcome to Devlog 4!",date:"2023-08-24T00:00:00.000Z",formattedDate:"August 24, 2023",tags:[{label:"devlog",permalink:"/blog/tags/devlog"},{label:"plans",permalink:"/blog/tags/plans"},{label:"update",permalink:"/blog/tags/update"},{label:"obsidian",permalink:"/blog/tags/obsidian"},{label:"obpl",permalink:"/blog/tags/obpl"}],readingTime:1.53,hasTruncateMarker:!1,authors:[{name:"Devitzer",title:"Lead Developer @ Obsidian",url:"https://github.com/Devitzer",imageURL:"https://github.com/Devitzer.png",key:"devitzer"}],frontMatter:{slug:"devlog-4",title:"Devlog 4. Update Periods, Plans For v2.4.0.0",authors:["devitzer"],tags:["devlog","plans","update","obsidian","obpl"]},nextItem:{title:"Blog Is Back!",permalink:"/blog/blog-is-back"}},s={authorsImageUrls:[void 0]},u=[{value:"Guaranteed Updates",id:"guaranteed-updates",level:2},{value:"Likely To Come",id:"likely-to-come",level:2},{value:"Plans",id:"plans",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to Devlog 4!\nHere are some information about the updates and plans!"),(0,a.kt)("h2",{id:"guaranteed-updates"},"Guaranteed Updates"),(0,a.kt)("p",null,"I guarantee that Obsidian v2.4.0.0 will have new math functions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Math.floor"),(0,a.kt)("li",{parentName:"ul"},"Math.round")),(0,a.kt)("p",null,"Which are pretty much the basics, and when I feel like Obsidian needs it I will add more."),(0,a.kt)("p",null,"REWORK. THE. EXPORT. STATEMENT."),(0,a.kt)("p",null,"Technically, the export statement actually does ",(0,a.kt)("strong",{parentName:"p"},"nothing."),'\nWhenever you import a file, like: import "module.ob", what this does it is actually takes all of the variables and functions from the file and declares them in the file that you are importing it in\'s environment.\nWhat does that mean?'),(0,a.kt)("p",null,"This means that whether you exported a variable/function or not, it will be imported anyways.\nSo if your module.ob looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="module.ob"',title:'"module.ob"'},'int myInt = 5\n\ndeclare myCoolFunction() {\n    io.print("This is my cool function!")\n}\n\nexport { myInt }\n')),(0,a.kt)("p",null,"And in the file you import it from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="main.ob"',title:'"main.ob"'},'import "module.ob"\nio.print(myInt) # this gives 5, as expected\nmyCoolFunction() # this says "This is my cool function!", which was not expected.\n')),(0,a.kt)("h2",{id:"likely-to-come"},"Likely To Come"),(0,a.kt)("p",null,"Rework the if statement.\nRight now, the if statement is not working the way that the rest of the language works. How specifically?\nWell the if test, which looks like this: 1 == 1. It's not working the way that it should. It's a binary expression, but it's not evaluated as one.\nSo I need to update the eval_binary_expr command to evaluate the tests properly."),(0,a.kt)("h2",{id:"plans"},"Plans"),(0,a.kt)("p",null,"First thing's first, I want to make the update periods longer. I have been making updates every couple days to a week around at most.\nI've decided that I'm going to take my time with the updates."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"And that's it for Devlog 4, see ya on the next one. Bye!"),(0,a.kt)("p",null,"Devitzer, ",(0,a.kt)("br",null),"\nLead Developer @ Obsidian Lang"))}d.isMDXComponent=!0}}]);