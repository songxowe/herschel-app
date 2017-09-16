<template>

<div id="app" :style="{backgroundImage: 'url(\''+'static/img/bg.png'+'\')'}">
           <link href="static/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        
 
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">


        <link href="static/css/style (2).css" rel="stylesheet" type="text/css">
                 <link rel="stylesheet" href="static/css/assets/style.css">
       

        <link href="static/css/bootstrap.min.css" rel="stylesheet" type="text/css">


        <link href="static/css/responsive (2).css" rel="stylesheet" type="text/css">

       

       

        <link href="static/css/effects/set2.css" rel="stylesheet" type="text/css">

        <link href="static/css/effects/normalize.css" rel="stylesheet" type="text/css">

        <link href="static/css/effects/component.css"  rel="stylesheet" type="text/css" >
   
               <link rel="stylesheet" type="text/css"  href="static/css/bootstrap.css">
    
    <link rel="stylesheet" type="text/css" href="static/font-awesome-4.2.0/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="static/css/jasny-bootstrap.min.css">

   
    <link rel="stylesheet" type="text/css" href="static/css/animate.css">


    <link href="static/css/owl.carousel.css" rel="stylesheet" media="screen">
    <link href="static/css/owl.theme.css" rel="stylesheet" media="screen">
      <link rel="stylesheet" type="text/css"  href="static/css/style.css">
    <link rel="stylesheet" type="text/css" href="static/css/responsive.css">
    

    
        
   
  <div class="navmenu navmenu-default navmenu-fixed-left offcanvas" > <!--- Off Canvas Side Menu -->
   
        <div class="close" data-toggle="offcanvas" data-target=".navmenu" >
            <span class="fa fa-close"></span>
        </div>
        <div class="add-margin"></div>
        <ul class="nav navmenu-nav"> 
        
            <li style="cursor:pointer"><a href="#home" class="page-scroll">Home</a></li>
            <li style="cursor:pointer"><a  @click="gogrzx()" class="page-scroll">个人中心</a></li>
            <li style="cursor:pointer"><a style="cursor:pointer"  @click="gocpzx" class="page-scroll">产品中心</a></li>
             <li style="cursor:pointer"><a @click="gozazhi()" class="page-scroll">时尚杂志</a></li>
            <li style="cursor:pointer"><a @click="goshopcart()" class="page-scroll">购物车</a></li>
          
        </ul>
    </div>
    
  <div style="float: right;margin-right:50px;margin-top:25px">
