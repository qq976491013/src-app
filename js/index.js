//产品
var goods = Vue.extend({
	template: "#goods",
	data: function() {
		return {
			da: {}
		}
	}
})
//品牌
var brand = Vue.extend({
	template: "#s_brand"
})
//服务
var serve = Vue.extend({
	template: "#s_serve",
	data: function() {
		return {
			shu: []
		}
	}
})

//论坛
var forum = Vue.extend({
	template: "#forum"
})

//产品_手表 && 平板
var watc = Vue.extend({
	template: "#watc",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
			//			console.log(res.body)
		})
	}
})
var flat = Vue.extend({
	template: "#flat",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})

//品牌_子路由
var s_pinpai = Vue.extend({
	template: "#s_pinpai",
	data: function() {
		return {
			shu: []
		}
	},
	created: function() {
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
});
var s_pingao = Vue.extend({
	template: "#s_pingao",
	data: function() {
		return {
			shu: []
		}
	},
	created: function() {
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
});
var s_guanyu = Vue.extend({
	template: "#s_guanyu",
	data: function() {
		return {
			shu: []
		}
	},
	created: function() {
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
});

//论坛-nav-1-heli
var navwatch = Vue.extend({
	template: "#nav-watch"
})
var navpad = Vue.extend({
	template: "#nav-pad"
})
var navother = Vue.extend({
	template: "#nav-other"
})
var navnews = Vue.extend({
	template: "#nav-news"
})

//论坛-heli-电话手表
var all_1 = Vue.extend({
	template: "#all-1",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
var elite_1 = Vue.extend({
	template: "#elite-1",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
//论坛-heli-儿童平板
var all_2 = Vue.extend({
	template: "#all-2",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
var elite_2 = Vue.extend({
	template: "#elite-2",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
//论坛-heli-其他产品
var all_3 = Vue.extend({
	template: "#all-3",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
var elite_3 = Vue.extend({
	template: "#elite-3",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
//论坛-heli-最新公告
var all_4 = Vue.extend({
	template: "#all-4",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})
var elite_4 = Vue.extend({
	template: "#elite-4",
	data: function() {
		return {
			da: {}
		}
	},
	created: function() {
		this.$http.get("./data/h-data-1.json").then(function(res) {
			this.da = JSON.parse(res.body)
		})
	}
})

//三级路由1——史如川
var s_liaoyu = Vue.extend({
	template:"#s_liaoyu",
	data:function(){
		return{
			shu:[]
		}
	},
	created:function(){
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
})
//三级路由2——史如川
var s_huodong = Vue.extend({
	template:"#s_huodong",
	data:function(){
		return{
			shu:[]
		}
	},
	created:function(){
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
})
//三级路由3——史如川
var s_tantian = Vue.extend({
	template:"#s_tantian",
	data:function(){
		return{
			shu:[]
		}
	},
	created:function(){
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
})
//三级路由4——史如川
var s_baobi = Vue.extend({
	template:"#s_baobi",
	data:function(){
		return{
			shu:[]
		}
	},
	created:function(){
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
})

//三级路由1-1——史如川
var s_quan = Vue.extend({
	template:"#s_quan",
	data:function(){
		return{
			shu:[]
		}
	},
	created:function(){
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
})

//三级路由1-2——史如川
var s_jing = Vue.extend({
	template:"#s_jing",
	data:function(){
		return{
			shu:[]
		}
	},
	created:function(){
		this.$http.get("./data/s.json").then(function(data) {
			this.shu = JSON.parse(data.body)
		})
	}
})



//配置路由
var router = new VueRouter({
	routes: [{
			path: "/goods",
			component: goods,
			children: [{
					path: "/goods/watc",
					component: watc
				},
				{
					path: "/goods/flat",
					component: flat
				},
				{
					path: "/",
					redirect: "/goods/watc"
				}
			]
		},
		{
			path: "/brand",
			component: brand,
			children: [{
					path: "/brand/s_pinpai",
					component: s_pinpai
				},
				{
					path: "/brand/s_pingao",
					component: s_pingao
				},
				{
					path: "/brand/s_guanyu",
					component: s_guanyu
				},
				{
					path: "/",
					redirect: "/brand/s_pinpai"
				}
			]
		},
		{
			path: "/serve",
			component: serve
		},
		{
			path: "/forum",
			component: forum
		},
		{
			path: "/",
			redirect: "/goods"
		},
		//论坛
		{
			path: "/nav-watch",
			component: navwatch,
			children: [
			    {
					path: "/nav-watch/all",
					component: all_1
				},
				{
					path: "/nav-watch/elite",
					component: elite_1
				},
				{
					path: "/",
					redirect: "/nav-watch/all"
				}
			]
		},
		{
			path: "/nav-pad",
			component: navpad,
			children: [
			    {
					path: "/nav-pad/all",
					component: all_2
				},
				{
					path: "/nav-pad/elite",
					component: elite_2
				},
				{
					path: "/",
					redirect: "/nav-pad/all"
				}
			]
		},
		{
			path: "/nav-other",
			component: navother,
			children: [
			    {
					path: "/nav-other/all",
					component: all_3
				},
				{
					path: "/nav-other/elite",
					component: elite_3
				},
				{
					path: "/",
					redirect: "/nav-other/all"
				}
			]
		},
		{
			path: "/nav-news",
			component: navnews,
			children: [
			    {
					path: "/nav-news/all",
					component: all_4
				},
				{
					path: "/nav-news/elite",
					component: elite_4
				},
				{
					path: "/",
					redirect: "/nav-news/all"
				}
			]
		},
		{
			path:"/s_liaoyu",
			component: s_liaoyu,
			children:[
				{path:"/s_liaoyu/s_quan",component:s_quan},
				{path:"/s_liaoyu/s_jing",component:s_jing},
				{path:"/",redirect: "/s_liaoyu/s_quan"}
			]
		},
		{
			path:"/s_huodong",
			component: s_huodong,
			children:[
				{path:"/s_huodong/s_quan",component:s_quan},
				{path:"/s_huodong/s_jing",component:s_jing},
				{path:"/",redirect: "/s_huodong/s_quan"}
			]

		},
		{
			path:"/s_tantian",
			component: s_tantian,
			children:[
				{path:"/s_tantian/s_quan",component:s_quan},
				{path:"/s_tantian/s_jing",component:s_jing},
				{path:"/",redirect: "/s_tantian/s_quan"}
			]
		},
		{
			path:"/s_baobi",
			component: s_baobi,
			children:[
				{path:"/s_baobi/s_quan",component:s_quan},
				{path:"/s_baobi/s_jing",component:s_jing},
				{path:"/",redirect: "/s_baobi/s_quan"}
			]
		}
	]
})

var vue = new Vue({
	el: "#app",
	router: router,
	data: {
		show: false
	},
	methods: {
		tab: function() {
			if(this.show == false) {
				this.show = true;
				$(".h-show").stop(true).animate({
					"height": "0.9rem"
				}, 300);
			} else {
				this.show = false;
				$(".h-show").stop(true).animate({
					"height": "0"
				}, 300);
			}
		},
		noshow:function(){
			console.log("点击测试");
			this.show = false;
			$(".h-show").stop(true).animate({
				"height": "0"
			}, 300);
		}
	},
	created: function() {
		const it = this
		$(window).scroll(function() {
			if($(window).scrollTop() >= 160) {
				it.show = false;
				$(".h-show").stop(true).animate({
					"height": "0"
				}, 300);
			}
			if($(window).scrollTop() >= 290) {
				$(".h-tab").css({
					"position": "fixed",
					"top": "0"
				})
			}
			if($(window).scrollTop() <= 290) {
				$(".h-tab").css({
					"position": "absolute",
					"top": "0"
				})
			}
			if($(window).scrollTop() >= 290) {
				$(".s_con-nav").css({
					"position": "fixed",
					"top": "0"
				})
			}
			if($(window).scrollTop() <= 290) {
				$(".s_con-nav").css({
					"position": "absolute",
					"top": "0"
				})
			}
			if($(window).scrollTop() >= 720) {
				if($(".h-tab>li>a:eq(0)").hasClass('router-link-exact-active')) {
					$(".h-tab>li>a:eq(1)").addClass("router-link-active")
					$(".h-tab>li>a:eq(0)").removeClass("router-link-active")
				} else {
					$(".h-tab>li>a:eq(0)").addClass("router-link-active")
					$(".h-tab>li>a:eq(1)").removeClass("router-link-active")
				}
			} else {
				if($(".h-tab>li>a:eq(0)").hasClass('router-link-exact-active')) {
					$(".h-tab>li>a:eq(0)").addClass("router-link-active")
					$(".h-tab>li>a:eq(1)").removeClass("router-link-active")
				} else {
					$(".h-tab>li>a:eq(1)").addClass("router-link-active")
					$(".h-tab>li>a:eq(0)").removeClass("router-link-active")
				}
			}
		})
	}

})
