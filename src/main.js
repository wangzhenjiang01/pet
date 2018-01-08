import Vue from 'vue';

import router from './router/router';
import store from './store/store';
import mock from './server/mock';

Vue.config.debug = true;
window.log = console.log;

//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能：
// VueResource官方不再维护，所以使用axios
// Vue.use(VueResource);
let data = {
    router, //路由
    store   //vuex 状态管理  集中式存储管理应用的所有组件的状态
}
//当Vue实例没有el属性时，则该实例尚没有挂载到某个dom中；
//假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载。例如：http://blog.csdn.net/longzhoufeng/article/details/69377996
const app = new Vue(data).$mount('#app');  //$mount()手动挂载
// app.$set(data,'c',123);
// log(data);