<a href="#"@click="dialogFormVisible = true" style="position: relative;z-index:50;color:#fff;cursor:pointer" class="  glyphicon glyphicon-user"></a>

      <span @click="goshopcart()" style="position: relative;z-index:50;color:#fff;margin-left:20px;cursor:pointer" class="glyphicon glyphicon-shopping-cart"></span> 
  <span id="audioBtn" style="position: relative;z-index:50;color:#fff;margin-left:20px;cursor:pointer" class="glyphicon glyphicon-music"></span>      
  <audio id="bgMusic" src="static/music/About You-Else.mp3" autoplay="autoplay"></audio>
  </div>



    <div id="airhorn"  poster="static/img/xbj.gif">
    
    </div>
      <div class="container" >
       


     <div id="home"  style="z-index:1">
        <div class=" col-md-12 col-sm-12 col-xs-12 container text-center" style="z-index:1"  >
            <!-- Navigation -->
            <nav id="menu" data-toggle="offcanvas" data-target=".navmenu">
                <span class="fa fa-bars"></span>
            </nav>
       
            <div class="content"  style="z-index:1" >
                <h4>INTRODUCING APPAREL</h4>
                <hr>
                <div class="header-text btn">
                    <h1><span id="head-title"></span></h1>
                </div>
            </div>

            <a  style="z-index:1"  href="javascript:void(0)" @click="goAnchor('#anchor-'+index)" class="down-btn page-scroll">
                <span class="fa fa-angle-down"></span>
            </a>
            
        </div>

    


    </div>
    </div>
        <div class="hero-video__container__link " style="z-index:1">
    <a style="color:#fff" class="text-cta h-cta-larger" href="javascript:void(0)" @click="gocpzx"><b>Shop Men</b></a>
    
      <br/>
      <a style="color:#fff" class="text-cta h-cta-larger" href="javascript:void(0)" @click="gocpzx"><b>Shop Women</b></a>
    
  </div>
  
  
 
 <div :id="'anchor-'+index">
      
   <main role="main-home-wrapper" class="container">
   <div class="row" style="z-index:2000">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="section-title">
                        <h2>New product release</h2>
                        <hr>
                    </div>
               <p>将新比“新”，穿出你的风格</p>
                <a href="javascript:void(0)" @click="goAnchor2('#anchor2-'+index)" class="down-btn page-scroll">
                <span class="fa fa-angle-down"></span>
            </a>
                </div>
               
                
            </div>
        </div>

                

              

                
     
                <div class="clearfix"></div>
               
                
      <div style="margin-top:50px">
                <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid" >

                	<ul class="grid-lod effect-2" id="grid">

                    	<li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/1.jpg" alt="" class="img-responsive"/>

                            <figcaption>

                            	

                                    <h2>乐队碎片式个性印花短袖 <span>印花短袖</span></h2>

                                    <p>这一款T采用碎片式印花技术，配合年代久远的雷蒙斯LOGO，又颓又反叛的印象。</p>

                                    <a href="javascript:void(0);" @click="goxiangqing()">View more</a>

                                

                            </figcaption>

                        </figure>

                        </li>

                        

                        <li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/2.jpg" alt="" class="img-responsive"/>

                            <figcaption>

                                <h2>印花球服篮球<span>无袖T恤</span></h2>

                                <p>篮球服既视感的背心，纯剪裁不封边的袖窿开的足够大，满足运动需要大量发散热量的要求</p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>


                        <li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/3.jpg" alt="" class="img-responsive"/>

                             <figcaption>

                                <h2>短款修身休闲 <span>夹克皮衣外套</span></h2>

                                    <p>衣襟上加了摁钮，方便敞开衣襟的时候能固定住衣型，非常贴心的设计。</p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>

                        

                        <li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/4.jpg" alt="" class="img-responsive"/>

                             <figcaption>

                                <h2>男士单肩<span>斜挎包</span></h2>
                                <p>环保袋造型，简约同时强调设计感，高亮复古酒红色，透出质感自然细腻的皮质</p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>

                    </ul>

                </section>

                

                <section class="col-xs-12 col-sm-6 col-md-6 col-lg-6 grid">

                	<ul class="grid-lod effect-2" id="grid">

                    	<li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/5.jpg" alt="" class="img-responsive"/>

                             <figcaption>

                                <h2>抹胸小吊带 <span>背心</span></h2>

                                <p>小仙女必备！</p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>

                        <li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/6.jpg" alt="" class="img-responsive"/>

                             <figcaption>

                                <h2>V领纯色纯白 <span>T恤</span></h2>

                                <p>经典中的经典款 百搭 V领更显气质</p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>

                        <li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/7.jpg" alt="" class="img-responsive"/>

                             <figcaption>

                                <h2>帆布包港味复古简约 <span>文艺休闲包</span></h2>

                                <p>更适合娇小一点的女生</p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>

                        <li>

                        	<figure class="effect-oscar">

                            <img src="static/img/images/home-images/8.jpg" alt="" class="img-responsive"/>

                             <figcaption>

                                <h2>露背透视喇叭袖罩衫雪纺 <span>上衣打底衫</span></h2>

                                <p>V领的设计更加时尚  整个衣服的元素结合一起 </p>

                                <a href="works-details.html">View more</a>

                            </figcaption>

                        </figure>

                        </li>

                     

                    

                      

                    </ul>

                </section>
      </div>
                <div class="clearfix"></div>

            </div>
   </main>
 </div>


 
  
<div :id="'anchor2-'+index"   >
<!-- Services Section -->
    <div id="services"   >
        <div class="container text-center">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="section-title">
                        <h2>Clothing collocation</h2>
                        <hr>
                    </div>
               <p>你，就是你的潮流!</p>
                </div>
            </div>

            <div class="space"></div>

            <div class="row">
                <div class="col-md-4 col-sm-4">
                    <div class="service">
                        <span class="fa fa-child fa-3x"></span>
                        <h4>不同体形的人服装搭配注意事项</h4>
                        <p>1、颈部较长的人：应穿比较高的衬衫领，带有宽底领的衬衫。要避免穿：V领毛衣；低开领口。2、颈部较短的：应穿领子比较低，底领较窄或不带底领的衬衫。要避免穿：宽展领，高套头领。
                           
                        </p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-4">
                    <div class="service">
                        <span class="fa fa-star fa-3x"></span>
                        <h4>注重搭配很重要</h4>
                        <p> 正所谓人靠衣装，佛靠金装，每个人都要善于发现自身的优点，在着装打扮上尽量扬长避短，充分展现自己美好的一面，这样才能在职场的人际交往过程中更加自信</p>
                    </div>
                </div>

                <div class="col-md-4 col-sm-4">
                    <div class="service">
                        <span class="fa fa-thumbs-o-up fa-3x"></span>
                        <h4>服饰搭配</h4>
                        <p>服装色彩是服装感观的第一印象，若想让其在着装上得到淋漓尽致的发挥，必须充分了解色彩的特性。恰到好处地运用色彩的两种观感，不但可以修正、掩饰身材的不足，而且能强调突出你的优点</p>
                    </div>
                </div>
            </div>
            <a href="javascript:void(0)" @click="goAnchor3('#anchor3-'+index)" class="down-btn page-scroll">
                <span class="fa fa-angle-down"></span>
            </a>
        </div>
    </div>

   
 </div>


