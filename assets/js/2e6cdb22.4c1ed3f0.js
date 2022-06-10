"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5774],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(f,i(i({ref:n},d),{},{components:t})):a.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(7294),r=t(6010),l="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7462),r=t(7294),l=t(6010),i=t(2389),o=t(7392),s=t(7094),u=t(2466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var n,t,i=e.lazy,c=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.l)(w,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(n=null!=m?m:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:y[0].props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,s.U)(),N=h.tabGroupChoices,C=h.setTabGroupChoices,O=(0,r.useState)(g),T=O[0],x=O[1],j=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var A=N[v];null!=A&&A!==T&&w.some((function(e){return e.value===A}))&&x(A)}var I=function(e){var n=e.currentTarget,t=j.indexOf(n),a=w[t].value;a!==T&&(E(n),x(a),null!=v&&C(v,String(a)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,r=j.indexOf(e.currentTarget)+1;t=null!=(a=j[r])?a:j[0];break;case"ArrowLeft":var l,i=j.indexOf(e.currentTarget)-1;t=null!=(l=j[i])?l:j[j.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},w.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:P,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},4087:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=t(5488),o=t(5162),s=["components"],u={title:"ws-response"},d=void 0,p={unversionedId:"middlewares/ws-response",id:"middlewares/ws-response",title:"ws-response",description:"Post message to WebSocket connection.",source:"@site/docs/middlewares/ws-response.md",sourceDirName:"middlewares",slug:"/middlewares/ws-response",permalink:"/docs/middlewares/ws-response",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/ws-response.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"ws-response"},sidebar:"tutorialSidebar",previous:{title:"ws-json-body-parser",permalink:"/docs/middlewares/ws-json-body-parser"},next:{title:"Writing Middlewares",permalink:"/docs/category/writing-middlewares"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"API Gateway",id:"api-gateway",level:3},{value:"General",id:"general",level:3},{value:"Bundling",id:"bundling",level:2}],f={toc:m};function v(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Post message to WebSocket connection."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/ws-responder\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/ws-responder\n")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"AWS.ApiGatewayManagementApi"),"): AWS.ApiGatewayManagementApi class constructor (e.g. that has been instrumented with AWS XRay). Must be from ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-sdk")," v2."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"): Options to pass to AWS.ApiGatewayManagementApi class constructor."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"): Internal key where secrets are stored. See ",(0,l.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),"): Enable XRay by passing ",(0,l.kt)("inlineCode",{parentName:"li"},"captureAWSClient")," from ",(0,l.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,l.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch.")),(0,l.kt)("p",null,"NOTES:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,l.kt)("inlineCode",{parentName:"li"},"execute-api:ManageConnections")),(0,l.kt)("li",{parentName:"ul"},"If ",(0,l.kt)("inlineCode",{parentName:"li"},"awsClientOptions.endpoint")," is not set it will be set using ",(0,l.kt)("inlineCode",{parentName:"li"},"event.requestContext.{domainName,stage}")),(0,l.kt)("li",{parentName:"ul"},"If response does not contain ",(0,l.kt)("inlineCode",{parentName:"li"},"ConnectId"),", it will be set from ",(0,l.kt)("inlineCode",{parentName:"li"},"event.requestContext.connectionId"))),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("h3",{id:"api-gateway"},"API Gateway"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsResonse from '@middy/ws-responder'\n\nexport const handler = middy((event, context) => {\n  return 'message'\n})\n\nhandler\n  .use(wsResonse())\n")),(0,l.kt)("h3",{id:"general"},"General"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport wsResonse from '@middy/ws-responder'\n\nexport const handler = middy((event, context) => {\n  return {\n    ConnectionId: '...',\n    Data: 'message'\n  }\n})\n\nhandler\n  .use(wsResonse({\n    awsClientOptions: {\n      endpoint: '...'\n    }\n  }))\n")),(0,l.kt)("h2",{id:"bundling"},"Bundling"),(0,l.kt)("p",null,"To exclude ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk")," add ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk/clients/apigatewaymanagementapi.js")," to the exclude list."))}v.isMDXComponent=!0}}]);