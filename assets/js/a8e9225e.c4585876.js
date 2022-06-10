"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[9319],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),p=n(2466),d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,h=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),C=N.tabGroupChoices,w=N.setTabGroupChoices,T=(0,r.useState)(v),O=T[0],E=T[1],x=[],j=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var A=C[h];null!=A&&A!==O&&y.some((function(e){return e.value===A}))&&E(A)}var P=function(e){var t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==O&&(j(t),E(a),null!=h&&w(h,String(a)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var i,l=x.indexOf(e.currentTarget)-1;n=null!=(i=x[l])?i:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:I,onFocus:P,onClick:P},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},1468:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5488),o=n(5162),s=["components"],p={title:"http-content-negotiation"},d=void 0,u={unversionedId:"middlewares/http-content-negotiation",id:"middlewares/http-content-negotiation",title:"http-content-negotiation",description:"This middleware parses Accept-* headers and provides utilities for HTTP content negotiation (charset, encoding, language and media type).",source:"@site/docs/middlewares/http-content-negotiation.md",sourceDirName:"middlewares",slug:"/middlewares/http-content-negotiation",permalink:"/docs/middlewares/http-content-negotiation",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-content-negotiation.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"http-content-negotiation"},sidebar:"tutorialSidebar",previous:{title:"http-content-encoding",permalink:"/docs/middlewares/http-content-encoding"},next:{title:"http-cors",permalink:"/docs/middlewares/http-cors"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This middleware parses ",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-*")," headers and provides utilities for ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7231#section-5.3"},"HTTP content negotiation")," (charset, encoding, language and media type)."),(0,i.kt)("p",null,"By default the middleware parses charsets (",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Charset"),"), languages (",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Language"),"), encodings (",(0,i.kt)("inlineCode",{parentName:"p"},"Accept-Encoding"),") and media types (",(0,i.kt)("inlineCode",{parentName:"p"},"Accept"),") during the\n",(0,i.kt)("inlineCode",{parentName:"p"},"before")," phase and expands the ",(0,i.kt)("inlineCode",{parentName:"p"},"event")," object by adding the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredCharsets")," (",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - The list of charsets that can be safely used by the app (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredCharset")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred charset (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredEncodings")," (",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - The list of encodings that can be safely used by the app (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredEncoding")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred encoding (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredLanguages")," (",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - The list of languages that can be safely used by the app (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredLanguage")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred language (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredMediaTypes")," (",(0,i.kt)("inlineCode",{parentName:"li"},"array"),") - The list of media types that can be safely used by the app (as the result of the negotiation)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferredMediaType")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),") - The preferred media types (as the result of the negotiation)")),(0,i.kt)("p",null,"This middleware expects the headers in canonical format, so it should be attached after the ",(0,i.kt)("a",{parentName:"p",href:"#httpheadernormalizer"},(0,i.kt)("inlineCode",{parentName:"a"},"httpHeaderNormalizer"))," middleware.\nIt also can throw an HTTP exception, so it can be convenient to use it in combination with the ",(0,i.kt)("a",{parentName:"p",href:"#httperrorhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"httpErrorHandler")),"."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install this middleware you can use NPM:"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-content-negotiation\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-content-negotiation\n")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parseCharsets")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the charsets parsing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"availableCharsets")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of charsets supported by the Lambda function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parseEncodings")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the encodings parsing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"availableEncodings")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of encodings supported by the Lambda function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parseLanguages")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the languages parsing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"availableLanguages")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of languages supported by the Lambda function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parseMediaTypes")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") - Allows enabling/disabling the media types parsing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"availableMediaTypes")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"),") - Allows defining the list of media types supported by the Lambda function"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"failOnMismatch")," (defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") - If set to true it will throw an HTTP ",(0,i.kt)("inlineCode",{parentName:"li"},"NotAcceptable")," (406) exception when the negotiation fails for one of the headers (e.g. none of the languages requested are supported by the app)")),(0,i.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpContentNegotiation from '@middy/http-content-negotiation'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpErrorHandler from '@middy/http-error-handler'\n\nexport const handler = middy((event, context) => {\n  let message, body\n\n  switch (event.preferredLanguage) {\n    case 'it-it':\n      message = 'Ciao Mondo'\n      break\n    case 'fr-fr':\n      message = 'Bonjour le monde'\n      break\n    default:\n      message = 'Hello world'\n  }\n\n  switch (event.preferredMediaType) {\n    case 'application/xml':\n      body = `<message>${message}</message>`\n      break\n    case 'application/yaml':\n      body = `---\\nmessage: ${message}`\n      break\n    case 'application/json':\n      body = JSON.stringify({ message })\n      break\n    default:\n      body = message\n  }\n\n  return {\n    statusCode: 200,\n    body\n  }\n})\n\nhandler\n  .use(httpHeaderNormalizer())\n  .use(httpContentNegotiation({\n    parseCharsets: false,\n    parseEncodings: false,\n    availableLanguages: ['it-it', 'fr-fr', 'en'],\n    availableMediaTypes: ['application/xml', 'application/yaml', 'application/json', 'text/plain']\n  }))\n  .use(httpErrorHandler())\n\n")))}h.isMDXComponent=!0}}]);