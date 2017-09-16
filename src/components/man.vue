<template>
  <div>
   
  <div class="row" style="width:80%;margin-top:90px;margin:0 auto;">

				<div class="col-lg-4 col-md-4 col-sm-6">
					<a  class="fh5co-card-item image-popup">
						<figure>
              
							<div class="overlay"><i class="ti-plus"></i></div>
							<img style="width:100%" src="static/img/man1.jpg" alt="Image" class="img-responsive">
              
						</figure>
            
						<div class="fh5co-text" @click="goxiangqing">
							<h2>棉麻束脚裤</h2>
							
							<p><span class="price cursive-font">RMB 79</span></p>
							<span style="cursor:pointer;font-size:20px;color:#ff8000" class="glyphicon glyphicon-shopping-cart"></span> 
						</div>
					</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="#" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="static/img/man2.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text"  @click="goxiangqing">
							<h2>男装梭织合体低腰束脚九分裤</h2>
							
							<p><span class="price cursive-font">RMB 80</span></p>
								<span style="cursor:pointer;font-size:20px;color:#ff8000" class="glyphicon glyphicon-shopping-cart"></span> 
						</div>
					</a>
				</div>
				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="#" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="static/img/man3.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text"  @click="goxiangqing">
							<h2>男装针织合体圆领短袖衫</h2>
							
							<p><span class="price cursive-font">RMB 69</span></p>
<span style="cursor:pointer;font-size:20px;color:#ff8000" class="glyphicon glyphicon-shopping-cart"></span> 
						</div>
					</a>
				</div>


				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="#" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="static/img/man4.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text"  @click="goxiangqing">
							<h2>圆领卫衣</h2>
							
							<p><span class="price cursive-font">RMB 79</span></p>
							<span style="cursor:pointer;font-size:20px;color:#ff8000" class="glyphicon glyphicon-shopping-cart"></span> 
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-4 col-sm-6">
					<a href="#" class="fh5co-card-item image-popup">
						<figure>
							<div class="overlay"><i class="ti-plus"></i></div>
							<img src="static/img/man5.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text"  @click="goxiangqing">
							<h2>男装针织合体圆领短袖衫</h2>
							
							<p><span class="price cursive-font">RMB 84</span></p>
								<span style="cursor:pointer;font-size:20px;color:#ff8000" class="glyphicon glyphicon-shopping-cart"></span> 
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-4 col-sm-6" >
					<a href="#" class="fh5co-card-item image-popup">
						<figure  >
							<div class="overlay"><i class="ti-plus"></i></div>
							<img  src="static/img/man6.jpg" alt="Image" class="img-responsive">
						</figure>
						<div class="fh5co-text"  @click="goxiangqing">
							<h2>立领半开筒衫</h2>
						
							<p><span class="price cursive-font">RMB 59</span></p>
								<span style="cursor:pointer;font-size:20px;color:#ff8000" class="glyphicon glyphicon-shopping-cart"></span> 
						</div>
					</a>
				</div>

			</div>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'app',
	methods:{
	 goxiangqing: function(){
    router.push({ name: 'xiangqing' })
},
	}
}

</script>

<style>


</style>