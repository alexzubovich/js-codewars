// Give you a function animal, accept 1 parameter:obj like this:
//
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
//
// "This white dog has 4 legs."
//
// https://www.codewars.com/kata/571f1eb77e8954a812000837

animalsObj = {name:"dog",legs:4,color:"white"}

function animal(obj) {
    const animalName = obj.name;
    const animalLegs = obj.legs;
    const animalColor = obj.color;

    return `This ${animalColor} ${animalName} has ${animalLegs} legs.`;
}

console.log(animal(animalsObj));q