webpackJsonp([5],{"6DH6":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("bGai"),s=e("flXH"),n={name:"Home",data:function(){return{topImagePaddingTop:"145%",topImage:e("Hie6"),query:{value:"",tab:0,preach:0},positionList:[{title:"巴斯夫湛江一体化基地毕业生“湛放计划”",range:"全国",education:"全日制本科及以上",number:"若干",type:"link",url:"https://wecruit.hotjob.cn/SU625e7a562f9d24287db2303f/mc/position/campus?projectCode=100102"}],preachListUnderLine:[{status:!1,title:"2023届巴斯夫湛江一体化基地毕业生“湛放计划”",time:"敬请期待",image:e("gqkc"),address:"华东理工大学徐汇小区 逸夫楼演讲厅",url:""}],preachListOnLine:[{status:!1,title:"2023届湛江一体化基地毕业生“湛放”计划",time:"",image:e("EHvq"),type:""},{status:!1,title:"2022届巴斯夫湛江一体化基地应届生直聘专列",time:"往期回放",image:e("RVuX"),type:"link",url:"https://vip.kongxuan.com/2022/basf-zj/wap/playback.html"}]}},mixins:[s.a,s.b],methods:{handleTogglePosition:function(t){this.$set(this.query,"tab",t)},handleTogglePreach:function(t){this.$set(this.query,"preach",t)},handlePositionClick:function(t){t.url&&t.type&&"link"===t.type&&window.open(t.url,"_blank")},handleDeliver:function(t){"link"===t.type&&window.open(t.url,"_blank")}},components:{Scroll:a.d}},r={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"school-recruitment"},[e("div",{ref:"topImage",staticClass:"top-image",style:{"background-image":"url("+t.topImage+")","padding-top":t.topImagePaddingTop}}),t._v(" "),e("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("Scroll",{ref:"scroll",staticClass:"scroll-wrapper",attrs:{preventDefault:"",pullDown:!1},on:{scroll:t.handleScroll}},[e("div",{staticClass:"content"},[e("div",{staticClass:"top-text"},[e("div",{staticClass:"title"},[t._v("你好呀，有为青年"),e("br"),t._v("欢迎加入毕业生“湛放计划”")]),t._v(" "),e("van-divider",{style:{height:"0.02rem",width:"4.8rem","background-color":"#ffffff",margin:"0.3rem 0"}}),t._v(" "),e("div",{staticClass:"desc"},[t._v("专为巴斯夫湛江一体化基地项目人才储备而设，旨在选拔、培养和发展具有潜质、充满热情的应届毕业生。")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("在这里，你将有机会大展抱负，见证并推动智慧生产理念和可持续生产的落实，“湛”放未来无限可能。")])],1),t._v(" "),e("div",{staticClass:"part-1"},[e("ul",t._l(t.positionList,function(i,a){return e("li",{key:a,on:{click:function(e){return e.stopPropagation(),t.handlePositionClick(i)}}},[e("div",{staticClass:"left"},[e("div",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("(2022、2023届海内外本、硕毕业生均可投递简历)")]),t._v(" "),e("div",{staticClass:"left-bottom"},[e("div",{staticClass:"status",staticStyle:{"background-color":"#f39500"}},[t._v("投递简历")]),t._v(" "),e("div",[e("van-icon",{staticStyle:{"margin-right":"0.15rem"},attrs:{name:"zhishidian","class-prefix":"iconfont icon",color:"#f39500",size:"0.6rem"}}),t._v("\n                  "+t._s(i.education)+"\n                ")],1)])])])}),0)]),t._v(" "),e("div",{staticClass:"part-2"},[e("div",{staticClass:"title"},[t._v("宣讲行程")]),t._v(" "),e("div",{staticStyle:{display:"flex","margin-bottom":"0.5rem"}},[e("van-button",{staticClass:"basf-btn no-border",attrs:{square:"",color:0===t.query.preach?"#f39500":""},on:{click:function(i){return i.stopPropagation(),t.handleTogglePreach(0)}}},[t._v("线下宣讲会")]),t._v(" "),e("van-button",{staticClass:"basf-btn no-border",style:{"margin-left":"0.5rem"},attrs:{square:"",color:1===t.query.preach?"#f39500":""},on:{click:function(i){return i.stopPropagation(),t.handleTogglePreach(1)}}},[t._v("空中宣讲会")])],1),t._v(" "),0===t.query.preach?e("ul",[t._l(t.preachListUnderLine,function(i,a){return e("li",{key:a,staticClass:"flex",on:{click:function(e){return e.stopPropagation(),t.handleDeliver(i)}}},[e("van-image",{staticClass:"image",attrs:{fit:"cover",src:i.image}}),t._v(" "),e("div",{staticClass:"right"},[e("div",[e("div",{staticClass:"title"},[e("div",[t._v(t._s(i.title))])])]),t._v(" "),e("div",{staticStyle:{display:"flex","align-items":"center"}},[e("van-icon",{staticStyle:{"margin-right":"0.15rem"},attrs:{name:"shijian","class-prefix":"iconfont icon",color:"#f39500",size:"0.55rem"}}),t._v("\n                "+t._s(i.time)+"\n              ")],1)])],1)}),t._v(" "),e("van-empty",{directives:[{name:"show",rawName:"v-show",value:0===t.preachListUnderLine.length,expression:"preachListUnderLine.length === 0"}],attrs:{description:"敬请期待"}})],2):e("ul",[t._l(t.preachListOnLine,function(i,a){return e("li",{key:a,staticClass:"flex",on:{click:function(e){return e.stopPropagation(),t.handleDeliver(i)}}},[e("van-image",{staticClass:"image",attrs:{fit:"cover",src:i.image}}),t._v(" "),e("div",{staticClass:"right"},[e("div",[e("div",{staticClass:"title"},[e("div",[t._v(t._s(i.title))])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:i.time,expression:"item.time"}],staticStyle:{display:"flex","align-items":"center"}},[e("van-icon",{staticStyle:{"margin-right":"0.15rem"},attrs:{name:"shijian","class-prefix":"iconfont icon",color:"#f39500",size:"0.55rem"}}),t._v("\n                "+t._s(i.time)+"\n              ")],1)])],1)}),t._v(" "),e("van-empty",{directives:[{name:"show",rawName:"v-show",value:0===t.preachListOnLine.length,expression:"preachListOnLine.length === 0"}],attrs:{description:"敬请期待"}})],2)])])])],1)},staticRenderFns:[]};var o=e("VU/8")(n,r,!1,function(t){e("TZxD")},"data-v-7c9600b4",null);i.default=o.exports},EHvq:function(t,i,e){t.exports=e.p+"static/img/basf_job_img_1_0.c7aa87e.jpg"},Hie6:function(t,i,e){t.exports=e.p+"static/img/basf_job_img.25fa6c9.jpg"},RVuX:function(t,i,e){t.exports=e.p+"static/img/basf_job_img_2.d3cc475.jpg"},TZxD:function(t,i){},gqkc:function(t,i,e){t.exports=e.p+"static/img/basf_job_img_1.5e82689.jpg"}});