"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4388],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8609:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"Handling Errors",position:5},l=void 0,p={unversionedId:"intro/handling-errors",id:"intro/handling-errors",title:"Handling Errors",description:"But, what happens when there is an error?",source:"@site/docs/intro/05-handling-errors.md",sourceDirName:"intro",slug:"/intro/handling-errors",permalink:"/docs/intro/handling-errors",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/05-handling-errors.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:5,frontMatter:{title:"Handling Errors",position:5},sidebar:"tutorialSidebar",previous:{title:"Early return",permalink:"/docs/intro/early-interrupt"},next:{title:"Use with TypeScript",permalink:"/docs/intro/typescript"}},c={},d=[],u={toc:d};function h(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"But, what happens when there is an error?"),(0,a.kt)("p",null,"When there is an error, the regular control flow is stopped and the execution is\nmoved back to all the middlewares that implemented a special phase called ",(0,a.kt)("inlineCode",{parentName:"p"},"onError"),", following\nthe order they have been attached."),(0,a.kt)("p",null,"Every ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," middleware can decide to handle the error and create a proper response or\nto delegate the error to the next middleware."),(0,a.kt)("p",null,"When a middleware handles the error and creates a response, the execution is still propagated to all the other\nerror middlewares and they have a chance to update or replace the response as\nneeded. At the end of the error middlewares sequence, the response is returned\nto the user."),(0,a.kt)("p",null,"If no middleware manages the error, the Lambda execution fails reporting the unmanaged error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Initialize response\nrequest.response = request.response ?? {}\n\n// Add to response\nrequest.response.add = 'more'\n\n// Override an error\nrequest.error = new Error('...')\n\n// handle the error\nreturn request.response\n")))}h.isMDXComponent=!0}}]);