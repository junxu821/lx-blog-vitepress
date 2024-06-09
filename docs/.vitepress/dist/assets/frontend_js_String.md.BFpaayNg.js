import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.Baw4MH5z.js";const g=JSON.parse('{"title":"String","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/String.md","filePath":"frontend/js/String.md"}'),t={name:"frontend/js/String.md"},l=n(`<h1 id="string" tabindex="-1">String <a class="header-anchor" href="#string" aria-label="Permalink to &quot;String&quot;">​</a></h1><ul><li><strong>js的字符串中每个字符是由16位码元组成</strong></li><li>js内部内部是以UTF-16组成</li><li>码点:unicode中一个字符的完整表示,例如‘c&#39;的码点是0x0063,码点可能是16位也可能是32位</li><li>字符串就是码元组成,字符串的长度就是多少16个码元的个数</li></ul><h1 id="_1-codepointat-unicode" tabindex="-1">1.codePointAt() (unicode) <a class="header-anchor" href="#_1-codepointat-unicode" aria-label="Permalink to &quot;1.codePointAt() (unicode)&quot;">​</a></h1><p>从字符串中指定位置找出码元所对应的码点</p><p>与charCodeAt作用一样,只是在unicode编码中charCodeAt结果不准确,所以用该方法,找出字符串中索引位置码点的编码</p><h1 id="_2-charcodeat-utf-16" tabindex="-1">2.charCodeAt() (utf-16) <a class="header-anchor" href="#_2-charcodeat-utf-16" aria-label="Permalink to &quot;2.charCodeAt() (utf-16)&quot;">​</a></h1><p>找出制定索引位置的字符的码元值(一个16进制数)</p><h1 id="_3-fromcharcode-utf-16" tabindex="-1">3.fromCharCode() (utf-16) <a class="header-anchor" href="#_3-fromcharcode-utf-16" aria-label="Permalink to &quot;3.fromCharCode() (utf-16)&quot;">​</a></h1><p>将一组码元值拼成字符串</p><h1 id="_4-fromcodepoint-unicode" tabindex="-1">4.fromCodePoint()(unicode) <a class="header-anchor" href="#_4-fromcodepoint-unicode" aria-label="Permalink to &quot;4.fromCodePoint()(unicode)&quot;">​</a></h1><p>将码点拼成字符串</p><h1 id="_5-normalize" tabindex="-1">5.normalize() <a class="header-anchor" href="#_5-normalize" aria-label="Permalink to &quot;5.normalize()&quot;">​</a></h1><p>由于标准不一样,不好比较字符,用该方法可以规范化一个字符,</p><p>取值:NFD,NFC,NFKD,NFKC</p><h1 id="_6-slice-substr-substring" tabindex="-1">6.slice(),substr(),substring() <a class="header-anchor" href="#_6-slice-substr-substring" aria-label="Permalink to &quot;6.slice(),substr(),substring()&quot;">​</a></h1><ul><li>第一个参数都表示开始的位置</li><li>第二个参数传,代表后面全部</li><li>slice,substring第二个参数代表结束索引的后一个位置,substr代表要截取的字符串的长度 参数负数时</li><li>slice会将负数转化为负数加上字符串的长度</li><li>substr会将第一个参数转化为负数加上字符串的长度,第二个负数转化为0</li><li>substring会将所有负数转化为0</li></ul><h1 id="_7-indexof-lastindexof" tabindex="-1">7.indexOf(),lastIndexOf() <a class="header-anchor" href="#_7-indexof-lastindexof" aria-label="Permalink to &quot;7.indexOf(),lastIndexOf()&quot;">​</a></h1><ul><li>第二个参数表示开始搜索的位置,lastIndexOf会从指定位置向前搜索</li></ul><h1 id="_8、startswith" tabindex="-1">8、startsWith <a class="header-anchor" href="#_8、startswith" aria-label="Permalink to &quot;8、startsWith&quot;">​</a></h1><p>代码如下（示例）</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcd&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true 第二个参数表示是从那个索引开始</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h1 id="_9、endswith" tabindex="-1">9、endsWith <a class="header-anchor" href="#_9、endswith" aria-label="Permalink to &quot;9、endsWith&quot;">​</a></h1><p>代码如下（示例）</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abcd&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//它的判断过程是这样的，首先读取第二个参数，先截取前2位字符串 &quot;ab&quot;, 然后开始判断这</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h1 id="_10-match" tabindex="-1">10.match <a class="header-anchor" href="#_10-match" aria-label="Permalink to &quot;10.match&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stringObject.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(searchvalue)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">stringObject.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(regexp)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 参数为searchvalue时：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello world!&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&quot;world&quot;, index: 6, input: &quot;Hello world!&quot;, groups: undefined]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;worlld&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&quot;world!&quot;, index: 6, input: &quot;Hello world!&quot;, groups: undefined]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 参数为正则表达式时：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; mm -4193 1 with words&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&quot;4193&quot;, &quot;1&quot;]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 未加全局时：[&quot;4193&quot;, index: 5, input: &quot; mm -4193 1 with words&quot;, groups: undefined]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-6754 uuuid&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //获取带符号的整数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\+</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// [&quot;-6754&quot;, &quot;-&quot;, index: 0, input: &quot;-6754 uuuid&quot;, groups: undefined]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h1 id="_11-padstart-padend" tabindex="-1">11.padStart,padEnd <a class="header-anchor" href="#_11-padstart-padend" aria-label="Permalink to &quot;11.padStart,padEnd&quot;">​</a></h1><h1 id="_12-repeat" tabindex="-1">12.repeat() <a class="header-anchor" href="#_12-repeat" aria-label="Permalink to &quot;12.repeat()&quot;">​</a></h1><p>接受一个整数,复制多次拼接成一个新串</p><h1 id="_13-for-of" tabindex="-1">13.for ... of... <a class="header-anchor" href="#_13-for-of" aria-label="Permalink to &quot;13.for ... of...&quot;">​</a></h1><h1 id="_14-touppercase-tolowercase" tabindex="-1">14.toUpperCase,toLowerCase() <a class="header-anchor" href="#_14-touppercase-tolowercase" aria-label="Permalink to &quot;14.toUpperCase,toLowerCase()&quot;">​</a></h1><h1 id="_15-tolocaleuppercase-tolocalelowercase" tabindex="-1">15.toLocaleUpperCase(),toLocaleLowerCase() <a class="header-anchor" href="#_15-tolocaleuppercase-tolocalelowercase" aria-label="Permalink to &quot;15.toLocaleUpperCase(),toLocaleLowerCase()&quot;">​</a></h1><p>用法和toUpperCase,toLowerCase()一样,但是在某些语言中,unicode大小写转换需要特定规则,例如土耳其语,所以用该方法,<strong>带有时区的概念,更保险</strong></p><h1 id="_16-search方法" tabindex="-1">16.search方法, <a class="header-anchor" href="#_16-search方法" aria-label="Permalink to &quot;16.search方法,&quot;">​</a></h1><p>接受一个正则表达式或者字符串,返回所在的字符串开始索引,没找到则是-1</p><h1 id="_17-replace" tabindex="-1">17.replace() <a class="header-anchor" href="#_17-replace" aria-label="Permalink to &quot;17.replace()&quot;">​</a></h1><p>js中没有replaceAll方法</p><h1 id="_18-localecompare" tabindex="-1">18.localeCompare() <a class="header-anchor" href="#_18-localecompare" aria-label="Permalink to &quot;18.localeCompare()&quot;">​</a></h1><p>比较两个字符串大小,该方法和地区有关,例如在美国,小写字母比大写的小,在其他地区未必这样</p>`,40),e=[l];function h(p,r,k,d,o,E){return a(),i("div",null,e)}const u=s(t,[["render",h]]);export{g as __pageData,u as default};