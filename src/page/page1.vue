<template>
    <div>
        <div>
            <p>{{data}}</p>
            <p>{{reversedMessage}}</p>
            <p @click="change">点击{{count}}</p>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
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
        methods:{
            change(){
                alert('哈哈');
            }
        }
    }
</script>