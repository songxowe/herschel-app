<template>
    <div :style="{backgroundImage: 'url(\''+'static/img/bg.png'+'\')'}"  >
   <link rel="stylesheet" href="static/css/tpbootstrap.css">
     	<link rel="stylesheet" href="static/css/tpstyle.css">
      
     <link href="static/css/lblight.css" rel="stylesheet" />
          <link href="static/css/lbdark.css" rel="stylesheet" />
           <link href="static/css/lbbar.css" rel="stylesheet" />  
            <link href="static/css/lbnivo-slider.css" rel="stylesheet" />  
            <link href="static/css/lbstyle.css" rel="stylesheet" /> 
     <link href="static/css/lbdefault.css" rel="stylesheet" />
      

        <link href="static/css/dhbootstrap.css" rel="stylesheet" />
        <link href="static/css/dhfont-awesome.min.css" rel="stylesheet" />
        
        <link href="static/css/dhstyle.css" rel="stylesheet" />
         <link href="static/css/ssstyle.css" rel="stylesheet" type="text/css" media="all"/>
          <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    
   
  
  
        <div class="navbar navbar-inverse navbar-fixed-top" >
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#" style="width:25%"><img style="margin-top:-20px" src="static/img/logo1.png"></a>
                <div class="search col-md-12 col-sm-12 col-xs-12" style="margin-top:-15px;width:55%;margin-left:220px">
	    				<input type="text" value="" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = '';}"/>
	    				<input  type="submit" value=""/>
                       
	    			</div>
            </div>
            <div  class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    
                    <li ><a href="index.html">HOME</a></li>
                     <li style="cursor:pointer"><a  @click="gogrzx()">个人中心</a></li>
                    <li style="cursor:pointer"><a  @click="gocpzx()">产品中心</a></li>
                     <li style="cursor:pointer"><a  @click="gozazhi()">时尚杂志</a></li>
                      <li style="cursor:pointer"><a  @click="goshopcart()">购物车</a></li>
                    <span style="color:#fff;font-size:15px;cursor:pointer">{{myname}}</span> <span style="color:#fff;font-size:15px" @click="out()">{{exit}}</span>
                </ul>
            </div>
           
        </div>
    </div>
    
      <div style="height:1000px;">
         <div id="wrapper" >
        <div class="slider-wrapper theme-default" style="margin-top:80px;width:100%">
            <div id="slider" class="nivoSlider">
                <img src="static/img/lblb.jpg" data-thumb="static/img/lb44.jpg" alt="" />
                <img src="static/img/lb44.jpg" data-thumb="static/img/lb44.jpg" alt="" />
                <a href="#"><img src="static/img/lb22.jpg" data-thumb="static/img/lb22.jpg" alt="" title="This is an example of a caption" /></a>
                <img src="static/img/lb33.jpg" data-thumb="static/img/lb33.jpg" alt="" data-transition="slideInLeft" />
                <img src="static/img/lb11.jpg" data-thumb="static/img/lb11.jpg" alt="" title="#htmlcaption" />
            </div>
            <div id="htmlcaption" class="nivo-html-caption">
                <strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>. 
            </div>
        </div>
        <div class="footer-banner" style="width:728px; margin:0 auto"></div>
                <div class="products" style="margin-top:-100px">
	<div class="container">
		<div class="products-main">
			<h3>Not to stick to one pattern</h3>
			<div class="produ">
				<a href="#">free</a>
			</div>
		</div>
	</div>
