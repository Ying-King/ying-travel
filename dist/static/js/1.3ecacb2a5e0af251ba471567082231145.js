webpackJsonp([1],{FP3a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),a=i.n(s),n=i("2bvH"),r={name:"HomeHeader",computed:a()({},Object(n.c)(["city"]))},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("i",{staticClass:"iconfont arrow-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("a",{staticClass:"iconfont back-icon",attrs:{href:"#"}},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("a",{attrs:{href:"http://piao.qunar.com/touch/list_%E5%B8%B8%E5%B7%9E.html?isSearch=1&cityName=%E5%B8%B8%E5%B7%9E"}},[e("i",{staticClass:"iconfont"},[this._v("")]),this._v("\n      输入城市/景点/游玩主题\n    ")])])}]};var o=i("VU/8")(r,c,!1,function(t){i("oRlA")},"data-v-94b7a5a0",null).exports,l={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3}}},computed:{showSwiper:function(){return this.list.length}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{attrs:{options:this.swiperOption}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("a",{attrs:{href:t.linkUrl}},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var m=i("VU/8")(l,d,!1,function(t){i("TTea")},"data-v-43af7804",null).exports,u={name:"HomeCategory",props:{list:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"category"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"category-item"},[i("a",{attrs:{href:e.linkUrl}},[i("div",{staticClass:"category-item-img"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"keywords"},[t._v(t._s(e.desc))])])])}),0)}),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var h=i("VU/8")(u,p,!1,function(t){i("tvgx")},"data-v-66879cb6",null).exports,v={name:"HomeRecommend",props:{list:Array}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend"},[t._m(0),t._v(" "),i("ul",{staticClass:"list"},t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:{name:"Detail",params:{id:e.productId}}}},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("p",{staticClass:"item-title"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"item-desc"},[i("span",{staticClass:"item-price"},[t._v("¥"),i("em",{staticClass:"item-price-num"},[t._v(t._s(e.price))]),t._v("起")])])])}),1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"recommend-title"},[e("img",{attrs:{src:"http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png",alt:""}}),this._v(" "),e("span",[this._v("本周热门榜单")]),this._v(" "),e("a",{staticClass:"recommend-title-more",attrs:{href:"http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=常州"}},[this._v("\n      全部榜单\n      "),e("i",{staticClass:"iconfont"},[this._v(">")])])])}]};var _=i("VU/8")(v,f,!1,function(t){i("ttKl")},"data-v-23bc8078",null).exports,g={name:"HomeWeekend",props:{list:Array}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[t._m(0),t._v(" "),i("ul",{staticClass:"list"},t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("a",{staticClass:"fulllink",attrs:{href:e.linkUrl}},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.imgUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weekend-title"},[e("h2",[this._v("周末去哪儿")])])}]};var y=i("VU/8")(g,C,!1,function(t){i("SGyI")},"data-v-f997202a",null).exports,w=i("T4ej"),k=i("Muz9"),b=i.n(k),H=i("vgQg"),L={name:"Home",components:{HomeHeader:o,HomeSwiper:m,HomeCategory:h,HomeRecommend:_,HomeWeekend:y,Loading:w.a},data:function(){return{lastCity:"",swiperList:[],categoryList:[],recommendList:[],weekendList:[]}},computed:a()({},Object(n.c)(["city"])),methods:{getHomeInfo:function(){var t=this;b.a.get("http://yapi.demo.qunar.com/mock/90995/api/index?city="+this.city).then(this.getHomeInfoSucc),b.a.post(H.f,H.e).then(function(e){e=e.data,t.recommendList=e.tokenContentList[0].productInfoList,console.log(t.recommendList)})},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.categoryList=e.categoryList,this.weekendList=e.weekendList}console.log(t.data)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("loading",{directives:[{name:"show",rawName:"v-show",value:!t.recommendList.length,expression:"!recommendList.length"}]}),t._v(" "),i("home-header"),t._v(" "),i("home-swiper",{attrs:{list:t.swiperList}}),t._v(" "),i("home-category",{attrs:{list:t.categoryList}}),t._v(" "),i("home-recommend",{attrs:{list:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{list:t.weekendList}}),t._v(" "),i("div",{staticClass:"price-desc"},[t._v("\n    票面价是指通过景区指定窗口售卖的纸质门票上标注的价格\n  ")])],1)},staticRenderFns:[]};var U=i("VU/8")(L,E,!1,function(t){i("uRFK")},"data-v-ab8db764",null);e.default=U.exports},SGyI:function(t,e){},TTea:function(t,e){},oRlA:function(t,e){},ttKl:function(t,e){},tvgx:function(t,e){},uRFK:function(t,e){},vgQg:function(t,e,i){"use strict";i.d(e,"f",function(){return s}),i.d(e,"d",function(){return a}),i.d(e,"b",function(){return n}),i.d(e,"e",function(){return r}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return o});var s="https://sec-m.ctrip.com/restapi/soa2/16035/getContent?_fxpcqlniredt=09031107111172577019",a="https://sec-m.ctrip.com/restapi/soa2/12530/json/scenicSpotDetails?_fxpcqlniredt=09031107111172577019",n="https://sec-m.ctrip.com/restapi/soa2/12530/json/viewSpotImages?_fxpcqlniredt=09031107111172577019",r={contentType:"json",currency:"USD",departureCityId:2,head:{cid:"09031107111172577019",ctok:"",cver:"1.0",lang:"01",sid:"8888",syscode:"09",auth:""},hostFrom:"ctrip",locale:"en-US",saleChannelId:7,tokens:["bkLYPLt4S6eS3cNeuWvn3KHDliEqxIIsx8H0HmMMmMS0Tz2v9zk70rLiYE8gGPm0M6QgivS0uL7EFHX1kr5CjuHtHhopGHYPNL65/4r/yu5DS3QTRUhKtpCbsCvbN/7JjiX4c+OQ9A5h7YEiqPqrcoUURiJRk9lTG1nhXpQFYx57FJ+cqaVmyz+/GWNchBp6qyQCUrwRO8Ysd0wZbxGzx1b4eUJGmK9m8H0YbzEEMkSfUU7pzDFPbxdt9dY2sctQQizU/EE5mxWpMdPMFa69BhWOuBpxaMFm05bcrML9zyfmG4oa42yLGP8nF1nQo+IBSj6/Cz8/ezHia/pQVvOrQi3qYLkqaGjM3mGir4r5pQGXIA63vZABgwPd1nNq0q13OvIw2Z8akjjfzVekoYvF/C0RVVuhP0lUrbCKonfg70XbTeTfQFsnbTsqNxzPNhQjtikIIQ=="]},c={contentType:"json",head:{cid:"09031107111172577019",ctok:"",cver:"1.0",lang:"01",sid:"8888",syscode:"09",auth:""},imgsize:"C_640_360",pageid:10320662470,ver:"8.3.2"},o={contentType:"json",head:{cid:"09031107111172577019",ctok:"",cver:"1.0",lang:"01",sid:"8888",syscode:"09",auth:""},imagesizes:["C_320_180","C_640_360"],pageid:10320662470,ver:"7.14.2"}}});
//# sourceMappingURL=1.3ecacb2a5e0af251ba471567082231145.js.map