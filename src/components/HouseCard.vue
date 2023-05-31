<template>

<div class="rounded elevation-5" v-if="houseProp">
    <!-- <router-link :to="{name:}"></router-link> -->
    <img class="img-fluid rounded-top" :src="houseProp?.imgUrl">
    <div class="py-2">
        <p>{{ houseProp?.bedrooms }}</p>
        <p>{{ houseProp?.bathrooms  }}</p>
        <p>{{ houseProp?.price  }}</p>
        <p>{{ houseProp?.levels }}</p>
        <p>{{ houseProp?.year  }}</p>
        <img src="houseProp?.creator.picture" alt="">
    </div>
</div>

</template>


<script>
import { House } from '../models/House.js';



export default {
    props:{
        houseProp: { type: House, required:true}
    },
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>

</style>