</div>
        <div class="" data-wow-delay="0.1s">
	<div class="container">
		<div class="store-main">
			<div class="col-md-4 store-grid  wow bounceIn" data-wow-delay="0.4s">
				<div class="glass">
					<div class="img-bg">
					<h3>MAN</h3>
					<p>魅力男装，饰你精彩.</p>
					<div class="store-bwn">
						<a  href="javascript:void(0);" @click="toggleTabs(man)">{{man}}</a>
					</div>
				</div>
				</div>
			</div>
			<div class="col-md-4 store-grid  wow bounceIn" data-wow-delay="0.4s">
				<div class="cam">
					<div class="img-bg">
					<h3>WOMAN</h3>
					<p>品质生活,优雅你我</p>
					<div class="store-bwn">
						<a href="javascript:void(0);" @click="toggleTabs(woman)">{{woman}}</a>
					</div>
				</div>
				</div>
			</div>
			<div class="col-md-4 store-grid  wow bounceIn" data-wow-delay="0.4s">
				<div class="clk">
					<div class="img-bg">
					<h3>SHOES</h3>
					<p>不拘一格，随性而行</p>
					<div class="store-bwn">
						<a  href="javascript:void(0);" @click="toggleTabs(Shoes)">{{Shoes}}</a>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</div>

<peis style="margin-top:90px"  :is="currentView" keep-alive>
    
</peis>

    </div>
        



      
       

      </div>
    <div class="footer text-center spacer" style=";margin-top:1600px;color:#000">
  
            <p class="wowload flipInX">
                <a href="#">
                    <i style="color:#808069" class="fa fa-wechat fa-2x"></i>
                </a>
                <a style="color:#808069" href="#">
                    <i class="fa fa-qq fa-2x"></i>
                </a>
                <a style="color:#808069" href="#">
                    <i class="fa fa-weibo fa-2x"></i>
                </a>
                <a style="color:#808069" href="#">
                    <i class="fa fa-github-alt fa-2x"></i>
                </a>
            </p>
            <p>点击以上图标也可以看到我们哦！！！！</p>
    
            <ul style="display: inline-block;list-style-type:none;">
                <h2>购物指南</h2>
                <li  >
                    <a style="color:#808069" href="#">尺码</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">订单</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">配送</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">联系我们</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">常见问题</a>
                </li>
            </ul>
    
            <ul style="display: inline-block;list-style-type:none;margin-left:40px">
                <h2>友情链接</h2>
                <li>
                    <a style="color:#808069" href="#">天猫</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">淘宝</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">VANS</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">匡威</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">耐克</a>
                </li>
    
            </ul>
            <ul style="display: inline-block;list-style-type:none;margin-left:40px">
                <h2>我的账户</h2>
                <li>
                    <a style="color:#808069" href="#">我的优惠券</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">我的收藏</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">订单查询</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">现有订单</a>
                </li>
                <li>
                    <a style="color:#808069" href="#">过去订单</a>
                </li>
            </ul>
        
        </div>
        
    
    </div>
</template>



<script>

import router from '../router'
import zhuye from '@/components/zhuye'
import man from '@/components/man';
import woman from '@/components/woman';
import Shoes from '@/components/Shoes';


export default {
     data () {
             return {
                  man: "man", //导航栏文本1
                woman: "woman", //导航栏文本2
                Shoes: "Shoes", //导航栏文本3
                currentView: 'man', //默认选中子组件
                myname:"",
                exit:""
             };
         },
          components: { 
             man,
             woman,
             Shoes
         },
         created(){
             this.myname = window.localStorage.getItem('username')
             this.exit = window.localStorage.getItem('exit')
         },
  
    methods: {
   toggleTabs(tabText) {
                 this.currentView = tabText;
             },
            out(){
                 if(confirm('确定退出?')){
                     window.localStorage.clear('username','exit')
                     window.history.back()
                 }
            },
           gocpzx: function(){
    router.push({ name: 'cpzx' })
  },
  gogrzx: function(){
    router.push({ name: 'dingdan' })
},
 gozazhi: function(){
    router.push({ name: 'zazhi' })
},
goshopcart: function(){
    router.push({ name: 'Shopcart' })
    },   
    }
}
 $(function(){
  $(window).load(function() {
        $('#slider').nivoSlider();
    });
    new WOW().init();

 

  
    
	});
 
</script>
 
<style    >


 .slider-wrapper {
        width: 700px;
        /* width: 80%; */
      
    }
    .top-banner{
        background-color: #333;
    }
</style>
