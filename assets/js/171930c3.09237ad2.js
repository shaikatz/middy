"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[2786],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"AWS Relational Database Service (RDS)"},c=void 0,l={unversionedId:"integrations/RDS",id:"integrations/RDS",title:"AWS Relational Database Service (RDS)",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/integrations/RDS.md",sourceDirName:"integrations",slug:"/integrations/RDS",permalink:"/docs/integrations/RDS",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/integrations/RDS.md",tags:[],version:"current",lastUpdatedAt:1654885020,formattedLastUpdatedAt:"6/10/2022",frontMatter:{title:"AWS Relational Database Service (RDS)"},sidebar:"tutorialSidebar",previous:{title:"Integrations",permalink:"/docs/integrations/intro"},next:{title:"Apollo Server",permalink:"/docs/integrations/apollo-server"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."))),(0,a.kt)("p",null,"First, you need to pass in a password. In order from most secure to least: ",(0,a.kt)("inlineCode",{parentName:"p"},"RDS.Signer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SecretsManager"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SSM")," using SecureString.\n",(0,a.kt)("inlineCode",{parentName:"p"},"SSM")," can be considered equally secure to ",(0,a.kt)("inlineCode",{parentName:"p"},"SecretsManager")," if you have your own password rotation system."),(0,a.kt)("p",null,"Additionally, you will want to verify the RDS certificate and the domain of your connection. You can use this sudo code to get you started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import tls from 'tls'\n\n// https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html\nconst ca = `-----BEGIN CERTIFICATE----- ...` \n\nconnectionOptions = {\n  ...,\n  ssl: {\n    rejectUnauthorized: true,\n      ca,\n      checkServerIdentity: (host, cert) => {\n      const error = tls.checkServerIdentity(host, cert)\n      if (\n        error &&\n        !cert.subject.CN.endsWith('.rds.amazonaws.com')\n      ) {\n        return error\n      }\n    }\n  }\n}\n")),(0,a.kt)("p",null,"Corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"RDS.ParameterGroups")," values should be set to enforce TLS connections."))}m.isMDXComponent=!0}}]);