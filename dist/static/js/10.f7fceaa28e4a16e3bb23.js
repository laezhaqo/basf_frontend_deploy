webpackJsonp([10],{BVkW:function(t,e){},RaoG:function(t,e,i){t.exports=i.p+"static/img/basf_job_2_img_2.c063a93.jpg"},"ak/G":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bGai"),n=i("flXH"),s={name:"SocialRecruitmentDetail",data:function(){return{topImagePaddingTop:"70%",topImage:i("RaoG"),title:"",query:{value:"",tab:0},positionList:[{title:"操作工",range:"湛江",education:"专业人士",number:"若干",link:""},{title:"操作工",range:"湛江",education:"专业人士",number:"若干",link:""},{title:"操作工",range:"湛江",education:"专业人士",number:"若干",link:""},{title:"操作工",range:"湛江",education:"专业人士",number:"若干",link:""}]}},mixins:[n.a,n.b],created:function(){this.title=this.$route.query.title},methods:{handleTogglePosition:function(t){this.$set(this.query,"tab",t)},handleClick:function(t){}},components:{Scroll:a.d}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"social-recruitment-detail"},[i("div",{ref:"topImage",staticClass:"top-image",style:{"background-image":"url("+t.topImage+")","padding-top":t.topImagePaddingTop}}),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("Scroll",{ref:"scroll",staticClass:"scroll-wrapper",attrs:{preventDefault:"",pullDown:!1},on:{scroll:t.handleScroll}},[i("div",{staticClass:"content"},[i("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{staticClass:"search-wrapper"},[i("div",{staticClass:"search-title"},[t._v("招聘岗位")]),t._v(" "),i("div",{staticClass:"input-wrapper"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query.value,expression:"query.value"}],staticClass:"input preventDefault",domProps:{value:t.query.value},on:{input:function(e){e.target.composing||t.$set(t.query,"value",e.target.value)}}}),t._v(" "),i("div",{staticClass:"icon"},[i("van-icon",{attrs:{name:"sousuo","class-prefix":"iconfont icon",color:"#f39500",size:"0.6rem"}})],1)])]),t._v(" "),i("div",{staticClass:"part-1"},[i("div",{staticClass:"tab"},[i("div",[t._v("职能:")]),t._v(" "),i("van-button",{staticClass:"basf-btn no-border",staticStyle:{"margin-left":"0.5rem"},attrs:{square:"",color:0===t.query.tab?"#f39500":""},on:{click:function(e){return e.stopPropagation(),t.handleTogglePosition(0)}}},[t._v("全部")]),t._v(" "),i("van-button",{staticClass:"basf-btn no-border",staticStyle:{"margin-left":"0.5rem"},attrs:{square:"",color:1===t.query.tab?"#f39500":""},on:{click:function(e){return e.stopPropagation(),t.handleTogglePosition(1)}}},[t._v("专业人士")])],1),t._v(" "),i("ul",t._l(t.positionList,function(e,a){return i("li",{key:a,on:{click:function(i){return i.stopPropagation(),t.handleClick(e)}}},[i("div",{staticClass:"left"},[i("div",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"left-bottom"},[i("div",[i("van-icon",{staticStyle:{"margin-right":"0.15rem"},attrs:{name:"company","class-prefix":"iconfont icon",color:"#f39500",size:"0.6rem"}}),t._v("\n                  "+t._s(e.range)+"\n                ")],1),t._v(" "),i("div",[i("van-icon",{staticStyle:{"margin-right":"0.15rem"},attrs:{name:"zhishidian","class-prefix":"iconfont icon",color:"#f39500",size:"0.6rem"}}),t._v("\n                  "+t._s(e.education)+"\n                ")],1),t._v(" "),i("div",[i("van-icon",{staticStyle:{"margin-right":"0.15rem"},attrs:{name:"people","class-prefix":"iconfont icon",color:"#f39500",size:"0.6rem"}}),t._v("\n                  "+t._s(e.number)+"\n                ")],1)])]),t._v(" "),i("van-icon",{attrs:{name:"more","class-prefix":"iconfont icon",color:"#999999",size:"0.6rem"}})],1)}),0)])])])],1)},staticRenderFns:[]};var r=i("VU/8")(s,o,!1,function(t){i("BVkW")},"data-v-5bfd54d7",null);e.default=r.exports}});