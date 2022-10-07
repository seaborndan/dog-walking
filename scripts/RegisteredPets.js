import { getPets, getWalker } from "./database.js"

const pets = getPets();
const walkers = getWalker();

document.addEventListener(
    "click",
    (clickEvent) => {

        // html element that was clicked
        const itemClicked = clickEvent.target;


        //checking if html element clicked has an id that starts with pet
        if(itemClicked.id.startsWith("pet")) {
            const [,petPrimaryKey] = itemClicked.id.split("--")
            let matchingPet = null;
            for(const pet of pets) {
                if(pet.id === parseInt(petPrimaryKey)) {
                    matchingPet = pet;
                }
            }

            let matchingWalker = null;
            for(const walker of walkers) {
                if(matchingPet.walkerId === walker.id) {
                    matchingWalker = walker;
                }
            }

            window.alert(`${matchingPet.name} is being walked by ${matchingWalker.name}`);
        }
    }
)


export const RegisteredPets = () => {
    let petHTML = "<ul>"
    let petKey = 1;
    for (const pet of pets) {
        petHTML += `<li id="pet--${petKey}">${pet.name}</li>`
        petKey++;
    }

    petHTML += "</ul>"

    return petHTML
}

