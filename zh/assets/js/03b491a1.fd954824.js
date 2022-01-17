"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62916],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,d=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99490:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return h}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o={id:"blog",title:"Blog Contributing Guide",keywords:["API gateway","APISIX","Apache APISIX","blog","how to write a blog"],description:"This article is a set of guidelines for contributors who want to write blogs. This guideline will teach you how to contribute if you want to add a new blog, or modify existing blog contents."},l=void 0,s={unversionedId:"blog",id:"blog",isDocsHomePage:!1,title:"Blog Contributing Guide",description:"This article is a set of guidelines for contributors who want to write blogs. This guideline will teach you how to contribute if you want to add a new blog, or modify existing blog contents.",source:"@site/docs/general/blog-contributing-guide.md",sourceDirName:".",slug:"/blog",permalink:"/zh/docs/general/blog",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/blog-contributing-guide.md",tags:[],version:"current",lastUpdatedBy:"tzssangglass",lastUpdatedAt:1642413924,formattedLastUpdatedAt:"2022/1/17",frontMatter:{id:"blog",title:"Blog Contributing Guide",keywords:["API gateway","APISIX","Apache APISIX","blog","how to write a blog"],description:"This article is a set of guidelines for contributors who want to write blogs. This guideline will teach you how to contribute if you want to add a new blog, or modify existing blog contents."},sidebar:"docs",previous:{title:"Contributor Guide",permalink:"/zh/docs/general/contributor-guide"},next:{title:"Committer Guide",permalink:"/zh/docs/general/committer-guide"}},p=[{value:"Overview",id:"overview",children:[]},{value:"What you can contribute",id:"what-you-can-contribute",children:[{value:"Add a new blog",id:"add-a-new-blog",children:[]},{value:"Fix typos or formats",id:"fix-typos-or-formats",children:[]}]},{value:"Before you contribute",id:"before-you-contribute",children:[{value:"Commit message style",id:"commit-message-style",children:[]},{value:"Pull request title guide",id:"pull-request-title-guide",children:[]}]},{value:"How to contribute via git command line",id:"how-to-contribute-via-git-command-line",children:[{value:"Local repository configuration",id:"local-repository-configuration",children:[]},{value:"Add a new blog",id:"add-a-new-blog-1",children:[]},{value:"Fix typos or formats",id:"fix-typos-or-formats-1",children:[]},{value:"Resolving conflicts",id:"resolving-conflicts",children:[]}]}],m={toc:p};function h(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This guideline will teach you how to contribute if you want to add a new blog, or modify existing blog contents."),(0,i.kt)("p",null,"If you find an issue on current documents, please feel free to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/issues/new"},"file an issue")," and let the community know about it, or you can ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/pulls"},"sumbit a pull request")," to fix or update. Both actions are welcome and recommended."),(0,i.kt)("p",null,"The blogs are written in two languages: English and Chinese. We encourage contributors to add blogs in their preferred language. It is completely up to you. We can handle translations and ask you to do a pull request review later."),(0,i.kt)("p",null,"English blogs are located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"website/blog")," directory, in which they are categorized by year, month and date. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"website/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes.md")," means that a blog named ",(0,i.kt)("inlineCode",{parentName:"p"},"develop-apisix-ingress-with-nocalhost-in-kubernetes.md")," was published on November 22nd, 2021, and it is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"website/blog/2021/11/22")," directory. Once it is reviewed and megered, the URL should be: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://apisix.apache.org/blog/2021/11/22/develop-apisix-ingress-with-nocalhost-in-kubernetes"),"."),(0,i.kt)("p",null,"Similarly, Chinese blogs are located in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/i18n/zh/docusaurus-plugin-content-blog")," directory and follow the same patterns described above."),(0,i.kt)("h2",{id:"what-you-can-contribute"},"What you can contribute"),(0,i.kt)("p",null,"We encourge contributors and users to write blogs about how they contribute or use Apache APISIX, or help us fix typos and update contents in existing blogs."),(0,i.kt)("h3",{id:"add-a-new-blog"},"Add a new blog"),(0,i.kt)("p",null,"To add a new blog, please perform the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Find the right place to store your blog."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If you plan to submit a blog written in ",(0,i.kt)("strong",{parentName:"li"},"English"),", please create a markdown file under ",(0,i.kt)("inlineCode",{parentName:"li"},"website/blog")," directory."),(0,i.kt)("li",{parentName:"ol"},"If you plan to submit a blog written in ",(0,i.kt)("strong",{parentName:"li"},"Chinese"),", please create a markdown file under ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/zh/docusaurus-plugin-content-blog")," directory."),(0,i.kt)("li",{parentName:"ol"},"If you cannot find an existing year, month, or date directory that fits your desired published date, you can go ahead and create such directory on your own."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a markdown file in the directory. Please make sure that the file name is written in English with ",(0,i.kt)("strong",{parentName:"p"},"NO")," capitalized letters. During review session, we may suggest changing it to achieve better SEO performance (Yes, currently some files names contain capitalized letters, we are working on it, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website/issues/713"},"Issue #713"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add text, images, diagrams, charts to the markdown file."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"There is nothing much to say about adding text."),(0,i.kt)("li",{parentName:"ol"},"To add images, please upload images to by using ",(0,i.kt)("a",{parentName:"li",href:"https://markdown.apiseven.com"},"this public image CDN service")," , and copy the links from there."),(0,i.kt)("li",{parentName:"ol"},"To add charts or diagrams, we are happy to see any sort of charts and diagrams. From previous experience, charts with 4 columns or less are the perfect size displayed on screen."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optional: run it locally to inspect any typos or formatting issues left behind. Although we implemented lint and error checks in the repository, we suggest running it locally to avoid repeated work. To run it locally, please run ",(0,i.kt)("inlineCode",{parentName:"p"},"cd website"),", and then run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," commands in your terminal.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Submit a pull request to our repository."))),(0,i.kt)("h4",{id:"blogs-header-information"},"Blog's header information"),(0,i.kt)("h5",{id:"single-author-template"},"Single author template"),(0,i.kt)("p",null,"Our blogs start with a header sections containing fields such as ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"authorURL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"authorImageURL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keywords"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"tags"),"."),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," are starightforward, the other fields might be a bit confusing for first-time contributors. Explanation of each field is mentioned below. Please note that these fields could change over time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "blog\'s title"\nauthor: "blog\'s author"\nauthorURL: "author\'s GitHub ID"\nauthorImageURL: "author\'s GitHub Image"\nkeywords:\n- keywords 1\n- keywords 2\n- keywords 3\n- keywords 4\n- keywords 5\ndescription: description of this blog\ntags: [tag1]\n')),(0,i.kt)("h5",{id:"co-author-template"},"Co-author template"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/next/blog#blog-post-authors"},"Co-author")," feature is added, since translating and editing articles is also time-consuming, we would like to give credit to translators and technical writers as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'title: "blog\'s title"\nauthors:\n  - name: "Author\'s Name"\n    title: "Author\'s title"\n    url: "Author\'s GitHub"\n    image_url: "Author\'s Image URL"\n  - name: "Translator/Technical Writer\'s name"\n    url: "Translator/Technical Writer\'s GitHub"\n    image_url: "Translator/Technical Writer\'s Image URL"\nkeywords:\n- keywords 1\n- keywords 2\n- keywords 3\n- keywords 4\n- keywords 5\ndescription: description of this blog\ntags: [tag1]\n')),(0,i.kt)("h5",{id:"title"},"title"),(0,i.kt)("p",null,"Required field for single author template, the title of the article, the standard expression in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},'title: "title"'),"."),(0,i.kt)("h5",{id:"author"},"author"),(0,i.kt)("p",null,"Required field for single author template, the article's author name, the standard form of expression for ",(0,i.kt)("inlineCode",{parentName:"p"},'author: "author"'),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Community author: if you are willing to provide your real name, use your real name, if not, use your GitHub account name.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Business case authors: please provide real name, such as John Doe."))),(0,i.kt)("h5",{id:"authorurl"},"authorURL"),(0,i.kt)("p",null,"For business users or business cases, you can leave this item blank. Because GitHub is personal, and in the case of a business case, the person represents his company rather than himself, it is recommended that you leave this blank to avoid unnecessary controversy. This does not mean leave ",(0,i.kt)("inlineCode",{parentName:"p"},"authorURL"),": blank, it means just delete the entire line that corresponds to it, including the variable name."),(0,i.kt)("h5",{id:"authorimageurl"},"authorImageURL"),(0,i.kt)("p",null,"The author's GitHub avatar, it is related with ",(0,i.kt)("inlineCode",{parentName:"p"},"authorURL"),". For the same reason described above, this is an optional field. See below for how to get the avatar."),(0,i.kt)("h4",{id:"authors"},"authors"),(0,i.kt)("p",null,"The required field for co-author template. When a blog is co-authored by 2 people, please use ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," to give credits to both authors. ",(0,i.kt)("inlineCode",{parentName:"p"},"authors")," consists of the following fields: ",(0,i.kt)("inlineCode",{parentName:"p"},"authors.name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"authors.url"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"authors.title")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"authors.image_url"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.name"),": authors' names in plain text, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},'name: "John Doe"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.title"),": author's title in plain text, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},'title: "Technical Writer"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.url"),": authors' GitHub pages, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},'url: "https://github.com/yzeng25"'),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authors.image_url"),": author's GitHub avatar, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},'authors.image_url: "https://avatars.githubusercontent.com/u/36651058?v=4"'),".")),(0,i.kt)("h5",{id:"keywords"},"keywords"),(0,i.kt)("p",null,'Required field, keyword, which is used to enhance better SEO performance. Usually the first three keywords are "APISIX", "Apache APISIX", "API Gateway", and the last two are the article\'s own keywords.'),(0,i.kt)("h5",{id:"description"},"description"),(0,i.kt)("p",null,"Required field, the description, which is used to enhance better SEO performance. Usually you can summarize the first or last paragraph of the article, forming about 120 words of text, and put it here."),(0,i.kt)("h5",{id:"tags"},"tags"),(0,i.kt)("p",null,"Required field, tag, which is used to categorize the blog. Each post has and can only have one tag. If more than one tag is suitable, please choose the most suitable one. The available tags and explanations are as follows. Please note that these tags and rules of applying tags could change over time."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Community"),': community related, e.g. "How to contribute to an open source project without writing code?"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Events"),": event-related, for example: online live stream, event previews, meetups, and online meeting, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interview"),": Interviews, e.g., Dr. Yang Li interview, Summer of Programming interview."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Practical Case"),': Best practices, easily confused with Technology. The factors that determine whether an article is a Technology or a Practical Case are: the content of the article and the subject of the description. For example, if the article is about "Running Apache APISIX on xxx platform", then it is a Practical Case; for example, if the article is about technical stuff, "Apache APISIX v.s. Envoy", then it is Technology.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Release"),": Release notes, this is better understood. It should be noted that the release notes inside the blog are polished, while the release notes inside the release are written by developers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Security"),": Security vulnerability notification and methods to bypass security vulnerabilities, currently there are only two articles, very good to identify, generally have CVE-xxxxxxx is it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Technology"),': Technical articles, easily confused with Practical Case. The factors that determine whether an article is a Technology or a Practical Case are: the content of the article and the subject of the description. For example, if the article is about "Running Apache APISIX on xxx platform", then it is a Practical Case; for example, if the article is about technical stuff, "Apache APISIX v.s. Envoy", then it is Technology.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User Case"),": User Case, this is also very straightforward. Please tell us how you use Apache APISIX and your feelings about Apache APISIX.")),(0,i.kt)("p",null,"We can help authors to use a better category once a pull request is submitted."),(0,i.kt)("h4",{id:"how-to-get-the-authorimageurl-or-authorsimage_url"},"How to get the authorImageURL or authors.image_url"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Chrome or your preferred browser."),(0,i.kt)("li",{parentName:"ol"},"Enter the author's GitHub address to access the author's GitHub home page."),(0,i.kt)("li",{parentName:"ol"},'Right click on the author\'s avatar, and click "copy image address".'),(0,i.kt)("li",{parentName:"ol"},"Paste image address to the authorImageURL field.\n",(0,i.kt)("img",{parentName:"li",src:"https://static.apiseven.com/202108/1638257037354-10fc1d17-c0f7-4826-84c9-5966b1ae43ad.png",alt:"How to get the authorImageURL"}))),(0,i.kt)("h4",{id:"truncate-and-overview"},"truncate and overview"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"> overview\n\n\x3c!--truncate--\x3e\n")),(0,i.kt)("p",null,"An overview is entered starting with ",(0,i.kt)("inlineCode",{parentName:"p"},">")," and a space followed by texts. The overview can be your own summary of the article, or it can be the first paragraph of the article with a summary description. When you are done, type ",(0,i.kt)("inlineCode",{parentName:"p"},"<! --truncate--\x3e"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"<! --truncate---\x3e")," serves to display the ",(0,i.kt)("inlineCode",{parentName:"p"},"<! --truncate---\x3e")," above the blog overview, or if there is no overview, nothing will be displayed; if there is an overview but no ",(0,i.kt)("inlineCode",{parentName:"p"},"<! --truncate---\x3e"),", it will show the whole thing. For more information, please visit ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/blog#blog-list"},"Docusaurus Offical Document: Blog list"),"."),(0,i.kt)("h4",{id:"difference-between-description-and-overview"},"Difference between Description and Overview"),(0,i.kt)("p",null,"Some people may ask: why should we add the same contents in two fields? First of all, they are indeed both summary text. Second, they are different in the following way: description is used for SEO enhancements, overview is used to display contents on the blog page."),(0,i.kt)("h3",{id:"fix-typos-or-formats"},"Fix typos or formats"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Locate the file. Chinese blogs are located in ",(0,i.kt)("inlineCode",{parentName:"li"},"website/i18n/zh/docusaurus-plugin-content-blog")," directory. English blogs are located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"website/blog")," directory."),(0,i.kt)("li",{parentName:"ol"},"Fix the typos or formats."),(0,i.kt)("li",{parentName:"ol"},"Submit a pull request to our repository.")),(0,i.kt)("h2",{id:"before-you-contribute"},"Before you contribute"),(0,i.kt)("h3",{id:"commit-message-style"},"Commit message style"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The initial/first commit message should follow this style: ",(0,i.kt)("inlineCode",{parentName:"li"},"docs: type in your actual commit message"),". Otherwise, the CI tests would fail and you would need to modify the commit message."),(0,i.kt)("li",{parentName:"ol"},"The later commit messages would be nice if you follow these style (it is totally fine if you do it your way):",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"update: type in your actual commit message")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"fix: type in your actual commit message"))))),(0,i.kt)("h3",{id:"pull-request-title-guide"},"Pull request title guide"),(0,i.kt)("p",null,"Pull request title is usually generated from the first commit message, this is why we need a uniformed message for the first commit message. It is easier to maintain this way. Remember this is repository for website and blog, titles start with prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"docs:")," can help us track down particular pull requests."),(0,i.kt)("h2",{id:"how-to-contribute-via-git-command-line"},"How to contribute via git command line"),(0,i.kt)("h3",{id:"local-repository-configuration"},"Local repository configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your browser and visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-website"},"https://github.com/apache/apisix-website"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'fork' in the upper right corner to fork it to your own repository.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy your own remote repository address.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open your terminal, and type in the following commands. Change to your desired directory to store the files, and git clone it from remote."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd {path or directory name} # change to your desired directory\ngit clone 'https://github.com/{your GitHub Username}/apisix-website' # After forking the repo to your own GitHub, please clone your own repo to local\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"View the relationship between your repository and your remote repository. The reuslt should be two lines containing 'origin' messages only."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you need to add the main repository as 'upstream'."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream https://github.com/apache/apisix-website.git\n")),(0,i.kt)("p",{parentName:"li"},"To verify that 'upstream' is added: run git remote -v , the result should be 4 lines, 2 with 'origin' and 2 with 'upstream'."))),(0,i.kt)("p",null,"These steps conclude the process of adding and configuring a local repository. Next, let's see how to add a new blog, modify contents, and how to resolve conflicts."),(0,i.kt)("h3",{id:"add-a-new-blog-1"},"Add a new blog"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Switch to the apisix-website directory."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd apisix-website\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then find out how many branches there are and which branch you are currently in."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git branch\n")),(0,i.kt)("p",{parentName:"li"},"Ideally, there should be few branches and they should stay on the branch where the last change was made or on the master branch.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new branch and specify that it is upstream of the master branch of the GitHub master repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b {branch name} upstream/master # replace {branch name} with actual branch name\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pull the latest changes from the master branch in main repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream master\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Synchronize changes to the local branch."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add new blog.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you're done editing blogs, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git add")," command to temporarily store them."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git add .\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," to record your changes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "docs: brief message about this change" # message should be concise and shorter than 50 characters\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, run git push to push the changes to the remote repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit GitHub website in your browser, create a pull request, and edit the change information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete your pull request."))),(0,i.kt)("h3",{id:"fix-typos-or-formats-1"},"Fix typos or formats"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First switch to the apisix-website path."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd apisix-website\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then find out how many branches there are and which branch you are currently in."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git branch\n")),(0,i.kt)("p",{parentName:"li"},"Ideally, there should be few branches and they should stay on the branch where the last change was made or on the master branch.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new branch and specify that it is upstream of the master branch of the GitHub master repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b {branch name} upstream/master # replace {branch name} with actual branch name\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pull the latest changes from the master branch in main repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream master\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Synchronize changes to the local branch."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fix typos or formats.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When you're done making changes, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git add")," command to temporarily store them."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git add .\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then run ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," to record your changes."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git commit -m "docs: brief message about this change" # message should be concise and shorter than 50 characters\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, run git push to push the changes to the remote repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the GitHub code repository in your browser, create the PR, and edit the change information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Complete your pull request."))),(0,i.kt)("h3",{id:"resolving-conflicts"},"Resolving conflicts"),(0,i.kt)("h4",{id:"why-does-conflict-occur"},"Why does conflict occur"),(0,i.kt)("p",null,"Conflict can occur when you submit a PR, and the reason for the conflict is simple: when you make a local change, someone else has committed the PR and merged it into master, and the master you pulled at the time is not the latest version anymore. GitHub is confused because it has no way to determine which of the two versions of the same file prevails. So it throws the problem to the person who created it: whoever's pull request caused the conflict is in charge of the problem."),(0,i.kt)("h4",{id:"how-to-resolve-conflict"},"How to resolve conflict"),(0,i.kt)("h5",{id:"rebase-is-a-good-method"},"Rebase is a good method"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Since the master pulled at the time is out of date, then pull the latest again."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream master\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sync the latest to this local branch."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Handle conflict locally.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After you're done, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"git push -f")," again."))),(0,i.kt)("h5",{id:"cherry-pick-is-an-alternative"},"Cherry-pick is an alternative"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new branch locally."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b {new branch name} upstream/master\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pull the latest changes from the remote master repository."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream master\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Move all changes from the original branch to the new branch."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git cherry-pick {commit number}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Handle conflict locally.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"git add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," once."))))}h.isMDXComponent=!0}}]);