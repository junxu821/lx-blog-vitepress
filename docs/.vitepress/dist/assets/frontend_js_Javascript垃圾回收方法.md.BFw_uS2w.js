import{_ as a,c as e,o as t,a5 as r}from"./chunks/framework.DhzKnR-G.js";const m=JSON.parse('{"title":"Javascript垃圾回收方法","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/Javascript垃圾回收方法.md","filePath":"frontend/js/Javascript垃圾回收方法.md"}'),p={name:"frontend/js/Javascript垃圾回收方法.md"},n=r('<h1 id="javascript垃圾回收方法" tabindex="-1">Javascript垃圾回收方法 <a class="header-anchor" href="#javascript垃圾回收方法" aria-label="Permalink to &quot;Javascript垃圾回收方法&quot;">​</a></h1><h1 id="标记清除-mark-and-sweep" tabindex="-1">标记清除（mark and sweep） <a class="header-anchor" href="#标记清除-mark-and-sweep" aria-label="Permalink to &quot;标记清除（mark and sweep）&quot;">​</a></h1><p>这是 JavaScript 最常见的垃圾回收方式，当变量进入执行环境的时候，比如</p><p>函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开</p><p>环境的时候（函数执行结束）将其标记为“离开环境”。</p><p>垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后</p><p>去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完</p><p>成之后仍存在标记的就是要删除的变量了</p><h1 id="引用计数-reference-counting" tabindex="-1">引用计数(reference counting) <a class="header-anchor" href="#引用计数-reference-counting" aria-label="Permalink to &quot;引用计数(reference counting)&quot;">​</a></h1><p>在低版本 IE 中经常会出现内存泄露，很多时候就是因为其采用引用计数</p><p>方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，</p><p>当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引</p><p>用次数就加 1，如果该变量的值变成了另外一个，则这个值得引用次数</p><p>减 1，当这个值的引用次数变为 0 的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在</p><p>运行的时候清理掉引用次数为 0 的值占用的空间。</p><p>在 IE 中虽然 JavaScript 对象通过标记清除的方式进行垃圾回收，但 BOM</p><p>与 DOM 对象却是通过引用计数回收垃圾的，</p><p>也就是说只要涉及 BOM 及 DOM 就会出现循环引用问题。</p>',18),c=[n];function s(o,i,_,d,h,l){return t(),e("div",null,c)}const u=a(p,[["render",s]]);export{m as __pageData,u as default};
