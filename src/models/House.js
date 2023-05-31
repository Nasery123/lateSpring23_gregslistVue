import { Profile } from "./Account.js"

export class House {
    constructor(data) {
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.description = data.description
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.year = data.year
        this.creator = new Profile(data.creator)


    }
}
