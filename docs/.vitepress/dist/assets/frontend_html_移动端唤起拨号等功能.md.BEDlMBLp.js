import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DhzKnR-G.js";const c=JSON.parse('{"title":"移动端唤起拨号等功能","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/html/移动端唤起拨号等功能.md","filePath":"frontend/html/移动端唤起拨号等功能.md"}'),t={name:"frontend/html/移动端唤起拨号等功能.md"},l=n(`<h1 id="移动端唤起拨号等功能" tabindex="-1">移动端唤起拨号等功能 <a class="header-anchor" href="#移动端唤起拨号等功能" aria-label="Permalink to &quot;移动端唤起拨号等功能&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html在</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">head</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">中加入这一段</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;format-detection&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;telephone=yes&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">callPhone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () { </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//创建一个方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sms:10086?body=短信内容&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  window.location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;sms:10086&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 不添加内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sms:10086&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;发送短信&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sms:10086?body=短信内容&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> :href=&quot;&#39;mailto:&#39;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> +</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> numbers&quot;&gt;{{</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> numbers</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> }}&lt;/a&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //numbers 就是号码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h1>`,3),h=[l];function e(p,k,r,d,E,g){return a(),i("div",null,h)}const y=s(t,[["render",e]]);export{c as __pageData,y as default};
