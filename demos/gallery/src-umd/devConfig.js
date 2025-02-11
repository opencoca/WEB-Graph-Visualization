var npmPackages = {
    "@hpcc-js/wasm": "@hpcc-js/wasm/dist/index",
    "ajv": "ajv/dist/ajv.bundle",
    "colorbrewer": "colorbrewer/index",
    "codemirror": "codemirror/",
    "d3-array": "d3-array/dist/d3-array",
    "d3-axis": "d3-axis/dist/d3-axis",
    "d3v4-bullet": "d3v4-bullet/build/d3-bullet",
    "d3-brush": "d3-brush/dist/d3-brush",
    "d3-cloud": "d3-cloud/build/d3.layout.cloud",
    "d3-collection": "d3-collection/dist/d3-collection",
    "d3-color": "d3-color/dist/d3-color",
    "d3-contour": "d3-contour/dist/d3-contour",
    "d3-dispatch": "d3-dispatch/dist/d3-dispatch",
    "d3-drag": "d3-drag/dist/d3-drag",
    "d3-dsv": "d3-dsv/dist/d3-dsv",
    "d3-ease": "d3-ease/dist/d3-ease",
    "d3-interpolate": "d3-interpolate/dist/d3-interpolate",
    "d3-fetch": "d3-fetch/dist/d3-fetch",
    "d3-force": "d3-force/dist/d3-force",
    "d3-format": "d3-format/dist/d3-format",
    "d3-geo": "d3-geo/dist/d3-geo",
    "d3-hexbin": "d3-hexbin/build/d3-hexbin",
    "d3-hierarchy": "d3-hierarchy/dist/d3-hierarchy",
    "d3-hsv": "d3-hsv/build/d3-hsv",
    "d3-path": "d3-path/dist/d3-path",
    "d3-quadtree": "d3-quadtree/dist/d3-quadtree",
    "d3-random": "d3-random/dist/d3-random",
    "d3-request": "d3-request/build/d3-request",
    "d3-require": "d3-require/dist/d3-require",
    "d3-scale": "d3-scale/build/d3-scale",
    "d3-shape": "d3-shape/dist/d3-shape",
    "d3-sankey": "d3-sankey/dist/d3-sankey",
    "d3-selection": "d3-selection/dist/d3-selection",
    "d3-svg-annotation": "d3-svg-annotation/indexRollup",
    "d3-svg-legend": "d3-svg-legend/indexRollup",
    "d3-time": "d3-time/dist/d3-time",
    "d3-timer": "d3-timer/dist/d3-timer",
    "d3-time-format": "d3-time-format/dist/d3-time-format",
    "d3-tile": "d3-tile/dist/d3-tile",
    "d3-transition": "d3-transition/dist/d3-transition",
    "d3-zoom": "d3-zoom/dist/d3-zoom",
    "dagre": "dagre/dist/dagre",
    "@deck.gl/core": "@deck.gl/core/dist",
    "@deck.gl/layers": "@deck.gl/layers/dist",
    "@observablehq/parser": "@observablehq/parser/dist/parser.min",
    "@observablehq/runtime": "@observablehq/runtime/dist/runtime.umd",
    "@observablehq/stdlib": "@observablehq/stdlib/dist/stdlib",
    "@observablehq/inspector/dist/inspector.css": "@observablehq/inspector/dist/inspector.css",
    "acorn": "acorn/dist/acorn",
    "acorn-walk": "acorn-walk/dist/walk",
    "es6-promise/auto": "es6-promise/dist/es6-promise.auto",
    "font-awesome": "font-awesome",
    "google-maps": "google-maps/lib/Google",
    "grid-list": "grid-list/src/gridList",
    "javascript-autocomplete": "javascript-autocomplete/auto-complete",
    "mapbox-gl": "mapbox-gl/dist/mapbox-gl",
    "mapbox-gl.css": "mapbox-gl/dist/mapbox-gl.css",
    "leaflet": "leaflet/dist/leaflet-src",
    "leaflet.css": "leaflet/dist/leaflet.css",
    "leaflet.markercluster": "leaflet.markercluster/dist/leaflet.markercluster-src",
    "leaflet.markercluster.css": "leaflet.markercluster/dist/MarkerCluster.css",
    "leaflet.markercluster.default.css": "leaflet.markercluster/dist/MarkerCluster.Default.css",
    "leaflet.gridlayer.googlemutant": "leaflet.gridlayer.googlemutant/Leaflet.GoogleMutant",
    "marked": "marked/marked.min",
    "react": "react/dist/react.min",
    "react-dom": "react-dom/dist/react-dom.min",
    "reflect-metadata": "reflect-metadata/Reflect",
    "simpleheat": "simpleheat/simpleheat",
    "tooltip.js": "tooltip.js/dist/umd/tooltip",
    "topojson-client": "topojson-client/dist/topojson-client",
    "tslib": "tslib/tslib",
    "whatwg-fetch": "whatwg-fetch/fetch",
    "preact/jsx-runtime": "preact/jsx-runtime/dist/jsxRuntime.umd",
    "preact": "preact/dist/preact.umd",
    "preact/hooks": "preact/hooks/dist/hooks.umd",
    "@fluentui/react": "@fluentui/react/dist/fluentui-react.umd",
    "@fluentui/react-hooks": "@fluentui/react-hooks/dist/react-hooks",
};
if (window.location.protocol === "file:" || window.location.hostname === "localhost") {
    config.systemjs.packages = {};
    for (var key in config.systemjs.map) {
        if (key.indexOf("@hpcc-js") === 0) {
            var pkgParts = key.split("/");
            var isShim = key.indexOf("-shim") >= 0 || key.indexOf("@hpcc-js/dgrid2") === 0;
            delete config.systemjs.map[key];
            config.systemjs.packages[key] = {
                main: isShim ? "dist/index.js" : "lib-umd/index.js",
                format: "amd",
                defaultExtension: "js"
            };
            config.systemjs.map[key] = "../../packages/".concat(pkgParts[1]);
        }
    }
    for (var key in npmPackages) {
        config.systemjs.map[key] = "../../node_modules/".concat(npmPackages[key]) + (key.indexOf(".css") < 0 ? ".js" : "");
    }
}
