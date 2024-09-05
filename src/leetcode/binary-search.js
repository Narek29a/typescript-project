function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if (array[middle] === target) {
            return array[middle];
        }

        if (target < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1
        }
    }

    return -1;

}


console.log(binarySearch([1, 7, 9, 15, 22, 33, 35], 33));
