<template>
  <div id="app">

	   <link href="static/ccss/st.min.css" rel="stylesheet" type="text/css">
	    	<link rel="stylesheet" href="static/ccss/bootstrap.min.css">
	<link rel="stylesheet" href="static/ccss/bootstrap.css">
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
				<i  ></i>查看订单
			</dt>
			<dd>
				<a  @click="godingdan"><i></i>现有订单</a>
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
					 ><i></i>账户设置</a>
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
  
<div class="account-right">
			
			<input type="hidden" id="employees_email_suffix" name="employees_email_suffix" value="nike.com,converse.com,baozun.cn"/>
			<div class="a-r-title">账户设置</div>
			<div class="a-r-mian">
				<ul class="settings clearfix">
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">邮箱地址</div>
							<span>:</span> 
							<label class="email">854695380@QQ.COM</label> 
							
						</div>
						
					</li>
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">手机号码</div>
							<span>:</span> 
							<label class="email">15084776806</label> 
						</div>
					</li>
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">密码</div>
							<span>:</span> 
							<label class="">******</label> 
							<a href="javascript:void(0);" class="editor"> </a>
						</div>
						<div class="settings-list-editor" style="display: none;">
							<div class="editor-list-1">
								<span class="settings-list-name">旧密码</span>
								<input type="password" name="oldPassword" class="box pw1" placeholder="">
								<span style="color:red;"></span>
							</div>
							<div class="editor-list-1">
								<span class="settings-list-name">新密码</span>
								<input type="password" name="newPassword" class="box pw2" placeholder="">
								<span style="color:red;"></span>
							</div>
							<div class="editor-list-1">
								<span class="settings-list-name">确认密码</span>
								<input type="password" name="confirmPassword" class="box pw3" placeholder="">
								<span style="color:red;"></span>
							</div>
							<div class="editor-list-2 clearfix">
								<span class="settings-list-name">&nbsp;</span> 
								<a href="javascript:void(0);" class="cancel cancel-password">取消</a> 
								<a href="javascript:void(0);" class="save save-password">保存</a>
							</div>
						</div>
					</li>
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">姓名</div>
							<span>:</span> 
							<label class="realname"></label> 
							<a href="javascript:void(0);" > </a>
						</div>
						<div class="settings-list-editor" style="display: none;">
							<div class="editor-list-1">
								<span class="settings-list-name">姓名</span>
								<input maxlength="20" type="text" name="realName" class="box name" value="">
								<span style="color:red;"></span>
							</div>
							<div class="editor-list-2 clearfix">
								<span class="settings-list-name">&nbsp;</span> 
								<a href="javascript:void(0);" class="cancel cancel-realname">取消</a> 
								<a href="javascript:void(0);" class="save save-realname">保存</a>
							</div>
						</div>
					</li>
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">性别</div>
							<span>:</span> 
							<label class="gender">&#x7537;&#x7684;</label> 
							<a href="javascript:void(0);" class="editor"> </a>
						</div>
						<div class="settings-list-editor" style="display: none;">
							<div class="editor-list-1">
								<span class="settings-list-name">性别</span>
								<span class="gender chosen">男的</span> 
								<span class="nofloat gender ">女的</span>
							</div>
							<div class="editor-list-2 clearfix">
								<span class="settings-list-name">&nbsp;</span> 
								<a href="javascript:void(0);" class="cancel cancel-gender">取消</a> 
								<a href="javascript:void(0);" class="save save-gender">保存</a>
							</div>
						</div>
					</li>
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">生日</div>
							<span>:</span> 
							<label class="birthday">1954-01-01</label> 
							<a href="javascript:void(0);" class="editor">编辑</a>
						</div>
			
						<div class="settings-list-editor" style="display: none;">
							<div class="editor-list-1">
								<span class="settings-list-name">生日</span>
								<div class="labelbox">
									<div class="selectbox">
										<select name="birthday-year" id="account-birthday-year">
										</select>
									</div>
									<div class="selectbox">
										<select name="birthday-month" id="account-birthday-month">
										</select>
									</div>
									<div class="selectbox mg0">
										<select name="birthday-day" id="account-birthday-day">
										</select>
									</div>
								</div>
							</div>
							<div class="editor-list-2 clearfix">
								<span class="settings-list-name">&nbsp;</span> 
								<a href="javascript:void(0);" class="cancel cancel-birthday">取消</a> 
								<a href="javascript:void(0);" class="save save-birthday">保存</a>
							</div>
						</div>
					</li>
					<li class="settings-list clearfix">
						<div class="settings-list-normal" style="display: block;">
							<div class="settings-list-name">联系电话</div>
							<span>:</span> 
							<label class="telephone"></label> 
							<a href="javascript:void(0);" class="editor">编辑</a>
						</div>
						<div class="settings-list-editor" style="display: none;">
							<div class="editor-list-1">
								<span class="settings-list-name">联系电话</span>
								<input type="text" name="telephone" value="" class="box phone" placeholder="">
								<span style="color:red;"></span>
							</div>
							<div class="editor-list-2 clearfix">
								<span class="settings-list-name">&nbsp;</span> 
								<a href="javascript:void(0);" class="cancel cancel-telephone">取消</a> 
								<a href="javascript:void(0);" class="save save-telephone">保存</a>
							</div>
						</div>
					</li>
					
				</ul>
			</div>
		</div>
     
		</div>
    
</template>

<script>
 import router from '../router'

export default {
  name: 'app',
  methods:{
     getDingdan:function(){
		 router.push({name:"dingdan"})
	 },
	 godingdan:function(){
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

</style>
