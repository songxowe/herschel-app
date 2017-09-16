import Vue from 'vue'
import Router from 'vue-router'
import zhuye from '@/components/zhuye'
import cpzx from '@/components/cpzx'
import man from '@/components/man'
import woman from '@/components/woman' 
import Shoes from '@/components/Shoes'
import dingdan from '@/components/dingdan'
import dizhipu from '@/components/dizhipu'
import xianyou from '@/components/xianyou'
import zanghu from '@/components/zanghu'
import zazhi from '@/components/zazhi'
import Shopcart from '@/components/Shopcart'
import xiangqing from '@/components/xiangqing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zhuye',
      component: zhuye
    },
    
     {
      path: '/cpzx',
      name: 'cpzx',
      component: cpzx
    },
      {
      path: '/Shoes',
      name: 'Shoes',
      component: Shoes
    },
      {
      path: '/man',
      name: 'man',
      component: man
    },
      {
      path: '/woman',
      name: 'woman',
      component: woman
    },
     {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
     {
      path: '/dizhipu',
      name: 'dizhipu',
      component: dizhipu
    },
      {
      path: '/xianyou',
      name: 'xianyou',
      component: xianyou
    },
     {
      path: '/zanghu',
      name: 'zanghu',
      component: zanghu
    },
     {
      path: '/zazhi',
      name: 'zazhi',
      component: zazhi
    },
     {
      path: '/Shopcart',
      name: 'Shopcart',
      component: Shopcart
    },
     {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
  ]
})
