class Person {
    name = 'asd'
    email = '@@'

    personMethod() {

    }
}
class User extends Person{
    color = 'white';
    userMethod() {

    }
}

User.prototype.gbmbk = 'asjdhjas';

function Car() {
    this.x = 5;
    this.y = 7;
    this.fff = function () {};
}


function Acura() {
    this.engineType = "Acura Engine";
}

Acura.prototype = Object.create(Car.prototype)

var user = new User();
console.log('user',user)
var car = new Car();
var acura = new Acura();
console.log('acura',acura)
