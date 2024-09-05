function addDigits(num) {
    if (num === 0)
        return 0;
    if (String(num).length === 1)
        return num;
    var numAsArrayOfDigits = String(num).split('').map(function (item) { return Number(item); });
    var sum = 0;
    numAsArrayOfDigits.forEach(function (num) {
        sum += num;
    });
    return addDigits(sum);
}
console.log(addDigits(38));
