<template>
    <div class="goods_detail">
        <header class="top_bar">
            <a onclick="window.history.go(-1)" class="icon_back"></a>
    
            <span style="margin-left:40px;">男装</span>＞
            <span>Yoohu</span>＞
            <span>夏季男款休闲T恤</span>
    
        </header>
        <main class="p_box">
            <section class="img">
                <ul class="img_box">
                    <div class="visible_area">
                        <img v-lazy="goodsData[0].p_img_url" alt="" class="img_show">
                    </div>
    
                    <li class="small_area" v-for="item in imgDatas" :key="item.image_id">
                        <img v-lazy="item.image_url" alt="" class="banner_pic">
                    </li>
    
                </ul>
            </section>
            <section class="product_info">
                <div class="p_right">
                    <ul>
                        <li class="p_name">{{goodsData[0].p_name}}</li>
                        <li class="p_detail">{{goodsData[0].p_detail}}</li>
                        <li class="p_price">
                            <span>￥</span>
                            <span class="rel_price">{{goodsData[0].p_price}}</span>
                            <span>.00</span>
                        </li>
                        <li class="p_size">
                            选择尺码：
                            <span>L</span>
                            <span>M</span>
                            <span>XL</span>
                            <span>XLL</span>
                        </li>
                        <li class="p_amount">
                            选购数量：
                            <input class="amount" type="number" value="1" />
                            <span>库存 {{goodsData[0].p_amount}} 件</span>
                        </li>
                        <li class="p_button">
                            <a @click="addShoppingCar()" class="buy_now">加入购物车</a>
                            <a @click="buyNow()" class="buybuy">立即购买</a>
                        </li>
                    </ul>
                </div>
    
            </section>
    
        </main>
    
    </div>
</template>
<script>
export default {
    mounted() {
        this.fetchData(this.$route.params.id);
    },
    data() {
        return {
            cateGoodsAllData: [],
            imgDatas: [],
            goodsData: [],
        }
    },
    watch: {
        $route(to) {
            //console.log(to);
            var reg = /detail\/\d+/;
            if (reg.test(to.path)) {
                var categotyId = this.$route.params.id || 0;
                this.fetchData(categotyId);
            }
        }
    },
    methods: {
        fetchData(id) {
            var _this = this;

            _this.$http.get('/detail', {
                params: {
                    mId: id
                }
            }).then((res) => {
                _this.imgDatas = res.data[0];
                _this.goodsData = res.data[1];

            }, (err) => {
                console.log(err);
            })
        },
        addShoppingCar(id) {
            var _this = this;

            _this.$http.get('/cart', {
                params: {
                    cId: id
                }
            }).then((res) => {
                

            }, (err) => {
                console.log(err);
            } 
        )} 
    }
}
</script>
<style>
@import '../../static/css/ye/p_detail.css';
</style>