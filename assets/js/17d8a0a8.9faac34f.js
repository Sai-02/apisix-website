"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[702],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6922:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o={title:"Route"},s=void 0,c={unversionedId:"architecture-design/route",id:"version-2.6/architecture-design/route",isDocsHomePage:!1,title:"Route",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.6/architecture-design/route.md",sourceDirName:"architecture-design",slug:"/architecture-design/route",permalink:"/docs/apisix/2.6/architecture-design/route",editUrl:"https://github.com/apache/apisix/edit/release/2.6/docs/en/latest/architecture-design/route.md",tags:[],version:"2.6",frontMatter:{title:"Route"},sidebar:"version-2.6/docs",previous:{title:"APISIX",permalink:"/docs/apisix/2.6/architecture-design/apisix"},next:{title:"Plugin",permalink:"/docs/apisix/2.6/architecture-design/plugin"}},u=[],p={toc:u};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The route matches the client's request by defining rules, then loads and executes the corresponding plugin based on the matching result, and forwards the request to the specified Upstream."),(0,a.kt)("p",null,"The route mainly consists of three parts: matching rules (e.g uri, host, remote_addr, etc.), plugin configuration (current-limit & rate-limit, etc.) and upstream information."),(0,a.kt)("p",null,"The following image shows an example of some Route rules. When some attribute values are the same, the figure is identified by the same color."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/apache/apisix@release/2.6/docs/assets/images/routes-example.png",alt:"routes-example"})),(0,a.kt)("p",null,"We configure all the parameters directly in the Route, it's easy to set up, and each Route has a relatively high degree of freedom. But when our Route has more repetitive configurations (such as enabling the same plugin configuration or upstream information), once we need update these same properties, we have to traverse all the Routes and modify them, so it's adding a lot of complexity of management and maintenance."),(0,a.kt)("p",null,"The shortcomings mentioned above are independently abstracted in APISIX by the two concepts ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.6/architecture-design/service"},"Service")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.6/architecture-design/upstream"},"Upstream"),"."),(0,a.kt)("p",null,"The route example created below is to proxy the request with URL ",(0,a.kt)("inlineCode",{parentName:"p"},"/index.html")," to the Upstream service with the address ",(0,a.kt)("inlineCode",{parentName:"p"},"39.97.63.215:80"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "39.97.63.215:80": 1\n        }\n    }\n}\'\n\nHTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/index.html","upstream":{"nodes":{"39.97.63.215:80":1},"type":"roundrobin"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925},"action":"create"}\n')),(0,a.kt)("p",null,"When we receive a successful response, it indicates that the route was successfully created."),(0,a.kt)("p",null,"For specific options of Route, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/apisix/2.6/admin-api#route"},"Admin API"),"."))}l.isMDXComponent=!0}}]);