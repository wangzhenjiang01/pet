<template>
    <div class="footer" >
        <div>
            <router-link to="/index">
                <span class="icon-shouye iconfont"></span>
                <p>首页</p>
            </router-link>
            <router-link to="/friend">
                <span class="icon-xitongcaidan iconfont"></span>
                <p>朋友圈</p>
            </router-link>
            <router-link to="/home">
                <span class="icon-myline iconfont"></span>
                <p>个人中心</p>
            </router-link>
        </div>
    </div>
</template>
<script>
    require('../css/footer.scss');
    export default{
         data:function(){
            return{

            }
        }
    }
</script>