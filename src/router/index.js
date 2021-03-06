import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Tchat from '@/pages/Tchat'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/',
      component: Tchat,
      //empêche rootpath redirige sur login
      beforeEnter: (to, from, next) => {
        if(!firebase.auth().currentUser){
          next('/login')
        }else{
          next()
        }
      }
    }
  ]
})
