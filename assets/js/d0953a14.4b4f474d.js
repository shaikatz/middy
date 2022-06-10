"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4740],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(6010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,m=e.defaultValue,f=e.values,v=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,j=N.setTabGroupChoices,O=(0,r.useState)(k),C=O[0],T=O[1],E=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var S=w[v];null!=S&&S!==C&&y.some((function(e){return e.value===S}))&&T(S)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==C&&(x(t),T(a),null!=v&&j(v,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=E.indexOf(e.currentTarget)+1;n=null!=(a=E[r])?a:E[0];break;case"ArrowLeft":var i,o=E.indexOf(e.currentTarget)-1;n=null!=(i=E[o])?i:E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},3144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(5488),l=n(5162),s=["components"],u={title:"validator"},d=void 0,p={unversionedId:"middlewares/validator",id:"middlewares/validator",title:"validator",description:"This middleware automatically validates incoming events and outgoing responses against custom",source:"@site/docs/middlewares/validator.md",sourceDirName:"middlewares",slug:"/middlewares/validator",permalink:"/docs/middlewares/validator",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/validator.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"validator"},sidebar:"tutorialSidebar",previous:{title:"sts",permalink:"/docs/middlewares/sts"},next:{title:"warmup",permalink:"/docs/middlewares/warmup"}},c={},m=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],f={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This middleware automatically validates incoming events and outgoing responses against custom\nschemas defined with the ",(0,i.kt)("a",{parentName:"p",href:"http://json-schema.org/"},"JSON schema syntax"),"."),(0,i.kt)("p",null,"If an incoming event fails validation a ",(0,i.kt)("inlineCode",{parentName:"p"},"BadRequest")," error is raised.\nIf an outgoing response fails validation a ",(0,i.kt)("inlineCode",{parentName:"p"},"InternalServerError")," error is\nraised."),(0,i.kt)("p",null,"This middleware can be used in combination with\n",(0,i.kt)("a",{parentName:"p",href:"#httperrorhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"httpErrorHandler"))," to automatically return the right\nresponse to the user."),(0,i.kt)("p",null,"It can also be used in combination with ",(0,i.kt)("a",{parentName:"p",href:"#httpContentNegotiation"},(0,i.kt)("inlineCode",{parentName:"a"},"httpcontentnegotiation"))," to load localised translations for the error messages (based on the currently requested language). This feature uses internally ",(0,i.kt)("a",{parentName:"p",href:"http://npm.im/ajv-i18n"},(0,i.kt)("inlineCode",{parentName:"a"},"ajv-i18n"))," module, so reference to this module for options and more advanced use cases. By default the language used will be English (",(0,i.kt)("inlineCode",{parentName:"p"},"en"),"), but you can redefine the default language by passing it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ajvOptions")," options with the key ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultLanguage")," and specifying as value one of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ajv-i18n#supported-locales"},"supported locales"),"."),(0,i.kt)("p",null,"Also, this middleware accepts an object with plugins to be applied to customize the internal ",(0,i.kt)("inlineCode",{parentName:"p"},"ajv")," instance. Out-of-the-box ",(0,i.kt)("inlineCode",{parentName:"p"},"ajv-i18n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ajv-formats")," are being used."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"To install this middleware you can use NPM:"),(0,i.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/validator\n"))),(0,i.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/validator\n")))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputSchema")," (object) (optional): The JSON schema object or compiled ajv validator that will be used\nto validate the input (",(0,i.kt)("inlineCode",{parentName:"li"},"request.event"),") of the Lambda handler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputSchema")," (object) (optional): The JSON schema object or compiled ajv validator that will be used\nto validate the output (",(0,i.kt)("inlineCode",{parentName:"li"},"request.response"),") of the Lambda handler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ajvOptions")," (object) (optional): Options to pass to ",(0,i.kt)("a",{parentName:"li",href:"https://ajv.js.org/docs/api.html#options"},"ajv"),"\nclass constructor. Defaults are ",(0,i.kt)("inlineCode",{parentName:"li"},"{ strict: true, coerceTypes: 'array', allErrors: true, useDefaults: 'empty', messages: false, defaultLanguage: 'en' }"),".")),(0,i.kt)("p",null,"NOTES:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"At least one of ",(0,i.kt)("inlineCode",{parentName:"li"},"inputSchema")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"outputSchema")," is required."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Important")," Compiling schemas on the fly will cause a 50-100ms performance hit during cold start for simple JSON Schemas. Precompiling is highly recommended."),(0,i.kt)("li",{parentName:"ul"},"Default ajv plugins used: ",(0,i.kt)("inlineCode",{parentName:"li"},"ajv-i18n"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ajv-formats"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ajv-formats-draft2019")),(0,i.kt)("li",{parentName:"ul"},"If you'd like to have the error details as part of the response, it will need to be handled separately. You can access them from ",(0,i.kt)("inlineCode",{parentName:"li"},"request.error.details"),", the original response can be found at ",(0,i.kt)("inlineCode",{parentName:"li"},"request.error.response"),". ")),(0,i.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,i.kt)("p",null,"Example for input validation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport validator from '@middy/validator'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nconst schema = {\n  required: ['body', 'foo'],\n  properties: {\n    // this will pass validation\n    body: {\n      type: 'string'\n    },\n    // this won't as it won't be in the event\n    foo: {\n      type: 'string'\n    }\n  }\n}\n\nhandler.use(validator({\n  inputSchema: schema\n}))\n\n// invokes the handler, note that property foo is missing\nconst event = {\n  body: JSON.stringify({something: 'somethingelse'})\n}\nhandler(event, {}, (err, res) => {\n  t.is(err.message,'Event object failed validation')\n})\n")),(0,i.kt)("p",null,"Example for output validation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport validator from '@middy/validator'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nconst schema = {\n  required: ['body', 'statusCode'],\n  properties: {\n    body: {\n      type: 'object'\n    },\n    statusCode: {\n      type: 'number'\n    }\n  }\n}\n\nhandler.use(validator({outputSchema: schema}))\n\nhandler({}, {}, (err, response) => {\n  t.not(err, null)\n  t.is(err.message,'Response object failed validation')\n  expect(response).not.toBe(null)\n  // it doesn't destroy the response so it can be used by other middlewares\n})\n")))}v.isMDXComponent=!0}}]);