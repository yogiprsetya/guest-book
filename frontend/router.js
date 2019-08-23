import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Home from './components/home'

// Fallback page
// import PageNotFound from '@/components/404'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }]
})