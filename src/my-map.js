Array.prototype.myMap = function (callback) {
    let resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(this[i], i, this);
    }
    return resultArray;
};


const array = [
    {email: 'qweqezxc'},
    {email: 'qweqezxc'},
    {email: 'qweqezxc'}
]
const strings = array.myMap((item) => {
    return item.email;
});

console.log(strings)
