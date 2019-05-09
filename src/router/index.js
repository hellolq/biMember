import Vue from  'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from  '../views/Login'
import Error from '../views/Error'
import Zbld  from '../views/Zbld'
import store from '../store'
import ShopList from '../views/ShopList'
import ZbldDetail from  '../views/ZbldDetail'


const router = new VueRouter({
  routes:[
    {path:'/login', component:Login},
    {path:'/zbld', component:Zbld,
      children:[{path:'shopList',component:ShopList},{path:'zbldDetail',component:ZbldDetail},{path:'',redirect:'zbldDetail'}]},
    {path:'/error', component:Error}
  ]
});

const whiteList = ['/error','/login'];

router.beforeEach((to,from,next) => {

    if(store.getters.isLogin){
      next();
    }else if (whiteList.indexOf(to.path) > -1) {
      next();
    }else{
      next({path:'/error',replace:true,query:{noGoBack:true}});
    }

});

export  default router;

