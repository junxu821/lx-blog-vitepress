import{_ as s,c as a,o as i,a5 as n}from"./chunks/framework.DhzKnR-G.js";const u=JSON.parse('{"title":"迭代器","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/迭代器.md","filePath":"frontend/js/迭代器.md"}'),e={name:"frontend/js/迭代器.md"},l=n(`<h1 id="迭代器" tabindex="-1">迭代器 <a class="header-anchor" href="#迭代器" aria-label="Permalink to &quot;迭代器&quot;">​</a></h1><h1 id="_1-默认实现迭代器的有" tabindex="-1">1.默认实现迭代器的有 <a class="header-anchor" href="#_1-默认实现迭代器的有" aria-label="Permalink to &quot;1.默认实现迭代器的有&quot;">​</a></h1><ol><li>Map,Set,Array,定型数组,arguments,NodeList,字符串</li></ol><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;abcd&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a[Symbol.iterator])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a[Symbol.iterator]())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Iterable:迭代器协议</p><p>Iterator:迭代器接口</p><p><strong>迭代器会阻止垃圾回收机制,因为迭代器维护着一个指向可迭代对象的引用</strong></p><h1 id="_2-实现了迭代器的类型" tabindex="-1">2.实现了迭代器的类型: <a class="header-anchor" href="#_2-实现了迭代器的类型" aria-label="Permalink to &quot;2.实现了迭代器的类型:&quot;">​</a></h1><ul><li>内部会有一个Symbol.iterator的工厂函数</li><li>调用这个工厂函数会生成一个新的迭代器</li></ul><h1 id="_3-可以隐式的调用这个迭代器的结构有" tabindex="-1">3.可以隐式的调用这个迭代器的结构有: <a class="header-anchor" href="#_3-可以隐式的调用这个迭代器的结构有" aria-label="Permalink to &quot;3.可以隐式的调用这个迭代器的结构有:&quot;">​</a></h1><ol><li>for...of...</li><li>数组结构</li><li>扩展运算符</li><li>Array.from</li><li>创建集合</li><li>创建映射</li><li>Promise.all</li><li>Promise.race</li><li>yield*操作符</li></ol><h1 id="_4-实现一个迭代器" tabindex="-1">4.实现一个迭代器 <a class="header-anchor" href="#_4-实现一个迭代器" aria-label="Permalink to &quot;4.实现一个迭代器&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[Symbol.iterator](){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">limit){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {done:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,value:count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {done:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,value:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="_5-提前终止迭代器" tabindex="-1">5.提前终止迭代器 <a class="header-anchor" href="#_5-提前终止迭代器" aria-label="Permalink to &quot;5.提前终止迭代器&quot;">​</a></h1><p><em>for...of...可以通过break,continue,return,throw提前退出</em></p><p>可以通过在迭代器身上增加return方法,返回一个{done:true}来提前终止,但是这种方法的并不是万能的,有的迭代器并不能终止,但是return()方法还是会被调用的</p>`,16),t=[l];function r(p,h,k,o,d,c){return i(),a("div",null,t)}const g=s(e,[["render",r]]);export{u as __pageData,g as default};
