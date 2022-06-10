"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3955],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(r),c=a,f=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],d={title:"Function URL"},p=void 0,l={unversionedId:"events/function-url",id:"events/function-url",title:"Function URL",description:"Same as API Gateway (HTTP)",source:"@site/docs/events/function-url.md",sourceDirName:"events",slug:"/events/function-url",permalink:"/docs/events/function-url",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/function-url.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"Function URL"},sidebar:"tutorialSidebar",previous:{title:"EventBridge",permalink:"/docs/events/event-bridge"},next:{title:"IoT Events",permalink:"/docs/events/iot-events"}},s={},m=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}],u={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Same as API Gateway (HTTP)"),(0,o.kt)("h2",{id:"aws-documentation"},"AWS Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html"},"Using AWS Lambda with Amazon API Gateway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html"},"Working with HTTP APIs"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport errorLoggerMiddleware from '@middy/error-logger'\nimport inputOutputLoggerMiddleware from '@middy/input-output-logger'\nimport httpContentNegotiationMiddleware from '@middy/http-content-negotiation'\nimport httpContentEncodingMiddleware from '@middy/http-content-encoding'\nimport httpCorsMiddleware from '@middy/http-cors'\nimport httpErrorHandlerMiddleware from '@middy/http-error-handler'\nimport httpEventNormalizerMiddleware from '@middy/http-event-normalizer'\nimport httpHeaderNormalizerMiddleware from '@middy/http-header-normalizer'\nimport httpJsonBodyParserMiddleware from '@middy/http-json-body-parser'\nimport httpMultipartBodyParserMiddleware from '@middy/http-multipart-body-parser'\nimport httpPartialResponseMiddleware from '@middy/http-partial-response'\nimport httpResponseSerializerMiddleware from '@middy/http-response-serializer'\nimport httpSecurityHeadersMiddleware from '@middy/http-security-headers'\nimport httpUrlencodeBodyParserMiddleware from '@middy/http-urlencode-body-parser'\nimport httpUrlencodePathParametersParserMiddleware from '@middy/http-urlencode-path-parser'\nimport validatorMiddleware from 'validator' // or `middy-ajv`\nimport warmupMiddleware from 'warmup'\n\nimport inputSchema from './eventSchema.json' assert { type: 'json' }\nimport outputSchema from './responseSchema.json' assert { type: 'json' }\n\nexport const handler = middy({\n  timeoutEarlyResponse: () => {\n    return {\n      statusCode: 408\n    }\n  }\n})\n  .use(warmupMiddleware())\n  .use(httpEventNormalizerMiddleware())\n  .use(httpHeaderNormalizerMiddleware())\n  .use(\n    httpContentNegotiationMiddleware({\n      availableLanguages: ['en-CA', 'fr-CA'],\n      availableMediaTypes: ['application/json']\n    })\n  )\n  .use(httpUrlencodePathParametersParserMiddleware())\n  // Start oneOf\n  .use(httpUrlencodeBodyParserMiddleware())\n  .use(httpJsonBodyParserMiddleware())\n  .use(httpMultipartBodyParserMiddleware())\n  // End oneOf\n  .use(httpSecurityHeadersMiddleware())\n  .use(httpCorsMiddleware())\n  .use(httpContentEncodingMiddleware())\n  .use(\n    httpResponseSerializerMiddleware({\n      serializers: [\n        {\n          regex: /^application\\/json$/,\n          serializer: ({ body }) => JSON.stringify(body)\n        }\n      ],\n      default: 'application/json'\n    })\n  )\n  .use(httpPartialResponseMiddleware())\n  .use(validatorMiddleware({ inputSchema, outputSchema }))\n  .use(httpErrorHandlerMiddleware())\n  .handler((event, context, { signal }) => {\n    // ...\n  })\n")))}c.isMDXComponent=!0}}]);