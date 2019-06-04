import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home/Home'
import CalTool from '@/page/CalTool/CalTool'
import ProTool from '@/page/ProTool/ProTool'
import Profile from '@/page/Profile/Profile'
import Login from '@/page/Login/Login'
import UserInfo from '@/page/UserInfo/UserInfo'
import Shop from '@/page/Shop/Shop'
import ShopGoods from '@/page/Shop/ShopGoods/ShopGoods'
import ShopInfor from '@/page/Shop/ShopInfor/ShopInfor'
import ShopRemarks from '@/page/Shop/ShopRemarks/ShopRemarks'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/caltool',
      name: 'CalTool',
      component: CalTool,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/protool',
      name: 'ProTool',
      component: ProTool,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path:'/shop',
      name: 'Shop',
      component: Shop,
      children:[
        {
          path:'/shop/goods',
          name: 'ShopGoods',
          component: ShopGoods,
        },
        {
          path:'/shop/remarks',
          name: 'ShopRemarks',
          component: ShopRemarks,
        },
        {
          path:'/shop/infor',
          name: 'ShopInfor',
          component: ShopInfor,
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }

  ]
})
