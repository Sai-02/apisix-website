"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31428],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26300:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i={title:"Stream Proxy"},p=void 0,s={unversionedId:"stream-proxy",id:"version-2.4/stream-proxy",isDocsHomePage:!1,title:"Stream Proxy",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/stream-proxy.md",sourceDirName:".",slug:"/stream-proxy",permalink:"/docs/apisix/2.4/stream-proxy",editUrl:"https://github.com/apache/apisix/edit/release/2.4/docs/en/latest/stream-proxy.md",tags:[],version:"2.4",frontMatter:{title:"Stream Proxy"},sidebar:"version-2.4/docs",previous:{title:"Stand-alone mode",permalink:"/docs/apisix/2.4/stand-alone"},next:{title:"gRPC Proxy",permalink:"/docs/apisix/2.4/grpc-proxy"}},l=[{value:"How to enable Stream proxy?",id:"how-to-enable-stream-proxy",children:[]},{value:"How to set route?",id:"how-to-set-route",children:[]},{value:"More Limit Options",id:"more-limit-options",children:[]}],c={toc:l};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TCP is the protocol for many popular applications and services, such as LDAP, MySQL, and RTMP. UDP (User Datagram Protocol) is the protocol for many popular non-transactional applications, such as DNS, syslog, and RADIUS."),(0,a.kt)("p",null,"APISIX can dynamic load balancing TCP/UDP proxy. In Nginx world, we call TCP/UDP proxy to stream proxy, we followed this statement."),(0,a.kt)("h2",{id:"how-to-enable-stream-proxy"},"How to enable Stream proxy?"),(0,a.kt)("p",null,"Setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"stream_proxy")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", specify a list of addresses that require dynamic proxy.\nBy default, no any stream proxy is enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n  stream_proxy:                 # TCP/UDP proxy\n    tcp:                        # TCP proxy address list\n      - 9100\n      - "127.0.0.1:9101"\n    udp:                        # UDP proxy address list\n      - 9200\n      - "127.0.0.1:9211"\n')),(0,a.kt)("h2",{id:"how-to-set-route"},"How to set route?"),(0,a.kt)("p",null,"Here is a mini example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"It means APISIX will proxy the request to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the client remote address is ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,a.kt)("p",null,"For more use cases, please take a look at ",(0,a.kt)("a",{parentName:"p",href:"../t/stream-node/sanity.t"},"test case"),"."),(0,a.kt)("h2",{id:"more-limit-options"},"More Limit Options"),(0,a.kt)("p",null,"And we can add more limit options to match a route, here is an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "server_addr": "127.0.0.1",\n    "server_port": 2000,\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1995": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"It means APISIX will proxy the request to ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1995")," which the server remote address is ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and the server port is equal ",(0,a.kt)("inlineCode",{parentName:"p"},"2000"),"."))}u.isMDXComponent=!0}}]);