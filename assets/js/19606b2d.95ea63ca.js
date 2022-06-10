"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1544],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return N}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=d(t,["components","mdxType","originalType","parentName"]),s=m(n),N=r,k=s["".concat(o,".").concat(N)]||s[N]||p[N]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5162:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(7294),r=n(6010),l="tabItem_Ymn6";function i(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},5488:function(t,e,n){n.d(e,{Z:function(){return N}});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),d=n(7392),o=n(7094),m=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function s(t){var e,n,i=t.lazy,s=t.block,N=t.defaultValue,k=t.values,c=t.groupId,g=t.className,b=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,d.l)(v,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===N?N:null!=(e=null!=N?N:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:b[0].props.value;if(null!==y&&!v.some((function(t){return t.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.U)(),w=h.tabGroupChoices,S=h.setTabGroupChoices,C=(0,r.useState)(y),O=C[0],T=C[1],z=[],E=(0,m.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var x=w[c];null!=x&&x!==O&&v.some((function(t){return t.value===x}))&&T(x)}var I=function(t){var e=t.currentTarget,n=z.indexOf(e),a=v[n].value;a!==O&&(E(e),T(a),null!=c&&S(c,String(a)))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a,r=z.indexOf(t.currentTarget)+1;n=null!=(a=z[r])?a:z[0];break;case"ArrowLeft":var l,i=z.indexOf(t.currentTarget)-1;n=null!=(l=z[i])?l:z[z.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},g)},v.map((function(t){var e=t.value,n=t.label,i=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:function(t){return z.push(t)},onKeyDown:j,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(b.filter((function(t){return t.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}function N(t){var e=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(e)},t))}},236:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return N}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(5488),d=n(5162),o=["components"],m={title:"event-normalizer"},u=void 0,p={unversionedId:"middlewares/event-normalizer",id:"middlewares/event-normalizer",title:"event-normalizer",description:"Middleware for iterating through an AWS event records, parsing and normalizing nested events.",source:"@site/docs/middlewares/event-normalizer.md",sourceDirName:"middlewares",slug:"/middlewares/event-normalizer",permalink:"/docs/middlewares/event-normalizer",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/event-normalizer.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"event-normalizer"},sidebar:"tutorialSidebar",previous:{title:"error-logger",permalink:"/docs/middlewares/error-logger"},next:{title:"http-content-encoding",permalink:"/docs/middlewares/http-content-encoding"}},s={},N=[{value:"Install",id:"install",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Bundling",id:"bundling",level:2}],k={toc:N};function c(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Middleware for iterating through an AWS event records, parsing and normalizing nested events."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"AWS Events Transformations:"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html"},"https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Included"),(0,l.kt)("th",{parentName:"tr",align:null},"Comments"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Alexa"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API Gateway (HTTP)"),(0,l.kt)("td",{parentName:"tr",align:null},"No *"),(0,l.kt)("td",{parentName:"tr",align:null},"See middleware prefixed with ",(0,l.kt)("inlineCode",{parentName:"td"},"@middy/http-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API Gateway (REST)"),(0,l.kt)("td",{parentName:"tr",align:null},"No *"),(0,l.kt)("td",{parentName:"tr",align:null},"See middleware prefixed with ",(0,l.kt)("inlineCode",{parentName:"td"},"@middy/http-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"API Gateway (WS)"),(0,l.kt)("td",{parentName:"tr",align:null},"No *"),(0,l.kt)("td",{parentName:"tr",align:null},"See middleware ",(0,l.kt)("inlineCode",{parentName:"td"},"@middy/ws-json-body-parser"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application LB"),(0,l.kt)("td",{parentName:"tr",align:null},"No *"),(0,l.kt)("td",{parentName:"tr",align:null},"See middleware prefixed with ",(0,l.kt)("inlineCode",{parentName:"td"},"@middy/http-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloudFormation"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloudFront"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloudTrail"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CloudWatch Logs"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 decode and JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CodeCommit"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CodePipeline"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"UserParameters"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cognito"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"invokingEvent")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"ruleParameters"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connect"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DynamoDB"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Unmarshall ",(0,l.kt)("inlineCode",{parentName:"td"},"Keys"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"OldImage"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"NewImage"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EC2"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"EventBridge"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IoT"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IoT Event"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 decode and JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka (MSK)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 decode and JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"value"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kinesis Firehose"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 decode and JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kinesis Stream"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 decode and JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lex"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MQ"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"Base64 decode and JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RDS"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S3"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"URI decode ",(0,l.kt)("inlineCode",{parentName:"td"},"key"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S3 Batch"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"URI decode ",(0,l.kt)("inlineCode",{parentName:"td"},"s3Key"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S3 Object Lambda"),(0,l.kt)("td",{parentName:"tr",align:null},"No *"),(0,l.kt)("td",{parentName:"tr",align:null},"See middleware ",(0,l.kt)("inlineCode",{parentName:"td"},"@middy/s3-object-response"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Secrets Manager"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SES"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"Normalization not required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SNS"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"Message"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQS"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON parse ",(0,l.kt)("inlineCode",{parentName:"td"},"body"))))),(0,l.kt)("p",null,"*"," Handled in another dedicated middleware(s)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Test Events"),"\nSome events send test events after set, you will need to handle these."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// S3 Test Event\n{\n  Service: 'Amazon S3',\n  Event: 's3:TestEvent',\n  Time: '2020-01-01T00:00:00.000Z',\n  Bucket: 'bucket-name',\n  RequestId: '***********',\n  HostId: '***/***/***='\n}\n")),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("p",null,"To install this middleware you can use NPM:"),(0,l.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/event-normalizer\n"))),(0,l.kt)(d.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/event-normalizer\n")))),(0,l.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport eventNormalizer from '@middy/event-normalizer'\n\nconst lambdaHandler = (event, context) => {\n  const { Records } = event\n  for(const record of Records) {\n    // ...\n  }\n}\n\nconst handler = middy(lambdaHandler).use(eventNormalizer())\n")),(0,l.kt)("h2",{id:"bundling"},"Bundling"),(0,l.kt)("p",null,"To exclude ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk")," add ",(0,l.kt)("inlineCode",{parentName:"p"},"aws-sdk/clients/dynamodb.js")," to the exclude list."))}c.isMDXComponent=!0}}]);