function fff(num) {
    console.log(this);
    console.log(num);
}

const obj = {
    functionKey: fff
};


//1. obj.functionKey(5); // this - obj

// 2. fff(5); // this - window

// 3. fff.call(obj, 5); // this - obj
// 4. fff.apply(obj, [5]); // this - obj

// 5. const bindFunc = fff.bind(obj); // this - obj
// bindFunc(5)

// 6. const newFunc = new fff(6); // this - {}

// ex 1.

const a = {
    name: 'Joe',
    foo: function (f) {
        f(); // this - global object: window
    },
}

a.foo(function () {
    console.log(this);
});
