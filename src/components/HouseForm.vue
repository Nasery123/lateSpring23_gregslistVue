<template>

<div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Create House</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form @submit="submitHouseForm()">
            <div class="modal-body" name="modal-body">
                <div class="mb-3">
                    <label for="make" class="form-label">bedrooms</label>
                    <input type="number" v-model="editable.bedrooms" required class="form-control" id="bedrooms">
                </div>
                <div class="mb-3">
                    <label for="bathrooms" class="form-label">bathrooms</label>
                    <input type="text" v-model="editable.bathrooms" required class="form-control" id="bathrooms">
                </div>
                <div class="mb-3">
                    <label for="year" class="form-label">Year</label>
                    <input type="number" v-model="editable.year" min="1980" required class="form-control" id="year">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="number" v-model="editable.price" min="5" required class="form-control" id="price">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" v-model="editable.description" required class="form-control" id="description">
                </div>
                <div class="mb-3">
                    <label for="imgUrl" class="form-label">ImgUrl</label>
                    <input type="url" v-model="editable.imgUrl" required class="form-control" id="imgUrl">
                </div>
                <!-- <div class="mb-3">
                    <label for="levels" class="form-label">levels</label>
                    <input type="number" v-model="editable.levels" required class="form-control" id="levels">
                </div> -->
                <!-- Note can use it for levels later not now -->
                <select v-model="editable.levels" required class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"> levels
                    <option v-for="levels in levels" :key="levels" :value="levels">{{ levels }}
                    </option>
                </select>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create House</button>
            </div>
        </form>

    </div>

</template>


<script>
import { Modal } from 'bootstrap';
import { housesService } from '../services/HousesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { ref } from 'vue';

export default {
    setup(){

        const editable = ref({})
        return {
            editable,
            levels:[
                '1',
                '2',
                '3,'
            ],

            async submitHouseForm(){
                try {
                    
                    logger.log('[SUBMITTING HOUSE FORM]')

                    const formData = editable.value
                    window.event.preventDefault()
                    await housesService.createHouse(formData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#create-House').hide()

                } catch (error) {
                    Pop.error(error)
                    logger.log(error)
                }
            }
        }
    }
}
</script>


<style>

</style>
