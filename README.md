# avalon-webpack
分为两部分：
1.主要是重写cs系统的思路说明和介绍。</br>
2.原版的介绍avalon-cli脚手架的相关

##一 ，重写cs系统的思路说明和介绍
1.根目录下index.html中引用<div ms-html="@main"></div>，引用各种页面的模板</br>
2.在index.js中使用路由，将@main的页面的赋给login和home</br>
3.从login切换到home页的条件是点击login.html页面中的登录箭头按钮，并设置href，即<a class="btn-arrow" id="login-btn" href="#!/home"></a> </br>
4.切换到home页面，home页的模板引用了三个组件和一个模板变量，头部，主导航，子导航的组件分别在index.js中已经注册，模板变量在vm中也已经声明，在home.html中使用,即<div ms-html="@mainContent"></div></br>
5.index.js中设置路由，将文件刷新和接口用户的路由分别对应到相应的组件，即将vm中声明的主体部分的模板变量mainContent赋上对应的文件刷新和接口用户的值</br>
6.在nav导航中，给内容管理和基础管理链接上设置对应的href，点击内容管理跳转到文件刷新界面，点击基础管理跳转到接口用户界面上</br>

*todo</br>
a,index.html中没有引入index.js，确可以直接找到index.js的文件，还有对应的文件必须新建到对应的文件夹下，应该是有地方配置了，但是我还没有找到</br>
b,所有的路由配置应该可以放到一个文件中，引入即可，目前还没有做</br>
c,子导航的路由还没有做</br>
d,状态相关还没做</br>


## 二，介绍avalon-cli脚手架

