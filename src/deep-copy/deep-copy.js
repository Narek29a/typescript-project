class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting the ${this.make} ${this.model}`);
    }
}

const originalCar = new Car("Toyota", "Camry");
const copiedCar = JSON.parse(JSON.stringify(originalCar));

console.log(originalCar); // Original object with methods
console.log(copiedCar);   // Copied object without methods

// Attempt to call a method on the copied object
// This will result in an error because methods are not copied
copiedCar.start(); // Error: copiedCar.start is not a function
