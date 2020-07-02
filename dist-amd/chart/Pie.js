!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/SVGWidget","../api/I2DChart","../common/Text","../common/FAChar","../common/Utility","../api/ITooltip","css!./Pie"],e):t.chart_Pie=e(t.d3,t.common_SVGWidget,t.api_I2DChart,t.common_Text,t.common_FAChar,t.common_Utility,t.api_ITooltip)}(this,function(t,e,a,i,n,o,r){function s(i){e.call(this),a.call(this),r.call(this),o.SimpleSelectionMixin.call(this),this.labelWidgets={},this.d3Pie=t.layout.pie().padAngle(.0025).sort(function(t,e){return e>t?-1:t>e?1:0}).value(function(t){return t[1]}),this.d3Arc=t.svg.arc().padRadius(this.calcRadius()).innerRadius(this.innerRadius()),this.tooltipTick_default(!1).tooltipOffset_default(0)}return s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.prototype._class+=" chart_Pie",s.prototype["implements"](a.prototype),s.prototype["implements"](r.prototype),s.prototype.mixin(o.SimpleSelectionMixin),s.prototype.publish("paletteID","default","set","Palette ID",s.prototype._palette["switch"](),{tags:["Basic","Shared"]}),s.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),s.prototype.publish("outerText",!1,"boolean","Sets label position inside or outside chart",null,{tags:["Basic"]}),s.prototype.publish("innerRadius",0,"number","Sets inner pie hole radius as a percentage of the radius of the pie chart",null,{tags:["Basic"],range:{min:0,step:1,max:100}}),s.prototype.publish("showSeriesPercentage",!1,"boolean","If true, percentage will be shown in pie wedge",null,{tags:["Basic"]}),s.prototype.publish("seriesPercentageFormat",",.0f","string","Number format used for formatting series percentages",null,{disable:function(t){return!t.showSeriesPercentage()}}),s.prototype.pointInArc=function(t,e){var a=this.d3Arc.innerRadius()(e),i=this.d3Arc.outerRadius()(e),n=this.d3Arc.startAngle()(e),o=this.d3Arc.endAngle()(e),r=t.x*t.x+t.y*t.y,s=Math.atan2(t.x,-t.y);return s=0>s?s+2*Math.PI:s,r>=a*a&&i*i>=r&&s>=n&&o>=s},s.prototype.boxInArc=function(t,e,a){var i={x:t.x+e.x,y:t.y+e.y},n={x:i.x+e.width,y:i.y},o={x:i.x,y:i.y+e.height},r={x:i.x+e.width,y:i.y+e.height};return this.pointInArc(i,a)&&this.pointInArc(n,a)&&this.pointInArc(o,a)&&this.pointInArc(r,a)},s.prototype.calcRadius=function(t){return Math.min(this._size.width,this._size.height)/2-2},s.prototype.intersection=function(t,e){return this.intersectCircle(t,e)},s.prototype.enter=function(t,a){e.prototype.enter.apply(this,arguments),this._selection.widgetElement(a);var i=this;this.tooltipHTML(function(t){switch(i.tooltipStyle()){case"series-table":return i.tooltipFormat({label:t.data[0],arr:i.columns().slice(1).map(function(e,a){return{label:e,color:i._palette(t.data[0]),value:t.data[a+1]}})});default:return i.tooltipFormat({label:t.data[0],value:t.data[1]})}})},s.prototype.update=function(a,o){function r(e,a){return function(){t.select(this).transition().delay(a).attrTween("d",function(a){var i=t.interpolate(a.outerRadius,s.calcRadius()+e);return function(t){return a.outerRadius=i(t),s.d3Arc(a)}})}}e.prototype.update.apply(this,arguments);var s=this;this._palette=this._palette["switch"](this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id())),this.d3Arc.innerRadius(this.innerRadius_exists()?this.calcRadius()*this.innerRadius()/100:0);var l=o.selectAll(".arc").data(this.d3Pie(this.data()),function(t){return t.data[0]});if(l.enter().append("g").attr("class","arc").attr("opacity",0).call(this._selection.enter.bind(this._selection)).on("click",function(t){s.click(s.rowToObj(t.data),s.columns()[1],s._selection.selected(this))}).on("dblclick",function(t){s.dblclick(s.rowToObj(t.data),s.columns()[1],s._selection.selected(this))}).each(function(e){var a=t.select(this);a.append("path").on("mouseout.tooltip",s.tooltip.hide).on("mousemove.tooltip",s.tooltip.show).on("mouseover",r(0,0)).on("mouseout",r(-5,150)),e.data.__viz_faChar?s.labelWidgets[e.data[0]]=(new n)["char"](e.data.__viz_faChar).target(this).render():s.labelWidgets[e.data[0]]=(new i).text(e.data[0]).target(this).render()}),this.showSeriesPercentage()){var c=t.format(this.seriesPercentageFormat());this._dataSum=0,this.data().forEach(function(t){s._dataSum+=t[1]})}if(l.each(function(t){s.labelWidgets[t.data[0]].text(s.showSeriesPercentage()?c(t.data[1]/s._dataSum*100)+"%":t.data[0]).render()}),l.transition().attr("opacity",1).each(function(e){e.outerRadius=s.calcRadius()-5;var a={x:0,y:1};if(s.outerText()){var i=Math.cos((e.startAngle+e.endAngle-Math.PI)/2),n=Math.sin((e.startAngle+e.endAngle-Math.PI)/2),o=s.labelWidgets[e.data[0]].getBBox(),r=Math.abs(i)>Math.abs(n)?o.width:o.height;a.x=i*(s.calcRadius()+r),a.y=n*(s.calcRadius()+r)}else{var l=s.d3Arc.centroid(e);a={x:l[0],y:l[1]}}var c=t.select(this);c.select("path").transition().attr("d",s.d3Arc).style("fill",function(t){return s._palette(t.data[0])}),s.labelWidgets[e.data[0]].pos(a).render().element().classed("innerLabel",!s.outerText()).classed("outerLabel",s.outerText()).style("opacity",s.outerText()||s.boxInArc(a,s.labelWidgets[e.data[0]].getBBox(!0),e)?null:0)}),l.exit().transition().style("opacity",0).remove(),s.outerText()){var u=o.selectAll("line").data(this.d3Pie(this.data()),function(t){return t.data[0]});u.enter().append("line").attr("x1",0).attr("x2",0).attr("y1",-this.calcRadius()-3).attr("y2",-this.calcRadius()-8).attr("stroke","gray").attr("transform",function(t){return"rotate("+(t.startAngle+t.endAngle)/2*(180/Math.PI)+")"}),u.transition().attr("transform",function(t){return"rotate("+(t.startAngle+t.endAngle)/2*(180/Math.PI)+")"}),u.exit().remove()}},s.prototype.exit=function(t,a){e.prototype.exit.apply(this,arguments)},s});