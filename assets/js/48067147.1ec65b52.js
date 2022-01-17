"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53905],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62050:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l={title:"Mutual TLS authentication"},o=void 0,c={unversionedId:"mtls",id:"version-2.4/mtls",isDocsHomePage:!1,title:"Mutual TLS authentication",description:"\x3c!--",source:"@site/docs-apisix_versioned_docs/version-2.4/mtls.md",sourceDirName:".",slug:"/mtls",permalink:"/docs/apisix/2.4/mtls",editUrl:"https://github.com/apache/apisix/edit/release/2.4/docs/en/latest/mtls.md",tags:[],version:"2.4",frontMatter:{title:"Mutual TLS authentication"}},s=[{value:"Why use it",id:"why-use-it",children:[]},{value:"How to enable",id:"how-to-enable",children:[]},{value:"How client calls",id:"how-client-calls",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"why-use-it"},"Why use it"),(0,i.kt)("p",null,"Mutual TLS authentication provides a better way to prevent unauthorized access to APISIX."),(0,i.kt)("p",null,"The clients will provide their certificates to the server and the server will check whether the cert is signed by the supplied CA and decide whether to serve the request."),(0,i.kt)("h3",{id:"how-to-enable"},"How to enable"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate self-signed key pairs, including ca, server, client key pairs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Modify configuration items in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  port_admin: 9180\n  https_admin: true\n\n  mtls:\n    enable: true               # Enable or disable mTLS. Enable depends on `port_admin` and `https_admin`.\n    ca_cert: "/data/certs/mtls_ca.crt"                 # Path of your self-signed ca cert.\n    server_key: "/data/certs/mtls_server.key"          # Path of your self-signed server side cert.\n    server_cert: "/data/certs/mtls_server.crt"         # Path of your self-signed server side key.\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Run command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),(0,i.kt)("h3",{id:"how-client-calls"},"How client calls"),(0,i.kt)("p",null,"Please replace the following certificate paths and domain name with your real ones."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Note: The same CA certificate as the server needs to be used *")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")))}p.isMDXComponent=!0}}]);