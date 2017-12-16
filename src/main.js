import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入根组件
import AppComponent from './component/App.vue';
import routerConfig from "./router";

new Vue({
    el: '.app',
    render: c => c(AppComponent),
    router:new VueRouter(routerConfig)
});
