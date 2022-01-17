"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21301],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64334:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o={title:"Using Apache APISIX and Authing to implement Centralized Authentication Management",authors:[{name:"Xinxin Zhu",title:"Author",url:"https://github.com/starsz",image_url:"https://avatars.githubusercontent.com/u/25628854?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4"}],keywords:["Apache APISIX","Authing","OpenID","Authentication","Ecosystem"],description:"This article describes the detailed steps for interfacing Apache APISIX and Authing.",tags:["Technology"]},l=void 0,s={permalink:"/blog/2022/01/04/authing",source:"@site/blog/2022/01/04/authing.md",title:"Using Apache APISIX and Authing to implement Centralized Authentication Management",description:"This article describes the detailed steps for interfacing Apache APISIX and Authing.",date:"2022-01-04T00:00:00.000Z",formattedDate:"January 4, 2022",tags:[{label:"Technology",permalink:"/blog/tags/technology"}],readingTime:8.13,truncated:!0,authors:[{name:"Xinxin Zhu",title:"Author",url:"https://github.com/starsz",image_url:"https://avatars.githubusercontent.com/u/25628854?v=4",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://avatars.githubusercontent.com/u/36651058?v=4",imageURL:"https://avatars.githubusercontent.com/u/36651058?v=4"}],prevItem:{title:"Biweekly Report\uff5c12.16-12.31 Feature Highlights Update in Progress",permalink:"/blog/2022/01/05/weekly-report-1231"},nextItem:{title:"Using the Apache APISIX proxy gRPC service",permalink:"/blog/2021/12/30/apisix-proxy-grpc-service"}},p={authorsImageUrls:[void 0,void 0]},c=[{value:"Introduction",id:"introduction",children:[{value:"About Apache APISIX",id:"about-apache-apisix",children:[]},{value:"About Authing",id:"about-authing",children:[]}]},{value:"What is Centralized Authentication",id:"what-is-centralized-authentication",children:[{value:"Traditional Authentication Mode",id:"traditional-authentication-mode",children:[]},{value:"Centralized Identity Authentication Mode",id:"centralized-identity-authentication-mode",children:[]},{value:"Advantages of Centralized Identity Authentication Mode",id:"advantages-of-centralized-identity-authentication-mode",children:[]}]},{value:"How to implement Centralized Identity Authentication using Apache APISIX and Authing",id:"how-to-implement-centralized-identity-authentication-using-apache-apisix-and-authing",children:[{value:"Step 1: Configure Authing",id:"step-1-configure-authing",children:[]},{value:"Step 2: Install Apache APISIX",id:"step-2-install-apache-apisix",children:[]},{value:"Step 3: Start Apache APISIX and configure route",id:"step-3-start-apache-apisix-and-configure-route",children:[]},{value:"Step 4: Access Apache APISIX",id:"step-4-access-apache-apisix",children:[]}]},{value:"Summary",id:"summary",children:[]}],h={toc:c};function d(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article describes the detailed steps for interfacing Apache APISIX and Authing.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346620900-ece258db-b9fe-44bf-9857-4ea5c0151138.png",alt:"APISIX-Authing Cover"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("h3",{id:"about-apache-apisix"},"About Apache APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, service meltdown, authentication, observability, etc. Apache APISIX not only supports dynamic plug-in changes and hot-plugging, but also has a number of useful plug-ins.OpenID Connect Plug-in for Apache APISIX With support for the OpenID Connect protocol, users can use this plug-in to enable Apache APISIX to interface with Authing services and be deployed as a centralized authentication gateway in the enterprise."),(0,r.kt)("h3",{id:"about-authing"},"About Authing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.authing.cn/"},"Authing"),' is the first developer-centered full-scene identity cloud product in China, integrating all mainstream identity protocols and providing complete and secure user authentication and access management services for enterprises and developers. With "API First" as the cornerstone of the product, all common functions in the identity field are modularly encapsulated, and all capabilities are APIed to developers through a full-scene programming language SDK. At the same time, users can flexibly use Authing\'s open RESTful APIs for functional expansion to meet the identity management needs of different enterprises in different business scenarios.'),(0,r.kt)("h2",{id:"what-is-centralized-authentication"},"What is Centralized Authentication"),(0,r.kt)("h3",{id:"traditional-authentication-mode"},"Traditional Authentication Mode"),(0,r.kt)("p",null,"In the traditional authentication mode, each back-end application service needs to develop separate functions to support the authentication function, such as interacting with the identity provider and obtaining the user's identity information."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1639467045776-715e1805-540b-4cef-87c5-6166e2af43a8.png",alt:"traditional authentication work flow"})),(0,r.kt)("h3",{id:"centralized-identity-authentication-mode"},"Centralized Identity Authentication Mode"),(0,r.kt)("p",null,"Unlike the traditional authentication mode, the centralized authentication mode takes the user authentication out of the application service. Take Apache APISIX as an example, the process of centralized authentication is shown in the figure above: first, the user initiates a request, and then the front gateway is responsible for the user authentication process, interfacing with the identity provider and sending an authorization request to the identity provider. The identity provider returns the user information. After the gateway completes user identification, it forwards the user identity information to the back-end application in the form of a request header."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346655710-3b9b2ebf-cc86-4335-a87a-913724e0300a.png",alt:"centralized authentication mode work flow"})),(0,r.kt)("h3",{id:"advantages-of-centralized-identity-authentication-mode"},"Advantages of Centralized Identity Authentication Mode"),(0,r.kt)("p",null,"Compared with the traditional authentication mode, the centralized authentication mode has the following advantages."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Simplify the application development process, reduce the development of application workload and maintenance costs, and avoid repeated development of authentication logic for each application."),(0,r.kt)("li",{parentName:"ol"},"Improve business security, centralized authentication mode at the gateway level can intercept unauthenticated requests in time to protect back-end applications.")),(0,r.kt)("p",null,"At the same time, combined with Authing's powerful authentication management functions, the following functions can be achieved."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lifecycle management of authentication services through the console, including creation, enablement, disablement, etc."),(0,r.kt)("li",{parentName:"ol"},"Real-time, visual application monitoring, including: the number of interface requests, interface call latency and interface error information, and real-time alarm notification."),(0,r.kt)("li",{parentName:"ol"},"Centralized logging to easily view user login, logout, and information about adjustments and modifications to the application.")),(0,r.kt)("p",null,"More details can be found in ",(0,r.kt)("a",{parentName:"p",href:"https://www.authing.cn/gateway-integration"},"Authing Access Gateway"),"."),(0,r.kt)("h2",{id:"how-to-implement-centralized-identity-authentication-using-apache-apisix-and-authing"},"How to implement Centralized Identity Authentication using Apache APISIX and Authing"),(0,r.kt)("h3",{id:"step-1-configure-authing"},"Step 1: Configure Authing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your Authing account, select Build your own app and fill in the app name and authentication address. If you do not have an Authing account, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://www.authing.cn/"},"Authing"),', click on "Login/Register" in the upper right corner to register an Authing account.\n',(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346693124-65b10c31-99e3-4e0c-85e2-85653656e0cc.png",alt:"Configure Authing"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Create to create an Authing application.\n",(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346725153-4159407e-2706-4178-b793-7c99973ef95f.png",alt:"Creating an Authing Application"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"During the authentication process, Authing will reject callback URLs other than the configured ones. Since this is a local test, the login callback URL and the logout callback URL are both set to the APISIX access address ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9080/"},"http://127.0.0.1:9080/"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346772276-6bd879ad-0047-496e-9868-b46bfe3e596d.png",alt:"Set the URL for login and logout"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Create user (optional). On the user list page, create a user with the account password user1/user1, and you can set whether to allow access to the application in the "User Information - Authorization Management" page (the default is to allow).\n',(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346792309-01e1d853-247f-4691-bd56-55d899849331.png",alt:"Create User"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641346815891-ff43a29e-2994-4680-bec5-f2553e520d31.png",alt:"Setting Access Permissions"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the application page for the following configuration, which is required when configuring Apache APISIX OpenID Connect."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"App ID: OAuth client ID, i.e. the ID of the application, corresponding to ",(0,r.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"{YOUR_CLIENT_ID}")," below."),(0,r.kt)("li",{parentName:"ol"},"App secret: OAuth client secret, i.e. the application key. Corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"client_secret")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"{YOUR_CLIENT_SECRET}")," below."),(0,r.kt)("li",{parentName:"ol"},"Service_discovery_address: The address of the application service discovery. Corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"{YOUR_DISCOVERY}")," below.\n",(0,r.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1641347262557-04949c02-e4bc-4a74-b100-4668e85087ee.png",alt:"configurations"}))))),(0,r.kt)("h3",{id:"step-2-install-apache-apisix"},"Step 2: Install Apache APISIX"),(0,r.kt)("p",null,"You can install Apache APISIX in a variety of ways including source packages, Docker, Helm Chart, etc."),(0,r.kt)("h4",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("p",null,"The Apache APISIX runtime environment requires dependencies on NGINX and etcd."),(0,r.kt)("p",null,"Before installing Apache APISIX, please install dependencies according to the operating system you are using. We provide the dependencies installation instructions for CentOS7, Fedora 31 and 32, Ubuntu 16.04 and 18.04, Debian 9 and 10, and macOS. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/install-dependencies/"},"Install Dependencies")," for more details."),(0,r.kt)("h4",{id:"installation-via-rpm-package-centos-7"},"Installation via RPM Package (CentOS 7)"),(0,r.kt)("p",null,"This installation method is suitable for CentOS 7; please run the following command to install Apache APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum install -y https://github.com/apache/apisix/releases/download/2.7/apisix-2.7-0.x86_64.rpm\n")),(0,r.kt)("h4",{id:"installation-via-docker"},"Installation via Docker"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix"},"Installing Apache APISIX with Docker"),"."),(0,r.kt)("h4",{id:"installation-via-helm-chart"},"Installation via Helm Chart"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"Installing Apache APISIX with Helm Chart"),"."),(0,r.kt)("h4",{id:"installation-via-source-release"},"Installation via source release"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a directory named ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix-2.7"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir apisix-2.7\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Download Apache APISIX Release source package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://downloads.apache.org/apisix/2.7/apache-apisix-2.7-src.tgz\n")),(0,r.kt)("p",null,"You can also download the Apache APISIX release source package from the Apache APISIX website. The ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/downloads/"},"Apache APISIX Official Website - Download Page")," also provides source packages for Apache APISIX, APISIX Dashboard, and APISIX Ingress Controller."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Unzip the Apache APISIX Release source package.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tar zxvf apache-apisix-2.7-src.tgz -C apisix-2.7\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Install the runtime-dependent Lua libraries.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Switch to the apisix-2.7 directory\ncd apisix-2.7\n# Create dependencies\nmake deps\n")),(0,r.kt)("h4",{id:"initializing-dependencies"},"Initializing Dependencies"),(0,r.kt)("p",null,"Run the following command to initialize the NGINX configuration file and etcd."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# initialize NGINX config file and etcd\nmake init\n")),(0,r.kt)("h3",{id:"step-3-start-apache-apisix-and-configure-route"},"Step 3: Start Apache APISIX and configure route"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to start Apache APISIX."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apisix start\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create routes and configure the OpenID Connect plug-in. the OpenID Connect configuration list is as follows."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OAuth client ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"client_secret"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"OAuth client secret key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"discovery"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Service discovery endpoints for identity providers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scope"),(0,r.kt)("td",{parentName:"tr",align:"left"},"openid"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Need to access resource scope")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"relm"),(0,r.kt)("td",{parentName:"tr",align:"left"},"apisix"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specify the WWW-Authenticate response header authentication information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bearer_only"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to check the token in the request header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"logout_path"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/logout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Logout URI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"redirect_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"request_uri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URI that the identity provider bounces back to, defaulting to the request address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Request timeout time in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the identity provider's checksum ssl certificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"introspection_endpoint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL of the identity provider's token authentication endpoint, which will be extracted from the discovery response if left blank.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"introspection_endpoint_auth_method"),(0,r.kt)("td",{parentName:"tr",align:"left"},"client_secret_basic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name of the authentication method for token introspection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"public_key"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Public key for authentication token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"token_signing_alg_values_expected"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Algorithm for authentication tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set_access_token_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to carry the access token in the request header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"access_token_in_authorization_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The access token is placed in the Authorization header when true, and in the X-Access-Token header when false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set_id_token_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No to carry the ID token to the X-ID-Token request header")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"set_userinfo_header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether to carry user information in the X-Userinfo request header")))),(0,r.kt)("p",null,"The following code example creates a route through the Apache APISIX Admin API, setting the route upstream to ",(0,r.kt)("a",{parentName:"p",href:"http://httpbin.org"},"httpbin.org"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," is a simple backend service for receiving and responding to requests, the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," page of ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org")," will be used below, refer to ",(0,r.kt)("a",{parentName:"p",href:"http://httpbin.org/#/HTTP_Methods/get_get"},"http bin get"),"."),(0,r.kt)("p",null,"For specific configuration items, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/plugins/openid-connect/"},"Apache APISIX OpenID Connect Plugin"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl  -XPOST 127.0.0.1:9080/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d \'{\n    "uri":"/*",\n    "plugins":{\n        "openid-connect":{\n            "client_id":"{YOUR_CLIENT_ID}",\n            "client_secret":"{YOUR_CLIENT_SECRET}",\n            "discovery":"https://{YOUR_DISCOVERY}",\n            "scope":"openid profile",\n            "bearer_only":false,\n            "realm":"apisix",\n            "introspection_endpoint_auth_method":"client_secret_post",\n            "redirect_uri":"http://127.0.0.1:9080/"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "httpbin.org:80":1\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"step-4-access-apache-apisix"},"Step 4: Access Apache APISIX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Visit "',(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:9080/get%22"},'http://127.0.0.1:9080/get"'),' and the page is redirected to the Authing login page as the OpenID Connect plugin is already enabled (this page can be customized in the Authing console under "Applications - Branding").\n',(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641347039112-252cadee-7766-48e8-b33c-b7aa0769bb22.png",alt:" Access Apache APISIX"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the password for the user's account registered with Authing, or the user user1/user1 created in Step 1, and click Login to log in to the Authing account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After a successful login, you can successfully access the get page in httpbin.org. The httpbin.org/get page will return the requested data as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'...\n"X-Access-Token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InFqeU55aVdVd2NhbUFxdEdVRUNCeFNsTWxQSWtTR2N1NmkyZzhEUk1OSGsifQ.eyJqdGkiOiJjTy16a0pCS0NSRFlHR2kyWkJhY0oiLCJzdWIiOiI2MWM5OGFmOTg0MjI4YWU0OTYyMDU4NTIiLCJpYXQiOjE2NDA1OTg4NTgsImV4cCI6MTY0MTgwODQ1OCwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSIsImlzcyI6Imh0dHBzOi8vYXBpc2l4LmF1dGhpbmcuY24vb2lkYyIsImF1ZCI6IjYxYzk4M2M0YjI4NzdkNDg2OWRkOGFjYiJ9.l2V8vDWcCObB1LjIhKs2ARG4J7WuB-0c-bnYZG2GP2zcpl6PMAPcId2B76CaXCU58ajGcfRmOlWJ67UaHrfWKv8IM4vcYN1gwhKdokSyrhEM31gQE-MzNEsEbPaVIGXdpR1N2JnAJK5-tKIjopDAXSwArfO6fQKTpjLhCi3COIA169WGRR4CKCwNzzpFAYP2ilNc18D_HRTBLS6UjxZSNUtWE5dbx7uBjblhwIwn5e1fxiEQcknVK8Dxf8NUliFECvr02HX2hNvmuCECkvA_mZYlshAeqidK8tSEXirAWsWS5jlXFqLiBJkhSHFrbxRyqeOSfJCJR_YcCwk9AzgZGg",\n"X-Id-Token": "eyJhdF9oYXNoIjoiRl8tRjZaUVgtWVRDNEh0TldmcHJmUSIsImJpcnRoZGF0ZSI6bnVsbCwiZmFtaWx5X25hbWUiOm51bGwsImdlbmRlciI6IlUiLCJnaXZlbl9uYW1lIjpudWxsLCJpc3MiOiJodHRwczpcL1wvYXBpc2l4LmF1dGhpbmcuY25cL29pZGMiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2ZpbGVzLmF1dGhpbmcuY29cL2F1dGhpbmctY29uc29sZVwvZGVmYXVsdC11c2VyLWF2YXRhci5wbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOm51bGwsInVwZGF0ZWRfYXQiOiIyMDIxLTEyLTI3VDA5OjU0OjE3Ljc3M1oiLCJ3ZWJzaXRlIjpudWxsLCJ6b25laW5mbyI6bnVsbCwibmFtZSI6bnVsbCwiaWF0IjoxNjQwNTk4ODU4LCJuaWNrbmFtZSI6bnVsbCwibm9uY2UiOiJmMTlmZjhjODM5NzdmZjNlMDczMzZmMzg3Y2QxM2EzMSIsIm1pZGRsZV9uYW1lIjpudWxsLCJleHAiOjE2NDE4MDg0NTgsInN1YiI6IjYxYzk4YWY5ODQyMjhhZTQ5NjIwNTg1MiIsImxvY2FsZSI6bnVsbCwiYXVkIjoiNjFjOTgzYzRiMjg3N2Q0ODY5ZGQ4YWNiIiwicHJvZmlsZSI6bnVsbH0=",\n"X-Userinfo": "eyJ3ZWJzaXRlIjpudWxsLCJ6b25laW5mbyI6bnVsbCwibmFtZSI6bnVsbCwicHJvZmlsZSI6bnVsbCwibmlja25hbWUiOm51bGwsInN1YiI6IjYxYzk4YWY5ODQyMjhhZTQ5NjIwNTg1MiIsImxvY2FsZSI6bnVsbCwiYmlydGhkYXRlIjpudWxsLCJmYW1pbHlfbmFtZSI6bnVsbCwiZ2VuZGVyIjoiVSIsImdpdmVuX25hbWUiOm51bGwsIm1pZGRsZV9uYW1lIjpudWxsLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2ZpbGVzLmF1dGhpbmcuY29cL2F1dGhpbmctY29uc29sZVwvZGVmYXVsdC11c2VyLWF2YXRhci5wbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOm51bGwsInVwZGF0ZWRfYXQiOiIyMDIxLTEyLTI3VDA5OjU0OjE3Ljc3M1oifQ=="\n...\n')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"X-Access-Token"),": Apache APISIX puts the access token obtained from the user provider into the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Access-Token")," request header, optionally in the Authorization request header via ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token_in_authorization_header")," in the plugin configuration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641278494765-139b6ffc-227b-4f02-8b2a-45d762422e15.png",alt:"X-Access-Token"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"X-Id-Token"),": Apache APISIX puts the ID token obtained from the user provider into the X-Id-Token request header after base64 encoding, which can be enabled or disabled by ",(0,r.kt)("inlineCode",{parentName:"p"},"set_id_token_header")," in the plugin configuration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641278494768-867dadf3-8ecd-4376-af03-d86b6a7aa698.png",alt:"X-Id-Token"})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"X-Userinfo"),": Apache APISIX puts the user information obtained from the user provider into X-Userinfo after encoding it in base64. You can choose whether to enable this feature by using ",(0,r.kt)("inlineCode",{parentName:"p"},"set_userinfo_header")," in the plugin configuration."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641278494771-42567d0c-8424-46e2-9c5b-a12cf1af6bc8.png",alt:"X-Userinfo"})),(0,r.kt)("p",{parentName:"li"},"As you can see, Apache APISIX will carry ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Access-Token"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Id-Token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Userinfo")," request headers to the upstream. The upstream can parse these headers to get the user ID information and the user metadata.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'In the "Audit Log - User Behavior Log" in the Authing console, you can observe that user1 login information.\n',(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641347080382-c769eba0-d7f3-490a-bf56-66189f2026a3.png",alt:"Login Information"})))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"This article describes the detailed steps for interfacing Apache APISIX with Authing."),(0,r.kt)("p",null,"Apache APISIX is not only committed to maintaining its own high performance, but also has always attached great importance to the construction of open source ecology. At present, Apache APISIX has 10+ authentication authorization-related plug-ins that support interfacing with mainstream authentication authorization services in the industry."),(0,r.kt)("p",null,"If you have a need to interface to other authentication authorities, visit Apache APISIX's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues"},"GitHub")," and leave your suggestions via issue; or subscribe to Apache APISIX's ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/subscribe-guide"},"mailing list")," to express your thoughts via email."))}d.isMDXComponent=!0}}]);