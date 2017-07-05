!function(t,e){"function"==typeof define&&define.amd?define(["d3","./CommonSerial","amcharts-serial","../api/INDChart"],e):t.amchart_Column=e(t.d3,t.amchart_CommonSerial,t.amcharts,t.api_INDChart)}(this,function(t,e,i,a){function s(){e.call(this),this._tag="div",this._gType="column",this.orientation("horizontal")}return s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.prototype._class+=" amchart_Column",s.prototype["implements"](a.prototype),s.prototype.publish("paletteID","default","set","Palette ID",s.prototype._palette["switch"](),{tags:["Basic","Shared"]}),s.prototype.publish("stacked",!1,"boolean","Stack Chart",null,{tags:["Basic","Shared"]}),s.prototype.publish("fillOpacity",.7,"number","Opacity of The Fill Color",null,{min:0,max:1,step:.001,inputType:"range",tags:["Intermediate","Shared"]}),s.prototype.publish("cylinderBars",!1,"boolean","Cylinder Bars",null,{tags:["Basic"]}),s.prototype.publish("circleRadius",1,"number","Circle Radius of Cylinder Bars",null,{tags:["Basic"]}),s.prototype.publish("columnWidth",.62,"number","Column Width",null,{tags:["Basic"]}),s.prototype.publish("Depth3D",0,"number","3D Depth (px)",null,{tags:["Basic"]}),s.prototype.publish("Angle3D",0,"number","3D Angle (Deg)",null,{tags:["Basic"]}),s.prototype.publish("stackType","regular","set","Stack Type",["none","regular","100%","3d"],{tags:["Basic"]}),s.prototype.publish("useOhlcLines",!1,"boolean","Use OHLC Lines",null,{tags:["Intermediate"]}),s.prototype.publish("yAxisDomainLow",null,"number","Y axis Minimum value",null,{optional:!0}),s.prototype.publish("yAxisDomainHigh",null,"number","Y axis Maximum value",null,{optional:!0}),s.prototype.publish("yAxisBaseValue",null,"number","Y axis base value",null,{optional:!0}),s.prototype.publish("yAxisLabelFrequency",1,"number","Y axis label frequency",null,{optional:!0}),s.prototype.publish("yAxisTickCount",null,"number","Y axis grid count",null,{optional:!0}),s.prototype.enter=function(t,i){e.prototype.enter.apply(this,arguments)},s.prototype.updateChartOptions=function(){return e.prototype.updateChartOptions.apply(this,arguments),"candle-ohlc"===this._rangeType?this._gType=this.useOhlcLines()?"ohlc":"candlestick":this._gType="column",this.buildGraphs(this._gType),this.stacked()?this._chart.valueAxes[0].stackType=this.stackType():this._chart.valueAxes[0].stackType="none",this.yAxisDomainLow_exists()&&(this._chart.valueAxes[0].minimum=this.yAxisDomainLow()),this.yAxisDomainHigh_exists()&&(this._chart.valueAxes[0].maximum=this.yAxisDomainHigh()),this._chart.valueAxes[0].strictMinMax=!1,this.yAxisLabelFrequency_exists()&&(this._chart.valueAxes[0].labelFrequency=this.yAxisLabelFrequency()),this.yAxisBaseValue_exists()&&(this._chart.valueAxes[0].baseValue=this.yAxisBaseValue()),this.yAxisTickCount_exists()&&(this._chart.valueAxes[0].gridCount=this.yAxisTickCount()),this._chart.depth3D=this.Depth3D(),this._chart.angle=this.Angle3D(),this._chart.categoryAxis.startOnAxis=!1,this._chart},s.prototype.buildGraphs=function(t){function i(t,e){return this.columnWidth()&&(t.columnWidth=this.columnWidth()),this.cylinderBars()?t.topRadius=this.circleRadius():t.topRadius=void 0,"normal"===this._rangeType&&(t.openField="openField"+e,t.valueField="valueField"+e),"candle-ohlc"===this._rangeType&&(t.lowField="lowField"+e,t.openField="openField"+e,t.closeField="closeField"+e,t.highField="highField"+e),t.fillAlphas=this.fillOpacity(),t}this._chart.graphs=[];for(var a=0;a<this.columns().length-1;a++){var s=e.prototype.buildGraphObj.call(this,t,a),l=i.call(this,s,a);this._chart.addGraph(l)}},s.prototype.update=function(t,i){e.prototype.update.apply(this,arguments),this.updateChartOptions(),this._chart.validateNow(),this._chart.validateData()},s});