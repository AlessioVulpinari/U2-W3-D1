const form = document.getElementById("myForm")
const petNameInput = document.getElementById("petName")
const ownerNameInput = document.getElementById("ownerName")
const speciesInput = document.getElementById("species")
const breedInput = document.getElementById("breed")
const inputs = [petNameInput, ownerNameInput, speciesInput, breedInput]
let pets = []

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  static confontAge(user1, user2) {
    if (user1.age > user2.age) {
      return user1.firstName + " è più vecchio di " + user2.firstName
    } else if (user1.age === user2.age) {
      return user1.firstName + " e " + user2.firstName + " hanno la stessa età."
    } else {
      return user2.firstName + " è più vecchio di " + user1.firstName
    }
  }
}

const alessioVulpinari = new User("Alessio", "Vulpinari", 24, "Rimini")
const cristianMartucci = new User("Christian", "Martucci", 24, "Reggio Emilia")
const alessandroVulpinari = new User("Alessandro", "Vulpinari", "32", "Rimini")

console.log(User.confontAge(alessioVulpinari, cristianMartucci))
console.log(User.confontAge(alessioVulpinari, alessandroVulpinari))
console.log(User.confontAge(alessandroVulpinari, cristianMartucci))

class Pet {
  constructor(petName, ownerName, species = "", breed = "") {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  static confrontOwners(animal1, animal2) {
    return animal1.ownerName === animal2.ownerName
  }
}

const handleBtn = function (e) {
  e.preventDefault()
  const petName = petNameInput.value
  const owner = ownerNameInput.value
  const species = speciesInput.value
  const breed = breedInput.value

  handleReset()

  const pet = new Pet(petName, owner, species, breed)
  handlePets(pet)
  pets.push(pet)
}

const handleReset = function () {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ""
  }
}

const handlePets = function (pet) {
  const petList = document.getElementById("petList")
  petList.value += `${pet.petName} ${pet.ownerName} ${pet.species} ${pet.breed} \n`
}

form.addEventListener("submit", handleBtn)
