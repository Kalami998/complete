(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{565:function(t,o,e){var content=e(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(31).default)("28c18b6f",content,!0,{sourceMap:!1})},729:function(t,o,e){"use strict";e(565)},730:function(t,o,e){var n=e(30),r=e(51),c=e(60),h=n((function(i){return i[1]})),l=r(c);h.push([t.i,'.none-style{display:none}.hide-element{border:0;height:0;margin:0;overflow:hidden;padding:0;width:0}@font-face{font-family:"AlibabaPuHuiTiH";font-style:normal;font-weight:400;src:url('+l+")}.like-page,.picker-box{position:relative}.picker-box{background:#f5f5f5;border:1px solid #f7f7f7;border-radius:6px;height:120px;overflow-y:hidden;padding:20px}.picker-box .choose-picker{border:1px solid;height:24px;position:fixed;width:calc(100% - 40px);z-index:901}.picker-box .picker-column{font-size:16px;font-size:500;height:24px;line-height:24px}.move-area{background:#ecec80;border:1px solid #f5f5f5;border-radius:50%;height:12px;position:absolute;width:12px;z-index:800}",""]),h.locals={},t.exports=h},816:function(t,o,e){"use strict";e.r(o);e(23);var n={data:function(){return{rangeList:[{name:"A",id:1},{name:"B",id:12},{name:"C",id:13},{name:"D",id:14},{name:"E",id:15},{name:"F",id:16},{name:"G",id:17}],startPosition:{},endPosition:{},moveingPosition:{},choosePicker:{},styleInfo:{},marginValue:{},limitRange:{up:0,down:0}}},mounted:function(){this.choosePicker=this.rangeList[0],this.getStyleInfo(".choose-picker")},methods:{getStyleInfo:function(t){var o=document.querySelectorAll(t);this.styleInfo=o[0],console.log(o,"样式结果"),this.rangeList.length&&(this.limitRange.up=(this.rangeList.length-1)*this.styleInfo.offsetHeight,console.log(this.limitRange,"界限信息"))},touchFunc:function(t,i){var o=t.type,e=t.targetTouches;t.target;"touchstart"==o?(this.startPosition=e,console.info(this.startPosition[0].pageY,"touchstart操作类型")):"touchmove"==o?this.moveingPosition=e:"touchend"==o&&(this.endPosition=e,this.returnMargin())},returnMargin:function(){var t;null!==(t=this.moveingPosition[0])&&void 0!==t&&t.pageY||(this.marginValue=0),this.moveingPosition[0].pageY>this.startPosition[0].pageY&&(this.moveingPosition[0].pageY-this.startPosition[0].pageY>this.limitRange.up?(console.log(this.moveingPosition[0].pageY-this.startPosition[0].pageY,"超过最大值"),this.marginValue=this.limitRange.down):(console.log(this.moveingPosition[0].pageY-this.startPosition[0].pageY,"没有超过最大值"),this.marginValue=this.moveingPosition[0].pageY-this.startPosition[0].pageY)),this.moveingPosition[0].pageY<=this.startPosition[0].pageY&&(this.moveingPosition[0].pageY-this.startPosition[0].pageY<0-this.limitRange.up?this.marginValue=-this.limitRange.up:this.marginValue=this.moveingPosition[0].pageY-this.startPosition[0].pageY)}}},r=(e(729),e(15)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"like-page"},[o("div",{staticClass:"move-area",style:{top:t.startPosition.offsetTop+"px",left:t.startPosition.offsetLeft+"px"}}),t._v(" "),o("div",{staticClass:"picker-box",on:{touchstart:function(o){return t.touchFunc(o)},touchmove:function(o){return t.touchFunc(o)},touchend:function(o){return t.touchFunc(o)}}},[o("div",{staticClass:"choose-picker"},[t._v(t._s(t.choosePicker.name))]),t._v(" "),o("div",{staticClass:"pickers",style:{"margin-top":t.marginValue+"px"}},t._l(t.rangeList,(function(i){return o("div",{key:i.id,staticClass:"picker-column"},[t._v("\n                "+t._s(i.name)+"\n            ")])})),0)])])}),[],!1,null,null,null);o.default=component.exports}}]);