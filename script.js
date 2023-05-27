//TIME TO PRACTICE JAVASCRIPT... 

//STARTING WITH OBJECTS AND OOP JS. :)
var Car = function(make, model, year, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
}


const myCar = new Car("Buick", "Sabre", "2022", "30,000");
console.log(myCar);
//This will output... 
// Car {
//     make: "Buick",
//     model: "Sabre",
//     year: "2022",
//     price: "30,000",
// }
let arrOfElements = []
// IF we wanted the user to deal with this we could pass the value of the input into the parameters like so... 
let userMakeInput = document.getElementById('inputMakeText');
let userModelInput = document.getElementById('inputModelText');
let userYearInput = document.getElementById('inputYearText');
let userPriceInput = document.getElementById('inputPriceText');

arrOfElements.push(userYearInput, userMakeInput, userPriceInput, userModelInput);

arrOfElements.forEach(element => {
    element.addEventListener('keydown', (event) => {
        if (event.key == "Enter") {
            makeNewCar();
        }
    });
})

function makeNewCar() {
    const theCar = new Car(userMakeInput.value, userModelInput.value, userYearInput.value, userPriceInput.value,) 
    console.log(theCar)
    //what if we wanted to switch out these values??? Like the property becoming the values? 
    let reverseCar = {}
    Object.keys(theCar).forEach(key => {
        var vKey = theCar[key]
        reverseCar[vKey] = key
    })
    console.log("reversed car obj", reverseCar)
}


//other ways to make an object... 

const pet = new Object();

pet.type = "dog";
pet.name = "fido";

console.log("what about pet?", pet)
