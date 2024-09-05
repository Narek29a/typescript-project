function flipAndInvertImage(image) {
    var resultArray = [];
    image.forEach(function (array) {
        var reversedArray = [];
        for (var i = array.length - 1; i >= 0; i--) {
            reversedArray.push(array[i]);
        }
        resultArray.push(reversedArray);
    });
    resultArray.forEach(function (array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                array[i] = 1;
            }
            else {
                array[i] = 0;
            }
        }
    });
    return resultArray;
}
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
