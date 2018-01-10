<template>
    <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list">{{ item }}</li>
    </ul>
</template>
<script>
    import { InfiniteScroll } from 'mint-ui';

    export default {
        data:function () {
            return {
                loading:false,
                list:[]
            }
        },
        methods:{
            loadMore(){
                this.loading = true;
                setTimeout(() => {
                    let last = this.list[this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                        this.list.push(last + i);
                    }
                    this.loading = false;
                }, 2000);
            }
        }
    }
</script>