 <template>
<div id="app">
 
 	<link rel="stylesheet" href="static/ccss/bootstrap.min.css">
	<link rel="stylesheet" href="static/ccss/bootstrap.css">
	 <link href="static/ccss/st.min.css" rel="stylesheet" type="text/css">
	 <link href="static/ccss/sty.css" rel="stylesheet" type="text/css">
<link href="static/css/dhbootstrap.css" rel="stylesheet" />
        <link href="static/css/dhfont-awesome.min.css" rel="stylesheet" />
        
        <link href="static/css/dhstyle.css" rel="stylesheet" />
  <div class="navbar navbar-inverse navbar-fixed-top" >
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img style="margin-top:-20px" src="static/img/logo1.png"></a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                      <li ><a href="index.html">HOME</a></li>
                     <li style="cursor:pointer"><a  @click="gogrzx()">个人中心</a></li>
                    <li style="cursor:pointer"><a  @click="gocpzx()">产品中心</a></li>
                     <li style="cursor:pointer"><a  @click="gozazhi()">时尚杂志</a></li>
                      <li style="cursor:pointer"><a  @click="goshopcart()">购物车</a></li>
                </ul>
            </div>
           
        </div>
    </div>
	<!--导航结束-->


         
		<!--app div-->
    
<div class="bottom">
			<div class="account-left">
	<div class="a-l-grid">
		<dl>
			<dt class="order">
				<i></i>查看订单
			</dt>
			<dd>
				<a  @click="goxianyou"><i></i>现有订单</a>
			</dd>
			<dd>
				<a
					href="/sales/orderhistorylist.htm"><i></i>过去订单</a>
			</dd>
			<dd>
				<a
					href="/sales/returnorderlist.htm"><i></i>退换货</a>
			</dd>
		</dl>
		<dl>
			<dt class="account">
				<i></i>账户
			</dt>
			<dd>
				<a
					 @click="gozanghu"><i></i>账户设置</a>
			</dd>
			<dd>
				<a @click="getDingdan"><i></i>地址簿</a>
			</dd>
		</dl>
		<dl>
			<dt class="service">
				<i></i>服务
			</dt>
			<dd>
				<a href="/myshop/myCoupon.htm"><i></i>我的优惠券<span
					id="coupon-count"></span></a>
			</dd>
			<dd>
				<a
					href="/myaccount/myfavorite.htm"><i></i>我的收藏<span
					id="favorite-count"></span></a>
			</dd>
			<dd>
				<a href="/myshop/commentsview.htm"><i></i>我的评论<span
					id="comments-count"></span></a>
			</dd>
		</dl>
		<div class="promotion-grid">
			<div class="promotion-grid-title fz18">需要帮助吗?</div>
			<ul class="help-list">
				<li><a href="/helpcenter/order.htm" target="_blank">如何确保订单安全？</a></li>
				<li><a href="/helpcenter/pay.htm" target="_blank">我可以使用什么付款方式？</a></li>
				<li><a href="/helpcenter/return_refund.htm" target="_blank">如何进行退换货？</a></li>
			</ul>
			<div class="promotion-info">
				<a href="/helpcenter/FAQ.htm" target="_blank"><i style="font-size:28px">></i>更多帮助</a>
			</div>
		</div>
	</div>
</div>
   </div>
    

   <!--订单栏结束-->
 

   
               <div class="account-right">
			<div class="a-r-title">地址簿</div><br>
			
			 <button class="btn btn-" @click="godizhipu">添加新地址</button>
</div>

   </div>
</template>

<script>
import router from '../router'
 
export default {
	name:'app',
	data(){
		return{}
	},
 methods:{
     gozanghu:function(){
          router.push({name:"zanghu"})
     },
     godizhipu:function(){
         router.push({name:"dizhipu"})
     },
	 goxianyou:function(){
		 router.push({name:"xianyou"})
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


</script>

<style>
 a{
   color:#000
 }
</style>
