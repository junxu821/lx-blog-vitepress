import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DhzKnR-G.js";const g=JSON.parse('{"title":"DOM细节","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/DOM细节.md","filePath":"frontend/js/DOM细节.md"}'),l={name:"frontend/js/DOM细节.md"},e=n(`<h1 id="dom细节" tabindex="-1">DOM细节 <a class="header-anchor" href="#dom细节" aria-label="Permalink to &quot;DOM细节&quot;">​</a></h1><h1 id="dom" tabindex="-1">DOM <a class="header-anchor" href="#dom" aria-label="Permalink to &quot;DOM&quot;">​</a></h1><h2 id="_1-节点及其类型" tabindex="-1">1. 节点及其类型: <a class="header-anchor" href="#_1-节点及其类型" aria-label="Permalink to &quot;1\\. 节点及其类型:&quot;">​</a></h2><ol><li>元素节点</li><li>属性节点: 元素的属性, 可以直接通过属性的方式来操作.</li><li>文本节点: 是元素节点的子节点, 其内容为文本.</li><li>documnet</li></ol><h2 id="_2-在-html-文档的什么位置编写-js-代码" tabindex="-1">2. 在 html 文档的什么位置编写 js 代码? <a class="header-anchor" href="#_2-在-html-文档的什么位置编写-js-代码" aria-label="Permalink to &quot;2\\. 在 html 文档的什么位置编写 js 代码?&quot;">​</a></h2><p>直接在 html 页面中书写代码.</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;button&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;alert(&#39;hello world&#39;);&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Click Me!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="缺点" tabindex="-1">缺点: <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点:&quot;">​</a></h3><p>①. js 和 html 强耦合, 不利用代码的维护</p><p>②. 若 click 相应函数是比较复杂的, 则需要先定义一个函数, 然后再在 onclick 属性中完成对函数的引用, 比较麻烦</p><h3 id="一般地-不能在-body-节点之前来直接获取-body-内的节点-因为此时-html-文档树还没有加载完成-获取不到指定的节点" tabindex="-1">一般地, 不能在 body 节点之前来直接获取 body 内的节点, 因为此时 html 文档树还没有加载完成, 获取不到指定的节点: <a class="header-anchor" href="#一般地-不能在-body-节点之前来直接获取-body-内的节点-因为此时-html-文档树还没有加载完成-获取不到指定的节点" aria-label="Permalink to &quot;一般地, 不能在 body 节点之前来直接获取 body 内的节点, 因为此时 html 文档树还没有加载完成, 获取不到指定的节点:&quot;">​</a></h3><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Type&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/html; charset=UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Untitled Document&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cityNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;city&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //打印结果为 null.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cityNode);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="可以在整个-html-文档的最后编写类似代码-但这不符合习惯" tabindex="-1">可以在整个 html 文档的最后编写类似代码, 但这不符合习惯 <a class="header-anchor" href="#可以在整个-html-文档的最后编写类似代码-但这不符合习惯" aria-label="Permalink to &quot;可以在整个 html 文档的最后编写类似代码, 但这不符合习惯&quot;">​</a></h3><h3 id="一般地-在-body-节点之前编写-js-代码-但需要利用-window-onload-事件" tabindex="-1">一般地, 在 body 节点之前编写 js 代码, 但需要利用 window.onload 事件, <a class="header-anchor" href="#一般地-在-body-节点之前编写-js-代码-但需要利用-window-onload-事件" aria-label="Permalink to &quot;一般地, 在 body 节点之前编写 js 代码, 但需要利用 window.onload 事件,&quot;">​</a></h3><p>该事件在当前文档完全加载之后被触发, 所以其中的代码可以获取到当前文档的任何节点.</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Type&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/html; charset=UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Untitled Document&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                    var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cityNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;city&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cityNode);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_3-如何来获取元素节点" tabindex="-1">3. 如何来获取元素节点: <a class="header-anchor" href="#_3-如何来获取元素节点" aria-label="Permalink to &quot;3\\. 如何来获取元素节点:&quot;">​</a></h2><ul><li>document.getElementById: 根据 id 属性获取对应的单个节</li><li>document.getElementsByTagName: 根据标签名获取指定节点名字的数组, 数组对象 length 属性可以获取数组的长度</li><li>document.getElementsByName:</li></ul><p>根据节点的 name 属性获取符合条件的节点数组,</p><p>但 ie 的实现方式和 W3C 标准有差别:</p><p>在 html 文档中若某节点(li)没有 name 属性,</p><p>则 ie 使用 getElementsByName 不能获取到节点数组, 但火狐可以.</p><ul><li>其它的两个方法,　ie 根本就不支持, 所以不建议使用</li></ul><p>document.getElementsByClassName();</p><p>document.getElementsByTagNameNS();</p><h2 id="_4-获取属性节点" tabindex="-1">4. 获取属性节点: <a class="header-anchor" href="#_4-获取属性节点" aria-label="Permalink to &quot;4\\. 获取属性节点:&quot;">​</a></h2><ul><li>可以直接通过 cityNode.id 这样的方式来获取和设置属性节点的值</li><li>可以直接通过getAttribute/setAttribute/removeAttribute,这样的方式来获取和设置属性节点的</li><li>通过元素节点的 getAttributeNode 方法来获取属性节点, 然后在通过 nodeValue 来读写属性值</li></ul><h2 id="_5-获取元素节点的子节点-只有元素节点才有子节点" tabindex="-1">5. 获取元素节点的子节点(只有元素节点才有子节点!!) <a class="header-anchor" href="#_5-获取元素节点的子节点-只有元素节点才有子节点" aria-label="Permalink to &quot;5\\. 获取元素节点的子节点(只有元素节点才有子节点!!)&quot;">​</a></h2><ul><li>.childNodes 属性获取全部的子节点, 但该方法不实用. 因为如果要获取指定的节点的指定子节点的集合, 可以直接调用元素节点的 getElementsByTagName() 方法来获取.</li><li>. firstChild 属性获取第一个子节点</li><li>. lastChild 属性获取最后一个子节点</li></ul><h4 id="获取指定节点的所有子节点-一共有三种方式" tabindex="-1">获取指定节点的所有子节点.一共有三种方式: <a class="header-anchor" href="#获取指定节点的所有子节点-一共有三种方式" aria-label="Permalink to &quot;获取指定节点的所有子节点.一共有三种方式:&quot;">​</a></h4><ul><li>childNodes属性: <em><strong>不实用</strong></em>,会取到文本节点</li><li>children属性: <em><strong>实用</strong></em>,会剔除文本节点</li><li>用该指定节点的getElementsByTagName方法(注意不是document): <em><strong>不实用</strong></em>,虽然会剔除文本节点,但只能取一组相同tagNaem的子节点,无法使用firstChild,lastChild来取一个指定元素节点的第一个和最后一个子节点时</li></ul><p>1.会受到文本子节点的影响</p><p>2.我们通常可以使用firstChild的nodeValue属性来获取文本值(当子节点只有文本节点时)</p><h2 id="_6-获取文本节点" tabindex="-1">6. 获取文本节点: <a class="header-anchor" href="#_6-获取文本节点" aria-label="Permalink to &quot;6\\. 获取文本节点:&quot;">​</a></h2><ul><li>步骤: 元素节点 --&gt; 获取元素节点的子节点</li><li>若元素节点只有文本节点一个子节点, 例如 北京, 你喜欢哪个城市?,</li><li>可以先获取到指定的元素节点 eleNode, 然后利用 eleNode.firstChild.nodeValue 的方法来读写其文本节点的值</li></ul><h2 id="_7-节点的属性" tabindex="-1">7. 节点的属性: <a class="header-anchor" href="#_7-节点的属性" aria-label="Permalink to &quot;7\\. 节点的属性:&quot;">​</a></h2><ul><li>. nodeName: 代表当前节点的名字. 只读属性.</li></ul><p><em>如果给定节点是一个文本节点, nodeName 属性将返回内容为 #text 的字符串</em></p><ul><li>nodeType：返回一个整数, 这个数值代表着给定节点的类型.</li></ul><p><em><strong>只读属性. 1 -- 元素节点, 2 -- 属性节点, 3 -- 文本节点</strong></em></p><ul><li>nodeValue：返回给定节点的当前值(字符串). 可读写的属性</li></ul><p>①. 元素节点, 返回值是 null.</p><p>②. 属性节点: 返回值是这个属性的值</p><p>③. 文本节点: 返回值是这个文本节点的内容</p><h2 id="_8-创建一个元素节点" tabindex="-1">8. 创建一个元素节点: <a class="header-anchor" href="#_8-创建一个元素节点" aria-label="Permalink to &quot;8\\. 创建一个元素节点:&quot;">​</a></h2><p>createElement(): 按照给定的标签名创建一个新的元素节点.</p><ul><li>方法只有一个参数：被创建的元素节点的名字, 是一个字符串.</li><li>方法的返回值：是一个指向新建节点的引用指针. 返回值是一个元素节点, 所以它的 nodeType 属性值等于 1.</li></ul><p>新元素节点不会自动添加到文档里, 它只是一个存在于 JavaScript 上下文的对象.</p><h2 id="_9-创建一个文本节点" tabindex="-1">9. 创建一个文本节点: <a class="header-anchor" href="#_9-创建一个文本节点" aria-label="Permalink to &quot;9\\. 创建一个文本节点:&quot;">​</a></h2><p>createTextNode(): 创建一个包含着给定文本的新文本节点.</p><ul><li>这个方法的返回值是一个指向新建文本节点引用指针. 它是一个文本节点, 所以它的 nodeType 属性等于 3.</li><li>方法只有一个参数：新建文本节点所包含的文本字符串.</li><li>新元素节点不会自动添加到文档里</li></ul><h2 id="_10-为元素节点添加子节点" tabindex="-1">10. 为元素节点添加子节点: <a class="header-anchor" href="#_10-为元素节点添加子节点" aria-label="Permalink to &quot;10\\. 为元素节点添加子节点:&quot;">​</a></h2><p>appendChild()</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChild):</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>给定子节点 newChild 将成为给定元素节点 element 的最后一个子节点.</li><li>方法的返回值是一个指向新增子节点的引用指针.</li></ul><h2 id="_11-节点的替换" tabindex="-1">11. 节点的替换: <a class="header-anchor" href="#_11-节点的替换" aria-label="Permalink to &quot;11\\. 节点的替换:&quot;">​</a></h2><p>replaceChild(): 把一个给定父元素里的一个子节点替换为另外一个子节点</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChild,oldChild);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>返回值是一个指向已被替换的那个子节点的引用指针</li><li>该节点除了替换功能以外还有移动的功能.</li><li>该方法只能完成单向替换, 若需要使用双向替换, 需要自定义函数:</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 互换 aNode 和 bNode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aNode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bNode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> replaceEach</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">aNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bNode){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aParentNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aNode.parentNode;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //若 aNode 有父节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aParentNode){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bParentNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bNode.parentNode;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //若 bNode 有父节点    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bParentNode){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tempNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> aNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cloneNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                bParentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempNode, bNode);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                aParentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bNode, aNode);    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="_12-插入节点" tabindex="-1">12. 插入节点: <a class="header-anchor" href="#_12-插入节点" aria-label="Permalink to &quot;12\\. 插入节点:&quot;">​</a></h2><p>insertBefore(): 把一个给定节点插入到一个给定元素节点的给定子节点的前面</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">     var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newNode,targetNode);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>节点 newNode 将被插入到元素节点 element 中并出现在节点 targetNode 的前面.</li><li>节点 targetNode 必须是 element 元素的一个子节点。</li><li>自定义 insertAfter() 方法</li></ul><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * 将 newChild 插入到 refChild 的后边</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newChild</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {Object}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> refChild</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> insertAfter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">refChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> refParentNode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> refChild.parentNode;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //判断 refChild 是否存在父节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(refParentNode){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            //判断 refChild 节点是否为其父节点的最后一个子节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(refChild </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> refParentNode.lastChild){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                refParentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChild);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                refParentNode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newChild, refChild.nextSibling);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_13-删除节点" tabindex="-1">13. 删除节点: <a class="header-anchor" href="#_13-删除节点" aria-label="Permalink to &quot;13\\. 删除节点:&quot;">​</a></h2><p>removeChild(): 从一个给定元素里删除一个子节点</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> reference </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> element.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(node)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>返回值是一个指向已被删除的子节点的引用指针. 某个节点被 removeChild() 方法删除时, 这个节点所包含的所有子节点将同时被删除.</li><li>如果想删除某个节点, 但不知道它的父节点是哪一个, parentNode 属性可以帮忙。</li></ul><h2 id="_14-innerhtml属性" tabindex="-1">14. innerHTML属性: <a class="header-anchor" href="#_14-innerhtml属性" aria-label="Permalink to &quot;14\\. innerHTML属性:&quot;">​</a></h2><ul><li>浏览器几乎都支持该属性, 但不是 DOM 标准的组成部分.</li><li>innerHTML 属性可以用来读, 写某给定元素里的 HTML 内容</li></ul><h2 id="_15-其它属性" tabindex="-1">15. 其它属性, <a class="header-anchor" href="#_15-其它属性" aria-label="Permalink to &quot;15\\. 其它属性,&quot;">​</a></h2><p>参看 API: nsextSibling, previousSibling 等</p>`,73),t=[e];function p(h,k,r,d,E,c){return a(),i("div",null,t)}const y=s(l,[["render",p]]);export{g as __pageData,y as default};
