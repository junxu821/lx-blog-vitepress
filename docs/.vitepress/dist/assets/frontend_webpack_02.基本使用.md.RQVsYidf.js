import{_ as a,c as s,o as e,a5 as n}from"./chunks/framework.DhzKnR-G.js";const m=JSON.parse('{"title":"02.基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/webpack/02.基本使用.md","filePath":"frontend/webpack/02.基本使用.md"}'),p={name:"frontend/webpack/02.基本使用.md"},i=n(`<h1 id="_02-基本使用" tabindex="-1">02.基本使用 <a class="header-anchor" href="#_02-基本使用" aria-label="Permalink to &quot;02.基本使用&quot;">​</a></h1><p><strong>Webpack</strong>** 是一个静态资源打包工具。**</p><p>它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。</p><p>输出的文件就是编译好的文件，就可以在浏览器段运行了。</p><p>我们将 <code>Webpack</code> 输出的文件叫做 <code>bundle</code>。</p><h1 id="功能介绍" tabindex="-1">功能介绍 <a class="header-anchor" href="#功能介绍" aria-label="Permalink to &quot;功能介绍&quot;">​</a></h1><p>Webpack 本身功能是有限的:</p><ul><li>开发模式：仅能编译 JS 中的 <code>ES Module</code> 语法</li><li>生产模式：能编译 JS 中的 <code>ES Module</code> 语法，还能压缩 JS 代码</li></ul><h1 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h1><h1 id="_1-资源目录" tabindex="-1">1. 资源目录 <a class="header-anchor" href="#_1-资源目录" aria-label="Permalink to &quot;1\\. 资源目录&quot;">​</a></h1><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>webpack_code # 项目根目录（所有指令必须在这个目录运行）</span></span>
<span class="line"><span>    └── src # 项目源码目录</span></span>
<span class="line"><span>        ├── js # js文件目录</span></span>
<span class="line"><span>        │   ├── count.js</span></span>
<span class="line"><span>        │   └── sum.js</span></span>
<span class="line"><span>        └── main.js # 项目主文件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="_2-创建文件" tabindex="-1">2. 创建文件 <a class="header-anchor" href="#_2-创建文件" aria-label="Permalink to &quot;2\\. 创建文件&quot;">​</a></h1><ul><li>count.js</li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default function count(x, y) {</span></span>
<span class="line"><span>  return x - y;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>sum.js</li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default function sum(...args) {</span></span>
<span class="line"><span>  return args.reduce((p, c) =&gt; p + c, 0);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>main.js</li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import count from &quot;./js/count&quot;;</span></span>
<span class="line"><span>import sum from &quot;./js/sum&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>console.log(count(2, 1));</span></span>
<span class="line"><span>console.log(sum(1, 2, 3, 4));</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="_3-下载依赖" tabindex="-1">3. 下载依赖 <a class="header-anchor" href="#_3-下载依赖" aria-label="Permalink to &quot;3\\. 下载依赖&quot;">​</a></h1><p>打开终端，来到项目根目录。运行以下指令：</p><ul><li>初始化<code>package.json</code></li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm init -y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时会生成一个基础的 <code>package.json</code> 文件。</p><p><strong>需要注意的是 <strong><strong>package.json</strong></strong> 中 <strong><strong>name</strong></strong> 字段不能叫做 <strong><strong>webpack</strong></strong>, 否则下一步会报错</strong></p><ul><li>下载依赖</li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm i webpack webpack-cli -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-启用-webpack" tabindex="-1"><a href="http://xxpromise.gitee.io/webpack5-docs/base/base.html#_4-%E5%90%AF%E7%94%A8-webpack" target="_blank" rel="noreferrer">#</a>4. 启用 Webpack <a class="header-anchor" href="#_4-启用-webpack" aria-label="Permalink to &quot;[#](http://xxpromise.gitee.io/webpack5-docs/base/base.html#_4-%E5%90%AF%E7%94%A8-webpack)4. 启用 Webpack&quot;">​</a></h3><ul><li>开发模式</li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx webpack ./src/main.js --mode=development</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>生产模式</li></ul><div class="language-Plain vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plain</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx webpack ./src/main.js --mode=production</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npx webpack</code>: 是用来运行本地安装 <code>Webpack</code> 包的。</p><p><code>./src/main.js</code>: 指定 <code>Webpack</code> 从 <code>main.js</code> 文件开始打包，不但会打包 <code>main.js</code>，还会将其依赖也一起打包进来。</p><p><code>--mode=xxx</code>：指定模式（环境）。</p><h1 id="_5-观察输出文件" tabindex="-1">5. 观察输出文件 <a class="header-anchor" href="#_5-观察输出文件" aria-label="Permalink to &quot;5\\. 观察输出文件&quot;">​</a></h1><p>默认 <code>Webpack</code> 会将文件打包输出到 <code>dist</code> 目录下，我们查看 <code>dist</code> 目录下文件情况就好了</p><h1 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h1><p><code>Webpack</code> 本身功能比较少，只能处理 <code>js</code> 资源，一旦遇到 <code>css</code> 等其他资源就会报错。</p><p>所以我们学习 <code>Webpack</code>，就是主要学习如何处理其他资源。</p>`,39),l=[i];function c(o,t,r,d,u,b){return e(),s("div",null,l)}const g=a(p,[["render",c]]);export{m as __pageData,g as default};
