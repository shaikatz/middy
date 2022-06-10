"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[7783],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,h=c["".concat(p,".").concat(u)]||c[u]||s[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2391:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return s}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],d={title:"Upgrade 0.x -> 1.x",sidebar_position:1e4},p=void 0,l={unversionedId:"upgrade/0-1",id:"upgrade/0-1",title:"Upgrade 0.x -> 1.x",description:"Independent packages structure",source:"@site/docs/upgrade/0-1.md",sourceDirName:"upgrade",slug:"/upgrade/0-1",permalink:"/docs/upgrade/0-1",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/0-1.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",sidebarPosition:1e4,frontMatter:{title:"Upgrade 0.x -> 1.x",sidebar_position:1e4},sidebar:"tutorialSidebar",previous:{title:"Upgrade 1.x -> 2.x",permalink:"/docs/upgrade/1-2"},next:{title:"AWS Event Examples",permalink:"/docs/category/aws-event-examples"}},m={},s=[{value:"Independent packages structure",id:"independent-packages-structure",level:2},{value:"Header normalization in <code>http-header-normalizer</code>",id:"header-normalization-in-http-header-normalizer",level:2},{value:"Node.js 10 and 12 now supported / Node.js 6 and 8 now dropped",id:"nodejs-10-and-12-now-supported--nodejs-6-and-8-now-dropped",level:2}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"independent-packages-structure"},"Independent packages structure"),(0,i.kt)("p",null,"Version 1.x of Middy features decoupled independent packages published on npm under the ",(0,i.kt)("inlineCode",{parentName:"p"},"@middy")," namespace. The core middleware engine has been moved to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@middy/core"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/core"))," and all the other middlewares are moved into their own packages as well. This allows to only install the features that are needed and to keep your Lambda dependencies small. See the list below to check which packages you need based on the middlewares you use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core middleware functionality -> ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/core"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/core"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cache")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/cache"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/cache"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cors")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-cors"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-cors"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"doNotWaitForEmptyEventLoop")," -> ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/do-not-wait-for-empty-event-loop"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/do-not-wait-for-empty-event-loop"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpContentNegotiation")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-content-negotiation"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-content-negotiation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpErrorHandler")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-error-handler"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-error-handler"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpEventNormalizer")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-event-normalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-event-normalizer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpHeaderNormalizer")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-header-normalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-header-normalizer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpMultipartBodyParser")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-json-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-json-body-parser"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"httpPartialResponse")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-partial-response"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-partial-response"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jsonBodyParser")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-json-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-json-body-parser"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3KeyNormalizer")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/s3-key-normalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/s3-key-normalizer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secretsManager")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/secrets-manager"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/secrets-manager"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ssm")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/ssm"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/ssm"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"validator")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/validator"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/validator"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"urlEncodeBodyParser")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/http-urlencode-body-parser"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/http-urlencode-body-parser"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"warmup")," ->  ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@middy/warmup"},(0,i.kt)("inlineCode",{parentName:"a"},"@middy/warmup")))),(0,i.kt)("h2",{id:"header-normalization-in-http-header-normalizer"},"Header normalization in ",(0,i.kt)("inlineCode",{parentName:"h2"},"http-header-normalizer")),(0,i.kt)("p",null,"In Middy 0.x the ",(0,i.kt)("inlineCode",{parentName:"p"},"httpHeaderNormalizer")," middleware normalizes HTTP header names into their own canonical format, for instance ",(0,i.kt)("inlineCode",{parentName:"p"},"Sec-WebSocket-Key")," (notice the casing). In Middy 1.x this behavior has been changed to provide header names in lowercase format (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"sec-webSocket-key"),"). This new behavior is more consistent with what Node.js core ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," package does and what other famous http frameworks like Express or Fastify do, so this is considered a more intuitive approach.\nWhen updating to Middy 1.x, make sure you double check all your references to HTTP headers and switch to the lowercase version to read them.\nAll the middy core modules have been already updated to support the new format, so you should worry only about your userland code."),(0,i.kt)("h2",{id:"nodejs-10-and-12-now-supported--nodejs-6-and-8-now-dropped"},"Node.js 10 and 12 now supported / Node.js 6 and 8 now dropped"),(0,i.kt)("p",null,"Version 1.x of Middy no longer supports Node.js versions 6.x and 8.x as these versions have been dropped by the AWS Lambda runtime itself and not supported anymore by the Node.js community. You are highly encouraged to move to Node.js 12 or 10, which are the new supported versions in Middy 1.x."))}u.isMDXComponent=!0}}]);