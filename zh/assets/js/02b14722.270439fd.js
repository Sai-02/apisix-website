"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22070],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return s}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),s=i,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71497:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o={title:"Router"},l=void 0,u={unversionedId:"architecture-design/router",id:"version-2.11/architecture-design/router",isDocsHomePage:!1,title:"Router",description:"\x3c!--",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.11/architecture-design/router.md",sourceDirName:"architecture-design",slug:"/architecture-design/router",permalink:"/zh/docs/apisix/2.11/architecture-design/router",editUrl:"https://github.com/apache/apisix/edit/release/2.11/docs/zh/latest/architecture-design/router.md",tags:[],version:"2.11",frontMatter:{title:"Router"},sidebar:"version-2.11/docs",previous:{title:"Plugin Config",permalink:"/zh/docs/apisix/2.11/architecture-design/plugin-config"},next:{title:"Debug Mode",permalink:"/zh/docs/apisix/2.11/architecture-design/debug-mode"}},p=[],c={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"APISIX \u533a\u522b\u4e8e\u5176\u4ed6 API \u7f51\u5173\u7684\u4e00\u5927\u7279\u70b9\u662f\u5141\u8bb8\u7528\u6237\u9009\u62e9\u4e0d\u540c Router \u6765\u66f4\u597d\u5339\u914d\u81ea\u7531\u4e1a\u52a1\uff0c\u5728\u6027\u80fd\u3001\u81ea\u7531\u4e4b\u95f4\u505a\u6700\u9002\u5408\u9009\u62e9\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u5730\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u8bbe\u7f6e\u6700\u7b26\u5408\u81ea\u8eab\u4e1a\u52a1\u9700\u6c42\u7684\u8def\u7531\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"apisix.router.http"),": HTTP \u8bf7\u6c42\u8def\u7531\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri"),": \uff08\u9ed8\u8ba4\uff09\u53ea\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," \u4f5c\u4e3a\u4e3b\u7d22\u5f15\u3002\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree")," \u5f15\u64ce\uff0c\u652f\u6301\u5168\u91cf\u548c\u6df1\u524d\u7f00\u5339\u914d\uff0c\u66f4\u591a\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/router-radixtree"},"\u5982\u4f55\u4f7f\u7528 router-radixtree"),"\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u7edd\u5bf9\u5339\u914d"),"\uff1a\u5b8c\u6574\u5339\u914d\u7ed9\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," \uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/bar"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/glo"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u524d\u7f00\u5339\u914d"),"\uff1a\u672b\u5c3e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"*")," \u4ee3\u8868\u7ed9\u5b9a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," \u662f\u524d\u7f00\u5339\u914d\u3002\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo*"),"\uff0c\u5219\u5141\u8bb8\u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/a"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"/foo/b"),"\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u5339\u914d\u4f18\u5148\u7ea7"),"\uff1a\u4f18\u5148\u5c1d\u8bd5\u7edd\u5bf9\u5339\u914d\uff0c\u82e5\u65e0\u6cd5\u547d\u4e2d\u7edd\u5bf9\u5339\u914d\uff0c\u518d\u5c1d\u8bd5\u524d\u7f00\u5339\u914d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u4efb\u610f\u8fc7\u6ee4\u5c5e\u6027"),"\uff1a\u5141\u8bb8\u6307\u5b9a\u4efb\u4f55 Nginx \u5185\u7f6e\u53d8\u91cf\u4f5c\u4e3a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u6bd4\u5982 URL \u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5934\u3001cookie \u7b49\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri_with_parameter"),": \u540c ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," \u4f46\u989d\u5916\u6709\u53c2\u6570\u5339\u914d\u7684\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_host_uri"),": \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"host + uri")," \u4f5c\u4e3a\u4e3b\u7d22\u5f15\uff08\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree")," \u5f15\u64ce\uff09\uff0c\u5bf9\u5f53\u524d\u8bf7\u6c42\u4f1a\u540c\u65f6\u5339\u914d host \u548c uri\uff0c\u652f\u6301\u7684\u5339\u914d\u6761\u4ef6\u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," \u57fa\u672c\u4e00\u81f4\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"apisix.router.ssl"),": SSL \u52a0\u8f7d\u5339\u914d\u8def\u7531\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"radixtree_sni"),": \uff08\u9ed8\u8ba4\uff09\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"SNI")," (Server Name Indication) \u4f5c\u4e3a\u4e3b\u7d22\u5f15\uff08\u57fa\u4e8e radixtree \u5f15\u64ce\uff09\u3002")))))}d.isMDXComponent=!0}}]);