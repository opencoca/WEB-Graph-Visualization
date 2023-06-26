import{_ as f,c as o,o as t,a as e}from"./app.7b1078cc.js";const q='{"title":"Polygons","description":"","frontmatter":{},"headers":[{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Published Properties","slug":"published-properties"}],"relativePath":"packages/map-deck/docs/Polygons.md"}',a={},n=e(`<h1 id="polygons" tabindex="-1">Polygons <a class="header-anchor" href="#polygons" aria-hidden="true">#</a></h1><p>Similar to @hpcc-js/map -&gt; Polygons - this widget is a 3D map with 3D polygons.</p><p>To change the 3D aspect, hold the &quot;ctrl&quot; key while dragging the map.</p><div class="language-sample-code"><pre><code>import { Polygons } from &quot;@hpcc-js/map-deck&quot;;

new Polygons()
    .columns([&quot;h3index&quot;, &quot;polys&quot;, &quot;weight&quot;])
    .data(data())
    .target(&quot;target&quot;)
    .polygonColumn(&quot;polys&quot;)
    .weightColumn(&quot;weight&quot;)
    .render()
    ;

function data() {
    return [
        [&quot;822647fffffffff&quot;, [[-89.7485370040972, 36.65876042006413], [-87.99076359407903, 37.38207405857687], [-87.95138172303123, 39.0147883106185], [-89.72621630626134, 39.94722184718561], [-91.54335025644869, 39.22565620613393], [-91.52528283315517, 37.57043047609912]], 546],
        [&quot;82489ffffffffff&quot;, [[-98.24787904177958, 28.91983357142504], [-96.56734672388515, 29.86373079369924], [-96.66289038040519, 31.61953062690852], [-98.49387337240059, 32.44435492016832], [-100.2117838202375, 31.48993750697799], [-100.061214992845, 29.72188188001257]], 14],
        [&quot;82450ffffffffff&quot;, [[-88.35361313416331, 18.71869881492448], [-86.86052253318431, 19.58510743293509], [-86.81165399779584, 21.27218577811605], [-88.29590003003726, 22.12073073961633], [-89.8335894971924, 21.24816786632389], [-89.8417414487811, 19.53349485374346]], 15],
        [&quot;824447fffffffff&quot;, [[-91.44305997299979, 29.03851386192278], [-89.78916802666802, 29.87606801972664], [-89.7794734704032, 31.59073781085478], [-91.4744264324729, 32.49146921600194], [-93.17771064982072, 31.65113143450284], [-93.13595107051557, 29.91330256038463]], 126],
        [&quot;82265ffffffffff&quot;, [[-91.49084714009673, 34.20071647537129], [-89.75917248139794, 34.98489313139716], [-89.7485370040972, 36.65876042006413], [-91.52528283315517, 37.57043047609912], [-93.31108179083483, 36.78541768537119], [-93.26521175979074, 35.09010839353649]], 22],
        [&quot;8244b7fffffffff&quot;, [[-76.8312173516333, 23.34286288063484], [-75.445541089086, 24.01255660121923], [-75.25188715193887, 25.56875428660015], [-76.47218493325147, 26.49429123770877], [-77.90890704647856, 25.83560088252219], [-78.0732653483983, 24.24011047374086]], 1],
        [&quot;8226cffffffffff&quot;, [[-96.66289038040519, 31.61953062690852], [-94.94582051780957, 32.51690625937428], [-95.01750723130108, 34.24608056480459], [-96.86314528739003, 35.09305545301956], [-98.62272599746812, 34.18804644137447], [-98.49387337240059, 32.44435492016832]], 38],
        [&quot;8248b7fffffffff&quot;, [[-97.90563426634658, 23.58979436809323], [-96.29745134025397, 24.55902528467453], [-96.38475070596915, 26.33013314194643], [-98.13038997835126, 27.14553087371657], [-99.77344403948946, 26.16294928512754], [-99.63585556147724, 24.37894428550873]], 14],
        [&quot;82445ffffffffff&quot;, [[-89.7794734704032, 31.59073781085478], [-88.10173760069401, 32.37535444162421], [-88.0658863098819, 34.05983621723471], [-89.75917248139794, 34.98489313139716], [-91.49084714009673, 34.20071647537129], [-91.4744264324729, 32.49146921600194]], 13],
        [&quot;822677fffffffff&quot;, [[-91.4762617917987, 42.44495953871468], [-93.4580322172988, 41.74324949577916], [-93.40741416499294, 40.11435457093053], [-91.54335025644869, 39.22565620613393], [-89.7262163062613, 39.94722184718562], [-89.5783976626672, 41.51855472869031]], 21]
    ];
}
</code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="published-properties" tabindex="-1">Published Properties <a class="header-anchor" href="#published-properties" aria-hidden="true">#</a></h3><div class="language-@hpcc-js/map-deck:Polygons"><pre><code></code></pre></div>`,7),s=[n];function r(u,i,d,p,l,c){return t(),o("div",null,s)}var g=f(a,[["render",r]]);export{q as __pageData,g as default};
