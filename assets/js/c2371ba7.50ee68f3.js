"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[7724],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),i="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,f=e.values,h=e.groupId,y=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,z=(0,a.useState)(k),x=z[0],O=z[1],j=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var E=N[h];null!=E&&E!==x&&v.some((function(e){return e.value===E}))&&O(E)}var S=function(e){var t=e.currentTarget,n=j.indexOf(t),r=v[n].value;r!==x&&(C(t),O(r),null!=h&&T(h,String(r)))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;n=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var i,l=j.indexOf(e.currentTarget)-1;n=null!=(i=j[l])?i:j[j.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},y)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:S,onClick:S},l,{className:(0,i.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},6933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5488),o=n(5162),s=["components"],u={title:"http-response-serializer"},p=void 0,d={unversionedId:"middlewares/http-response-serializer",id:"middlewares/http-response-serializer",title:"http-response-serializer",description:"The Http Serializer middleware lets you define serialization mechanisms based on the current content negotiation.",source:"@site/docs/middlewares/http-response-serializer.md",sourceDirName:"middlewares",slug:"/middlewares/http-response-serializer",permalink:"/docs/middlewares/http-response-serializer",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-response-serializer.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"http-response-serializer"},sidebar:"tutorialSidebar",previous:{title:"http-partial-response",permalink:"/docs/middlewares/http-partial-response"},next:{title:"http-security-headers",permalink:"/docs/middlewares/http-security-headers"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Serializer Functions",id:"serializer-functions",level:2},{value:"Content Type Negotiation",id:"content-type-negotiation",level:2},{value:"Sample usage",id:"sample-usage",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Http Serializer middleware lets you define serialization mechanisms based on the current content negotiation."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install this middleware you can use NPM:"),(0,i.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-response-serializer\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-response-serializer\n")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The middleware is configured by defining some ",(0,i.kt)("inlineCode",{parentName:"p"},"serializers"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  serializers: [\n    {\n      regex: /^application\\/xml$/,\n      serializer: ({ body }) => `<message>${body}</message>`,\n    },\n    {\n      regex: /^application\\/json$/,\n      serializer: ({ body }) => JSON.stringify(body)\n    },\n    {\n      regex: /^text\\/plain$/,\n      serializer: ({ body }) => body\n    }\n  ],\n  default: 'application/json'\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," (optional) option is used if the request and handler don't specify what type is wanted."),(0,i.kt)("h2",{id:"serializer-functions"},"Serializer Functions"),(0,i.kt)("p",null,"When a matching serializer is found, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," header is set and the serializer function is run."),(0,i.kt)("p",null,"The function is passed the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," object, and should return either a string or an object."),(0,i.kt)("p",null,"If a string is returned, the ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," attribute of the response is updated."),(0,i.kt)("p",null,"If an object with a ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," attribute is returned, the entire response object is replaced. This is useful if you want to manipulate headers or add additional attributes in the Lambda response."),(0,i.kt)("h2",{id:"content-type-negotiation"},"Content Type Negotiation"),(0,i.kt)("p",null,"The header is not the only way the middleware decides which serializer to execute."),(0,i.kt)("p",null,"The content type is determined in the following order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event.requiredContentType")," -- allows the handler to override everything else"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Accept")," header via ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/accept"},"accept")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event.preferredContentType")," -- allows the handler to override the default, but lets the request ask first"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"default")," middleware configuration")),(0,i.kt)("p",null,"All options allow for multiple types to be specified in your order of preference, and the first matching serializer will be executed."),(0,i.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpResponseSerializer from '@middy/http-response-serializer'\n\nconst handler = middy((event, context) => {\n  const body = 'Hello World'\n\n  return {\n    statusCode: 200,\n    body\n  }\n})\n\nhandler\n  .use(httpResponseSerializer({\n    serializers: [\n      {\n        regex: /^application\\/xml$/,\n        serializer: ({ body }) => `<message>${body}</message>`,\n      },\n      {\n        regex: /^application\\/json$/,\n        serializer: ({ body }) => JSON.stringify(body)\n      },\n      {\n        regex: /^text\\/plain$/,\n        serializer: ({ body }) => body\n      }\n    ],\n    default: 'application/json'\n  }))\n\nconst event = {\n  headers: {\n    'Accept': 'application/xml;q=0.9, text/x-dvi; q=0.8, text/x-c'\n  }\n}\n\nhandler(event, {}, (_, response) => {\n  t.is(response.body,'<message>Hello World</message>')\n})\n")))}h.isMDXComponent=!0}}]);