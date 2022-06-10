"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[6998],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,v=f["".concat(o,".").concat(d)]||f[d]||m[d]||i;return t?r.createElement(v,l(l({ref:n},s),{},{components:t})):r.createElement(v,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2503:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(7462),a=t(3366),i=t(7294),l=t(6010),c=t(5999),o=t(6668),u="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function f(e){var n=e.as,t=e.id,f=(0,a.Z)(e,m),d=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?i.createElement(n,(0,r.Z)({},f,{className:(0,l.Z)("anchor",d?s:u),id:t}),f.children,i.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(n,(0,r.Z)({},f,{id:void 0}))}},76:function(e,n,t){t.d(n,{Z:function(){return H}});var r=t(7294),a=t(3905),i=t(7462),l=t(3366),c=t(5742),o=["mdxType","originalType"];var u=t(3066);var s=t(9960);var m=t(6010),f=t(2389),d=t(6043),v="details_lb9f",p="isBrowser_bmU9",h="collapsibleContent_i85q",g=["summary","children"];function y(e){return!!e&&("SUMMARY"===e.tagName||y(e.parentElement))}function E(e,n){return!!e&&(e===n||E(e.parentElement,n))}function b(e){var n=e.summary,t=e.children,a=(0,l.Z)(e,g),c=(0,f.Z)(),o=(0,r.useRef)(null),u=(0,d.u)({initialState:!a.open}),s=u.collapsed,b=u.setCollapsed,N=(0,r.useState)(a.open),O=N[0],Z=N[1];return r.createElement("details",(0,i.Z)({},a,{ref:o,open:O,"data-collapsed":s,className:(0,m.Z)(v,c&&p,a.className),onMouseDown:function(e){y(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;y(n)&&E(n,o.current)&&(e.preventDefault(),s?(b(!1),Z(!0)):b(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(d.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){b(e),Z(!e)}},r.createElement("div",{className:h},t)))}var N="details_b_Ee";function O(e){var n=Object.assign({},e);return r.createElement(b,(0,i.Z)({},n,{className:(0,m.Z)("alert alert--info",N,n.className)}))}var Z=t(2503);function L(e){return r.createElement(Z.Z,e)}var C="containsTaskList_mC6p";var k="img_ev3q";var x={head:function(e){var n=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,a=(t.mdxType,t.originalType,(0,l.Z)(t,o));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(u.Z,e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var n;return r.createElement(u.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(O,(0,i.Z)({},e,{summary:t}),a)},ul:function(e){return r.createElement("ul",(0,i.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&C))}));var n},img:function(e){return r.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,k))}));var n},h1:function(e){return r.createElement(L,(0,i.Z)({as:"h1"},e))},h2:function(e){return r.createElement(L,(0,i.Z)({as:"h2"},e))},h3:function(e){return r.createElement(L,(0,i.Z)({as:"h3"},e))},h4:function(e){return r.createElement(L,(0,i.Z)({as:"h4"},e))},h5:function(e){return r.createElement(L,(0,i.Z)({as:"h5"},e))},h6:function(e){return r.createElement(L,(0,i.Z)({as:"h6"},e))}};function H(e){var n=e.children;return r.createElement(a.Zo,{components:x},n)}},9407:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(3366),i=t(7294),l=t(6010),c=t(3743),o="tableOfContents_bqdL",u=["className"];function s(e){var n=e.className,t=(0,a.Z)(e,u);return i.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",n)},i.createElement(c.Z,(0,r.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(7462),a=t(3366),i=t(7294),l=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,l);t>=0?n[t].children.push(i):r.push(i)})),r}function o(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var u=t(6668);function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function m(e,n){var t,r,a=n.anchorTopOffset,i=e.find((function(e){return s(e).top>=a}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:null!=(r=e[e.indexOf(i)-1])?r:null:null!=(t=e[e.length-1])?t:null}function f(){var e=(0,i.useRef)(0),n=(0,u.L)().navbar.hideOnScroll;return(0,i.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){var n=(0,i.useRef)(void 0),t=f();(0,i.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,i=e.minHeadingLevel,l=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),o=m(c,{anchorTopOffset:t.current}),u=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function v(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?i.createElement("ul",{className:a?void 0:t},n.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var p=i.memo(v),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,l=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,m=void 0===s?"table-of-contents__link":s,f=e.linkActiveClassName,v=void 0===f?void 0:f,g=e.minHeadingLevel,y=e.maxHeadingLevel,E=(0,a.Z)(e,h),b=(0,u.L)(),N=null!=g?g:b.tableOfContents.minHeadingLevel,O=null!=y?y:b.tableOfContents.maxHeadingLevel,Z=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,i.useMemo)((function(){return o({toc:c(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:N,maxHeadingLevel:O});return d((0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:O}}),[m,v,N,O])),i.createElement(p,(0,r.Z)({toc:Z,className:l,linkClassName:m},E))}}}]);