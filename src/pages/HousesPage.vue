<template>
    <div class="container-fluid">
        <section class="row p-3 justify-content-end">
            <button class="col-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#create-House">Create House 🏠</button>
        </section>
         <section class="row">
            <div class="col-md-3 my-3" v-for="house in houses" :key="house.id">
            <HouseCard :houseProp="house"/>
            </div>
        </section>
    </div>


</template>


<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue';
import { housesService } from '../services/HousesService.js'

export default {
    components:{ HouseCard },
    setup(){

        async function getHouses(){
            try {

                await housesService.getHouses()
            } catch (error) {
                Pop.error(error)
                logger.log(error)
            }
        }
        onMounted(() => {
            getHouses()
        })


        return {
            houses: computed(() => AppState.houses)
        }
    }
}
</script>


<style>

</style>
