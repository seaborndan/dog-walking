import { getWalker } from "./database.js"
import { getCities } from "./database.js"
const cities = getCities()


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}
