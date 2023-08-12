"use strict";(self.webpackChunkcitrine_script_documentation=self.webpackChunkcitrine_script_documentation||[]).push([[7705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6},a="else if",s={unversionedId:"functions/Keywords/else_if",id:"functions/Keywords/else_if",title:"else if",description:"Else if is actually a combination of two keywords, else and if.",source:"@site/docs/functions/Keywords/else_if.mdx",sourceDirName:"functions/Keywords",slug:"/functions/Keywords/else_if",permalink:"/docs/functions/Keywords/else_if",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/functions/Keywords/else_if.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"else",permalink:"/docs/functions/Keywords/else"},next:{title:"io - in out",permalink:"/docs/category/io---in-out"}},c={},l=[{value:"Example:",id:"example",level:2}],f={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"else-if"},"else if"),(0,o.kt)("p",null,"Else if is actually a combination of two keywords, ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/Keywords/else"},"else")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/functions/Keywords/if"},"if"),'.\nWhen the parser sees the combination of the both, it will treat it as a secondary to another if statement, these can be chained on an on.\nLike if else if else if else if pretty much forever.\nIf there is just "else" and then "else if", you will get an error.'),(0,o.kt)("h2",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="example.ces"',title:'"example.ces"'},'let x = 5\nlet y = 5\n\nif x == 6 {\n    io.print("x eqwow 6 :D")\n} else if x == y {\n    io.print("x eqwow y :D")\n} else {\n    io.print("idk what x eqwow :C")\n}\n\n# Output: "x eqwow y :D"\n')))}p.isMDXComponent=!0}}]);