<div id="clients">
<div class="highlight-info">
<div class="overlay spacer">
<div class="container">
<div class="row text-center  wowload fadeInDownBig">
  <div  class="container text-center">
            <a href="javascript:void(0)" @click="gocpzx" class="btn go-to-btn">点击寻找你的时尚</a>
        </div>
</div>
</div>
</div>
</div>
</div>


 <div :id="'anchor3-'+index"   >
<div id="works">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-8 col-md-offset-2">
                    <div class="section-title">
                        <h2>Shoes that belong to you</h2>
                        <hr>
                        
                    </div>
                    <p>街头先锋 不拘一格 玩转潮流</p>
                </div>
            </div>
            <div class="space"></div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-sm-6 nopadding">
                    <div class="portfolio-item">
                        <div class="hover-bg">
                            <a href="#">
                                <div class="hover-text">
                                    <h5>converse</h5>
                                    <p class="lead">ONE STER经典款</p>
                                    <div class="hline"></div>
                                </div>
                                <img src="static/img/kw.jpg" class="img-responsive" alt="...">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 nopadding">
                    <div class="portfolio-item">
                        <div class="hover-bg">
                            <a href="#">
                                <div class="hover-text">
                                    <h5>converse</h5>
                                    <p class="lead">短袖休闲T恤</p>
                                    <div class="hline"></div>
                                </div>
                                <img src="static/img/kw2.jpg" class="img-responsive" alt="...">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 nopadding">
                    <div class="portfolio-item">
                        <div class="hover-bg">
                            <a href="#">
                                <div class="hover-text">
                                    <h5>VANS</h5>
                                    <p class="lead">万斯经典款</p>
                                    <div class="hline"></div>
                                </div>
                            </a>
                            <img src="static/img/kw3.png" class="img-responsive" alt="...">
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 nopadding">
                    <div class="portfolio-item">
                        <div class="hover-bg">
                            <a href="#">
                                <div class="hover-text">
                                    <h5>VANS</h5>
                                    <p class="lead">滑板鞋</p>
                                    <div class="hline"></div>
                                </div>
                            </a>
                            <img src="static/img/kw4.jpg" class="img-responsive" alt="...">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="space"></div>
        <div class="text-center">
            <a href="javascript:void(0)" @click="gocpzx" class="btn read-more-btn">我要购买！</a>
            <br>
            
        </div>
    </div>
 </div>


<!-- Form -->

<div class="page">
<el-dialog title="注册" :visible.sync="dialogFormVisible"  style="text-align:center">
   <form role="form" id="form" action="denglu.html">
      <div class="form-group">
        <label for="username">Username:</label>
        <input class="form-control" type="text" id="username" name="username" 
          placeholder="用户名" minlength="6" maxlength="20" autofocus required>
        
      </div>
       <div class="form-group">
        <label for="username">Password:</label>
        <input class="form-control" type="password" id="password" name="password" 
          placeholder="密码" minlength="6" maxlength="20" autofocus required>
       
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input class="form-control" type="email" id="email" name="email" 
          placeholder="Email" required>
       
      </div>

      

      <div class="form-group">
        <label for="remark">备注:</label>
        <textarea class="form-control" name="remark" id="remark" rows="3"></textarea>
      </div>

      <button  class="btn btn-success"style="float:left" type="submit">注册</button>
      <button @click="dialogFormVisible1 = true , dialogFormVisible=false"  class="btn btn-success" style="float:right" type="button">已有账号,点击登录</button>
    </form>
  <div slot="footer" class="dialog-footer">
   
  </div>
  
</el-dialog>
</div>

<!-- Form -->

<div class="page">
<el-dialog title="登录" :visible.sync="dialogFormVisible1"  style="text-align:center">
   <form role="form" id="form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input class="form-control" type="text" id="myusername" name="username" 
          placeholder="用户名" minlength="6" maxlength="20" autofocus required>
        
      </div>
       <div class="form-group">
        <label for="username">Password:</label>
        <input class="form-control" type="password" id="password" name="password" 
          placeholder="密码" minlength="6" maxlength="20" autofocus required>
       
      </div>
      <p style="float:right">忘记密码?</p>
      <button  class="btn btn-success"style="margin-top:20px;width:100%"  @click="login()">登录</button>
       <p style="float:left;margin-top:20px">合作账号登录</p>
      <p class="wowload flipInX" style="margin-top:40px;">
    <a style="font-size:15px;margin-left:-30px"  href="#"><i class="fa fa-wechat fa-1x">微信登录</i></a> 
    <a style="font-size:15px;margin-left:20px" href="#"><i class="fa fa-qq fa-1x">QQ登录</i></a>
     <a style="font-size:15px;margin-left:20px" href="#"><i class="fa fa-weibo fa-1x">微博登录</i></a> 
     
     </p>
    </form>
  <div slot="footer" class="dialog-footer">
   
  </div>
  
