import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.Baw4MH5z.js";const m=JSON.parse('{"title":"02CSS媒体查询","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/media.md","filePath":"frontend/css/media.md"}'),e={name:"frontend/css/media.md"},l=n(`<h1 id="_02css媒体查询" tabindex="-1">02_CSS媒体查询 <a class="header-anchor" href="#_02css媒体查询" aria-label="Permalink to &quot;02\\_CSS媒体查询&quot;">​</a></h1><h3 id="css3媒体查询" tabindex="-1">css3媒体查询 <a class="header-anchor" href="#css3媒体查询" aria-label="Permalink to &quot;css3媒体查询&quot;">​</a></h3><p>css3媒体查询是响应式方案核心</p><h3 id="媒体类型" tabindex="-1">媒体类型 <a class="header-anchor" href="#媒体类型" aria-label="Permalink to &quot;媒体类型&quot;">​</a></h3><ul><li>all 所有媒体（默认值）</li><li>screen 彩色屏幕</li><li>print 打印预览</li><li>projection 手持设备</li><li>tv 电视</li><li>braille 盲文触觉设备</li><li>embossed 盲文打印机</li><li>speech “听觉”类似的媒体设备</li><li>tty 不适用像素的设备</li></ul><h3 id="媒体属性" tabindex="-1">媒体属性 <a class="header-anchor" href="#媒体属性" aria-label="Permalink to &quot;媒体属性&quot;">​</a></h3><ul><li>width （可加max min前缀）</li><li>height （可加max min前缀</li><li>device-width （可加max min前缀）</li><li>device-pixel-ratio（可加max min前缀，需要加webkit前缀）</li><li>orientation portrait竖屏 landscape横屏</li></ul><h3 id="操作符-关键字-only-and-or-not" tabindex="-1">操作符，关键字 (only,and,(，or),not) <a class="header-anchor" href="#操作符-关键字-only-and-or-not" aria-label="Permalink to &quot;操作符，关键字 (only,and,(，or),not)&quot;">​</a></h3><h2 id="only-防止老旧的浏览器-不支持带媒体属性的查询而应用到给定的样式" tabindex="-1">only:防止老旧的浏览器 不支持带媒体属性的查询而应用到给定的样式. <a class="header-anchor" href="#only-防止老旧的浏览器-不支持带媒体属性的查询而应用到给定的样式" aria-label="Permalink to &quot;only:防止老旧的浏览器  不支持带媒体属性的查询而应用到给定的样式.&quot;">​</a></h2><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  @media</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> only</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    规则；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> @media</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  screen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    规则；</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    规则</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="在老款的浏览器下" tabindex="-1">在老款的浏览器下 <a class="header-anchor" href="#在老款的浏览器下" aria-label="Permalink to &quot;在老款的浏览器下&quot;">​</a></h2><p>@media only ---&gt; 因为没有only这种设备 规则被忽略 @media screen ---&gt; 因为有screen这种设备而且老浏览器会忽略带媒体属性的查询</p><p>* 建议在每次抒写media query的时候带上only*</p><p>and:</p><p>连接媒体属性 、连接媒体类型</p><p>对于所有的连接选项都要匹配成功才能应用规则</p><p>or(,) : 和and相似</p><p>对于所有的连接选项只要匹配成功一个就能应用规则</p><p>not:取反</p>`,19),t=[l];function h(p,r,d,o,k,c){return i(),a("div",null,t)}const y=s(e,[["render",h]]);export{m as __pageData,y as default};