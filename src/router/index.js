import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const login=resolve=>require(['../page/user/login.vue'], resolve);  //登录
const homeIndex=resolve=>require(['../page/home/index.vue'], resolve);  //首页
export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/index',
      name:'homeIndex',
      component:homeIndex
    }
  ]
})
