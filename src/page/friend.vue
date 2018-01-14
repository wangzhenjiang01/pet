<template>
    <div>
        <div>
            <!--<p>{{data}}</p>-->
            <!--<p>{{reversedMessage}}</p>-->
            <!--<p @click="change">点击{{count}}</p>-->
            <com-infiniteScroll></com-infiniteScroll>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import infiniteScroll from '../components/infiniteScroll.vue';
    let data = {
        data:'paaSdSdcZcxxxzXcZcge1',
        count:0
    }
    export default{
        data:function(){
            return data
        },
        computed:{
            //reversedMessage:function(){
            reversedMessage(){
                return this.data.split('').reverse().join('')
            }
        },
        components:{
            comInfiniteScroll:infiniteScroll,
        },
        methods:{
            change(){
                alert('哈哈');
            }
        }
    }
</script>