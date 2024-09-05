const myObject = {
    [Symbol('property1')]: 'value1',
    [Symbol('property2')]: 'value2',
    [Symbol.iterator]: function* () {
        yield 'value1';
        yield 'value2';
    }
};
for (const value of myObject) {
    console.log(value);
}
