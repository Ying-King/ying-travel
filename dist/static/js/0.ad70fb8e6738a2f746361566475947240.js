webpackJsonp([0],{FP3a:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"header"},[i("div",{staticClass:"header-left"},[i("a",{staticClass:"iconfont back-icon",attrs:{href:"#"}},[this._v("")])]),this._v(" "),i("div",{staticClass:"header-input"},[i("a",{attrs:{href:"#"}},[i("i",{staticClass:"iconfont"},[this._v("")]),this._v("\n      输入城市/景点/游玩主题\n    ")])]),this._v(" "),i("div",{staticClass:"header-right"},[i("a",{attrs:{href:"#"}},[this._v("\n      城市\n      "),i("i",{staticClass:"iconfont arrow-icon"},[this._v("")])])])])}]};var r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"wrapper"},[this.showSwiper?i("swiper",{attrs:{options:this.swiperOption}},[this._l(this.swiperList,function(t){return i("swiper-slide",{key:t.id},[i("a",{attrs:{href:t.linkUrl}},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var o={name:"HomeCategory",data:function(){return{swiperOption:{pagination:".swiper-pagination"},categoryList:[{id:"0001",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0002",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0003",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0004",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0005",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0006",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0007",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0008",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"},{id:"0009",imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",linkUrl:"https://touch.piao.qunar.com/touch/list_常州_景点门票.html?cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%25B8%25B8%25E5%25B7%259E",desc:"热门景点"}]}},computed:{pages:function(){var t=[];return this.categoryList.forEach(function(i,a){var e=Math.floor(a/8);t[e]||(t[e]=[]),t[e].push(i)}),t}}},n={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"category"},[a("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(i,e){return a("swiper-slide",{key:e},t._l(i,function(i){return a("div",{key:i.id,staticClass:"category-item"},[a("a",{attrs:{href:i.linkUrl}},[a("div",{staticClass:"category-item-img"},[a("img",{attrs:{src:i.imgUrl,alt:""}})]),t._v(" "),a("p",{staticClass:"keywords"},[t._v(t._s(i.desc))])])])}),0)}),t._v(" "),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var s={name:"Home",components:{HomeHeader:a("VU/8")({name:"HomeHeader"},e,!1,function(t){a("XBrS")},"data-v-d818b8b4",null).exports,HomeSwiper:a("VU/8")({name:"HomeSwiper",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,autoplay:3e3},swiperList:[{id:"0001",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/95274cec39fa73e3cccf35e24ec01c3b.jpg_750x200_1b6ffcfa.jpg",linkUrl:"https://sale.piao.qunar.com/touch/topic/mk/t_2781.htm?cat=from_value%3DTOPIC-%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%EF%BC%88%E6%97%A9%E9%B8%9F%E7%A5%A8%EF%BC%89%E3%80%90%E6%B2%AA%E4%BB%A5%E5%A4%96%E3%80%91%26from_area%3Dts_topic%26dist_city%3D%E5%B8%B8%E5%B7%9E%26from_index%3D4"},{id:"0002",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/212caf070dc741cc1c10cc791c1c99f7.jpg_750x200_bab5b93a.jpg",linkUrl:"https://touch.piao.qunar.com/touch/detail.htm?id=2319&cat=from_value%3DPOI-2319%26from_area%3Dts_topic%26dist_city%3D%E5%B8%B8%E5%B7%9E%26from_index%3D5"},{id:"0003",imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg",linkUrl:"https://sale.piao.qunar.com/touch/mk/special.htm?cat=from_value%3DTOPIC-1%E5%85%83%E9%97%A8%E7%A5%A8%26from_area%3Dts_topic%26dist_city%3D%E5%B8%B8%E5%B7%9E%26from_index%3D3"}]}},computed:{showSwiper:function(){return this.swiperList.length}}},r,!1,function(t){a("c7Qq")},"data-v-07d2330a",null).exports,HomeCategory:a("VU/8")(o,n,!1,function(t){a("LNqz")},"data-v-6752a7da",null).exports}},c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("home-header"),this._v(" "),i("home-swiper"),this._v(" "),i("home-category"),this._v("\n  Home\n")],1)},staticRenderFns:[]};var p=a("VU/8")(s,c,!1,function(t){a("iQ0/")},"data-v-24387ace",null);i.default=p.exports},LNqz:function(t,i){},XBrS:function(t,i){},c7Qq:function(t,i){},"iQ0/":function(t,i){}});
//# sourceMappingURL=0.ad70fb8e6738a2f746361566475947240.js.map