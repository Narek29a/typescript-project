const obj = {
    property1: "value1",
};
console.log(obj)
const newObj = Object.create(obj);

console.log(newObj.property1); // "value1", inherited from the prototype (obj)

// You can add properties to the new object without affecting the prototype object
newObj.property2 = "value2";

console.log(newObj.property2); // "value2"
console.log(obj.property2);    // undefined, as it's not a property of the prototype (obj)
