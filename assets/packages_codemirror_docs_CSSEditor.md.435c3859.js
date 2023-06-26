import{_ as e,c as r,o as t,a as i}from"./app.7b1078cc.js";const u='{"title":"CSSEditor","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":2,"title":"Published Properties","slug":"published-properties"}],"relativePath":"packages/codemirror/docs/CSSEditor.md"}',a={},d=i(`<h1 id="csseditor" tabindex="-1">CSSEditor <a class="header-anchor" href="#csseditor" aria-hidden="true">#</a></h1><p>CSSEditor displays an editable snippet of CSS with syntax coloring and code folding.</p><div class="language-sample-code"><pre><code>import { CSSEditor } from &quot;@hpcc-js/codemirror&quot;;

new CSSEditor()
    .css(\`\\
body {
    margin: 0;
    padding: 15px;
}    
#target {
    position: relative;
    width: 100%;
    height: calc(100vh - 32px);
    border: 1px solid #ed1c24;
}
    \`)
    .target(&quot;target&quot;)
    .render()
    ;

</code></pre></div><p>CSSEditor extends <a href="./Editor.html">Editor</a>.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h2 id="published-properties" tabindex="-1">Published Properties <a class="header-anchor" href="#published-properties" aria-hidden="true">#</a></h2><div class="language-@hpcc-js/codemirror:CSSEditor"><pre><code></code></pre></div>`,7),o=[d];function s(n,c,p,h,l,_){return t(),r("div",null,o)}var g=e(a,[["render",s]]);export{u as __pageData,g as default};
