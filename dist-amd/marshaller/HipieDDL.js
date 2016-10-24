!function(t,i){"function"==typeof define&&define.amd?define(["d3","../common/Class","../common/Database","../common/Utility","../other/Comms","../common/Widget","../composite/MegaChart","../chart/MultiChart","../other/Table","require","es6-promise"],i):t.marshaller_HipieDDL=i(t.d3,t.common_Class,t.common_Database,t.common_Utility,t.other_Comms,t.common_Widget,t.composite_MegaChart,t.chart_MultiChart,t.other_Table,t.require)}(this,function(t,i,e,s,a,o,r,n,u,p){function h(t,i){for(var e=t.split("."),s=i,a=0;a<e.length;++a){var o=e[a];if(!s||void 0===s[o])return!1;s=s[o]}return!0}function c(t){return t?String.fromCharCode(parseInt(t)):t}function l(t,i){this.visualization=t;var e={};for(var s in i)i[s]instanceof Array?i[s].forEach(function(t,i){e[0===i?s:s+"_"+i]=t}):e[s]=i[s];this.mappings=e,this.hasMappings=!1,this.reverseMappings={},this.columns=[],this.columnsIdx={},this.columnsRHS=[],this.columnsRHSIdx={}}function d(t){switch(t){case"bool":case"boolean":return"boolean";case"integer":case"float":case"double":return"number";case"date":case"time":return"time";case"geohash":return"geohash";case"dataset":return"dataset";case"visualization":return"widget";default:if(t){if(0===t.indexOf("unsigned"))return"number";if(0===t.indexOf("integer"))return"number";if(0===t.indexOf("real"))return"number";if(0===t.indexOf("string"))return"string"}}return window.__hpcc_debug&&console.log("unknown hipieType:  "+t),"string"}function f(t,i){l.call(this,t,i),this.columns=["label","weight"],this.columnsIdx={label:0,weight:1},this.init()}function g(t,i){l.call(this,t,i),i.state?(this.columns=["state","weight"],this.columnsIdx={state:0,weight:1}):i.county?(this.columns=["county","weight"],this.columnsIdx={county:0,weight:1}):i.geohash&&(this.columns=["geohash","weight"],this.columnsIdx={geohash:0,weight:1}),this.init()}function v(t,i){l.call(this,t,i),i.state?(this.columns=["state"],this.columnsIdx={state:0}):i.county?(this.columns=["county"],this.columnsIdx={county:0}):i.geohash&&(this.columns=["geohash","label"],this.columnsIdx={geohash:0,label:1});var e=this.columns.length;i.weight.forEach(function(t,i){this.columns.push(t),this.columnsIdx[0===i?"weight":"weight_"+i]=i+e},this),this.init()}function m(t,i){l.call(this,t,i),this.columns=["x","y","weight"],this.columnsIdx={x:0,y:1,weight:2},this.init()}function y(t,i){var e={label:i.x[0]};i.y.forEach(function(t,i){e[t]=t}),l.call(this,t,e),this.init()}function w(t,i){var e={};for(var s in i)i[s].forEach(function(i,s){e[t.label[s]]=i});l.call(this,t,e),this.init()}function _(t,i,e){l.call(this,t,i),this.icon=t.icon||{},this.fields=t.fields||[],this.columns=["uid","label","weight","flags"],this.columnsIdx={uid:0,label:1,weight:2,flags:3},this.init(),this.link=e,this.linkMappings=new l(t,this.link.mappings),this.linkMappings.columns=["uid"],this.linkMappings.columnsIdx={uid:0},this.visualization=t}function z(t,i){if(this.visualization=t,i){switch(this._id=i.id,this._output=i.output,this.mappings=null,i.mappings||console.log("no mappings for:"+t.id+"->"+i.id),this.visualization.type){case"LINE":this.mappings=new y(this.visualization,i.mappings);break;case"TABLE":this.mappings=new w(this.visualization,i.mappings);break;case"GRAPH":this.mappings=new _(this.visualization,i.mappings,i.link);break;case"CHORO":i.mappings.weight instanceof Array&&i.mappings.weight.length?(this.mappings=new v(this.visualization,i.mappings,i.link),i.mappings.weight.length>1&&(this.visualization.type="LINE")):this.mappings=new g(this.visualization,i.mappings,i.link);break;case"HEAT_MAP":this.mappings=new m(this.visualization,i.mappings,i.link);break;default:this.mappings=new f(this.visualization,i.mappings)}this.first=i.first,this.reverse=i.reverse,this.sort=i.sort}}function b(t,i,e){this.event=t,this.dashboard=t.visualization.dashboard,this._visualization=i.visualization,this._instance=i.instance,this._datasource=i.datasource,this._merge=i.merge,this._mappings=i.mappings||e}function D(t,i,e){this.visualization=t,this.eventID=i,this._updates=[],e&&(this._updates=e.updates.map(function(t){return new b(this,t,e.mappings)},this))}function S(t,i){this.visualization=t,this.events={};for(var e in i)this.events[e]=new D(t,e,i[e])}function I(t,e,s){i.call(this),this.dashboard=t,this.parentVisualization=s,this.id=e.id,this.label=e.label,this.title=e.title||e.id,this.type=e.type,this.icon=e.icon||{},this.flag=e.flag||[],this.fields=e.fields||[],this.fieldsMap={},this.fields.forEach(function(t){this.fieldsMap[t.id]=t},this),this.properties=e.properties||(e.source?e.source.properties:null)||{},this.source=new z(this,e.source),this.events=new S(this,e.events),this.layers=[],this.hasVizDeclarations=!1,this.vizDeclarations={},"CHORO"===this.type?this.layers=(e.visualizations||[]).map(function(i){return t.createVisualization(i,this)},this):(e.visualizations||[]).forEach(function(i){this.vizDeclarations[i.id]=t.createVisualization(i,this),this.hasVizDeclarations=!0},this);var a=this;switch(this.type){case"CHORO":var o=e.properties&&e.properties.charttype?e.properties.charttype:"";if(s)switch(o){case"MAP_PINS":this.loadWidget("../map/Pins",function(t){try{t.id(e.id).columns(a.source.getColumns()).geohashColumn("geohash").tooltipColumn("label").fillColor(e.color?e.color:null).projection("albersUsaPr")}catch(i){console.log("Unexpected widget type:  "+t.classID())}})}else o=o||"CHORO_USSTATES","CHORO"===o&&(this.source.mappings.contains("state")?o="CHORO_USSTATES":this.source.mappings.contains("county")?o="CHORO_USCOUNTIES":this.source.mappings.contains("country")&&(o="CHORO_COUNTRIES")),Promise.all(a.layers.map(function(t){return t.loadedPromise()})).then(function(){a.loadWidget("../composite/MegaChart",function(t){var i=a.layers.map(function(t){return t.widget});try{switch(t.classID()){case"composite_MegaChart":t.id(e.id).showChartSelect_default(!1).chartType_default(o).chartTypeDefaults({autoScaleMode:i.length?"data":"mesh"}).chartTypeProperties({layers:i});break;default:t.id(e.id).autoScaleMode(i.length?"data":"mesh").layers(i)}}catch(s){console.log("Unexpected widget type:  "+t.classID())}})});break;case"2DCHART":case"PIE":case"BUBBLE":case"BAR":case"WORD_CLOUD":this.loadWidget("../composite/MegaChart",function(t){try{t.id(e.id).chartType_default(a.properties.chartType||a.properties.charttype||a.type)}catch(i){console.log("Unexpected widget type:  "+t.classID())}});break;case"LINE":this.loadWidget("../composite/MegaChart",function(t){try{t.id(e.id).chartType_default(a.properties.chartType||a.properties.charttype||a.type)}catch(i){console.log("Unexpected widget type:  "+t.classID())}});break;case"TABLE":this.loadWidget("../composite/MegaChart",function(t){try{t.id(e.id).showChartSelect_default(!1).chartType_default("TABLE")}catch(i){console.log("Unexpected widget type:  "+t.classID())}});break;case"SLIDER":this.loadWidget("../form/Slider",function(t){try{if(t.id(e.id),e.range){var i="";for(var s in e.source.mappings){i=s;break}t.low_default(+e.range[0]).high_default(+e.range[1]).step_default(+e.range[2]).selectionLabel_default(i)}}catch(a){console.log("Unexpected widget type:  "+t.classID())}});break;case"GRAPH":this.loadWidgets(["../graph/Graph"],function(t){try{t.id(e.id).layout_default("ForceDirected2").applyScaleOnLayout_default(!0)}catch(i){console.log("Unexpected widget type:  "+t.classID())}});break;case"FORM":this.loadWidgets(["../form/Form","../form/Input","../form/Button","../form/CheckBox","../form/ColorInput","../form/Radio","../form/Range","../form/Select","../form/Slider","../form/TextArea"],function(t,i){var s=i[1],a=i[3],o=i[5],r=i[7],n=i[9];try{t.id(e.id).inputs(e.fields.map(function(t){var i,e=[],u=[];switch(t.properties.charttype){case"TEXT":i=(new s).type_default("text");break;case"TEXTAREA":i=new n;break;case"CHECKBOX":i=new a;break;case"RADIO":i=new o;break;case"HIDDEN":i=(new s).type_default("hidden");break;default:if(t.properties.enumvals){i=new r,u=t.properties.enumvals;for(var p in u)e.push([p,u[p]])}else i=(new s).type_default("text")}if(i.name_default(t.id).label_default((t.properties?t.properties.label:null)||t.label).value_default(t.properties["default"]?t.properties["default"]:""),i instanceof a||i instanceof o){var h=Object.keys(t.properties.enumvals);i.selectOptions_default(h)}else e.length&&i.selectOptions_default(e);return i}))}catch(u){console.log("Unexpected widget type:  "+t.classID())}});break;case"HEAT_MAP":this.loadWidgets(["../other/HeatMap"],function(t){try{t.id(e.id).image_default(a.properties.imageUrl)}catch(i){console.log("Unexpected widget type:  "+t.classID())}});break;default:this.loadWidget("../common/TextBox",function(t){try{t.id(e.id).text_default(a.id+"\nTODO:  "+a.type)}catch(i){console.log("Unexpected widget type:  "+t.classID())}})}}function E(t,i){this.dataSource=t,this.id=i.id,this.from=i.from,this.notify=i.notify||[],this.filter=i.filter||[]}function M(){this.datasourceRequests={}}function R(t){this.skipClear=t,this.visualizationRequests={}}function x(t,i,e,s){this.dashboard=t,this.id=i.id,this.filter=i.filter||[],this.WUID=i.WUID,this.URL=t.marshaller.espUrl&&t.marshaller.espUrl._url?t.marshaller.espUrl._url:i.URL,this.databomb=i.databomb,this._loadedCount=0;var o=this;this.outputs={};var r=[];i.outputs.forEach(function(t){o.outputs[t.id]=new E(o,t),r.push({id:t.id,from:t.from,filter:t.filter||this.filter})},this),this.WUID?this.comms=(new a.HIPIEWorkunit).url(this.URL).proxyMappings(e).timeout(s).hipieResults(r):this.databomb?this.comms=(new a.HIPIEDatabomb).hipieResults(r):this.comms=(new a.HIPIERoxie).url(i.URL).proxyMappings(e).timeout(s)}function C(t,i,e,s){this.marshaller=t,this.id=i.id,this.title=i.title;var a=this;this.datasources={},this.datasourceTotal=0,i.datasources.forEach(function(t){a.datasources[t.id]=new x(a,t,e,s),++a.datasourceTotal}),this._visualizations={},this._visualizationArray=[],i.visualizations.forEach(function(t){this.createVisualization(t)},this),this._visualizationTotal=this._visualizationArray.length}function O(){i.call(this),this._proxyMappings={},this._widgetMappings=t.map(),this._clearDataOnUpdate=!0,this._propogateClear=!1,this.id="Marshaller",this._missingDataString=""}var U="...loading...",V="_changed";l.prototype.init=function(){for(var t in this.mappings)this.reverseMappings[this.mappings[t]]=t,void 0===this.columnsIdx[t]&&(this.columns.push(t),this.columnsIdx[t]=this.columns.length-1),this.columnsRHS[this.columnsIdx[t]]=this.mappings[t],this.columnsRHSIdx[this.mappings[t]]=this.columnsIdx[t],this.hasMappings=!0},l.prototype.getFields=function(){return this.visualization.fields?Object.keys(this.mappings).map(function(t){return this.visualization.fields.filter(function(i){return i.id===this.mappings[t]},this).map(function(t){return new e.Field(t.id).type(d(t.properties.type)).label(this.reverseMappings[t.id])},this)[0]},this):null},l.prototype.contains=function(t){return void 0!==this.mappings[t]},l.prototype.doMap=function(t){var i=[];for(var e in this.mappings){var s=this.mappings[e];try{var a=t[s];void 0===a&&(a=t[s.toLowerCase()]),i[this.columnsIdx[e]]=a}catch(o){console.log("Invalid Mapping:  "+this.visualization.id+" ["+s+"->"+t+"]")}}return i},l.prototype.doReverseMap=function(t){var i={};for(var e in this.mappings){var s=this.mappings[e];try{var a=t[e];void 0===a&&(a=t[e.toLowerCase()]),i[s]=a}catch(o){console.log("Invalid Mapping:  "+this.visualization.id+" ["+e+"->"+t+"]")}}return i},l.prototype.doMapAll=function(t){return t.hipieMappings(this.columnsRHS,this.visualization.dashboard.marshaller.missingDataString())},l.prototype.getMap=function(t){return this.mappings[t]},l.prototype.getReverseMap=function(t){return this.reverseMappings[t]},f.prototype=Object.create(l.prototype),g.prototype=Object.create(l.prototype),v.prototype=Object.create(l.prototype),m.prototype=Object.create(l.prototype),y.prototype=Object.create(l.prototype),w.prototype=Object.create(l.prototype),w.prototype.init=function(){this.visualization.label.forEach(function(t,i){this.reverseMappings[this.mappings[t]]=t,this.columns.push(t),this.columnsIdx[t]=i,this.columnsRHS[i]=this.mappings[t],this.columnsRHSIdx[this.mappings[t]]=i,this.hasMappings=!0},this)},w.prototype.doMapAll=function(t){var i=l.prototype.doMapAll.apply(this,arguments);if(i instanceof Array){var e=this.visualization.source.getColumnsRHSIdx();this.visualization.fields.forEach(function(t){var s=t&&t.properties?d(t.properties.type):"unknown",a=e[t.id];void 0===a?console.log("Invalid Mapping:  "+t.id):i=i.map(function(i){var e=i[a];if(e&&e.Row&&(e=e.Row),e instanceof Array)switch(s){case"dataset":var o=[],r={},n=e.map(function(t,i){var e=[];e.length=o.length;for(var s in t)0===i&&(r[s]=o.length,o.push(s)),e[r[s]]=t[s];return e}),p=(new u).columns(o).data(n);i[a]=p;break;case"widget":var h=this.visualization.vizDeclarations[t.properties.localVisualizationID],c=h.source.getOutput(),l=c.db;c.setData(e,[]);var d=h.widget,f=(new d.constructor).showToolbar(!1).chartType(d.chartType()).chartTypeDefaults(d.chartTypeDefaults()).columns(h.source.getColumns()).data(h.source.getData());c.db=l,i[a]=f}return i},this)},this)}return i},_.prototype=Object.create(l.prototype),_.prototype.calcIconInfo=function(t,i,e){function s(t,i){if(t)for(var s in t)switch(s){case"faChar":i.faChar=c(t.faChar);break;default:e&&0===s.indexOf("icon_")?(console.log("Deprecated flag property:  "+s),i[s.split("icon_")[1]]=t[s]):i[s]=t[s]}}var a={};if(i&&i[t.fieldid]&&t.valuemappings){var o=t.valuemappings[i[t.fieldid]];s(o,a)}for(var r in a)return a;return null},_.prototype.doMapAll=function(t){function i(t,i){var e="uid_"+t[0],n=a[e];if(!n&&i){n=(new r.Vertex).faChar(s.icon&&s.icon.faChar?c(s.icon.faChar):"").text(t[1]?t[1]:"").data(t),n.__hpcc_uid=t[0],a[e]=n,o.push(n);var u=s.calcIconInfo(s.visualization.icon,i,!1);if(u)for(var p in u)n[p]&&n[p](u[p]);var h=[];s.visualization.flag.forEach(function(t){var e=s.calcIconInfo(t,i,!0);e&&h.push(e)}),n.annotationIcons(h)}return n}var e=t.jsonObj(),s=this,a={},o=[],r=this.visualization.widget,n=[];return e.forEach(function(t){var e=s.doMap(t);i(e,t)}),e.forEach(function(t){var e=s.doMap(t),a=i(e,t);if(t[s.link.childfile]&&t[s.link.childfile]instanceof Array){var o=t[s.link.childfile];o.forEach(function(t,e){var o=s.linkMappings.doMap(t),u=i(o);if(u&&a.id()!==u.id()){var p=(new r.Edge).sourceVertex(a).targetVertex(u).sourceMarker("circle").targetMarker("arrow").data(o);n.push(p)}})}}),{vertices:o,edges:n,merge:!1}},z.prototype.getQualifiedID=function(){return this.visualization.getQualifiedID()+"."+this.id},z.prototype.exists=function(){return this._id},z.prototype.getDatasource=function(){return this.visualization.dashboard.datasources[this._id]},z.prototype.getOutput=function(){var t=this.getDatasource();return t&&t.outputs?t.outputs[this._output]:null},z.prototype.hasData=function(){return this.getOutput().db?!0:!1},z.prototype.getFields=function(){return this.mappings.getFields()},z.prototype.getColumnsRHS=function(){return this.mappings.columnsRHS},z.prototype.getColumnsRHSIdx=function(){return this.mappings.columnsRHSIdx},z.prototype.getColumns=function(){return this.mappings&&this.mappings.columns?this.mappings.columns:[]},z.prototype.getData=function(){var t=this.getOutput().db,i=t.data();i.length&&this.sort&&s.multiSort(i,t.hipieMapSortArray(this.sort));var e=this.mappings.doMapAll(t);return this.reverse&&e.reverse(),this.first&&e.length>this.first&&(e.length=this.first),e},z.prototype.getXTitle=function(){return this.mappings.columns[0]},z.prototype.getYTitle=function(){return this.mappings.columns.filter(function(t,i){return i>0}).join(" / ")},b.prototype.getDatasource=function(){return this.dashboard.getDatasource(this._datasource)},b.prototype.getVisualization=function(){return this.dashboard.getVisualization(this._visualization)},b.prototype.mapData=function(t){var i={};if(t){var e=this.event.visualization.source;for(var s in this._mappings){var a=e.mappings&&e.mappings.hasMappings?e.mappings.getReverseMap(s):s;i[this._mappings[s]]=t[a]}}return i},b.prototype.mapSelected=function(){return this.event.visualization.hasSelection()?this.mapData(this.event.visualization._widgetState.row):{}},b.prototype.calcRequestFor=function(t){var i={},e=this.getVisualization();return e.getInputVisualizations().forEach(function(s,a){var o=s===t;s.getUpdatesForVisualization(e).forEach(function(t){var e=t.mapSelected();for(var s in e)i[s]&&i[s]!==e[s]?(console.log("Duplicate Filter with mismatched value (defaulting to 'first' or 'first changed' instance):  "+s),o&&(i[s]=e[s],i[s+V]=o)):(i[s]=e[s],i[s+V]=o)})}),i},D.prototype.exists=function(){return this._updates.length},D.prototype.getUpdates=function(){return this._updates},D.prototype.getUpdatesDatasources=function(){var t={},i=[];return this.getUpdatesVisualizations().forEach(function(e,s){var a=e.source.getDatasource();a&&!t[a.id]&&(t[a.id]=!0,i.push(a))},this),i},D.prototype.getUpdatesVisualizations=function(){var t={},i=[];return this._updates.forEach(function(e,s){var a=e.getVisualization();t[a.id]||(t[a.id]=!0,i.push(a))},this),i},D.prototype.fetchData=function(){var t=new R;return this.getUpdates().forEach(function(i){t.appendRequest(i.getDatasource(),i.calcRequestFor(this.visualization),i.getVisualization())},this),t.fetchData()},S.prototype.setWidget=function(t){var i=this;for(var e in this.events)t["vertex_"+e]?t["vertex_"+e]=function(t,s,a){i.visualization.processEvent(e,i.events[e],t,s,a)}:t[e]&&(t[e]=function(t,s,a){i.visualization.processEvent(e,i.events[e],t,s,a)})},S.prototype.exists=function(){return void 0!==this._updates},S.prototype.getUpdates=function(){var t=[];for(var i in this.events)t=t.concat(this.events[i].getUpdates());return t},S.prototype.getUpdatesDatasources=function(){var t=[];for(var i in this.events)t=t.concat(this.events[i].getUpdatesDatasources());return t},S.prototype.getUpdatesVisualizations=function(){var t=[];for(var i in this.events)t=t.concat(this.events[i].getUpdatesVisualizations());return t},I.prototype=Object.create(i.prototype),I.prototype.constructor=I,I.prototype.getQualifiedID=function(){return this.id},I.prototype.loadedPromise=function(){var t=this;return new Promise(function(i,e){var s=setInterval(function(){t.isLoaded()&&(clearInterval(s),i())},100)})},I.prototype.isLoading=function(){return null===this.widget},I.prototype.isLoaded=function(){return this.widget instanceof o},I.prototype.loadMegaChartWidget=function(t,i){this.loadWidgets(["../composite/MegaChart",t],function(t,e){var s=new e[1];t.chartType_default(n.prototype._allChartTypesByClass[s.classID()].id).chart(s),i&&i(t,s,e)})},I.prototype.loadWidget=function(t,i){this.loadWidgets([t],i)},I.prototype.loadWidgets=function(t,i){this.widget=null;var e=this;p(t,function(t){var s=e.dashboard.marshaller._widgetMappings.get(e.id);s?(t.prototype._class!==s._class&&console.log("Unexpected persisted widget type (old persist string?)"),e.setWidget(s)):e.setWidget(new t),i&&i(e.widget,arguments)})},I.prototype.setWidget=function(t){if(this.widget=t,this.events.setWidget(t),this.widget.columns){var i=this.source.getColumns();this.widget.columns(i)}for(var e in this.properties)switch(t.classID()){case"chart_MultiChart":case"composite_MegaChart":t[e+"_default"]&&t[e+"_default"](this.properties[e]),t.chartTypeDefaults()[e]=this.properties[e];break;default:if(this.widget[e+"_default"])try{this.widget[e+"_default"](this.properties[e])}catch(s){console.log("Invalid Property:"+this.id+".properties."+e)}}return this.widget},I.prototype.accept=function(t){t.visit(this)},I.prototype.getUpdates=function(){return this.events.getUpdates()},I.prototype.getUpdatesForDatasource=function(t){return this.events.getUpdates().filter(function(i){return i.getDatasource()===t})},I.prototype.getUpdatesForVisualization=function(t){return this.events.getUpdates().filter(function(i){return i.getVisualization()===t})},I.prototype.update=function(t){if(!t){var i=[],e={},s=this.getInputVisualizations();s.forEach(function(t){t.hasSelection()&&t.getUpdatesForVisualization(this).forEach(function(t){var s=t.mapSelected();for(var a in s)s[a]&&(e[a]||(e[a]=!0,i.push(s[a])))})},this),t=i.join(", ")}var a=null;if(!this.parentVisualization)for(a=this.widget;a&&!a.title;)a=a.locateParentWidget();var o=this;return new Promise(function(i,e){if(a){var s=a.title(),r=s.split(" (");a.title(r[0]+(t?" ("+t+")":"")).render(function(){i()})}else{for(var n=o;n.parentVisualization;)n=n.parentVisualization;n.widget.render(function(){i()})}o.dashboard.marshaller.propogateClear()&&o.events.getUpdatesVisualizations().forEach(function(t){t.update()})})},I.prototype.notify=function(){if(this.widget){var t=this.source.hasData()?this.source.getData():[];return this.widget.data(t),this.update()}return Promise.resolve()},I.prototype.clear=function(){this._widgetState={row:{},selected:!1},this.fields.forEach(function(t){t.properties&&void 0!==t.properties["default"]&&(this._widgetState.row[t.id]=t.properties["default"],this._widgetState.selected=!0)},this),this.widget&&this.dashboard.marshaller.clearDataOnUpdate()&&this.widget.data([]),this.dashboard.marshaller.propogateClear()&&this.events.getUpdatesVisualizations().forEach(function(t){t.clear()})},I.prototype.on=function(t,i){var e=this;return this.overrideMethod(t,function(t,s){t.apply(e,s),setTimeout(function(){i.apply(e,s)},0)}),this},I.prototype.calcRequestFor=function(t){var i={};return this.getUpdatesForVisualization(t).forEach(function(e){i=e.calcRequestFor(t)}),i},I.prototype.processEvent=function(t,i,e,s,a){this._widgetState={row:e,col:s,selected:void 0===a?!0:a};var o=this;setTimeout(function(){i.fetchData().then(function(i){o.dashboard.marshaller.vizEvent(o.widget,"post_"+t,e,s,a)})},0)},I.prototype.hasSelection=function(){return this._widgetState&&this._widgetState.selected},I.prototype.selection=function(){return this.hasSelection()?this._wdigetState.row:null},I.prototype.reverseMappedSelection=function(){return this.hasSelection()?this.source.mappings?this.source.mappings.doReverseMap(this._widgetState.row):this._widgetState.row:null},I.prototype.getInputVisualizations=function(){return this.dashboard.marshaller.getVisualizationArray().filter(function(t){var i=t.events.getUpdatesVisualizations();return i.indexOf(this)>=0?!0:!1},this)},I.prototype.serializeState=function(){var t={widgetState:this._widgetState};return this.widget&&(this.widget.serializeState?t.widget=this.widget.serializeState():this.widget.data&&(t.widget={data:this.widget.data()})),t},I.prototype.deserializeState=function(t){return t&&(this._widgetState=t.widgetState,this.widget&&t.widget&&(this.widget.deserializeState?this.widget.deserializeState(t.widget):this.widget.data&&t.widget.data&&this.widget.data(t.widget.data))),this},E.prototype.getQualifiedID=function(){return this.dataSource.getQualifiedID()+"."+this.id},E.prototype.getUpdatesVisualizations=function(){var t=[];return this.notify.forEach(function(i){t.push(this.dataSource.dashboard.getVisualization(i))},this),t},E.prototype.accept=function(t){t.visit(this)},E.prototype.vizNotify=function(t){var i=[];return this.notify.filter(function(i){return!t||t.indexOf(i)>=0}).forEach(function(t){var e=this.dataSource.dashboard.getVisualization(t);i.push(e.notify())},this),Promise.all(i)},E.prototype.setData=function(t,i){return this.db=(new e.Grid).jsonObj(t),this.vizNotify(i)},M.prototype.appendRequest=function(t,i,e){var s=t.id+"("+JSON.stringify(i)+")";this.datasourceRequests[s]?window.__hpcc_debug&&console.log("Optimized duplicate fetch:  "+s):this.datasourceRequests[s]={updateDatasource:t,request:i,updates:[]};var a=this.datasourceRequests[s];a.updates.indexOf(e.id)<0&&a.updates.push(e.id)},M.prototype.fetchData=function(){var t=[];for(var i in this.datasourceRequests){var e=this.datasourceRequests[i];t.push(e.updateDatasource.fetchData(e.request,e.updates))}return Promise.all(t)},R.prototype.appendRequest=function(t,i,e){if(t&&e){var a=e.id+"("+t.id+")";this.visualizationRequests[a]?window.__hpcc_debug&&console.log("Optimized duplicate fetch:  "+a):this.visualizationRequests[a]={updateVisualization:e,updateDatasource:t,request:{}};var o=this.visualizationRequests[a];s.mixin(o.request,i)}},R.prototype.fetchData=function(){var t=new M;for(var i in this.visualizationRequests){var e=this.visualizationRequests[i];this.skipClear||"GRAPH"===e.updateVisualization.type||e.updateVisualization.clear(),e.updateVisualization.update(U),t.appendRequest(e.updateDatasource,e.request,e.updateVisualization)}return t.fetchData()},x.prototype.getQualifiedID=function(){return this.dashboard.getQualifiedID()+"."+this.id},x.prototype.getUpdatesVisualizations=function(){var t=[];for(var i in this.outputs)this.outputs[i].getUpdatesVisualizations().forEach(function(i){t.push(i)});return t},x.prototype.accept=function(t){t.visit(this);for(var i in this.outputs)this.outputs[i].accept(t)};var A=0,T=[];return x.prototype.fetchData=function(t,i){var e=++A;T.push(e);var s={};this.filter.forEach(function(i){s[i+V]=t[i+V]||!1;var e=void 0===t[i]?null:t[i];s[i]!==e&&(s[i]=e)}),s.refresh=t.refresh||!1,window.__hpcc_debug&&console.log("fetchData:  "+JSON.stringify(i)+"("+JSON.stringify(t)+")");for(var a in s)null===s[a]&&delete s[a];var o=Date.now();this.dashboard.marshaller.commsEvent(this,"request",s);var r=this;return new Promise(function(a,n){r.comms.call(s).then(function(n){var u=JSON.parse(JSON.stringify(n)),p=setInterval(function(){T[0]===e&&Date.now()-o>=500&&(clearTimeout(p),r.processResponse(u,t,i).then(function(){T.shift(),a(u),r.dashboard.marshaller.commsEvent(r,"response",s,u),++r._loadedCount}))},100)})["catch"](function(t){r.dashboard.marshaller.commsEvent(r,"error",s,t),n(t)})})},x.prototype.processResponse=function(t,i,e){var s={};for(var a in t)s[a.toLowerCase()]=t[a];var o=[];for(var r in this.outputs){var n=this.outputs[r].from;if(n||(n=this.outputs[r].id.toLowerCase()),h(n,t))!h(n+V,t)||h(n+V,t)&&t[n+V].length&&t[n+V][0][n+V]?o.push(this.outputs[r].setData(t[n],e)):o.push(this.outputs[r].vizNotify(e));else if(h(n,s))console.log("DDL 'DataSource.From' case is Incorrect"),!h(n+V,s)||h(n+V,s)&&t[n+V].length&&s[n+V][0][n+V]?o.push(this.outputs[r].setData(s[n],e)):o.push(this.outputs[r].vizNotify(e));else{var u=[];for(var p in t)u.push(p);console.log("Unable to locate '"+n+"' in response {"+u.join(", ")+"}")}}return Promise.all(o)},x.prototype.serializeState=function(){return{}},x.prototype.deserializeState=function(t){},C.prototype.createVisualization=function(t,i){var e=new I(this,t,i);return this._visualizations[t.id]=e,this._visualizationArray.push(e),this.marshaller._visualizations[t.id]=e,this.marshaller._visualizationArray.push(e),e},C.prototype.loadedPromise=function(){return Promise.all(this._visualizationArray.map(function(t){return t.loadedPromise()}))},C.prototype.getQualifiedID=function(){return this.id},C.prototype.getDatasource=function(t){return this.datasources[t]},C.prototype.getVisualization=function(t){return this._visualizations[t]||this.marshaller.getVisualization(t)},C.prototype.getVisualizations=function(){return this._visualizations},C.prototype.getVisualizationArray=function(){return this._visualizationArray},C.prototype.getVisualizationTotal=function(){return this._visualizationTotal},C.prototype.accept=function(t){t.visit(this);for(var i in this.datasources)this.datasources[i].accept(t);this._visualizationArray.forEach(function(i){i.accept(t)},this)},C.prototype.primeData=function(t){var i=new R(!0);return this.getVisualizationArray().forEach(function(i){if(i.clear(),i.update(),t&&t[i.id]&&h("source.mappings.mappings",i))for(var e in i.source.mappings.mappings)t[i.id][i.source.mappings.mappings[e]]&&(i._widgetState.row[e]=t[i.id][i.source.mappings.mappings[e]],i._widgetState.selected=!0)}),this.getVisualizationArray().forEach(function(t){var e=t.getInputVisualizations();0===e.length?i.appendRequest(t.source.getDatasource(),{refresh:!0},t):e.forEach(function(e){if(e.hasSelection()){var s=e.calcRequestFor(t);s.refresh=!0,i.appendRequest(t.source.getDatasource(),s,t)}})}),i.fetchData()},C.prototype.serializeState=function(){var t={datasources:{},visualizations:{}};for(var i in this.datasources)t.datasources[i]=this.datasources[i].serializeState();for(var e in this._visualizations)t.visualizations[e]=this._visualizations[e].serializeState();return t},C.prototype.deserializeState=function(t){if(t){for(var i in this.datasources)t.datasources[i]&&this.datasources[i].deserializeState(t.datasources[i]);for(var e in this._visualizations)t.visualizations[e]&&this._visualizations[e].deserializeState(t.visualizations[e])}},O.prototype=Object.create(i.prototype),O.prototype.constructor=O,O.prototype.commsDataLoaded=function(){for(var t=0;t<this.dashboardArray.length;t++)for(var i in this.dashboardArray[t].datasources)if(0===this.dashboardArray[t].datasources[i]._loadedCount)return!1;return!0},O.prototype.getVisualization=function(t){return this._visualizations[t]},O.prototype.accept=function(t){t.visit(this),this.dashboardTotal=0;for(var i in this.dashboards)this.dashboards[i].accept(t),++this.dashboardTotal},O.prototype.url=function(t,i){this.espUrl=(new a.ESPUrl).url(t);var e=null,s="HIPIE_DDL";this.espUrl.isWorkunitResult()?(s=this.espUrl._params.ResultName,e=(new a.HIPIEWorkunit).url(t).proxyMappings(this._proxyMappings).timeout(this._timeout)):e=(new a.HIPIERoxie).url(t).proxyMappings(this._proxyMappings).timeout(this._timeout);var o=this;e.fetchResults().then(function(t){return h(s,t)?e.fetchResult(s).then(function(e){var a=e[0][s];o.parse(a,function(){i(t)})})["catch"](function(t){o.commsEvent(o,"error",s,t)}):void 0})["catch"](function(t){o.commsEvent(o,"error","fetchResults",t)})},O.prototype.proxyMappings=function(t){return arguments.length?(this._proxyMappings=t,this):this._proxyMappings},O.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},O.prototype.widgetMappings=function(t){return arguments.length?(this._widgetMappings=t,this):this._widgetMappings},O.prototype.clearDataOnUpdate=function(t){return arguments.length?(this._clearDataOnUpdate=t,this):this._clearDataOnUpdate},O.prototype.propogateClear=function(t){return arguments.length?(this._propogateClear=t,this):this._propogateClear},O.prototype.missingDataString=function(t){return arguments.length?(this._missingDataString=t,this):this._missingDataString},O.prototype.parse=function(t,i){var e=this;return this._json=t,this._jsonParsed=JSON.parse(this._json),this.dashboards={},this.dashboardArray=[],this._visualizations={},this._visualizationArray=[],this._jsonParsed.forEach(function(t){var i=new C(e,t,e._proxyMappings);e.dashboards[t.id]=i,e.dashboardArray.push(i)}),this.dashboardTotal=this.dashboardArray.length,this._visualizationArray.forEach(function(t){t.on("processEvent",function(i,s,a,o,r){e.vizEvent(t.widget,i,a,o,r)})}),this.ready(i),this},O.prototype.dashboardsLoaded=function(){return Promise.all(this.dashboardArray.map(function(t){return t.loadedPromise()}))},O.prototype.getVisualizations=function(){return this._visualizations},O.prototype.getVisualizationArray=function(){return this._visualizationArray},O.prototype.on=function(t,i){var e=this;return this.overrideMethod(t,function(t,s){var a=t.apply(e,s);return i.apply(e,s)||a}),this},O.prototype.ready=function(t){t&&this.dashboardsLoaded().then(function(){t()})},O.prototype.vizEvent=function(t,i,e,s,a){console.log("Marshaller.vizEvent:  "+t.id()+"-"+i)},O.prototype.commsEvent=function(t,i,e,s){switch(i){case"request":window.__hpcc_debug&&console.log("Marshaller.commsEvent:  "+t.id+"-"+i+":  "+JSON.stringify(e));break;case"response":case"error":window.__hpcc_debug&&console.log("Marshaller.commsEvent:  "+t.id+"-"+i+":  "+JSON.stringify(s));break;default:window.__hpcc_debug&&console.log("Marshaller.commsEvent:  "+JSON.stringify(arguments))}},O.prototype.createDatabomb=function(){var t={};return this.dashboardArray.forEach(function(i){for(var e in i.datasources){var s=i.datasources[e].comms;t[e]={};for(var a in s._hipieResults){var o=s._hipieResults[a];
t[e][a]=s._resultNameCache[o.from]}}}),t},O.prototype.primeData=function(t){var i=this.dashboardArray.map(function(i){return i.primeData(t)});return Promise.all(i)},O.prototype.serializeState=function(){var t={};return this.dashboardArray.forEach(function(i,e){t[i.id]=i.serializeState()}),t},O.prototype.deserializeState=function(t){return t?(this.dashboardArray.forEach(function(i,e){i.deserializeState(t[i.id])}),this):void 0},{exists:h,Marshaller:O,Dashboard:C,DataSource:x,Output:E,Visualization:I}});