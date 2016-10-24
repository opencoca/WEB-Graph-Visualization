!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../common/Palette","../common/Utility","css!./CalendarHeatMap"],e):t.other_CalendarHeatMap=e(t.d3,t.common_HTMLWidget,t.common_Palette,t.common_Utility)}(this,function(t,e,a,n){function r(t){e.call(this),n.SimpleSelectionMixin.call(this)}return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.prototype._class+=" other_CalendarHeatMap",r.prototype.mixin(n.SimpleSelectionMixin),r.prototype._palette=a.rainbow("default"),r.prototype.publish("paletteID","YlOrRd","set","Palette ID",r.prototype._palette["switch"](),{tags:["Basic","Shared"]}),r.prototype.publish("dateColumn",null,"set","Date Column",function(){return this.columns()},{optional:!0}),r.prototype.publish("datePattern","%Y-%m-%d","string","Date Pattern"),r.prototype.publish("aggrType",null,"set","Aggregation Type",[null,"mean","median","sum","min","max"],{optional:!0}),r.prototype.publish("aggrColumn",null,"set","Aggregation Field",function(){return this.columns()},{optional:!0,disable:function(t){return!t.aggrType()}}),r.prototype.publish("aggrDeltaColumn",null,"set","Aggregation Field",function(){return this.columns()},{optional:!0,disable:function(t){return!t.aggrType()}}),r.prototype.calendarData=function(){var e=t.time.format(this.datePattern()).parse,a=this.aggrDeltaColumn()?t.format(".1%"):t.format("s");return(this._prevDateColumn!==this.dateColumn()||this._prevAggrType!==this.aggrType()||this._prevAggrColumn!==this.aggrColumn()||this._prevAggrDeltaColumn!==this.aggrDeltaColumn())&&(this._prevDateColumn=this.dateColumn(),this._prevAggrType=this.aggrType(),this._prevAggrColumn=this.aggrColumn(),this._prevAggrDeltaColumn=this.aggrDeltaColumn(),this._view=this._db.aggregateView([this.dateColumn()],this.aggrType(),this.aggrColumn(),this.aggrDeltaColumn())),this._view.entries().map(function(t){return t.dateKey=e(t.key),t.formattedValues=a(t.values.aggregate),t.origRows=a(t.values),t})},r.prototype.calcDelta=function(t){return(t.Close-t.Open)/t.Open},r.prototype.enter=function(a,n){e.prototype.enter.apply(this,arguments),t.select(a.parentNode).style("overflow","scroll"),this._selection.widgetElement(n)},r.prototype.update=function(a,n){function r(e){var a=new Date(e.getFullYear(),e.getMonth()+1,0),n=e.getDay(),r=t.time.weekOfYear(e),o=a.getDay(),i=t.time.weekOfYear(a);return"M"+(r+1)*l+","+n*l+"H"+r*l+"V"+7*l+"H"+i*l+"V"+(o+1)*l+"H"+(i+1)*l+"V0H"+(r+1)*l+"Z"}e.prototype.update.apply(this,arguments),this._palette=this._palette["switch"](this.paletteID());var o=this.width(),l=o/12/5,i=8*l,s=this.calendarData(),u=t.map(s,function(t){return t.dateKey}),p=t.extent(s,function(t){return t.dateKey.getFullYear()}),c=this,g=n.selectAll("svg").data(t.range(p[0],p[1]+1));g.enter().append("svg").each(function(e){var a=t.select(this),n=a.append("g");n.append("text").style("text-anchor","middle"),n.append("g").attr("class","days"),n.append("g").attr("class","months")}),g.attr("width",o).attr("height",i),g.select("g").attr("transform","translate("+(o-53*l)/2+","+(i-7*l-1)+")"),g.select("text").attr("transform","translate(-6,"+3.5*l+")rotate(-90)").text(function(t){return t}),g.exit().remove();var h=t.extent(s,function(t){return t.values.aggregate});if(this.aggrDeltaColumn()){var m=Math.max(Math.abs(h[0],h[1]));h=[-m,m]}var d=g.select(".days").selectAll(".day").data(function(e){return t.time.days(new Date(e,0,1),new Date(e+1,0,1))});d.enter().append("rect").attr("class","day").call(this._selection.enter.bind(this._selection)).on("click",function(t){var e=u.get(t);e&&e.values&&e.values&&e.values.length&&c.click(c.rowToObj(e.values[0]),c.dateColumn(),c._selection.selected(this))}).on("dblclick",function(t){var e=u.get(t);e&&e.values&&e.values&&e.values.length&&c.dblclick(c.rowToObj(e.values[0]),c.dateColumn(),c._selection.selected(this))}).append("title"),d.attr("x",function(e){return t.time.weekOfYear(e)*l}).attr("y",function(t){return t.getDay()*l}).attr("width",l).attr("height",l),d.select("title").text(function(t){return t}),d.filter(function(t){return u.has(t)}).style("fill",function(t){var e=u.get(t);return e&&e.values&&e.values.aggregate?c._palette(e.values.aggregate,h[0],h[1]):null}).select("title").text(function(t){var e=u.get(t);return e.key+": "+e.formattedValues}),d.exit().remove();var y=g.select(".months").selectAll(".month").data(function(e){return t.time.months(new Date(e,0,1),new Date(e+1,0,1))});y.enter().append("path").attr("class","month"),y.attr("d",r),y.exit().remove()},r.prototype.exit=function(t,a){e.prototype.exit.apply(this,arguments)},r.prototype.click=function(t,e,a){console.log("Click:  "+JSON.stringify(t)+", "+e+", "+a)},r.prototype.dblclick=function(t,e,a){console.log("Double click:  "+JSON.stringify(t)+", "+e+", "+a)},r});