</el-dialog>
</div>

<div class="footer text-center spacer">
<p class="wowload flipInX">
    <a href="#"><i class="fa fa-wechat fa-2x"></i></a> 
    <a href="#"><i class="fa fa-qq fa-2x"></i></a>
     <a href="#"><i class="fa fa-weibo fa-2x"></i></a> 
     <a href="#"><i class="fa fa-github-alt fa-2x"></i></a> 
     </p>
   <p>点击以上图标也可以看到我们哦！！！！</p>

 <ul style="display: inline-block;list-style-type:none">
     <h2>购物指南</h2>
     <li><a href="#">尺码</a></li>
         <li><a href="#">订单</a></li>
         <li><a href="#">配送</a></li>
         <li><a href="#">联系我们</a></li>
           <li><a href="#">常见问题</a></li>
 </ul>

 <ul style="display: inline-block;list-style-type:none;margin-left:40px">
     <h2>友情链接</h2>
     <li><a href="#">天猫</a></li>
         <li><a href="#">淘宝</a></li>
         <li><a href="#">VANS</a></li>
         <li><a href="#">匡威</a></li>
          <li><a href="#">耐克</a></li>
          
 </ul>
  <ul style="display: inline-block;list-style-type:none;margin-left:40px">
     <h2>我的账户</h2>
     <li><a href="#">我的优惠券</a></li>
         <li><a href="#">我的收藏</a></li>
         <li><a href="#">订单查询</a></li>
             <li><a href="#">现有订单</a></li>
             <li><a href="#">过去订单</a></li>
 </ul>
</div>


</div>



</template>

<script>
//导入路由，
import router from '../router'
export default {
 
        data() {
      return {
       
        dialogTableVisible: false,
        dialogFormVisible: false,
       dialogFormVisible1: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
       
 methods: {
    goAnchor(selector) {
        var anchor = this.$el.querySelector(selector)
        document.body.scrollTop = anchor.offsetTop
    },
    goAnchor2(selector) {
        var anchor = this.$el.querySelector(selector)
        document.body.scrollTop = anchor.offsetTop
    },
    goAnchor3(selector) {
        var anchor = this.$el.querySelector(selector)
        document.body.scrollTop = anchor.offsetTop
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
    goxiangqing: function(){
    router.push({ name: 'xiangqing' })
},
    login(){
        var username = document.getElementById("myusername").value
        window.localStorage.setItem("username",username)
         window.localStorage.setItem('exit','退出登录')
    } 
    
}
}

$(function(){
  
          var airhorn = vr.video({
        element: '#airhorn',
        align: {x: 0.5, y: 0.5},
        sources: 'static/img/bj.mp4',
        fit: 'cover',
       poster:'static/img/xbj.gif',
        mobilePoster: 'static/img/xbj.gif',
        autoplay: true,
        loop: true,
        mute: true,
        mobileBreak: 480,
       
      });
      airhorn.init();
      airhorn.update();
          $("#head-title").typed({
            strings: ["最独有的时装宇宙",  "流行色彩，衣尚生活","Keep pace with the tide!"],
            typeSpeed: 150,
            loop: true,
            startDelay: 150
          });
   
   var music = document.getElementById("bgMusic");
var musicArr=[//下面对应歌曲链接和歌名，自行添加用,隔开
   {url:'static/music/About You-Else.mp3',title:"About You"},							
   {url:'static/music/Hold On, Were Going Home-Various Artists.mp3',title:"Were Going Home"},							
   

  
];
$("#audioBtn").click(function(){
	if(music.paused){music.play();
	$("#audioBtn").removeClass("pause").addClass("play");
	}else{music.pause();
	$("#audioBtn").removeClass("play").addClass("pause");}
});
function randomMusic(){
   var isone=$("#bgMusic").attr('src');
   var noone=musicArr[parseInt(Math.random()*musicArr.length)];
   if (noone.url==isone){var noone=musicArr[parseInt(Math.random()*musicArr.length)];}
   $("#bgMusic").attr('src',noone.url);
   $("#audioBtn").attr('title',noone.title);
}
randomMusic();
$("#bgMusic").on('ended',function(){
   randomMusic();	
});

     
       

      });
  
</script>


<style scoped>

.hz li{
 display: inline-block
}

</style>
