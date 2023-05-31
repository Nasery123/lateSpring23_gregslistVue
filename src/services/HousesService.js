import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        logger.log('[HERE IS THE HOUSES', res.data)
        AppState.houses = res.data.map(h => new House(h))
    }
    async createHouse(formData) {
        
        const res = await api.post('api/houses', formData)
        logger.log('[HERE IS CARE YOU CREATED', res.data)
        AppState.houses.unshift(new House(res.data))
    }

}
export const housesService = new HousesService()
