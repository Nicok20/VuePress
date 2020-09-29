(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{370:function(t,e,r){"use strict";r.r(e);var s=r(18),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("blockquote",[r("p",[r("a",{attrs:{href:"https://tsanfer.xyz/%E5%88%9B%E5%BB%BA-vuepress-githubpages-travisci-%E5%9C%A8%E7%BA%BF%E6%96%87%E6%A1%A3",target:"_blank",rel:"noopener noreferrer"}},[t._v("最新博客链接"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://tsanfer.github.io/VuePress-GithubPages-TravisCI/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 在线文档链接_Github Pages"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[r("strong",[r("a",{attrs:{href:"https://tsanfer.xyz/VuePress-GithubPages-TravisCI/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 在线文档链接_博客服务器"),r("OutboundLink")],1),t._v("（如果上面进不去，可以进这个，服务器在阿里云）")])])]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://github.com/Tsanfer/VuePress-GithubPages-TravisCI",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github链接"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"最终效果"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最终效果"}},[t._v("#")]),t._v(" 最终效果")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn-image.tsanfer.xyz/img/20200316184115.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"总体"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总体"}},[t._v("#")]),t._v(" 总体")]),t._v(" "),r("p",[t._v("VuePress 在本地完成项目的源文件，推送至 Github 触发 Travis CI 自动构建目标文件，完成后自动部署到另一个 Github 分支，此分支作在线文档使用。")]),t._v(" "),r("p",[t._v("在Github上创建两个分支"),r("code",[t._v("master")]),t._v("和"),r("code",[t._v("gh-pages")]),t._v("，"),r("code",[t._v("master")]),t._v("用于上传源文件和触发 Travis CI 自动执行构建、部署脚本，"),r("code",[t._v("gh-pages")]),t._v("用于保存 Github Pages 的最终页面。")]),t._v(" "),r("p",[t._v("完成上述操作之后就只需修改文本源文件Markdown里面的内容，推送到Github。Travis CI 便可自动构建、部署，使其工作流程简化。")]),t._v(" "),r("h2",{attrs:{id:"过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),r("ol",[r("li",[t._v("将 VuePress 工程上传到"),r("code",[t._v("master")]),t._v("分支")]),t._v(" "),r("li",[t._v("上传成功后触发 TravisCI 开始自动构建")]),t._v(" "),r("li",[t._v("构建完成后将最终页面推送到"),r("code",[t._v("gh-pages")]),t._v("分支")])]),t._v(" "),r("h2",{attrs:{id:"用到的东西"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用到的东西"}},[t._v("#")]),t._v(" 用到的东西")]),t._v(" "),r("ul",[r("li",[t._v("SSH密钥链接Github")]),t._v(" "),r("li",[t._v("VuePress目录文件结构")]),t._v(" "),r("li",[t._v("VuePress配置文件")]),t._v(" "),r("li",[t._v("TravisCI自动构建配置文件")])]),t._v(" "),r("h2",{attrs:{id:"相关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#相关"}},[t._v("#")]),t._v(" 相关")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("VuePress:")]),t._v(" "),r("p",[t._v("每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。")])]),t._v(" "),r("li",[r("p",[t._v("GitHub Pages:")]),t._v(" "),r("p",[t._v("您可以使用 GitHub Pages 直接从 GitHub 仓库托管关于自己、您的组织或您的项目的站点")]),t._v(" "),r("p",[t._v("GitHub Pages 是一项静态站点托管服务，它直接从 GitHub 上的仓库获取 HTML、CSS 和 JavaScript 文件，（可选）通过构建过程运行文件，然后发布网站。")])]),t._v(" "),r("li",[r("p",[t._v("Travis CI")]),t._v(" "),r("p",[t._v("Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。")]),t._v(" "),r("p",[t._v('持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。')]),t._v(" "),r("p",[t._v("持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);