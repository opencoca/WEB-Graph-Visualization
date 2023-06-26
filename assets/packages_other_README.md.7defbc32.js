import{_ as n,c as a,o as s,a as t}from"./app.7b1078cc.js";const d='{"title":"@hpcc-js/other","description":"","frontmatter":{},"headers":[{"level":2,"title":"Exported Widgets","slug":"exported-widgets"},{"level":2,"title":"Stand-alone HTML Example","slug":"stand-alone-html-example"}],"relativePath":"packages/other/README.md"}',p={},o=t(`<h1 id="hpcc-js-other" tabindex="-1">@hpcc-js/other <a class="header-anchor" href="#hpcc-js-other" aria-hidden="true">#</a></h1><p>This package is part of the mono repository &quot;@hpcc-js&quot; (aka Visualization Framework), for more information including <a href="https://github.com/hpcc-systems/Visualization/wiki/Quick-Start" target="_blank" rel="noopener noreferrer">Quick Start</a>, <a href="https://raw.githack.com/hpcc-systems/Visualization/trunk/demos/gallery/gallery.html" target="_blank" rel="noopener noreferrer">Gallery</a> and <a href="https://github.com/hpcc-systems/Visualization/wiki/Tutorials" target="_blank" rel="noopener noreferrer">Tutorials</a>, please visit the main page on GitHub: <a href="https://github.com/hpcc-systems/Visualization" target="_blank" rel="noopener noreferrer">hpcc-systems/Visualization</a>.</p><h2 id="exported-widgets" tabindex="-1">Exported Widgets <a class="header-anchor" href="#exported-widgets" aria-hidden="true">#</a></h2><ul><li><a href="https://rawgit.com/hpcc-systems/Visualization/trunk/demos/gallery/playground.html?./samples/time/Calendar.js" target="_blank" rel="noopener noreferrer">CalendarHeatMap</a></li><li><a href="https://rawgit.com/hpcc-systems/Visualization/trunk/demos/gallery/playground.html?./samples/misc/IconList.js" target="_blank" rel="noopener noreferrer">IconList</a></li><li><a href="https://rawgit.com/hpcc-systems/Visualization/trunk/demos/gallery/playground.html?./samples/other/Html.js" target="_blank" rel="noopener noreferrer">Html</a></li><li><a href="https://rawgit.com/hpcc-systems/Visualization/trunk/demos/gallery/playground.html?./samples/other/MorphText.js" target="_blank" rel="noopener noreferrer">MorphText</a></li><li><a href="https://rawgit.com/hpcc-systems/Visualization/trunk/demos/gallery/playground.html?./samples/other/HeatMap.js" target="_blank" rel="noopener noreferrer">HeatMap</a></li></ul><h2 id="stand-alone-html-example" tabindex="-1">Stand-alone HTML Example <a class="header-anchor" href="#stand-alone-html-example" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Simple CalendarHeatMap<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@hpcc-js/common<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@hpcc-js/other<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>placeholder<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">var</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Date&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Value&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
                <span class="token punctuation">[</span><span class="token string">&quot;2019-08-30&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8835.96&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token string">&quot;2019-08-29&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9857.98&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token string">&quot;2019-08-28&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10809.85&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token string">&quot;2019-08-27&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;11860.03&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">[</span><span class="token string">&quot;2019-08-24&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;12664.39&quot;</span><span class="token punctuation">]</span>
            <span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">new</span> <span class="token class-name">window</span><span class="token punctuation">[</span><span class="token string">&quot;@hpcc-js/other&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">CalendarHeatMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">columns</span><span class="token punctuation">(</span>columns<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">dateColumn</span><span class="token punctuation">(</span><span class="token string">&quot;Date&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">aggrColumn</span><span class="token punctuation">(</span><span class="token string">&quot;Value&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">aggrType</span><span class="token punctuation">(</span><span class="token string">&quot;mean&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">target</span><span class="token punctuation">(</span><span class="token string">&quot;placeholder&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6),e=[o];function c(l,u,i,r,k,g){return s(),a("div",null,e)}var m=n(p,[["render",c]]);export{d as __pageData,m as default};
