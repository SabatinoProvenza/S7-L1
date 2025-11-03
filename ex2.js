class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  ownerCheck(altroPet) {
    return this.ownerName === altroPet.ownerName
  }
}

const form = document.getElementById("pet-form")
const petList = document.getElementById("pet-list")

form.addEventListener("submit", function (event) {
  event.preventDefault()

  const petName = document.getElementById("petName").value
  const ownerName = document.getElementById("ownerName").value
  const species = document.getElementById("species").value
  const breed = document.getElementById("breed").value

  const nuovoPet = new Pet(petName, ownerName, species, breed)

  const li = document.createElement("li")
  li.innerText = `${petName} (${species}, ${breed}) - proprietario: ${ownerName}`
  petList.appendChild(li)
})
