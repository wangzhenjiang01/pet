<template>
    <div class="com-app-box">
        <!--<com-header :commData = "commConf" ></com-header>-->
        <comHeader :commData="commConf"></comHeader>
        <div class="com-app">
             <transition :name="transitionName">
                  <router-view class="child-view"></router-view>
             </transition>
        </div>
        <com-footer v-show="commConf.isFooter"></com-footer>
        <com-calendar v-bind:style="calendarState"></com-calendar>
        <com-loading v-if="loading"></com-loading>
        <div v-show="mark" class="mark" @touchmove.stop.prevent ="" @touchstart.stop.prevent =""  @touchend.stop.prevent =""></div>
    </div>
</template>
<script>
    import Header from './components/header';
    import Footer from './components/footer';
    import Index from './page/index';
    import calendar from './components/calendar.vue';
    import loading from './components/loading.vue';
    require('./css/app.scss');
    require('./css/style.scss');
    export default{
        data:function(){
                return {
                transitionName: 'slide-left'
            }
        },
        created:function(){
            log(this.$route);
            if(this.$route.name==undefined){
                this.$router.push('index');
                //this.$router.push('home');
            }
            this.$store.commit('COMM_CONF',{isFooter:true});
        },
        watch:{
            //监听路由的路径，可以通过不同的路径去选择不同的切换效果  https://www.cnblogs.com/yzyh/p/7298038.html
            '$route' (to, from) {
                log(to);
                log(from);
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                log(to.path.split('/'));
                //log(toDepth);
                log(from.path.split('/'));
                //log(fromDepth);
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        computed:{
            commConf:function () {
                log(this.$store.getters.commConf);
                return this.$store.getters.commConf
            },
            mark:function () {
                return this.$store.getters.markStatus
            },
            //calendarState:function(){
            calendarState(){
                return this.$store.getters.getCalendarStatus?{display:'block'}:{display:'none'};
            },
            loading:function () {
                return this.$store.getters.loading
            }
        },
        components:{
            comHeader:Header,     //驼峰法
            comFooter:Footer,
            comCalendar:calendar,
            comLoading:loading,
            comIndex:Index
        }
    }
</script>
<style>
    body{
        background-color:#fff;
    }
</style>