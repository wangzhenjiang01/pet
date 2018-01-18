/**
 * Created by wangzhenjiang 2016/10/28.
 */
import Vue from 'vue';
import VueRouter from 'vueRouter';
import App from '../app';
import Index from '../page/index';
import Friend from '../page/friend';
import Home from '../page/home';
import Article from '../page/article';
import HomeUserInfo from '../page/homeUserInfo';
import MyPet from '../page/myPet';
import AddPet from '../page/addPet';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: App,
        children: [
            { path: '/index', name:'index', component: Index },

            { path: '/friend', name:'friend', component: Friend },

            { path: '/home', name:'home1', component: Home},

            { path: '/HomeUserInfo/:uid', name:'homeUserInfo1', component: HomeUserInfo },

            { path:'/article/:id/:uuid', name:'article', component : Article},

            { path:'/home/mypet',name:'myPet',component:MyPet},

            { path:'/home/mypet/addpet',name:'addPet',component:AddPet},
        ]
    }
];

const router = new VueRouter({
    mode:'history',             //这样url就没有/#/XXX,而是常见的url形式
    //mode:'hash',
    routes:routes,              //short for routes: routes
    linkActiveClass:'active',   //router-link的选中状态的class，也有一个默认的值
    //history:true
});

export default router