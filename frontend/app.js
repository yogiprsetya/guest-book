import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {
    FormPlugin,
    CardPlugin,
    ButtonPlugin,
    FormGroupPlugin,
    FormInputPlugin,
    FormTextareaPlugin
    } from 'bootstrap-vue'

Vue.use(FormPlugin)
Vue.use(CardPlugin)
Vue.use(ButtonPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormTextareaPlugin)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})