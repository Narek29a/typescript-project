var Cat = /** @class */ (function () {
    function Cat() {
        this.xxx = 'asdjjak';
        this.species = 'cat';
    }
    Cat.prototype.meow = function () {
        console.log('Meow');
    };
    return Cat;
}());
function petIsCat(pet) {
    return pet.species === 'cat';
}
function petIsCatBoolean(pet) {
    return pet.species === 'cat';
}
var p = new Cat();
p.meow(); // ERROR: Property 'meow' does not exist on type 'Pet'.
if (petIsCat(p)) {
    p.meow(); // now compiler knows for sure that the variable is of type Cat and it has meow method
}
if (petIsCatBoolean(p)) {
    p.meow(); // ERROR: Property 'meow' does not exist on type 'Pet'.
}
