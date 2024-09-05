const originalObject = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
    },
};

const shallowCopy = { ...originalObject };

console.log(originalObject); // Original object
console.log(shallowCopy);   // Shallow copied object

shallowCopy.name = "Jane";
// Modify the shallowCopy to demonstrate that nested objects are shared
shallowCopy.address.city = "Los Angeles";

console.log(originalObject); // Original object is affected by the nested object change
console.log(shallowCopy);   // Shallow copied object reflects the change
