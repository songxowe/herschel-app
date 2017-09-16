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

	
   <div class="bottom">
			<div class="account-left">
	<div class="a-l-grid">
		<dl>
			<dt class="order">
				<i></i>查看订单
			</dt>
			<dd>
				<a @click="xianyou"><i></i>现有订单</a>
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
				<a href="/helpcenter/FAQ.htm" target="_blank"><i></i>更多帮助</a>
			</div>
		</div>
	</div>
</div>
   </div>

    <div class="account-right">
			<div class="a-r-title">地址簿</div> 
			 
   </div>
 
 
				 
   

 <div class="col-md-7 col-sm-8 col-xs-12  "  style="margin-top:40px" >
   <form role="form" id="form" action="" method="post">
      <div class="form-group">
        <label for="username">姓名:{{name}}</label>
        <input class="form-control" type="text" id="username" name="username" 
          placeholder="用户名" minlength="6" maxlength="20" autofocus required>
        <small style="color:red">*</small>
      </div>

      <div class="form-group">
        <label for="email">邮箱:</label>
        <input class="form-control" type="email" id="email" name="email" 
          placeholder="asa@.com" required>
        <small style="color:red">*</small>
      </div>

      <div class="form-group">
        <label for="url">电话:</label>
        <input class="form-control" type="text" id="url" name="url" placeholder="130xxxx2325"  maxlength="11" digits  >
      </div>
 
<div class="form-group">
        <label for="remark">所在省市:</label>
      <select class="input-md form-control" style="width:250px;display:inline-block">
		  <option value="-1">--请选择/省--</option>
     <option value="2">湖南</option>
     <option value="3">北京</option>
     <option value="4">上海</option>
	 <option value="5">深圳</option>
     <option value="6">湖北</option>
     <option value="7">河北</option>
     <option value="8">广东</option>
	  </select>
	      <select class="input-md form-control" style="width:250px;display:inline-block">
		  <option value="-1">--请选择/市--</option>
     <option value="2">湖南</option>
     <option value="3">北京</option>
     <option value="4">上海</option>
	 <option value="5">深圳</option>
     <option value="6">湖北</option>
     <option value="7">河北</option>
     <option value="8">广东</option>
	  </select>
	      <select class="input-md form-control" style="width:250px;display:inline-block">
		  <option value="-1">--请选择/区--</option>
     <option value="2">湖南</option>
     <option value="3">北京</option>
     <option value="4">上海</option>
	 <option value="5">深圳</option>
     <option value="6">湖北</option>
     <option value="7">河北</option>
     <option value="8">广东</option>
	  </select><br><br>
      </div>
	  <div class="form-group">
        <label for="username">详细地址:</label>
        <input class="form-control" type="text" id=" " name="username" 
          placeholder="请输入详细地址" minlength="15" maxlength="20" autofocus required >
        <small style="color:red">*</small>
      </div>
	   
       

      <button id="btnOK" class="btn btn-primary" type="submit">确定</button>
    </form>
    
    
    
                    </div>

  
 
     
		</div>
        
    
</template>

<script>
 import router from '../router'

export default {
  name: 'app',
  data(){
      return{
          name:""
      }
  },
  
  methods:{
     getDingdan:function(){
		 router.push({name:"dingdan"})
	 },
   xianyou:function(){
		 router.push({name:"xianyou"})
	 },
  gozanghu :function(){
		 router.push({name:"zanghu"})
	 }
   ,
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
 li{
	 list-style: none
 }
</style>
