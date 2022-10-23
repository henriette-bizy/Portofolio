import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import LandingPage from '../views/LandingPage.vue'
  
Vue.use(VueRouter)
  
const routes = [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    //  Added our new route file named profile.vue
    {
        path: '/about',
        name: 'about',
        Component: AboutView
  
    },
    {
        path: '/about',
        name: 'about',
        // The route level code-splitting
        // this generates a separate chunk 
        // (about.[hash].js) for this route
        // which is lazy-loaded when the
        // route is visited.
        component:()=> import(
            /* webpackChunkName: "about" */ 
            '../views/AboutView.vue'
        )
    },
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router