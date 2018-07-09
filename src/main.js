import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax';
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import Usuarios from './components/Usuarios.vue'
import Formulario from './components/Formulario-registro.vue'

import 'vuesax/dist/vuesax.css'; //Vuesax styles
import 'material-icons/iconfont/material-icons.css';



Vue.use(Vuesax);
Vue.use(BootstrapVue);
Vue.use(Router);
Vue.config.productionTip = false

const routes = [
    { path: '/Registro', component: Formulario },
    { path: '/Usuarios', component: Usuarios },
    { path: '/', component: Home }

]

const router = new VueRouter({
    routes // short for `routes: routes`
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')