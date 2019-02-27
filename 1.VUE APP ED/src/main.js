// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'
//Register the Vue Router
Vue.use(VueRouter);
const routes = [
    {
        path: '/', component: Posts
    },
    {
        path: '/contact', component: Contact
    }
];
//pass routes to the route property
const router = new VueRouter({routes: routes});

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
