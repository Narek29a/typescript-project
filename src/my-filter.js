Array.prototype.myFilter = function (callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray;
};
