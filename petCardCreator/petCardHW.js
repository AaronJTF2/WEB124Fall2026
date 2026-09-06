"use strict";

// Aaron Cole
// 9/6/2026

function Pet(name, type, age, owner, petID, image) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.owner = owner;
    this.petID = petID;
    this.image = image;
};

Pet.prototype.getDescription = function () {
    return this.name + " is a " + this.type + " and is " + this.age + " years old.";
};

Pet.prototype.haveBirthday = function () {
    this.age++;
};

Pet.prototype.getOwnerName = function () {
    return this.owner?.name ?? "none";
};

Pet.prototype.getOwnerPhone = function () {
    return this.owner?.phone ?? "No Phone on File";
};

Pet.prototype.getID = function () {
    return this.petID;
};


// Owners

const owner1 = {
    name: "John Smith",
    phone: "913-555-0000"
};

const owner2 = {
    name: "Joanna Jones",
    phone: "913-555-0001"
};


// Pets

const pet1 = new Pet(
    "Stanley",
    "cat",
    6,
    owner1,
    "PET001",
    "media/cat.webp"
);

const pet2 = new Pet(
    "Buddy",
    "dog",
    4,
    owner2,
    "PET002",
    "media/dog.webp"
);

const pet3 = new Pet(
    "Brandi",
    "dog",
    12,
    null,
    "PET003",
    "media/dog.webp"
);


const pets = [
    pet1,
    pet2,
    pet3
];


pets.forEach(function (pet) {

    console.log("Name: " + pet.name);
    console.log("Type: " + pet.type);
    console.log("Age: " + pet.age);
    console.log("Owner: " + pet.getOwnerName());
    console.log("Owner Phone: " + pet.getOwnerPhone());
    console.log("Pet ID: " + pet.petID);

});

function displayPet(pet) {
    document.getElementById("PetImage").src = pet.image;
    document.getElementById("petName").textContent = pet.name;
    document.getElementById("petDescription").textContent = pet.getDescription();
    document.getElementById("petOwner").textContent = pet.getOwnerName();
    document.getElementById("petPhone").textContent = pet.getOwnerPhone();
    document.getElementById("petID").textContent = pet.getID();
}


let currentPet = 0;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", function () {
    currentPet = currentPet + 1;
    if (currentPet >= pets.length) {
    currentPet = 0;}
    displayPet(pets[currentPet])
});

prevButton.addEventListener("click", function () {
    currentPet = currentPet - 1;
    if (currentPet < 0) {
    currentPet = pets.length - 1;}
    displayPet(pets[currentPet])

});

displayPet(pets[0]);


pet1.haveBirthday();

console.log("After birthday:");
console.log(pet1.getDescription());


const today = new Date();

console.log(today);