这个一个以webpack2为基础的脚手架正式版，一个多资源统筹的脚手架。</br>
本项目使用[`avalon2`](https://github.com/RubyLouvre/avalon)作为演示框架。</br>
为兼容低版本浏览器，我也是强烈推荐一下它。市面上应该也算唯一能够支持到IE8以下的MVVM框架了吧。

### 关于【Webpack】
1. 服务端使用Koa。需要注意的是，只有一个目的那就是提供了`webpack-dev-middleware` 和 `webpack-hot-middleware`（代码热替换）。使用自定义的Koa程序替换[webpack-dev-server](https://github.com/webpack/webpack-dev-server)，让它更容易实现universal 渲染和为了不使这个包过于庞大。
2. 针对不同的loader采用了多线程编译，极大的加快了编译速度。
3. 使用webpack.DllReferencePlugin打包框架和库。加快编译与打包速度。
4. 启动新技术tree-shaking
5. 提供测试框架进行单元测试，代码覆盖率报告，可与[Travis-ci](https://travis-ci.org)和[Coveralls](https://coveralls.io)快速对接。【[配置说明](https://github.com/sayll/Sayll_Karma)】
6. Babel被配置[babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime)可以让代码更优化。

### 关于【Css】
1. css的模块化，预处理器的编译。（[支持`sass,scss,less,postcss`](/docs/loaders)）
2. 针对低版本浏览器和其他浏览器内核的特殊性，启用[autoprefixer](https://github.com/postcss/autoprefixer)自动添加浏览器前缀
3. 针对移动开发，有独特的处理方案。（具体文档等待补充）
4. 可导入字体和字体图标，操作非常简单。（如[阿里系icon](http://www.iconfont.cn/)）【[配置文档](/docs/basics/Icon.md)】
5. 每次修改都会生成新的文件名，防止旧样式缓存带来的影响。（与JS间做了特殊处理，通过JS引入的CSS不会因JS改变而改变它的hash值）
6. 针对开发模式启用修改自动刷新页面。（做了特殊处理，发布模式将得到优化）

### 关于【Js】
1. 支持ES6的最新特性
2. 模块化，可才用ES6的import，也可用AMD规范的require
3. 每次修改都会生成新的文件名，防止旧脚本缓存带来的影响。（与CSS间做了特殊处理，通过JS引入的CSS不会因CSS改变而改变它的hash值）
4. 快速编译，自动刷新。
5. 将常用的框架和库进行单独打包。(Dll)防止重复引用，导致打包文件臃肿。
6. 提供公共脚本的文件入口，此文件将被所有页面自动引用。（可设置全局变量，引入公共的库。如Jquery）

### 关于【Html】
1. 支持单页应用和多页应用的混合开发。
2. 自动引入页面的CSS和JS文件。无需手动设置URL。(所有文件hash的改变都会导致文件名改变,这里的资源引用全由内部自动完成)
3. 如有使用常用的框架和库进行单独打包。(Dll),将需要单独引用dll的vendor.js;

## 开始

### 环境配置
1. 安装[node.js](https://nodejs.org/)
2. 安装[git](https://git-scm.com/)

### 依赖配置
确认好你的环境配置，然后就可以开始以下步骤。

```bash
$ git clone https://github.com/sayll/avalon-webpack-start.git
$ cd avalon-webpack-start
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

如果一切顺利,就能正常打开端口:[http://localhost:1000/](http://localhost:1000/)

开发过程中，你用得最多的会是`npm start`，但是这里还有很多其它的处理：

|`npm run <script>`|解释|
|------------------|-----------|
|`start`|第一次运行启用。生成DLL文件，服务启动在1000端口，代码热替换开启。|
|`deploy`|删除旧文件，生成新DLL，进行代码测试，打包相关文件（默认目录~/build）。|
|`dev`|与`npm start`类似相同,只有当DLL文件存在时可用。加快开发速度。|
|`test`|开启Karma测试并生成覆盖率报告。|
|`visualizer`|打包资源分析|
|`build`|同`dev`在DLL文件存在时，加快打包速度。|
|`clean`|清除打包的文件|
|`cnpm`|替换为淘宝镜像|
|`dll`|适合第一次启动时运行，生成DLL文件。|
* 第一次运行，推荐使用 `start`,后续调试使用`dev`
* 打包推荐使用`deploy`
* 目前所有相关开发打包都需依赖`dll`,当不清楚或运行出错时，尝试运行一下`npm run dll`,再完成接下来的操作。

## 程序目录

```
.
├── build                    # 所有打包配置项
├── config                   # 项目配置文件
├── server                   # Express 程序 (使用 webpack 中间件)
│   └── main.js              # 服务端程序入口文件
├── app                      # 程序源文件
│   ├── html                 # 多页或单页应用的入口HTML
│   ├── source               # 公共的资源文件
│       ├── css
│       ├── font
│       ├── img
|       └── js              
│   ├── static               # 公共的静态资源文件(所有内部文件通过index.js引入，可配置全局变量。)
│   └── view                 # 主路由和异步分割点
│       └── index            # 匹配html文件夹中的index.html。（css,js文件名对应文件夹名，可直接打包无需单独引入）
│           ├── index.js     # 直接与index.html匹配的入口文件，可以作为单页应用的入口，在内部定义自己的项目目录
│           ├── index.css    # 如是多页应用，可设置对应的CSS文件，直接匹配。
│           └── other **     # 页面的其他资源文件，通过index.js引入
└── test                     # 单元测试（日后调整，待开发ing）
```
## 使用手册

### 流程

基本

1. 位于[`app/html`](/app/html)创建HTML视图【[更多说明](/docs/basics/Html.md)】
2. 主动引入DLL的JS,默认地址为`<script src="/dll/vendor.js"></script>`
3. 位于[`app/view`](/app/view)配置html相关的JS和CSS文件。(JS和CSS需与HTML保持一致，可参考现有模版)【[更多说明](/docs/basics/Views.md)】

高级

1. 引用字体图标Icon【[更多说明](/docs/basics/Icon.md)】
2. 使用框架(avalon)或库(jquery)【[更多说明](/docs/basics/Frame.md)】
3. 设置全局变量。虽引入公共库，但每次调用都需重新声明。所以就有了公共文件来提前声明。【[更多说明](/docs/basics/Common.md)】
4. 使用Css预处理器([更多说明](/docs/loaders))
5. 使用CDN([更多说明](/docs/webpack))
6. 修改目录结构([更多说明](/docs/webpack))

最后

1. 打包文件为`build`文件夹，请以此为根目录。

## 更新日志

[更新详情](/docs/Update.md)

## 最重要的事情

* 亲不要吝啬自己的**Star**，先右上角**Star**一下呗。

<img src='https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=405cc666d543ad4ba67b4ec6b2327697/d058ccbf6c81800a80b7b2cdb53533fa838b47a6.jpg' height='160'>

