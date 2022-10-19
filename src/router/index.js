//  const NotFound = {template : '<p>Page Not Found</p>'}
// const about = {template:'<p>this is an about us page</p>'}


// const routes =  {
//     '/': Home,
//     '/about':about
// }
 


 import Vue from 'vue'
 import Router from 'vue-router';
 import LandingPage from '../components/LandingPage';



Vue.use(Router);


export default new Router({
    routes:{
        path:'/',
        component:LandingPage
    }
})
 
