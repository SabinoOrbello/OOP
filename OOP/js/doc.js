class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  saluta() {
    console.log(
      "ciao, sono " + this.firstName + "" + this.lastName + " ho" + this.age + "anni" + " e vengo da " + this.location
    );
  }
  static controlloEta(personaA, personaB) {
    return personaB.age < personaA.age
      ? personaB.lastName + " è più giovane di " + personaA.lastName
      : personaA.lastName + " è più giovane " + personaB.lastName;
  }
}
var personaX = new User(" Sabino ", " Orbello ", " 140 ", " Canosa di Puglia ");
var personaY = new User("Giovanni ", "Muciaccia ", " 120 ", "Gravina");
personaX.saluta();
personaY.saluta();

console.log(User.controlloEta(personaX, personaY));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  hasSameOwner(pet) {
    return this.ownerName === pet.ownerName;
  }
}

window.onload = function () {
  let form = document.getElementById("petForm");
  form.addEventListener("submit", handleSubmit);
};

const handleSubmit = function (e) {
  e.preventDefault();

  let petName = document.getElementById("petName").value;
  let ownerName = document.getElementById("ownerName").value;
  let species = document.getElementById("species").value;
  let breed = document.getElementById("breed").value;

  let pet = new Pet(petName, ownerName, species, breed);

  let petList = document.getElementById("petList");
  let listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(listItem);

  document.getElementById("petName").value = "";
  document.getElementById("ownerName").value = "";
  document.getElementById("species").value = "";
  document.getElementById("breed").value = "";
};
