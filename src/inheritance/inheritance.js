class A {
    propertyA = "asdasdasd";

    functionA() {
    }
}

class B extends A {
    propertyB = "NASDAQ";
}

class C extends B {
    name;

    getName() {
    }
}

C.prototype.www = 'asd';
console.log(new C())

window.addEventListener('load', () => {
    const element2 = document.getElementById('2');

    element2.addEventListener('click', () => {
        console.log(this)
    });
});
