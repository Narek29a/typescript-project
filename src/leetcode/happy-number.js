function isHappy(n) {
    if (n === 1)
        return true;
    //if(n.toString().length === 1) return false;
    var strN = n.toString();
    var finalNumber = strN
        .split('')
        .map(function (item) { return +item * +item; })
        .reduce(function (a, b) { return a + b; });
    console.log(finalNumber);
    if (finalNumber !== 1) {
        isHappy(finalNumber);
    }
    return true;
}
console.log(Array(new Set([5, 9, 8, 5])));
